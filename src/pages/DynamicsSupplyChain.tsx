import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaTruck, FaWarehouse, FaIndustry, FaChartLine, FaBoxes, FaRobot } from 'react-icons/fa';
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

export default function DynamicsSupplyChain() {
  const [activeTab, setActiveTab] = useState('overview');
  const { selectedModules, addModule } = useModuleBasket();
  const hasModules = selectedModules.length > 0;
  
  const isModuleInBasket = selectedModules.some(module => module.id === 9);

  const handleAddToBasket = () => {
    if (!isModuleInBasket) {
      const supplyChainModule = modules.find(m => m.id === 9);
      if (supplyChainModule) {
        addModule(supplyChainModule);
      }
    }
  };

  const features = [
    {
      icon: <FaTruck />,
      title: "Zarządzanie transportem",
      description: "Optymalizacja tras, śledzenie przesyłek w czasie rzeczywistym i zarządzanie flotą transportową."
    },
    {
      icon: <FaWarehouse />,
      title: "Zarządzanie magazynem",
      description: "Efektywne zarządzanie przestrzenią magazynową, zapasami i procesami logistycznymi."
    },
    {
      icon: <FaIndustry />,
      title: "Planowanie produkcji",
      description: "Zaawansowane planowanie produkcji, harmonogramowanie i optymalizacja procesów wytwórczych."
    },
    {
      icon: <FaChartLine />,
      title: "Analityka łańcucha dostaw",
      description: "Zaawansowana analityka i raporty w czasie rzeczywistym dla lepszego podejmowania decyzji."
    },
    {
      icon: <FaBoxes />,
      title: "Zarządzanie zapasami",
      description: "Optymalizacja poziomów zapasów, automatyczne uzupełnianie i prognozowanie popytu."
    },
    {
      icon: <FaRobot />,
      title: "Automatyzacja procesów",
      description: "Wykorzystanie AI i automatyzacji do optymalizacji procesów w łańcuchu dostaw."
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
                      W dzisiejszym dynamicznym środowisku biznesowym, efektywne zarządzanie łańcuchem dostaw jest kluczowe dla sukcesu organizacji. Microsoft Dynamics 365 Supply Chain to kompleksowe rozwiązanie, które łączy zaawansowaną analitykę, sztuczną inteligencję i automatyzację, umożliwiając firmom optymalizację procesów logistycznych, redukcję kosztów i zwiększenie wydajności operacyjnej.
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
                <ul className="list-disc pl-6 space-y-2">
                  <li>Optymalizacja zapasów i procesów magazynowych</li>
                  <li>Efektywne planowanie produkcji i dostaw</li>
                  <li>Zarządzanie transportem i logistyką</li>
                  <li>Przewidywanie i reagowanie na zmiany popytu</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Niższe koszty operacyjne</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Optymalizacja procesów i redukcja kosztów magazynowania.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Większa wydajność</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Automatyzacja procesów i optymalizacja wykorzystania zasobów.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Lepsza widoczność</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Pełna przejrzystość procesów w całym łańcuchu dostaw.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Szybsza reakcja</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Błyskawiczne reagowanie na zmiany rynkowe i potrzeby klientów.</p>
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
          )}

          {activeTab === 'features' && (
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-center mb-8">Funkcje, które wyróżniają Dynamics 365 Supply Chain</h2>
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
