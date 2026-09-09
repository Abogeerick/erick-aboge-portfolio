import { Experience, Project, Skill, Education, ApproachCard } from './types';

export const SOCIAL_LINKS = {
  email: "abogeerick@gmail.com",
  phone: "+254 790 564 507",
  linkedin: "https://www.linkedin.com/in/erick-aboge-3a09572a6/",
  github: "https://github.com/Abogeerick",
};

export const SKILLS: Skill[] = [
  {
    category: "Languages",
    items: ["TypeScript", "Go", "Python", "C# .NET", "SQL"]
  },
  {
    category: "Backend & Distributed Systems",
    items: ["Node.js", "Fastify", "Django", "REST APIs", "PostgreSQL", "Event-Driven Architecture", "Idempotency", "Multi-Tenancy"]
  },
  {
    category: "Frontend",
    items: ["SvelteKit", "React", "Next.js", "TypeScript", "TailwindCSS"]
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS (Lambda, SQS, S3, SES, IAM)", "Terraform", "Docker", "CI/CD", "Gated Production Deploys"]
  },
  {
    category: "Fintech & Integrations",
    items: ["Corporate Cards", "AP Automation / Bill Pay", "Plaid", "Stytch B2B", "Rutter (QuickBooks / NetSuite)", "Middesk", "Heron", "Inngest", "Knock"]
  },
  {
    category: "AI & Machine Learning",
    items: ["AI Spend Intelligence", "Anomaly Detection", "LLM Integration", "RAG Pipelines", "LangChain"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-dashfi",
    role: "Senior Software Engineer",
    company: "Dash.fi (Umba Group)",
    location: "Remote — Austin, TX / Nairobi",
    period: "June 2026 – Present",
    highlights: [
      "Lead engineer on the AI Spend Agent — provider usage/cost ingestion, invoice-level billing reconciliation, a 13-detector anomaly engine, and budget-breach alerting (Inngest + Knock/SendGrid) with once-per-period delivery guarantees and server-side PDF audit reports",
      "Build the fintech core — corporate card transaction surfaces and admin tooling, AP draft-bill automation, approval workflows, and accounting integrations (QuickBooks/NetSuite via Rutter)",
      "Built invoice-ingestion infrastructure for bill pay — SES-forwarded inbound email and webhook-driven mailbox sync that classify billing emails by sender and route documents with content-hash deduplication",
      "Integrated banking and risk vendors — Plaid (account balances), Middesk (business verification), Heron (enrichment) — with response-shape guards so vendor degradation never breaks a customer request",
      "Implemented RBAC and user lifecycle on Stytch B2B with per-route permission enforcement at the API gateway, plus operator audit trails recorded as service events",
      "Own my services' infrastructure as code — Terraform across Lambda, SQS, S3, IAM and Postgres roles, with CI/CD and gated production deploys"
    ],
    techStack: ["TypeScript", "Go", "SvelteKit", "PostgreSQL", "AWS", "Terraform", "Inngest", "Stytch"]
  },
  {
    id: "exp-1",
    role: "Full Stack Software Engineer",
    company: "Optiven Limited",
    location: "Nairobi, Kenya",
    period: "December 2024 – June 2026",
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
    id: "proj-spend-agent",
    title: "AI Spend Agent",
    subtitle: "Dash.fi — Spend Intelligence (Lead Engineer)",
    badge: "Fintech • AI • Lead Engineer",
    badgeColor: "amber",
    description: "AI-powered spend intelligence: provider cost ingestion, invoice-level billing reconciliation, and a 13-detector anomaly engine.",
    longDescription: "Lead engineer on Dash.fi's newest product line. Ingests provider usage and cost data, reconciles it against invoice-level billing, and runs a 13-detector anomaly engine over the results. Budget-breach alerting is built on Inngest with Knock/SendGrid delivery and once-per-period guarantees, and findings are exported as server-side PDF audit reports.",
    techStack: ["TypeScript", "Node.js", "PostgreSQL", "Inngest", "Knock", "AWS Lambda"],
    keyPoint: "13-detector anomaly engine • once-per-period alerting • PDF audit reports",
    featured: true
  },
  {
    id: "proj-tenancy",
    title: "True Multi-Tenant Isolation in PostgreSQL",
    subtitle: "Dash.fi — Architecture Deep-Dive",
    badge: "Distributed Systems • Deep-Dive",
    badgeColor: "purple",
    description: "A Dual-Pool connection strategy with AsyncLocalStorage to guarantee tenant data sovereignty — beyond WHERE tenant_id = ?.",
    longDescription: "Engineered a Dual-Pool connection strategy backed by AsyncLocalStorage so tenant isolation is enforced at the connection layer rather than by a stray WHERE clause — turning a per-query discipline problem into a structural guarantee. Written up as a full architecture breakdown published on Medium.",
    techStack: ["TypeScript", "Node.js", "PostgreSQL", "AsyncLocalStorage"],
    link: "https://www.linkedin.com/in/erick-aboge-3a09572a6/",
    keyPoint: "Connection-level isolation • data sovereignty • published deep-dive"
  },
  {
    id: "proj-billpay",
    title: "Bill Pay Invoice Ingestion",
    subtitle: "Dash.fi — AP Automation Infrastructure",
    badge: "Fintech • Infrastructure",
    badgeColor: "green",
    description: "Inbound email and webhook mailbox pipelines that classify billing emails and route documents with content-hash deduplication.",
    longDescription: "Invoice-ingestion infrastructure powering AP automation: SES-forwarded inbound email and webhook-driven mailbox sync classify billing emails by sender and route documents into bill pay with content-hash deduplication. Banking and risk vendors (Plaid, Middesk, Heron) are integrated behind response-shape guards so vendor degradation never breaks a customer request.",
    techStack: ["TypeScript", "AWS SES", "AWS SQS", "PostgreSQL", "Terraform"],
    keyPoint: "Content-hash dedup • resilient vendor integrations",
  },
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
    keyPoint: "Full lifecycle: Architecture → Development → Testing → Deployment"
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
  }
];

export const APPROACH_CARDS: ApproachCard[] = [
  {
    title: "Design for failure",
    description: "In fintech the unhappy path is the product. I build with idempotency, explicit timeouts, retries and state machines so a vendor outage or a duplicate webhook degrades gracefully instead of corrupting money.",
    icon: "shield"
  },
  {
    title: "Isolation as a guarantee",
    description: "Correctness shouldn't depend on remembering a WHERE clause. I push tenant and permission boundaries down to the connection and gateway layers so isolation is structural, not a per-query discipline.",
    icon: "cycle"
  },
  {
    title: "Own the whole service",
    description: "Architecture, APIs, and the Terraform that runs them — Lambda, SQS, S3, IAM, Postgres roles — behind CI/CD with gated production deploys. I ship what I design and I operate what I ship.",
    icon: "check"
  },
  {
    title: "Boundaries that scale",
    description: "Event-driven domains, acyclic dependencies and typed contracts between services. I optimise for the team that maintains the code after me, not just the demo that ships today.",
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
