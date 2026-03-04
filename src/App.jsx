import { useState, useEffect, useRef } from "react";

const SECTIONS = ["Home", "About", "Experience", "Projects"];

const EXPERIENCE = [
  {
    role: "Research Analyst",
    company: "S&P Global",
    location: "Various",
    period: "2024 – Present",
    description: "Conducting market research, data analysis, and modeling to deliver insights on global commodities, sustainability, and energy transition trends as part of an 18-month rotational program.",
    tags: ["Data Analysis", "Energy", "Commodities", "Modeling"],
    icon: "S",
    color: "#6B8F71",
  },
  {
    role: "SVMP Fellow",
    company: "Harvard University",
    location: "Cambridge, MA",
    period: "Summer 2024",
    description: "Selected for Harvard's competitive Silicon Valley Meets the Pentagon program, bridging technology innovation with national security and defense strategy.",
    tags: ["Strategy", "Defense Tech", "Policy"],
    icon: "H",
    color: "#8B6B8F",
  },
  {
    role: "Research Assistant",
    company: "University of Florida – HCI Lab",
    location: "Gainesville, FL",
    period: "2022 – 2023",
    description: "Developed immersive audio systems for accessible sports broadcasts, co-authoring papers published at UIST '23 and CHI EA '23.",
    tags: ["Accessibility", "HCI", "Audio", "Research"],
    icon: "UF",
    color: "#6B7B8F",
  },
  {
    role: "B.S. Mechanical Engineering",
    company: "University of Florida",
    location: "Gainesville, FL",
    period: "2020 – 2024",
    description: "Graduated with certificates in Engineering Innovation and Engineering Leadership. Focused on human-centered design and accessible technology research.",
    tags: ["Engineering", "Innovation", "Leadership"],
    icon: "UF",
    color: "#8F7B6B",
  },
];

const PROJECTS = [
  {
    title: "Front Row",
    description: "An immersive audio system that automatically generates spatial representations of tennis broadcasts for blind and low-vision viewers.",
    tags: ["Accessibility", "HCI", "Audio Design", "Python"],
    link: "https://doi.org/10.1145/3586183.3606830",
    linkLabel: "Paper",
    venue: "UIST '23",
  },
  {
    title: "Accessible Sports Broadcasts",
    description: "Research exploring how sports broadcasts can be redesigned to serve blind and low-vision audiences with inclusive design principles.",
    tags: ["Research", "Accessibility", "UX"],
    link: "https://doi.org/10.1145/3544549.3585610",
    linkLabel: "Paper",
    venue: "CHI EA '23",
  },
  {
    title: "Commodities Research",
    description: "Market research and data modeling across global commodities, sustainability, and energy transition at S&P Global.",
    tags: ["Data Analysis", "Energy", "Sustainability", "Modeling"],
    link: null,
    linkLabel: null,
    venue: "S&P Global",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

function ExperienceCard({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <FadeIn delay={index * 0.08}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "14px",
          padding: "24px 28px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          marginBottom: "16px",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(180,160,140,0.25)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{
            width: "42px", height: "42px", borderRadius: "10px",
            background: item.color, display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'DM Mono', monospace", fontSize: "13px", fontWeight: 600, color: "#fff",
            flexShrink: 0,
          }}>{item.icon}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 600, color: "#E8E4DF", margin: 0 }}>{item.role}</h3>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease", flexShrink: 0 }}>
                <path d="M3 5L7 9L11 5" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#888", marginTop: "2px" }}>
              {item.company} &middot; {item.location} &middot; {item.period}
            </div>
          </div>
        </div>
        <div style={{
          maxHeight: open ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",
          opacity: open ? 1 : 0,
          marginTop: open ? "16px" : "0",
          paddingLeft: "58px",
        }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#AAA", lineHeight: 1.7, margin: "0 0 14px 0" }}>{item.description}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {item.tags.map((t) => (
              <span key={t} style={{
                fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.04em",
                padding: "4px 10px", borderRadius: "6px",
                background: "rgba(255,255,255,0.06)", color: "#999",
                textTransform: "uppercase",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeIn delay={index * 0.1}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "14px", overflow: "hidden",
          transition: "all 0.3s ease",
          borderColor: hovered ? "rgba(180,160,140,0.25)" : "rgba(255,255,255,0.08)",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
        }}
      >
        <div style={{
          height: "140px", background: `linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "24px", color: "rgba(255,255,255,0.12)" }}>{project.venue}</span>
        </div>
        <div style={{ padding: "24px" }}>
          <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", fontWeight: 600, color: "#E8E4DF", margin: "0 0 8px 0" }}>{project.title}</h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#999", lineHeight: 1.6, margin: "0 0 16px 0" }}>{project.description}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: project.link ? "16px" : "0" }}>
            {project.tags.map((t) => (
              <span key={t} style={{
                fontFamily: "'DM Mono', monospace", fontSize: "10px",
                padding: "4px 10px", borderRadius: "6px",
                background: "rgba(180,160,140,0.12)", color: "#B4A08C",
                textTransform: "uppercase", letterSpacing: "0.04em",
              }}>{t}</span>
            ))}
          </div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#B4A08C",
                textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => { e.target.style.color = "#E8E4DF"; }}
              onMouseLeave={(e) => { e.target.style.color = "#B4A08C"; }}
            >
              {project.linkLabel} <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [heroVisible, setHeroVisible] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setTimeout(() => setHeroVisible(true), 100); }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      for (const sec of ["projects", "experience", "about", "home"]) {
        const el = document.getElementById(sec);
        if (el && el.getBoundingClientRect().top < 300) { setActiveSection(sec); return; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    if (id === "home") { window.scrollTo({ top: 0, behavior: "smooth" }); }
    else { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }
  };

  return (
    <div style={{ background: "#111110", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#E8E4DF", overflowX: "hidden", position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #111110; }
        ::selection { background: #B4A08C; color: #111110; }
        .grid-bg {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .desktop-nav { display: flex; }
        .mobile-burger { display: none; }
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: flex !important; }
          .hero-grid { flex-direction: column-reverse !important; text-align: center !important; }
          .hero-grid .hero-text { align-items: center !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .socials { justify-content: center !important; }
        }
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr 1fr !important; }
        }
        a { color: inherit; }
      `}</style>

      <div className="grid-bg" />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 40px", height: "60px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: scrolled ? "rgba(17,17,16,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}>
        <div style={{ cursor: "pointer", zIndex: 101 }} onClick={() => scrollTo("home")}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 600, color: "#E8E4DF", letterSpacing: "0.01em" }}>Conrad Wyrick</span>
        </div>

        <div className="desktop-nav" style={{ gap: "32px", alignItems: "center" }}>
          {SECTIONS.map((sec) => {
            const id = sec.toLowerCase();
            const isActive = activeSection === id;
            return (
              <span key={sec}
                onClick={() => scrollTo(id)}
                onMouseEnter={() => setHoveredNav(id)}
                onMouseLeave={() => setHoveredNav(null)}
                style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 400,
                  color: isActive ? "#E8E4DF" : "#777",
                  cursor: "pointer", transition: "color 0.2s ease",
                  ...(hoveredNav === id && !isActive ? { color: "#BBB" } : {}),
                }}>{sec}</span>
            );
          })}
        </div>

        <div className="mobile-burger" onClick={() => setMenuOpen(!menuOpen)}
          style={{ cursor: "pointer", flexDirection: "column", gap: "5px", padding: "4px", zIndex: 101 }}>
          <div style={{ width: "20px", height: "1.5px", background: "#E8E4DF", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(4.5px,4.5px)" : "none" }} />
          <div style={{ width: "20px", height: "1.5px", background: "#E8E4DF", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <div style={{ width: "20px", height: "1.5px", background: "#E8E4DF", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(4.5px,-4.5px)" : "none" }} />
        </div>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99, background: "rgba(17,17,16,0.97)", backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "32px" }}>
          {SECTIONS.map((sec) => (
            <div key={sec} onClick={() => { scrollTo(sec.toLowerCase()); setMenuOpen(false); }}
              style={{ fontFamily: "'Instrument Serif', serif", fontSize: "32px", color: "#E8E4DF", cursor: "pointer" }}>{sec}</div>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 40px 60px", maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="hero-grid" style={{
          display: "flex", gap: "60px", alignItems: "center", width: "100%",
          opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s",
        }}>
          <div className="hero-text" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 400, lineHeight: 1.1, color: "#E8E4DF", marginBottom: "16px" }}>
              Hi, I'm Conrad.
            </h1>
            <p style={{ fontSize: "17px", color: "#999", lineHeight: 1.5, marginBottom: "6px" }}>
              Mechanical Engineer and Researcher
            </p>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "#666", marginBottom: "28px" }}>
              Research Analyst @ S&P Global
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "24px" }}>
              <a href="https://drive.google.com/file/d/1nvPh9yox4rBDclJH8vA1FVnxNPEADWxQ/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 500,
                  padding: "10px 24px", borderRadius: "8px",
                  background: "#E8E4DF", color: "#111110",
                  textDecoration: "none", transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => { e.target.style.background = "#fff"; }}
                onMouseLeave={(e) => { e.target.style.background = "#E8E4DF"; }}
              >Resume</a>
              <a href="https://drive.google.com/file/d/1S0dzFu8A_i0POD2Agrf7sNsDGCqKYdtD/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 500,
                  padding: "10px 24px", borderRadius: "8px",
                  background: "transparent", color: "#E8E4DF",
                  border: "1px solid rgba(255,255,255,0.15)",
                  textDecoration: "none", transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
              >CV</a>
            </div>
            <div className="socials" style={{ display: "flex", gap: "16px" }}>
              <a href="https://www.linkedin.com/in/conradwyrick/" target="_blank" rel="noopener noreferrer"
                style={{ color: "#666", transition: "color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#E8E4DF"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#666"; }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:contact@conradwyrick.com"
                style={{ color: "#666", transition: "color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#E8E4DF"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#666"; }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
              </a>
            </div>
          </div>

          <div style={{ flexShrink: 0 }}>
            <div style={{
              width: "200px", height: "220px", borderRadius: "18px",
              background: "linear-gradient(135deg, rgba(180,160,140,0.15) 0%, rgba(255,255,255,0.03) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px",
            }}>
              <div style={{
                width: "100px", height: "100px", borderRadius: "50%",
                background: "linear-gradient(135deg, #6B8F71, #8B6B8F)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Instrument Serif', serif", fontSize: "36px", color: "#fff",
              }}>C</div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#888", textTransform: "uppercase", letterSpacing: "0.08em" }}>Mechanical Engineering</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#666", marginTop: "2px" }}>University of Florida</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 40px", maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "36px", fontWeight: 400, textAlign: "center", marginBottom: "40px" }}>About Me</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <p style={{ fontSize: "15px", color: "#AAA", lineHeight: 1.8, marginBottom: "16px" }}>
              I'm a Mechanical Engineering graduate from the University of Florida with certificates in Engineering Innovation and Engineering Leadership. I'm passionate about building technology that serves people — from accessible systems for blind and low-vision users to data-driven insights on the global energy transition.
            </p>
            <p style={{ fontSize: "15px", color: "#AAA", lineHeight: 1.8 }}>
              Currently, I'm a Research Analyst at S&P Global in an 18-month rotational program focused on commodities, sustainability, and energy markets. When I'm not modeling data, you can find me reading about defense tech, tinkering with side projects, or exploring new places.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "100px 40px", maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "36px", fontWeight: 400, textAlign: "center", marginBottom: "48px" }}>Experience</h2>
        </FadeIn>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          {EXPERIENCE.map((item, i) => (
            <ExperienceCard key={i} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section style={{ padding: "0 40px 40px", maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <div style={{ maxWidth: "680px", margin: "0 auto", padding: "28px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px" }}>
            <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600, color: "#E8E4DF", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Publications</h3>
            <div style={{ fontSize: "13px", color: "#888", lineHeight: 1.7, marginBottom: "10px" }}>
              <span style={{ color: "#BBB" }}>Front Row:</span> Automatically Generating Immersive Audio Representations of Tennis Broadcasts for Blind Viewers. <span style={{ color: "#666" }}>UIST '23</span> &middot; <a href="https://doi.org/10.1145/3586183.3606830" target="_blank" rel="noopener noreferrer" style={{ color: "#B4A08C", textDecoration: "none" }}>DOI ↗</a>
            </div>
            <div style={{ fontSize: "13px", color: "#888", lineHeight: 1.7 }}>
              <span style={{ color: "#BBB" }}>Towards Accessible Sports Broadcasts</span> for Blind and Low-Vision Viewers. <span style={{ color: "#666" }}>CHI EA '23</span> &middot; <a href="https://doi.org/10.1145/3544549.3585610" target="_blank" rel="noopener noreferrer" style={{ color: "#B4A08C", textDecoration: "none" }}>DOI ↗</a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "100px 40px", maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "36px", fontWeight: 400, textAlign: "center", marginBottom: "48px" }}>Projects</h2>
        </FadeIn>
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "40px", maxWidth: "960px", margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", position: "relative", zIndex: 1 }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#444" }}>© 2026 Conrad Wyrick</span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#444" }}>Built with intention</span>
      </footer>
    </div>
  );
}
