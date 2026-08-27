import SEO from '../../components/SEO/SEO';
import { serviceSchema, breadcrumbSchema } from '../../components/SEO/schema';
import PageHero from '../../components/Hero/PageHero';
import Workflow from '../../components/Workflow/Workflow';
import CTA from '../../components/CTA/CTA';
import MiniFlow from '../../components/MiniFlow/MiniFlow';
import DashboardMockup from './DashboardMockup';

const HERO_FLOW = [
  { icon: 'layers', label: 'SASSIE / Shopmetrics' },
  { icon: 'sync', label: 'Data Connector' },
  { icon: 'dashboard', label: 'Live Dashboard' },
];

const PIPELINE_STAGES = [
  { stage: '01', label: 'SASSIE / Shopmetrics', icon: 'layers' },
  { stage: '02', label: 'Data Connector', icon: 'sync' },
  { stage: '03', label: 'Live Dashboard', icon: 'dashboard' },
  { stage: '04', label: 'Program / Location Analytics', icon: 'bar' },
  { stage: '05', label: 'AI Recommendations', icon: 'ai' },
];

export default function MSIntelligence() {
  return (
    <>
      <SEO
        title="Mystery Shopping Analytics Dashboard | SASSIE & Shopmetrics"
        description="Connect your SASSIE or Shopmetrics data to a live analytics layer that updates as shop data becomes available, giving teams faster visibility into performance, exceptions and opportunities for action."
        path="/ai-products/ms-intelligence-dashboard"
        jsonLd={[
          serviceSchema({ name: 'MS Intelligence Dashboard', description: 'Real-time Mystery Shopping analytics connected to SASSIE and Shopmetrics.' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'AI Products', path: '/ai-products' }, { name: 'MS Intelligence Dashboard', path: '/ai-products/ms-intelligence-dashboard' }]),
        ]}
      />

      <PageHero
        eyebrow="AI Products — MS Intelligence Dashboard"
        title="Turn Every Completed Shop Into Real-Time Operational Intelligence."
        subhead="Connect your SASSIE or Shopmetrics data to a live analytics layer that updates as shop data becomes available, giving teams faster visibility into performance, exceptions and opportunities for action."
        primaryLabel="Request a Dashboard Demo"
        primaryTo="/contact"
        ctaSource="ms_dashboard_hero"
        visual={<MiniFlow steps={HERO_FLOW} />}
      />

      <section className="section section--off">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Data Pipeline</p>
            <h2>From Raw Shop Data to AI-Supported Decisions.</h2>
          </div>
          <Workflow stages={PIPELINE_STAGES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Dashboard Modules</p>
            <h2>Program, Region and Location Performance in One View.</h2>
          </div>
          <DashboardMockup />
        </div>
      </section>

      <CTA eyebrow="Get Started" title="See Your Program Data as a Live Dashboard." primaryLabel="Request a Dashboard Demo" source="ms_dashboard_final_cta" showAI />
    </>
  );
}
