import { useState } from 'react';
import SEO from '../../components/SEO/SEO';
import { breadcrumbSchema } from '../../components/SEO/schema';
import Icon from '../../components/Icon/Icon';
import CTA from '../../components/CTA/CTA';
import Reveal from '../../components/Reveal/Reveal';
import ArticleModal from '../../components/ArticleModal/ArticleModal';
import { INSIGHTS, INSIGHTS_CATEGORIES } from '../../data/insights';
import './Insights.css';

export default function Insights() {
  const [category, setCategory] = useState('All');
  const [openArticle, setOpenArticle] = useState(null);
  const filtered = category === 'All' ? INSIGHTS : INSIGHTS.filter((i) => i.category === category);

  return (
    <>
      <SEO
        title="Insights | Growth, AI & Automation Resources"
        description="Practical resources on roofing growth, franchise development, mystery shopping operations and AI automation."
        path="/insights"
        jsonLd={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }])]}
      />

      <section className="page-hero section--dark">
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow eyebrow--on-dark">Insights</p>
          <h1>Ideas Behind the Growth Engine.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="case-filters">
            <button type="button" className={category === 'All' ? 'is-active' : ''} onClick={() => setCategory('All')}>All</button>
            {INSIGHTS_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                className={category === c ? 'is-active' : ''}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <Reveal group className="grid grid-3">
            {filtered.map((post) => (
              <div className="card insight-card" key={post.key}>
                <p className="badge">{post.category}</p>
                <h3 className="h4">{post.title}</h3>
                <p className="text-muted body-sm">{post.excerpt}</p>
                {post.body ? (
                  <button type="button" className="link-arrow insight-card__read" onClick={() => setOpenArticle(post)}>
                    Read Full Article <Icon name="arrow" size={14} />
                  </button>
                ) : (
                  <span className="link-arrow insight-card__soon">Full Article Coming Soon <Icon name="arrow" size={14} /></span>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <ArticleModal article={openArticle} onClose={() => setOpenArticle(null)} />

      <CTA eyebrow="Get Started" title="Ready to Put These Ideas to Work?" primaryLabel="Book a Strategy Call" source="insights_final_cta" showAI />
    </>
  );
}
