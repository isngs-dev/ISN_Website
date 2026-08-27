import { useState } from 'react';
import SEO from '../../components/SEO/SEO';
import { breadcrumbSchema } from '../../components/SEO/schema';
import CaseStudyCard from '../../components/CaseStudyCard/CaseStudyCard';
import CTA from '../../components/CTA/CTA';
import { CASE_STUDIES, CASE_STUDY_FILTERS } from '../../data/caseStudies';
import './CaseStudies.css';

export default function CaseStudies() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? CASE_STUDIES : CASE_STUDIES.filter((s) => s.category === filter);

  return (
    <>
      <SEO
        title="Case Studies | Roofing, Franchise & Mystery Shopping Growth"
        description="Real systems built for real business outcomes across roofing, franchise growth, Mystery Shopping and AI automation."
        path="/case-studies"
        jsonLd={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Case Studies', path: '/case-studies' }])]}
      />

      <section className="page-hero section--dark">
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow eyebrow--on-dark">Case Studies</p>
          <h1>Show the Outcome, Not the Activity.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="case-filters">
            {CASE_STUDY_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={f === filter ? 'is-active' : ''}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid grid-3">
            {filtered.map((s) => <CaseStudyCard key={s.key} study={s} />)}
          </div>
        </div>
      </section>

      <CTA eyebrow="Get Started" title="Let's Build Your Next Case Study." primaryLabel="Book a Strategy Call" source="case_studies_final_cta" />
    </>
  );
}
