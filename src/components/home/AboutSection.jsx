export default function AboutSection() {
  return (
    <section id="about">
      <div className="about-content fade-in">
        <span className="section-label">About</span>
        <h2 className="section-title">
          What is <em>Sorbet?</em>
        </h2>
        <p className="section-sub" style={{ marginBottom: '1.2rem' }}>
          What is sorbet? The common definition is a combination of fruit, sugar, and water. What
          we do at Detour is expand upon that including a wide array of nuts, seeds, chocolates,
          coconut, and fruit. Ours is completely dairy free, no eggs, or gluten. Detour is 100%
          vegan/plant-based.
        </p>
      </div>

      <div className="about-visual fade-in">
        <img
          src="/images/Blood orange.png"
          alt="blood orange"
          style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '16px' }}
        />
      </div>
    </section>
  );
}
