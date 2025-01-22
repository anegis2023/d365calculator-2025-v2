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
    answer: "System oferuje zaawansowane narzędzia do prognozowania przepływów gotówkowych, co pozwala na precyzyjne planowanie finansowe i identyfikację potencjalnych problemów z płynnością."
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

export default function DynamicsFinance() {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'faq'>('overview');
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
                  Microsoft Dynamics 365 Finance to zaawansowane narzędzie, które wspiera organizacje w zarządzaniu finansami, automatyzując kluczowe procesy i zwiększając efektywność operacyjną. Dzięki jego funkcjonalnościom firmy z różnych branż mogą osiągać wyższy poziom produktywności i lepszą kontrolę nad swoimi finansami.
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
                        <td className="px-3 py-4 text-sm text-gray-500">Transparentność finansowa, zgodność z lokalnymi przepisami podatkowymi.</td>
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
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Analiza oparta na sztucznej inteligencji, która identyfikuje potencjalne oszczędności oraz ryzyka.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Predykcyjne modelowanie gotówki</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">System prognozuje przepływy pieniężne, umożliwiając lepsze planowanie finansowe.</p>
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
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Automatyzacja rozliczeń kosztów produkcji oraz lepsze monitorowanie wydajności operacyjnej.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Handel detaliczny</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Zarządzanie zapasami i finansami w czasie rzeczywistym, co pozwala szybciej reagować na zmiany rynkowe.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Sektor publiczny</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Transparentne zarządzanie budżetami i zgodność z przepisami podatkowymi.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Usługi finansowe</h4>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Precyzyjna analiza rentowności projektów i redukcja ryzyka operacyjnego.</p>
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
          )}

          {activeTab === 'features' && (
            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-center mb-8">Funkcje, które wyróżniają Dynamics 365 Finance</h3>
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
          )}
        </div>
      </DynamicsPageLayout>
    </>
  );
}
