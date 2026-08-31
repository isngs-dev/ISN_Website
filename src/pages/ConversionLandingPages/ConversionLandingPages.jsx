import SEO from '../../components/SEO/SEO';
import { serviceSchema, breadcrumbSchema } from '../../components/SEO/schema';
import PageHero from '../../components/Hero/PageHero';
import CTA from '../../components/CTA/CTA';
import Icon from '../../components/Icon/Icon';
import MiniFlow from '../../components/MiniFlow/MiniFlow';
import Reveal from '../../components/Reveal/Reveal';

const HERO_FLOW = [
  { icon: 'attract', label: 'Ad Click' },
  { icon: 'layers', label: 'Landing Page' },
  { icon: 'calendar', label: 'Inspection Request' },
];

const CAPABILITIES = [
  { icon: 'layers', title: 'Services You Provide', copy: 'The roofing services you provide.' },
  { icon: 'map-pin', title: 'Areas You Serve', copy: 'The areas you serve.' },
  { icon: 'shield', title: 'Why Homeowners Trust You', copy: 'Why homeowners can trust your company.' },
  { icon: 'check', title: 'Experience + Credentials', copy: 'Your experience and credentials.' },
  { icon: 'calendar', title: 'A Clear Next Step', copy: 'A clear path to request an inspection or speak with your team.' },
];

export default function ConversionLandingPages() {
  return (
    <>
      <SEO
        title="Conversion Landing Pages | Roofing Lead Generation"
        description="Conversion-focused landing pages built specifically for roofing businesses, designed around the services, locations and customers you want to reach."
        path="/solutions/landing-pages"
        jsonLd={[
          serviceSchema({ name: 'Conversion Landing Pages', description: 'Purpose-built landing pages that turn roofing ad traffic into inspection requests.' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions' }, { name: 'Conversion Landing Pages', path: '/solutions/landing-pages' }]),
        ]}
      />

      <PageHero
        eyebrow="Solutions — Conversion Landing Pages"
        title="Turn Roofing Traffic Into Real Opportunities."
        subhead="Getting homeowners to your website is only half the job. Getting them to contact you is what matters — when a homeowner clicks your roofing ad, you have a small window to earn their trust."
        primaryLabel="Get Started"
        primaryTo="/contact"
        ctaSource="landing_pages_hero"
        visual={<MiniFlow steps={HERO_FLOW} />}
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Built for the Roofing Customer</p>
            <h2>A Homeowner Visiting Your Page Should Not Have to Search for Answers.</h2>
            <p className="body-lg text-muted">
              We create conversion-focused landing pages specifically for roofing businesses, designed around the services, locations and customers you want to reach — making the important information clear and easy to find.
            </p>
          </Reveal>
          <Reveal group className="grid grid-3">
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

      <section className="section section--dark">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow eyebrow--on-dark">Every Click Should Have a Purpose</p>
            <h2>Turn "I Need a Roofer" Into "I Want an Inspection."</h2>
            <p className="text-on-dark-muted body-lg">
              You're paying to bring potential customers to your website — your landing page should help turn that investment into an opportunity. We remove distractions, simplify the message, and create a clear path to action, so your roofing business gets more value from every visitor, every campaign and every advertising dollar.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA eyebrow="Get Started" title="Turn More Roofing Traffic Into Booked Inspections." primaryLabel="Get Started" source="landing_pages_final_cta" showAI />
    </>
  );
}
