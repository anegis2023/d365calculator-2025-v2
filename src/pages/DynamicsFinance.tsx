import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaBrain, FaCogs, FaFileInvoiceDollar, FaChartLine, FaMicrosoft, FaRobot } from 'react-icons/fa';
import { useModuleBasket } from '../context/ModuleBasketContext';
import { modules } from '../data/modules';

const seoData = {
  pageData: {
    title: "Microsoft Dynamics 365 Finance | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
    description: "Zoptymalizuj zarządzanie finansami firmy z Microsoft Dynamics 365 Finance. Automatyzuj procesy finansowe, zwiększaj kontrolę i podejmuj lepsze decyzje biznesowe w oparciu o dane.",
    ogType: 'website'
  },
  customSchema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Microsoft Dynamics 365 Finance",
    "description": "Zoptymalizuj zarządzanie finansami firmy z Microsoft Dynamics 365 Finance. Automatyzuj procesy finansowe, zwiększaj kontrolę i podejmuj lepsze decyzje biznesowe w oparciu o dane.",
    "url": "https://dynamics365.com.pl/dynamics-365-finance",
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
    <h2>{label}</h2>
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

const faqData = [
  {
    question: "Czym jest Microsoft Dynamics 365 Finance?",
    answer: "Microsoft Dynamics 365 Finance to zaawansowany system ERP do zarządzania finansami, który wspiera organizacje w automatyzacji procesów księgowych, zarządzaniu podatkami, monitorowaniu przepływów gotówkowych i analizie danych finansowych."
  },
  {
    question: "Jakie są główne funkcje Dynamics 365 Finance?",
    answer: "Automatyzacja procesów księgowych i zamknięć finansowych, prognozowanie przepływów gotówkowych z wykorzystaniem AI, zarządzanie podatkami i zgodność z lokalnymi przepisami, analiza finansowa w czasie rzeczywistym, integracja z innymi produktami Microsoft, takimi jak Power BI i Excel, obsługa globalnych operacji finansowych."
  },
  {
    question: "Czy Dynamics 365 Finance jest odpowiedni dla małych firm?",
    answer: "Tak, rozwiązanie jest skalowalne i dostosowane do potrzeb zarówno małych, jak i dużych firm. System można łatwo rozbudowywać w miarę rozwoju przedsiębiorstwa."
  },
  {
    question: "Czy Dynamics 365 Finance obsługuje różne waluty i języki?",
    answer: "Tak, system obsługuje wiele walut, języków i regulacji podatkowych, co czyni go idealnym rozwiązaniem dla firm działających na rynkach międzynarodowych."
  },
  {
    question: "Czy Dynamics 365 Finance wspiera zarządzanie podatkami?",
    answer: "Tak, platforma umożliwia automatyczne obliczanie stawek podatkowych, zarządzanie odliczeniami oraz zgodność z przepisami podatkowymi obowiązującymi w różnych jurysdykcjach."
  },
  {
    question: "Jak Dynamics 365 Finance pomaga w zarządzaniu przepływem gotówkowym?",
    answer: "System oferuje zaawansowane narzędzia do prognozowania przepływów gotówkowych, co pozwala na precyzyjne planowanie finansowe."
  },
  {
    question: "Czy Dynamics 365 Finance integruje się z innymi systemami?",
    answer: "Tak, platforma integruje się z innymi rozwiązaniami Microsoft, takimi jak Power BI, SharePoint, Teams oraz zewnętrznymi systemami za pomocą API."
  },
  {
    question: "Jakie są wymagania systemowe dla Dynamics 365 Finance?",
    answer: "Dynamics 365 Finance działa w chmurze, co oznacza, że wymaga jedynie stabilnego połączenia internetowego i przeglądarki internetowej."
  },
  {
    question: "Czy Dynamics 365 Finance wspiera zaawansowaną analitykę finansową?",
    answer: "Tak, system wykorzystuje sztuczną inteligencję i zaawansowane narzędzia analityczne, które umożliwiają monitorowanie kluczowych wskaźników finansowych i generowanie interaktywnych raportów."
  },
  {
    question: "Czy mogę dostosować Dynamics 365 Finance do potrzeb mojej firmy?",
    answer: "Tak, system jest elastyczny i umożliwia dostosowanie procesów oraz konfiguracji do specyficznych wymagań firmy."
  },
  {
    question: "Czy Dynamics 365 Finance oferuje wsparcie techniczne?",
    answer: "Tak, Microsoft zapewnia wsparcie techniczne dla użytkowników Dynamics 365 Finance. Dostępne są również szkolenia online i obszerna dokumentacja."
  },
  {
    question: "Czy istnieje możliwość przetestowania Dynamics 365 Finance przed zakupem?",
    answer: "Tak, Microsoft oferuje bezpłatną wersję próbną, która pozwala na przetestowanie funkcjonalności systemu."
  },
  {
    question: "Czy Dynamics 365 Finance pomaga w raportowaniu finansowym?",
    answer: "Tak, system umożliwia automatyczne generowanie raportów finansowych, dostosowanych do lokalnych i międzynarodowych standardów księgowych."
  },
  {
    question: "Jak Dynamics 365 Finance wspiera zamknięcia finansowe?",
    answer: "Platforma automatyzuje procesy zamknięcia finansowego, redukując czas i błędy związane z manualnym przetwarzaniem danych."
  },
  {
    question: "Czy Dynamics 365 Finance wspiera operacje globalne?",
    answer: "Tak, system jest przystosowany do zarządzania finansami na skalę globalną, z uwzględnieniem lokalnych regulacji, walut i języków."
  },
  {
    question: "Czy mogę korzystać z Dynamics 365 Finance na urządzeniach mobilnych?",
    answer: "Tak, Dynamics 365 Finance oferuje aplikacje mobilne, które umożliwiają dostęp do danych i funkcji z dowolnego miejsca."
  },
  {
    question: "Czy Dynamics 365 Finance wspiera zgodność z przepisami?",
    answer: "Tak, platforma zapewnia zgodność z przepisami finansowymi i podatkowymi w różnych krajach, pomagając firmom unikać ryzyka prawnego."
  },
  {
    question: "Jak Dynamics 365 Finance wspiera podejmowanie decyzji?",
    answer: "System dostarcza zaawansowane analizy danych finansowych i prognozy, które umożliwiają podejmowanie świadomych decyzji opartych na faktach."
  }
];

function DynamicsFinance() {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'faq' | 'integrations'>('overview');
  const { selectedModules, addModule } = useModuleBasket();
  const hasModules = selectedModules.length > 0;
  
  const isModuleInBasket = selectedModules.some(module => module.id === 2);

  const handleAddToBasket = () => {
    if (!isModuleInBasket) {
      const financeModule = modules.find(m => m.id === 2);
      if (financeModule) {
        addModule(financeModule);
      }
    }
  };

  const features = [
    {
      icon: <FaBrain />,
      title: "Zaawansowane planowanie i analiza finansowa",
      description: "Dzięki sztucznej inteligencji i narzędziom analitycznym, system wspiera tworzenie precyzyjnych prognoz finansowych. Użytkownicy mogą przewidywać przychody, planować budżety i analizować dane w czasie rzeczywistym."
    },
    {
      icon: <FaCogs />,
      title: "Automatyzacja księgowości",
      description: "Dynamics 365 Finance upraszcza codzienne zadania księgowe, takie jak rozliczenia czy generowanie raportów, co pozwala na szybsze zamknięcie okresów finansowych i minimalizuje błędy."
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Efektywne zarządzanie podatkami",
      description: "System obsługuje różne jurysdykcje podatkowe, umożliwiając automatyczne obliczanie stawek i zgodność z lokalnymi przepisami. Rozwiązanie wspiera także globalne operacje finansowe."
    },
    {
      icon: <FaChartLine />,
      title: "Monitorowanie przepływów pieniężnych",
      description: "System umożliwia prognozowanie przepływów gotówkowych z wykorzystaniem danych historycznych i bieżących, co pozwala na precyzyjne planowanie finansowe."
    },
    {
      icon: <FaMicrosoft />,
      title: "Integracja z ekosystemem Microsoft",
      description: "Dynamics 365 Finance płynnie współpracuje z aplikacjami Microsoft, takimi jak Power BI, Excel czy SharePoint, co ułatwia współpracę między działami i dostęp do spójnych danych."
    },
    {
      icon: <FaRobot />,
      title: "Raportowanie i analityka wspierana przez AI",
      description: "System oferuje zaawansowane narzędzia do analizy kluczowych wskaźników finansowych, dzięki czemu organizacje mogą podejmować decyzje oparte na danych."
    }
  ];

  return (
    <>
      <MetaTags {...seoData} />
      <Navbar />
      <DynamicsHeroSection
        title="Microsoft Dynamics 365 Finance"
        description="Usprawnij procesy finansowe, zautomatyzuj operacje księgowe i podejmuj lepsze decyzje biznesowe dzięki zaawansowanej analityce i sztucznej inteligencji."
        backgroundGradient="from-[#071630] via-[#107c10] to-[#00a2ed]"
        onAddToBasket={!isModuleInBasket ? handleAddToBasket : undefined}
      />
      <DynamicsPageLayout>
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8 border-b">
          <Tab
            label="Microsoft Dynamics 365 Finance"
            isActive={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
          />
          <Tab
            label="Cechy i funkcjonalności"
            isActive={activeTab === 'features'}
            onClick={() => setActiveTab('features')}
          />
          <Tab
            label="Integracje i wsparcie technologiczne"
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
                    <span className="font-bold">Microsoft Dynamics 365 Finance</span> to kompleksowe rozwiązanie dla firm, które dąży do optymalizacji i automatyzacji zarządzania finansami. Ten zaawansowany system, będący częścią rodziny produktów Dynamics 365, wspiera organizacje w podejmowaniu trafnych decyzji finansowych, zwiększając efektywność operacyjną i zgodność z regulacjami. Dzięki modułowej budowie pozwala na elastyczne dostosowanie funkcji do potrzeb każdej organizacji, niezależnie od jej wielkości czy branży. Oferuje zaawansowane narzędzia do integracji z istniejącymi systemami, co minimalizuje koszty wdrożenia i zapewnia płynne działanie procesów. Dodatkowo, system jest stale rozwijany i aktualizowany, co gwarantuje zgodność z najnowszymi standardami i technologiami.
                    </p>
                  </div>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg min-h-[200px]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full min-h-[200px]"
                        src="https://www.youtube.com/embed/DGO6_gmFXhQ?rel=0&showinfo=0&controls=1&autoplay=0"
                        title="Microsoft Dynamics 365 Finance Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Kluczowe cechy Microsoft Dynamics 365 Finance:</h3>
                <div className="space-y-4">
                  <p className="text-base leading-relaxed">
                  Pięć najważniejszych funkcji, które wyróżniają Microsoft Dynamics 365 Finance jako wiodące rozwiązanie do zarządzania finansami:
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><span className="font-bold">Planowanie finansowe i analiza:</span> Rozbudowane narzędzia analityczne umożliwiają dokładne prognozowanie finansowe i przygotowywanie zaawansowanych raportów.</li>
                    <li><span className="font-bold">Zarządzanie podatkami:</span>  Funkcje zapewniają automatyzację procesów podatkowych i zgodności z obowiązującymi przepisami w różnych jurysdykcjach.</li>  
                    <li><span className="font-bold">Zarządzanie gotówką:</span>  System pozwala na bieżące monitorowanie przepływów pienienieżnych, co ułatwia optymalizację płynności finansowej.</li>
                    <li><span className="font-bold">Integracja z Power BI:</span>  Dostęp do zaawansowanych wizualizacji i raportów wspiera podejmowanie strategicznych decyzji.</li>
                    <li><span className="font-bold">Wsparcie technologiczne Microsoft Azure:</span>  Wysoka skalowalność i bezpieczeństwo dzieki chmurze Microsoft Azure.</li>
                  </ul>
                  <p className="text-base leading-relaxed mt-4">
                  Microsoft Dynamics 365 Finance odgrywa kluczową rolę w poprawie zarządzania finansami, oferując narzędzia, które ułatwiają automatyzację procesów, redukcję kosztów i eliminację błędów. Dzięki wsparciu analitycznemu oraz funkcjom integracji z innymi produktami Microsoft, system pomaga firmom osiągać lepsze wyniki finansowe i strategiczne.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Zalety korzystania z Microsoft Dynamics 365 Finance</h3>
                <p className="text-base leading-relaxed mb-6">
                  Microsoft Dynamics 365 Finance to zaawansowany system, który wspiera organizacje w zarządzaniu finansami, automatyzując kluczowe procesy i zwiększając efektywność operacyjną. Dzięki jego funkcjonalnościom firmy z różnych branż mogą osiągać wyższy poziom produktywności i lepszą kontrolę nad swoimi finansami.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Automatyzacja procesów finansowych</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Redukcja manualnych czynności dzięki zautomatyzowanemu księgowaniu, obsłudze należności i zobowiązań oraz automatycznemu generowaniu raportów.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Zwiększenie efektywności operacyjnej</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Usprawnienie działań dzięki zaawansowanym narzędziom do analizy finansowej i raportowania.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Wspieranie podejmowania decyzji</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dostęp do aktualnych danych finansowych umożliwia szybsze podejmowanie strategicznych decyzji.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Elastyczność dla różnych branż</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Możliwość dostosowania systemu do specyficznych potrzeb branżowych.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Integracja z innymi narzędziami</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Bezproblemowa współpraca z Power BI oraz innymi produktami Microsoft.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Zgodność z regulacjami</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Wsparcie w spełnianiu wymagań prawnych i podatkowych w różnych krajach.</p>
                  </div>
                </div>
              </div>

              {/* Industry Examples Section */}
              <div className="space-y-6 mt-12">
                <h3 className="text-2xl font-bold mb-6">Przykłady zastosowań w branżach</h3>
                
                {/* Industry Table */}
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Branża</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Korzyści</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Produkcja</td>
                        <td className="px-3 py-4 text-sm text-gray-500">Automatyzacja rozliczeń kosztów produkcji, precyzyjna analiza wydajności.</td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Handel detaliczny</td>
                        <td className="px-3 py-4 text-sm text-gray-500">Szybkie generowanie raportów finansowych, zarządzanie należnościami.</td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Usługi finansowe</td>
                        <td className="px-3 py-4 text-sm text-gray-500">Zaawansowana analiza rentowności, zgodność z międzynarodowymi regulacjami.</td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Technologia i IT</td>
                        <td className="px-3 py-4 text-sm text-gray-500">Optymalizacja cash flow, integracja z rozwiązaniami AI w analizie danych.</td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Sektor publiczny</td>
                        <td className="px-3 py-4 text-sm text-gray-500">Transparentność w zarządzaniu środkami publicznymi oraz zgodność z przepisami prawnymi.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Summary text */}
                <p className="text-base leading-relaxed mt-6 text-gray-600">
                  Microsoft Dynamics 365 Finance to uniwersalne rozwiązanie, które pozwala firmom osiągnąć większą wydajność i dostosować procesy finansowe do specyficznych potrzeb. Wspiera rozwój organizacji, jednocześnie minimalizując ryzyko i czasochłonne czynności administracyjne.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Automatyzacja procesów finansowych</h3>
                <p className="text-base leading-relaxed mb-6">
                  Microsoft Dynamics 365 Finance znacząco usprawnia zarządzanie finansami dzięki szerokim możliwościom automatyzacji procesów, eliminując manualne działania i minimalizując ryzyko błędów. Dzięki zaawansowanym narzędziom automatyzacja obejmuje kluczowe obszary, takie jak księgowość, zarządzanie zobowiązaniami i należnościami, czy generowanie raportów.
                </p>

                <h4 className="text-xl font-semibold mb-3">Automatyzacja w Dynamics 365 Finance pozwala na:</h4>
                <div className="grid md:grid-cols-1 gap-6 mb-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Automatyczne księgowanie operacji finansowych w czasie rzeczywistym, co redukuje liczbę powtarzalnych zadań manualnych.</li>
                      <li>Obsługę należności i zobowiązań z wykorzystaniem automatycznego przypominania o terminach płatności oraz weryfikacji danych.</li>
                      <li>Generowanie raportów finansowych zgodnych z regulacjami prawnymi, eliminując potrzebę ręcznego przetwarzania danych.</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-xl font-semibold mb-3">Narzędzia wspierające automatyzację:</h4>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Workflow Automation</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Narzędzie umożliwiające automatyczne zatwierdzanie dokumentów finansowych, co przyspiesza procesy decyzyjne.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">AI-Driven Insights</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Analiza oparta na sztucznej inteligencji, która identyfikuje potencjalne oszczędności oraz ryzyka.
                    </p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Predykcyjne modelowanie gotówki</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      System prognozuje przepływy pieniężne, umożliwiając lepsze planowanie finansowe.
                    </p>
                  </div>
                </div>

                <p className="text-base leading-relaxed mb-6 text-gray-600">
                  Dzięki automatyzacji firmy mogą osiągnąć wyższą efektywność operacyjną, co jest kluczowe dla szybkiego podejmowania decyzji i zwiększenia konkurencyjności. Zmniejszenie nakładu pracy manualnej pozwala zespołom finansowym skupić się na analizie i strategii, a nie na powtarzalnych zadaniach.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Zwiększenie efektywności operacyjnej</h3>
                <p className="text-base leading-relaxed mb-6">
                  Microsoft Dynamics 365 Finance pozwala organizacjom osiągnąć wyższą efektywność operacyjną, wspierając kluczowe procesy biznesowe poprzez automatyzację, integrację oraz zaawansowaną analitykę. Dzięki spójności danych i nowoczesnym funkcjom system zapewnia szybsze i dokładniejsze zarządzanie finansami, eliminując przestoje i usprawniając codzienną pracę.
                </p>

                <h4 className="text-xl font-semibold mb-3">Dynamics 365 Finance oferuje:</h4>
                <div className="grid md:grid-cols-1 gap-6 mb-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Centralizację danych finansowych: Wszystkie informacje są dostępne w jednym miejscu, co eliminuje konieczność ich ręcznego przesyłania między systemami.</li>
                      <li>Zaawansowaną analitykę w czasie rzeczywistym: Moduły analityczne wspierają podejmowanie decyzji opartych na bieżących danych.</li>
                      <li>Usprawnienie współpracy między działami: Poprawia komunikację między finansami, księgowością, a innymi jednostkami, co prowadzi do lepszej synchronizacji działań.</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-xl font-semibold mb-3">Przykłady zastosowań w różnych branżach:</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Produkcja</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Automatyzacja rozliczeń kosztów produkcji oraz lepsze monitorowanie wydajności operacyjnej.
                    </p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Handel detaliczny</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Zarządzanie zapasami i finansami w czasie rzeczywistym, co pozwala na lepsze wykorzystanie kapitału obrotowego.
                    </p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Sektor publiczny</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Transparentność w zarządzaniu środkami publicznymi oraz zgodność z przepisami prawnymi.
                    </p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Usługi finansowe</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Precyzyjna analiza rentowności projektów i redukcja ryzyka operacyjnego.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold mb-3">Korzyści z poprawy efektywności operacyjnej:</h4>
                <div className="grid md:grid-cols-1 gap-6 mb-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Redukcja kosztów operacyjnych dzięki eliminacji zbędnych procesów.</li>
                      <li>Szybsze podejmowanie decyzji dzięki dostępowi do aktualnych danych i prognoz finansowych.</li>
                      <li>Zwiększona produktywność zespołów poprzez ograniczenie pracy manualnej i powtarzalnych zadań.</li>
                      <li>Lepsze zarządzanie ryzykiem dzięki zintegrowanym narzędziom analitycznym.</li>
                      <li>Większa elastyczność organizacyjna poprzez możliwość szybkiego dostosowania się do zmian rynkowych.</li>
                    </ul>
                  </div>
                </div>

                <p className="text-base leading-relaxed mb-6 text-gray-600">
                  Dzięki zastosowaniu Dynamics 365 Finance organizacje mogą usprawnić swoje procesy operacyjne, minimalizując ryzyko błędów i osiągając wyższy poziom efektywności na każdym etapie działalności.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-[#128017] text-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#159019] cursor-pointer group">
                  <h3 className="text-2xl font-bold mb-4 transform transition-transform duration-500 group-hover:translate-x-2">Dlaczego warto wybrać Dynamics 365 Finance?</h3>
                  <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Dynamics 365 Finance to narzędzie, które dostarcza firmom przewagi konkurencyjnej dzięki zaawansowanym funkcjom, elastyczności i integracji z ekosystemem Microsoft. To kompleksowe rozwiązanie, które wspiera zarządzanie finansami na każdym etapie rozwoju organizacji.
                  </p>
                  <p className="text-lg leading-relaxed opacity-90 mt-4 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Zainwestuj w Dynamics 365 Finance i zobacz, jak Twoja firma osiąga nowe poziomy efektywności i przejrzystości finansowej.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className={`tab-content ${activeTab === 'features' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="features-tab">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center mb-8">Cechy i funkcjonalności</h2>
              
              <div className="space-y-6">
                <p className="text-base leading-relaxed mb-6">
                  Microsoft Dynamics 365 Finance to zaawansowane rozwiązanie oferujące szeroką gamę funkcjonalności, które wspierają zarządzanie finansami na każdym etapie działalności przedsiębiorstwa. System ten łączy automatyzację procesów z rozbudowaną analityką, zapewniając firmom większą efektywność i precyzję w podejmowaniu decyzji.
                </p>

                <h3 className="text-2xl font-bold mb-6">Kluczowe funkcje:</h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">1. Zarządzanie finansami</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Dynamics 365 Finance umożliwia pełną kontrolę nad finansami dzięki kompleksowym narzędziom do księgowości, budżetowania oraz raportowania. Automatyczne księgowanie, monitoring należności i zobowiązań oraz generowanie raportów w czasie rzeczywistym wspierają precyzyjne planowanie finansowe.
                    </p>
                  </div>

                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">2. Zarządzanie podatkami</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      System zapewnia zgodność z przepisami podatkowymi w wielu jurysdykcjach, automatyzując obliczenia podatkowe oraz generowanie deklaracji. Dzięki funkcjom zgodności, przedsiębiorstwa mogą łatwiej dostosować się do zmieniających się regulacji.
                    </p>
                  </div>

                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">3. Zarządzanie gotówką</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Funkcje monitorowania przepływów pieniężnych pozwalają na optymalizację płynności finansowej. Moduły prognozowania i analizy gotówki umożliwiają szybkie reagowanie na zmiany w sytuacji finansowej firmy.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-6">Cechy Dynamics 365 Finance:</h3>
                <div className="grid md:grid-cols-1 gap-6 mb-8">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Planowanie finansowe i analiza: Narzędzia do prognozowania i tworzenia zaawansowanych raportów.</li>
                      <li>Automatyzacja procesów finansowych: Redukcja ręcznej pracy poprzez automatyczne księgowanie, generowanie raportów i zarządzanie płatnościami.</li>
                      <li>Analiza danych w czasie rzeczywistym: Integracja z narzędziami analitycznymi, które wspierają podejmowanie decyzji opartych na danych.</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-6">Korzyści dla użytkowników:</h3>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full bg-white rounded-lg shadow">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Korzyść</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Opis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Zwiększona efektywność</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Automatyzacja procesów zmniejsza czasochłonność zadań manualnych.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lepsze zarządzanie finansami</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Pełna kontrola nad budżetami, gotówką i zobowiązaniami.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dokładniejsza analiza danych</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Wykorzystanie analityki do identyfikacji trendów i ryzyk finansowych.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Zgodność z regulacjami</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Ułatwienie spełnienia wymogów prawnych w różnych krajach.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Większa przejrzystość</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Jasny obraz sytuacji finansowej dzięki raportom w czasie rzeczywistym.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gradient-to-r from-[#107c10] to-[#159019] p-6 rounded-lg shadow-lg text-white">
                  <p className="leading-relaxed">
                    333Dynamics 365 Finance łączy zaawansowane technologie z intuicyjnością, wspierając firmy w zarządzaniu finansami, analizie oraz automatyzacji kluczowych procesów. Dzięki temu organizacje mogą osiągnąć wyższy poziom efektywności i przewidywalności działań biznesowych.
                  </p>
                </div>

                {/* Financial Management Section */}
                <div className="space-y-6 mt-12 border-t pt-12">
                  <h2 className="text-3xl font-bold">Zarządzanie finansami</h2>
                  <p className="text-base leading-relaxed mb-6">
                    Microsoft Dynamics 365 Finance dostarcza kompleksowe narzędzia do zarządzania finansami, które wspierają firmy w osiąganiu lepszej kontroli nad swoimi zasobami oraz poprawie efektywności operacyjnej. System pozwala na bieżące monitorowanie, analizowanie i optymalizowanie procesów finansowych, co przekłada się na szybsze podejmowanie decyzji i większą przejrzystość działań.
                  </p>

                  <h3 className="text-2xl font-bold mb-4">Funkcje zarządzania finansami:</h3>
                  <div className="bg-white p-6 rounded-lg shadow mb-8">
                    <p className="text-gray-600 mb-4">Dynamics 365 Finance oferuje rozwiązania takie jak:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Automatyczne księgowanie operacji finansowych, co eliminuje manualne błędy i zwiększa dokładność danych.</li>
                      <li>Budżetowanie i monitorowanie wydatków, które umożliwiają lepszą alokację zasobów w firmie.</li>
                      <li>Zarządzanie należnościami i zobowiązaniami, ułatwiające utrzymanie płynności finansowej poprzez śledzenie terminów płatności.</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">Przykłady zastosowania w różnych branżach:</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li><span className="font-semibold">Produkcja:</span> Optymalizacja kosztów produkcji dzięki dokładnemu monitorowaniu wydatków i lepszej kontroli nad budżetem.</li>
                        <li><span className="font-semibold">Handel detaliczny:</span> Usprawnienie rozliczeń i zarządzanie zapasami, co pozwala na lepsze wykorzystanie kapitału obrotowego.</li>
                      </ul>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li><span className="font-semibold">Usługi finansowe:</span> Wsparcie w analizie rentowności i zgodności z regulacjami.</li>
                        <li><span className="font-semibold">Sektor publiczny:</span> Transparentność w zarządzaniu środkami publicznymi oraz zgodność z przepisami prawnymi.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#107c10] to-[#159019] p-6 rounded-lg shadow-lg text-white">
                    <p className="leading-relaxed">
                      Dzięki rozbudowanym funkcjom zarządzania finansami, Dynamics 365 Finance umożliwia firmom efektywne prowadzenie operacji, jednocześnie wspierając długoterminową strategię wzrostu i stabilności finansowej.
                    </p>
                  </div>
                </div>

                {/* Financial Planning and Analysis Section */}
                <div className="space-y-6 mt-12 border-t pt-12">
                  <h2 className="text-3xl font-bold">Planowanie finansowe i analiza</h2>
                  <p className="text-base leading-relaxed mb-6">
                    Microsoft Dynamics 365 Finance oferuje zaawansowane funkcje planowania finansowego i analizy, które umożliwiają organizacjom podejmowanie trafnych decyzji na podstawie rzetelnych i aktualnych danych. System wspiera zarządzanie budżetem, identyfikację ryzyk finansowych oraz długoterminowe planowanie strategiczne.
                  </p>

                  <h3 className="text-2xl font-bold mb-4">Rola analizy danych w podejmowaniu decyzji:</h3>
                  <div className="bg-white p-6 rounded-lg shadow mb-8">
                    <p className="text-gray-600 mb-4">Dynamiczna analiza danych finansowych pozwala organizacjom na:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Wykrywanie trendów finansowych, które mogą wpłynąć na wyniki firmy.</li>
                      <li>Szybsze reagowanie na zmiany rynkowe dzięki dostępowi do danych w czasie rzeczywistym.</li>
                      <li>Precyzyjne prognozowanie finansowe, wspierające strategiczne planowanie.</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">Narzędzia analityczne dostępne w systemie:</h3>
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full bg-white rounded-lg shadow">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Narzędzie</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Funkcjonalność</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Korzyść</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Analityka predykcyjna</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Prognozowanie przyszłych wyników na podstawie historycznych danych.</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Lepsze planowanie i przewidywanie ryzyk finansowych.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dashboardy KPI</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Monitorowanie kluczowych wskaźników wydajności w czasie rzeczywistym.</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Szybkie podejmowanie decyzji na podstawie aktualnych danych.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Moduł raportowania finansowego</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Tworzenie dynamicznych raportów dostosowanych do potrzeb firmy.</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Redukcja czasu potrzebnego na ręczne opracowywanie raportów.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Symulacje budżetowe</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Tworzenie scenariuszy „co jeśli" dla różnych strategii finansowych.</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Optymalizacja budżetu i redukcja ryzyk związanych z decyzjami.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">Korzyści z analizy danych:</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li><span className="font-semibold">Lepsze decyzje finansowe:</span> Dostęp do szczegółowych analiz umożliwia podejmowanie trafniejszych decyzji strategicznych.</li>
                        <li><span className="font-semibold">Optymalizacja budżetu:</span> Efektywne planowanie wydatków i alokacja zasobów w oparciu o precyzyjne dane.</li>
                      </ul>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li><span className="font-semibold">Redukcja ryzyka:</span> Analityka predykcyjna pomaga w identyfikacji potencjalnych problemów finansowych.</li>
                        <li><span className="font-semibold">Zwiększona przejrzystość:</span> Ujednolicenie danych finansowych w jednym systemie ułatwia ich interpretację i prezentację.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#107c10] to-[#159019] p-6 rounded-lg shadow-lg text-white">
                    <p className="leading-relaxed">
                      5555Funkcje planowania finansowego i analizy w Dynamics 365 Finance umożliwiają firmom osiągnięcie większej przewidywalności finansowej, efektywne zarządzanie budżetami oraz wspierają podejmowanie decyzji na podstawie danych, co przekłada się na stabilność i rozwój organizacji.
                    </p>
                  </div>
                </div>

                {/* Tax Management Section */}
                <div className="space-y-6 mt-12 border-t pt-12">
                  <h2 className="text-3xl font-bold">Zarządzanie podatkami</h2>
                  <p className="text-base leading-relaxed mb-6">
                    Microsoft Dynamics 365 Finance oferuje kompleksowe narzędzia do zarządzania podatkami, które wspierają firmy w efektywnym i zgodnym z przepisami prowadzeniu działalności. System ten automatyzuje kluczowe procesy podatkowe, takie jak obliczanie podatków, generowanie deklaracji oraz monitorowanie zmian w przepisach. Dzięki temu przedsiębiorstwa mogą zminimalizować ryzyko błędów i zapewnić zgodność z różnorodnymi regulacjami prawnymi w wielu jurysdykcjach.
                  </p>

                  <h3 className="text-2xl font-bold mb-4">Funkcje zarządzania podatkami</h3>
                  <div className="bg-white p-6 rounded-lg shadow mb-8">
                    <p className="text-gray-600 mb-4">Dynamics 365 Finance umożliwia:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li><span className="font-semibold">Automatyczne obliczanie podatków:</span> System na bieżąco aktualizuje stawki podatkowe i automatycznie generuje obliczenia, co eliminuje konieczność ręcznego wprowadzania danych.</li>
                      <li><span className="font-semibold">Generowanie deklaracji podatkowych:</span> Moduł ten ułatwia przygotowanie i przesyłanie deklaracji zgodnie z wymogami prawnymi w różnych krajach.</li>
                      <li><span className="font-semibold">Monitorowanie zmian w przepisach:</span> System na bieżąco dostosowuje się do zmieniających się regulacji, co pozwala firmom zachować zgodność bez konieczności ciągłego śledzenia nowych przepisów.</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">Znaczenie zgodności z przepisami podatkowymi</h3>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Spójność z regulacjami</h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Dzięki integracji z różnymi systemami prawnymi, firmy mogą łatwo dostosować się do wymogów podatkowych w różnych krajach.
                      </p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Redukcja ryzyka</h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Automatyzacja procesów podatkowych minimalizuje ryzyko błędów, które mogłyby prowadzić do kosztownych konsekwencji prawnych.
                      </p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Przejrzystość</h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        System zapewnia pełną widoczność wszystkich operacji podatkowych, co ułatwia audyt i kontrolę wewnętrzną.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">Przykłady zastosowania w różnych krajach</h3>
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full bg-white rounded-lg shadow">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Zastosowanie</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Stany Zjednoczone</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Automatyczne generowanie raportów podatkowych zgodnych z wymogami IRS.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Unia Europejska</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Wsparcie dla VAT i innych podatków obowiązujących w krajach członkowskich UE.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Azja</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Dostosowanie do specyficznych wymogów podatkowych w krajach takich jak Chiny czy Indie.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">Korzyści z zarządzania podatkami</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li><span className="font-semibold">Oszczędność czasu:</span> Automatyzacja procesów podatkowych redukuje czasochłonne zadania manualne.</li>
                        <li><span className="font-semibold">Zwiększona dokładność:</span> Minimalizacja błędów dzięki automatycznym obliczeniom i raportowaniu.</li>
                      </ul>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li><span className="font-semibold">Elastyczność:</span> Możliwość dostosowania systemu do zmieniających się przepisów podatkowych.</li>
                        <li><span className="font-semibold">Bezpieczeństwo prawne:</span> Zapewnienie zgodności z lokalnymi i międzynarodowymi regulacjami podatkowymi.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#107c10] to-[#159019] p-6 rounded-lg shadow-lg text-white">
                    <p className="leading-relaxed">
                      66666Dzięki zaawansowanym funkcjom zarządzania podatkami, Dynamics 365 Finance stanowi niezawodne rozwiązanie dla firm, które chcą optymalizować swoje procesy podatkowe, zachowując jednocześnie pełną zgodność z przepisami prawnymi.
                    </p>
                  </div>
                </div>

                {/* Cash Management Section */}
                <div className="space-y-6 mt-12 border-t pt-12">
                  <h2 className="text-3xl font-bold">Zarządzanie gotówką</h2>
                  <p className="text-base leading-relaxed mb-6">
                    Microsoft Dynamics 365 Finance oferuje zaawansowane narzędzia do zarządzania gotówką, które pozwalają przedsiębiorstwom na efektywne monitorowanie i optymalizację przepływów pieniężnych. Dzięki tym funkcjom firmy mogą utrzymać płynność finansową, co jest kluczowe dla stabilności operacyjnej i rozwoju biznesu. System umożliwia bieżące śledzenie przepływów gotówkowych, prognozowanie przyszłych potrzeb finansowych oraz podejmowanie strategicznych decyzji opartych na aktualnych danych.
                  </p>

                  <h3 className="text-2xl font-bold mb-4">Funkcje zarządzania gotówką</h3>
                  <div className="bg-white p-6 rounded-lg shadow mb-8">
                    <p className="text-gray-600 mb-4">Dynamics 365 Finance zapewnia kompleksowe rozwiązania do zarządzania gotówką, w tym:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li><span className="font-semibold">Monitorowanie przepływów pieniężnych:</span> System umożliwia śledzenie wpływów i wydatków w czasie rzeczywistym, co pozwala na szybkie reagowanie na zmiany w sytuacji finansowej firmy.</li>
                      <li><span className="font-semibold">Prognozowanie gotówki:</span> Narzędzia do prognozowania umożliwiają przewidywanie przyszłych przepływów pieniężnych, co pomaga w planowaniu wydatków i unikaniu braku płynności.</li>
                      <li><span className="font-semibold">Optymalizacja płynności finansowej:</span> Dzięki analizie danych firmy mogą lepiej zarządzać swoimi zasobami gotówkowymi, minimalizując ryzyko finansowe.</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">Narzędzia do zarządzania gotówką</h3>
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full bg-white rounded-lg shadow">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Narzędzie</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Opis</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Monitorowanie przepływów pieniężnych</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Śledzenie wpływów i wydatków w czasie rzeczywistym.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Prognozowanie gotówki</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Przewidywanie przyszłych przepływów pieniężnych na podstawie danych historycznych.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Analiza płynności finansowej</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Ocena bieżącej i przyszłej zdolności do spłaty zobowiązań.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Zarządzanie zobowiązaniami</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Kontrola terminów płatności i optymalizacja wykorzystania gotówki.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">Znaczenie zarządzania gotówką dla płynności finansowej</h3>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Unikanie braku płynności</h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Szybkie identyfikowanie potencjalnych niedoborów gotówki i podejmowanie działań zapobiegawczych.
                      </p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Optymalizacja zasobów</h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Lepsze zarządzanie gotówką pozwala na efektywniejsze alokowanie środków finansowych.
                      </p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Stabilność finansowa</h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Regularne monitorowanie i analiza przepływów pieniężnych przyczyniają się do długoterminowej stabilności firmy.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">Korzyści z zarządzania gotówką</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li><span className="font-semibold">Lepsza kontrola nad finansami:</span> Pełna widoczność przepływów pieniężnych umożliwia precyzyjne zarządzanie gotówką.</li>
                        <li><span className="font-semibold">Zmniejszenie ryzyka finansowego:</span> Prognozowanie i analiza pomagają uniknąć nieprzewidzianych problemów z płynnością.</li>
                      </ul>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li><span className="font-semibold">Szybsze podejmowanie decyzji:</span> Dostęp do aktualnych danych finansowych pozwala na szybkie i trafne decyzje biznesowe.</li>
                        <li><span className="font-semibold">Zwiększenie efektywności operacyjnej:</span> Automatyzacja procesów związanych z zarządzaniem gotówką oszczędza czas i redukuje błędy.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#107c10] to-[#159019] p-6 rounded-lg shadow-lg text-white">
                    <p className="leading-relaxed">
                      Dzięki narzędziom do zarządzania gotówką w Dynamics 365 Finance, przedsiębiorstwa mogą skutecznie monitorować i optymalizować swoje przepływy pieniężne, co przekłada się na większą stabilność finansową i możliwość realizacji długoterminowych celów biznesowych.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'integrations' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="integrations-tab">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center mb-8">Integracje i wsparcie technologiczne</h2>
              
              {/* Integration and Technology Support Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Integracja i wsparcie technologiczne</h3>
                <p className="text-base leading-relaxed mb-6">
                  Microsoft Dynamics 365 Finance oferuje zaawansowaną integrację z innymi produktami z ekosystemu Microsoft, co pozwala na płynną wymianę danych, automatyzację procesów oraz pełne wykorzystanie zaawansowanych narzędzi analitycznych i chmurowych. Takie podejście zapewnia użytkownikom zarówno elastyczność, jak i niezawodność w zarządzaniu finansami.
                </p>

                <h4 className="text-xl font-semibold mb-3">Kluczowe narzędzia wspierające integrację:</h4>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Power BI</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Zaawansowane wizualizacje danych finansowych w czasie rzeczywistym, wspierające podejmowanie decyzji.
                    </p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Microsoft Azure</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Chmurowa infrastruktura zapewniająca skalowalność, bezpieczeństwo oraz integrację między systemami.
                    </p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Microsoft 365</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Łatwa synchronizacja z aplikacjami, takimi jak Excel czy Teams, usprawniająca współpracę i raportowanie.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold mb-3">Przykłady integracji:</h4>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Power BI</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Wykorzystanie zaawansowanych raportów do analizy rentowności i monitorowania kluczowych wskaźników finansowych (KPI).
                    </p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Azure AI</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Wspieranie procesów prognozowania dzięki modelom opartym na sztucznej inteligencji.
                    </p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Microsoft Teams</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Automatyczne przesyłanie raportów finansowych i ułatwiona komunikacja w zespołach.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold mb-3">Integracje i ich korzyści:</h4>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-lg shadow">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Narzędzie</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Funkcjonalność</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Korzyść</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Power BI</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Wizualizacja danych i raportowanie</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Szybkie podejmowanie decyzji na podstawie danych</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Azure AI</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Automatyzacja analizy i prognozowania</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Precyzyjne planowanie finansowe i minimalizacja ryzyka</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Excel</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Synchronizacja arkuszy danych</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Efektywna praca z danymi w znanym środowisku</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Azure Active Directory</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Zabezpieczenia i zarządzanie dostępami</td>
                        <td className="px-6 py-4 text-sm text-gray-500">Zwiększenie bezpieczeństwa i łatwość zarządzania użytkownikami</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-xl font-semibold mt-6 mb-3">Znaczenie wsparcia technologicznego:</h4>
                <p className="text-base leading-relaxed mb-6 text-gray-600">
                  Wsparcie technologiczne w Dynamics 365 Finance pozwala użytkownikom na łatwiejsze wdrożenie systemu oraz bieżące wsparcie w zakresie integracji i skalowania. Dzięki temu firmy mogą korzystać z najbardziej zaawansowanych narzędzi przy minimalnym ryzyku technicznym, a wsparcie ze strony Microsoft zapewnia ciągły rozwój systemu oraz jego zgodność z najnowszymi standardami.
                </p>

                {/* Power BI Integration Section */}
                <div className="space-y-6 mt-12 border-t pt-12">
                  <h3 className="text-2xl font-bold">Integracja z Power BI</h3>
                  <p className="text-base leading-relaxed mb-6">
                    Integracja Microsoft Dynamics 365 Finance z Power BI to kluczowe wsparcie dla firm w zakresie analityki biznesowej. Power BI umożliwia przekształcanie surowych danych finansowych w interaktywne wizualizacje i raporty, wspierając zespoły w podejmowaniu trafnych decyzji strategicznych. Dzięki tej integracji użytkownicy mają dostęp do bieżących analiz w czasie rzeczywistym, co zwiększa efektywność działania organizacji.
                  </p>

                  <h4 className="text-xl font-semibold mb-3">Korzyści z integracji:</h4>
                  <div className="grid md:grid-cols-1 gap-6 mb-6">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Wizualizacja danych: Zaawansowane dashboardy umożliwiają przedstawienie danych finansowych w przejrzysty i intuicyjny sposób.</li>
                        <li>Automatyczne raportowanie: Power BI generuje raporty na podstawie aktualnych danych z Dynamics 365 Finance, eliminując potrzebę manualnego przygotowywania zestawień.</li>
                        <li>Analiza trendów: Narzędzia analityczne pozwalają identyfikować kluczowe wzorce i przewidywać przyszłe wyniki finansowe.</li>
                      </ul>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mb-3">Przykłady zastosowania analityki biznesowej:</h4>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Monitorowanie wskaźników</h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Tworzenie dashboardów KPI, które pokazują rentowność, przepływy pieniężne oraz wyniki finansowe w czasie rzeczywistym.
                      </p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Analiza wydajności</h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Ocena kosztów i efektywności działań w różnych obszarach organizacji, takich jak produkcja czy sprzedaż.
                      </p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Prognozowanie finansowe</h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Modelowanie przyszłych przepływów pieniężnych na podstawie historycznych danych i aktualnych wskaźników.
                      </p>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mb-3">Korzyści z integracji Dynamics 365 Finance i Power BI:</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-lg shadow">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Korzyść</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Opis</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Szybsze podejmowanie decyzji</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Dane w czasie rzeczywistym wspierają dynamiczne działania.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lepsza kontrola finansowa</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Monitorowanie kluczowych wskaźników na interaktywnych dashboardach.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Oszczędność czasu</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Automatyczne generowanie raportów eliminuje powtarzalne zadania.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Większa przejrzystość danych</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Dane finansowe są dostępne w przejrzystej formie wizualnej.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ułatwienie współpracy</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Udostępnianie analiz między zespołami bez potrzeby eksportu danych.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-xl font-semibold mt-6 mb-3">Znaczenie analizy danych:</h4>
                  <p className="text-base leading-relaxed mb-6 text-gray-600">
                    Dzięki integracji Dynamics 365 Finance z Power BI organizacje zyskują narzędzie, które nie tylko poprawia dostęp do danych, ale także umożliwia ich głębszą analizę. Lepsze zrozumienie danych pozwala na eliminację ryzyk finansowych, skuteczniejsze planowanie oraz osiąganie celów strategicznych. Integracja ta wspiera firmy w tworzeniu przewagi konkurencyjnej poprzez wykorzystanie zaawansowanej analityki.
                  </p>
                </div>

                {/* Azure Support Section */}
                <div className="space-y-6 mt-12 border-t pt-12">
                  <h3 className="text-2xl font-bold">Wsparcie Microsoft Azure</h3>
                  <p className="text-base leading-relaxed mb-6">
                    Microsoft Azure zapewnia niezawodne wsparcie chmurowe dla Dynamics 365 Finance, umożliwiając firmom zarządzanie finansami w skalowalnym, bezpiecznym i nowoczesnym środowisku. Dzięki wykorzystaniu infrastruktury Azure, przedsiębiorstwa mogą czerpać korzyści z wysokiej dostępności usług, zaawansowanych funkcji analitycznych oraz automatyzacji operacji finansowych.
                  </p>

                  <h4 className="text-xl font-semibold mb-3">Przykłady zastosowania chmury w zarządzaniu finansami:</h4>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Automatyczna archiwizacja</h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Chmura Azure umożliwia przechowywanie historycznych danych finansowych, zapewniając łatwy dostęp do nich w każdej chwili.
                      </p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Skalowanie zasobów</h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        W miarę wzrostu firmy, Azure dynamicznie dostosowuje zasoby, aby obsłużyć zwiększone zapotrzebowanie na przetwarzanie danych.
                      </p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Disaster recovery</h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Zintegrowane rozwiązania backupu i odzyskiwania danych minimalizują ryzyko utraty kluczowych informacji finansowych w przypadku awarii.
                      </p>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mb-3">Znaczenie bezpieczeństwa i zgodności danych:</h4>
                  <div className="bg-white p-6 rounded-lg shadow mb-6">
                    <p className="text-gray-600 leading-relaxed">
                      Microsoft Azure stosuje najwyższe standardy bezpieczeństwa, w tym szyfrowanie danych oraz narzędzia do monitorowania potencjalnych zagrożeń w czasie rzeczywistym. Dzięki temu firmy mogą zarządzać swoimi finansami z pełną pewnością, że dane są chronione. Co więcej, platforma spełnia globalne wymogi prawne i regulacyjne, co jest kluczowe dla przedsiębiorstw działających w różnych jurysdykcjach.
                    </p>
                  </div>

                  <h4 className="text-xl font-semibold mb-3">Lista korzyści z używania chmury Azure:</h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Bezpieczeństwo na najwyższym poziomie: Zaawansowane szyfrowanie danych i ochrona przed cyberatakami.</li>
                        <li>Zgodność z regulacjami: Spełnianie międzynarodowych standardów, takich jak GDPR czy ISO 27001.</li>
                        <li>Wysoka dostępność usług: Gwarancja działania systemu dzięki globalnej sieci centrów danych.</li>
                      </ul>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Oszczędność kosztów: Redukcja wydatków na lokalną infrastrukturę IT.</li>
                        <li>Elastyczność: Możliwość skalowania w zależności od potrzeb firmy.</li>
                        <li>Integracja z innymi narzędziami: Płynne połączenie z Power BI oraz innymi rozwiązaniami Microsoft.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#107c10] to-[#159019] p-6 rounded-lg shadow-lg text-white">
                    <p className="leading-relaxed">
                      Wsparcie chmurowe Microsoft Azure stanowi fundament stabilnego i efektywnego zarządzania finansami w Dynamics 365 Finance. Dzięki zaawansowanym funkcjom Azure firmy mogą działać szybciej, bezpieczniej i bardziej elastycznie, dostosowując się do zmieniających się warunków rynkowych.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'faq' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="faq-tab">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center mb-8">Najczęściej zadawane pytania</h2>
              <div className="grid gap-6">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50"
                  >
                    <h4 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-[#107c10]">
                      {faq.question}
                    </h4>
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

export default DynamicsFinance;
