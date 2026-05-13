import styles from "./Certifications.module.css";
import { certificates } from "../../data/portfolio";

function Certifications() {
  return (
    <section className={`section ${styles.certifications}`} id="certifications">
      <div className="container">
        <p className="section-label">Certifications</p>

        <div className={styles.list}>
          {certificates.map((cert) => (
            <div key={cert.id} className={styles.item}>
              <div className={styles.icon}>{cert.icon}</div>

              <div className={styles.body}>
                <span className={styles.name}>{cert.name}</span>
                <div className={styles.meta}>
                  <span className={styles.issuer}>{cert.issuer}</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.date}>{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
