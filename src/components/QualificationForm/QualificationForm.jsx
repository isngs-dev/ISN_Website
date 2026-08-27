import { useState } from 'react';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import { submitContact } from '../../lib/api';
import { trackContactStarted, trackContactCompleted } from '../../lib/analytics';
import './QualificationForm.css';

const TYPE_OPTIONS = ['Roofing Company', 'Franchise Brand', 'Mystery Shopping Company', 'Other'];
const GOAL_OPTIONS = [
  'Generate Leads',
  'Book Roofing Inspections',
  'Grow My Franchise Network',
  'Recruit Mystery Shoppers',
  'Improve Editing Capacity',
  'Build Analytics',
  'Deploy AI',
  'Build a Custom Solution',
];
const NEXT_STEP_OPTIONS = ['Strategy Call', 'Product Demo', 'Email Response'];

const TOTAL_STEPS = 5;

export default function QualificationForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState({
    type: '', goal: '', market: '', crm: '',
    name: '', email: '', phone: '', nextStep: 'Strategy Call',
  });

  function update(field, value) {
    setData((d) => ({ ...d, [field]: value }));
  }

  function next() {
    if (step === 1) trackContactStarted({ type: data.type });
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    await submitContact(data);
    trackContactCompleted({ type: data.type, goal: data.goal, nextStep: data.nextStep });
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="qform qform--done">
        <Icon name="check" size={32} />
        <h3 className="h4">Thanks, {data.name.split(' ')[0] || 'there'}.</h3>
        <p className="text-muted">
          We received your request and will follow up shortly to schedule your {data.nextStep.toLowerCase()}.
        </p>
      </div>
    );
  }

  return (
    <form className="qform" onSubmit={handleSubmit}>
      <div className="qform__progress">
        <div className="qform__progress-bar" style={{ width: `${(step / TOTAL_STEPS) * 100}%` }} />
      </div>
      <p className="qform__step-label">Step {step} of {TOTAL_STEPS}</p>

      {step === 1 && (
        <fieldset className="qform__fieldset">
          <legend>I am a:</legend>
          <div className="qform__options">
            {TYPE_OPTIONS.map((opt) => (
              <button
                type="button"
                key={opt}
                className={data.type === opt ? 'is-selected' : ''}
                onClick={() => { update('type', opt); next(); }}
              >
                {opt}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="qform__fieldset">
          <legend>I want to:</legend>
          <div className="qform__options">
            {GOAL_OPTIONS.map((opt) => (
              <button
                type="button"
                key={opt}
                className={data.goal === opt ? 'is-selected' : ''}
                onClick={() => { update('goal', opt); next(); }}
              >
                {opt}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className="qform__fieldset">
          <legend>Market / geography</legend>
          <input
            type="text"
            placeholder="e.g. Dallas–Fort Worth, TX"
            value={data.market}
            onChange={(e) => update('market', e.target.value)}
            autoFocus
          />
          <legend className="qform__legend-secondary">Current CRM / scheduling platform (optional)</legend>
          <input
            type="text"
            placeholder="e.g. HubSpot, GoHighLevel, none yet"
            value={data.crm}
            onChange={(e) => update('crm', e.target.value)}
          />
          <div className="qform__nav">
            <button type="button" className="qform__back" onClick={back}>Back</button>
            <Button type="button" variant="primary" size="sm" onClick={next}>Continue</Button>
          </div>
        </fieldset>
      )}

      {step === 4 && (
        <fieldset className="qform__fieldset">
          <legend>Preferred next step</legend>
          <div className="qform__options">
            {NEXT_STEP_OPTIONS.map((opt) => (
              <button
                type="button"
                key={opt}
                className={data.nextStep === opt ? 'is-selected' : ''}
                onClick={() => { update('nextStep', opt); next(); }}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="qform__nav">
            <button type="button" className="qform__back" onClick={back}>Back</button>
          </div>
        </fieldset>
      )}

      {step === 5 && (
        <fieldset className="qform__fieldset">
          <legend>Your details</legend>
          <input type="text" placeholder="Name" required value={data.name} onChange={(e) => update('name', e.target.value)} />
          <input type="email" placeholder="Business email" required value={data.email} onChange={(e) => update('email', e.target.value)} />
          <input type="tel" placeholder="Phone" value={data.phone} onChange={(e) => update('phone', e.target.value)} />
          <div className="qform__nav">
            <button type="button" className="qform__back" onClick={back}>Back</button>
            <Button type="submit" variant="primary" disabled={submitting}>
              {submitting ? 'Sending…' : 'Submit'}
            </Button>
          </div>
        </fieldset>
      )}
    </form>
  );
}
