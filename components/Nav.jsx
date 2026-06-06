export default function Nav() {
  return (
    <nav className="nav" aria-label="Primary navigation">
      <a href="/" className="nav__logo" aria-label="Stuart Ogier home">
        <span className="nav__logo-name">Stuart Ogier Counselling</span>
      </a>

      <a href="#contact" className="nav__cta">
        Get in touch
        <span className="nav__cta-arrow" aria-hidden="true">↗</span>
      </a>
    </nav>
  );
}
