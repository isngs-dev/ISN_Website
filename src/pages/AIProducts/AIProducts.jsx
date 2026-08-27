import SEO from '../../components/SEO/SEO';
import { breadcrumbSchema } from '../../components/SEO/schema';
import ProductCard from '../../components/ProductCard/ProductCard';
import CTA from '../../components/CTA/CTA';
import { PRODUCTS } from '../../data/products';

export default function AIProducts() {
  return (
    <>
      <SEO
        title="AI Sales Automation Products"
        description="iSN builds AI products that engage customers, support sales teams, improve recruitment and turn operational data into usable decisions."
        path="/ai-products"
        jsonLd={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'AI Products', path: '/ai-products' }])]}
      />

      <section className="page-hero section--dark">
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow eyebrow--on-dark">AI Products</p>
          <h1>Practical AI Products That Connect to Real Business Workflows.</h1>
          <p className="body-lg" style={{ color: 'var(--text-on-dark-muted)', marginTop: 'var(--space-5)' }}>
            iSN builds AI products that engage customers, support sales teams, improve recruitment and turn operational data into usable decisions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {PRODUCTS.map((p) => <ProductCard key={p.key} product={p} />)}
          </div>
        </div>
      </section>

      <CTA eyebrow="Get Started" title="Request an AI Demo" primaryLabel="Request an AI Demo" source="ai_products_final_cta" showAI />
    </>
  );
}
