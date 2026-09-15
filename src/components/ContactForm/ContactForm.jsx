import { useState } from 'react';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import { GOAL_OPTIONS } from '../../data/formOptions';
import './ContactForm.css';

const EMPTY_FORM = { name: '', company: '', email: '', phone: '', service: GOAL_OPTIONS[0], message: '' };

/**
 * Shared lead-capture form (Name, Company, Email, Phone, Required Service,
 * Message) used on the Contact page and in the Book a Strategy Call modal.
 * The caller owns what happens on submit (submitContact vs submitBooking).
 */
export default function ContactForm({ onSubmit, submitLabel = 'Submit' }) {
  const [data, setData] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function update(field, value) {
    setData((d) => ({ ...d, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await onSubmit(data);
      setSubmitted(true);
    } catch {
      setError("Something went wrong sending your message. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="cform__confirmed">
        <div className="cform__confirmed-icon"><Icon name="check" size={28} /></div>
        <p><strong>Thanks, {data.name.split(' ')[0] || 'there'}.</strong></p>
        <p className="text-muted body-sm">We received your request and will follow up shortly.</p>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" placeholder="Enter your name" required value={data.name} onChange={(e) => update('name', e.target.value)} />
      </label>
      <label>
        Company Name
        <input type="text" placeholder="Enter your company name" value={data.company} onChange={(e) => update('company', e.target.value)} />
      </label>
      <div className="cform__row">
        <label>
          Email
          <input type="email" placeholder="Enter your email" required value={data.email} onChange={(e) => update('email', e.target.value)} />
        </label>
        <label>
          Phone Number
          <input type="tel" placeholder="Enter your phone number" value={data.phone} onChange={(e) => update('phone', e.target.value)} />
        </label>
      </div>
      <label>
        Required Service
        <select value={data.service} onChange={(e) => update('service', e.target.value)}>
          {GOAL_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </label>
      <label>
        Message
        <textarea rows={3} placeholder="Tell us about your business or what you're looking for" value={data.message} onChange={(e) => update('message', e.target.value)} />
      </label>
      {error && <p className="cform__error">{error}</p>}
      <Button type="submit" variant="primary" className="btn--block" arrow disabled={submitting}>
        {submitting ? 'Sending…' : submitLabel}
      </Button>
    </form>
  );
}
