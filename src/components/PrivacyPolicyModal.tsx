import React from 'react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-4 my-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <div className="prose max-w-none text-gray-800">
          <h2 className="text-2xl font-bold mb-6">Polityka prywatności</h2>
          
          <p className="mb-4">
            Poufność Twoich informacji jest dla nas ważna. Anegis Sp. z o.o. przetwarza dane osobowe jedynie w minimalnym zakresie, 
            niezbędnym do realizacji celów, dla których są zbierane. Cele zbierania danych osobowych klientów są jasno określone, 
            mające oparcie w przepisach prawa.
          </p>

          <p className="mb-4">
            Możesz w każdej chwili zażądać informacji o zakresie przetwarzania danych osobowych oraz wycofać swoją zgodę na 
            przetwarzanie danych osobowych, bez podawania przyczyny.
          </p>

          <p className="mb-6">
            Korzystając z serwisu www.anegis.com wyrażasz zgodę na akceptację poniższych warunków przetwarzania danych osobowych.
          </p>

          <h3 className="text-xl font-bold mb-4">Administrator</h3>
          <p className="mb-6">
            Administratorem danych osobowych jest firma Anegis Sp. z o.o. (zwana dalej „Administratorem Danych Osobowych") 
            z siedzibą we Wrocławiu, ul. Powstańców Śląskich 17 bud. D, 53-332 Wrocław, wpisana do Krajowego Rejestru 
            Sądowego prowadzonego przez Sąd Rejonowy dla Wrocławia – Fabrycznej we Wrocławiu pod numerem KRS:0000472846, 
            NIP: 8971791899, REGON: 022207563, posiadająca numer NIP: 8971791899. W sprawach związanych z przetwarzaniem 
            danych osobowych prosimy o kontakt mailowy pod adresem: rodo@anegis.com
          </p>

          <h3 className="text-xl font-bold mb-4">Podstawa prawna przetwarzania danych osobowych</h3>
          <p className="mb-4">Administrator Danych Osobowych przetwarza dane osobowe na podstawie jednej z poniższych przesłanek:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Osoba, której dane dotyczą wyraziła zgodę na przetwarzanie swoich danych osobowych w jednym lub większej liczbie określonych celów.</li>
            <li>Przetwarzanie danych jest niezbędne do wykonywania umowy, której stroną jest osoba, której dane dotyczą, przed zawarciem umowy.</li>
            <li>Przetwarzanie danych jest niezbędne do wypełnienia obowiązku prawnego ciążącego na administratorze.</li>
            <li>Przetwarzanie danych jest niezbędne do celów wynikających z prawnie uzasadnionych interesów realizowanych przez administratora lub przez stronę trzecią.</li>
          </ul>

          <h3 className="text-xl font-bold mb-4">Podstawowe zasady przetwarzania danych</h3>
          <p className="mb-4">
            Administrator Danych Osobowych zabezpiecza Dane Osobowe przed ich udostępnieniem osobom nieupoważnionym, zabraniem przez osobę nieuprawnioną, 
            przetwarzaniem z naruszeniem Ustawy, nieautoryzowaną zmianą, utratą, uszkodzeniem lub zniszczeniem.
          </p>

          <p className="mb-4">
            Dane przetwarzane przez Administratora muszą być merytorycznie poprawne, co oznacza, że dane muszą odzwierciedlać stan faktyczny. 
            Jeżeli cel przetwarzania uległ zmianie, wymagane jest uzyskanie zgody na przetwarzanie danych od osoby, której dane są przetwarzane przez ADO.
          </p>

          <h3 className="text-xl font-bold mb-4">Cel i zakres przetwarzania danych osobowych</h3>
          <p className="mb-4">Anegis Sp. z o.o. przetwarza dane osobowe w celu:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Obsługi zamówień i realizacji usług.</li>
            <li>Realizacji procesu rekrutacji.</li>
          </ul>

          <p className="mb-4">Strona Anegis Sp. z o.o. realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Poprzez dobrowolnie wprowadzone w formularzach informacje.</li>
            <li>Poprzez zapisywanie w urządzeniach końcowych plików cookies (tzw. „ciasteczka")</li>
            <li>Poprzez gromadzenie logów serwera www przez operatora hostingowego Anegis Sp. z o.o. funkcjonującego pod adresem www.anegis.com</li>
          </ul>

          <h3 className="text-xl font-bold mb-4">Informacje w formularzach</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>W ramach strony zamieszczone są formularze zapytań, które umożliwiają użytkownikowi złożenie zapytania na oferowane przez Anegis Sp. z o.o. produkty i usługi.</li>
            <li>Strona internetowa zbiera informacje podane w formularzu dobrowolnie przez użytkownika.</li>
            <li>Szczegółowe informacje o przetwarzaniu danych osobowych zawartych w formularzu podane są pod formularzami.</li>
          </ul>

          <h3 className="text-xl font-bold mb-4">Informacje o plikach cookies</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Na stronie Anegis Sp. z o.o. stosowane są pliki cookies w celu zapisywania informacji na komputerze Użytkownika.</li>
            <li>Użytkownik może zarządzać plikami cookies wykorzystywanymi przez stronę internetową.</li>
            <li>Pliki cookies to pliki tekstowe przechowywane w przeglądarce internetowej Użytkownika.</li>
            <li>Istnieją dwa rodzaje plików cookies: „stałe" oraz „sesyjne".</li>
          </ul>

          <h3 className="text-xl font-bold mb-4">Obowiązek Informacyjny</h3>
          <p className="mb-4">
            Zgodnie z art. 12 ust. 1 oraz 13 ust. 1 i 2 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z 27.04.2026 r. 
            w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych 
            oraz uchylenia dyrektywy 95/46/WE (RODO), informujemy, że:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Administratorem Pani/Pana danych osobowych jest Anegis Sp. z o.o.</li>
            <li>Inspektorem Ochrony Danych Osobowych w Anegis Sp. z o.o. jest Magdalena Mistarz (rodo@anegis.com).</li>
            <li>Pani/Pana dane będziemy przechowywać przez 5 lat.</li>
            <li>Pani/Pana dane osobowe nie będą przekazywane do państwa trzeciego lub organizacji międzynarodowej.</li>
            <li>W oparciu o Pani/Pana dane osobowe Administrator nie będzie podejmował zautomatyzowanych decyzji, w tym decyzji będących wynikiem profilowania.</li>
          </ul>

          <div className="mt-8 border-t pt-4">
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Zamknij
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
