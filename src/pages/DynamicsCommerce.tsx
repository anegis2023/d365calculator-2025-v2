import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaShoppingCart, FaUsers, FaChartLine, FaMobileAlt, FaCloudDownloadAlt, FaShieldAlt } from 'react-icons/fa';
import { useModuleBasket } from '../context/ModuleBasketContext';
import { modules } from '../data/modules';

const seoData = {
  pageData: {
    title: "Microsoft Dynamics 365 Commerce | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
    description: "Zbuduj nowoczesny biznes e-commerce z Microsoft Dynamics 365 Commerce. Dostarczaj spersonalizowane doświadczenia zakupowe i zwiększaj sprzedaż online.",
    ogType: 'website'
  },
  customSchema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Microsoft Dynamics 365 Commerce",
    "description": "Zbuduj nowoczesny biznes e-commerce z Microsoft Dynamics 365 Commerce. Dostarczaj spersonalizowane doświadczenia zakupowe i zwiększaj sprzedaż online.",
    "url": "https://dynamics365.com.pl/dynamics-365-commerce",
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

export default function DynamicsCommerce() {
  const [activeTab, setActiveTab] = useState('overview');
  const { selectedModules, addModule } = useModuleBasket();
  const hasModules = selectedModules.length > 0;
  
  const isModuleInBasket = selectedModules.some(module => module.id === 8);

  const handleAddToBasket = () => {
    if (!isModuleInBasket) {
      const commerceModule = modules.find(m => m.id === 8);
      if (commerceModule) {
        addModule(commerceModule);
      }
    }
  };

  const features = [
    {
      icon: <FaShoppingCart />,
      title: "Omnichannel Commerce",
      description: "Zapewnij spójne doświadczenia zakupowe we wszystkich kanałach sprzedaży. Integruj sklepy stacjonarne, online i mobilne w jednej platformie."
    },
    {
      icon: <FaUsers />,
      title: "Personalizacja doświadczeń",
      description: "Wykorzystaj sztuczną inteligencję do tworzenia spersonalizowanych rekomendacji i dostosowywania treści do preferencji klientów."
    },
    {
      icon: <FaChartLine />,
      title: "Analityka sprzedaży",
      description: "Monitoruj wyniki sprzedaży w czasie rzeczywistym, analizuj zachowania klientów i optymalizuj strategie marketingowe w oparciu o dane."
    },
    {
      icon: <FaMobileAlt />,
      title: "Aplikacje mobilne",
      description: "Dostarczaj nowoczesne doświadczenia zakupowe na urządzeniach mobilnych. Umożliw klientom łatwe zakupy z dowolnego miejsca."
    },
    {
      icon: <FaCloudDownloadAlt />,
      title: "Integracja systemów",
      description: "Łącz się z popularnymi systemami płatności, logistyki i zarządzania zapasami. Automatyzuj procesy i zwiększaj efektywność operacyjną."
    },
    {
      icon: <FaShieldAlt />,
      title: "Bezpieczeństwo transakcji",
      description: "Chroń dane klientów i transakcje dzięki zaawansowanym mechanizmom bezpieczeństwa i zgodności z regulacjami."
    }
  ];

  const faqData = [
    {
      question: "Czym jest Microsoft Dynamics 365 Commerce?",
      answer: "Microsoft Dynamics 365 Commerce to kompleksowa platforma do zarządzania handlem detalicznym, która łączy sprzedaż stacjonarną, online i mobilną. System umożliwia tworzenie spójnych, spersonalizowanych doświadczeń zakupowych we wszystkich kanałach sprzedaży."
    },
    {
      question: "Jakie są główne funkcje Dynamics 365 Commerce?",
      answer: "Główne funkcje obejmują: zarządzanie sklepem internetowym, obsługę punktów sprzedaży (POS), zarządzanie zapasami, marketing i promocje, obsługę klienta, analitykę sprzedaży oraz integrację z systemami płatności."
    },
    {
      question: "Jak system wspiera sprzedaż wielokanałową?",
      answer: "Platforma zapewnia spójne doświadczenie zakupowe we wszystkich kanałach, synchronizację danych w czasie rzeczywistym, jednolity system zarządzania zamówieniami oraz zintegrowaną obsługę klienta."
    },
    {
      question: "Jakie są możliwości personalizacji?",
      answer: "System oferuje zaawansowane narzędzia do personalizacji treści, rekomendacji produktów, promocji i ofert specjalnych w oparciu o zachowania klientów i dane analityczne."
    },
    {
      question: "Jak działa system POS?",
      answer: "System POS oferuje nowoczesne rozwiązania dla sprzedaży stacjonarnej, w tym obsługę transakcji, zarządzanie kasami, programy lojalnościowe, oraz integrację z urządzeniami peryferyjnymi."
    },
    {
      question: "Jakie są możliwości zarządzania zapasami?",
      answer: "Platforma umożliwia zarządzanie zapasami w czasie rzeczywistym, synchronizację stanów magazynowych między kanałami, automatyczne uzupełnianie zapasów oraz optymalizację dostępności produktów."
    },
    {
      question: "Jak system wspiera marketing i promocje?",
      answer: "System oferuje narzędzia do zarządzania kampaniami marketingowymi, programami lojalnościowymi, promocjami i rabatami, z możliwością personalizacji ofert dla różnych segmentów klientów."
    },
    {
      question: "Jakie są możliwości analityczne?",
      answer: "Dynamics 365 Commerce dostarcza zaawansowane narzędzia analityczne do śledzenia sprzedaży, zachowań klientów, efektywności promocji oraz wydajności kanałów sprzedaży."
    },
    {
      question: "Jak wygląda integracja z innymi systemami?",
      answer: "Platforma integruje się z innymi aplikacjami Microsoft Dynamics 365, systemami płatności, dostawcami logistycznymi oraz zewnętrznymi marketplace'ami."
    },
    {
      question: "Czy system wspiera sprzedaż międzynarodową?",
      answer: "Tak, platforma obsługuje sprzedaż międzynarodową, w tym wielojęzyczność, różne waluty, lokalne regulacje podatkowe oraz dostosowanie do specyfiki różnych rynków."
    },
    {
      question: "Jak wygląda proces wdrożenia?",
      answer: "Wdrożenie obejmuje konfigurację sklepu online, systemów POS, integrację z istniejącymi systemami, migrację danych, szkolenia pracowników oraz wsparcie techniczne."
    },
    {
      question: "Czy dostępna jest wersja testowa?",
      answer: "Tak, Microsoft oferuje wersję próbną Dynamics 365 Commerce, która pozwala na przetestowanie funkcjonalności przed podjęciem decyzji o wdrożeniu."
    }
  ];

  return (
    <>
      <MetaTags {...seoData} />
      <Navbar />
      <DynamicsHeroSection
        title="Microsoft Dynamics 365 Commerce"
        description="Zbuduj nowoczesny biznes e-commerce. Dostarczaj spersonalizowane doświadczenia zakupowe i zwiększaj sprzedaż online."
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
                      W erze cyfrowej transformacji, sukces w handlu detalicznym zależy od umiejętności dostarczania spójnych i angażujących doświadczeń zakupowych we wszystkich kanałach sprzedaży. Współczesni konsumenci oczekują personalizacji, wygody i płynnej integracji między zakupami online i offline. Microsoft Dynamics 365 Commerce to kompleksowa platforma, która pomaga sprostać tym wyzwaniom i przekształcić sposób prowadzenia sprzedaży detalicznej.
                    </p>
                  </div>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg min-h-[200px]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full min-h-[200px]"
                        src="https://www.youtube.com/embed/BG2X5sDCegQ?rel=0&showinfo=0&controls=1&autoplay=0"
                        title="Microsoft Dynamics 365 Commerce Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Kluczowe wyzwania w handlu detalicznym</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Rosnące oczekiwania klientów dotyczące personalizacji i wygody zakupów</li>
                  <li>Potrzeba integracji kanałów sprzedaży online i offline</li>
                  <li>Zarządzanie zapasami w czasie rzeczywistym</li>
                  <li>Analiza zachowań klientów i optymalizacja strategii sprzedaży</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Zwiększenie sprzedaży</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Personalizacja i optymalizacja doświadczeń zakupowych prowadzi do większej konwersji.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Efektywność operacyjna</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Automatyzacja procesów i integracja systemów redukuje koszty operacyjne.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Lojalność klientów</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Spójne doświadczenia we wszystkich kanałach budują długotrwałe relacje.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Skalowalność</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Elastyczna platforma rozwija się wraz z Twoim biznesem.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#0078d4] text-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#006abe] cursor-pointer group">
                  <h2 className="text-2xl font-bold mb-4 transform transition-transform duration-500 group-hover:translate-x-2">Dlaczego warto wybrać Dynamics 365 Commerce?</h2>
                  <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Microsoft Dynamics 365 Commerce to kompleksowe rozwiązanie dla firm handlowych, które chcą dostarczać wyjątkowe doświadczenia zakupowe w każdym kanale sprzedaży. Dzięki zaawansowanym funkcjom e-commerce, zarządzaniu sklepami i personalizacji, organizacje mogą budować silną pozycję na rynku i zwiększać lojalność klientów.
                  </p>
                  <p className="text-lg leading-relaxed opacity-90 mt-4 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Zainwestuj w Dynamics 365 Commerce, aby zmodernizować swoją działalność handlową i zapewnić klientom spójne doświadczenia zakupowe we wszystkich kanałach sprzedaży.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-center mb-8">Funkcje, które wyróżniają Dynamics 365 Commerce</h2>
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
