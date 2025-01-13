export interface Module {
  id: number;
  name: string;
  imageUrl?: string;
  description: string;
  questions: {
    id: string;
    text: string;
    type: 'text' | 'number';
    required?: boolean;
  }[];
}

export interface ModuleSelection {
  moduleId: number;
  users: number;
  answers?: Record<string, { response: string; count?: number }>;
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
