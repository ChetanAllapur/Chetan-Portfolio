import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="nav-wrap">
      <div className="container">
        <div className="nav">
          {/* Brand */}
          <a href="/" className="brand" onClick={closeMenu}>
            <span className="dot" /> Chetan<span className="fade">Allapur</span>
          </a>

          {/* Desktop links */}
          <ul className="links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Actions (Resume) */}
          <div className="actions">
            <a
              className="btn ghost small"
              href="/Chetan-Allapur-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${open ? "is-open" : ""}`}
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div className={`mobile ${open ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a
          className="btn ghost small"
          href="/Chetan-Allapur-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
