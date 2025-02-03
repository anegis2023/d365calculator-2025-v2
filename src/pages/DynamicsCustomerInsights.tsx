import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaHeadset, FaUser, FaCogs, FaRobot, FaBook, FaMicrosoft, FaTicketAlt, 
         FaComments, FaUserCog, FaChartLine, FaTools, FaEnvelope, FaPhone, 
         FaCommentDots, FaHashtag, FaSms, FaUserCircle, FaBrain, FaDatabase, 
         FaChartBar, FaShieldAlt, FaUsers, FaRegClock, FaUserFriends, FaUserPlus, FaRoute } from 'react-icons/fa';
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
    "url": "https://dynamics365.com.pl/dynamics-365-customer-insights",
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
    className={`px-6 py-3 font-medium text-lg border-b-2 transition-colors duration-300 ${
      isActive 
        ? 'border-[#107c10] text-[#107c10]' 
        : 'border-transparent text-gray-500 hover:text-[#107c10]'
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
      icon: <FaDatabase />,
      title: "Ujednolicanie danych klientów",
      description: "System integruje dane z różnych źródeł, takich jak systemy CRM, transakcyjne bazy danych czy platformy analityczne, tworząc jeden spójny widok klienta."
    },
    {
      icon: <FaUserPlus />,
      title: "Wzbogacanie profili klientów",
      description: "Dzieki integracji z danymi Microsoft i partnerów, platforma pozwala wzbogacić profile klientów o dodatkowe informacje, takie jak dane demograficzne czy preferencje zakupowe."
    },
    {
      icon: <FaRoute />,
      title: "Orkiestracja podróży klienta w czasie rzeczywistym",
      description: "Dynamics 365 Customer Insights umożliwia tworzenie spersonalizowanych ścieżek klienta, dostosowanych do ich aktualnych interakcji i zachowań."
    },
    {
      icon: <FaRobot />,
      title: "Wykorzystanie sztucznej inteligencji (AI)",
      description: "Platforma wspiera firmy w przewidywaniu kluczowych zachowań klientów, takich jak rezygnacja z usług czy prawdopodobieństwo zakupu, co pozwala na lepsze planowanie działań."
    },
    {
      icon: <FaMicrosoft />,
      title: "Integracja z ekosystemem Microsoft",
      description: "Pełna kompatybilności z innymi narzędziami Microsoft, takimi jak Dynamics 365 Sales, Power BI czy Microsoft Teams, pozwala na kompleksowe zarządzanie danymi klientów."
    }
  ];

  const faqData = [
    {
      question: "Czym jest Microsoft Dynamics 365 Customer Insights?",
      answer: "Microsoft Dynamics 365 Customer Insights to platforma danych klientów (CDP), która umożliwia organizacjom zbieranie, integrację i analizę danych klientów z różnych źródeł, aby tworzyć spersonalizowane doświadczenia i lepiej zrozumieć ich potrzeby."
    },
    {
      question: "Jakie są główne funkcje Dynamics 365 Customer Insights?",
      answer: "Ujednolicanie danych klientów z różnych systemów.\nWzbogacanie profili klientów o dodatkowe dane demograficzne i behawioralne.\nOrkiestracja spersonalizowanych podróży klienta w czasie rzeczywistym.\nAnaliza i prognozowanie zachowań klientów z wykorzystaniem AI.\nIntegracja z narzędziami Microsoft, takimi jak Power BI, Dynamics 365 Sales czy Teams."
    },
    {
      question: "Dla kogo jest przeznaczone to rozwiązanie?",
      answer: "Dynamics 365 Customer Insights jest przeznaczone dla firm każdej wielkości, które chcą lepiej zrozumieć swoich klientów i dostarczać spersonalizowane doświadczenia, niezależnie od branży – od marketingu i sprzedaży po obsługę klienta."
    },
    {
      question: "Jak Dynamics 365 Customer Insights wspiera personalizację działań?",
      answer: "Platforma tworzy pełny widok klienta, gromadząc dane z różnych źródeł, takich jak CRM, bazy danych i kanały komunikacji. Pozwala to firmom dostosowywać oferty, kampanie marketingowe i interakcje w czasie rzeczywistym."
    },
    {
      question: "Czy Dynamics 365 Customer Insights integruje się z innymi systemami?",
      answer: "Tak, Dynamics 365 Customer Insights integruje się z narzędziami Microsoft, takimi jak Dynamics 365 Sales, Power BI czy Teams, a także z zewnętrznymi systemami za pomocą API."
    },
    {
      question: "Jakie korzyści przynosi Dynamics 365 Customer Insights działowi marketingu?",
      answer: "Platforma umożliwia segmentację klientów, tworzenie spersonalizowanych kampanii marketingowych i mierzenie ich skuteczności. Dzięki temu zespoły marketingowe mogą zwiększyć efektywność swoich działań i współczynnik konwersji."
    },
    {
      question: "Jak Dynamics 365 Customer Insights wspiera dział sprzedaży?",
      answer: "Zespoły sprzedaży mają dostęp do pełnych profili klientów, co pozwala im lepiej dostosowywać oferty, identyfikować potencjalne szanse sprzedażowe i szybciej zamykać transakcje."
    },
    {
      question: "Czy mogę używać Dynamics 365 Customer Insights do prognozowania zachowań klientów?",
      answer: "Tak, platforma wykorzystuje sztuczną inteligencję i modele uczenia maszynowego do przewidywania kluczowych zachowań klientów, takich jak rezygnacja z usług czy prawdopodobieństwo zakupu."
    },
    {
      question: "Czy Dynamics 365 Customer Insights obsługuje dane w czasie rzeczywistym?",
      answer: "Tak, platforma umożliwia orkiestrację działań w czasie rzeczywistym, co pozwala firmom reagować na bieżące interakcje klientów."
    },
    {
      question: "Czy system pozwala na integrację z danymi zewnętrznymi?",
      answer: "Tak, Dynamics 365 Customer Insights umożliwia integrację danych zewnętrznych, takich jak dane demograficzne, behawioralne czy dane transakcyjne, co wzbogaca profile klientów."
    },
    {
      question: "Jak Dynamics 365 Customer Insights wspiera obsługę klienta?",
      answer: "Dzięki pełnym profilom klientów, pracownicy obsługi klienta mają szybki dostęp do historii interakcji i preferencji klientów, co pozwala na bardziej efektywne rozwiązywanie problemów."
    },
    {
      question: "Czy Dynamics 365 Customer Insights jest dostępny na urządzeniach mobilnych?",
      answer: "Dynamics 365 Customer Insights jest częścią chmurowego ekosystemu Microsoft i może być używany na dowolnym urządzeniu z dostępem do internetu."
    },
    {
      question: "Czy Dynamics 365 Customer Insights oferuje zaawansowane raportowanie?",
      answer: "Tak, system integruje się z Power BI, co umożliwia tworzenie interaktywnych raportów i wizualizacji, które pomagają w analizie danych klientów i podejmowaniu decyzji biznesowych."
    },
    {
      question: "Jakie są wymagania systemowe dla Dynamics 365 Customer Insights?",
      answer: "Platforma działa w chmurze, co oznacza, że wymaga jedynie przeglądarki internetowej i stabilnego połączenia z internetem."
    },
    {
      question: "Czy mogę przetestować Dynamics 365 Customer Insights przed zakupem?",
      answer: "Tak, Microsoft oferuje bezpłatną wersję próbną, która pozwala przetestować funkcjonalności systemu przed podjęciem decyzji o zakupie."
    },
    {
      question: "Jakie są dostępne opcje subskrypcji dla Dynamics 365 Customer Insights?",
      answer: "Microsoft oferuje elastyczne modele subskrypcji dostosowane do potrzeb różnych firm. Szczegółowe informacje na temat dostępnych planów można znaleźć na stronie produktu."
    },
    {
      question: "Czy system wspiera zgodność z przepisami dotyczącymi ochrony danych, np. RODO?",
      answer: "Tak, Dynamics 365 Customer Insights został zaprojektowany z myślą o zgodności z przepisami dotyczącymi ochrony danych, w tym RODO, zapewniając bezpieczeństwo i ochronę danych klientów."
    },
    {
      question: "Jak Dynamics 365 Customer Insights wspiera podejmowanie decyzji?",
      answer: "Platforma dostarcza zaawansowane analizy i prognozy, które umożliwiają menedżerom podejmowanie decyzji opartych na danych, zwiększając efektywność działań biznesowych."
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
            label="Microsoft Dynamics 365 Customer Insights "
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
          <div className={`tab-content ${activeTab === 'overview' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="overview-tab">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className={`flex flex-col ${hasModules ? '' : 'lg:flex-row'} gap-8 items-start`}>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <p className="text-lg leading-relaxed">
                    Microsoft Dynamics 365 Customer Insights to zaawansowana platforma danych klientów (Customer Data Platform, CDP), zaprojektowana przez Microsoft w celu integracji i analizy danych klientów w czasie rzeczywistym. Rozwiązanie to umożliwia firmom tworzenie pełnego profilu klienta, łącząc dane z różnych źródeł i dostarczając wartościowych insightów, które pomagają w personalizacji interakcji oraz optymalizacji strategii biznesowych.
                    </p>
                    <p className="text-lg leading-relaxed">
                    W dobie cyfrowej transformacji organizacje gromadzą ogromne ilości danych pochodzących z różnych systemów – od CRM i ERP, przez platformy e-commerce, po interakcje w mediach społecznościowych. Microsoft Dynamics 365 Customer Insights pozwala przekształcić te rozproszone informacje w kompleksowy widok klienta, który pomaga firmom podejmować bardziej świadome decyzje i zwiększać poziom zaangażowania użytkowników.
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
                <h2 className="text-2xl font-bold">Kluczowe funkcje</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center mb-4">
                      <FaDatabase className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Integracja danych z różnych źródeł</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Możliwość łączenia informacji z systemów CRM, ERP, stron internetowych, aplikacji mobilnych, mediów społecznościowych oraz zewnętrznych baz danych w celu stworzenia jednego, spójnego profilu klienta.
                    </p>
                  </div>

                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center mb-4">
                      <FaRegClock className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Wgląd w czasie rzeczywistym</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      System przetwarza dane w trybie ciągłym, umożliwiając szybkie reagowanie na zmieniające się potrzeby klientów i dostarczanie spersonalizowanych doświadczeń.
                    </p>
                  </div>

                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center mb-4">
                      <FaUserFriends className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Segmentacja i personalizacja</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Dzięki zaawansowanym algorytmom AI i uczeniu maszynowemu, organizacje mogą tworzyć dynamiczne segmenty klientów, dostosowując oferty i komunikację do ich indywidualnych preferencji oraz zachowań zakupowych.
                    </p>
                  </div>

                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center mb-4">
                      <FaBrain className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Analiza predykcyjna i rekomendacje</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Platforma wykorzystuje sztuczną inteligencję do przewidywania zachowań klientów, takich jak prawdopodobieństwo zakupu, skłonność do rezygnacji z usług czy preferowane kanały komunikacji.
                    </p>
                  </div>

                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center mb-4">
                      <FaChartBar className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Zaawansowane pulpity analityczne</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Użytkownicy mogą korzystać z interaktywnych paneli do wizualizacji danych, a integracja z Microsoft Power BI umożliwia jeszcze bardziej szczegółową analizę i raportowanie.
                    </p>
                  </div>

                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center mb-4">
                      <FaShieldAlt className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Zarządzanie zgodnością z przepisami</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Narzędzia zapewniają zgodność z międzynarodowymi regulacjami dotyczącymi ochrony danych, takimi jak GDPR, CCPA i inne przepisy dotyczące prywatności.
                    </p>
                  </div>

                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center mb-4">
                      <FaMicrosoft className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Integracja z innymi aplikacjami Microsoft</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Możliwość rozszerzenia funkcjonalności dzięki integracji z Microsoft Dynamics 365, Power Apps, Power Automate i Azure AI, co pozwala na automatyzację procesów i jeszcze lepszą analizę danych.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#128017] text-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#0f6813] cursor-pointer group">
                  <h2 className="text-2xl font-bold mb-4 transform transition-transform duration-500 group-hover:translate-x-2">Dlaczego warto wybrać Dynamics 365 Customer Insights?</h2>
                  <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Microsoft Dynamics 365 Customer Insights to narzędzie, które pozwala firmom budować lepsze relacje z klientami dzięki zaawansowanej analityce, personalizacji działań i integracji z ekosystemem Microsoft. To kompleksowe rozwiązanie dla organizacji, które chcą dostarczać swoim klientom spersonalizowane, responsywne i efektywne doświadczenia.
                  </p>
                  <p className="text-lg leading-relaxed opacity-90 mt-4 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Zainwestuj w Dynamics 365 Customer Insights, aby zrozumieć swoich klientów i rozwijać swoje działania na rynku z większą skutecznością.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'features' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="features-tab">
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
