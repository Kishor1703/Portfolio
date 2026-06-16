export default function FooterSection({ navItems, scrollToSection }) {
  return (
    <footer
      className="footer"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "3rem 4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        background: "rgba(255,255,255,0.01)",
      }}
    >
      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.2rem" }}>
        <span className="grad-text">Kishor Kumar S</span>
      </div>

      <div className="footer-links" style={{ display: "flex", gap: "1.5rem" }}>
        {navItems.map((item) => (
          <span
            key={item}
            className="footer-link"
            onClick={() => scrollToSection(item)}
          >
            {item}
          </span>
        ))}
      </div>
    </footer>
  );
}
