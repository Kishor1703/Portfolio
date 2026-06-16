import { useEffect, useRef, useState } from "react";
import { useCountUp, useFadeIn } from "./portfolioHooks";

export function FadeSection({ children, style }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="fade-in" style={style}>
      {children}
    </div>
  );
}

export function SkillBar({ name, level }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ marginBottom: "1.4rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.9rem" }}>{name}</span>
        <span style={{ fontSize: "0.8rem", color: "#00e5ff" }}>{level}%</span>
      </div>
      <div style={{ height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "99px", overflow: "hidden" }}>
        <div className="skill-fill" style={{ width: animated ? `${level}%` : "0%" }} />
      </div>
    </div>
  );
}

export function StatCard({ icon, val, suffix, label, run, style }) {
  const count = useCountUp(val, run);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "2.5rem 2rem",
        animation: run ? "fadeInScale 0.8s ease-out forwards" : "none",
        ...style,
      }}
    >
      <div style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}>{icon}</div>
      <div
        className="stat-num grad-text"
        style={{
          transition: "transform 0.3s ease-out",
          transform: run ? "scale(1)" : "scale(0.8)",
          opacity: run ? 1 : 0.7,
        }}
      >
        {count}
        {suffix}
      </div>
      <div style={{ color: "#8888aa", fontSize: "0.85rem", marginTop: "0.4rem", fontWeight: 500 }}>{label}</div>
    </div>
  );
}

export function CertificateModal({ activeCert, onClose }) {
  if (!activeCert) {
    return null;
  }

  return (
    <div className="cert-modal" onClick={onClose}>
      <button className="cert-modal-close" onClick={onClose} aria-label="Close certificate">
        ×
      </button>
      <div className="cert-modal-inner" onClick={(event) => event.stopPropagation()}>
        <img className="cert-modal-img" src={activeCert.image} alt={`${activeCert.title} certificate`} />
      </div>
    </div>
  );
}
