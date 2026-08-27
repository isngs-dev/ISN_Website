import Button from '../Button/Button';
import { trackStrategyCallCTA } from '../../lib/analytics';
import './PageHero.css';

/**
 * Standard inner-page hero: eyebrow, headline, subhead, primary/secondary CTA,
 * optional visual in the right-hand column.
 */
export default function PageHero({
  eyebrow,
  title,
  subhead,
  primaryLabel,
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo,
  ctaSource = 'page_hero',
  visual,
}) {
  return (
    <section className="page-hero section--dark">
      <div className="container page-hero__grid">
        <div className="page-hero__copy">
          {eyebrow && <p className="eyebrow eyebrow--on-dark">{eyebrow}</p>}
          <h1>{title}</h1>
          {subhead && <p className="body-lg page-hero__subhead">{subhead}</p>}
          <div className="page-hero__actions">
            {primaryLabel && (
              <Button to={primaryTo} variant="primary" onClick={() => trackStrategyCallCTA({ source: ctaSource })}>
                {primaryLabel}
              </Button>
            )}
            {secondaryLabel && secondaryTo && (
              <Button to={secondaryTo} variant="on-dark">{secondaryLabel}</Button>
            )}
          </div>
        </div>
        {visual && <div className="page-hero__visual">{visual}</div>}
      </div>
    </section>
  );
}
