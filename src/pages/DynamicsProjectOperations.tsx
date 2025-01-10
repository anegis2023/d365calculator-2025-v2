import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaProjectDiagram, FaUsers, FaChartLine, FaCalendarAlt, FaMoneyBillWave, FaClipboardCheck } from 'react-icons/fa';
import { useModuleBasket } from '../context/ModuleBasketContext';
import { modules } from '../data/modules';

const seoData = {
  pageData: {
    title: "Microsoft Dynamics 365 Project Operations | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
    description: "Zwiększ rentowność projektów i produktywność zespołów z Microsoft Dynamics 365 Project Operations. Zarządzaj projektami, zasobami i finansami w jednym miejscu.",
    ogType: 'website'
  },
  customSchema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Microsoft Dynamics 365 Project Operations",
    "description": "Zwiększ rentowność projektów i produktywność zespołów z Microsoft Dynamics 365 Project Operations. Zarządzaj projektami, zasobami i finansami w jednym miejscu.",
    "url": "https://d365calculator.netlify.app/dynamics-365-project-operations",
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

export default function DynamicsProjectOperations() {
  const [activeTab, setActiveTab] = useState('overview');
  const { selectedModules, addModule } = useModuleBasket();
  const hasModules = selectedModules.length > 0;
  
  const isModuleInBasket = selectedModules.some(module => module.id === 5);

  const handleAddToBasket = () => {
    if (!isModuleInBasket) {
      const projectOperationsModule = modules.find(m => m.id === 5);
      if (projectOperationsModule) {
        addModule(projectOperationsModule);
      }
    }
  };

  const features = [
    {
      icon: <FaProjectDiagram />,
      title: "Zarządzanie projektami",
      description: "Kompleksowe narzędzia do planowania, realizacji i monitorowania projektów. Zarządzanie zadaniami i kamieniami milowymi."
    },
    {
      icon: <FaUsers />,
      title: "Zarządzanie zasobami",
      description: "Efektywna alokacja zasobów, planowanie wykorzystania i monitorowanie dostępności zespołów projektowych."
    },
    {
      icon: <FaChartLine />,
      title: "Analityka projektowa",
      description: "Zaawansowane raporty i analizy wydajności projektów. Monitorowanie KPI i trendów w czasie rzeczywistym."
    },
    {
      icon: <FaCalendarAlt />,
      title: "Harmonogramowanie",
      description: "Zaawansowane narzędzia do planowania projektów i zadań. Śledzenie postępów i zarządzanie terminami."
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Finanse projektowe",
      description: "Zarządzanie budżetami, kosztami i przychodami projektów. Automatyzacja rozliczeń i fakturowania."
    },
    {
      icon: <FaClipboardCheck />,
      title: "Zarządzanie dostawami",
      description: "Kontrola nad zakupami projektowymi, dostawami i zarządzanie umowami z podwykonawcami."
    }
  ];

  return (
    <>
      <MetaTags {...seoData} />
      <Navbar />
      <DynamicsHeroSection
        title="Microsoft Dynamics 365 Project Operations"
        description="Połącz wszystkie kluczowe elementy działalności projektowej w jednej zintegrowanej aplikacji, aby usprawnić zarządzanie i realizację zadań."
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
                      W dzisiejszym dynamicznym środowisku biznesowym, skuteczne zarządzanie projektami staje się kluczowym czynnikiem sukcesu organizacji. Firmy potrzebują narzędzi, które łączą zarządzanie projektami, zasobami i finansami w jednym rozwiązaniu. Microsoft Dynamics 365 Project Operations to kompleksowa platforma, która integruje wszystkie aspekty zarządzania projektami, umożliwiając organizacjom zwiększenie rentowności i efektywności realizowanych przedsięwzięć.
                    </p>
                  </div>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg min-h-[200px]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full min-h-[200px]"
                        src="https://www.youtube.com/embed/nhU21sYCaiI?rel=0&showinfo=0&controls=1&autoplay=0"
                        title="Microsoft Dynamics 365 Project Operations Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Kluczowe wyzwania w zarządzaniu projektami</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Efektywne planowanie i kontrola projektów</li>
                  <li>Optymalne wykorzystanie zasobów</li>
                  <li>Kontrola budżetów i kosztów</li>
                  <li>Zarządzanie ryzykiem projektowym</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Wyższa rentowność</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Lepsza kontrola kosztów i efektywniejsze wykorzystanie zasobów.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Większa produktywność</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Usprawnienie procesów i automatyzacja rutynowych zadań.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Lepsza kontrola</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Pełna widoczność postępów i wydajności projektów.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Lepsze decyzje</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Podejmowanie decyzji w oparciu o aktualne dane projektowe.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-center mb-8">Funkcje, które wyróżniają Dynamics 365 Project Operations</h2>
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
