import styles from "./About.module.css";

import { aboutText } from "../../data/portfolio";

function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <p className="section-label">About</p>

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
