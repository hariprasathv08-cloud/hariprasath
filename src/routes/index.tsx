import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ArrowDown, GitBranch as Github, Link2 as Linkedin, Mail, Phone, FileDown, Menu, X } from "lucide-react";
import portrait from "@/assets/hari-portrait.png.asset.json";
import { Cursor, Magnetic, Reveal, SplitText } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  profile, links, projects, practice, skills, experience, education, certifications, type Project,
} from "@/data/portfolio";

const TITLE = "Hari Prasath | SOC Analyst & Network Security Portfolio";
const DESC =
  "Hari Prasath’s SOC analyst, cybersecurity and network security portfolio featuring Network Tool, ThreatVision and security automation work.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Index", "#top"], ["Work", "#work"], ["About", "#about"],
  ["Skills", "#skills"], ["Experience", "#experience"], ["Contact", "#contact"],
] as const;

const isPlaceholder = (u?: string) => !u || u.startsWith("REPLACE_WITH");
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const socials = [
  { label: "GitHub", href: links.github, icon: Github },
  { label: "LinkedIn", href: links.linkedin, icon: Linkedin },
];

function Index() {
  return (
    <div className="grain relative">
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Certifications />
        <GitHubSection />
        <Contact />
      </main>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md"
    >
      <div className="flex items-center justify-between px-5 py-5 md:px-10">
        <a href="#top" className="display text-lg tracking-tight">HP<span className="text-signal">.</span></a>
        <nav className="hidden gap-8 md:flex">
          {nav.map(([l, h]) => (
            <a key={h} href={h} className="meta transition-colors hover:text-foreground">{l}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          {socials.map((l) => <a key={l.label} href={l.href} {...ext} className="meta transition-colors hover:text-signal">{l.label}</a>)}
          <a href={links.resume} download className="meta border border-foreground/40 px-3 py-1.5 text-foreground transition-colors hover:border-signal hover:text-signal">Resume</a>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation">
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {menuOpen && <nav id="mobile-navigation" className="grid gap-0 border-t bg-background px-5 py-3 md:hidden" aria-label="Mobile navigation">
        {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="meta border-b py-4 text-foreground">{label}</a>)}
        <div className="flex gap-6 py-4">
          {socials.map((l) => <a key={l.label} href={l.href} {...ext} className="meta text-foreground">{l.label}</a>)}
          <a href={links.resume} download className="meta text-foreground">Resume</a>
        </div>
      </nav>}
    </motion.header>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-[82svh] flex-col overflow-hidden px-5 pb-8 pt-24 md:min-h-[86svh] md:px-10 md:pt-28">
      <motion.div style={{ y: imgY }} className="absolute right-0 top-0 h-full w-full md:w-[46%]">
        <motion.img
          src={portrait.url}
          alt="Portrait of Hari Prasath"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover object-top opacity-40 grayscale md:opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="relative z-10 flex flex-1 flex-col justify-between gap-10">
        <div className="flex flex-wrap justify-between gap-4">
          <span className="meta">Coimbatore / India</span>
          <span className="meta">SOC • Network • Security</span>
        </div>

        <div>
          <motion.div style={{ y: y1 }}>
            <SplitText as="h1" text={profile.firstName.toUpperCase()} immediate className="display block text-[21vw] md:text-[17vw]" delay={0.2} />
          </motion.div>
          <motion.div style={{ y: y2 }} className="md:pl-[12vw]">
            <SplitText text={profile.lastName.toUpperCase()} immediate className="display text-outline block text-[21vw] md:text-[17vw]" delay={0.35} />
          </motion.div>
        </div>

        <div className="grid gap-5 border-t pt-5 md:grid-cols-12">
          <ul className="space-y-1 md:col-span-4">
            {profile.roles.map((r, i) => (
              <motion.li key={r} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 + i * 0.1 }}
                className="display text-xl md:text-2xl">
                <span className="meta mr-3 text-signal">0{i + 1}</span>{r.toUpperCase()}
              </motion.li>
            ))}
          </ul>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="max-w-md text-base leading-relaxed text-muted-foreground md:col-span-5">
            {profile.intro}
          </motion.p>
          <div className="flex flex-wrap items-end gap-3 md:col-span-3 md:justify-end">
            <Magnetic href="#work" className="meta inline-flex items-center gap-2 bg-foreground px-5 py-3 text-background">
              View work <ArrowDown className="h-3 w-3" />
            </Magnetic>
            {!isPlaceholder(links.resume) && <Magnetic href={links.resume} download className="meta inline-flex items-center gap-2 border border-foreground/40 px-5 py-3 text-foreground">
              Download resume <FileDown className="h-3 w-3" />
            </Magnetic>}
            <div className="flex w-full gap-5 md:justify-end">
              {socials.map((l) => <a key={l.label} href={l.href} {...ext} className="meta inline-flex items-center gap-1.5 hover:text-signal"><l.icon className="h-3 w-3" />{l.label}</a>)}
              <a href={links.email} className="meta inline-flex items-center gap-1.5 hover:text-signal"><Mail className="h-3 w-3" />Email</a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SectionHead({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div className="mb-10 grid gap-5 border-t pt-6 md:mb-14 md:grid-cols-12">
      <span className="meta md:col-span-3">({index}) {label}</span>
      <SplitText as="h2" text={title} className="display text-5xl md:col-span-9 md:text-8xl" />
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="px-5 pb-20 pt-12 md:px-10 md:pb-28 md:pt-16">
      <SectionHead index="01" label="Selected Work" title="Selected work." />
      <div>
        {projects.map((p, i) => <ProjectRow key={p.id} p={p} flip={i % 2 === 1} />)}
      </div>
    </section>
  );
}

function ProjectRow({ p, flip }: { p: Project; flip: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <article ref={ref} className="group grid gap-6 border-t py-10 md:grid-cols-12 md:gap-10 md:py-16"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} data-cursor>
      <Reveal className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-surface">
          <motion.div style={{ y }} className="grid-lines absolute -inset-[15%]" />
          <motion.div
            animate={{ scale: hover ? 1.06 : 1, skewX: hover ? -4 : 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <ProjectVisual id={p.id} />
          </motion.div>
          <motion.div
            className="absolute inset-x-0 bottom-0 h-px bg-signal"
            initial={{ scaleX: 0 }} animate={{ scaleX: hover ? 1 : 0 }} style={{ originX: 0 }} transition={{ duration: 0.6 }}
          />
          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            {p.stack.slice(0, 3).map((s) => <span key={s} className="meta border bg-background/60 px-2 py-1 backdrop-blur">{s}</span>)}
          </div>
          <span className="meta absolute bottom-5 right-5 max-w-[65%] text-right">{p.subtitle}</span>
        </div>
      </Reveal>

      <div className={`flex flex-col justify-between gap-8 md:col-span-5 ${flip ? "md:order-1" : ""}`}>
        <div>
          <span className="meta text-signal">{p.id} / 05</span>
          <h3 className="display mt-4 text-5xl transition-transform duration-700 group-hover:translate-x-3 md:text-7xl">{p.title}</h3>
          <p className="mt-3 text-lg text-foreground/80">{p.subtitle}</p>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{p.description}</p>
          <p className="meta mt-6 max-w-md leading-relaxed">{p.features.join(" / ")}</p>
        </div>
        <div>
          <p className="meta mb-5">{p.stack.join(" · ")}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 border-t pt-5">
            <button type="button" onClick={() => setOpen(true)} className="meta inline-flex items-center gap-1 text-foreground transition-colors hover:text-signal">View project <ArrowUpRight className="h-3 w-3" /></button>
            {isPlaceholder(p.github)
              ? <span className="meta opacity-60">Source code coming soon</span>
              : <ProjectLink href={p.github} label="View GitHub repository" github />}
            {!isPlaceholder(p.demo) && <ProjectLink href={p.demo!} label="Live demo" />}
          </div>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90svh] overflow-y-auto rounded-none border-border bg-background sm:max-w-2xl">
          <DialogHeader>
            <span className="meta text-signal">{p.id} / 05 — {p.subtitle}</span>
            <DialogTitle className="display text-4xl md:text-6xl">{p.title}</DialogTitle>
            <DialogDescription className="sr-only">{p.subtitle} project details</DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div><p className="meta mb-2">Overview</p><p className="leading-relaxed text-muted-foreground">{p.description}</p></div>
            <div><p className="meta mb-2">Key features</p><ul className="grid gap-1 sm:grid-cols-2">{p.features.map((f) => <li key={f} className="border-b py-2 text-sm">{f}</li>)}</ul></div>
            <div><p className="meta mb-2">Technologies</p><p className="text-sm">{p.stack.join(" · ")}</p></div>
            <div className="flex flex-wrap gap-3 border-t pt-5">
              {isPlaceholder(p.github)
                ? <span className="meta opacity-60">Source code coming soon</span>
                : <a href={p.github} {...ext} className="meta inline-flex items-center gap-2 bg-foreground px-5 py-3 text-background"><Github className="h-4 w-4" />View GitHub repository</a>}
              {!isPlaceholder(p.demo) && <a href={p.demo} {...ext} className="meta inline-flex items-center gap-2 border border-foreground/40 px-5 py-3">Live demo <ArrowUpRight className="h-3 w-3" /></a>}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
}

function ProjectLink({ href, label, github }: { href: string; label: string; github?: boolean }) {
  const pending = isPlaceholder(href);
  return (
    <a href={pending ? undefined : href} target="_blank" rel="noopener noreferrer" aria-disabled={pending}
      title={pending ? "Link coming soon" : undefined}
      className={`meta inline-flex items-center gap-1 transition-colors ${pending ? "cursor-not-allowed opacity-50" : "text-foreground hover:text-signal"}`}>
      {github && <Github className="h-3 w-3" />}{label} <ArrowUpRight className="h-3 w-3" />
    </a>
  );
}

function About() {
  const all = skills.flatMap((s) => s.items);
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="px-5 md:px-10">
        <div className="grid gap-10 border-t pt-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <span className="meta">(02) About</span>
            <SplitText as="h2" text="Security. Networks. Intelligence." className="display mt-8 block text-6xl md:text-8xl" />
          </div>
          <div className="md:col-span-5 md:col-start-8 md:pt-24">
            <Reveal>
              <p className="text-xl leading-relaxed md:text-2xl">{profile.bio}</p>
              <p className="meta mt-8">{profile.title}</p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="my-16 space-y-4 overflow-hidden border-y py-8 md:my-20">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...all, ...all].map((s, i) => (
            <span key={i} className="display text-4xl md:text-6xl">{s}<span className="ml-10 text-signal">✶</span></span>
          ))}
        </div>
        <div className="animate-marquee-slow flex w-max gap-10 whitespace-nowrap">
          {[...all].reverse().concat([...all].reverse()).map((s, i) => (
            <span key={i} className="display text-outline text-4xl md:text-6xl">{s}</span>
          ))}
        </div>
      </div>

      <div id="skills" className="grid scroll-mt-24 gap-x-10 px-5 md:grid-cols-2 md:px-10 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.05} className="border-t py-8">
            <span className="meta text-signal">{g.group}</span>
            <ul className="mt-5 space-y-2">
              {g.items.map((s) => <li key={s} className="text-lg text-foreground/85">{s}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-5 py-20 md:px-10 md:py-28">
      <SectionHead index="03" label="Experience & Education" title="Path so far." />
      <div className="relative md:ml-[25%]">
        <div className="absolute bottom-0 left-0 top-0 w-px bg-border" />
        {[
          { k: "Practice", a: practice.title, b: practice.description, c: "" },
          ...experience.map((e) => ({ k: "Experience", a: e.org, b: `${e.role} — ${e.details}`, c: e.period })),
          ...education.map((e) => ({ k: "Education", a: e.degree, b: `${e.school} — ${e.place}`, c: e.period })),
        ].map((row, i) => (
          <Reveal key={i} delay={i * 0.1} className="relative pb-16 pl-10">
            <span className="absolute -left-[5px] top-3 h-[11px] w-[11px] rounded-full bg-signal" />
            <span className="meta">{row.k} · {row.c}</span>
            <h3 className="display mt-3 text-4xl md:text-6xl">{row.a}</h3>
            <p className="mt-2 text-muted-foreground">{row.b}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="px-5 py-20 md:px-10 md:py-28">
      <SectionHead index="04" label="Certifications" title="Credentials." />
      <ul>
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.05}>
            <li className="group grid items-baseline gap-2 border-t py-6 transition-colors hover:bg-surface md:grid-cols-12 md:px-4">
              <span className="meta md:col-span-1">0{i + 1}</span>
              <span className="display text-2xl transition-transform duration-500 group-hover:translate-x-2 md:col-span-7 md:text-4xl">{c.name}</span>
              <span className="text-muted-foreground md:col-span-3">{c.issuer}</span>
              <span className="meta md:col-span-1 md:text-right">{c.date}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function GitHubSection() {
  const repos = projects.filter((p) => !isPlaceholder(p.github)).map((p) => ({ t: p.title, u: p.github }));
  return (
    <section id="github" className="px-5 py-20 md:px-10 md:py-28">
      <div className="grid gap-10 border-t pt-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="meta">(05) Source</span>
          <h2 className="display mt-8 text-6xl md:text-8xl">Open<br />source.</h2>
          <p className="mt-6 text-muted-foreground">Security tools, experiments and practical engineering.</p>
          <Magnetic href={links.github} target="_blank" rel="noopener noreferrer"
            className="meta mt-10 inline-flex items-center gap-2 bg-foreground px-5 py-3 text-background">
            <Github className="h-4 w-4" /> View my GitHub
          </Magnetic>
        </div>
        <ul className="md:col-span-6 md:col-start-7">
          {repos.map((r) => (
            <li key={r.t} className="flex items-center justify-between border-b py-5">
              <span className="text-lg">{r.t}</span>
              <ProjectLink href={r.u} label="View source" github />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    { icon: Phone, label: profile.phone, href: links.phone },
    { icon: Github, label: "GitHub", href: links.github },
    { icon: Linkedin, label: "LinkedIn", href: links.linkedin },
    { icon: FileDown, label: "Resume", href: links.resume, download: true },
  ];
  return (
    <section id="contact" className="px-5 pb-10 pt-32 md:px-10">
      <span className="meta">(06) Contact</span>
      <SplitText as="h2" text="LET'S CONNECT." className="display mt-8 block text-[15vw] md:text-[12vw]" />
      <p className="mt-6 text-lg text-muted-foreground">Open to entry-level SOC, cybersecurity and network security opportunities.</p>
      <div className="mt-10 grid gap-8 border-t pt-8 md:grid-cols-12">
        <div className="md:col-span-6">
          <Magnetic href={links.email}
            className="display inline-flex items-center gap-4 break-all text-2xl underline decoration-signal decoration-1 underline-offset-8 md:text-4xl">
            <Mail className="h-7 w-7 shrink-0" /> {profile.email}
          </Magnetic>
        </div>
        <ul className="grid grid-cols-2 gap-4 md:col-span-6">
          {items.map(({ icon: Icon, label, href, download }) => {
            const pending = isPlaceholder(href);
            if (pending) return null;
            return (
              <li key={label}>
                <a href={href} target={download || href.startsWith("tel:") ? undefined : "_blank"} rel="noopener noreferrer" download={download || undefined}
                  className="flex min-h-14 items-center justify-between gap-2 border px-4 py-4 transition-colors hover:border-signal hover:text-signal">
                  <span className="flex items-center gap-3"><Icon className="h-4 w-4" />{label}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <footer className="mt-20 flex flex-wrap justify-between gap-4 border-t pt-6">
        <span className="meta">© {new Date().getFullYear()} Hari Prasath</span>
        <span className="meta">SOC Analyst • Cybersecurity • Network Security</span>
        <span className="flex gap-5">
          {socials.map((l) => <a key={l.label} href={l.href} {...ext} className="meta hover:text-foreground">{l.label}</a>)}
          <a href={links.email} className="meta hover:text-foreground">Email</a>
        </span>
        <a href="#top" className="meta hover:text-foreground">Back to top ↑</a>
      </footer>
    </section>
  );
}

function NetworkVisual() {
  return (
    <div className="network-visual relative h-full w-full" aria-label="Abstract network topology visualization" role="img">
      <svg viewBox="0 0 700 440" className="h-full w-full" aria-hidden="true">
        <g className="network-links" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M72 150 190 80 322 153 466 86 621 158 528 320 347 350 190 294 72 150M190 80 190 294M322 153 347 350M466 86 528 320M72 150 322 153M190 294 528 320M322 153 621 158" />
        </g>
        <g className="network-nodes" fill="currentColor">
          {[[72,150],[190,80],[322,153],[466,86],[621,158],[528,320],[347,350],[190,294]].map(([x,y], i) => <g key={i}><circle cx={x} cy={y} r={i === 2 ? 11 : 5} /><circle cx={x} cy={y} r={i === 2 ? 24 : 13} fill="none" stroke="currentColor" strokeOpacity=".45" /></g>)}
        </g>
        <circle className="network-packet" cx="72" cy="150" r="4" fill="currentColor" />
        <g className="network-labels" fill="currentColor" fontSize="10" fontFamily="monospace"><text x="78" y="134">192.168.1.01</text><text x="333" y="129">GATEWAY</text><text x="477" y="66">10.0.0.24</text><text x="535" y="345">TCP/IP</text></g>
      </svg>
    </div>
  );
}

function ProjectVisual({ id }: { id: string }) {
  if (id === "01") return <NetworkVisual />;

  if (id === "02") return (
    <div className="project-visual grid h-full w-full grid-cols-[1fr_2fr] gap-3 p-8 pt-20 text-foreground/70 md:p-12 md:pt-20" aria-label="Abstract security operations monitoring visual" role="img">
      <div className="flex flex-col gap-3 border-r border-border pr-4">
        <span className="meta text-signal">SOC / XDR</span>
        {['EVENTS', 'PROCESSES', 'USB', 'FIREWALL', 'INTEGRITY'].map((item, i) => <span key={item} className="meta flex items-center gap-2 border-b py-2"><span className={i === 1 ? 'h-1.5 w-1.5 rounded-full bg-signal' : 'h-1.5 w-1.5 rounded-full bg-muted-foreground'} />{item}</span>)}
      </div>
      <div className="flex flex-col justify-between gap-4">
        <div className="meta flex justify-between border-b pb-3"><span>SECURITY EVENTS</span><span>MONITORING</span></div>
        <div className="flex h-24 items-end gap-1.5 border-b border-border pb-2 md:h-36">{[28,45,37,68,44,78,52,40,72,55,84,64,35,58,47,74,56,33].map((height, i) => <span key={i} className="min-w-0 flex-1 bg-signal/60" style={{ height: `${height}%` }} />)}</div>
        <div className="meta flex justify-between"><span>ALERT CORRELATION</span><span>MITRE ATT&CK</span></div>
      </div>
    </div>
  );

  if (id === "03") return (
    <div className="project-visual flex h-full w-full flex-col justify-center gap-4 p-8 pt-20 md:p-12 md:pt-20" aria-label="Abstract Linux firewall rules visual" role="img">
      <div className="meta border-b pb-3 text-signal">$ UFW / FIREWALL CONTROL</div>
      {['PORT MANAGEMENT', 'WEBSITE BLOCKING', 'SUSPICIOUS IP BLOCKING', 'SSH BRUTE-FORCE DETECTION'].map((rule, i) => <div key={rule} className="flex items-center justify-between gap-3 border-b border-border pb-2 font-mono text-[10px] text-foreground/70 md:text-xs"><span className="text-signal">0{i + 1}</span><span className="min-w-0 flex-1">{rule}</span><span className="text-muted-foreground">[ RULE ]</span></div>)}
      <span className="meta mt-1">AUTOMATED FIREWALL RESPONSE _</span>
    </div>
  );

  if (id === "04") return (
    <div className="project-visual flex h-full w-full items-center px-7 pt-16 md:px-12" aria-label="Abstract AI-assisted workflow visual" role="img">
      <div className="w-full">
        <div className="meta mb-7 text-signal">AI-ASSISTED WORKFLOW</div>
        <div className="grid grid-cols-3 items-center gap-2 md:gap-4">{['INVOICE', 'GEMINI API', 'WORKFLOW'].map((item, i) => <div key={item} className="relative flex aspect-square items-center justify-center border border-border bg-background/70 p-2 text-center font-mono text-[9px] text-foreground/80 md:text-xs">{item}{i < 2 && <span className="absolute -right-3 z-10 text-signal md:-right-5">→</span>}</div>)}</div>
        <div className="meta mt-7 flex justify-between border-t pt-4"><span>JWT AUTH</span><span>REST API</span><span>FALLBACK</span></div>
      </div>
    </div>
  );

  return (
    <div className="project-visual flex h-full w-full flex-col justify-center gap-3 p-8 pt-20 md:p-12 md:pt-20" aria-label="Abstract support ticket workflow visual" role="img">
      <span className="meta mb-2 text-signal">SUPPORT / TICKET FLOW</span>
      {['TICKET INTAKE', 'PRIORITY HANDLING', 'ASSIGNMENT', 'RESOLUTION TRACKING'].map((step, i) => <div key={step} className="flex items-center gap-4 border-b border-border py-2"><span className="meta text-signal">0{i + 1}</span><span className="font-mono text-[10px] text-foreground/80 md:text-sm">{step}</span><span className="ml-auto text-signal">↗</span></div>)}
    </div>
  );
}
