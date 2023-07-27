import "./testimonial.styles.css";

export default function Testimonial({
  testimonialImage,
  testimonialName,
  children,
}) {
  return (
    <div className="testimonial">
      <img className="testimonial-img" src={testimonialImage} alt={""} />
      <p className="testimonial-name">{testimonialName}</p>
      <p className="testimonial-description">{children}</p>
    </div>
  );
}
