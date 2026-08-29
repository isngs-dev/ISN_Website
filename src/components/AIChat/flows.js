// Scripted qualification flows for the AI Assistant demo. This is a
// front-end illustration of the assistant's behavior — replace `runFlow`
// consumers' local logic with real calls to sendChatMessage() (see
// src/lib/api.js) once a live AI endpoint is available.

export const OPENING_OPTIONS = [
  { id: 'roofing', label: 'I need more roofing inspections' },
  { id: 'franchise', label: 'I want to grow my franchise network' },
  { id: 'ms-growth', label: 'I want more Mystery Shopping clients' },
  { id: 'ms-recruit', label: 'I need more Mystery Shoppers' },
  { id: 'ai', label: 'I want an AI assistant' },
  { id: 'custom', label: 'I need a custom solution' },
];

export const FLOWS = {
  roofing: {
    industry: 'Roofing',
    questions: [
      { q: 'What service area(s) do you cover?', placeholder: 'e.g. Dallas–Fort Worth, TX' },
      { q: 'What is your monthly inspection volume goal?', options: ['Under 20', '20–50', '50–100', '100+'] },
      { q: 'Do you currently have a CRM or scheduling tool?', options: ['Yes', 'No', 'Not sure'] },
    ],
    solution: {
      text: 'iSN can build a roofing inspection scheduling engine — from Google/Meta campaigns to AI qualification and calendar booking — around your service area.',
      cta: 'See the Roofing Solution',
      to: '/industries/roofing',
    },
  },
  franchise: {
    industry: 'Franchise Growth',
    questions: [
      { q: 'How many territories are you looking to develop?', placeholder: 'e.g. 5 territories in the Southeast' },
      { q: 'What is your typical investment range?', options: ['Under $250K', '$250K–$500K', '$500K+'] },
      { q: 'Do you have a franchise development landing page today?', options: ['Yes', 'No'] },
    ],
    solution: {
      text: 'iSN can build a franchise development pipeline — targeted campaigns, a dedicated landing page and AI-assisted qualification for prospective owners.',
      cta: 'See the Franchise Solution',
      to: '/industries/franchise-growth',
    },
  },
  'ms-growth': {
    industry: 'Mystery Shopping — Business Growth',
    questions: [
      { q: 'What is your primary market?', placeholder: 'e.g. United States, retail & QSR' },
      { q: 'What are you trying to grow?', options: ['New client acquisition', 'Program volume', 'Both'] },
    ],
    solution: {
      text: 'iSN combines Mystery Shopping expertise with a B2B growth engine — campaigns, landing pages, AI qualification and CRM handoff for qualified opportunities.',
      cta: 'See Mystery Shopping Solutions',
      to: '/industries/mystery-shopping',
    },
  },
  'ms-recruit': {
    industry: 'Mystery Shopping — Shopper Recruitment',
    questions: [
      { q: 'Which markets have coverage gaps?', placeholder: 'e.g. rural Midwest, specific ZIP codes' },
      { q: 'Roughly how many shoppers do you need?', options: ['Under 50', '50–200', '200+'] },
    ],
    solution: {
      text: 'ShopperMatch.AI can identify, match and engage shoppers in your gap markets through automated sourcing and outreach.',
      cta: 'See ShopperMatch.AI',
      to: '/ai-products/shopper-recruitment',
    },
  },
  ai: {
    industry: 'AI Products',
    questions: [
      { q: 'What should the assistant help with?', options: ['Answering questions', 'Qualifying leads', 'Booking appointments', 'All of the above'] },
      { q: 'Do you have an existing CRM to connect to?', options: ['Yes', 'No', 'Not sure'] },
    ],
    solution: {
      text: 'The iSN AI Sales Assistant can be configured on your knowledge base to answer questions, qualify prospects and trigger the right next step.',
      cta: 'See AI Sales Assistant',
      to: '/ai-products/sales-assistant',
    },
  },
  custom: {
    industry: 'Custom Solution',
    questions: [
      { q: 'In a sentence, what are you trying to solve?', placeholder: 'Tell us about your goal' },
    ],
    solution: {
      text: "We'll route this to a specialist who can scope a custom AI or automation solution for your business.",
      cta: 'Explore AI Products',
      to: '/ai-products',
    },
  },
};
