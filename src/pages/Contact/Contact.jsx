import SEO from '../../components/SEO/SEO';
import { breadcrumbSchema } from '../../components/SEO/schema';
import Icon from '../../components/Icon/Icon';
import QualificationForm from '../../components/QualificationForm/QualificationForm';
import { COMPANY } from '../../data/company';
import { useUI } from '../../context/UIContext';
import './Contact.css';

export default function Contact() {
  const { openCalendar, openChat } = useUI();

  return (
    <>
      <SEO
        title="Contact iSN Business Solutions"
        description="Tell us what you want to grow or automate. Book a strategy call, chat with iSN AI, or send us your details."
        path="/contact"
        jsonLd={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])]}
      />

      <section className="page-hero section--dark">
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow eyebrow--on-dark">Contact</p>
          <h1>Tell Us What You Want to Grow or Automate.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-form-col">
            <QualificationForm />
          </div>

          <div className="contact-side-col">
            <button type="button" className="card contact-option" onClick={() => openChat('contact_page')}>
              <div className="contact-option__icon"><Icon name="chat" size={20} /></div>
              <div>
                <h3 className="h4">Talk to iSN AI</h3>
                <p className="text-muted body-sm">Get instant answers and get qualified in minutes.</p>
              </div>
            </button>

            <button type="button" className="card contact-option" onClick={openCalendar}>
              <div className="contact-option__icon"><Icon name="calendar" size={20} /></div>
              <div>
                <h3 className="h4">Book a Strategy Call</h3>
                <p className="text-muted body-sm">Pick a time that works and talk to our team directly.</p>
              </div>
            </button>

            <div className="card contact-details">
              <h3 className="h4">Reach Us Directly</h3>
              <a href={`mailto:${COMPANY.email}`} className="contact-details__row">
                <Icon name="mail" size={16} /> {COMPANY.email}
              </a>
              {COMPANY.phones.map((p) => (
                <a href={`tel:${p.number.replace(/[^+\d]/g, '')}`} className="contact-details__row" key={p.label}>
                  <Icon name="phone" size={16} /> {p.number} <span className="text-muted body-sm">({p.label})</span>
                </a>
              ))}
              <p className="contact-details__row">
                <Icon name="pin" size={16} /> {COMPANY.address}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
