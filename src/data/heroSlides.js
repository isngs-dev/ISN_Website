// Homepage hero slider — one slide per core service, given equal billing.
// Each slide also carries its own "visual" pipeline (shown in the hero graphic)
// so the illustration always matches the service currently in view.
// Add/reorder services here; the slider, dots and visual pick it up automatically.

export const HERO_SLIDES = [
  {
    key: 'digital-growth',
    eyebrow: 'Digital Growth + AI Automation',
    title: 'Turn Digital Marketing Into a Revenue Engine.',
    subhead: 'Acquisition, conversion and AI follow-through connected into one system — so fewer opportunities disappear between the ad click and your sales team.',
    ctaLabel: 'Build My Growth Engine',
    ctaTo: '/solutions#growth-engine',
    visualLabel: 'Product illustration — the iSN Growth Engine',
    cards: [
      { icon: 'megaphone', title: 'Google / Meta Campaign', meta: 'Built around real buyer intent', tag: 'Live', tone: 'brand' },
      { icon: 'layers', title: 'Conversion Landing Page', meta: 'Purpose-built per campaign', tag: '4.2% CVR', tone: 'accent' },
      { icon: 'bot', title: 'AI Prospect Engagement', meta: '"How can we help you grow?"', tag: 'Engaging', tone: 'dark' },
      { icon: 'target', title: 'Qualified Opportunity', meta: 'Intent: High · Fit: Match', tag: 'Qualified', tone: 'success' },
      { icon: 'pipeline', title: 'CRM & Calendar Sync', meta: 'Stage: Opportunity Created', tag: 'Synced', tone: 'accent' },
    ],
  },
  {
    key: 'roofing',
    eyebrow: 'Roofing Industry Growth',
    title: 'Turn Roofing Leads Into Booked Inspections.',
    subhead: 'AI-qualified homeowner leads, connected straight into your CRM and calendar — so fewer inspections fall through the cracks.',
    ctaLabel: 'Grow My Roofing Business',
    ctaTo: '/industries/roofing',
    visualLabel: 'Product illustration — Roofing Growth Engine',
    cards: [
      { icon: 'megaphone', title: 'Google Ads', meta: 'Roofing · Dallas–Fort Worth', tag: 'Live', tone: 'brand' },
      { icon: 'layers', title: 'Landing Page', meta: '"Get My Free Roof Inspection"', tag: '4.2% CVR', tone: 'accent' },
      { icon: 'bot', title: 'AI Assistant', meta: '"What size is your roof, approx?"', tag: 'Engaging', tone: 'dark' },
      { icon: 'target', title: 'Qualified Homeowner', meta: 'Intent: High · Fit: Match', tag: 'Qualified', tone: 'success' },
      { icon: 'calendar', title: 'Inspection Booked', meta: 'Tue, 2:30 PM · Field team', tag: 'Synced', tone: 'brand' },
      { icon: 'pipeline', title: 'CRM Opportunity', meta: 'Stage: Inspection Scheduled', tag: 'Synced', tone: 'accent' },
    ],
  },
  {
    key: 'franchise',
    eyebrow: 'Franchise Growth Marketing',
    title: 'Fill Your Franchise Pipeline With Serious Prospects.',
    subhead: 'A system built to attract, qualify and move real franchise candidates forward — not just collect form fills.',
    ctaLabel: 'Grow My Franchise Network',
    ctaTo: '/industries/franchise-growth',
    visualLabel: 'Product illustration — Franchise Growth Engine',
    cards: [
      { icon: 'megaphone', title: 'Meta Campaign', meta: 'Franchise development', tag: 'Live', tone: 'brand' },
      { icon: 'layers', title: 'Franchise Landing Page', meta: '"Explore Franchise Ownership"', tag: '3.6% CVR', tone: 'accent' },
      { icon: 'bot', title: 'AI Assistant', meta: '"What\'s your investment range?"', tag: 'Engaging', tone: 'dark' },
      { icon: 'target', title: 'Qualified Candidate', meta: 'Intent: High · Capital: Match', tag: 'Qualified', tone: 'success' },
      { icon: 'calendar', title: 'Discovery Call Booked', meta: 'Thu, 11:00 AM · Dev team', tag: 'Synced', tone: 'brand' },
      { icon: 'pipeline', title: 'CRM Opportunity', meta: 'Stage: Discovery Scheduled', tag: 'Synced', tone: 'accent' },
    ],
  },
  {
    key: 'mystery-shopping',
    eyebrow: 'Mystery Shopping Solutions',
    title: 'Modernize Every Layer of Your Mystery Shopping Program.',
    subhead: 'Editing and QA, shopper recruitment, real-time analytics and new-business growth — built by a team that has lived inside the MS workflow.',
    ctaLabel: 'Explore Mystery Shopping Solutions',
    ctaTo: '/industries/mystery-shopping',
    visualLabel: 'Product illustration — Mystery Shopping Ecosystem',
    cards: [
      { icon: 'megaphone', title: 'Inbound Program Inquiry', meta: 'MS company · New business', tag: 'Live', tone: 'brand' },
      { icon: 'bot', title: 'AI Assistant', meta: '"How many shops per month?"', tag: 'Engaging', tone: 'dark' },
      { icon: 'edit', title: 'Editing & QA Team', meta: 'Narrative + photo review', tag: 'Scaled', tone: 'accent' },
      { icon: 'users', title: 'Shopper Recruitment', meta: 'Geo + profile matched', tag: 'Sourcing', tone: 'brand' },
      { icon: 'bar', title: 'Analytics Dashboard', meta: 'Region + volume reporting', tag: 'Live', tone: 'success' },
    ],
  },
  {
    key: 'ai-products',
    eyebrow: 'AI Products',
    title: 'Put AI to Work at the Point of Conversion.',
    subhead: 'Conversational AI, sales engines and intelligence dashboards that qualify and engage prospects without waiting on a human to reply.',
    ctaLabel: 'Explore AI Products',
    ctaTo: '/ai-products',
    visualLabel: 'Product illustration — AI Sales Engine',
    cards: [
      { icon: 'workflow', title: 'Knowledge Base', meta: 'Trained on your offer', tag: 'Configured', tone: 'brand' },
      { icon: 'chat', title: 'AI Conversation', meta: '"What are you trying to solve?"', tag: 'Engaging', tone: 'dark' },
      { icon: 'qualify', title: 'Qualification Rules', meta: 'Custom per business', tag: 'Applied', tone: 'accent' },
      { icon: 'calendar', title: 'Calendar / CRM Sync', meta: 'Auto-booked & logged', tag: 'Synced', tone: 'brand' },
      { icon: 'ai', title: 'Decision Support Panel', meta: 'AI Observation · Human review', tag: 'Live', tone: 'success' },
    ],
  },
];
