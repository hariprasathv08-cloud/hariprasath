// All editable portfolio content lives here.
const REPO = "REPLACE_WITH_GITHUB_REPO_URL";

export const profile = {
  firstName: "Hari",
  lastName: "Prasath",
  title: "AI Security Intern | Offensive Security | LLM Security",
  roles: ["AI Security", "Offensive Security", "LLM Security"],
  location: "Coimbatore, Tamil Nadu, India",
  email: "hariprasathv08@gmail.com",
  phone: "+91 6369113681",
  intro:
    "Building security-focused tools and AI-powered applications across offensive security, network security and intelligent security operations.",
  bio: "Cybersecurity-focused developer with hands-on exposure to offensive security tooling and AI/LLM security. Interested in offensive security, network security, security automation, SIEM/XDR and intelligent security applications.",
};

export const links = {
  github: "https://github.com/",
  linkedin: "REPLACE_WITH_LINKEDIN_URL",
  resume: "/resume.pdf",
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  caseStudy: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Secure-FW",
    subtitle: "Linux Firewall Automation Tool",
    description:
      "Automates hardening and rule management for UFW on Linux hosts, turning repetitive firewall configuration into a repeatable, scriptable workflow.",
    stack: ["Bash", "Linux", "UFW"],
    github: REPO,
    demo: REPO,
    caseStudy: REPO,
  },
  {
    id: "02",
    title: "ThreatVision",
    subtitle: "Real-Time Cybersecurity SIEM / XDR Platform",
    description:
      "A real-time monitoring platform that collects Windows security events, surfaces suspicious activity and supports alert investigation from a single console.",
    stack: ["Python", "Flask", "SQLite", "JavaScript", "Windows Security APIs"],
    github: REPO,
    demo: REPO,
    caseStudy: REPO,
  },
  {
    id: "03",
    title: "VertexERP AI",
    subtitle: "AI-Powered ERP Platform",
    description:
      "An ERP platform with AI-assisted workflows powered by the Gemini API, built on a FastAPI backend with secure API design.",
    stack: ["Python", "FastAPI", "SQLite", "Gemini API", "JavaScript"],
    github: REPO,
    demo: REPO,
    caseStudy: REPO,
  },
  {
    id: "04",
    title: "Network Traffic Triage",
    subtitle: "Wireshark CSV Traffic Analysis Dashboard",
    description:
      "Ingests Wireshark CSV exports and helps triage network traffic — highlighting patterns worth a closer look for detection and analysis.",
    stack: ["Network Security", "Traffic Analysis", "Detection"],
    github: REPO,
    demo: REPO,
    caseStudy: REPO,
  },
  {
    id: "05",
    title: "SupportFlow IT",
    subtitle: "IT Support & Ticket Management System",
    description:
      "A ticketing system for IT support teams to log, assign and resolve issues with a clear, auditable workflow.",
    stack: ["Python", "Flask", "SQLite", "JavaScript"],
    github: REPO,
    demo: REPO,
    caseStudy: REPO,
  },
];

export const practice = {
  title: "Wazuh SIEM/XDR Practice",
  description: "Security monitoring / log analysis / alert investigation",
  github: REPO,
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Offensive Security",
    items: ["Kali Linux", "Nmap", "Burp Suite", "Wireshark", "Network Scanning", "Web Application Security Testing", "Attack Simulation", "MITRE ATT&CK"],
  },
  {
    group: "AI / LLM Security",
    items: ["LLM Security", "Attacks on Large Language Models", "Gemini API", "AI-Assisted Security Workflows", "JWT", "REST APIs", "Secure API Design"],
  },
  { group: "Programming", items: ["Python", "Bash", "JavaScript"] },
  { group: "Web / Backend", items: ["Flask", "FastAPI", "SQLite"] },
  {
    group: "Security / Defense",
    items: ["Wazuh", "SIEM/XDR", "Log Analysis", "File Integrity Monitoring", "Firewall Security", "Incident Response"],
  },
];

export const experience = [
  { org: "I Ping U", role: "Network Security", period: "Oct 2025 – Nov 2025" },
];

export const education = [
  {
    degree: "B.Sc. Cybersecurity (Pursuing)",
    school: "Rathinam Global Deemed to be University",
    place: "Coimbatore, India",
    period: "July 2024 – Present",
  },
];

export const certifications = [
  { name: "AI: Attacks on Large Language Models (LLMs)", issuer: "DCG91422, DCG Coimbatore", date: "Sep 2026" },
  { name: "IT Help Desk for Beginners", issuer: "LinkedIn Learning", date: "Aug 2026" },
  { name: "Google Cybersecurity Professional Certificate", issuer: "Google / Coursera", date: "Sep 2025" },
  { name: "Computer Network & Internet Security", issuer: "Infosys Springboard", date: "May 2025" },
  { name: "HTML and CSS in Depth", issuer: "Meta / Coursera", date: "Mar 2025" },
];
