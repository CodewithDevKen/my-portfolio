import styles from "./About.module.css";

import { aboutText, aboutStats } from "../../data/portfolio";

function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <p className="section-label">About</p>

        <div className={styles.stats}>
          {aboutStats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.text}>
          {aboutText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
