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
    answer: "Platforma wykorzystuje sztuczną inteligencję i analizę danych historycznych, aby przewidywać wyniki sprzedaży, identyfikować potencjalne szanse i wspierać podejmowanie decyzji."
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
      icon: <FaChartLine />,
      title: "Inteligentne prognozowanie sprzedaży",
      description: "Dzięki analizie danych i algorytmom opartym na sztucznej inteligencji (AI), Dynamics 365 Sales pozwala dokładnie przewidywać wyniki sprzedaży. Użytkownicy mogą tworzyć prognozy na podstawie historycznych danych, bieżących trendów i analizy potencjalnych transakcji. Funkcja ta pomaga nie tylko w planowaniu, ale także w optymalizacji działań sprzedażowych."
    },
    {
      icon: <FaUserFriends />,
      title: "Personalizacja doświadczeń klientów",
      description: "Współczesny klient oczekuje indywidualnego podejścia. Dynamics 365 Sales umożliwia gromadzenie szczegółowych informacji o klientach, takich jak historia zakupów, preferencje czy dane demograficzne. Dzięki temu sprzedawcy mogą dostosować swoje oferty i komunikację do konkretnych potrzeb klientów, zwiększając szanse na zamknięcie transakcji."
    },
    {
      icon: <FaRobot />,
      title: "Automatyzacja procesów sprzedażowych",
      description: "Codzienne zadania, takie jak aktualizacja danych, tworzenie ofert czy śledzenie potencjalnych klientów, mogą być czasochłonne. Dynamics 365 Sales automatyzuje wiele z tych procesów, pozwalając zespołom sprzedaży skupić się na budowaniu relacji i realizacji strategicznych celów."
    },
    {
      icon: <FaChartBar />,
      title: "Wbudowana analiza danych",
      description: "Platforma oferuje zaawansowane narzędzia analityczne, które dostarczają wglądu w kluczowe metryki, takie jak wydajność zespołu, wskaźniki konwersji czy średni czas zamknięcia transakcji. Wizualizacje danych i interaktywne raporty umożliwiają łatwe monitorowanie wyników i podejmowanie lepszych decyzji."
    },
    {
      icon: <FaMicrosoft />,
      title: "Integracja z ekosystemem Microsoft",
      description: "Dynamics 365 Sales działa w pełnej integracji z innymi narzędziami Microsoft, takimi jak Outlook, Teams, Excel czy SharePoint. Dzięki temu użytkownicy mogą płynnie współpracować, wymieniać informacje i zarządzać projektami, nie opuszczając znanych aplikacji."
    },
    {
      icon: <FaMobile />,
      title: "Mobilność i dostępność",
      description: "Dzięki aplikacjom mobilnym sprzedawcy mogą pracować z dowolnego miejsca, mając dostęp do wszystkich niezbędnych informacji. Rozwiązanie to idealnie sprawdza się w przypadku zespołów pracujących w terenie lub zdalnie."
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
                      <strong>Microsoft Dynamics 365 Sales</strong> to zaawansowane rozwiązanie CRM, które kompleksowo wspiera zespoły sprzedażowe w realizacji celów i budowaniu trwałych relacji z klientami. System <strong>automatyzuje kluczowe etapy procesu sprzedaży</strong>, od generowania leadów po finalizację transakcji, co pozwala zespołom skupić się na działaniach strategicznych. Dzięki <strong>zaawansowanym narzędziom analitycznym</strong> umożliwia analizę kluczowych wskaźników wydajności (KPI), prognozowanie wyników sprzedaży oraz ocenę efektywności działań. 
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                      Dynamics 365 Sales <strong>integruje się z innymi narzędziami Microsoft</strong>, takimi jak Microsoft 365, LinkedIn czy Power BI, co zwiększa produktywność i ułatwia współpracę. Wykorzystanie <strong>sztucznej inteligencji</strong> pozwala na analizę interakcji z klientami, sugerowanie najlepszych działań i przewidywanie wyników, co przyspiesza zamykanie transakcji i budowanie wartościowych relacji. To nowoczesne narzędzie dostarcza zespołom sprzedażowym wszystko, czego potrzebują, aby sprostać wyzwaniom rynku i przewyższać oczekiwania klientów.
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
                <h2 className="text-2xl font-bold">Kluczowe wyzwania zespołów sprzedażowych</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Zanim przejdziemy do omówienia funkcji Dynamics 365 Sales, warto zrozumieć, z jakimi wyzwaniami mierzą się współczesne działy sprzedaży:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Rośnie liczba interakcji z klientami, a każde spotkanie wymaga indywidualnego podejścia.</li>
                    <li>Złożone procesy sprzedażowe mogą prowadzić do utraty efektywności i opóźnień.</li>
                    <li>Brak spójnych danych o klientach często utrudnia podejmowanie trafnych decyzji.</li>
                    <li>Różnorodność kanałów komunikacji wymaga integracji narzędzi i danych w jednym miejscu.</li>
                  </ul>
                  <p className="text-gray-700 font-medium">
                    Microsoft Dynamics 365 Sales odpowiada na te potrzeby, oferując kompleksowe wsparcie na każdym etapie procesu sprzedażowego.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Zwiększenie efektywności zespołu sprzedażowego</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dynamics 365 Sales pozwala sprzedawcom zaoszczędzić czas na rutynowych zadaniach, takich jak wprowadzanie danych czy generowanie raportów. Dzięki temu mogą oni skupić się na budowaniu wartościowych relacji z klientami.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Poprawa wyników sprzedaży</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dostęp do zaawansowanych narzędzi analitycznych i prognoz opartych na danych pozwala zespołom sprzedaży działać bardziej efektywnie i podejmować lepsze decyzje.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Lepsze zrozumienie potrzeb klientów</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Zgromadzone dane o klientach dają pełen obraz ich potrzeb, co umożliwia personalizację ofert i budowanie długoterminowych relacji.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Skrócenie cyklu sprzedaży</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dzięki automatyzacji procesów i szybkiemu dostępowi do informacji, sprzedawcy mogą szybciej finalizować transakcje, co przekłada się na lepsze wyniki finansowe firmy.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Skalowalność i elastyczność</h3>
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
          )}

          {activeTab === 'features' && (
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-center mb-8">Funkcje, które wyróżniają Dynamics 365 Sales</h2>
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
