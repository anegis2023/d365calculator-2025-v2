export const emailConfig = {
  serviceId: import.meta.env.VITE_PUBLIC_EMAIL_SERVICE_ID || 'service_o9o6jqa', // Replace with your EmailJS service ID
  templateId: import.meta.env.VITE_PUBLIC_EMAIL_TEMPLATE_ID || 'template_7hpn0pp', // Replace with your EmailJS template ID
  confirmationTemplateId: import.meta.env.VITE_PUBLIC_EMAIL_CONFIRMATION_TEMPLATE_ID || 'template_2g2msuh', // Template ID for user confirmation email
  publicKey: import.meta.env.VITE_PUBLIC_EMAIL_PUBLIC_KEY || 'RS5oW73Ma2KPlJfJZ', // Replace with your EmailJS public key
};
