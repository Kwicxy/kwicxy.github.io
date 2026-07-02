---
layout: post
title: 第5章 过滤器与监听器
date: 2026-01-13 02:49:31
categories:
  - 课程笔记
  - Web开发技术
tags:
  - Java
  - Servlet
  - 后端
---

# 监听器 Listener
## 会话事件 HttpSessionEvent
1. `sessionCreated`
2. `sessionDestroyed`
3. `getSession()`: 获取当前涉及的 Session 对象。

## 会话监听器 HttpSessionListener
用于监听 HttpSession 的创建和销毁事件。
- 当 Web 容器创建一个新的 HttpSession 时，触发 `sessionCreated`。
- 当 HttpSession 失效（超时或调用 invalidate）时，触发 `sessionDestroyed`。

## 示例代码
下面这段代码通过实现 HttpSessionListener，监听 sessionCreated 和 sessionDestroyed 事件，实现统计当前在线人数的功能。
```java
@WebListener
public class OnlineUsersListener implements HttpSessionListener {
    // 必须是 static 或者是存放在 Application 域中
    public static int counter = 0;
    
    @Override
    public void sessionCreated(HttpSessionEvent se) {
        OnlineUsersListener.counter++;
        System.out.println("New session created. Count: " + counter);
    }
    
    @Override
    public void sessionDestroyed(HttpSessionEvent se) {
        OnlineUsersListener.counter--;
        System.out.println("Session destroyed. Count: " + counter);
    }
}
```

# 过滤器 Filter
如性能评测、用户验证、字符替换、编码设置这类的需求，应该设计为独立的元件，可以随时加入应用程序中，也可以随时移除，或可以随时修改设置而不用修改原有的程序。
这类元件就像是一个过滤器，安插在浏览器与 Servlet 中间，可以过滤请求与响应。

+++ 补充：面向切面编程 AOP
AOP (Aspect Oriented Programming) 即面向切面编程。
想象一下，我们在切面包（业务逻辑）的时候，每一片面包都需要涂上果酱（日志、权限检查）。
我们不需要在制作面包的时候就涂进去，而是切开后统一涂抹。
Filter 就是一种 AOP 的实现，它将通用的逻辑从业务逻辑中剥离出来，统一处理。
+++

## Filter 接口

从 Filter 接口的定义可以看到，过滤器要实现三个方法：init(), doFilter(), 以及 destroy()

```java
public interface Filter {
    public default void init(FilterConfig filterConfig) throws ServletException {}
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) 
                throws IOException, ServletException;
    public default void destroy() {}
}
```

## GenericFilter 与 HttpFilter
类似 GenericServlet 与 Servlet 的关系，GenericFilter 对 FilterConfig 以及一些初始参数进行了封装。
同理，它的继承者 HttpFilter 也提供了处理 HTTP 协议的具体实现。通常在 Servlet 4.0+ 环境下，我们可以直接继承 `HttpFilter` 来简化 HTTP 请求的过滤处理。

## FilterChain 过滤器链
该接口用于定义一个 Filter 链的对象应该对外提供的方法，这个接口只定义了一个 doFilter 方法，
用于通知 Web 容器把请求交给 Filter 链中的下一个 Filter 去处理，如果当前调用此方法的 Filter 对象是 Filter 链中的最后一个，那么将把请求交给目标 Servlet 程序去处理。


## 配置 web.xml
```xml
<filter>
    <filter-name>EncodingFilter</filter-name>
    <filter-class>com.kwicxy.filter.EncodingFilter</filter-class>
    <init-param>
        <param-name>encoding</param-name>
        <param-value>UTF-8</param-value>
    </init-param>
</filter>
<filter-mapping>
    <filter-name>EncodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```
或者使用注解 `@WebFilter`。

## 示例代码
下面这段代码构造了一个登录验证的过滤器 LoginFilter 用于验证会话登录:
```java
@WebFilter("/*")
public class LoginFilter extends HttpFilter {
    @Override
    protected void doFilter(HttpServletRequest req, HttpServletResponse res, FilterChain chain) 
            throws IOException, ServletException {
        
        String uri = req.getRequestURI();
        // 放行静态资源和登录页
        if (uri.contains("login.jsp") || uri.contains("/assets/")) {
            chain.doFilter(req, res);
            return;
        }

        HttpSession session = req.getSession(false);
        if (session != null && session.getAttribute("user") != null) {
            chain.doFilter(req, res); // 已登录，放行
        } else {
            res.sendRedirect(req.getContextPath() + "/login.jsp"); // 未登录，跳转
        }
    }
}
```

下面这段代码构造了一个请求编码的过滤器 EncodingFilter 用于统一设置字符编码:
```java
public class EncodingFilter implements Filter {
    private String encoding;

    @Override
    public void init(FilterConfig config) {
        this.encoding = config.getInitParameter("encoding");
        if (this.encoding == null) {
            this.encoding = "UTF-8";
        }
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) 
            throws IOException, ServletException {
        req.setCharacterEncoding(encoding);
        chain.doFilter(req, resp);
    }
}
```
