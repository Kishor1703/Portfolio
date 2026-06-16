import { EDUCATION, EXPERIENCE, TECHNICAL_SKILLS } from "../portfolioData";
import { FadeSection } from "../portfolioComponents";

export default function ResumeSection() {
  return (
    <section
      id="Resume"
      className="section-pad"
      style={{ padding: "8rem 4rem", background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <FadeSection>
          <div style={{ marginBottom: "4rem" }}>
            <span className="tag" style={{ marginBottom: "1rem", display: "inline-block" }}>
              Career
            </span>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800 }}>
              My <span className="grad-text">Resume</span>
            </h2>
          </div>
        </FadeSection>

        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          <div>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", color: "#00e5ff", marginBottom: "2rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Internship
            </h3>
            {EXPERIENCE.map((experience, index) => (
              <div key={experience.role} style={{ display: "flex", gap: "1.2rem", marginBottom: "2rem" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div className="tl-dot" />
                  {index < EXPERIENCE.length - 1 && <div className="tl-line" style={{ minHeight: "110px" }} />}
                </div>
                <div className="glass-card" style={{ padding: "1.5rem", flex: 1 }}>
                  <div style={{ color: "#00e5ff", fontFamily: "'Syne',sans-serif", fontWeight: 700, marginBottom: "0.3rem" }}>{experience.role}</div>
                  <div style={{ color: "#a855f7", fontSize: "0.85rem", marginBottom: "0.4rem" }}>{experience.company}</div>
                  <div style={{ color: "#8888aa", fontSize: "0.78rem", marginBottom: "0.8rem" }}>{experience.period}</div>
                  {experience.points.map((point) => (
                    <p key={point} style={{ color: "#8888aa", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "0.3rem" }}>
                      <span style={{ color: "#ff6b35", marginRight: "6px" }}>▸</span>
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", color: "#a855f7", marginBottom: "2rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Education
            </h3>
            {EDUCATION.map((education, index) => (
              <div key={education.degree} style={{ display: "flex", gap: "1.2rem", marginBottom: "2rem" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div className="tl-dot" style={{ background: "linear-gradient(135deg,#a855f7,#ff6b35)", boxShadow: "0 0 10px rgba(168,85,247,0.6)" }} />
                  {index < EDUCATION.length - 1 && <div className="tl-line" style={{ background: "linear-gradient(180deg,rgba(168,85,247,0.4),transparent)", minHeight: "90px" }} />}
                </div>
                <div className="glass-card" style={{ padding: "1.5rem", flex: 1 }}>
                  <div style={{ color: "#a855f7", fontFamily: "'Syne',sans-serif", fontWeight: 700, marginBottom: "0.4rem" }}>{education.degree}</div>
                  <div style={{ color: "#8888aa", fontSize: "0.85rem", marginBottom: "0.4rem" }}>{education.school}</div>
                  <div style={{ color: "#ff6b35", fontSize: "0.82rem", marginBottom: "0.4rem" }}>{education.detail}</div>
                  <span className="tag" style={{ fontSize: "0.73rem" }}>
                    {education.period}
                  </span>
                </div>
              </div>
            ))}

            <FadeSection>
              <div className="glass-card" style={{ padding: "1.8rem", marginTop: "0.5rem" }}>
                <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, marginBottom: "1.2rem", color: "#ff6b35" }}>
                  Technical Skills
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {TECHNICAL_SKILLS.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </div>
    </section>
  );
}
