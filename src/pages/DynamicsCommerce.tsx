import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaShoppingCart, FaUsers, FaBoxes, FaStore, FaChartLine, FaMicrosoft, FaTshirt, FaLaptop, FaBuilding } from 'react-icons/fa';
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
      title: "Wielokanałowe zarządzanie sprzedażą",
      description: "Platforma umożliwia integrację różnych kanałów sprzedaży, zapewniając klientom spójne doświadczenia zakupowe, niezależnie od miejsca zakupu."
    },
    {
      icon: <FaUsers />,
      title: "Personalizacja doświadczeń klienta",
      description: "Dzięki dostępowi do danych o preferencjach, historii zakupów i zachowaniach klientów, system pozwala tworzyć spersonalizowane oferty i kampanie marketingowe."
    },
    {
      icon: <FaBoxes />,
      title: "Zarządzanie zapasami i logistyką",
      description: "Dynamics 365 Commerce zapewnia pełną kontrolę nad stanami magazynowymi i procesami logistycznymi, co minimalizuje ryzyko braków produktowych i usprawnia dostawy."
    },
    {
      icon: <FaStore />,
      title: "Integracja sprzedaży online i offline",
      description: "System łączy dane ze sklepów stacjonarnych i platform e-commerce, umożliwiając centralne zarządzanie operacjami i lepszą obsługę klientów."
    },
    {
      icon: <FaChartLine />,
      title: "Zaawansowana analityka",
      description: "Wbudowane narzędzia analityczne wspierane przez AI umożliwiają monitorowanie wskaźników sprzedaży, zachowań klientów i skuteczności kampanii w czasie rzeczywistym."
    },
    {
      icon: <FaMicrosoft />,
      title: "Integracja z ekosystemem Microsoft",
      description: "Pełna kompatybilność z aplikacjami Microsoft, takimi jak Power BI, Dynamics 365 Supply Chain Management czy Microsoft Teams, pozwala na efektywną współpracę między działami i usprawnienie procesów."
    }
  ];

  const faqData = [
    {
      question: "Czym jest Microsoft Dynamics 365 Commerce?",
      answer: "Microsoft Dynamics 365 Commerce to kompleksowa platforma do zarządzania handlem detalicznym, która łączy sprzedaż stacjonarną, online i mobilną. System umożliwia tworzenie spójnych, spersonalizowanych i skutecznych strategii handlowych, niezależnie od kanału sprzedaży. System pomaga w integracji sprzedaży online i offline, umożliwiając lepszą obsługę klientów oraz optymalizację operacji biznesowych. Dzięki zaawansowanym narzędziom analitycznym pozwala również przewidywać trendy i dostosowywać działania do dynamicznie zmieniającego się rynku."
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
