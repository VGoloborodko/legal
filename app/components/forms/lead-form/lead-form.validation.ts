import type { LeadFormErrors, LeadFormValues } from './lead-form.types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ValidateLeadFormParams = {
  values: LeadFormValues;
  showEmail?: boolean;
};

export function validateLeadForm({ values, showEmail = false }: ValidateLeadFormParams): LeadFormErrors {
  const errors: LeadFormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Укажите имя.';
  }

  const phoneDigits = values.phone.replace(/\D/g, '');

  if (!phoneDigits) {
    errors.phone = 'Укажите телефон.';
  } else if (phoneDigits.length !== 11 || !phoneDigits.startsWith('7')) {
    errors.phone = 'Укажите корректный телефон.';
  }

  if (showEmail && values.email.trim() && !EMAIL_REGEX.test(values.email.trim())) {
    errors.email = 'Укажите корректный email.';
  }

  if (!values.consent) {
    errors.consent = 'Необходимо согласие на обработку персональных данных.';
  }

  return errors;
}

export function hasLeadFormErrors(errors: LeadFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
