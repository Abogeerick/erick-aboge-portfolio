import { Experience, Project, Skill, Education } from './types';

export const SOCIAL_LINKS = {
  email: "abogeerick@gmail.com",
  phone: "+254 790 564 507",
  linkedin: "https://www.linkedin.com/in/erick-aboge-3a09572a6/",
  github: "https://github.com/Abogeerick",
  portfolio: "https://yourportfolio.com/" // Updated placeholder as user didn't provide a new domain
};

export const SKILLS: Skill[] = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Redux", "Zustand", "HTML5", "CSS3", "Framer Motion"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Django", "Python", "C# (.NET Core 8.0)", "RESTful APIs", "Swagger"]
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "MS SQL Server", "Redis", "Supabase", "EF Core", "Prisma ORM"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Coolify", "Vercel", "Render", "Git", "GitHub Actions", "Postman", "Linux"]
  },
  {
    category: "Architecture",
    items: ["DDD", "Clean Architecture", "RBAC", "JWT Auth", "Microservices"]
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
      "Enterprise CRM Architecture: Engineered a high-performance in-house CRM using Django and React, managing 10,000+ customer records. Implemented indexing and server-side pagination to reduce query time by 40%.",
      "HRMS Development: Built the Employee Self-Service (ESS) and HR Appraisal modules, replacing legacy systems with a streamlined React/Django solution for PIP and probation workflows.",
      "Dynamics Integration: Developed C# .NET APIs to extract financial data from Microsoft Dynamics 365 and inject it into executive dashboards for real-time reporting.",
      "DevOps: Containerized applications using Docker and Coolify to ensure consistent deployment environments."
    ],
    techStack: ["React", "Django", ".NET", "PostgreSQL", "Docker"]
  },
  {
    id: "exp-2",
    role: "Contract Software Developer",
    company: "Optiven Limited",
    location: "Nairobi, Kenya",
    period: "August 2024 – December 2024",
    highlights: [
      "Daily Work Diary System: Designed and deployed a compliance monitoring system using Node.js, Express, and React, eliminating manual Friday Excel reports for the entire workforce.",
      "Feature Implementation: Built Role-Based Access Control (RBAC) for Employee, Supervisor, and HR dashboards, including automated email notifications for non-compliance.",
      "Fintech Integration: Led the integration of M-Pesa STK Push (Daraja API) for Optiven Water, automating payment reconciliation and reducing manual entry errors by over 90%."
    ],
    techStack: ["React", "Node.js", "Express", "MySQL"]
  },
  {
    id: "exp-3",
    role: "Software Developer (Contract)",
    company: "GMC KITENGELA",
    location: "Kajiado, Kenya",
    period: "January 2024 – August 2024",
    highlights: [
      "POS System Development: Engineered an end-to-end Procurement Module for a custom Point of Sale system using React and Django.",
      "Workflow Automation: Digitized complex supply chain workflows: Store Requisition → RFQ → Bid Analysis → Purchase Order → GRN → Invoice generation.",
      "Impact: Streamlined the procurement process, reducing approval turnaround time and improving inventory accuracy."
    ],
    techStack: ["React", "Django"]
  },
  {
    id: "exp-4",
    role: "Junior Software Developer",
    company: "FREELANCE (UPWORK)",
    location: "Remote",
    period: "November 2022 – January 2024",
    highlights: [
      "Developed finance gateway apps using .NET for backend.",
      "Built ecommerce websites and news websites."
    ],
    techStack: [".NET", "React"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "SentinelPay",
    category: "Professional",
    description: "Real-Time Fraud Detection & Payments Gateway.",
    longDescription: "A production-ready full-stack fintech application featuring real-time fraud detection, risk scoring, and a complete payment gateway simulation. Built with Clean Architecture, Domain-Driven Design (DDD), and modern web technologies. Features include JWT-based authentication, multi-currency wallet support, and AI-powered risk explanations.",
    techStack: ["C# .NET 8", "React", "TypeScript", "PostgreSQL", "Docker", "Redis"],
    link: "https://sentinel-pay.vercel.app/",
    github: "https://github.com/Abogeerick/SentinelPay",
    imagePlaceholder: "/WhatsApp Image 2025-11-27 at 09.48.08 (1).jpeg"
  },
  {
    id: "proj-1b",
    title: "SentinelPay API Documentation",
    category: "Professional",
    description: "Comprehensive RESTful API documentation with Swagger UI.",
    longDescription: "Interactive API documentation for SentinelPay backend built with .NET 8. Features comprehensive endpoint documentation for Authentication, Admin operations, Transactions, and Fraud Detection. Includes JWT-based authorization, request/response schemas, and live API testing capabilities through Swagger UI.",
    techStack: ["C# .NET 8", "Swagger", "OpenAPI", "RESTful API"],
    link: "https://sentinelpay.onrender.com/swagger/index.html",
    github: "https://github.com/Abogeerick/SentinelPay",
    imagePlaceholder: "/WhatsApp Image 2025-11-27 at 12.56.20.jpeg"
  },
  {
    id: "proj-2",
    title: "Nexus Financial",
    category: "Professional",
    description: "AI-Powered Financial Management Platform.",
    longDescription: "A comprehensive, production-ready SaaS platform for financial portfolio management with AI-powered transaction categorization, multi-currency support, and real-time analytics. Features include M-PESA transaction management, AI-powered categorization, and multi-asset tracking.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "M-Pesa API"],
    link: "https://nexus-app-plum.vercel.app/",
    github: "https://github.com/Abogeerick/nexus-app",
    imagePlaceholder: "/WhatsApp Image 2025-11-27 at 09.51.55 (2).jpeg"
  },
  {
    id: "proj-3",
    title: "Ask the Web",
    category: "Personal",
    description: "Streamlit application leveraging LLMs and DuckDuckGo search.",
    longDescription: "A Streamlit application that answers questions using web search results and provides citations. Features web search using DuckDuckGo, text extraction from web pages, and AI-powered answers.",
    techStack: ["Python", "Streamlit", "LangChain", "OpenAI", "Docker"],
    github: "https://github.com/Abogeerick/Ask-the-web",
    imagePlaceholder: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "proj-4",
    title: "GMC Kitengela Procurement System",
    category: "Professional",
    description: "End-to-end Procurement Module for POS System.",
    longDescription: "Engineered a complete procurement management system for a custom Point of Sale system. Digitized complex supply chain workflows from Store Requisition → RFQ → Bid Analysis → Purchase Order → GRN → Invoice generation. Features real-time dashboards, supplier management, and automated approval workflows.",
    techStack: ["React", "Django", "PostgreSQL"],
    link: "https://dev.pos.gmcplace.co.ke/",
    imagePlaceholder: "/WhatsApp Image 2025-11-27 at 13.29.33.jpeg"
  },
  {
    id: "proj-5",
    title: "Inventory Management CLI",
    category: "Personal",
    description: "Interactive CLI for managing inventory systems.",
    longDescription: "An interactive Command-Line Interface (CLI) application for managing an inventory system. Supports CRUD operations for products, categories, suppliers, and transactions using SQLite.",
    techStack: ["Python", "SQLite"],
    github: "https://github.com/Abogeerick/CLI_project",
    imagePlaceholder: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=800"
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
