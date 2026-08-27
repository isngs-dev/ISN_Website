import Icon from '../../components/Icon/Icon';
import './HeroVisual.css';

// Renders the pipeline cards for the currently active hero slide (see useHeroSlides).
export default function HeroVisual({ slide }) {
  return (
    <div className="hero-visual">
      <p className="hero-visual__label">{slide.visualLabel}</p>
      <div className="hero-visual__stack" key={slide.key}>
        <div className="hero-visual__line" aria-hidden="true" />
        {slide.cards.map((c, i) => (
          <div className={`hero-visual__card hero-visual__card--${c.tone}`} key={c.title} style={{ animationDelay: `${i * 120}ms` }}>
            <div className="hero-visual__card-icon"><Icon name={c.icon} size={18} /></div>
            <div className="hero-visual__card-body">
              <p className="hero-visual__card-title">{c.title}</p>
              <p className="hero-visual__card-meta">{c.meta}</p>
            </div>
            <span className="hero-visual__card-tag">{c.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
