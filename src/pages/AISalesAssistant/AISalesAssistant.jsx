import SEO from '../../components/SEO/SEO';
import { serviceSchema, breadcrumbSchema, faqSchema } from '../../components/SEO/schema';
import PageHero from '../../components/Hero/PageHero';
import Workflow from '../../components/Workflow/Workflow';
import FAQ from '../../components/FAQ/FAQ';
import CTA from '../../components/CTA/CTA';
import Icon from '../../components/Icon/Icon';
import ChatMockup from './ChatMockup';
import { AI_FAQS } from '../../data/faqs';
import { useUI } from '../../context/UIContext';
import './AISalesAssistant.css';

const DIAGRAM_STAGES = [
  { stage: '01', label: 'Admin Panel', icon: 'workflow' },
  { stage: '02', label: 'Knowledge Base', icon: 'layers' },
  { stage: '03', label: 'AI Conversation', icon: 'chat' },
  { stage: '04', label: 'Qualification Rules', icon: 'qualify' },
  { stage: '05', label: 'Calendar / CRM / Human', icon: 'sync' },
];

const CAPABILITIES = [
  { icon: 'workflow', title: 'Knowledge Base Admin', copy: 'Upload approved business information.' },
  { icon: 'layers', title: 'Website Engagement', copy: 'Embed assistant on websites and landing pages.' },
  { icon: 'qualify', title: 'Lead Qualification', copy: 'Conversational qualification instead of only static forms.' },
  { icon: 'calendar', title: 'Calendar Actions', copy: 'Offer appointments where appropriate.' },
  { icon: 'pipeline', title: 'CRM Integration', copy: 'Push structured lead information into CRM.' },
  { icon: 'users', title: 'Human Handoff', copy: 'Escalate selected conversations.' },
  { icon: 'bar', title: 'Analytics', copy: 'Measure conversations, intent, qualified leads, drop-offs and booking activity.' },
];

export default function AISalesAssistant() {
  const { openChat } = useUI();
  return (
    <>
      <SEO
        title="AI Sales Assistant | Conversational Lead Qualification"
        description="Configure the iSN AI Sales Assistant with your knowledge base, sales questions and business rules to answer visitor questions, qualify interest and trigger the next step."
        path="/ai-products/sales-assistant"
        jsonLd={[
          serviceSchema({ name: 'AI Sales Assistant', description: 'Configurable conversational AI for website engagement and lead qualification.' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'AI Products', path: '/ai-products' }, { name: 'AI Sales Assistant', path: '/ai-products/sales-assistant' }]),
          faqSchema(AI_FAQS),
        ]}
      />

      <PageHero
        eyebrow="AI Products — AI Sales Assistant"
        title="A Sales Assistant That Knows Your Business—and Knows What to Do Next."
        subhead="Configure the iSN AI Sales Assistant with your knowledge base, sales questions and business rules. It can answer visitor questions, understand intent, qualify interest and trigger the right next step."
        primaryLabel="Request a Demo"
        primaryTo="/contact"
        ctaSource="ai_assistant_hero"
        visual={<ChatMockup />}
      />

      <div className="ai-assistant-talk">
        <button type="button" className="link-arrow" onClick={() => openChat('ai_assistant_page')}>
          <Icon name="bot" size={16} /> Talk to the Assistant
        </button>
      </div>

      <section className="section section--off">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">How It Works</p>
            <h2>From Admin Configuration to Human Handoff.</h2>
          </div>
          <Workflow stages={DIAGRAM_STAGES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Capabilities</p>
            <h2>Built for Real Sales Conversations.</h2>
          </div>
          <div className="grid grid-4">
            {CAPABILITIES.map((c) => (
              <div className="card ai-capability" key={c.title}>
                <div className="ai-capability__icon"><Icon name={c.icon} size={20} /></div>
                <h3 className="h4">{c.title}</h3>
                <p className="text-muted body-sm">{c.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--off">
        <div className="container">
          <FAQ items={AI_FAQS} title="AI Sales Assistant FAQs" />
        </div>
      </section>

      <CTA eyebrow="Get Started" title="See the Assistant Configured for Your Business." primaryLabel="Request a Demo" source="ai_assistant_final_cta" showAI />
    </>
  );
}
