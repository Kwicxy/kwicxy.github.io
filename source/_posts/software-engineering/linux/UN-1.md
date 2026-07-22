---
layout: post
title: Linux 核心概念
description: 介绍 Linux、Unix 哲学、文件系统、进程、用户权限和 Shell 等核心概念，建立命令行使用基础。
date: 2024-06-13 10:00:00
categories:
  - 软件工程
  - Linux
tags:
  - Linux
  - 操作系统
  - Unix
---
> 介绍 Linux、Unix 哲学、文件系统、进程、用户权限和 Shell 等核心概念，建立命令行使用基础。

Linux 不只是一个命令行工具集合，而是一套围绕 Unix 思想发展起来的操作系统生态。理解 Linux 的核心概念，比单纯背命令更重要：命令会变，工具会换，但系统的组织方式、权限模型、进程模型和开源协作方式长期稳定。

# Linux 是什么

严格来说，Linux 指的是 **Linux 内核**。内核负责管理 CPU、内存、磁盘、网络、进程和设备驱动。

日常使用中说的 “Linux 系统”，通常是一个完整发行版：

- Linux 内核。
- GNU 工具链，例如 `bash`、`coreutils`、`gcc`。
- 包管理器，例如 `apt`、`dnf`、`pacman`。
- 系统服务管理器，例如 `systemd`。
- 桌面环境或服务器组件。
- 发行版自己的配置、仓库和维护策略。

常见发行版：

| 发行版 | 特点 | 常见场景 |
| - | - | - |
| Debian | 稳定、社区驱动 | 服务器、基础系统 |
| Ubuntu | 易用、资料多、基于 Debian | 桌面、服务器、开发环境 |
| Fedora | 技术更新快，偏上游 | 桌面、开发测试 |
| Red Hat Enterprise Linux | 企业支持、稳定周期长 | 企业服务器 |
| CentOS Stream | RHEL 上游滚动版本 | 企业生态测试 |
| Arch Linux | 滚动更新、极简、可定制 | 深度学习 Linux 的个人系统 |

# Unix 哲学

Linux 继承了 Unix 的很多设计思想。常见总结如下：

1. 每个程序只做好一件事。
2. 程序之间通过文本流协作。
3. 优先使用简单、透明、可组合的工具。
4. 配置文件尽量使用可读文本。
5. 自动化优先于手工重复操作。

例如：

```bash
cat access.log | grep "404" | wc -l
```

这条命令由三个小工具组合完成：

- `cat` 输出文件内容。
- `grep` 过滤包含 `404` 的行。
- `wc -l` 统计行数。

实际使用中也可以写得更简洁：

```bash
grep "404" access.log | wc -l
```

Linux 的强大之处并不在某一个命令，而在命令之间可以通过管道组合。

# 万物皆文件

“万物皆文件”是理解 Linux 的关键入口。Linux 会把很多系统资源抽象成文件或类文件接口：

- 普通文件：文本、图片、日志、程序。
- 目录：特殊文件，记录文件名到 inode 的映射。
- 设备文件：硬盘、终端、随机数设备等。
- 管道：进程之间传递数据。
- Socket：网络通信接口。
- `/proc` 和 `/sys`：内核与进程信息的虚拟文件系统。

常见例子：

```bash
ls -l /dev/null
ls -l /dev/sda
cat /proc/cpuinfo
cat /proc/meminfo
```

`/dev/null` 是一个特殊设备文件，写入它的内容会被丢弃：

```bash
some_command > /dev/null
```

这背后的意义是：程序不需要知道目标到底是磁盘文件、终端、设备还是管道，只要按文件接口读写即可。

# 文件系统树

Linux 没有 Windows 那种 `C:`、`D:` 盘符。所有文件都挂载在一棵统一的目录树下，根目录是 `/`。

示意：

```text
/
├── bin
├── etc
├── home
├── usr
├── var
└── ...
```

磁盘分区、U 盘、网络文件系统都可以挂载到这棵树的某个目录上。

例如：

```bash
mount /dev/sdb1 /mnt/usb
```

这表示把 `/dev/sdb1` 这个设备挂载到 `/mnt/usb`，之后访问 `/mnt/usb` 就是在访问该设备中的文件。

# 用户、组与权限

Linux 是多用户系统。每个文件都有三个核心归属信息：

- 所有者 user。
- 所属组 group。
- 其他用户 others。

查看文件权限：

```bash
ls -l
```

示例输出：

```text
-rw-r--r-- 1 alice dev 1024 Jun 17 10:00 notes.txt
```

含义：

| 字段 | 含义 |
| - | - |
| `-` | 普通文件，目录则显示 `d` |
| `rw-` | 所有者可读、可写、不可执行 |
| `r--` | 所属组只读 |
| `r--` | 其他用户只读 |
| `alice` | 文件所有者 |
| `dev` | 文件所属组 |

权限字符：

| 权限 | 对文件的含义 | 对目录的含义 |
| - | - | - |
| `r` | 读取文件内容 | 列出目录项 |
| `w` | 修改文件内容 | 创建、删除、重命名目录项 |
| `x` | 执行文件 | 进入目录 |

常见修改命令：

```bash
chmod 755 script.sh
chmod u+x script.sh
chown alice:dev notes.txt
```

# root 与 sudo

`root` 是 Linux 的超级用户，拥有几乎全部权限。普通用户需要临时执行管理员操作时，通常使用 `sudo`：

```bash
sudo apt update
sudo systemctl restart nginx
```

注意：

- 不要长期使用 root shell 做日常操作。
- 不要随意执行来源不明的 `sudo` 命令。
- `sudo rm -rf /` 这类命令具有破坏性，理解后果前绝不能运行。

`sudo` 的本质不是“魔法提权”，而是基于 `/etc/sudoers` 配置的授权执行。

# 进程与服务

程序是磁盘上的可执行文件，进程是正在运行的程序实例。

查看进程：

```bash
ps aux
top
```

进程有自己的：

- PID：进程编号。
- PPID：父进程编号。
- 用户身份。
- 环境变量。
- 打开的文件描述符。
- 当前工作目录。

现代 Linux 发行版通常使用 `systemd` 管理系统服务：

```bash
systemctl status ssh
systemctl start nginx
systemctl enable nginx
```

服务是长期运行的后台进程，例如 SSH、数据库、Web 服务器。

# Shell 与终端

终端是输入输出界面，Shell 是解释命令的程序。

常见 Shell：

| Shell | 特点 |
| - | - |
| `sh` | 传统 Bourne shell，兼容性强 |
| `bash` | GNU Bash，Linux 上最常见 |
| `zsh` | 交互体验好，可扩展性强 |
| `fish` | 默认体验友好，但语法不完全兼容 POSIX |

查看当前 Shell：

```bash
echo "$SHELL"
```

Shell 负责：

- 解析命令。
- 展开变量和通配符。
- 执行程序。
- 管理管道、重定向、后台任务。
- 运行脚本。

# 标准输入、标准输出与标准错误

Linux 程序默认有三个标准流：

| 编号 | 名称 | 含义 |
| - | - | - |
| `0` | stdin | 标准输入 |
| `1` | stdout | 标准输出 |
| `2` | stderr | 标准错误 |

常见重定向：

```bash
command > output.txt      # 标准输出写入文件，覆盖
command >> output.txt     # 标准输出追加到文件
command 2> error.log      # 标准错误写入文件
command > all.log 2>&1    # 标准输出和标准错误都写入文件
```

管道只连接标准输出到下一个命令的标准输入：

```bash
ps aux | grep nginx
```

# 包管理与软件安装

Linux 发行版通常使用包管理器安装软件，而不是到处下载安装包。

Debian / Ubuntu：

```bash
sudo apt update
sudo apt install nginx
sudo apt remove nginx
```

Fedora / RHEL 系：

```bash
sudo dnf install nginx
sudo dnf remove nginx
```

Arch：

```bash
sudo pacman -S nginx
sudo pacman -R nginx
```

包管理器负责：

- 下载软件包。
- 解析依赖。
- 安装文件。
- 记录版本。
- 支持升级和卸载。

# 开源哲学

Linux 是开源软件生态的代表。开源不只是“免费”，更核心的是源代码可见、可修改、可分发。

常见开源许可证：

| 许可证 | 特点 |
| - | - |
| GPL | 强 copyleft，衍生作品通常也需要开源 |
| LGPL | 对库更宽松，允许被闭源程序链接 |
| MIT | 宽松，保留版权声明即可 |
| Apache-2.0 | 宽松，包含专利授权条款 |
| BSD | 宽松，适合商业使用 |

开源协作强调：

- 透明：问题、代码、讨论公开。
- 可复现：构建过程和缺陷可以被他人验证。
- 可分叉：项目方向分歧时可以 fork。
- 社区治理：贡献、评审、发布都有规则。

# 学 Linux 的正确顺序

建议路径：

1. 理解文件系统、路径、权限。
2. 熟练基本命令和帮助系统。
3. 学会管道、重定向和文本处理。
4. 理解进程、服务、日志。
5. 学会包管理和环境配置。
6. 逐步学习 Shell 脚本。
7. 再进入网络、存储、安全和性能调优。

不要一开始就背复杂命令参数。Linux 的学习重点是理解系统模型，然后用 `man`、`--help` 和实践补齐细节。

