import React, { useState, useMemo } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { getPageMetaData } from '../components/SEO/pageMetaData';
import { X } from 'lucide-react';
import { Navbar } from '../components/Navbar';

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
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Finance?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "dynamics-365-finance"
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
  },
  {
    title: "Transformacja sprzedaży i zarządzania projektami budowlanymi w DEHN SE",
    description: "Firma DEHN SE, światowy lider w dziedzinie ochrony odgromowej, zrealizowała transformację cyfrową swoich procesów sprzedażowych, aby sprostać wyzwaniom związanym z długotrwałymi projektami budowlanymi i częstymi zmianami planów. ",
    fullDescription: {
      intro: "Firma DEHN SE, światowy lider w dziedzinie ochrony odgromowej, zrealizowała transformację cyfrową swoich procesów sprzedażowych, aby sprostać wyzwaniom związanym z długotrwałymi projektami budowlanymi i częstymi zmianami planów. ",
      projectDescription: "Tradycyjne podejście, oparte na rozproszonych listach i narzędziach, powodowało brak przejrzystości w zarządzaniu informacjami projektowymi i utrudniało efektywną obsługę klientów. Odpowiedzią na te wyzwania było wdrożenie systemu Dynamics 365 Sales jako centralnej platformy zarządzania sprzedażą i relacjami z klientami.\n\nDzięki wdrożeniu systemu Dynamics 365 DEHN SE scentralizował zarządzanie informacjami o projektach, umożliwiając swoim zespołom sprzedaży dostęp do pełnej historii projektów budowlanych i kontaktów w czasie rzeczywistym. Rozwiązanie to, określane jako „Sales 4.0”, pozwoliło firmie zautomatyzować kluczowe procesy, takie jak planowanie działań sprzedażowych, zarządzanie kontaktami czy dostosowywanie rozwiązań ochrony odgromowej do zmieniających się wymagań projektów.\n\nNowy system Dynamics 365 umożliwia precyzyjne zarządzanie działaniami sprzedażowymi. Ponadto, scentralizowany dostęp do danych pozwala szybciej reagować na zmiany w planach budowy, takie jak modyfikacje konstrukcji dachów czy wysokości budynków, bez zakłócania procesu sprzedaży.\n\nTransformacja „Sales 4.0” przyniosła również korzyści w innych krajach, takich jak Włochy, gdzie proces sprzedaży, realizowany zarówno bezpośrednio, jak i przez zewnętrznych sprzedawców, został uproszczony i zintegrowany w ramach jednej platformy. ",
      keyPoints: [
        "Wdrożenie Dynamics 365 Sales jako centralnej platformy zarządzania sprzedażą i relacjami z klientami",
        "Centralizacja zarządzania informacjami o projektach z dostępem do pełnej historii projektów i kontaktów w czasie rzeczywistym",
        "Wdrożenie koncepcji „Sales 4.0”, zwiększającej efektywność działań sprzedażowych i wspierającej adaptację do dynamicznych wymagań projektów budowlanych",
        "Automatyzacja procesów sprzedażowych i szybsze reagowanie na zmiany w planach budowy"
      ]
    },
    industry: "Produkcja dyskretna",
    companySize: "1000 - 9,999 pracowników",
    country: "Niemcy",
    solutions: [
      {
        name: "Dynamics 365 Sales",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Sales?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "/dynamics-365-sales"
      }
    ],
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/18892_DEHN%20SE%20Header%20Image?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1900&hei=550&qlt=100&fmt=png-alpha&fit=crop",
    logoUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/18892_DEHN%20SE%20Logo?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain"
  },
  {
    title: "Transformacja cyfrowa obsługi klienta w Vattenfall AB",
    description: "Vattenfall AB, jedna z największych w Europie firm energetycznych, zrealizowała transformację cyfrową, aby zapewnić swoim klientom nowoczesne i zintegrowane doświadczenia oraz wspierać cele zrównoważonego rozwoju.",
    fullDescription: {
      intro: "Vattenfall AB, jedna z największych w Europie firm energetycznych, zrealizowała transformację cyfrową, aby zapewnić swoim klientom nowoczesne i zintegrowane doświadczenia oraz wspierać cele zrównoważonego rozwoju.",
      projectDescription: "Firma stawia sobie za cel umożliwienie życia bez paliw kopalnych w ciągu jednego pokolenia. Kluczowym krokiem w realizacji tego celu było wdrożenie zintegrowanej platformy CRM opartej na rozwiązaniach Microsoft Dynamics 365 Marketing, Sales i Customer Service, które usprawniły procesy sprzedażowe i obsługi klienta.\n\nPrzed wdrożeniem firma zmagała się z wyzwaniami wynikającymi z rozproszonych systemów marketingowych, sprzedażowych i billingowych. Brak centralizacji danych utrudniał pracownikom szybkie znajdowanie potrzebnych informacji, co negatywnie wpływało na doświadczenie klienta i ograniczało zaangażowanie w działania proekologiczne. Dynamics 365 umożliwił firmie uproszczenie pracy zespołów sprzedaży i obsługi klienta, zmniejszając liczbę narzędzi wymaganych do obsługi zapytań z ośmiu do jednego. Dzięki temu pracownicy mogli skupić się na dialogu z klientami, a nie na złożonych zadaniach administracyjnych.\n\nVattenfall wykorzystał również Dynamics 365 w projekcie budowy sieci stacji ładowania pojazdów elektrycznych pod marką InCharge, która obejmuje już 40 000 punktów ładowania w Europie Północnej. Dzięki rozwiązaniom CRM, firma zapewnia wysoką jakość obsługi klientów indywidualnych i biznesowych, optymalizuje harmonogramy instalacji oraz koordynuje działania zespołów sprzedaży i serwisu. Centralizacja danych w Dynamics 365 pozwala na personalizację obsługi i lepsze zaangażowanie klientów w produkty i usługi zorientowane na zrównoważony rozwój.",
      keyPoints: [
        "Wdrożenie Microsoft Dynamics 365 Marketing, Sales i Customer Service jako zintegrowanej platformy CRM usprawniającej procesy sprzedażowe i obsługi klienta",
        "Redukcja liczby narzędzi wymaganych do obsługi zapytań z ośmiu do jednego ",
        "Centralizacja danych i personalizacja obsługi klientów indywidualnych i biznesowych",
        "Wsparcie projektu budowy sieci stacji ładowania pojazdów elektrycznych InCharge poprzez optymalizację harmonogramów instalacji i koordynację działań zespołów sprzedaży i serwisu w systemie Dynamics 365"
      ]
    },
    industry: "Energetyczna",
    companySize: "10000 + pracowników",
    country: "Szwecja",
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
        name: "Dynamics 365 Customer Service",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Customer-Service?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "dynamics-365-customer-service"
      },
      {
        name: "Dynamics 365 Field Service",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Field-Service?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "dynamics-365-field-service"
      }
    ],
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Vattenfall%20AB%20Header%20Image?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain",
    logoUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Vattenfall%20AB%20Logo?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain"
  },
  {
    title: "Transformacja cyfrowa obsługi klienta: nowoczesne podejście do zarządzania relacjami w Lexmark",
    description: "Lexmark, globalny lider w dziedzinie drukowania, technologii IoT i rozwiązań chmurowych, zrealizował kompleksową transformację cyfrową swoich procesów sprzedaży i obsługi klienta, wdrażając aplikacje Microsoft Dynamics 365 Sales, Customer Service i Field Service. Celem projektu było zastąpienie przestarzałych systemów Salesforce i Siebel zintegrowanym, chmurowym rozwiązaniem.",
    fullDescription: {
      intro: "Lexmark, globalny lider w dziedzinie drukowania, technologii IoT i rozwiązań chmurowych, zrealizował kompleksową transformację cyfrową swoich procesów sprzedaży i obsługi klienta, wdrażając aplikacje Microsoft Dynamics 365 Sales, Customer Service i Field Service. Celem projektu było zastąpienie przestarzałych systemów Salesforce i Siebel zintegrowanym, chmurowym rozwiązaniem. ",
      projectDescription: "Dzięki Dynamics 365 Lexmark uzyskał centralną platformę omnichannel, która zapewnia pełną widoczność ścieżki klienta – od pierwszego kontaktu, przez sprzedaż, po obsługę posprzedażową. Zespoły sprzedaży i obsługi klienta zyskały dostęp do spójnych danych w czasie rzeczywistym, co umożliwiło lepsze prognozowanie, szybsze konfiguracje ofert oraz redukcję liczby poprawek wycen o 43%. Wdrożenie zintegrowanego systemu CPQ (Configure, Price, Quote) pozwoliło na przyspieszenie procesów sprzedażowych i zwiększenie precyzji zamówień.\n\nUsprawnienia w obszarze obsługi klienta zaowocowały 20% wzrostem produktywności techników terenowych dzięki aplikacji mobilnej Dynamics 365 Field Service. Automatyczne planowanie tras, dynamiczna logika przydzielania zleceń oraz szybki dostęp do materiałów serwisowych sprawiły, że Lexmark może teraz efektywnie realizować naprawy w terenie, skracając czas reakcji i poprawiając wskaźnik rozwiązywania problemów przy pierwszej wizycie. W call center skrócenie czasu rozmów o średnio trzy minuty przełożyło się na wzrost produktywności o 23% i oszczędności rzędu miliona dolarów rocznie.\n\nIntegracja Dynamics 365 z SAP S4/Hana umożliwiła dokładniejsze zarządzanie poziomami zapasów i automatyczne generowanie zamówień uzupełniających dla partnerów biznesowych. Ponadto Lexmark wdrożył interaktywny Customer Governance Portfolio (CGP), który dzięki raportom Power BI pozwala zespołom sprzedaży i serwisu na bieżąco monitorować działania klientów i podejmować szybkie decyzje, wzmacniając zaufanie do oferowanych rozwiązań.",
      keyPoints: [
        "Zastąpienie przestarzałych systemów Salesforce i Siebel zintegrowanym, chmurowym rozwiązaniem Microsoft Dynamics 365 ",
        "Wdrożenie aplikacji Microsoft Dynamics 365 Sales, Customer Service i Field Service jako centralnej platformy omnichannel zapewniającej pełną widoczność ścieżki klienta",
        "Usprawnienie procesów sprzedażowych dzięki zintegrowanemu systemowi CPQ (Configure, Price, Quote), przyspieszenie konfiguracji ofert oraz redukcja liczby poprawek wycen o 43% ",
        "Wzrost produktywności techników terenowych o 20% dzięki Dynamics 365 Field Service, obejmujący automatyczne planowanie tras i dynamiczną logikę przydzielania zleceń",
        "Skrócenie czasu rozmów w call center o średnio trzy minuty, co przełożyło się na wzrost produktywności o 23% i roczne oszczędności w wysokości miliona dolarów ",
        "Integracja Dynamics 365 z SAP S4/Hana, umożliwiająca dokładniejsze zarządzanie poziomami zapasów i automatyczne generowanie zamówień uzupełniających",
        "Wdrożenie interaktywnego Customer Governance Portfolio (CGP) z raportami Power BI, wspierającego monitorowanie działań klientów i szybkie podejmowanie decyzji"
      ]
    },
    industry: "Technologiczna i produkcyjna",
    companySize: "10000 + pracowników",
    country: "USA",
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
      },
      {
        name: "Dynamics 365 Field Service",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Field-Service?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "dynamics-365-field-service"
      }
    ],
    imageUrl: "https://www.microsoft.com/content/dam/microsoft/customer-proof-points/final/605109/18861-lexmark-international-dynamics-365-customer-service/assets/en/Lexmark%20International%20Header%20Image.jpeg?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain",
    logoUrl: "https://www.microsoft.com/content/dam/microsoft/customer-proof-points/final/605109/18861-lexmark-international-dynamics-365-customer-service/assets/en/Lexmark%20International%20Logo.png?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain"
  },
  {
    title: "Transformacja cyfrowa zarządzania i łańcucha dostaw w Koppert",
    description: "Firma Koppert, globalny lider w dostarczaniu naturalnych rozwiązań dla rolnictwa i ogrodnictwa, podjąła kompleksową transformację cyfrową swoich procesów operacyjnych i sprzedażowych. Dzięki wdrożeniu Microsoft Dynamics 365 Finance, Supply Chain Management oraz Sales, Koppert zyskał elastyczną i skalowalną platformę ERP, która wspiera szybkie dostosowanie się do zmieniających się wymagań rynku oraz dynamiczny rozwój firmy. ",
    fullDescription: {
      intro: "Firma Koppert, globalny lider w dostarczaniu naturalnych rozwiązań dla rolnictwa i ogrodnictwa, podjąła kompleksową transformację cyfrową swoich procesów operacyjnych i sprzedażowych. Dzięki wdrożeniu Microsoft Dynamics 365 Finance, Supply Chain Management oraz Sales, Koppert zyskał elastyczną i skalowalną platformę ERP, która wspiera szybkie dostosowanie się do zmieniających się wymagań rynku oraz dynamiczny rozwój firmy. ",
      projectDescription: "Kluczowym wyzwaniem było zapewnienie niezawodności w zarządzaniu łańcuchem dostaw, gdzie większość produktów to organizmy żywe o ograniczonym czasie żywotności. Dzięki centralizacji danych i automatyzacji procesów firma poprawiła efektywność w takich obszarach jak logistyka, planowanie produkcji, zarządzanie zamówieniami oraz zgodność z lokalnymi przepisami w 30 krajach, gdzie prowadzi działalność. Zintegrowane funkcje Dynamics 365, takie jak śledzenie partii i skanowanie w czasie rzeczywistym, zapewniły pełną transparentność i dokładność w łańcuchu dostaw, osiągając ponad 99-procentową zgodność dostaw.\n\nTransformacja została przeprowadzona w kilku fazach, począwszy od wdrożenia podstawowych funkcji finansowych i zakupowych w Holandii, aż po rozbudowane moduły zarządzania produkcją, magazynami oraz e-commerce. Kluczowe procesy, takie jak przetwarzanie zamówień między jednostkami, zostały ustandaryzowane i zautomatyzowane, co zaowocowało zwiększeniem efektywności o 28%. Integracja z rozwiązaniami zewnętrznymi, takimi jak Sana do e-commerce i Optimizer do prognozowania, została zrealizowana za pomocą Microsoft Logic Apps, co uprościło integrację z systemami zewnętrznymi w chmurze.\n\nDynamics 365 zapewnił również lepsze zarządzanie relacjami z klientami dzięki synchronizacji danych w czasie rzeczywistym oraz integracji z aplikacjami mobilnymi i Outlookiem. Pracownicy zyskali pełną widoczność ścieżki klienta, co umożliwiło bardziej spersonalizowaną obsługę i szybsze konwertowanie leadów na nowych klientów.\n\nW ramach dalszego rozwoju Koppert planuje rozszerzenie wdrożenia na kolejne kraje, takie jak Meksyk i Brazylia, oraz testowanie rozwiązań IoT do monitorowania warunków transportu produktów w czasie rzeczywistym. ",
      keyPoints: [
        "Wdrożenie Microsoft Dynamics 365 Finance, Supply Chain Management oraz Sales jako elastycznego, skalowalnego i kompleksowego systemu ERP ",
        "Centralizacja danych i automatyzacja procesów w obszarze logistyki, planowania produkcji, zarządzania zamówieniami oraz zapewnienie zgodności z lokalnymi przepisami w 30 krajach ",
        "Osiągnięcie pełnej transparentności łańcucha dostaw i ponad 99% zgodności dostaw dzięki zintegrowanym funkcjom śledzenia partii i skanowania w czasie rzeczywistym  ",
        "Ustandaryzowanie i automatyzacja kluczowych procesów, takich jak przetwarzanie zamówień między jednostkami, i zwiększenie efektywności procesów o 28% ",
        "Integracja z rozwiązaniami zewnętrznymi (Sana do e-commerce, Optimizer do prognozowania) za pomocą Microsoft Logic Apps ",
        "Poprawa zarządzania relacjami z klientami dzięki synchronizacji danych w czasie rzeczywistym, aplikacjom mobilnym i integracji z Outlookiem ",
        "Przygotowanie środowiska pod wdrożenie w Meksyku i Brazylii oraz testowanie rozwiązań IoT"
      ]
    },
    industry: "Rolnictwo i ogrodnictwo",
    companySize: "1000-9999 pracowników",
    country: "Holandia",
    solutions: [
      {
        name: "Dynamics 365 Sales",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Sales?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "/dynamics-365-sales"
      },
      {
        name: "Dynamics 365 Finance",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Finance?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "dynamics-365-finance"
      },
      {
        name: "Dynamics 365 Supply Chain Management",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Supply-Chain-Management?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "dynamics-365-supply-chain"
      }
    ],
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Koppert%20Header%20Image?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain",
    logoUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Koppert%20Logo?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain"
  },
  {
    title: "Transformacja cyfrowa operacji i sprzedaży w Foley, Inc.",
    description: "Firma Foley, Inc., autoryzowany dealer Cat®, przeprowadziła kompleksową transformację cyfrową, wdrażając Microsoft Dynamics 365 oraz specjalistyczne rozwiązanie NAXT365 dla branży sprzętu ciężkiego. Modernizacja infrastruktury IT była odpowiedzią na wyzwania związane z wieloletnim korzystaniem z rozproszonych systemów, które ograniczały efektywność operacyjną i możliwość skalowania działalności. ",
    fullDescription: {
      intro: "Firma Foley, Inc., autoryzowany dealer Cat®, przeprowadziła kompleksową transformację cyfrową, wdrażając Microsoft Dynamics 365 oraz specjalistyczne rozwiązanie NAXT365 dla branży sprzętu ciężkiego. Modernizacja infrastruktury IT była odpowiedzią na wyzwania związane z wieloletnim korzystaniem z rozproszonych systemów, które ograniczały efektywność operacyjną i możliwość skalowania działalności.",
      projectDescription: "Dzięki wdrożeniu Dynamics 365 i stworzeniu zintegrowanego środowiska ERP we wszystkich obszarach działalności firma uprościła codzienne procesy, zyskała jedno źródło danych i zwiększyła efektywność operacyjną, eliminując potrzebę korzystania z ponad 70 aplikacji używanych wcześniej. Transformacja przyniosła usprawnienia we wszystkich najważniejszych procesach operacyjnych.\n\nW obszarze finansów wdrożenie nowego systemu zakupowego, zintegrowanego z zatwierdzonymi dostawcami, pozwoliło na zapewnienie spójności procesów zakupowych i redukcję opóźnień w akceptacji zamówień.\n\nZarządzanie łańcuchem dostaw i magazynami zostało usprawnione dzięki nowoczesnym funkcjom, takim jak obsługa cyklu życia materiałów i liczenie cykliczne, a dodatkowa integracja z interfejsami Cat® wprowadziła możliwość śledzenia zamówień w czasie rzeczywistym, zwiększając transparentność i kontrolę nad logistyką.\n\nW obszarze zarządzania projektami wdrożenie systemu Dynamics 365 otworzyło nowe możliwości precyzyjnego prognozowania oraz automatyzacji procesów fakturowania i budżetowania. Firma wyeliminowała także konieczność korzystania z tradycyjnych arkuszy Excel.\n\nW obszarze serwisu wprowadzono automatyczne alerty dotyczące stanu gwarancji czy konieczności przeprowadzenia konserwacji, co skróciło czas przygotowania zleceń serwisowych o 15–20 minut. Dodatkowo odpowiednio skonfigurowane systemy automatyzują procesy związane z rabatami.\n\nFoley kontynuuje rozwój systemu Dynamics 365, planując wdrożenie dodatkowych funkcji w działach sprzedaży i wynajmu, takich jak natychmiastowe zatwierdzanie finansowania czy systemowa widoczność dostępności sprzętu w czasie rzeczywistym.",
      keyPoints: [
        "Zastąpienie rozproszonych systemów zintegrowanym środowiskiem ERP opartym na Dynamics 365 i NAXT365 i wyeliminowanie ponad 70 aplikacji ",
        "Wdrożenie systemu zakupowego zintegrowanego z zatwierdzonymi dostawcami, co zapewniło spójność procesów i redukcję opóźnień w akceptacji zamówień",
        "Wdrożenie nowych funkcji, takich jak obsługa cyklu życia materiałów i liczenie cykliczne, usprawniło zarządzanie magazynami ",
        "Integracja z interfejsami Cat® umożliwiła śledzenie zamówień w czasie rzeczywistym ",
        "Wdrożenie Dynamics 365 zapewniło precyzyjne prognozowanie oraz automatyzację procesów fakturowania i budżetowania, eliminując potrzebę korzystania z arkuszy Excel  ",
        "Przygotowanie środowiska pod wdrożenie funkcjonalności: natychmiastowego zatwierdzania finansowania oraz systemowej widoczności dostępności sprzętu w czasie rzeczywistym "
      ]
    },
    industry: "Produkcja dyskretna",
    companySize: "1000-9999 pracowników",
    country: "USA",
    solutions: [
      {
        name: "Dynamics 365 Sales",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Sales?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "/dynamics-365-sales"
      },
      {
        name: "Dynamics 365 Finance",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Finance?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "dynamics-365-finance"
      },
      {
        name: "Dynamics 365 Supply Chain Management",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Supply-Chain-Management?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "dynamics-365-supply-chain"
      },
      {
        name: "Dynamics 365 Field Service",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Field-Service?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "dynamics-365-field-service"
      },
      {
        name: "Dynamics 365 Customer Insights",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Customer-Insights?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "dynamics-365-customer-insights"
      }
    ],
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Foley%20Inc%20Header%20Image?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain",
    logoUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Foley%20Inc%20Logo?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain"
  },
  {
    title: "Transformacja cyfrowa w sektorze energetycznym w HERON Group ",
    description: "HERON Group, lider na rynku energetycznym w Grecji, stanął przed wyzwaniem dostosowania swojej infrastruktury CRM do rosnącej bazy klientów oraz złożoności obsługi wielokanałowych ścieżek zakupowych.",
    fullDescription: {
      intro: "HERON Group, lider na rynku energetycznym w Grecji, stanął przed wyzwaniem dostosowania swojej infrastruktury CRM do rosnącej bazy klientów oraz złożoności obsługi wielokanałowych ścieżek zakupowych.",
      projectDescription: "W odpowiedzi na te wyzwania firma wdrożyła Dynamics 365 Energy Accelerator – rozwiązanie chmurowe opracowane przez Data Communication na bazie Microsoft Dynamics 365 Sales i Customer Service, dostosowane do specyfiki sektora energetycznego. W efekcie transformacji HERON Group zwiększyła dwukrotnie bazę klientów z obszaru energii elektrycznej i pięciokrotnie liczbę klientów z obszaru gazu ziemnego; zmniejszyła koszty operacyjne o 15% i podniosła wskaźnik Net Promoter Score (NPS) o 20 punktów.\n\nNowa platforma CRM, oparta na chmurze Azure, zapewnia HERON niezawodność działania na poziomie 99,99% i zaawansowane mechanizmy ochrony danych. Dzięki integracji 17 systemów, w tym platform billingowych i zarządzania fakturami, HERON zyskał centralny punkt dostępu do danych, umożliwiający pełną kontrolę nad procesami sprzedaży i obsługi klienta.\n\nAutomatyzacja procesów i wdrożenie funkcji samoobsługowych pozwoliły na skrócenie czasu obsługi klienta o 26%, zmniejszenie liczby zapytań do biura obsługi o 20% i 30-procentowy wzrost interakcji samoobsługowych, dzięki czemu klienci mogą wygodnie realizować takie zadania jak płatności czy zmiany w umowach.\n\nDynamics 365 Energy Accelerator stał się fundamentem efektywnego zarządzania rozproszoną siecią ponad 3 000 pracowników zewnętrznych. Dzięki integracji z portalem partnerskim i systemem CRM pracownicy mają dostęp do danych w czasie rzeczywistym, co umożliwia spersonalizowaną obsługę klientów we wszystkich kanałach, od strony internetowej po chatboty i aplikacje mobilne.\n\nDodatkowo, zaawansowane raportowanie oparte na Power BI dostarcza zarządowi szczegółowych analiz klientów i wyników sprzedaży, co wspiera podejmowanie trafnych decyzji biznesowych oraz optymalizację strategii marketingowych. W dalszych krokach HERON planuje wdrożenie Dynamics 365 Marketing do zaawansowanej automatyzacji kampanii oraz wykorzystanie sztucznej inteligencji do optymalizacji procesów wewnętrznych. ",
      keyPoints: [
        "Wdrożenie Dynamics 365 Energy Accelerator na bazie aplikacji Sales i Customer Service zaowocowało podwojeniem liczby klientów z obszaru energii elektrycznej i pięciokrotnym wzrostem klientów z obszaru gazu ziemnego",
        "Integracja systemów billingowych i zarządzania fakturami obniżyła koszty operacyjne o 15% i podniosła wskaźnik Net Promoter Score (NPS) o 20 punktów ",
        "Integracja 17 systemów zapewniła jedno źródło danych",
        "Wdrożenie CRM na platformie chmurowej Azure zapewniło niezawodność działania na poziomie 99,99% oraz zaawansowane mechanizmy ochrony danych ",
        "Automatyzacja procesów i funkcje samoobsługowe skróciły czas obsługi klienta o 26%, zredukowały liczbę zapytań do biura obsługi o 20% i zwiększyły liczbę interakcji samoobsługowych o 30%",
        "Zarządzanie 3000 pracowników zewnętrznych dzięki wdrożeniu Dynamics 365 Energy Accelerator i poprawa obsługi klienta omnichannel poprzez integrację z portalem partnerskim i CRM",
        "Wdrożenie Power BI do szczegółowych analiz klientów i wyników sprzedaży",
        "Przygotowanie środowiska pod wdrożenie Dynamics 365 Marketing do automatyzacji kampanii i narzędzi sztucznej inteligencji do optymalizacji procesów zewnętrznych"
      ]
    },
    industry: "Energetyczna",
    companySize: "50-999 pracowników",
    country: "Grecja",
    solutions: [
      {
        name: "Dynamics 365 Sales",
        logo: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Sales?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain",
        link: "/dynamics-365-sales"
      }
    ],
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/19855_HERON%20Group%20Header%20Image?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain",
    logoUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/19855_HERON%20Group%20Logo?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain"
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
      <MetaTags />
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
      </div>
    </>
  );
};

export default PrzykladyWdrozen;
