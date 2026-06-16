import { CONTACT_INFO } from "../portfolioData";
import { FadeSection } from "../portfolioComponents";

export default function ContactSection() {
  return (
    <section
      id="Contact"
      className="section-pad"
      style={{
        padding: "8rem 4rem",
        background: "linear-gradient(180deg,transparent,rgba(168,85,247,0.05),transparent)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <FadeSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="tag" style={{ marginBottom: "1rem", display: "inline-block" }}>
              Contact
            </span>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, marginBottom: "1rem" }}>
              Get In <span className="grad-text">Touch</span>
            </h2>
            <p style={{ color: "#8888aa", maxWidth: "480px", margin: "0 auto", lineHeight: 1.8 }}>
              Open to Software Engineer and DevOps roles. Drop a message and I'll get back to you!
            </p>
          </div>
        </FadeSection>

        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", maxWidth: "640px", margin: "0 auto", gap: "2.5rem", alignItems: "start" }}>
          <FadeSection>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {CONTACT_INFO.map((info) => (
                <div key={info.label} className="glass-card" style={{ padding: "1.2rem 1.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "14px",
                      flexShrink: 0,
                      background: `${info.color}18`,
                      border: `1px solid ${info.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    {info.icon}
                  </div>

                  <div>
                    <div
                      style={{
                        color: info.color,
                        fontSize: "0.73rem",
                        fontFamily: "'Syne',sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {info.label}
                    </div>

                    <div style={{ fontWeight: 500, fontSize: "0.9rem", wordBreak: "break-all" }}>
                      {info.label === "Email" ? (
                        <a href={`mailto:${info.val}`} style={{ textDecoration: "none", color: "inherit" }}>
                          {info.val}
                        </a>
                      ) : info.label === "Phone" ? (
                        <a href={`tel:${info.val}`} style={{ textDecoration: "none", color: "inherit" }}>
                          {info.val}
                        </a>
                      ) : (
                        info.val
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="glass-card" style={{ padding: "1.2rem 1.5rem", display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 10px #22c55e", flexShrink: 0 }} />
                <div style={{ color: "#22c55e", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.85rem" }}>
                  Seeking Software / DevOps Engineer roles
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  );
}
