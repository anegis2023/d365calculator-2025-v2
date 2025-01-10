import { BASE_WEBSITE_SCHEMA } from './constants';
import { MetaTags } from './types';

export const getPageMetaData = (path: string, pageData?: any): MetaTags => {
  // Remove leading slash if present
  const normalizedPath = path.replace(/^\//, '');

  const metaData: { [key: string]: MetaTags } = {
    '': {
      title: "Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS | Dobierz odpowiednie licencje dla firmy",
      description: "Profesjonalny kalkulator licencji Microsoft Dynamics 365. Dobierz odpowiednie licencje, oblicz koszty i zoptymalizuj wydatki na licencje w swojej firmie.",
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
          }
        }
      }
    },
    'selection': {
      title: "Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS | Wybierz moduły",
      description: "Wybierz moduły Microsoft Dynamics 365 odpowiednie dla Twojej firmy. Porównaj funkcje i znajdź optymalne rozwiązanie.",
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
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Sales",
        "description": "Odkryj możliwości Microsoft Dynamics 365 Sales. Zwiększ efektywność sprzedaży, automatyzuj procesy i buduj trwałe relacje z klientami.",
        "url": "https://d365calculator.netlify.app/dynamics-365-sales",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://d365calculator.netlify.app"
        }
      }
    },
    'dynamics-365-field-service': {
      title: "Microsoft Dynamics 365 Field Service | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Zarządzaj serwisem terenowym z Microsoft Dynamics 365 Field Service. Optymalizuj pracę serwisantów i podnoś jakość obsługi klienta.",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Field Service",
        "description": "Zarządzaj serwisem terenowym z Microsoft Dynamics 365 Field Service. Optymalizuj pracę serwisantów i podnoś jakość obsługi klienta.",
        "url": "https://d365calculator.netlify.app/dynamics-365-field-service",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://d365calculator.netlify.app"
        }
      }
    },
    'dynamics-365-finance': {
      title: "Microsoft Dynamics 365 Finance | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Zarządzaj finansami firmy z Microsoft Dynamics 365 Finance. Automatyzuj procesy finansowe, zwiększaj kontrolę i podejmuj lepsze decyzje biznesowe.",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Finance",
        "description": "Zarządzaj finansami firmy z Microsoft Dynamics 365 Finance. Automatyzuj procesy finansowe, zwiększaj kontrolę i podejmuj lepsze decyzje biznesowe.",
        "url": "https://d365calculator.netlify.app/dynamics-365-finance",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://d365calculator.netlify.app"
        }
      }
    },
    'dynamics-365-supply-chain': {
      title: "Microsoft Dynamics 365 Supply Chain Management | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Optymalizuj łańcuch dostaw z Microsoft Dynamics 365 Supply Chain Management. Zwiększ wydajność operacyjną i usprawnij procesy logistyczne.",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Supply Chain Management",
        "description": "Optymalizuj łańcuch dostaw z Microsoft Dynamics 365 Supply Chain Management. Zwiększ wydajność operacyjną i usprawnij procesy logistyczne.",
        "url": "https://d365calculator.netlify.app/dynamics-365-supply-chain",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://d365calculator.netlify.app"
        }
      }
    },
    'dynamics-365-project-operations': {
      title: "Microsoft Dynamics 365 Project Operations | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Efektywnie zarządzaj projektami z Microsoft Dynamics 365 Project Operations. Optymalizuj zasoby, kontroluj koszty i zwiększaj rentowność projektów.",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Project Operations",
        "description": "Efektywnie zarządzaj projektami z Microsoft Dynamics 365 Project Operations. Optymalizuj zasoby, kontroluj koszty i zwiększaj rentowność projektów.",
        "url": "https://d365calculator.netlify.app/dynamics-365-project-operations",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://d365calculator.netlify.app"
        }
      }
    },
    'dynamics-365-customer-service': {
      title: "Microsoft Dynamics 365 Customer Service | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Podnieś jakość obsługi klienta z Microsoft Dynamics 365 Customer Service. Automatyzuj procesy obsługi i zwiększaj satysfakcję klientów.",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Customer Service",
        "description": "Podnieś jakość obsługi klienta z Microsoft Dynamics 365 Customer Service. Automatyzuj procesy obsługi i zwiększaj satysfakcję klientów.",
        "url": "https://d365calculator.netlify.app/dynamics-365-customer-service",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://d365calculator.netlify.app"
        }
      }
    },
    'dynamics-365-customer-insights': {
      title: "Microsoft Dynamics 365 Customer Insights | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Poznaj lepiej swoich klientów z Microsoft Dynamics 365 Customer Insights. Analizuj dane klientów i personalizuj ich doświadczenia.",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Customer Insights",
        "description": "Poznaj lepiej swoich klientów z Microsoft Dynamics 365 Customer Insights. Analizuj dane klientów i personalizuj ich doświadczenia.",
        "url": "https://d365calculator.netlify.app/dynamics-365-customer-insights",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://d365calculator.netlify.app"
        }
      }
    },
    'dynamics-365-commerce': {
      title: "Microsoft Dynamics 365 Commerce | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Rozwijaj swój biznes e-commerce z Microsoft Dynamics 365 Commerce. Zarządzaj sprzedażą wielokanałową i twórz spersonalizowane doświadczenia zakupowe.",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Commerce",
        "description": "Rozwijaj swój biznes e-commerce z Microsoft Dynamics 365 Commerce. Zarządzaj sprzedażą wielokanałową i twórz spersonalizowane doświadczenia zakupowe.",
        "url": "https://d365calculator.netlify.app/dynamics-365-commerce",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://d365calculator.netlify.app"
        }
      }
    },
    'dynamics-365-human-resources': {
      title: "Microsoft Dynamics 365 Human Resources | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Zarządzaj zasobami ludzkimi z Microsoft Dynamics 365 Human Resources. Automatyzuj procesy HR i zwiększaj zaangażowanie pracowników.",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Microsoft Dynamics 365 Human Resources",
        "description": "Zarządzaj zasobami ludzkimi z Microsoft Dynamics 365 Human Resources. Automatyzuj procesy HR i zwiększaj zaangażowanie pracowników.",
        "url": "https://d365calculator.netlify.app/dynamics-365-human-resources",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://d365calculator.netlify.app"
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
