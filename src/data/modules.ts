import { Module } from '../types';

export const modules: Module[] = [
  {
    id: 1,
    name: 'Dynamics 365 Sales',
    description: 'Podnieś efektywność swojego zespołu sprzedaży i przyspiesz finalizację transakcji, korzystając z CRM napędzanego technologią AI, który inteligentnie wspiera każde działanie handlowe.',
    basePrice: 95,
    imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Sales?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain',
    questions: [
      {
        id: 'ai_insights',
        text: 'Czy potrzebujesz informacji opartych na AI do ustalania priorytetów i prognozowania leadów?',
        explanation: 'Funkcje AI pomagają zespołom sprzedaży w efektywniejszym ustalaniu priorytetów leadów i zapewniają dokładniejsze prognozowanie sprzedaży.',
        type: 'yesNoCount'
      },
      {
        id: 'advanced_sales_funnel',
        text: 'Czy potrzebujesz zaawansowanych funkcjonalności, takich jak prognozowanie sprzedaży?',
        explanation: 'Zaawansowane funkcje lejka sprzedaży umożliwiają lepsze prognozowanie i zarządzanie procesem sprzedaży.',
        type: 'yesNoCount'
      },
      {
        id: 'teams_integration',
        text: 'Czy integracja z Microsoft Teams jest niezbędna?',
        explanation: 'Integracja z Teams umożliwia lepszą komunikację i współpracę w zespole sprzedażowym.',
        type: 'yesNoCount'
      },
      {
        id: 'dashboard_customization',
        text: 'Czy potrzebujesz rozbudowanej personalizacji pulpitów nawigacyjnych i raportów?',
        explanation: 'Zaawansowana personalizacja pozwala na dostosowanie widoków i raportów do specyficznych potrzeb zespołu.',
        type: 'yesNoCount'
      },
      {
        id: 'remote_access',
        text: 'Czy Twój zespół będzie korzystał z systemu zdalnie?',
        explanation: 'Dostęp zdalny umożliwia pracę z dowolnego miejsca i urządzenia.',
        type: 'yesNoCount'
      },
      {
        id: 'sales_automation',
        text: 'Czy automatyzacja procesów sprzedaży ma kluczowe znaczenie?',
        explanation: 'Automatyzacja procesów sprzedaży pozwala na zwiększenie efektywności i redukcję manualnych zadań.',
        type: 'yesNoCount'
      },
      {
        id: 'offline_access',
        text: 'Czy potrzebujesz dostępu offline dla swojego zespołu sprzedaży?',
        explanation: 'Dostęp offline umożliwia pracę bez połączenia z internetem i synchronizację po ponownym połączeniu.',
        type: 'yesNoCount'
      },
      {
        id: 'same_roles',
        text: 'Czy wszyscy wskazani użykownicy mają taką samą rolę?',
        explanation: 'Różne role użytkowników mogą wymagać różnych poziomów dostępu i funkcjonalności.',
        type: 'yesNoCount'
      }
    ]
  },
  {
    id: 2,
    name: 'Dynamics 365 Finance',
    description: 'Osiągnij pełną przejrzystość finansową i odkryj nowe możliwości zwiększania zysków.',
    basePrice: 180,
    imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Finance?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain',
    questions: [
      {
        id: 'advanced_finance',
        text: 'Czy będziesz potrzebował którejkolwiek z poniższych funkcjonalności D365 Finansce (1)? Jeśli tak to ilu użytkowników będzie ich potrzebowało?',
        explanation: `1. Zaawansowana rachunkowość kosztów i analiza rentowności.
2. Zarządzanie złożonymi konsolidacjami finansowymi dla wielu jednostek prawnych.
3. Zaawansowane narzędzia do planowania i prognozowania dla zarządzania wydajnością finansową.
4. Szczegółowe śledzenie zgodności z przepisami, w tym raportowanie zgodne z IFRS lub GAAP.
5. Analizy wspierane przez AI do wykrywania anomalii i zapobiegania oszustwom.
6. Zaawansowane modelowanie finansowe wspierające decyzje strategiczne.
7. Obsługa zaawansowanych konfiguracji podatkowych, w tym rozliczenia transgraniczne i wielojurysdykcyjne.
8. Zarządzanie i analiza środków trwałych w skali globalnej.
9. Konfiguracja i zarządzanie zaawansowanymi scenariuszami budżetowymi, w tym prognozami kroczącymi.
10. Integracja finansów z zewnętrznymi narzędziami BI lub złożonymi źródłami danych dla zaawansowanej analityki.`,
        type: 'yesNoCount'
      },
      {
        id: 'basic_finance',
        text: 'Czy będziesz potrzebował którejkolwiek z poniższych funkcjonalności D365 Finansce (2)? Jeśli tak to ilu użytkowników będzie ich potrzebowało?',
        explanation: `1. Zarządzanie kontami księgi głównej, wpisami do dziennika oraz strukturami kont.
2. Obsługa procesów zobowiązań (accounts payable) i należności (accounts receivable).
3. Nadzór nad przepływami pieniężnymi, zarządzaniem kredytami i windykacją należności.
4. Konfiguracja i zarządzanie planowaniem budżetu, prognozami i alokacjami.
5. Zarządzanie środkami trwałymi, w tym harmonogramami amortyzacji.
6. Obsługa transakcji wielowalutowych i konsolidacji finansowej.
7. Zarządzanie zgodnością finansową z lokalnymi i regionalnymi regulacjami.
8. Konfiguracja reguł podatkowych, stawek oraz składanie deklaracji podatkowych.
9. Integracja z innymi modułami Dynamics 365 dla kompleksowych przepływów finansowych.
10. Tworzenie i utrzymanie raportów finansowych.`,
        type: 'yesNoCount'
      },
      {
        id: 'standard_finance_users',
        text: 'Ilu użytkownikom modułu Finance wystarczy, którakolwiek z poniższych funkcjonalności (1):',
        explanation: `1. Tworzenie i aktualizacja zamówień zakupu oraz faktur dostawców.
2. Składanie i przeglądanie wniosków o zwrot wydatków.
3. Przetwarzanie płatności oraz monitorowanie ich statusów.
4. Rekoncyliacja kont bankowych i rejestrowanie transakcji gotówkowych.
5. Rejestrowanie transakcji finansowych związanych z zapasami.
6. Aktualizacja ewidencji środków trwałych, takich jak nabycia czy likwidacje.
7. Generowanie i składanie raportów finansowych do przeglądu.
8. Rejestrowanie rutynowych wpisów księgowych w celu wprowadzenia korekt.
9. Monitorowanie wykorzystania budżetu i rekomendowanie zmian.
10. Przesyłanie aktualizacji kierownikom finansowym.`,
        type: 'yesNoCount'
      },
      {
        id: 'basic_finance_users',
        text: 'Ilu użytkownikom modułu Finance wystarczy którakolwiek z poniższych funkcjonalności (2):',
        explanation: `1. Przeglądanie raportów finansowych i pulpitów nawigacyjnych bez możliwości edycji.
2. Zatwierdzanie przepływów pracy, takich jak zamówienia zakupu czy korekty budżetu.
3. Składanie raportów wydatków lub wprowadzanie podstawowych aktualizacji.
4. Monitorowanie alokacji budżetu i trendów wykorzystania.
5. Przegląd i aktualizacja danych finansowych osobistych, takich jak informacje podatkowe.
6. Udział w przeglądach lub eskalacjach przepływów pracy.
7. Dostęp do sald kont klientów lub dostawców w celach referencyjnych.
8. Składanie opinii na temat prognoz finansowych.
9. Dostęp do współdzielonych dokumentów finansowych w celu współpracy.
10. Składanie zapytań lub podstawowych wniosków o dane finansowe.`,
        type: 'yesNoCount'
      }
    ]
  },
  {
    id: 3,
    name: 'Dynamics 365 Supply Chain Management',
    description: 'Wykorzystaj elastyczną, współpracującą i zintegrowaną platformę wspieraną przez Copilot, aby pewnie pokonywać wyzwania i dostosować się do zmieniających się warunków.',
    basePrice: 180,
    imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Supply-Chain-Management?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain',
    questions: [
      {
        id: 'advanced_scm_features',
        text: 'Czy będziesz potrzebował poniższych funkcjonalności D365 SCM (1)? Jeśli tak to ilu użytkowników będzie ich potrzebowało?',
        explanation: `1. Zaawansowane prognozowanie popytu z wykorzystaniem analiz wspieranych przez AI.
2. Zarządzanie złożonymi procesami produkcyjnymi, takimi jak produkcja jednostkowa, lean czy procesowa.
3. Dostęp do zaawansowanych funkcji zarządzania magazynem, w tym kompletacji falowej, liczenia cyklicznego i dyrektyw lokalizacyjnych.
4. Monitorowanie wydajności urządzeń za pomocą urządzeń IoT dla potrzeb predykcyjnego utrzymania ruchu.
5. Nadzór nad operacjami wielozakładowymi z centralnym zarządzaniem zapasami.
6. Zarządzanie portalami współpracy z dostawcami w ramach zaawansowanych procesów zaopatrzenia.
7. Optymalizacja harmonogramów produkcji i ich dostosowanie do dostępności zasobów.
8. Narzędzia do raportowania zgodności środowiskowej i zrównoważonego rozwoju.
9. Zarządzanie kontrolą jakości i śledzeniem surowców oraz produktów gotowych.
10. Szczegółowe analizy i pulpity do monitorowania wskaźników KPI w łańcuchu dostaw, w tym analizy kosztów i rotacji zapasów.
11. Zaawansowane planowanie dystrybucji w wielu kanałach.
12. Konfiguracja i zarządzanie zautomatyzowanymi przepływami pracy dla wyjątków w łańcuchu dostaw, takich jak braki magazynowe czy opóźnienia dostaw.
13. Integracja z zewnętrznymi dostawcami logistycznymi dla monitorowania przesyłek w czasie rzeczywistym.
14. Zarządzanie zaawansowanymi strategiami zaopatrzenia, takimi jak JIT (just-in-time) i ocena dostawców.
15. Nadzór nad inicjatywami zrównoważonego rozwoju, takimi jak śledzenie emisji CO₂ czy redukcja odpadów.`,
        type: 'yesNoCount'
      },
      {
        id: 'barcode_scanning',
        text: 'Czy współdzielone urządzenia będą używane do skanowania kodów kreskowych w celu śledzenia zapasów lub wysyłki?',
        explanation: 'Dotyczy użycia współdzielonych urządzeń do skanowania i śledzenia zapasów lub przesyłek.',
        type: 'yesNoCount'
      },
      {
        id: 'multi_shift_devices',
        text: 'Czy urządzenia te są używane przez wielu pracowników na różnych zmianach?',
        explanation: 'Określa, czy urządzenia są współdzielone między pracownikami pracującymi na różnych zmianach.',
        type: 'yesNoCount'
      },
      {
        id: 'shared_terminal_access',
        text: 'Czy użytkownicy muszą mieć dostęp do współdzielonego terminala w celu rejestrowania godzin pracy lub zużycia materiałów?',
        explanation: 'Dotyczy potrzeby dostępu do współdzielonych terminali dla rejestracji czasu pracy i zużycia materiałów.',
        type: 'yesNoCount'
      },
      {
        id: 'pick_pack_operations',
        text: 'Czy urządzenie będzie wykorzystywane do zarządzania operacjami pick-and-pack w magazynach?',
        explanation: 'Określa wykorzystanie urządzeń do operacji kompletacji i pakowania w magazynie.',
        type: 'yesNoCount'
      },
      {
        id: 'label_printing',
        text: 'Czy użytkownicy muszą drukować etykiety wysyłkowe lub raporty inwentaryzacyjne bezpośrednio z urządzenia?',
        explanation: 'Dotyczy drukowania etykiet i raportów bezpośrednio z urządzeń mobilnych.',
        type: 'yesNoCount'
      },
      {
        id: 'quality_control',
        text: 'Czy współdzielone terminale są wymagane do rejestrowania testów kontroli jakości na hali produkcyjnej?',
        explanation: 'Określa potrzebę używania współdzielonych terminali do rejestracji testów kontroli jakości.',
        type: 'yesNoCount'
      },
      {
        id: 'goods_receipt',
        text: 'Czy pracownicy będą używać urządzenia do potwierdzania odbioru towarów lub aktualizowania statusów dostaw?',
        explanation: 'Dotyczy wykorzystania urządzeń do potwierdzania przyjęć i aktualizacji statusów dostaw.',
        type: 'yesNoCount'
      },
      {
        id: 'warehouse_location',
        text: 'Czy urządzenia potrzebują dostępu do ustawień lokalizacji magazynu, takich jak ruchy pojemników lub zadania odkładania?',
        explanation: 'Określa potrzebę dostępu do zarządzania lokalizacjami magazynowymi i operacjami składowania.',
        type: 'yesNoCount'
      },
      {
        id: 'shift_registration',
        text: 'Czy pracownicy używają współdzielonych kiosków do rejestrowania wejść i wyjść ze zmian powiązanych z przepływami pracy SCM?',
        explanation: 'Dotyczy wykorzystania współdzielonych kiosków do rejestracji czasu pracy w kontekście SCM.',
        type: 'yesNoCount'
      },
      {
        id: 'shared_reporting',
        text: 'Czy użytkownicy będą obsługiwać współdzielone systemy w celu uzyskania dostępu do podstawowych raportów operacyjnych lub pulpitów nawigacyjnych?',
        explanation: 'Określa potrzebę dostępu do raportów i pulpitów nawigacyjnych poprzez współdzielone systemy.',
        type: 'yesNoCount'
      },
      {
        id: 'advanced_scm_users',
        text: 'Ilu użytkownikom modułu SCM wystarczą poniższe funkcje (1):',
        explanation: `1. Konfiguracja przepływów pracy, takich jak zatwierdzenia zamówień zakupu czy ruchy magazynowe.
2. Planowanie i optymalizacja harmonogramów produkcyjnych lub wytwórczych.
3. Ustawianie zaawansowanych reguł zarządzania zapasami, takich jak liczenie cykliczne czy dyrektywy lokalizacyjne.
4. Konfiguracja integracji IoT w celu realizacji predykcyjnego utrzymania ruchu.
5. Zarządzanie operacjami wielomagazynowymi oraz transferami między magazynami.
6. Prognozowanie popytu i przeprowadzanie symulacji dla przyszłych potrzeb.
7. Tworzenie i zarządzanie umowami z dostawcami oraz politykami zaopatrzeniowymi.
8. Nadzór nad kalkulacją kosztów, wyceną zapasów oraz procesami zamykania stanów magazynowych.
9. Konfiguracja zgodności środowiskowej i monitorowanie zrównoważonego rozwoju w organizacji.
10. Dostęp do zaawansowanych narzędzi analitycznych do monitorowania wskaźników KPI w łańcuchu dostaw.`,
        type: 'yesNoCount'
      },
      {
        id: 'standard_scm_users',
        text: 'Ilu użytkownikom modułu SCM wystarczą poniższe funkcje (2):',
        explanation: `1. Tworzenie i przetwarzanie zamówień zakupu lub zapotrzebowań.
2. Wykonywanie korekt zapasów lub transferów towarów między lokalizacjami.
3. Rejestrowanie zużycia materiałów lub wyników produkcji.
4. Przetwarzanie transakcji przyjęcia lub wydania towarów.
5. Interakcja z portalami współpracy z dostawcami w podstawowych zadaniach, takich jak potwierdzanie zamówień.
6. Tworzenie, aktualizacja lub wydawanie zleceń produkcyjnych.
7. Rejestrowanie inspekcji kontroli jakości.
8. Zarządzanie dokumentami wysyłkowymi i aktualizacja statusów dostaw.
9. Aktualizacja stanów magazynowych podczas operacji liczenia cyklicznego.
10. Przeglądanie i zatwierdzanie operacyjnych przepływów pracy, takich jak zapotrzebowania czy potwierdzenia wysyłek.`,
        type: 'yesNoCount'
      },
      {
        id: 'basic_scm_users',
        text: 'Ilu użytkownikom modułu SCM wystarczą poniższe funkcje (3):',
        explanation: `1. Przeglądanie poziomów zapasów i dostępności towarów w celu uzyskania informacji referencyjnych.
2. Składanie kart czasu pracy lub raportów wydatków związanych z operacjami łańcucha dostaw.
3. Zatwierdzanie przepływów pracy, takich jak zapotrzebowania zakupowe czy zatwierdzenia wydatków.
4. Generowanie lub przeglądanie predefiniowanych raportów dotyczących wskaźników łańcucha dostaw.
5. Aktualizowanie danych osobowych w systemie, takich jak dane kontaktowe.
6. Dostęp i przeglądanie współdzielonych dokumentów, takich jak procedury operacyjne (SOP).
7. Podstawowa widoczność statusów zamówień lub śledzenie przesyłek.
8. Przekazywanie aktualizacji kierownikom produkcji lub magazynów.
9. Rejestrowanie zgłoszeń serwisowych lub biletów konserwacyjnych dla sprzętu.
10. Dostęp do ogólnych pulpitów nawigacyjnych bez możliwości edycji lub zarządzania danymi.`,
        type: 'yesNoCount'
      }
    ]
  },
  {
    id: 4,
    name: 'Dynamics 365 Field Service',
    description: 'Zrewolucjonizuj swoje operacje serwisowe, zapewnij wyjątkową jakość obsługi i podnieś satysfakcję klientów na zupełnie nowy poziom.',
    basePrice: 95,
    imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Field-Service?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain',
    questions: [
      {
        id: 'work_order_config',
        text: 'Czy użytkownicy muszą konfigurować zlecenia pracy, harmonogramy i umowy serwisowe?',
        explanation: 'Dotyczy konfiguracji i zarządzania podstawowymi elementami serwisu w terenie.',
        type: 'yesNoCount'
      },
      {
        id: 'technician_scheduling',
        text: 'Czy są odpowiedzialni za przydzielanie techników terenowych i optymalizację harmonogramów?',
        explanation: 'Obejmuje zarządzanie zasobami ludzkimi i optymalizację ich harmonogramów pracy.',
        type: 'yesNoCount'
      },
      {
        id: 'customer_asset_management',
        text: 'Czy potrzebują dostępu do zarządzania zasobami klienta i gwarancjami?',
        explanation: 'Dotyczy zarządzania zasobami klientów i związanymi z nimi gwarancjami.',
        type: 'yesNoCount'
      },
      {
        id: 'resource_skills',
        text: 'Czy ich zadaniem jest tworzenie i konfigurowanie umiejętności i dostępności zasobów?',
        explanation: 'Obejmuje zarządzanie kompetencjami i dostępnością techników.',
        type: 'yesNoCount'
      },
      {
        id: 'service_analytics',
        text: 'Czy będą analizować wydajność usług za pomocą wbudowanych lub niestandardowych pulpitów nawigacyjnych?',
        explanation: 'Dotyczy analizy i monitorowania wydajności usług serwisowych.',
        type: 'yesNoCount'
      },
      {
        id: 'iot_monitoring',
        text: 'Czy muszą monitorować działania serwisowe w czasie rzeczywistym za pomocą czujników IoT?',
        explanation: 'Obejmuje wykorzystanie IoT do monitorowania sprzętu i usług.',
        type: 'yesNoCount'
      },
      {
        id: 'inventory_management',
        text: 'Czy użytkownicy będą zarządzać zapasami i częściami na potrzeby działań serwisowych w terenie?',
        explanation: 'Dotyczy zarządzania częściami i materiałami używanymi w serwisie.',
        type: 'yesNoCount'
      },
      {
        id: 'workflow_management',
        text: 'Czy będą konfigurować i zarządzać przepływami pracy w terenie, w tym zatwierdzeniami i eskalacjami?',
        explanation: 'Obejmuje konfigurację i zarządzanie procesami serwisowymi.',
        type: 'yesNoCount'
      },
      {
        id: 'compliance_safety',
        text: 'Czy muszą nadzorować zgodność i procedury bezpieczeństwa dla operacji serwisowych w terenie?',
        explanation: 'Dotyczy nadzoru nad bezpieczeństwem i zgodnością z przepisami.',
        type: 'yesNoCount'
      },
      {
        id: 'system_integration',
        text: 'Czy są oni odpowiedzialni za integrację Field Service z innymi modułami Dynamics 365 lub systemami innych firm?',
        explanation: 'Obejmuje integrację z innymi systemami i modułami.',
        type: 'yesNoCount'
      },
      {
        id: 'shared_device_workorders',
        text: 'Czy technicy będą używać urządzeń współdzielonych do przeglądania lub aktualizowania zleceń pracy?',
        explanation: 'Dotyczy wykorzystania współdzielonych urządzeń do obsługi zleceń.',
        type: 'yesNoCount'
      },
      {
        id: 'inventory_tracking',
        text: 'Czy urządzenia te są wykorzystywane do śledzenia zapasów lub części w terenie?',
        explanation: 'Obejmuje śledzenie i zarządzanie częściami w terenie.',
        type: 'yesNoCount'
      },
      {
        id: 'documentation_sharing',
        text: 'Czy technicy będą używać współdzielonych systemów do przesyłania zdjęć lub dokumentacji podczas wezwań serwisowych?',
        explanation: 'Dotyczy dokumentowania prac serwisowych i przesyłania materiałów.',
        type: 'yesNoCount'
      },
      {
        id: 'navigation_support',
        text: 'Czy urządzenia muszą zapewniać wsparcie nawigacyjne dla lokalizacji serwisowych?',
        explanation: 'Obejmuje nawigację do lokalizacji klientów.',
        type: 'yesNoCount'
      },
      {
        id: 'signature_capture',
        text: 'Czy systemy współdzielone są wymagane do przechwytywania podpisów klientów lub informacji zwrotnych na temat ukończenia usługi?',
        explanation: 'Dotyczy zbierania potwierdzeń i opinii od klientów.',
        type: 'yesNoCount'
      },
      {
        id: 'time_expense_logging',
        text: 'Czy urządzenia będą wykorzystywane do przesyłania dzienników czasu i wydatków dla wielu użytkowników?',
        explanation: 'Obejmuje rejestrację czasu pracy i wydatków.',
        type: 'yesNoCount'
      },
      {
        id: 'troubleshooting_guides',
        text: 'Czy technicy uzyskują dostęp do współdzielonych systemów w celu uzyskania przewodników lub instrukcji rozwiązywania problemów?',
        explanation: 'Dotyczy dostępu do materiałów pomocniczych i instrukcji.',
        type: 'yesNoCount'
      },
      {
        id: 'remote_support',
        text: 'Czy urządzenia te są używane do inicjowania zdalnego wsparcia lub połączeń wideo z przełożonymi?',
        explanation: 'Obejmuje zdalne wsparcie i komunikację wideo.',
        type: 'yesNoCount'
      },
      {
        id: 'iot_diagnostics',
        text: 'Czy użytkownicy polegają na współdzielonych urządzeniach do diagnostyki z obsługą IoT w terenie?',
        explanation: 'Dotyczy diagnostyki sprzętu z wykorzystaniem IoT.',
        type: 'yesNoCount'
      },
      {
        id: 'onsite_printing',
        text: 'Czy współdzielone terminale drukują zlecenia serwisowe lub raporty z zadań na miejscu?',
        explanation: 'Obejmuje drukowanie dokumentów w terenie.',
        type: 'yesNoCount'
      },
      {
        id: 'standard_field_service_users',
        text: 'Ilu użytkownikom modułu Field Service wystarczą poniższe funkcje (1):',
        explanation: `1. Tworzenie i aktualizacja zleceń serwisowych oraz planowanie zasobów.
2. Potwierdzanie terminów wizyt serwisowych i powiadamianie klientów.
3. Aktualizacja zużycia zapasów po zakończeniu wizyt serwisowych.
4. Zarządzanie zwrotami lub wymianą części.
5. Generowanie i składanie raportów serwisowych.
6. Weryfikacja realizacji zleceń serwisowych oraz procedur zamknięcia.
7. Aktualizacja profili klientów o notatki z wizyt serwisowych.
8. Składanie faktur lub potwierdzeń płatności po zakończeniu usługi.
9. Przeprowadzanie kontroli jakości zrealizowanych zleceń serwisowych.
10. Rejestrowanie czasu pracy i wydatków związanych z usługami serwisowymi.`,
        type: 'yesNoCount'
      },
      {
        id: 'basic_field_service_users',
        text: 'Ilu użytkownikom modułu Field Service wystarczą poniższe funkcje (2):',
        explanation: `1. Przeglądanie zleceń serwisowych i harmonogramów usług bez możliwości edycji.
2. Zatwierdzanie lub odrzucanie zmian w zleceniach serwisowych lub wniosków o zmianę harmonogramu.
3. Dostęp do pulpitów nawigacyjnych w celu monitorowania wydajności usług i wskaźników KPI.
4. Składanie notatek z wizyt serwisowych lub wniosków dotyczących działań uzupełniających.
5. Rejestrowanie działań serwisowych, takich jak rozmowy telefoniczne czy interakcje e-mailowe.
6. Przeglądanie profili klientów lub historii dla celów referencyjnych.
7. Przegląd raportów lub podsumowań codziennych działań.
8. Wsparcie w zarządzaniu zapasami serwisowymi lub ewidencją sprzętu.
9. Rejestrowanie podstawowych zgłoszeń dotyczących obsługi klienta.
10. Udział w prostych zadaniach związanych z wprowadzaniem danych, takich jak rejestrowanie obserwacji w terenie.`,
        type: 'yesNoCount'
      }
    ]
  },
  {
    id: 5,
    name: 'Dynamics 365 Project Operations',
    description: 'Połącz wszystkie kluczowe elementy działalności projektowej w jednej zintegrowanej aplikacji, aby usprawnić zarządzanie i realizację zadań.',
    basePrice: 120,
    imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Project-Operations?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain',
    questions: [
      {
        id: 'project_scheduling',
        text: 'Czy użytkownicy muszą planować i konfigurować szczegółowe harmonogramy projektów, w tym kamienie milowe i zależności?',
        explanation: 'Dotyczy szczegółowego planowania i zarządzania harmonogramami projektów.',
        type: 'yesNoCount'
      },
      {
        id: 'resource_management',
        text: 'Czy są odpowiedzialni za zarządzanie zasobami, w tym umiejętnościami, dostępnością i zadaniami?',
        explanation: 'Obejmuje zarządzanie zasobami ludzkimi i ich przydziałami.',
        type: 'yesNoCount'
      },
      {
        id: 'budget_tracking',
        text: 'Czy muszą śledzić budżety projektów i monitorować wyniki finansowe?',
        explanation: 'Dotyczy monitorowania finansów i budżetów projektowych.',
        type: 'yesNoCount'
      },
      {
        id: 'billing_management',
        text: 'Czy będą zarządzać rozliczeniami, fakturowaniem i rozpoznawaniem przychodów z projektów?',
        explanation: 'Obejmuje zarządzanie aspektami finansowymi projektów.',
        type: 'yesNoCount'
      },
      {
        id: 'project_templates',
        text: 'Czy są odpowiedzialni za tworzenie i zarządzanie szablonami projektów i przepływami pracy?',
        explanation: 'Dotyczy tworzenia i utrzymania szablonów projektowych.',
        type: 'yesNoCount'
      },
      {
        id: 'advanced_analytics',
        text: 'Czy użytkownicy potrzebują zaawansowanych raportów i analiz dotyczących wydajności i rentowności projektów?',
        explanation: 'Obejmuje zaawansowane narzędzia analityczne i raportowe.',
        type: 'yesNoCount'
      },
      {
        id: 'dynamics_integration',
        text: 'Czy ich zadaniem jest integracja Project Operations z innymi modułami Dynamics 365, takimi jak Finanse?',
        explanation: 'Dotyczy integracji z innymi systemami i modułami.',
        type: 'yesNoCount'
      },
      {
        id: 'contract_management',
        text: 'Czy będą nadzorować zarządzanie kontraktami i umowami dla projektów?',
        explanation: 'Obejmuje zarządzanie umowami i kontraktami projektowymi.',
        type: 'yesNoCount'
      },
      {
        id: 'time_expense_workflow',
        text: 'Czy muszą konfigurować i monitorować przepływy pracy związane ze śledzeniem czasu i wydatków?',
        explanation: 'Dotyczy zarządzania czasem i wydatkami w projektach.',
        type: 'yesNoCount'
      },
      {
        id: 'compliance_monitoring',
        text: 'Czy są odpowiedzialni za utrzymanie zgodności z wymogami regulacyjnymi i umownymi?',
        explanation: 'Obejmuje monitorowanie zgodności z przepisami.',
        type: 'yesNoCount'
      },
      {
        id: 'shared_time_tracking',
        text: 'Czy współdzielone urządzenia będą używane do rejestrowania czasu i wydatków projektu dla wielu użytkowników?',
        explanation: 'Dotyczy współdzielonego śledzenia czasu i wydatków.',
        type: 'yesNoCount'
      },
      {
        id: 'remote_task_updates',
        text: 'Czy urządzenia te są używane do aktualizowania postępów zadań w lokalizacjach zdalnych lub w terenie?',
        explanation: 'Obejmuje zdalne aktualizacje statusu zadań.',
        type: 'yesNoCount'
      },
      {
        id: 'schedule_viewing',
        text: 'Czy użytkownicy potrzebują wspólnego dostępu do przeglądania harmonogramów projektów lub rezultatów?',
        explanation: 'Dotyczy współdzielonego dostępu do harmonogramów.',
        type: 'yesNoCount'
      },
      {
        id: 'performance_dashboards',
        text: 'Czy urządzenia będą udostępniać wspólne pulpity nawigacyjne do monitorowania wydajności projektu?',
        explanation: 'Obejmuje współdzielone pulpity monitorowania.',
        type: 'yesNoCount'
      },
      {
        id: 'client_approvals',
        text: 'Czy są one używane do przechwytywania zatwierdzeń lub podpisów klientów na miejscu?',
        explanation: 'Dotyczy zbierania zatwierdzeń od klientów.',
        type: 'yesNoCount'
      },
      {
        id: 'documentation_sharing',
        text: 'Czy współdzielone terminale obsługują przesyłanie zdjęć lub dokumentacji działań projektowych?',
        explanation: 'Obejmuje współdzielenie dokumentacji projektowej.',
        type: 'yesNoCount'
      },
      {
        id: 'troubleshooting_guides',
        text: 'Czy urządzenia zapewniają dostęp do przewodników rozwiązywania problemów lub podręczników projektu?',
        explanation: 'Dotyczy dostępu do materiałów pomocniczych.',
        type: 'yesNoCount'
      },
      {
        id: 'report_generation',
        text: 'Czy współdzielone systemy są potrzebne do generowania raportów lub podsumowań prac projektowych?',
        explanation: 'Obejmuje generowanie raportów projektowych.',
        type: 'yesNoCount'
      },
      {
        id: 'virtual_collaboration',
        text: 'Czy urządzenia ułatwiają współpracę, taką jak wirtualne spotkania lub udostępnianie dokumentów?',
        explanation: 'Dotyczy narzędzi współpracy wirtualnej.',
        type: 'yesNoCount'
      },
      {
        id: 'resource_allocation',
        text: 'Czy współdzielone systemy pozwolą na aktualizacje alokacji zasobów w czasie rzeczywistym?',
        explanation: 'Obejmuje zarządzanie alokacją zasobów.',
        type: 'yesNoCount'
      },
      {
        id: 'standard_project_operations_users',
        text: 'Ilu użytkownikom modułu Project Operations wystarczą poniższe funkcje (1):',
        explanation: `1. Rejestrowanie czasu pracy i wydatków związanych z realizacją projektów.
2. Aktualizacja zadań projektowych i śledzenie postępów.
3. Składanie wniosków o zasoby lub zarządzanie prostymi alokacjami zasobów.
4. Aktualizacja i weryfikacja rezultatów projektowych.
5. Dostęp do harmonogramów projektowych w celu wprowadzania podstawowych aktualizacji.
6. Przegląd i składanie wniosków o korekty budżetu projektowego.
7. Wsparcie w generowaniu lub składaniu faktur projektowych.
8. Monitorowanie ryzyk projektowych i składanie raportów.
9. Przeprowadzanie kontroli jakości zrealizowanych zleceń serwisowych.
10. Rejestrowanie czasu pracy i wydatków związanych z usługami serwisowymi.`,
        type: 'yesNoCount'
      },
      {
        id: 'basic_project_operations_users',
        text: 'Ilu użytkownikom modułu Project Operations wystarczą poniższe funkcje (2):',
        explanation: `1. Przeglądanie statusu i postępów projektów bez możliwości wprowadzania zmian.
2. Przeglądanie i zatwierdzanie przepływów pracy związanych z projektami, takich jak zmiany w zadaniach lub budżecie.
3. Monitorowanie pulpitów nawigacyjnych projektów i predefiniowanych raportów.
4. Składanie kart czasu pracy lub aktualizacji osobistych powiązanych z projektami.
5. Przeglądanie dostępności zasobów i składanie sugestii dotyczących alokacji.
6. Udział w podstawowych zadaniach wprowadzania danych, takich jak rejestrowanie obserwacji terenowych.
7. Dostęp do współdzielonej dokumentacji projektowej w celach referencyjnych.
8. Zatwierdzanie lub odrzucanie rezultatów projektowych.
9. Przekazywanie opinii na temat wyników projektu lub wskaźników wydajności.
10. Realizowanie lekkich zadań związanych z współpracą, takich jak udostępnianie aktualizacji statusu.`,
        type: 'yesNoCount'
      }
    ]
  },
  {
    id: 6,
    name: 'Dynamics 365 Customer Service',
    description: 'Zapewnij przedstawicielom serwisu zaawansowane narzędzia oparte na generatywnej AI i automatyzacji, które umożliwią im sprawne i efektywne rozwiązywanie problemów klientów.',
    basePrice: 95,
    imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Customer-Service?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain',
    questions: [
      {
        id: 'case_workflow_management',
        text: 'Czy użytkownicy muszą konfigurować przepływy pracy związane z zarządzaniem sprawami i zarządzać nimi?',
        explanation: 'Dotyczy konfiguracji i zarządzania procesami obsługi spraw klientów.',
        type: 'yesNoCount'
      },
      {
        id: 'service_performance_analysis',
        text: 'Czy są odpowiedzialni za analizowanie wskaźników wydajności obsługi klienta i KPI?',
        explanation: 'Obejmuje analizę i monitorowanie kluczowych wskaźników wydajności obsługi klienta.',
        type: 'yesNoCount'
      },
      {
        id: 'knowledge_base_management',
        text: 'Czy muszą skonfigurować i utrzymywać bazę wiedzy do samoobsługi klienta?',
        explanation: 'Dotyczy zarządzania treścią bazy wiedzy i materiałami pomocniczymi.',
        type: 'yesNoCount'
      },
      {
        id: 'sla_management',
        text: 'Czy ich zadaniem jest zarządzanie umowami o poziomie usług (SLA) i zapewnianie zgodności?',
        explanation: 'Obejmuje konfigurację i monitorowanie zgodności z SLA.',
        type: 'yesNoCount'
      },
      {
        id: 'omnichannel_config',
        text: 'Czy będą konfigurować kanały komunikacji omnichannel, takie jak czat, e-mail lub telefon?',
        explanation: 'Dotyczy konfiguracji różnych kanałów komunikacji z klientami.',
        type: 'yesNoCount'
      },
      {
        id: 'advanced_reporting',
        text: 'Czy użytkownicy wymagają zaawansowanych funkcji raportowania i analizy wydajności usług?',
        explanation: 'Obejmuje zaawansowane narzędzia analityczne i raportowe.',
        type: 'yesNoCount'
      },
      {
        id: 'ai_sentiment_analysis',
        text: 'Czy zarządzają opiniami klientów i analizą nastrojów za pomocą narzędzi AI?',
        explanation: 'Dotyczy wykorzystania AI do analizy opinii i nastrojów klientów.',
        type: 'yesNoCount'
      },
      {
        id: 'security_access_control',
        text: 'Czy będą nadzorować ustawienia zabezpieczeń, role użytkowników i kontrolę dostępu w ramach platformy?',
        explanation: 'Obejmuje zarządzanie bezpieczeństwem i uprawnieniami użytkowników.',
        type: 'yesNoCount'
      },
      {
        id: 'customer_surveys',
        text: 'Czy zarządzają i wdrażają ankiety satysfakcji klientów i narzędzia analityczne?',
        explanation: 'Dotyczy tworzenia i analizy ankiet satysfakcji klientów.',
        type: 'yesNoCount'
      },
      {
        id: 'live_chat_management',
        text: 'Czy użytkownicy muszą zarządzać czatem na żywo lub interakcjami chatbota z klientami?',
        explanation: 'Obejmuje obsługę czatu na żywo i zarządzanie chatbotami.',
        type: 'yesNoCount'
      },
      {
        id: 'social_media_support',
        text: 'Czy obsługują obsługę klienta za pośrednictwem platform mediów społecznościowych?',
        explanation: 'Dotyczy obsługi klienta w mediach społecznościowych.',
        type: 'yesNoCount'
      },
      {
        id: 'phone_integration',
        text: 'Czy potrzebują integracji telefonicznej do zarządzania połączeniami przychodzącymi i wychodzącymi?',
        explanation: 'Obejmuje integrację z systemami telefonicznymi.',
        type: 'yesNoCount'
      },
      {
        id: 'sms_communication',
        text: 'Czy będą używać SMS-ów lub innych platform komunikacyjnych do komunikacji z klientami?',
        explanation: 'Dotyczy komunikacji SMS i innych platform komunikacyjnych.',
        type: 'yesNoCount'
      },
      {
        id: 'realtime_dashboards',
        text: 'Czy użytkownicy potrzebują pulpitów nawigacyjnych w czasie rzeczywistym do śledzenia interakcji we wszystkich kanałach?',
        explanation: 'Obejmuje monitorowanie interakcji w czasie rzeczywistym.',
        type: 'yesNoCount'
      },
      {
        id: 'channel_switching',
        text: 'Czy są odpowiedzialni za płynne przenoszenie interakcji z klientami między kanałami?',
        explanation: 'Dotyczy zarządzania przejściami między kanałami komunikacji.',
        type: 'yesNoCount'
      },
      {
        id: 'ai_conversation_analysis',
        text: 'Czy potrzebują dostępu do analizy nastrojów opartej na sztucznej inteligencji podczas rozmów?',
        explanation: 'Obejmuje analizę nastrojów w czasie rzeczywistym.',
        type: 'yesNoCount'
      },
      {
        id: 'virtual_agent_management',
        text: 'Czy ich zadaniem jest zarządzanie wirtualnymi agentami i konfiguracjami chatbotów?',
        explanation: 'Dotyczy konfiguracji i zarządzania wirtualnymi agentami.',
        type: 'yesNoCount'
      },
      {
        id: 'queue_performance',
        text: 'Czy będą monitorować wydajność kolejek i obsługiwać eskalacje z kanałów cyfrowych?',
        explanation: 'Obejmuje zarządzanie kolejkami i eskalacjami.',
        type: 'yesNoCount'
      },
      {
        id: 'wait_time_management',
        text: 'Czy potrzebują narzędzi do zarządzania czasem oczekiwania klientów i nadawania priorytetów pilnym sprawom?',
        explanation: 'Dotyczy zarządzania czasem oczekiwania i priorytetyzacji spraw.',
        type: 'yesNoCount'
      },
      {
        id: 'standard_customer_service_users',
        text: 'Ilu użytkownikom modułu Customer Service wystarczą poniższe funkcje (1):',
        explanation: `1. Tworzenie i przypisywanie nowych spraw.
2. Rejestrowanie problemów lub zgłoszeń klientów dla innych zespołów.
3. Aktualizacja statusów spraw oraz dodawanie notatek dotyczących rozwiązań.
4. Przegląd i weryfikacja informacji o kontach klientów.
5. Śledzenie postępu wniosków serwisowych lub eskalacji.
6. Rejestrowanie działań serwisowych, takich jak rozmowy telefoniczne czy interakcje e-mailowe.
7. Przeprowadzanie kontroli jakości zakończonych spraw.
8. Składanie raportów lub podsumowań codziennych działań.
9. Zarządzanie i przypisywanie zadań do konkretnych spraw lub działań.
10. Przekierowywanie spraw do odpowiednich kolejek lub użytkowników.`,
        type: 'yesNoCount'
      },
      {
        id: 'basic_customer_service_users',
        text: 'Ilu użytkownikom modułu Customer Service wystarczą poniższe funkcje (2):',
        explanation: `1. Przeglądanie statusów spraw i raportów serwisowych bez możliwości edycji.
2. Przekazywanie aktualizacji lub opinii na temat zakończonych spraw.
3. Przeglądanie profili klientów w celach referencyjnych.
4. Zatwierdzanie lub odrzucanie przepływów pracy związanych z obsługą klientów.
5. Dostęp do pulpitów nawigacyjnych lub raportów w celu monitorowania wydajności zespołu.
6. Składanie podstawowych zapytań klientów lub eskalacji.
7. Przeglądanie artykułów z bazy wiedzy w celach osobistych.
8. Rejestrowanie czasu pracy lub wydatków związanych z działalnością obsługi klienta.
9. Przeglądanie i delegowanie zadań przypisanych innym członkom zespołu.
10. Monitorowanie obciążenia kolejek w celach referencyjnych.`,
        type: 'yesNoCount'
      }
    ]
  },
  {
    id: 7,
    name: 'Dynamics 365 Customer Insights',
    description: 'Połącz dane o klientach z ich aktualnymi potrzebami i korzystaj z wsparcia Microsoft Copilot, aby tworzyć spersonalizowane i angażujące doświadczenia.',
    basePrice: 1500,
    imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Customer-Insights?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain',
    questions: [
      {
        id: 'data_integration',
        text: 'Czy użytkownicy w Twojej organizacji potrzebują zintegrować i ujednolicić dane klientów z wielu źródeł danych, takich jak systemy CRM, transakcyjne bazy danych i platformy innych firm?',
        explanation: 'Integracja danych umożliwia stworzenie jednolitego widoku klienta poprzez połączenie różnych źródeł informacji. Pozwala to na lepsze zrozumienie zachowań klientów i podejmowanie bardziej świadomych decyzji biznesowych.',
        type: 'yesNoCount'
      },
      {
        id: 'data_connectors',
        text: 'Czy użytkownicy potrzebują dostępu do gotowych konektorów lub niestandardowych interfejsów API do importowania danych i zarządzania nimi w Dynamics 365 Customer Insights?',
        explanation: 'Konektory i API umożliwiają automatyzację procesu importu danych i zapewniają ich aktualność. Dzięki nim można łatwo integrować się z popularnymi systemami i platformami bez konieczności ręcznego przenoszenia danych.',
        type: 'yesNoCount'
      },
      {
        id: 'ai_enrichment',
        text: 'Czy użytkownicy muszą wykorzystywać sztuczną inteligencję i modele uczenia maszynowego do wzbogacania profili klientów i przewidywania kluczowych zachowań, takich jak rezygnacja lub prawdopodobieństwo zakupu?',
        explanation: 'Sztuczna inteligencja pomaga przewidywać zachowania klientów i identyfikować wzorce w danych. Modele uczenia maszynowego mogą automatycznie wykrywać sygnały świadczące o potencjalnej rezygnacji lub gotowości do zakupu.',
        type: 'yesNoCount'
      },
      {
        id: 'customer_segmentation',
        text: 'Czy użytkownicy potrzebują narzędzi do segmentacji klientów dla zespołów marketingowych, sprzedażowych lub serwisowych w oparciu o dane w czasie rzeczywistym i historyczne?',
        explanation: 'Segmentacja pozwala na grupowanie klientów według określonych kryteriów i zachowań. Umożliwia to personalizację komunikacji i lepsze dostosowanie oferty do potrzeb różnych grup klientów.',
        type: 'yesNoCount'
      },
      {
        id: 'advanced_analytics',
        text: 'Czy użytkownicy potrzebują zaawansowanej analityki do śledzenia interakcji z klientami i dostarczania praktycznych informacji w celu poprawy strategii zaangażowania?',
        explanation: 'Zaawansowana analityka umożliwia głębsze zrozumienie interakcji z klientami i ich wpływu na biznes. Dostarcza praktycznych wskazówek do optymalizacji strategii komunikacji i budowania lepszych relacji z klientami.',
        type: 'yesNoCount'
      },
      {
        id: 'customer_journey',
        text: 'Czy użytkownicy będą musieli tworzyć spersonalizowane podróże klientów w wielu punktach kontaktu, w tym w wiadomościach e-mail, mediach społecznościowych i kanałach internetowych?',
        explanation: 'Personalizacja podróży klienta pozwala na tworzenie spójnych doświadczeń w różnych kanałach komunikacji. Umożliwia to budowanie silniejszych relacji z klientami i zwiększanie ich zaangażowania.',
        type: 'yesNoCount'
      },
      {
        id: 'engagement_measurement',
        text: 'Czy użytkownicy potrzebują funkcji do pomiaru skuteczności inicjatyw zaangażowania klientów za pomocą pulpitów nawigacyjnych i raportów?',
        explanation: 'Pomiar skuteczności działań pozwala na ocenę efektywności strategii zaangażowania klientów. Dzięki pulpitom nawigacyjnym i raportom można szybko identyfikować obszary wymagające poprawy i podejmować odpowiednie działania.',
        type: 'yesNoCount'
      }
    ]
  },
  {
    id: 8,
    name: 'Dynamics 365 Commerce',
    description: 'Zapewnij klientom i partnerom prosty, spójny i dopasowany do ich potrzeb proces zakupowy, który gwarantuje pozytywne doświadczenia na każdym kroku.',
    basePrice: 180,
    imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Commerce?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain',
    questions: [
      {
        id: 'price_management',
        text: 'Czy użytkownicy powinni konfigurować i zarządzać cenami, rabatami i promocjami w różnych kanałach?',
        explanation: 'Dotyczy zarządzania strategiami cenowymi i promocyjnymi w różnych kanałach sprzedaży.',
        type: 'yesNoCount'
      },
      {
        id: 'catalog_management',
        text: 'Czy są odpowiedzialni za konfigurowanie i utrzymywanie katalogów produktów?',
        explanation: 'Obejmuje tworzenie i zarządzanie katalogami produktów w systemie.',
        type: 'yesNoCount'
      },
      {
        id: 'store_configuration',
        text: 'Czy użytkownicy zarządzają konfiguracjami sklepów, w tym rejestrami, metodami płatności i przydziałami pracowników?',
        explanation: 'Dotyczy konfiguracji i zarządzania ustawieniami sklepów stacjonarnych.',
        type: 'yesNoCount'
      },
      {
        id: 'sales_analysis',
        text: 'Czy ich zadaniem jest analizowanie wyników sprzedaży i operacyjnych wskaźników KPI?',
        explanation: 'Obejmuje analizę danych sprzedażowych i kluczowych wskaźników efektywności.',
        type: 'yesNoCount'
      },
      {
        id: 'inventory_transfers',
        text: 'Czy będą obsługiwać transfery zapasów między sklepami lub magazynami?',
        explanation: 'Dotyczy zarządzania przepływem towarów między różnymi lokalizacjami.',
        type: 'yesNoCount'
      },
      {
        id: 'omnichannel_fulfillment',
        text: 'Czy muszą skonfigurować wielokanałowe procesy realizacji zamówień, takie jak „kliknij i odbierz"?',
        explanation: 'Obejmuje konfigurację i zarządzanie różnymi metodami realizacji zamówień.',
        type: 'yesNoCount'
      },
      {
        id: 'loyalty_management',
        text: 'Czy są odpowiedzialni za zarządzanie programami lojalnościowymi i strategiami angażowania klientów?',
        explanation: 'Dotyczy zarządzania programami lojalnościowymi i relacjami z klientami.',
        type: 'yesNoCount'
      },
      {
        id: 'ecommerce_config',
        text: 'Czy będą nadzorować konfiguracje sklepu internetowego, w tym zawartość i projekt strony internetowej?',
        explanation: 'Obejmuje zarządzanie sklepem internetowym i jego treścią.',
        type: 'yesNoCount'
      },
      {
        id: 'fraud_detection',
        text: 'Czy potrzebują dostępu do narzędzi do wykrywania oszustw i uzgadniania płatności?',
        explanation: 'Dotyczy narzędzi bezpieczeństwa i zarządzania płatnościami.',
        type: 'yesNoCount'
      },
      {
        id: 'third_party_integration',
        text: 'Czy zarządzają integracjami stron trzecich, takimi jak bramki płatności lub usługi dostawy?',
        explanation: 'Obejmuje zarządzanie integracjami z zewnętrznymi systemami i usługami.',
        type: 'yesNoCount'
      },
      {
        id: 'pos_devices',
        text: 'Czy współdzielone urządzenia będą wykorzystywane do transakcji w punktach sprzedaży (POS) przez wielu pracowników?',
        explanation: 'Dotyczy współdzielonych urządzeń POS używanych przez różnych pracowników.',
        type: 'yesNoCount'
      },
      {
        id: 'inventory_scanning',
        text: 'Czy urządzenia te są wykorzystywane do liczenia zapasów, skanowania lub wyszukiwania produktów?',
        explanation: 'Obejmuje wykorzystanie urządzeń do zarządzania i kontroli zapasów.',
        type: 'yesNoCount'
      },
      {
        id: 'customer_kiosks',
        text: 'Czy współdzielone kioski umożliwią klientom składanie zamówień lub sprawdzanie dostępności produktów?',
        explanation: 'Dotyczy kiosków samoobsługowych dla klientów.',
        type: 'yesNoCount'
      },
      {
        id: 'returns_management',
        text: 'Czy użytkownicy potrzebują wspólnego systemu do zarządzania zwrotami i refundacjami?',
        explanation: 'Obejmuje obsługę zwrotów i refundacji w systemie.',
        type: 'yesNoCount'
      },
      {
        id: 'retail_shift_management',
        text: 'Czy pracownicy używają współdzielonych kiosków do rejestrowania wejść i wyjść ze zmian związanych z działalnością detaliczną?',
        explanation: 'Dotyczy zarządzania zmianami pracowników w handlu detalicznym.',
        type: 'yesNoCount'
      },
      {
        id: 'order_fulfillment',
        text: 'Czy urządzenie będzie używane do realizacji i pakowania zamówień online w sklepach?',
        explanation: 'Obejmuje realizację zamówień internetowych w sklepach stacjonarnych.',
        type: 'yesNoCount'
      },
      {
        id: 'price_checking',
        text: 'Czy użytkownicy uzyskują dostęp do współdzielonych systemów w celu sprawdzania cen i drukowania metek?',
        explanation: 'Dotyczy systemów do sprawdzania cen i zarządzania metkami.',
        type: 'yesNoCount'
      },
      {
        id: 'store_reporting',
        text: 'Czy urządzenia muszą wyświetlać raporty na poziomie sklepu lub pulpity nawigacyjne do wspólnego użytku?',
        explanation: 'Obejmuje dostęp do raportów i analiz na poziomie sklepu.',
        type: 'yesNoCount'
      },
      {
        id: 'shelf_labels',
        text: 'Czy są one używane do monitorowania i aktualizowania etykiet półkowych lub oznakowania?',
        explanation: 'Dotyczy zarządzania oznakowaniem i etykietami w sklepie.',
        type: 'yesNoCount'
      },
      {
        id: 'loyalty_registration',
        text: 'Czy współdzielone urządzenia będą obsługiwać zadania angażujące klientów, takie jak rejestracja w programach lojalnościowych?',
        explanation: 'Obejmuje obsługę programów lojalnościowych i rejestrację klientów.',
        type: 'yesNoCount'
      },
      {
        id: 'standard_commerce_users',
        text: 'Ilu użytkownikom modułu Commerce wystarczą poniższe funkcje (1):',
        explanation: `1. Przetwarzanie transakcji sprzedażowych i zarządzanie operacjami punktów sprzedaży (POS).
2. Wykonywanie podstawowych aktualizacji zapasów, takich jak przyjęcia towarów lub korekty stanów magazynowych.
3. Obsługa zwrotów, wymian i refundacji produktów.
4. Zarządzanie zamówieniami klientów i wsparcie realizacji zamówień wielokanałowych (np. kompletowanie zamówień typu "click-and-collect").
5. Przeglądanie i regulowanie kas fiskalnych lub transakcji płatniczych.
6. Realizacja działań związanych z uzupełnianiem zapasów, takich jak składanie zapotrzebowań lub uzupełnianie towarów.
7. Aktualizacja cen produktów i promocji na poziomie sklepu.
8. Tworzenie raportów końca dnia dotyczących sprzedaży i zapasów.
9. Weryfikacja i audyt paragonów sprzedaży oraz wpłat gotówkowych.
10. Obsługa zapytań klientów dotyczących dostępności produktów i cen.`,
        type: 'yesNoCount'
      },
      {
        id: 'basic_commerce_users',
        text: 'Ilu użytkownikom modułu Commerce wystarczą poniższe funkcje (2):',
        explanation: `1. Przegląd wyników sprzedaży sklepu i poziomów zapasów.
2. Zatwierdzanie zmian cen lub kampanii promocyjnych inicjowanych przez personel sklepu.
3. Dostęp do współdzielonych raportów i pulpitów nawigacyjnych związanych z handlem detalicznym.
4. Przekazywanie aktualizacji dotyczących dostępności produktów lub uzupełniania zapasów.
5. Przeglądanie i zatwierdzanie przepływów pracy związanych z zamówieniami klientów.
6. Składanie kart czasu pracy lub aktualizacji danych osobowych w systemie.
7.	Wsparcie w zarządzaniu procedurami otwierania i zamykania sklepu.
8.	Przeglądanie profili klientów oraz statusu programów lojalnościowych w celach referencyjnych.
9.	Dostęp do standardowych procedur operacyjnych lub dokumentów polityki sklepu.
10.	Wprowadzanie prostych danych, takich jak rejestrowanie rozbieżności w zapasach.`,
        type: 'yesNoCount'
      }
    ]
  },
  {
    id: 9,
    name: 'Dynamics 365 Human Resources',
    description: 'Zbuduj miejsce pracy, które wspiera rozwój ludzi i napędza sukces całej organizacji.',
    basePrice: 120,
    imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Dynamics-365-Human-Resources?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=24&hei=24&qlt=100&fit=constrain',
    questions: [
      {
        id: 'hr_1',
        text: 'Do you need advanced talent analytics?',
        explanation: 'Talent analytics provides insights into workforce trends, helping optimize recruitment, retention, and employee development strategies.',
        type: 'yesNoCount'
      },
      {
        id: 'hr_2',
        text: 'Do you require AI-powered performance prediction?',
        explanation: 'AI performance prediction helps identify high-potential employees and provides early warnings about potential performance issues.',
        type: 'yesNoCount'
      },
      {
        id: 'hr_admin_functions',
        text: 'Ilu użytkownikom modułu Human Resources wystarczą poniższe funkcje (1):',
        explanation: `1. Zarządzanie ewidencją pracowników, w tym informacjami osobowymi i historią zatrudnienia.
2. Konfiguracja i zarządzanie politykami dotyczącymi urlopów i nieobecności.
3. Obsługa konfiguracji i administracji świadczeń pracowniczych.
4. Zarządzanie i śledzenie ocen pracowniczych oraz wyznaczania celów.
5. Konfiguracja i zarządzanie strukturami organizacyjnymi, w tym działami i stanowiskami.
6. Zarządzanie zgodnością i raportowaniem regulacyjnym w obszarze HR.
7. Śledzenie certyfikacji i rekordów szkoleniowych pracowników.
8. Tworzenie i utrzymanie przepływów pracy HR, takich jak onboarding i offboarding.
9. Generowanie raportów i analiz związanych z HR.
10. Integracja z systemami płacowymi i innymi zewnętrznymi narzędziami HR.`,
        type: 'yesNoCount'
      },
      {
        id: 'hr_employee_functions',
        text: 'Ilu użytkownikom modułu Human Resources wystarczą poniższe funkcje (2):',
        explanation: `1. Przeglądanie danych HR osobistych, takich jak odcinki wypłat czy świadczenia.
2. Składanie wniosków urlopowych i aktualizacja dostępności.
3. Dostęp do celów wydajnościowych i składanie samoocen.
4. Aktualizacja danych kontaktowych i informacji bankowych.
5. Zapisywanie się na programy szkoleniowe i przegląd przypisanych certyfikacji.
6. Dostęp do współdzielonych dokumentów HR, takich jak polityki czy podręczniki.
7. Składanie wniosków o zwrot wydatków i roszczeń.
8. Udział w programach zaangażowania pracowników, takich jak ankiety.
9. Rejestrowanie incydentów, takich jak zgłoszenia dotyczące bezpieczeństwa w miejscu pracy.
10. Śledzenie i zarządzanie swoimi harmonogramami zmian.`,
        type: 'yesNoCount'
      },
      {
        id: 'hr_manager_functions',
        text: 'Ilu użytkownikom modułu Human Resources wystarczą poniższe funkcje (3):',
        explanation: `1. Aktualizacja danych osobowych pracowników, takich jak dane kontaktowe czy numery kont bankowych.
2. Przegląd odcinków wypłat, świadczeń i sald urlopowych.
3. Składanie wniosków o urlop lub zgłoszenia nieobecności przez pracowników.
4. Przegląd i zatwierdzanie wniosków urlopowych przez menedżerów zespołów.
5. Monitorowanie i dostosowywanie harmonogramów dla bezpośrednich podwładnych przez menedżerów.
6. Zapisywanie się na programy szkoleniowe lub certyfikacyjne przez pracowników.
7. Przegląd celów wydajnościowych i realizowanie ocen pracowniczych przez menedżerów.
8. Udział pracowników w ankietach zaangażowania i przekazywanie opinii do działu HR.
9. Rejestrowanie incydentów w miejscu pracy, takich jak zgłoszenia dotyczące bezpieczeństwa.
10. Śledzenie obecności i trendów urlopowych zespołu przez menedżerów.`,
        type: 'yesNoCount'
      },
      {
        id: 'hr_shared_devices',
        text: 'Czy w organizacji będą potrzebne urządzenia współdzielone do realizacji poniższych zadań związanych z HR? Ile taki urządzeń będzie koniecznych.',
        explanation: `1. Rejestrowanie obecności lub czasu pracy przez pracowników za pomocą urządzenia.
2. Składanie wniosków urlopowych lub zgłoszeń nieobecności za pomocą współdzielonego urządzenia.
3. Wyświetlanie pulpitów nawigacyjnych HR lub ogłoszeń firmowych na urządzeniu.
4. Zapisywanie się na programy szkoleniowe i śledzenie postępów przez pracowników.
5. Dostęp i aktualizacja danych osobowych, takich jak adresy lub konta bankowe, za pomocą urządzenia.
6. Drukowanie dokumentów HR, takich jak odcinki wypłat, formularze podatkowe czy umowy, za pomocą urządzenia.
7. Użycie urządzenia podczas onboardingu do przesyłania wymaganych dokumentów przez pracowników.
8. Rejestrowanie incydentów w miejscu pracy lub zgłaszanie obaw dotyczących bezpieczeństwa za pomocą urządzenia.
9. Sprawdzanie harmonogramów zmian lub składanie kart czasu pracy za pomocą współdzielonego urządzenia.
10. Wsparcie działań HR w przestrzeniach wspólnych, takich jak kioski czy terminale współdzielone.`,
        type: 'yesNoCount'
      }
    ]
  }
];