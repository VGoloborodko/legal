import type { LeadFormErrors, LeadFormValues } from './lead-form.types';

const PHONE_REGEX = /^\+?[\d\s\-()]{10,20}$/;
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

  if (!values.phone.trim()) {
    errors.phone = 'Укажите телефон.';
  } else if (!PHONE_REGEX.test(values.phone.trim())) {
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
