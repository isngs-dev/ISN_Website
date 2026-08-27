import { useEffect, useRef } from 'react';

/**
 * Adds the `is-visible` class to the element when it scrolls into view,
 * powering the `.reveal` CSS transition. No-ops gracefully if
 * IntersectionObserver is unavailable.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
