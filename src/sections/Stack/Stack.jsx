import styles from "./Stack.module.css";
import { techStack } from "../../data/portfolio";

function Stack() {
  return (
    <section className={`section ${styles.stack}`} id="stack">
      <div className="container">
        <p className="section-label">Tech Stack</p>

        <div className={styles.groups}>
          {techStack.map((group) => (
            <div key={group.id} className={styles.group}>
              <p className={styles.groupLabel}>{group.label}</p>

              <div className={styles.tags}>
                {group.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`${styles.tag} ${tag.learning ? styles.learning : ""}`}
                  >
                    {tag.name}
                    {tag.learning && (
                      <span className={styles.learningBadge}>learning</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;
