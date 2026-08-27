import SEO from '../../components/SEO/SEO';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import './NotFound.css';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | iSN Business Solutions" description="The page you're looking for doesn't exist." path="/404" noindex />

      <section className="section not-found">
        <div className="container not-found__inner">
          <div className="not-found__icon"><Icon name="target" size={28} /></div>
          <p className="eyebrow">404</p>
          <h1>We Couldn't Find That Page.</h1>
          <p className="text-muted body-lg">
            The page you're looking for may have moved or no longer exists. Let's get you back on track.
          </p>
          <div className="not-found__actions">
            <Button to="/" variant="primary" arrow>Back to Homepage</Button>
            <Button to="/contact" variant="secondary">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
