import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import { handleSpotlight } from '../../lib/spotlight';
import './ProductCard.css';

const ICONS = { chat: 'chat', pipeline: 'pipeline', map: 'map', dashboard: 'dashboard' };

export default function ProductCard({ product }) {
  return (
    <Link to={product.to} className="product-card card spotlight" onMouseMove={handleSpotlight}>
      <div className="product-card__visual" aria-hidden="true">
        <Icon name={ICONS[product.visual] || 'ai'} size={26} />
      </div>
      <h3 className="h4">{product.headline}</h3>
      <p className="text-muted body-sm">{product.copy}</p>
      <span className="link-arrow">{product.cta} <Icon name="arrow" size={16} /></span>
    </Link>
  );
}
