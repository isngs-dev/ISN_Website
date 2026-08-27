import Icon from '../Icon/Icon';
import { trackCaseStudyView } from '../../lib/analytics';
import './CaseStudyCard.css';

export default function CaseStudyCard({ study }) {
  return (
    <article className="case-card card" onClick={() => trackCaseStudyView({ study: study.key })}>
      <p className="badge">{study.category}</p>
      <h3 className="h4">{study.title}</h3>

      <div className="case-card__flow">
        <div><span className="case-card__flow-label">Challenge</span><p>{study.challenge}</p></div>
        <Icon name="arrow" size={16} className="case-card__flow-arrow" />
        <div><span className="case-card__flow-label">System</span><p>{study.system}</p></div>
        <Icon name="arrow" size={16} className="case-card__flow-arrow" />
        <div><span className="case-card__flow-label">Outcome</span><p>{study.outcome}</p></div>
      </div>

      <div className="case-card__metric">
        <span className="case-card__metric-value">{study.metric}</span>
        <span className="case-card__metric-label">{study.metricLabel}</span>
      </div>
    </article>
  );
}
