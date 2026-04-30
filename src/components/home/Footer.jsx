export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="nav-logo">Detour Sorbet</span>
          <p className="footer-tagline">
            Small-batch, dairy-free sorbets made with real fruit and pure ingredients. Crafted with
            love in Eliot, Maine.
          </p>

          <div className="social-links">
            <a href="https://www.instagram.com/detoursorbet/" className="social-link" aria-label="Instagram">
              <img src="/images/instalogo2.png" alt="" />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#flavors">Flavors</a>
            </li>
            <li>
              <a href="#findus">Find Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Ordering</h4>
          <ul>
            <li>
              <a href="mailto:orders@detoursorbet.com">Order Online</a>
            </li>
            <li>
              <a href="mailto:orders@detoursorbet.com">Wholesale</a>
            </li>
            <li>
              <a href="mailto:orders@detoursorbet.com">Catering</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:sam@detoursorbet.com">sam@detoursorbet.com</a>
            </li>
            <li>
              <a href="tel:+14065291178">(406) 529-1178</a>
            </li>
            <li>
              <a href="#">Eliot, Maine</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Detour LLC. All rights reserved.</span>
        <div className="footer-legal">
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="terms-of-use.html">Terms of Use</a>
          <a href="allergen-info.html">Allergen Info</a>
        </div>
      </div>
    </footer>
  );
}
