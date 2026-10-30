<div align="center">

# Erick Aboge · Senior Software Engineer, Fintech

**Corporate cards, bill pay, partner integrations and AI-powered spend intelligence.**

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-Visit-0d9488?style=for-the-badge)](https://erick-aboge-portfolio.vercel.app)
[![CV](https://img.shields.io/badge/CV-PDF-334155?style=for-the-badge)](https://erick-aboge-portfolio.vercel.app/Erick_Aboge_CV.pdf)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/erick-aboge-3a09572a6/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/Abogeerick)

</div>

---

## About

My personal portfolio. I'm a Senior Software Engineer at **Dash.fi** (via Umba), where I own services end to end across corporate cards, bill pay and AI spend intelligence: backend, APIs, cloud infrastructure, deployment and production debugging. Before that I co-founded **Carbon Corp Solutions**, a multi-tenant ESG SaaS, and built payments and internal platforms at Optiven.

## Featured work

| Project | What it is | Stack |
|---|---|---|
| AI Spend Agent (Dash.fi, lead) | Provider cost ingestion, invoice-level reconciliation, a 13-detector anomaly engine, budget-breach alerting and PDF audit reports | TypeScript, PostgreSQL, Inngest, Knock, AWS Lambda |
| Affiliate Conversion Tracking (Dash.fi, eng lead) | Server-side impact.com conversions for marketplace referrals, idempotent sends and a daily reconcile | TypeScript, Fastify, Inngest, AWS SNS, SvelteKit |
| Bill Pay (Dash.fi) | Inbound email and mailbox invoice ingestion with content-hash dedup; owner of ERP and vendor sync | TypeScript, AWS SES/SQS, PostgreSQL, Terraform |
| Multi-Tenant ESG Platform (Carbon Corp, co-founder) | ESG data collection, two-level approvals and board reporting across 150+ KPIs. [Live](https://main.dwt9oplenis7k.amplifyapp.com) | React, Node.js, PostgreSQL, AWS, Docker |
| Multi-Tenant Isolation in PostgreSQL | Row-Level Security on 41 tables plus a dual-pool AsyncLocalStorage connection strategy | TypeScript, PostgreSQL |
| M-Pesa Express MCP Server | Live M-Pesa Daraja payments exposed to LLM clients through tool use | Python, FastMCP, Google Cloud Run |
| Real-Time Payment Gateway (Optiven) | Production M-Pesa integration, 90% fewer reconciliation errors | Django, Celery, PostgreSQL |
| MiniDB | Relational database from scratch, 49 tests. [Live](https://n5t32y4qnz.eu-west-1.awsapprunner.com) · [Code](https://github.com/Abogeerick/minidb-complete-project) | Python, pytest |
| Nexus Financial | M-Pesa statement parsing with AI categorisation. [Live](https://nexus-app-plum.vercel.app) · [Code](https://github.com/Abogeerick/nexus-app) | Next.js, Prisma, Transformers.js |
| Ask the Web | RAG research agent with cited answers. [Code](https://github.com/Abogeerick/Ask-the-web) | Python, LangChain, Groq |

## Run locally

Requires Node.js 18+.

```bash
git clone https://github.com/Abogeerick/erick-aboge-portfolio.git
cd erick-aboge-portfolio
npm install
npm run dev
```

Runs at `http://localhost:3000`. Pushes to `main` deploy to Vercel.

## Structure

```
erick-aboge-portfolio/
├── App.tsx            # page sections and components
├── constants.ts       # all content: experience, projects, skills, education
├── types.ts           # content types
├── index.html         # Tailwind config, fonts, animations, meta tags
├── components/
│   └── Section.tsx    # shared section layout
├── public/
│   └── Erick_Aboge_CV.pdf
└── vercel.json        # redirects the old résumé URL to the current CV
```

To update content, edit `constants.ts`. To replace the CV, overwrite `public/Erick_Aboge_CV.pdf`.

## Contact

- Email: abogeerick@gmail.com
- Phone: +254 790 564 507
- LinkedIn: [Erick Aboge](https://www.linkedin.com/in/erick-aboge-3a09572a6/)
- GitHub: [Abogeerick](https://github.com/Abogeerick)
