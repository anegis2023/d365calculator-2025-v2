import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaHeadset, FaRobot, FaChartLine, FaUsers, FaComments, FaMobileAlt } from 'react-icons/fa';
import { useModuleBasket } from '../context/ModuleBasketContext';
import { modules } from '../data/modules';

const seoData = {
  pageData: {
    title: "Microsoft Dynamics 365 Customer Service | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
    description: "Zapewnij najwyższą jakość obsługi klienta z Microsoft Dynamics 365 Customer Service. Wykorzystaj sztuczną inteligencję do personalizacji interakcji i zwiększenia satysfakcji klientów.",
    ogType: 'website'
  },
  customSchema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Microsoft Dynamics 365 Customer Service",
    "description": "Zapewnij najwyższą jakość obsługi klienta z Microsoft Dynamics 365 Customer Service. Wykorzystaj sztuczną inteligencję do personalizacji interakcji i zwiększenia satysfakcji klientów.",
    "url": "https://d365calculator.netlify.app/dynamics-365-customer-service",
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

export default function DynamicsCustomerService() {
  const [activeTab, setActiveTab] = useState('overview');
  const { selectedModules, addModule } = useModuleBasket();
  const hasModules = selectedModules.length > 0;
  
  const isModuleInBasket = selectedModules.some(module => module.id === 6);

  const handleAddToBasket = () => {
    if (!isModuleInBasket) {
      const customerServiceModule = modules.find(m => m.id === 6);
      if (customerServiceModule) {
        addModule(customerServiceModule);
      }
    }
  };

  const features = [
    {
      icon: <FaHeadset />,
      title: "Wielokanałowa obsługa",
      description: "Zapewnij spójną obsługę klienta przez telefon, email, chat, media społecznościowe i inne kanały komunikacji."
    },
    {
      icon: <FaRobot />,
      title: "AI i Virtual Agents",
      description: "Wykorzystuj chatboty i wirtualnych asystentów do automatycznej obsługi podstawowych zapytań i szybkiego rozwiązywania problemów."
    },
    {
      icon: <FaChartLine />,
      title: "Analityka i raporty",
      description: "Monitoruj kluczowe wskaźniki obsługi klienta, analizuj trendy i optymalizuj procesy w oparciu o dane."
    },
    {
      icon: <FaComments />,
      title: "Zarządzanie wiedzą",
      description: "Twórz i zarządzaj bazą wiedzy, która pomaga agentom szybko znajdować rozwiązania i udzielać precyzyjnych odpowiedzi."
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobilna obsługa",
      description: "Zapewnij agentom dostęp do narzędzi i informacji z dowolnego miejsca dzięki aplikacji mobilnej."
    }
  ];

  return (
    <>
      <MetaTags {...seoData} />
      <Navbar />
      <DynamicsHeroSection
        title="Microsoft Dynamics 365 Customer Service"
        description="Zapewnij przedstawicielom serwisu zaawansowane narzędzia oparte na generatywnej AI i automatyzacji, które umożliwią im sprawne i efektywne rozwiązywanie problemów klientów."
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
                      W erze cyfrowej transformacji, jakość obsługi klienta stała się kluczowym czynnikiem sukcesu biznesowego. Klienci oczekują szybkiej, spersonalizowanej i efektywnej pomocy przez preferowane kanały komunikacji. Microsoft Dynamics 365 Customer Service to kompleksowa platforma, która łączy zaawansowane technologie AI z tradycyjnymi narzędziami obsługi klienta, umożliwiając organizacjom dostarczanie wyjątkowych doświadczeń w każdym punkcie kontaktu.
                    </p>
                  </div>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2'}>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/9M984N2ip1g?rel=0&showinfo=0&controls=1&autoplay=0"
                        title="Microsoft Dynamics 365 Customer Service Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Kluczowe wyzwania w obsłudze klienta</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Rosnące oczekiwania klientów dotyczące szybkości i jakości obsługi</li>
                  <li>Potrzeba obsługi wielu kanałów komunikacji</li>
                  <li>Efektywne zarządzanie wiedzą i szkolenie agentów</li>
                  <li>Automatyzacja rutynowych zadań i procesów</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Wyższa satysfakcja klientów</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Szybsza i bardziej efektywna obsługa zwiększa zadowolenie klientów.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Efektywność agentów</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Lepsze narzędzia i automatyzacja zwiększają produktywność zespołu.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Redukcja kosztów</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Automatyzacja i self-service obniżają koszty obsługi.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Skalowalność obsługi</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Łatwe dostosowanie do rosnących potrzeb biznesu.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-center mb-8">Funkcje, które wyróżniają Dynamics 365 Customer Service</h2>
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
