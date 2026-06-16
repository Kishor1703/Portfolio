export default function NavSection({
  activeNav,
  downloadCV,
  navItems,
  navOpen,
  onToggleNav,
  scrollToSection,
}) {
  return (
    <nav
      className="site-nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: "rgba(10,10,26,0.88)",
        backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.1rem 4rem",
      }}
    >
      <div className="nav-brand" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.3rem" }}>
        <span className="grad-text">KK</span>
        <span style={{ color: "rgba(255,255,255,0.25)", margin: "0 8px" }}>·</span>
        <span style={{ fontSize: "0.75rem", color: "#8888aa", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Portfolio
        </span>
      </div>

      <ul className="nav-links" style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
        {navItems.map((item) => (
          <li key={item} className={`nav-link ${activeNav === item ? "active" : ""}`} onClick={() => scrollToSection(item)}>
            {item}
          </li>
        ))}
      </ul>

      <button className="glow-btn nav-cta" style={{ padding: "0.6rem 1.4rem", fontSize: "0.82rem" }} onClick={() => scrollToSection("Contact")}>
        Hire Me
      </button>

      <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded={navOpen} onClick={onToggleNav}>
        {navOpen ? "×" : "≡"}
      </button>

      {navOpen && (
        <div className="nav-drawer">
          <ul>
            {navItems.map((item) => (
              <li key={item} className={`nav-link ${activeNav === item ? "active" : ""}`} onClick={() => scrollToSection(item)}>
                {item}
              </li>
            ))}
          </ul>
          <div className="nav-drawer-actions">
            <button className="glow-btn" style={{ padding: "0.55rem 1.2rem", fontSize: "0.8rem" }} onClick={() => scrollToSection("Contact")}>
              Hire Me
            </button>
            <button className="outline-btn" style={{ padding: "0.5rem 1.1rem", fontSize: "0.8rem" }} onClick={downloadCV}>
              Download CV
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
