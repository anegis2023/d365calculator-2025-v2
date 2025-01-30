import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaTruck, FaWarehouse, FaIndustry, FaChartLine, FaBoxes, FaRobot, FaBrain, FaMicrosoft, FaHandshake, FaEye, FaChartBar, FaCloud, FaTools, FaCogs, FaDatabase, FaSearchPlus, FaServer } from 'react-icons/fa';
import { useModuleBasket } from '../context/ModuleBasketContext';
import { modules } from '../data/modules';

const seoData = {
  pageData: {
    title: "Microsoft Dynamics 365 Supply Chain | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
    description: "Optymalizuj łańcuch dostaw i zwiększ wydajność operacyjną z Microsoft Dynamics 365 Supply Chain. Wykorzystaj sztuczną inteligencję do lepszego planowania i zarządzania zasobami.",
    ogType: 'website'
  },
  customSchema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Microsoft Dynamics 365 Supply Chain",
    "description": "Optymalizuj łańcuch dostaw i zwiększ wydajność operacyjną z Microsoft Dynamics 365 Supply Chain. Wykorzystaj sztuczną inteligencję do lepszego planowania i zarządzania zasobami.",
    "url": "https://dynamics365.com.pl/dynamics-365-supply-chain",
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
    <h2 className="m-0 font-medium">{label}</h2>
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

export default function DynamicsSupplyChain() {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'integrations' | 'faq'>('overview');
  const { selectedModules, addModule } = useModuleBasket();
  const hasModules = selectedModules.length > 0;
  
  const isModuleInBasket = selectedModules.some(module => module.id === 3);

  const handleAddToBasket = () => {
    if (!isModuleInBasket) {
      const supplyChainModule = modules.find(m => m.id === 3);
      if (supplyChainModule) {
        addModule(supplyChainModule);
      }
    }
  };

  const features = [
    {
      icon: <FaChartLine />,
      title: "Zarządzanie popytem",
      description: "Prognozowanie zapotrzebowania w oparciu o dane historyczne i aktualne trendy. Automatyczne dostosowywanie planów do zmieniających się warunków rynkowych. Redukcja nadmiaru zapasów przy jednoczesnym zapewnieniu dostępności produktów dla klientów."
    },
    {
      icon: <FaWarehouse />,
      title: "Zarządzanie zapasami",
      description: "Śledzenie poziomów zapasów w czasie rzeczywistym za pomocą zaawansowanych mechanizmów monitorowania. Optymalizacja przechowywania i alokacji produktów w magazynach. Redukcja kosztów związanych z przechowywaniem i eliminacja strat."
    },
    {
      icon: <FaHandshake />,
      title: "Współpraca z dostawcami",
      description: "Usprawnienie komunikacji z partnerami biznesowymi dzięki wbudowanym funkcjom integracyjnym. Transparentność procesów zakupowych i pełna kontrola realizacji zamówień. Budowanie długotrwałych relacji z dostawcami."
    },
    {
      icon: <FaRobot />,
      title: "Optymalizacja",
      description: "Microsoft Dynamics 365 Supply Chain Management automatyzuje procesy, redukując koszty i poprawiając efektywność zarządzania zasobami."
    },
    {
      icon: <FaEye />,
      title: "Widoczność",
      description: "Dostęp do danych w czasie rzeczywistym zwiększa przejrzystość procesów i wspiera podejmowanie decyzji w oparciu o aktualne informacje."
    },
    {
      icon: <FaBrain />,
      title: "Planowanie",
      description: "Zaawansowane algorytmy wspomagają precyzyjne planowanie produkcji, zarządzanie zapasami i organizację dostaw."
    }
  ];

  const faqData = [
    {
      question: "Czym jest Microsoft Dynamics 365 Supply Chain?",
      answer: "Microsoft Dynamics 365 Supply Chain to kompleksowe rozwiązanie do zarządzania łańcuchem dostaw, które integruje procesy produkcji, magazynowania, planowania i dystrybucji. System wykorzystuje zaawansowane technologie do optymalizacji operacji i zwiększenia widoczności w całym łańcuchu dostaw."
    },
    {
      question: "Jakie są główne funkcje Dynamics 365 Supply Chain?",
      answer: "Główne funkcje obejmują: zarządzanie produkcją, planowanie zasobów, zarządzanie magazynem, optymalizację zapasów, zarządzanie zamówieniami, prognozowanie popytu, śledzenie jakości oraz integrację z IoT."
    },
    {
      question: "Jak system wspiera planowanie produkcji?",
      answer: "System oferuje zaawansowane narzędzia do planowania produkcji, w tym harmonogramowanie zasobów, zarządzanie recepturami, kontrolę jakości, oraz optymalizację wykorzystania maszyn i pracowników."
    },
    {
      question: "Jakie są możliwości zarządzania magazynem?",
      answer: "Platforma zapewnia kompleksowe zarządzanie magazynem, w tym optymalizację przestrzeni magazynowej, zarządzanie lokalizacjami, obsługę kodów kreskowych, oraz automatyzację procesów magazynowych."
    },
    {
      question: "Jak działa prognozowanie popytu?",
      answer: "System wykorzystuje sztuczną inteligencję do analizy historycznych danych sprzedaży, trendów rynkowych i sezonowości, co pozwala na dokładne prognozowanie popytu i optymalizację poziomów zapasów."
    },
    {
      question: "Jakie korzyści daje integracja z IoT?",
      answer: "Integracja z IoT umożliwia monitorowanie maszyn produkcyjnych w czasie rzeczywistym, przewidywanie awarii, optymalizację wykorzystania zasobów oraz automatyzację procesów konserwacji."
    },
    {
      question: "Jak system wspiera zarządzanie jakością?",
      answer: "Platforma oferuje narzędzia do kontroli jakości, śledzenia partii produkcyjnych, zarządzania certyfikatami jakości oraz automatyzacji testów i inspekcji."
    },
    {
      question: "Jakie są możliwości raportowania?",
      answer: "System dostarcza zaawansowane narzędzia analityczne i dashboardy do monitorowania KPI, efektywności produkcji, poziomu zapasów oraz wydajności łańcucha dostaw, z możliwością integracji z Power BI."
    },
    {
      question: "Jak wygląda integracja z innymi systemami?",
      answer: "Dynamics 365 Supply Chain integruje się z innymi aplikacjami Microsoft, systemami ERP, platformami e-commerce oraz systemami partnerów biznesowych poprzez standardowe API i konektory."
    },
    {
      question: "Czy system wspiera handel międzynarodowy?",
      answer: "Tak, platforma obsługuje operacje międzynarodowe, w tym zarządzanie wieloma walutami, zgodność z lokalnymi przepisami oraz śledzenie przesyłek międzynarodowych."
    },
    {
      question: "Jak wygląda proces wdrożenia?",
      answer: "Wdrożenie obejmuje analizę procesów biznesowych, konfigurację systemu, migrację danych, integrację z istniejącymi systemami, szkolenia użytkowników oraz wsparcie techniczne."
    },
    {
      question: "Czy dostępna jest wersja testowa?",
      answer: "Tak, Microsoft oferuje wersję próbną Dynamics 365 Supply Chain, która pozwala na przetestowanie funkcjonalności przed podjęciem decyzji o wdrożeniu."
    }
  ];

  return (
    <>
      <MetaTags {...seoData} />
      <Navbar />
      <DynamicsHeroSection
        title="Microsoft Dynamics 365 Supply Chain"
        description="Zoptymalizuj operacje logistyczne, produkcyjne i magazynowe. Wykorzystaj sztuczną inteligencję do przewidywania i rozwiązywania problemów, zanim wpłyną na Twój biznes."
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
                    Microsoft Dynamics 365 Supply Chain Management to elastyczna i współpracująca platforma stworzona przez Microsoft, zaprojektowana z myślą o ciągłej optymalizacji procesów oraz szybkim reagowaniu na nieprzewidziane sytuacje.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                    Dzięki połączeniu z chmurowym rozwiązaniem Dynamics 365 przedsiębiorstwa mogą skuteczniej zarządzać zakłóceniami w łańcuchach dostaw, co przekłada się na lepszą stabilność operacyjną i minimalizowanie ryzyka. Kluczowe jest szybkie wykrywanie problemów, takie jak opóźnienia logistyczne czy wahania popytu, i natychmiastowe wdrażanie alternatywnych strategii. Platforma oferuje kompleksowe narzędzia do koordynacji przepływów towarów, automatyzacji zadań oraz monitorowania łańcucha dostaw w czasie rzeczywistym.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                    Dodatkowym atutem jest ścisła integracja z innymi produktami Microsoft, co ułatwia analizę danych, wprowadzanie innowacji i pełne wykorzystanie zasobów przedsiębiorstwa w jednym, spójnym ekosystemie. Dzięki temu firmy mogą elastycznie dostosowywać się do zmiennych warunków rynkowych i sprawniej zarządzać zasobami, jednocześnie korzystając z zaawansowanych narzędzi zapewnianych przez platformę Supply Chain Management.
                    </p>
                  </div>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg min-h-[200px]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        style={{ minHeight: '200px' }}
                        src="https://www.youtube.com/embed/FVHLmpdTjvM?rel=0&showinfo=0&controls=1&autoplay=0"
                        title="Microsoft Dynamics 365 Supply Chain Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Kluczowe wyzwania w zarządzaniu łańcuchem dostaw</h2>
                <p className="text-lg leading-relaxed">
                  Zanim przejdziemy do szczegółowego omówienia funkcji Dynamics 365 Supply Chain Management, warto zrozumieć wyzwania, które często pojawiają się w organizacjach:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Niedokładne prognozy popytu prowadzące do nadwyżeki zapasów lub ich niedoboru.</li>
                  <li>Brak widoczności w czasie rzeczywistym w procesach logistycznych.</li>
                  <li>Trudności w zarządzaniu złożonymi operacjami produkcyjnymi i magazynowymi.</li>
                  <li>Konieczność dostosowania się do zmieniających się warunków rynkowych i wymagań klientów.</li>
                </ul>
                <p className="text-lg leading-relaxed">
                  Dynamics 365 Supply Chain Management rozwiązuje te problemy, oferując narzędzia do kompleksowego zarządzania operacjami.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-500 group-hover:text-[#107c10]">Zwiększenie efektywności operacyjnej</h3>
                    <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-700">Dzięki automatyzacji i optymalizacji procesów, organizacje mogą szybciej reagować na zmiany rynkowe i potrzeby klientów.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-500 group-hover:text-[#107c10]">Redukcja kosztów</h3>
                    <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-700">Precyzyjne prognozowanie popytu i zarządzanie zapasami minimalizują koszty magazynowania oraz ryzyko nadwyżeki.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-500 group-hover:text-[#107c10]">Poprawa satysfakcji klientów</h3>
                    <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-700">Dzięki sprawnej logistyce i szybszym dostawom firmy mogą lepiej sprostać oczekiwaniom klientów.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-500 group-hover:text-[#107c10]">Skalowalność i elastyczność</h3>
                    <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-700">System dostosowuje się do potrzeb organizacji, umożliwiając łatwą rozbudowę funkcji w miarę rozwoju firmy.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-500 group-hover:text-[#107c10]">Lepsze podejmowanie decyzji</h3>
                    <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-700">Zaawansowana analityka i raportowanie wspierają liderów w podejmowaniu trafnych decyzji opartych na danych.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#004b8c] text-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#003d73] cursor-pointer group">
                  <h2 className="text-2xl font-bold mb-4 transform transition-transform duration-500 group-hover:translate-x-2">Dlaczego warto wybrać Dynamics 365 Supply Chain Management?</h2>
                  <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Microsoft Dynamics 365 Supply Chain Management to zaawansowane rozwiązanie do zarządzania łańcuchem dostaw, które umożliwia firmom optymalizację procesów logistycznych i produkcyjnych. Dzięki inteligentnym funkcjom planowania, monitorowania i analityki, organizacje mogą zwiększać efektywność operacyjną i elastycznie reagować na zmiany rynkowe.
                  </p>
                  <p className="text-lg leading-relaxed opacity-90 mt-4 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Zainwestuj w Dynamics 365 Supply Chain Management, aby zoptymalizować swój łańcuch dostaw i zwiększyć konkurencyjność swojej firmy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'features' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="features-tab">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  <strong>Microsoft Dynamics 365 Supply Chain Management</strong> oferuje kompleksowe narzędzia wspierające zarządzanie łańcuchem dostaw, umożliwiając przedsiębiorstwom efektywną optymalizację procesów, poprawę widoczności operacyjnej oraz precyzyjne planowanie zasobów.
                </p>
                <h2 className="text-2xl font-semibold mb-6">Kluczowe funkcje i możliwości:</h2>
              </div>
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

              <div className="mt-12 space-y-8">
                <h2 className="text-2xl font-semibold">Zarządzanie popytem</h2>
                <p className="text-lg leading-relaxed">
                  <strong>Microsoft Dynamics 365 Supply Chain Management</strong> oferuje zaawansowane funkcje zarządzania popytem, które pozwalają firmom na efektywne prognozowanie zapotrzebowania oraz precyzyjne planowanie zasobów. Platforma wspiera przedsiębiorstwa w dostosowywaniu procesów do dynamicznych zmian na rynku, minimalizując ryzyko niedoborów lub nadmiarów produktów.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="group bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="space-y-4">
                      <div className="text-[#107c10] text-3xl">
                        <FaChartLine className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                      </div>
                      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#107c10]">
                        Prognozowanie zapotrzebowania
                      </h3>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Wykorzystanie algorytmów uczenia maszynowego do analizy danych historycznych i identyfikacji trendów</li>
                        <li>• Automatyczne generowanie prognoz w oparciu o aktualne dane rynkowe oraz informacje o sezonowości</li>
                      </ul>
                    </div>
                  </div>

                  <div className="group bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="space-y-4">
                      <div className="text-[#107c10] text-3xl">
                        <FaBrain className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                      </div>
                      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#107c10]">
                        Planowanie popytu
                      </h3>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Narzędzia do symulacji scenariuszy umożliwiające optymalizację strategii zarządzania popytem</li>
                        <li>• Integracja planowania z innymi procesami w łańcuchu dostaw, co zapewnia spójność działań operacyjnych</li>
                      </ul>
                    </div>
                  </div>

                  <div className="group bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="space-y-4">
                      <div className="text-[#107c10] text-3xl">
                        <FaRobot className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                      </div>
                      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#107c10]">
                        Przewidywanie w czasie rzeczywistym
                      </h3>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Monitorowanie zmian w zapotrzebowaniu na bieżąco, co umożliwia natychmiastową reakcję na zmiany rynkowe</li>
                        <li>• Automatyczna alokacja zasobów w odpowiedzi na wahania popytu, co zwiększa efektywność operacyjną</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mt-8">
                  <strong>Microsoft Dynamics 365 Supply Chain Management</strong> dostarcza firmom narzędzi nie tylko do przewidywania zapotrzebowania, ale również do jego aktywnego kształtowania. Dzięki temu przedsiębiorstwa mogą lepiej zarządzać zasobami, redukować koszty i skutecznie zaspokajać potrzeby klientów.
                </p>
              </div>

              <div className="mt-16 space-y-8">
                <h2 className="text-2xl font-semibold">Zarządzanie zapasami</h2>
                <p className="text-lg leading-relaxed">
                  <strong>Microsoft Dynamics 365 Supply Chain Management</strong> zapewnia zaawansowane narzędzia wspierające zarządzanie zapasami, umożliwiając pełną kontrolę stanów magazynowych i efektywne gospodarowanie zasobami. Platforma integruje dane w czasie rzeczywistym, co pozwala na monitorowanie, analizę i optymalizację poziomów zapasów w całym łańcuchu dostaw.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="group bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="space-y-4">
                      <div className="text-[#107c10] text-3xl">
                        <FaBoxes className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                      </div>
                      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#107c10]">
                        Optymalizacja zapasów
                      </h3>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Redukcja nadmiarowych zapasów, co pozwala uniknąć kosztów związanych z przechowywaniem niepotrzebnych towarów</li>
                        <li>• Zapewnienie odpowiedniego poziomu produktów, aby zaspokoić potrzeby klientów bez ryzyka braków</li>
                      </ul>
                    </div>
                  </div>

                  <div className="group bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="space-y-4">
                      <div className="text-[#107c10] text-3xl">
                        <FaWarehouse className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                      </div>
                      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#107c10]">
                        Kontrola stanów magazynowych
                      </h3>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Śledzenie stanów magazynowych w czasie rzeczywistym dzięki zautomatyzowanemu monitorowaniu</li>
                        <li>• Usprawnienie procesu lokalizowania i alokacji produktów w magazynach</li>
                      </ul>
                    </div>
                  </div>

                  <div className="group bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="space-y-4">
                      <div className="text-[#107c10] text-3xl">
                        <FaChartLine className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                      </div>
                      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#107c10]">
                        Redukcja kosztów
                      </h3>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Minimalizacja kosztów przechowywania poprzez efektywne zarządzanie przestrzenią magazynową</li>
                        <li>• Zmniejszenie strat wynikających z przeterminowania produktów lub ich uszkodzeń</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mt-8">
                  Dzięki <strong>Microsoft Dynamics 365 Supply Chain Management</strong> firmy mogą osiągnąć wyższą efektywność operacyjną, zwiększyć rentowność oraz lepiej dostosować się do zmiennych wymagań rynkowych. Narzędzia te umożliwiają precyzyjne zarządzanie zapasami, zapewniając jednocześnie ciągłość operacji i satysfakcję klientów.
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
