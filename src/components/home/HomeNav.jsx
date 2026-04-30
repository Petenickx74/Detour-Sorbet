import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#flavors', label: 'Flavors' },
  { href: '#findus', label: 'Find Us' },
];

export default function HomeNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (event, href) => {
    const target = document.querySelector(href);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo" onClick={(event) => handleAnchorClick(event, '#hero')}>
        Detour Sorbet
      </a>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={(event) => handleAnchorClick(event, link.href)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button className="hamburger" aria-label="Menu" onClick={() => setMenuOpen((open) => !open)}>
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
