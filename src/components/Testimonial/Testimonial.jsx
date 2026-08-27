import './Testimonial.css';

export default function Testimonial({ testimonial }) {
  return (
    <figure className="testimonial card">
      <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <figcaption>
        <span className="testimonial__name">{testimonial.name}</span>
        <span className="testimonial__title">{testimonial.title}</span>
      </figcaption>
    </figure>
  );
}
