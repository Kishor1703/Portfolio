import { useState, useEffect, useRef } from "react";
import profileImg from "../assets/kishorkumar.jpeg";
/* ─── GLOBAL STYLES ───────────────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Epilogue:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --g1: #0a0a1a;
    --cyan:  #00e5ff;
    --violet: #a855f7;
    --orange: #ff6b35;
    --grad: linear-gradient(135deg, #00e5ff, #a855f7, #ff6b35);
    --grad2: linear-gradient(90deg, #00e5ff, #a855f7);
    --glass: rgba(255,255,255,0.05);
    --glass-border: rgba(255,255,255,0.1);
    --text: #e8e8f0;
    --muted: #8888aa;
  }

  html { scroll-behavior: smooth; }
  body { background: var(--g1); color: var(--text); font-family: 'Epilogue', sans-serif; overflow-x: hidden; }
  ::selection { background: #a855f740; color: #fff; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--g1); }
  ::-webkit-scrollbar-thumb { background: linear-gradient(#00e5ff,#a855f7); border-radius: 9px; }

  .orb { position: fixed; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: 0; }
  .orb1 { width: 500px; height: 500px; background: #00e5ff18; top: -100px; left: -150px; animation: drift1 18s ease-in-out infinite; }
  .orb2 { width: 600px; height: 600px; background: #a855f714; bottom: -150px; right: -100px; animation: drift2 22s ease-in-out infinite; }
  .orb3 { width: 300px; height: 300px; background: #ff6b3510; top: 40%; left: 60%; animation: drift1 14s ease-in-out infinite reverse; }

  @keyframes drift1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,60px) scale(1.1); } }
  @keyframes drift2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-60px,-40px) scale(1.08); } }

  .glass-card {
    background: var(--glass); border: 1px solid var(--glass-border);
    backdrop-filter: blur(20px); border-radius: 20px;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }
  .glass-card:hover { transform: translateY(-6px); border-color: rgba(168,85,247,0.4); box-shadow: 0 20px 60px rgba(168,85,247,0.15); }

  .grad-text { background: linear-gradient(135deg,#00e5ff,#a855f7,#ff6b35); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .grad-text2 { background: linear-gradient(90deg,#00e5ff,#a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  .glow-btn {
    background: linear-gradient(135deg,#00e5ff,#a855f7,#ff6b35); border: none; color: #fff;
    padding: 0.85rem 2.2rem; border-radius: 50px; font-family: 'Syne',sans-serif;
    font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: transform 0.2s, box-shadow 0.3s;
    box-shadow: 0 0 24px rgba(168,85,247,0.4);
  }
  .glow-btn:hover { transform: scale(1.05); box-shadow: 0 0 40px rgba(0,229,255,0.5), 0 0 80px rgba(168,85,247,0.3); }

  .outline-btn {
    background: transparent; border: 1.5px solid rgba(0,229,255,0.5); color: #00e5ff;
    padding: 0.8rem 2rem; border-radius: 50px; font-family: 'Syne',sans-serif;
    font-weight: 600; font-size: 0.95rem; cursor: pointer; transition: all 0.3s;
  }
  .outline-btn:hover { background: rgba(0,229,255,0.1); border-color: #00e5ff; box-shadow: 0 0 20px rgba(0,229,255,0.3); }

  .nav-link {
    cursor: pointer; font-family: 'Syne',sans-serif; font-weight: 600; font-size: 0.88rem;
    letter-spacing: 0.05em; color: #8888aa; transition: color 0.2s; padding: 0.3rem 0;
    position: relative; text-transform: uppercase;
  }
  .nav-link::after {
    content:''; position: absolute; bottom: -2px; left: 0; right: 0; height: 2px;
    background: linear-gradient(135deg,#00e5ff,#a855f7,#ff6b35);
    transform: scaleX(0); transition: transform 0.3s; border-radius: 9px;
  }
  .nav-link:hover { color: #fff; }
  .nav-link:hover::after,.nav-link.active::after { transform: scaleX(1); }
  .nav-link.active { color: #fff; }

  .fade-in { opacity:0; transform:translateY(30px); transition:opacity 0.7s ease,transform 0.7s ease; }
  .fade-in.visible { opacity:1; transform:translateY(0); }

  .skill-fill {
    height: 100%; border-radius: 99px;
    background: linear-gradient(135deg,#00e5ff,#a855f7,#ff6b35);
    width: 0%; transition: width 1.4s cubic-bezier(.4,0,.2,1);
    position: relative; overflow: hidden;
  }
  .skill-fill::after {
    content:''; position:absolute; top:0; left:-100%; right:-100%; bottom:0;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent);
    animation: shimmer 2.5s infinite;
  }
  @keyframes shimmer { to { left:200%; right:-200%; } }

  .stat-num { font-family:'Syne',sans-serif; font-size:3rem; font-weight:800; }

  .cert-tab {
    padding: 0.5rem 1.4rem; border-radius: 50px; border: 1.5px solid rgba(255,255,255,0.1);
    background: transparent; color: #8888aa; font-family: 'Syne',sans-serif;
    font-weight: 600; font-size: 0.85rem; cursor: pointer; transition: all 0.3s;
  }
  .cert-tab.active { background: linear-gradient(135deg,#00e5ff,#a855f7,#ff6b35); color: #fff; border-color: transparent; box-shadow: 0 0 20px rgba(168,85,247,0.4); }
  .cert-tab:hover:not(.active) { border-color:rgba(0,229,255,0.4); color:#00e5ff; }

  .form-input {
    width:100%; padding:0.9rem 1.2rem; background:rgba(255,255,255,0.05);
    border:1px solid rgba(255,255,255,0.1); border-radius:12px; color:#fff;
    font-family:'Epilogue',sans-serif; font-size:0.95rem; outline:none;
    transition:border-color 0.3s,box-shadow 0.3s;
  }
  .form-input::placeholder { color:#8888aa; }
  .form-input:focus { border-color:rgba(0,229,255,0.5); box-shadow:0 0 16px rgba(0,229,255,0.15); }

  .tag {
    display:inline-block; padding:0.3rem 0.9rem; border-radius:50px;
    font-size:0.78rem; font-weight:600; background:rgba(168,85,247,0.15);
    border:1px solid rgba(168,85,247,0.3); color:#c084fc;
  }

  .tl-dot { width:12px; height:12px; border-radius:50%; background:linear-gradient(135deg,#00e5ff,#a855f7); flex-shrink:0; margin-top:5px; box-shadow:0 0 10px rgba(0,229,255,0.6); }
  .tl-line { width:2px; flex-grow:1; background:linear-gradient(180deg,rgba(0,229,255,0.4),transparent); margin:4px 5px 0; }

  @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-12px); } }
  .float-anim { animation:float 4s ease-in-out infinite; }
  @keyframes rotate-slow { to { transform:rotate(360deg); } }
  .spin-slow { animation:rotate-slow 20s linear infinite; }

  .profile-img {
    width: 100%; height: 100%; border-radius: 50%;
    object-fit: cover; object-position: center;
    display: block;
    filter: saturate(1.1) contrast(1.05);
  }

  @keyframes gradBorder {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .img-ring {
    position: relative; width: 290px; height: 290px;
    border-radius: 50%; padding: 3px;
    background: linear-gradient(135deg, #00e5ff, #a855f7, #ff6b35);
    box-shadow: 0 0 40px rgba(0,229,255,0.25), 0 0 80px rgba(168,85,247,0.15);
  }
  .img-ring-inner {
    width: 100%; height: 100%; border-radius: 50%;
    overflow: hidden; background: #0a0a1a;
  }

  @media (max-width:900px) {
    .grid-3 { grid-template-columns:1fr !important; }
    .grid-2 { grid-template-columns:1fr !important; }
    .hero-flex { flex-direction:column !important; text-align:center; }
  }
`;

/* ─── DATA (Kishor Kumar S) ───────────────────────────────────────── */
const NAV = ["Home","About","Projects","Resume","Certificates","Contact"];

const SKILLS = [
  { name: "Java", level: 80 },
  { name: "React.js", level: 88 },
  { name: "HTML5 / CSS3 / Bootstrap / Tailwind", level: 90 },
  { name: "Spring Boot & Hibernate", level: 72 },
  { name: "PostgreSQL / MySQL / MongoDB", level: 78 },
  { name: "Docker & GitHub Actions", level: 70 },
];

const EXPERTISE = [
  { emoji: "🌐", title: "Frontend", tech: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"] },
  { emoji: "⚙️", title: "Backend", tech: ["Spring Boot", "Hibernate", "Python Flask", "Node.js", "Express.js"] },
  { emoji: "🚀", title: "DevOps & Cloud", tech: ["Docker", "GitHub Actions", "Render", "Vercel", "Linux"] },
  { emoji: "🗄️", title: "Databases", tech: ["PostgreSQL", "MySQL", "MongoDB"] },
];

const PROJECTS = [
  {
    icon: "📝",
    title: "Feedback System",
    desc: "A web-based student feedback system to collect and analyze faculty performance. Features interactive dashboards with real-time data visualization using Chart.js.",
    tech: ["React.js", "Node.js", "MySQL", "Express.js"],
    liveUrl: "https://feedback.ssmiet.ac.in/",   githubUrl: "",},
  {
    icon: "🏫",
    title: "College Website",
    desc: "Designed and deployed the official website for SSM Institute of Engineering and Technology. Fully responsive and production-ready.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://ssmiet.ac.in/",  githubUrl: "",},
  {
    icon: "💰",
    title: "Wallet Wise",
    desc: "Full-stack web app to manage lent and returned money efficiently. Features user authentication, responsive UI, and clear financial insights for better money management.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "https://wallet-wise-one.vercel.app/",
    githubUrl: "https://github.com/Kishor1703/WalletWise",
  },
];

const EXPERIENCE = [
  {
    role: "Full Stack Developer Intern",
    company: "MailerJobs, Bangalore",
    period: "Jan 2025 – Mar 2025",
    points: [
      "Contributed to the development and enhancement of the MailerJobs recruitment portal.",
      "Developed frontend and backend features using React.js, MySQL, and Python Flask.",
      "Handled deployment and hosting using Hostinger and managed integrations with WordPress.",
    ],
  },
  {
    role: "Intern",
    company: "Maxelerator Foundation, Madurai",
    period: "July 2023",
    points: [
      "Gained hands-on experience in AI systems using computer vision.",
      "Designed applications for face recognition and image processing.",
      "Built a virtual mouse with hand gesture recognition.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "BE in Computer Science",
    school: "SSM Institute of Engineering and Technology",
    period: "2021 – May 2025",
    detail: "GPA: 8.01 / 10",
  },
  {
    degree: "HSC & SSLC",
    school: "MSP Solainadar Memorial Hr Sec School",
    period: "2017 – May 2021",
    detail: "HSC: 86.8% · SSLC: 85.8%",
  },
];

const CERTS = [
  { title: "Full Stack Developer Intern", org: "MailerJobs, Bangalore", type: "Internship", emoji: "💼" },
  { title: "AI & Computer Vision Intern", org: "Maxelerator Foundation", type: "Internship", emoji: "🤖" },
  { title: "College Website", org: "SSM Institute of Engineering and Technology", type: "Project", emoji: "🎓" },
  { title: "Feedback System", org: "SSM Institute of Engineering and Technology", type: "Project", emoji: "📝" },
];

const STATS = [
  { icon: "⏱", val: 300, suffix: "+", label: "Hours Worked" },
  { icon: "💻", val: 3, suffix: "+", label: "Projects Shipped" },
  { icon: "🏢", val: 2, suffix: "", label: "Internships" },
  { icon: "🎓", val: 8, suffix: ".01", label: "GPA" },
];

const CERT_TABS = ["All", "Internship", "Courses", "Achieved"];
const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kishor-kumar-s-6806a125b" },
  { label: "GitHub", href: "https://github.com/Kishor1703" },
  { label: "Email", href: "mailto:pskishor196@gmail.com" },
];

/* ─── HOOKS ──────────────────────────────────────────────────────── */
function useFadeIn() {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("visible"); }, { threshold: 0.15 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

function useCountUp(target, run) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1800, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [run, target]);
  return val;
}

/* ─── COMPONENTS ─────────────────────────────────────────────────── */
function SkillBar({ name, level }) {
  const [anim, setAnim] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnim(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current); return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ marginBottom: "1.4rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.9rem" }}>{name}</span>
        <span style={{ fontSize: "0.8rem", color: "#00e5ff" }}>{level}%</span>
      </div>
      <div style={{ height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "99px", overflow: "hidden" }}>
        <div className="skill-fill" style={{ width: anim ? `${level}%` : "0%" }} />
      </div>
    </div>
  );
}

function StatCard({ icon, val, suffix, label, run }) {
  const count = useCountUp(val, run);
  return (
    <div style={{ textAlign: "center", padding: "2.5rem 2rem" }}>
      <div style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}>{icon}</div>
      <div className="stat-num grad-text">{count}{suffix}</div>
      <div style={{ color: "#8888aa", fontSize: "0.85rem", marginTop: "0.4rem", fontWeight: 500 }}>{label}</div>
    </div>
  );
}

function FadeSection({ children, style }) {
  const ref = useFadeIn();
  return <div ref={ref} className="fade-in" style={style}>{children}</div>;
}

/* ─── MAIN ───────────────────────────────────────────────────────── */
export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("Home");
  const [certTab, setCertTab] = useState("All");
  const [statsRun, setStatsRun] = useState(false);
  const statsRef = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsRun(true); }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current); return () => obs.disconnect();
  }, []);

  const downloadCV = () => {
    const cvPath = "../assets/Resume.pdf";
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Kishor_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const openEmail = () => {
    const email = "pskishor196@gmail.com";
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent("Hi Kishor,");
    const mailto = `mailto:${email}?subject=${subject}&body=${body}`;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    try {
      window.location.href = mailto;
      setTimeout(() => {
        window.open(gmail, "_blank", "noopener,noreferrer");
      }, 700);
    } catch {
      window.open(gmail, "_blank", "noopener,noreferrer");
    }
  };
  const scrollTo = (id) => { setActiveNav(id); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const filteredCerts = certTab === "All" ? CERTS : CERTS.filter(c => c.type === certTab);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <div className="orb orb1" /><div className="orb orb2" /><div className="orb orb3" />

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        background: "rgba(10,10,26,0.88)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.1rem 4rem",
      }}>
        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.3rem" }}>
          <span className="grad-text">KK</span>
          <span style={{ color: "rgba(255,255,255,0.25)", margin: "0 8px" }}>·</span>
          <span style={{ fontSize: "0.75rem", color: "#8888aa", letterSpacing: "0.12em", textTransform: "uppercase" }}>Portfolio</span>
        </div>
        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
          {NAV.map(n => (
            <li key={n} className={`nav-link ${activeNav === n ? "active" : ""}`} onClick={() => scrollTo(n)}>{n}</li>
          ))}
        </ul>
        <button className="glow-btn" style={{ padding: "0.6rem 1.4rem", fontSize: "0.82rem" }} onClick={() => scrollTo("Contact")}>
          Hire Me
        </button>
      </nav>

      {/* ── HERO ── */}
      <section id="Home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "90px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "linear-gradient(rgba(0,229,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 4rem", width: "100%", position: "relative", zIndex: 1 }}>
          <div className="hero-flex" style={{ display: "flex", alignItems: "center", gap: "5rem" }}>
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: "1.2rem" }}>
                <span className="tag"> Open to opportunities</span>
              </div>
              <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(3rem,6vw,5.5rem)", lineHeight: 1.05, marginBottom: "1.2rem" }}>
                Kishor<br />
                <span className="grad-text">Kumar S</span><br />
                <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.55em", letterSpacing: "0.2em", textTransform: "uppercase" }}>Developer</span>
              </h1>
              <p style={{ color: "#8888aa", lineHeight: 1.9, maxWidth: "480px", marginBottom: "2.5rem", fontSize: "1.05rem" }}>
                Motivated CS graduate skilled in Full Stack Development, Docker, CI/CD pipelines, and cloud deployment. Building scalable web apps and automating deployments with GitHub Actions.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className="glow-btn" onClick={() => scrollTo("Projects")}>View Projects</button>
                <button className="outline-btn" onClick={() => scrollTo("Contact")}>Get In Touch</button>
                <button className="outline-btn" onClick={downloadCV}>Download CV</button>
              </div>
              <div style={{ display: "flex", gap: "0.8rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
                {SOCIAL_LINKS.map(s => (
                  s.label === "Email" ? (
                    <button
                      key={s.label}
                      type="button"
                      onClick={openEmail}
                      style={{
                        padding: "0.35rem 1rem", borderRadius: "50px",
                        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                        color: "#8888aa", fontSize: "0.78rem", fontFamily: "'Syne',sans-serif", fontWeight: 600,
                        cursor: "pointer", transition: "all 0.2s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = "#00e5ff"; e.currentTarget.style.borderColor = "rgba(0,229,255,0.3)"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "#8888aa"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                    >
                      {s.label}
                    </button>
                  ) : (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        padding: "0.35rem 1rem", borderRadius: "50px",
                        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                        color: "#8888aa", fontSize: "0.78rem", fontFamily: "'Syne',sans-serif", fontWeight: 600,
                        cursor: "pointer", transition: "all 0.2s", textDecoration: "none",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = "#00e5ff"; e.currentTarget.style.borderColor = "rgba(0,229,255,0.3)"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "#8888aa"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                    >
                      {s.label}
                    </a>
                  )
                ))}
              </div>
            </div>

            {/* ── PROFILE IMAGE ── */}
            <div className="float-anim" style={{ flex: "0 0 380px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ position: "relative" }}>

                {/* spinning dashed ring */}
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

                {/* gradient border + image */}
                <div className="img-ring">
                  <div className="img-ring-inner">
                  
                    <img
                      className="profile-img"
                      src={profileImg}
                      alt="Kishor Kumar S"
                      onError={e => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling.style.display = "flex";
                      }}
                    />
                    {/* fallback emoji if image path is wrong */}
                    <div style={{
                      display: "none", width: "100%", height: "100%",
                      alignItems: "center", justifyContent: "center",
                      background: "linear-gradient(135deg,rgba(0,229,255,0.08),rgba(168,85,247,0.12))",
                      fontSize: "6rem",
                    }}>👨‍💻</div>
                  </div>
                </div>

                {/* floating tech badges */}
                {[
                  { top: "2%",   right: "-20%", label: "⚛️ React"  },
                  { bottom: "4%", left: "-20%",  label: "🐳 Docker" },
                  { top: "44%",  right: "-24%", label: "🍃 Spring" },
                ].map(b => (
                  <div key={b.label} style={{
                    position: "absolute", ...b, padding: "0.45rem 1rem", borderRadius: "50px",
                    background: "rgba(10,10,26,0.92)", border: "1px solid rgba(0,229,255,0.35)",
                    color: "#00e5ff", fontSize: "0.75rem", fontFamily: "'Syne',sans-serif", fontWeight: 700,
                    boxShadow: "0 0 16px rgba(0,229,255,0.2)", whiteSpace: "nowrap", zIndex: 3,
                  }}>{b.label}</div>
                ))}

                {/* soft glow behind the image */}
                <div style={{
                  position: "absolute", inset: -40, borderRadius: "50%", zIndex: -1,
                  background: "radial-gradient(circle, rgba(0,229,255,0.1) 0%, rgba(168,85,247,0.07) 50%, transparent 70%)",
                  filter: "blur(24px)",
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="About" style={{ padding: "8rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
        <FadeSection>
          <div style={{ marginBottom: "4rem" }}>
            <span className="tag" style={{ marginBottom: "1rem", display: "inline-block" }}>About Me</span>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800 }}>
              Who Am <span className="grad-text">I?</span>
            </h2>
          </div>
        </FadeSection>
        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>
          {/* bio */}
          <FadeSection>
            <div className="glass-card" style={{ padding: "2rem", height: "100%" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1.2rem" }}>🚀</div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "1rem" }}>
                <span className="grad-text2">My Story</span>
              </h3>
              <p style={{ color: "#8888aa", lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "1rem" }}>
                Motivated Computer Science graduate with hands-on experience in Full Stack Development. Learning Docker, CI/CD pipelines, and cloud deployment. Skilled in building scalable web applications and automating deployments using GitHub Actions.
              </p>
              <p style={{ color: "#8888aa", lineHeight: 1.8, fontSize: "0.93rem" }}>
                Seeking an entry-level Software / DevOps Engineer role.
              </p>
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                {["Full Stack", "DevOps", "Cloud"].map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </FadeSection>

          {/* expertise */}
          <FadeSection style={{ transitionDelay: "0.15s" }}>
            <div className="glass-card" style={{ padding: "2rem", height: "100%" }}>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "1.5rem" }}>
                <span className="grad-text2">My Expertise</span>
              </h3>
              {EXPERTISE.map(e => (
                <div key={e.title} style={{ marginBottom: "1.2rem", paddingBottom: "1.2rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ display: "flex", gap: "0.8rem", alignItems: "center", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "1.3rem" }}>{e.emoji}</span>
                    <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700 }}>{e.title}</span>
                  </div>
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                    {e.tech.map(t => <span key={t} className="tag" style={{ fontSize: "0.7rem" }}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </FadeSection>

          {/* skills */}
          <FadeSection style={{ transitionDelay: "0.3s" }}>
            <div className="glass-card" style={{ padding: "2rem", height: "100%" }}>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "1.5rem" }}>
                <span className="grad-text2">My Skills</span>
              </h3>
              {SKILLS.map(s => <SkillBar key={s.name} {...s} />)}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── STATS ── */}
      <div ref={statsRef} style={{
        background: "linear-gradient(135deg,rgba(0,229,255,0.05),rgba(168,85,247,0.08),rgba(255,107,53,0.05))",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1rem" }}>
          {STATS.map(s => <StatCard key={s.label} {...s} run={statsRun} />)}
        </div>
      </div>

      {/* ── PROJECTS ── */}
      <section id="Projects" style={{ padding: "8rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
        <FadeSection>
          <div style={{ marginBottom: "4rem" }}>
            <span className="tag" style={{ marginBottom: "1rem", display: "inline-block" }}>Work</span>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800 }}>
              My <span className="grad-text">Projects</span>
            </h2>
          </div>
        </FadeSection>
        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
          {PROJECTS.map((p, i) => (
            <FadeSection key={p.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="glass-card" style={{ padding: "2rem", height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{p.icon}</div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.8rem" }}>{p.title}</h3>
                <p style={{ color: "#8888aa", fontSize: "0.88rem", lineHeight: 1.7, flex: 1, marginBottom: "1.2rem" }}>{p.desc}</p>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.4rem" }}>
                  {p.tech.map(t => <span key={t} className="tag" style={{ fontSize: "0.72rem" }}>{t}</span>)}
                </div>
                <div style={{ display: "flex", gap: "0.8rem" }}>
                  <a href={p.liveUrl} target="_blank" rel="noreferrer" className="glow-btn" style={{ padding: "0.55rem 1.3rem", fontSize: "0.8rem", textDecoration: "none", display: "inline-block" }}>Live</a>
                  {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noreferrer" className="outline-btn" style={{ padding: "0.5rem 1.2rem", fontSize: "0.8rem", textDecoration: "none", display: "inline-block" }}>GitHub</a>}
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ── RESUME ── */}
      <section id="Resume" style={{
        padding: "8rem 4rem", background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeSection>
            <div style={{ marginBottom: "4rem" }}>
              <span className="tag" style={{ marginBottom: "1rem", display: "inline-block" }}>Career</span>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800 }}>
                My <span className="grad-text">Resume</span>
              </h2>
            </div>
          </FadeSection>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            {/* internship / experience */}
            <div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", color: "#00e5ff", marginBottom: "2rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Internship</h3>
              {EXPERIENCE.map((ex, i) => (
                <div key={ex.role} style={{ display: "flex", gap: "1.2rem", marginBottom: "2rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="tl-dot" />
                    {i < EXPERIENCE.length - 1 && <div className="tl-line" style={{ minHeight: "110px" }} />}
                  </div>
                  <div className="glass-card" style={{ padding: "1.5rem", flex: 1 }}>
                    <div style={{ color: "#00e5ff", fontFamily: "'Syne',sans-serif", fontWeight: 700, marginBottom: "0.3rem" }}>{ex.role}</div>
                    <div style={{ color: "#a855f7", fontSize: "0.85rem", marginBottom: "0.4rem" }}>{ex.company}</div>
                    <div style={{ color: "#8888aa", fontSize: "0.78rem", marginBottom: "0.8rem" }}>{ex.period}</div>
                    {ex.points.map((pt, j) => (
                      <p key={j} style={{ color: "#8888aa", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "0.3rem" }}>
                        <span style={{ color: "#ff6b35", marginRight: "6px" }}>▸</span>{pt}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* education + skills */}
            <div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", color: "#a855f7", marginBottom: "2rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Education</h3>
              {EDUCATION.map((ed, i) => (
                <div key={ed.degree} style={{ display: "flex", gap: "1.2rem", marginBottom: "2rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="tl-dot" style={{ background: "linear-gradient(135deg,#a855f7,#ff6b35)", boxShadow: "0 0 10px rgba(168,85,247,0.6)" }} />
                    {i < EDUCATION.length - 1 && <div className="tl-line" style={{ background: "linear-gradient(180deg,rgba(168,85,247,0.4),transparent)", minHeight: "90px" }} />}
                  </div>
                  <div className="glass-card" style={{ padding: "1.5rem", flex: 1 }}>
                    <div style={{ color: "#a855f7", fontFamily: "'Syne',sans-serif", fontWeight: 700, marginBottom: "0.4rem" }}>{ed.degree}</div>
                    <div style={{ color: "#8888aa", fontSize: "0.85rem", marginBottom: "0.4rem" }}>{ed.school}</div>
                    <div style={{ color: "#ff6b35", fontSize: "0.82rem", marginBottom: "0.4rem" }}>{ed.detail}</div>
                    <span className="tag" style={{ fontSize: "0.73rem" }}>{ed.period}</span>
                  </div>
                </div>
              ))}
              <FadeSection>
                <div className="glass-card" style={{ padding: "1.8rem", marginTop: "0.5rem" }}>
                  <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, marginBottom: "1.2rem", color: "#ff6b35" }}>Technical Skills</h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {["Java", "React.js", "Spring Boot", "Python Flask", "Node.js", "Docker", "GitHub Actions", "PostgreSQL", "MySQL", "MongoDB", "Linux", "Git"].map(s => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </div>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATES ── */}
      <section id="Certificates" style={{ padding: "8rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
        <FadeSection>
          <div style={{ marginBottom: "3rem" }}>
            <span className="tag" style={{ marginBottom: "1rem", display: "inline-block" }}>Achievements</span>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800 }}>
              My <span className="grad-text">Certificates</span>
            </h2>
          </div>
        </FadeSection>
        <div style={{ display: "flex", gap: "0.8rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
          {CERT_TABS.map(t => (
            <button key={t} className={`cert-tab ${certTab === t ? "active" : ""}`} onClick={() => setCertTab(t)}>{t}</button>
          ))}
        </div>
        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
          {filteredCerts.map((c, i) => (
            <FadeSection key={c.title} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="glass-card" style={{ padding: "2rem", cursor: "pointer" }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "16px",
                  background: "linear-gradient(135deg,rgba(0,229,255,0.15),rgba(168,85,247,0.2))",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.8rem", lineHeight: 1, textAlign: "center", margin: "0 auto 1.2rem",
                }}>{c.emoji}</div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{c.title}</h3>
                <p style={{ color: "#8888aa", fontSize: "0.85rem", marginBottom: "1rem" }}>{c.org}</p>
                <span className="tag" style={{ background: "rgba(0,229,255,0.08)", borderColor: "rgba(0,229,255,0.2)", color: "#00e5ff" }}>{c.type}</span>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="Contact" style={{
        padding: "8rem 4rem",
        background: "linear-gradient(180deg,transparent,rgba(168,85,247,0.05),transparent)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <FadeSection>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="tag" style={{ marginBottom: "1rem", display: "inline-block" }}>Contact</span>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, marginBottom: "1rem" }}>
                Get In <span className="grad-text">Touch</span>
              </h2>
              <p style={{ color: "#8888aa", maxWidth: "480px", margin: "0 auto", lineHeight: 1.8 }}>
                Open to Software Engineer and DevOps roles. Drop a message and I'll get back to you!
              </p>
            </div>
          </FadeSection>

          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "2.5rem", alignItems: "start" }}>
            <FadeSection>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {[
                  { icon: "📧", label: "Email", val: "pskishor196@gmail.com", color: "#00e5ff" },
                  { icon: "📍", label: "Location", val: "Dindigul, Tamil Nadu", color: "#a855f7" },
                  { icon: "📱", label: "Phone", val: "+91 9659844778", color: "#ff6b35" },
                ].map(info => (
                  <div key={info.label} className="glass-card" style={{ padding: "1.2rem 1.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                    <div style={{
                      width: "46px", height: "46px", borderRadius: "14px", flexShrink: 0,
                      background: `${info.color}18`, border: `1px solid ${info.color}30`,
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem",
                    }}>{info.icon}</div>
                    <div>
                      <div style={{ color: info.color, fontSize: "0.73rem", fontFamily: "'Syne',sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.2rem" }}>{info.label}</div>
                      <div style={{ fontWeight: 500, fontSize: "0.9rem", wordBreak: "break-all" }}>{info.val}</div>
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

            <FadeSection style={{ transitionDelay: "0.15s" }}>
              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <div style={{ marginBottom: "1.4rem" }}>
                  <label style={{ display: "block", fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8888aa", marginBottom: "0.5rem" }}>Name</label>
                  <input className="form-input" placeholder="Your full name" />
                </div>
                <div style={{ marginBottom: "1.4rem" }}>
                  <label style={{ display: "block", fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8888aa", marginBottom: "0.5rem" }}>Email</label>
                  <input className="form-input" type="email" placeholder="your@email.com" />
                </div>
                <div style={{ marginBottom: "1.4rem" }}>
                  <label style={{ display: "block", fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8888aa", marginBottom: "0.5rem" }}>Subject</label>
                  <input className="form-input" placeholder="Job opportunity / collaboration..." />
                </div>
                <div style={{ marginBottom: "2rem" }}>
                  <label style={{ display: "block", fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8888aa", marginBottom: "0.5rem" }}>Message</label>
                  <textarea className="form-input" rows={5} placeholder="Tell me about the role or project..." style={{ resize: "vertical" }} />
                </div>
                <button className="glow-btn" style={{ width: "100%", padding: "1rem", fontSize: "1rem", borderRadius: "12px" }}>
                  Send Message ✉️
                </button>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "3rem 4rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "1rem",
        background: "rgba(255,255,255,0.01)",
      }}>
        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.2rem" }}>
          <span className="grad-text">Kishor Kumar S</span>
        </div>
        <p style={{ color: "#8888aa", fontSize: "0.85rem" }}>© 2025 · Built with React + Vite · All rights reserved</p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {NAV.map(n => (
            <span key={n} style={{ color: "#8888aa", fontSize: "0.8rem", cursor: "pointer", fontFamily: "'Syne',sans-serif", fontWeight: 600, transition: "color 0.2s" }}
              onClick={() => scrollTo(n)}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "#8888aa"}>
              {n}
            </span>
          ))}
        </div>
      </footer>
    </>
  );
}
