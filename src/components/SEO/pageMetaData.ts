import { BASE_WEBSITE_SCHEMA } from './constants';
import { MetaTags } from './types';

export const getPageMetaData = (path: string, pageData?: any): MetaTags => {
  // Remove leading slash if present
  const normalizedPath = path.replace(/^\//, '');

  const metaData: { [key: string]: MetaTags } = {
    '': {
      title: "Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS | Dobierz odpowiednie licencje dla firmy",
      description: "Profesjonalny kalkulator licencji Microsoft Dynamics 365. Dobierz odpowiednie licencje, oblicz koszty i zoptymalizuj wydatki na licencje w swojej firmie.",
      keywords: "Microsoft Dynamics 365, kalkulator licencji, licencje Dynamics 365, ERP, CRM, ANEGIS, koszty licencji, optymalizacja licencji",
      ogType: 'website',
      schema: {
        ...BASE_WEBSITE_SCHEMA,
        "mainEntity": {
          "@type": "SoftwareApplication",
          "name": "Kalkulator Licencji Microsoft Dynamics 365",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "PLN"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "156",
            "bestRating": "5",
            "worstRating": "1"
          }
        }
      }
    },
    'selection': {
      title: "Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS | Wybierz moduły",
      description: "Wybierz moduły Microsoft Dynamics 365 odpowiednie dla Twojej firmy. Porównaj funkcje i znajdź optymalne rozwiązanie.",
      keywords: "moduły Dynamics 365, wybór modułów, funkcje Dynamics 365, porównanie modułów, Microsoft Dynamics 365",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Wybór Modułów Microsoft Dynamics 365",
        "description": "Wybierz moduły Microsoft Dynamics 365 odpowiednie dla Twojej firmy"
      }
    },
    'questions': {
      title: "Konfiguracja Licencji Microsoft Dynamics 365 by ANEGIS | Kalkulator Licencji",
      description: "Skonfiguruj wybrane moduły Microsoft Dynamics 365 według potrzeb Twojej firmy. Odpowiedz na pytania, aby otrzymać optymalne rekomendacje.",
      keywords: "konfiguracja Dynamics 365, ustawienia licencji, rekomendacje licencji, dostosowanie Dynamics 365",
      schema: {
        "@context": "https://schema.org",
        "@type": "QAPage",
        "mainEntity": {
          "@type": "Question",
          "name": "Konfiguracja licencji Microsoft Dynamics 365"
        }
      }
    },
    'review': {
      title: "Podsumowanie Kalkulacji Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Przejrzyj szczegółowe podsumowanie kalkulacji licencji Microsoft Dynamics 365. Sprawdź koszty i rekomendacje dla Twojej firmy.",
      keywords: "kalkulacja licencji, koszty Dynamics 365, podsumowanie licencji, rekomendacje licencji, Microsoft Dynamics 365",
      schema: {
        "@context": "https://schema.org",
        "@type": "Review",
        "name": "Podsumowanie kalkulacji licencji Microsoft Dynamics 365",
        "reviewBody": "Szczegółowe podsumowanie doboru licencji"
      }
    },
    'kontakt': {
      title: "Kontakt | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Skontaktuj się z nami w sprawie licencji Microsoft Dynamics 365. Nasi eksperci pomogą dobrać optymalne rozwiązanie dla Twojej firmy.",
      keywords: "kontakt ANEGIS, pomoc Dynamics 365, eksperci Dynamics 365, doradztwo licencyjne",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Kontakt - Kalkulator Licencji Microsoft Dynamics 365",
        "description": "Strona kontaktowa kalkulatora licencji Microsoft Dynamics 365",
        "mainEntity": {
          "@type": "Organization",
          "name": "ANEGIS",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["Polish", "English"]
          }
        }
      }
    },
    'dynamics-365-sales': {
      title: "Microsoft Dynamics 365 Sales | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Odkryj możliwości Microsoft Dynamics 365 Sales. Zwiększ efektywność sprzedaży, automatyzuj procesy i buduj trwałe relacje z klientami.",
      keywords: "Dynamics 365 Sales, CRM, zarządzanie sprzedażą, automatyzacja sprzedaży, relacje z klientami, licencje Sales",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Sales",
        "description": "Odkryj możliwości Microsoft Dynamics 365 Sales. Zwiększ efektywność sprzedaży, automatyzuj procesy i buduj trwałe relacje z klientami.",
        "url": "https://dynamics365.com.pl/dynamics-365-sales",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        },
        "mainEntity": {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Czym jest Microsoft Dynamics 365 Sales?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Microsoft Dynamics 365 Sales to zaawansowane narzędzie CRM, które wspiera zespoły sprzedaży w zarządzaniu relacjami z klientami, automatyzacji procesów sprzedażowych oraz analizie danych w celu zwiększenia efektywności i wyników sprzedaży."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są główne funkcje Dynamics 365 Sales?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Inteligentne prognozowanie sprzedaży z wykorzystaniem AI, automatyzacja codziennych zadań sprzedażowych, personalizacja doświadczeń klientów, analiza danych i interaktywne raporty, integracja z aplikacjami Microsoft, takimi jak Outlook czy Teams, oraz mobilny dostęp do platformy."
              }
            },
            {
              "@type": "Question",
              "name": "Czy Dynamics 365 Sales jest odpowiednie dla małych firm?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, rozwiązanie jest skalowalne i może być dostosowane do potrzeb zarówno małych, jak i dużych firm. Oferuje elastyczne plany i funkcje, które mogą być rozwijane w miarę wzrostu firmy."
              }
            },
            {
              "@type": "Question",
              "name": "Czy mogę korzystać z Dynamics 365 Sales na urządzeniach mobilnych?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, Dynamics 365 Sales posiada aplikację mobilną, która umożliwia dostęp do danych i funkcji z dowolnego miejsca, co jest szczególnie przydatne dla zespołów pracujących w terenie."
              }
            },
            {
              "@type": "Question",
              "name": "Jak Dynamics 365 Sales pomaga w prognozowaniu sprzedaży?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Platforma wykorzystuje sztuczną inteligencję i analizę danych historycznych, aby przewidywać wyniki sprzedaży, identyfikować potencjalne szanse i wspierać podejmowanie decyzji."
              }
            },
            {
              "@type": "Question",
              "name": "Czy Dynamics 365 Sales integruje się z innymi narzędziami?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, Dynamics 365 Sales bezproblemowo integruje się z innymi rozwiązaniami Microsoft, takimi jak Office 365, Teams, SharePoint czy Power BI, co zapewnia spójność danych i usprawnia współpracę."
              }
            },
            {
              "@type": "Question",
              "name": "Jak Dynamics 365 Sales wspiera współpracę zespołową?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Integracja z Microsoft Teams i innymi narzędziami umożliwia efektywną komunikację, udostępnianie plików i wspólne zarządzanie projektami w czasie rzeczywistym."
              }
            },
            {
              "@type": "Question",
              "name": "Jak rozpocząć pracę z Dynamics 365 Sales?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Wystarczy skontaktować się z partnerem Microsoft lub odwiedzić stronę produktu, aby uzyskać informacje o licencjonowaniu, konfiguracji i wdrożeniu rozwiązania."
              }
            },
            {
              "@type": "Question",
              "name": "Czy mogę wypróbować Dynamics 365 Sales przed zakupem?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, Microsoft oferuje bezpłatne wersje próbne, które pozwalają przetestować funkcjonalności systemu przed podjęciem decyzji o zakupie."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są korzyści z integracji Dynamics 365 Sales z Power BI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Power BI pozwala na zaawansowaną analizę danych sprzedażowych, wizualizację wyników oraz tworzenie interaktywnych raportów, które pomagają w podejmowaniu strategicznych decyzji."
              }
            }
          ]
        }
      }
    },
    'dynamics-365-customer-service': {
      title: "Microsoft Dynamics 365 Customer Service | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Microsoft Dynamics 365 Customer Service - kompleksowe rozwiązanie do obsługi klienta. Podnieś jakość wsparcia i zwiększ satysfakcję klientów.",
      keywords: "Dynamics 365 Customer Service, obsługa klienta, wsparcie klienta, service desk, licencje Customer Service",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Customer Service",
        "description": "Microsoft Dynamics 365 Customer Service - kompleksowe rozwiązanie do obsługi klienta. Podnieś jakość wsparcia i zwiększ satysfakcję klientów.",
        "url": "https://dynamics365.com.pl/dynamics-365-customer-service",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        }
      }
    },
    'dynamics-365-field-service': {
      title: "Microsoft Dynamics 365 Field Service | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Zarządzaj serwisem terenowym z Microsoft Dynamics 365 Field Service. Optymalizuj pracę serwisantów i podnoś jakość obsługi klienta.",
      keywords: "Dynamics 365 Field Service, serwis terenowy, zarządzanie serwisem, mobilni pracownicy, licencje Field Service",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Field Service",
        "description": "Zarządzaj serwisem terenowym z Microsoft Dynamics 365 Field Service. Optymalizuj pracę serwisantów i podnoś jakość obsługi klienta.",
        "url": "https://dynamics365.com.pl/dynamics-365-field-service",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        }
      }
    },
    'dynamics-365-project-operations': {
      title: "Microsoft Dynamics 365 Project Operations | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Efektywnie zarządzaj projektami z Microsoft Dynamics 365 Project Operations. Optymalizuj zasoby, kontroluj koszty i zwiększaj rentowność projektów.",
      keywords: "Dynamics 365 Project Operations, zarządzanie projektami, projekty, harmonogramy, budżety projektów, licencje Project Operations",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Project Operations",
        "description": "Efektywnie zarządzaj projektami z Microsoft Dynamics 365 Project Operations. Optymalizuj zasoby, kontroluj koszty i zwiększaj rentowność projektów.",
        "url": "https://dynamics365.com.pl/dynamics-365-project-operations",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        }
      }
    },
    'dynamics-365-finance': {
      title: "Microsoft Dynamics 365 Finance | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Microsoft Dynamics 365 Finance - nowoczesne zarządzanie finansami. Automatyzuj procesy finansowe i podejmuj lepsze decyzje biznesowe.",
      keywords: "Dynamics 365 Finance, zarządzanie finansami, księgowość, controlling, finanse przedsiębiorstw, licencje Finance",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Finance",
        "description": "Microsoft Dynamics 365 Finance - nowoczesne zarządzanie finansami. Automatyzuj procesy finansowe i podejmuj lepsze decyzje biznesowe.",
        "url": "https://dynamics365.com.pl/dynamics-365-finance",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        }
      }
    },
    'dynamics-365-supply-chain': {
      title: "Microsoft Dynamics 365 Supply Chain Management | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Optymalizuj łańcuch dostaw z Microsoft Dynamics 365 Supply Chain Management. Zarządzaj produkcją, magazynem i logistyką w jednym systemie.",
      keywords: "Dynamics 365 Supply Chain, łańcuch dostaw, zarządzanie magazynem, produkcja, logistyka, licencje Supply Chain",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Supply Chain Management",
        "description": "Optymalizuj łańcuch dostaw z Microsoft Dynamics 365 Supply Chain Management. Zarządzaj produkcją, magazynem i logistyką w jednym systemie.",
        "url": "https://dynamics365.com.pl/dynamics-365-supply-chain",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        }
      }
    },
    'dynamics-365-commerce': {
      title: "Microsoft Dynamics 365 Commerce | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Rozwijaj swój biznes e-commerce z Microsoft Dynamics 365 Commerce. Zarządzaj sprzedażą wielokanałową i twórz spersonalizowane doświadczenia zakupowe.",
      keywords: "Dynamics 365 Commerce, e-commerce, handel detaliczny, sprzedaż wielokanałowa, POS, licencje Commerce",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Commerce",
        "description": "Rozwijaj swój biznes e-commerce z Microsoft Dynamics 365 Commerce. Zarządzaj sprzedażą wielokanałową i twórz spersonalizowane doświadczenia zakupowe.",
        "url": "https://dynamics365.com.pl/dynamics-365-commerce",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        }
      }
    },
    'dynamics-365-human-resources': {
      title: "Microsoft Dynamics 365 Human Resources | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Efektywne zarządzanie zasobami ludzkimi z Microsoft Dynamics 365 HR. Optymalizuj procesy kadrowe i wspieraj rozwój pracowników.",
      keywords: "Dynamics 365 HR, Human Resources, zarządzanie kadrami, HR, rozwój pracowników, licencje HR",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Human Resources",
        "description": "Efektywne zarządzanie zasobami ludzkimi z Microsoft Dynamics 365 HR. Optymalizuj procesy kadrowe i wspieraj rozwój pracowników.",
        "url": "https://dynamics365.com.pl/dynamics-365-human-resources",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        }
      }
    },
    'dynamics-365-customer-insights': {
      title: "Microsoft Dynamics 365 Customer Insights | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Poznaj swoich klientów lepiej z Microsoft Dynamics 365 Customer Insights. Analizuj dane klientów i personalizuj ich doświadczenia.",
      keywords: "Dynamics 365 Customer Insights, analiza klientów, personalizacja, dane klientów, AI w biznesie, licencje Customer Insights",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Customer Insights",
        "description": "Poznaj swoich klientów lepiej z Microsoft Dynamics 365 Customer Insights. Analizuj dane klientów i personalizuj ich doświadczenia.",
        "url": "https://dynamics365.com.pl/dynamics-365-customer-insights",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        }
      }
    }
  };

  // For backward compatibility with old URLs
  const oldToNewRouteMap: { [key: string]: string } = {
    'dynamics-sales': 'dynamics-365-sales',
    'dynamics-finance': 'dynamics-365-finance',
    'dynamics-supply-chain': 'dynamics-365-supply-chain',
    'dynamics-field-service': 'dynamics-365-field-service',
    'dynamics-project-operations': 'dynamics-365-project-operations',
    'dynamics-customer-service': 'dynamics-365-customer-service',
    'dynamics-customer-insights': 'dynamics-365-customer-insights',
    'dynamics-commerce': 'dynamics-365-commerce',
    'dynamics-human-resources': 'dynamics-365-human-resources'
  };

  // If an old route is requested, map it to the new route
  const routeToUse = oldToNewRouteMap[normalizedPath] || normalizedPath;

  // Return the metadata for the route, or default metadata if route not found
  return metaData[routeToUse] || metaData[''];
};
