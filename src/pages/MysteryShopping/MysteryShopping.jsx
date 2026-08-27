import SEO from '../../components/SEO/SEO';
import { serviceSchema, breadcrumbSchema, faqSchema } from '../../components/SEO/schema';
import PageHero from '../../components/Hero/PageHero';
import Workflow from '../../components/Workflow/Workflow';
import ProductCard from '../../components/ProductCard/ProductCard';
import FAQ from '../../components/FAQ/FAQ';
import CTA from '../../components/CTA/CTA';
import MiniFlow from '../../components/MiniFlow/MiniFlow';
import { MS_FAQS } from '../../data/faqs';

const HERO_FLOW = [
  { icon: 'megaphone', label: 'Win Programs' },
  { icon: 'users', label: 'Recruit Shoppers' },
  { icon: 'edit', label: 'Edit / QA' },
  { icon: 'bar', label: 'Analyze Results' },
];

const PILLARS = [
  {
    key: 'editing',
    headline: 'Mystery Shopping Editing & QA',
    copy: 'Scalable editorial and quality support built around your program standards.',
    cta: 'Discuss Your Editing Requirement',
    to: '/mystery-shopping/editing',
    visual: 'chat',
  },
  {
    key: 'growth',
    headline: 'MS Business Growth Engine',
    copy: 'Google/Meta campaigns → landing page → AI prospect engagement → qualified B2B opportunity → CRM.',
    cta: 'Build My Growth Engine',
    to: '/contact',
    visual: 'pipeline',
  },
  {
    key: 'recruitment',
    headline: 'Shopper Recruitment',
    copy: 'Digital acquisition plus AI-powered matching and outreach.',
    cta: 'Explore Shopper Recruitment AI',
    to: '/ai-products/shopper-recruitment',
    visual: 'map',
  },
  {
    key: 'dashboard',
    headline: 'MS Intelligence Dashboard',
    copy: 'SASSIE / Shopmetrics-connected analytics with AI-supported recommendations.',
    cta: 'Request Dashboard Demo',
    to: '/ai-products/ms-intelligence-dashboard',
    visual: 'dashboard',
  },
];

const ECOSYSTEM_STAGES = [
  { stage: '01', label: 'Win Programs', icon: 'megaphone' },
  { stage: '02', label: 'Recruit Shoppers', icon: 'users' },
  { stage: '03', label: 'Execute Shops', icon: 'target' },
  { stage: '04', label: 'Edit / QA', icon: 'edit' },
  { stage: '05', label: 'Analyze Results', icon: 'bar' },
  { stage: '06', label: 'Improve Operations', icon: 'sync' },
];

export default function MysteryShopping() {
  return (
    <>
      <SEO
        title="Mystery Shopping Editing, Growth, Recruitment & Analytics"
        description="iSN combines years of Mystery Shopping operational experience with digital marketing, AI and analytics to help MS companies deliver programs, win business, recruit shoppers and make faster decisions."
        path="/industries/mystery-shopping"
        jsonLd={[
          serviceSchema({ name: 'Mystery Shopping Growth & Operations', description: 'Editing/QA, business growth, shopper recruitment and analytics for Mystery Shopping companies.' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Mystery Shopping', path: '/industries/mystery-shopping' }]),
          faqSchema(MS_FAQS),
        ]}
      />

      <PageHero
        eyebrow="Industries — Mystery Shopping"
        title="Built for the Mystery Shopping Industry. From Editing to Growth, Recruitment and Intelligence."
        subhead="iSN combines years of Mystery Shopping operational experience with digital marketing, AI and analytics to help MS companies deliver programs, win business, recruit shoppers and make faster decisions."
        primaryLabel="Talk to an MS Specialist"
        primaryTo="/contact"
        ctaSource="ms_hero"
        visual={<MiniFlow steps={HERO_FLOW} />}
      />

      <section id="growth" className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Solution Pillars</p>
            <h2>Four Capabilities. One Connected Operation.</h2>
          </div>
          <div className="grid grid-4">
            {PILLARS.map((p) => <ProductCard key={p.key} product={p} />)}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow eyebrow--on-dark">The MS Ecosystem</p>
            <h2>Every Stage of the Mystery Shopping Lifecycle, Connected.</h2>
          </div>
          <Workflow stages={ECOSYSTEM_STAGES} tone="dark" />
        </div>
      </section>

      <section className="section section--off">
        <div className="container">
          <FAQ items={MS_FAQS} title="Mystery Shopping FAQs" />
        </div>
      </section>

      <CTA
        eyebrow="Get Started"
        title="Let's Talk About Your Mystery Shopping Program."
        primaryLabel="Talk to an MS Specialist"
        source="ms_final_cta"
        showAI
      />
    </>
  );
}
