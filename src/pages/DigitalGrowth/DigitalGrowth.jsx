import SEO from '../../components/SEO/SEO';
import { serviceSchema, breadcrumbSchema } from '../../components/SEO/schema';
import PageHero from '../../components/Hero/PageHero';
import CTA from '../../components/CTA/CTA';
import Icon from '../../components/Icon/Icon';
import MiniFlow from '../../components/MiniFlow/MiniFlow';
import Reveal from '../../components/Reveal/Reveal';

const HERO_FLOW = [
  { icon: 'attract', label: 'Google + Meta Ads' },
  { icon: 'target', label: 'SEO + Local Search' },
  { icon: 'chat', label: 'Calls + Inquiries' },
];

const CAPABILITIES = [
  { icon: 'target', title: 'Reach Ready Homeowners', copy: 'Reach homeowners actively looking for roofing services.' },
  { icon: 'chat', title: 'Generate Inquiries', copy: 'Generate calls and online inquiries.' },
  { icon: 'map-pin', title: 'Build Local Visibility', copy: 'Build visibility in their local service areas.' },
  { icon: 'megaphone', title: 'Promote High-Value Work', copy: 'Promote high-value services such as roof replacement and storm damage.' },
  { icon: 'bar', title: 'Improve Continuously', copy: 'Continuously improve campaigns based on what is actually generating leads.' },
];

export default function DigitalGrowth() {
  return (
    <>
      <SEO
        title="Digital Growth | Roofing Lead Generation"
        description="iSN's Digital Growth solutions help roofing companies reach homeowners at the right time, across the right channels, and turn that attention into real inquiries."
        path="/solutions/digital-growth"
        jsonLd={[
          serviceSchema({ name: 'Digital Growth', description: 'Google and Meta Ads, SEO and local search built around real buyer intent for roofing companies.' }),
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions' }, { name: 'Digital Growth', path: '/solutions/digital-growth' }]),
        ]}
      />

      <PageHero
        eyebrow="Solutions — Digital Growth"
        title="Turn Your Roofing Business Into a Lead-Generating Machine."
        subhead="More visibility. Better leads. More roofing opportunities. Homeowners are searching for roofing companies every day — the challenge is making sure they find your business when they're ready to take action."
        primaryLabel="Get Started"
        primaryTo="/contact"
        ctaSource="digital_growth_hero"
        visual={<MiniFlow steps={HERO_FLOW} />}
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Get Found When Homeowners Need You Most</p>
            <h2>A Homeowner With a Leaking Roof Does Not Want to Wait.</h2>
            <p className="body-lg text-muted">
              They search, compare and contact a roofing company quickly. Your digital presence needs to be ready for that moment — from Google and Meta Ads to SEO and local search, we build a strategy around one goal: bringing more qualified roofing opportunities to your business.
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
            <p className="eyebrow eyebrow--on-dark">Growth That Goes Beyond Getting Clicks</p>
            <h2>Traffic Means Very Little if It Does Not Turn Into Conversations and Inspections.</h2>
            <p className="text-on-dark-muted body-lg">
              That's why we focus on the complete customer acquisition journey, from the first ad impression to the first conversation with your team — a more consistent flow of roofing opportunities without relying entirely on referrals or word of mouth.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA eyebrow="Get Started" title="Build a Steady Pipeline of Roofing Opportunities." primaryLabel="Get Started" source="digital_growth_final_cta" showAI />
    </>
  );
}
