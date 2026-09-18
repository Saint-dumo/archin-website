import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">
          Architecture · Interior Design · Construction
        </p>

        <h1>
          We create spaces
          <br />
          that define how
          <br />
          people live.
        </h1>

        <a href="#work" className="hero-link">
          Explore our work
          <span>↓</span>
        </a>
      </div>

      <div className="hero-location">
        <span>ARCHIN INT'L</span>
        <span>PORT HARCOURT · NIGERIA</span>
      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;