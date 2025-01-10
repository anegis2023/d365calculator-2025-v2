export type QuestionResponse = 'Tak' | 'Nie' | 'Nie wiem';

export interface QuestionAnswer {
  response: QuestionResponse;
  count?: number;
}

export interface Module {
  id: number;
  name: string;
  description: string;
  basePrice: number;
  imageUrl?: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  explanation: string;
  type: 'yesNoCount';
  answer?: QuestionAnswer;
}

export interface ModuleSelection {
  moduleId: number;
  users: number;
  answers: Record<string, QuestionAnswer | undefined>;
  sharedUsers: SharedUsers[];
}

export interface SharedUsers {
  targetModuleId: number;
  count: number;
}