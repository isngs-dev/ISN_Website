import SEO from '../../components/SEO/SEO';
import { breadcrumbSchema } from '../../components/SEO/schema';
import { COMPANY } from '../../data/company';
import './Legal.css';

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service | iSN Business Solutions"
        description="Terms governing your use of the iSN Business Solutions website and services."
        path="/terms"
        jsonLd={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Terms of Service', path: '/terms' }])]}
        noindex
      />

      <section className="page-hero section--dark">
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow eyebrow--on-dark">Legal</p>
          <h1>Terms of Service</h1>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <p className="badge">[LEGAL REVIEW REQUIRED — template placeholder, not final legal copy]</p>

          <h2 className="h4">1. Acceptance of Terms</h2>
          <p className="text-muted">
            By accessing and using this website, you agree to be bound by these Terms of Service and our
            Privacy Policy.
          </p>

          <h2 className="h4">2. Use of the Website</h2>
          <p className="text-muted">
            This website and its content are provided for informational purposes about iSN Business Solutions'
            services. You agree not to misuse the site, its forms, or its AI assistant.
          </p>

          <h2 className="h4">3. Services</h2>
          <p className="text-muted">
            Any services referenced on this site are subject to a separate signed agreement between iSN
            Business Solutions LLP and the client. Nothing on this website constitutes a binding service
            agreement.
          </p>

          <h2 className="h4">4. Intellectual Property</h2>
          <p className="text-muted">
            All content, branding and materials on this site are the property of {COMPANY.legalName} unless
            otherwise noted, and may not be reproduced without permission.
          </p>

          <h2 className="h4">5. Limitation of Liability</h2>
          <p className="text-muted">
            iSN Business Solutions is not liable for any indirect, incidental or consequential damages arising
            from use of this website.
          </p>

          <h2 className="h4">6. Governing Law</h2>
          <p className="text-muted">
            [GOVERNING LAW / JURISDICTION TO BE CONFIRMED]
          </p>

          <h2 className="h4">7. Contact Us</h2>
          <p className="text-muted">
            Questions about these terms can be directed to {COMPANY.email}.
          </p>

          <p className="text-muted body-sm">
            Last updated: [DATE TO BE CONFIRMED]. This is a draft template and must be reviewed by qualified
            legal counsel before publication.
          </p>
        </div>
      </section>
    </>
  );
}
