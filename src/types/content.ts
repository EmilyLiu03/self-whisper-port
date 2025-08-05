export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  slug: string;
  content: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  location: string;
  experience: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  content: string;
}

export interface Interest {
  icon: string;
  title: string;
  description: string;
}

export interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  href: string;
}

export interface Skill {
  category: string;
  items: string[];
}