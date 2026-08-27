import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { organizationSchema } from '../../components/SEO/schema';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import Workflow from '../../components/Workflow/Workflow';
import Reveal from '../../components/Reveal/Reveal';
import RevealText from '../../components/Reveal/RevealText';
import IndustryCard from '../../components/IndustryCard/IndustryCard';
import ProductCard from '../../components/ProductCard/ProductCard';
import OutcomeCard from '../../components/OutcomeCard/OutcomeCard';
import Testimonial from '../../components/Testimonial/Testimonial';
import Metrics from '../../components/Metrics/Metrics';
import CaseStudyCard from '../../components/CaseStudyCard/CaseStudyCard';
import HeroVisual from './HeroVisual';
import HeroSlider from './HeroSlider';
import useHeroSlides from './useHeroSlides';
import { OUTCOMES } from '../../data/outcomes';
import { GROWTH_ENGINE_STAGES } from '../../data/growthEngine';
import { INDUSTRIES } from '../../data/industries';
import { PRODUCTS } from '../../data/products';
import { WHY_ISN } from '../../data/whyISN';
import { CASE_STUDIES } from '../../data/caseStudies';
import { TESTIMONIALS } from '../../data/testimonials';
import { METRICS, CLIENT_LOGOS } from '../../data/company';
import { useUI } from '../../context/UIContext';
import { trackStrategyCallCTA } from '../../lib/analytics';
import './Home.css';

const WHY_ICONS = ['target', 'layers', 'ai', 'sync', 'users'];
const MS_ECOSYSTEM_STAGES = [
  { stage: '01', label: 'Editing & QA', icon: 'edit' },
  { stage: '02', label: 'Business Growth', icon: 'growth' },
  { stage: '03', label: 'Shopper Recruitment', icon: 'users' },
  { stage: '04', label: 'Real-Time Analytics', icon: 'bar' },
  { stage: '05', label: 'AI Recommendations', icon: 'ai' },
];

export default function Home() {
  const { openChat } = useUI();
  const heroSlides = useHeroSlides();

  return (
    <>
      <SEO
        title="Digital Growth + AI Automation for Roofing, Franchise & Mystery Shopping"
        description="iSN helps roofing companies, franchise brands and mystery shopping companies generate demand, engage prospects with AI, and move qualified opportunities into calendars and CRMs."
        path="/"
        jsonLd={[organizationSchema()]}
      />

      {/* 1. Hero */}
      <section className="home-hero section--dark">
        <div className="container home-hero__grid">
          <HeroSlider {...heroSlides} />
          <HeroVisual slide={heroSlides.slide} />
        </div>
      </section>

      {/* 2. Trust strip */}
      <section className="trust-strip section--dark section--tight">
        <Reveal as="div" className="container">
          <p className="trust-strip__line body-sm">
            Built on years of U.S. client delivery, deep Mystery Shopping expertise and a growing portfolio of AI-powered growth systems.
          </p>
          <Metrics metrics={METRICS} />
          <div className="trust-strip__logos">
            {CLIENT_LOGOS.map((c, i) => (
              <span key={i} className="trust-strip__logo placeholder-tag">{c.name}</span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 3. Outcome selector */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-head section-head--center">
            <p className="eyebrow">Start Here</p>
            <h2>Start With the Outcome You Need.</h2>
            <p className="text-muted">Choose the business outcome. We'll show you the system behind it.</p>
          </Reveal>
          <Reveal as="div" group className="grid grid-3">
            {OUTCOMES.map((o) => <OutcomeCard key={o.title} outcome={o} />)}
          </Reveal>
        </div>
      </section>

      {/* 4. iSN Growth Engine */}
      <section id="growth-engine" className="section section--dark">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow eyebrow--on-dark">The iSN Growth Engine</p>
            <RevealText as="h2" text="One Connected Engine. From First Click to Qualified Opportunity." />
            <p className="text-on-dark-muted body-lg">
              Most agencies stop at traffic or leads. iSN connects acquisition, conversion and follow-through so fewer opportunities disappear between the ad click and your sales team.
            </p>
          </div>
          <Workflow stages={GROWTH_ENGINE_STAGES} tone="dark" />
          <div className="section-cta">
            <Button to="/solutions#growth-engine" variant="on-dark" arrow>Explore the iSN Growth Engine</Button>
          </div>
        </div>
      </section>

      {/* 5. Industries */}
      <section className="section section--off">
        <div className="container">
          <Reveal as="div" className="section-head section-head--center">
            <p className="eyebrow">Industries</p>
            <h2>Growth Systems Built Around How Your Industry Actually Works.</h2>
          </Reveal>
          <Reveal as="div" group className="grid grid-3">
            {INDUSTRIES.map((ind) => <IndustryCard key={ind.key} industry={ind} />)}
          </Reveal>
        </div>
      </section>

      {/* 6. AI Products */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-head section-head--center">
            <p className="eyebrow">AI Products</p>
            <h2>AI Built Around Real Workflows, Not Just Conversations.</h2>
          </Reveal>
          <Reveal as="div" group className="grid grid-4">
            {PRODUCTS.map((p) => <ProductCard key={p.key} product={p} />)}
          </Reveal>
        </div>
      </section>

      {/* 7. Mystery Shopping expertise */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow eyebrow--on-dark">Mystery Shopping Expertise</p>
            <h2>We Have Worked Inside the Mystery Shopping Workflow for Years. Now We Help Improve the Whole System.</h2>
            <p className="text-on-dark-muted body-lg">
              iSN continues to provide high-volume Mystery Shopping editing and quality support while expanding into the areas MS companies increasingly need: new-business generation, shopper recruitment, analytics and AI-enabled operations.
            </p>
          </div>
          <Workflow stages={MS_ECOSYSTEM_STAGES} tone="dark" />
          <div className="section-cta">
            <Button to="/industries/mystery-shopping" variant="on-dark" arrow>See Our Mystery Shopping Capabilities</Button>
          </div>
        </div>
      </section>

      {/* 8. Why iSN */}
      <section className="section section--off">
        <div className="container">
          <Reveal as="div" className="section-head section-head--center">
            <p className="eyebrow">Why iSN</p>
            <h2>More Than Marketing. More Than Technology.</h2>
          </Reveal>
          <Reveal as="div" group className="grid grid-3 why-isn-grid">
            {WHY_ISN.map((w, i) => (
              <div className="card why-isn-card" key={w.title}>
                <div className="why-isn-card__icon"><Icon name={WHY_ICONS[i]} size={22} /></div>
                <h3 className="h4">{w.title}</h3>
                <p className="text-muted body-sm">{w.copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 9. Case study preview */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-head">
            <p className="eyebrow">Case Studies</p>
            <h2>Show the Outcome, Not the Activity.</h2>
          </Reveal>
          <Reveal as="div" group className="grid grid-4">
            {CASE_STUDIES.map((s) => <CaseStudyCard key={s.key} study={s} />)}
          </Reveal>
          <div className="section-cta">
            <Link to="/case-studies" className="link-arrow">View all case studies <Icon name="arrow" size={16} /></Link>
          </div>
        </div>
      </section>

      {/* 10. Testimonials */}
      <section className="section section--off">
        <div className="container">
          <Reveal as="div" className="section-head section-head--center">
            <p className="eyebrow">Client Feedback</p>
            <h2>Trusted by Clients We've Worked With for Years.</h2>
          </Reveal>
          <Reveal as="div" group className="grid grid-3">
            {TESTIMONIALS.map((t) => <Testimonial key={t.name} testimonial={t} />)}
          </Reveal>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="section section--dark final-cta">
        <Reveal as="div" className="container final-cta__grid">
          <div className="final-cta__copy">
            <h2>Ready to Build a Better Growth Engine?</h2>
            <p className="body-lg text-on-dark-muted">
              Tell us the outcome you want. We'll map the acquisition, AI and automation system required to get you there.
            </p>
            <div className="final-cta__actions">
              <Button to="/contact" variant="primary" onClick={() => trackStrategyCallCTA({ source: 'home_final_cta' })}>
                Book a Strategy Call
              </Button>
              <Button variant="on-dark" onClick={() => openChat('home_final_cta')}>Talk to iSN AI</Button>
            </div>
          </div>
          <div className="final-cta__previews">
            <div className="final-cta__preview-card">
              <Icon name="bot" size={20} />
              <p className="h4">AI Assistant</p>
              <p className="body-sm text-on-dark-muted">"What outcome are you trying to achieve?"</p>
            </div>
            <div className="final-cta__preview-card">
              <Icon name="calendar" size={20} />
              <p className="h4">Strategy Call</p>
              <p className="body-sm text-on-dark-muted">Tue, 2:30 PM — 30 min</p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
