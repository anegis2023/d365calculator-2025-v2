import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaHeadset, FaUser, FaCogs, FaRobot, FaBook, FaMicrosoft, FaTicketAlt, FaComments, FaUserCog, FaChartLine, FaTools, FaEnvelope, FaPhone, FaCommentDots, FaHashtag, FaSms, FaUserCircle, FaBrain, FaClock, FaBullseye, FaHistory, FaSearch, FaCheckCircle, FaLevelUpAlt, FaListAlt } from 'react-icons/fa';
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
      icon: <FaRobot />,
      title: "Wsparcie AI, w tym Copilot",
      description: "Sztuczna inteligencja wspomaga agentów w analizie zgłoszeń, sugerowaniu odpowiedzi oraz automatycznym klasyfikowaniu spraw."
    },
    {
      icon: <FaTicketAlt />,
      title: "Zarządzanie przypadkami",
      description: "Umożliwia skuteczne śledzenie i obsługę zgłoszeń klientów, zapewniając pełną historię interakcji i szybkie rozwiązywanie problemów."
    },
    {
      icon: <FaCogs />,
      title: "Automatyzacja procesów",
      description: "Redukuje manualne zadania dzięki regułom biznesowym, przepływom pracy i botom obsługowym, które automatycznie przetwarzają zgłoszenia."
    },
    {
      icon: <FaComments />,
      title: "Wielokanałowa obsługa",
      description: "Integracja z e-mailem, telefonem, czatem na żywo i mediami społecznościowymi pozwala klientom kontaktować się w preferowany sposób."
    },
    {
      icon: <FaBook />,
      title: "Baza wiedzy",
      description: "Dostęp do artykułów i przewodników umożliwia agentom szybkie znajdowanie rozwiązań i poprawia efektywność obsługi."
    },
    {
      icon: <FaMicrosoft />,
      title: "Integracja z narzędziami Microsoft",
      description: "Ścisłe połączenie z Microsoft Teams, Power BI i Power Apps usprawnia współpracę, analizę danych i tworzenie niestandardowych rozwiązań."
    },
    {
      icon: <FaChartLine />,
      title: "Zaawansowana analityka i raportowanie",
      description: "Monitorowanie kluczowych wskaźników efektywności (KPI) pozwala na optymalizację procesów i zwiększenie jakości obsługi."
    }
  ];

  const faqData = [
    {
      question: "Czym jest Microsoft Dynamics 365 Customer Service?",
      answer: "Microsoft Dynamics 365 Customer Service to kompleksowe rozwiązanie do obsługi klienta, które umożliwia organizacjom efektywne zarządzanie obsługą klienta. Dzięki wielokanałowej komunikacji, inteligentnej automatyzacji i ścisłej integracji z innymi produktami Microsoft, firmy mogą podnieść jakość swoich usług, zwiększyć satysfakcję klientów i zoptymalizować wewnętrzne procesy."

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
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8 border-b">
          <h2>
            <Tab
              label="Microsoft Dynamics 365 Customer Service"
              isActive={activeTab === 'overview'}
              onClick={() => setActiveTab('overview')}
            />
          </h2>
          <h2>
            <Tab
              label="Funkcje"
              isActive={activeTab === 'features'}
              onClick={() => setActiveTab('features')}
            />
          </h2>
          <h2>
            <Tab
              label="FAQ"
              isActive={activeTab === 'faq'}
              onClick={() => setActiveTab('faq')}
            />
          </h2>
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          <div className={`tab-content ${activeTab === 'overview' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="overview-tab">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className={`flex flex-col ${hasModules ? '' : 'lg:flex-row'} gap-8 items-start`}>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <p className="text-lg leading-relaxed">
                    Microsoft Dynamics 365 Customer Service to zaawansowane, chmurowe rozwiązanie opracowane przez Microsoft, które umożliwia organizacjom efektywne zarządzanie obsługą klienta. Dzięki wielokanałowej komunikacji, inteligentnej automatyzacji i ścisłej integracji z innymi produktami Microsoft, firmy mogą podnieść jakość swoich usług, zwiększyć satysfakcję klientów i zoptymalizować wewnętrzne procesy.

Rozwiązanie jest skalowalne, co oznacza, że mogą z niego korzystać zarówno małe firmy, jak i duże przedsiębiorstwa o złożonych strukturach obsługi klienta. Oparte na chmurze środowisko gwarantuje wysoką dostępność, bezpieczeństwo danych i możliwość dostępu do systemu z dowolnego miejsca.
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
                <h2 className="text-2xl font-bold text-left">Kluczowe cechy</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-semibold">Wielokanałowa komunikacja</span> – Obsługa klientów poprzez różne kanały, w tym e-mail, telefon, czat na żywo i media społecznościowe, co zapewnia wygodny dostęp do wsparcia.</li>
                  <li><span className="font-semibold">Integracja z ekosystemem Microsoft</span> – Bezproblemowe połączenie z Microsoft Teams, Power BI i innymi narzędziami ułatwia współpracę między zespołami oraz analizę kluczowych wskaźników wydajności.</li>
                  <li><span className="font-semibold">Zaawansowane AI, w tym Copilot</span> – Automatyzacja procesów, analiza zapytań oraz rekomendacje w czasie rzeczywistym pomagają pracownikom szybciej i skuteczniej odpowiadać na potrzeby klientów.</li>
                  <li><span className="font-semibold">Chmurowe środowisko</span> – Skalowalna infrastruktura zapewnia elastyczność, bezpieczeństwo i możliwość pracy zdalnej.</li>
                  <li><span className="font-semibold">Lepsza personalizacja obsługi</span> – Gromadzenie i analiza danych o klientach pozwala na dostosowanie usług do ich indywidualnych preferencji i historii interakcji.</li>
                </ul>
                <p className="text-lg leading-relaxed text-left">
                  Dzięki Microsoft Dynamics 365 Customer Service firmy mogą zoptymalizować procesy obsługi klienta, podnieść jakość interakcji i zwiększyć efektywność zespołów. Jest to kluczowe narzędzie dla organizacji, które dążą do budowania długoterminowych relacji z klientami oraz zwiększania ich lojalności.
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-left space-y-4">
                  <h2 className="text-3xl font-bold">Zarządzanie obsługą klienta</h2>
                  <p className="text-lg leading-relaxed text-left">
                    Microsoft Dynamics 365 Customer Service to kompleksowe narzędzie do zarządzania obsługą klienta, które umożliwia firmom skuteczne organizowanie i monitorowanie interakcji z klientami. Dzięki zaawansowanemu systemowi zarządzania przypadkami oraz wielokanałowej komunikacji, przedsiębiorstwa mogą szybko reagować na potrzeby klientów i zapewniać im spójne doświadczenia na każdym etapie kontaktu.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <FaTicketAlt className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Zarządzanie przypadkami</h3>
                    </div>
                    <p className="text-gray-600">Możliwość rejestrowania, monitorowania i rozwiązywania zgłoszeń klientów w sposób uporządkowany, zapewniając pełną historię interakcji.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <FaComments className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Wielokanałowa komunikacja</h3>
                    </div>
                    <p className="text-gray-600">Obsługa klientów za pośrednictwem różnych kanałów, takich jak e-mail, telefon, czat na żywo i media społecznościowe, co zapewnia wygodny dostęp do wsparcia.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <FaUserCog className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Automatyczne przypisywanie zgłoszeń</h3>
                    </div>
                    <p className="text-gray-600">System inteligentnie kieruje zapytania klientów do odpowiednich agentów na podstawie kompetencji, priorytetu i obciążenia zespołu.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <FaBook className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Baza wiedzy</h3>
                    </div>
                    <p className="text-gray-600">Dostęp do rozbudowanej bazy artykułów i poradników umożliwia agentom szybkie znajdowanie odpowiedzi na najczęściej zadawane pytania.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <FaChartLine className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Monitorowanie wskaźników jakości obsługi</h3>
                    </div>
                    <p className="text-gray-600">Integracja z Power BI pozwala analizować kluczowe metryki, takie jak czas odpowiedzi, średni czas rozwiązania zgłoszenia i poziom satysfakcji klientów.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <FaTools className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Automatyzacja procesów</h3>
                    </div>
                    <p className="text-gray-600">Wykorzystanie reguł biznesowych i przepływów pracy do przyspieszenia realizacji zadań i eliminacji manualnych operacji.</p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Dzięki tym funkcjom firmy mogą efektywnie zarządzać interakcjami z klientami, minimalizować czas reakcji oraz podnosić jakość świadczonych usług, co przekłada się na wyższą lojalność i zadowolenie klientów.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-left">Wielokanałowa komunikacja</h2>
                <p className="text-lg leading-relaxed">
                  Microsoft Dynamics 365 Customer Service zapewnia wielokanałową komunikację, umożliwiając firmom obsługę klientów przez różne kanały w jednym, zintegrowanym systemie. Dzięki temu klienci mogą kontaktować się w najwygodniejszy dla siebie sposób, a firmy mogą zapewnić spójne i szybkie wsparcie bez względu na wybraną metodę komunikacji.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center mb-4">
                      <FaEnvelope className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">E-mail</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Automatyczna obsługa zapytań e-mailowych z możliwością kategoryzacji, przypisywania do agentów i śledzenia historii wiadomości.
                    </p>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center mb-4">
                      <FaPhone className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Telefon</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Integracja z systemami telefonicznymi umożliwia odbieranie i prowadzenie rozmów bezpośrednio w interfejsie Dynamics 365.
                    </p>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center mb-4">
                      <FaCommentDots className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Czat na żywo</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Możliwość natychmiastowej interakcji z klientami poprzez czat na stronie internetowej lub w aplikacjach mobilnych.
                    </p>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center mb-4">
                      <FaHashtag className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Media społecznościowe</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Obsługa zgłoszeń i zapytań klientów z Facebooka, Twittera, WhatsApp i innych platform bezpośrednio w systemie.
                    </p>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center mb-4">
                      <FaSms className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">SMS</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Wysyłanie powiadomień i odpowiedzi na zapytania klientów przez wiadomości tekstowe.
                    </p>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center mb-4">
                      <FaUserCircle className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Portale samoobsługowe</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Klienci mogą samodzielnie wyszukiwać rozwiązania w bazie wiedzy i zgłaszać problemy bez potrzeby kontaktu z agentem.
                    </p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Dzięki scentralizowanemu zarządzaniu komunikacją, agenci mają pełny wgląd w historię interakcji klienta, niezależnie od używanego kanału. To pozwala na szybsze i bardziej spersonalizowane wsparcie, zwiększając satysfakcję i lojalność klientów.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Integracja z narzędziami Microsoft</h2>
                <p className="text-lg leading-relaxed">
                  Microsoft Dynamics 365 Customer Service jest w pełni zintegrowane z innymi narzędziami Microsoft, co umożliwia firmom skuteczne zarządzanie obsługą klienta, lepszą analizę danych i automatyzację procesów. Dzięki ścisłej współpracy z ekosystemem Microsoft, zespoły mogą pracować efektywniej, bez konieczności przełączania się między różnymi aplikacjami.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center mb-4">
                      <FaMicrosoft className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Microsoft Teams</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Umożliwia agentom szybkie konsultacje z ekspertami w firmie, współpracę w czasie rzeczywistym oraz organizowanie wideokonferencji bezpośrednio w interfejsie Dynamics 365.
                    </p>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center mb-4">
                      <FaChartLine className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Power BI</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Dostarcza zaawansowane raportowanie i analitykę, umożliwiając monitorowanie wydajności obsługi klienta oraz identyfikowanie trendów na podstawie rzeczywistych danych.
                    </p>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center mb-4">
                      <FaCogs className="text-2xl text-[#107c10] mr-3" />
                      <h3 className="text-xl font-semibold">Power Apps</h3>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                      Pozwala na tworzenie niestandardowych aplikacji i rozszerzeń dostosowanych do specyficznych potrzeb organizacji, bez konieczności zaawansowanego kodowania.
                    </p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Integracja tych narzędzi pozwala firmom usprawnić przepływ pracy, zwiększyć przejrzystość danych i zautomatyzować powtarzalne procesy, co prowadzi do wyższej jakości obsługi klienta i większej efektywności operacyjnej.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-left">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-[#107c10]">
                      1. Poprawa satysfakcji klientów
                    </h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dzięki spersonalizowanej obsłudze i szybkiemu rozwiązywaniu problemów klienci czują się docenieni i bardziej lojalni wobec marki.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-[#107c10]">2. Redukcja kosztów obsługi klienta</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Automatyzacja procesów i możliwość samodzielnego rozwiązywania problemów przez klientów pozwala obniżyć koszty operacyjne.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-[#107c10]">3. Zwiększenie efektywności zespołu</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Pracownicy mają dostęp do pełnych danych o klientach i zaawansowanych narzędzi, co pozwala im pracować szybciej i skuteczniej.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-[#107c10]">4. Proaktywne podejście do obsługi</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dzięki AI i analizie danych firmy mogą przewidywać potrzeby klientów i rozwiązywać problemy, zanim one się pojawią.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-[#107c10]">5. Skalowalność i elastyczność</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">System można dostosować do specyficznych potrzeb firmy, co sprawia, że jest idealnym rozwiązaniem zarówno dla małych, jak i dużych organizacji.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#8c1f91] text-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#7a1b7e] cursor-pointer group">
                <h2 className="text-2xl font-bold mb-4 transform transition-transform duration-500 group-hover:translate-x-2 text-left">Dlaczego warto wybrać Dynamics 365 Customer Service?</h2>
                <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2 text-left">
                  Microsoft Dynamics 365 Customer Service to zaawansowana platforma, która umożliwia firmom dostarczanie wyjątkowej obsługi klienta. Dzięki spersonalizowanemu podejściu, automatyzacji i integracji z innymi narzędziami Microsoft, organizacje mogą budować długoterminowe relacje z klientami, zwiększać ich satysfakcję i osiągać lepsze wyniki biznesowe.
                </p>
                <p className="text-lg leading-relaxed opacity-90 mt-4 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2 text-left">
                  Zainwestuj w Dynamics 365 Customer Service, aby zapewnić swoim klientom obsługę na najwyższym poziomie i wyróżnić swoją firmę na tle konkurencji.
                </p>
              </div>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'features' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="features-tab">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-left mb-6">Funkcje, które wyróżniają Dynamics 365 Customer Service</h2>
                <p className="text-lg leading-relaxed mb-8">
                  Microsoft Dynamics 365 Customer Service oferuje szeroki zakres funkcji, które wspierają firmy w efektywnym zarządzaniu obsługą klienta. Dzięki zaawansowanej automatyzacji, wsparciu AI i inteligentnemu zarządzaniu przypadkami, organizacje mogą szybciej rozwiązywać zgłoszenia i dostarczać spersonalizowane doświadczenia.
                </p>
              </div>
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

              <div className="space-y-6 mt-12">
                <h2 className="text-2xl font-bold">Wsparcie AI i Copilot</h2>
                <p className="text-lg leading-relaxed">
                  Microsoft Dynamics 365 Customer Service wykorzystuje zaawansowane AI, aby zwiększyć efektywność obsługi klienta i przyspieszyć rozwiązywanie problemów. Dzięki inteligentnym algorytmom i analizie danych w czasie rzeczywistym, system potrafi automatycznie klasyfikować zgłoszenia, sugerować rozwiązania oraz wspierać agentów w podejmowaniu decyzji.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Kluczowym elementem tej technologii jest Copilot, który pełni rolę wirtualnego asystenta dla zespołów obsługi klienta. Copilot analizuje treść zgłoszeń i dostarcza agentom inteligentne podpowiedzi, przyspieszając odpowiedzi na zapytania klientów. Może również sugerować najlepsze rozwiązania na podstawie wcześniejszych przypadków, co znacząco redukuje czas potrzebny na znalezienie optymalnej odpowiedzi.
                </p>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Dzięki wsparciu AI i Copilot, firmy mogą:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center mb-4">
                        <FaBrain className="text-2xl text-[#107c10] mr-3" />
                        <h4 className="text-lg font-semibold">Automatyczna diagnostyka</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Automatycznie diagnozować problemy klientów, identyfikując powtarzające się wzorce w zgłoszeniach.
                      </p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center mb-4">
                        <FaClock className="text-2xl text-[#107c10] mr-3" />
                        <h4 className="text-lg font-semibold">Szybsza obsługa</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Skracać czas obsługi zgłoszeń, dostarczając agentom gotowe odpowiedzi i rekomendacje.
                      </p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center mb-4">
                        <FaBullseye className="text-2xl text-[#107c10] mr-3" />
                        <h4 className="text-lg font-semibold">Większa dokładność</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Zwiększać dokładność odpowiedzi, wykorzystując analizę danych i historię interakcji.
                      </p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center mb-4">
                        <FaUserCog className="text-2xl text-[#107c10] mr-3" />
                        <h4 className="text-lg font-semibold">Personalizacja</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Personalizować obsługę klienta, dostosowując komunikację do indywidualnych potrzeb użytkowników.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mt-8">
                  Dzięki wykorzystaniu sztucznej inteligencji i Copilot, Microsoft Dynamics 365 Customer Service pomaga firmom nie tylko przyspieszyć obsługę klientów, ale także zwiększyć satysfakcję użytkowników, oferując bardziej precyzyjne i spersonalizowane wsparcie.
                </p>
              </div>

              <div className="space-y-6 mt-12">
                <h2 className="text-2xl font-bold">Zarządzanie przypadkami</h2>
                <p className="text-lg leading-relaxed">
                  Microsoft Dynamics 365 Customer Service oferuje kompleksowy system zarządzania przypadkami, który umożliwia firmom skuteczne monitorowanie, organizowanie i rozwiązywanie zgłoszeń klientów. Każda interakcja jest rejestrowana i śledzona, co pozwala na szybkie reagowanie i zapewnienie spójnej obsługi na każdym etapie kontaktu.
                </p>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Proces zarządzania przypadkami:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center mb-4">
                        <FaTicketAlt className="text-2xl text-[#107c10] mr-3" />
                        <h4 className="text-lg font-semibold">Rejestracja zgłoszenia</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Automatyczne lub ręczne tworzenie nowego przypadku na podstawie zgłoszenia klienta, niezależnie od wybranego kanału komunikacji.
                      </p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center mb-4">
                        <FaHistory className="text-2xl text-[#107c10] mr-3" />
                        <h4 className="text-lg font-semibold">Śledzenie interakcji</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Każda wiadomość, rozmowa telefoniczna, czat czy e-mail jest rejestrowany, umożliwiając pełną historię kontaktu w jednym miejscu.
                      </p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center mb-4">
                        <FaUserCog className="text-2xl text-[#107c10] mr-3" />
                        <h4 className="text-lg font-semibold">Przypisywanie do agenta</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Inteligentne algorytmy przypisują przypadek do najlepiej dopasowanego pracownika na podstawie jego kompetencji i obciążenia.
                      </p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center mb-4">
                        <FaSearch className="text-2xl text-[#107c10] mr-3" />
                        <h4 className="text-lg font-semibold">Analiza i diagnostyka</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Copilot i AI sugerują rozwiązania na podstawie poprzednich przypadków i dostępnej bazy wiedzy.
                      </p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center mb-4">
                        <FaCheckCircle className="text-2xl text-[#107c10] mr-3" />
                        <h4 className="text-lg font-semibold">Rozwiązanie sprawy</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Agent podejmuje działania, konsultując się z zespołem lub wykorzystując automatyczne przepływy pracy.
                      </p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center mb-4">
                        <FaChartLine className="text-2xl text-[#107c10] mr-3" />
                        <h4 className="text-lg font-semibold">Monitorowanie i raportowanie</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Śledzenie statusu przypadków, analiza wydajności obsługi oraz generowanie raportów z wykorzystaniem Power BI.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mt-8">
                  Dzięki możliwości śledzenia i rejestrowania interakcji, firmy mogą zachować pełną historię obsługi klientów, co ułatwia analizę problemów, szybsze rozwiązywanie zgłoszeń i zapewnienie spójnego poziomu obsługi.
                </p>
              </div>

              <div className="space-y-6 mt-12">
                <h2 className="text-2xl font-bold">Automatyzacja procesów</h2>
                <p className="text-lg leading-relaxed">
                  Microsoft Dynamics 365 Customer Service wykorzystuje zaawansowaną automatyzację procesów, aby usprawnić obsługę klienta, eliminując manualne zadania i zwiększając efektywność zespołów wsparcia. Dzięki temu agenci mogą skupić się na bardziej złożonych problemach, a rutynowe operacje są realizowane przez system w tle.
                </p>

                <p className="text-lg leading-relaxed">
                  Kluczowym elementem jest automatyzacja zadań, która umożliwia szybkie i bezbłędne wykonywanie powtarzalnych operacji, takich jak przypisywanie zgłoszeń, wysyłanie powiadomień czy eskalacja spraw. System analizuje treść zgłoszenia i na podstawie reguł biznesowych automatycznie kieruje je do odpowiedniego działu lub agenta, redukując czas reakcji i poprawiając organizację pracy.
                </p>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Automatyzacja przepływów pracy:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center mb-4">
                        <FaEnvelope className="text-2xl text-[#107c10] mr-3" />
                      <h4 className="text-lg font-semibold">Automatyczne powiadomienia</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Automatyczne wysyłanie e-maili z potwierdzeniem zgłoszenia lub statusem sprawy.
                      </p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center mb-4">
                        <FaLevelUpAlt className="text-2xl text-[#107c10] mr-3" />
                      <h4 className="text-lg font-semibold">Eskalacja zgłoszeń</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Eskalacja zgłoszenia do wyższego poziomu wsparcia po przekroczeniu określonego czasu odpowiedzi.
                      </p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center mb-4">
                        <FaListAlt className="text-2xl text-[#107c10] mr-3" />
                      <h4 className="text-lg font-semibold">Generowanie zadań</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        Generowanie zadań dla agentów na podstawie priorytetu zgłoszenia.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mt-8">
                  Dzięki inteligentnej automatyzacji zadań i przepływów pracy, Microsoft Dynamics 365 Customer Service pozwala firmom skrócić czas obsługi, zwiększyć dokładność procesów i podnieść jakość świadczonych usług, co przekłada się na wyższą satysfakcję klientów.
                </p>
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

          <div className="mt-12 space-y-8">
          </div>
        </div>
      </DynamicsPageLayout>
    </>
  );
}
