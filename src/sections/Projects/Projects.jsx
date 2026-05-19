import styles from "./Projects.module.css";
import { projects } from "../../data/portfolio";

function Projects() {
  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <p className="section-label">Projects</p>

        <div className={styles.list}>
          {projects.map((project) => {
            const El = project.link ? "a" : "div";
            const linkProps = project.link
              ? { href: project.link, target: "_blank", rel: "noreferrer" }
              : {};
            return (
              <El key={project.id} {...linkProps} className={styles.card}>
                <div className={`${styles.icon} ${styles[project.iconBg]}`}>
                  {project.icon}
                </div>

                <div className={styles.body}>
                  <div className={styles.top}>
                    <span className={styles.name}>{project.name}</span>
                    {project.link && <span className={styles.arrow}>↗</span>}
                  </div>

                  <p className={styles.desc}>{project.description}</p>

                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className={`${styles.status} ${styles[project.status]}`}>
                    <span className={styles.statusDot} />
                    {project.statusLabel}
                  </span>
                </div>
              </El>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
