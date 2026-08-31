import SEO from '../../components/SEO/SEO';
import { serviceSchema, breadcrumbSchema } from '../../components/SEO/schema';
import PageHero from '../../components/Hero/PageHero';
import CTA from '../../components/CTA/CTA';
import Icon from '../../components/Icon/Icon';
import MiniFlow from '../../components/MiniFlow/MiniFlow';
import Reveal from '../../components/Reveal/Reveal';

const HERO_FLOW = [
  { icon: 'chat', label: 'Inquiry' },
  { icon: 'bot', label: 'AI Conversation' },
  { icon: 'qualify', label: 'Qualified' },
  { icon: 'calendar', label: 'Booked Inspection' },
];

const CAPABILITIES = [
  { icon: 'send', title: 'Contact Quickly', copy: 'Contact new homeowners quickly.' },
  { icon: 'chat', title: 'Answer Questions', copy: 'Answer common questions.' },
  { icon: 'sync', title: 'Follow Up', copy: 'Follow up when a homeowner does not respond.' },
  { icon: 'edit', title: 'Collect Information', copy: 'Collect important project information.' },
  { icon: 'target', title: 'Identify Ready Buyers', copy: 'Identify homeowners who are ready to move forward.' },
  { icon: 'calendar', title: 'Help Schedule', copy: 'Help schedule inspections.' },
  { icon: 'layers', title: 'Stay Organized', copy: 'Keep conversations organized.' },
];

const CASES = [
  {
    icon: 'megaphone',
    title: 'A New Roofing Inquiry',
    copy: "A homeowner submits a form asking about a roof replacement. Instead of waiting for a salesperson to manually reach out, the AI immediately starts the conversation — asking about the property, answering initial questions, and guiding them toward booking an inspection. Less chasing. Faster conversations. More opportunities to book.",
  },
  {
    icon: 'bot',
    title: 'The Homeowner Who Goes Quiet',
    copy: 'A homeowner shows interest but does not book an inspection. Instead of letting the lead disappear into a spreadsheet, the AI can follow up at the right time — checking in, answering questions, and making it easy to schedule when they are ready. The lead stays engaged without your team having to remember every follow-up.',
  },
];

export default function CustomAIAutomation() {
  return (
    <>
      <SEO
        title="Custom AI & Automation | Roofing Lead Generation"
        description="Custom AI solutions built around the way your roofing business actually works — from first contact through to a booked inspection."
        path="/solutions/custom-ai"
        jsonLd={[
          serviceSchema({ name: 'Custom AI & Automation', description: 'Configurable AI assistants and workflow automation built around a roofing business.' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions' }, { name: 'Custom AI & Automation', path: '/solutions/custom-ai' }]),
        ]}
      />

      <PageHero
        eyebrow="Solutions — Custom AI & Automation"
        title="From First Contact to Booked Inspection. AI Can Handle the Journey."
        subhead="Stop letting your team spend the day chasing leads, sending follow-ups, and scheduling appointments. AI can take care of the repetitive work that slows a roofing business down, while your team focuses on selling jobs and serving homeowners."
        primaryLabel="Get Started"
        primaryTo="/contact"
        ctaSource="custom_ai_hero"
        visual={<MiniFlow steps={HERO_FLOW} />}
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">Your AI Works While Your Team Works</p>
            <h2>A Homeowner May Submit an Inquiry at 10 PM. AI Can Step In Immediately.</h2>
            <p className="body-lg text-muted">
              The goal is not to replace your team — it's to give your team a system that never gets tired, never forgets a follow-up, and never loses track of an opportunity.
            </p>
          </Reveal>
          <Reveal group className="grid grid-4">
            {CAPABILITIES.map((c) => (
              <div className="card" key={c.title}>
                <div className="outcome-card__icon"><Icon name={c.icon} size={22} /></div>
                <h3 className="h4">{c.title}</h3>
                <p className="text-muted body-sm">{c.copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--off">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Built Around Your Roofing Business</p>
            <h2>An Extension of Your Team, Not Another Tool to Learn.</h2>
            <p className="body-lg text-muted">
              Every roofing company operates differently. Your AI solution can be built around your services, service areas, sales process, qualification questions and scheduling requirements — so the system works as an extension of your team rather than another tool your team has to learn.
            </p>
          </Reveal>
          <Reveal group className="grid grid-2">
            {CASES.map((c) => (
              <div className="card" key={c.title}>
                <div className="outcome-card__icon"><Icon name={c.icon} size={22} /></div>
                <h3 className="h4">{c.title}</h3>
                <p className="text-muted body-sm">{c.copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow eyebrow--on-dark">AI That Simplifies the Day-to-Day</p>
            <h2>More Conversations. Less Manual Work. More Booked Inspections.</h2>
            <p className="text-on-dark-muted body-lg">
              The best AI system is not the one with the most features — it's the one that takes work off your team's plate.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA eyebrow="Get Started" title="Let AI Handle the Repetitive Work." primaryLabel="Get Started" source="custom_ai_final_cta" showAI />
    </>
  );
}
