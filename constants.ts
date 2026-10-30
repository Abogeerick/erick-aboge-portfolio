import { Experience, Project, Skill, Education, ApproachCard } from './types';

export const SOCIAL_LINKS = {
  email: "abogeerick@gmail.com",
  phone: "+254 790 564 507",
  linkedin: "https://www.linkedin.com/in/erick-aboge-3a09572a6/",
  github: "https://github.com/Abogeerick",
};

export const CV_URL = "/Erick_Aboge_CV.pdf";

export const SKILLS: Skill[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Go", "Python", "C# .NET", "SQL"]
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "Fastify", "Django", "FastAPI", "PostgreSQL", "Row-Level Security", "Redis", "Prisma", "Event-Driven Architecture", "Idempotency", "Multi-Tenancy"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "SvelteKit", "TypeScript", "TailwindCSS", "Zustand", "Framer Motion"]
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS (Lambda, SQS, SNS, S3, RDS, SES, IAM)", "Google Cloud Run", "Terraform", "Docker", "GitHub Actions", "Gated Production Deploys", "Grafana / Loki"]
  },
  {
    category: "Fintech & Integrations",
    items: ["Corporate Cards", "Bill Pay / AP Automation", "M-Pesa Daraja", "Plaid", "Stytch B2B", "Rutter (QuickBooks / NetSuite)", "impact.com", "Shopify", "Middesk", "Heron", "Inngest", "Knock"]
  },
  {
    category: "AI Engineering",
    items: ["Claude API", "OpenAI", "Tool Use & Function Calling", "MCP / FastMCP", "AI Agents", "RAG Pipelines", "LangChain", "Anomaly Detection"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-dashfi",
    role: "Senior Software Engineer",
    company: "Dash.fi",
    location: "Remote (Austin, TX)",
    period: "June 2026 – Present",
    highlights: [
      "Own features end to end across the fintech core: card transaction surfaces and admin tooling, AP draft-bill automation, approval workflows and accounting integrations (QuickBooks/NetSuite via Rutter), from design through API, front end, tests, deployment and production support",
      "Lead engineer on the AI Spend Agent, the company's newest product line: provider usage and cost ingestion, invoice-level billing reconciliation, a 13-detector anomaly engine, budget-breach alerting (Inngest with Knock/SendGrid, once-per-period guarantees) and server-side PDF audit reports",
      "Engineering lead on the impact.com affiliate integration: server-side conversion tracking for marketplace referrals with consent-aware click attribution, idempotent event ids, retries and a daily reconcile job. Shipped to production and passed impact's technical review in October 2026",
      "Own ERP and vendor sync for Bill Pay (Net 30/60 vendor payments), and built its invoice-ingestion pipeline: SES-forwarded inbound email and webhook-driven mailbox sync that classify billing documents by sender and route them with content-hash deduplication",
      "Built v1 of a tariff-savings agent for e-commerce merchants, including Shopify store onboarding across the API, customer app and back office",
      "Integrated banking and risk vendors (Plaid balances, Middesk business verification, Heron enrichment) behind response-shape guards so vendor degradation never breaks a customer request; implemented RBAC and user lifecycle on Stytch B2B with per-route enforcement at the API gateway",
      "On the L3 engineering support rotation, root-causing production issues across the card processor, ledger and banking integrations, and reviewing pull requests across all three product codebases",
      "Own my services' infrastructure as code: Terraform across Lambda, SQS, SNS, S3, IAM and PostgreSQL roles, with gated production deploys and Grafana/Loki observability"
    ],
    techStack: ["TypeScript", "Go", "SvelteKit", "Fastify", "PostgreSQL", "AWS", "Terraform", "Inngest", "Stytch"]
  },
  {
    id: "exp-umba",
    role: "Senior Software Engineer",
    company: "Umba",
    location: "Remote (Nairobi)",
    period: "June 2026 – Present",
    highlights: [
      "Part of Umba Group's engineering organisation, currently assigned to the Dash.fi engineering team building global fintech products"
    ]
  },
  {
    id: "exp-carbon",
    role: "Co-Founder & Lead Engineer",
    company: "Carbon Corp Solutions",
    location: "Nairobi, Kenya",
    period: "September 2024 – Present",
    highlights: [
      "Took a multi-tenant enterprise SaaS platform from market opportunity to live production: market research, architecture, implementation, test strategy and AWS deployment, with no brief handed down",
      "Designed a 41-table PostgreSQL schema with Row-Level Security enforcing tenant isolation at the database level, plus a dual-pool connection strategy using AsyncLocalStorage; published the architecture as a technical write-up",
      "Built a configuration-driven form and workflow layer (150+ KPI data entry forms, a two-pass calculation engine and a two-level approval workflow with separation of duties) so new tenants and sectors are configured, not rebuilt",
      "Ran Docker containerisation, path-filtered GitHub Actions and unit/integration suites across AWS (App Runner, Amplify, RDS, S3, SES), with automated PDF board reporting"
    ],
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", "GitHub Actions"]
  },
  {
    id: "exp-optiven",
    role: "Full Stack Engineer",
    company: "Optiven Limited",
    location: "Nairobi, Kenya (Hybrid)",
    period: "August 2024 – May 2026",
    highlights: [
      "Joined on contract and converted to full-time in December 2024 on delivery quality. Owned the full lifecycle for internal platforms, from requirements with non-technical stakeholders to production: an HRMS performance module (8-state approval workflow for 150+ employees), a workforce compliance system and a CRM",
      "Architected a CRM over 10,000+ customer records in Django and React/TypeScript; composite indexing, query tuning and server-side pagination cut query time by 40%",
      "Designed and shipped a production M-Pesa payment integration with idempotent webhook handlers keyed on transaction references, explicit timeouts, multi-state transaction tracking (pending, confirmed, failed, reversed) and automated reconciliation, cutting reconciliation errors by 90%",
      "Integrated Microsoft Dynamics 365 through C#/.NET Core APIs to surface real-time financial data on executive dashboards; containerised services with Docker and owned GitHub Actions CI/CD with automated test gates in a 5-person Agile team"
    ],
    techStack: ["React", "TypeScript", "Django", "C# .NET", "PostgreSQL", "Docker"]
  },
  {
    id: "exp-gmc",
    role: "Software Engineer (Contract)",
    company: "GMC Kitengela",
    location: "Remote (Nairobi County)",
    period: "January – August 2024",
    highlights: [
      "Engineered a procurement module for a point-of-sale system in React and Django, turning an undefined manual process into a role-gated workflow: Requisition → RFQ → Bid Analysis → Purchase Order → GRN → Invoice",
      "Improved inventory accuracy and cut approval turnaround"
    ],
    techStack: ["React", "Django", "PostgreSQL"]
  },
  {
    id: "exp-upwork",
    role: "Full-Stack Software Developer",
    company: "Upwork (Freelance)",
    location: "Remote",
    period: "November 2022 – January 2024",
    highlights: [
      "Delivered 15+ projects with a 5-star rating across e-commerce, finance and news platforms for US and European clients",
      "Each one a different domain, stack and stakeholder, scoped and delivered independently with React, Node.js and .NET services, including payment gateway integrations"
    ],
    techStack: ["React", "Node.js", ".NET"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-spend-agent",
    title: "AI Spend Agent",
    subtitle: "Dash.fi · Spend Intelligence (Lead Engineer)",
    badge: "Fintech • AI • Lead Engineer",
    badgeColor: "amber",
    description: "AI-powered spend intelligence: provider cost ingestion, invoice-level billing reconciliation and a 13-detector anomaly engine.",
    longDescription: "Lead engineer on Dash.fi's newest product line. It ingests provider usage and cost data, reconciles it against invoice-level billing, and runs a 13-detector anomaly engine over the results. Budget-breach alerting runs on Inngest with Knock/SendGrid delivery and once-per-period guarantees, and findings export as server-side PDF audit reports.",
    techStack: ["TypeScript", "Node.js", "PostgreSQL", "Inngest", "Knock", "AWS Lambda"],
    keyPoint: "13-detector anomaly engine • once-per-period alerting • PDF audit reports",
    featured: true
  },
  {
    id: "proj-impact",
    title: "Affiliate Conversion Tracking",
    subtitle: "Dash.fi · impact.com Integration (Eng Lead)",
    badge: "Integrations • Production",
    badgeColor: "blue",
    description: "Server-side conversion events for marketplace referrals through impact.com, built so a retry can never double-count a payout.",
    longDescription: "Financial marketplaces refer business applicants to Dash.fi through impact.com and get paid per conversion. I led the engineering: consent-aware click capture at sign-up, a lead-event consumer that turns application milestones into conversions, Inngest-driven sends with stable event ids so retries and duplicate responses stay idempotent, a daily reconcile job for anything missed, and a staff test path for end-to-end checks. Shipped to production and passed impact's technical review in October 2026.",
    techStack: ["TypeScript", "Fastify", "PostgreSQL", "Inngest", "AWS SNS", "SvelteKit"],
    keyPoint: "Idempotent sends • daily reconcile • passed partner tech review"
  },
  {
    id: "proj-billpay",
    title: "Bill Pay: Invoice Ingestion & ERP Sync",
    subtitle: "Dash.fi · AP Automation",
    badge: "Fintech • Infrastructure",
    badgeColor: "green",
    description: "Inbound email and mailbox pipelines that turn billing emails into bills, plus ownership of ERP and vendor sync.",
    longDescription: "Invoice-ingestion infrastructure for Dash.fi's bill pay product (Net 30/60 vendor payments): SES-forwarded inbound email and webhook-driven mailbox sync classify billing emails by sender and route documents into bill pay with content-hash deduplication. Since October 2026 I also own ERP and vendor sync for the product.",
    techStack: ["TypeScript", "AWS SES", "AWS SQS", "PostgreSQL", "Terraform"],
    keyPoint: "Content-hash dedup • ERP & vendor sync owner"
  },
  {
    id: "proj-esg",
    title: "Multi-Tenant ESG Platform",
    subtitle: "Carbon Corp Solutions · Co-Founder & Lead Engineer",
    badge: "SaaS • Co-Founded • Production",
    badgeColor: "green",
    description: "Multi-tenant SaaS for ESG data collection, approvals and board reporting, taken from market research to live production.",
    longDescription: "Co-founded and led engineering on a multi-tenant enterprise SaaS platform for ESG data collection, two-level approval workflows with separation of duties, and automated PDF board reporting. A configuration-driven form layer covers 150+ KPIs with a two-pass calculation engine, so new tenants and sectors are configured rather than rebuilt. React and Node.js on PostgreSQL, deployed on AWS (Amplify, App Runner, RDS, S3, SES) with Docker and path-filtered GitHub Actions.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", "GitHub Actions"],
    link: "https://main.dwt9oplenis7k.amplifyapp.com",
    keyPoint: "Concept to production • 150+ KPIs • configured, not rebuilt",
    featured: true
  },
  {
    id: "proj-tenancy",
    title: "True Multi-Tenant Isolation in PostgreSQL",
    subtitle: "Carbon Corp · Architecture Deep-Dive",
    badge: "Distributed Systems • Deep-Dive",
    badgeColor: "purple",
    description: "Row-Level Security plus a dual-pool connection strategy with AsyncLocalStorage, so isolation doesn't depend on remembering WHERE tenant_id = ?.",
    longDescription: "Tenant isolation on the Carbon Corp platform is enforced by the database, not by application discipline: a 41-table schema under PostgreSQL Row-Level Security, and a dual-pool connection strategy backed by AsyncLocalStorage that binds every query to the current tenant. A forgotten WHERE clause can't leak data across tenants. Published as a technical write-up.",
    techStack: ["TypeScript", "Node.js", "PostgreSQL", "Row-Level Security", "AsyncLocalStorage"],
    keyPoint: "RLS on 41 tables • connection-level tenant context • published write-up"
  },
  {
    id: "proj-mcp",
    title: "M-Pesa Express MCP Server",
    subtitle: "AI Engineering · Tool Use",
    badge: "AI • MCP",
    badgeColor: "rose",
    description: "An MCP server that exposes live M-Pesa Daraja payments to LLM clients through tool use.",
    longDescription: "Built and deployed an MCP server that exposes live M-Pesa Daraja payment infrastructure to LLM clients, so payments can be orchestrated in natural language through tool calls. Covers tool schema design and function calling, deployed on Google Cloud Run.",
    techStack: ["Python", "FastMCP", "M-Pesa Daraja API", "Google Cloud Run"],
    keyPoint: "Live payments via tool use • deployed on GCP"
  },
  {
    id: "proj-mpesa",
    title: "Real-Time Payment Gateway",
    subtitle: "Optiven · M-Pesa Integration",
    badge: "Fintech • Production",
    badgeColor: "amber",
    description: "Production M-Pesa integration for a real estate company processing real transactions.",
    longDescription: "Production M-Pesa integration for a real estate company processing real transactions. Idempotent webhook handlers keyed on transaction references, explicit timeouts, and a transaction state machine (pending, confirmed, failed, reversed) with automated reconciliation. Cut reconciliation errors by 90%.",
    techStack: ["Django", "M-Pesa Daraja API", "Celery", "PostgreSQL"],
    keyPoint: "Real money • 90% fewer reconciliation errors • failure-resilient design"
  },
  {
    id: "proj-minidb",
    title: "Relational Database From Scratch",
    subtitle: "MiniDB · Database Engine",
    badge: "Technical Deep-Dive • CS Fundamentals",
    badgeColor: "purple",
    description: "A working relational database engine, built to understand what sits under the ORM.",
    longDescription: "SQL lexer, recursive descent parser, query planner, executor and B-tree indexing, all built from scratch with 49 automated tests for correctness.",
    techStack: ["Python", "pytest"],
    link: "https://n5t32y4qnz.eu-west-1.awsapprunner.com",
    github: "https://github.com/Abogeerick/minidb-complete-project",
    keyPoint: "Parser to B-tree • 49 tests"
  },
  {
    id: "proj-nexus",
    title: "AI-Powered Financial Platform",
    subtitle: "Nexus Financial",
    badge: "Full Stack • AI Integration",
    badgeColor: "blue",
    description: "Personal finance management with M-Pesa statement parsing and AI-powered categorisation.",
    longDescription: "Personal finance management with M-Pesa statement parsing, AI transaction categorisation and interactive analytics dashboards.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Framer Motion", "Transformers.js"],
    link: "https://nexus-app-plum.vercel.app",
    github: "https://github.com/Abogeerick/nexus-app",
    keyPoint: "AI categorisation • analytics dashboards"
  },
  {
    id: "proj-askweb",
    title: "LLM-Powered Research Agent",
    subtitle: "Ask the Web · AI Agent",
    badge: "AI/ML • Personal Project",
    badgeColor: "rose",
    description: "An AI agent that searches the web in real time and synthesises cited answers.",
    longDescription: "RAG pipeline covering query understanding, tool orchestration, web retrieval and cited synthesis, with model output checked against its sources rather than trusted.",
    techStack: ["Python", "LangChain", "Streamlit", "Groq API", "Ollama"],
    github: "https://github.com/Abogeerick/Ask-the-web",
    keyPoint: "AI agents • RAG with citations"
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
    description: "Correctness shouldn't depend on remembering a WHERE clause. I push tenant and permission boundaries down to the database, connection and gateway layers so isolation is structural, not a per-query discipline.",
    icon: "cycle"
  },
  {
    title: "Own the whole service",
    description: "Architecture, APIs and the Terraform that runs them (Lambda, SQS, S3, IAM, Postgres roles), behind CI/CD with gated production deploys. I ship what I design and I operate what I ship.",
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
    degree: "Bachelor of Commerce, Finance (Second Class Upper)",
    period: "Sept 2020 – Dec 2024",
    details: "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Computer Organization & Programming, Database Management Systems, Business Intelligence, Systems Analysis and Design, Management Information Systems, Statistics & Applications"
  },
  {
    school: "Moringa School",
    degree: "Certificate in Software Development",
    period: "May 2022 – Nov 2022",
    details: "Full-stack development across front end and back end, database management and application deployment."
  }
];
