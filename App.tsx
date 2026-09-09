import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  MapPin,
  ShieldCheck,
  Layers,
  GitBranch,
  Cloud,
  Sparkles,
  CreditCard,
  Cpu,
  Boxes,
  Zap,
} from 'lucide-react';
import { Section } from './components/Section';
import { EXPERIENCE, PROJECTS, SKILLS, EDUCATION, SOCIAL_LINKS, APPROACH_CARDS } from './constants';
import { Project } from './types';

// ─── Hooks ───────────────────────────────────────────────────────────────────
const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
};

const handleSpotlight = (e: React.MouseEvent<HTMLElement>) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  el.style.setProperty('--my', `${e.clientY - rect.top}px`);
};

const useScrollState = (sectionIds: string[]) => {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, [sectionIds]);

  return { progress, active };
};

// ─── Animated Counter ──────────────────────────────────────────────────────────
const AnimatedCounter: React.FC<{ end: string; duration?: number }> = ({ end, duration = 1800 }) => {
  const [count, setCount] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericPart = end.replace(/[^0-9]/g, '');
          const suffix = end.replace(/[0-9]/g, '');
          const target = parseInt(numericPart) || 0;
          if (target === 0) {
            setCount(end);
            return;
          }
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const p = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.floor(eased * target) + suffix);
            if (p < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
};

// ─── Ambient Background ─────────────────────────────────────────────────────────
const Aurora: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div className="absolute -top-40 right-[-10%] w-[46rem] h-[46rem] rounded-full bg-teal-500/[0.07] blur-[130px] animate-aurora" />
    <div className="absolute top-1/3 left-[-15%] w-[38rem] h-[38rem] rounded-full bg-emerald-400/[0.05] blur-[130px] animate-aurora-slow" />
  </div>
);

// ─── Navigation ──────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { name: 'Work', href: '#projects', id: 'projects' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Approach', href: '#approach', id: 'approach' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar: React.FC<{ progress: number; active: string }> = ({ progress, active }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ${scrolled ? 'bg-[#08090c]/80 backdrop-blur-xl border-b border-white/5' : 'border-b border-transparent'}`}>
      <div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-teal-400 to-emerald-400 transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-[4.5rem]">
          <a href="#hero" className="group flex items-center gap-2.5" aria-label="Home">
            <span className="grid place-items-center w-9 h-9 rounded-lg border border-white/10 bg-white/[0.03] font-display font-bold text-sm tracking-tight text-white group-hover:border-teal-400/40 transition-colors">
              EA
            </span>
            <span className="hidden sm:block text-sm text-slate-500 font-mono">erick-aboge.dev</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${active === link.id ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                {link.name}
                {active === link.id && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-teal-400" />}
              </a>
            ))}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="ml-2 p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-[18px] h-[18px]" />
            </a>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-white text-slate-950 text-sm font-semibold hover:bg-teal-300 transition-colors"
            >
              Get in touch
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-[#08090c]/95 backdrop-blur-xl border-b border-white/5 px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-3 px-4 py-3 text-center bg-white text-slate-950 rounded-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
};

// ─── Hero ──────────────────────────────────────────────────────────────────────
const HERO_STACK = ['TypeScript', 'Go', 'Python', 'AWS', 'Terraform', 'PostgreSQL'];

const Hero: React.FC = () => (
  <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 overflow-hidden">
    <Aurora />
    <div className="absolute inset-0 grid-fade pointer-events-none" aria-hidden="true" />

    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center relative z-10">
      <div className="animate-slide-up">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/[0.06] text-teal-300 text-xs font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
          </span>
          <span className="font-mono tracking-wide">Senior Software Engineer · Dash.fi</span>
        </div>

        <h1 className="text-[2.75rem] sm:text-6xl lg:text-[4.25rem] font-bold leading-[1.02] tracking-tight font-display text-white text-balance mb-7">
          I engineer the systems that <span className="gradient-text">move money</span>.
        </h1>

        <p className="text-lg text-slate-400 mb-9 max-w-xl leading-relaxed text-pretty">
          I&rsquo;m Erick Aboge — I build production fintech at Dash.fi: corporate cards, payments, AP
          automation and AI-powered spend intelligence. I own services end-to-end, from API design and
          distributed-systems architecture to the Terraform that runs them in production.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-12">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-slate-950 font-semibold hover:bg-teal-300 transition-colors"
          >
            View selected work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="/Aboge_Erick_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/12 text-white font-semibold hover:bg-white/5 hover:border-white/25 transition-all"
          >
            <FileDown className="w-4 h-4" /> Résumé
          </a>
          <div className="flex items-center gap-1 ml-1">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="p-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-600">Core stack</span>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-slate-400">
            {HERO_STACK.map((tech) => (
              <span key={tech} className="hover:text-teal-300 transition-colors">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Code card */}
      <div className="relative hidden lg:block animate-slide-up-delayed">
        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-[#0b0d11]/90 shadow-2xl shadow-black/60">
          <div className="px-5 py-3.5 flex items-center gap-2 border-b border-white/5 bg-white/[0.02]">
            <span className="w-3 h-3 rounded-full bg-white/10" />
            <span className="w-3 h-3 rounded-full bg-white/10" />
            <span className="w-3 h-3 rounded-full bg-white/10" />
            <span className="ml-2 text-xs font-mono text-slate-500">engineer.ts</span>
          </div>
          <div className="p-7 font-mono text-[13px] leading-[1.7]">
            <div className="text-slate-600">// Senior Software Engineer</div>
            <div className="mt-1">
              <span className="text-purple-400">const</span> <span className="text-amber-200">erick</span> <span className="text-slate-500">=</span> <span className="text-slate-400">{'{'}</span>
            </div>
            <div className="pl-5">
              <div><span className="text-teal-300">company</span><span className="text-slate-500">:</span> <span className="text-emerald-300">'Dash.fi · Umba Group'</span><span className="text-slate-500">,</span></div>
              <div className="mt-0.5"><span className="text-teal-300">focus</span><span className="text-slate-500">:</span> <span className="text-slate-400">[</span></div>
              <div className="pl-5 text-emerald-300">'corporate cards'<span className="text-slate-500">,</span> 'payments'<span className="text-slate-500">,</span></div>
              <div className="pl-5 text-emerald-300">'AP automation'<span className="text-slate-500">,</span> 'AI spend'</div>
              <div><span className="text-slate-400">]</span><span className="text-slate-500">,</span></div>
              <div className="mt-0.5"><span className="text-teal-300">owns</span><span className="text-slate-500">:</span> <span className="text-emerald-300">'api → infra → prod'</span><span className="text-slate-500">,</span></div>
              <div className="mt-0.5"><span className="text-teal-300">stack</span><span className="text-slate-500">:</span> <span className="text-emerald-300">'TS · Go · Python · AWS'</span><span className="text-slate-500">,</span></div>
            </div>
            <div className="text-slate-400">{'}'}</div>
            <div className="mt-4">
              <span className="text-purple-400">await</span> <span className="text-amber-200">erick</span><span className="text-slate-500">.</span><span className="text-blue-300">shipToProduction</span><span className="text-slate-500">()</span>
              <span className="inline-block w-[9px] h-[17px] -mb-0.5 ml-0.5 bg-teal-400 animate-blink align-middle" />
            </div>
          </div>
        </div>
        <div className="absolute -inset-4 -z-10 rounded-3xl border border-white/[0.04]" />
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-float">
      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-600">scroll</span>
      <span className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
    </div>
  </section>
);

// ─── Stats ───────────────────────────────────────────────────────────────────
const StatsRow: React.FC = () => {
  const ref = useScrollReveal();
  const stats = [
    { value: '4+', label: 'Years in production', icon: <Cpu className="w-4 h-4" /> },
    { value: '13', label: 'Detector anomaly engine', icon: <Zap className="w-4 h-4" /> },
    { value: '90%', label: 'Fewer reconciliation errors', icon: <ShieldCheck className="w-4 h-4" /> },
    { value: '100%', label: 'Services owned as Terraform IaC', icon: <Cloud className="w-4 h-4" /> },
  ];
  return (
    <div ref={ref} className="relative z-20 px-6 md:px-12 -mt-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 border border-white/[0.07] rounded-2xl overflow-hidden bg-white/[0.015] backdrop-blur-sm">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="reveal p-6 md:p-8 border-white/[0.07] [&:not(:nth-child(2n))]:border-r lg:[&:not(:last-child)]:border-r [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <div className="flex items-center gap-2 text-teal-400 mb-3">{stat.icon}</div>
            <div className="text-3xl md:text-4xl font-bold text-white font-display tracking-tight">
              <AnimatedCounter end={stat.value} />
            </div>
            <div className="text-xs md:text-sm text-slate-500 mt-1.5 leading-snug">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Tech Marquee ──────────────────────────────────────────────────────────────
const MARQUEE_ITEMS = ['TypeScript', 'Go', 'Python', 'Node.js', 'SvelteKit', 'PostgreSQL', 'AWS Lambda', 'Terraform', 'SQS', 'Inngest', 'Stytch', 'Plaid', 'Rutter', 'Docker'];

const TechMarquee: React.FC = () => (
  <div className="py-10 border-y border-white/[0.05] overflow-hidden marquee-mask">
    <div className="flex w-max animate-marquee gap-12">
      {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
        <span key={i} className="text-sm font-mono text-slate-600 whitespace-nowrap flex items-center gap-12">
          {item}
          <span className="w-1 h-1 rounded-full bg-slate-700" />
        </span>
      ))}
    </div>
  </div>
);

// ─── Project Card ────────────────────────────────────────────────────────────
const badgeColors: Record<string, string> = {
  green: 'text-emerald-300 border-emerald-500/25 bg-emerald-500/[0.08]',
  blue: 'text-sky-300 border-sky-500/25 bg-sky-500/[0.08]',
  purple: 'text-violet-300 border-violet-500/25 bg-violet-500/[0.08]',
  amber: 'text-amber-300 border-amber-500/25 bg-amber-500/[0.08]',
  rose: 'text-rose-300 border-rose-500/25 bg-rose-500/[0.08]',
};

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    onMouseMove={handleSpotlight}
    className={`spot card group text-left w-full h-full p-7 flex flex-col ${project.featured ? 'md:col-span-2' : ''}`}
  >
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-start justify-between gap-4 mb-5">
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium border ${badgeColors[project.badgeColor]}`}>
          {project.badge}
        </span>
        <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-teal-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
      </div>

      <h3 className={`font-bold text-white group-hover:text-teal-300 transition-colors font-display ${project.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
        {project.title}
      </h3>
      <p className="text-sm text-slate-500 mt-1 mb-4 font-medium">{project.subtitle}</p>

      <p className={`text-slate-400 text-sm leading-relaxed mb-5 ${project.featured ? '' : 'line-clamp-3'}`}>
        {project.featured ? project.longDescription : project.description}
      </p>

      <div className="mt-auto">
        <div className="flex items-center gap-2 mb-5 text-xs font-medium text-teal-300/90">
          <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{project.keyPoint}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((t) => (
            <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-500 border border-white/[0.06] font-mono">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </button>
);

// ─── Project Modal ─────────────────────────────────────────────────────────────
const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') { onClose(); } };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-2xl max-h-[86vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0b0d11] shadow-2xl animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-slate-400" />
        </button>

        <div className="p-8 md:p-10">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium border mb-5 ${badgeColors[project.badgeColor]}`}>
            {project.badge}
          </span>
          <h3 className="text-3xl font-bold text-white font-display tracking-tight">{project.title}</h3>
          <p className="text-slate-500 font-medium mt-1 mb-6">{project.subtitle}</p>
          <p className="text-slate-300 mb-7 leading-relaxed">{project.longDescription || project.description}</p>

          <div className="flex items-center gap-2 mb-8 px-4 py-3 rounded-xl bg-teal-500/[0.06] border border-teal-500/15">
            <Sparkles className="w-4 h-4 text-teal-400 flex-shrink-0" />
            <span className="text-sm font-medium text-teal-200">{project.keyPoint}</span>
          </div>

          <div className="mb-8">
            <h4 className="text-[11px] font-semibold uppercase text-slate-500 mb-3 tracking-[0.2em]">Technology</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="px-3 py-1.5 text-sm rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.06] font-mono">{t}</span>
              ))}
            </div>
          </div>

          {(project.link || project.github) && (
            <div className="flex flex-wrap gap-3">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="flex-1 min-w-[150px] py-3 flex items-center justify-center gap-2 bg-white text-slate-950 rounded-xl font-semibold hover:bg-teal-300 transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 min-w-[150px] py-3 flex items-center justify-center gap-2 border border-white/12 text-slate-200 hover:bg-white/5 rounded-xl font-semibold transition-all">
                  <Github className="w-4 h-4" /> Code
                </a>
              )}
            </div>
          )}
          {!project.link && !project.github && (
            <p className="text-xs text-slate-600 italic">Proprietary — built for production at Dash.fi.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Approach icon map ───────────────────────────────────────────────────────
const ApproachIcon: React.FC<{ icon: string }> = ({ icon }) => {
  const cn = 'w-5 h-5';
  switch (icon) {
    case 'shield': return <ShieldCheck className={cn} />;
    case 'cycle': return <Layers className={cn} />;
    case 'check': return <Cloud className={cn} />;
    case 'users': return <GitBranch className={cn} />;
    default: return <Boxes className={cn} />;
  }
};

// ─── App ───────────────────────────────────────────────────────────────────────
const SECTION_IDS = ['hero', 'projects', 'skills', 'approach', 'experience', 'contact'];

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);
  const { progress, active } = useScrollState(SECTION_IDS);

  const projectsRef = useScrollReveal();
  const skillsRef = useScrollReveal();
  const approachRef = useScrollReveal();
  const experienceRef = useScrollReveal();
  const educationRef = useScrollReveal();
  const contactRef = useScrollReveal();

  const copyEmail = useCallback(() => {
    navigator.clipboard?.writeText(SOCIAL_LINKS.email).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen text-slate-100 bg-[#08090c]">
      <Navbar progress={progress} active={active} />

      <main>
        <Hero />
        <StatsRow />

        <div ref={projectsRef}>
          <Section
            id="projects"
            eyebrow="Selected work"
            title="Production systems, and the ideas behind them."
            subtitle="Fintech infrastructure I lead or own at Dash.fi, plus engineering projects that show how I think. Tap any card for detail."
          >
            <div className="grid md:grid-cols-2 gap-5">
              {PROJECTS.map((project, i) => (
                <div key={project.id} className={`reveal ${project.featured ? 'md:col-span-2' : ''}`} style={{ transitionDelay: `${i * 70}ms` }}>
                  <ProjectCard project={project} onClick={() => setActiveProject(project)} />
                </div>
              ))}
            </div>
          </Section>
        </div>

        <TechMarquee />

        <div ref={skillsRef}>
          <Section
            id="skills"
            eyebrow="Toolkit"
            title="What I build with."
            subtitle="A production toolkit for payments, distributed systems and the cloud infrastructure that runs them."
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SKILLS.map((group, i) => (
                <div
                  key={group.category}
                  onMouseMove={handleSpotlight}
                  className="spot card p-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="relative z-10">
                    <h4 className="text-sm font-semibold mb-4 text-white font-display flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 text-[13px] bg-white/[0.04] text-slate-400 rounded-md border border-white/[0.06] font-mono hover:text-teal-300 hover:border-teal-500/20 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div ref={approachRef}>
          <Section
            id="approach"
            eyebrow="How I work"
            title="Principles I hold under load."
            subtitle="The engineering values that hold up when real money and real customers are on the line."
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {APPROACH_CARDS.map((card, i) => (
                <div
                  key={card.title}
                  onMouseMove={handleSpotlight}
                  className="spot card group p-8"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="relative z-10">
                    <div className="mb-5 grid place-items-center w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/15 text-teal-300 group-hover:bg-teal-500/15 transition-colors">
                      <ApproachIcon icon={card.icon} />
                    </div>
                    <h3 className="text-lg font-bold mb-2.5 text-white font-display">{card.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div ref={experienceRef}>
          <Section
            id="experience"
            eyebrow="Trajectory"
            title="Growing ownership, every step."
            subtitle="From freelance builds to leading fintech product lines in production."
          >
            <div className="relative border-l border-white/10 ml-2 space-y-14">
              {EXPERIENCE.map((exp, i) => (
                <div key={exp.id} className="reveal relative pl-8 md:pl-10 group" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className={`absolute top-1.5 -left-[7px] w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${i === 0 ? 'bg-teal-400 border-teal-400 shadow-lg shadow-teal-500/40' : 'bg-[#08090c] border-white/25 group-hover:border-teal-400'}`} />

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white font-display">{exp.role}</h3>
                      <div className="text-teal-400 font-medium text-sm mt-0.5 flex items-center gap-2">
                        {exp.company}
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-500 font-normal inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="text-xs font-mono text-slate-500 whitespace-nowrap">{exp.period}</div>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {exp.highlights.map((point, j) => (
                      <li key={j} className="flex items-start text-slate-400 leading-relaxed text-sm">
                        <span className="mr-3 mt-[9px] w-1 h-1 bg-teal-400/70 rounded-full flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {exp.techStack && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-500 border border-white/[0.06]">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div ref={educationRef}>
          <Section id="education" eyebrow="Foundations" title="Education.">
            <div className="grid md:grid-cols-2 gap-5">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  onMouseMove={handleSpotlight}
                  className="spot card p-8"
                  style={{ transitionDelay: `${idx * 90}ms` }}
                >
                  <div className="relative z-10">
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h3 className="text-lg font-bold text-white font-display">{edu.school}</h3>
                      <span className="text-xs text-slate-500 font-mono whitespace-nowrap">{edu.period}</span>
                    </div>
                    <p className="text-sm font-medium text-teal-300 mb-4">{edu.degree}</p>
                    {edu.details && (
                      <p className="text-slate-400 text-sm leading-relaxed border-t border-white/[0.06] pt-4">{edu.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div ref={contactRef}>
          <Section id="contact" eyebrow="Contact">
            <div className="reveal relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent p-8 md:p-16">
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-500/[0.08] blur-[120px] pointer-events-none" />
              <div className="relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white font-display tracking-tight text-balance leading-[1.05]">
                    Building something in <span className="gradient-text">fintech</span>? Let&rsquo;s talk.
                  </h3>
                  <p className="text-slate-400 mt-5 mb-8 leading-relaxed max-w-lg text-pretty">
                    Open to senior roles in payments and distributed systems, and to interesting
                    collaborations. Based in Nairobi, working remotely with a US team — I&rsquo;m comfortable
                    across time zones.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a href={`mailto:${SOCIAL_LINKS.email}`} className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-slate-950 font-semibold hover:bg-teal-300 transition-colors">
                      <Mail className="w-4 h-4" /> Email me
                      <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <button
                      onClick={copyEmail}
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-white/12 text-slate-200 font-medium hover:bg-white/5 hover:border-white/25 transition-all"
                    >
                      {copied ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                      <span className="font-mono text-sm">{copied ? 'Copied' : SOCIAL_LINKS.email}</span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" onMouseMove={handleSpotlight} className="spot card group flex items-center justify-between p-5">
                    <span className="relative z-10 flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-teal-300" />
                      <span className="text-white font-medium">LinkedIn</span>
                    </span>
                    <ArrowUpRight className="relative z-10 w-4 h-4 text-slate-500 group-hover:text-teal-300 transition-colors" />
                  </a>
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" onMouseMove={handleSpotlight} className="spot card group flex items-center justify-between p-5">
                    <span className="relative z-10 flex items-center gap-3">
                      <Github className="w-5 h-5 text-teal-300" />
                      <span className="text-white font-medium">GitHub</span>
                    </span>
                    <ArrowUpRight className="relative z-10 w-4 h-4 text-slate-500 group-hover:text-teal-300 transition-colors" />
                  </a>
                  <div className="card flex items-center gap-3 p-5">
                    <MapPin className="w-5 h-5 text-teal-300" />
                    <span className="text-slate-300">Nairobi, Kenya · Remote</span>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>

      <footer className="border-t border-white/[0.05] py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-8 h-8 rounded-lg border border-white/10 bg-white/[0.03] font-display font-bold text-xs text-white">EA</span>
            <span className="text-sm text-slate-500">Senior Software Engineer · Fintech</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#projects" className="text-slate-500 hover:text-white transition-colors">Work</a>
            <a href="#experience" className="text-slate-500 hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="text-slate-500 hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-xs text-slate-600 font-mono">© {new Date().getFullYear()} Erick Aboge</div>
        </div>
      </footer>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </div>
  );
}
