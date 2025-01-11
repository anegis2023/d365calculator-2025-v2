import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Navbar } from '../components/Navbar';
import { DynamicsHeroSection } from '../components/DynamicsHeroSection';
import { DynamicsPageLayout } from '../components/DynamicsPageLayout';
import { FaBrain, FaCogs, FaFileInvoiceDollar, FaChartLine, FaMicrosoft, FaRobot } from 'react-icons/fa';
import { useModuleBasket } from '../context/ModuleBasketContext';
import { modules } from '../data/modules';

const seoData = {
  pageData: {
    title: "Microsoft Dynamics 365 Finance | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
    description: "Zoptymalizuj zarządzanie finansami firmy z Microsoft Dynamics 365 Finance. Automatyzuj procesy finansowe, zwiększaj kontrolę i podejmuj lepsze decyzje biznesowe w oparciu o dane.",
    ogType: 'website'
  },
  customSchema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Microsoft Dynamics 365 Finance",
    "description": "Zoptymalizuj zarządzanie finansami firmy z Microsoft Dynamics 365 Finance. Automatyzuj procesy finansowe, zwiększaj kontrolę i podejmuj lepsze decyzje biznesowe w oparciu o dane.",
    "url": "https://dynamics365.com.pl/dynamics-365-finance",
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

const faqData = [
  {
    question: "Czym jest Microsoft Dynamics 365 Finance?",
    answer: "Microsoft Dynamics 365 Finance to zaawansowany system ERP do zarządzania finansami, który wspiera organizacje w automatyzacji procesów księgowych, zarządzaniu podatkami, monitorowaniu przepływów gotówkowych i analizie danych finansowych."
  },
  {
    question: "Jakie są główne funkcje Dynamics 365 Finance?",
    answer: "Automatyzacja procesów księgowych i zamknięć finansowych, prognozowanie przepływów gotówkowych z wykorzystaniem AI, zarządzanie podatkami i zgodność z lokalnymi przepisami, analiza finansowa w czasie rzeczywistym, integracja z innymi produktami Microsoft, takimi jak Power BI i Excel, obsługa globalnych operacji finansowych."
  },
  {
    question: "Czy Dynamics 365 Finance jest odpowiedni dla małych firm?",
    answer: "Tak, rozwiązanie jest skalowalne i dostosowane do potrzeb zarówno małych, jak i dużych firm. System można łatwo rozbudowywać w miarę rozwoju przedsiębiorstwa."
  },
  {
    question: "Czy Dynamics 365 Finance obsługuje różne waluty i języki?",
    answer: "Tak, system obsługuje wiele walut, języków i regulacji podatkowych, co czyni go idealnym rozwiązaniem dla firm działających na rynkach międzynarodowych."
  },
  {
    question: "Czy Dynamics 365 Finance wspiera zarządzanie podatkami?",
    answer: "Tak, platforma umożliwia automatyczne obliczanie stawek podatkowych, zarządzanie odliczeniami oraz zgodność z przepisami podatkowymi obowiązującymi w różnych jurysdykcjach."
  },
  {
    question: "Jak Dynamics 365 Finance pomaga w zarządzaniu przepływem gotówkowym?",
    answer: "System oferuje zaawansowane narzędzia do prognozowania przepływów gotówkowych, co pozwala na dokładne planowanie finansowe i identyfikację potencjalnych problemów z płynnością."
  },
  {
    question: "Czy Dynamics 365 Finance integruje się z innymi systemami?",
    answer: "Tak, platforma integruje się z innymi rozwiązaniami Microsoft, takimi jak Power BI, SharePoint, Teams oraz zewnętrznymi systemami za pomocą API."
  },
  {
    question: "Jakie są wymagania systemowe dla Dynamics 365 Finance?",
    answer: "Dynamics 365 Finance działa w chmurze, co oznacza, że wymaga jedynie stabilnego połączenia internetowego i przeglądarki internetowej."
  },
  {
    question: "Czy Dynamics 365 Finance wspiera zaawansowaną analitykę finansową?",
    answer: "Tak, system wykorzystuje sztuczną inteligencję i zaawansowane narzędzia analityczne, które umożliwiają monitorowanie kluczowych wskaźników finansowych i generowanie interaktywnych raportów."
  },
  {
    question: "Czy mogę dostosować Dynamics 365 Finance do potrzeb mojej firmy?",
    answer: "Tak, system jest elastyczny i umożliwia dostosowanie procesów oraz konfiguracji do specyficznych wymagań firmy."
  },
  {
    question: "Czy Dynamics 365 Finance oferuje wsparcie techniczne?",
    answer: "Tak, Microsoft zapewnia wsparcie techniczne dla użytkowników Dynamics 365 Finance. Dostępne są również szkolenia online i obszerna dokumentacja."
  },
  {
    question: "Czy istnieje możliwość przetestowania Dynamics 365 Finance przed zakupem?",
    answer: "Tak, Microsoft oferuje bezpłatną wersję próbną, która pozwala na przetestowanie funkcjonalności systemu."
  },
  {
    question: "Czy Dynamics 365 Finance pomaga w raportowaniu finansowym?",
    answer: "Tak, system umożliwia automatyczne generowanie raportów finansowych, dostosowanych do lokalnych i międzynarodowych standardów księgowych."
  },
  {
    question: "Jak Dynamics 365 Finance wspiera zamknięcia finansowe?",
    answer: "Platforma automatyzuje procesy zamknięcia finansowego, redukując czas i błędy związane z manualnym przetwarzaniem danych."
  },
  {
    question: "Czy Dynamics 365 Finance wspiera operacje globalne?",
    answer: "Tak, system jest przystosowany do zarządzania finansami na skalę globalną, z uwzględnieniem lokalnych regulacji, walut i języków."
  },
  {
    question: "Czy mogę korzystać z Dynamics 365 Finance na urządzeniach mobilnych?",
    answer: "Tak, Dynamics 365 Finance oferuje aplikacje mobilne, które umożliwiają dostęp do danych i funkcji z dowolnego miejsca."
  },
  {
    question: "Czy Dynamics 365 Finance wspiera zgodność z przepisami?",
    answer: "Tak, platforma zapewnia zgodność z przepisami finansowymi i podatkowymi w różnych krajach, pomagając firmom unikać ryzyka prawnego."
  },
  {
    question: "Jak Dynamics 365 Finance wspiera podejmowanie decyzji?",
    answer: "System dostarcza zaawansowane analizy danych finansowych i prognozy, które umożliwiają podejmowanie świadomych decyzji opartych na faktach."
  }
];

export default function DynamicsFinance() {
  const [activeTab, setActiveTab] = useState('overview');
  const { selectedModules, addModule } = useModuleBasket();
  const hasModules = selectedModules.length > 0;
  
  const isModuleInBasket = selectedModules.some(module => module.id === 2);

  const handleAddToBasket = () => {
    if (!isModuleInBasket) {
      const financeModule = modules.find(m => m.id === 2);
      if (financeModule) {
        addModule(financeModule);
      }
    }
  };

  const features = [
    {
      icon: <FaBrain />,
      title: "Zaawansowane planowanie i analiza finansowa",
      description: "Dzięki sztucznej inteligencji i narzędziom analitycznym, system wspiera tworzenie precyzyjnych prognoz finansowych. Użytkownicy mogą przewidywać przychody, planować budżety i analizować dane w czasie rzeczywistym."
    },
    {
      icon: <FaCogs />,
      title: "Automatyzacja księgowości",
      description: "Dynamics 365 Finance upraszcza codzienne zadania księgowe, takie jak rozliczenia czy generowanie raportów, co pozwala na szybsze zamknięcie okresów finansowych i minimalizuje błędy."
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Efektywne zarządzanie podatkami",
      description: "System obsługuje różne jurysdykcje podatkowe, umożliwiając automatyczne obliczanie stawek i zgodność z lokalnymi przepisami. Rozwiązanie wspiera także globalne operacje finansowe."
    },
    {
      icon: <FaChartLine />,
      title: "Monitorowanie przepływów pieniężnych",
      description: "System umożliwia prognozowanie przepływów gotówkowych z wykorzystaniem danych historycznych i bieżących, co pozwala na precyzyjne planowanie finansowe."
    },
    {
      icon: <FaMicrosoft />,
      title: "Integracja z ekosystemem Microsoft",
      description: "Dynamics 365 Finance płynnie współpracuje z aplikacjami Microsoft, takimi jak Power BI, Excel czy SharePoint, co ułatwia współpracę między działami i dostęp do spójnych danych."
    },
    {
      icon: <FaRobot />,
      title: "Raportowanie i analityka wspierana przez AI",
      description: "System oferuje zaawansowane narzędzia do analizy kluczowych wskaźników finansowych, dzięki czemu organizacje mogą podejmować decyzje oparte na danych."
    }
  ];

  return (
    <>
      <MetaTags {...seoData} />
      <Navbar />
      <DynamicsHeroSection
        title="Microsoft Dynamics 365 Finance"
        description="Usprawnij procesy finansowe, zautomatyzuj operacje księgowe i podejmuj lepsze decyzje biznesowe dzięki zaawansowanej analityce i sztucznej inteligencji."
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
                    Efektywne zarządzanie finansami to podstawa sukcesu każdej organizacji, niezależnie od jej wielkości czy branży. Microsoft Dynamics 365 Finance to rozwiązanie, które łączy zaawansowaną analitykę, automatyzację procesów oraz możliwość dostosowania do lokalnych i globalnych wymagań. Dzięki temu system wspiera przedsiębiorstwa w optymalizacji operacji finansowych i podejmowaniu trafnych decyzji opartych na danych.
                    </p>
                  </div>
                  <div className={hasModules ? 'w-full' : 'lg:w-1/2 w-full'}>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg min-h-[200px]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full min-h-[200px]"
                        src="https://www.youtube.com/embed/DGO6_gmFXhQ?rel=0&showinfo=0&controls=1&autoplay=0"
                        title="Microsoft Dynamics 365 Finance Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Kluczowe wyzwania w zarządzaniu finansami</h2>
                <div className="space-y-4">
                  <p className="text-base leading-relaxed">
                    Zarządzanie finansami w dynamicznie zmieniającym się otoczeniu biznesowym niesie za sobą wiele wyzwań:
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Skuteczna kontrola nad złożonymi procesami finansowymi, które wymagają precyzji i szybkości działania.</li>
                    <li>Konsolidacja danych pochodzących z różnych systemów i źródeł.</li>
                    <li>Prognozowanie przepływów gotówkowych oraz wyników finansowych w oparciu o dane historyczne i bieżące.</li>
                    <li>Elastyczność w dostosowywaniu operacji do lokalnych regulacji podatkowych i standardów międzynarodowych.</li>
                  </ul>
                  <p className="text-base leading-relaxed mt-4">
                    Dynamics 365 Finance oferuje rozwiązania pozwalające pokonać te przeszkody i usprawnić procesy finansowe.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Korzyści z wdrożenia Dynamics 365 Finance</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Oszczędność czasu</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Zespoły finansowe mogą skupić się na działaniach strategicznych, eliminując konieczność ręcznego wykonywania powtarzalnych zadań.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Globalna skalowalność</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">System umożliwia obsługę wielu walut, języków i przepisów, co czyni go idealnym rozwiązaniem dla firm o globalnym zasięgu.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Wiarygodne dane</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dostęp do aktualnych i dokładnych danych pozwala na podejmowanie trafnych decyzji finansowych, co przekłada się na większą efektywność organizacji.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Elastyczność systemu</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dynamics 365 Finance rozwija się razem z firmą, oferując elastyczne funkcje i możliwość łatwej rozbudowy w miarę rosnących potrzeb.</p>
                  </div>
                  <div className="group bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br from-white to-gray-50">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#107c10]">Przejrzystość finansów</h3>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Dzięki konsolidacji danych z różnych systemów, organizacje zyskują pełen obraz swojej sytuacji finansowej.</p>
                  </div>
                </div>
              </div>


              <div className="space-y-6">
                <div className="bg-[#128017] text-white p-8 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#159019] cursor-pointer group">
                  <h2 className="text-2xl font-bold mb-4 transform transition-transform duration-500 group-hover:translate-x-2">Dlaczego warto wybrać Dynamics 365 Finance?</h2>
                  <p className="text-lg leading-relaxed opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Dynamics 365 Finance to narzędzie, które dostarcza firmom przewagi konkurencyjnej dzięki zaawansowanym funkcjom, elastyczności i integracji z ekosystemem Microsoft. To kompleksowe rozwiązanie, które wspiera zarządzanie finansami na każdym etapie rozwoju organizacji.
                  </p>
                  <p className="text-lg leading-relaxed opacity-90 mt-4 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    Zainwestuj w Dynamics 365 Finance i zobacz, jak Twoja firma osiąga nowe poziomy efektywności i przejrzystości finansowej.
                  </p>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-center mb-8">Funkcje, które wyróżniają Dynamics 365 Finance</h2>
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
