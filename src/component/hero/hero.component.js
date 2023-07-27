import "./hero.styles.css";

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="container grid grid--2-cols">
        <div className="hero-content">
          <h1 className="heading-primary">T-K-D Journey</h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            earum repellendus, harum quae atque obcaecati enim ipsum numquam
            doloremque quasi temporibus.
          </p>
          <div className="btn-container">
            <a className="btn btn--full" href="#cta">
              Join Now
            </a>
            <a className="btn btn--outline" href="#about">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
