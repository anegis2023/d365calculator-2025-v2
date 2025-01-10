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
    "url": "https://d365calculator.netlify.app/dynamics-365-sales",
    "publisher": {
      "@type": "Organization",
      "name": "ANEGIS",
      "url": "https://d365calculator.netlify.app"
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
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="space-y-6">
                <div className={`flex flex-col ${hasModules ? '' : 'lg:flex-row'} gap-8 items-start`}>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2'}>
                    <p className="text-lg leading-relaxed">
                      W dynamicznie zmieniającym się świecie biznesu skuteczna sprzedaż nie opiera się już wyłącznie na tradycyjnych technikach. Współczesne organizacje potrzebują zaawansowanych narzędzi, które pozwolą na personalizację doświadczeń klientów, automatyzację procesów oraz skuteczne wykorzystanie danych w podejmowaniu decyzji. Takim rozwiązaniem jest Microsoft Dynamics 365 Sales – nowoczesna platforma CRM, która rewolucjonizuje sposób zarządzania sprzedażą.
                    </p>
                  </div>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2'}>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
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
        </div>
      </DynamicsPageLayout>
    </>
  );
}
