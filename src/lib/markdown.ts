import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { BlogPost, PersonalInfo } from '@/types/content';

// 处理 Markdown 内容
export async function processMarkdown(content: string): Promise<string> {
  const result = await remark()
    .use(remarkHtml, { sanitize: false })
    .process(content);
  
  return result.toString();
}

// 解析博客文章
export async function parseBlogPost(fileContent: string, slug: string): Promise<BlogPost> {
  const { data, content } = matter(fileContent);
  const processedContent = await processMarkdown(content);
  
  return {
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    readTime: data.readTime,
    tags: data.tags || [],
    featured: data.featured || false,
    slug: slug,
    content: processedContent
  };
}

// 解析个人信息
export async function parsePersonalInfo(fileContent: string): Promise<PersonalInfo> {
  const { data, content } = matter(fileContent);
  const processedContent = await processMarkdown(content);
  
  return {
    name: data.name,
    title: data.title,
    description: data.description,
    location: data.location,
    experience: data.experience,
    email: data.email,
    github: data.github,
    linkedin: data.linkedin,
    twitter: data.twitter,
    content: processedContent
  };
}

// 从文件名提取 slug
export function extractSlugFromFilename(filename: string): string {
  // 移除日期前缀和文件扩展名
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
}

// 格式化日期
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}