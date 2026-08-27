import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import './IndustryCard.css';

const ICONS = { roofing: 'roof', franchise: 'network', 'mystery-shopping': 'target' };

export default function IndustryCard({ industry }) {
  return (
    <Link to={industry.to} className="industry-card card">
      <div className="industry-card__visual" aria-hidden="true">
        <Icon name={ICONS[industry.key] || 'layers'} size={30} />
      </div>
      <p className="badge">{industry.name}</p>
      <h3 className="h4">{industry.headline}</h3>
      <p className="text-muted body-sm">{industry.copy}</p>
      <span className="link-arrow">{industry.cta} <Icon name="arrow" size={16} /></span>
    </Link>
  );
}
