import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaHeadset, FaUser, FaCogs, FaRobot, FaBook, FaMicrosoft } from 'react-icons/fa';
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
    "url": "https://dynamics365.com.pl/dynamics-365-customer-service",
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
      title: "Zarządzanie wieloma kanałami komunikacji",
      description: "System integruje różne kanały, takie jak e-mail, czat, media społecznościowe czy telefon, umożliwiając klientom wybór najwygodniejszego sposobu kontaktu."
    },
    {
      icon: <FaUser />,
      title: "Pełny widok klienta",
      description: "Dynamics 365 Customer Service konsoliduje dane z różnych źródeł, tworząc kompleksowy profil klienta, który jest dostępny dla pracowników obsługi w czasie rzeczywistym."
    },
    {
      icon: <FaCogs />,
      title: "Automatyzacja procesów obsługi",
      description: "System wspiera automatyzację rutynowych zadań, takich jak przypisywanie zgłoszeń czy generowanie odpowiedzi, co pozwala pracownikom skupić się na bardziej złożonych problemach."
    },
    {
      icon: <FaRobot />,
      title: "Wykorzystanie sztucznej inteligencji (AI)",
      description: "Platforma wykorzystuje AI do analizy zgłoszeń, przewidywania problemów klientów oraz sugerowania najlepszych rozwiązan."
    },
    {
      icon: <FaBook />,
      title: "Baza wiedzy",
      description: "Dynamics 365 Customer Service umożliwia tworzenie i zarządzanie bazą wiedzy, co pozwala klientom na samodzielne znajdowanie odpowiedzi na pytania."
    },
    {
      icon: <FaMicrosoft />,
      title: "Integracja z ekosystemem Microsoft",
      description: "Pełna integracja z narzędziami, takimi jak Teams, Outlook czy Power BI, umożliwia efektywną współpracę między zespołami oraz zaawansowaną analizę danych."
    }
  ];

  const faqData = [
    {
      question: "Czym jest Microsoft Dynamics 365 Customer Service?",
      answer: "Microsoft Dynamics 365 Customer Service to kompleksowe rozwiązanie do obsługi klienta, które umożliwia firmom dostarczanie spersonalizowanego wsparcia poprzez wiele kanałów komunikacji, automatyzację procesów i wykorzystanie sztucznej inteligencji."
    },
    {
      question: "Jakie są główne funkcje Dynamics 365 Customer Service?",
      answer: "Główne funkcje obejmują: wielokanałową obsługę klienta, zarządzanie zgłoszeniami, bazę wiedzy, analitykę w czasie rzeczywistym, integrację z portalem samoobsługowym, automatyzację procesów oraz wsparcie AI w rozwiązywaniu problemów."
    },
    {
      question: "Jak Dynamics 365 Customer Service wspiera pracę zdalną?",
      answer: "System umożliwia pracę z dowolnego miejsca poprzez dostęp w chmurze, oferuje narzędzia do współpracy zespołowej, integrację z Microsoft Teams oraz mobilny dostęp do wszystkich funkcji."
    },
    {
      question: "Czy system oferuje funkcje samoobsługowe dla klientów?",
      answer: "Tak, platforma zawiera portal samoobsługowy, bazę wiedzy, chatboty AI oraz możliwość automatycznego rozwiązywania typowych problemów, co pozwala klientom na samodzielne znajdowanie odpowiedzi."
    },
    {
      question: "Jak działa integracja z innymi aplikacjami Microsoft?",
      answer: "System płynnie integruje się z innymi aplikacjami Microsoft 365, w tym Teams, Outlook, SharePoint oraz Power Platform, umożliwiając efektywną współpracę i automatyzację procesów."
    },
    {
      question: "Jakie są możliwości personalizacji systemu?",
      answer: "Dynamics 365 Customer Service można dostosować do specyficznych potrzeb firmy poprzez konfigurację procesów, tworzenie niestandardowych pulpitów, raportów oraz integrację z zewnętrznymi systemami."
    },
    {
      question: "Czy system wspiera obsługę wielojęzyczną?",
      answer: "Tak, platforma obsługuje wiele języków i może być używana w organizacjach międzynarodowych, umożliwiając obsługę klientów w ich rodzimych językach."
    },
    {
      question: "Jak wygląda proces wdrożenia systemu?",
      answer: "Wdrożenie obejmuje analizę potrzeb, konfigurację systemu, migrację danych, szkolenia użytkowników oraz wsparcie techniczne. Proces jest wspierany przez certyfikowanych partnerów Microsoft."
    },
    {
      question: "Jakie są wymagania systemowe?",
      answer: "System działa w chmurze Microsoft Azure i wymaga jedynie przeglądarki internetowej oraz stabilnego połączenia z internetem. Dostępne są również aplikacje mobilne na iOS i Android."
    },
    {
      question: "Jak system wspiera analitykę i raportowanie?",
      answer: "Oferuje zaawansowane narzędzia analityczne, dashboardy w czasie rzeczywistym, raporty niestandardowe oraz integrację z Power BI dla głębszej analizy danych."
    },
    {
      question: "Czy dostępna jest wersja testowa?",
      answer: "Tak, Microsoft oferuje wersję próbną Dynamics 365 Customer Service, która pozwala na przetestowanie funkcjonalności przed podjęciem decyzji o wdrożeniu."
    },
    {
      question: "Jak system zapewnia bezpieczeństwo danych?",
      answer: "Platforma wykorzystuje zaawansowane mechanizmy bezpieczeństwa Microsoft Azure, w tym szyfrowanie danych, kontrolę dostępu oraz zgodność z globalnymi standardami bezpieczeństwa."
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
        {/* Tabs */}
        <div className="flex border-b mb-8">
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
          <div className={`tab-content ${activeTab === 'overview' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="overview-tab">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className={`flex flex-col ${hasModules ? '' : 'lg:flex-row'} gap-8 items-start`}>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <p className="text-lg leading-relaxed">
                    Współczesny klient oczekuje nie tylko produktów najwyższej jakości, ale również obsługi, która sprosta jego potrzebom i oczekiwaniom. W dynamicznym środowisku biznesowym firmy muszą szybko reagować na pytania klientów, rozwiązywać problemy i budować długotrwałe relacje oparte na zaufaniu. Takim narzędziem jest Microsoft Dynamics 365 Customer Service – zaawansowana platforma, która umożliwia firmom dostarczanie spersonalizowanej, efektywnej i niezawodnej obsługi klienta.
                    </p>
                  </div>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg min-h-[200px]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full min-h-[200px]"
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
                <p>Zanim przejdziemy do omówienia funkcji Dynamics 365 Customer Service, warto zrozumieć, jakie wyzwania stoją przed współczesnymi organizacjami:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Klienci oczekują szybkich i spersonalizowanych odpowiedzi w różnych kanałach komunikacji.</li>
                  <li>Rozproszone dane o klientach utrudniają skuteczne zarządzanie ich zgłoszeniami.</li>
                  <li>Brak narzędzi do automatyzacji procesów zwiększa czas i koszty obsługi klienta.</li>
                  <li>Organizacje potrzebują systemu, który pozwoli im przewidywać problemy klientów i działać proaktywnie.</li>
                </ul>
                <p>Dynamics 365 Customer Service oferuje rozwiązania, które pomagają firmom sprostać tym wyzwaniom.</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
                      1. Poprawa satysfakcji klientów
                    </h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dzięki spersonalizowanej obsłudze i szybkiemu rozwiązywaniu problemów klienci czują się docenieni i bardziej lojalni wobec marki.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">2. Redukcja kosztów obsługi klienta</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Automatyzacja procesów i możliwość samodzielnego rozwiązywania problemów przez klientów pozwala obniżyć koszty operacyjne.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">3. Zwiększenie efektywności zespołu</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Pracownicy mają dostęp do pełnych danych o klientach i zaawansowanych narzędzi, co pozwala im pracować szybciej i skuteczniej.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">4. Proaktywne podejście do obsługi</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dzięki AI i analizie danych firmy mogą przewidywać potrzeby klientów i rozwiązywać problemy, zanim one się pojawią.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">5. Skalowalność i elastyczność</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">System można dostosować do specyficznych potrzeb firmy, co sprawia, że jest idealnym rozwiązaniem zarówno dla małych, jak i dużych organizacji.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#8c1f91] text-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#7a1b7e] cursor-pointer group">
                  <h2 className="text-2xl font-bold mb-4 transform transition-transform duration-500 group-hover:translate-x-2">Dlaczego warto wybrać Dynamics 365 Customer Service?</h2>
                  <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Microsoft Dynamics 365 Customer Service to zaawansowana platforma, która umożliwia firmom dostarczanie wyjątkowej obsługi klienta. Dzięki spersonalizowanemu podejściu, automatyzacji i integracji z innymi narzędziami Microsoft, organizacje mogą budować długotrwałe relacje z klientami, zwiększać ich satysfakcję i osiągać lepsze wyniki biznesowe.
                  </p>
                  <p className="text-lg leading-relaxed opacity-90 mt-4 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Zainwestuj w Dynamics 365 Customer Service, aby zapewnić swoim klientom obsługę na najwyższym poziomie i wyróżnić swoją firmę na tle konkurencji.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'features' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="features-tab">
            <div className="space-y-8">
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
