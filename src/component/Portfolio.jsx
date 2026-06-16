import { useEffect, useRef, useState } from "react";
import "./Portfolio.css";
import { CERTS, NAV, RESUME_PDF, SOCIAL_LINKS } from "./portfolioData";
import ThreeBackground from "./ThreeBackground";
import NavSection from "./sections/NavSection";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import StatsSection from "./sections/StatsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ResumeSection from "./sections/ResumeSection";
import CertificatesSection from "./sections/CertificatesSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("Home");
  const [certTab, setCertTab] = useState("All");
  const [statsRun, setStatsRun] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsRun(true);
        }
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = RESUME_PDF;
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

  const scrollToSection = (id) => {
    setActiveNav(id);
    setNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredCerts =
    certTab === "All" ? CERTS : CERTS.filter((cert) => cert.type === certTab);

  return (
    <>
      <ThreeBackground />
      <div className="portfolio-shell">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />

        <NavSection
          activeNav={activeNav}
          downloadCV={downloadCV}
          navItems={NAV}
          navOpen={navOpen}
          onToggleNav={() => setNavOpen((value) => !value)}
          scrollToSection={scrollToSection}
        />

        <HeroSection
          downloadCV={downloadCV}
          openEmail={openEmail}
          profileLinks={SOCIAL_LINKS}
          scrollToSection={scrollToSection}
        />
        <AboutSection />
        <StatsSection ref={statsRef} run={statsRun} />
        <ProjectsSection />
        <ResumeSection />
        <CertificatesSection
          activeCert={activeCert}
          certTab={certTab}
          filteredCerts={filteredCerts}
          onCloseCert={() => setActiveCert(null)}
          onOpenCert={setActiveCert}
          onSelectTab={setCertTab}
        />
        <ContactSection />
        <FooterSection navItems={NAV} scrollToSection={scrollToSection} />
      </div>
    </>
  );
}
