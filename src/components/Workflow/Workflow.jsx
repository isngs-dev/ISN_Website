import Icon from '../Icon/Icon';
import BorderGlow from '../BorderGlow/BorderGlow';
import useReveal from '../../hooks/useReveal';
import './Workflow.css';

const NODE_COLORS = ['#253d7e', '#ee8323', '#3b5bb8']; // brand navy / accent / secondary
const NODE_GLOW_COLOR = '28 86% 54%'; // brand accent, as "H S L"

/**
 * Responsive workflow/pipeline diagram: horizontal animated flow on desktop,
 * vertical connected timeline on mobile. Used for the Growth Engine, Roofing
 * flow, Franchise flow, MS ecosystem diagram, and AI product diagrams.
 *
 * stages: [{ stage, label, icon, copy }]
 */
export default function Workflow({ stages, tone = 'light' }) {
  const ref = useReveal();
  const cardBg = tone === 'dark' ? 'rgba(255,255,255,0.05)' : 'var(--surface)';
  return (
    <div ref={ref} className={`workflow workflow--${tone} reveal`}>
      {stages.map((s, i) => (
        <div className="workflow__step" key={s.stage} style={{ transitionDelay: `${i * 80}ms` }}>
          <BorderGlow
            className="workflow__node"
            backgroundColor={cardBg}
            borderRadius={12}
            glowRadius={14}
            edgeSensitivity={35}
            glowColor={NODE_GLOW_COLOR}
            colors={NODE_COLORS}
          >
            <div className="workflow__icon"><Icon name={s.icon} size={22} /></div>
            <p className="workflow__stage">{s.stage}</p>
            <p className="workflow__label">{s.label}</p>
            {s.copy && <p className="workflow__copy">{s.copy}</p>}
          </BorderGlow>
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
