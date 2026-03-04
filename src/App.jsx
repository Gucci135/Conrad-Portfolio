import { useState, useEffect, useRef } from "react";

const SECTIONS = ["Work", "Publications", "About", "Contact"];

const PROJECTS = [
  {
    title: "Front Row",
    subtitle: "Immersive Audio for Blind Tennis Viewers",
    tags: ["Accessibility", "HCI", "Audio Design"],
    description: "Developed an immersive audio system that automatically generates spatial representations of tennis broadcasts, enabling blind and low-vision viewers to experience the game through sound.",
    venue: "UIST '23 — ACM Symposium on User Interface Software & Technology",
    year: "2023",
    link: "https://doi.org/10.1145/3586183.3606830",
    color: "#E8F0E4",
  },
  {
    title: "Accessible Sports Broadcasts",
    subtitle: "Research on BLV Viewer Experience",
    tags: ["Research", "Accessibility", "UX"],
    description: "Explored how sports broadcasts can be redesigned to serve blind and low-vision audiences — proposing design principles for inclusive media experiences.",
    venue: "CHI EA '23 — Extended Abstracts, ACM CHI Conference",
    year: "2023",
    link: "https://doi.org/10.1145/3544549.3585610",
    color: "#E4E8F0",
  },
  {
    title: "S&P Global — Commodities Research",
    subtitle: "Market Research & Data Modeling",
    tags: ["Data Analysis", "Energy", "Sustainability"],
    description: "Conducting market research, data analysis, and modeling across global commodities, sustainability, and energy transition as part of an 18-month analyst rotational program.",
    venue: "S&P Global — Research Analyst",
    year: "2024–Present",
    link: null,
    color: "#F0E8E4",
  },
  {
    title: "Harvard SVMP",
    subtitle: "Silicon Valley Meets the Pentagon",
    tags: ["Strategy", "Defense Tech", "Policy"],
    description: "Selected for Harvard's competitive summer program bridging technology innovation with national security and defense strategy.",
    venue: "Harvard University — Summer Venture in Management Program",
    year: "2024",
    link: null,
    color: "#F0E4EC",
  },
];

const EXPERIENCE = [
  { role: "Research Analyst", company: "S&P Global", type: "Rotational Program", period: "2024–Present" },
  { role: "SVMP Fellow", company: "Harvard University", type: "Fellowship", period: "2024" },
  { role: "Research Assistant", company: "University of Florida", type: "HCI Lab", period: "2022–2023" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, isVisible];
}

function FadeIn({ children, delay = 0 }) {
  const [ref, isVisible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");
  return (
    <FadeIn delay={index * 0.1}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => project.link && window.open(project.link, "_blank")}
        style={{
          background: hovered ? project.color : "#FAFAF8",
          border: "1px solid", borderColor: hovered ? "transparent" : "#E8E6E1",
          borderRadius: "16px", padding: "36px",
          cursor: project.link ? "pointer" : "default",
          transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          position: "relative", overflow: "hidden", minHeight: "280px",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "#999" }}>{num}</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#999", letterSpacing: "0.05em", textTransform: "uppercase" }}>{project.year}</span>
          </div>
          <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, color: "#1A1A18", margin: "0 0 6px 0", lineHeight: 1.2 }}>{project.title}</h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#666", margin: "0 0 16px 0", lineHeight: 1.5 }}>{project.subtitle}</p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#888", margin: "0 0 20px 0", lineHeight: 1.6 }}>{project.description}</p>
        </div>
        <div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{
                fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.04em", textTransform: "uppercase",
                padding: "5px 12px", borderRadius: "100px",
                background: hovered ? "rgba(255,255,255,0.6)" : "#F0EEEB", color: "#666", transition: "background 0.4s ease",
              }}>{tag}</span>
            ))}
          </div>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#AAA", margin: 0 }}>{project.venue}</p>
        </div>
        {project.link && (
          <div style={{
            position: "absolute", top: "36px", right: "36px", width: "32px", height: "32px", borderRadius: "50%",
            background: hovered ? "rgba(26,26,24,0.08)" : "transparent",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.4s ease", opacity: hovered ? 1 : 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H5M13 1V9" stroke="#1A1A18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        )}
      </div>
    </FadeIn>
  );
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setTimeout(() => setHeroVisible(true), 100); }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      for (const sec of ["contact", "about", "publications", "work"]) {
        const el = document.getElementById(sec);
        if (el && el.getBoundingClientRect().top < 300) { setActiveSection(sec); return; }
      }
      setActiveSection(null);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div style={{ background: "#FAFAF8", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#1A1A18", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #FAFAF8; }
        ::selection { background: #1A1A18; color: #FAFAF8; }
        @keyframes grain { 0%,100%{transform:translate(0,0)} 10%{transform:translate(-2%,-2%)} 20%{transform:translate(2%,2%)} 30%{transform:translate(-1%,1%)} 40%{transform:translate(1%,-1%)} 50%{transform:translate(-2%,2%)} 60%{transform:translate(2%,-2%)} 70%{transform:translate(-1%,-1%)} 80%{transform:translate(1%,1%)} 90%{transform:translate(-2%,0%)} }
        .grain::after { content:''; position:fixed; top:-50%; left:-50%; width:200%; height:200%; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); opacity:0.03; pointer-events:none; z-index:9999; animation:grain 8s steps(10) infinite; }
        .exp-row { transition: background 0.3s ease; }
        .exp-row:hover { background: #F5F4F0 !important; }
        .desktop-nav { display: flex; }
        .mobile-burger { display: none; }
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: flex !important; }
          .project-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .exp-table-header { display: none !important; }
          .exp-row { flex-direction: column !important; gap: 4px !important; }
          .exp-row > div { width: 100% !important; }
        }
      `}</style>

      <div className="grain" />

      {/* NAVIGATION */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? "16px 40px" : "24px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: scrolled ? "rgba(250,250,248,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.05)" : "1px solid transparent",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <div style={{ cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "14px", letterSpacing: "0.03em", color: "#1A1A18" }}>Conrad Wyrick</span>
        </div>

        <div className="desktop-nav" style={{ gap: "36px", alignItems: "center" }}>
          {SECTIONS.map((sec) => {
            const id = sec.toLowerCase();
            const isActive = activeSection === id;
            const isHovered = hoveredNav === id;
            return (
              <div key={sec}
                onClick={() => scrollTo(id)}
                onMouseEnter={() => setHoveredNav(id)}
                onMouseLeave={() => setHoveredNav(null)}
                style={{
                  fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase",
                  color: isActive ? "#1A1A18" : "#999", transition: "color 0.3s ease",
                  position: "relative", cursor: "pointer", padding: "4px 0",
                }}>
                {sec}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "#1A1A18",
                  transform: isActive || isHovered ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left", transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                }} />
              </div>
            );
          })}
        </div>

        <div className="mobile-burger" onClick={() => setMenuOpen(!menuOpen)}
          style={{ cursor: "pointer", flexDirection: "column", gap: "5px", padding: "4px", zIndex: 200 }}>
          <div style={{ width: "20px", height: "1.5px", background: "#1A1A18", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(4.5px,4.5px)" : "none" }} />
          <div style={{ width: "20px", height: "1.5px", background: "#1A1A18", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <div style={{ width: "20px", height: "1.5px", background: "#1A1A18", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(4.5px,-4.5px)" : "none" }} />
        </div>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99, background: "rgba(250,250,248,0.97)", backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "32px" }}>
          {SECTIONS.map((sec) => (
            <div key={sec} onClick={() => { scrollTo(sec.toLowerCase()); setMenuOpen(false); }}
              style={{ fontFamily: "'Instrument Serif', serif", fontSize: "32px", color: "#1A1A18", cursor: "pointer" }}>{sec}</div>
          ))}
        </div>
      )}

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "140px 40px 80px", maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(40px)", transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.2s" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#999", marginBottom: "24px" }}>Mechanical Engineer & Researcher</div>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(42px, 8vw, 96px)", fontWeight: 400, lineHeight: 1.05, color: "#1A1A18", maxWidth: "900px", marginBottom: "32px" }}>
            Building things that <em style={{ fontStyle: "italic", color: "#666" }}>matter</em> — from accessible tech to energy systems.
          </h1>
        </div>
        <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(30px)", transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.5s", display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "8px" }}>
          <a href="https://drive.google.com/file/d/1nvPh9yox4rBDclJH8vA1FVnxNPEADWxQ/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", letterSpacing: "0.04em", padding: "12px 28px", border: "1px solid #1A1A18", borderRadius: "100px", background: "#1A1A18", color: "#FAFAF8", textDecoration: "none", transition: "all 0.3s ease" }}
            onMouseEnter={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#1A1A18"; }}
            onMouseLeave={(e) => { e.target.style.background = "#1A1A18"; e.target.style.color = "#FAFAF8"; }}>Resume</a>
          <a href="https://drive.google.com/file/d/1S0dzFu8A_i0POD2Agrf7sNsDGCqKYdtD/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", letterSpacing: "0.04em", padding: "12px 28px", border: "1px solid #D0CEC9", borderRadius: "100px", background: "transparent", color: "#1A1A18", textDecoration: "none", transition: "all 0.3s ease" }}
            onMouseEnter={(e) => { e.target.style.borderColor = "#1A1A18"; }}
            onMouseLeave={(e) => { e.target.style.borderColor = "#D0CEC9"; }}>CV</a>
        </div>
        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", opacity: heroVisible ? 0.4 : 0, transition: "opacity 1.5s ease 1.2s" }}>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, transparent, #1A1A18)" }} />
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ padding: "80px 40px 120px", maxWidth: "1200px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "60px" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "#CCC" }}>01</span>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "42px", fontWeight: 400 }}>Selected Work</h2>
          </div>
        </FadeIn>
        <div className="project-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
      </section>

      {/* EXPERIENCE INDEX */}
      <section id="publications" style={{ padding: "80px 40px 120px", maxWidth: "1200px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "60px" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "#CCC" }}>02</span>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "42px", fontWeight: 400 }}>Experience Index</h2>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="exp-table-header" style={{ display: "flex", padding: "0 20px 16px", borderBottom: "1px solid #E8E6E1", marginBottom: "4px" }}>
            {["Role", "Organization", "Type", "Year"].map((h, i) => (
              <div key={h} style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#BBB", width: i === 0 ? "35%" : i === 3 ? "15%" : "25%" }}>{h}</div>
            ))}
          </div>
        </FadeIn>
        {EXPERIENCE.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="exp-row" style={{ display: "flex", padding: "20px", borderBottom: "1px solid #F0EEEB", borderRadius: "8px" }}>
              <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A1A18", width: "35%" }}>{exp.role}</div>
              <div style={{ fontSize: "15px", color: "#666", width: "25%" }}>{exp.company}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#999", width: "25%", display: "flex", alignItems: "center" }}>{exp.type}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#BBB", width: "15%", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>{exp.period}</div>
            </div>
          </FadeIn>
        ))}
        <FadeIn delay={0.3}>
          <div style={{ marginTop: "60px" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#BBB", marginBottom: "20px", paddingLeft: "20px" }}>Education</div>
            <div className="exp-row" style={{ display: "flex", padding: "20px", borderBottom: "1px solid #F0EEEB", borderRadius: "8px" }}>
              <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A1A18", width: "35%" }}>B.S. Mechanical Engineering</div>
              <div style={{ fontSize: "15px", color: "#666", width: "25%" }}>University of Florida</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#999", width: "25%", display: "flex", alignItems: "center" }}>Innovation & Leadership Certs</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#BBB", width: "15%", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>2024</div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px 40px 120px", maxWidth: "1200px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "60px" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "#CCC" }}>03</span>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "42px", fontWeight: 400 }}>About</h2>
          </div>
        </FadeIn>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <FadeIn>
            <div>
              <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, lineHeight: 1.5, marginBottom: "28px" }}>
                I'm a mechanical engineer who believes technology should work <em style={{ fontStyle: "italic", color: "#888" }}>for everyone</em>.
              </p>
              <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#666", marginBottom: "20px" }}>
                My path has taken me from designing accessible audio systems for blind sports viewers to analyzing global energy markets at S&P Global. What connects it all is a commitment to rigorous engineering with a human-centered purpose.
              </p>
              <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#666" }}>
                I graduated from the University of Florida with a B.S. in Mechanical Engineering and certificates in Engineering Innovation and Engineering Leadership. In 2024, I was selected for Harvard's Silicon Valley Meets the Pentagon program, bridging technology and national security.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{ background: "#F0EEEB", borderRadius: "20px", padding: "48px 40px" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: "28px" }}>What drives me</div>
              {[
                { label: "Accessibility", desc: "Making technology inclusive by design" },
                { label: "Sustainability", desc: "Modeling the energy transition" },
                { label: "Research", desc: "Turning data into human impact" },
                { label: "Innovation", desc: "Engineering elegant solutions" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "16px 0", borderBottom: i < 3 ? "1px solid #E4E2DD" : "none" }}>
                  <span style={{ fontSize: "15px", fontWeight: 500, color: "#1A1A18" }}>{item.label}</span>
                  <span style={{ fontSize: "13px", color: "#999" }}>{item.desc}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 40px 60px", maxWidth: "1200px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "60px" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "#CCC" }}>04</span>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "42px", fontWeight: 400 }}>Get in Touch</h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div style={{ maxWidth: "640px" }}>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", fontWeight: 400, lineHeight: 1.5, marginBottom: "40px" }}>
              I'm always open to thoughtful conversations about engineering, research, or new opportunities.
            </p>
            <a href="https://www.linkedin.com/in/conradwyrick/" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", border: "1px solid #E8E6E1", borderRadius: "12px", textDecoration: "none", transition: "all 0.3s ease", background: "transparent" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#F0EEEB"; e.currentTarget.style.borderColor = "#D0CEC9"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#E8E6E1"; }}>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: "4px" }}>LinkedIn</div>
                <div style={{ fontSize: "15px", color: "#1A1A18" }}>linkedin.com/in/conradwyrick</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H5M13 1V9" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto", borderTop: "1px solid #F0EEEB", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#CCC" }}>© 2026 Conrad Wyrick</span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#CCC" }}>Designed with intention</span>
      </footer>
    </div>
  );
}
