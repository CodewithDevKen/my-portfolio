import { useState } from "react";
import styles from "./Navbar.module.css";
import useTheme from "../../hooks/useTheme";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          <a href="#" className={styles.logo}>
            kenji<span className={styles.dot}>.</span>
          </a>

          <div className={styles.right}>
            {/* Desktop links — hidden on mobile */}
            <ul className={styles.links}>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#stack">Stack</a>
              </li>
              <li>
                <a href="#certifications">Certs</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            {/* Theme toggle */}
            <button
              className={styles.toggle}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <span>{theme === "dark" ? "☀️" : "🌙"}</span>
              <span className={styles.toggleLabel}>
                {theme === "dark" ? "Light" : "Dark"}
              </span>
            </button>

            {/* Hamburger — visible on mobile only */}
            <button
              className={styles.hamburger}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span
                className={`${styles.bar} ${menuOpen ? styles.barTopOpen : ""}`}
              />
              <span
                className={`${styles.bar} ${menuOpen ? styles.barMidOpen : ""}`}
              />
              <span
                className={`${styles.bar} ${menuOpen ? styles.barBotOpen : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <ul className={styles.mobileLinks}>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#stack" onClick={closeMenu}>
              Stack
            </a>
          </li>
          <li>
            <a href="#certifications" onClick={closeMenu}>
              Certs
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
