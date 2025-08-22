import { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [active, setActive] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Sync active from URL hash
  useEffect(() => {
    const init = window.location.hash || '#home';
    setActive(init);

    const onHashChange = () => setActive(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const nav = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (href) => {
    setActive(href);
    setMenuOpen(false); // close on selection (mobile)
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="container navbar-inner">
        <div className="navbar-brand">
          <div className="navbar-logo">MyPortfolio</div>

          {/* Hamburger (mobile) */}
          <button
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>

        <ul id="primary-navigation" className="nav-links">
          {nav.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={active === href ? 'active' : ''}
                onClick={() => handleNavClick(href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
