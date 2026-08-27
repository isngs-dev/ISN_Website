import SEO from '../../components/SEO/SEO';
import { breadcrumbSchema } from '../../components/SEO/schema';
import Workflow from '../../components/Workflow/Workflow';
import CTA from '../../components/CTA/CTA';
import Icon from '../../components/Icon/Icon';
import Reveal from '../../components/Reveal/Reveal';
import RevealText from '../../components/Reveal/RevealText';
import { GROWTH_ENGINE_STAGES } from '../../data/growthEngine';
import './Solutions.css';

const SOLUTIONS = [
  { id: 'digital-growth', icon: 'attract', title: 'Digital Acquisition', copy: 'Google and Meta campaigns built around real buyer intent in your service area.' },
  { id: 'landing-pages', icon: 'convert', title: 'Conversion Landing Pages', copy: 'High-conversion pages purpose-built for each campaign and audience.' },
  { id: 'ai-engagement', icon: 'chat', title: 'AI Prospect Engagement', copy: 'Conversational AI that answers questions and qualifies interest in real time.' },
  { id: 'crm-automation', icon: 'sync', title: 'CRM & Calendar Automation', copy: 'Qualified opportunities sync automatically into your CRM and calendar.' },
  { id: 'analytics', icon: 'bar', title: 'Industry Analytics', copy: 'Full-funnel reporting from first click through to business outcome.' },
  { id: 'custom-ai', icon: 'ai', title: 'Custom AI & Automation', copy: 'Configurable AI assistants and workflow automation built around your business.' },
];

export default function Solutions() {
  return (
    <>
      <SEO
        title="Solutions | Digital Acquisition, AI Engagement, CRM Automation"
        description="Build the system behind growth. Choose individual capabilities or connect them into an end-to-end growth engine."
        path="/solutions"
        jsonLd={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions' }])]}
      />

      <section className="page-hero section--dark">
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow eyebrow--on-dark">Solutions</p>
          <h1>Build the System Behind Growth.</h1>
          <p className="body-lg" style={{ color: 'var(--text-on-dark-muted)', marginTop: 'var(--space-5)' }}>
            Choose individual capabilities or connect them into an end-to-end growth engine.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal group className="grid grid-3">
            {SOLUTIONS.map((s) => (
              <div className="card solution-card" id={s.id} key={s.id}>
                <div className="solution-card__icon"><Icon name={s.icon} size={22} /></div>
                <h3 className="h4">{s.title}</h3>
                <p className="text-muted body-sm">{s.copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="growth-engine" className="section section--dark">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow eyebrow--on-dark">The iSN Growth Engine</p>
            <RevealText as="h2" text="One Connected Engine. From First Click to Qualified Opportunity." />
            <p className="text-on-dark-muted body-lg">
              Most agencies stop at traffic or leads. iSN connects acquisition, conversion and follow-through so fewer opportunities disappear between the ad click and your sales team.
            </p>
          </div>
          <Workflow stages={GROWTH_ENGINE_STAGES} tone="dark" />
        </div>
      </section>

      <CTA eyebrow="Get Started" title="Let's Map the System Your Business Needs." primaryLabel="Book a Strategy Call" source="solutions_final_cta" showAI />
    </>
  );
}
