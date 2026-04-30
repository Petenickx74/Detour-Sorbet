export default function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-text fade-in">
        <span className="hero-eyebrow">Handcrafted in small batches</span>
        <h1 className="hero-headline">
          <em>Awesome</em> sorbet from Eliot, Maine!
        </h1>
        <p className="hero-sub">
          We create sorbet using as few ingredients as possible to create a pure, delicious
          experience - there are no shortcuts, no fillers, just awesome flavor.
        </p>

        <div className="hero-buttons">
          <a
            href="#flavors"
            className="btn-primary"
            onClick={(event) => {
              event.preventDefault();
              document.querySelector('#flavors')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Explore Flavors ↓
          </a>
        </div>
      </div>

      <div className="hero-visual fade-in">
        <img
          src="/images/Pistachio cup2.png"
          alt="Our sorbet"
          style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '16px' }}
        />
      </div>

      <div className="scroll-indicator">Scroll</div>
    </section>
  );
}
