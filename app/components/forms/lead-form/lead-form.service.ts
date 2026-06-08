import type { LeadFormPayload } from './lead-form.types';

export async function submitLeadForm(payload: LeadFormPayload): Promise<void> {
  const response = await fetch('/api/lead', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Lead form request failed');
  }
}
