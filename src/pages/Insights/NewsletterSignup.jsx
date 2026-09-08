import { useState } from 'react';
import Button from '../../components/Button/Button';
import { submitNewsletter } from '../../lib/api';
import { trackNewsletterSignup } from '../../lib/analytics';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    await submitNewsletter({ email });
    trackNewsletterSignup({ source: 'insights_page' });
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="newsletter newsletter--done">
        <h3 className="h4">You're on the list.</h3>
        <p className="text-muted">We'll send new growth and AI automation ideas as they're published.</p>
      </div>
    );
  }

  return (
    <form className="newsletter" onSubmit={handleSubmit}>
      <div>
        <h3 className="h4">Get New Ideas as They're Published.</h3>
        <p className="text-muted body-sm">Practical roofing, franchise and Mystery Shopping growth insights — no spam.</p>
      </div>
      <div className="newsletter__field">
        <input
          type="email"
          required
          placeholder="Business email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" variant="primary" disabled={submitting}>
          {submitting ? 'Signing up…' : 'Subscribe'}
        </Button>
      </div>
    </form>
  );
}
