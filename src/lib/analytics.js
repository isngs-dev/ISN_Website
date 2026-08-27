// Analytics event architecture.
//
// This module is the single place events are fired from. It currently pushes
// to window.dataLayer (GTM convention) when available, and logs to the
// console in development. Wire GA4 / Meta Pixel / LinkedIn Insight Tag by
// installing GTM in index.html (see README) — no application code changes
// required beyond adding the container ID.

function pushEvent(eventName, payload = {}) {
  const event = { event: eventName, ...payload };

  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
  }

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug('[analytics]', event);
  }
}

export const trackStrategyCallCTA = (payload) => pushEvent('cta_strategy_call', payload);
export const trackRoofingInspectionsCTA = (payload) => pushEvent('cta_roofing_inspections', payload);
export const trackAIDemoCTA = (payload) => pushEvent('cta_ai_demo', payload);
export const trackFranchiseGrowthCTA = (payload) => pushEvent('cta_franchise_growth', payload);
export const trackAIChatOpen = (payload) => pushEvent('ai_chat_open', payload);
export const trackAIChatQualified = (payload) => pushEvent('ai_chat_qualified', payload);
export const trackContactStarted = (payload) => pushEvent('contact_started', payload);
export const trackContactCompleted = (payload) => pushEvent('contact_completed', payload);
export const trackCalendarOpened = (payload) => pushEvent('calendar_opened', payload);
export const trackCalendarBooked = (payload) => pushEvent('calendar_booked', payload);
export const trackCaseStudyView = (payload) => pushEvent('case_study_view', payload);
export const trackHeroSliderCTA = (payload) => pushEvent('cta_hero_slider', payload);

export default {
  trackStrategyCallCTA,
  trackRoofingInspectionsCTA,
  trackAIDemoCTA,
  trackFranchiseGrowthCTA,
  trackAIChatOpen,
  trackAIChatQualified,
  trackContactStarted,
  trackContactCompleted,
  trackCalendarOpened,
  trackCalendarBooked,
  trackCaseStudyView,
  trackHeroSliderCTA,
};
