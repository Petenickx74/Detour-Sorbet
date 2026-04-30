import { locations } from '../../data/homeContent';

export default function FindUsSection() {
  return (
    <section id="findus">
      <div className="fade-in">
        <span className="section-label">Find Us</span>
        <h2 className="section-title">
          Where to get <em>your fix</em>
        </h2>
        <p className="section-sub">
          Available at select markets, restaurants, and grocery stores across the region — or order
          direct.
        </p>
      </div>

      <div className="locations-grid">
        {locations.map((location) => (
          <div className="location-card fade-in" key={location.name}>
            <div className="location-type">{location.type}</div>
            <div className="location-name">{location.name}</div>
            <div className="location-address">{location.address}</div>
            {location.website ? (
              <div className="website">
                <a href={location.website.href}>{location.website.label}</a>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
