---
layout: post
title: 第2章 Servlet基础
date: 2026-01-12 21:49:31
mermaid: true
categories:
  - 软件工程
  - Web开发技术
tags:
  - Java
  - Servlet
  - 后端
---

# Servlet 类与接口

+++ Servlet 类图
![servlet-diagram](/assets/web-dev/servlet-diagram.svg)
+++

+++ 用户请求时序图
![servlet-sequence](/assets/web-dev/servlet-sequence.svg)
+++

## Servlet 接口

定义了 Servlet 的生命周期方法：

1. `init(config: ServletConfig)`: 初始化
    - 调用：**第一个用户**的**第一次访问**
    - 目的是为了在处理客户端请求前完成一些初始化的工作，如建立数据库连接、读取资源文件信息等；
2. `service(req: ServletRequest, resp: ServletResponse)`: 服务
    - 调用：**每一个用户**的**每一次访问**++
    - 用于处理客户端的请求并返回响应对象
3. `destroy()`: 销毁
    - 调用：**最后一个用户**的**最后一次访问**
    - 当Web容器关闭或者检测到一个 Servlet 要从容器中被删除时，会自动调用destroy()方法，以便让该实例释放掉所占用的资源

### ServletRequest 请求接口

1. **attribute** 相关
   `getAttribute(name: String) -> Object`
   获取请求域中的属性值。通常用于在请求转发（RequestDispatcher）时传递数据。
   `setAttribute(name: String, obj: Object)`
   在请求域中存储属性值。

2. **parameter** 相关
   `getParameter(name: String) -> String`
   获取客户端发送的请求参数值（如表单数据或 URL 查询参数）。

### ServletResponse 响应接口

1. `getWriter() -> PrintWriter`
   获取一个字符输出流 `PrintWriter`，用于向客户端发送文本响应内容。
2. `setContentType(type: String)`
   设置响应的内容类型（MIME Type）及字符编码，如 `text/html;charset=UTF-8`。让浏览器知道如何解析响应数据。

## GenericServlet 抽象类

实现自 [`Servlet`](#servlet-接口)

定义了一个通用的、不依赖于具体协议的Servlet，它给出了除service()方法外的其他四个方法的简单实现；

用户要编写一个通用的Servlet (TCP/IP)，只需要从GenericServlet类中继承，并实现`service()`;

- `init()`
   不同于Servlet的init，这里的init是**无参**的，因为GenericServlet实现了ServletConfig的传入；

## HttpServlet 抽象类

继承自 [`GenericServlet`](#genericservlet-抽象类)

HttpServlet提供了重载的`service(req: HttpServletRequest, resp: HttpServletResponse)`方法，并定义了七个`do*`方法。

+++ 为什么定义了七个 `do*` 方法

**RESTful编程: **

HTTP协议支持的方法有GET、POST、PUT、PATCH、DELETE，以及OPTIONS和TRACE。

在RESTful架构中，使用这些方法来操作资源。

在编程中，需要根据应用程序的需求选择合适的HTTP方法来操作资源。

1. `doGet`: **获取**资源
   用于处理 GET 请求，一般用于读取数据。
2. `doPost`: **创建**资源
   用于处理 POST 请求，一般用于提交表单或上传文件。
3. `doPut`: **修改**资源
   用于处理 PUT 请求，通常用于更新资源。
4. `doPatch`: **修改部分**资源
   用于处理 PATCH 请求，对资源进行部分更新。
5. `doDelete`: **删除**资源
   用于处理 DELETE 请求，删除指定的资源。
6. `doOptions`: **获取支持的方法**
   用于获取服务器支持的 HTTP 请求方法。
7. `doTrace`: **追踪路径**
   用于回显服务器收到的请求，主要用于测试或诊断。

+++

### HttpServletRequest 请求接口

继承自 [`ServletRequest`](#servletrequest-请求接口)

1. `getSession() -> HttpSession`
   获取当前请求关联的 Session 对象。如果不存在，默认会创建一个新的。
2. `getContextPath() -> String`
   获取当前 Web 应用的上下文路径（Context Path），即项目部署名。

### HttpServletResponse 响应接口

继承自 [`ServletResponse`](#servletresponse-响应接口)

1. `addCookie(cookie: Cookie)`
   向响应中添加一个 Cookie，浏览器接收到后会保存该 Cookie。
2. `sendRedirect(location: String)`
   发送一个重定向响应，通知浏览器访问新的 URL 地址（状态码 302）。

## ServletConfig 配置接口

1. `getInitParameter(name: String) -> String`
   根据参数名获取 Servlet 的初始化参数值（在 web.xml 或注解中配置）。
2. `getServletName() -> String`
   获取当前 Servlet 的名称。
3. `getServletContext() -> ServletContext`
   获取当前 Web 应用的 ServletContext 对象（应用上下文）。

### ServletContext 上下文接口

1. attribute 相关
   `getAttribute(name: String)`
   获取应用域（全局）中的属性值。
   `setAttribute(name: String, obj: Object)`
   在应用域中存储属性值，所有 Servlet 共享。
2. resource 相关
   `getResourcePaths(path: String) -> Set<String>`
   获取指定路径下的所有资源路径列表。
   `getResourceStream(path: String) -> InputStream`
   获取指定路径资源的输入流，用于读取资源文件内容。

# 代码示例
## HelloServlet
下面的代码实现了一个简单的 Servlet 来展示基本的生命周期，输出 `Hello, world!`

```java

import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "helloServlet", value = "/hello-servlet")
public class HelloServlet extends HttpServlet {
    private String message;

    // Servlet 初始化
    public void init() {
        System.out.println("HelloServlet.init");
        message = "Hello World!";
    }

    // service 的实现 - 处理 GET 请求
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1>" + message + "</h1>");
        out.println("</body></html>");
    }

    // Servlet 销毁
    public void destroy() {
        System.out.println("HelloServlet.destroy");
    }
}
```

##
