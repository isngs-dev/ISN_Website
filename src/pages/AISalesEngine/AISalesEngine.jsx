import SEO from '../../components/SEO/SEO';
import { serviceSchema, breadcrumbSchema } from '../../components/SEO/schema';
import PageHero from '../../components/Hero/PageHero';
import Workflow from '../../components/Workflow/Workflow';
import CTA from '../../components/CTA/CTA';
import Icon from '../../components/Icon/Icon';
import MiniFlow from '../../components/MiniFlow/MiniFlow';
import Reveal from '../../components/Reveal/Reveal';
import './AISalesEngine.css';

const HERO_FLOW = [
  { icon: 'attract', label: 'Traffic' },
  { icon: 'layers', label: 'Landing Page' },
  { icon: 'chat', label: 'AI Conversation' },
  { icon: 'pipeline', label: 'CRM' },
];

const DIAGRAM_STAGES = [
  { stage: '01', label: 'Traffic', icon: 'attract' },
  { stage: '02', label: 'Landing Page', icon: 'convert' },
  { stage: '03', label: 'AI Conversation', icon: 'chat' },
  { stage: '04', label: 'Qualified Lead', icon: 'qualify' },
  { stage: '05', label: 'Meeting Book', icon: 'schedule' },
  { stage: '06', label: 'CRM', icon: 'sync' },
  { stage: '07', label: 'Reporting', icon: 'bar' },
];

const HIGHLIGHTS = [
  { icon: 'workflow', label: 'Complete funnel approach' },
  { icon: 'chat', label: 'Real-time AI engagement' },
  { icon: 'target', label: 'Industry-specific qualification' },
  { icon: 'pipeline', label: 'CRM/calendar connections' },
  { icon: 'bar', label: 'Funnel analytics' },
];

export default function AISalesEngine() {
  return (
    <>
      <SEO
        title="AI Sales Engine | Acquisition to CRM, Connected"
        description="The iSN AI Sales Engine combines digital acquisition, landing-page conversion, real-time AI engagement, qualification, scheduling and CRM integration into a single operating flow."
        path="/ai-products/sales-engine"
        jsonLd={[
          serviceSchema({ name: 'AI Sales Engine', description: 'End-to-end acquisition, AI engagement, qualification and CRM integration.' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'AI Products', path: '/ai-products' }, { name: 'AI Sales Engine', path: '/ai-products/sales-engine' }]),
        ]}
      />

      <PageHero
        eyebrow="AI Products — AI Sales Engine"
        title="Your Customer Acquisition Journey, Connected End to End."
        subhead="The iSN AI Sales Engine combines digital acquisition, landing-page conversion, real-time AI engagement, qualification, scheduling and CRM integration into a single operating flow."
        primaryLabel="Build My Sales Engine"
        primaryTo="/contact"
        ctaSource="sales_engine_hero"
        visual={<MiniFlow steps={HERO_FLOW} />}
      />

      <section className="section section--off">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">The Flow</p>
            <h2>From First Click to Full Funnel Reporting.</h2>
          </Reveal>
          <Workflow stages={DIAGRAM_STAGES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">Highlights</p>
            <h2>One System Instead of Five Disconnected Tools.</h2>
          </Reveal>
          <Reveal group className="engine-highlights">
            {HIGHLIGHTS.map((h) => (
              <div className="engine-highlights__item" key={h.label}>
                <Icon name={h.icon} size={20} />
                <span>{h.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA eyebrow="Get Started" title="Connect Your Campaigns, AI Qualification, Calendar and CRM." primaryLabel="Build My Sales Engine" source="sales_engine_final_cta" showAI />
    </>
  );
}
