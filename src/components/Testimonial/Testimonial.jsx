import './Testimonial.css';

export default function Testimonial({ testimonial }) {
  return (
    <figure className="testimonial card">
      <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <figcaption>
        {testimonial.companyLogo && (
          <img className="testimonial__logo" src={testimonial.companyLogo} alt={testimonial.companyName} />
        )}
        <div>
          <span className="testimonial__name">{testimonial.name}</span>
          <span className="testimonial__title">{testimonial.title}</span>
        </div>
      </figcaption>
    </figure>
  );
}
