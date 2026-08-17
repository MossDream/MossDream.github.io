# MossDream Blog

MossDream 的静态个人博客。站点已从 Hexo/Butterfly 的已生成产物重构为 Astro 内容驱动项目：仓库只维护文章、组件和设计系统，首页、文章页、归档、分页、标签、轨迹、RSS、搜索索引与站点地图全部在构建时生成。

## 技术原则

- **静态优先**：生产环境只提供 HTML、CSS、少量原生 JavaScript 和本地资源，没有数据库或服务端运行时。
- **内容单一来源**：每篇文章只对应 `src/content/posts/` 中的一个 Markdown 文件，不再维护几十份重复 HTML。
- **零框架运行时**：没有 React/Vue 水合，也没有 jQuery、远程主题脚本、统计器或视觉特效 CDN。
- **默认安全**：内容在迁移时清除了脚本、iframe、内联事件和 `javascript:` URL；页面使用带哈希许可的 CSP。
- **可回归**：`scripts/check-build.mjs` 检查全部历史 URL、内部链接、锚点、SEO 唯一性、搜索/RSS、吉祥物 alpha 通道以及复杂文章组件基线。

## 目录

```text
src/
├─ assets/                 # 由 Astro 优化的视觉资源
├─ components/             # 导航、卡片、搜索、目录等可复用组件
├─ content/
│  ├─ posts/               # 13 篇文章；一篇一个 Markdown 文件
│  └─ pages/               # 随笔等长内容页
├─ layouts/                # 全站 SEO、安全策略和公共框架
├─ pages/                  # 路由模板与 JSON/XML 静态端点
├─ scripts/                # 浏览器端渐进增强
└─ styles/                 # 单一全局设计系统
public/                    # 验证文件、favicon 与正文图片
scripts/check-build.mjs    # 生产构建回归检查
```

归档、标签、轨迹及分页目录都不会写回仓库；它们只存在于构建产物 `dist/`。

## 本地开发

需要 Node.js 22.12 以上版本，CI 固定使用 Node.js 24 与 npm 12.0.1。

```bash
npm ci
npm run dev
```

生产验证：

```bash
npm run ci
```

`npm run ci` 会先执行 Astro 严格类型检查与生产构建，再检查历史路由、链接、内容完整性和安全约束。

## 新增或修改文章

在 `src/content/posts/` 新建或修改一个 `.md` 文件。文件顶部使用 JSON 格式的 frontmatter，正文可以写 Markdown，也可以继续使用迁移后保留的语义 HTML：

```md
---
{
  "slug": "example-note",
  "title": "文章标题",
  "description": "用于搜索和 SEO 的简短说明。",
  "excerpt": "用于文章列表的摘要。",
  "published": "2026-08-16T00:00:00.000Z",
  "updated": "2026-08-16T00:00:00.000Z",
  "tags": ["Astro"],
  "categories": ["学习笔记", "Web"]
}
---

正文从这里开始。
```

路由、目录、字数、阅读时间、搜索记录、RSS、标签与轨迹页面会自动更新。正文不允许加入脚本、iframe、内联事件处理器或 `javascript:` URL，构建检查会拒绝这些内容。

## 部署

`.github/workflows/deploy.yml` 使用 Astro 官方 Pages action。在 GitHub 仓库中将 Pages Source 设为 **GitHub Actions** 后，推送到 `main` 会执行完整验证并部署 `dist/`。本地改动本身不会自动提交或推送。
