import SEO from '../../components/SEO/SEO';
import { breadcrumbSchema } from '../../components/SEO/schema';
import Icon from '../../components/Icon/Icon';
import ContactForm from '../../components/ContactForm/ContactForm';
import MissionPoster from '../../components/MissionPoster/MissionPoster';
import { LOCATIONS } from '../../data/company';
import { submitContact } from '../../lib/api';
import { trackContactCompleted } from '../../lib/analytics';
import './Contact.css';

export default function Contact() {
  async function handleSubmit(data) {
    await submitContact(data);
    trackContactCompleted({ service: data.service });
  }

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
          <div className="card contact-form-col">
            <h2 className="h4">Tell Us About Your Business</h2>
            <ContactForm submitLabel="Send Message" onSubmit={handleSubmit} />
          </div>

          <div className="contact-side-col">
            <MissionPoster />
          </div>
        </div>
      </section>

      <section className="section section--off">
        <div className="container">
          <div className="contact-locations">
            {LOCATIONS.map((loc) => (
              <div className="contact-location" key={loc.city}>
                <div className="contact-location__info">
                  <p className="contact-location__city">[ {loc.city.toUpperCase()} ]</p>

                  <div className="contact-location__row">
                    <div className="contact-location__icon"><Icon name="pin" size={16} /></div>
                    <div>
                      <h4 className="h4">Address</h4>
                      <p className="text-muted body-sm">{loc.address}</p>
                    </div>
                  </div>

                  <div className="contact-location__row">
                    <div className="contact-location__icon"><Icon name="phone" size={16} /></div>
                    <div>
                      <h4 className="h4">Call Us</h4>
                      <a href={`tel:${loc.phone.replace(/[^+\d]/g, '')}`} className="text-muted body-sm">{loc.phone}</a>
                    </div>
                  </div>

                  <div className="contact-location__row">
                    <div className="contact-location__icon"><Icon name="mail" size={16} /></div>
                    <div>
                      <h4 className="h4">Email Address</h4>
                      <a href={`mailto:${loc.email}`} className="text-muted body-sm">{loc.email}</a>
                    </div>
                  </div>
                </div>

                <div className="contact-location__map">
                  <a
                    className="contact-location__open-maps"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Maps <Icon name="arrow-up-right" size={14} />
                  </a>
                  <iframe
                    title={`iSN ${loc.city} office location`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
