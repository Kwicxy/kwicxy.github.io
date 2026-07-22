---
layout: post
title: 第4章 会话管理与作用域
description: 梳理 Cookie、Session、作用域对象和会话跟踪机制，说明 Web 应用状态管理的实现方法。
date: 2026-01-13 02:09:31
categories:
  - 课程笔记
  - Web开发技术
tags:
  - Java
  - Servlet
  - 后端
---
> 梳理 Cookie、Session、作用域对象和会话跟踪机制，说明 Web 应用状态管理的实现方法。

# 会话管理

HTTP协议本身是基于请求/响应模式的，无状态的协议；

作为Web服务器来说，必须能够：

- 采用一种机制来唯一的表示一个用户（目标一）
- 同时记录该用户的状态（目标二），即对用户进行会话管理。

## Cookie

Cookie 是服务器通知客户端保存键值对的一种技术。客户端有了 Cookie 后，每次请求都发送给服务器。

每个 Cookie 的大小不能超过 4kb 。

### Cookie 常用方法

1. `new Cookie(name: String, value: String)`
   创建一个 Cookie 对象。
2. `setMaxAge(expiry: int)`
   设置 Cookie 的最大生存时间（秒）：
    - **正数**：表示在指定的秒数后过期。
    - **负数**：默认值，表示浏览器关闭时销毁（会话级 Cookie）。
    - **0**：表示立即销毁。
3. `setPath(uri: String)`
   设置 Cookie 的路径，只有访问该路径及其子路径时才会发送 Cookie。
4. `getName() -> String`
   获取 Cookie 的名称。
5. `getValue() -> String`
   获取 Cookie 的值。

### Cookie 的使用

1. **服务器发送 Cookie**
   ```java
   Cookie cookie = new Cookie("user", "Senpai");
   cookie.setMaxAge(60 * 60); // 1小时
   resp.addCookie(cookie);
   ```

2. **服务器获取 Cookie**
   ```java
   Cookie[] cookies = req.getCookies();
   // 需要判空，首次访问可能为 null
   if (cookies != null) {
       for (Cookie c : cookies) {
           if ("user".equals(c.getName())) {
               // Found it
           }
       }
   }
   ```

## Session

Session 是服务器用来维护一个客户端请求会话对象的技术。服务器会为每个客户端创建一个唯一的 Session 对象，并分配一个唯一的 ID (JSESSIONID)。

### HttpSession 常用方法

1. `req.getSession() -> HttpSession`
   创建或获取 Session 对象。如果存在则返回，不存在则创建。
2. `req.getSession(create: boolean) -> HttpSession`
    - `true`: 同 `getSession()`。
    - `false`: 只获取，不存在则返回 `null`。
3. `isNew() -> boolean`
   判断是否是新创建的 Session。
4. `getId() -> String`
   获取 Session 的唯一标识 ID。
5. `setAttribute(name: String, value: Object)`
   保存数据到 Session 域中。
6. `getAttribute(name: String) -> Object`
   从 Session 域中获取数据。
7. `setMaxInactiveInterval(interval: int)`
   设置 Session 的超时时间（秒）。Tomcat 默认是 30 分钟。
8. `invalidate()`
   强制销毁 Session，常用于注销登录。

### Session 的生命周期

1. **创建**
    - 第一次调用 `request.getSession()` 时创建。

2. **销毁**
    - **超时**：距离上一次请求超过了设定的时间。
    - **手动销毁**：调用 `session.invalidate()`。
    - **意外**：服务器非正常关闭。

+++ Session 原理
Session 依靠 Cookie 来识别客户端。
当服务器创建 Session 时，会将其 JSESSIONID 作为 Cookie 发送给客户端：
`Set-Cookie: JSESSIONID=...`
下次请求时，客户端会带上这个 JSESSIONID，服务器凭此找到对应的 Session 对象。
+++

### Cookie 禁用与 URL 重写

如果客户端禁用了 Cookie，浏览器就不会保存 JSESSIONID，导致每次请求都会创建新的 Session。

为了解决这个问题，可以使用 **URL 重写** 方法，将 JSESSIONID 直接附加在 URL 后面。

1. `response.encodeURL(url: String) -> String`
   用于重写表单 `action` 或超链接 `href` 的 URL。
2. `response.encodeRedirectURL(url: String) -> String`
   用于重写请求转发 `response.sendRedirect()` 的 URL。

这样生成的 URL 会类似：`index.jsp;jsessionid=3E114514...`

## ServletContext

ServletContext 是一个接口，表示 Servlet 上下文对象。
Web 容器启动的时候，会为每个 Web 应用创建一个 ServletContext 对象。
ServletContext 对象在 Web 应用启动时创建，在 Web 应用停止时销毁。

### ServletContext 的作用

1. **获取 web.xml 中配置的上下文参数**
   通过 `<context-param>` 标签配置，所有 Servlet 都可以获取。
2. **获取当前的工程路径**
   即 URL 中项目名的部分。
3. **获取工程部署后在服务器硬盘上的绝对路径**
   用于文件上传下载等文件操作。
4. **全局数据共享**
   作为域对象，其作用范围是整个 Web 应用。

### 常用方法

1. `getInitParameter(name: String) -> String`
   获取 web.xml 中配置的上下文参数。
2. `getContextPath() -> String`
   获取当前的工程路径，格式如: `/my-app`。
3. `getRealPath(path: String) -> String`
   获取在服务器上的绝对路径。
   - `getRealPath("/")`: 获取工程根目录在服务器上的绝对路径。
4. `setAttribute(name: String, obj: Object)`
   保存数据，整个应用共享。
5. `getAttribute(name: String) -> Object`
   获取数据。

### 代码示例

```java
// 1. 获取 ServletContext 对象
ServletContext context = getServletContext();

// 2. 获取参数
String username = context.getInitParameter("username");

// 3. 获取工程路径
String ctxPath = context.getContextPath(); // "/my-web"

// 4. 获取绝对路径
// /Users/tomcat/webapps/my-web/css/style.css
String realPath = context.getRealPath("/css/style.css"); 
```

# 四大作用域

对象的有效范围从大到小排列：

1. **ServletContext (应用域)**
    - 有效期：整个 Web 应用启动到停止。
    - 作用：全局共享数据。
2. **HttpSession (会话域)**
    - 有效期：一次会话（浏览器打开到关闭/超时）。
    - 作用：用户登录信息、购物车。
3. **HttpServletRequest (请求域)**
    - 有效期：一次请求（包含转发的过程）。
    - 作用：在 Servlet 和 JSP 之间传递数据。
4. **PageContext (页面域)**
    - 有效期：当前 JSP 页面。
    - 作用：局部变量（JSP 特有）。