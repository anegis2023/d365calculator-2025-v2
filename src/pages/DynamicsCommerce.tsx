import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaShoppingCart, FaUsers, FaBoxes, FaStore, FaChartLine, FaMicrosoft, FaTshirt, FaLaptop, FaBuilding, FaBullseye, FaComments, FaHeadset, FaUserFriends, FaTools, FaRobot } from 'react-icons/fa';
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
    <h2 className="text-inherit font-inherit m-0">{label}</h2>
  </button>
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

  const features = {
    introduction: {
      title: "Microsoft Dynamics 365 Commerce",
      description: "Microsoft Dynamics 365 Commerce oferuje zaawansowane funkcje sprzedażowe, które pomagają firmom zwiększyć efektywność operacyjną, poprawić obsługę klientów i usprawnić zarządzanie procesami handlowymi. System zapewnia pełną integrację z innymi produktami Microsoft, co umożliwia płynne zarządzanie wszystkimi aspektami sprzedaży i operacji biznesowych."
    },
    mainFeatures: [
      {
        icon: <FaStore />,
        title: "Zintegrowane rozwiązania sprzedażowe",
        description: "Umożliwia zarządzanie sprzedażą w wielu kanałach – stacjonarnych, online i mobilnych – w jednym systemie.",
        benefits: [
          "Umożliwia zarządzanie sprzedażą z jednego miejsca, bez konieczności korzystania z wielu niezależnych systemów",
          "Zmniejsza błędy wynikające z niespójności danych pomiędzy kanałami sprzedaży",
          "Ułatwia monitorowanie sprzedaży i wyników w czasie rzeczywistym"
        ]
      },
      {
        icon: <FaShoppingCart />,
        title: "Obsługa wielokanałowa (omnichannel)",
        description: "Zapewnia spójne doświadczenia zakupowe niezależnie od miejsca i sposobu dokonywania transakcji.",
        benefits: [
          "Klienci mogą kupować online i odbierać w sklepie stacjonarnym, co zwiększa wygodę zakupów",
          "Spójne doświadczenie zakupowe buduje lojalność klientów i zwiększa ich satysfakcję",
          "Sprzedawcy mogą śledzić interakcje klientów we wszystkich kanałach i dostosować strategię sprzedaży"
        ]
      },
      {
        icon: <FaUsers />,
        title: "Personalizacja doświadczeń klientów",
        description: "Wykorzystuje AI i analizę danych do dostosowania oferty oraz rekomendacji produktów na podstawie zachowań klientów.",
        benefits: [
          "Wykorzystuje sztuczną inteligencję do przewidywania preferencji klientów i sugerowania odpowiednich produktów",
          "Segmentacja klientów pozwala na precyzyjne dostosowanie promocji i kampanii marketingowych",
          "Dynamiczne rekomendacje zwiększają wartość koszyka zakupowego i poprawiają konwersję"
        ]
      },
      {
        icon: <FaBoxes />,
        title: "Zarządzanie produktami i zapasami",
        description: "Umożliwia synchronizację stanów magazynowych i automatyzację procesów logistycznych.",
        benefits: [
          "Synchronizacja stanów magazynowych eliminuje problem braków i nadmiarów towarów",
          "Automatyzacja procesów logistycznych przyspiesza realizację zamówień i zmniejsza koszty operacyjne",
          "Możliwość szybkiego wprowadzania zmian w katalogach produktowych poprawia elastyczność firmy"
        ]
      },
      {
        icon: <FaMicrosoft />,
        title: "Integracja z innymi produktami Microsoft",
        description: "Łączy się z Dynamics 365, Power BI, Azure AI, Microsoft Teams, ułatwiając analizę danych, współpracę i automatyzację procesów.",
        benefits: [
          "Microsoft Power BI – dostarcza zaawansowane raporty i analizy sprzedaży",
          "Azure AI – wykorzystuje sztuczną inteligencję do analizy trendów i przewidywania zachowań klientów",
          "Microsoft Teams – ułatwia współpracę między zespołami sprzedaży, marketingu i obsługi klienta",
          "Dynamics 365 Supply Chain Management – zapewnia pełną kontrolę nad łańcuchem dostaw i magazynowaniem"
        ]
      }
    ],
    conclusion: {
      description: "Dzięki tym funkcjom Microsoft Dynamics 365 Commerce pozwala firmom szybciej reagować na potrzeby rynku, lepiej zarządzać relacjami z klientami i zwiększać rentowność sprzedaży."
    }
  };

  const faqData = [
    {
      question: "Czym jest Microsoft Dynamics 365 Commerce?",
      answer: "Microsoft Dynamics 365 Commerce to zaawansowana platforma sprzedażowa, która pomaga firmom zwiększyć efektywność operacyjną i usprawnić zarządzanie procesami handlowymi. System zapewnia pełną integrację z produktami Microsoft, umożliwiając płynne zarządzanie wszystkimi aspektami sprzedaży i operacji biznesowych."
    },
    {
      question: "Jakie są główne korzyści z zintegrowanych rozwiązań sprzedażowych?",
      answer: "Główne korzyści to: zarządzanie sprzedażą z jednego miejsca bez potrzeby wielu systemów, redukcja błędów wynikających z niespójności danych między kanałami oraz łatwe monitorowanie sprzedaży i wyników w czasie rzeczywistym."
    },
    {
      question: "Jak działa obsługa wielokanałowa (omnichannel)?",
      answer: "System umożliwia klientom płynne przechodzenie między kanałami sprzedaży - mogą kupować online i odbierać w sklepie stacjonarnym. Zapewnia spójne doświadczenie zakupowe, buduje lojalność klientów i pozwala sprzedawcom śledzić interakcje we wszystkich kanałach."
    },
    {
      question: "W jaki sposób system personalizuje doświadczenia klientów?",
      answer: "System wykorzystuje sztuczną inteligencję do przewidywania preferencji klientów i sugerowania produktów. Umożliwia precyzyjną segmentację klientów, dostosowanie promocji i kampanii marketingowych oraz tworzenie dynamicznych rekomendacji."
    },
    {
      question: "Jak wygląda zarządzanie produktami i zapasami?",
      answer: "System zapewnia synchronizację stanów magazynowych w czasie rzeczywistym, automatyzację procesów logistycznych oraz szybkie wprowadzanie zmian w katalogach. Eliminuje problem braków i nadmiarów towarów, optymalizując koszty operacyjne."
    },
    {
      question: "Jakie są możliwości integracji z produktami Microsoft?",
      answer: "System integruje się z Power BI (zaawansowane raporty), Azure AI (analiza trendów), Microsoft Teams (współpraca zespołowa) oraz Dynamics 365 Supply Chain Management (kontrola łańcucha dostaw), zapewniając kompleksowe rozwiązanie biznesowe."
    },
    {
      question: "Jakie są korzyści z zaawansowanej analityki biznesowej?",
      answer: "System dostarcza szczegółowe raporty i analizy sprzedaży w czasie rzeczywistym, wykorzystuje AI do analizy trendów rynkowych i zachowań klientów, co pozwala na podejmowanie lepszych decyzji biznesowych."
    },
    {
      question: "Jak system wspiera automatyzację procesów?",
      answer: "Automatyzacja obejmuje procesy związane z realizacją zamówień, logistyką i zwrotami. Przyspiesza to realizację zamówień i redukuje koszty operacyjne."
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
            label="Microsoft Dynamics 365 Commerce"
            isActive={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
          />
          <Tab
            label="Kluczowe funkcje"
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
          <div className={`tab-content ${activeTab === 'overview' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="overview-tab">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className={`flex flex-col ${hasModules ? '' : 'lg:flex-row'} gap-8 items-start`}>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <p className="text-lg leading-relaxed">
                    Microsoft Dynamics 365 Commerce to kompleksowe rozwiązanie dla nowoczesnego handlu detalicznego, które pozwala firmom zarządzać sprzedażą wielokanałową, personalizować doświadczenia klientów i optymalizować operacje biznesowe. Jest częścią ekosystemu Microsoft Dynamics 365, co zapewnia jego pełną integrację z innymi narzędziami biznesowymi, takimi jak Microsoft Power Platform, Microsoft Teams czy Azure AI.

Dzięki jednolitemu środowisku sprzedaży firmy mogą połączyć swoje sklepy stacjonarne, e-commerce, marketplace'y, aplikacje mobilne oraz centra obsługi klienta, tworząc spójny ekosystem sprzedaży. Wbudowane funkcje analizy danych i sztucznej inteligencji umożliwiają lepsze zrozumienie klientów, przewidywanie ich potrzeb i oferowanie spersonalizowanych doświadczeń.
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
                <h2 className="text-2xl font-bold">Kluczowe możliwości Microsoft Dynamics 365 Commerce</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">1. Zintegrowana sprzedaż wielokanałowa</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Zapewnia spójne doświadczenia zakupowe w sklepach stacjonarnych, online i mobilnych.</li>
                      <li>Obsługuje różne modele sprzedaży, w tym B2C, B2B oraz D2C (direct-to-consumer).</li>
                      <li>Pozwala na synchronizację zamówień, płatności i dostępności produktów w czasie rzeczywistym.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">2. Personalizacja doświadczeń klientów</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Wykorzystuje zaawansowaną analitykę i sztuczną inteligencję, aby dostosowywać ofertę do indywidualnych preferencji klientów.</li>
                      <li>Umożliwia segmentację klientów i automatyczne rekomendacje produktów oparte na ich historii zakupów.</li>
                      <li>Obsługuje programy lojalnościowe i promocje dostosowane do potrzeb klientów.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">3. Centralne zarządzanie produktami i zapasami</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Umożliwia spójne zarządzanie katalogiem produktów w różnych kanałach sprzedaży.</li>
                      <li>Synchronizuje stany magazynowe, aby uniknąć błędów wynikających z nieaktualnych informacji o dostępności towarów.</li>
                      <li>Ułatwia zarządzanie cenami, promocjami i rabatami w skali globalnej.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">4. Optymalizacja operacji biznesowych</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Automatyzuje procesy związane z realizacją zamówień, logistyką i zwrotami.</li>
                      <li>Integruje się z systemami ERP i CRM, umożliwiając pełny wgląd w dane dotyczące klientów i operacji biznesowych.</li>
                      <li>Obsługuje wielowalutowe i wielojęzyczne transakcje, co pozwala na łatwą ekspansję na nowe rynki.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">5. Bezproblemowa integracja z ekosystemem Microsoft</h3>
                    <p className="text-lg leading-relaxed">Zapewnia pełną kompatybilność z innymi aplikacjami Microsoft, w tym:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Dynamics 365 Supply Chain Management – umożliwia efektywne zarządzanie łańcuchem dostaw.</li>
                      <li>Microsoft Power BI – dostarcza zaawansowane raporty i analizy sprzedaży.</li>
                      <li>Microsoft Azure AI – wykorzystuje sztuczną inteligencję do automatyzacji i optymalizacji działań sprzedażowych.</li>
                      <li>Microsoft Teams – wspiera komunikację i współpracę zespołów odpowiedzialnych za sprzedaż i obsługę klientów.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Dla kogo jest Microsoft Dynamics 365 Commerce?</h2>
                <p className="text-lg leading-relaxed">
                  Microsoft Dynamics 365 Commerce to rozwiązanie dla przedsiębiorstw każdej wielkości, które chcą zwiększyć efektywność sprzedaży, poprawić obsługę klienta i zoptymalizować procesy biznesowe. System sprawdzi się w branżach takich jak:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl text-[#107c10] group-hover:scale-110 transition-transform duration-300">
                        <FaStore />
                      </div>
                      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Handel detaliczny i e-commerce</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Usprawnia sprzedaż w różnych kanałach i zapewnia płynne zarządzanie produktami.</p>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl text-[#107c10] group-hover:scale-110 transition-transform duration-300">
                        <FaTshirt />
                      </div>
                      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Moda i dobra luksusowe</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Umożliwia precyzyjną personalizację oferty dla klientów premium.</p>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl text-[#107c10] group-hover:scale-110 transition-transform duration-300">
                        <FaLaptop />
                      </div>
                      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Elektronika użytkowa i AGD</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Pozwala na efektywne zarządzanie katalogami produktów i realizację zamówień w wielu kanałach.</p>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl text-[#107c10] group-hover:scale-110 transition-transform duration-300">
                        <FaBuilding />
                      </div>
                      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Sprzedaż B2B</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Ułatwia obsługę dużych zamówień i zarządzanie relacjami z klientami biznesowymi.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Spójne doświadczenie klienta</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Zapewnienie jednolitych wrażeń zakupowych we wszystkich kanałach buduje zaufanie klientów i zwiększa ich lojalność.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Lepsze zarządzanie operacjami</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Centralizacja danych i automatyzacja procesów pozwalają na skuteczniejsze zarządzanie operacjami handlowymi i szybsze podejmowanie decyzji.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Zwiększenie efektywności marketingu</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dzięki personalizacji ofert i kampanii organizacje mogą lepiej docierać do klientów i zwiększać sprzedaż.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Redukcja kosztów</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Optymalizacja zapasów i procesów logistycznych pozwala obniżyć koszty operacyjne i zminimalizować straty.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Skalowalność i elastyczność</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">System dostosowuje się do zmieniających się potrzeb biznesowych, umożliwiając rozwój organizacji w dynamicznym środowisku rynkowym.</p>
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
          </div>

          <div className={`tab-content ${activeTab === 'features' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="features-tab">
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-center mb-8">Funkcje, które wyróżniają Dynamics 365 Commerce</h2>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{features.introduction.title}</h3>
                  <p className="text-lg leading-relaxed">{features.introduction.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.mainFeatures.map((feature, index) => (
                    <div key={index} className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-3xl text-[#107c10] group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#107c10]">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">{feature.description}</p>
                      <div className="space-y-2 mt-4">
                        <h4 className="text-lg font-semibold">Korzyści:</h4>
                        <ul className="list-disc pl-6 space-y-2">
                          {feature.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">{features.conclusion.description}</p>
                </div>

                {/* Integrated Sales Solutions Section */}
                <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
                  <h3 className="text-2xl font-bold text-[#107c10] mb-4">Zintegrowane rozwiązania sprzedażowe</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    Microsoft Dynamics 365 Commerce łączy sprzedaż online i offline w jeden, spójny system, umożliwiając firmom efektywne zarządzanie wszystkimi kanałami sprzedaży. Dzięki temu klienci mogą korzystać z tych samych ofert, metod płatności i poziomu obsługi niezależnie od miejsca zakupu – w sklepie stacjonarnym, na stronie internetowej czy poprzez aplikację mobilną.
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4">Korzyści z integracji sprzedaży online i offline:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Zwiększenie efektywności operacyjnej – automatyzacja procesów sprzedażowych, synchronizacja zamówień i lepsza kontrola nad magazynem.</li>
                      <li>Poprawa doświadczeń klientów – możliwość składania zamówień online i odbioru w sklepie, spójne promocje we wszystkich kanałach sprzedaży.</li>
                      <li>Lepsza analiza i zarządzanie danymi – pełny wgląd w zachowania klientów i wyniki sprzedażowe, co ułatwia podejmowanie trafnych decyzji biznesowych.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">Przykłady zastosowania zintegrowanych rozwiązań sprzedażowych</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaShoppingCart className="text-2xl text-[#107c10]" />
                          <h5 className="text-lg font-semibold text-[#107c10]">Click & Collect</h5>
                        </div>
                        <p className="text-gray-700">Klient zamawia produkt na stronie internetowej i odbiera go w najbliższym sklepie stacjonarnym. Sprzedawca otrzymuje powiadomienie o zamówieniu i może przygotować je do wydania, zapewniając szybką i wygodną realizację.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaBoxes className="text-2xl text-[#107c10]" />
                          <h5 className="text-lg font-semibold text-[#107c10]">Unified Inventory Management</h5>
                        </div>
                        <p className="text-gray-700">Dane o stanach magazynowych są automatycznie synchronizowane między e-commerce, magazynami i sklepami fizycznymi, co minimalizuje ryzyko sprzedaży produktów, których faktycznie brak na stanie.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaUsers className="text-2xl text-[#107c10]" />
                          <h5 className="text-lg font-semibold text-[#107c10]">Personalizowane doświadczenia zakupowe</h5>
                        </div>
                        <p className="text-gray-700">Klient przegląda ofertę online, dodaje produkty do koszyka, ale nie finalizuje zakupu. Dzięki integracji danych sprzedawca w sklepie stacjonarnym może zaoferować mu te same produkty z dodatkowym rabatem, co zwiększa szanse na finalizację transakcji.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaChartLine className="text-2xl text-[#107c10]" />
                          <h5 className="text-lg font-semibold text-[#107c10]">Spójna polityka rabatowa</h5>
                        </div>
                        <p className="text-gray-700">Promocje i oferty specjalne obowiązują zarówno w sklepach stacjonarnych, jak i online, co daje klientom większą elastyczność i zachęca do zakupów w preferowanym kanale.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed mt-8">
                    Integracja sprzedaży online i offline w ramach Microsoft Dynamics 365 Commerce eliminuje silosy danych, usprawnia procesy operacyjne i podnosi jakość obsługi klientów, co przekłada się na wyższą sprzedaż i lojalność konsumentów.
                  </p>
                </div>

                {/* Multichannel Support Section */}
                <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
                  <h3 className="text-2xl font-bold text-[#107c10] mb-4">Obsługa wielokanałowa</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    Microsoft Dynamics 365 Commerce zapewnia kompleksową obsługę wielokanałową, umożliwiając klientom interakcję z marką w sposób płynny i spójny – bez względu na to, czy kupują w sklepie stacjonarnym, online, przez aplikację mobilną, czy na marketplace'ach. Dzięki temu firmy mogą dostarczać klientom spójne doświadczenia zakupowe, eliminując bariery pomiędzy różnymi kanałami sprzedaży i obsługi.
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4">Znaczenie obsługi wielokanałowej:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Poprawa doświadczeń klientów – klienci mogą rozpocząć zakupy w jednym kanale i dokończyć je w innym bez utraty kontekstu.</li>
                      <li>Większa elastyczność sprzedaży – umożliwia firmom dostosowanie się do preferencji klientów i dynamicznych zmian rynkowych.</li>
                      <li>Lepsza spójność danych – centralne zarządzanie zamówieniami, produktami i danymi klientów pozwala uniknąć niespójności w ofertach i dostępności towarów.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">Przykłady zastosowania obsługi wielokanałowej w różnych branżach</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaStore className="text-2xl text-[#107c10]" />
                          <h5 className="text-lg font-semibold text-[#107c10]">Handel detaliczny (Retail)</h5>
                        </div>
                        <p className="text-gray-700">Klient przegląda ofertę na stronie internetowej, zamawia produkt i odbiera go w najbliższym sklepie stacjonarnym. W przypadku braku towaru na miejscu może skorzystać z usługi dostawy do domu, realizowanej z innej lokalizacji.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaTshirt className="text-2xl text-[#107c10]" />
                          <h5 className="text-lg font-semibold text-[#107c10]">Branża modowa</h5>
                        </div>
                        <p className="text-gray-700">Klient korzysta z aplikacji mobilnej, aby sprawdzić dostępność wybranego rozmiaru w najbliższym sklepie. Po zakupie w sklepie stacjonarnym system automatycznie aktualizuje historię zamówień w jego profilu, co pozwala na późniejsze spersonalizowane rekomendacje online.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaLaptop className="text-2xl text-[#107c10]" />
                          <h5 className="text-lg font-semibold text-[#107c10]">Elektronika i AGD</h5>
                        </div>
                        <p className="text-gray-700">Kupujący dokonuje zakupu telewizora online, ale decyduje się na odbiór w salonie, aby skorzystać z usługi montażu i konfiguracji. Pracownik sklepu ma dostęp do szczegółów zamówienia i może zaproponować dodatkowe akcesoria.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaBuilding className="text-2xl text-[#107c10]" />
                          <h5 className="text-lg font-semibold text-[#107c10]">Branża B2B</h5>
                        </div>
                        <p className="text-gray-700">Firma zamawia materiały eksploatacyjne dla swojego zakładu produkcyjnego przez platformę e-commerce, ale finalizuje negocjacje cenowe i warunki dostawy podczas wideokonferencji z przedstawicielem handlowym.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed mt-8">
                    Obsługa wielokanałowa w Microsoft Dynamics 365 Commerce eliminuje bariery między kanałami sprzedaży i obsługi klienta, zapewniając płynne, zintegrowane doświadczenie zakupowe, które zwiększa lojalność klientów i poprawia wyniki sprzedażowe.
                  </p>
                </div>

                {/* Customer Experience Personalization Section */}
                <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
                  <h3 className="text-2xl font-bold text-[#107c10] mb-4">Personalizacja doświadczeń klientów</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    Microsoft Dynamics 365 Commerce personalizuje doświadczenia klientów, dostosowując ofertę, rekomendacje i komunikację do ich indywidualnych preferencji i zachowań zakupowych. Wykorzystuje do tego sztuczną inteligencję (AI) oraz Microsoft Copilot, które analizują dane o klientach w czasie rzeczywistym i automatycznie dostosowują interakcje w różnych kanałach sprzedaży. Dzięki temu firmy mogą zwiększyć zaangażowanie klientów, poprawić ich satysfakcję i zwiększyć konwersję sprzedaży.
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4">Korzyści wynikające z personalizacji</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaBullseye className="text-2xl text-[#107c10]" />
                          <h5 className="text-lg font-semibold text-[#107c10]">Indywidualne rekomendacje produktów</h5>
                        </div>
                        <p className="text-gray-700">System analizuje historię zakupów i preferencje klientów, proponując dopasowane produkty i usługi, co zwiększa szanse na finalizację transakcji.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaChartLine className="text-2xl text-[#107c10]" />
                          <h5 className="text-lg font-semibold text-[#107c10]">Dynamiczne oferty i promocje</h5>
                        </div>
                        <p className="text-gray-700">Personalizowane rabaty i kampanie promocyjne dostosowane do segmentów klientów zwiększają skuteczność sprzedaży i lojalność klientów.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaComments className="text-2xl text-[#107c10]" />
                          <h5 className="text-lg font-semibold text-[#107c10]">Spójna komunikacja</h5>
                        </div>
                        <p className="text-gray-700">Niezależnie od tego, czy klient korzysta ze sklepu online, aplikacji mobilnej czy kontaktuje się z obsługą, system zapewnia jednolite i kontekstowe doświadczenie.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaRobot className="text-2xl text-[#107c10]" />
                          <h5 className="text-lg font-semibold text-[#107c10]">Zautomatyzowana obsługa klienta</h5>
                        </div>
                        <p className="text-gray-700">Dzięki Microsoft Copilot system może automatycznie odpowiadać na pytania klientów, sugerować produkty oraz pomagać w procesie zakupowym, zwiększając efektywność obsługi.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaUserFriends className="text-2xl text-[#107c10]" />
                          <h5 className="text-lg font-semibold text-[#107c10]">Lepsza segmentacja klientów</h5>
                        </div>
                        <p className="text-gray-700">AI analizuje dane w czasie rzeczywistym, identyfikując wzorce zachowań i tworząc segmenty klientów, do których można kierować spersonalizowane kampanie marketingowe.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">Narzędzia wspierające personalizację</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaRobot className="text-2xl text-[#107c10]" />
                          <h5 className="text-lg font-semibold text-[#107c10]">AI w Dynamics 365 Commerce</h5>
                        </div>
                        <p className="text-gray-700">Analizuje dane klientów, przewiduje ich potrzeby i dostosowuje ofertę do ich oczekiwań.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaMicrosoft className="text-2xl text-[#107c10]" />
                          <h5 className="text-lg font-semibold text-[#107c10]">Microsoft Copilot</h5>
                        </div>
                        <p className="text-gray-700">Automatyzuje obsługę klienta, sugeruje produkty oraz wspiera sprzedawców w dostarczaniu spersonalizowanych rekomendacji.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaChartLine className="text-2xl text-[#107c10]" />
                          <h5 className="text-lg font-semibold text-[#107c10]">Power BI</h5>
                        </div>
                        <p className="text-gray-700">Dostarcza zaawansowane analizy zachowań klientów, umożliwiając lepsze dopasowanie strategii sprzedażowej.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed mt-8">
                    Personalizacja w Microsoft Dynamics 365 Commerce pozwala budować trwałe relacje z klientami, zwiększać ich lojalność oraz maksymalizować przychody dzięki precyzyjnie dopasowanym ofertom i rekomendacjom.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'faq' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="faq-tab">
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
          </div>
        </div>
      </DynamicsPageLayout>
    </>
  );
}
