# Ray 官方示例项目

[English](README.md) | [简体中文](README_zh.md)

本项目包含了丰富的组件示例和API演示，帮助开发者快速了解和掌握 Ray 框架的使用方法。

## 🛠️ 安装与运行

### 环境要求

- Node.js >= 12.0.0
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发模式

```bash
npm run start
# 或
yarn start
```

### 构建项目

```bash
npm run build
# 或
yarn build
```

## 📁 项目结构

```
├── src/
│   ├── api/                # API 示例页面
│   ├── basic/              # 基础组件示例
│   ├── components/         # 可复用组件库
│   ├── pages/              # 页面组件
│   ├── common/             # 公共组件
│   ├── utils/              # 工具函数
│   ├── app.tsx             # 应用入口
│   └── routes.config.ts    # 路由配置
├── public/                 # 静态资源
├── typings/                # 类型定义
├── package.json            # 项目配置
├── project.tuya.json       # 涂鸦项目配置
└── ray.config.ts           # Ray 框架配置
```

## 🔗 相关链接

- [Ray 官方文档](https://developer.tuya.com/cn/miniapp/develop/ray/guide/overview?source=platform)