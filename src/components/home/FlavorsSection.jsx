import { flavors } from '../../data/homeContent';

export default function FlavorsSection() {
  return (
    <section id="flavors">
      <div className="flavors-header fade-in">
        <div>
          <span className="section-label">Our Flavors</span>
        </div>
      </div>

      <div className="flavors-grid">
        {flavors.map((flavor) => (
          <div className="flavor-card fade-in" data-category={flavor.category} key={flavor.name}>
            <div className="flavor-card-img" style={{ background: flavor.background }}>
              <img src={flavor.image} alt={flavor.name} />
            </div>
            <div className="flavor-card-body">
              <div className="flavor-name">{flavor.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
