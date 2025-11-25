import { Experience, Project, Skill, Education } from './types';

export const SOCIAL_LINKS = {
  email: "abogeerick@gmail.com",
  phone: "0790 564 507",
  linkedin: "https://www.linkedin.com/in/erick-aboge-3a09572a6/",
  github: "https://github.com/Abogeerick",
  portfolio: "https://abogeerick.netlify.app/"
};

export const SKILLS: Skill[] = [
  {
    category: "Frontend",
    items: ["React.js", "TypeScript", "Next.js", "Vue.js", "Redux", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Django", "RESTful APIs", "WebSockets"]
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "GitHub", "CI/CD", "Coolify", "Postman", "Swagger", "Agile/Scrum"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    role: "Full-Stack Software Developer",
    company: "Optiven Limited",
    location: "Nairobi, KE",
    period: "Dec 2024 – Present",
    highlights: [
      "Engineered the end-to-end Performance Appraisal module for the company's HRMS using React, TypeScript, and Django, enabling status tracking and automated email notifications.",
      "Developed the core customer management module for an in-house CRM, implementing server-side pagination to efficiently handle over 10,000 customer records without performance degradation.",
      "Integrated a secure authentication system using JWT with refresh token rotation, safeguarding sensitive employee and customer data across HRMS and CRM applications.",
      "Built dynamic dashboards with data visualizations (charts, graphs) to provide HR and management with real-time insights into employee performance and compliance."
    ],
    techStack: ["React", "TypeScript", "Django", "PostgreSQL", "JWT"]
  },
  {
    id: "exp-2",
    role: "Lead Software Developer (Contract)",
    company: "Optiven Limited",
    location: "Nairobi, KE",
    period: "Aug 2024 – Dec 2024",
    highlights: [
      "Architected and developed a real-time HR compliance tool using React, TypeScript, and Node.js, which digitized employee activity logging and improved operational efficiency by 25%.",
      "Implemented a supervisor dashboard with a one-click email notification system (Nodemailer, Zoho) that reduced administrative follow-up time by 40%.",
      "Developed a compliance calculation engine that processed logged hours against required hours, providing clear performance metrics for both employees and management."
    ],
    techStack: ["React", "Node.js", "Nodemailer", "TypeScript"]
  },
  {
    id: "exp-3",
    role: "Front-end Software Developer (Contract)",
    company: "GMC Kitengela",
    location: "Nairobi, KE",
    period: "March 2024 – Aug 2024",
    highlights: [
      "Designed and built a complete procurement management system from the ground up using React, TypeScript, and Node.js.",
      "The system automated the entire procurement lifecycle—from supplier management to reporting—significantly reducing manual processing errors and improving data integrity."
    ],
    techStack: ["React", "TypeScript", "Node.js"]
  },
  {
    id: "exp-4",
    role: "Freelance Software Developer",
    company: "Remote",
    location: "Remote",
    period: "Nov 2022 – Aug 2023",
    highlights: [
      "Developed user-friendly e-commerce platforms using React.js, integrating secure payment gateways and building reusable component libraries with Tailwind CSS.",
      "Engineered a Command-Line Interface for inventory management, incorporating functionalities such as adding, viewing, and deleting products, categories, and suppliers.",
      "Created a React-based news aggregation application to centralize news updates from various categories, significantly enhancing user experience and accessibility."
    ],
    techStack: ["React", "Tailwind CSS", "CLI", "API Integration"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "HRMS Performance Appraisal",
    category: "Professional",
    description: "End-to-end performance tracking module with automated notifications.",
    longDescription: "A critical module for Optiven Limited's HRMS. It replaced manual paper trails with a digital workflow, allowing status tracking, automated email triggers via Nodemailer, and secure data handling using Django backend.",
    techStack: ["React", "Django", "TypeScript", "PostgreSQL"],
    imagePlaceholder: "https://picsum.photos/800/600?random=1"
  },
  {
    id: "proj-2",
    title: "E-Commerce Platform",
    category: "Freelance",
    description: "User-friendly shopping platform with secure payments.",
    longDescription: "A custom-built e-commerce solution focusing on speed and reusable component architecture. Features secure payment gateway integration and a fully responsive design.",
    techStack: ["React", "Tailwind CSS", "Stripe API"],
    link: "https://traded.netlify.app/",
    imagePlaceholder: "https://picsum.photos/800/600?random=2"
  },
  {
    id: "proj-3",
    title: "News Aggregator",
    category: "Freelance",
    description: "Centralized news updates from various categories.",
    longDescription: "A React-based application that consumes external news APIs to provide a unified feed of global news, filtered by category and region.",
    techStack: ["React", "REST API", "CSS3"],
    link: "https://eugenemrg.github.io/News-Sources/",
    imagePlaceholder: "https://picsum.photos/800/600?random=3"
  },
  {
    id: "proj-4",
    title: "Inventory CLI",
    category: "Personal",
    description: "Command-Line Interface for inventory management.",
    longDescription: "A robust CLI tool for managing inventory stock, suppliers, and categories. Demonstrates core programming logic and data structure manipulation without a GUI.",
    techStack: ["Python", "CLI", "SQLite"],
    github: "https://github.com/Abogeerick/CLI_project",
    imagePlaceholder: "https://picsum.photos/800/600?random=4"
  }
];

export const EDUCATION: Education[] = [
  {
    school: "University of Nairobi",
    degree: "Bachelor of Commerce, IT Specialization",
    period: "Sep 2020 – Dec 2024",
    details: "Relevant Coursework: Data Structures & Algorithms, OOP, Database Management Systems, Business Intelligence."
  },
  {
    school: "Moringa School",
    degree: "Certificate in Full-Stack Software Development",
    period: "May 2023 – Nov 2023",
    details: "Gained proficiency in end-to-end application development, including frontend and backend programming."
  }
];
