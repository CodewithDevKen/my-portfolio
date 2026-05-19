import styles from "./Certifications.module.css";
import { certificates } from "../../data/portfolio";

function Certifications() {
  return (
    <section className={`section ${styles.certifications}`} id="certifications">
      <div className="container">
        <p className="section-label">Certifications</p>

        <div className={styles.list}>
          {certificates.map((cert) => {
            const content = (
              <>
                <div className={styles.icon}>{cert.icon}</div>

                <div className={styles.body}>
                  <span className={styles.name}>{cert.name}</span>
                  <div className={styles.meta}>
                    <span className={styles.issuer}>{cert.issuer}</span>
                    <span className={styles.dot}>·</span>
                    <span className={styles.date}>{cert.date}</span>
                  </div>
                </div>

                {cert.credentialUrl && (
                  <span className={styles.badge}>View</span>
                )}
              </>
            );

            return cert.credentialUrl ? (
              <a
                key={cert.id}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.item} ${styles.clickable}`}
              >
                {content}
              </a>
            ) : (
              <div key={cert.id} className={styles.item}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
