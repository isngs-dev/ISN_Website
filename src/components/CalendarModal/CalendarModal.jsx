import { useEffect, useState } from 'react';
import { useUI } from '../../context/UIContext';
import { submitBooking, CALENDAR_PROVIDER, CALENDAR_URL } from '../../lib/api';
import { trackCalendarBooked } from '../../lib/analytics';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import './CalendarModal.css';

const SLOTS = ['Tue, 9:00 AM', 'Tue, 2:30 PM', 'Wed, 11:00 AM', 'Thu, 10:00 AM', 'Thu, 3:00 PM', 'Fri, 1:00 PM'];

export default function CalendarModal() {
  const { calendarOpen, closeCalendar } = useUI();
  const [slot, setSlot] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (!calendarOpen) { setSlot(null); setConfirmed(false); }
  }, [calendarOpen]);

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') closeCalendar(); }
    if (calendarOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [calendarOpen, closeCalendar]);

  if (!calendarOpen) return null;

  async function confirmSlot(s) {
    setSlot(s);
    await submitBooking({ slot: s, provider: CALENDAR_PROVIDER });
    trackCalendarBooked({ slot: s });
    setConfirmed(true);
  }

  return (
    <div className="modal-overlay" onClick={closeCalendar}>
      <div className="modal calendar-modal" role="dialog" aria-modal="true" aria-label="Book a strategy call" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" onClick={closeCalendar} aria-label="Close"><Icon name="close" size={18} /></button>

        {!CALENDAR_URL ? (
          <>
            <span className="badge">Illustrative interface</span>
            <h3 className="calendar-modal__title">Book a Strategy Call</h3>
            <p className="text-muted">Pick a time that works. We'll confirm by email.</p>

            {!confirmed ? (
              <div className="calendar-modal__slots">
                {SLOTS.map((s) => (
                  <button key={s} type="button" className={s === slot ? 'is-selected' : ''} onClick={() => confirmSlot(s)}>
                    <Icon name="calendar" size={16} /> {s}
                  </button>
                ))}
              </div>
            ) : (
              <div className="calendar-modal__confirmed">
                <Icon name="check" size={28} />
                <p><strong>Confirmed for {slot}.</strong></p>
                <p className="text-muted body-sm">A calendar invite and confirmation email will follow once this is connected to a live scheduling provider.</p>
              </div>
            )}
            <p className="body-sm text-muted calendar-modal__note">
              [CRM ENDPOINT TO BE CONFIGURED] — connect Calendly, Google Calendar, HubSpot Meetings or GoHighLevel here.
            </p>
          </>
        ) : (
          <iframe title="Book a strategy call" src={CALENDAR_URL} className="calendar-modal__iframe" />
        )}
      </div>
    </div>
  );
}
