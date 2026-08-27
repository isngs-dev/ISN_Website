import useReveal from '../../hooks/useReveal';

/**
 * Declarative wrapper around useReveal. Renders `as` (default div) with the
 * incoming className plus `reveal` (fade+slide as one block) or `reveal-group`
 * (fade+slide each direct child with a stagger) — see .reveal / .reveal-group
 * in global.css. No-ops to fully visible when IntersectionObserver is
 * unavailable or the user prefers reduced motion (handled in CSS).
 */
export default function Reveal({ as: Tag = 'div', group = false, className = '', children, ...rest }) {
  const ref = useReveal();
  const cls = [group ? 'reveal-group' : 'reveal', className].filter(Boolean).join(' ');
  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  );
}
