import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaUsers, FaChartLine, FaGraduationCap, FaClipboardCheck, FaHandshake, FaUserClock } from 'react-icons/fa';
import { useModuleBasket } from '../context/ModuleBasketContext';
import { modules } from '../data/modules';

const seoData = {
  pageData: {
    title: "Microsoft Dynamics 365 Human Resources | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
    description: "Zoptymalizuj procesy HR i zwiększ zaangażowanie pracowników z Microsoft Dynamics 365 Human Resources. Zarządzaj talentami i buduj kulturę organizacyjną opartą na rozwoju.",
    ogType: 'website'
  },
  customSchema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Microsoft Dynamics 365 Human Resources",
    "description": "Zoptymalizuj procesy HR i zwiększ zaangażowanie pracowników z Microsoft Dynamics 365 Human Resources. Zarządzaj talentami i buduj kulturę organizacyjną opartą na rozwoju.",
    "url": "https://d365calculator.netlify.app/dynamics-365-human-resources",
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

export default function DynamicsHumanResources() {
  const [activeTab, setActiveTab] = useState('overview');
  const { selectedModules, addModule } = useModuleBasket();
  const hasModules = selectedModules.length > 0;
  
  const isModuleInBasket = selectedModules.some(module => module.id === 3);

  const handleAddToBasket = () => {
    if (!isModuleInBasket) {
      const hrModule = modules.find(m => m.id === 3);
      if (hrModule) {
        addModule(hrModule);
      }
    }
  };

  const features = [
    {
      icon: <FaUsers />,
      title: "Zarządzanie pracownikami",
      description: "Kompleksowe zarządzanie danymi pracowników, onboardingiem i offboardingiem. Automatyzacja procesów kadrowych."
    },
    {
      icon: <FaGraduationCap />,
      title: "Rozwój talentów",
      description: "Planowanie ścieżek kariery, zarządzanie szkoleniami i kompetencjami. Identyfikacja i rozwój kluczowych talentów."
    },
    {
      icon: <FaChartLine />,
      title: "Analityka HR",
      description: "Zaawansowane raporty i analizy kadrowe. Monitorowanie wskaźników HR i trendów w organizacji."
    },
    {
      icon: <FaHandshake />,
      title: "Employee Experience",
      description: "Narzędzia do zwiększania zaangażowania pracowników. Portale samoobsługowe i komunikacja wewnętrzna."
    },
    {
      icon: <FaClipboardCheck />,
      title: "Zarządzanie świadczeniami",
      description: "Kompleksowa obsługa benefitów pracowniczych. Automatyzacja procesów administracyjnych."
    },
    {
      icon: <FaUserClock />,
      title: "Zarządzanie czasem",
      description: "Planowanie czasu pracy, urlopy, nieobecności. Integracja z systemem płacowym."
    }
  ];

  return (
    <>
      <MetaTags {...seoData} />
      <Navbar />
      <DynamicsHeroSection
        title="Microsoft Dynamics 365 Human Resources"
        description="Transformuj zarządzanie zasobami ludzkimi, automatyzuj procesy kadrowe i buduj lepsze doświadczenia pracowników dzięki zaawansowanym narzędziom HR."
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
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2'}>
                    <p className="text-lg leading-relaxed">
                      W dzisiejszym dynamicznym środowisku biznesowym, efektywne zarządzanie zasobami ludzkimi staje się kluczowym czynnikiem sukcesu organizacji. Pracownicy oczekują spersonalizowanego podejścia do rozwoju i nowoczesnych narzędzi HR. Microsoft Dynamics 365 Human Resources to kompleksowa platforma, która łączy zaawansowane technologie z najlepszymi praktykami HR, umożliwiając organizacjom budowanie zaangażowanego i efektywnego zespołu.
                    </p>
                  </div>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2'}>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg min-h-[200px]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full min-h-[200px]"
                        src="https://www.youtube.com/embed/tvwqvk0Qmlc?rel=0&showinfo=0&controls=1&autoplay=0"
                        title="Microsoft Dynamics 365 Human Resources Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Kluczowe wyzwania w zarządzaniu HR</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Przyciąganie i utrzymanie talentów</li>
                  <li>Rozwój i szkolenie pracowników</li>
                  <li>Automatyzacja procesów HR</li>
                  <li>Zarządzanie zaangażowaniem pracowników</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Wyższa efektywność HR</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Automatyzacja procesów zwiększa wydajność działu HR.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Lepsze doświadczenia</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Nowoczesne narzędzia zwiększają satysfakcję pracowników.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Rozwój talentów</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Efektywne zarządzanie rozwojem i karierą pracowników.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Lepsze decyzje</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Podejmowanie decyzji w oparciu o dane HR.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-center mb-8">Funkcje, które wyróżniają Dynamics 365 Human Resources</h2>
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
