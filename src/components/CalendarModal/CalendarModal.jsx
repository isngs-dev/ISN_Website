import { useEffect } from 'react';
import { useUI } from '../../context/UIContext';
import { submitBooking, CALENDAR_PROVIDER, CALENDAR_URL } from '../../lib/api';
import { trackCalendarBooked } from '../../lib/analytics';
import Icon from '../Icon/Icon';
import ContactForm from '../ContactForm/ContactForm';
import './CalendarModal.css';

export default function CalendarModal() {
  const { calendarOpen, closeCalendar } = useUI();

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') closeCalendar(); }
    if (calendarOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [calendarOpen, closeCalendar]);

  if (!calendarOpen) return null;

  async function handleSubmit(data) {
    await submitBooking({ ...data, provider: CALENDAR_PROVIDER });
    trackCalendarBooked({ service: data.service });
  }

  return (
    <div className="modal-overlay" onClick={closeCalendar}>
      <div className="modal calendar-modal" role="dialog" aria-modal="true" aria-label="Book a strategy call" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" onClick={closeCalendar} aria-label="Close"><Icon name="close" size={18} /></button>

        {!CALENDAR_URL ? (
          <div className="calendar-modal__scroll">
            <h3 className="calendar-modal__title">Book a Strategy Call</h3>
            <p className="text-muted">Tell us a bit about your business. We'll confirm a time by email.</p>
            <ContactForm submitLabel="Book My Strategy Call" onSubmit={handleSubmit} />
          </div>
        ) : (
          <iframe title="Book a strategy call" src={CALENDAR_URL} className="calendar-modal__iframe" />
        )}
      </div>
    </div>
  );
}
