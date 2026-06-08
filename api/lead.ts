type LeadFormPayload = {
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

function escapeHtml(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function buildTelegramMessage(payload: LeadFormPayload) {
  const lines = [
    '<b>Новая заявка с сайта</b>',
    '',
    `<b>Имя:</b> ${escapeHtml(payload.name)}`,
    `<b>Телефон:</b> ${escapeHtml(payload.phone)}`,
    `<b>Email:</b> ${escapeHtml(payload.email ?? '—')}`,
    `<b>Комментарий:</b> ${escapeHtml(payload.comment ?? '—')}`,
    '',
    `<b>Услуга:</b> ${escapeHtml(payload.service)}`,
    `<b>Форма:</b> ${escapeHtml(payload.formId)}`,
    `<b>Блок:</b> ${escapeHtml(payload.blockId)}`,
    '',
    `<b>Страница:</b> ${escapeHtml(payload.pageTitle || '—')}`,
    `<b>URL:</b> ${escapeHtml(payload.pageUrl || '—')}`,
    '',
    `<b>UTM source:</b> ${escapeHtml(payload.utm_source ?? '—')}`,
    `<b>UTM medium:</b> ${escapeHtml(payload.utm_medium ?? '—')}`,
    `<b>UTM campaign:</b> ${escapeHtml(payload.utm_campaign ?? '—')}`,
    `<b>UTM content:</b> ${escapeHtml(payload.utm_content ?? '—')}`,
    `<b>UTM term:</b> ${escapeHtml(payload.utm_term ?? '—')}`,
    '',
    `<b>Создано:</b> ${escapeHtml(payload.createdAt)}`,
  ];

  return lines.join('\n');
}

async function sendTelegramMessage(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error('Telegram env variables are missing');
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    throw new Error('Telegram request failed');
  }
}

function isValidPayload(payload: unknown): payload is LeadFormPayload {
  if (!payload || typeof payload !== 'object') return false;

  const data = payload as Record<string, unknown>;

  return (
    typeof data.name === 'string' &&
    typeof data.phone === 'string' &&
    typeof data.consent === 'boolean' &&
    typeof data.service === 'string' &&
    typeof data.formId === 'string' &&
    typeof data.blockId === 'string' &&
    typeof data.pageUrl === 'string' &&
    typeof data.pageTitle === 'string' &&
    typeof data.createdAt === 'string'
  );
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  const payload = req.body;

  if (!isValidPayload(payload)) {
    return res.status(400).json({ ok: false, message: 'Invalid payload' });
  }

  if (!payload.name.trim() || !payload.phone.trim() || !payload.consent) {
    return res.status(400).json({ ok: false, message: 'Validation failed' });
  }

  try {
    const telegramMessage = buildTelegramMessage(payload);
    await sendTelegramMessage(telegramMessage);

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ ok: false, message: 'Server error' });
  }
}
