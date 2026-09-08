import { Link } from 'react-router-dom';
import { FOOTER_NAV } from '../../data/navigation';
import { COMPANY } from '../../data/company';
import Icon from '../Icon/Icon';
import logo from '../../assets/brand/isn-logo.png';
import './Footer.css';

const SOCIAL_LINKS = [
  { name: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@isnbusinesssolutions8698' },
  { name: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/_isngroup_/' },
  { name: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/isnbusinesssolutionsllp' },
  { name: 'twitter', label: 'Twitter', href: 'https://x.com/isnbusiness' },
  { name: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/isnbusinesssolutionsllp/' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <img src={logo} alt="iSN" height="32" />
          <p className="footer__tagline">Digital Growth. AI Conversion. Real Business Outcomes.</p>
          <div className="footer__contact">
            <a href={`mailto:${COMPANY.email}`}><Icon name="mail" size={16} /> {COMPANY.email}</a>
            <a href={`tel:${COMPANY.phones[0].number.replace(/[^+\d]/g, '')}`}><Icon name="phone" size={16} /> {COMPANY.phones[0].number}</a>
            <span><Icon name="pin" size={16} /> {COMPANY.address}</span>
          </div>
          <div className="footer__social">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <Icon name={s.name} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__cols">
          {FOOTER_NAV.map((col) => (
            <div key={col.heading} className="footer__col">
              <p className="footer__col-heading">{col.heading}</p>
              {col.items.map((item) => (
                <Link key={item.label} to={item.to} className="footer__col-link">
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} {COMPANY.legalName}. All rights reserved.</p>
        <div className="footer__legal">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
