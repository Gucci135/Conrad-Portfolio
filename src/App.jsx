import { useState, useEffect, useRef } from "react";

const SECTIONS = ["Home", "About", "Experience", "Projects"];

const EXPERIENCE = [
  {
    role: "Research Analyst",
    company: "S&P Global",
    location: "Houston,TX",
    period: "2024 - Present",
    description: "Collaborating with cross-functional teams to analyze energy market dynamics, automate data workflows, and develop visual analytics tools using Python, Excel, and Alteryx.",
    tags: ["Data Analysis", "Energy", "Commodities", "Modeling"],
    icon: "S",
    color: "#6B8F71",
  },
  {
    role: "SVMP Fellow",
    company: "Harvard University",
    location: "Cambridge, MA",
    period: "Summer 2024",
    description: "Engaged in case-method analysis of real-world business scenarios alongside a diverse cohort of peers, developing critical thinking, decision-making, and leadership skills through discussions on strategy, entrepreneurship, and much more",
    tags: ["Strategy", "Buinsess", "Policy"],
    icon: "H",
    color: "#8B6B8F",
  },
  {
    role: "University of Florida IPPD",
    company: "University of Florida and Arthrex",
    location: "Gainesville, FL",
    period: "2023 - 2024",
    description: "Collaborated with an interdisciplinary team to design, prototype, and test a specialized medical attachment using SolidWorks, MATLAB, LabVIEW, and 3D printing.",
    tags: ["Engineering Design", "Project Management",],
    icon: "UF",
    color: "#a25f1b",
  },
  {
    role: "Research Intern",
    company: "Columbia University",
    location: "New York City, NY",
    period: "2022 - 2023",
    description: "Developed an accessibility system for 100+ blind and low-vision users, conducting user studies and publishing research at human-computer interaction conferences.",
    tags: ["Accessibility","HCI","Innovation", "Research"],
    icon: "CU",
    color: "#1e86a0",
  },
];

const PROJECTS = [
  {
    id: "hacklytics",
    title: "Allocaid - Hacklytics 2026",
    subtitle: "Databricks x United Nations Geo-Insight Challenge",
    description: "Built an ML-powered tool that predicts what funding each humanitarian crisis should receive based on need, then measures where reality falls short.",
    tags: ["Python", "Databricks", "XGBoost", "PySpark", "Streamlit"],
    venue: "Georgia Tech",
    period: "2026",
    detail: {
      headline: "Hacklytics 2026: Golden Byte",
      intro: "Hacklytics is Georgia Tech's premier data science hackathon, hosted by Data Science @ Georgia Tech. 733 participants competed across five tracks over 36 hours at the Klaus Advanced Computing Building in Atlanta.",
      sections: [
        {
          title: "Databricks x United Nations Geo-Insight Challenge",
          content: "A sponsor challenge asking teams to identify which humanitarian crises are most overlooked by analyzing mismatches between humanitarian needs and UN Pooled Fund coverage. Projects were shared directly with UN teams and judged by UN and Databricks representatives.",
        },
        {
          title: "Team Allocaid",
          content: "Our team formed around a shared interest in using data to surface inequities in how humanitarian aid is distributed. We built an ML-powered tool that predicts what funding each crisis should receive based purely on need, then measures where reality falls short.",
        },
        {
          title: "My Role",
          content: "My role on the team was project manager and data engineer. I designed and built the full Databricks data pipeline using the Medallion Architecture (Bronze/Silver/Gold), ingesting raw UN humanitarian data from OCHA and CBPF into governed Delta Lake tables through Unity Catalog. I engineered custom features including a Need Proxy for countries missing People in Need figures and a population fallback system. I also resolved critical platform constraints on Databricks Free Edition, including numpy dependency conflicts and serverless filesystem restrictions. Beyond the technical work, I coordinated the integration of all project components across the team, connecting the data pipeline, ML model training, vector indexing, RAG chatbot, and Streamlit frontend into a single cohesive deliverable.",
        },
      ],
      skills: ["Python", "Databricks", "Delta Lake", "MLflow", "XGBoost", "SHAP", "Streamlit", "Plotly", "Actian VectorAI", "Groq", "PySpark"],
      timeframe: "February 2026",
      links: [
        { label: "Devpost Submission", url: "https://devpost.com/software/xyz-v4zjhc?_gl=1*vuotys*_gcl_au*NzUyMDk2NDY4LjE3NzE2MzMwNzY.*_ga*NDA5NjE5NTgwLjE3NzE2MzMwNzk.*_ga_0YHJK3Y10M*czE3NzI2NjY1NDgkbzkkZzEkdDE3NzI2Njk5OTQkajI4JGwwJGgw" },
        { label: "Streamlit App", url: "https://allocaid.streamlit.app/" },
      ],
    },
  },
  {
    id: "coop",
    title: "COOP Data Analytics",
    subtitle: "Data Analytics Fellowship",
    description: "Completed two capstone projects analyzing San Jose crash data and advertising campaign performance, delivering actionable insights and recommendations.",
    tags: ["SQL", "R", "Tableau", "Excel"],
    venue: "COOP Careers",
    period: "2024",
    detail: {
      headline: "COOP Careers Data Analytics Fellowship",
      intro: "COOP Careers supports underemployed first-generation college graduates by offering mentorship, career development resources, and networking opportunities with a focus on bridging the gap for long-term career success.",
      sections: [
        {
          title: "The Fellowship",
          content: "The COOP Careers Data Analytics Fellowship is a 16-week program that provides college graduates with essential data analysis skills. Participants earn the Google Data Analytics Professional Certificate and gain both technical and soft skills to prepare for entry-level data analytics roles.",
        },
        {
          title: "Cohort 490",
          content: "The fellowship is structured around peer cohorts, each comprising 10-16 diverse college graduates. These cohorts meet virtually four evenings a week and are led by a team of four alumni captains who serve as coaches, mentors, and guides. Small groups of 3-4 complete multiple capstone projects together.",
        },
        {
          title: "Capstone Projects",
          content: "Our first capstone focused on analyzing crash data from the city of San Jose to support the Transportation Department in enhancing the city's road network. We highlighted a decline in reported crashes since March 2024, with high concentrations at key intersections, and recommended further investigation and safety improvements. The second capstone analyzed an advertising campaign across location, audience, creativity, and inventory to provide actionable insights. We identified high-performing segments like \"Auto Buyers\" and areas for improvement in cost per acquisition and viewability, recommending adjustments such as excluding underperforming regions and optimizing creative and inventory strategies.",
        },
      ],
      skills: ["Excel", "SQL", "R", "Python", "Tableau"],
      timeframe: "August 2024 - December 2024",
      links: [
        { label: "COOP Careers", url: "https://coopcareers.org/" },
        { label: "Capstone 1 One-Pager", url: "https://docs.google.com/document/d/1zJ3-cXlAvUKyCdCzsBBIlnxH00i1_omtPwPu-6F6R64/edit?usp=sharing" },
        { label: "Capstone 2 One-Pager", url: "https://docs.google.com/document/d/1bLRvQjclR7Lb9D1K0MymnVTrgLhlrm_0NzqL2Y1MjQs/edit?usp=sharing" },
      ],
    },
  },
  {
    id: "codedex",
    title: "Olympics Predictor",
    subtitle: "Codedex Summer Hackathon",
    description: "Analyzed 11,000+ athlete records from the Tokyo Olympics to predict Paris 2024 outcomes using random forest regression, improving accuracy by 20%.",
    tags: ["Python", "NumPy", "Pandas", "Machine Learning"],
    venue: "Codedex Hackathon",
    period: "2024",
    detail: {
      headline: "Codedex Summer Hackathon",
      intro: "Codedex is a platform offering personalized coding challenges and resources to help users improve their programming skills through interactive exercises and project-based learning.",
      sections: [
        {
          title: "The Hackathon",
          content: "A two-day event where participants competed across three different tracks focused on coding, innovation, and problem-solving. The hackathon provided hands-on experience with workshops, mentorship, and networking opportunities.",
        },
        {
          title: "Team DataDruids",
          content: "Our team was formed through an online forum over a shared interest in data science and applying our coding skills. We decided to take part in the third track, which involved analyzing past Olympics data to predict who would win at the 2024 Paris Olympics.",
        },
        {
          title: "My Role",
          content: "I served as the project manager. We analyzed a dataset of over 11,000 athletes from the 2021 Tokyo Olympics using NumPy and Pandas to derive predictive insights. We initially built and tested a linear regression model, then transitioned to a random forest regressor, improving model accuracy by 20%. I also designed and implemented data visualizations to present our findings, which were showcased on a custom-built website. This project enhanced my skills in data analysis, machine learning, and data visualization.",
        },
      ],
      skills: ["Python", "NumPy", "Pandas", "Matplotlib", "VS Code", "GitHub"],
      timeframe: "July 2024",
      links: [
        { label: "Codedex", url: "https://www.codedex.io/" },
        { label: "Team Website", url: "https://2024-summer-hackathon.vercel.app/" },
      ],
    },
  },
  {
    id: "ippd",
    title: "SurgiGauge - IPPD",
    subtitle: "Integrated Product & Process Design",
    description: "Collaborated with Arthrex to design a precision medical measuring device capable of mm distance and one-tenth degree angle measurement.",
    tags: ["SolidWorks", "MATLAB", "3D Printing", "Project Mgmt"],
    venue: "UF x Arthrex",
    period: "2023-2024",
    detail: {
      headline: "Integrated Product & Process Design",
      intro: "The University of Florida's IPPD program gives students hands-on experience working with industry partners to design and prototype products, developing skills in teamwork, project management, and communication.",
      sections: [
        {
          title: "Team Sponsor: Arthrex",
          content: "Arthrex is a global medical device company that specializes in orthopedics and minimally invasive surgical technology. Our team worked directly with Arthrex engineers throughout the design process.",
        },
        {
          title: "Team SurgiGauge",
          content: "We designed a general-purpose measuring device that can measure distance with millimeter precision and angle to one-tenth of a degree. The device is fitted with a display and user interface, giving users the ability to zero a depth, save a depth, and zero an angle for their measurement needs.",
        },
        {
          title: "My Role",
          content: "I collaborated with a team of engineering students to design, develop, and implement a patented specialized medical attachment. My role included testing and modeling materials and sensors. Throughout the project we connected with a liaison engineer from Arthrex who gave us invaluable feedback regarding our design, reports, and presentations. As a team we completed multiple design reports detailing our process and gave presentations to faculty, peers, and the sponsor company. Feedback was a very important aspect, we iteratively incorporated it for redesigns and project scope adjustments.",
        },
      ],
      skills: ["SolidWorks", "MATLAB", "Project Management", "3D Printing"],
      timeframe: "August 2023 - May 2024",
      links: [
        { label: "UF IPPD Program", url: "https://www.ippd.ufl.edu/" },
        { label: "Arthrex", url: "https://www.arthrex.com/" },
        { label: "Team Blog", url: "https://www.ippd.ufl.edu/blogs/ay2324team01/blog-posts/" },
      ],
    },
  },
  {
    id: "sure",
    title: "Amazon SURE",
    subtitle: "Summer Undergraduate Research Experience",
    description: "Designed an immersive audio system for blind and low-vision tennis viewers at Columbia's CEAL lab. Published at UIST '23 and CHI EA '23.",
    tags: ["Unity", "Computer Vision", "Python", "HCI"],
    venue: "Columbia University",
    period: "2022-2023",
    detail: {
      headline: "Summer Undergraduate Research Experience",
      intro: "The Amazon Summer Undergraduate Research Experience (SURE) seeks to boost diversity in science and engineering by offering students from underrepresented communities a summer research opportunity at top-tier universities.",
      sections: [
        {
          title: "The Computer Enabled Abilities Laboratory",
          content: "The Computer Enabled Abilities Laboratory (CEAL) at Columbia University develops technologies to assist individuals with disabilities, primarily focusing on blind or low-vision people. By integrating computer science, engineering, and design, CEAL creates innovative tools that enhance accessibility, communication, and mobility, promoting independence and improving quality of life.",
        },
        {
          title: "My Role",
          content: "This was a full-time research opportunity as an undergraduate. I worked on designing a system to enhance tennis gameplay for blind and low-vision users. This project led to multiple publications in human-computer interaction (HCI) and reinforced my commitment to supporting individuals with disabilities. Facilitating user studies gave me firsthand insight into my impact and fueled my purpose to help others through research. Transitioning from a mechanical engineering background to a computer science lab challenged me, building resilience and adaptability for continual learning and development.",
        },
        {
          title: "Publications",
          content: "This research resulted in two publications: \"Front Row\" at UIST '23 , an immersive audio system that automatically generates spatial representations of tennis broadcasts for blind viewers, and \"Towards Accessible Sports Broadcasts\" at CHI EA '23 , exploring how sports broadcasts can be redesigned for blind and low-vision audiences.",
        },
      ],
      skills: ["Unity", "Computer Vision", "Python", "User Studies"],
      timeframe: "May 2022 - December 2022",
      links: [
        { label: "Amazon SURE Program", url: "https://www.amazon.science/sure" },
        { label: "CEAL Lab", url: "https://ceal.cs.columbia.edu/" },
        { label: "UIST '23 Paper", url: "https://doi.org/10.1145/3586183.3606830" },
        { label: "CHI EA '23 Paper", url: "https://doi.org/10.1145/3544549.3585610" },
      ],
    },
  },
  {
    id: "placeholder",
    title: "Coming Soon",
    subtitle: "New project in progress",
    description: "Something new is in the works. Check back soon for details on this upcoming project.",
    tags: [],
    venue: "TBD",
    period: "2025",
    isPlaceholder: true,
    detail: null,
  },
];

// Only projects with detail pages (used for prev/next navigation)
const NAV_PROJECTS = PROJECTS.filter((p) => p.detail);

/* --- THEMES --- */
const themes = {
  dark: {
    bg: "#111110", card: "rgba(255,255,255,0.03)", cardBorder: "rgba(255,255,255,0.08)",
    cardHover: "rgba(255,255,255,0.05)", cardBorderHover: "rgba(180,160,140,0.25)",
    text: "#E8E4DF", textMuted: "#AAA", textFaint: "#888", textFaintest: "#666",
    accent: "#B4A08C", navBg: "rgba(17,17,16,0.88)", navBorder: "rgba(255,255,255,0.06)",
    gridLine: "rgba(255,255,255,0.025)", tagBg: "rgba(255,255,255,0.06)", tagText: "#999",
    accentTagBg: "rgba(180,160,140,0.12)", selection: "#B4A08C", selectionText: "#111110",
    footerText: "#444", btnFill: "#E8E4DF", btnFillText: "#111110",
    btnOutlineBorder: "rgba(255,255,255,0.15)", btnOutlineBorderHover: "rgba(255,255,255,0.35)",
    socialIcon: "#666", pubCardBg: "rgba(255,255,255,0.02)", pubCardBorder: "rgba(255,255,255,0.06)",
    chevron: "#888", placeholderBorder: "rgba(255,255,255,0.05)", placeholderText: "#555",
    mobileOverlay: "rgba(17,17,16,0.97)",
  },
  light: {
    bg: "#F5F4F0", card: "rgba(0,0,0,0.02)", cardBorder: "rgba(0,0,0,0.08)",
    cardHover: "rgba(0,0,0,0.04)", cardBorderHover: "rgba(140,120,100,0.3)",
    text: "#1A1A18", textMuted: "#555", textFaint: "#777", textFaintest: "#999",
    accent: "#8C7560", navBg: "rgba(245,244,240,0.9)", navBorder: "rgba(0,0,0,0.07)",
    gridLine: "rgba(0,0,0,0.04)", tagBg: "rgba(0,0,0,0.05)", tagText: "#777",
    accentTagBg: "rgba(140,117,96,0.12)", selection: "#1A1A18", selectionText: "#F5F4F0",
    footerText: "#BBB", btnFill: "#1A1A18", btnFillText: "#F5F4F0",
    btnOutlineBorder: "rgba(0,0,0,0.15)", btnOutlineBorderHover: "rgba(0,0,0,0.4)",
    socialIcon: "#999", pubCardBg: "rgba(0,0,0,0.02)", pubCardBorder: "rgba(0,0,0,0.07)",
    chevron: "#999", placeholderBorder: "rgba(0,0,0,0.06)", placeholderText: "#BBB",
    mobileOverlay: "rgba(245,244,240,0.97)",
  },
};

/* --- UTILS --- */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s` }}>{children}</div>
  );
}

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button onClick={onToggle} aria-label="Toggle theme"
      style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "flex", alignItems: "center", justifyContent: "center", color: isDark ? "#888" : "#999", transition: "color 0.2s ease" }}
      onMouseEnter={(e) => { e.currentTarget.style.color = isDark ? "#E8E4DF" : "#1A1A18"; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = isDark ? "#888" : "#999"; }}>
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      )}
    </button>
  );
}

/* --- EXPERIENCE CARD --- */
function ExperienceCard({ item, index, t }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <FadeIn delay={index * 0.08}>
      <div onClick={() => setOpen(!open)}
        style={{ background: t.card, border: `1px solid ${t.cardBorder}`, borderRadius: "14px", padding: "24px 28px", cursor: "pointer", transition: "all 0.3s ease", marginBottom: "16px" }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.cardBorderHover; e.currentTarget.style.background = t.cardHover; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.cardBorder; e.currentTarget.style.background = t.card; }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: item.color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Mono', monospace", fontSize: "13px", fontWeight: 600, color: "#fff", flexShrink: 0 }}>{item.icon}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 600, color: t.text, margin: 0 }}>{item.role}</h3>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease", flexShrink: 0 }}><path d="M3 5L7 9L11 5" stroke={t.chevron} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: t.textFaint, marginTop: "2px" }}>{item.company} &middot; {item.location} &middot; {item.period}</div>
          </div>
        </div>
        <div style={{ maxHeight: open ? "300px" : "0", overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease", opacity: open ? 1 : 0, marginTop: open ? "16px" : "0", paddingLeft: "58px" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: t.textMuted, lineHeight: 1.7, margin: "0 0 14px 0" }}>{item.description}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {item.tags.map((tag) => (
              <span key={tag} style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.04em", padding: "4px 10px", borderRadius: "6px", background: t.tagBg, color: t.tagText, textTransform: "uppercase" }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

/* --- PROJECT CARD --- */
function ProjectCard({ project, index, t, onOpen }) {
  const [hovered, setHovered] = useState(false);
  const isPlaceholder = project.isPlaceholder;

  return (
    <FadeIn delay={index * 0.08}>
      <div
        onClick={() => !isPlaceholder && onOpen(project.id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: t.card, border: `1px solid ${isPlaceholder ? t.placeholderBorder : t.cardBorder}`,
          borderRadius: "14px", overflow: "hidden", transition: "all 0.3s ease",
          borderColor: hovered && !isPlaceholder ? t.cardBorderHover : isPlaceholder ? t.placeholderBorder : t.cardBorder,
          transform: hovered && !isPlaceholder ? "translateY(-3px)" : "translateY(0)",
          cursor: isPlaceholder ? "default" : "pointer",
          height: "100%", display: "flex", flexDirection: "column",
          opacity: isPlaceholder ? 0.5 : 1, borderStyle: isPlaceholder ? "dashed" : "solid",
        }}>
        <div style={{
          height: "120px", background: hovered && !isPlaceholder ? t.cardHover : t.card,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          borderBottom: `1px solid ${t.cardBorder}`, transition: "background 0.3s ease", gap: "4px",
        }}>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "20px", color: t.textFaintest, opacity: isPlaceholder ? 0.4 : 0.5 }}>{project.venue}</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: t.textFaintest, opacity: 0.6 }}>{project.period}</span>
        </div>
        <div style={{ padding: "22px", flex: 1, display: "flex", flexDirection: "column" }}>
          <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 600, color: t.text, margin: "0 0 4px 0" }}>{project.title}</h3>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: t.accent, margin: "0 0 10px 0" }}>{project.subtitle}</p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: t.textFaint, lineHeight: 1.6, margin: "0 0 16px 0", flex: 1 }}>{project.description}</p>
          {project.tags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {project.tags.map((tag) => (
                <span key={tag} style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", padding: "4px 10px", borderRadius: "6px", background: t.accentTagBg, color: t.accent, textTransform: "uppercase", letterSpacing: "0.04em" }}>{tag}</span>
              ))}
            </div>
          )}
          {!isPlaceholder && (
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "14px", fontFamily: "'DM Mono', monospace", fontSize: "12px", color: t.accent }}>
              View Project <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 1L11 7L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

/* --- PREV/NEXT BUTTON (used at bottom of project detail pages) --- */
function PrevNextBtn({ direction, project, t, onClick }) {
  const [hovered, setHovered] = useState(false);
  const isPrev = direction === "prev";
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? t.cardHover : t.card,
        border: `1px solid ${hovered ? t.cardBorderHover : t.cardBorder}`,
        borderRadius: "12px", padding: "20px 24px", cursor: "pointer",
        transition: "all 0.3s ease", flex: 1, minWidth: 0,
        textAlign: isPrev ? "left" : "right",
      }}>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: t.textFaintest, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px", justifyContent: isPrev ? "flex-start" : "flex-end" }}>
        {isPrev && <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M3 7L7 3M3 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
        {isPrev ? "Previous" : "Next"}
        {!isPrev && <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 600, color: t.text }}>{project.title}</div>
    </div>
  );
}

/* --- PROJECT DETAIL PAGE --- */
function ProjectPage({ project, t, onBack, onNavigate }) {
  const d = project.detail;
  const currentIndex = NAV_PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? NAV_PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < NAV_PROJECTS.length - 1 ? NAV_PROJECTS[currentIndex + 1] : null;

  useEffect(() => { window.scrollTo(0, 0); }, [project.id]);

  return (
    <div className="section-padding" style={{ paddingTop: "120px", paddingBottom: "80px", maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 1 }}>
      {/* Back button */}
      <div onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer", fontFamily: "'DM Mono', monospace", fontSize: "13px", color: t.accent, marginBottom: "48px", transition: "opacity 0.2s" }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M3 7L7 3M3 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Back to Projects
      </div>

      {/* Header */}
      <FadeIn>
        <div style={{ marginBottom: "16px" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: t.accent, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>{project.venue} &middot; {project.period}</div>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 400, color: t.text, lineHeight: 1.15, marginBottom: "8px" }}>{project.title}</h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", color: t.textFaint, lineHeight: 1.5 }}>{d.headline}</p>
        </div>
      </FadeIn>

      {/* Meta bar */}
      <FadeIn delay={0.05}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", padding: "24px 0", borderTop: `1px solid ${t.cardBorder}`, borderBottom: `1px solid ${t.cardBorder}`, marginBottom: "48px" }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: t.textFaintest, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>Timeframe</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: t.text }}>{d.timeframe}</div>
          </div>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: t.textFaintest, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>Skills</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {d.skills.map((s) => (
                <span key={s} style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", padding: "3px 10px", borderRadius: "6px", background: t.accentTagBg, color: t.accent }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Intro */}
      <FadeIn delay={0.1}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: t.textMuted, lineHeight: 1.8, marginBottom: "48px" }}>{d.intro}</p>
      </FadeIn>

      {/* Sections */}
      {d.sections.map((sec, i) => (
        <FadeIn key={i} delay={0.12 + i * 0.05}>
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "20px", fontWeight: 600, color: t.text, marginBottom: "12px" }}>{sec.title}</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: t.textMuted, lineHeight: 1.8 }}>{sec.content}</p>
          </div>
        </FadeIn>
      ))}

      {/* Links */}
      {d.links && d.links.length > 0 && (
        <FadeIn delay={0.3}>
          <div style={{ padding: "28px", background: t.card, border: `1px solid ${t.cardBorder}`, borderRadius: "14px", marginTop: "24px" }}>
            <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: t.textFaintest, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Links & Resources</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {d.links.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: t.accent, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", transition: "opacity 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      )}

      {/* Prev / Next project navigation */}
      <div className="prev-next-nav" style={{ display: "flex", gap: "16px", marginTop: "64px", borderTop: `1px solid ${t.cardBorder}`, paddingTop: "40px" }}>
        {prevProject ? (
          <PrevNextBtn direction="prev" project={prevProject} t={t} onClick={() => onNavigate(prevProject.id)} />
        ) : (
          <div style={{ flex: 1 }} />
        )}
        {nextProject ? (
          <PrevNextBtn direction="next" project={nextProject} t={t} onClick={() => onNavigate(nextProject.id)} />
        ) : (
          <div style={{ flex: 1 }} />
        )}
      </div>
    </div>
  );
}

/* --- MAIN APP --- */
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [heroVisible, setHeroVisible] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [currentProject, setCurrentProject] = useState(null);

  const t = isDark ? themes.dark : themes.light;

  // Handle browser back button
  useEffect(() => {
    const handlePop = () => {
      const hash = window.location.hash.replace("#", "");
      const proj = PROJECTS.find((p) => p.id === hash);
      setCurrentProject(proj && proj.detail ? proj : null);
    };
    window.addEventListener("popstate", handlePop);
    handlePop();
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  const openProject = (id) => {
    const proj = PROJECTS.find((p) => p.id === id);
    if (proj && proj.detail) {
      setCurrentProject(proj);
      window.history.pushState(null, "", `#${id}`);
    }
  };

  // FIX: "Back to Projects" now scrolls to the projects section instead of the top
  const closeProject = () => {
    setCurrentProject(null);
    window.history.pushState(null, "", window.location.pathname);
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  useEffect(() => { setTimeout(() => setHeroVisible(true), 100); }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      if (!currentProject) {
        for (const sec of ["projects", "experience", "about", "home"]) {
          const el = document.getElementById(sec);
          if (el && el.getBoundingClientRect().top < 300) { setActiveSection(sec); return; }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentProject]);

  const scrollTo = (id) => {
    if (currentProject) { closeProject(); setTimeout(() => { if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" }); else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }, 50); }
    else if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: t.bg, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: t.text, overflowX: "hidden", position: "relative", transition: "background 0.4s ease, color 0.4s ease" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: ${t.bg}; transition: background 0.4s ease; }
        ::selection { background: ${t.selection}; color: ${t.selectionText}; }
        .grid-bg { position: fixed; inset: 0; z-index: 0; pointer-events: none; background-image: linear-gradient(${t.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${t.gridLine} 1px, transparent 1px); background-size: 60px 60px; }
        .desktop-nav { display: flex; }
        .mobile-burger { display: none; }
        /* MOBILE: responsive padding and photo sizing */
        .section-padding { padding-left: 40px; padding-right: 40px; }
        .hero-photo-container { width: 500px; height: 520px; }
        .hero-photo { width: 400px; height: 400px; }
        .about-text { font-size: 20px; }
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: flex !important; }
          .hero-grid { flex-direction: column-reverse !important; text-align: center !important; gap: 32px !important; }
          .hero-grid .hero-text { align-items: center !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .socials { justify-content: center !important; }
          .prev-next-nav { flex-direction: column !important; }
          .section-padding { padding-left: 20px !important; padding-right: 20px !important; }
          .hero-photo-container { width: 100% !important; max-width: 280px !important; height: auto !important; aspect-ratio: 1 / 1.04; }
          .hero-photo { width: 85% !important; height: auto !important; aspect-ratio: 1 / 1; }
          .about-text { font-size: 16px !important; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .projects-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-photo-container { width: 320px !important; height: 340px !important; }
          .hero-photo { width: 260px !important; height: 260px !important; }
        }
        a { color: inherit; }
      `}</style>

      <div className="grid-bg" />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 max(20px, env(safe-area-inset-left, 20px))", height: "60px", display: "flex", justifyContent: "space-between", alignItems: "center", background: scrolled ? t.navBg : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", borderBottom: scrolled ? `1px solid ${t.navBorder}` : "1px solid transparent", transition: "all 0.4s ease" }}>
        <div style={{ cursor: "pointer", zIndex: 101 }} onClick={() => scrollTo("home")}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 600, color: t.text }}>Conrad Wyrick</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <div className="desktop-nav" style={{ gap: "32px", alignItems: "center" }}>
            {SECTIONS.map((sec) => {
              const id = sec.toLowerCase();
              const isActive = !currentProject && activeSection === id;
              return (
                <span key={sec} onClick={() => scrollTo(id)} onMouseEnter={() => setHoveredNav(id)} onMouseLeave={() => setHoveredNav(null)}
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 400, color: isActive ? t.text : t.textFaint, cursor: "pointer", transition: "color 0.2s ease", ...(hoveredNav === id && !isActive ? { color: t.textMuted } : {}) }}>{sec}</span>
              );
            })}
          </div>
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
          <div className="mobile-burger" onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: "pointer", flexDirection: "column", gap: "5px", padding: "4px", zIndex: 101 }}>
            <div style={{ width: "20px", height: "1.5px", background: t.text, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(4.5px,4.5px)" : "none" }} />
            <div style={{ width: "20px", height: "1.5px", background: t.text, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <div style={{ width: "20px", height: "1.5px", background: t.text, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(4.5px,-4.5px)" : "none" }} />
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99, background: t.mobileOverlay, backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "32px" }}>
          {SECTIONS.map((sec) => (
            <div key={sec} onClick={() => { scrollTo(sec.toLowerCase()); setMenuOpen(false); }}
              style={{ fontFamily: "'Instrument Serif', serif", fontSize: "32px", color: t.text, cursor: "pointer" }}>{sec}</div>
          ))}
        </div>
      )}

      {/* --- PROJECT DETAIL VIEW --- */}
      {currentProject ? (
        <ProjectPage project={currentProject} t={t} onBack={closeProject} onNavigate={openProject} />
      ) : (
        <>
          {/* HERO */}
          <section id="home" className="section-padding" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "100px", paddingBottom: "60px", maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div className="hero-grid" style={{ display: "flex", gap: "60px", alignItems: "center", width: "100%", opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(30px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s" }}>
              <div className="hero-text" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 400, lineHeight: 1.1, color: t.text, marginBottom: "16px" }}>Hi, I'm Conrad.</h1>
                <p style={{ fontSize: "17px", color: t.textFaint, lineHeight: 1.5, marginBottom: "6px" }}>Mechanical Engineer and Researcher</p>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: t.textFaintest, marginBottom: "28px" }}>Research Analyst @ S&P Global</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "24px" }}>
                  <a href="https://drive.google.com/file/d/1n8s-97f6tOzPW4YVGgMFWu-mYoTmQUO7/view" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 500, padding: "10px 24px", borderRadius: "8px", background: t.btnFill, color: t.btnFillText, textDecoration: "none", transition: "all 0.2s ease" }}>Resume</a>
                  <a href="https://drive.google.com/file/d/1K41nsEG7oa-6URBfHDAwgTgTYKq-jpuW/view" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 500, padding: "10px 24px", borderRadius: "8px", background: "transparent", color: t.text, border: `1px solid ${t.btnOutlineBorder}`, textDecoration: "none", transition: "all 0.2s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.btnOutlineBorderHover; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.btnOutlineBorder; }}>CV</a>
                </div>
                <div className="socials" style={{ display: "flex", gap: "16px" }}>
                  <a href="https://www.linkedin.com/in/conradwyrick/" target="_blank" rel="noopener noreferrer" style={{ color: t.socialIcon, transition: "color 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = t.text; }} onMouseLeave={(e) => { e.currentTarget.style.color = t.socialIcon; }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="mailto:contact@conradwyrick.com" style={{ color: t.socialIcon, transition: "color 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = t.text; }} onMouseLeave={(e) => { e.currentTarget.style.color = t.socialIcon; }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
                  </a>
                </div>
              </div>
              <div style={{ flexShrink: 0 }}>
                <div className="hero-photo-container" style={{ borderRadius: "18px", background: t.card, border: `1px solid ${t.cardBorder}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px", transition: "all 0.4s ease" }}>
                  <img className="hero-photo" src="/Photo_with_dad.jpg" alt="Conrad Wyrick" style={{ borderRadius: "25%", objectFit: "cover" }} />
                  {/* BACKUP: Gradient circle avatar with initial - uncomment to use instead of photo
                  <div style={{ width: "400px", height: "400px", borderRadius: "50%", background: "linear-gradient(135deg, #6B8F71, #8B6B8F)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Instrument Serif', serif", fontSize: "36px", color: "#fff" }}>C</div>
                  */}
                  {/* BACKUP: Text labels under photo showing degree and school
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: t.textFaint, textTransform: "uppercase", letterSpacing: "0.08em" }}>Mechanical Engineering</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: t.textFaintest, marginTop: "2px" }}>University of Florida</div>
                  </div>
                  */}
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="section-padding" style={{ paddingTop: "100px", paddingBottom: "100px", maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <FadeIn><h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "36px", fontWeight: 400, textAlign: "center", marginBottom: "40px", color: t.text }}>About Me</h2></FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ maxWidth: "860px", margin: "0 auto" }}>
                <p className="about-text" style={{ color: t.textMuted, lineHeight: 1.8, marginBottom: "16px" }}>I'm a Mechanical Engineering graduate from the University of Florida with certificates in Engineering Innovation and Engineering Leadership.  I'm passionate about building technology that serves people, from accessible systems to data-driven insights on global energy.</p>
                <p className="about-text" style={{ color: t.textMuted, lineHeight: 1.8 }}>Currently, I'm a Research Analyst at S&P Global in an 18-month rotational program focused on commodities, sustainability, and energy markets. When I'm not modeling data, you can find me reading about tech, tinkering with side projects, or exploring new places.</p>
              </div>
            </FadeIn>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="section-padding" style={{ paddingTop: "100px", paddingBottom: "100px", maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <FadeIn><h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "36px", fontWeight: 400, textAlign: "center", marginBottom: "48px", color: t.text }}>Recent Experience</h2></FadeIn>
            <div style={{ maxWidth: "860px", margin: "0 auto" }}>
              {EXPERIENCE.map((item, i) => <ExperienceCard key={i} item={item} index={i} t={t} />)}
            </div>
          </section>

          {/* PUBLICATIONS */}
          <section className="section-padding" style={{ paddingTop: "0", paddingBottom: "40px", maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <FadeIn>
              <div style={{ maxWidth: "860px", margin: "0 auto", padding: "28px", background: t.pubCardBg, border: `1px solid ${t.pubCardBorder}`, borderRadius: "14px" }}>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600, color: t.text, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Publications</h3>
                <div style={{ fontSize: "13px", color: t.textFaint, lineHeight: 1.7, marginBottom: "10px" }}>
                  <span style={{ color: t.textMuted }}>Front Row:</span> Automatically Generating Immersive Audio Representations of Tennis Broadcasts for Blind Viewers. <span style={{ color: t.textFaintest }}>UIST '23</span> &middot; <a href="https://doi.org/10.1145/3586183.3606830" target="_blank" rel="noopener noreferrer" style={{ color: t.accent, textDecoration: "none" }}>DOI &#8599;</a>
                </div>
                <div style={{ fontSize: "13px", color: t.textFaint, lineHeight: 1.7 }}>
                  <span style={{ color: t.textMuted }}>Towards Accessible Sports Broadcasts</span> for Blind and Low-Vision Viewers. <span style={{ color: t.textFaintest }}>CHI EA '23</span> &middot; <a href="https://doi.org/10.1145/3544549.3585610" target="_blank" rel="noopener noreferrer" style={{ color: t.accent, textDecoration: "none" }}>DOI &#8599;</a>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="section-padding" style={{ paddingTop: "100px", paddingBottom: "100px", maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <FadeIn><h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "36px", fontWeight: 400, textAlign: "center", marginBottom: "48px", color: t.text }}>Projects</h2></FadeIn>
            <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", gridAutoRows: "1fr" }}>
              {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} t={t} onOpen={openProject} />)}
            </div>
          </section>

          {/* FOOTER */}
          <footer className="section-padding" style={{ paddingTop: "40px", paddingBottom: "40px", maxWidth: "1200px", margin: "0 auto", borderTop: `1px solid ${t.navBorder}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", position: "relative", zIndex: 1 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: t.footerText }}>&copy; 2026 Conrad Wyrick</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: t.footerText }}>Built with intention</span>
          </footer>
        </>
      )}
    </div>
  );
}