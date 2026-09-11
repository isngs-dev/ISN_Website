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

// Office locations shown on the Contact page.
export const LOCATIONS = [
  {
    city: 'Atlanta',
    address: '199 14th St NE, Atlanta, GA 30309, USA',
    phone: '+1 (404) 448-3391',
    email: 'info@isngs.com',
  },
  {
    city: 'Mumbai',
    address: '1501 Dalamal Towers, Nariman Point Mumbai-400 021 Maharashtra, India',
    phone: '+91-222-287-5302',
    email: 'info@isngs.com',
  },
];

// Metrics shown in the trust strip.
export const METRICS = [
  { value: '20+', label: 'Years of Client Delivery' },
  { value: '50+', label: 'U.S. Clients Supported' },
  { value: '100k+', label: 'Mystery Shops Processed' },
  { value: '30+', label: 'Growth Campaigns Run' },
];
