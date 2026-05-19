import styles from "./Hero.module.css";
import { personalInfo } from "../../data/portfolio";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* Top row - photo + info */}
        <div className={styles.top}>
          <div className={styles.photo}>
            <img
              src="/profile.jpg"
              alt="Kenji Mendoza"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className={styles.photoFallback}>👤</div>
          </div>

          <div className={styles.info}>
            <h1 className={styles.name}>{personalInfo.name}</h1>
            <p className={styles.role}>{personalInfo.role}</p>
            <p className={styles.location}>📍 {personalInfo.location}</p>
          </div>
        </div>
        {/* Status badge */}
        {personalInfo.available && (
          <div className={styles.badgeWrap}>
            <span className={styles.badge}>
              <span className={styles.dot} />
              Available for opportunities
            </span>
          </div>
        )}

        {/* Bio */}
        <p className={styles.bio}>{personalInfo.bio}</p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a href="#projects" className={styles.btnPrimary}>
            View My Work →
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className={styles.btnSecondary}
          >
            ✉️ Email Me
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className={styles.btnSecondary}
          >
            🐙 GitHub
          </a>
          <a
            href="/Mendoza_Kenji_CV.pdf"
            download
            className={styles.btnSecondary}
          >
            📄 Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
