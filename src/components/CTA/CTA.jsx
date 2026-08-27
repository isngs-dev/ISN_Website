import Button from '../Button/Button';
import { useUI } from '../../context/UIContext';
import { trackStrategyCallCTA } from '../../lib/analytics';
import './CTA.css';

export default function CTA({
  eyebrow,
  title,
  copy,
  primaryLabel = 'Book a Strategy Call',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo,
  showAI = false,
  source = 'cta_section',
}) {
  const { openChat } = useUI();
  return (
    <section className="section cta">
      <div className="container cta__inner">
        {eyebrow && <p className="eyebrow eyebrow--on-dark">{eyebrow}</p>}
        <h2>{title}</h2>
        {copy && <p className="body-lg cta__copy">{copy}</p>}
        <div className="cta__actions">
          <Button to={primaryTo} variant="primary" onClick={() => trackStrategyCallCTA({ source })}>
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryTo && (
            <Button to={secondaryTo} variant="on-dark">{secondaryLabel}</Button>
          )}
          {showAI && (
            <Button variant="on-dark" onClick={() => openChat(source)}>Talk to iSN AI</Button>
          )}
        </div>
      </div>
    </section>
  );
}
