import * as XLSX from 'xlsx';
import { FormSubmission } from '../components/AdminDashboard';
import { ModuleSelection } from '../types';
import { modules } from '../data/modules';

interface ExportSubmissionData extends FormSubmission {
  selected_modules: ModuleSelection[];
}

export const generateExcelFile = (submission: ExportSubmissionData) => {
  // Create workbook and worksheet
  const wb = XLSX.utils.book_new();
  
  // Contact Information Sheet
  const contactData = [
    ['Data zgłoszenia', new Date(submission.created_at).toLocaleString('pl-PL')],
    ['Informacje o firmie', ''],
    ['Nazwa firmy', submission.company_name],
    ['NIP', submission.nip],
    ['Liczba pracowników', submission.employees],
    ['Branża', submission.industry],
    ['', ''],
    ['Dane kontaktowe', ''],
    ['Imię', submission.first_name],
    ['Nazwisko', submission.last_name],
    ['Stanowisko', submission.position],
    ['Email', submission.email],
    ['Telefon', submission.phone],
    ['', ''],
    ['Dodatkowe informacje', ''],
    ['Dodatkowe wymagania', submission.requirements],
    ['Akceptacja polityki prywatności', submission.privacy_accepted ? 'Tak' : 'Nie'],
    ['Zgody marketingowe', submission.marketing_accepted ? 'Tak' : 'Nie'],
  ];

  const contactWs = XLSX.utils.aoa_to_sheet(contactData);
  XLSX.utils.book_append_sheet(wb, contactWs, 'Dane kontaktowe');

  // Modules Sheet
  const moduleRows: any[][] = [
    ['Moduł', 'Liczba użytkowników', 'Pytanie', 'Odpowiedź', 'Liczba']
  ];

  submission.selected_modules.forEach(moduleSelection => {
    const module = modules.find(m => m.id === moduleSelection.moduleId);
    if (!module) return;

    // Add module base info
    moduleRows.push([
      module.name,
      moduleSelection.users,
      '', '', ''
    ]);

    // Add answers for each question
    module.questions.forEach(question => {
      const answer = moduleSelection.answers[question.id];
      if (answer) {
        moduleRows.push([
          '',
          '',
          question.text,
          answer.response,
          answer.count || ''
        ]);
      }
    });

    // Add shared users if any
    if (moduleSelection.sharedUsers && moduleSelection.sharedUsers.length > 0) {
      moduleRows.push(['', '', 'Współdzieleni użytkownicy:', '', '']);
      moduleSelection.sharedUsers.forEach(shared => {
        const sharedModule = modules.find(m => m.id === shared.targetModuleId);
        if (sharedModule) {
          moduleRows.push([
            '',
            '',
            `Współdzielenie z ${sharedModule.name}`,
            shared.count,
            ''
          ]);
        }
      });
    }

    // Add empty row between modules
    moduleRows.push(['', '', '', '', '']);
  });

  const moduleWs = XLSX.utils.aoa_to_sheet(moduleRows);
  XLSX.utils.book_append_sheet(wb, moduleWs, 'Wybrane moduły');

  // Generate Excel file
  const fileName = `Kalkulacja_${submission.company_name}_${new Date(submission.created_at).toLocaleDateString('pl-PL').replace(/\./g, '-')}.xlsx`;
  XLSX.writeFile(wb, fileName);
};
