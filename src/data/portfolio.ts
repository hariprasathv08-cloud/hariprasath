// Portfolio content and verified destinations.
const PENDING = "REPLACE_WITH_PROJECT_URL";

export const profile = {
  firstName: "Hari",
  lastName: "Prasath",
  title: "Entry-Level SOC Analyst | Cybersecurity & Network Security",
  roles: ["SOC Analyst", "Cybersecurity", "Network Security"],
  location: "Coimbatore, Tamil Nadu, India",
  email: "hariprasathv08@gmail.com",
  phone: "+91 6369113681",
  intro: "Building practical security tools, network analysis solutions and security-focused applications.",
  bio: "I’m Hari Prasath, a cybersecurity-focused Computer Science student interested in SOC operations, network security, offensive security, security automation and AI/LLM security. I enjoy building practical security tools and analyzing systems, networks and security events.",
};

export const links = {
  github: "https://github.com/hariprasathv08-cloud",
  linkedin: "REPLACE_WITH_LINKEDIN_URL",
  resume: "REPLACE_WITH_RESUME_URL",
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  features: string[];
  github: string;
};

export const projects: Project[] = [
  {
    id: "01", title: "Network Tool", subtitle: "Network Security / Traffic Analysis",
    description: "A practical network security and analysis project focused on understanding network activity and security-related traffic.",
    stack: ["Network Security", "Traffic Analysis"], features: ["Network activity", "Traffic analysis"],
    github: "https://github.com/hariprasathv08-cloud/network-tool",
  },
  {
    id: "02", title: "ThreatVision", subtitle: "SIEM / XDR",
    description: "A real-time monitoring platform that collects Windows security events and supports alert investigation from a single console.",
    stack: ["Python", "Flask", "SQLite", "JavaScript", "Windows Security APIs"],
    features: ["Windows event monitoring", "Process monitoring", "USB detection", "Firewall monitoring", "File integrity monitoring", "Alert correlation", "Device telemetry", "MITRE ATT&CK mapping"], github: PENDING,
  },
  {
    id: "03", title: "Secure-FW", subtitle: "Linux Firewall Automation",
    description: "Automates hardening and rule management for UFW on Linux hosts, turning repetitive firewall configuration into a repeatable workflow.",
    stack: ["Bash", "Linux", "UFW"],
    features: ["Port management", "Website blocking", "Suspicious IP blocking", "SSH brute-force detection", "Automated firewall response"], github: PENDING,
  },
  {
    id: "04", title: "VertexERP AI", subtitle: "AI / LLM Security",
    description: "An ERP platform with AI-assisted workflows powered by the Gemini API, built on a FastAPI backend with secure API design.",
    stack: ["Python", "FastAPI", "SQLite", "Gemini API", "JWT", "REST APIs"],
    features: ["AI-assisted workflows", "Invoice processing", "REST APIs", "JWT authentication", "Fallback handling"], github: PENDING,
  },
  {
    id: "05", title: "SupportFlow IT", subtitle: "IT Support / Ticketing",
    description: "A ticketing system for IT support teams to log, assign and resolve issues with a clear, auditable workflow.",
    stack: ["Python", "Flask", "SQLite", "JavaScript"],
    features: ["Ticket assignment", "Priority handling", "Resolution tracking"], github: PENDING,
  },
];

export const practice = {
  title: "Wazuh SIEM / XDR Practice",
  description: "Security monitoring · Log analysis · Alert investigation · Attack activity analysis",
};

export const skills: { group: string; items: string[] }[] = [
  { group: "SOC Operations", items: ["Security Monitoring", "Log Analysis", "Alert Investigation", "Incident Response"] },
  { group: "Network Security", items: ["TCP/IP", "DNS", "HTTP/HTTPS", "VPN", "Firewalls", "Network Troubleshooting", "Wireshark"] },
  { group: "Offensive Security", items: ["Kali Linux", "Nmap", "Burp Suite", "Network Scanning", "Web Security Testing", "MITRE ATT&CK"] },
  { group: "Defensive Security", items: ["Wazuh", "SIEM/XDR", "File Integrity Monitoring", "Firewall Monitoring", "Process Monitoring"] },
  { group: "Programming", items: ["Python", "Bash", "JavaScript", "Flask", "FastAPI", "SQLite"] },
  { group: "AI Security", items: ["LLM Security", "Gemini API", "AI-Assisted Security", "JWT", "REST APIs"] },
];

export const experience = [
  { org: "I Ping U", role: "Network Security", period: "Oct 2025 – Nov 2025", details: "Network troubleshooting · ICMP diagnostics · Router security configuration · Basic network hardening" },
];

export const education = [
  { degree: "B.Sc. Cybersecurity (Pursuing)", school: "Rathinam Global Deemed to be University", place: "Coimbatore, India", period: "July 2024 – Present" },
];

export const certifications = [
  { name: "AI: Attacks on Large Language Models (LLMs)", issuer: "DCG91422 — DCG Coimbatore", date: "Sep 2026" },
  { name: "Google Cybersecurity Professional Certificate", issuer: "Google / Coursera", date: "Sep 2025" },
  { name: "Computer Network & Internet Security", issuer: "Infosys Springboard", date: "May 2025" },
  { name: "IT Help Desk for Beginners", issuer: "LinkedIn Learning", date: "Aug 2026" },
  { name: "HTML and CSS in Depth", issuer: "Meta / Coursera", date: "Mar 2025" },
];
