<div align="center">

# 🚀 Erick Aboge — Senior Software Engineer · Fintech

**Corporate cards, payments, AP automation & AI-powered spend intelligence.**

[![Live Portfolio](https://img.shields.io/badge/🌐_Live_Portfolio-Visit-0d9488?style=for-the-badge)](https://your-portfolio-url.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/erick-aboge-3a09572a6/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/Abogeerick)

</div>

---

## 📋 About

A professional portfolio website showcasing my work as a **Senior Software Engineer** building production fintech systems. At **Dash.fi (Umba Group)** I own services end-to-end across payments, corporate spend and AI-powered financial products — backend, APIs, cloud infrastructure, deployment and production debugging.

### Key Highlights
- 💳 **Fintech Core** — Corporate cards, transactions, spending controls, AP automation / bill pay, and accounting integrations (QuickBooks/NetSuite via Rutter)
- 🤖 **AI Spend Intelligence** — Lead engineer on a spend agent with a 13-detector anomaly engine, invoice-level reconciliation, and budget-breach alerting (Inngest + Knock)
- 🧱 **Distributed Systems** — Multi-tenant isolation, event-driven workflows, idempotency, and resilient vendor integrations (Plaid, Middesk, Heron, Stytch)
- ☁️ **Infrastructure as Code** — AWS (Lambda, SQS, S3, SES, IAM) owned via Terraform, with CI/CD and gated production deploys
- 💰 **Payments Track Record** — Real-money M-Pesa integration with idempotent webhooks and a 90% reduction in reconciliation errors

---

## 🛠️ Tech Stack (Portfolio)

| Category | Technologies |
|----------|-------------|
| **Framework** | React 19, TypeScript |
| **Build Tool** | Vite 6 |
| **Styling** | TailwindCSS (CDN), Custom CSS |
| **Fonts** | Inter, Space Grotesk, JetBrains Mono |
| **Icons** | Lucide React |
| **Animations** | CSS keyframe animations, Intersection Observer API |

---

## 🚀 Featured Projects

### 1. AI Spend Agent — Dash.fi (Lead Engineer)
> Spend-intelligence product line: provider usage/cost ingestion, invoice-level billing reconciliation, and a 13-detector anomaly engine. Budget-breach alerting on Inngest with Knock/SendGrid and once-per-period delivery guarantees, plus server-side PDF audit reports.

**Tech:** TypeScript, Node.js, PostgreSQL, Inngest, Knock, AWS Lambda

### 2. True Multi-Tenant Isolation in PostgreSQL — Dash.fi
> A Dual-Pool connection strategy backed by AsyncLocalStorage that enforces tenant data sovereignty at the connection layer — moving beyond `WHERE tenant_id = ?`. Written up as a full architecture deep-dive.

**Tech:** TypeScript, Node.js, PostgreSQL, AsyncLocalStorage

### 3. Bill Pay Invoice Ingestion — Dash.fi
> AP-automation infrastructure: SES-forwarded inbound email and webhook-driven mailbox sync that classify billing emails by sender and route documents with content-hash deduplication. Vendor integrations (Plaid, Middesk, Heron) guarded so degradation never breaks a customer request.

**Tech:** TypeScript, AWS SES, AWS SQS, PostgreSQL, Terraform

### 4. Enterprise ESG Platform
> End-to-end ownership of a complete enterprise system for ESG data collection, approval workflows, and PDF reporting. Deployed on AWS infrastructure.

**Tech:** React, TypeScript, Node.js, PostgreSQL, AWS, Docker, GitHub Actions  
**Live:** [main.dwt9oplenis7k.amplifyapp.com](https://main.dwt9oplenis7k.amplifyapp.com)

### 5. MiniDB — Relational Database From Scratch
> Built a working relational database engine with custom SQL lexer, recursive descent parser, and B-tree indexing. 49 automated tests.

**Tech:** Python, pytest  
**Live:** [AWS App Runner](https://n5t32y4qnz.eu-west-1.awsapprunner.com) • **Code:** [GitHub](https://github.com/Abogeerick/minidb-complete-project)

### 6. Real-Time M-Pesa Payment Gateway
> Mobile money payment integration for real estate company. Designed for reliability with idempotent webhooks and a 90% reduction in reconciliation errors.

**Tech:** Django, M-Pesa Daraja API, Celery, PostgreSQL

### 7. Nexus Financial — AI-Powered Finance Platform
> Personal finance management with M-Pesa transaction parsing, AI-powered categorization, and interactive analytics.

**Tech:** Next.js, TypeScript, Prisma, PostgreSQL, Transformers.js  
**Live:** [nexus-app-plum.vercel.app](https://nexus-app-plum.vercel.app) • **Code:** [GitHub](https://github.com/Abogeerick/nexus-app)

### 8. Ask the Web — LLM-Powered Research Agent
> AI agent implementing a RAG pipeline with real-time web search and citation tracking.

**Tech:** Python, LangChain, Streamlit, Groq API  
**Code:** [GitHub](https://github.com/Abogeerick/Ask-the-web)

---

## 🏃 Run Locally

**Prerequisites:** Node.js 18+

```bash
# Clone the repository
git clone https://github.com/Abogeerick/erick-aboge-portfolio.git
cd erick-aboge-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

---

## 📁 Project Structure

```
erick-aboge-portfolio/
├── App.tsx              # Main application component
├── constants.ts         # Project data, experience, skills
├── types.ts             # TypeScript interfaces
├── index.html           # HTML entry with Tailwind config & animations
├── index.tsx            # React entry point
├── vite.config.ts       # Vite configuration
├── components/
│   ├── Section.tsx      # Reusable section layout component
│   ├── MetricCard.tsx   # Stats/metric display card
│   └── ThemeToggle.tsx  # Dark/light mode toggle
└── public/
    └── Aboge_Erick_Resume.pdf
```

---

## ✨ Design Features

- **Dark-first design** with glassmorphism and subtle noise overlay
- **Scroll-reveal animations** using Intersection Observer
- **Animated counters** for statistics
- **Particle field background** with floating elements
- **Interactive code terminal** in hero section
- **Color-coded project badges** (Production/Green, AI/Rose, CS/Purple, etc.)
- **Responsive** — optimized for mobile, tablet, and desktop
- **Custom scrollbar** with gradient styling
- **Grid pattern background** for depth

---

## 📬 Contact

- **Email:** abogeerick@gmail.com
- **Phone:** +254 790 564 507
- **LinkedIn:** [Erick Aboge](https://www.linkedin.com/in/erick-aboge-3a09572a6/)
- **GitHub:** [Abogeerick](https://github.com/Abogeerick)

---

<div align="center">

**Building production fintech systems — cards, payments, AP automation & AI spend intelligence.**

</div>
