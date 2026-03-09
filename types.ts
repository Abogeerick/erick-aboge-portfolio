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
  subtitle: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  link?: string;
  github?: string;
  badge: string;
  badgeColor: 'green' | 'blue' | 'purple' | 'amber' | 'rose';
  keyPoint: string;
  featured?: boolean;
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

export interface ApproachCard {
  title: string;
  description: string;
  icon: string;
}
