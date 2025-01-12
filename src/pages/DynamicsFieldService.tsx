import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaTools, FaMapMarkedAlt, FaCalendarAlt, FaMobile, FaChartLine, FaCog, FaUsers, FaRobot, FaMicrosoft } from 'react-icons/fa';
import { useModuleBasket } from '../context/ModuleBasketContext';
import { modules } from '../data/modules';

const seoData = {
  pageData: {
    title: "Microsoft Dynamics 365 Field Service | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
    description: "Optymalizuj pracę serwisantów w terenie z Microsoft Dynamics 365 Field Service. Zwiększ efektywność obsługi i zadowolenie klientów dzięki inteligentnemu zarządzaniu serwisem.",
    ogType: 'website'
  },
  customSchema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Microsoft Dynamics 365 Field Service",
    "description": "Optymalizuj pracę serwisantów w terenie z Microsoft Dynamics 365 Field Service. Zwiększ efektywność obsługi i zadowolenie klientów dzieki inteligentnemu zarządzaniu serwisem.",
    "url": "https://dynamics365.com.pl/dynamics-365-field-service",
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

export default function DynamicsFieldService() {
  const [activeTab, setActiveTab] = useState('overview');
  const { selectedModules, addModule } = useModuleBasket();
  const hasModules = selectedModules.length > 0;
  
  const isModuleInBasket = selectedModules.some(module => module.id === 4);

  const handleAddToBasket = () => {
    if (!isModuleInBasket) {
      const fieldServiceModule = modules.find(m => m.id === 4);
      if (fieldServiceModule) {
        addModule(fieldServiceModule);
      }
    }
  };

  const features = [
    {
      icon: <FaCalendarAlt />,
      title: "Optymalizacja harmonogramów",
      description: "System umożliwia automatyczne przydzielanie zadań na podstawie lokalizacji, dostępności i umiejętności techników, co minimalizuje czas podróży i zwiększa efektywność."
    },
    {
      icon: <FaTools />,
      title: "Zarządzanie zleceniami serwisowymi",
      description: "Dynamics 365 Field Service pozwala tworzyć, śledzić i zarządzać zleceniami w czasie rzeczywistym, zapewniając pełną przejrzystość procesu."
    },
    {
      icon: <FaUsers />,
      title: "Pełny widok klienta",
      description: "Platforma integruje dane klientów i sprzętu, umożliwiając technikom terenowym dostęp do historii serwisowej, szczegółów gwarancji i instrukcji technicznych."
    },
    {
      icon: <FaRobot />,
      title: "Wykorzystanie sztucznej inteligencji (AI)",
      description: "AI wspiera przewidywanie awarii sprzętu i proponowanie działań zapobiegawczych, co minimalizuje przestoje i zwiększa zadowolenie klientów."
    },
    {
      icon: <FaMobile />,
      title: "Aplikacje mobilne",
      description: "Dynamics 365 Field Service oferuje aplikacje mobilne dla techników terenowych, umożliwiając dostęp do zleceń, dokumentacji i narzędzi w dowolnym miejscu."
    },
    {
      icon: <FaMicrosoft />,
      title: "Integracja z ekosystemem Microsoft",
      description: "Pełna integracja z narzędziami Microsoft, takimi jak Teams, Power BI czy Dynamics 365 Customer Service, umożliwia kompleksowe zarządzanie usługami i współpracę między zespołami."
    }
  ];

  const faqData = [
    {
      question: "Czym jest Microsoft Dynamics 365 Field Service?",
      answer: "Microsoft Dynamics 365 Field Service to kompleksowe rozwiązanie do zarządzania serwisem terenowym, które optymalizuje pracę techników, planowanie zadań i zarządzanie zasobami. System umożliwia efektywną obsługę klientów w terenie przy wykorzystaniu najnowszych technologii."
    },
    {
      question: "Jakie są główne funkcje Dynamics 365 Field Service?",
      answer: "Główne funkcje obejmują: inteligentne planowanie zasobów, optymalizację tras, zarządzanie harmonogramami, mobilny dostęp dla techników, zarządzanie zapasami, predykcyjne utrzymanie, oraz integrację z IoT dla monitorowania urządzeń."
    },
    {
      question: "Jak działa optymalizacja harmonogramów w Field Service?",
      answer: "System wykorzystuje sztuczną inteligencję do automatycznego planowania zadań, uwzględniając lokalizację, umiejętności techników, dostępność części zamiennych i priorytety zleceń, co maksymalizuje efektywność pracy."
    },
    {
      question: "Jakie korzyści daje integracja z IoT?",
      answer: "Integracja z IoT umożliwia zdalne monitorowanie urządzeń, przewidywanie awarii, automatyczne generowanie zleceń serwisowych oraz optymalizację konserwacji prewencyjnej."
    },
    {
      question: "Jak Field Service wspiera techników w terenie?",
      answer: "Technicy mają dostęp do mobilnej aplikacji z pełną funkcjonalnością, w tym do historii serwisowej, dokumentacji technicznej, map i nawigacji oraz możliwości raportowania pracy w czasie rzeczywistym."
    },
    {
      question: "Czy system wspiera zarządzanie częściami zamiennymi?",
      answer: "Tak, platforma oferuje kompleksowe zarządzanie magazynem części zamiennych, śledzenie zapasów w pojazdach serwisowych, automatyczne uzupełnianie zapasów i optymalizację dostępności części."
    },
    {
      question: "Jak wygląda proces wdrożenia Field Service?",
      answer: "Wdrożenie obejmuje konfigurację systemu, integrację z istniejącymi systemami, szkolenia techników i dyspozytorów, konfigurację mobilnych urządzeń oraz optymalizację procesów serwisowych."
    },
    {
      question: "Jakie są możliwości raportowania i analityki?",
      answer: "System oferuje zaawansowane dashboardy i raporty dotyczące wydajności serwisu, czasu reakcji, kosztów, zadowolenia klientów oraz wykorzystania zasobów, z możliwością integracji z Power BI."
    },
    {
      question: "Czy Field Service integruje się z innymi systemami?",
      answer: "Tak, platforma integruje się z innymi aplikacjami Microsoft Dynamics 365, systemami ERP, CRM oraz zewnętrznymi aplikacjami poprzez standardowe API i konektory."
    },
    {
      question: "Jak system wspiera obsługę klienta?",
      answer: "Field Service umożliwia śledzenie historii serwisowej, komunikację z klientami, zbieranie opinii po wykonaniu usługi oraz dostęp do portalu samoobsługowego dla klientów."
    },
    {
      question: "Jakie są wymagania systemowe?",
      answer: "System działa w chmurze Microsoft Azure, wymaga stabilnego połączenia internetowego oraz kompatybilnych urządzeń mobilnych dla techników terenowych."
    },
    {
      question: "Czy dostępna jest wersja testowa?",
      answer: "Tak, Microsoft oferuje wersję próbną Dynamics 365 Field Service, która pozwala na przetestowanie funkcjonalności przed wdrożeniem."
    }
  ];

  return (
    <>
      <MetaTags {...seoData} />
      <Navbar />
      <DynamicsHeroSection
        title="Microsoft Dynamics 365 Field Service"
        description="Zrewolucjonizuj swoje operacje serwisowe, zapewnij wyjątkową jakość obsługi i podnieś satysfakcję klientów na zupełnie nowy poziom."
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
                    Współczesny klient oczekuje usług na najwyższym poziomie – szybkich, niezawodnych i dostosowanych do swoich potrzeb. Firmy świadczące usługi terenowe często stoją przed wyzwaniem, jak skutecznie zarządzać zleceniami, optymalizować zasoby i zapewnić jakość obsługi, która zadowoli klientów. Microsoft Dynamics 365 Field Service to rozwiązanie, które pomaga sprostać tym oczekiwaniom i znacząco usprawnić realizację usług w terenie.
                    </p>
                  </div>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg min-h-[200px]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full min-h-[200px]"
                        src="https://www.youtube.com/embed/OujvbnyGqDY?rel=0&showinfo=0&controls=1&autoplay=0"
                        title="Microsoft Dynamics 365 Field Service Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Kluczowe wyzwania w zarządzaniu usługami terenowymi</h2>
                <p>Zanim przejdziemy do omówienia funkcji Dynamics 365 Field Service, warto zrozumieć wyzwania, które stoją przed firmami:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Trudności w koordynacji pracowników terenowych i optymalizacji harmonogramów.</li>
                  <li>Brak pełnej widoczności danych o klientach i sprzęcie w terenie.</li>
                  <li>Problemy z szybką reakcją na zgłoszenia i nieprzewidziane problemy.</li>
                  <li>Konieczność zapewnienia klientom przejrzystości i wysokiego standardu obsługi.</li>
                </ul>
                <p>Dynamics 365 Field Service pomaga firmom pokonać te wyzwania, dostarczając kompleksowe narzędzia do zarządzania operacjami w terenie.</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Zwiększenie efektywności operacyjnej</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dzięki optymalizacji harmonogramów i automatyzacji procesów organizacje mogą szybciej i sprawniej realizować zlecenia.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Poprawa satysfakcji klientów</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Przejrzyste procesy i szybka reakcja na zgłoszenia zwiększają zaufanie klientów i budują ich lojalność.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Redukcja kosztów operacyjnych</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Automatyzacja i przewidywanie awarii pozwalają na ograniczenie kosztów związanych z nieplanowanymi przestojami i naprawami.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Skalowalność i elastyczność</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dynamics 365 Field Service można dostosować do specyficznych potrzeb firmy, zarówno w małych, jak i dużych organizacjach.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Proaktywne podejście do obsługi</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dzięki wykorzystaniu AI i IoT firmy mogą przewidywać potrzeby klientów i działać zapobiegawczo, zanim pojawią się problemy.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#ff6a00] text-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#e65f00] cursor-pointer group">
                  <h2 className="text-2xl font-bold mb-4 transform transition-transform duration-500 group-hover:translate-x-2">Dlaczego warto wybrać Dynamics 365 Field Service?</h2>
                  <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Microsoft Dynamics 365 Field Service to zaawansowane rozwiązanie do zarządzania serwisem terenowym, które optymalizuje pracę techników i podnosi jakość obsługi klienta. Dzięki inteligentnym funkcjom planowania, monitorowania i raportowania, organizacje mogą zwiększać efektywność operacyjną i satysfakcję klientów.
                  </p>
                  <p className="text-lg leading-relaxed opacity-90 mt-4 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Zainwestuj w Dynamics 365 Field Service, aby zrewolucjonizować swoją obsługę serwisową i dostarczać klientom usługi na najwyższym poziomie.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-center mb-8">Funkcje, które wyróżniają Dynamics 365 Field Service</h2>
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
