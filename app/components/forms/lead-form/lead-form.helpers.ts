import type { LeadFormPayload, LeadFormProps, LeadFormValues } from './lead-form.types';

function getSearchParam(name: string): string | null {
  if (typeof window === 'undefined') return null;

  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

export function getLeadFormMeta() {
  if (typeof window === 'undefined') {
    return {
      pageUrl: '',
      pageTitle: '',
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_content: null,
      utm_term: null,
      createdAt: new Date().toISOString(),
    };
  }

  return {
    pageUrl: window.location.href,
    pageTitle: document.title,
    utm_source: getSearchParam('utm_source'),
    utm_medium: getSearchParam('utm_medium'),
    utm_campaign: getSearchParam('utm_campaign'),
    utm_content: getSearchParam('utm_content'),
    utm_term: getSearchParam('utm_term'),
    createdAt: new Date().toISOString(),
  };
}

export function normalizeOptionalValue(value: string): string | null {
  const trimmed = value.trim();
  return trimmed ? trimmed : null;
}

export function normalizePhoneForSubmit(value: string): string {
  const digits = value.replace(/\D/g, '');

  if (!digits) return '';

  if (digits.length === 11 && digits.startsWith('8')) {
    return `+7${digits.slice(1)}`;
  }

  if (digits.length === 11 && digits.startsWith('7')) {
    return `+${digits}`;
  }

  if (digits.length === 10) {
    return `+7${digits}`;
  }

  return `+${digits}`;
}

type BuildLeadFormPayloadParams = {
  values: LeadFormValues;
  props: Pick<LeadFormProps, 'service' | 'formId' | 'blockId' | 'showEmail' | 'showComment'>;
};

export function buildLeadFormPayload({ values, props }: BuildLeadFormPayloadParams): LeadFormPayload {
  const meta = getLeadFormMeta();

  return {
    name: values.name.trim(),
    phone: normalizePhoneForSubmit(values.phone),
    email: props.showEmail ? normalizeOptionalValue(values.email) : null,
    comment: props.showComment ? normalizeOptionalValue(values.comment) : null,
    consent: values.consent,
    service: props.service,
    formId: props.formId,
    blockId: props.blockId,
    pageUrl: meta.pageUrl,
    pageTitle: meta.pageTitle,
    utm_source: meta.utm_source,
    utm_medium: meta.utm_medium,
    utm_campaign: meta.utm_campaign,
    utm_content: meta.utm_content,
    utm_term: meta.utm_term,
    createdAt: meta.createdAt,
  };
}
