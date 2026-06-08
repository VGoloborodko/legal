export type LeadFormState = 'idle' | 'submitting' | 'success' | 'error';

export type LeadFormValues = {
  name: string;
  phone: string;
  email: string;
  comment: string;
  consent: boolean;
};

export type LeadFormPayload = {
  name: string;
  phone: string;
  email: string | null;
  comment: string | null;
  consent: boolean;
  service: string;
  formId: string;
  blockId: string;
  pageUrl: string;
  pageTitle: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  createdAt: string;
};

export type LeadFormProps = {
  service: string;
  formId: string;
  blockId: string;
  title?: string;
  description?: string;
  submitLabel?: string;
  showEmail?: boolean;
  showComment?: boolean;
  className?: string;
};

export type LeadFormErrors = Partial<Record<keyof LeadFormValues, string>>;