import { createContext, useContext, useState, useCallback } from 'react';
import { trackAIChatOpen, trackCalendarOpened } from '../lib/analytics';

const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [chatOpen, setChatOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const openChat = useCallback((source) => {
    setChatOpen(true);
    trackAIChatOpen({ source });
  }, []);
  const closeChat = useCallback(() => setChatOpen(false), []);

  const openCalendar = useCallback((source) => {
    setCalendarOpen(true);
    trackCalendarOpened({ source });
  }, []);
  const closeCalendar = useCallback(() => setCalendarOpen(false), []);

  const value = {
    chatOpen, openChat, closeChat,
    calendarOpen, openCalendar, closeCalendar,
    mobileNavOpen, setMobileNavOpen,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used within UIProvider');
  return ctx;
}
