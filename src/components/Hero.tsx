import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <h1 className="hero-title">
            Build Your Ideal
            <span>Development Stack</span>
          </h1>

          <p className="hero-description">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Technologies
              <span>→</span>
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-glow"></div>

          <img
            src="/banner-stack.png"
            alt="Development technology stack"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;