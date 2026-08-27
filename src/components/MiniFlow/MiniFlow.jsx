import Icon from '../Icon/Icon';
import './MiniFlow.css';

/**
 * Compact vertical flow used inside page-hero visual slots.
 * steps: [{ icon, label }]
 */
export default function MiniFlow({ steps, label = 'Product illustration' }) {
  return (
    <div className="mini-flow">
      <p className="mini-flow__label">{label}</p>
      <div className="mini-flow__list">
        {steps.map((s, i) => (
          <div className="mini-flow__step" key={s.label}>
            <div className="mini-flow__node">
              <div className="mini-flow__icon"><Icon name={s.icon} size={18} /></div>
              <span>{s.label}</span>
            </div>
            {i < steps.length - 1 && <div className="mini-flow__connector" />}
          </div>
        ))}
      </div>
    </div>
  );
}
