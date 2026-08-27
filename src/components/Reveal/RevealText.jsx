import useReveal from '../../hooks/useReveal';

/**
 * Word-by-word fade/slide-in for a heading, triggered on scroll via useReveal.
 * The full string stays in aria-label for screen readers; the split words are
 * aria-hidden so they aren't announced twice.
 */
export default function RevealText({ as: Tag = 'h2', text, className = '' }) {
  const ref = useReveal();
  const words = text.split(' ');
  return (
    <Tag ref={ref} className={['reveal-text', className].filter(Boolean).join(' ')} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} aria-hidden="true" style={{ transitionDelay: `${i * 40}ms` }}>
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}
