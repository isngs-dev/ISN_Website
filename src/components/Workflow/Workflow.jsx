import Icon from '../Icon/Icon';
import useReveal from '../../hooks/useReveal';
import './Workflow.css';

/**
 * Responsive workflow/pipeline diagram: horizontal animated flow on desktop,
 * vertical connected timeline on mobile. Used for the Growth Engine, Roofing
 * flow, Franchise flow, MS ecosystem diagram, and AI product diagrams.
 *
 * stages: [{ stage, label, icon, copy }]
 */
export default function Workflow({ stages, tone = 'light' }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`workflow workflow--${tone} reveal`}>
      {stages.map((s, i) => (
        <div className="workflow__step" key={s.stage} style={{ transitionDelay: `${i * 80}ms` }}>
          <div className="workflow__node">
            <div className="workflow__icon"><Icon name={s.icon} size={22} /></div>
            <p className="workflow__stage">{s.stage}</p>
            <p className="workflow__label">{s.label}</p>
            {s.copy && <p className="workflow__copy">{s.copy}</p>}
          </div>
          {i < stages.length - 1 && (
            <div className="workflow__connector" aria-hidden="true">
              <Icon name="arrow" size={18} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
