import { supabase } from '../lib/supabase';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email';
import { ModuleSelection } from '../types';
import { modules } from '../data/modules';

export interface FormSubmissionData {
  companyName: string;
  nip: string;
  employees: string;
  industry: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  requirements: string;
  privacyAccepted: boolean;
  marketingAccepted: boolean;
  moduleSelections: ModuleSelection[];
  totalPrice: number;
}

const formatModuleSelections = (moduleSelections: ModuleSelection[]) => {
  return moduleSelections.map(moduleSelection => {
    // Find the module data to get questions
    const moduleData = modules.find(m => m.id === moduleSelection.moduleId);
    if (!moduleData) return '';

    // Format answers with full question text
    const answers = Object.entries(moduleSelection.answers)
      .map(([questionId, answer]) => {
        if (!answer) return null;
        // Find the question text
        const question = moduleData.questions.find(q => q.id === questionId);
        if (!question) return null;
        
        // Special formatting for shared devices question
        if (questionId === 'hr_shared_devices') {
          return `Pytanie: ${question.text}\nLiczba urządzeń: ${answer.count}`;
        }
        
        return `Pytanie: ${question.text}\nOdpowiedź: ${answer.response}${answer.count ? `\nLiczba użytkowników: ${answer.count}` : ''}`;
      })
      .filter(Boolean)
      .join('\n\n');

    const sharedUsersInfo = moduleSelection.sharedUsers
      .map(su => {
        const targetModule = modules.find(m => m.id === su.targetModuleId);
        return `- Współdzielone z modułem ${targetModule ? targetModule.name : su.targetModuleId}: ${su.count} użytkowników`;
      })
      .join('\n');

    return `
Moduł: ${moduleData.name}
Liczba użytkowników: ${moduleSelection.users}
${answers ? `\nOdpowiedzi na pytania:\n${answers}` : ''}
${sharedUsersInfo ? `\nWspółdzieleni użytkownicy:\n${sharedUsersInfo}` : ''}
`;
  }).join('\n---\n');
};

export const submitForm = async (formData: FormSubmissionData) => {
  try {
    // Only save to database if it's not from the contact form (which doesn't have moduleSelections)
    if (formData.moduleSelections && formData.moduleSelections.length > 0) {
      const { data, error } = await supabase
        .from('form_submissions')
        .insert({
          company_name: formData.companyName,
          nip: formData.nip,
          employees: formData.employees,
          industry: formData.industry,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          requirements: formData.requirements,
          privacy_accepted: formData.privacyAccepted,
          marketing_accepted: formData.marketingAccepted,
          selected_modules: formData.moduleSelections,
          total_price: formData.totalPrice
        });

      if (error) throw error;
    }

    // For contact form, use template_9vcdzc4, for others use original template
    const adminTemplateId = !formData.moduleSelections || formData.moduleSelections.length === 0 
      ? 'template_9vcdzc4' 
      : emailConfig.templateId;

    const formattedModules = formData.moduleSelections ? formatModuleSelections(formData.moduleSelections) : '';
    
    // Admin notification email
    const templateParams = {
      to_name: 'Admin',
      company_name: formData.companyName,
      nip: formData.nip,
      employees: formData.employees,
      industry: formData.industry,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      position: formData.position,
      requirements: formData.requirements || '',
      selected_modules: formattedModules,
      total_users: formData.moduleSelections?.reduce((sum, m) => sum + m.users, 0) || 0,
      privacy_accepted: formData.privacyAccepted ? 'Tak' : 'Nie',
      marketing_accepted: formData.marketingAccepted ? 'Tak' : 'Nie',
      submission_date: new Date().toLocaleDateString('pl-PL')
    };

    // Send notification email to admin
    await emailjs.send(
      emailConfig.serviceId,
      adminTemplateId,
      templateParams,
      emailConfig.publicKey
    );

    // Send confirmation email to user
    const confirmationParams = {
      to_name: `${formData.firstName} ${formData.lastName}`,
      to_email: formData.email,
      company_name: formData.companyName,
      modules_summary: formattedModules,
      total_users: formData.moduleSelections?.reduce((sum, m) => sum + m.users, 0) || 0,
      total_price: formData.totalPrice.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' }),
      submission_date: new Date().toLocaleDateString('pl-PL'),
      contact_phone: formData.phone,
      contact_position: formData.position
    };

    await emailjs.send(
      emailConfig.serviceId,
      emailConfig.confirmationTemplateId,
      confirmationParams,
      emailConfig.publicKey
    );

    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};
