// Verified company details, sourced from https://isngs.com/ (existing site).
// TODO: Confirm these are still current before production launch.

export const COMPANY = {
  legalName: 'iSN Business Solutions LLP',
  shortName: 'iSN',
  address: '199 14th St NE, Atlanta, GA 30309, USA',
  phones: [
    { label: 'US', number: '+1 (404) 448-3391' },
    { label: 'UK', number: '+44 20 7043 0644' },
    { label: 'IN', number: '+91 22 2287 5304' },
  ],
  email: 'info@isngs.com',
};

// Metrics shown in the trust strip. Do not replace placeholders with invented numbers —
// swap in the verified figure once confirmed by the business.
export const METRICS = [
  { value: '[VERIFIED METRIC REQUIRED]', label: 'Years of Client Delivery' },
  { value: '[VERIFIED METRIC REQUIRED]', label: 'U.S. Clients Supported' },
  { value: '[VERIFIED METRIC REQUIRED]', label: 'Mystery Shops Processed' },
  { value: '[VERIFIED METRIC REQUIRED]', label: 'Growth Campaigns Run' },
];

// Client logos — replace with approved, licensed logo files before launch.
export const CLIENT_LOGOS = [
  { name: '[CLIENT LOGO REQUIRED]' },
  { name: '[CLIENT LOGO REQUIRED]' },
  { name: '[CLIENT LOGO REQUIRED]' },
  { name: '[CLIENT LOGO REQUIRED]' },
  { name: '[CLIENT LOGO REQUIRED]' },
];
