import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaUsers, FaUserPlus, FaMoneyBillWave, FaGraduationCap, FaChartLine, FaMicrosoft, FaUserCircle, FaHistory, FaCogs, FaDatabase, FaUserEdit, FaUserCog, FaBuilding, FaBell, FaCalendarAlt, FaClipboardList, FaCheckCircle, FaCalendarCheck, FaSync, FaHandHoldingUsd, FaChartBar, FaBalanceScale, FaCreditCard, FaChartPie } from 'react-icons/fa';
import { MdAutorenew, MdNotifications, MdAttachMoney } from 'react-icons/md';
import { SiMicrosoftteams } from 'react-icons/si';
import { useModuleBasket } from '../context/ModuleBasketContext';
import { modules } from '../data/modules';

const seoData = {
  pageData: {
    title: "Microsoft Dynamics 365 Human Resources | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
    description: "Zoptymalizuj procesy HR i zwiększ zaangażowanie pracowników z Microsoft Dynamics 365 Human Resources. Zarządzaj talentami i buduj kulturę organizacyjną opartą na rozwoju.",
    ogType: 'website'
  },
  customSchema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Microsoft Dynamics 365 Human Resources",
    "description": "Zoptymalizuj procesy HR i zwiększ zaangażowanie pracowników z Microsoft Dynamics 365 Human Resources. Zarządzaj talentami i buduj kulturę organizacyjną opartą na rozwoju.",
    "url": "https://dynamics365.com.pl/dynamics-365-human-resources",
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
  <h2
    onClick={onClick}
    className={`px-6 py-3 font-medium cursor-pointer ${
      isActive
        ? 'border-b-2 border-[#107c10] text-[#107c10]'
        : 'text-gray-500'
    }`}
  >
    {label}
  </h2>
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

export default function DynamicsHumanResources() {
  const [activeTab, setActiveTab] = useState('overview');
  const { selectedModules, addModule } = useModuleBasket();
  const hasModules = selectedModules.length > 0;
  
  const isModuleInBasket = selectedModules.some(module => module.id === 9);

  const handleAddToBasket = () => {
    if (!isModuleInBasket) {
      const hrModule = modules.find(m => m.id === 9);
      if (hrModule) {
        addModule(hrModule);
      }
    }
  };

  const features = [
    {
      icon: <FaUsers />,
      title: "Zarządzanie danymi pracowników",
      description: "System umożliwia centralizację wszystkich danych o pracownikach, takich jak dane personalne, historia zatrudnienia czy umiejętności, co pozwala na pełny wgląd w zasoby ludzkie organizacji."
    },
    {
      icon: <FaUserPlus />,
      title: "Planowanie i analiza zatrudnienia",
      description: "Dynamics 365 Human Resources wspiera planowanie zatrudnienia na podstawie aktualnych i przyszłych potrzeb organizacji, umożliwiając bardziej strategiczne podejście do rekrutacji."
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Zarządzanie wynagrodzeniami i benefitami",
      description: "Platforma automatyzuje procesy związane z wynagrodzeniami, premiami i dodatkowymi benefitami, zapewniając przejrzystość i zgodność z polityką firmy."
    },
    {
      icon: <FaGraduationCap />,
      title: "Rozwój i szkolenia pracowników",
      description: "System wspiera tworzenie spersonalizowanych ścieżek rozwoju i programów szkoleniowych, pomagając pracownikom rozwijać swoje umiejętności i osiągać cele zawodowe."
    },
    {
      icon: <FaChartLine />,
      title: "Analityka HR",
      description: "Wbudowane narzędzia analityczne dostarczają wglądu w kluczowe wskaźniki, takie jak rotacja pracowników, zaangażowanie czy efektywność rekrutacji, co pozwala na podejmowanie lepszych decyzji."
    },
    {
      icon: <FaMicrosoft />,
      title: "Integracja z ekosystemem Microsoft",
      description: "Dynamics 365 Human Resources współpracuje z innymi aplikacjami, takimi jak Teams czy Power BI, co umożliwia efektywną współpracę i zaawansowaną analizę danych HR."
    }
  ];

  const faqData = [
    {
      question: "Czym jest Microsoft Dynamics 365 Human Resources?",
      answer: "Microsoft Dynamics 365 Human Resources to kompleksowe rozwiązanie do zarządzania zasobami ludzkimi, które wspiera wszystkie aspekty HR - od rekrutacji, przez onboarding, rozwój pracowników, po zarządzanie świadczeniami i wynagrodzeniami."
    },
    {
      question: "Jakie są główne funkcje Dynamics 365 Human Resources?",
      answer: "Główne funkcje obejmują: zarządzanie rekrutacją, onboarding pracowników, administrację świadczeniami, zarządzanie wydajnością, planowanie rozwoju, samoobsługę pracowniczą, analitykę HR oraz integrację z systemami płacowymi."
    },
    {
      question: "Jak system wspiera proces rekrutacji?",
      answer: "System oferuje narzędzia do zarządzania całym procesem rekrutacji, w tym publikację ogłoszeń, śledzenie kandydatów, ocenę aplikacji, planowanie rozmów kwalifikacyjnych oraz onboarding nowych pracowników."
    },
    {
      question: "Jakie możliwości samoobsługi oferuje system?",
      answer: "Portal samoobsługowy umożliwia pracownikom zarządzanie swoimi danymi osobowymi, świadczeniami, czasem pracy, urlopami, oraz dostęp do szkoleń i dokumentów HR bez konieczności kontaktu z działem kadr."
    },
    {
      question: "Jak działa analityka HR w systemie?",
      answer: "System dostarcza zaawansowane narzędzia analityczne do monitorowania wskaźników HR, trendów zatrudnienia, rotacji pracowników, kosztów personalnych oraz efektywności programów rozwojowych."
    },
    {
      question: "Czy system wspiera zarządzanie szkoleniami?",
      answer: "Tak, platforma umożliwia planowanie i zarządzanie szkoleniami, śledzenie postępów pracowników, certyfikacji oraz kompetencji, a także oferuje integrację z platformami e-learningowymi."
    },
    {
      question: "Jak wygląda integracja z systemami płacowymi?",
      answer: "Dynamics 365 HR integruje się z popularnymi systemami płacowymi, umożliwiając automatyczne przetwarzanie danych o czasie pracy, nieobecnościach i świadczeniach do naliczania wynagrodzeń."
    },
    {
      question: "Jakie są możliwości raportowania?",
      answer: "System oferuje szeroki zakres predefiniowanych raportów HR oraz możliwość tworzenia własnych zestawień z wykorzystaniem Power BI, co pozwala na szczegółową analizę danych kadrowych."
    },
    {
      question: "Jak system wspiera zgodność z przepisami?",
      answer: "Platforma jest regularnie aktualizowana o najnowsze wymogi prawne i regulacyjne, wspierając zgodność z lokalnymi przepisami prawa pracy i ochrony danych osobowych."
    },
    {
      question: "Czy system działa w chmurze?",
      answer: "Tak, Dynamics 365 HR jest rozwiązaniem chmurowym, co zapewnia dostęp z dowolnego miejsca, automatyczne aktualizacje oraz wysokie bezpieczeństwo danych."
    },
    {
      question: "Jak wygląda proces wdrożenia systemu?",
      answer: "Wdrożenie obejmuje analizę potrzeb, konfigurację systemu, migrację danych, integrację z istniejącymi systemami, szkolenia użytkowników oraz wsparcie techniczne."
    },
    {
      question: "Czy dostępna jest wersja testowa?",
      answer: "Tak, Microsoft oferuje wersję próbną Dynamics 365 Human Resources, która pozwala na przetestowanie funkcjonalności przed podjęciem decyzji o wdrożeniu."
    }
  ];

  return (
    <>
      <MetaTags {...seoData} />
      <Navbar />
      <DynamicsHeroSection
        title="Microsoft Dynamics 365 Human Resources"
        description="Transformuj zarządzanie zasobami ludzkimi, automatyzuj procesy kadrowe i buduj lepsze doświadczenia pracowników dzięki zaawansowanym narzędziom HR."
        backgroundGradient="from-[#071630] via-[#107c10] to-[#00a2ed]"
        onAddToBasket={!isModuleInBasket ? handleAddToBasket : undefined}
      />
      <DynamicsPageLayout>
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8 border-b">
          <Tab
            label="Microsoft Dynamics 365 Human Resources"
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
                      <strong>Microsoft Dynamics 365 Human Resources</strong> to nowoczesne rozwiązanie HR Solution, które umożliwia kompleksowe zarządzanie zasobami ludzkimi. Aplikacja wspiera organizacje w budowaniu środowiska pracy sprzyjającego rozwojowi zarówno pracowników, jak i całego biznesu. Dzięki zaawansowanym funkcjom ułatwia administrację kadrową, automatyzuje procesy HR i wspiera strategiczne decyzje dotyczące zespołów.
                    </p>
                  </div>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg min-h-[200px]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full min-h-[200px]"
                        src="https://www.youtube.com/embed/tvwqvk0Qmlc?rel=0&showinfo=0&controls=1&autoplay=0"
                        title="Microsoft Dynamics 365 Human Resources Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Kluczowe wyzwania w zarządzaniu HR</h2>
                <p className="mt-4">Działy HR muszą sprostać różnorodnym wyzwaniom, które wpływają na efektywność organizacji:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Trudności w identyfikacji i przyciąganiu najlepszych talentów.</li>
                  <li>Zarządzanie zróżnicowanymi potrzebami pracowników w dynamicznym środowisku.</li>
                  <li>Brak przejrzystości w obszarze wynagrodzeń, benefitów i ścieżek rozwoju.</li>
                  <li>Trudności w mierzeniu efektywności działań HR i ich wpływu na organizację.</li>
                </ul>
                <p className="mt-4">Dynamics 365 Human Resources rozwiązuje te problemy, oferując zaawansowane narzędzia do zarządzania personelem.</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści dla organizacji</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">
                      Zwiększenie efektywności operacyjnej
                    </h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Automatyzacja procesów HR pozwala zespołom skupić się na strategicznych działaniach, zamiast na rutynowych zadaniach administracyjnych.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Poprawa doświadczenia pracowników</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Spersonalizowane podejście do rozwoju i wynagrodzeń zwiększa zaangażowanie i satysfakcję pracowników.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Lepsze podejmowanie decyzji</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dzięki dostępowi do zaawansowanej analityki liderzy mogą podejmować decyzje oparte na danych, co wspiera osiąganie celów organizacyjnych.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Zgodność z przepisami</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Platforma zapewnia zgodność z lokalnymi i międzynarodowymi przepisami dotyczącymi zarządzania zasobami ludzkimi, minimalizując ryzyko prawne.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Skalowalność i elastyczność</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">System można łatwo dostosować do potrzeb zarówno małych firm, jak i dużych korporacji, wspierając rozwój organizacji.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#008272] text-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#006e60] cursor-pointer group">
                  <h2 className="text-2xl font-bold mb-4 transform transition-transform duration-500 group-hover:translate-x-2">Dlaczego warto wybrać Dynamics 365 Human Resources?</h2>
                  <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Microsoft Dynamics 365 Human Resources to nowoczesne rozwiązanie do zarządzania zasobami ludzkimi, które wspiera organizacje w budowaniu efektywnych zespołów i rozwoju pracowników. Dzięki automatyzacji procesów HR, zaawansowanej analityce i narzędziom do zarządzania talentami, firmy mogą tworzyć lepsze środowisko pracy i osiągać lepsze wyniki biznesowe.
                  </p>
                  <p className="text-lg leading-relaxed mt-4 opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Zainwestuj w Dynamics 365 Human Resources, aby zoptymalizować procesy HR i stworzyć lepsze miejsce pracy dla swoich pracowników.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'features' ? 'block' : 'hidden sm:hidden'}`} role="tabpanel" aria-labelledby="features-tab">
            <div className="space-y-8">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed">
                  Dynamics 365 Human Resources oferuje szeroki zakres funkcji wspierających zarządzanie personelem, automatyzację procesów HR oraz zwiększenie efektywności organizacyjnej. System integruje kluczowe obszary zarządzania zasobami ludzkimi, umożliwiając lepsze planowanie, monitorowanie i rozwój pracowników.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-6">Kluczowe funkcje i ich zastosowanie</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center gap-3 mb-3">
                      <FaUserCircle className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Track employee information</h4>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Monitorowanie danych personalnych, historii zatrudnienia, umiejętności i osiągnięć pracownika.</p>
                  </div>

                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center gap-3 mb-3">
                      <MdAutorenew className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Automatyczna aktualizacja danych</h4>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Zmiany wprowadzane przez pracowników lub dział HR są natychmiast dostępne w systemie.</p>
                  </div>

                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center gap-3 mb-3">
                      <FaCogs className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Personalizacja profili</h4>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Możliwość dostosowania pól i kategorii informacji według potrzeb organizacji.</p>
                  </div>

                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center gap-3 mb-3">
                      <FaHistory className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Historia zmian</h4>
                    </div>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Przechowywanie pełnej historii edycji danych pracowników, co zwiększa przejrzystość i kontrolę.</p>
                  </div>
                </div>

                <div className="mt-24">
                  <h2 className="text-2xl font-bold">Narzędzia do edycji i aktualizacji danych</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center gap-3 mb-3">
                        <FaDatabase className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Centralny rejestr pracowników</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Umożliwia zarządzanie pełnymi profilami zatrudnionych osób.</p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center gap-3 mb-3">
                        <FaUserEdit className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Edytor danych personalnych</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Pozwala HR na szybkie wprowadzanie i modyfikowanie informacji o pracownikach.</p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center gap-3 mb-3">
                        <FaUserCog className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Samoobsługa pracownicza</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Pracownicy mogą samodzielnie aktualizować swoje dane, np. adres zamieszkania czy numer kontaktowy.</p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center gap-3 mb-3">
                        <FaBuilding className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Śledzenie historii zatrudnienia</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Możliwość monitorowania zmian stanowisk, awansów i przeszłych ról w firmie.</p>
                    </div>

                    <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center gap-3 mb-3">
                        <FaBell className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Powiadomienia o aktualizacjach</h4>
                      </div>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Automatyczne alerty dla menedżerów i HR o wprowadzonych zmianach w profilach pracowników.</p>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed mt-6">
                    Dynamics 365 Human Resources usprawnia zarządzanie personelem, eliminując ręczne procesy i zapewniając pełną kontrolę nad danymi pracowników.
                  </p>

                  <div className="mt-12 space-y-8">
                    <h2 className="text-2xl font-bold">Obsługa urlopów i nieobecności</h2>
                    <p className="text-lg leading-relaxed">
                      Dynamics 365 Human Resources usprawnia zarządzanie wnioskami urlopowymi i nieobecnościami, zapewniając przejrzystość oraz automatyzację procesów. Pracownicy mogą sprawdzać dostępny czas wolny, składać wnioski o urlop, a menedżerowie zatwierdzać je w prosty i szybki sposób.
                    </p>

                    <div className="space-y-8">
                      <h3 className="text-xl font-semibold">Proces obsługi urlopów</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                          <div className="flex items-center gap-3 mb-3">
                            <FaCalendarAlt className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Sprawdzenie dostępnych dni wolnych</h4>
                          </div>
                          <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Pracownicy mogą w każdej chwili view time-off balances bez konieczności kontaktowania się z działem HR.</p>
                        </div>

                        <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                          <div className="flex items-center gap-3 mb-3">
                            <FaClipboardList className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Złożenie wniosku urlopowego</h4>
                          </div>
                          <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Intuicyjny formularz pozwala na szybkie submit leave requests na wybrany termin.</p>
                        </div>

                        <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                          <div className="flex items-center gap-3 mb-3">
                            <MdNotifications className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Automatyczne powiadomienia</h4>
                          </div>
                          <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Menedżerowie otrzymują powiadomienia o nowych wnioskach do akceptacji.</p>
                        </div>

                        <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                          <div className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Zatwierdzenie lub odrzucenie</h4>
                          </div>
                          <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Decyzje są podejmowane bezpośrednio w systemie lub za pomocą Microsoft Teams.</p>
                        </div>

                        <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                          <div className="flex items-center gap-3 mb-3">
                            <FaCalendarCheck className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Aktualizacja harmonogramu</h4>
                          </div>
                          <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Zaakceptowane wnioski są natychmiast uwzględniane w kalendarzu firmy.</p>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mt-10">Integracja z Microsoft Teams</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                          <div className="flex items-center gap-3 mb-3">
                            <SiMicrosoftteams className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Dostęp przez Teams</h4>
                          </div>
                          <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Pracownicy mogą sprawdzać stan swoich dni wolnych i składać wnioski bezpośrednio w Teams.</p>
                        </div>

                        <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                          <div className="flex items-center gap-3 mb-3">
                            <FaBell className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Powiadomienia w Teams</h4>
                          </div>
                          <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Menedżerowie otrzymują automatyczne powiadomienia o nowych wnioskach i mogą zatwierdzać je w aplikacji Teams.</p>
                        </div>

                        <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                          <div className="flex items-center gap-3 mb-3">
                            <FaSync className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Synchronizacja kalendarza</h4>
                          </div>
                          <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Synchronizacja z kalendarzem zapewnia lepszą widoczność dostępności zespołu.</p>
                        </div>
                      </div>

                      <p className="text-lg leading-relaxed mt-6">
                        Dzięki integracji z Microsoft Teams obsługa nieobecności staje się jeszcze wygodniejsza, a zarządzanie zasobami ludzkimi bardziej efektywne.
                      </p>
                    </div>
                  </div>

                  <div className="mt-24 space-y-8">
                    <h2 className="text-2xl font-bold">Planowanie wynagrodzeń i pakietów korzyści</h2>
                    <p className="text-lg leading-relaxed">
                      Dynamics 365 Human Resources oferuje zaawansowane narzędzia do planowania wynagrodzeń i benefitów, umożliwiając firmom elastyczne zarządzanie pakietami wynagrodzeń dostosowanymi do potrzeb pracowników. System automatyzuje procesy, analizuje dane i wspiera podejmowanie decyzji opartych na rzeczywistych informacjach.
                    </p>

                    <div className="space-y-8">
                      <h3 className="text-xl font-semibold">Narzędzia do zarządzania wynagrodzeniami i benefitami</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                          <div className="flex items-center gap-3 mb-3">
                            <FaHandHoldingUsd className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Managing employee benefits</h4>
                          </div>
                          <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Kompleksowe zarządzanie pakietami świadczeń, w tym ubezpieczeniami i dodatkami. Umożliwia elastyczne dostosowanie benefitów do potrzeb pracowników.</p>
                        </div>

                        <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                          <div className="flex items-center gap-3 mb-3">
                            <FaCreditCard className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Flexible compensation plans</h4>
                          </div>
                          <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Tworzenie indywidualnych planów wynagrodzeń i premii. Pozwala firmom oferować spersonalizowane warunki wynagrodzenia.</p>
                        </div>

                        <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                          <div className="flex items-center gap-3 mb-3">
                            <MdAttachMoney className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Payroll and salary management</h4>
                          </div>
                          <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Automatyzacja przetwarzania wynagrodzeń, dodatków i potrąceń. Zapewnia zgodność z przepisami i eliminuje błędy w naliczaniu płac.</p>
                        </div>

                        <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                          <div className="flex items-center gap-3 mb-3">
                            <FaChartPie className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Power BI analytics</h4>
                          </div>
                          <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Analiza i wizualizacja danych kadrowych oraz wynagrodzeń. Pomaga w optymalizacji budżetów wynagrodzeń i śledzeniu trendów HR.</p>
                        </div>

                        <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                          <div className="flex items-center gap-3 mb-3">
                            <FaChartBar className="text-2xl text-[#107c10] group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#107c10]">Salary benchmarking</h4>
                          </div>
                          <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Porównanie wynagrodzeń w branży i regionie na podstawie danych rynkowych. Umożliwia konkurencyjne kształtowanie polityki płacowej.</p>
                        </div>
                      </div>

                      <p className="text-lg leading-relaxed mt-6">
                        Dynamics 365 Human Resources ułatwia efektywne planowanie wynagrodzeń, zapewniając firmom większą kontrolę nad polityką płacową i zwiększając satysfakcję pracowników poprzez lepiej dostosowane pakiety korzyści.
                      </p>
                    </div>
                  </div>
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
