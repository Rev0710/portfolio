import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const navigation = [
  ["Home", "#hero"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return window.localStorage.getItem("portfolio-theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The theme still works for this visit when storage is unavailable.
    }
  }, [theme]);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme((current) => current === "dark" ? "light" : "dark");

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-wordmark" href="#hero" onClick={closeMenu} aria-label="John Rev Dela Rosa, home">
          <span>JRD</span>
          <span className="site-wordmark__dots" aria-hidden="true">•••</span>
        </a>

        <nav className={"site-nav" + (menuOpen ? " is-open" : "")} id="site-navigation" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a href={href} onClick={closeMenu} key={href}>{label}</a>
          ))}
          <a className="site-nav__cta" href="#contact" onClick={closeMenu}>
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <div className="site-header__controls">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={"Switch to " + (theme === "dark" ? "light" : "dark") + " mode"}
            aria-pressed={theme === "dark"}
            title={"Switch to " + (theme === "dark" ? "light" : "dark") + " mode"}
          >
            {theme === "dark" ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          </button>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
