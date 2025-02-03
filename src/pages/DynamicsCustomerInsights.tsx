import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaChartPie, FaUsers, FaRobot, FaChartBar, FaDatabase, FaLock, FaUserPlus, FaRoute, FaMicrosoft, FaClock, FaShieldAlt, FaCogs, FaBrain, FaChartLine, FaUsersCog, FaRocket, FaCheckCircle } from 'react-icons/fa';
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
      icon: <FaDatabase />,
      title: "Integracja danych z różnych źródeł",
      description: "Możliwość łączenia informacji z systemów CRM, ERP, stron internetowych, aplikacji mobilnych, mediów społecznościowych oraz zewnętrznych baz danych w celu stworzenia jednego, spójnego profilu klienta."
    },
    {
      icon: <FaClock />,
      title: "Wgląd w czasie rzeczywistym",
      description: "System przetwarza dane w trybie ciągłym, umożliwiając szybkie reagowanie na zmieniające się potrzeby klientów i dostarczanie spersonalizowanych doświadczeń."
    },
    {
      icon: <FaUsers />,
      title: "Segmentacja i personalizacja",
      description: "Dzięki zaawansowanym algorytmom AI i uczeniu maszynowemu, organizacje mogą tworzyć dynamiczne segmenty klientów, dostosowując oferty i komunikację do ich indywidualnych preferencji oraz zachowań zakupowych."
    },
    {
      icon: <FaRobot />,
      title: "Analiza predykcyjna i rekomendacje",
      description: "Platforma wykorzystuje sztuczną inteligencję do przewidywania zachowań klientów, takich jak prawdopodobieństwo zakupu, skłonność do rezygnacji z usług czy preferowane kanały komunikacji."
    },
    {
      icon: <FaChartBar />,
      title: "Zaawansowane pulpity analityczne",
      description: "Użytkownicy mogą korzystać z interaktywnych paneli do wizualizacji danych, a integracja z Microsoft Power BI umożliwia jeszcze bardziej szczegółową analizę i raportowanie."
    },
    {
      icon: <FaShieldAlt />,
      title: "Zarządzanie zgodnością z przepisami",
      description: "Narzędzia zapewniają zgodność z międzynarodowymi regulacjami dotyczącymi ochrony danych, takimi jak GDPR, CCPA i inne przepisy dotyczące prywatności."
    },
    {
      icon: <FaMicrosoft />,
      title: "Integracja z innymi aplikacjami Microsoft",
      description: "Możliwość rozszerzenia funkcjonalności dzięki integracji z Microsoft Dynamics 365, Power Apps, Power Automate i Azure AI, co pozwala na automatyzację procesów i jeszcze lepszą analizę danych."
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
            label="Microsoft Dynamics 365 Customer Insights"
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
                <h2 className="text-2xl font-bold">Kluczowe wyzwania w zarządzaniu relacjami z klientami</h2>
                <p className="mb-4">
                  Zanim przejdziemy do omówienia funkcji Dynamics 365 Customer Insights, warto zrozumieć wyzwania, które stoją przed firmami:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dane klientów są rozproszone w różnych systemach, co utrudnia ich analizę.</li>
                  <li>Brak pełnego obrazu klienta ogranicza możliwości personalizacji działań.</li>
                  <li>Skomplikowane procesy analityczne wymagają dużo czasu i zasobów.</li>
                  <li>Trudności w dostarczaniu spersonalizowanych doświadczeń w czasie rzeczywistym.</li>
                </ul>
                <p className="mt-4">
                  Dynamics 365 Customer Insights oferuje rozwiązania pozwalające na pokonanie tych przeszkód.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Kluczowe korzyści</h2>
                <p className="text-lg leading-relaxed mb-8">
                  Microsoft Dynamics 365 Customer Insights pozwala firmom lepiej zrozumieć swoich klientów, podejmować decyzje w oparciu o dane i skuteczniej personalizować interakcje. Dzięki temu organizacje mogą zwiększyć zaangażowanie klientów, optymalizować strategie marketingowe i sprzedażowe oraz oszczędzać czas na analizie danych.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
                      Zwiększone zaangażowanie klientów
                    </h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Firmy mogą dostosować komunikację i ofertę do indywidualnych preferencji klientów, co prowadzi do wyższej lojalności i częstszych interakcji.
                    </p>
                  </div>

                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
                      Decyzje oparte na danych
                    </h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Zamiast polegać na intuicji, przedsiębiorstwa mogą korzystać z rzetelnych analiz i prognoz opartych na rzeczywistych danych, co zwiększa skuteczność działań sprzedażowych i marketingowych.
                    </p>
                  </div>

                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
                      Oszczędność czasu i efektywność operacyjna
                    </h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Dzięki automatyzacji procesów analizy danych i segmentacji klientów, organizacje mogą zaoszczędzić do 75% czasu w procesie pozyskiwania klientów, co przyspiesza działania sprzedażowe.
                    </p>
                  </div>

                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
                      Wyższy zwrot z inwestycji (ROI)
                    </h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Firmy wykorzystujące zaawansowaną analitykę danych klientów notują większą skuteczność kampanii marketingowych oraz wyższe przychody, dzięki lepszemu dopasowaniu ofert do odbiorców.
                    </p>
                  </div>

                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
                      Lepsza retencja klientów
                    </h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Dokładne prognozy i wgląd w zachowania klientów pozwalają na szybsze reagowanie na potencjalne zagrożenia, zmniejszając ryzyko ich utraty.
                    </p>
                  </div>

                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
                      Łatwiejsza zgodność z regulacjami
                    </h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Narzędzie wspiera zgodność z przepisami o ochronie danych, takimi jak GDPR czy CCPA, pomagając firmom unikać ryzyka prawnego.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Zwiększenie zaangażowania klientów</h2>
                <p className="text-lg leading-relaxed">
                  Microsoft Dynamics 365 Customer Insights pomaga firmom budować trwałe relacje z klientami, dostarczając spersonalizowane doświadczenia i umożliwiając interakcje w czasie rzeczywistym. Dzięki analizie danych i wykorzystaniu sztucznej inteligencji, organizacje mogą lepiej zrozumieć potrzeby swoich klientów i dostosować komunikację do ich preferencji.
                </p>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Jak platforma zwiększa zaangażowanie?</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
                        Spersonalizowane podróże klientów
                      </h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Microsoft Dynamics 365 Customer Insights analizuje zachowania klientów i na tej podstawie tworzy dynamiczne, dostosowane ścieżki interakcji, co pozwala firmom przewidywać potrzeby i reagować we właściwym momencie.
                      </p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
                        Interakcje w czasie rzeczywistym
                      </h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        System umożliwia natychmiastowe dostosowanie ofert i komunikatów w oparciu o aktualne dane, co zwiększa skuteczność kampanii marketingowych oraz obsługi klienta.
                      </p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
                        Segmentacja i automatyzacja
                      </h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Platforma wykorzystuje algorytmy AI do grupowania klientów według ich zachowań, preferencji i historii zakupowej, umożliwiając firmom tworzenie precyzyjnych kampanii skierowanych do konkretnych segmentów odbiorców.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Przykłady skutecznych strategii zaangażowania</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-[#f3f3f3] to-white p-6 rounded-lg shadow-md">
                      <h4 className="text-lg font-semibold mb-3 text-[#107c10]">E-commerce</h4>
                      <p className="text-gray-700">
                        Sklep internetowy wykorzystujący spersonalizowane rekomendacje produktowe na podstawie wcześniejszych zakupów klientów odnotował wzrost współczynnika konwersji o 20%.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#f3f3f3] to-white p-6 rounded-lg shadow-md">
                      <h4 className="text-lg font-semibold mb-3 text-[#107c10]">Branża finansowa</h4>
                      <p className="text-gray-700">
                        Bank wdrożył automatyczne powiadomienia o najlepszych ofertach kredytowych, dostosowane do historii transakcji klientów, co zwiększyło liczbę wniosków kredytowych o 15%.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#f3f3f3] to-white p-6 rounded-lg shadow-md">
                      <h4 className="text-lg font-semibold mb-3 text-[#107c10]">Retail</h4>
                      <p className="text-gray-700">
                        Sieć sklepów detalicznych wprowadziła oferty w czasie rzeczywistym dla klientów odwiedzających stacjonarne placówki, co skutkowało wzrostem średniej wartości koszyka o 12%.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mt-6">
                  Dzięki wykorzystaniu Microsoft Dynamics 365 Customer Insights, firmy mogą skuteczniej angażować swoich klientów, dostarczając im wartościowe, spersonalizowane doświadczenia w każdym punkcie styku z marką.
                </p>
              </div>

              <div className="space-y-8 mt-12">
                <h2 className="text-2xl font-bold">Zautomatyzowana analiza danych</h2>
                <p className="text-lg leading-relaxed">
                  Microsoft Dynamics 365 Customer Insights wykorzystuje zaawansowaną automatyzację analizy danych, umożliwiając firmom szybkie i precyzyjne pozyskiwanie wglądów bez konieczności ręcznej obróbki informacji. Dzięki sztucznej inteligencji (AI) i mechanizmom uczenia maszynowego organizacje mogą lepiej rozumieć zachowania klientów, prognozować ich potrzeby i optymalizować procesy decyzyjne.
                </p>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Jak działa zautomatyzowana analiza danych?</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="text-[#107c10] mb-4 text-2xl">
                        <FaCogs />
                      </div>
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
                        Automatyczna konsolidacja i czyszczenie danych
                      </h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        System pobiera dane z różnych źródeł, usuwa duplikaty, uzupełnia brakujące informacje i standaryzuje formaty, eliminując błędy manualne.
                      </p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="text-[#107c10] mb-4 text-2xl">
                        <FaBrain />
                      </div>
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
                        Zaawansowana analiza wzorców zachowań
                      </h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Algorytmy AI identyfikują trendy i kluczowe czynniki wpływające na decyzje klientów, co pozwala firmom lepiej dostosować ofertę do ich potrzeb.
                      </p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="text-[#107c10] mb-4 text-2xl">
                        <FaRocket />
                      </div>
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
                        Szybkie generowanie rekomendacji
                      </h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        System dostarcza konkretne wskazówki dotyczące personalizacji komunikacji, optymalizacji cen i strategii marketingowych, co znacząco przyspiesza podejmowanie decyzji biznesowych.
                      </p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="text-[#107c10] mb-4 text-2xl">
                        <FaUsersCog />
                      </div>
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
                        Dynamiczna segmentacja klientów
                      </h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        AI automatycznie tworzy grupy odbiorców na podstawie ich historii zakupowej, preferencji i interakcji z marką, ułatwiając skuteczne targetowanie kampanii.
                      </p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="text-[#107c10] mb-4 text-2xl">
                        <FaChartLine />
                      </div>
                      <h4 className="text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
                        Automatyczne prognozy
                      </h4>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        System przewiduje przyszłe zachowania klientów, takie jak prawdopodobieństwo zakupu lub ryzyko rezygnacji z usług, pomagając firmom proaktywnie reagować na potrzeby rynku.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Wpływ na procesy decyzyjne</h3>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-lg mb-6">
                      Dzięki automatycznej analizie danych i rekomendacjom AI, organizacje mogą:
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="text-[#107c10] text-xl mt-1">
                          <FaCheckCircle />
                        </div>
                        <p className="text-gray-700">
                          <span className="font-semibold">Podejmować szybsze i bardziej trafne decyzje</span> – gotowe wglądy i predykcje eliminują konieczność długotrwałej analizy manualnej.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="text-[#107c10] text-xl mt-1">
                          <FaCheckCircle />
                        </div>
                        <p className="text-gray-700">
                          <span className="font-semibold">Optymalizować strategię marketingową i sprzedażową</span> – lepsze zrozumienie zachowań klientów umożliwia efektywniejsze zarządzanie budżetem reklamowym i zwiększa skuteczność kampanii.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="text-[#107c10] text-xl mt-1">
                          <FaCheckCircle />
                        </div>
                        <p className="text-gray-700">
                          <span className="font-semibold">Zwiększać efektywność operacyjną</span> – automatyzacja analiz pozwala zespołom skupić się na działaniach strategicznych zamiast na ręcznym przetwarzaniu danych.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mt-6">
                  Microsoft Dynamics 365 Customer Insights nie tylko automatyzuje analizę danych, ale przede wszystkim przekształca informacje w wartościowe spostrzeżenia, które przekładają się na realne korzyści biznesowe.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-[#128017] text-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#0f6813] cursor-pointer group">
                  <h2 className="text-2xl font-bold mb-4 transform transition-transform duration-500 group-hover:translate-x-2">Dlaczego warto wybrać Dynamics 365 Customer Insights?</h2>
                  <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Microsoft Dynamics 365 Customer Insights pozwala firmom przekuć dane w realne korzyści, optymalizując zarówno doświadczenie klientów, jak i wyniki biznesowe.
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
