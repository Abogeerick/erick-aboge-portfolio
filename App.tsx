import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  FileDown, 
  Menu, 
  X, 
  ExternalLink, 
  Code2, 
  Database, 
  Layout, 
  Server,
  Terminal,
  BarChart3,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Section } from './components/Section';
import { MetricCard } from './components/MetricCard';
import { ThemeToggle } from './components/ThemeToggle';
import { EXPERIENCE, PROJECTS, SKILLS, EDUCATION, SOCIAL_LINKS } from './constants';
import { Project } from './types';

// Simple Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-xl font-bold tracking-tighter hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
            EA<span className="text-amber-400">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-teal-700 dark:hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
            <a 
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-teal-900 dark:bg-teal-700 text-white text-sm font-semibold hover:bg-teal-800 dark:hover:bg-teal-600 transition-colors shadow-lg shadow-teal-900/20"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 dark:text-slate-200"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 px-6 py-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="block text-lg font-medium py-2 border-b border-slate-100 dark:border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-teal-900/10 dark:bg-teal-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-400/10 dark:bg-amber-400/5 blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-100/50 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-sm font-medium mb-6 border border-teal-200 dark:border-teal-700/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span>Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Building <span className="text-teal-800 dark:text-teal-400">Digital</span> <br/>
            <span className="relative inline-block">
              Excellence
              <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-400/30 -z-10 skew-x-12"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            Results-driven Full Stack Developer with over 4 years of experience engineering secure, scalable web applications with React, Node.js, and Django.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {['React', 'TypeScript', 'Node.js', 'Django', 'PostgreSQL'].map(tech => (
              <span key={tech} className="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded-md text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects"
              className="px-8 py-4 rounded-xl bg-teal-900 dark:bg-teal-600 text-white font-bold text-center hover:bg-teal-800 dark:hover:bg-teal-500 transition-all shadow-xl shadow-teal-900/20 flex items-center justify-center gap-2"
            >
              View Work <ChevronRight className="w-4 h-4" />
            </a>
            <button 
              onClick={() => window.print()} 
              className="px-8 py-4 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold text-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4" /> Download Resume
            </button>
          </div>
        </div>

        {/* Visual / Illustration Area */}
        <div className="relative hidden md:block">
          <div className="relative z-10 bg-slate-900 rounded-2xl p-2 shadow-2xl border border-slate-800 rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="bg-slate-950 rounded-xl overflow-hidden p-6 border border-slate-800/50">
              <div className="flex space-x-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex">
                  <span className="text-purple-400 mr-2">const</span>
                  <span className="text-yellow-200">developer</span>
                  <span className="text-white mx-2">=</span>
                  <span className="text-blue-400">{`{`}</span>
                </div>
                <div className="pl-6 text-slate-300">
                  <div className="flex"><span className="text-red-300 mr-2">name:</span> <span className="text-green-300">'Erick Aboge'</span>,</div>
                  <div className="flex"><span className="text-red-300 mr-2">role:</span> <span className="text-green-300">'Full Stack Engineer'</span>,</div>
                  <div className="flex"><span className="text-red-300 mr-2">skills:</span> <span className="text-blue-300">['React', 'Node', 'Django']</span>,</div>
                  <div className="flex"><span className="text-red-300 mr-2">hardWorker:</span> <span className="text-amber-300">true</span></div>
                </div>
                <div className="text-blue-400">{`};`}</div>
                <div className="h-4"></div>
                <div className="flex">
                  <span className="text-purple-400 mr-2">await</span>
                  <span className="text-blue-300">developer</span>
                  <span className="text-white">.</span>
                  <span className="text-yellow-200">deploy</span>
                  <span className="text-white">();</span>
                </div>
                <div className="text-slate-500">// Ready to ship production code</div>
              </div>
            </div>
          </div>
          {/* Background Card Overlay */}
          <div className="absolute top-10 left-10 w-full h-full bg-teal-900/10 rounded-2xl border border-teal-500/20 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

// Skills Data Viz
const SkillsChart = () => {
  const data = [
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'Django', level: 80 },
    { name: 'TypeScript', level: 90 },
    { name: 'SQL/NoSQL', level: 85 },
  ];

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
          <XAxis type="number" hide />
          <YAxis 
            dataKey="name" 
            type="category" 
            width={80} 
            tick={{ fill: '#94a3b8', fontSize: 12 }} 
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff' }}
          />
          <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#0d9488' : '#05595B'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Project Details Modal
const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col md:flex-row animate-fadeIn">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 bg-black/10 dark:bg-white/10 rounded-full hover:bg-black/20 dark:hover:bg-white/20 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-200 dark:bg-slate-800 relative">
          <img 
            src={project.imagePlaceholder} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
            <span className="px-3 py-1 bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-8 md:p-12 w-full md:w-1/2">
          <h3 className="text-3xl font-bold mb-4 font-display text-slate-900 dark:text-white">{project.title}</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            {project.longDescription || project.description}
          </p>
          
          <div className="mb-8">
            <h4 className="text-sm font-bold uppercase text-slate-400 mb-3 tracking-wider">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(t => (
                <span key={t} className="px-3 py-1 text-sm rounded-md bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border border-teal-100 dark:border-teal-800">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 py-3 flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 py-3 flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors"
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

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      
      <main>
        <Hero />

        {/* Metrics Section */}
        <div className="bg-white dark:bg-slate-900/50 relative z-20 -mt-10 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard 
              label="Experience" 
              value="4+ Years" 
              icon={<Terminal className="w-6 h-6" />} 
              description="Full Stack Engineering"
            />
            <MetricCard 
              label="Efficiency" 
              value="+25%" 
              icon={<BarChart3 className="w-6 h-6" />} 
              description="Operational Improvement"
            />
            <MetricCard 
              label="Scale" 
              value="10k+" 
              icon={<Database className="w-6 h-6" />} 
              description="Records Handled"
            />
            <MetricCard 
              label="Security" 
              value="100%" 
              icon={<ShieldCheck className="w-6 h-6" />} 
              description="JWT & OAuth Standards"
            />
          </div>
        </div>

        {/* Skills Section */}
        <Section id="skills" title="Technical Arsenal" subtitle="A comprehensive toolkit for building modern, scalable web applications.">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code2 className="text-amber-400" /> Frontend Mastery
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Expertise in creating pixel-perfect, accessible user interfaces with a focus on performance and mobile-first design.
              </p>
              <SkillsChart />
            </div>
            
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
              {SKILLS.map((skillGroup) => (
                <div key={skillGroup.category} className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5">
                  <h4 className="text-lg font-bold mb-4 text-teal-800 dark:text-teal-400">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Professional Journey" subtitle="Delivering impactful solutions across various industries." className="bg-white/50 dark:bg-black/20">
          <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 md:ml-6 space-y-12">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="relative pl-8 md:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute top-2 left-[-9px] w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-teal-500 group-hover:scale-125 transition-transform" />
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <div className="text-teal-700 dark:text-teal-400 font-medium">{exp.company}</div>
                  </div>
                  <div className="text-sm font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {exp.techStack && (
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map(tech => (
                      <span key={tech} className="text-xs font-semibold px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Featured Work" subtitle="A selection of professional and freelance projects." className="">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div 
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group cursor-pointer rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-teal-900/20 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.imagePlaceholder} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-teal-500 transition-colors">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map(t => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400">
                        {t}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs px-2 py-1 text-slate-400">+ {project.techStack.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education & Certifications" className="bg-slate-100 dark:bg-slate-800/30">
           <div className="grid md:grid-cols-2 gap-6">
             {EDUCATION.map((edu, idx) => (
               <div key={idx} className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm">
                 <h3 className="text-xl font-bold text-teal-800 dark:text-teal-400 mb-2">{edu.school}</h3>
                 <p className="text-lg font-medium text-slate-900 dark:text-white mb-2">{edu.degree}</p>
                 <p className="text-sm text-slate-500 mb-4 font-mono">{edu.period}</p>
                 {edu.details && (
                   <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                     {edu.details}
                   </p>
                 )}
               </div>
             ))}
           </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Get In Touch" subtitle="Open to full-time opportunities and freelance contracts.">
          <div className="bg-teal-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4" />
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h3 className="text-3xl font-bold mb-6">Let's build something amazing together.</h3>
                <p className="text-teal-100 mb-8 leading-relaxed text-lg">
                  I am currently available for new projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="space-y-6">
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center space-x-4 hover:text-amber-400 transition-colors">
                    <div className="p-3 bg-white/10 rounded-full">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="text-lg">{SOCIAL_LINKS.email}</span>
                  </a>
                  
                  <a href={`tel:${SOCIAL_LINKS.phone}`} className="flex items-center space-x-4 hover:text-amber-400 transition-colors">
                     <div className="p-3 bg-white/10 rounded-full">
                      <Phone className="w-6 h-6" />
                    </div>
                    <span className="text-lg">{SOCIAL_LINKS.phone}</span>
                  </a>

                  <div className="flex gap-4 mt-8">
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-teal-100 mb-1">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-teal-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-teal-100 mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-teal-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-teal-100 mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-teal-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-amber-400 text-slate-900 font-bold rounded-lg hover:bg-amber-300 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm">
            © {new Date().getFullYear()} Erick Aboge. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
             <a href="#hero" className="hover:text-white transition-colors">Home</a>
             <a href="#projects" className="hover:text-white transition-colors">Work</a>
             <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </div>
  );
}
