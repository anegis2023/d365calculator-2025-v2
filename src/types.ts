export type QuestionResponse = string;

export interface QuestionAnswer {
  response: QuestionResponse;
  count?: number;
}

export interface Question {
  id: string;
  text: string;
  explanation: string;
  type: 'yesNoCount';
  required?: boolean;
}

export interface Module {
  id: number;
  name: string;
  imageUrl?: string;
  description: string;
  questions: Question[];
}

export interface ModuleSelection {
  moduleId: number;
  users: number;
  answers?: Record<string, QuestionAnswer>;
  sharedUsers?: { targetModuleId: number; count: number }[];
}

export interface FormSubmission {
  id: string;
  company_name: string;
  nip: string;
  employees: string;
  industry: string;
  first_name: string;
  last_name: string;
  position: string;
  email: string;
  phone: string;
  requirements: string;
  privacy_accepted: boolean;
  marketing_accepted: boolean;
  created_at: string;
  selected_modules: ModuleSelection[];
}
