# iSN Business Solutions — Website

Digital Growth + AI Automation marketing website for iSN Business Solutions LLP.
React 19 + Vite + React Router, plain CSS with a token-based design system.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build to /dist
npm run preview    # preview the production build locally
npm run lint        # oxlint
```

Copy `.env.example` to `.env` and fill in values as real integrations
(CRM, calendar, analytics) go live. The site runs fully with no `.env` file —
all form submissions use mocked adapters (see `src/lib/api.js`) until endpoints
are configured.

## Project structure

```
src/
  assets/brand/       Logo and brand imagery
  components/         Shared UI components (Header, Footer, AIChat, CTA, etc.)
  context/             Global UI state (chat/calendar/mobile nav open state)
  data/                 Site content: navigation, industries, products, FAQs,
                        testimonials, case studies, insights, company info
  hooks/                useReveal (scroll-in animation)
  layouts/              Layout.jsx — header/footer/main shell
  lib/                  api.js (mock adapters), analytics.js (event tracking)
  pages/                One folder per route, each with its own .jsx + .css
  styles/               tokens.css (design tokens), global.css (base styles)
```

## Where to edit things

| What | Where |
|---|---|
| Logo | `src/assets/brand/isn-logo.png` |
| Brand colors / spacing / type scale | `src/styles/tokens.css` |
| Company address, phone, email | `src/data/company.js` |
| Homepage metrics (trust strip) | `src/data/company.js` → `METRICS` |
| Client logos | `src/data/company.js` → `CLIENT_LOGOS` |
| Testimonials | `src/data/testimonials.js` |
| Case studies | `src/data/caseStudies.js` |
| Insights / resource articles | `src/data/insights.js` |
| Nav menu structure | `src/data/navigation.js` |
| FAQs (per page) | `src/data/faqs.js` |
| AI chat conversation flows | `src/components/AIChat/flows.js` |

## Integrations (not yet live)

All of the following are wired with clean adapter seams but are **not**
connected to live services. Search the codebase for the bracketed markers
below before launch:

- `[VERIFIED METRIC REQUIRED]` — real trust-strip numbers, once approved
- `[CLIENT LOGO REQUIRED]` — licensed client logo files
- `[CASE STUDY DATA REQUIRED]` — verified outcome metrics per case study
- `[TEAM IMAGE REQUIRED]` — real team/office photography
- `[CRM ENDPOINT TO BE CONFIGURED]` — CRM webhook/API target
- `[LEGAL REVIEW REQUIRED]` — Privacy/Terms pages are drafts, not final legal copy

### API adapters (`src/lib/api.js`)
`submitLead`, `submitContact`, `sendChatMessage`, `submitBooking` currently
resolve with a mocked response after a simulated delay. Set the corresponding
`VITE_*_API_URL` env vars and replace `mockRequest()` with a real `fetch()`
call (a commented example is included in the file) once backend endpoints exist.

### CRM
Set `VITE_CRM_PROVIDER` (`hubspot` | `salesforce` | `gohighlevel` | `zoho` |
`pipedrive` | `webhook`). No CRM write currently happens — this only tags
outbound payloads so a backend/webhook can route them once configured.

### Calendar / scheduling
Set `VITE_CALENDAR_URL` to a real scheduling link (e.g. a Calendly page) to
have the booking modal render it in an iframe. Leave unset to use the built-in
illustrative time-slot picker.

### Analytics
`src/lib/analytics.js` pushes named events (`strategy_call_cta`,
`ai_chat_qualified`, `contact_completed`, etc.) to `window.dataLayer` in
GTM-compatible format. Add your GTM container / GA4 / Meta Pixel snippets to
`index.html` and set the corresponding `VITE_*` IDs in `.env` to activate
tracking. No analytics scripts are loaded by default.

### AI Assistant & product mockups
The AI chat widget, dashboard mockups (Roofing funnel, MS Intelligence,
Shopper Recruitment) and chat transcript illustrations are all front-end
simulations for product storytelling — labeled with a "Product illustration"
or "Illustrative interface" badge. None call a live AI model or backend.

## Before production launch

1. Replace all bracketed placeholder content listed above.
2. Confirm the production domain in `src/components/SEO/SEO.jsx` (`SITE_URL`).
3. Confirm company contact details in `src/data/company.js`.
4. Wire real API endpoints / CRM / calendar / analytics per the sections above.
5. Have Privacy Policy and Terms of Service reviewed by legal counsel.
6. Run `npm run build` and `npm run preview` to do a final QA pass.
