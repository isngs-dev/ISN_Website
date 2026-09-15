// Integration adapter layer.
//
// Each function below is a clean seam: swap the mock implementation for a
// real call once the corresponding integration is available, without
// changing any calling code.
//
//   POST /api/leads        — general lead capture (outcome selector, industry CTAs) — mocked
//   POST /api/contact.php  — Contact page form — real, SendGrid-backed (see public/api/contact.php)
//   POST /api/chat         — Talk to iSN AI assistant — mocked
//   POST /api/book.php     — Book a Strategy Call modal — real, SendGrid-backed (see public/api/book.php)
//   POST /api/newsletter   — Insights page newsletter signup — mocked
//
// The .php endpoints are plain PHP (public/api/*.php, copied into the build
// output as-is) rather than Node functions, since production is a PHP-only
// host (Qualispace) with no Node.js runtime.
//
// CRM_ENDPOINT / CALENDAR_PROVIDER are read from environment variables so
// they can be configured per-deployment. See .env.example.

const LEADS_ENDPOINT = import.meta.env.VITE_LEADS_API_URL || '/api/leads';
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_API_URL || '/api/contact.php';
const CHAT_ENDPOINT = import.meta.env.VITE_CHAT_API_URL || '/api/chat';
const BOOK_ENDPOINT = import.meta.env.VITE_BOOK_API_URL || '/api/book.php';
const NEWSLETTER_ENDPOINT = import.meta.env.VITE_NEWSLETTER_API_URL || '/api/newsletter';

const MOCK_LATENCY_MS = 500;

function mockRequest(endpoint, payload) {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug(`[api mock] POST ${endpoint}`, payload);
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true, mocked: true }), MOCK_LATENCY_MS);
  });
}

async function postJSON(endpoint, payload) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Request failed');
  return res.json();
}

export function submitLead(payload) {
  return mockRequest(LEADS_ENDPOINT, payload);
}

// Backed by a real SendGrid-powered PHP endpoint (public/api/contact.php) —
// emails the admin inbox and sends the submitter a confirmation copy.
export function submitContact(payload) {
  return postJSON(CONTACT_ENDPOINT, payload);
}

export function sendChatMessage(payload) {
  return mockRequest(CHAT_ENDPOINT, payload);
}

// Backed by a real SendGrid-powered PHP endpoint (public/api/book.php) —
// same as submitContact, for the Book a Strategy Call modal.
export function submitBooking(payload) {
  return postJSON(BOOK_ENDPOINT, payload);
}

export function submitNewsletter(payload) {
  return mockRequest(NEWSLETTER_ENDPOINT, payload);
}

// CRM adapter — configure via VITE_CRM_PROVIDER (hubspot | salesforce |
// gohighlevel | zoho | pipedrive | webhook). No integration is active by
// default; this simply tags outbound payloads with the intended target so a
// backend/webhook can route them once configured.
export const CRM_PROVIDER = import.meta.env.VITE_CRM_PROVIDER || null; // '[CRM ENDPOINT TO BE CONFIGURED]'

// Calendar adapter — configure via VITE_CALENDAR_PROVIDER (calendly |
// google | hubspot | gohighlevel | custom).
export const CALENDAR_PROVIDER = import.meta.env.VITE_CALENDAR_PROVIDER || null;
export const CALENDAR_URL = import.meta.env.VITE_CALENDAR_URL || null;
