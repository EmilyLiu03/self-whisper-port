# 基于 Markdown 的内容管理系统

## 概述

这个博客网站现在使用基于 Markdown 的内容管理系统，将代码和内容完全分离，提升写作体验和内容管理效率。

## 目录结构

```
src/
├── content/                 # 内容目录
│   ├── posts/              # 博客文章
│   │   ├── 2024-01-01-building-scalable-react-applications.md
│   │   ├── 2024-01-15-the-art-of-clean-code.md
│   │   └── 2024-02-01-typescript-beyond-basics.md
│   └── pages/              # 页面内容
│       └── about.md        # 个人信息
├── data/                   # 静态数据
│   └── static.ts          # 兴趣、技能、联系方式等
├── types/                  # 类型定义
│   └── content.ts         # 内容相关类型
├── lib/                    # 工具函数
│   └── markdown.ts        # Markdown 处理工具
└── services/              # 数据服务
    └── content.ts         # 内容加载服务
```

## 如何添加新的博客文章

### 1. 创建 Markdown 文件

在 `src/content/posts/` 目录下创建新的 `.md` 文件，文件名格式：`YYYY-MM-DD-文章标题.md`

### 2. 文章格式

每篇文章都应该包含 Front Matter（元数据）和正文内容：

```markdown
---
title: "文章标题"
date: "2024-01-01"
excerpt: "文章摘要，简短描述文章内容"
readingTime: 5
tags: ["标签1", "标签2", "标签3"]
featured: true
slug: "article-slug"
---

# 文章标题

这里是文章的正文内容，支持完整的 Markdown 语法。

## 二级标题

- 列表项 1
- 列表项 2

### 三级标题

代码示例：

\`\`\`javascript
function example() {
  console.log("Hello, World!");
}
\`\`\`

更多内容...
```

### 3. 元数据说明

- `title`: 文章标题
- `date`: 发布日期（YYYY-MM-DD 格式）
- `excerpt`: 文章摘要，显示在文章列表中
- `readingTime`: 预估阅读时间（分钟）
- `tags`: 文章标签数组
- `featured`: 是否为精选文章（布尔值）
- `slug`: URL 友好的文章标识符

## 如何更新个人信息

编辑 `src/content/pages/about.md` 文件：

```markdown
---
name: "你的姓名"
title: "你的职位"
description: "个人简介"
location: "所在城市"
experience: "工作经验"
email: "your.email@example.com"
github: "https://github.com/yourusername"
linkedin: "https://linkedin.com/in/yourusername"
twitter: "https://twitter.com/yourusername"
---

# 关于我

这里是详细的个人介绍...

## 技能专长

- 技能 1
- 技能 2

## 兴趣爱好

- 兴趣 1
- 兴趣 2
```

## 如何更新静态数据

编辑 `src/data/static.ts` 文件来更新：

- 兴趣爱好列表
- 联系方式
- 技能分类

## 技术栈

- **Markdown 处理**: gray-matter, remark, remark-html
- **类型安全**: TypeScript 接口定义
- **组件化**: React 组件动态加载内容
- **响应式**: 支持实时热更新

## 优势

1. **内容与代码分离**: 写作时只需关注内容，无需接触代码
2. **Markdown 支持**: 使用熟悉的 Markdown 语法编写
3. **类型安全**: TypeScript 确保数据结构正确
4. **易于维护**: 清晰的目录结构和文件组织
5. **扩展性强**: 可轻松添加新的内容类型和字段

## 下一步扩展

- 添加文章分类功能
- 实现标签过滤
- 支持文章搜索
- 添加评论系统
- 实现 RSS 订阅

## 注意事项

目前系统使用模拟数据进行演示。在生产环境中，你可以：

1. 使用构建时静态生成（SSG）
2. 集成 CMS 系统
3. 使用 Git 作为内容管理后端
4. 添加在线编辑器

这个系统为你提供了一个强大而灵活的内容管理基础，可以根据需要进一步定制和扩展。