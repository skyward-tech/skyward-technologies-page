import React from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export const Navigation = () => {
  const [isTop, setIsTop] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      id="menu"
      className={`nav ${isTop && !isOpen ? "nav--top" : "nav--scrolled"}`}
    >
      <div className="nav__container">
        <a
          className="nav__brand page-scroll"
          href="#page-top"
          onClick={closeMenu}
        >
          <span className="nav__brand-mark">S</span>
          Skyward<span className="nav__brand-accent">Tech</span>
        </a>

        <button
          type="button"
          className={`nav__toggle ${isOpen ? "is-active" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav__links ${isOpen ? "is-open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="page-scroll" onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn btn--primary btn--sm nav__cta page-scroll"
            onClick={closeMenu}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};
