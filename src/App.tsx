import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ModuleGrid } from './components/ModuleGrid';
import { InquiryBasket } from './components/InquiryBasket';
import { QuestionForm } from './components/QuestionForm';
import { SharedUsersForm } from './components/SharedUsersForm';
import { modules } from './data/modules';
import { Module, ModuleSelection } from './types';
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
  const [expandedAnswers, setExpandedAnswers] = useState<Record<number, boolean>>({});

  const { selectedModules, addModule, removeModule } = useModuleStore();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const stepParam = params.get('step');
    if (stepParam && ['selection', 'questions', 'review'].includes(stepParam)) {
      setStep(stepParam as 'selection' | 'questions' | 'review');
      
      // Initialize moduleSelections if we're moving to questions step
      if (stepParam === 'questions' && selectedModules.length > 0) {
        const initialSelections = selectedModules.map(module => ({
          moduleId: module.id,
          users: 0,
          answers: {},
          sharedUsers: []
        }));
        setModuleSelections(initialSelections);
        setCurrentModuleIndex(0);
      }
    }
  }, [location.search, selectedModules]);

  useEffect(() => {
    if (step === 'questions' && selectedModules.length > 0 && moduleSelections.length === 0) {
      const initialSelections = selectedModules.map(module => ({
        moduleId: module.id,
        users: 0,
        answers: {},
        sharedUsers: []
      }));
      setModuleSelections(initialSelections);
      setCurrentModuleIndex(0);
    }
  }, [step, selectedModules, moduleSelections.length]);

  useEffect(() => {
    if (step === 'review') {
      window.scrollTo(0, 0);
    }
  }, [step]);

  useEffect(() => {
    if (currentModuleIndex > 0) {
      window.scrollTo(0, 0);
    }
  }, [currentModuleIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

  const handleAnswer = (questionId: string, answer: { response: string; count?: number }) => {
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
    window.scrollTo(0, 0);
  };

  const toggleAnswers = (moduleId: number) => {
    setExpandedAnswers(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const currentModule = selectedModules[currentModuleIndex];
  const currentSelection = moduleSelections[currentModuleIndex];

  const areAllQuestionsAnswered = () => {
    if (!currentModule || !currentSelection || !currentSelection.answers) return false;
    return currentModule.questions.every(question => 
      currentSelection.answers && currentSelection.answers[question.id] !== undefined
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
                      window.scrollTo(0, 0);
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
                    value={currentSelection?.answers?.[question.id]}
                    onChange={(answer) => handleAnswer(question.id, answer)}
                  />
                ))}
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    setStep('selection');
                    window.scrollTo(0, 0);
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
                      } else {
                        window.scrollTo(0, 0);
                        setTimeout(() => {
                          setStep('review');
                        }, 50);
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
              {/* Header and Summary Section */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-[#323130] mb-2">
                    Podsumowanie wybranych modułów
                  </h2>
                  <p className="text-[#605e5c] mb-4 lg:mb-8">
                    Sprawdź wybrane moduły i ich konfigurację.
                  </p>
                </div>

                {/* Total Users Summary Card */}
                <div className="w-full lg:w-auto lg:min-w-[300px] bg-white rounded-xl shadow-lg p-4 lg:p-6 flex-shrink-0">
                  <h3 className="text-lg lg:text-xl font-semibold text-[#323130] mb-3 lg:mb-4">Łączna liczba użytkowników</h3>
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                    <div>
                      <p className="text-sm text-[#605e5c] mb-1">Wszyscy użytkownicy</p>
                      <p className="text-2xl lg:text-3xl font-semibold text-[#323130]">
                        {moduleSelections.reduce((total, selection) => total + selection.users, 0)}
                      </p>
                    </div>
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0078d4] rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modules Grid */}
              <div className={`grid gap-4 lg:gap-8 mx-auto w-full ${
                moduleSelections.length === 1 
                  ? 'max-w-3xl' 
                  : moduleSelections.length === 2 
                    ? 'max-w-5xl grid-cols-1 lg:grid-cols-2' 
                    : 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
              }`}>
                {moduleSelections.map((selection) => {
                  const module = modules.find(m => m.id === selection.moduleId);
                  if (!module) return null;

                  return (
                    <div key={selection.moduleId} className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col ${
                      moduleSelections.length === 1 ? 'max-w-3xl mx-auto w-full' : ''
                    }`}>
                      {/* Header */}
                      <div className="bg-gradient-to-r from-[#0078d4] to-[#106ebe] p-4 lg:p-6 min-h-[90px] lg:min-h-[120px] flex items-center">
                        <div className="flex items-start gap-3 lg:gap-4 w-full">
                          {module.imageUrl && (
                            <img
                              src={module.imageUrl}
                              alt={module.name}
                              className="w-10 h-10 lg:w-12 lg:h-12 object-contain bg-white rounded-lg p-2 flex-shrink-0"
                            />
                          )}
                          <h3 className="text-xl lg:text-2xl font-semibold text-white leading-tight">{module.name}</h3>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 lg:p-6 space-y-6 lg:space-y-8 flex-1 flex flex-col">
                        {/* Users Section */}
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-[#605e5c] mb-1">Liczba użytkowników</p>
                              <p className="text-2xl lg:text-3xl font-semibold text-[#323130]">{selection.users}</p>
                            </div>
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0078d4] rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        {/* Shared Users Section */}
                        {Array.isArray(selection.sharedUsers) && selection.sharedUsers.length > 0 && (
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="text-base font-medium text-[#323130] mb-3">Użytkownicy współdzieleni</h4>
                            <div className="space-y-2">
                              {selection.sharedUsers.map(shared => {
                                const targetModule = modules.find(m => m.id === shared.targetModuleId);
                                return (
                                  <div key={shared.targetModuleId} className="flex items-center gap-3 text-sm text-[#605e5c]">
                                    <div className="w-2 h-2 rounded-full bg-[#0078d4]" />
                                    <span>
                                      {shared.count} {shared.count === 1 ? 'użytkownik korzysta również z' : 'użytkowników korzysta również z'} {targetModule?.name}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Answers Section */}
                        <div className="space-y-4 mt-auto">
                          <button
                            onClick={() => toggleAnswers(selection.moduleId)}
                            className="w-full flex items-center justify-between bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <h4 className="text-base font-medium text-[#323130]">Odpowiedzi</h4>
                              <span className="text-sm text-[#605e5c]">
                                ({module.questions.length} {module.questions.length === 1 ? 'pytanie' : 'pytań'})
                              </span>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-5 w-5 text-[#323130] transform transition-transform ${
                                expandedAnswers[selection.moduleId] ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          {expandedAnswers[selection.moduleId] && (
                            <div className="grid grid-cols-1 gap-4 animate-fadeIn">
                              {module.questions.map((question) => (
                                <div key={question.id} className="bg-gray-50 rounded-lg p-4">
                                  <p className="text-sm font-medium text-[#323130] mb-2">{question.text}</p>
                                  {selection.answers && selection.answers[question.id] ? (
                                    <div className="space-y-1">
                                      <p className="text-sm text-[#605e5c]">
                                        <span className="font-medium">Odpowiedź:</span> {selection.answers[question.id].response}
                                      </p>
                                      {selection.answers[question.id].count !== undefined && (
                                        <p className="text-sm text-[#605e5c]">
                                          <span className="font-medium">Użytkownicy:</span> {selection.answers[question.id].count}
                                        </p>
                                      )}
                                    </div>
                                  ) : (
                                    <p className="text-sm text-red-500">Brak odpowiedzi</p>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
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
                    window.scrollTo(0, 0);
                  }}
                  className="ms-button-secondary"
                >
                  Wróć do pytań
                </button>
                <button
                  onClick={() => {
                    setIsContactFormOpen(true);
                    window.scrollTo(0, 0);
                  }}
                  className="ms-button-primary"
                >
                  Wyślij zapytanie
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