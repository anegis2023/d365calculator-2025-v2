import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ModuleGrid } from './components/ModuleGrid';
import { InquiryBasket } from './components/InquiryBasket';
import { QuestionForm } from './components/QuestionForm';
import { SharedUsersForm } from './components/SharedUsersForm';
import { modules } from './data/modules';
import { Module, ModuleSelection, Question, QuestionAnswer } from './types';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ContactForm } from './components/ContactForm';
import { scrollToTop } from './utils/scroll';
import AdminPage from './pages/admin';
import KontaktPage from './pages/kontakt';
import { MetaTags } from './components/SEO';
import DynamicsSales from './pages/DynamicsSales';
import DynamicsFinance from './pages/DynamicsFinance';
import DynamicsSupplyChain from './pages/DynamicsSupplyChain';
import DynamicsFieldService from './pages/DynamicsFieldService';
import DynamicsProjectOperations from './pages/DynamicsProjectOperations';
import DynamicsCustomerService from './pages/DynamicsCustomerService';
import DynamicsCustomerInsights from './pages/DynamicsCustomerInsights';
import DynamicsCommerce from './pages/DynamicsCommerce';
import DynamicsHumanResources from './pages/DynamicsHumanResources';
import { useModuleStore } from './store/moduleStore';
import { ModuleBasketProvider } from './context/ModuleBasketContext';
import Footer from './components/Footer';

function MainApp() {
  const [step, setStep] = useState<'selection' | 'questions' | 'review'>('selection');
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [moduleSelections, setModuleSelections] = useState<ModuleSelection[]>([]);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const { selectedModules, addModule, removeModule } = useModuleStore();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const stepParam = params.get('step');
    if (stepParam && ['selection', 'questions', 'review'].includes(stepParam)) {
      setStep(stepParam as 'selection' | 'questions' | 'review');
    }
  }, [location.search]);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, module: Module) => {
    event.dataTransfer.setData('moduleId', module.id.toString());
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const moduleId = parseInt(event.dataTransfer.getData('moduleId') || '0', 10);
    const module = modules.find(m => m.id === moduleId);
    if (module) {
      addModule(module);
    }
  };

  const handleRemoveModule = (moduleId: number) => {
    removeModule(moduleId);
  };

  const handleUsers = (users: number) => {
    setModuleSelections(prev => {
      const newSelections = [...prev];
      newSelections[currentModuleIndex] = {
        ...newSelections[currentModuleIndex],
        users
      };
      return newSelections;
    });
  };

  const handleAnswer = (questionId: string, answer: QuestionAnswer) => {
    setModuleSelections(prev => {
      const newSelections = [...prev];
      newSelections[currentModuleIndex] = {
        ...newSelections[currentModuleIndex],
        answers: {
          ...newSelections[currentModuleIndex].answers,
          [questionId]: answer
        }
      };
      return newSelections;
    });
  };

  const handleSharedUsers = (sharedUsers: { targetModuleId: number; count: number }[]) => {
    setModuleSelections(prev => {
      const newSelections = [...prev];
      newSelections[currentModuleIndex] = {
        ...newSelections[currentModuleIndex],
        sharedUsers
      };
      return newSelections;
    });
  };

  const handleLogoClick = () => {
    setStep('selection');
    setCurrentModuleIndex(0);
    setModuleSelections([]);
    scrollToTop();
  };

  const currentModule = selectedModules[currentModuleIndex];
  const currentSelection = moduleSelections[currentModuleIndex];

  const areAllQuestionsAnswered = () => {
    if (!currentModule || !currentSelection) return false;
    return currentModule.questions.every(question => 
      currentSelection.answers[question.id] !== undefined
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#faf9f8]">
      <Navbar onLogoClick={handleLogoClick} />
      <MetaTags pageData={{ step, selectedModules, currentModule }} />
      <HeroSection />
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <main>
          {step === 'selection' && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-[#323130] mb-2">
                  Przygotuj szczegółową kalkulację dla wybranych aplikacji Dynamics 365.
                </h2>
                <p className="text-[#605e5c]">
                  Wybierz interesujące Cię moduły i dodaj je do koszyka zapytań, aby otrzymać szczegółową kalkulację.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                <div className="flex-1">
                  <ModuleGrid 
                    modules={modules} 
                    onDragStart={handleDragStart}
                    onAddToBasket={addModule}
                    onRemoveFromBasket={(module) => removeModule(module.id)}
                    selectedModules={selectedModules}
                  />
                </div>
                <div className="w-full lg:w-[400px]">
                  <InquiryBasket
                    modules={selectedModules}
                    onRemove={handleRemoveModule}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onContinue={() => {
                      if (selectedModules.length === 0) return;

                      const initialSelections = selectedModules.map(module => ({
                        moduleId: module.id,
                        users: 0,
                        answers: {},
                        sharedUsers: []
                      }));
                      setModuleSelections(initialSelections);
                      setCurrentModuleIndex(0);
                      setStep('questions');
                      scrollToTop();
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 'questions' && currentModule && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-[#323130] mb-2">
                  {currentModule.name}
                </h2>
                <p className="text-[#605e5c]">
                  Odpowiedz na poniższe pytania, abyśmy mogli lepiej poznać Twoje oczekiwania.
                </p>
              </div>

              <SharedUsersForm
                users={currentSelection?.users || 0}
                onUsersChange={handleUsers}
                otherModules={selectedModules.filter(m => m.id !== currentModule.id)}
                sharedUsers={currentSelection?.sharedUsers || []}
                onSharedUsersChange={handleSharedUsers}
              />

              <div className="space-y-6">
                {currentModule.questions.map((question) => (
                  <QuestionForm
                    key={question.id}
                    question={question}
                    moduleUsers={currentSelection?.users || 0}
                    value={currentSelection?.answers[question.id]}
                    onChange={(answer) => handleAnswer(question.id, answer)}
                  />
                ))}
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    setStep('selection');
                    scrollToTop();
                  }}
                  className="ms-button-secondary"
                >
                  Powrót
                </button>
                <div className="flex flex-col items-end">
                  {!areAllQuestionsAnswered() && (
                    <p className="text-sm text-red-600 mb-2">
                      Wszystkie pytania wymagają odpowiedzi
                    </p>
                  )}
                  <button
                    onClick={() => {
                      if (!areAllQuestionsAnswered()) {
                        return;
                      }
                      if (currentModuleIndex < selectedModules.length - 1) {
                        setCurrentModuleIndex(currentModuleIndex + 1);
                        scrollToTop();
                      } else {
                        setStep('review');
                        scrollToTop();
                      }
                    }}
                    disabled={!areAllQuestionsAnswered()}
                    className={`ms-button-primary ${!areAllQuestionsAnswered() ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {currentModuleIndex < selectedModules.length - 1 ? 'Następny moduł' : 'Dalej'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 'review' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-[#323130] mb-2">
                  Podsumowanie wybranych modułów
                </h2>
                <p className="text-[#605e5c]">
                  Sprawdź wybrane moduły i ich konfigurację.
                </p>
              </div>

              <div className="space-y-6">
                {moduleSelections.map((selection) => {
                  const module = modules.find(m => m.id === selection.moduleId);
                  if (!module) return null;

                  return (
                    <div key={selection.moduleId} className="ms-card p-6">
                      <h3 className="text-xl font-semibold text-[#323130] mb-4">{module.name}</h3>
                      <div className="space-y-6">
                        <div>
                          <p className="text-base text-[#323130]">
                            <span className="font-medium">Liczba użytkowników:</span> {selection.users}
                          </p>
                        </div>
                        
                        {selection.sharedUsers.length > 0 && (
                          <div>
                            <p className="text-base font-medium text-[#323130] mb-2">Użytkownicy współdzieleni:</p>
                            <ul className="space-y-2">
                              {selection.sharedUsers.map(shared => {
                                const targetModule = modules.find(m => m.id === shared.targetModuleId);
                                return (
                                  <li key={shared.targetModuleId} className="text-sm text-[#605e5c] flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#0078d4]" />
                                    {shared.count} {shared.count === 1 ? 'użytkownik korzysta również z' : 'użytkowników korzysta również z'} {targetModule?.name}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}

                        <div>
                          <p className="text-base font-medium text-[#323130] mb-2">Odpowiedzi:</p>
                          <div className="space-y-3">
                            {module.questions.map((question) => {
                              const answer = selection.answers[question.id];
                              return (
                                <div key={question.id} className="text-sm">
                                  <p className="text-[#323130] font-medium mb-1">{question.text}</p>
                                  <p className="text-[#605e5c]">
                                    {answer ? (
                                      <>
                                        Odpowiedź: {answer.response}
                                        {answer.count !== undefined && (
                                          <>, Użytkownicy: {answer.count}</>
                                        )}
                                      </>
                                    ) : (
                                      'Brak odpowiedzi'
                                    )}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    setCurrentModuleIndex(selectedModules.length - 1);
                    setStep('questions');
                    scrollToTop();
                  }}
                  className="ms-button-secondary"
                >
                  Powrót do pytań
                </button>
                <button
                  onClick={() => setIsContactFormOpen(true)}
                  className="ms-button-primary"
                >
                  Wyślij
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {isContactFormOpen && (
        <ContactForm
          onClose={() => setIsContactFormOpen(false)}
          moduleSelections={moduleSelections}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ModuleBasketProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <MetaTags />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<MainApp />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/kontakt" element={<KontaktPage />} />
              <Route path="/dynamics-365-sales" element={<DynamicsSales />} />
              <Route path="/dynamics-365-finance" element={<DynamicsFinance />} />
              <Route path="/dynamics-365-supply-chain" element={<DynamicsSupplyChain />} />
              <Route path="/dynamics-365-field-service" element={<DynamicsFieldService />} />
              <Route path="/dynamics-365-project-operations" element={<DynamicsProjectOperations />} />
              <Route path="/dynamics-365-customer-service" element={<DynamicsCustomerService />} />
              <Route path="/dynamics-365-customer-insights" element={<DynamicsCustomerInsights />} />
              <Route path="/dynamics-365-commerce" element={<DynamicsCommerce />} />
              <Route path="/dynamics-365-human-resources" element={<DynamicsHumanResources />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ModuleBasketProvider>
    </Router>
  );
}

export default App;