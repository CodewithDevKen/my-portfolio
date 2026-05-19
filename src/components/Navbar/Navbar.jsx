import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import useTheme from "../../hooks/useTheme";

const NAV_LINKS = [
  { href: "about", label: "About" },
  { href: "experience", label: "Experience" },
  { href: "stack", label: "Stack" },
  { href: "certifications", label: "Certs" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

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
            <ul className={styles.links}>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={`#${href}`}
                    className={activeSection === href ? styles.active : ""}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

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

            <button
              className={styles.hamburger}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`${styles.bar} ${menuOpen ? styles.barTopOpen : ""}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barMidOpen : ""}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barBotOpen : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <ul className={styles.mobileLinks}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={`#${href}`} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
