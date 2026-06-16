import { PROFILE_IMAGE } from "../portfolioData";

export default function HeroSection({ downloadCV, openEmail, profileLinks, scrollToSection }) {
  return (
    <section
      id="Home"
      className="hero-section"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "90px", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          
          backgroundSize: "60px 60px",
        }}
      />

      <div className="hero-wrap" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 4rem", width: "100%", position: "relative", zIndex: 1 }}>
        <div className="hero-flex" style={{ display: "flex", alignItems: "center", gap: "5rem" }}>
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: "1.2rem" }}>
              <span className="tag"> Open to opportunities</span>
            </div>

            <h1
              className="hero-title"
              style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(3rem,6vw,5.5rem)", lineHeight: 1.05, marginBottom: "1.2rem" }}
            >
              Kishor
              <br />
              <span className="grad-text">Kumar S</span>
              <br />
              <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.55em", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Developer
              </span>
            </h1>

            <p style={{ color: "#8888aa", lineHeight: 1.9, maxWidth: "480px", marginBottom: "2.5rem", fontSize: "1.05rem" }}>
              Motivated CS graduate skilled in Full Stack Development, Docker, CI/CD pipelines, and cloud deployment. Building scalable web apps and automating deployments with GitHub Actions.
            </p>

            <div className="hero-cta" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button className="glow-btn" onClick={() => scrollToSection("Projects")}>
                View Projects
              </button>
              <button className="outline-btn" onClick={() => scrollToSection("Contact")}>
                Get In Touch
              </button>
              <button className="outline-btn" onClick={downloadCV}>
                Download CV
              </button>
            </div>

            <div className="hero-socials" style={{ display: "flex", gap: "0.8rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
              {profileLinks.map((link) =>
                link.label === "Email" ? (
                  <button
                    key={link.label}
                    type="button"
                    onClick={openEmail}
                    className="hero-social-chip"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hero-social-chip">
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="float-anim hero-media" style={{ flex: "0 0 380px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <svg className="spin-slow" style={{ position: "absolute", top: "-28px", left: "-28px", width: "348px", height: "348px", pointerEvents: "none", zIndex: 2 }} viewBox="0 0 348 348">
                <circle cx="174" cy="174" r="168" fill="none" stroke="url(#rg)" strokeWidth="1.5" strokeDasharray="8 16" />
                <defs>
                  <linearGradient id="rg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#a855f7" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="img-ring">
                <div className="img-ring-inner">
                  <img
                    className="profile-img"
                    src={PROFILE_IMAGE}
                    alt="Kishor Kumar S"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                  />
                  <div
                    style={{
                      display: "none",
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg,rgba(0,229,255,0.08),rgba(168,85,247,0.12))",
                      fontSize: "6rem",
                    }}
                  >
                    👨‍💻
                  </div>
                </div>
              </div>

              {[
                { top: "2%", right: "-20%", label: "⚛️ React" },
                { bottom: "4%", left: "-20%", label: "🐳 Docker" },
                { top: "44%", right: "-24%", label: "🍃 Spring" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  style={{
                    position: "absolute",
                    ...badge,
                    padding: "0.45rem 1rem",
                    borderRadius: "50px",
                    background: "rgba(10,10,26,0.92)",
                    border: "1px solid rgba(0,229,255,0.35)",
                    color: "#00e5ff",
                    fontSize: "0.75rem",
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: 700,
                    boxShadow: "0 0 16px rgba(0,229,255,0.2)",
                    whiteSpace: "nowrap",
                    zIndex: 3,
                  }}
                >
                  {badge.label}
                </div>
              ))}

              <div
                style={{
                  position: "absolute",
                  inset: -40,
                  borderRadius: "50%",
                  zIndex: -1,
                  background: "radial-gradient(circle, rgba(0,229,255,0.1) 0%, rgba(168,85,247,0.07) 50%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
