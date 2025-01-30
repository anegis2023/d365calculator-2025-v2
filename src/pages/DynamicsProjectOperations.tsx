import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaProjectDiagram, FaChartLine, FaCogs, FaMicrosoft, FaUsers, FaRobot, FaDatabase, FaChartBar, FaBolt, FaCloud, FaCog, FaChartPie, FaShieldAlt, FaPlug, FaCheckCircle, FaBell, FaSync } from 'react-icons/fa';
import { useModuleBasket } from '../context/ModuleBasketContext';
import { modules } from '../data/modules';

const seoData = {
  pageData: {
    title: "Microsoft Dynamics 365 Project Operations | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
    description: "Zwiększ rentowność projektów i produktywność zespołów z Microsoft Dynamics 365 Project Operations. Zarządzaj projektami, zasobami i finansami w jednym miejscu.",
    ogType: 'website'
  },
  customSchema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Microsoft Dynamics 365 Project Operations",
    "description": "Zwiększ rentowność projektów i produktywność zespołów z Microsoft Dynamics 365 Project Operations. Zarządzaj projektami, zasobami i finansami w jednym miejscu.",
    "url": "https://dynamics365.com.pl/dynamics-365-project-operations",
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

export default function DynamicsProjectOperations() {
  const [activeTab, setActiveTab] = useState('overview');
  const { selectedModules, addModule } = useModuleBasket();
  const hasModules = selectedModules.length > 0;
  
  const isModuleInBasket = selectedModules.some(module => module.id === 5);

  const handleAddToBasket = () => {
    if (!isModuleInBasket) {
      const projectOperationsModule = modules.find(m => m.id === 5);
      if (projectOperationsModule) {
        addModule(projectOperationsModule);
      }
    }
  };

  const features = [
    {
      icon: <FaProjectDiagram />,
      title: "Zarządzanie projektami",
      description: "Śledzenie postępów, kontrola harmonogramów i efektywne wykorzystanie zasobów."
    },
    {
      icon: <FaChartLine />,
      title: "Prognozowanie kosztów i przychodów",
      description: "Analiza budżetu w czasie rzeczywistym z wykorzystaniem zaawansowanych narzędzi analitycznych."
    },
    {
      icon: <FaChartBar />,
      title: "Monitorowanie wydajności",
      description: "Raportowanie wskaźników KPI i analiza produktywności zespołów."
    },
    {
      icon: <FaRobot />,
      title: "Automatyzacja procesów",
      description: "Eliminacja ręcznych zadań poprzez integrację z innymi narzędziami Microsoft."
    }
  ];

  const integrations = [
    {
      icon: <FaChartPie />,
      title: "Microsoft Power BI",
      description: "Zaawansowana analityka i interaktywne raportowanie ułatwiające podejmowanie decyzji w oparciu o dane."
    },
    {
      icon: <FaDatabase />,
      title: "Microsoft Dataverse",
      description: "Bezpieczne przechowywanie i zarządzanie danymi projektowymi w chmurze, z możliwością ich synchronizacji z innymi aplikacjami."
    },
    {
      icon: <FaBolt />,
      title: "Power Automate",
      description: "Automatyzacja procesów biznesowych, eliminacja rutynowych zadań i optymalizacja przepływu pracy między aplikacjami."
    }
  ];

  const faqData = [
    {
      question: "Czym jest Microsoft Dynamics 365 Project Operations?",
      answer: "Microsoft Dynamics 365 Project Operations to kompleksowe rozwiązanie do zarządzania projektami, które łączy funkcje planowania projektów, zarządzania zasobami, rozliczania czasu pracy i kosztów oraz analizy finansowej. System umożliwia efektywne prowadzenie projektów od sprzedaży po realizację."
    },
    {
      question: "Jakie są główne funkcje Dynamics 365 Project Operations?",
      answer: "Główne funkcje obejmują: zarządzanie projektami, planowanie zasobów, śledzenie czasu i wydatków, zarządzanie budżetem, fakturowanie projektowe, prognozowanie przychodów oraz integrację z innymi narzędziami Microsoft."
    },
    {
      question: "Jak system wspiera zarządzanie projektami?",
      answer: "System oferuje narzędzia do planowania projektów, tworzenia harmonogramów, przydzielania zasobów, śledzenia postępów, zarządzania ryzykiem oraz raportowania stanu projektów w czasie rzeczywistym."
    },
    {
      question: "Jakie są możliwości zarządzania zasobami?",
      answer: "Platforma umożliwia optymalne planowanie zasobów, zarządzanie dostępnością pracowników, dopasowywanie umiejętności do zadań oraz monitorowanie wykorzystania zasobów w projektach."
    },
    {
      question: "Jak działa rozliczanie czasu i kosztów?",
      answer: "System zapewnia narzędzia do rejestracji czasu pracy, śledzenia wydatków projektowych, zatwierdzania arkuszy czasu pracy i wydatków oraz automatycznego rozliczania kosztów projektowych."
    },
    {
      question: "Jakie są możliwości analizy finansowej?",
      answer: "Project Operations dostarcza zaawansowane narzędzia do analizy rentowności projektów, śledzenia budżetów, prognozowania przychodów oraz generowania raportów finansowych."
    },
    {
      question: "Jak system integruje się z innymi narzędziami Microsoft?",
      answer: "Platforma płynnie integruje się z Microsoft Teams, Project for the Web, Office 365 oraz innymi aplikacjami Dynamics 365, zapewniając spójne środowisko pracy."
    },
    {
      question: "Jakie są możliwości raportowania?",
      answer: "System oferuje wszechstronne narzędzia do raportowania, w tym dashboardy projektowe, raporty finansowe, analizy wydajności oraz integrację z Power BI dla zaawansowanej analityki."
    },
    {
      question: "Jak wygląda proces fakturowania projektów?",
      answer: "Platforma automatyzuje proces fakturowania, uwzględniając różne modele rozliczeń (fixed-price, time & material), śledzenie kamieni milowych oraz zatwierdzanie faktur."
    },
    {
      question: "Czy system wspiera pracę zdalną?",
      answer: "Tak, dzięki dostępowi przez przeglądarkę i integracji z Microsoft Teams, system umożliwia efektywną pracę zdalną i współpracę zespołów projektowych."
    },
    {
      question: "Jak wygląda proces wdrożenia?",
      answer: "Wdrożenie obejmuje konfigurację systemu, dostosowanie do procesów organizacji, migrację danych projektowych, szkolenia użytkowników oraz wsparcie techniczne."
    },
    {
      question: "Czy dostępna jest wersja testowa?",
      answer: "Tak, Microsoft oferuje wersję próbną Dynamics 365 Project Operations, która pozwala na przetestowanie funkcjonalności przed podjęciem decyzji o wdrożeniu."
    }
  ];

  return (
    <>
      <MetaTags {...seoData} />
      <Navbar />
      <DynamicsHeroSection
        title="Microsoft Dynamics 365 Project Operations"
        description="Połącz wszystkie kluczowe elementy działalności projektowej w jednej zintegrowanej aplikacji, aby usprawnić zarządzanie i realizację zadań."
        backgroundGradient="from-[#071630] via-[#107c10] to-[#00a2ed]"
        onAddToBasket={!isModuleInBasket ? handleAddToBasket : undefined}
      />
      <DynamicsPageLayout>
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8 border-b">
          <Tab
            label="Microsoft Dynamics 365 Project Operations"
            isActive={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
          />
          <Tab
            label="Funkcje i integracje"
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
          <div className={`tab-content ${activeTab === 'overview' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="overview-tab">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className={`flex flex-col ${hasModules ? '' : 'lg:flex-row'} gap-8 items-start`}>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed text-gray-700">
                        <strong>Microsoft Dynamics 365 Project Operations</strong> to nowoczesna aplikacja do zarządzania projektami, wspierana przez sztuczną inteligencję (AI), zaprojektowana z myślą o firmach realizujących projekty usługowe. Łączy w sobie funkcje planowania, budżetowania, monitorowania wydajności oraz zarządzania zasobami, umożliwiając zespołom skuteczniejsze realizowanie projektów na każdym etapie ich cyklu życia.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-700">
                        Aplikacja jest częścią ekosystemu Microsoft Dynamics 365 – pakietu zintegrowanych rozwiązań biznesowych, rozwijanego przez Microsoft, jednego z globalnych liderów technologicznych. Dzięki pełnej integracji z innymi narzędziami Microsoft, <strong>Dynamics 365 Project Operations</strong> pozwala na precyzyjne zarządzanie harmonogramami, kosztami oraz zasobami, wspierając podejmowanie lepszych decyzji biznesowych w oparciu o dane i prognozy generowane przez AI.
                      </p>
                    </div>
                  </div>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg min-h-[200px]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full min-h-[200px]"
                        src="https://www.youtube.com/embed/nhU21sYCaiI?rel=0&showinfo=0&controls=1&autoplay=0"
                        title="Microsoft Dynamics 365 Project Operations Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Kluczowe wyzwania w zarządzaniu projektami</h2>
                <p className="mt-4">Efektywne prowadzenie projektów wymaga rozwiązywania licznych problemów, takich jak:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Brak przejrzystości w planowaniu zasobów i harmonogramach.</li>
                  <li>Trudności w kontrolowaniu kosztów i rentowności projektów.</li>
                  <li>Problemy z integracją zespołów pracujących w różnych lokalizacjach.</li>
                  <li>Brak centralizacji danych projektowych, co utrudnia podejmowanie decyzji opartych na faktach.</li>
                </ul>
                <p className="mt-4">Dynamics 365 Project Operations pozwala firmom pokonać te bariery, dostarczając zaawansowane narzędzia do zarządzania projektami.</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
                      Zwiększenie efektywności projektów
                    </h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Dzięki zaawansowanym narzędziom planowania i automatyzacji procesów organizacje mogą realizować projekty szybciej i sprawniej.
                    </p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Poprawa rentowności</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Precyzyjne monitorowanie kosztów i kontrola budżetu pozwalają zwiększyć opłacalność realizowanych projektów.
                    </p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Ułatwiona współpraca zespołów</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Integracja zespołów i centralizacja danych projektowych zwiększają efektywność komunikacji i eliminują silosy informacyjne.
                    </p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Lepsze podejmowanie decyzji</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Dostęp do danych w czasie rzeczywistym wspiera liderów w podejmowaniu trafnych decyzji opartych na analizach.
                    </p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Skalowalność i elastyczność</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      System dostosowuje się do potrzeb organizacji, umożliwiając łatwą adaptację w dynamicznie zmieniającym się środowisku biznesowym.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#31b6cc] text-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#2ca3b7] cursor-pointer group">
                  <h2 className="text-2xl font-bold mb-4 transform transition-transform duration-500 group-hover:translate-x-2">Dlaczego warto wybrać Dynamics 365 Project Operations?</h2>
                  <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Microsoft Dynamics 365 Project Operations to kompleksowe rozwiązanie do zarządzania projektami, które łączy sprzedaż, planowanie zasobów, zarządzanie projektami i rozliczenia w jednym systemie. Dzięki zaawansowanym funkcjom i integracji z ekosystemem Microsoft, organizacje mogą zwiększać efektywność projektów i osiągać lepsze wyniki biznesowe.
                  </p>
                  <p className="text-lg leading-relaxed opacity-90 mt-4 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Zainwestuj w Dynamics 365 Project Operations, aby usprawnić zarządzanie projektami i zwiększyć rentowność swojej organizacji.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'features' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="features-tab">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Microsoft Dynamics 365 Project Operations</strong> to kompleksowe narzędzie do zarządzania projektami, które łączy planowanie, kontrolę kosztów, harmonogramowanie oraz monitorowanie wydajności w jednej platformie. Umożliwia firmom efektywne prowadzenie projektów usługowych dzięki zaawansowanej analityce, optymalizacji procesów oraz automatyzacji działań.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Kluczowe funkcje</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-[#107c10] text-2xl">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Integracje</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {integrations.map((integration, index) => (
                    <div key={index} className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-[#107c10] text-2xl">
                          {integration.icon}
                        </div>
                        <h3 className="text-xl font-bold">{integration.title}</h3>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        {integration.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Integracja z Microsoft Power BI</h2>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    <strong>Microsoft Dynamics 365 Project Operations</strong> płynnie integruje się z Microsoft Power BI, zaawansowaną usługą analityki biznesowej, umożliwiającą firmom głębszą analizę danych projektowych oraz tworzenie interaktywnych raportów. Dzięki tej integracji użytkownicy mogą monitorować kluczowe wskaźniki efektywności, analizować koszty i przychody projektów oraz identyfikować obszary wymagające optymalizacji.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Korzyści z tej integracji obejmują:</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-[#107c10] text-2xl">
                            <FaChartLine />
                          </div>
                          <h3 className="text-xl font-bold">Lepsze podejmowanie decyzji</h3>
                        </div>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Dostęp do szczegółowych raportów i wizualizacji ułatwia analizę trendów oraz prognozowanie wyników projektów.
                        </p>
                      </div>

                      <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-[#107c10] text-2xl">
                            <FaRobot />
                          </div>
                          <h3 className="text-xl font-bold">Automatyczne generowanie raportów</h3>
                        </div>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Dane są aktualizowane w czasie rzeczywistym, eliminując konieczność ręcznego tworzenia analiz.
                        </p>
                      </div>

                      <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-[#107c10] text-2xl">
                            <FaChartPie />
                          </div>
                          <h3 className="text-xl font-bold">Personalizowane pulpity</h3>
                        </div>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Użytkownicy mogą dostosować widoki raportów do swoich potrzeb, śledząc kluczowe wskaźniki wydajności (KPI).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#00a2ed] text-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#0091d4] cursor-pointer group">
                    <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                      Dzięki integracji z Power BI, Dynamics 365 Project Operations umożliwia firmom pełną kontrolę nad danymi projektowymi, poprawiając przejrzystość i efektywność zarządzania.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Integracja z Microsoft Dataverse</h2>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    <strong>Microsoft Dynamics 365 Project Operations</strong> integruje się z Microsoft Dataverse, platformą danych, która umożliwia bezpieczne przechowywanie, udostępnianie i zarządzanie danymi używanymi przez aplikacje biznesowe. Dzięki tej integracji wszystkie informacje dotyczące projektów, zasobów, kosztów i klientów są przechowywane w jednym, centralnym repozytorium, zapewniając spójność i łatwy dostęp do danych.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Korzyści z tej integracji obejmują:</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-[#107c10] text-2xl">
                            <FaDatabase />
                          </div>
                          <h3 className="text-xl font-bold">Scalanie danych z różnych źródeł</h3>
                        </div>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Umożliwia łączenie informacji z różnych aplikacji Microsoft i systemów zewnętrznych.
                        </p>
                      </div>

                      <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-[#107c10] text-2xl">
                            <FaShieldAlt />
                          </div>
                          <h3 className="text-xl font-bold">Bezpieczeństwo i zgodność</h3>
                        </div>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Dane są przechowywane zgodnie z najwyższymi standardami bezpieczeństwa i przepisami dotyczącymi ochrony informacji.
                        </p>
                      </div>

                      <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-[#107c10] text-2xl">
                            <FaPlug />
                          </div>
                          <h3 className="text-xl font-bold">Łatwa integracja</h3>
                        </div>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Dataverse ułatwia współdzielenie danych z innymi rozwiązaniami Microsoft, takimi jak Power BI, Power Apps i Power Automate.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#00a2ed] text-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#0091d4] cursor-pointer group">
                    <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                      Dzięki Microsoft Dataverse, Dynamics 365 Project Operations zapewnia centralizowane i strukturalne zarządzanie danymi, co zwiększa efektywność operacyjną i umożliwia lepsze wykorzystanie informacji biznesowych.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Automatyzacja z Power Automate</h2>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    <strong>Microsoft Dynamics 365 Project Operations</strong> wykorzystuje Power Automate, zaawansowaną usługę automatyzacji, do usprawniania procesów biznesowych i przepływów pracy. Dzięki temu firmy mogą eliminować ręczne, czasochłonne zadania, zwiększając efektywność operacyjną i minimalizując ryzyko błędów.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Przykłady procesów, które można zautomatyzować:</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-[#107c10] text-2xl">
                            <FaCheckCircle />
                          </div>
                          <h3 className="text-xl font-bold">Automatyczne zatwierdzanie</h3>
                        </div>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Przepływy pracy umożliwiają automatyczne przekazywanie dokumentów do odpowiednich osób do akceptacji.
                        </p>
                      </div>

                      <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-[#107c10] text-2xl">
                            <FaBell />
                          </div>
                          <h3 className="text-xl font-bold">Powiadomienia i alerty</h3>
                        </div>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          System może wysyłać e-maile lub powiadomienia Teams w przypadku przekroczenia budżetu, opóźnień czy zmian w harmonogramie.
                        </p>
                      </div>

                      <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-[#107c10] text-2xl">
                            <FaSync />
                          </div>
                          <h3 className="text-xl font-bold">Automatyczna synchronizacja</h3>
                        </div>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Dane z Dataverse, Power BI czy Microsoft Teams mogą być automatycznie aktualizowane w Project Operations, zapewniając spójność informacji.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#00a2ed] text-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#0091d4] cursor-pointer group">
                    <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                      Dzięki Power Automate, Dynamics 365 Project Operations pomaga firmom eliminować ręczne zadania, poprawiać produktywność zespołów i skuteczniej zarządzać projektami.
                    </p>
                    <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                  Dzięki zaawansowanym funkcjom i integracjom, w tym Power Automate, Dynamics 365 Project Operations pozwala firmom skutecznie zarządzać projektami, eliminując ręczne zadania, poprawiając produktywność zespołów oraz zwiększając rentowność i wydajność operacyjną.
                </p>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div className={`tab-content ${activeTab === 'faq' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="faq-tab">
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
          </div>
        </div>
      </DynamicsPageLayout>
    </>
  );
}
