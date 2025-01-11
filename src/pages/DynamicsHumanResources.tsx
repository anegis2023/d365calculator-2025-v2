import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaUsers, FaChartLine, FaGraduationCap, FaClipboardCheck, FaHandshake, FaUserClock } from 'react-icons/fa';
import { useModuleBasket } from '../context/ModuleBasketContext';
import { modules } from '../data/modules';

const seoData = {
  pageData: {
    title: "Microsoft Dynamics 365 Human Resources | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
    description: "Zoptymalizuj procesy HR i zwiększ zaangażowanie pracowników z Microsoft Dynamics 365 Human Resources. Zarządzaj talentami i buduj kulturę organizacyjną opartą na rozwoju.",
    ogType: 'website'
  },
  customSchema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Microsoft Dynamics 365 Human Resources",
    "description": "Zoptymalizuj procesy HR i zwiększ zaangażowanie pracowników z Microsoft Dynamics 365 Human Resources. Zarządzaj talentami i buduj kulturę organizacyjną opartą na rozwoju.",
    "url": "https://dynamics365.com.pl/dynamics-365-human-resources",
    "publisher": {
      "@type": "Organization",
      "name": "ANEGIS",
      "url": "https://dynamics365.com.pl"
    }
  }
};

// Tab component
const Tab: React.FC<{ 
  label: string; 
  isActive: boolean; 
  onClick: () => void;
}> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 font-medium ${
      isActive
        ? 'border-b-2 border-[#107c10] text-[#107c10]'
        : 'text-gray-500'
    }`}
  >
    {label}
  </button>
);

// Feature component
const Feature: React.FC<{
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
}> = ({ icon, number, title, description }) => (
  <div className="group bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
    <div className="flex items-start gap-4">
      <div className="text-[#107c10] text-3xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
          {number}. {title}
        </h3>
        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default function DynamicsHumanResources() {
  const [activeTab, setActiveTab] = useState('overview');
  const { selectedModules, addModule } = useModuleBasket();
  const hasModules = selectedModules.length > 0;
  
  const isModuleInBasket = selectedModules.some(module => module.id === 3);

  const handleAddToBasket = () => {
    if (!isModuleInBasket) {
      const hrModule = modules.find(m => m.id === 3);
      if (hrModule) {
        addModule(hrModule);
      }
    }
  };

  const features = [
    {
      icon: <FaUsers />,
      title: "Zarządzanie pracownikami",
      description: "Kompleksowe zarządzanie danymi pracowników, onboardingiem i offboardingiem. Automatyzacja procesów kadrowych."
    },
    {
      icon: <FaGraduationCap />,
      title: "Rozwój talentów",
      description: "Planowanie ścieżek kariery, zarządzanie szkoleniami i kompetencjami. Identyfikacja i rozwój kluczowych talentów."
    },
    {
      icon: <FaChartLine />,
      title: "Analityka HR",
      description: "Zaawansowane raporty i analizy kadrowe. Monitorowanie wskaźników HR i trendów w organizacji."
    },
    {
      icon: <FaHandshake />,
      title: "Employee Experience",
      description: "Narzędzia do zwiększania zaangażowania pracowników. Portale samoobsługowe i komunikacja wewnętrzna."
    },
    {
      icon: <FaClipboardCheck />,
      title: "Zarządzanie świadczeniami",
      description: "Kompleksowa obsługa benefitów pracowniczych. Automatyzacja procesów administracyjnych."
    },
    {
      icon: <FaUserClock />,
      title: "Zarządzanie czasem",
      description: "Planowanie czasu pracy, urlopy, nieobecności. Integracja z systemem płacowym."
    }
  ];

  const faqData = [
    {
      question: "Czym jest Microsoft Dynamics 365 Human Resources?",
      answer: "Microsoft Dynamics 365 Human Resources to kompleksowe rozwiązanie do zarządzania zasobami ludzkimi, które wspiera wszystkie aspekty HR - od rekrutacji, przez onboarding, rozwój pracowników, po zarządzanie świadczeniami i wynagrodzeniami."
    },
    {
      question: "Jakie są główne funkcje Dynamics 365 Human Resources?",
      answer: "Główne funkcje obejmują: zarządzanie rekrutacją, onboarding pracowników, administrację świadczeniami, zarządzanie wydajnością, planowanie rozwoju, samoobsługę pracowniczą, analitykę HR oraz integrację z systemami płacowymi."
    },
    {
      question: "Jak system wspiera proces rekrutacji?",
      answer: "System oferuje narzędzia do zarządzania całym procesem rekrutacji, w tym publikację ogłoszeń, śledzenie kandydatów, ocenę aplikacji, planowanie rozmów kwalifikacyjnych oraz onboarding nowych pracowników."
    },
    {
      question: "Jakie możliwości samoobsługi oferuje system?",
      answer: "Portal samoobsługowy umożliwia pracownikom zarządzanie swoimi danymi osobowymi, świadczeniami, czasem pracy, urlopami, oraz dostęp do szkoleń i dokumentów HR bez konieczności kontaktu z działem kadr."
    },
    {
      question: "Jak działa analityka HR w systemie?",
      answer: "System dostarcza zaawansowane narzędzia analityczne do monitorowania wskaźników HR, trendów zatrudnienia, rotacji pracowników, kosztów personalnych oraz efektywności programów rozwojowych."
    },
    {
      question: "Czy system wspiera zarządzanie szkoleniami?",
      answer: "Tak, platforma umożliwia planowanie i zarządzanie szkoleniami, śledzenie postępów pracowników, certyfikacji oraz kompetencji, a także oferuje integrację z platformami e-learningowymi."
    },
    {
      question: "Jak wygląda integracja z systemami płacowymi?",
      answer: "Dynamics 365 HR integruje się z popularnymi systemami płacowymi, umożliwiając automatyczne przetwarzanie danych o czasie pracy, nieobecnościach i świadczeniach do naliczania wynagrodzeń."
    },
    {
      question: "Jakie są możliwości raportowania?",
      answer: "System oferuje szeroki zakres predefiniowanych raportów HR oraz możliwość tworzenia własnych zestawień z wykorzystaniem Power BI, co pozwala na szczegółową analizę danych kadrowych."
    },
    {
      question: "Jak system wspiera zgodność z przepisami?",
      answer: "Platforma jest regularnie aktualizowana o najnowsze wymogi prawne i regulacyjne, wspierając zgodność z lokalnymi przepisami prawa pracy i ochrony danych osobowych."
    },
    {
      question: "Czy system działa w chmurze?",
      answer: "Tak, Dynamics 365 HR jest rozwiązaniem chmurowym, co zapewnia dostęp z dowolnego miejsca, automatyczne aktualizacje oraz wysokie bezpieczeństwo danych."
    },
    {
      question: "Jak wygląda proces wdrożenia systemu?",
      answer: "Wdrożenie obejmuje analizę potrzeb, konfigurację systemu, migrację danych, integrację z istniejącymi systemami, szkolenia użytkowników oraz wsparcie techniczne."
    },
    {
      question: "Czy dostępna jest wersja testowa?",
      answer: "Tak, Microsoft oferuje wersję próbną Dynamics 365 Human Resources, która pozwala na przetestowanie funkcjonalności przed podjęciem decyzji o wdrożeniu."
    }
  ];

  return (
    <>
      <MetaTags {...seoData} />
      <Navbar />
      <DynamicsHeroSection
        title="Microsoft Dynamics 365 Human Resources"
        description="Transformuj zarządzanie zasobami ludzkimi, automatyzuj procesy kadrowe i buduj lepsze doświadczenia pracowników dzięki zaawansowanym narzędziom HR."
        backgroundGradient="from-[#071630] via-[#107c10] to-[#00a2ed]"
        onAddToBasket={!isModuleInBasket ? handleAddToBasket : undefined}
      />
      <DynamicsPageLayout>
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8 border-b">
          <Tab
            label="Przegląd"
            isActive={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
          />
          <Tab
            label="Funkcje"
            isActive={activeTab === 'features'}
            onClick={() => setActiveTab('features')}
          />
          <Tab
            label="FAQ"
            isActive={activeTab === 'faq'}
            onClick={() => setActiveTab('faq')}
          />
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="space-y-6">
                <div className={`flex flex-col ${hasModules ? '' : 'lg:flex-row'} gap-8 items-start`}>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <p className="text-lg leading-relaxed">
                      W dzisiejszym dynamicznym środowisku biznesowym, efektywne zarządzanie zasobami ludzkimi staje się kluczowym czynnikiem sukcesu organizacji. Pracownicy oczekują spersonalizowanego podejścia do rozwoju i nowoczesnych narzędzi HR. Microsoft Dynamics 365 Human Resources to kompleksowa platforma, która łączy zaawansowane technologie z najlepszymi praktykami HR, umożliwiając organizacjom budowanie zaangażowanego i efektywnego zespołu.
                    </p>
                  </div>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg min-h-[200px]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full min-h-[200px]"
                        src="https://www.youtube.com/embed/tvwqvk0Qmlc?rel=0&showinfo=0&controls=1&autoplay=0"
                        title="Microsoft Dynamics 365 Human Resources Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Kluczowe wyzwania w zarządzaniu HR</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Przyciąganie i utrzymanie talentów</li>
                  <li>Rozwój i szkolenie pracowników</li>
                  <li>Automatyzacja procesów HR</li>
                  <li>Zarządzanie zaangażowaniem pracowników</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Wyższa efektywność HR</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Automatyzacja procesów zwiększa wydajność działu HR.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Lepsze doświadczenia</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Nowoczesne narzędzia zwiększają satysfakcję pracowników.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Rozwój talentów</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Efektywne zarządzanie rozwojem i karierą pracowników.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Lepsze decyzje</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Podejmowanie decyzji w oparciu o dane HR.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#008272] text-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#006e60] cursor-pointer group">
                  <h2 className="text-2xl font-bold mb-4 transform transition-transform duration-500 group-hover:translate-x-2">Dlaczego warto wybrać Dynamics 365 Human Resources?</h2>
                  <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Microsoft Dynamics 365 Human Resources to nowoczesne rozwiązanie do zarządzania zasobami ludzkimi, które wspiera organizacje w budowaniu efektywnych zespołów i rozwoju pracowników. Dzięki automatyzacji procesów HR, zaawansowanej analityce i narzędziom do zarządzania talentami, firmy mogą tworzyć lepsze środowisko pracy i osiągać lepsze wyniki biznesowe.
                  </p>
                  <p className="text-lg leading-relaxed opacity-90 mt-4 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Zainwestuj w Dynamics 365 Human Resources, aby zoptymalizować procesy HR i stworzyć lepsze miejsce pracy dla swoich pracowników.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-center mb-8">Funkcje, które wyróżniają Dynamics 365 Human Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    icon={feature.icon}
                    number={index + 1}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="space-y-8">
              <div className="grid gap-6">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50"
                  >
                    <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-[#107c10]">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DynamicsPageLayout>
    </>
  );
}
