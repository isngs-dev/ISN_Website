import SEO from '../../components/SEO/SEO';
import { organizationSchema, breadcrumbSchema } from '../../components/SEO/schema';
import CTA from '../../components/CTA/CTA';
import Icon from '../../components/Icon/Icon';
import Testimonial from '../../components/Testimonial/Testimonial';
import Reveal from '../../components/Reveal/Reveal';
import { TESTIMONIALS } from '../../data/testimonials';
import './About.css';


const STORY = [
  { icon: 'shield', title: 'Where We Started', copy: 'Process-led managed services and quality support.' },
  { icon: 'check', title: 'What We Learned', copy: 'Reliable outcomes require good process, domain understanding and accountability.' },
  { icon: 'growth', title: 'How We Evolved', copy: 'Digital marketing added acquisition. AI and automation added engagement, integration and intelligence.' },
  { icon: 'ai', title: 'Where We Are Going', copy: 'Industry-specific growth engines, specialist technology and practical AI products.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About iSN Business Solutions"
        description="Built on operational discipline, evolving through digital growth and AI. Learn how iSN grew from managed services into a Digital Growth + AI Automation company."
        path="/about"
        jsonLd={[organizationSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])]}
      />

      <section className="page-hero section--dark">
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow eyebrow--on-dark">About iSN</p>
          <h1>Built on Operational Discipline. Evolving Through Digital Growth and AI.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal group className="about-story">
            {STORY.map((s, i) => (
              <div className="about-story__row" key={s.title}>
                <div className="about-story__marker">
                  <div className="about-story__icon"><Icon name={s.icon} size={22} /></div>
                  {i < STORY.length - 1 && <div className="about-story__line" />}
                </div>
                <div>
                  <h3 className="h4">{s.title}</h3>
                  <p className="text-muted">{s.copy}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--off">
        <div className="container">
          <Reveal group className="leader-card">
            <div className="leader-card__info">
              <div className="leader-card__avatar"><Icon name="user" size={40} /></div>
              <h2 className="leader-card__name">Dinesh Dalamal</h2>
              <p className="leader-card__title">Managing Director</p>
              <p className="text-muted">
                Incorporated in 2001, iSN began its journey specializing in information processing and data digitization, empowering companies to achieve their full potential. Over the past 23 years, we have evolved alongside the industry, continually enhancing our service offerings to support business growth. Our expertise spans market research, performance marketing, information processing, and comprehensive managed services. I firmly believe in fostering leadership and ingenuity among our employees. Our holistic approach ensures that we deliver exceptional results for our clients while building enduring relationships that stand the test of time.
              </p>
            </div>
            <div className="leader-card__photo">
              <img src="/images/Managing-Director-1.jpg" alt="Dinesh Dalamal, Managing Director of iSN Business Solutions" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">Client Feedback</p>
            <h2>What Clients Say.</h2>
          </Reveal>
          <Reveal group className="grid grid-3">
            {TESTIMONIALS.map((t) => <Testimonial key={t.name} testimonial={t} />)}
          </Reveal>
        </div>
      </section>

      <CTA eyebrow="Get Started" title="Let's Talk About Your Growth Engine." primaryLabel="Book a Strategy Call" source="about_final_cta" showAI />
    </>
  );
}
