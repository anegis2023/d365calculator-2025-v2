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
    "url": "https://d365calculator.netlify.app/dynamics-365-supply-chain",
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
        </div>
      </DynamicsPageLayout>
    </>
  );
}
