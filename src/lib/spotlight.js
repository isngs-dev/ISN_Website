/** Pair with the `.spotlight` CSS class (global.css) for a cursor-follow glow on hover. */
export function handleSpotlight(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--spotlight-x', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--spotlight-y', `${e.clientY - rect.top}px`);
}
