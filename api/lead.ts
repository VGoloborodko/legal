// import type { VercelRequest, VercelResponse } from '@vercel/node';

// type LeadFormPayload = {
//   name: string;
//   phone: string;
//   email: string | null;
//   comment: string | null;
//   consent: boolean;
//   service: string;
//   formId: string;
//   blockId: string;
//   pageUrl: string;
//   pageTitle: string;
//   utm_source: string | null;
//   utm_medium: string | null;
//   utm_campaign: string | null;
//   utm_content: string | null;
//   utm_term: string | null;
//   createdAt: string;
// };

// function escapeHtml(value: string) {
//   return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
// }

// function buildTelegramMessage(payload: LeadFormPayload) {
//   const lines = [
//     '<b>Новая заявка с сайта</b>',
//     '',
//     `<b>Имя:</b> ${escapeHtml(payload.name)}`,
//     `<b>Телефон:</b> ${escapeHtml(payload.phone)}`,
//     `<b>Email:</b> ${escapeHtml(payload.email ?? '—')}`,
//     `<b>Комментарий:</b> ${escapeHtml(payload.comment ?? '—')}`,
//     '',
//     `<b>Услуга:</b> ${escapeHtml(payload.service)}`,
//     `<b>Форма:</b> ${escapeHtml(payload.formId)}`,
//     `<b>Блок:</b> ${escapeHtml(payload.blockId)}`,
//     '',
//     `<b>Страница:</b> ${escapeHtml(payload.pageTitle || '—')}`,
//     `<b>URL:</b> ${escapeHtml(payload.pageUrl || '—')}`,
//     '',
//     `<b>UTM source:</b> ${escapeHtml(payload.utm_source ?? '—')}`,
//     `<b>UTM medium:</b> ${escapeHtml(payload.utm_medium ?? '—')}`,
//     `<b>UTM campaign:</b> ${escapeHtml(payload.utm_campaign ?? '—')}`,
//     `<b>UTM content:</b> ${escapeHtml(payload.utm_content ?? '—')}`,
//     `<b>UTM term:</b> ${escapeHtml(payload.utm_term ?? '—')}`,
//     '',
//     `<b>Создано:</b> ${escapeHtml(payload.createdAt)}`,
//   ];

//   return lines.join('\n');
// }

// async function sendTelegramMessage(text: string) {
//   const token = process.env.TELEGRAM_BOT_TOKEN;
//   const chatId = process.env.TELEGRAM_CHAT_ID;

//   if (!token || !chatId) {
//     throw new Error('Telegram env variables are missing');
//   }

//   const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       chat_id: chatId,
//       text,
//       parse_mode: 'HTML',
//       disable_web_page_preview: true,
//     }),
//   });

//   if (!response.ok) {
//     const errorText = await response.text();
//     throw new Error(`Telegram request failed: ${errorText}`);
//   }
// }

// async function sendLeadToGoogleSheets(payload: LeadFormPayload) {
//   const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

//   if (!url) {
//     throw new Error('Google Sheets env variable is missing');
//   }

//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'text/plain;charset=utf-8',
//     },
//     body: JSON.stringify(payload),
//   });

//   if (!response.ok) {
//     const errorText = await response.text();
//     throw new Error(`Google Sheets request failed: ${errorText}`);
//   }
// }

// function isValidPayload(payload: unknown): payload is LeadFormPayload {
//   if (!payload || typeof payload !== 'object') return false;

//   const data = payload as Record<string, unknown>;

//   return (
//     typeof data.name === 'string' &&
//     typeof data.phone === 'string' &&
//     typeof data.consent === 'boolean' &&
//     typeof data.service === 'string' &&
//     typeof data.formId === 'string' &&
//     typeof data.blockId === 'string' &&
//     typeof data.pageUrl === 'string' &&
//     typeof data.pageTitle === 'string' &&
//     typeof data.createdAt === 'string'
//   );
// }

// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//   if (req.method === 'OPTIONS') {
//     return res.status(200).end();
//   }

//   if (req.method !== 'POST') {
//     return res.status(405).json({ ok: false, message: 'Method not allowed' });
//   }

//   const payload = req.body;

//   if (!isValidPayload(payload)) {
//     return res.status(400).json({ ok: false, message: 'Invalid payload' });
//   }

//   if (!payload.name.trim() || !payload.phone.trim() || !payload.consent) {
//     return res.status(400).json({ ok: false, message: 'Validation failed' });
//   }

//   try {
//     const telegramMessage = buildTelegramMessage(payload);

//     await sendTelegramMessage(telegramMessage);
//     await sendLeadToGoogleSheets(payload);

//     return res.status(200).json({ ok: true });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ ok: false, message: 'Server error' });
//   }
// }

import type { VercelRequest, VercelResponse } from '@vercel/node';

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

  const responseText = await response.text();
  console.log('Telegram status:', response.status);
  console.log('Telegram response:', responseText);

  if (!response.ok) {
    throw new Error(`Telegram request failed: ${responseText}`);
  }
}

async function sendLeadToGoogleSheets(payload: LeadFormPayload) {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!url) {
    throw new Error('Google Sheets env variable is missing');
  }

  const response = await fetch(url, {
    method: 'POST',
    redirect: 'follow',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();

  console.log('Google Sheets status:', response.status);
  console.log('Google Sheets final URL:', response.url);
  console.log('Google Sheets redirected:', response.redirected);
  console.log('Google Sheets response:', responseText);

  if (!response.ok) {
    throw new Error(`Google Sheets request failed: ${responseText}`);
  }

  try {
    const parsed = JSON.parse(responseText);

    if (parsed?.ok === false) {
      throw new Error(`Google Sheets script error: ${parsed.error || 'Unknown script error'}`);
    }
  } catch (error) {
    if (error instanceof Error && error.message.startsWith('Google Sheets script error:')) {
      throw error;
    }
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

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
    await sendLeadToGoogleSheets(payload);

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Lead handler error:', error);

    return res.status(500).json({
      ok: false,
      message: error instanceof Error ? error.message : 'Server error',
    });
  }
}
