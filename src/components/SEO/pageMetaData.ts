import { BASE_WEBSITE_SCHEMA } from './constants';
import { MetaTagsData } from './types';

export const getPageMetaData = (path: string, pageData?: Record<string, any>): MetaTagsData => {
  // Remove leading slash if present
  const normalizedPath = path.replace(/^\//, '');

  const metaData: { [key: string]: MetaTagsData } = {
    '': {
      title: "Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS | Dobierz odpowiednie licencje dla firmy",
      description: "Profesjonalny kalkulator licencji Microsoft Dynamics 365. Dobierz odpowiednie licencje, oblicz koszty i zoptymalizuj wydatki na licencje w swojej firmie.",
      keywords: "kalkulator licencji dynamics 365, licencje microsoft dynamics 365, koszty licencji dynamics 365, dynamics 365 pricing",
      ogType: "website",
      siteName: "Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
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
      siteName: "Kontakt - Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
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
      siteName: "Microsoft Dynamics 365 Sales",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Microsoft Dynamics 365 Sales - Kalkulator Licencji",
        "applicationCategory": "BusinessApplication",
        "description": "Kalkulator licencji Microsoft Dynamics 365 Sales. Dobierz odpowiednie licencje, oblicz koszty i zoptymalizuj wydatki na licencje w swojej firmie.",
        "url": "https://dynamics365.com.pl/dynamics-365-sales",
        "operatingSystem": "All",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "ratingCount": 156
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PLN"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        },
        "hasPart": {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Co to jest Microsoft Dynamics 365 Sales?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Microsoft Dynamics 365 Sales to kompleksowe rozwiązanie do zarządzania sprzedażą. Umożliwia efektywne zarządzanie leadami, szansami sprzedażowymi, automatyzację procesów sprzedaży oraz budowanie trwałych relacji z klientami poprzez zaawansowane narzędzia CRM."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są główne korzyści z wdrożenia Microsoft Dynamics 365 Sales?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Główne korzyści to: zwiększenie efektywności sprzedaży, lepsza konwersja leadów, automatyzacja procesów sprzedażowych, dokładniejsze prognozowanie sprzedaży oraz skuteczniejsze budowanie i utrzymywanie relacji z klientami."
              }
            },
            {
              "@type": "Question",
              "name": "Jak Microsoft Dynamics 365 Sales pomaga w zarządzaniu sprzedażą?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "System oferuje zaawansowane narzędzia do zarządzania procesem sprzedaży, w tym: śledzenie leadów i szans sprzedażowych, automatyzację zadań, analitykę sprzedaży, integrację z narzędziami komunikacji oraz wsparcie sztucznej inteligencji."
              }
            },
            {
              "@type": "Question",
              "name": "Czy Microsoft Dynamics 365 Sales wykorzystuje sztuczną inteligencję?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, Microsoft Dynamics 365 Sales wykorzystuje sztuczną inteligencję do analizy danych sprzedażowych, przewidywania zachowań klientów, sugerowania następnych najlepszych działań oraz automatyzacji rutynowych zadań sprzedażowych."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są wymagania licencyjne dla Microsoft Dynamics 365 Sales?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Licencje Microsoft Dynamics 365 Sales są dostępne w różnych wariantach, dostosowanych do skali działalności i potrzeb organizacji. Podstawowa licencja obejmuje kluczowe funkcje sprzedażowe, a dodatkowe moduły można dokupić według potrzeb."
              }
            }
          ]
        }
      }
    },
    'dynamics-365-customer-service': {
      title: "Microsoft Dynamics 365 Customer Service | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Microsoft Dynamics 365 Customer Service - kompleksowe rozwiązanie do obsługi klienta. Podnieś jakość wsparcia i zwiększ satysfakcję klientów.",
      keywords: "Dynamics 365 Customer Service, obsługa klienta, wsparcie klienta, help desk, licencje Customer Service",
      ogType: 'website',
      siteName: "Microsoft Dynamics 365 Customer Service",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Microsoft Dynamics 365 Customer Service - Kalkulator Licencji",
        "applicationCategory": "BusinessApplication",
        "description": "Kalkulator licencji Microsoft Dynamics 365 Customer Service. Dobierz odpowiednie licencje, oblicz koszty i zoptymalizuj wydatki na licencje w swojej firmie.",
        "url": "https://dynamics365.com.pl/dynamics-365-customer-service",
        "operatingSystem": "All",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "ratingCount": 156
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PLN"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        },
        "hasPart": {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Co to jest Microsoft Dynamics 365 Customer Service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Microsoft Dynamics 365 Customer Service to kompleksowe rozwiązanie do obsługi klienta. Umożliwia efektywne zarządzanie zgłoszeniami, wielokanałową komunikację z klientami, automatyzację procesów obsługi oraz podnoszenie jakości wsparcia poprzez wykorzystanie sztucznej inteligencji."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są główne korzyści z wdrożenia Microsoft Dynamics 365 Customer Service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Główne korzyści to: szybsza i bardziej efektywna obsługa klienta, redukcja czasu rozwiązywania problemów, zwiększenie satysfakcji klientów, lepsza organizacja pracy zespołu wsparcia oraz automatyzacja powtarzalnych zadań."
              }
            },
            {
              "@type": "Question",
              "name": "Jak Microsoft Dynamics 365 Customer Service pomaga w obsłudze klienta?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "System oferuje zaawansowane narzędzia do zarządzania zgłoszeniami, bazę wiedzy, omnichannel routing, automatyczne przydzielanie spraw, analitykę obsługi klienta oraz integrację z różnymi kanałami komunikacji."
              }
            },
            {
              "@type": "Question",
              "name": "Czy Microsft Dynamics 365 Customer Service wykorzystuje sztuczną inteligencję?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, Microsoft Dynamics 365 Customer Service wykorzystuje sztuczną inteligencję do automatyzacji obsługi, sugerowania rozwiązań, analizy sentymentu klientów oraz optymalizacji procesów wsparcia, co znacząco podnosi jakość i efektywność obsługi."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są wymagania licencyjne dla Microsoft Dynamics 365 Customer Service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Licencje Microsoft Dynamics 365 Customer Service są dostępne w różnych wariantach, dostosowanych do skali działalności i potrzeb organizacji. Podstawowa licencja obejmuje kluczowe funkcjonalności obsługi klienta, a dodatkowe moduły można dokupić według potrzeb."
              }
            }
          ]
        }
      }
    },
    'dynamics-365-field-service': {
      title: "Microsoft Dynamics 365 Field Service | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Zarządzaj serwisem terenowym z Microsoft Dynamics 365 Field Service. Optymalizuj pracę serwisantów i podnoś jakość obsługi klienta.",
      keywords: "Microsoft Dynamics 365 Field Service, serwis terenowy, zarządzanie serwisem, mobilni pracownicy, licencje Field Service",
      ogType: 'website',
      siteName: "Microsoft Dynamics 365 Field Service",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Microsoft Dynamics 365 Field Service - Kalkulator Licencji",
        "applicationCategory": "BusinessApplication",
        "description": "Kalkulator licencji Microsoft Dynamics 365 Field Service. Dobierz odpowiednie licencje, oblicz koszty i zoptymalizuj wydatki na licencje w swojej firmie.",
        "url": "https://dynamics365.com.pl/dynamics-365-field-service",
        "operatingSystem": "All",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "ratingCount": 156
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PLN"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        },
        "hasPart": {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Co to jest Microsoft Dynamics 365 Field Service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Microsoft Dynamics 365 Field Service to kompleksowe rozwiązanie do zarządzania serwisem terenowym. Umożliwia optymalizację pracy serwisantów, planowanie zadań, zarządzanie zasobami i sprzętem, oraz podnoszenie jakości obsługi klienta poprzez efektywne zarządzanie zleceniami serwisowymi."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są główne korzyści z wdrożenia Microsoft Dynamics 365 Field Service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Główne korzyści to: optymalizacja tras i harmonogramów serwisantów, redukcja kosztów operacyjnych, zwiększenie produktywności pracowników terenowych, lepsza kontrola nad zasobami i sprzętem, oraz wyższa satysfakcja klientów dzięki szybszej i bardziej efektywnej obsłudze."
              }
            },
            {
              "@type": "Question",
              "name": "Czy Microsoft Dynamics 365 Field Service działa na urządzeniach mobilnych?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, Microsoft Dynamics 365 Field Service oferuje zaawansowaną aplikację mobilną, która umożliwia serwisantom dostęp do wszystkich niezbędnych informacji i narzędzi w terenie, włączając harmonogramy, dane klientów, historię serwisową i dokumentację techniczną."
              }
            },
            {
              "@type": "Question",
              "name": "Jak Microsoft Dynamics 365 Field Service pomaga w optymalizacji pracy serwisantów?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Microsoft Dynamics 365 Field Service wykorzystuje zaawansowane algorytmy do optymalizacji tras i harmonogramów, automatycznego przydzielania zadań najbardziej odpowiednim serwisantom, oraz zapewnia dostęp do wszystkich niezbędnych informacji i dokumentacji w terenie, co znacząco zwiększa efektywność pracy."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są wymagania licencyjne dla Microsoft Dynamics 365 Field Service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Licencje Microsft Dynamics 365 Field Service są dostępne w różnych wariantach, dostosowanych do potrzeb organizacji. Podstawowa licencja obejmuje dostęp do głównych funkcjonalności, a dodatkowe moduły można dokupić w zależności od specyficznych wymagań firmy."
              }
            }
          ]
        }
      }
    },
    'dynamics-365-project-operations': {
      title: "Microsoft Dynamics 365 Project Operations | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Efektywnie zarządzaj projektami z Microsoft Dynamics 365 Project Operations. Optymalizuj zasoby, kontroluj koszty i zwiększaj rentowność projektów.",
      keywords: "Dynamics 365 Project Operations, zarządzanie projektami, kontrola kosztów, optymalizacja zasobów, licencje Project Operations",
      ogType: 'website',
      siteName: "Microsoft Dynamics 365 Project Operations",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Microsoft Dynamics 365 Project Operations - Kalkulator Licencji",
        "applicationCategory": "BusinessApplication",
        "description": "Kalkulator licencji Microsoft Dynamics 365 Project Operations. Dobierz odpowiednie licencje, oblicz koszty i zoptymalizuj wydatki na licencje w swojej firmie.",
        "url": "https://dynamics365.com.pl/dynamics-365-project-operations",
        "operatingSystem": "All",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "ratingCount": 156
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PLN"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        },
        "hasPart": {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Co to jest Microsoft Dynamics 365 Project Operations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Microsoft Dynamics 365 Project Operations to kompleksowe rozwiązanie do zarządzania projektami. Umożliwia efektywne planowanie zasobów, kontrolę kosztów, zarządzanie budżetami oraz optymalizację procesów projektowych w celu zwiększenia rentowności i sukcesu projektów."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są główne korzyści z wdrożenia Microsoft Dynamics 365Project Operations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Główne korzyści to: lepsza kontrola nad budżetami projektowymi, optymalizacja wykorzystania zasobów, zwiększenie rentowności projektów, dokładniejsze prognozowanie i planowanie, oraz usprawnienie współpracy zespołowej poprzez zintegrowane narzędzia projektowe."
              }
            },
            {
              "@type": "Question",
              "name": "Jak Microsoft Dynamics 365 Project Operations pomaga w zarządzaniu zasobami?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Microsoft Dynamics 365 Project Operations oferuje zaawansowane narzędzia do zarządzania zasobami, umożliwiając optymalne przydzielanie pracowników do projektów, śledzenie dostępności zasobów, planowanie obciążenia pracy oraz monitorowanie wykorzystania zasobów w czasie rzeczywistym."
              }
            },
            {
              "@type": "Question",
              "name": "Czy Microsoft Dynamics 365Project Operations integruje się z innymi narzędziami projektowymi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, Microsoft Dynamics 365 Project Operations oferuje szerokie możliwości integracji z innymi systemami Microsoft, takimi jak Microsoft Project, Teams, czy Office 365, co zapewnia spójne środowisko pracy i efektywną współpracę zespołową."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są wymagania licencyjne dla Microsoft Dynamics 365 Project Operations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Licencje Microsoft Dynamics 365 Project Operations są dostępne w różnych wariantach, dostosowanych do skali działalności i potrzeb organizacji. Podstawowa licencja obejmuje kluczowe funkcjonalności zarządzania projektami, a dodatkowe moduły można dokupić w zależności od specyficznych wymagań."
              }
            }
          ]
        }
      }
    },
    'dynamics-365-finance': {
      title: "Microsoft Dynamics 365 Finance | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Microsoft Dynamics 365 Finance - nowoczesne zarządzanie finansami. Automatyzuj procesy finansowe i podejmuj lepsze decyzje biznesowe.",
      keywords: "Microsoft Dynamics 365 Finance, D365 Finance, Dynamics 365, zarządzanie finansami, automatyzacja procesów finansowych, licencje Finance",
      ogType: 'website',
      siteName: "Microsoft Dynamics 365 Finance",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Microsoft Dynamics 365 Finance - Kalkulator Licencji",
        "applicationCategory": "BusinessApplication",
        "description": "Kalkulator licencji Microsoft Dynamics 365 Finance. Dobierz odpowiednie licencje, oblicz koszty i zoptymalizuj wydatki na licencje w swojej firmie.",
        "url": "https://dynamics365.com.pl/dynamics-365-finance",
        "operatingSystem": "All",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "ratingCount": 156
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PLN"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        },
        "hasPart": {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Co to jest Microsoft Dynamics 365 Finance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Microsoft Dynamics 365 Finance to kompleksowe rozwiązanie do zarządzania finansami przedsiębiorstwa. Umożliwia automatyzację procesów finansowych, zarządzanie księgowością, kontrolę budżetów oraz generowanie szczegółowych raportów finansowych dla lepszego podejmowania decyzji biznesowych."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są główne korzyści z wdrożenia Finance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Główne korzyści to: automatyzacja procesów finansowych, lepsza kontrola nad przepływami pieniężnymi, zwiększona dokładność raportowania finansowego, efektywniejsze zarządzanie budżetami oraz zgodność z globalnymi standardami rachunkowości i regulacjami prawnymi."
              }
            },
            {
              "@type": "Question",
              "name": "Jak Finance pomaga w zarządzaniu finansami?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Finance oferuje zaawansowane narzędzia do zarządzania księgowością, automatycznego księgowania, prognozowania finansowego, zarządzania należnościami i zobowiązaniami, oraz generowania kompleksowych raportów finansowych w czasie rzeczywistym."
              }
            },
            {
              "@type": "Question",
              "name": "Czy Finance integruje się z innymi systemami finansowymi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, Microsoft Dynamics 365 Finance oferuje szerokie możliwości integracji z innymi systemami finansowymi i bankowymi, systemami ERP, oraz narzędziami Microsoft, co zapewnia płynny przepływ danych i spójność informacji finansowych."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są wymagania licencyjne dla Finance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Licencje Finance są dostępne w różnych wariantach, dostosowanych do wielkości organizacji i zakresu wykorzystywanych funkcjonalności. Podstawowa licencja obejmuje kluczowe funkcje finansowe, a dodatkowe moduły można dokupić według potrzeb."
              }
            }
          ]
        }
      }
    },
    'dynamics-365-supply-chain': {
      title: "Microsoft Dynamics 365 Supply Chain Management | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Optymalizuj łańcuch dostaw z Microsoft Dynamics 365 Supply Chain Management. Zarządzaj produkcją, magazynem i logistyką w jednym systemie.",
      keywords: "Dynamics 365 Supply Chain Management, zarządzanie łańcuchem dostaw, zarządzanie produkcją, zarządzanie magazynem, licencje Supply Chain",
      ogType: 'website',
      siteName: "Microsoft Dynamics 365 Supply Chain Management",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Microsoft Dynamics 365 Supply Chain Management - Kalkulator Licencji",
        "applicationCategory": "BusinessApplication",
        "description": "Kalkulator licencji Microsoft Dynamics 365 Supply Chain Management. Dobierz odpowiednie licencje, oblicz koszty i zoptymalizuj wydatki na licencje w swojej firmie.",
        "url": "https://dynamics365.com.pl/dynamics-365-supply-chain",
        "operatingSystem": "All",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "ratingCount": 156
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PLN"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        },
        "hasPart": {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Co to jest Microsoft Dynamics 365 Supply Chain Management?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Microsoft Dynamics 365 Supply Chain Management to kompleksowe rozwiązanie do zarządzania łańcuchem dostaw. Umożliwia efektywne zarządzanie produkcją, magazynem, logistyką oraz planowanie zasobów w jednym zintegrowanym systemie."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są główne korzyści z wdrożenia Supply Chain Management?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Główne korzyści to: optymalizacja procesów produkcyjnych, efektywne zarządzanie zapasami, lepsza kontrola nad łańcuchem dostaw, zwiększenie wydajności operacyjnej, oraz redukcja kosztów poprzez automatyzację i integrację procesów."
              }
            },
            {
              "@type": "Question",
              "name": "Jak Supply Chain Management pomaga w zarządzaniu produkcją?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "System oferuje zaawansowane narzędzia do planowania produkcji, zarządzania zasobami produkcyjnymi, kontroli jakości, harmonogramowania zadań oraz monitorowania wydajności produkcji w czasie rzeczywistym."
              }
            },
            {
              "@type": "Question",
              "name": "Czy Supply Chain Management integruje się z innymi systemami?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, Microsoft Dynamics 365 Supply Chain Management oferuje szerokie możliwości integracji z innymi systemami ERP, systemami magazynowymi, oraz narzędziami Microsoft, co zapewnia płynny przepływ informacji w całym łańcuchu dostaw."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są wymagania licencyjne dla Supply Chain Management?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Licencje Supply Chain Management są dostępne w różnych wariantach, dostosowanych do skali działalności i potrzeb organizacji. Podstawowa licencja obejmuje kluczowe funkcjonalności, a dodatkowe moduły można dokupić według potrzeb."
              }
            }
          ]
        }
      }
    },
    'dynamics-365-commerce': {
      title: "Microsoft Dynamics 365 Commerce | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Rozwijaj swój biznes e-commerce z Microsoft Dynamics 365 Commerce. Zarządzaj sprzedażą wielokanałową i twórz spersonalizowane doświadczenia zakupowe.",
      keywords: "Dynamics 365 Commerce, e-commerce, sprzedaż wielokanałowa, personalizacja zakupów, licencje Commerce",
      ogType: 'website',
      siteName: "Microsoft Dynamics 365 Commerce",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Microsoft Dynamics 365 Commerce - Kalkulator Licencji",
        "applicationCategory": "BusinessApplication",
        "description": "Kalkulator licencji Microsoft Dynamics 365 Commerce. Dobierz odpowiednie licencje, oblicz koszty i zoptymalizuj wydatki na licencje w swojej firmie.",
        "url": "https://dynamics365.com.pl/dynamics-365-commerce",
        "operatingSystem": "All",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "ratingCount": 156
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PLN"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        },
        "hasPart": {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Co to jest Microsoft Dynamics 365 Commerce?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Microsoft Dynamics 365 Commerce to kompleksowe rozwiązanie do zarządzania sprzedażą wielokanałową. Umożliwia prowadzenie sprzedaży online i stacjonarnej, personalizację doświadczeń zakupowych oraz efektywne zarządzanie całym procesem sprzedaży."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są główne korzyści z wdrożenia Microsoft Dynamics 365 Commerce?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Główne korzyści to: ujednolicone zarządzanie sprzedażą we wszystkich kanałach, personalizacja doświadczeń zakupowych, zwiększenie konwersji sprzedaży, efektywna obsługa klienta oraz integracja procesów back-office z front-office."
              }
            },
            {
              "@type": "Question",
              "name": "Jak Microsoft Dynamics 365 Commerce pomaga w zarządzaniu e-commerce?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Commerce oferuje zaawansowane narzędzia do zarządzania sklepem internetowym, w tym: zarządzanie katalogiem produktów, personalizację treści, obsługę promocji i rabatów, zarządzanie zamówieniami oraz analizę zachowań klientów."
              }
            },
            {
              "@type": "Question",
              "name": "Czy MIcrosoft Dynamics 365 Commerce wspiera sprzedaż wielokanałową?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, Microsoft Dynamics 365 Commerce oferuje pełne wsparcie dla sprzedaży wielokanałowej, umożliwiając zarządzanie sprzedażą online, mobilną i stacjonarną w jednym systemie, z synchronizacją danych w czasie rzeczywistym."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są wymagania licencyjne dla Microsoft Dynamics 365 Commerce?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Licencje Commerce są dostępne w różnych wariantach, dostosowanych do skali działalności i potrzeb organizacji. Podstawowa licencja obejmuje kluczowe funkcjonalności e-commerce, a dodatkowe moduły można dokupić według potrzeb."
              }
            }
          ]
        }
      }
    },
    'dynamics-365-human-resources': {
      title: "Microsoft Dynamics 365 Human Resources | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Efektywne zarządzanie zasobami ludzkimi z Microsoft Dynamics 365 HR. Optymalizuj procesy kadrowe i wspieraj rozwój pracowników.",
      keywords: "Dynamics 365 Human Resources, zarządzanie zasobami ludzkimi, HR, procesy kadrowe, licencje HR",
      ogType: 'website',
      siteName: "Microsoft Dynamics 365 Human Resources",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Microsoft Dynamics 365 Human Resources - Kalkulator Licencji",
        "applicationCategory": "BusinessApplication",
        "description": "Kalkulator licencji Microsoft Dynamics 365 Human Resources. Dobierz odpowiednie licencje, oblicz koszty i zoptymalizuj wydatki na licencje w swojej firmie.",
        "url": "https://dynamics365.com.pl/dynamics-365-human-resources",
        "operatingSystem": "All",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "ratingCount": 156
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PLN"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        },
        "hasPart": {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Co to jest Microsoft Dynamics 365 Human Resources?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Microsoft Dynamics 365 Human Resources to kompleksowe rozwiązanie do zarządzania zasobami ludzkimi. Umożliwia efektywne zarządzanie procesami kadrowymi, rekrutacją, szkoleniami, świadczeniami pracowniczymi oraz wspiera rozwój i zaangażowanie pracowników."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są główne korzyści z wdrożenia Microsoft Dynamics 365 Human Resources?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Główne korzyści to: automatyzacja procesów kadrowych, efektywniejsza rekrutacja i onboarding, lepsze zarządzanie talentami, optymalizacja świadczeń pracowniczych oraz dokładniejsza analiza danych HR wspierająca podejmowanie decyzji."
              }
            },
            {
              "@type": "Question",
              "name": "Jak Microsoft Dynamics 365 Human Resources pomaga w zarządzaniu pracownikami?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "System oferuje zaawansowane narzędzia do zarządzania cyklem życia pracownika, w tym: rekrutację, onboarding, rozwój kompetencji, oceny pracownicze, zarządzanie świadczeniami oraz planowanie ścieżek kariery."
              }
            },
            {
              "@type": "Question",
              "name": "Czy Microsoft Dynamics 365 Human Resources integruje się z innymi systemami HR?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, Microsoft Dynamics 365 Human Resources oferuje szerokie możliwości integracji z innymi systemami HR, systemami płacowymi oraz narzędziami Microsoft, co zapewnia kompleksowe zarządzanie procesami kadrowymi."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są wymagania licencyjne dla Microsoft Dynamics 365 Human Resources?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Licencje Human Resources są dostępne w różnych wariantach, dostosowanych do wielkości organizacji i zakresu wykorzystywanych funkcjonalności. Podstawowa licencja obejmuje kluczowe funkcje HR, a dodatkowe moduły można dokupić według potrzeb."
              }
            }
          ]
        }
      }
    },
    'dynamics-365-customer-insights': {
      title: "Microsoft Dynamics 365 Customer Insights | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Poznaj swoich klientów lepiej z Microsoft Dynamics 365 Customer Insights. Analizuj dane klientów i personalizuj ich doświadczenia.",
      keywords: "Dynamics 365 Customer Insights, analiza danych klientów, personalizacja doświadczeń, customer data platform, licencje Customer Insights",
      ogType: 'website',
      siteName: "Microsoft Dynamics 365 Customer Insights",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Microsoft Dynamics 365 Customer Insights - Kalkulator Licencji",
        "applicationCategory": "BusinessApplication",
        "description": "Kalkulator licencji Microsoft Dynamics 365 Customer Insights. Dobierz odpowiednie licencje, oblicz koszty i zoptymalizuj wydatki na licencje w swojej firmie.",
        "url": "https://dynamics365.com.pl/dynamics-365-customer-insights",
        "operatingSystem": "All",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "ratingCount": 156
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PLN"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://dynamics365.com.pl"
        },
        "hasPart": {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Co to jest Microsoft Dynamics 365 Customer Insights?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Microsoft Dynamics 365 Customer Insights to zaawansowane rozwiązanie do analizy danych klientów. Umożliwia tworzenie unified customer profile, analizę zachowań klientów, segmentację oraz personalizację doświadczeń klientów w oparciu o dane ze wszystkich kanałów kontaktu."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są główne korzyści z wdrożenia Microsoft Dynamics 365 Customer Insights?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Główne korzyści to: lepsze zrozumienie potrzeb klientów, precyzyjna segmentacja, personalizacja komunikacji i ofert, przewidywanie zachowań klientów oraz podejmowanie decyzji biznesowych w oparciu o rzeczywiste dane."
              }
            },
            {
              "@type": "Question",
              "name": "Jak Microsoft Dynamics 365 Customer Insights pomaga w analizie danych klientów?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "System oferuje zaawansowane narzędzia do zbierania i analizy danych klientów z różnych źródeł, tworzenia unified customer profile, segmentacji klientów, analizy ścieżek zakupowych oraz przewidywania przyszłych zachowań klientów."
              }
            },
            {
              "@type": "Question",
              "name": "Czy Microsoft Dynamics 365 Customer Insights integruje się z innymi systemami?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak, Microsoft Dynamics 365 Customer Insights oferuje szerokie możliwości integracji z innymi systemami CRM, narzędziami analitycznymi oraz aplikacjami Microsoft, co pozwala na kompleksową analizę danych klientów ze wszystkich źródeł."
              }
            },
            {
              "@type": "Question",
              "name": "Jakie są wymagania licencyjne dla Microsoft Dynamics 365 Customer Insights?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Licencje Microsoft Dynamics 365 Customer Insights są dostępne w różnych wariantach, dostosowanych do skali działalności i potrzeb organizacji. Podstawowa licencja obejmuje kluczowe funkcje analityczne, a dodatkowe moduły można dokupić według potrzeb."
              }
            }
          ]
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
