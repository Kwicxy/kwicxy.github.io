---
layout: post
title: Codex 一直 Reconnecting 解决方案
date: 2026-06-28 23:00:00
categories:
  - 经验帖
tags:
  - Codex
  - 代理
---

```plaintext
Reconnecting... 1/5
Reconnecting... 2/5
Reconnecting... 3/5
Reconnecting... 4/5
Reconnecting... 5/5
```

**哈哈，觉得眼熟？**
*这样的场景，此时此刻正在 Codex 各地上演！*
*下一个可能就是你*

# 问题背景

打开 Codex 后，第一次提问或者等待模型响应时，有时会先出现多次：

```plaintext
Reconnecting…
```

通常会重试 5 次。

每次重试中间会卡一段时间，等全部重试结束后，Codex 却又能正常跑了（？

所以这个问题最恶心的点在于：
它不是失败，而是“先失败几次，再成功”。

# 原因分析

Codex 默认会优先尝试使用 `WebSocket` 协议去和服务器建立实时连接。

WebSocket 连接成功的话，体验会更实时。

但在很多代理环境里，尤其是终端环境、系统代理、~~Clash、v2rayN~~ 这类组合下，可能会出现一种情况：

> HTTP / HTTPS 请求能正常走代理，
> 但是 WebSocket 不一定能正常走代理。

于是 Codex 的流程就变成了：

> 先尝试 WebSocket
> 失败
> 重试
> 再失败
> 再重试
> 连续重试 5 次
> 最后放弃 WebSocket
> 回退到普通 HTTP 请求
> 然后又能用了

所以，**如果在使用 Codex 时，遇到 Reconnecting 的问题，通常是因为 WebSocket 连接被阻断了。而不是账号的问题。**

# 解决方案

## 1. 禁用 WebSocket

最直接的方法，既然 WebSocket 在当前代理环境下不稳定，那就干脆让 Codex 不要优先用 WebSocket，直接走 HTTP。

打开配置文件：

```plaintext
~/.codex/config.toml    # macOS / Linux
%USERPROFILE%\.codex\config.toml    # Windows
```

添加或修改：

```toml
model_provider = "openai_http"

[model_providers.openai_http]
name = "OpenAI HTTP only"
wire_api = "responses"
supports_websockets = false
```

保存之后，重启 Codex。

## 2. 配置代理环境变量

这个方案的核心是让 Codex 启动时就能拿到代理环境变量，这样 WebSocket 握手也有机会正常走代理。

在 Codex 配置目录下创建一个 `.env` 文件。

```plaintext
~/.codex/.env    # macOS / Linux
%USERPROFILE%\.codex\.env    # Windows
```

内容：

```ini
HTTP_PROXY="http://127.0.0.1:你的代理端口"
HTTPS_PROXY="http://127.0.0.1:你的代理端口"
NO_PROXY="localhost,127.0.0.1,::1"
```

端口以自己代理软件里显示的 HTTP 代理端口为准。

## 3. 使用 TUN 模式

`TUN` 模式的代理软件从虚拟网卡层面接管系统流量，可以让所有的网络请求都走代理，包括 WebSocket。

但 TUN 模式可能会影响其他网络请求或其他 App 的网络行为，所以需要根据自己的情况来选择，建议作为兜底方案。
