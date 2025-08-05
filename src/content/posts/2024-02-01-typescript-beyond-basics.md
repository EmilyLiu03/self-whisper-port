---
title: "TypeScript: Beyond the Basics"
date: "2024-02-01"
excerpt: "Explore advanced TypeScript features that will supercharge your development workflow and catch bugs before they happen."
readTime: "10 min read"
tags: ["TypeScript", "JavaScript", "Tools"]
featured: false
slug: "typescript-beyond-basics"
---

# TypeScript: Beyond the Basics

TypeScript 已经成为现代 JavaScript 开发的标准工具。虽然基础的类型注解很有用，但 TypeScript 的真正威力在于它的高级特性。

## 高级类型系统

### 1. 联合类型和交叉类型

```typescript
// 联合类型
type Status = 'loading' | 'success' | 'error';

// 交叉类型
type User = {
  name: string;
  email: string;
};

type Admin = {
  permissions: string[];
};

type AdminUser = User & Admin;
```

### 2. 条件类型

```typescript
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T };

type StringResponse = ApiResponse<string>; // { message: string }
type DataResponse = ApiResponse<User[]>;   // { data: User[] }
```

### 3. 映射类型

```typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

## 实用工具类型

### Pick 和 Omit

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// 只选择特定字段
type PublicUser = Pick<User, 'id' | 'name' | 'email'>;

// 排除特定字段
type UserWithoutPassword = Omit<User, 'password'>;
```

### Record 类型

```typescript
type Theme = 'light' | 'dark';
type Colors = Record<Theme, {
  primary: string;
  secondary: string;
}>;

const colors: Colors = {
  light: { primary: '#000', secondary: '#666' },
  dark: { primary: '#fff', secondary: '#ccc' }
};
```

## 高级模式

### 1. 品牌类型（Branded Types）

```typescript
type UserId = string & { readonly brand: unique symbol };
type ProductId = string & { readonly brand: unique symbol };

function createUserId(id: string): UserId {
  return id as UserId;
}

function getUser(id: UserId) {
  // 只接受 UserId 类型
}
```

### 2. 模板字面量类型

```typescript
type EventName<T extends string> = `on${Capitalize<T>}`;

type ClickEvent = EventName<'click'>; // 'onClick'
type HoverEvent = EventName<'hover'>; // 'onHover'
```

### 3. 递归类型

```typescript
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object 
    ? DeepReadonly<T[P]> 
    : T[P];
};
```

## 配置优化

### tsconfig.json 最佳实践

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitOverride": true
  }
}
```

## 性能优化

### 1. 使用 const assertions

```typescript
const themes = ['light', 'dark'] as const;
type Theme = typeof themes[number]; // 'light' | 'dark'
```

### 2. 避免过度复杂的类型

复杂的类型会影响编译性能，保持类型简洁明了。

## 总结

掌握这些高级 TypeScript 特性可以让你写出更安全、更表达性强的代码。记住，类型系统是为了帮助你，而不是阻碍你。合理使用这些特性，可以大大提升开发体验和代码质量。