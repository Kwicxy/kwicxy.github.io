---
layout: post
title: 第3章 Servlet请求与响应
date: 2026-01-12 23:49:31
mermaid: true
categories:
  - 课程笔记
  - Web开发技术
tags:
  - Java
  - Servlet
  - 后端
---

# 请求 ServletRequest
## 处理参数 Parameter

请求来到服务器时，Web 容器会创建 HttpServletRequest 实例来包装请求中的相关信息，HttpservletRequest
定义了取得请求信息的方法。例如，可以使用以下方法来取得请求参数：

1. `getParameter(name: String) -> String`
   指定请求参数名称来取得相应的值(String)，因此可能需要解析为基本类型(如Integer)
2. `getParameterValues(name: String) -> String[]`
   针对可复选的组件，如复选框CheckBox, 列表List等会出现一个参数名多个参数值的情况，返回一个String数组
3. `getParameterNames() -> Enumeration<String>`
   获取全部请求参数的名称，返回一个枚举对象。

   +++ 枚举对象的使用
   ```java
   
   Enumeration<String> e =req.getParameterNames();
   while(e.hasMoreElements()) {
      String param = e.nextElement();
   }
   ```
   +++

4. `getParameterMap() -> Map<String, String[]>`
   将请求参数以 Map 对象键值对返回

   +++ ParameterMap 的使用
   ```java
   
   Map<String, String[]> map = req.getParameterMap();
   for(Map.Entry<String, String[]> entry: map.entrySet()) {
       System.out.println(entry.getKey());
       System.out.println(Arrays.toString(entry.getValue()));
   }
   ```
   +++

+++ 示例代码
下面的 InputServlet 实现了一个简单的表单，它使用 POST 方法传递参数，并在 STDOUT 输出。

```java

@WebServlet(name="inputServlet", value="/input")
public class InputServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
                     throws ServletException, IOException {
        System.out.println(req.getParameter("name"));
        System.out.println(Integer.parseInt(req.getParameter("age")));
        System.out.println(Arrays.toString(req.getParameterValues("hobby")));
        Map<String, String[]> map = req.getParameterMap();
        for(Map.Entry<String, String[]> entry: map.entrySet()) {
            if(entry.getValue().length == 1) {
                System.out.print(entry.getKey());
                System.out.print(':');
                System.out.println(entry.getValue()[0]);
            } else {
                System.out.print(entry.getKey());
                System.out.print(':');
                System.out.println(Arrays.toString(entry.getValue()));
            }
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
                     throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        out.println("<html><body><form method=\"post\" action=\"input\">");
        out.println("<label for=\"name|\">name</label><input name=\"name\"/>");
        out.println("<label for=\"age\">age</label><input name=\"age\" type=\"number\"/>");
        out.println("<label for=\"hobby\">hobby</label><input type=\"checkbox\" name=\"hobby\" value=\"travel\">travel</input>");
        out.println("<input type=\"checkbox\" name=\"hobby\" value=\"reading\">reading</input>");
        out.println("<input type=\"checkbox\" name=\"hobby\" value=\"music\">music</input>");
        out.println("<input type=\"submit\">Submit</input>");
        out.println("</form></body></html>");
    }
}
```

+++

## 处理报头 Header

HTTP中包含了请求标头(Header)信息，HttpServletRequest 上设计了一些方法可以用来取得标头信息。

1. `getHeader(name: String) -> String`
   获取指定报头的值。如果不存在则返回 null。
2. `getHeaders(name:String) -> Enumeration<String>`
   某些报头可能出现多值（如 Accept-Language），此方法返回所有值的枚举。
3. `getHeaderNames() -> Enumeration<String>`
   获取请求中所有报头名称的枚举。
4. `getIntHeader(name: String) -> int`
   将报头值直接转换为整数。如果报头不存在返回 -1，如果转换失败则抛出 NumberFormatException。
5. `getDateHeader(name: String) -> long`
   将日期类型的报头（如 If-Modified-Since）转换为毫秒数。

+++ 示例代码

```java

@WebServlet(name = "headerServlet", value = "/headers")
public class HeaderServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
                     throws ServletException, IOException {
        resp.setContentType("text/plain;charset=UTF-8");
        PrintWriter out = resp.getWriter();
        
        Enumeration<String> names = req.getHeaderNames();
        while (names.hasMoreElements()) {
            String name = names.nextElement();
            String value = req.getHeader(name);
            out.println(name + ": " + value);
        }
    }
}

```

+++

## 处理编码 CharacterEncoding

1. 请求编码 (Request)
   `req.setCharacterEncoding(encoding: String)` 用于设置 POST 请求体（Body）的编码格式。

   **注意：** 必须在调用任何 getParameter() 方法之前调用此方法，否则配置将失效

   > 对于 GET 请求，参数位于 URL 中，现代 Web 容器（如 Tomcat 8+）通常默认使用 UTF-8 解析，不需要手动设置。

2. 响应编码 (Response)
   为了确保浏览器正常显示，还需设置响应的编码：
   `resp.setCharacterEncoding("UTF-8")`: 设置响应实体的编码。
   或 `resp.setContentType("text/html;charset=UTF-8")`: 同时设置 MIME 类型和浏览器解析时使用的编码。

+++ 示例代码
```java

@Override
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    // 1. 设置请求编码（针对 POST 参数）
    req.setCharacterEncoding("UTF-8");
    
    // 2. 设置响应内容及编码
    resp.setContentType("text/html;charset=UTF-8");
    
    String name = req.getParameter("name");
    resp.getWriter().println("你好, " + name);
}
```
+++

# 响应 ServletResponse

## 响应报头 Header
一般情况下，浏览器自动设置这些报头的信息，当然我们也可以使用 HttpServletResponse 对象来设置响应标头。

1. `setHeader(name: String, value: String)`
   设置指定标头的值。如果该标头已存在，新值将覆盖旧值。
2. `addHeader(name: String, value: String)`
   向现有标头添加值，允许一个标头对应多个值。
3. `setIntHeader(name: String, value: int)`
   设置整数值的标头。
4. `addIntHeader(name: String, value: int)`
   向现有标头添加整数值。
5. `setDateHeader(name: String, date: long)`
   设置日期值的标头（单位为毫秒）。
6. `addDateHeader(name: String, date: long)`
   向现有标头添加日期值。

+++ 示例代码
下面的代码演示了如何设置定时刷新以及如何禁止浏览器缓存。
```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    // 设置定时刷新，每 5 秒刷新一次页面
    resp.setHeader("Refresh", "5");
    
    // 告知浏览器不要缓存此资源
    resp.setDateHeader("Expires", 0);
    resp.setHeader("Cache-Control", "no-cache");
    resp.setHeader("Pragma", "no-cache");
    
    resp.getWriter().println("Current Time: " + new java.util.Date());
}
```
+++

## 状态代码 Status
有些标头必须搭配 HTTP 状态代码 (Status code)，可以通过 HttpServletResponse 的 `setStatus(sc: int)` 方法来设置。

常用的状态码常量（定义在 `HttpServletResponse` 中）：
- `SC_OK` (200): 表示请求成功。
- `SC_MOVED_TEMPORARILY` (302): 临时重定向。
- `SC_NOT_FOUND` (404): 未找到资源。
- `SC_INTERNAL_SERVER_ERROR` (500): 服务器内部错误。

## 缓冲区 Buffer
容器可以（但非必要）对响应进行缓冲，通常容器默认都会对响应进行缓冲。

1. `getBufferSize() -> int`: 取得实际使用的缓冲区大小。
2. `setBufferSize(size: int)`: 设置首选缓冲区大小（需在响应提交前设置）。
3. `isCommitted() -> boolean`: 检查响应是否已发送（提交）给客户端。
4. `reset()`: 重置缓冲区、状态码以及响应头。
5. `resetBuffer()`: 仅重置缓冲区内容，保留状态码与响应头。
6. `flushBuffer()`: 强制将缓冲区的内容输出到客户端。

## 简单字符输出 PrintWriter
如果要对浏览器输出 HTML，通常通过 `HttpServletResponse` 的 `getWriter()` 方法取得 `PrintWriter` 对象。

```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    // 必须在 getWriter() 之前设置编码
    resp.setContentType("text/html; charset=UTF-8");
    PrintWriter out = resp.getWriter();
    out.println("<html><body>");
    out.println("<h1>Hello World!</h1>");
    out.println("</body></html>");
}
```

:::info
需要注意的是，在没有设置任何内容类型或编码之前，HttpServletResponse 使用的字符编码默认是 ISO-8859-1。也就是说，如果直接输出中文，在浏览器上就会看到乱码。
:::

## sendRedirect 和 sendError

1. `sendRedirect(location: String)`
   发送 302 响应进行重定向。浏览器会自动访问新指定的 URL。
2. `sendError(sc: int)` / `sendError(sc: int, msg: String)`
   发送错误代码（如 404, 403）。容器通常会截获该错误并展示预定义的错误页面。

+++ 示例代码
```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    String user = req.getParameter("user");
    if (user == null) {
        // 如果没有传入 user 参数，返回 403 禁止访问
        resp.sendError(HttpServletResponse.SC_FORBIDDEN, "Missing user parameter!");
    } else {
        resp.getWriter().println("Hello, " + user);
    }
}
```
+++



# 请求分发 RequestDispatcher 和 请求重定向 Redirect

我们先定义两个简单的 Servlet 业务，在第一个Servlet中通过请求转发和重定向，显示第二个Servlet的内容。

```java

// Servlet 1 
@WebServlet(name = "fugServlet1", value = "/servlet-1")
public class FugServlet1 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        out.println("Hello from Fug Servlet 1, and I will go to Servlet 2!");
        /* TODO: 在这里填充请求转发和重定向相关代码 */   
    }
}
```

```java

// Servlet 2 
@WebServlet(name="fugServlet2", value="/servlet-2")
public class FugServlet2 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        out.println("Hello from Fug Servlet 2!");
    }
}
```

## 请求分发 RequestDispatcher

在 Web 应用程序中，经常需要多个 Servlet 来完成请求。
例如，将另一个 Servlet 的请求处理流程包含(Include)进来，或将请求转发(Forward)给别的 Servlet 处理。

**在请求转发中：**

- 请求/响应次数：一共有1次请求，1次响应
- URL地址栏：不变（请求的第一个服务器资源的URL）
- 发生位置：服务器内部
- 是否共享请求参数：是

![request-dispatcher](/assets/web-dev/request-dispatcher.svg)

1. 包含 Include
   以开头的 Servlet-1 为例，在 _TODO_ 区域填充：

   ```java
   
   RequestDispatcher rd = req.getRequestDispatcher("/servlet-2");
   rd.include(req, resp)
   ```
   当用户访问 `/servlet-1` 时的效果：
   ```text
   
   // 请求完成后的URL: /servlet-1
   Hello from Fug Servlet 1, and I will go to Servlet 2!
   Hello from Fug Servlet 2!
   ```

2. 转发 Forward
   以开头的 Servlet-1 为例，在 _TODO_ 区域填充：

   ```java
   
   RequestDispatcher rd = req.getRequestDispatcher("/servlet-2");
   rd.forward(req, resp)
   ```
   当用户访问 `/servlet-1` 时的效果：
   ```text
   // 请求完成后的URL: /servlet-1
   // Servlet-1 的内容将不会显示
   Hello from Fug Servlet 2!
   ```

## 请求重定向 Redirect

**在请求重定向中：**

- 请求/响应次数：有N次重定向，就要有N次请求，N次响应
- URL地址栏：请求的最后一个服务器资源的URL
- 发生位置：客户端
- 是否共享请求参数：否

![redirect](/assets/web-dev/send-redirect.svg)

还是以开头的 Servlet-1 为例，在 _TODO_ 区域填充：

```java

resp.sendRedirect("/servlet-2")
```

当用户访问 `/servlet-1` 时的效果：

```text
// 请求完成后的URL: /servlet-2
// Servlet-1 的内容将不会显示
Hello from Fug Servlet 2!
```