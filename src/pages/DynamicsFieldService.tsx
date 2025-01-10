import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaTools, FaMapMarkedAlt, FaCalendarAlt, FaMobile, FaChartLine, FaCog } from 'react-icons/fa';
import { useModuleBasket } from '../context/ModuleBasketContext';

const seoData = {
  pageData: {
    title: "Microsoft Dynamics 365 Field Service | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
    description: "Optymalizuj pracę serwisantów w terenie z Microsoft Dynamics 365 Field Service. Zwiększ efektywność obsługi i zadowolenie klientów dzięki inteligentnemu zarządzaniu serwisem.",
    ogType: 'website'
  },
  customSchema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Microsoft Dynamics 365 Field Service",
    "description": "Optymalizuj pracę serwisantów w terenie z Microsoft Dynamics 365 Field Service. Zwiększ efektywność obsługi i zadowolenie klientów dzięki inteligentnemu zarządzaniu serwisem.",
    "url": "https://d365calculator.netlify.app/dynamics-365-field-service",
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

export default function DynamicsFieldService() {
  const [activeTab, setActiveTab] = useState('overview');
  const { selectedModules } = useModuleBasket();
  const hasModules = selectedModules.length > 0;

  const features = [
    {
      icon: <FaTools />,
      title: "Zarządzanie zleceniami",
      description: "Efektywne planowanie, przydzielanie i śledzenie zleceń serwisowych. Automatyczne powiadomienia i aktualizacje statusów."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Optymalizacja tras",
      description: "Inteligentne planowanie tras z uwzględnieniem lokalizacji, priorytetów i dostępności serwisantów. Redukcja czasu i kosztów przejazdów."
    },
    {
      icon: <FaCalendarAlt />,
      title: "Harmonogramowanie",
      description: "Zaawansowane narzędzia do planowania pracy serwisantów z uwzględnieniem ich umiejętności, dostępności i lokalizacji."
    },
    {
      icon: <FaMobile />,
      title: "Aplikacja mobilna",
      description: "Dostęp do wszystkich niezbędnych informacji i narzędzi w terenie. Możliwość pracy offline i automatyczna synchronizacja danych."
    },
    {
      icon: <FaChartLine />,
      title: "Analityka serwisu",
      description: "Szczegółowe raporty i analizy wydajności serwisu. Monitorowanie KPI i optymalizacja procesów w oparciu o dane."
    },
    {
      icon: <FaCog />,
      title: "Zarządzanie zasobami",
      description: "Efektywne zarządzanie częściami zamiennymi, narzędziami i flotą pojazdów. Automatyczne uzupełnianie zapasów."
    }
  ];

  return (
    <>
      <MetaTags {...seoData} />
      <Navbar />
      <DynamicsHeroSection
        title="Microsoft Dynamics 365 Field Service"
        description="Optymalizuj pracę serwisantów w terenie. Zwiększ efektywność obsługi i zadowolenie klientów dzięki inteligentnemu zarządzaniu serwisem."
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
                      W dzisiejszym dynamicznym środowisku biznesowym, efektywne zarządzanie serwisem w terenie staje się kluczowym elementem sukcesu. Klienci oczekują szybkiej i profesjonalnej obsługi, a firmy potrzebują narzędzi do optymalizacji pracy serwisantów i redukcji kosztów. Microsoft Dynamics 365 Field Service to kompleksowa platforma, która łączy zaawansowane technologie z praktycznymi narzędziami do zarządzania serwisem, umożliwiając organizacjom dostarczanie wyjątkowej jakości usług w terenie.
                    </p>
                  </div>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2'}>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/OujvbnyGqDY?rel=0&showinfo=0&controls=1&autoplay=0"
                        title="Microsoft Dynamics 365 Field Service Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Kluczowe wyzwania w serwisie terenowym</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Efektywne planowanie i optymalizacja tras serwisantów</li>
                  <li>Zarządzanie częściami zamiennymi i narzędziami</li>
                  <li>Komunikacja i koordynacja zespołów w terenie</li>
                  <li>Monitorowanie i poprawa wydajności serwisu</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Wyższa efektywność</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Optymalizacja tras i harmonogramów zwiększa liczbę obsłużonych zleceń.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Redukcja kosztów</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Mniejsze zużycie paliwa i lepsze wykorzystanie zasobów.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Zadowolenie klientów</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Szybsza i bardziej profesjonalna obsługa w terenie.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Lepsza kontrola</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Pełna widoczność operacji i zasobów w terenie.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-center mb-8">Funkcje, które wyróżniają Dynamics 365 Field Service</h2>
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
