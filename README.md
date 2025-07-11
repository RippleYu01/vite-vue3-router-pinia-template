# Ripple Vue3 + Vite 项目模板

一个基于 Vue3 + Vite 的现代化前端项目模板，集成了 Axios、Vue Router、Pinia 等常用工具，提供了完整的项目结构和配置。

## 作者

- Ripple_Yu

## 🚀 技术栈

- **Vue 3.5.13** - 渐进式 JavaScript 框架
- **Vite 6.3.5** - 下一代前端构建工具
- **Vue Router 4.5.1** - Vue.js 官方路由管理器
- **Pinia 3.0.3** - Vue 的状态管理库
- **Axios 1.10.0** - 基于 Promise 的 HTTP 客户端

## 📁 项目结构

```
Ripple-vite-demo/
├── public/                 # 静态资源目录
├── src/                    # 源代码目录
│   ├── api/               # API 接口管理
│   │   ├── index.js       # API 统一导出
│   │   └── user.js        # 用户相关 API
│   ├── assets/            # 静态资源
│   │   ├── vite.svg
│   │   └── vue.svg
│   ├── components/        # 公共组件
│   │   └── HelloWorld.vue
│   ├── router/            # 路由配置
│   │   └── index.js       # 路由主文件
│   ├── stores/            # Pinia 状态管理
│   │   └── counter.js     # 计数器状态管理
│   ├── utils/             # 工具函数
│   │   └── request.js     # Axios 封装
│   ├── views/             # 页面组件
│   │   ├── axiosView.vue  # Axios 示例页面
│   │   ├── homeView.vue   # 首页
│   │   └── piniaView.vue  # Pinia 示例页面
│   ├── App.vue            # 根组件
│   ├── main.js            # 应用入口
│   ├── style.css          # 全局样式
│   └── components.d.ts    # 组件类型声明
├── index.html             # HTML 模板
├── package.json           # 项目依赖配置
├── vite.config.js         # Vite 配置文件
└── README.md              # 项目说明文档
```

## ✨ 主要功能

### 🔧 开发配置
- **自动导入**: 配置了 `unplugin-auto-import` 和 `unplugin-vue-components`，自动导入 Vue、Vue Router、Pinia 的 API
- **路径别名**: 配置了 `@` 指向 `src` 目录，`components` 指向 `src/components` 目录
- **代理配置**: 配置了开发服务器代理，支持 API 请求转发
- **构建优化**: 配置了代码分割、静态资源优化等构建策略

### 🌐 网络请求
- **Axios 封装**: 在 `src/utils/request.js` 中封装了 Axios，包含：
  - 请求/响应拦截器
  - 统一的错误处理
  - 支持环境变量配置
- **API 管理**: 在 `src/api/` 目录下统一管理 API 接口

### 🗂️ 状态管理
- **Pinia 集成**: 使用 Pinia 进行状态管理
- **示例 Store**: 提供了计数器示例，包含状态、计算属性和异步操作

### 🛣️ 路由管理
- **Vue Router 4**: 使用 Vue Router 4 进行路由管理
- **懒加载**: 路由组件支持懒加载，提升首屏加载速度

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发环境运行
```bash
npm run dev
```

### 生产环境构建
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

## 📝 使用说明

### 1. 添加新的 API 接口
在 `src/api/` 目录下创建新的 API 文件，例如：

```javascript
// src/api/example.js
import request from '@/utils/request'

export function getExampleData() {
  return request.get('/api/example')
}
```

然后在 `src/api/index.js` 中导出：

```javascript
export * from './example'
```

### 2. 创建新的页面
在 `src/views/` 目录下创建新的页面组件，然后在 `src/router/index.js` 中添加路由配置：

```javascript
{
    path: "/example",
    name: "example",
    component: () => import("@/views/exampleView"),
}
```

### 3. 创建新的 Store
在 `src/stores/` 目录下创建新的 Store 文件：

```javascript
// src/stores/example.js
export const useExampleStore = defineStore('example', {
    state: () => ({
        // 状态
    }),
    getters: {
        // 计算属性
    },
    actions: {
        // 方法
    }
})
```

### 4. 创建新的组件
在 `src/components/` 目录下创建组件，支持自动导入，无需手动 import。

## ⚙️ 环境变量配置

在项目根目录创建 `.env` 文件：

```env
VITE_API_BASE_URL=https://api.example.com
```

## 🔧 开发服务器配置

- **端口**: 520
- **自动打开**: 启动时自动打开浏览器
- **代理**: 配置了 `/api` 路径的代理转发

## 📦 构建配置

- **输出目录**: `dist`
- **源码映射**: 开发环境开启，生产环境关闭
- **代码分割**: 自动分离第三方库到 `vendor.js`
- **静态资源**: 按文件类型分类存储

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 Issue
- 发送邮件 2280954935@qq.com

---

⭐ 如果这个项目对您有帮助，请给它一个星标！
