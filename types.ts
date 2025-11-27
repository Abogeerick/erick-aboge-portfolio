export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  techStack?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  link?: string;
  github?: string;
  swaggerLink?: string;
  category: 'Professional' | 'Freelance' | 'Personal';
  imagePlaceholder: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  details?: string;
}
