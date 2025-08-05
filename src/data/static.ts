import { Interest, ContactMethod, Skill } from '@/types/content';
import { Code, Coffee, BookOpen, Camera, Mail, Github, Linkedin, Twitter } from 'lucide-react';

// 兴趣爱好数据
export const interests: Interest[] = [
  {
    icon: "Code",
    title: "Web Development",
    description: "热衷于使用现代技术创建美观且功能强大的 Web 应用程序。"
  },
  {
    icon: "Coffee",
    title: "Coffee Enthusiast",
    description: "我相信最好的代码是在完美的咖啡陪伴下写出来的。"
  },
  {
    icon: "BookOpen",
    title: "Continuous Learning",
    description: "总是在探索新的技术、框架和方法论来提升我的技能。"
  },
  {
    icon: "Camera",
    title: "Photography",
    description: "通过镜头捕捉瞬间，在日常生活中发现美。"
  }
];

// 联系方式数据
export const contactMethods: ContactMethod[] = [
  {
    icon: "Mail",
    title: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com"
  },
  {
    icon: "Github",
    title: "GitHub",
    value: "@yourusername",
    href: "https://github.com/yourusername"
  },
  {
    icon: "Linkedin",
    title: "LinkedIn",
    value: "你的姓名",
    href: "https://linkedin.com/in/yourusername"
  },
  {
    icon: "Twitter",
    title: "Twitter",
    value: "@yourusername",
    href: "https://twitter.com/yourusername"
  }
];

// 技能数据
export const skills: Skill[] = [
  {
    category: "前端技术",
    items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    category: "后端技术",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"]
  },
  {
    category: "工具与平台",
    items: ["Git", "Docker", "AWS", "Vercel", "GitHub Actions"]
  },
  {
    category: "其他技能",
    items: ["UI/UX Design", "API Design", "Testing", "Performance Optimization"]
  }
];

// 图标映射
export const iconMap = {
  Code,
  Coffee,
  BookOpen,
  Camera,
  Mail,
  Github,
  Linkedin,
  Twitter
};