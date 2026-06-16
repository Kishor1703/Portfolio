import { CERT_TABS } from "../portfolioData";
import { CertificateModal, FadeSection } from "../portfolioComponents";

export default function CertificatesSection({
  activeCert,
  certTab,
  filteredCerts,
  onCloseCert,
  onOpenCert,
  onSelectTab,
}) {
  return (
    <>
      <section id="Certificates" className="section-pad" style={{ padding: "8rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
        <FadeSection>
          <div style={{ marginBottom: "3rem" }}>
            <span className="tag" style={{ marginBottom: "1rem", display: "inline-block" }}>
              Achievements
            </span>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800 }}>
              My <span className="grad-text">Certificates</span>
            </h2>
          </div>
        </FadeSection>

        <div style={{ display: "flex", gap: "0.8rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
          {CERT_TABS.map((tab) => (
            <button key={tab} className={`cert-tab ${certTab === tab ? "active" : ""}`} onClick={() => onSelectTab(tab)}>
              {tab}
            </button>
          ))}
        </div>

        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
          {filteredCerts.map((cert, index) => (
            <FadeSection key={`${cert.title}-${index}`} style={{ transitionDelay: `${index * 0.08}s` }}>
              <div className="glass-card" style={{ padding: "2rem", cursor: "pointer" }}>
                {cert.image ? (
                  <div
                    className="cert-img-wrap"
                    onClick={() => onOpenCert(cert)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        onOpenCert(cert);
                      }
                    }}
                  >
                    <img className="cert-img" src={cert.image} alt={`${cert.title} certificate`} />
                  </div>
                ) : (
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      background: "linear-gradient(135deg,rgba(0,229,255,0.15),rgba(168,85,247,0.2))",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.8rem",
                      lineHeight: 1,
                      textAlign: "center",
                      margin: "0 auto 1.2rem",
                    }}
                  >
                    {cert.emoji}
                  </div>
                )}

                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{cert.title}</h3>
                <p style={{ color: "#8888aa", fontSize: "0.85rem", marginBottom: "1rem" }}>{cert.org}</p>
                <span className="tag" style={{ background: "rgba(0,229,255,0.08)", borderColor: "rgba(0,229,255,0.2)", color: "#00e5ff" }}>
                  {cert.type}
                </span>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      <CertificateModal activeCert={activeCert} onClose={onCloseCert} />
    </>
  );
}
