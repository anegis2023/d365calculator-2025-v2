import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaTools, FaMapMarkedAlt, FaCalendarAlt, FaMobile, FaChartLine, FaCog, FaUsers, FaRobot, FaMicrosoft, FaBell, FaLaptopCode, FaDesktop, FaMicrochip, FaShieldAlt, FaSmile, FaCalendarCheck, FaChartBar, FaFileAlt, FaUserCog, FaClipboardCheck, FaClock, FaStar, FaWrench, FaHardHat, FaHammer, FaPencilAlt, FaBrain, FaCogs, FaLightbulb, FaComments, FaPiggyBank, FaRoute, FaGlasses } from 'react-icons/fa';
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
    <h2 className="text-inherit font-medium">{label}</h2>
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
      icon: <FaCog />,
      title: "Automatyzacja przepływów pracy",
      description: "Eliminuje ręczne działania, przyspieszając realizację zadań i zwiększając dokładność operacji."
    },
    {
      icon: <FaRobot />,
      title: "Zaawansowane algorytmy harmonogramowania",
      description: "Umożliwiają optymalne przydzielanie zasobów i techników na podstawie dostępności, lokalizacji oraz priorytetów zadań."
    },
    {
      icon: <FaUsers />,
      title: "Planowanie samoobsługowe",
      description: "Klienci mogą samodzielnie planować wizyty serwisowe za pomocą intuicyjnych narzędzi online."
    },
    {
      icon: <FaBell />,
      title: "Automatyczna komunikacja",
      description: "System generuje powiadomienia i przypomnienia dla klientów oraz techników, zapewniając przejrzystość i terminowość."
    },
    {
      icon: <FaLaptopCode />,
      title: "Wsparcie zdalne",
      description: "Możliwość zdalnej diagnozy i naprawy przy pomocy narzędzi AI oraz integracji z IoT, co ogranicza konieczność wizyt w terenie."
    },
    {
      icon: <FaMobile />,
      title: "Mobilność dla techników",
      description: "Dostęp do zleceń, harmonogramów i dokumentacji za pośrednictwem aplikacji mobilnej, co zwiększa elastyczność pracy w terenie."
    },
    {
      icon: <FaDesktop />,
      title: "Monitorowanie urządzeń w czasie rzeczywistym",
      description: "Integracja z IoT umożliwia szybkie wykrywanie i reagowanie na potencjalne problemy jeszcze przed ich wystąpieniem."
    }
  ];

  const faqData = [
    {
      question: "Czym jest Microsoft Dynamics 365 Field Service?",
      answer: "Microsoft Dynamics 365 Field Service to kompleksowe rozwiązanie do zarządzania usługami w terenie, które optymalizuje pracę techników, planowanie zadań i zarządzanie zasobami. System umożliwia efektywną obsługę klientów w terenie przy wykorzystaniu najnowszych technologii."
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
        {/* Tabs */}
        <div className="flex border-b mb-8">
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
            label="Integracje"
            isActive={activeTab === 'integrations'}
            onClick={() => setActiveTab('integrations')}
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
                    <p className="text-lg leading-relaxed">
                    <strong>Microsoft Dynamics 365 Field Service</strong> to zaawansowane rozwiązanie do zarządzania usługami w terenie, które optymalizuje pracę techników, planowanie zadań i zarządzanie zasobami. Łączy narzędzia do planowania zleceń, monitorowania zasobów oraz integracji z technologiami AI (sztucznej inteligencji) i IoT (Internetu Rzeczy), aby przekształcić tradycyjne operacje serwisowe w inteligentne, oparte na danych procesy. Dzięki analizie danych w czasie rzeczywistym i predykcyjnym modelom AI, system umożliwia nie tylko reakcję na awarie, ale także precyzyjne planowanie prewencyjnych interwencji, minimalizując przestoje i koszty operacyjne.
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
                <h2 className="text-2xl font-bold">Kluczowe funkcje i zastosowania</h2>
                <div className="space-y-6">
                  <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start gap-4">
                      <div className="text-[#107c10] text-3xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <FaRobot />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Optymalizacja harmonogramów przez AI</h3>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Algorytmy sztucznej inteligencji analizują lokalizację pracowników, priorytety zleceń i dostępność części zamiennych, aby automatycznie generować optymalne trasy i harmonogramy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start gap-4">
                      <div className="text-[#107c10] text-3xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <FaCog />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Proaktywna obsługa z IoT</h3>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Czujniki IoT w urządzeniach klientów wysyłają dane o stanie technicznym w czasie rzeczywistym, umożliwiając przewidywanie awarii i wysyłanie techników zanim problem się pojawi.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start gap-4">
                      <div className="text-[#107c10] text-3xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <FaMobile />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Cyfrowa transformacja serwisu</h3>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Platforma zastępuje ręczne procesy (np. papierowe raporty) cyfrowymi narzędziami, takimi jak mobilne aplikacje dla techników czy pulpity nawigacyjne dla menedżerów.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Microsoft Dynamics 365 Field Service to rozwiązanie, które wspiera organizacje w dostarczaniu usług na najwyższym poziomie, jednocześnie zwiększając ich efektywność i redukując koszty.
                </p>

                <h3 className="text-xl font-semibold mb-4">Główne korzyści</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start gap-4">
                      <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <FaChartLine />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Zwiększenie wydajności</h4>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Automatyzacja procesów, takich jak harmonogramowanie i zarządzanie zleceniami pracy, pozwala firmom obsługiwać więcej zleceń w krótszym czasie.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start gap-4">
                      <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <FaComments />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Lepsza komunikacja z klientem</h4>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Automatyczne powiadomienia o statusie zleceń i precyzyjne raporty zwiększają przejrzystość i budują zaufanie klientów.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start gap-4">
                      <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <FaPiggyBank />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Optymalizacja kosztów</h4>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Dzięki funkcjom predykcyjnego utrzymania i lepszemu zarządzaniu zasobami, firmy mogą zmniejszyć koszty operacyjne i zwiększać zwrot z inwestycji (ROI).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start gap-4">
                      <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <FaChartBar />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Wysoki zwrot z inwestycji</h4>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Badanie przeprowadzone przez Forrester Consulting wykazało, że użytkownicy Dynamics 365 Field Service osiągają średni ROI na poziomie 346%.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start gap-4">
                      <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <FaSmile />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Pozytywne opinie klientów</h4>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Firmy korzystające z tego rozwiązania raportują znaczne usprawnienia w operacjach serwisowych i poprawę jakości obsługi klientów.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mt-6">
                  Microsoft Dynamics 365 Field Service to narzędzie, które wspiera organizacje w dostarczaniu usług na najwyższym poziomie, jednocześnie zwiększając ich efektywność i redukując koszty.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Zwiększenie wydajności</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Microsoft Dynamics 365 Field Service znacząco zwiększa wydajność operacji serwisowych dzięki integracji nowoczesnych technologii, takich jak sztuczna inteligencja (AI) i Internet rzeczy (IoT). System automatyzuje kluczowe procesy, redukuje czas realizacji zadań i umożliwia lepsze wykorzystanie dostępnych zasobów.
                </p>

                <h3 className="text-xl font-semibold mb-4">Jak Dynamics 365 Field Service zwiększa wydajność:</h3>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start gap-4">
                      <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <FaCalendarCheck />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Automatyczne harmonogramowanie zleceń</h4>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Dzięki AI system optymalizuje planowanie wizyt serwisowych, uwzględniając lokalizację techników, ich umiejętności oraz priorytet zadań. W efekcie minimalizowane są opóźnienia i nieefektywności.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start gap-4">
                      <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <FaMicrochip />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Monitorowanie urządzeń w czasie rzeczywistym</h4>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          IoT umożliwia ciągłe zbieranie danych z urządzeń, co pozwala na identyfikację problemów zanim wpłyną one na działanie sprzętu. To podejście proaktywne skraca czas napraw i zwiększa niezawodność usług.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start gap-4">
                      <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <FaMobile />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Wsparcie mobilne dla techników</h4>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          Aplikacja mobilna zapewnia dostęp do pełnej dokumentacji, harmonogramów i instrukcji, co pozwala technikom na szybsze i bardziej precyzyjne wykonywanie zadań.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mt-6">
                  <h3 className="text-xl font-semibold mb-4">Korzyści w liczbach:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="text-[#107c10] mt-1"><FaChartLine /></div>
                      <span>Użytkownicy Dynamics 365 Field Service raportują znaczący wzrost efektywności operacyjnej, obsługując więcej zleceń przy tych samych zasobach.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-[#107c10] mt-1"><FaChartBar /></div>
                      <span>Wprowadzenie AI i IoT skraca czas realizacji zadań o 30%, dzięki czemu zespoły mogą skoncentrować się na bardziej wymagających zadaniach.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed mt-6">
                  Integracja AI i IoT z Dynamics 365 Field Service nie tylko wspiera automatyzację procesów, ale także umożliwia firmom dynamiczne dostosowywanie się do zmieniających się potrzeb, co przekłada się na długoterminowy wzrost wydajności.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Lepsza komunikacja z klientem</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Microsoft Dynamics 365 Field Service znacząco poprawia jakość komunikacji z klientami, zapewniając przejrzystość, szybkość i dostęp do istotnych informacji w czasie rzeczywistym. Dzięki zaawansowanym funkcjom, takim jak automatyzowane powiadomienia i portal samoobsługowy, firmy mogą budować silniejsze relacje z klientami oraz zwiększać ich satysfakcję.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Kluczowe funkcje poprawiające komunikację:</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="text-[#107c10] mt-1"><FaBell /></div>
                        <span><strong>Automatyzowane powiadomienia:</strong> System automatycznie informuje klientów o terminach wizyt, statusie zleceń oraz zmianach harmonogramu. Dzięki temu klienci są na bieżąco, co zmniejsza liczbę zapytań i poprawia doświadczenie użytkownika.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="text-[#107c10] mt-1"><FaUserCog /></div>
                        <span><strong>Portal samoobsługowy:</strong> Klienci mogą samodzielnie planować wizyty serwisowe, monitorować status zleceń oraz uzyskiwać dostęp do potrzebnych informacji bez konieczności kontaktu z działem obsługi. To narzędzie zwiększa ich niezależność i wygodę.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Korzyści wynikające z lepszej komunikacji:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaSmile />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Zwiększenie satysfakcji klientów</h4>
                            <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                              Jasne i regularne komunikaty budują zaufanie, a możliwość samoobsługi sprawia, że proces serwisowy jest bardziej przyjazny dla użytkownika.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaClock />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Redukcja liczby zapytań</h4>
                            <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                              Automatyzacja przepływu informacji zmniejsza obciążenie działów obsługi klienta, pozwalając im skupić się na bardziej złożonych problemach.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaChartLine />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Poprawa efektywności operacyjnej</h4>
                            <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                              Transparentna komunikacja zmniejsza ryzyko nieporozumień i przyspiesza procesy serwisowe.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
                  <h2 className="text-2xl font-bold mb-6">Optymalizacja kosztów</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Microsoft Dynamics 365 Field Service wspiera firmy w optymalizacji kosztów operacyjnych poprzez inteligentne zarządzanie zasobami i efektywne planowanie tras. Dzięki automatyzacji i zaawansowanym algorytmom system pomaga zminimalizować zbędne wydatki, zwiększając jednocześnie wydajność operacyjną.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Kluczowe funkcje wspierające redukcję kosztów:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaRoute />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Planowanie tras</h4>
                            <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                              System wykorzystuje algorytmy optymalizacji do wyznaczania najkrótszych i najbardziej efektywnych tras dla techników serwisowych. To pozwala na zmniejszenie kosztów paliwa oraz skrócenie czasu dojazdu.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaUsers />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Zarządzanie zasobami</h4>
                            <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                              Dynamics 365 Field Service pomaga w lepszym przydzielaniu techników oraz sprzętu, dzięki czemu firmy unikają nadmiernych wydatków na nieefektywne wykorzystanie siły roboczej i materiałów.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaCog />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Predykcyjne utrzymanie</h4>
                            <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                              Dzięki integracji z IoT system umożliwia przewidywanie awarii i zapobieganie im przed ich wystąpieniem, co pozwala uniknąć kosztownych interwencji naprawczych.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Wysoki zwrot z inwestycji:</h3>
                    <div className="flex items-start gap-4">
                      <div className="text-[#107c10] text-2xl pt-1">
                        <FaChartLine />
                      </div>
                      <p className="text-gray-700">
                        Według badania Forrester Consulting, firmy wdrażające Dynamics 365 Field Service odnotowały zwrot z inwestycji (ROI) na poziomie 346%, co pokazuje realne korzyści finansowe płynące z optymalizacji procesów operacyjnych.
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mt-8">
                    Dzięki inteligentnym funkcjom redukującym koszty, Microsoft Dynamics 365 Field Service stanowi doskonałe rozwiązanie dla firm dążących do maksymalnej efektywności przy jednoczesnej minimalizacji wydatków.
                  </p>
                </div>

                <div className="bg-[#ff6a00] text-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#e65f00] cursor-pointer group mt-8">
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
          </div>

          <div className={`tab-content ${activeTab === 'features' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="features-tab">
            <div className="space-y-8">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  <strong>Microsoft Dynamics 365 Field Service</strong> oferuje zaawansowany zestaw funkcji, które wspierają firmy w zarządzaniu usługami terenowymi i automatyzacji kluczowych procesów. Dzięki integracji technologii AI i IoT, rozwiązanie to usprawnia operacje serwisowe i poprawia ich efektywność.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">Najważniejsze funkcje</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Rola AI i IoT</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start gap-4">
                      <div className="text-[#107c10] text-3xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <FaRobot />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Sztuczna Inteligencja</h3>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          AI wspiera przewidywanie problemów, analizując dane historyczne i w czasie rzeczywistym.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start gap-4">
                      <div className="text-[#107c10] text-3xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <FaMicrochip />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Internet Rzeczy</h3>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                          IoT umożliwia ciągłe monitorowanie urządzeń i proaktywne podejście do serwisowania, minimalizując przestoje.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Automatyzacja procesów</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Microsoft Dynamics 365 Field Service automatyzuje kluczowe procesy serwisowe, eliminując potrzebę ręcznego zarządzania i przyspieszając realizację zadań. Dzięki zautomatyzowanym przepływom pracy, firmy mogą skuteczniej przydzielać zasoby, zarządzać harmonogramami oraz monitorować postęp realizacji zleceń.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Automatyzacja obejmuje takie procesy jak:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaUsers />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Przydzielanie zleceń pracy</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              System automatycznie wybiera najlepiej dopasowanego technika na podstawie jego lokalizacji, umiejętności oraz dostępności.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaBell />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Generowanie powiadomień</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Klienci oraz pracownicy otrzymują automatyczne powiadomienia o terminach wizyt, statusach zleceń czy konieczności podjęcia działań.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaMicrochip />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Monitorowanie urządzeń</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Dzięki integracji z IoT system wykrywa potencjalne problemy i automatycznie tworzy zlecenia serwisowe, zanim dojdzie do awarii.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Korzyści płynące z automatyzacji</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaShieldAlt />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Redukcja błędów</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Automatyczne procesy minimalizują ryzyko pomyłek wynikających z ręcznego wprowadzania danych lub złego przydziału zadań.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaChartLine />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Zwiększenie efektywności</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Przyspieszenie realizacji zleceń oraz lepsze wykorzystanie zasobów prowadzi do obsługi większej liczby klientów w krótszym czasie.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaSmile />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Lepsza jakość obsługi</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Klienci korzystają z bardziej przewidywalnych i terminowych usług, co przekłada się na ich zadowolenie.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Przykłady zastosowania</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaCalendarCheck />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Optymalizacja harmonogramów</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Firma serwisowa zarządzająca flotą techników może wykorzystać automatyzację do równomiernego rozdzielania pracy i maksymalizacji efektywności.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaCog />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Proaktywne serwisowanie</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Dzięki IoT system automatycznie identyfikuje potrzebę wymiany części urządzenia jeszcze przed jego awarią, co zapobiega przestojom.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaChartBar />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Raportowanie i analiza</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              System generuje raporty podsumowujące, dostępne zarówno dla firmy, jak i klienta.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Zarządzanie zleceniami pracy</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Microsoft Dynamics 365 Field Service oferuje kompleksowe narzędzia do zarządzania zleceniami pracy, które umożliwiają efektywne tworzenie, planowanie i realizację zleceń. Każde zlecenie zawiera szczegółowe informacje, takie jak zadania do wykonania, części zamienne, nakład pracy oraz wymagane umiejętności techników, co pozwala na precyzyjne zaplanowanie i realizację usług.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Proces zarządzania zleceniami</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaFileAlt />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Tworzenie zlecenia</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              System automatycznie generuje zlecenie pracy na podstawie zgłoszenia klienta, monitoringu IoT lub ręcznego wprowadzenia.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaUserCog />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Przydzielanie zasobów</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Algorytmy harmonogramowania wybierają odpowiedniego technika, uwzględniając jego lokalizację, dostępność oraz kwalifikacje.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaCalendarCheck />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Planowanie i komunikacja</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Klient otrzymuje szczegółowe informacje o terminie wizyty oraz statusie zlecenia poprzez automatyczne powiadomienia.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaTools />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Realizacja zlecenia</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Technik wykonuje zadania zgodnie z planem, korzystając z aplikacji mobilnej z dostępem do wszystkich informacji.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaClipboardCheck />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Zamknięcie i raportowanie</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              System generuje raport podsumowujący, dostępny zarówno dla firmy, jak i klienta.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Korzyści efektywnego zarządzania zleceniami pracy</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaChartLine />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Lepsze wykorzystanie zasobów</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Optymalne przydzielanie techników pozwala maksymalizować efektywność ich pracy.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaClock />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Redukcja opóźnień</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Dzięki precyzyjnemu planowaniu zlecenia są realizowane terminowo.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaStar />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Poprawa jakości usług</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Jasno określone zadania i dostęp do niezbędnych informacji umożliwiają szybszą i bardziej profesjonalną obsługę.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaSmile />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Zwiększenie satysfakcji</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Klienci cenią transparentność i terminowość realizacji usług.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Wykorzystanie sztucznej inteligencji</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Microsoft Dynamics 365 Field Service wykorzystuje sztuczną inteligencję (AI), aby zrewolucjonizować operacje serwisowe, zwiększając ich efektywność i jakość. Dzięki zaawansowanym algorytmom AI, system dostarcza narzędzia wspierające predykcyjne podejście do serwisowania oraz automatyzację procesów analitycznych.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Funkcje AI w Dynamics 365 Field Service</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaBrain />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Predykcyjne utrzymanie</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              AI analizuje dane z urządzeń podłączonych do Internetu rzeczy (IoT), identyfikując potencjalne problemy zanim wpłyną one na działanie sprzętu. Dzięki temu firmy mogą zapobiegać awariom i minimalizować przestoje.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaFileAlt />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Generowanie podsumowań</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Po zakończeniu zlecenia system automatycznie tworzy szczegółowe raporty podsumowujące, co ułatwia dokumentowanie działań i oszczędza czas zespołom serwisowym.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaCalendarCheck />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Inteligentne harmonogramowanie</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Algorytmy AI optymalizują przydzielanie zasobów, uwzględniając dostępność, lokalizację i wymagania techniczne zleceń.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Korzyści płynące z wykorzystania AI</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaChartLine />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Zwiększenie efektywności</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              AI eliminuje potrzebę ręcznego analizowania dużych ilości danych, przyspieszając podejmowanie decyzji.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaCogs />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Lepsze wykorzystanie zasobów</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Predykcyjne utrzymanie pozwala uniknąć nieplanowanych napraw, co zmniejsza koszty operacyjne.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaLightbulb />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Dostęp do informacji</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Analizy oparte na AI dostarczają firmom kluczowych wglądów w dane, umożliwiając lepsze planowanie.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                        <div className="flex items-start gap-4">
                          <div className="text-[#107c10] text-2xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <FaSmile />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-[#107c10]">Poprawa doświadczeń</h4>
                            <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                              Proaktywne serwisowanie i precyzyjne raporty budują zaufanie i zwiększają zadowolenie klientów.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mt-6">
                  Wykorzystanie AI w Dynamics 365 Field Service to krok w stronę nowoczesnych i bardziej zrównoważonych operacji serwisowych, dostosowanych do potrzeb dynamicznego rynku.
                </p>
              </div>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'integrations' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="integrations-tab">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Microsoft Dynamics 365 Field Service oferuje szerokie możliwości integracji z nowoczesnymi technologiami, które wspierają automatyzację procesów, poprawiają jakość usług i zwiększają produktywność zespołów serwisowych. Dzięki połączeniu z Microsoft Power Apps, IoT oraz Microsoft HoloLens, organizacje mogą jeszcze lepiej zarządzać swoimi operacjami serwisowymi.
                </p>

                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Kluczowe integracje</h2>
                  <div className="grid md:grid-cols-1 gap-6">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-start gap-4">
                        <div className="text-[#107c10] text-3xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <FaMicrosoft />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Integracja z Microsoft Power Apps</h3>
                          <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                            Umożliwia tworzenie niestandardowych aplikacji mobilnych i desktopowych, które usprawniają przepływy pracy i umożliwiają łatwy dostęp do danych.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-start gap-4">
                        <div className="text-[#107c10] text-3xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <FaRobot />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Integracja z IoT</h3>
                          <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                            Pozwala na monitorowanie urządzeń w czasie rzeczywistym i automatyczne wykrywanie usterek, co wspiera predykcyjne utrzymanie ruchu.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-start gap-4">
                        <div className="text-[#107c10] text-3xl pt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <FaGlasses />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Integracja z Microsoft HoloLens</h3>
                          <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                            Umożliwia technikom korzystanie z rozszerzonej rzeczywistości (AR) do zdalnej współpracy i interaktywnej diagnostyki urządzeń.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 mt-8">
                  <h2 className="text-2xl font-bold mb-6">Korzyści płynące z integracji</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Zwiększona produktywność</h3>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Automatyzacja i łatwiejszy dostęp do kluczowych danych pozwala pracownikom działać szybciej i efektywniej.
                      </p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Poprawiona jakość usług</h3>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Lepsze zarządzanie informacjami i zdalne wsparcie techniczne skracają czas realizacji zleceń i zwiększają zadowolenie klientów.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mt-6">
                  Dzięki tym integracjom Microsoft Dynamics 365 Field Service staje się wszechstronnym rozwiązaniem wspierającym nowoczesne podejście do zarządzania usługami w terenie.
                </p>
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
