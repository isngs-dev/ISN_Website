import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import { handleSpotlight } from '../../lib/spotlight';
import './OutcomeCard.css';

export default function OutcomeCard({ outcome }) {
  return (
    <Link to={outcome.to} className="outcome-card card spotlight" onMouseMove={handleSpotlight}>
      <div className="outcome-card__icon"><Icon name={outcome.icon} size={22} /></div>
      <h3 className="h4">{outcome.title}</h3>
      <p className="text-muted body-sm">{outcome.copy}</p>
      <span className="link-arrow">{outcome.cta} <Icon name="arrow" size={16} /></span>
    </Link>
  );
}
