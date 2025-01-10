import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { emailConfig } from '../config/email';
import {
  validateBusinessEmail,
  validateNIP,
  validatePolishPhone,
  formatPolishPhone,
  formatNIP,
} from '../utils/validators';
import { ModuleSelection } from '../types';
import { submitForm } from '../services/formSubmission';

interface StandaloneContactFormProps {
  moduleSelections: ModuleSelection[];
}

interface FormData {
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
}

const initialFormData: FormData = {
  companyName: '',
  nip: '',
  employees: '',
  industry: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  position: '',
  requirements: '',
  privacyAccepted: false,
  marketingAccepted: false,
};

export const StandaloneContactForm: React.FC<StandaloneContactFormProps> = ({ moduleSelections }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<keyof FormData, string | undefined>>({} as Record<keyof FormData, string | undefined>);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (field: keyof FormData, value: string | boolean): string | undefined => {
    if (field === 'privacyAccepted' || field === 'marketingAccepted') {
      return value === false ? 'To pole jest wymagane' : undefined;
    }

    if (typeof value === 'string' && !value.trim()) {
      switch (field) {
        case 'companyName':
          return 'Nazwa firmy jest wymagana';
        case 'email':
          return 'Email jest wymagany';
        case 'phone':
          return 'Telefon jest wymagany';
        case 'nip':
          return 'NIP jest wymagany';
        case 'firstName':
          return 'Imię jest wymagane';
        case 'lastName':
          return 'Nazwisko jest wymagane';
        case 'position':
          return 'Stanowisko jest wymagane';
        case 'employees':
          return 'Liczba pracowników jest wymagana';
        case 'industry':
          return 'Branża jest wymagana';
        default:
          return undefined;
      }
    }

    if (field === 'email' && !validateBusinessEmail(value as string)) {
      return 'Proszę podać poprawny adres email firmowy';
    }

    if (field === 'nip' && !validateNIP(value as string)) {
      return 'Proszę podać poprawny numer NIP';
    }

    if (field === 'phone' && !validatePolishPhone(value as string)) {
      return 'Proszę podać poprawny numer telefonu';
    }

    return undefined;
  };

  const validateAllFields = (): Record<keyof FormData, string | undefined> => {
    const newErrors: Record<keyof FormData, string | undefined> = {} as Record<
      keyof FormData,
      string | undefined
    >;

    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      newErrors[field] = validateField(field, formData[field]);
    });

    return newErrors;
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    let processedValue = value;
    if (field === 'phone' && typeof value === 'string') {
      processedValue = formatPolishPhone(value);
    }
    if (field === 'nip' && typeof value === 'string') {
      processedValue = formatNIP(value);
    }

    setFormData((prev) => ({
      ...prev,
      [field]: processedValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  };

  const handleBlur = (field: keyof FormData) => {
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, formData[field]),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateAllFields();
    const hasErrors = Object.values(newErrors).some((error) => error !== undefined);
    
    if (hasErrors) {
      setErrors(newErrors);
      toast.error('Proszę poprawić błędy w formularzu');
      return;
    }

    try {
      setIsSubmitting(true);

      await submitForm({
        ...formData,
        moduleSelections,
        totalPrice: 0
      });

      setIsSuccess(true);
      toast.success('Formularz został wysłany pomyślnie');
      setFormData(initialFormData);
    } catch (error) {
      toast.error('Wystąpił błąd podczas wysyłania formularza');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Toaster />
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Dane firmy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nazwa firmy *
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                onBlur={() => handleBlur('companyName')}
                className={`w-full p-2 border rounded-md ${
                  errors.companyName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.companyName && (
                <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                NIP *
              </label>
              <input
                type="text"
                value={formData.nip}
                onChange={(e) => handleInputChange('nip', e.target.value)}
                onBlur={() => handleBlur('nip')}
                className={`w-full p-2 border rounded-md ${
                  errors.nip ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="000-000-00-00"
              />
              {errors.nip && (
                <p className="mt-1 text-sm text-red-500">{errors.nip}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Liczba pracowników *
              </label>
              <input
                type="text"
                value={formData.employees}
                onChange={(e) => handleInputChange('employees', e.target.value)}
                onBlur={() => handleBlur('employees')}
                className={`w-full p-2 border rounded-md ${
                  errors.employees ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.employees && (
                <p className="mt-1 text-sm text-red-500">{errors.employees}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Branża *
              </label>
              <input
                type="text"
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                onBlur={() => handleBlur('industry')}
                className={`w-full p-2 border rounded-md ${
                  errors.industry ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.industry && (
                <p className="mt-1 text-sm text-red-500">{errors.industry}</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Dane kontaktowe</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Imię *
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                onBlur={() => handleBlur('firstName')}
                className={`w-full p-2 border rounded-md ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nazwisko *
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                onBlur={() => handleBlur('lastName')}
                className={`w-full p-2 border rounded-md ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email służbowy *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                className={`w-full p-2 border rounded-md ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefon *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                onBlur={() => handleBlur('phone')}
                className={`w-full p-2 border rounded-md ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="000-000-000"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stanowisko *
              </label>
              <input
                type="text"
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
                onBlur={() => handleBlur('position')}
                className={`w-full p-2 border rounded-md ${
                  errors.position ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.position && (
                <p className="mt-1 text-sm text-red-500">{errors.position}</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dodatkowe wymagania
          </label>
          <textarea
            value={formData.requirements}
            onChange={(e) => handleInputChange('requirements', e.target.value)}
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-4">
          <div>
            <label className="flex items-start space-x-2">
              <input
                type="checkbox"
                checked={formData.privacyAccepted}
                onChange={(e) => handleInputChange('privacyAccepted', e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm text-gray-700">
                * Wyrażam zgodę na przetwarzanie moich danych osobowych przez ANEGIS Sp. z o.o. w celu przedstawienia oferty handlowej.
              </span>
            </label>
            {errors.privacyAccepted && (
              <p className="mt-1 text-sm text-red-500">{errors.privacyAccepted}</p>
            )}
          </div>

          <div>
            <label className="flex items-start space-x-2">
              <input
                type="checkbox"
                checked={formData.marketingAccepted}
                onChange={(e) => handleInputChange('marketingAccepted', e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm text-gray-700">
                * Wyrażam zgodę na otrzymywanie informacji handlowych drogą elektroniczną.
              </span>
            </label>
            {errors.marketingAccepted && (
              <p className="mt-1 text-sm text-red-500">{errors.marketingAccepted}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 bg-[#0078d4] text-white rounded-md hover:bg-[#106ebe] ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
          </button>
        </div>
      </div>
    </form>
  );
};
