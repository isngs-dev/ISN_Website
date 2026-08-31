// Primary site navigation, including mega-menu column data.
// Used by Header (desktop mega-menu + mobile nav) and Footer.

export const NAV = [
  { label: 'About', to: '/about' },
  {
    label: 'Solutions',
    to: '/solutions',
    columns: [
      {
        heading: 'Solutions',
        items: [
          { label: 'iSN Growth Engine', to: '/solutions#growth-engine', description: 'Attract, convert, qualify, schedule, sync.' },
          { label: 'Digital Growth', to: '/solutions/digital-growth', description: 'Acquisition campaigns that fuel the engine.' },
          { label: 'AI Sales Automation', to: '/ai-products', description: 'AI that engages, qualifies, and routes leads.' },
          { label: 'Conversion Landing Pages', to: '/solutions/landing-pages', description: 'Purpose-built pages for every campaign.' },
          { label: 'CRM & Calendar Automation', to: '/solutions/crm-automation', description: 'Sync qualified opportunities automatically.' },
          { label: 'Custom AI & Automation', to: '/solutions/custom-ai', description: 'Workflow automation built around your business.' },
        ],
      },
    ],
  },
  {
    label: 'Industries',
    to: '/industries/roofing',
    columns: [
      {
        heading: 'Industries',
        items: [
          { label: 'Roofing', to: '/industries/roofing', description: 'Turn homeowner interest into booked inspections.' },
          { label: 'Franchise Growth', to: '/industries/franchise-growth', description: 'Build your next generation of franchise owners.' },
          { label: 'Mystery Shopping', to: '/industries/mystery-shopping', description: 'Editing, growth, recruitment and intelligence.' },
        ],
      },
    ],
  },
  {
    label: 'AI Products',
    to: '/ai-products',
    columns: [
      {
        heading: 'AI Products',
        items: [
          { label: 'AI Sales Assistant', to: '/ai-products/sales-assistant', description: 'A configurable assistant that qualifies prospects.' },
          { label: 'AI Sales Engine', to: '/ai-products/sales-engine', description: 'Acquisition to CRM, connected end to end.' },
          { label: 'ShopperMatch.AI', to: '/ai-products/shopper-recruitment', description: 'Find and engage shoppers for hard markets.' },
          { label: 'MS Intelligence Dashboard', to: '/ai-products/ms-intelligence-dashboard', description: 'Live analytics connected to SASSIE / Shopmetrics.' },
        ],
      },
    ],
  },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Insights', to: '/insights' },
];

export const FOOTER_NAV = [
  {
    heading: 'Solutions',
    items: [
      { label: 'Digital Growth', to: '/solutions/digital-growth' },
      { label: 'Growth Engine', to: '/solutions#growth-engine' },
      { label: 'AI Automation', to: '/ai-products' },
      { label: 'CRM Automation', to: '/solutions/crm-automation' },
    ],
  },
  {
    heading: 'Industries',
    items: [
      { label: 'Roofing', to: '/industries/roofing' },
      { label: 'Franchise Growth', to: '/industries/franchise-growth' },
      { label: 'Mystery Shopping', to: '/industries/mystery-shopping' },
    ],
  },
  {
    heading: 'AI Products',
    items: [
      { label: 'AI Sales Assistant', to: '/ai-products/sales-assistant' },
      { label: 'AI Sales Engine', to: '/ai-products/sales-engine' },
      { label: 'ShopperMatch.AI', to: '/ai-products/shopper-recruitment' },
      { label: 'MS Intelligence Dashboard', to: '/ai-products/ms-intelligence-dashboard' },
    ],
  },
  {
    heading: 'Company',
    items: [
      { label: 'About', to: '/about' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Insights', to: '/insights' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    items: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
];
