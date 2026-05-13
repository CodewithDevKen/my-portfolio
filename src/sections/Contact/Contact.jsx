import styles from "./Contact.module.css";
import { personalInfo } from "../../data/portfolio";

function Contact() {
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <p className="section-label">Contact</p>

        <p className={styles.intro}>
          Open to developer roles, freelance projects, or just a conversation
          about tech. I respond to every message.
        </p>

        <div className={styles.links}>
          <a href={`mailto:${personalInfo.email}`} className={styles.link}>
            <div className={styles.linkLeft}>
              <div className={styles.linkIcon}>✉️</div>
              <div className={styles.linkInfo}>
                <span className={styles.linkLabel}>Email</span>
                <span className={styles.linkValue}>{personalInfo.email}</span>
              </div>
            </div>
            <span className={styles.arrow}>↗</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <div className={styles.linkLeft}>
              <div className={styles.linkIcon}>🐙</div>
              <div className={styles.linkInfo}>
                <span className={styles.linkLabel}>GitHub</span>
                <span className={styles.linkValue}>CodeWithDevKen</span>
              </div>
            </div>
            <span className={styles.arrow}>↗</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <div className={styles.linkLeft}>
              <div className={styles.linkIcon}>💼</div>
              <div className={styles.linkInfo}>
                <span className={styles.linkLabel}>LinkedIn</span>
                <span className={styles.linkValue}>
                  kenji-mendoza-094b792a4
                </span>
              </div>
            </div>
            <span className={styles.arrow}>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
