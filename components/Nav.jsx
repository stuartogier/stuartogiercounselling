'use client';
import { useState } from 'react';

const LINKS = [
  { href: '#about',       label: 'About' },
  { href: '#how',         label: 'How I work' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact',     label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  function close() { setOpen(false); document.body.style.overflow = ''; }
  function toggle() {
    setOpen(o => {
      document.body.style.overflow = o ? '' : 'hidden';
      return !o;
    });
  }

  return (
    <>
      <nav className="nav" aria-label="Primary navigation">
        {/* Logo */}
        <a href="/" className="nav__logo" aria-label="Stuart Ogier home">
          <div className="nav__logo-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3C8 8 5 11 5 14a7 7 0 0 0 14 0c0-3-3-6-7-11z" />
              <line x1="12" y1="21" x2="12" y2="14" />
            </svg>
          </div>
          <span className="nav__logo-name">Stuart Ogier</span>
        </a>

        {/* Desktop CTA */}
        <a href="#contact" className="nav__cta">
          Get in touch
          <span className="nav__cta-arrow" aria-hidden="true">↗</span>
        </a>

        {/* Mobile toggle */}
        <button
          className="nav__toggle"
          onClick={toggle}
          aria-label="Open menu"
          aria-expanded={open}
        >
          Menu
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`nav__mobile${open ? ' is-open' : ''}`}
        aria-hidden={!open}
      >
        <button className="nav__mobile-close" onClick={close} aria-label="Close menu">×</button>
        {LINKS.map(({ href, label }) => (
          <a key={href} href={href} onClick={close}>{label}</a>
        ))}
      </div>
    </>
  );
}
