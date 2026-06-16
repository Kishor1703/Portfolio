import { PROJECTS } from "../portfolioData";
import { FadeSection } from "../portfolioComponents";

export default function ProjectsSection() {
  return (
    <section id="Projects" className="section-pad" style={{ padding: "8rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
      <FadeSection>
        <div style={{ marginBottom: "4rem" }}>
          <span className="tag" style={{ marginBottom: "1rem", display: "inline-block" }}>
            Work
          </span>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800 }}>
            My <span className="grad-text">Projects</span>
          </h2>
        </div>
      </FadeSection>

      <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
        {PROJECTS.map((project, index) => (
          <FadeSection key={project.title} style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="glass-card" style={{ padding: "2rem", height: "100%", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{project.icon}</div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.8rem" }}>{project.title}</h3>
              <p style={{ color: "#8888aa", fontSize: "0.88rem", lineHeight: 1.7, flex: 1, marginBottom: "1.2rem" }}>{project.desc}</p>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.4rem" }}>
                {project.tech.map((tech) => (
                  <span key={tech} className="tag" style={{ fontSize: "0.72rem" }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "0.8rem" }}>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="glow-btn" style={{ padding: "0.55rem 1.3rem", fontSize: "0.8rem", textDecoration: "none", display: "inline-block" }}>
                    Live
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="outline-btn" style={{ padding: "0.5rem 1.2rem", fontSize: "0.8rem", textDecoration: "none", display: "inline-block" }}>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </FadeSection>
        ))}
      </div>
    </section>
  );
}
