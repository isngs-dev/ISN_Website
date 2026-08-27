import SEO from '../../components/SEO/SEO';
import { serviceSchema, breadcrumbSchema, faqSchema } from '../../components/SEO/schema';
import PageHero from '../../components/Hero/PageHero';
import MiniFlow from '../../components/MiniFlow/MiniFlow';
import Workflow from '../../components/Workflow/Workflow';
import FAQ from '../../components/FAQ/FAQ';
import CTA from '../../components/CTA/CTA';
import Reveal from '../../components/Reveal/Reveal';
import FunnelDashboard from './FunnelDashboard';
import { ROOFING_FAQS } from '../../data/faqs';

const HERO_FLOW = [
  { icon: 'megaphone', label: 'Homeowner Search / Ad' },
  { icon: 'layers', label: 'Roofing Landing Page' },
  { icon: 'bot', label: 'AI Assistant' },
  { icon: 'qualify', label: 'Qualification' },
  { icon: 'calendar', label: 'Inspection Slot' },
  { icon: 'pipeline', label: 'Roofer CRM' },
];

const HOW_IT_WORKS = [
  { stage: '01', label: 'Build Demand', icon: 'attract', copy: 'Target service areas, homeowner intent and roofing services that matter.' },
  { stage: '02', label: 'Convert the Click', icon: 'convert', copy: 'Send visitors to focused landing pages built around inspection intent.' },
  { stage: '03', label: 'Engage Instantly', icon: 'engage', copy: 'AI answers common homeowner questions immediately.' },
  { stage: '04', label: 'Qualify', icon: 'qualify', copy: 'Capture location, roofing need, timing and agreed qualification criteria.' },
  { stage: '05', label: 'Schedule', icon: 'schedule', copy: 'Offer available inspection slots.' },
  { stage: '06', label: 'Sync', icon: 'sync', copy: "Send lead details and conversation context into the roofer's CRM." },
  { stage: '07', label: 'Optimize', icon: 'optimize', copy: 'Analyze campaign-to-inspection performance.' },
];

export default function Roofing() {
  return (
    <>
      <SEO
        title="Roofing Marketing Agency | Roof Inspection Scheduling"
        description="iSN runs the full digital path for roofing companies — Google and Meta campaigns, landing-page conversion, AI engagement, inspection scheduling and CRM handoff."
        path="/industries/roofing"
        jsonLd={[
          serviceSchema({ name: 'Roofing Digital Marketing & Inspection Scheduling', description: 'Digital acquisition, AI qualification and inspection scheduling for U.S. roofing companies.' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Roofing', path: '/industries/roofing' }]),
          faqSchema(ROOFING_FAQS),
        ]}
      />

      <PageHero
        eyebrow="Industries — Roofing"
        title="Turn Homeowner Interest Into Booked Roof Inspections."
        subhead="iSN runs the entire digital path—from Google and Meta campaigns to landing-page conversion, AI engagement, inspection scheduling and CRM handoff—so your sales team can focus on turning inspections into roofing jobs."
        primaryLabel="Get More Inspections"
        primaryTo="/contact"
        secondaryLabel="See the Inspection Scheduling Flow"
        secondaryTo="#how-it-works"
        ctaSource="roofing_hero"
        visual={<MiniFlow steps={HERO_FLOW} />}
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">The Problem</p>
            <h2>A Lead Is Not the Same as an Inspection.</h2>
            <p className="body-lg text-muted">
              Roofing businesses often pay for clicks and leads, then lose momentum through slow follow-up, missed calls, low-intent inquiries or scheduling friction. iSN is designed to reduce that gap by engaging homeowners immediately and guiding qualified prospects toward an inspection slot.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="how-it-works" className="section section--off">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">How It Works</p>
            <h2>Seven Steps From Ad Click to Booked Inspection.</h2>
          </Reveal>
          <Workflow stages={HOW_IT_WORKS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">Full-Funnel View</p>
            <h2>From Ad Spend to Jobs Won.</h2>
          </Reveal>
          <Reveal><FunnelDashboard /></Reveal>
        </div>
      </section>

      <section className="section section--off">
        <div className="container">
          <FAQ items={ROOFING_FAQS} title="Roofing FAQs" />
        </div>
      </section>

      <CTA
        eyebrow="Get Started"
        title="Focus on Closing Roofing Jobs. Let the System Help Fill Your Inspection Calendar."
        primaryLabel="Build My Inspection Scheduling Engine"
        source="roofing_final_cta"
        showAI
      />
    </>
  );
}
