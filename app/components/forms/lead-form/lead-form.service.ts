import type { LeadFormPayload } from './lead-form.types';

type SubmitLeadFormResponse = {
  ok: boolean;
  message?: string;
};

export async function submitLeadForm(
  payload: LeadFormPayload,
): Promise<SubmitLeadFormResponse> {
  const response = await fetch('/api/lead', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  let data: SubmitLeadFormResponse | null = null;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.message || 'Не удалось отправить форму.');
  }

  return data ?? { ok: true };
}