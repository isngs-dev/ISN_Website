import SEO from '../../components/SEO/SEO';
import { serviceSchema, breadcrumbSchema } from '../../components/SEO/schema';
import PageHero from '../../components/Hero/PageHero';
import Workflow from '../../components/Workflow/Workflow';
import CTA from '../../components/CTA/CTA';
import Icon from '../../components/Icon/Icon';
import MiniFlow from '../../components/MiniFlow/MiniFlow';
import Reveal from '../../components/Reveal/Reveal';

const HERO_FLOW = [
  { icon: 'attract', label: 'Ad' },
  { icon: 'chat', label: 'Inquiry' },
  { icon: 'calendar', label: 'Calendar' },
  { icon: 'check', label: 'Booked Inspection' },
];

const JOURNEY_STAGES = [
  { stage: '01', label: 'Ad', icon: 'attract', copy: 'A homeowner sees your roofing ad on Google, Meta, or another channel.' },
  { stage: '02', label: 'Inquiry', icon: 'chat', copy: 'They call, submit a form, or request more information.' },
  { stage: '03', label: 'Instant Follow-Up', icon: 'bot', copy: 'Their information enters your system and the follow-up process begins.' },
  { stage: '04', label: 'Qualification', icon: 'qualify', copy: 'The homeowner receives the right questions to help determine their needs.' },
  { stage: '05', label: 'Calendar', icon: 'calendar', copy: 'The homeowner is given an easy way to select a convenient inspection time.' },
  { stage: '06', label: 'Booked Inspection', icon: 'check', copy: 'The appointment is added to your calendar and your team knows what happens next.' },
];

const BENEFITS = [
  { icon: 'sync', title: 'Respond Faster', copy: 'Keep the lead moving even when your team is busy.' },
  { icon: 'layers', title: 'Stay Organized', copy: 'Keep every lead organized in one place.' },
  { icon: 'bot', title: 'Fewer Manual Follow-Ups', copy: 'Reduce manual follow-ups on your team.' },
  { icon: 'calendar', title: 'Easier Scheduling', copy: 'Make scheduling easier for homeowners.' },
  { icon: 'bar', title: 'Clear Pipeline View', copy: 'Give your sales team a clear view of every opportunity.' },
  { icon: 'target', title: 'More Booked Inspections', copy: 'Turn more inquiries into booked inspections.' },
];

export default function CRMAutomation() {
  return (
    <>
      <SEO
        title="CRM & Calendar Automation | Roofing Lead Generation"
        description="Connect your marketing, sales follow-up and scheduling into one streamlined process, so no roofing lead sits waiting."
        path="/solutions/crm-automation"
        jsonLd={[
          serviceSchema({ name: 'CRM & Calendar Automation', description: 'Automated follow-up, qualification and scheduling from roofing lead to booked inspection.' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions' }, { name: 'CRM & Calendar Automation', path: '/solutions/crm-automation' }]),
        ]}
      />

      <PageHero
        eyebrow="Solutions — CRM & Calendar Automation"
        title="From Roofing Lead to Booked Inspection. Automatically."
        subhead="No lead should sit waiting. No homeowner should fall through the cracks. When a homeowner submits a form or calls from an ad, the opportunity is at its most valuable — fast follow-up can make the difference between booking an inspection and losing them to another roofer."
        primaryLabel="Get Started"
        primaryTo="/contact"
        ctaSource="crm_automation_hero"
        visual={<MiniFlow steps={HERO_FLOW} />}
      />

      <section className="section section--off">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">The Homeowner Journey</p>
            <h2>Marketing, Follow-Up and Scheduling in One Streamlined Process.</h2>
          </Reveal>
          <Workflow stages={JOURNEY_STAGES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">Why Automation Matters for Roofers</p>
            <h2>Your Team Focuses on the Homeowner. The System Handles the Busywork.</h2>
            <p className="body-lg text-muted">
              Roofing leads can come in at any time — your team may be on a roof, driving between jobs, or speaking with another homeowner. Automation makes sure the lead keeps moving even when your team is busy.
            </p>
          </Reveal>
          <Reveal group className="grid grid-3">
            {BENEFITS.map((b) => (
              <div className="card" key={b.title}>
                <div className="outcome-card__icon"><Icon name={b.icon} size={22} /></div>
                <h3 className="h4">{b.title}</h3>
                <p className="text-muted body-sm">{b.copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA eyebrow="Get Started" title="Turn More Roofing Leads Into Booked Inspections." primaryLabel="Get Started" source="crm_automation_final_cta" showAI />
    </>
  );
}
