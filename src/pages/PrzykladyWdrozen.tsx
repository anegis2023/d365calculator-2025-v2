import React, { useState, useMemo } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { getPageMetaData } from '../components/SEO/pageMetaData';
import { X } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';

interface Solution {
  name: string;
  logo: string;
  link: string;
}

interface CustomerStory {
  title: string;
  description: string;
  fullDescription: {
    intro: string;
    projectDescription: string;
    keyPoints: string[];
  };
  industry: string;
  companySize: string;
  country: string;
  solutions: Solution[];
  imageUrl: string;
  logoUrl?: string;
}

const customerStories: CustomerStory[] = [
  {
    title: "Transformacja cyfrowa sprzedaży: Nowoczesne narzędzia dla BBK S.A.",
    description: "Firma BBK S.A., lider na rynku wyposażenia wnętrz w Polsce, stojąca za markami home&you oraz Essex, podjęła decyzję o modernizacji swoich procesów biznesowych, aby sprostać wyzwaniom współczesnego handlu detalicznego. ",
    fullDescription: {
      intro: "Firma BBK S.A., lider na rynku wyposażenia wnętrz w Polsce, stojąca za markami home&you oraz Essex, podjęła decyzję o modernizacji swoich procesów biznesowych, aby sprostać wyzwaniom współczesnego handlu detalicznego. ",
      projectDescription: "Firma BBK S.A., lider na rynku wyposażenia wnętrz w Polsce, stojąca za markami home&you oraz Essex, podjęła decyzję o modernizacji swoich procesów biznesowych, aby sprostać wyzwaniom współczesnego handlu detalicznego. Dotychczasowe rozwiązania ERP, oparte na przestarzałej infrastrukturze lokalnej, nie spełniały wymagań dynamicznie rozwijającej się organizacji.\n\nW odpowiedzi na te potrzeby firma zdecydowała się na wdrożenie Dynamics 365 Finance i Supply Chain Management. Kluczowym celem projektu była konsolidacja funkcji finansowych i logistycznych na jednej platformie chmurowej, co pozwoliło na znaczną poprawę wydajności operacyjnej, ujednolicenie danych oraz usprawnienie procesów decyzyjnych. \n\nProces wdrożenia wyróżniał się silnym zaangażowaniem przedstawicieli wszystkich kluczowych działów, takich jak finanse, logistyka i sprzedaż. Szkolenia oraz otwarta komunikacja na każdym etapie wdrożenia pomogły w zwiększeniu adopcji rozwiązania i zmniejszeniu obaw związanych ze zmianą systemu. Dzięki temu firma BBK osiągnęła znaczącą poprawę w automatyzacji zadań, efektywności operacyjnej oraz jakości obsługi klienta. \n\nWdrożenie Dynamics 365 umożliwiło BBK integrację procesów od zamówień po sprzedaż, zapewniając jednocześnie elastyczność i skalowalność w obliczu dalszych zmian rynkowych. W efekcie BBK umocniło swoją pozycję na rynku, tworząc nowoczesne fundamenty dla dalszego rozwoju i innowacji.",
      keyPoints: [
        "Wdrożenie Dynamics 365 Finance i Supply Chain Management jako centralnej platformy ERP",
        "Konsolidacja danych na jednej platformie chmurowej dla uproszczenia raportowania i analizy",
        "Współpraca z partnerem ANEGIS w celu dostosowania rozwiązania do specyficznych potrzeb BBK",
        "Zwiększenie efektywności operacyjnej dzięki automatyzacji procesów i eliminacji przestarzałej infrastruktury",
        "Poprawa obsługi klienta dzięki ujednoliceniu danych i szybszemu dostępowi do kluczowych informacji",
        "Tworzenie fundamentów do wdrożenia kolejnych innowacji, w tym wykorzystania funkcjonalności Microsoft Power Platform i Copilot"
      ]
    },
    industry: "Retail",
    companySize: "500-999 pracowników",
    country: "Polska",
    solutions: [
      {
        name: "Dynamics 365 Finance",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Sales?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "/dynamics-365-finance"
      },
      {
        name: "Dynamics 365 Supply Chain Management",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Supply-Chain-Management?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "dynamics-365-supply-chain"
      }
    ],
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/BBK%20Header%20Image?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain",
    logoUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/BBK%20Logo?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain"
  },
  {
    title: "Transformacja cyfrowa sprzedaży: Nowoczesne narzędzia dla Hoffmann SE",
    description: "Hoffmann SE, lider w dostarczaniu narzędzi i wyposażenia przemysłowego, zmodernizował infrastrukturę IT poprzez migrację do chmury i wdrożenie Dynamics 365 Sales, osiągając znaczącą poprawę w obsłudze klientów i efektywności operacyjnej.",
    fullDescription: {
      intro: "Firma Hoffmann SE, lider w dostarczaniu wysokiej jakości narzędzi i wyposażenia przemysłowego, stanęła przed wyzwaniem modernizacji swojej infrastruktury IT, aby sprostać rosnącym wymaganiom klientów oraz zapewnić sprawną obsługę w dynamicznie zmieniającym się środowisku przemysłowym.",
      projectDescription: "Firma Hoffmann SE, lider w dostarczaniu wysokiej jakości narzędzi i wyposażenia przemysłowego, stanęła przed wyzwaniem modernizacji swojej infrastruktury IT, aby sprostać rosnącym wymaganiom klientów oraz zapewnić sprawną obsługę w dynamicznie zmieniającym się środowisku przemysłowym. Tradycyjna, lokalna infrastruktura oparta na serwerach on-premises i bazie SQL, choć funkcjonalna, nie spełniała wymogów cyfryzacji.\n\nGłównym celem projektu było przeniesienie danych i procesów do chmury, aby usprawnić dostęp do informacji, zautomatyzować kluczowe procesy oraz poprawić wydajność operacyjną.\n\nW ramach projektu firma Hoffmann SE wdrożyła system Dynamics 365 Sales jako centralną platformę CRM, umożliwiającą pracownikom w terenie szybki i łatwy dostęp do pełnej historii klientów na urządzeniach mobilnych. Dzięki migracji do chmury, zrealizowanej w modelu lift-and-shift, firma uprościła swoją architekturę IT, eliminując skomplikowane połączenia VPN oraz skracając czas synchronizacji danych. W efekcie użytkownicy systemu zauważyli znaczną poprawę w szybkości działania i płynności pracy, co przełożyło się na lepszą jakość obsługi klientów.\n\nDodatkowo, Hoffmann SE wykorzystał narzędzia Azure Application Insights do monitorowania migracji, co umożliwiło szybkie identyfikowanie błędów i zwiększenie transparentności zarządzania infrastrukturą. W planach firmy znajduje się integracja dodatkowych aplikacji, np. Dynamics 365 Field Service, oraz stworzenie wspólnej platformy dla sprzedaży i marketingu. To podejście pozwoli na lepsze zrozumienie cyklu życia klienta oraz skuteczniejsze wykorzystanie danych dzięki wspólnej bazie Dataverse i zaawansowanemu raportowaniu.",
      keyPoints: [
        "Wdrożenie Dynamics 365 Sales jako centralnej platformy CRM dostępnej na urządzeniach mobilnych",
        "Migracja do chmury w modelu lift-and-shift i uproszczenie architektury IT",
        "Poprawa jakości obsługi klienta dzięki zwiększeniu szybkości działania i płynności pracy systemu",
        "Wykorzystanie Azure Application Insights do monitorowania migracji i identyfikacji błędów",
        "Zastosowanie infrastruktury chmurowej pod integracje dodatkowych aplikacji, np. Dynamics 365 Field Service, i stworzenie wspólnej platformy dla sprzedaży i marketingu",
        "Wykorzystanie wspólnej bazy Dataverse do zarządzania danymi i raportowania"
      ]
    },
    industry: "Produkcja dyskretna",
    companySize: "1,000-9,999 pracowników",
    country: "Niemcy",
    solutions: [
      {
        name: "Dynamics 365 Sales",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Sales?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "/dynamics-365-sales"
      },
      {
        name: "Dynamics 365 Customer Insights",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Customer-Insights?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "dynamics-365-customer-insights"
      },
      {
        name: "Dynamics 365 Field service",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Field-Service?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "dynamics-365-field-service"
      }
    ],
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hoffmann%20SE%20Header%20Image-1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain",
    logoUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hoffmann%20SE%20Logo?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain"
  },
  {
    title: "Transformacja cyfrowa obsługi klienta: Nowoczesne narzędzia w Sandvik Coromant",
    description: "Sandvik Coromant, część globalnej grupy inżynierii przemysłowej Sandvik, jako lider w produkcji narzędzi i technologii obróbki metali, postawił na kompleksową transformację swoich procesów obsługi klienta.",
    fullDescription: {
      intro: "Sandvik Coromant, część globalnej grupy inżynierii przemysłowej Sandvik, jako lider w produkcji narzędzi i technologii obróbki metali, postawił na kompleksową transformację swoich procesów obsługi klienta.",
      projectDescription: "Sandvik Coromant, część globalnej grupy inżynierii przemysłowej Sandvik, jako lider w produkcji narzędzi i technologii obróbki metali, postawił na kompleksową transformację swoich procesów obsługi klienta. Wyzwania związane z rozproszonymi systemami, brakiem standaryzacji danych oraz koniecznością korzystania z wielu aplikacji utrudniały pracownikom szybkie i efektywne rozwiązywanie problemów klientów. Aby sprostać tym wyzwaniom i podnieść jakość obsługi, firma wdrożyła rozwiązania Microsoft Dynamics 365, w tym moduły Sales i Customer Service, co stanowiło fundament dla przyszłych innowacji.\n\nSandvik Coromant wprowadził zintegrowany system zarządzania sprawami klientów. System umożliwił pracownikom dostęp do pełnej historii kont klientów, analizy nastroju rozmów oraz rekomendacji dotyczących dalszych kroków – wszystko w intuicyjnym interfejsie omnichannel. Dzięki temu pracownicy mogą obsługiwać zgłoszenia w formie czatu, e-maila lub rozmowy telefonicznej, korzystając z jednego, scentralizowanego źródła danych. Nowoczesne narzędzia, takie jak Digital Messaging oraz funkcja głosowa w Dynamics 365 Customer Service, pozwoliły na znaczne skrócenie czasu oczekiwania klientów o 27% oraz obniżenie wskaźnika porzuceń zgłoszeń o 14%. \n\nWdrożenie przyniosło wzrost średniego wskaźnika satysfakcji klientów z 3,5 do 4,5 na 5 oraz osiągnięcie czasu odpowiedzi poniżej 30 sekund. Dzięki wbudowanym ankietom w aplikacji Dynamics 365 Customer Voice, firma zyskała nowe możliwości analizy opinii klientów. \n\nSandvik Coromant testuje narzędzie Microsoft Copilot, które automatyzuje procesy, wspiera kreatywność pracowników oraz upraszcza zarządzanie zgłoszeniami. W planach znajduje się wdrożenie chatbotów, które poprawią możliwości samoobsługi klientów i odciążą zespół obsługi klienta. ",
      keyPoints: [
        "Wdrożenie Dynamics 365 Sales i Customer Service jako zintegrowanego systemu obsługi klienta z pełną historią kont klientów, analizą sentymentu i rekomendacjami działań",
        "Obsługa omnichannel (czat, e-mail, telefon) z wykorzystaniem scentralizowanego źródła danych",
        "Skrócenie czasu oczekiwania klientów i obniżenie wskaźnika porzuceń zgłoszeń dzięki usłudze Digital Messaging i funkcji głosowej w Dynamics 365 Customer Service",
        "Wzrost satysfakcji klientów z 3,5 do 4,5 na 5 i skrócenie czasu odpowiedzi do poniżej 30 sekund",
        "Zaawansowana analiza opinii klientów na bazie ankiet w usłudze Dynamics 365 Customer Voice",
        "Przygotowanie środowiska do testowania Microsoft Copilot i obsługi klienta przez chatboty"
      ]
    },
    industry: "Produkcja dyskretna",
    companySize: "10000+ pracowników",
    country: "Szwecja",
    solutions: [
      {
        name: "Dynamics 365 Sales",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Sales?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "/dynamics-365-sales"
      },
      {
        name: "Dynamics 365 Customer Service",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Customer-Service?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "dynamics-365-customer-service"
      }
    ],
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/SANDVIK%20AB%20Header%20Image?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain",
    logoUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/SANDVIK%20AB%20Logo?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain"
  },
  {
    title: "Transformacja cyfrowa operacji biznesowych: Nowoczesne rozwiązania w G&J Pepsi-Cola Bottlers",
    description: "G&J Pepsi-Cola Bottlers, największa niezależna, rodzinna franczyza Pepsi w USA, zrealizowała kompleksową transformację cyfrową, mającą na celu optymalizację obsługi klientów, zwiększenie przychodów oraz redukcję kosztów operacyjnych.",
    fullDescription: {
      intro: "G&J Pepsi-Cola Bottlers, największa niezależna, rodzinna franczyza Pepsi w USA, zrealizowała kompleksową transformację cyfrową, mającą na celu optymalizację obsługi klientów, zwiększenie przychodów oraz redukcję kosztów operacyjnych.",
      projectDescription: "G&J Pepsi-Cola Bottlers, największa niezależna, rodzinna franczyza Pepsi w USA, zrealizowała kompleksową transformację cyfrową, mającą na celu optymalizację obsługi klientów, zwiększenie przychodów oraz redukcję kosztów operacyjnych. Rozproszone systemy i manualne procesy utrudniały efektywną współpracę między działami sprzedaży, serwisu i zarządzania. Aby sprostać tym wyzwaniom, firma wdrożyła aplikacje Dynamics 365 Sales i Dynamics 365 Field Service, tworząc zintegrowaną platformę Customer Engagement Management (CEM). \n\nDzięki centralizacji danych w czasie rzeczywistym, G&J Pepsi zapewniła pracownikom pełną widoczność działań klientów. Zintegrowane rozwiązania umożliwiły płynną wymianę informacji między zespołami sprzedaży i serwisu, co znacząco poprawiło współczynnik naprawy przy pierwszej wizycie oraz przyspieszyło realizację zleceń. W rezultacie czas realizacji procesów został skrócony, a liczba manualnych interwencji zmniejszona o 170 tysięcy rocznie. Automatyzacja kluczowych zadań, takich jak przygotowanie i instalacja sprzętu czy generowanie zamówień, przyniosła oszczędność czasu i poprawę dokładności danych. \n\nPlatforma Dynamics 365 zapewniła również dostęp do zaawansowanych funkcji, takich jak mapowanie tras, automatyczne przydzielanie zasobów oraz monitorowanie stanu zapasów. Pracownicy terenowi zyskali możliwość korzystania z mobilnej aplikacji, która dostarczała wszystkich niezbędnych informacji w czasie rzeczywistym, eliminując potrzebę korzystania z wielu systemów. Wprowadzone zmiany przełożyły się na 8-procentowy wzrost przychodów i redukcję kosztów operacyjnych o 6,6%. \n\nTransformacja G&J Pepsi nie tylko poprawiła efektywność operacyjną, ale również stworzyła fundamenty pod dalsze innowacje. Plany firmy obejmują wdrożenie dodatkowych modułów Dynamics 365, w tym Remote Assist, oraz rozwój funkcji opartych na AI, takich jak Microsoft Copilot. ",
      keyPoints: [
        "Wdrożenie Dynamics 365 Sales i Dynamics 365 Field Service jako zintegrowanej platformy Customer Engagement Management (CEM)",
        "Scentralizowanie danych w czasie rzeczywistym i automatyzacja kluczowych zadań",
        "Zmniejszenie liczby manualnych interwencji o 170 tysięcy rocznie",
        "Wzrost przychodów o 8% i redukcja kosztów operacyjnych o 6,6%, dzięki efektywniejszym procesom i lepszej obsłudze klientów",
        "Uruchomienie mobilnej aplikacji dla pracowników w terenie",
        "Przygotowanie środowiska do wdrożenia Dynamics 365 Remote Assist i Microsoft Copilot"
      ]
    },
    industry: "Retail & FMCG",
    companySize: "1000 - 9,999 pracowników",
    country: "USA",
    solutions: [
      {
        name: "Dynamics 365 Sales",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Sales?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "/dynamics-365-sales"
      },
      {
        name: "Dynamics 365 Field Service",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Field-Service?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "dynamics-365-field-service"
      },
      {
        name: "Microsoft Copilot",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Copilot_17x17",
        link: "/"
      }
    ],
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/G-J%20Pepsi-Cola%20Bottlers%20Header%20Image?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain",
    logoUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/G%20and%20J%20Pepsi-Cola%20Bottlers%20Logo?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain"
  }
];

interface ModalProps {
  story: CustomerStory;
  isOpen: boolean;
  onClose: () => void;
}

const StoryModal: React.FC<ModalProps> = ({ story, isOpen, onClose }) => {
  if (!isOpen) return null;

  // Split the title into two parts
  const [subtitle, mainTitle] = story.title.split(': ');

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-start">
          <div>
            <div className="text-lg text-gray-600 mb-1">{subtitle}</div>
            <h2 className="text-2xl font-bold text-gray-900">{mainTitle}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors ml-4 w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="relative h-64 mb-6">
            <img 
              src={story.imageUrl} 
              alt={story.title}
              className="w-full h-full object-cover rounded-lg"
            />
            {story.logoUrl && (
              <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow">
                <img 
                  src={story.logoUrl} 
                  alt="Company logo" 
                  className="h-12"
                />
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed">{story.fullDescription.intro}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Opis projektu</h3>
              <p className="text-gray-700 whitespace-pre-line">{story.fullDescription.projectDescription}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kluczowe elementy projektu</h3>
              <div className="space-y-3">
                {story.fullDescription.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-3 bg-[#0078D4] rounded-full flex-shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Informacje o firmie</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Branża</p>
                  <p className="text-gray-700">{story.industry}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Wielkość organizacji</p>
                  <p className="text-gray-700">{story.companySize}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Kraj</p>
                  <p className="text-gray-700">{story.country}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wykorzystane rozwiązania</h3>
              <div className="flex flex-wrap gap-2">
                {story.solutions.map((solution, index) => (
                  <a 
                    key={index}
                    href={solution.link}
                    className="inline-flex items-center px-4 py-2 bg-white text-[#0078D4] border border-[#0078D4] rounded hover:bg-[#0078D4] hover:text-white transition-colors duration-200 text-sm font-semibold shadow-sm"
                  >
                    <img 
                      src={solution.logo} 
                      alt={`${solution.name} logo`}
                      className="w-5 h-5 mr-2"
                    />
                    {solution.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomerStoryCard: React.FC<{ story: CustomerStory }> = ({ story }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={story.imageUrl} 
            alt={story.title}
            className="w-full h-full object-cover"
          />
          {story.logoUrl && (
            <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow">
              <img 
                src={story.logoUrl} 
                alt="Company logo" 
                className="h-8"
              />
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="text-sm text-gray-600 mb-2">{story.industry}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h3>
          <p className="text-gray-700 mb-4">{story.description}</p>
          <div className="flex flex-wrap gap-2">
            {story.solutions.map((solution, index) => (
              <a 
                key={index}
                href={solution.link}
                className="inline-flex items-center px-4 py-2 bg-white text-[#0078D4] border border-[#0078D4] rounded hover:bg-[#0078D4] hover:text-white transition-colors duration-200 text-sm font-semibold shadow-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={solution.logo} 
                  alt={`${solution.name} logo`}
                  className="w-5 h-5 mr-2"
                />
                {solution.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <StoryModal 
        story={story} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

const seoData = {
  pageData: {
    title: "Przykłady Wdrożeń Microsoft Dynamics 365 | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
    description: "Zobacz przykłady udanych wdrożeń Microsoft Dynamics 365. Poznaj historie sukcesu i dowiedz się, jak firmy wykorzystują system do rozwoju biznesu.",
    ogType: 'website'
  }
};

const PrzykladyWdrozen: React.FC = () => {
  const [selectedSolutions, setSelectedSolutions] = useState<Set<string>>(new Set());

  // Get unique solutions for filter
  const availableSolutions = useMemo(() => {
    const solutions = new Set<string>();
    customerStories.forEach(story => {
      story.solutions.forEach(solution => {
        solutions.add(solution.name);
      });
    });
    return Array.from(solutions);
  }, []);

  // Toggle solution selection
  const toggleSolution = (solution: string) => {
    const newSelected = new Set(selectedSolutions);
    if (newSelected.has(solution)) {
      newSelected.delete(solution);
    } else {
      newSelected.add(solution);
    }
    setSelectedSolutions(newSelected);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedSolutions(new Set());
  };

  // Filter stories based on selected solutions
  const filteredStories = useMemo(() => {
    if (selectedSolutions.size === 0) {
      return customerStories;
    }
    return customerStories.filter(story =>
      story.solutions.some(solution => selectedSolutions.has(solution.name))
    );
  }, [selectedSolutions]);

  return (
    <>
      <MetaTags pageData={seoData.pageData} />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-16 mt-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Przykłady wdrożeń rozwiązań Microsoft Dynamics 365
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Poznaj firmy, które zaufały rozwiązaniom Microsoft Dynamics 365 i osiągnęły sukces w cyfrowej transformacji swojego biznesu.
            </p>
          </div>

          {/* Filters section */}
          <div className="mb-8">
            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-600 mb-2">Wybierz rozwiązania, aby filtrować historie:</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={clearFilters}
                  className={`px-4 py-2 rounded text-sm font-semibold transition-colors duration-200 ${
                    selectedSolutions.size === 0
                      ? 'bg-[#0078D4] text-white'
                      : 'bg-white text-[#0078D4] border border-[#0078D4] hover:bg-[#0078D4] hover:text-white'
                  }`}
                >
                  Wszystkie rozwiązania
                </button>
                {availableSolutions.map((solution) => (
                  <button
                    key={solution}
                    onClick={() => toggleSolution(solution)}
                    className={`inline-flex items-center px-4 py-2 rounded text-sm font-semibold transition-colors duration-200 ${
                      selectedSolutions.has(solution)
                        ? 'bg-[#0078D4] text-white'
                        : 'bg-white text-[#0078D4] border border-[#0078D4] hover:bg-[#0078D4] hover:text-white'
                    }`}
                  >
                    {solution}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Case studies grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <CustomerStoryCard key={index} story={story} />
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center text-gray-600 mt-8">
              Nie znaleziono historii sukcesu dla wybranych rozwiązań.
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrzykladyWdrozen;
