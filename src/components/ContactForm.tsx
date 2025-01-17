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

interface ContactFormProps {
  moduleSelections: ModuleSelection[];
  onClose: () => void;
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

export const ContactForm: React.FC<ContactFormProps> = ({ moduleSelections, onClose }) => {
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

    switch (field) {
      case 'email':
        return !validateBusinessEmail(value as string) ? 'Nieprawidłowy adres email' : undefined;
      case 'phone':
        return !validatePolishPhone(value as string) ? 'Nieprawidłowy numer telefonu' : undefined;
      case 'nip':
        return !validateNIP(value as string) ? 'Nieprawidłowy NIP' : undefined;
      default:
        return undefined;
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    const error = validateField(field, value);
    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
  };

  const validateAllFields = (): Record<keyof FormData, string | undefined> => {
    const newErrors: Record<keyof FormData, string | undefined> = {
      companyName: undefined,
      nip: undefined,
      employees: undefined,
      industry: undefined,
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phone: undefined,
      position: undefined,
      requirements: undefined,
      privacyAccepted: undefined,
      marketingAccepted: undefined
    };

    (Object.keys(formData) as Array<keyof FormData>).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Record<keyof FormData, string | undefined> = {
      ...validateAllFields(),
    };

    // Check if there are any errors
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
        totalPrice: 0 // calculateTotalPrice() // This function is not defined in the provided code
      });

      setIsSuccess(true);
      toast.success('Formularz został wysłany pomyślnie!');
      
      // Redirect after 5 seconds
      setTimeout(() => {
        window.location.href = '/';
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBlur = (field: keyof FormData) => {
    const error = validateField(field, formData[field]);
    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-[#323130] mb-4">
              Dziękujemy za wypełnienie formularza
            </h2>
            <p className="text-[#605e5c] text-lg">
              Nasz ekspert przygotuje w ciągu 24 godzin kalkulację oraz wyśle na wskazany adres email. W przypadku dodatkowych pytań, będzie kontaktował się na podany numer telefonu.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Formularz kalkulacji</h2>
          <p className="text-gray-600">Wypełnij poniższy formularz, aby otrzymać szczegółową wycenę</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Company Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Informacje o firmie</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nazwa firmy *
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  onBlur={() => handleBlur('companyName')}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.companyName ? 'border-red-300 bg-red-50' : 'border-gray-200'
                  }`}
                  required
                />
                {errors.companyName && (
                  <p className="mt-2 text-sm text-red-600">{errors.companyName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  NIP *
                </label>
                <input
                  type="text"
                  value={formData.nip}
                  onChange={(e) => handleInputChange('nip', formatNIP(e.target.value))}
                  onBlur={() => handleBlur('nip')}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.nip ? 'border-red-300 bg-red-50' : 'border-gray-200'
                  }`}
                  required
                />
                {errors.nip && (
                  <p className="mt-2 text-sm text-red-600">{errors.nip}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Liczba pracowników *
                </label>
                <select
                  value={formData.employees}
                  onChange={(e) => handleInputChange('employees', e.target.value)}
                  onBlur={() => handleBlur('employees')}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.employees ? 'border-red-300 bg-red-50' : 'border-gray-200'
                  }`}
                  required
                >
                  <option value="">Wybierz...</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="500+">500+</option>
                </select>
                {errors.employees && (
                  <p className="mt-2 text-sm text-red-600">{errors.employees}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Branża *
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  onBlur={() => handleBlur('industry')}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.industry ? 'border-red-300 bg-red-50' : 'border-gray-200'
                  }`}
                  required
                >
                  <option value="">Wybierz...</option>
                  <option value="Produkcja">Produkcja</option>
                  <option value="Handel">Handel</option>
                  <option value="Usługi">Usługi</option>
                  <option value="Budownictwo">Budownictwo</option>
                  <option value="Transport i logistyka">Transport i logistyka</option>
                  <option value="IT">IT</option>
                  <option value="Finanse i ubezpieczenia">Finanse i ubezpieczenia</option>
                  <option value="Ochrona zdrowia">Ochrona zdrowia</option>
                  <option value="Edukacja">Edukacja</option>
                  <option value="Inne">Inne</option>
                </select>
                {errors.industry && (
                  <p className="mt-2 text-sm text-red-600">{errors.industry}</p>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Dane kontaktowe</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Imię *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  onBlur={() => handleBlur('firstName')}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-200'
                  }`}
                  required
                />
                {errors.firstName && (
                  <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>
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
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-200'
                  }`}
                  required
                />
                {errors.lastName && (
                  <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>
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
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.position ? 'border-red-300 bg-red-50' : 'border-gray-200'
                  }`}
                  required
                />
                {errors.position && (
                  <p className="mt-2 text-sm text-red-600">{errors.position}</p>
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
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
                  }`}
                  required
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', formatPolishPhone(e.target.value))}
                  onBlur={() => handleBlur('phone')}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200'
                  }`}
                  required
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          {/* Additional Requirements */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Dodatkowe informacje</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dodatkowe wymagania
              </label>
              <textarea
                value={formData.requirements}
                onChange={(e) => handleInputChange('requirements', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>
          </div>

          {/* Consent Checkboxes */}
          <div className="space-y-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.privacyAccepted}
                onChange={(e) => handleInputChange('privacyAccepted', e.target.checked)}
                className="ms-checkbox mt-1"
              />
              <span className="text-sm text-[#323130]">
                Akceptuję politykę prywatności *
              </span>
            </label>
            {errors.privacyAccepted && (
              <p className="text-sm text-red-500 mt-1">{errors.privacyAccepted}</p>
            )}

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.marketingAccepted}
                onChange={(e) => handleInputChange('marketingAccepted', e.target.checked)}
                className="ms-checkbox mt-1"
              />
              <span className="text-sm text-[#323130]">
                Wyrażam zgodę na otrzymywanie informacji handlowych na wskazany adres email *
              </span>
            </label>
            {errors.marketingAccepted && (
              <p className="text-sm text-red-500 mt-1">{errors.marketingAccepted}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Anuluj
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
            </button>
          </div>
        </form>
      </div>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
            borderRadius: '12px',
          },
        }}
      />
    </div>
  );
};
