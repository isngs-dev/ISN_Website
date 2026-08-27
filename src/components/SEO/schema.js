import { SITE_URL } from './SEO';
import { COMPANY } from '../../data/company';

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/src/assets/brand/isn-logo.png`,
  email: COMPANY.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address,
  },
});

export const serviceSchema = ({ name, description, areaServed = 'US' }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: name,
  description,
  areaServed,
  provider: { '@type': 'Organization', name: COMPANY.legalName },
});

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const articleSchema = ({ title, description, path }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  url: `${SITE_URL}${path}`,
  publisher: { '@type': 'Organization', name: COMPANY.legalName },
});
