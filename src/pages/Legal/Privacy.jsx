import SEO from '../../components/SEO/SEO';
import { breadcrumbSchema } from '../../components/SEO/schema';
import { COMPANY } from '../../data/company';
import './Legal.css';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | iSN Business Solutions"
        description="How iSN Business Solutions collects, uses and protects your information."
        path="/privacy"
        jsonLd={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy' }])]}
        noindex
      />

      <section className="page-hero section--dark">
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow eyebrow--on-dark">Legal</p>
          <h1>Privacy Policy</h1>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <p className="badge">[LEGAL REVIEW REQUIRED — template placeholder, not final legal copy]</p>

          <h2 className="h4">1. Information We Collect</h2>
          <p className="text-muted">
            We collect information you provide directly to us, such as your name, email address, phone number
            and business details, when you fill out a form, request a strategy call, or interact with our AI
            assistant on this website.
          </p>

          <h2 className="h4">2. How We Use Information</h2>
          <p className="text-muted">
            We use the information we collect to respond to inquiries, qualify prospective clients, schedule
            calls and demos, deliver our services, and improve our marketing and product offerings.
          </p>

          <h2 className="h4">3. Sharing of Information</h2>
          <p className="text-muted">
            We do not sell your personal information. We may share information with service providers that
            support our operations, such as CRM, scheduling and analytics platforms, solely to deliver and
            improve our services.
          </p>

          <h2 className="h4">4. Cookies & Analytics</h2>
          <p className="text-muted">
            This site may use cookies and analytics tools (such as Google Analytics and Google Tag Manager) to
            understand site usage. [ANALYTICS PROVIDERS TO BE CONFIRMED]
          </p>

          <h2 className="h4">5. Data Retention & Security</h2>
          <p className="text-muted">
            We retain information for as long as necessary to fulfill the purposes described in this policy and
            take reasonable measures to protect it from unauthorized access.
          </p>

          <h2 className="h4">6. Your Choices</h2>
          <p className="text-muted">
            You may contact us at any time to request access to, correction of, or deletion of your personal
            information.
          </p>

          <h2 className="h4">7. Contact Us</h2>
          <p className="text-muted">
            Questions about this policy can be directed to {COMPANY.email}.
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
