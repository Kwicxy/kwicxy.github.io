---
layout: post
title: 移动开发期末
date: 2025-12-25 16:07:44
categories:
  - 软件工程
  - 移动开发技术
tags:
  - Vue
  - 前端
---

# 期末考试

## 组成

- 平时成绩 60%
    - 考勤 20%
    - 平时项目 40%
- 期末考试 40%

考试时间 2026-01-07 9:00~11:00  
地点 2-S430

## 题型

- 单选题 2分 \* 10题 = 20分
- 判断题 1分 \* 10题 = 10分
- 简答题 5分 \* 6题 = 30分
- 程序设计题 40分

# 复习笔记

## Vue 基础与开发模式

### 开发模式

MVC \-\> MVVM

- `Model` 数据
- `View` 视图
- `ViewModel` 连接（将数据变化映射到视图更新）

### Vue 核心特点（Vue 3）

- 轻量、渐进式框架
- 组件化开发（Component-Based）
- 响应式系统（Reactivity）
- 声明式渲染（声明“是什么”，框架负责“怎么更新”）
- 单文件组件 SFC：`.vue`（`template` / `script` / `style`）

### 什么是单页 Web 应用（SPA）

- 同一页面内基于路由切换视图，不整页刷新
- 通过 `<router-view />` 渲染当前路由对应组件
- 常见代价：首屏体积、SEO、路由与状态管理复杂度

### 性能相关

- 懒加载（按需加载路由组件）
- 组件拆分与异步组件（Async Component）
- 列表渲染的 `key`
- 避免不必要的响应式追踪与重复渲染

### 插值与表达式

- 文本插值：`{{ msg }}`
- 支持简单 JS 表达式（不建议写复杂逻辑，复杂逻辑放到 `computed` / 方法中）


## `v-*` 指令

- `v-text` 以文本形式渲染标签内容
- `v-html` 以 HTML 形式渲染内容
    - 注意 XSS 风险，不要渲染不可信内容
- `v-bind:attr="expr"` 简写 `:attr="expr"`
    - class 绑定
        - 对象语法：`:class="{ active: isActive }"`
        - 数组语法：`:class="[clsA, clsB]"`
    - style 绑定
        - 对象语法：`:style="{ color: c }"`
        - 数组语法：`:style="[styleA, styleB]"`
- `v-on` 事件绑定
    - `v-on:click="fn"` 简写 `@click="fn"`
    - 修饰符
        - `.prevent` 阻止默认事件
        - `.stop` 阻止冒泡
        - `.capture` 捕获阶段触发
        - `.once` 只触发一次
        - `.passive` 主要用于 `scroll/touch` 优化
    - 按键修饰符
        - `@keyup.enter="fn"`，常见：`.enter` `.esc` `.tab` `.space`
    - 系统修饰符
        - `.ctrl` `.shift` `.alt` `.meta`
- `v-model` 双向绑定（本质是 `:modelValue` + `@update:modelValue`）
    - `.number` 转数字
    - `.trim` 去除首尾空白
    - `.lazy` 改为 `change` 事件同步
    - 在组件上使用 `v-model`
        - 默认 `v-model="x"` 对应 `modelValue` / `update:modelValue`
        - 可带参数：`v-model:count="cnt"`
- `v-if` / `v-else-if` / `v-else`
    - 条件不成立时不会渲染 DOM（真正创建/销毁）
    - 适合切换不频繁场景
- `v-show`
    - 始终渲染，仅切换 `display: none`
    - 适合频繁显示/隐藏
- `v-for`
    - `v-for="item in list"` / `v-for="(item, idx) in list"`
    - `key` 必须稳定且唯一（不建议用 `idx` 作为 key）
    - `v-for` 与 `v-if` 同元素不推荐混用（优先使用计算属性过滤列表）

## 组合式 API（Composition API）与响应式

### `ref`

- 用于基本类型或需要“单值引用”的场景
- 定义：`const foo = ref(init)`
- 模板中自动解包，脚本中用 `foo.value`

### `reactive`

- 用于对象/数组
- 返回 Proxy
- 注意解构会丢失响应性（需要 `toRefs` / `toRef`）

### `toRef` / `toRefs`

- `toRef(obj, 'a')` 把对象属性变成 ref
- `toRefs(obj)` 将对象所有属性转为 refs（常用于解构）

### 响应式工具（常用）

- `computed(() => expr)`
    - 具缓存，依赖不变不会重复计算
    - 可写入 computed（`get/set`）用于双向派生
- `watch(source, (newVal, oldVal) => {})`
    - `source` 可以是 `ref`、getter、数组等
    - 常用选项：`immediate`、`deep`、`flush`
- `watchEffect(() => {})`
    - 自动收集依赖
    - 适用于依赖动态变化的副作用

## 生命周期（Composition API）

- `onBeforeMount`
- `onMounted`
- `onBeforeUpdate`
- `onUpdated`
- `onBeforeUnmount`
- `onUnmounted`
  补充理解要点：
- DOM 可用性：一般在 `onMounted` 后才能安全访问真实 DOM
- 清理副作用：在 `onUnmounted` 里清理定时器、事件监听、订阅等

## 组件化开发

### 组件基础

- Props：父 -> 子（单向）
    - 子：`defineProps({ prop: String })`
    - 父：`prop="foo"`，动态 `:prop="x"`
    - 注意：不要在子组件内直接修改 prop（需要 emit 或复制到本地 state）
- Emits：子 -> 父
    - 子：`defineEmits(['demo'])`
    - 父：`@demo="handleDemo"`
- Slots：内容分发
    - 默认插槽、具名插槽、作用域插槽（slot props）

### 跨级通信

- `provide` / `inject`
    - 适合依赖注入、主题、配置、表单上下文等
    - 注入值最好保持稳定引用（必要时用 `readonly` 或 `computed` 包装）

### 组件状态与数据流建议

- 状态提升：共享状态放到共同父组件
- 复杂共享：使用 Pinia（常见的官方推荐生态）

## 路由（Vue Router）

- 基本概念：`routes`、`path`、`component`
- 动态路由：`/user/:id`
- 路由参数与查询：`params` / `query`
- 路由守卫
    - 全局守卫：鉴权、埋点
    - 组件内守卫：离开确认、数据预取策略
- 懒加载
    - `component: () => import('...')`

## 状态管理（Pinia 概念）

- store：state / getters / actions
- 与组件交互：直接使用 store（替代大量跨层 props/emit）
- 注意异步 action 的错误处理与加载状态

## 样式与工程化

### 解决样式冲突

- `scoped`
    - 原理：为选择器加属性选择器实现隔离
- `:deep()` 选择器
    - 用于穿透子组件作用域样式

### 资源引用

- `public/`：不经构建处理，按路径原样访问
- `src/assets/`：参与打包构建，适合被模块引用的资源

### Vue Router 路由

#### 1. 定义路由表 `router/index.ts`（或 `router/index.js`）

重点：`routes` 里用 `component`，不是 `content`。

```javascript
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },

    // 重定向
    { path: '/home', redirect: '/' },

    // 动态路由
    {
      path: '/page/:id',
      name: 'pageDetail',
      component: () => import('@/pages/PageDetail.vue')
    },

    // 404
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/pages/NotFound.vue')
    }
  ]
})
```

#### 2. 在入口文件挂载路由

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

createApp(App).use(router).mount('#app')
```

#### 3. 嵌套路由（children）

嵌套路由需要父组件里有 `<router-view />` 才能显示子路由。

```javascript
{
  path: '/admin',
  component: () => import('@/pages/admin/AdminLayout.vue'),
  children: [
    { path: '', redirect: '/admin/dashboard' },
    { path: 'dashboard', component: () => import('@/pages/admin/Dashboard.vue') },
    { path: 'users', component: () => import('@/pages/admin/UserList.vue') }
  ]
}
```

#### 4. 使用路由：声明式导航与编程式导航

`router-link`：

```javascript
<template>
  <router-link to="/">Home</router-link>
  <router-link :to="{ name: 'pageDetail', params: { id: '42' } }">Detail</router-link>
</template>
```

编程式导航：

```vue
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goSomewhere = async () => {
  await router.push({ name: 'pageDetail', params: { id: '42' }, query: { from: 'home' } })
}
</script>
```

#### 5. 读取 params 与 query

```vue
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pageId = computed(() => route.params.id)
const from = computed(() => route.query.from)
</script>
```

#### 6. 路由守卫（鉴权、埋点、预加载）

全局前置守卫：

```javascript
router.beforeEach((to, from) => {
  // 例：需要登录
  const needAuth = Boolean(to.meta && to.meta.needAuth)
  const isLogin = false

  if (needAuth && !isLogin) return { path: '/login', query: { redirect: to.fullPath } }
})
```

全局后置守卫：

```javascript
router.afterEach((to, from) => {
  document.title = typeof to.meta?.title === 'string' ? to.meta.title : 'app'
})
```

路由独享守卫（在路由项内）：

```javascript
{
  path: '/secret',
  component: () => import('@/pages/Secret.vue'),
  beforeEnter: (to) => {
    const ok = false
    if (!ok) return '/'
  }
}
```

组件内守卫（选项式 API 才有 `beforeRouteLeave` / `beforeRouteUpdate`）：

```javascript
export default {
  beforeRouteLeave(to, from, next) {
    const ok = window.confirm('Are you sure you want to leave?')
    next(ok)
  }
}
```

### Pinia 状态管理

#### 1. 安装与创建 pinia 实例

（工程化项目里通常在入口文件 `main.ts`/`main.js` 里注册）

```javascript
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

app.mount('#app')
```

#### 2. 创建 store（state / getters / actions）

建议每个 store 单独一个文件，例如 `stores/user.js`。

- `state`：数据源
- `getters`：类似 computed，用于派生状态
- `actions`：同步/异步逻辑

```javascript
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    name: '',
    roles: []
  }),

  getters: {
    isLogin: (st) => Boolean(st.token),
    roleCnt: (st) => st.roles.length
  },

  actions: {
    setToken(token) {
      this.token = token
    },

    logout() {
      this.token = ''
      this.name = ''
      this.roles = []
    },

    async fetchProfile() {
      // 示例：从接口拿用户信息
      // const res = await apiGet('/profile')
      // this.name = res.name
      this.name = 'demo'
      this.roles = ['user']
    }
  }
})
```

#### 3. 在组件中使用 store

```vue
<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const isLogin = computed(() => userStore.isLogin)

const login = async () => {
  userStore.setToken('abc')
  await userStore.fetchProfile()
}

const logout = () => {
  userStore.logout()
}
</script>
```

补充：如果要解构 store 属性，同时保持响应式，可以用 `storeToRefs`。

```vue
<script>
  import {storeToRefs} from "pinia";

  const userStore = useUserStore();
  const {token, name} = storeToRefs(userStore);
</script>
```

#### 4. pinia-plugin-persist 持久化

用途：把 store 的部分/全部 state 保存到 `localStorage` 或 `sessionStorage`，刷新页面后仍可恢复。

安装（pnpm）：

```bash
pnpm add pinia-plugin-persist
```

注册插件（在创建 pinia 后调用 `pinia.use(...)`）：

```javascript
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

const pinia = createPinia()

pinia.use(piniaPersist)
```

在 store 里开启持久化：

```javascript
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    name: '',
    roles: []
  }),

  actions: {
    setToken(token) {
      this.token = token
    }
  },

  persist: {
    enabled: true,

    // 默认 key 是 store id（这里是 user），也可以自定义
    strategies: [
      {
        key: 'user',
        storage: localStorage,

        // 只持久化必要字段，避免把敏感信息或大对象写进去
        paths: ['token', 'name']
      }
    ]
  }
})
```
