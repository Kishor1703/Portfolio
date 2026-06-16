import { ABOUT_TAGS, EXPERTISE, SKILLS } from "../portfolioData";
import { FadeSection, SkillBar } from "../portfolioComponents";

export default function AboutSection() {
  return (
    <section id="About" className="section-pad" style={{ padding: "8rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
      <FadeSection>
        <div style={{ marginBottom: "4rem" }}>
          <span className="tag" style={{ marginBottom: "1rem", display: "inline-block" }}>
            About Me
          </span>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800 }}>
            Who Am <span className="grad-text">I?</span>
          </h2>
        </div>
      </FadeSection>

      <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>
        <FadeSection>
          <div className="glass-card" style={{ padding: "2rem", height: "100%" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1.2rem" }}>🚀</div>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "1rem" }}>
              <span className="grad-text2">My Story</span>
            </h3>
            <p style={{ color: "#8888aa", lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "1rem" }}>
              Motivated Computer Science graduate currently working as a Freelance Full Stack Developer. Hands-on experience in building scalable web applications, with growing knowledge in Docker, CI/CD pipelines, cloud deployment, and automating workflows using GitHub Actions.
            </p>
            <p style={{ color: "#8888aa", lineHeight: 1.8, fontSize: "0.93rem" }}>
              Seeking an entry-level Software / DevOps Engineer role.
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              {ABOUT_TAGS.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeSection>

        <FadeSection style={{ transitionDelay: "0.15s" }}>
          <div className="glass-card" style={{ padding: "2rem", height: "100%" }}>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "1.5rem" }}>
              <span className="grad-text2">My Expertise</span>
            </h3>
            {EXPERTISE.map((item) => (
              <div key={item.title} style={{ marginBottom: "1.2rem", paddingBottom: "1.2rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", gap: "0.8rem", alignItems: "center", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "1.3rem" }}>{item.emoji}</span>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700 }}>{item.title}</span>
                </div>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  {item.tech.map((tech) => (
                    <span key={tech} className="tag" style={{ fontSize: "0.7rem" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeSection>

        <FadeSection style={{ transitionDelay: "0.3s" }}>
          <div className="glass-card" style={{ padding: "2rem", height: "100%" }}>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "1.5rem" }}>
              <span className="grad-text2">My Skills</span>
            </h3>
            {SKILLS.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
