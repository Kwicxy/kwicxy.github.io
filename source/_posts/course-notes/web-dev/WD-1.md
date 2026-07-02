---
layout: post
title: 第1章 概述
date: 2026-01-12 21:29:31
categories:
  - 课程笔记
  - Web开发技术
tags:
  - Java
  - Servlet
  - 后端
---

## Web 基础架构

### 桌面端网络编程的两种模式

- **C/S (Client/Server)**: 客户端/服务器模式。
    - 优点：交互性强、响应速度快、减轻服务器压力。
    - 缺点：需要安装特定的客户端软件，维护和升级成本高。
- **B/S (Browser/Server)**: 浏览器/服务器模式。
    - 优点：零安装（有浏览器即可），维护方便，跨平台性好。
    - 缺点：响应速度受网络限制，功能受浏览器限制。

### 基础概念

- **WWW**: World Wide Web（万维网）。
- **CGI**: Common Gateway Interface（通用网关接口），早期的动态网页技术，每个请求启动一个进程，性能较低。
- **PHP**: 典型的脚本语言，常用于快速开发动态网站。
- **Java 后端框架**: Spring, Spring Boot, Spring MVC, Struts2 (老旧), Hibernate/MyBatis (ORM) 等。

### MVC 架构模式

- **M (Model)**: 模型层。处理业务逻辑和数据状态（通常由 JavaBean / Service / DAO 充当）。
- **V (View)**: 视图层。负责数据展示（JSP / HTML）。
- **C (Controller)**: 控制层。接收请求，调用模型处理，选择视图响应（Servlet）。

