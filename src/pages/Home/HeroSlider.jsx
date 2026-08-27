import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import { useUI } from '../../context/UIContext';
import { trackStrategyCallCTA, trackHeroSliderCTA } from '../../lib/analytics';
import './HeroSlider.css';

// Controlled by useHeroSlides() in Home.jsx so its state stays in sync with HeroVisual.
export default function HeroSlider({ slides, index, slide, goTo, pause, resume }) {
  const { openChat } = useUI();

  return (
    <div
      className="home-hero__copy hero-slider"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      <p className="eyebrow eyebrow--on-dark">{slide.eyebrow}</p>
      <h1 key={slide.key} className="hero-slider__title">{slide.title}</h1>
      <p className="body-lg home-hero__subhead" key={`${slide.key}-sub`}>{slide.subhead}</p>

      <div className="home-hero__actions">
        <Button
          to={slide.ctaTo}
          variant="primary"
          onClick={() => trackHeroSliderCTA({ service: slide.key, source: 'home_hero_slider' })}
        >
          {slide.ctaLabel}
        </Button>
        <Button to="/contact" variant="on-dark" onClick={() => trackStrategyCallCTA({ source: 'home_hero_slider' })}>
          Book a Strategy Call
        </Button>
      </div>

      <button type="button" className="home-hero__tertiary" onClick={() => openChat('home_hero')}>
        <Icon name="bot" size={16} /> Talk to iSN AI
      </button>

      <div className="hero-slider__nav" role="tablist" aria-label="Choose a service to highlight">
        <button type="button" className="hero-slider__arrow" aria-label="Previous service" onClick={() => goTo(index - 1)}>
          <Icon name="arrow" size={14} className="hero-slider__arrow-icon--prev" />
        </button>
        <div className="hero-slider__dots">
          {slides.map((s, i) => (
            <button
              key={s.key}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={s.eyebrow}
              className={`hero-slider__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button type="button" className="hero-slider__arrow" aria-label="Next service" onClick={() => goTo(index + 1)}>
          <Icon name="arrow" size={14} />
        </button>
      </div>
    </div>
  );
}
