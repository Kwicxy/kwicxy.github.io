---
layout: post
title: curl 用法教程
date: 2026-07-08 23:00:00
categories:
  - 软件工程
  - 工具
tags:
  - curl
  - HTTP
  - 命令行
---

`curl` 是命令行里的网络请求工具。它常用于调用接口、下载文件、调试 HTTP 请求、验证服务状态，也经常出现在 Shell 脚本、CI 流水线和后端排障过程中。

学习 `curl` 的重点不是背所有参数，而是理解一次 HTTP 请求由哪些部分组成：方法、URL、请求头、请求体、认证信息、响应头、响应体和状态码。`curl` 的参数基本都围绕这些部分展开。

# curl 是什么

`curl` 的名字来自 Client URL。它可以向 URL 指定的资源发起请求，并把响应输出到终端或文件。

最简单的用法是：

```bash
curl https://example.com
```

这条命令会向 `https://example.com` 发送一个 HTTP GET 请求，并把响应体输出到标准输出。

如果目标返回 HTML，终端里会直接显示 HTML 内容；如果目标返回 JSON，终端里会显示 JSON；如果目标返回二进制文件，直接输出到终端通常不是好主意，应使用文件保存参数。

# 查看版本和支持协议

不同系统内置的 `curl` 版本可能不同，支持的协议和 TLS 后端也可能不同。

```bash
curl --version
```

输出中通常会包含：

- `curl` 版本。
- TLS 库，例如 OpenSSL、LibreSSL、Secure Transport。
- 支持协议，例如 HTTP、HTTPS、FTP、SFTP。
- 支持特性，例如 IPv6、HTTP/2、brotli、zstd。

当某个参数在本机不可用，或某个协议行为和预期不同，先看版本信息通常比盲目改命令更有效。

# 基本请求

## GET 请求

GET 是默认方法，不需要显式指定。

```bash
curl "https://api.example.com/users"
```

URL 中如果带查询参数，建议用引号包住，避免 `&` 被 shell 解释为后台执行符号：

```bash
curl "https://api.example.com/users?page=1&size=20"
```

也可以用 `--get` 和 `--data-urlencode` 让 `curl` 帮你拼查询参数：

```bash
curl --get "https://api.example.com/search" \
  --data-urlencode "q=hello world" \
  --data-urlencode "page=1"
```

这在参数中包含空格、中文、`&`、`?` 等特殊字符时更可靠。

## POST 请求

发送 POST 请求通常使用 `-X POST` 和 `-d`。

```bash
curl -X POST "https://api.example.com/users" \
  -d "name=alice" \
  -d "role=admin"
```

但要注意：只要使用 `-d`，`curl` 默认就会使用 POST，因此很多时候可以省略 `-X POST`：

```bash
curl "https://api.example.com/users" \
  -d "name=alice" \
  -d "role=admin"
```

默认情况下，`-d` 会以 `application/x-www-form-urlencoded` 的形式提交数据。

## JSON 请求

调用现代 API 时，最常见的是发送 JSON。

```bash
curl "https://api.example.com/users" \
  -H "Content-Type: application/json" \
  -d '{"name":"alice","role":"admin"}'
```

如果 JSON 较长，建议放到文件中：

```bash
curl "https://api.example.com/users" \
  -H "Content-Type: application/json" \
  -d @user.json
```

`@user.json` 表示从文件读取请求体。

## PUT、PATCH 和 DELETE

修改资源常用 PUT 或 PATCH，删除资源常用 DELETE。

```bash
curl -X PUT "https://api.example.com/users/1" \
  -H "Content-Type: application/json" \
  -d '{"name":"alice"}'
```

```bash
curl -X PATCH "https://api.example.com/users/1" \
  -H "Content-Type: application/json" \
  -d '{"role":"editor"}'
```

```bash
curl -X DELETE "https://api.example.com/users/1"
```

一般来说，只有当方法不是 `curl` 能自动推断的默认方法时，才需要 `-X`。

# 响应输出

## 查看响应头

使用 `-i` 可以同时输出响应头和响应体：

```bash
curl -i "https://api.example.com/users"
```

使用 `-I` 只发送 HEAD 请求，只查看响应头：

```bash
curl -I "https://example.com"
```

常见响应头包括：

- `Content-Type`：响应体类型。
- `Content-Length`：响应体长度。
- `Cache-Control`：缓存策略。
- `Location`：重定向目标。
- `Set-Cookie`：服务端设置的 Cookie。

## 只看状态码

调试服务健康状态时，常常只关心 HTTP 状态码。

```bash
curl -o /dev/null -s -w "%{http_code}\n" "https://example.com"
```

参数含义：

- `-o /dev/null`：丢弃响应体。
- `-s`：静默模式，不显示进度条。
- `-w`：按格式输出请求信息。

例如用于脚本判断：

```bash
status=$(curl -o /dev/null -s -w "%{http_code}" "https://example.com")

if [ "$status" = "200" ]; then
  echo "ok"
else
  echo "unexpected status: $status"
fi
```

## 格式化输出请求指标

`-w` 可以输出更多指标，适合简单排查网络耗时。

```bash
curl -o /dev/null -s -w "status=%{http_code} time=%{time_total}s\n" \
  "https://example.com"
```

常用变量：

| 变量 | 含义 |
| - | - |
| `%{http_code}` | HTTP 状态码 |
| `%{time_namelookup}` | DNS 解析耗时 |
| `%{time_connect}` | TCP 连接耗时 |
| `%{time_appconnect}` | TLS 握手耗时 |
| `%{time_starttransfer}` | 首字节时间 |
| `%{time_total}` | 总耗时 |
| `%{size_download}` | 下载字节数 |

如果 `time_namelookup` 很高，优先查 DNS；如果 `time_connect` 很高，优先查网络连通性；如果 `time_starttransfer` 很高，通常说明服务端处理慢或上游依赖慢。

# 请求头

使用 `-H` 添加请求头。

```bash
curl "https://api.example.com/users" \
  -H "Accept: application/json"
```

多个请求头可以写多个 `-H`：

```bash
curl "https://api.example.com/users" \
  -H "Accept: application/json" \
  -H "X-Request-Id: demo-001"
```

常见请求头：

| 请求头 | 用途 |
| - | - |
| `Accept` | 声明希望接收的响应类型 |
| `Content-Type` | 声明请求体类型 |
| `Authorization` | 认证信息 |
| `User-Agent` | 客户端标识 |
| `Cookie` | Cookie |
| `X-Request-Id` | 请求追踪 ID |

覆盖 User-Agent：

```bash
curl "https://example.com" \
  -A "Mozilla/5.0"
```

`-A` 是 `--user-agent` 的简写。

# 认证

## Basic Auth

Basic Auth 可以使用 `-u`：

```bash
curl -u "alice:password" "https://api.example.com/profile"
```

如果不想把密码写进命令历史，可以只写用户名，执行时由 `curl` 提示输入密码：

```bash
curl -u "alice" "https://api.example.com/profile"
```

## Bearer Token

Bearer Token 通常放在 `Authorization` 请求头中：

```bash
curl "https://api.example.com/profile" \
  -H "Authorization: Bearer $TOKEN"
```

脚本中应优先从环境变量读取 token，不要硬编码到文件里。

```bash
export TOKEN="your-token"

curl "https://api.example.com/profile" \
  -H "Authorization: Bearer $TOKEN"
```

## Cookie

直接携带 Cookie：

```bash
curl "https://example.com/dashboard" \
  -H "Cookie: session=abc123"
```

保存服务端返回的 Cookie：

```bash
curl -c cookies.txt "https://example.com/login"
```

后续请求读取 Cookie：

```bash
curl -b cookies.txt "https://example.com/dashboard"
```

常见组合：

```bash
curl -c cookies.txt -b cookies.txt "https://example.com/dashboard"
```

这表示同时读写 Cookie 文件。

# 文件下载

## 保存到指定文件

使用 `-o` 指定输出文件：

```bash
curl -o image.png "https://example.com/image.png"
```

使用 `-O` 按远程文件名保存：

```bash
curl -O "https://example.com/files/report.pdf"
```

区别：

- `-o local-name`：自己指定本地文件名。
- `-O`：使用 URL 最后一段作为文件名。

## 跟随重定向

很多下载链接会先返回 301 或 302，再跳转到真实地址。使用 `-L` 跟随重定向：

```bash
curl -L -O "https://example.com/download/latest"
```

实际下载文件时，`-L` 很常用。

## 断点续传

使用 `-C -` 尝试从上次中断处继续下载：

```bash
curl -C - -O "https://example.com/big-file.zip"
```

是否能续传取决于服务器是否支持 Range 请求。

## 限速下载

限制下载速度：

```bash
curl --limit-rate 1M -O "https://example.com/big-file.zip"
```

这在共享网络或脚本批量下载时有用。

# 文件上传

## multipart/form-data 上传

表单文件上传使用 `-F`：

```bash
curl "https://api.example.com/upload" \
  -F "file=@report.pdf" \
  -F "name=report"
```

`-F` 会自动使用 `multipart/form-data`。

## 原始二进制上传

如果服务端要求请求体就是文件内容，可以使用 `--data-binary`：

```bash
curl "https://api.example.com/upload/raw" \
  -H "Content-Type: application/pdf" \
  --data-binary @report.pdf
```

`--data-binary` 会尽量保留文件原始内容，不像普通 `-d` 那样处理换行。

# 调试请求

## 详细模式

`-v` 会显示连接过程、TLS 握手概要、请求头和响应头。

```bash
curl -v "https://example.com"
```

如果请求失败，`-v` 通常是第一反应。

你可以看到：

- 连接到哪个 IP。
- 是否走了代理。
- TLS 协议和证书信息。
- 实际发送的请求头。
- 服务端返回的响应头。

## 更详细的 trace

如果 `-v` 不够，可以使用 `--trace`：

```bash
curl --trace trace.txt "https://example.com"
```

或者输出到终端：

```bash
curl --trace - "https://example.com"
```

`--trace` 输出非常详细，适合排查复杂协议问题，但日常使用中通常 `-v` 已经够用。

## 失败时显示错误

脚本中常用 `--fail`：

```bash
curl --fail "https://api.example.com/health"
```

如果 HTTP 状态码是 400 或 500 系列，`curl` 会返回非零退出码。

更常用的组合是：

```bash
curl --fail --show-error --silent "https://api.example.com/health"
```

含义：

- `--fail`：HTTP 错误状态返回失败。
- `--silent`：不显示进度条。
- `--show-error`：静默模式下仍显示错误信息。

这是 CI 脚本里比较稳妥的写法。

# 代理

使用 HTTP 代理：

```bash
curl -x "http://127.0.0.1:7890" "https://example.com"
```

使用 SOCKS5 代理：

```bash
curl -x "socks5://127.0.0.1:7890" "https://example.com"
```

如果希望 DNS 解析也通过 SOCKS5 代理完成，可以使用 `socks5h`：

```bash
curl -x "socks5h://127.0.0.1:7890" "https://example.com"
```

环境变量方式：

```bash
export http_proxy="http://127.0.0.1:7890"
export https_proxy="http://127.0.0.1:7890"

curl "https://example.com"
```

取消代理：

```bash
unset http_proxy
unset https_proxy
```

# TLS 和证书

## 查看证书相关信息

使用 `-v` 可以看到 TLS 握手和证书验证结果：

```bash
curl -v "https://example.com"
```

如果证书过期、域名不匹配或证书链不完整，`curl` 通常会直接报错。

## 指定 CA 证书

如果使用内部 CA，可以指定 CA 文件：

```bash
curl --cacert internal-ca.pem "https://internal.example.com"
```

## 跳过证书校验

`-k` 可以跳过证书校验：

```bash
curl -k "https://self-signed.example.com"
```

这个参数只能用于临时调试。生产脚本中跳过证书校验会削弱 HTTPS 的安全意义，容易掩盖中间人攻击、证书过期或域名配置错误。

# HTTP/2 和 HTTP/3

尝试使用 HTTP/2：

```bash
curl --http2 "https://example.com"
```

只允许 HTTP/2：

```bash
curl --http2-prior-knowledge "https://example.com"
```

如果本机 `curl` 支持 HTTP/3，也可以尝试：

```bash
curl --http3 "https://example.com"
```

是否可用取决于本机 `curl` 的编译特性和目标服务端支持情况。先用 `curl --version` 查看是否包含相关特性。

# 超时与重试

## 设置超时

连接超时：

```bash
curl --connect-timeout 3 "https://example.com"
```

总超时：

```bash
curl --max-time 10 "https://example.com"
```

脚本中建议设置超时，否则网络卡住时可能长时间挂起。

常见组合：

```bash
curl --connect-timeout 3 --max-time 10 "https://example.com"
```

## 重试

失败时重试：

```bash
curl --retry 3 "https://example.com"
```

设置重试间隔：

```bash
curl --retry 3 --retry-delay 2 "https://example.com"
```

对临时网络抖动、短暂 5xx 错误，重试有帮助；但对认证失败、参数错误、404 这类问题，重试通常没有意义。

# 常见场景

## 调用 JSON API

```bash
curl --fail --show-error --silent "https://api.example.com/users" \
  -H "Accept: application/json"
```

如果本机有 `jq`，可以进一步格式化：

```bash
curl --fail --show-error --silent "https://api.example.com/users" \
  -H "Accept: application/json" | jq .
```

## 提交 JSON 数据

```bash
curl --fail --show-error --silent "https://api.example.com/users" \
  -H "Content-Type: application/json" \
  -d '{"name":"alice","role":"admin"}'
```

## 健康检查

```bash
curl --fail --show-error --silent "https://api.example.com/health"
```

如果只想输出状态码：

```bash
curl -o /dev/null -s -w "%{http_code}\n" "https://api.example.com/health"
```

## 下载并校验文件

```bash
curl -L -o app.tar.gz "https://example.com/releases/app.tar.gz"
sha256sum app.tar.gz
```

在 macOS 上通常使用：

```bash
shasum -a 256 app.tar.gz
```

下载可执行脚本后直接管道给 shell 是常见写法：

```bash
curl -fsSL "https://example.com/install.sh" | sh
```

但这类命令有明显安全风险：你没有在执行前审阅脚本内容。更稳妥的方式是先下载、查看，再执行：

```bash
curl -fsSL -o install.sh "https://example.com/install.sh"
less install.sh
sh install.sh
```

# Shell 脚本中的 curl

脚本中不建议只写：

```bash
curl "https://api.example.com/task"
```

更可靠的写法通常包含失败处理、超时和输出控制：

```bash
curl --fail --show-error --silent \
  --connect-timeout 3 \
  --max-time 10 \
  "https://api.example.com/task"
```

如果需要捕获响应体：

```bash
response=$(curl --fail --show-error --silent \
  --connect-timeout 3 \
  --max-time 10 \
  "https://api.example.com/task")

echo "$response"
```

如果需要同时获取状态码和响应体，可以拆开输出：

```bash
tmp=$(mktemp)

status=$(curl --silent --show-error \
  --output "$tmp" \
  --write-out "%{http_code}" \
  "https://api.example.com/task")

body=$(cat "$tmp")
rm "$tmp"

echo "status=$status"
echo "$body"
```

脚本里处理 HTTP 请求时，最好明确区分：

- `curl` 命令是否执行成功。
- HTTP 状态码是否符合预期。
- 响应体内容是否符合业务预期。

这三件事不是一回事。

# 常用参数速查

| 参数 | 作用 |
| - | - |
| `-X` | 指定 HTTP 方法 |
| `-H` | 添加请求头 |
| `-d` | 发送表单或请求体数据 |
| `--data-binary` | 按原始二进制发送请求体 |
| `-F` | 发送 multipart 表单 |
| `-i` | 输出响应头和响应体 |
| `-I` | 发送 HEAD 请求，只看响应头 |
| `-o` | 保存到指定文件 |
| `-O` | 使用远程文件名保存 |
| `-L` | 跟随重定向 |
| `-u` | Basic Auth |
| `-b` | 发送 Cookie |
| `-c` | 保存 Cookie |
| `-A` | 设置 User-Agent |
| `-s` | 静默模式 |
| `-S` | 静默模式下显示错误 |
| `-f` | HTTP 错误状态返回失败 |
| `-v` | 显示详细调试信息 |
| `-w` | 自定义输出请求指标 |
| `-x` | 使用代理 |
| `-k` | 跳过 TLS 证书校验 |
| `--connect-timeout` | 设置连接超时 |
| `--max-time` | 设置总超时 |
| `--retry` | 失败重试 |

# 常见误区

## 误区一：总是写 `-X POST`

如果使用了 `-d`，`curl` 默认会发送 POST。除非你要显式表达意图，或使用 PUT、PATCH、DELETE 等方法，否则 `-X POST` 通常不是必须的。

## 误区二：只看响应体，不看状态码

接口返回了一段 JSON，不代表请求成功。服务端可能返回 400 或 500，同时响应体里带错误信息。

脚本中应结合 `--fail` 或 `%{http_code}` 判断状态。

## 误区三：把 token 写进命令历史

直接写：

```bash
curl -H "Authorization: Bearer secret-token" "https://api.example.com"
```

这会把 token 留在 shell 历史中。更好的方式是使用环境变量、专用 secret 管理工具，或临时输入。

## 误区四：生产环境使用 `-k`

`-k` 会跳过证书校验，只适合临时排查。生产脚本应修复证书链或使用 `--cacert` 指定可信 CA。

## 误区五：下载脚本后直接执行

```bash
curl https://example.com/install.sh | sh
```

这很方便，但风险很高。至少应确认来源可信；更稳妥的是先下载、审阅，再执行。

# 总结

`curl` 是一个非常朴素但强大的工具。它的核心价值是让你在命令行中精确构造和观察网络请求。

掌握 `curl` 可以从这几个层次入手：

1. 会发送 GET、POST、PUT、PATCH、DELETE。
2. 会设置请求头、请求体和认证信息。
3. 会保存文件、上传文件、跟随重定向。
4. 会查看响应头、状态码和请求耗时。
5. 会在脚本中设置超时、失败处理和重试。
6. 会用 `-v`、`--trace` 排查连接、TLS 和协议问题。

真正熟练之后，`curl` 不只是“发请求的命令”，而是一个轻量级的网络诊断工具。
