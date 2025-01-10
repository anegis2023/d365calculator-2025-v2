const BLOCKED_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'wp.pl',
  'o2.pl',
  'interia.pl',
  'onet.pl'
];

export const validateBusinessEmail = (email: string): boolean => {
  if (!email) return false;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;

  const domain = email.split('@')[1]?.toLowerCase();
  return domain ? !BLOCKED_DOMAINS.includes(domain) : false;
};

export const validateNIP = (nip: string): boolean => {
  const cleanNIP = nip.replace(/[^0-9]/g, '');
  
  if (cleanNIP.length !== 10) return false;

  const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
  let sum = 0;
  
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(cleanNIP[i]) * weights[i];
  }
  
  const checkDigit = sum % 11;
  return checkDigit !== 10 && checkDigit === parseInt(cleanNIP[9]);
};

export const validatePolishPhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const nationalNumber = cleanPhone.replace(/^(48)?/, '');
  return nationalNumber.length === 9 && /^[4-9]/.test(nationalNumber);
};

export const formatPolishPhone = (phone: string): string => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const nationalNumber = cleanPhone.replace(/^(48)?/, '').slice(0, 9);
  
  if (nationalNumber.length === 0) return '';
  if (nationalNumber.length <= 3) return nationalNumber;
  if (nationalNumber.length <= 6) return `${nationalNumber.slice(0, 3)} ${nationalNumber.slice(3)}`;
  return `${nationalNumber.slice(0, 3)} ${nationalNumber.slice(3, 6)} ${nationalNumber.slice(6)}`;
};

export const formatNIP = (nip: string): string => {
  const cleanNIP = nip.replace(/[^0-9]/g, '').slice(0, 10);
  
  if (cleanNIP.length <= 3) return cleanNIP;
  if (cleanNIP.length <= 6) return `${cleanNIP.slice(0, 3)}-${cleanNIP.slice(3)}`;
  if (cleanNIP.length <= 8) return `${cleanNIP.slice(0, 3)}-${cleanNIP.slice(3, 6)}-${cleanNIP.slice(6)}`;
  return `${cleanNIP.slice(0, 3)}-${cleanNIP.slice(3, 6)}-${cleanNIP.slice(6, 8)}-${cleanNIP.slice(8)}`;
};
