import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'iSN Business Solutions';
const SITE_URL = 'https://www.isngs.com'; // TODO: confirm production domain

/**
 * Per-page SEO: title, description, canonical, OpenGraph, Twitter card, and
 * optional JSON-LD structured data (array of schema.org objects).
 */
export default function SEO({ title, description, path = '/', jsonLd = [], noindex = false }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Digital Growth + AI Automation`;
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export { SITE_URL, SITE_NAME };
