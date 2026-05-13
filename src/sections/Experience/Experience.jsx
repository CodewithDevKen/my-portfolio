import styles from "./Experience.module.css";
import { experience } from "../../data/portfolio";

function Experience() {
  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className="container">
        <p className="section-label">Experience</p>

        <div className={styles.timeline}>
          {experience.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.icon}>{item.icon}</div>

              <div className={styles.body}>
                <div className={styles.top}>
                  <span className={styles.title}>{item.title}</span>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <p className={styles.company}>{item.company}</p>
                <span className={`${styles.badge} ${styles[item.badge]}`}>
                  {item.badgeLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
