import SEO from '../../components/SEO/SEO';
import { serviceSchema, breadcrumbSchema } from '../../components/SEO/schema';
import PageHero from '../../components/Hero/PageHero';
import Icon from '../../components/Icon/Icon';
import CTA from '../../components/CTA/CTA';
import MiniFlow from '../../components/MiniFlow/MiniFlow';
import Reveal from '../../components/Reveal/Reveal';
import './MysteryShoppingEditing.css';

const HERO_FLOW = [
  { icon: 'target', label: 'Shop Submitted' },
  { icon: 'edit', label: 'Editing & QA' },
  { icon: 'check', label: 'Guideline Review' },
  { icon: 'pipeline', label: 'Client Delivery' },
];

const CAPABILITIES = [
  { icon: 'edit', label: 'Narrative shop editing' },
  { icon: 'layers', label: 'Photo review' },
  { icon: 'chat', label: 'Audio Mystery Shop review' },
  { icon: 'target', label: 'Video Mystery Shop review' },
  { icon: 'check', label: 'Questionnaire consistency' },
  { icon: 'shield', label: 'Report completeness' },
  { icon: 'qualify', label: 'Guideline-based QA' },
  { icon: 'users', label: 'Scalable editorial teams' },
  { icon: 'sync', label: 'Calibration processes' },
  { icon: 'workflow', label: 'Escalation workflows' },
];

export default function MysteryShoppingEditing() {
  return (
    <>
      <SEO
        title="Mystery Shopping Editing Services | Quality Support"
        description="iSN supports Mystery Shopping companies with structured editing and QA workflows designed around client guidelines, turnaround commitments and program complexity."
        path="/mystery-shopping/editing"
        jsonLd={[
          serviceSchema({ name: 'Mystery Shopping Editing & QA', description: 'Editorial and quality assurance support for Mystery Shopping programs.' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Mystery Shopping', path: '/industries/mystery-shopping' }, { name: 'Editing & QA', path: '/mystery-shopping/editing' }]),
        ]}
      />

      <PageHero
        eyebrow="Mystery Shopping — Editing & QA"
        title="Editing & Quality Support Built Around Your Program Standards."
        subhead="Extend your operational capacity without compromising consistency. iSN supports Mystery Shopping companies with structured editing and QA workflows designed around client guidelines, turnaround commitments and program complexity."
        primaryLabel="Discuss Your Editing Requirement"
        primaryTo="/contact"
        ctaSource="ms_editing_hero"
        visual={<MiniFlow steps={HERO_FLOW} />}
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">Capabilities</p>
            <h2>Editorial and QA Support Across Every Shop Format.</h2>
          </Reveal>
          <Reveal group className="editing-grid">
            {CAPABILITIES.map((c) => (
              <div className="editing-grid__item card" key={c.label}>
                <Icon name={c.icon} size={20} />
                <span>{c.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA
        eyebrow="Get Started"
        title="Extend Your Editorial Capacity Without Compromising Consistency."
        primaryLabel="Discuss Your Editing Requirement"
        source="ms_editing_final_cta"
      />
    </>
  );
}
