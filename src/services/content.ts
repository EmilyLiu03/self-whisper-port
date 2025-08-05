import { parseBlogPost, parsePersonalInfo } from '@/lib/markdown';
import { BlogPost, PersonalInfo } from '@/types/content';

// 模拟的博客文章数据（在实际项目中，这些数据会从 Markdown 文件中读取）
const mockBlogPosts: BlogPost[] = [
  {
    title: "构建可扩展的 React 应用程序",
    date: "2024-01-01",
    excerpt: "探索构建大型、可维护 React 应用程序的最佳实践和架构模式。",
    content: `<h2>引言</h2>
<p>在现代 Web 开发中，构建可扩展的 React 应用程序是一个关键挑战。随着应用程序的增长，我们需要确保代码库保持可维护性和性能。</p>
<h2>关键原则</h2>
<h3>1. 组件化架构</h3>
<p>将 UI 分解为可重用的组件是 React 的核心理念。每个组件应该有单一的职责，并且易于测试。</p>
<h3>2. 状态管理</h3>
<p>对于复杂的应用程序，选择合适的状态管理解决方案至关重要。Redux、Zustand 或 Context API 都是不错的选择。</p>
<h3>3. 代码分割</h3>
<p>使用 React.lazy() 和 Suspense 来实现代码分割，提高应用程序的加载性能。</p>
<h2>最佳实践</h2>
<ul>
<li>使用 TypeScript 提供类型安全</li>
<li>实施严格的 ESLint 规则</li>
<li>编写全面的测试</li>
<li>使用性能监控工具</li>
</ul>`,
    readTime: "8 min read",
    tags: ["React", "架构", "最佳实践"],
    featured: true,
    slug: "building-scalable-react-applications"
  },
  {
    title: "整洁代码的艺术",
    date: "2024-01-15",
    excerpt: "深入探讨编写可读、可维护和优雅代码的原则和技巧。",
    content: `<h2>什么是整洁代码？</h2>
<p>整洁代码不仅仅是能够工作的代码，它是易于阅读、理解和修改的代码。正如 Robert C. Martin 所说："整洁代码总是看起来像是由关心它的人写的。"</p>
<h2>核心原则</h2>
<h3>1. 有意义的命名</h3>
<p>变量、函数和类的名称应该清楚地表达其目的。避免使用缩写和模糊的名称。</p>
<h3>2. 函数应该小而专注</h3>
<p>每个函数应该只做一件事，并且做好这件事。理想情况下，函数应该少于 20 行。</p>
<h3>3. 注释应该解释"为什么"而不是"什么"</h3>
<p>好的代码应该是自文档化的。注释应该解释业务逻辑和设计决策。</p>
<h2>实践技巧</h2>
<ul>
<li>使用一致的代码格式</li>
<li>避免深层嵌套</li>
<li>遵循 DRY（Don't Repeat Yourself）原则</li>
<li>定期重构代码</li>
</ul>`,
    readTime: "6 min read",
    tags: ["编程", "最佳实践", "代码质量"],
    featured: false,
    slug: "the-art-of-clean-code"
  },
  {
    title: "TypeScript 进阶技巧",
    date: "2024-02-01",
    excerpt: "掌握 TypeScript 的高级特性，提升代码质量和开发效率。",
    content: `<h2>超越基础</h2>
<p>TypeScript 不仅仅是 JavaScript 的类型化版本。它提供了强大的类型系统，可以帮助我们编写更安全、更可维护的代码。</p>
<h2>高级类型特性</h2>
<h3>1. 联合类型和交叉类型</h3>
<p>联合类型允许值为多种类型之一，而交叉类型将多个类型合并为一个。</p>
<pre><code>type StringOrNumber = string | number;
type User = Person & ContactInfo;</code></pre>
<h3>2. 泛型</h3>
<p>泛型提供了创建可重用组件的方式，这些组件可以处理多种类型。</p>
<pre><code>function identity&lt;T&gt;(arg: T): T {
  return arg;
}</code></pre>
<h3>3. 条件类型</h3>
<p>条件类型允许我们根据类型关系选择类型。</p>
<pre><code>type NonNullable&lt;T&gt; = T extends null | undefined ? never : T;</code></pre>
<h2>实用工具类型</h2>
<ul>
<li>Partial&lt;T&gt; - 使所有属性可选</li>
<li>Required&lt;T&gt; - 使所有属性必需</li>
<li>Pick&lt;T, K&gt; - 选择特定属性</li>
<li>Omit&lt;T, K&gt; - 排除特定属性</li>
</ul>`,
    readTime: "10 min read",
    tags: ["TypeScript", "进阶", "类型系统"],
    featured: true,
    slug: "typescript-beyond-basics"
  }
];

// 模拟的个人信息数据
const mockPersonalInfo: PersonalInfo = {
  name: "张三",
  title: "全栈开发工程师",
  description: "热爱技术，专注于现代 Web 开发技术栈。拥有 5 年以上的前端和后端开发经验，擅长 React、Node.js 和云原生技术。",
  location: "北京, 中国",
  experience: "5+ 年经验",
  email: "zhangsan@example.com",
  github: "https://github.com/zhangsan",
  linkedin: "https://linkedin.com/in/zhangsan",
  twitter: "https://twitter.com/zhangsan_dev",
  content: `<h2>关于我</h2>
<p>我是一名充满热情的全栈开发工程师，专注于现代 Web 开发技术栈。在过去的 5 年中，我积累了丰富的前端和后端开发经验，特别擅长 React、Node.js 和云原生技术。</p>

<h2>技能专长</h2>
<ul>
<li><strong>前端开发</strong>: React, TypeScript, Next.js, Vue.js</li>
<li><strong>后端开发</strong>: Node.js, Python, Go, Express</li>
<li><strong>数据库</strong>: MongoDB, PostgreSQL, Redis</li>
<li><strong>云服务</strong>: AWS, Docker, Kubernetes</li>
<li><strong>工具链</strong>: Git, Webpack, Vite, CI/CD</li>
</ul>

<h2>兴趣爱好</h2>
<p>除了编程，我还热爱阅读技术书籍、参与开源项目，以及探索新的技术趋势。我相信持续学习是保持技术竞争力的关键。</p>

<h2>联系我</h2>
<p>如果你对我的工作感兴趣，或者想要讨论技术话题，欢迎通过以下方式联系我。我很乐意与志同道合的开发者交流和合作。</p>`
};

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    // 模拟异步操作
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockBlogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const allPosts = await getAllBlogPosts();
    return allPosts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}

export async function getPersonalInfo(): Promise<PersonalInfo | null> {
  try {
    // 模拟异步操作
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockPersonalInfo;
  } catch (error) {
    console.error('Error loading personal info:', error);
    return null;
  }
}

// 获取精选文章
export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter(post => post.featured);
}

// 获取最新文章
export async function getLatestPosts(limit: number = 4): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.slice(0, limit);
}