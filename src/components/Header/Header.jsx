import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV } from '../../data/navigation';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { useUI } from '../../context/UIContext';
import { trackStrategyCallCTA } from '../../lib/analytics';
import logo from '../../assets/brand/isn-logo.png';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const { openChat, mobileNavOpen, setMobileNavOpen } = useUI();
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileNavOpen(false);
    setOpenMenu(null);
  }, [setMobileNavOpen]);

  useEffect(() => {
    function onClickOutside(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) setOpenMenu(null);
    }
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileNavOpen]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} ref={headerRef}>
      <div className="container header__bar">
        <Link to="/" className="header__logo" aria-label="iSN Business Solutions home">
          <img src={logo} alt="iSN" height="34" />
        </Link>

        <nav className="header__nav" aria-label="Primary">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="header__nav-item"
              onMouseEnter={() => item.columns && setOpenMenu(item.label)}
              onMouseLeave={() => item.columns && setOpenMenu(null)}
            >
              {item.columns ? (
                <button
                  type="button"
                  className="header__nav-link"
                  aria-expanded={openMenu === item.label}
                  onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                >
                  {item.label}
                  <Icon name="chevron-down" size={14} />
                </button>
              ) : (
                <NavLink to={item.to} className="header__nav-link">
                  {item.label}
                </NavLink>
              )}

              {item.columns && (
                <div className={`mega-menu ${openMenu === item.label ? 'mega-menu--open' : ''}`}>
                  <div className="mega-menu__grid">
                    {item.columns.map((col) => (
                      <div key={col.heading} className="mega-menu__col">
                        <p className="mega-menu__heading">{col.heading}</p>
                        {col.items.map((sub) => (
                          <Link key={sub.label} to={sub.to} className="mega-menu__item" onClick={() => setOpenMenu(null)}>
                            <span className="mega-menu__item-label">{sub.label}</span>
                            {sub.description && <span className="mega-menu__item-desc">{sub.description}</span>}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="header__actions">
          <button type="button" className="header__ai-link" onClick={() => openChat('header')}>
            <Icon name="bot" size={17} /> Talk to iSN AI
          </button>
          <Button to="/contact" variant="primary" size="sm" onClick={() => trackStrategyCallCTA({ source: 'header' })}>
            Book a Strategy Call
          </Button>
          <button
            type="button"
            className="header__burger"
            aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen((v) => !v)}
          >
            <Icon name={mobileNavOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <div className={`mobile-nav ${mobileNavOpen ? 'mobile-nav--open' : ''}`}>
        <div className="mobile-nav__scroll">
          {NAV.map((item) => (
            <MobileNavGroup key={item.label} item={item} onNavigate={() => setMobileNavOpen(false)} />
          ))}
        </div>
        <div className="mobile-nav__actions">
          <Button
            variant="secondary"
            className="btn--block"
            onClick={() => { setMobileNavOpen(false); openChat('mobile_nav'); }}
          >
            <Icon name="bot" size={17} /> Talk to iSN AI
          </Button>
          <Button
            to="/contact"
            variant="primary"
            className="btn--block"
            onClick={() => { setMobileNavOpen(false); trackStrategyCallCTA({ source: 'mobile_nav' }); }}
          >
            Book a Strategy Call
          </Button>
        </div>
      </div>
    </header>
  );
}

function MobileNavGroup({ item, onNavigate }) {
  const [open, setOpen] = useState(false);
  if (!item.columns) {
    return (
      <Link to={item.to} className="mobile-nav__link" onClick={onNavigate}>
        {item.label}
      </Link>
    );
  }
  return (
    <div className="mobile-nav__group">
      <button type="button" className="mobile-nav__link mobile-nav__link--toggle" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        {item.label}
        <Icon name="chevron-down" size={16} className={open ? 'is-open' : ''} />
      </button>
      {open && (
        <div className="mobile-nav__sub">
          {item.columns.flatMap((col) => col.items).map((sub) => (
            <Link key={sub.label} to={sub.to} className="mobile-nav__sublink" onClick={onNavigate}>
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
