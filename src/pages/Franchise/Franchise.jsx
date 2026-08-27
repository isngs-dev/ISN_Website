import SEO from '../../components/SEO/SEO';
import { serviceSchema, breadcrumbSchema, faqSchema } from '../../components/SEO/schema';
import PageHero from '../../components/Hero/PageHero';
import MiniFlow from '../../components/MiniFlow/MiniFlow';
import FAQ from '../../components/FAQ/FAQ';
import CTA from '../../components/CTA/CTA';
import Icon from '../../components/Icon/Icon';
import Reveal from '../../components/Reveal/Reveal';
import { FRANCHISE_FAQS } from '../../data/faqs';
import './Franchise.css';

const HERO_FLOW = [
  { icon: 'megaphone', label: 'Targeted Campaigns' },
  { icon: 'layers', label: 'Franchise Landing Page' },
  { icon: 'bot', label: 'AI Qualification' },
  { icon: 'target', label: 'Prospect Profile' },
  { icon: 'calendar', label: 'Discovery Call' },
  { icon: 'pipeline', label: 'CRM' },
];

const CONTENT_SECTIONS = [
  {
    icon: 'attract',
    title: 'Attract the Right Profiles',
    copy: 'Run Google and Meta campaigns around geography, business ownership interest, investment intent and agreed audience segments.',
  },
  {
    icon: 'layers',
    title: 'Explain the Opportunity Clearly',
    copy: 'Use dedicated franchise landing pages instead of sending prospects to generic corporate websites.',
  },
  {
    icon: 'qualify',
    title: 'Qualify Before Handoff',
    copy: 'Capture initial indicators such as geography, investment range, timeline, business background and preferred territory. Only ask information that is legally and commercially appropriate.',
  },
  {
    icon: 'schedule',
    title: 'Move Qualified Interest Forward',
    copy: 'Allow serious prospects to schedule a discovery conversation.',
  },
  {
    icon: 'bar',
    title: 'Measure the Full Funnel',
    copy: 'Measure campaign source through qualified franchise discovery calls.',
  },
];

export default function Franchise() {
  return (
    <>
      <SEO
        title="Franchise Development Marketing | Franchise Lead Generation"
        description="iSN combines targeted digital campaigns, high-conversion franchise landing pages and AI-assisted qualification to help your development team spend more time with serious prospects."
        path="/industries/franchise-growth"
        jsonLd={[
          serviceSchema({ name: 'Franchise Development Marketing', description: 'Digital acquisition, landing pages and AI qualification for franchise development teams.' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Franchise Growth', path: '/industries/franchise-growth' }]),
          faqSchema(FRANCHISE_FAQS),
        ]}
      />

      <PageHero
        eyebrow="Industries — Franchise Growth"
        title="Build a Stronger Pipeline of Prospective Franchise Owners."
        subhead="iSN combines targeted digital campaigns, high-conversion franchise landing pages and AI-assisted qualification to help your development team spend more time with serious prospects."
        primaryLabel="Grow My Franchise Network"
        primaryTo="/contact"
        ctaSource="franchise_hero"
        visual={<MiniFlow steps={HERO_FLOW} />}
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">How It Works</p>
            <h2>From Targeted Campaign to Qualified Discovery Call.</h2>
          </Reveal>
          <Reveal group className="franchise-content">
            {CONTENT_SECTIONS.map((c) => (
              <div className="franchise-content__row" key={c.title}>
                <div className="franchise-content__icon"><Icon name={c.icon} size={24} /></div>
                <div>
                  <h3 className="h4">{c.title}</h3>
                  <p className="text-muted">{c.copy}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--off">
        <div className="container">
          <FAQ items={FRANCHISE_FAQS} title="Franchise Growth FAQs" />
        </div>
      </section>

      <CTA
        eyebrow="Get Started"
        title="Build Your Next Generation of Franchise Owners."
        copy="Tell us your territory goals. We'll map the acquisition and qualification system to get there."
        primaryLabel="Grow My Franchise Network"
        source="franchise_final_cta"
        showAI
      />
    </>
  );
}
