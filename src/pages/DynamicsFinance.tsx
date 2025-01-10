import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaChartLine, FaCalculator, FaGlobe, FaShieldAlt, FaRobot, FaChartPie } from 'react-icons/fa';
import { useModuleBasket } from '../context/ModuleBasketContext';

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
    "url": "https://d365calculator.netlify.app/dynamics-365-finance",
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

export default function DynamicsFinance() {
  const [activeTab, setActiveTab] = useState('overview');
  const { selectedModules } = useModuleBasket();
  const hasModules = selectedModules.length > 0;

  const features = [
    {
      icon: <FaChartLine />,
      title: "Zarządzanie finansami",
      description: "Kompleksowe zarządzanie księgą główną, należnościami i zobowiązaniami. Automatyzacja procesów księgowych i raportowania."
    },
    {
      icon: <FaCalculator />,
      title: "Budżetowanie",
      description: "Zaawansowane narzędzia do planowania budżetu, prognozowania i kontroli kosztów. Elastyczne modele budżetowania."
    },
    {
      icon: <FaGlobe />,
      title: "Finanse globalne",
      description: "Obsługa wielu walut, jednostek prawnych i standardów księgowych. Zgodność z lokalnymi przepisami podatkowymi."
    },
    {
      icon: <FaShieldAlt />,
      title: "Zarządzanie ryzykiem",
      description: "Monitorowanie i kontrola ryzyka finansowego. Zaawansowane narzędzia do audytu i compliance."
    },
    {
      icon: <FaRobot />,
      title: "Automatyzacja procesów",
      description: "Automatyzacja rutynowych operacji finansowych. Redukcja błędów i przyspieszenie procesów."
    },
    {
      icon: <FaChartPie />,
      title: "Analityka finansowa",
      description: "Zaawansowane raporty i analizy finansowe. Dashboardy i wskaźniki KPI w czasie rzeczywistym."
    }
  ];

  return (
    <>
      <MetaTags {...seoData} />
      <Navbar />
      <DynamicsHeroSection
        title="Microsoft Dynamics 365 Finance"
        description="Zoptymalizuj zarządzanie finansami firmy. Automatyzuj procesy finansowe, zwiększaj kontrolę i podejmuj lepsze decyzje biznesowe w oparciu o dane."
        backgroundGradient="from-[#071630] via-[#107c10] to-[#00a2ed]"
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
                      W dzisiejszym złożonym środowisku biznesowym, efektywne zarządzanie finansami staje się kluczowym czynnikiem sukcesu. Organizacje potrzebują zaawansowanych narzędzi do automatyzacji procesów finansowych, analizy danych i podejmowania strategicznych decyzji. Microsoft Dynamics 365 Finance to kompleksowa platforma, która łączy nowoczesne technologie z tradycyjnymi narzędziami finansowymi, umożliwiając organizacjom optymalizację operacji finansowych i zwiększenie kontroli nad finansami.
                    </p>
                  </div>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2'}>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/pj6lYtFc0Co?rel=0&showinfo=0&controls=1&autoplay=0"
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
                <h2 className="text-2xl font-bold">Kluczowe wyzwania w zarządzaniu finansami</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Automatyzacja i optymalizacja procesów finansowych</li>
                  <li>Zgodność z przepisami i standardami księgowymi</li>
                  <li>Zarządzanie ryzykiem finansowym</li>
                  <li>Analiza i raportowanie danych finansowych</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Wyższa efektywność</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Automatyzacja procesów zwiększa wydajność operacji finansowych.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Lepsza kontrola</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Zwiększona przejrzystość i kontrola nad procesami finansowymi.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Zgodność z przepisami</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Automatyczna aktualizacja i zgodność z regulacjami.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Lepsze decyzje</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Podejmowanie decyzji w oparciu o aktualne dane finansowe.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-center mb-8">Funkcje, które wyróżniają Dynamics 365 Finance</h2>
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
