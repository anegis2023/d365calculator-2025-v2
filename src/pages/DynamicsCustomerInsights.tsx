import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaChartPie, FaUsers, FaRobot, FaChartBar, FaDatabase, FaLock } from 'react-icons/fa';
import { useModuleBasket } from '../context/ModuleBasketContext';
import { modules } from '../data/modules';

const seoData = {
  pageData: {
    title: "Microsoft Dynamics 365 Customer Insights | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
    description: "Uzyskaj pełny obraz zachowań klientów z Microsoft Dynamics 365 Customer Insights. Analizuj dane i personalizuj interakcje w oparciu o rzeczywiste insighty.",
    ogType: 'website'
  },
  customSchema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Microsoft Dynamics 365 Customer Insights",
    "description": "Uzyskaj pełny obraz zachowań klientów z Microsoft Dynamics 365 Customer Insights. Analizuj dane i personalizuj interakcje w oparciu o rzeczywiste insighty.",
    "url": "https://d365calculator.netlify.app/dynamics-365-customer-insights",
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

export default function DynamicsCustomerInsights() {
  const [activeTab, setActiveTab] = useState('overview');
  const { selectedModules, addModule } = useModuleBasket();
  const hasModules = selectedModules.length > 0;
  
  const isModuleInBasket = selectedModules.some(module => module.id === 7);

  const handleAddToBasket = () => {
    if (!isModuleInBasket) {
      const customerInsightsModule = modules.find(m => m.id === 7);
      if (customerInsightsModule) {
        addModule(customerInsightsModule);
      }
    }
  };

  const features = [
    {
      icon: <FaChartPie />,
      title: "Unifikacja danych klientów",
      description: "Łącz dane z różnych źródeł w jeden spójny profil klienta. Wykorzystuj informacje z systemów CRM, ERP, mediów społecznościowych i innych źródeł."
    },
    {
      icon: <FaUsers />,
      title: "Segmentacja klientów",
      description: "Twórz precyzyjne segmenty klientów w oparciu o ich zachowania, preferencje i historię interakcji. Dostosowuj strategie marketingowe do konkretnych grup."
    },
    {
      icon: <FaRobot />,
      title: "AI i Machine Learning",
      description: "Wykorzystuj zaawansowane algorytmy do przewidywania zachowań klientów, analizy sentymentu i automatycznego wykrywania wzorców."
    },
    {
      icon: <FaDatabase />,
      title: "Zarządzanie danymi",
      description: "Zapewnij wysoką jakość danych dzięki automatycznemu czyszczeniu, deduplikacji i wzbogacaniu profili klientów o dodatkowe informacje."
    },
    {
      icon: <FaChartBar />,
      title: "Analityka predykcyjna",
      description: "Przewiduj przyszłe zachowania klientów, identyfikuj ryzyko odejścia i odkrywaj nowe możliwości sprzedaży krzyżowej."
    },
    {
      icon: <FaLock />,
      title: "Aktywacja insightów",
      description: "Przekształcaj analizy w konkretne działania. Automatycznie aktywuj kampanie marketingowe i personalizuj komunikację w czasie rzeczywistym."
    }
  ];

  return (
    <>
      <MetaTags {...seoData} />
      <Navbar />
      <DynamicsHeroSection
        title="Microsoft Dynamics 365 Customer Insights"
        description="Wykorzystaj sztuczną inteligencję do budowania kompleksowego obrazu klienta i dostarczania spersonalizowanych doświadczeń w czasie rzeczywistym."
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
                      W dzisiejszym cyfrowym świecie, zrozumienie klienta jest kluczem do sukcesu biznesowego. Organizacje gromadzą ogromne ilości danych o klientach, ale prawdziwym wyzwaniem jest przekształcenie tych danych w wartościowe insighty i działania. Microsoft Dynamics 365 Customer Insights to zaawansowana platforma, która wykorzystuje sztuczną inteligencję i uczenie maszynowe do głębokiego zrozumienia zachowań klientów i personalizacji ich doświadczeń.
                    </p>
                  </div>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg min-h-[200px]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full min-h-[200px]"
                        src="https://www.youtube.com/embed/u3q-CJ-21HY?rel=0&showinfo=0&controls=1&autoplay=0"
                        title="Microsoft Dynamics 365 Customer Insights Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Kluczowe wyzwania w zarządzaniu danymi klientów</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Rozproszone dane w wielu systemach i aplikacjach</li>
                  <li>Trudności w tworzeniu spójnego obrazu klienta</li>
                  <li>Potrzeba zaawansowanej analityki i predykcji</li>
                  <li>Wymagania dotyczące prywatności i bezpieczeństwa danych</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Lepsze zrozumienie klientów</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Pełny widok 360° zachowań i preferencji klientów.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Personalizacja doświadczeń</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dostosowanie komunikacji i ofert do indywidualnych potrzeb.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Zwiększona retencja</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Przewidywanie i zapobieganie odejściom klientów.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Efektywność operacyjna</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Automatyzacja procesów i optymalizacja działań marketingowych.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-center mb-8">Funkcje, które wyróżniają Dynamics 365 Customer Insights</h2>
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
