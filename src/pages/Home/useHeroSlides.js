import { useEffect, useState } from 'react';
import { HERO_SLIDES } from '../../data/heroSlides';

const AUTOPLAY_MS = 6000;

// Single source of truth for the active hero slide, shared by the slider
// copy/CTAs and the hero visual so they always stay in sync.
export default function useHeroSlides() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || paused) return undefined;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused]);

  function goTo(i) {
    setIndex(((i % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length);
  }

  return {
    slides: HERO_SLIDES,
    index,
    slide: HERO_SLIDES[index],
    goTo,
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  };
}
