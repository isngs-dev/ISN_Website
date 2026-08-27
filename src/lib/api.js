// Integration adapter layer.
//
// No backend currently exists for these endpoints. Each function below is a
// clean seam: swap the mock implementation for a real `fetch()` call once the
// corresponding endpoint is available, without changing any calling code.
//
//   POST /api/leads   — general lead capture (outcome selector, industry CTAs)
//   POST /api/contact — Contact page qualification form
//   POST /api/chat    — Talk to iSN AI assistant
//   POST /api/book    — Calendar booking modal
//
// CRM_ENDPOINT / CALENDAR_PROVIDER are read from environment variables so
// they can be configured per-deployment. See .env.example.

const LEADS_ENDPOINT = import.meta.env.VITE_LEADS_API_URL || '/api/leads';
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_API_URL || '/api/contact';
const CHAT_ENDPOINT = import.meta.env.VITE_CHAT_API_URL || '/api/chat';
const BOOK_ENDPOINT = import.meta.env.VITE_BOOK_API_URL || '/api/book';

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

// TODO(production): replace mockRequest with a real fetch() call, e.g.
//   const res = await fetch(endpoint, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   });
//   if (!res.ok) throw new Error('Request failed');
//   return res.json();

export function submitLead(payload) {
  return mockRequest(LEADS_ENDPOINT, payload);
}

export function submitContact(payload) {
  return mockRequest(CONTACT_ENDPOINT, payload);
}

export function sendChatMessage(payload) {
  return mockRequest(CHAT_ENDPOINT, payload);
}

export function submitBooking(payload) {
  return mockRequest(BOOK_ENDPOINT, payload);
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
