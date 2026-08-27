import SEO from '../../components/SEO/SEO';
import { serviceSchema, breadcrumbSchema } from '../../components/SEO/schema';
import Workflow from '../../components/Workflow/Workflow';
import CTA from '../../components/CTA/CTA';
import Button from '../../components/Button/Button';
import RecruitmentPlatform from './RecruitmentPlatform';
import { trackStrategyCallCTA } from '../../lib/analytics';

const PROCESS_STAGES = [
  { stage: '01', label: 'Project Need', icon: 'target' },
  { stage: '02', label: 'Geo / Profile Match', icon: 'map-pin' },
  { stage: '03', label: 'Shopper Sourcing', icon: 'users' },
  { stage: '04', label: 'Automated Outreach', icon: 'megaphone' },
  { stage: '05', label: 'Registration', icon: 'check' },
  { stage: '06', label: 'Acceptance / Assignment', icon: 'sync' },
];

export default function ShopperRecruitment() {
  return (
    <>
      <SEO
        title="Shopper Recruitment AI | Mystery Shopper Sourcing"
        description="A purpose-built recruitment platform for Mystery Shopping companies to identify shopper gaps, source prospects, match candidates to requirements and automate engagement and onboarding workflows."
        path="/ai-products/shopper-recruitment"
        jsonLd={[
          serviceSchema({ name: 'Shopper Recruitment AI', description: 'AI-powered sourcing, matching and outreach for Mystery Shopping shopper recruitment.' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'AI Products', path: '/ai-products' }, { name: 'Shopper Recruitment AI', path: '/ai-products/shopper-recruitment' }]),
        ]}
      />

      <section className="section--dark" style={{ paddingBlock: 'var(--space-9) var(--space-8)' }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <p className="eyebrow eyebrow--on-dark" style={{ justifyContent: 'center' }}>AI Products — Shopper Recruitment AI</p>
          <h1>Find the Right Shoppers Where Your Programs Need Them.</h1>
          <p className="body-lg" style={{ color: 'var(--text-on-dark-muted)', marginTop: 'var(--space-5)' }}>
            A purpose-built recruitment platform for Mystery Shopping companies to identify shopper gaps, source prospects, match candidates to requirements and automate engagement and onboarding workflows.
          </p>
          <div style={{ marginTop: 'var(--space-6)' }}>
            <Button to="/contact" variant="primary" onClick={() => trackStrategyCallCTA({ source: 'shopper_recruitment_hero' })}>See Shopper Recruitment AI</Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <RecruitmentPlatform />
        </div>
      </section>

      <section className="section section--off">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">The Process</p>
            <h2>From Project Need to Shopper Assignment.</h2>
          </div>
          <Workflow stages={PROCESS_STAGES} />
        </div>
      </section>

      <CTA eyebrow="Get Started" title="Close Your Shopper Coverage Gaps." primaryLabel="Request a Demo" source="shopper_recruitment_final_cta" showAI />
    </>
  );
}
