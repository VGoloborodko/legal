import type { LeadFormState, LeadFormValues } from './lead-form.types';

export const DEFAULT_SUBMIT_LABEL = 'Оставить заявку';

export const SUCCESS_MESSAGE_TITLE = 'Заявка отправлена';
export const SUCCESS_MESSAGE_DESC = 'Мы свяжемся с вами в ближайшее время';

export const ERROR_MESSAGE = 'Ошибка отправки. Попробуйте позже.';

export const INITIAL_FORM_STATE: LeadFormState = 'idle';

export const INITIAL_FORM_VALUES: LeadFormValues = {
  name: '',
  phone: '',
  email: '',
  comment: '',
  consent: false,
};