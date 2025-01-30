import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaChartLine, FaUserFriends, FaRobot, FaChartBar, FaMicrosoft, FaMobile } from 'react-icons/fa';
import { useModuleBasket } from '../context/ModuleBasketContext';
import { modules } from '../data/modules';

const seoData = {
  pageData: {
    title: "Microsoft Dynamics 365 Sales | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
    description: "Zwiększ efektywność sprzedaży z Microsoft Dynamics 365 Sales. Wykorzystaj sztuczną inteligencję do lepszego prognozowania i zamykania transakcji.",
    ogType: 'website'
  },
  customSchema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Microsoft Dynamics 365 Sales",
    "description": "Zwiększ efektywność sprzedaży z Microsoft Dynamics 365 Sales. Wykorzystaj sztuczną inteligencję do lepszego prognozowania i zamykania transakcji.",
    "url": "https://dynamics365.com.pl/dynamics-365-sales",
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
    <h2 className="m-0 p-0 text-inherit font-inherit">{label}</h2>
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
    question: "Czym jest Microsoft Dynamics 365 Sales?",
    answer: "Microsoft Dynamics 365 Sales to zaawansowane narzędzie CRM, które wspiera zespoły sprzedaży w zarządzaniu relacjami z klientami, automatyzacji procesów sprzedażowych oraz analizie danych w celu zwiększenia efektywności i wyników sprzedaży."
  },
  {
    question: "Jakie są główne funkcje Dynamics 365 Sales?",
    answer: "Inteligentne prognozowanie sprzedaży z wykorzystaniem AI, automatyzacja codziennych zadań sprzedażowych, personalizacja doświadczeń klientów, analiza danych i interaktywne raporty, integracja z aplikacjami Microsoft, takimi jak Outlook czy Teams, oraz mobilny dostęp do platformy."
  },
  {
    question: "Czy Dynamics 365 Sales jest odpowiednie dla małych firm?",
    answer: "Tak, rozwiązanie jest skalowalne i może być dostosowane do potrzeb zarówno małych, jak i dużych firm. Oferuje elastyczne plany i funkcje, które mogą być rozwijane w miarę wzrostu firmy."
  },
  {
    question: "Czy mogę korzystać z Dynamics 365 Sales na urządzeniach mobilnych?",
    answer: "Tak, Dynamics 365 Sales posiada aplikację mobilną, która umożliwia dostęp do danych i funkcji z dowolnego miejsca, co jest szczególnie przydatne dla zespołów pracujących w terenie."
  },
  {
    question: "Jak Dynamics 365 Sales pomaga w prognozowaniu sprzedaży?",
    answer: "Platforma wykorzystuje sztuczną inteligencję i analizę danych historycznych, aby przewidywać wyniki sprzedaży. Użytkownicy mogą tworzyć prognozy na podstawie historycznych danych, bieżących trendów i analizy potencjalnych transakcji. Funkcja ta pomaga nie tylko w planowaniu, ale także w optymalizacji działań sprzedażowych."
  },
  {
    question: "Czy Dynamics 365 Sales integruje się z innymi narzędziami?",
    answer: "Tak, Dynamics 365 Sales bezproblemowo integruje się z innymi rozwiązaniami Microsoft, takimi jak Office 365, Teams, SharePoint czy Power BI, co zapewnia spójność danych i usprawnia współpracę."
  },
  {
    question: "Czy rozwiązanie wspiera personalizację działań sprzedażowych?",
    answer: "Tak, Dynamics 365 Sales umożliwia zbieranie i analizę danych o klientach, co pozwala na dostosowanie ofert i komunikacji do indywidualnych potrzeb."
  },
  {
    question: "Jak Dynamics 365 Sales pomaga zwiększyć efektywność zespołu sprzedażowego?",
    answer: "Dzięki automatyzacji procesów, takich jak zarządzanie zadaniami, śledzenie potencjalnych klientów i generowanie raportów, sprzedawcy mogą skupić się na budowaniu relacji z klientami."
  },
  {
    question: "Jak rozpocząć pracę z Dynamics 365 Sales?",
    answer: "Wystarczy skontaktować się z partnerem Microsoft lub odwiedzić stronę produktu, aby uzyskać informacje o licencjonowaniu, konfiguracji i wdrożeniu rozwiązania."
  },
  {
    question: "Czy Dynamics 365 Sales oferuje wsparcie techniczne?",
    answer: "Tak, Microsoft zapewnia wsparcie techniczne dla użytkowników Dynamics 365 Sales. Dodatkowo można korzystać z bogatej dokumentacji online oraz szkoleń."
  },
  {
    question: "Czy mogę wypróbować Dynamics 365 Sales przed zakupem?",
    answer: "Tak, Microsoft oferuje bezpłatne wersje próbne, które pozwalają przetestować funkcjonalności systemu przed podjęciem decyzji o zakupie."
  },
  {
    question: "Jak Dynamics 365 Sales wspiera rozwój relacji z klientami?",
    answer: "Rozwiązanie dostarcza narzędzi do monitorowania historii kontaktów, analizy preferencji klientów oraz dostosowania strategii do ich indywidualnych potrzeb."
  },
  {
    question: "Jakie są korzyści z integracji Dynamics 365 Sales z Power BI?",
    answer: "Power BI pozwala na zaawansowaną analizę danych sprzedażowych, wizualizację wyników oraz tworzenie interaktywnych raportów, które pomagają w podejmowaniu strategicznych decyzji."
  },
  {
    question: "Jakie są wymagania systemowe dla Dynamics 365 Sales?",
    answer: "Dynamics 365 Sales działa w chmurze, dzięki czemu nie wymaga instalacji lokalnych. Potrzebny jest jedynie dostęp do przeglądarki internetowej i stabilne połączenie z Internetem."
  },
  {
    question: "Czy Dynamics 365 Sales wspiera zarządzanie lejkiem sprzedaży?",
    answer: "Tak, system oferuje funkcje do monitorowania postępów w lejku sprzedażowym, identyfikacji kluczowych etapów oraz zarządzania szansami sprzedażowymi."
  },
  {
    question: "Czy Dynamics 365 Sales obsługuje wiele języków?",
    answer: "Tak, platforma jest dostępna w wielu wersjach językowych, w tym w języku polskim."
  },
  {
    question: "Jak Dynamics 365 Sales wspiera współpracę zespołową?",
    answer: "Integracja z Microsoft Teams i innymi narzędziami umożliwia efektywną komunikację, udostępnianie plików i wspólne zarządzanie projektami w czasie rzeczywistym."
  },
  {
    question: "Czy Dynamics 365 Sales pomaga w analizie danych klientów?",
    answer: "Tak, rozwiązanie umożliwia gromadzenie, analizę i wizualizację danych o klientach, co pozwala lepiej zrozumieć ich potrzeby i dostosować działania sprzedażowe."
  },
  {
    question: "Czy rozwiązanie wspiera sprzedaż międzynarodową?",
    answer: "Dynamics 365 Sales jest idealnym narzędziem do obsługi sprzedaży na rynkach międzynarodowych dzięki wielojęzyczności, integracji z systemami płatności oraz funkcjom zgodności z lokalnymi przepisami."
  },
  {
    question: "Jak Dynamics 365 Sales wspiera zarządzanie relacjami z kluczowymi klientami (Key Account Management)?",
    answer: "System pozwala na szczegółowe śledzenie działań związanych z kluczowymi klientami, monitorowanie ich preferencji oraz dostosowanie strategii do ich indywidualnych potrzeb."
  }
];

export default function DynamicsSales() {
  const [activeTab, setActiveTab] = useState('overview');
  const { selectedModules, addModule } = useModuleBasket();
  const hasModules = selectedModules.length > 0;
  
  const isModuleInBasket = selectedModules.some(module => module.id === 1);

  const handleAddToBasket = () => {
    if (!isModuleInBasket) {
      const salesModule = modules.find(m => m.id === 1);
      if (salesModule) {
        addModule(salesModule);
      }
    }
  };

  const features = [
    {
      icon: <FaRobot />,
      title: "Automatyzacja procesów sprzedażowych",
      description: "Usprawnia codzienne zadania, takie jak generowanie ofert, prognozowanie sprzedaży i planowanie spotkań, redukując czas poświęcany na czynności manualne."
    },
    {
      icon: <FaUserFriends />,
      title: "Zarządzanie relacjami z klientami (CRM)",
      description: "Centralizuje dane o klientach, umożliwiając budowanie trwałych relacji poprzez personalizację komunikacji i lepsze zrozumienie potrzeb odbiorców."
    },
    {
      icon: <FaChartLine />,
      title: "Śledzenie kont i kontaktów",
      description: "Ułatwia zarządzanie informacjami o klientach oraz rejestrowanie interakcji, co pozwala zespołom na bardziej efektywne zarządzanie bazą klientów."
    },
    {
      icon: <FaChartBar />,
      title: "Analiza wydajności sprzedaży",
      description: "Oferuje zaawansowane narzędzia analityczne, które dostarczają kluczowych informacji o wynikach zespołu sprzedażowego oraz identyfikują obszary wymagające poprawy."
    },
    {
      icon: <FaMicrosoft />,
      title: "Tworzenie i zarządzanie kampaniami",
      description: "Integruje działania marketingowe i sprzedażowe, umożliwiając zespołom łatwe prowadzenie kampanii oraz monitorowanie ich skuteczności."
    },
    {
      icon: <FaChartLine />,
      title: "Zarządzanie lejkiem sprzedaży",
      description: "Zapewnia pełną widoczność statusu poszczególnych transakcji i umożliwia monitorowanie postępów w realizacji celów."
    },
    {
      icon: <FaChartBar />,
      title: "Prognozowanie sprzedaży",
      description: "Dostarcza precyzyjnych przewidywań, które wspierają planowanie działań strategicznych."
    },
    {
      icon: <FaMicrosoft />,
      title: "Integracja z Microsoft Teams i Outlook",
      description: "Ułatwia współpracę między członkami zespołu i usprawnia komunikację z klientami."
    }
  ];

  return (
    <>
      <MetaTags {...seoData} />
      <Navbar />
      <DynamicsHeroSection 
        title="Microsoft Dynamics 365 Sales"
        description="Podnieś efektywność swojego zespołu sprzedaży i przyspiesz finalizację transakcji, korzystając z CRM napędzanego technologią AI, który inteligentnie wspiera każde działanie handlowe."
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
                      <strong>Microsoft Dynamics 365 Sales</strong> to nowoczesne rozwiązanie CRM oparte na sztucznej inteligencji, które rewolucjonizuje sposób zarządzania sprzedażą. System wspiera zespoły sprzedażowe w osiąganiu ambitnych celów i przekraczaniu oczekiwań klientów, dostarczając zaawansowane narzędzia do analizy danych, automatyzacji procesów oraz budowania relacji z klientami.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                      Dynamics 365 Sales umożliwia zespołom sprzedaży efektywne zarządzanie procesami, co przekłada się na zwiększenie ich skuteczności i osiąganie lepszych wyników biznesowych.
                    </p>
                  </div>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg min-h-[200px]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full min-h-[200px]"
                        src="https://www.youtube.com/embed/TMdY77b1TTg?rel=0&showinfo=0&controls=1&autoplay=0"
                        title="Microsoft Dynamics 365 Sales Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Kluczowe cechy i funkcjonalności</h2>
                <div className="space-y-4">
                  
                  <ul className="list-disc pl-6 space-y-4 text-gray-700">
                    <li><strong>CRM oparty na sztucznej inteligencji:</strong> Automatyzuje procesy sprzedażowe i dostarcza prognozy, które wspierają zespoły w podejmowaniu lepszych decyzji.</li>
                    <li><strong>Zaawansowana analiza danych:</strong> Umożliwia identyfikację trendów sprzedażowych i potrzeb klientów dzięki integracji z narzędziami analitycznymi, takimi jak Power BI.</li>
                    <li><strong>Automatyzacja procesów sprzedaży:</strong> Redukuje czas poświęcany na zadania manualne, pozwalając zespołom skupić się na budowaniu relacji z klientami.</li>
                    <li><strong>Personalizacja interakcji z klientem:</strong> Dzięki analizie danych o klientach system sugeruje najbardziej efektywne działania sprzedażowe.</li>
                    <li><strong>Integracja z ekosystemem Microsoft:</strong> Bezproblemowa współpraca z aplikacjami takimi jak Microsoft Teams, Outlook czy SharePoint zwiększa produktywność i usprawnia komunikację w zespole.</li>
                    <li><strong>Zarządzanie lejkiem sprzedażowym:</strong> Umożliwia monitorowanie postępu transakcji na każdym etapie procesu sprzedaży.</li>
                    <li><strong>Obsługa mobilna:</strong> Zapewnia dostęp do wszystkich funkcji systemu z poziomu urządzeń mobilnych, umożliwiając pracę zdalną i w terenie.</li>
                  </ul>
                  <p className="text-gray-700 font-medium">
                  Microsoft Dynamics 365 Sales to narzędzie, które pomaga zespołom sprzedaży osiągać nowe poziomy efektywności, oferując niezawodne wsparcie na każdym etapie procesu sprzedaży.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-bold">Zwiększenie efektywności zespołu sprzedażowego</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dynamics 365 Sales pozwala sprzedawcom zaoszczędzić czas na rutynowych zadaniach, takich jak wprowadzanie danych czy generowanie raportów. Dzięki temu mogą oni skupić się na budowaniu wartościowych relacji z klientami.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-bold">Poprawa wyników sprzedaży</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dostęp do zaawansowanych narzędzi analitycznych i prognoz opartych na danych pozwala zespołom sprzedaży działać bardziej efektywnie i podejmować lepsze decyzje.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-bold">Lepsze zrozumienie potrzeb klientów</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Zgromadzone dane o klientach dają pełen obraz ich potrzeb, co umożliwia personalizację ofert i budowanie długoterminowych relacji.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-bold">Skrócenie cyklu sprzedaży</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dzięki automatyzacji procesów i szybkiemu dostępowi do informacji, sprzedawcy mogą szybciej finalizować transakcje, co przekłada się na lepsze wyniki finansowe firmy.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-bold">Skalowalność i elastyczność</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dynamics 365 Sales dostosowuje się do potrzeb zarówno małych, jak i dużych przedsiębiorstw. W miarę rozwoju firmy, platforma może być łatwo rozbudowywana o dodatkowe funkcje.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#00a2ed] text-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#0091d4] cursor-pointer group">
                  <h2 className="text-2xl font-bold mb-4 transform transition-transform duration-500 group-hover:translate-x-2">Dlaczego warto wybrać Dynamics 365 Sales?</h2>
                  <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Microsoft Dynamics 365 Sales to nie tylko narzędzie CRM – to kompleksowe rozwiązanie, które wspiera rozwój firmy na każdym etapie procesu sprzedażowego. Dzięki połączeniu zaawansowanej technologii, automatyzacji i elastyczności, platforma pomaga firmom osiągać lepsze wyniki biznesowe i budować trwałe relacje z klientami.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className={`tab-content ${activeTab === 'features' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="features-tab">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Microsoft Dynamics 365 Sale</strong> oferuje zaawansowane funkcje, które wspierają zespoły sprzedażowe w skutecznym zarządzaniu procesami i relacjami z klientami. System umożliwia automatyzację procesów sprzedażowych, dzięki czemu zespoły mogą skupić się na realizacji strategicznych celów, a także dostarcza narzędzia do analizy wydajności, wspierając podejmowanie lepszych decyzji biznesowych.
                </p>
                <h2 className="text-2xl font-bold mt-6">Główne funkcje Dynamics 365 Sales</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
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

              {/* Process Automation Section */}
              <div className="mt-12 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[#107c10] text-3xl">
                    <FaRobot />
                  </div>
                  <h2 className="text-2xl font-bold">Automatyzacja procesów sprzedażowych</h2>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Microsoft Dynamics 365 Sales automatyzuje kluczowe procesy sprzedażowe, począwszy od generowania potencjalnych klientów, aż po finalizację zamówień. System upraszcza takie zadania, jak zarządzanie kontaktami, tworzenie ofert, rejestrowanie interakcji z klientami oraz planowanie działań sprzedażowych. Dzięki temu zespoły sprzedażowe mogą skupić się na budowaniu relacji z klientami i osiąganiu wyznaczonych celów.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Jednym z najważniejszych aspektów automatyzacji w Dynamics 365 Sales jest możliwość automatycznego przypisywania potencjalnych klientów do odpowiednich członków zespołu na podstawie wcześniej ustalonych kryteriów. Ponadto system generuje szczegółowe raporty oraz prognozy, co pozwala na bardziej świadome planowanie działań sprzedażowych.
                  </p>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Korzyści z automatyzacji:</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-lg font-semibold text-[#107c10] mb-2">Zwiększa efektywność zespołów sprzedażowych</h4>
                        <p>Eliminacja rutynowych, czasochłonnych zadań pozwala zespołom skupić się na działaniach przynoszących realną wartość biznesową.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-lg font-semibold text-[#107c10] mb-2">Redukcja błędów ludzkich</h4>
                        <p>Automatyzacja zmniejsza ryzyko pomyłek, np. przy wprowadzaniu danych lub tworzeniu ofert.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-lg font-semibold text-[#107c10] mb-2">Poprawa jakości obsługi klienta</h4>
                        <p>Dzięki automatycznym przypomnieniom i aktualizacjom zespół może szybko reagować na potrzeby klientów, budując lepsze relacje.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-lg font-semibold text-[#107c10] mb-2">Optymalizacja procesów sprzedaży</h4>
                        <p>Lepsza organizacja pracy i dostęp do zaawansowanych narzędzi analitycznych pozwalają zespołom działać bardziej strategicznie.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed mt-8 font-medium">
                    Automatyzacja w Dynamics 365 Sales to rozwiązanie, które przekształca codzienne operacje sprzedażowe, umożliwiając zespołom osiąganie lepszych wyników i efektywne zarządzanie procesami.
                  </p>
                </div>
              </div>

              {/* CRM Section */}
              <div className="mt-12 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[#107c10] text-3xl">
                    <FaUserFriends />
                  </div>
                  <h2 className="text-2xl font-bold">Zarządzanie relacjami z klientami</h2>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Microsoft Dynamics 365 Sales to zaawansowane narzędzie, które wspiera firmy w zarządzaniu relacjami z klientami, umożliwiając budowanie trwałych i wartościowych kontaktów biznesowych. System gromadzi i centralizuje wszystkie dane o klientach, takie jak historia zakupów, preferencje czy wcześniejsze interakcje, co pozwala zespołom sprzedażowym lepiej dostosować swoje działania do indywidualnych potrzeb odbiorców.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Budowanie relacji z klientami jest kluczowe dla osiągnięcia sukcesu w sprzedaży. Dzięki Dynamics 365 Sales zespoły mogą personalizować komunikację, co zwiększa zaangażowanie klientów i buduje ich lojalność. Dodatkowo narzędzie pomaga monitorować każdy etap podróży klienta, co pozwala na szybsze reagowanie na zmieniające się potrzeby.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Dynamics 365 Sales umożliwia także automatyczne przypomnienia o ważnych działaniach, takich jak spotkania czy follow-upy, co pomaga zespołom utrzymywać wysoką jakość obsługi.
                  </p>
                </div>
              </div>

              {/* Performance Analysis Section */}
              <div className="mt-12 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[#107c10] text-3xl">
                    <FaChartBar />
                  </div>
                  <h2 className="text-2xl font-bold">Analiza wydajności sprzedaży</h2>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Dynamics 365 Sales oferuje zaawansowane narzędzia do analizy wydajności sprzedaży, które pomagają zespołom sprzedażowym monitorować swoje wyniki oraz podejmować lepsze decyzje strategiczne. System dostarcza precyzyjne dane w czasie rzeczywistym, co pozwala na pełny wgląd w kluczowe wskaźniki i trendy.
                  </p>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Kluczowe narzędzia analityczne dostępne w Dynamics 365 Sales:</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-lg font-semibold text-[#107c10] mb-2">Raportowanie</h4>
                        <p>Tworzenie szczegółowych raportów dotyczących wyników zespołu, transakcji oraz efektywności działań sprzedażowych.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-lg font-semibold text-[#107c10] mb-2">Prognozowanie</h4>
                        <p>Przewidywanie wyników sprzedaży na podstawie analizy danych historycznych i aktualnych trendów rynkowych.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-lg font-semibold text-[#107c10] mb-2">Dashboardy w czasie rzeczywistym</h4>
                        <p>Intuicyjne wizualizacje danych, które umożliwiają szybkie podejmowanie decyzji.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-lg font-semibold text-[#107c10] mb-2">Analiza trendów sprzedażowych</h4>
                        <p>Identyfikacja wzorców zachowań klientów oraz kluczowych czynników wpływających na wyniki.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-lg font-semibold text-[#107c10] mb-2">Ocena wyników zespołu</h4>
                        <p>Możliwość porównywania osiągnięć poszczególnych członków zespołu w celu lepszego zarządzania efektywnością.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed mt-8 font-medium">
                    Dzięki funkcjom takim jak raportowanie i prognozowanie, Dynamics 365 Sales wspiera firmy w skutecznym zarządzaniu procesami sprzedażowymi oraz w optymalnym wykorzystaniu zasobów.
                  </p>
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
