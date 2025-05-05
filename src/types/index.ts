export interface NavItem {
  label: string;
  href: string;
}

export interface ProjectPreview {
  type: 'image' | 'video';
  url: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  preview?: ProjectPreview;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
}

export interface WorkExperience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
  courses: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'data' | 'ml' | 'dev';
}