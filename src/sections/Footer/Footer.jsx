import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.text}>
          © 2026 Kenji J. Mendoza — Built with
          <span className={styles.heart}> ♥ </span>
          in the Philippines 🇵🇭
        </p>
      </div>
    </footer>
  );
}

export default Footer;
