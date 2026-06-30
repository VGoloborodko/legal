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
//   return value
//     .replaceAll('&', '&amp;')
//     .replaceAll('<', '&lt;')
//     .replaceAll('>', '&gt;');
// }

// function formatDateTime(value: string) {
//   const date = new Date(value);

//   if (Number.isNaN(date.getTime())) {
//     return value;
//   }

//   const formatter = new Intl.DateTimeFormat('sv-SE', {
//     timeZone: 'Europe/Moscow',
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//   });

//   return formatter.format(date).replace(',', '');
// }

// function normalizePayload(payload: LeadFormPayload): LeadFormPayload {
//   return {
//     ...payload,
//     createdAt: formatDateTime(payload.createdAt),
//   };
// }

// function buildTelegramMessage(payload: LeadFormPayload) {
//   const lines = [
//     'Новая заявка с сайта',
//     '',
//     `Имя: ${escapeHtml(payload.name)}`,
//     `Телефон: ${escapeHtml(payload.phone)}`,
//     `Email: ${escapeHtml(payload.email ?? '—')}`,
//     `Комментарий: ${escapeHtml(payload.comment ?? '—')}`,
//     '',
//     `Услуга: ${escapeHtml(payload.service)}`,
//     `Форма: ${escapeHtml(payload.formId)}`,
//     `Блок: ${escapeHtml(payload.blockId)}`,
//     '',
//     `Страница: ${escapeHtml(payload.pageTitle || '—')}`,
//     `URL: ${escapeHtml(payload.pageUrl || '—')}`,
//     '',
//     `UTM source: ${escapeHtml(payload.utm_source ?? '—')}`,
//     `UTM medium: ${escapeHtml(payload.utm_medium ?? '—')}`,
//     `UTM campaign: ${escapeHtml(payload.utm_campaign ?? '—')}`,
//     `UTM content: ${escapeHtml(payload.utm_content ?? '—')}`,
//     `UTM term: ${escapeHtml(payload.utm_term ?? '—')}`,
//     '',
//     `Создано: ${escapeHtml(payload.createdAt)}`,
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

// function buildYougileTask(payload: LeadFormPayload) {
//   // const title = `${payload.name} — ${payload.service}`;
//   const title = `Новая заявка — ${payload.service}`;

//   const description = [
//     `Имя: ${payload.name}`,
//     `Телефон: ${payload.phone}`,
//     `Email: ${payload.email || '—'}`,
//     `Комментарий: ${payload.comment || '—'}`,
//     '',
//     `Услуга: ${payload.service || '—'}`,
//     `Форма: ${payload.formId || '—'}`,
//     `Блок: ${payload.blockId || '—'}`,
//     '',
//     `Страница: ${payload.pageTitle || '—'}`,
//     `URL: ${payload.pageUrl || '—'}`,
//     '',
//     `UTM source: ${payload.utm_source || '—'}`,
//     `UTM medium: ${payload.utm_medium || '—'}`,
//     `UTM campaign: ${payload.utm_campaign || '—'}`,
//     `UTM content: ${payload.utm_content || '—'}`,
//     `UTM term: ${payload.utm_term || '—'}`,
//     '',
//     `Создано: ${payload.createdAt || '—'}`,
//   ].join('\n');

//   return { title, description };
// }

// async function sendLeadToYougile(payload: LeadFormPayload) {
//   const apiKey = process.env.YOUGILE_API_KEY;
//   const columnId = process.env.YOUGILE_COLUMN_ID;

//   if (!apiKey || !columnId) {
//     throw new Error('YouGile env variables are missing');
//   }

//   const { title, description } = buildYougileTask(payload);

//   const response = await fetch('https://yougile.com/api-v2/tasks', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json; charset=utf-8',
//       Accept: 'application/json',
//       Authorization: `Bearer ${apiKey}`,
//     },
//     body: JSON.stringify({
//       title,
//       columnId,
//       description,
//     }),
//   });

//   const responseText = await response.text();

//   if (!response.ok) {
//     throw new Error(`YouGile request failed: ${responseText}`);
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

//   const rawPayload = req.body;

//   if (!isValidPayload(rawPayload)) {
//     return res.status(400).json({ ok: false, message: 'Invalid payload' });
//   }

//   if (!rawPayload.name.trim() || !rawPayload.phone.trim() || !rawPayload.consent) {
//     return res.status(400).json({ ok: false, message: 'Validation failed' });
//   }

//   const payload = normalizePayload(rawPayload);

//   try {
//     const telegramMessage = buildTelegramMessage(payload);

//     await sendTelegramMessage(telegramMessage);
//     await sendLeadToGoogleSheets(payload);

//     try {
//       await sendLeadToYougile(payload);
//     } catch (yougileError) {
//       console.error('YouGile request failed:', yougileError);
//     }

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

type DeliveryTask = {
  key: 'telegram' | 'googleSheets' | 'yougile';
  enabled: boolean;
  critical: boolean;
  run: () => Promise<void>;
};

function escapeHtml(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function formatDateTime(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  const formatter = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Moscow',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return formatter.format(date).replace(',', '');
}

function normalizePayload(payload: LeadFormPayload): LeadFormPayload {
  return {
    ...payload,
    createdAt: formatDateTime(payload.createdAt),
  };
}

function buildTelegramMessage(payload: LeadFormPayload) {
  const lines = [
    'Новая заявка с сайта',
    '',
    `Имя: ${escapeHtml(payload.name)}`,
    `Телефон: ${escapeHtml(payload.phone)}`,
    `Email: ${escapeHtml(payload.email ?? '—')}`,
    `Комментарий: ${escapeHtml(payload.comment ?? '—')}`,
    '',
    `Услуга: ${escapeHtml(payload.service)}`,
    `Форма: ${escapeHtml(payload.formId)}`,
    `Блок: ${escapeHtml(payload.blockId)}`,
    '',
    `Страница: ${escapeHtml(payload.pageTitle || '—')}`,
    `URL: ${escapeHtml(payload.pageUrl || '—')}`,
    '',
    `UTM source: ${escapeHtml(payload.utm_source ?? '—')}`,
    `UTM medium: ${escapeHtml(payload.utm_medium ?? '—')}`,
    `UTM campaign: ${escapeHtml(payload.utm_campaign ?? '—')}`,
    `UTM content: ${escapeHtml(payload.utm_content ?? '—')}`,
    `UTM term: ${escapeHtml(payload.utm_term ?? '—')}`,
    '',
    `Создано: ${escapeHtml(payload.createdAt)}`,
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
    const errorText = await response.text();
    throw new Error(`Telegram request failed: ${errorText}`);
  }
}

async function sendLeadToGoogleSheets(payload: LeadFormPayload) {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!url) {
    throw new Error('Google Sheets env variable is missing');
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google Sheets request failed: ${errorText}`);
  }
}

function buildYougileTask(payload: LeadFormPayload) {
  const title = `Новая заявка — ${payload.service}`;

  const description = [
    `Имя: ${payload.name}`,
    `Телефон: ${payload.phone}`,
    `Email: ${payload.email || '—'}`,
    `Комментарий: ${payload.comment || '—'}`,
    '',
    `Услуга: ${payload.service || '—'}`,
    `Форма: ${payload.formId || '—'}`,
    `Блок: ${payload.blockId || '—'}`,
    '',
    `Страница: ${payload.pageTitle || '—'}`,
    `URL: ${payload.pageUrl || '—'}`,
    '',
    `UTM source: ${payload.utm_source || '—'}`,
    `UTM medium: ${payload.utm_medium || '—'}`,
    `UTM campaign: ${payload.utm_campaign || '—'}`,
    `UTM content: ${payload.utm_content || '—'}`,
    `UTM term: ${payload.utm_term || '—'}`,
    '',
    `Создано: ${payload.createdAt || '—'}`,
  ].join('\n');

  return { title, description };
}

async function sendLeadToYougile(payload: LeadFormPayload) {
  const apiKey = process.env.YOUGILE_API_KEY;
  const columnId = process.env.YOUGILE_COLUMN_ID;

  if (!apiKey || !columnId) {
    throw new Error('YouGile env variables are missing');
  }

  const { title, description } = buildYougileTask(payload);

  const response = await fetch('https://yougile.com/api-v2/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      title,
      columnId,
      description,
    }),
  });

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(`YouGile request failed: ${responseText}`);
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

  const rawPayload = req.body;

  if (!isValidPayload(rawPayload)) {
    return res.status(400).json({ ok: false, message: 'Invalid payload' });
  }

  if (!rawPayload.name.trim() || !rawPayload.phone.trim() || !rawPayload.consent) {
    return res.status(400).json({ ok: false, message: 'Validation failed' });
  }

  const payload = normalizePayload(rawPayload);
  const telegramMessage = buildTelegramMessage(payload);

  const deliveryTasks: DeliveryTask[] = [
    {
      key: 'telegram',
      enabled: true,
      critical: false,
      run: () => sendTelegramMessage(telegramMessage),
    },
    {
      key: 'googleSheets',
      enabled: true,
      critical: false,
      run: () => sendLeadToGoogleSheets(payload),
    },
    {
      key: 'yougile',
      enabled: true,
      critical: true,
      run: () => sendLeadToYougile(payload),
    },
  ];

  const enabledTasks = deliveryTasks.filter((task) => task.enabled);

  try {
    const results = await Promise.allSettled(
      enabledTasks.map(async (task) => {
        await task.run();
        return task.key;
      })
    );

    const failedTasks = results
      .map((result, index) => ({ result, task: enabledTasks[index] }))
      .filter(
        (
          item
        ): item is {
          result: PromiseRejectedResult;
          task: DeliveryTask;
        } => item.result.status === 'rejected'
      );

    failedTasks.forEach(({ task, result }) => {
      console.error(`Lead delivery failed: ${task.key}`, result.reason);
    });

    const hasCriticalFailure = failedTasks.some(({ task }) => task.critical);

    if (hasCriticalFailure) {
      return res.status(500).json({
        ok: false,
        message: 'Some required integrations failed',
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, message: 'Server error' });
  }
}
