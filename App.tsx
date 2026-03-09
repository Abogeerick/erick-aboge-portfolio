import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  FileDown,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
  ArrowUpRight,
  RefreshCw,
  Shield,
  CheckCircle2,
  Users,
  Sparkles,
  Terminal,
  Cloud,
  Zap,
  ChevronDown,
} from 'lucide-react';
import { Section } from './components/Section';
import { ThemeToggle } from './components/ThemeToggle';
import { EXPERIENCE, PROJECTS, SKILLS, EDUCATION, SOCIAL_LINKS, APPROACH_CARDS } from './constants';
import { Project } from './types';

// ─── Scroll Reveal Hook ─────────────────────────────────────────────────────
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return ref;
};

// ─── Animated Counter ────────────────────────────────────────────────────────
const AnimatedCounter: React.FC<{ end: string; duration?: number }> = ({ end, duration = 2000 }) => {
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
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            setCount(current + suffix);
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(end);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
};

// ─── Particle Background ─────────────────────────────────────────────────────
const ParticleField: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-teal-500/10"
          style={{
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animation: `float ${Math.random() * 6 + 4}s ease-in-out ${Math.random() * 4}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

// ─── Navigation ──────────────────────────────────────────────────────────────
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Approach', href: '#approach' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ${scrolled
        ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="relative group">
            <span className="text-2xl font-bold tracking-tighter font-display">
              EA<span className="text-amber-400">.</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-amber-400 group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-teal-400 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </a>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 text-white text-sm font-semibold hover:from-teal-500 hover:to-teal-600 transition-all shadow-lg shadow-teal-900/30 hover:shadow-teal-900/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-slate-950/95 backdrop-blur-xl border-b border-white/5 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
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
            className="block mt-4 px-4 py-3 text-center bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

// ─── Hero Section ────────────────────────────────────────────────────────────
const Hero: React.FC = () => {
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTypingComplete(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-20 px-6 overflow-hidden grid-pattern">
      <ParticleField />

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-600/8 blur-[150px] rounded-full -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-400/5 blur-[120px] rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-purple-500/3 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Content */}
        <div className="animate-slide-up">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass text-teal-300 text-sm font-medium mb-8 border border-teal-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
            </span>
            <span>Available for new opportunities</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight font-display">
            Full-Cycle{' '}
            <br className="hidden sm:block" />
            <span className="gradient-text">Software</span>{' '}
            <br className="hidden sm:block" />
            Engineer
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
            I build software from architecture to production. End-to-end ownership of enterprise systems —
            frontend, backend, infrastructure, deployment. Whether owning a project independently or
            collaborating in a team, I deliver systems that scale and last.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {['React', 'TypeScript', 'Node.js', 'Django', 'AWS', 'Docker'].map(tech => (
              <span key={tech} className="px-3 py-1.5 glass rounded-lg text-sm font-mono text-slate-300 border border-white/5 hover:border-teal-500/30 hover:text-teal-300 transition-all cursor-default">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold text-center hover:from-teal-500 hover:to-teal-600 transition-all shadow-xl shadow-teal-900/30 hover:shadow-teal-900/50 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
            >
              View My Work
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Aboge_Erick_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-xl glass text-white border border-white/10 font-bold text-center hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileDown className="w-4 h-4" /> Resume
            </a>
          </div>
        </div>

        {/* Right: Code Terminal */}
        <div className="relative hidden lg:block animate-slide-up-delayed">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 hover:border-white/15 transition-colors duration-500">
            {/* Terminal Header */}
            <div className="bg-slate-900/90 px-5 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-400 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 transition-colors"></div>
              </div>
              <span className="text-xs font-mono text-slate-500">engineer.config.ts</span>
              <div className="w-12"></div>
            </div>

            {/* Terminal Body */}
            <div className="bg-slate-950/95 p-6 md:p-8 font-mono text-sm md:text-[13px] leading-relaxed">
              <div className="space-y-1">
                <div className="flex flex-wrap">
                  <span className="text-purple-400">const </span>
                  <span className="text-amber-200">engineer</span>
                  <span className="text-white mx-1">=</span>
                  <span className="text-slate-400">{'{'}</span>
                </div>
                <div className="pl-6">
                  <div><span className="text-teal-300">name:</span> <span className="text-green-300">'Erick Aboge'</span><span className="text-slate-500">,</span></div>
                  <div><span className="text-teal-300">focus:</span> <span className="text-green-300">'Full-Cycle Development'</span><span className="text-slate-500">,</span></div>
                  <div className="flex flex-wrap">
                    <span className="text-teal-300">cycle:</span>
                    <span className="text-slate-400 ml-1">[</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-300">'Architecture'</span><span className="text-slate-500">,</span>{' '}
                    <span className="text-green-300">'Development'</span><span className="text-slate-500">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-300">'Testing'</span><span className="text-slate-500">,</span>{' '}
                    <span className="text-green-300">'Deployment'</span><span className="text-slate-500">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-300">'Monitoring'</span>
                  </div>
                  <div><span className="text-slate-400">]</span><span className="text-slate-500">,</span></div>
                  <div className="flex flex-wrap">
                    <span className="text-teal-300">environment:</span>
                    <span className="text-slate-400 ml-1">[</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-300">'Independent Ownership'</span><span className="text-slate-500">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-300">'Team Collaboration'</span>
                  </div>
                  <div><span className="text-slate-400">]</span><span className="text-slate-500">,</span></div>
                  <div><span className="text-teal-300">ships:</span> <span className="text-green-300">'Production Systems'</span></div>
                </div>
                <div className="text-slate-400">{'};'}</div>
                <div className="h-3"></div>
                <div className="flex flex-wrap">
                  <span className="text-purple-400">await </span>
                  <span className="text-amber-200">engineer</span>
                  <span className="text-white">.</span>
                  <span className="text-blue-300">deployToProduction</span>
                  <span className="text-white">();</span>
                </div>
                <div className={`text-slate-500 ${typingComplete ? 'opacity-100' : 'opacity-50'} transition-opacity`}>
                  // From concept to live system
                </div>
                {typingComplete && (
                  <div className="flex items-center gap-2 mt-2 text-green-400/70 animate-fade-in">
                    <CheckCircle2 className="w-3 h-3" />
                    <span className="text-xs">Successfully deployed to production</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-8 left-8 w-full h-full rounded-2xl border border-teal-500/10 -z-10"></div>
          <div className="absolute top-16 left-16 w-full h-full rounded-2xl border border-teal-500/5 -z-20"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-slate-500 font-mono">scroll</span>
        <ChevronDown className="w-4 h-4 text-slate-500" />
      </div>
    </section>
  );
};

// ─── Stats Row ───────────────────────────────────────────────────────────────
const StatsRow: React.FC = () => {
  const containerRef = useScrollReveal();

  const stats = [
    { value: "3+", label: "Years", description: "Production Experience", icon: <Terminal className="w-5 h-5" /> },
    { value: "Full Cycle", label: "", description: "Architecture → Deployment", icon: <RefreshCw className="w-5 h-5" /> },
    { value: "5", label: "AWS Services", description: "Production Infrastructure", icon: <Cloud className="w-5 h-5" /> },
    { value: "90%", label: "", description: "Error Reduction (Payments)", icon: <Zap className="w-5 h-5" /> },
  ];

  return (
    <div ref={containerRef} className="relative z-20 -mt-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="reveal group relative p-6 rounded-2xl glass border border-white/5 hover:border-teal-500/20 transition-all duration-500 overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-teal-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-teal-500/10 transition-colors" />
              <div className="relative z-10">
                <div className="text-teal-400/60 mb-3 group-hover:text-teal-400 transition-colors">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight font-display">
                  {stat.value.includes('%') || stat.value.includes('+')
                    ? <AnimatedCounter end={stat.value} />
                    : stat.value
                  }
                  {stat.label && <span className="text-lg ml-1 text-slate-400 font-normal">{stat.label}</span>}
                </div>
                <div className="text-sm text-slate-500 font-medium">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Badge Color Map ─────────────────────────────────────────────────────────
const badgeColors: Record<string, string> = {
  green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
};

// ─── Project Card ────────────────────────────────────────────────────────────
const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-2xl glass border border-white/5 overflow-hidden hover:border-teal-500/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-900/10 ${project.featured ? 'lg:col-span-2 lg:row-span-1 featured-glow' : ''
        }`}
    >
      {/* Top badge strip */}
      <div className="px-6 pt-5 pb-0">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${badgeColors[project.badgeColor]}`}>
          {project.badge}
        </span>
      </div>

      <div className={`p-6 ${project.featured ? 'lg:flex lg:gap-8' : ''}`}>
        <div className={`${project.featured ? 'lg:flex-1' : ''}`}>
          <h3 className="text-xl md:text-2xl font-bold mb-1 text-white group-hover:text-teal-400 transition-colors font-display">
            {project.title}
          </h3>
          <p className="text-sm text-slate-500 mb-3 font-medium">{project.subtitle}</p>
          <p className="text-slate-400 text-sm mb-5 leading-relaxed line-clamp-3">
            {project.featured ? project.longDescription : project.description}
          </p>

          {/* Key Point */}
          <div className="flex items-center gap-2 mb-5 px-3 py-2 rounded-lg bg-teal-500/5 border border-teal-500/10">
            <Sparkles className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
            <span className="text-xs font-medium text-teal-300">{project.keyPoint}</span>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.techStack.map(t => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5 font-mono">
                {t}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-teal-600/20 text-teal-300 border border-teal-500/20 hover:bg-teal-600/30 hover:border-teal-500/40 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <Github className="w-3.5 h-3.5" /> Code
              </a>
            )}
            {!project.github && !project.link && (
              <span className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-500 italic">
                Enterprise client project — code private
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Project Detail Modal ────────────────────────────────────────────────────
const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl glass border border-white/10 shadow-2xl animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors z-10"
        >
          <X className="w-4 h-4 text-slate-400" />
        </button>

        <div className="p-8 md:p-10">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${badgeColors[project.badgeColor]}`}>
            {project.badge}
          </span>

          <h3 className="text-3xl font-bold mb-1 text-white font-display">{project.title}</h3>
          <p className="text-slate-500 font-medium mb-6">{project.subtitle}</p>

          <p className="text-slate-300 mb-8 leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Key Highlight */}
          <div className="flex items-center gap-2 mb-8 px-4 py-3 rounded-xl bg-teal-500/5 border border-teal-500/10">
            <Sparkles className="w-4 h-4 text-teal-400 flex-shrink-0" />
            <span className="text-sm font-medium text-teal-300">{project.keyPoint}</span>
          </div>

          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase text-slate-500 mb-3 tracking-widest">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(t => (
                <span key={t} className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-slate-300 border border-white/5 font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[150px] py-3 flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white rounded-xl font-medium transition-all shadow-lg shadow-teal-900/20"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[150px] py-3 flex items-center justify-center gap-2 border border-white/10 text-slate-300 hover:bg-white/5 rounded-xl font-medium transition-all"
              >
                <Github className="w-4 h-4" /> View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Approach Icon Map ───────────────────────────────────────────────────────
const ApproachIcon: React.FC<{ icon: string }> = ({ icon }) => {
  const className = "w-6 h-6";
  switch (icon) {
    case 'cycle': return <RefreshCw className={className} />;
    case 'shield': return <Shield className={className} />;
    case 'check': return <CheckCircle2 className={className} />;
    case 'users': return <Users className={className} />;
    default: return <Sparkles className={className} />;
  }
};

// ─── Main App ────────────────────────────────────────────────────────────────
export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const projectsRef = useScrollReveal();
  const skillsRef = useScrollReveal();
  const approachRef = useScrollReveal();
  const experienceRef = useScrollReveal();
  const educationRef = useScrollReveal();
  const contactRef = useScrollReveal();

  return (
    <div className="min-h-screen text-slate-100 bg-slate-950 transition-colors duration-300">
      <Navbar />

      <main>
        <Hero />
        <StatsRow />

        {/* ─── Projects Section ─────────────────────────────────────── */}
        <div ref={projectsRef}>
          <Section
            id="projects"
            title="Featured Work"
            subtitle="Production systems, technical deep-dives, and collaborative projects — each demonstrating a different strength."
          >
            <div className="grid md:grid-cols-2 gap-6">
              {PROJECTS.map((project, i) => (
                <div key={project.id} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <ProjectCard
                    project={project}
                    onClick={() => setActiveProject(project)}
                  />
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* ─── Skills Section ───────────────────────────────────────── */}
        <div ref={skillsRef}>
          <Section
            id="skills"
            title="Technologies I Ship With"
            subtitle="A production-ready toolkit across the full stack."
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILLS.map((skillGroup, i) => (
                <div
                  key={skillGroup.category}
                  className={`reveal p-6 rounded-2xl glass border border-white/5 hover:border-teal-500/15 transition-all duration-500 ${i === SKILLS.length - 1 && SKILLS.length % 3 === 1 ? 'lg:col-start-2' : ''
                    }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <h4 className="text-lg font-bold mb-4 text-teal-400 font-display">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm bg-white/5 text-slate-300 rounded-lg border border-white/5 font-mono hover:border-teal-500/20 hover:text-teal-300 transition-all cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* ─── Development Approach Section ──────────────────────────── */}
        <div ref={approachRef}>
          <Section
            id="approach"
            title="My Development Approach"
            subtitle="How I think about building software that lasts."
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {APPROACH_CARDS.map((card, i) => (
                <div
                  key={card.title}
                  className="reveal group p-8 rounded-2xl glass border border-white/5 hover:border-teal-500/15 transition-all duration-500 relative overflow-hidden"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-teal-500/10 transition-colors duration-500" />
                  <div className="relative z-10">
                    <div className="mb-5 p-3 rounded-xl bg-teal-500/10 border border-teal-500/10 inline-block text-teal-400 group-hover:bg-teal-500/15 transition-colors">
                      <ApproachIcon icon={card.icon} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white font-display group-hover:text-teal-400 transition-colors">{card.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* ─── Experience Section ────────────────────────────────────── */}
        <div ref={experienceRef}>
          <Section
            id="experience"
            title="Professional Journey"
            subtitle="From freelance to full-time — growing ownership at every step."
          >
            <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
              {EXPERIENCE.map((exp, i) => (
                <div key={exp.id} className="reveal relative pl-8 md:pl-12 group" style={{ transitionDelay: `${i * 100}ms` }}>
                  {/* Timeline Dot */}
                  <div className="absolute top-2 left-[-5px] w-2.5 h-2.5 rounded-full bg-teal-500 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-teal-500/30 transition-all duration-300" />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white font-display">{exp.role}</h3>
                      <div className="text-teal-400 font-medium">{exp.company}</div>
                    </div>
                    <div className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1.5 rounded-full mt-2 sm:mt-0 w-fit border border-white/5">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((point, j) => (
                      <li key={j} className="flex items-start text-slate-400 leading-relaxed text-sm">
                        <span className="mr-3 mt-2 w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {exp.techStack && (
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map(tech => (
                        <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-500 border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* ─── Education Section ─────────────────────────────────────── */}
        <div ref={educationRef}>
          <Section id="education" title="Education & Certifications">
            <div className="grid md:grid-cols-2 gap-6">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="reveal p-8 rounded-2xl glass border border-white/5 hover:border-teal-500/15 transition-all duration-500"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <h3 className="text-xl font-bold text-teal-400 mb-2 font-display">{edu.school}</h3>
                  <p className="text-lg font-medium text-white mb-2">{edu.degree}</p>
                  <p className="text-xs text-slate-500 font-mono mb-4 bg-white/5 inline-block px-3 py-1 rounded-full border border-white/5">{edu.period}</p>
                  {edu.details && (
                    <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* ─── Contact Section ───────────────────────────────────────── */}
        <div ref={contactRef}>
          <Section id="contact" title="Get In Touch" subtitle="Open to full-time opportunities and collaborative projects.">
            <div className="reveal rounded-3xl overflow-hidden relative">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-teal-700/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4" />

              <div className="relative z-10 p-8 md:p-16">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white font-display">
                      Let's build something <span className="text-amber-400">amazing</span> together.
                    </h3>
                    <p className="text-teal-100/80 mb-8 leading-relaxed text-lg">
                      I'm currently available for new projects. Whether you need end-to-end development or collaborative team augmentation, let's talk.
                    </p>

                    <div className="space-y-5">
                      <a href={`mailto:${SOCIAL_LINKS.email}`} className="group flex items-center space-x-4 hover:translate-x-2 transition-all">
                        <div className="p-3 bg-white/10 rounded-xl border border-white/5 group-hover:bg-white/15 group-hover:border-white/10 transition-colors">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-teal-200/60 uppercase tracking-wider mb-0.5">Email</div>
                          <span className="text-white font-medium">{SOCIAL_LINKS.email}</span>
                        </div>
                      </a>

                      <a href={`tel:${SOCIAL_LINKS.phone}`} className="group flex items-center space-x-4 hover:translate-x-2 transition-all">
                        <div className="p-3 bg-white/10 rounded-xl border border-white/5 group-hover:bg-white/15 group-hover:border-white/10 transition-colors">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-teal-200/60 uppercase tracking-wider mb-0.5">Phone</div>
                          <span className="text-white font-medium">{SOCIAL_LINKS.phone}</span>
                        </div>
                      </a>

                      <div className="flex gap-3 mt-8">
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-xl border border-white/5 hover:bg-white/15 hover:border-white/10 transition-all hover:-translate-y-1 hover:shadow-lg">
                          <Github className="w-5 h-5 text-white" />
                        </a>
                        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-xl border border-white/5 hover:bg-white/15 hover:border-white/10 transition-all hover:-translate-y-1 hover:shadow-lg">
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-semibold text-teal-200/60 uppercase tracking-wider mb-2">Name</label>
                        <input
                          type="text"
                          id="contact-name"
                          className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-teal-200/30 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50 transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-semibold text-teal-200/60 uppercase tracking-wider mb-2">Email</label>
                        <input
                          type="email"
                          id="contact-email"
                          className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-teal-200/30 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50 transition-all"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-message" className="block text-xs font-semibold text-teal-200/60 uppercase tracking-wider mb-2">Message</label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-teal-200/30 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50 transition-all resize-none"
                          placeholder="Tell me about your project..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-900/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                      >
                        Send Message <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>

      {/* ─── Footer ──────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold tracking-tighter font-display">
              EA<span className="text-amber-400">.</span>
            </span>
            <span className="text-sm text-slate-500">
              Building production systems — from architecture to deployment.
            </span>
          </div>
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#hero" className="text-slate-500 hover:text-white transition-colors">Home</a>
            <a href="#projects" className="text-slate-500 hover:text-white transition-colors">Work</a>
            <a href="#experience" className="text-slate-500 hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="text-slate-500 hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} Erick Aboge. All rights reserved.
          </div>
        </div>
      </footer>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </div>
  );
}
