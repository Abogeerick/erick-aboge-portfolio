import { Experience, Project, Skill, Education, ApproachCard } from './types';

export const SOCIAL_LINKS = {
  email: "abogeerick@gmail.com",
  phone: "+254 790 564 507",
  linkedin: "https://www.linkedin.com/in/erick-aboge-3a09572a6/",
  github: "https://github.com/Abogeerick",
};

export const SKILLS: Skill[] = [
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express", "Django", "Python", "C# .NET Core", "REST APIs", "PostgreSQL", "MySQL", "Redis"]
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "TailwindCSS", "Zustand", "Framer Motion"]
  },
  {
    category: "Infrastructure & DevOps",
    items: ["Docker", "AWS App Runner", "AWS Amplify", "AWS RDS", "AWS S3", "AWS SES", "GitHub Actions", "CI/CD", "Linux"]
  },
  {
    category: "AI & Machine Learning",
    items: ["LangChain", "LLM Integration", "AI Agents", "Transformers.js", "RAG Pipelines"]
  },
  {
    category: "Architecture & Patterns",
    items: ["Clean Architecture", "Domain-Driven Design", "RBAC", "Multi-tenancy", "Payment Integration", "Microservices"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    role: "Full Stack Software Engineer",
    company: "Optiven Limited",
    location: "Nairobi, Kenya",
    period: "December 2024 – Present",
    highlights: [
      "Architected and deployed enterprise CRM managing 10,000+ customer records with server-side pagination reducing query time by 40%",
      "Built frontend for HRMS Performance Module in collaboration with 5-person backend team, implementing 8-state approval workflow across departments",
      "Owned full development lifecycle for ESG Reporting Platform — from architecture through AWS production deployment (Amplify, App Runner, RDS, S3, SES)",
      "Containerized applications with Docker ensuring consistent environments across development and production"
    ],
    techStack: ["React", "Django", ".NET", "PostgreSQL", "Docker", "AWS"]
  },
  {
    id: "exp-2",
    role: "Contract Software Developer",
    company: "Optiven Limited",
    location: "Nairobi, Kenya",
    period: "August 2024 – December 2024",
    highlights: [
      "Designed and deployed workforce compliance system end-to-end, replacing manual Excel processes for 150+ employees",
      "Led M-Pesa payment integration handling real transactions — designed for failure with 90% reduction in reconciliation errors",
      "Implemented RBAC system with automated email notifications, collaborating with HR stakeholders on requirements",
      "Owned full development lifecycle from requirements gathering through production deployment"
    ],
    techStack: ["React", "Node.js", "Express", "MySQL", "Django"]
  },
  {
    id: "exp-3",
    role: "Software Developer (Contract)",
    company: "GMC Kitengela",
    location: "Kajiado, Kenya",
    period: "January 2024 – August 2024",
    highlights: [
      "Engineered end-to-end Procurement Module for a custom Point of Sale system using React and Django",
      "Digitized complex supply chain workflows: Store Requisition → RFQ → Bid Analysis → Purchase Order → GRN → Invoice",
      "Streamlined procurement process, reducing approval turnaround time and improving inventory accuracy"
    ],
    techStack: ["React", "Django", "PostgreSQL"]
  },
  {
    id: "exp-4",
    role: "Junior Software Developer",
    company: "Freelance (Upwork)",
    location: "Remote",
    period: "November 2022 – January 2024",
    highlights: [
      "Developed finance gateway applications using .NET for backend processing",
      "Built e-commerce and news websites with React frontends and RESTful APIs"
    ],
    techStack: [".NET", "React"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-esg",
    title: "Enterprise ESG Platform",
    subtitle: "ESG Reporting Platform",
    badge: "End-to-End Ownership • Production",
    badgeColor: "green",
    description: "Complete enterprise system for ESG data collection, two-level approval workflows, and PDF reporting.",
    longDescription: "Complete enterprise system for ESG data collection, two-level approval workflows, and PDF reporting. Owned the full development lifecycle — React frontend, Node.js backend, PostgreSQL database, AWS infrastructure (Amplify, App Runner, RDS, S3, SES). Handles 150+ KPIs with role-based access control.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", "GitHub Actions"],
    link: "https://main.dwt9oplenis7k.amplifyapp.com",
    keyPoint: "Full lifecycle: Architecture → Development → Testing → Deployment",
    featured: true
  },
  {
    id: "proj-minidb",
    title: "Relational Database From Scratch",
    subtitle: "MiniDB — Database Engine",
    badge: "Technical Deep-Dive • CS Fundamentals",
    badgeColor: "purple",
    description: "Built a working relational database to understand internals.",
    longDescription: "Built a working relational database to understand internals. Custom SQL lexer, recursive descent parser, query executor, B-tree indexing for performance. 49 automated tests ensuring correctness. Demonstrates understanding beyond framework abstractions.",
    techStack: ["Python", "pytest"],
    link: "https://n5t32y4qnz.eu-west-1.awsapprunner.com",
    github: "https://github.com/Abogeerick/minidb-complete-project",
    keyPoint: "Deep CS fundamentals • 49 tests"
  },
  {
    id: "proj-dwr",
    title: "Workforce Compliance System",
    subtitle: "Daily Work Register System",
    badge: "Full Stack • Production",
    badgeColor: "green",
    description: "Replaced manual Excel-based compliance tracking for entire workforce.",
    longDescription: "Replaced manual Excel-based compliance tracking for entire workforce. Full stack ownership — React/TypeScript frontend with role-based dashboards (Employee, Supervisor, HR), Node.js backend with automated email notifications for non-compliance.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
    keyPoint: "Full stack ownership • Automated compliance workflows"
  },
  {
    id: "proj-mpesa",
    title: "Real-Time Payment Gateway",
    subtitle: "M-Pesa Payment Integration",
    badge: "Fintech • Production",
    badgeColor: "amber",
    description: "Integrated mobile money payments for real estate company processing real transactions.",
    longDescription: "Integrated mobile money payments for real estate company processing real transactions. Designed for reliability: explicit timeouts, idempotent webhook handling, transaction state machine. Reduced reconciliation errors by 90%.",
    techStack: ["Django", "M-Pesa Daraja API", "Celery", "PostgreSQL"],
    keyPoint: "Real money • 90% error reduction • Failure-resilient design"
  },
  {
    id: "proj-nexus",
    title: "AI-Powered Financial Platform",
    subtitle: "Nexus Financial",
    badge: "Full Stack • AI Integration",
    badgeColor: "blue",
    description: "Personal finance management with M-Pesa transaction parsing and AI-powered categorization.",
    longDescription: "Personal finance management with M-Pesa transaction parsing, AI-powered categorization, and interactive analytics. Features smooth Framer Motion animations and dark mode support.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Framer Motion", "Transformers.js"],
    link: "https://nexus-app-plum.vercel.app",
    github: "https://github.com/Abogeerick/nexus-app",
    keyPoint: "AI categorization • Modern UI/UX"
  },
  {
    id: "proj-hrms",
    title: "Performance Appraisal System",
    subtitle: "HRMS Performance Module",
    badge: "Enterprise • Team Collaboration",
    badgeColor: "blue",
    description: "Built frontend for 8-state approval workflow handling employee performance reviews.",
    longDescription: "Built frontend for 8-state approval workflow handling employee performance reviews. Collaborated with backend team consuming Django REST APIs. Complex state management for multi-step approval processes across departments.",
    techStack: ["React", "TypeScript", "Django REST Framework"],
    keyPoint: "Team collaboration • Complex workflows"
  },
  {
    id: "proj-askweb",
    title: "LLM-Powered Research Agent",
    subtitle: "Ask the Web — AI Agent",
    badge: "AI/ML • Personal Project",
    badgeColor: "rose",
    description: "AI agent that searches the web in real-time and synthesizes answers using LangChain and LLMs.",
    longDescription: "AI agent that searches the web in real-time and synthesizes answers using LangChain and LLMs. Implements RAG (Retrieval-Augmented Generation) pipeline with citation tracking.",
    techStack: ["Python", "LangChain", "Streamlit", "Groq API"],
    github: "https://github.com/Abogeerick/Ask-the-web",
    keyPoint: "AI agents • RAG pipeline"
  },
  {
    id: "proj-crm",
    title: "Customer Relationship Management",
    subtitle: "CRM System",
    badge: "Enterprise • Professional",
    badgeColor: "green",
    description: "Built backend CRUD operations and frontend pagination for system managing 10,000+ customer records.",
    longDescription: "Built backend CRUD operations and frontend pagination for system managing 10,000+ customer records. Implemented server-side pagination and database indexing to handle large datasets efficiently.",
    techStack: ["Django", "React", "PostgreSQL"],
    keyPoint: "10,000+ records • Performance optimization"
  }
];

export const APPROACH_CARDS: ApproachCard[] = [
  {
    title: "Full-Cycle Ownership",
    description: "I see projects from architecture through deployment. Understanding the full lifecycle means I build systems that are deployable, maintainable, and scalable from day one.",
    icon: "cycle"
  },
  {
    title: "Reliability Engineering",
    description: "Design for failure before writing code. Timeouts, retries, idempotency, state tracking. Production systems must handle the unexpected.",
    icon: "shield"
  },
  {
    title: "Testing & CI/CD",
    description: "Automated tests and continuous integration aren't optional. I ship with confidence because the pipeline catches issues before users do.",
    icon: "check"
  },
  {
    title: "Team & Solo",
    description: "I thrive both ways — owning projects end-to-end when needed, or collaborating within team structures. The goal is shipping quality software.",
    icon: "users"
  }
];

export const EDUCATION: Education[] = [
  {
    school: "University of Nairobi",
    degree: "Bachelor of Commerce (Information Technology Specialization)",
    period: "Sept 2020 – Dec 2024",
    details: "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Computer Organization & Programming, Database Management Systems, Business Intelligence, Systems Analysis and Design, Management Information Systems, Statistics & Applications"
  },
  {
    school: "Moringa School",
    degree: "Certificate in Software Development",
    period: "May 2022 – Nov 2022",
    details: "Key Skills Acquired: Proficiency in full-stack development, covering both front-end and back-end programming, database management, and application deployment."
  }
];
