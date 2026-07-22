---
layout: post
title: Linux 目录结构
description: 介绍 Linux 根目录下常见目录的职责与文件组织方式，帮助理解系统命令、配置、数据和临时文件的位置。
date: 2024-06-16 12:00:00
categories:
  - 软件工程
  - Linux
tags:
  - Linux
  - 文件系统
  - FHS
---
> 介绍 Linux 根目录下常见目录的职责与文件组织方式，帮助理解系统命令、配置、数据和临时文件的位置。

# Linux 目录结构

Linux 的目录结构不是随意命名的。多数发行版遵循 FHS（Filesystem Hierarchy Standard）的思想，把程序、配置、数据、日志、设备和临时文件放在不同位置。理解目录结构，有助于安装软件、排查问题、阅读日志和管理服务器。

# 根目录 `/`

Linux 的所有路径都从根目录 `/` 开始。

```text
/
├── bin
├── boot
├── dev
├── etc
├── home
├── lib
├── media
├── mnt
├── opt
├── proc
├── root
├── run
├── sbin
├── srv
├── sys
├── tmp
├── usr
└── var
```

与 Windows 的盘符不同，Linux 通过挂载把不同分区或设备接入同一棵目录树。

查看挂载情况：

```bash
findmnt
df -h
```

# `/bin`：基本用户命令

`/bin` 存放系统启动和单用户模式下也可能需要的基础命令。

常见内容：

```text
/bin/ls
/bin/cp
/bin/mv
/bin/rm
/bin/cat
/bin/sh
```

很多现代发行版会把 `/bin` 合并为指向 `/usr/bin` 的符号链接：

```bash
ls -ld /bin
```

可能看到：

```text
/bin -> usr/bin
```

这属于 usr merge 设计，目的是简化系统目录布局。

# `/sbin`：系统管理命令

`/sbin` 存放系统管理相关命令，传统上主要由 root 使用。

常见命令：

```text
/sbin/ip
/sbin/reboot
/sbin/shutdown
/sbin/fsck
```

现代发行版中，`/sbin` 也可能链接到 `/usr/sbin`。

# `/usr`：用户级程序与只读共享资源

`/usr` 是 Linux 中非常重要的目录，存放大部分用户空间程序、库、文档和共享资源。这里的 user 不是“用户家目录”的意思，历史上更接近 Unix System Resources。

常见子目录：

| 路径 | 用途 |
| - | - |
| `/usr/bin` | 大多数普通命令 |
| `/usr/sbin` | 非基础系统管理命令 |
| `/usr/lib` | 程序库文件 |
| `/usr/include` | C/C++ 头文件 |
| `/usr/share` | 架构无关共享资源，如文档、man、图标 |
| `/usr/local` | 本机管理员手动安装的软件 |

示例：

```bash
ls /usr/bin
ls /usr/share/man
```

## `/usr/local`

`/usr/local` 用于存放本机手动安装的软件，避免与发行版包管理器安装在 `/usr` 下的文件混在一起。

常见结构：

```text
/usr/local/bin
/usr/local/lib
/usr/local/etc
/usr/local/share
```

例如从源码编译安装的软件，默认可能进入 `/usr/local`。

# `/etc`：系统配置

`/etc` 存放系统范围配置文件。这里通常是排查服务配置、网络配置、用户配置的重要位置。

常见文件和目录：

| 路径 | 用途 |
| - | - |
| `/etc/passwd` | 用户账户基本信息 |
| `/etc/shadow` | 用户密码哈希，权限严格 |
| `/etc/group` | 用户组信息 |
| `/etc/hosts` | 本地域名解析 |
| `/etc/fstab` | 文件系统挂载配置 |
| `/etc/ssh/sshd_config` | SSH 服务配置 |
| `/etc/systemd/system` | systemd 本地服务单元 |

查看示例：

```bash
cat /etc/os-release
cat /etc/hosts
```

注意：

- `/etc` 下的配置修改通常影响整个系统。
- 修改前应备份原文件。
- 很多配置变更后需要重载或重启服务。

例如：

```bash
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
sudo systemctl reload ssh
```

# `/home`：普通用户家目录

普通用户的个人文件通常位于 `/home/用户名`。

例如：

```text
/home/alice
/home/bob
```

用户自己的配置文件也常放在家目录下，以点号开头：

```text
~/.bashrc
~/.profile
~/.ssh/
~/.config/
```

`~` 表示当前用户家目录：

```bash
cd ~
ls -la ~
```

多用户系统中，不同用户的家目录通过权限隔离。

# `/root`：root 用户家目录

`/root` 是超级用户 root 的家目录，不是根目录。

区别：

| 路径 | 含义 |
| - | - |
| `/` | 根目录，整个文件系统树的起点 |
| `/root` | root 用户的家目录 |

普通用户通常不能随意访问 `/root`。

# `/var`：可变数据

`/var` 存放运行过程中会变化的数据。服务器排障时非常重要。

常见子目录：

| 路径 | 用途 |
| - | - |
| `/var/log` | 日志文件 |
| `/var/lib` | 应用状态数据 |
| `/var/cache` | 缓存 |
| `/var/spool` | 队列数据，如邮件、打印任务 |
| `/var/tmp` | 可跨重启保留的临时文件 |
| `/var/www` | 传统 Web 站点目录 |

查看日志：

```bash
ls /var/log
tail -f /var/log/syslog
```

不同发行版日志位置可能不同。例如 RHEL 系统常见 `/var/log/messages`，Debian/Ubuntu 常见 `/var/log/syslog`。

# `/srv`：服务数据

`/srv` 用于存放系统对外提供服务的数据。srv 是 service 的缩写。

示例：

```text
/srv/www
/srv/ftp
/srv/git
```

如果一台服务器专门提供 Web、FTP、Git 等服务，把服务数据放到 `/srv` 可以让用途更清晰。

不过实际生产中也常见：

- Web 数据放 `/var/www`。
- 应用放 `/opt/app`。
- 数据放独立挂载目录，例如 `/data`。

因此 `/srv` 是标准推荐位置，但不是所有团队都会使用。

# `/opt`：第三方软件

`/opt` 用于安装附加应用软件，尤其是体积较大、独立分发的第三方软件。

示例：

```text
/opt/google/chrome
/opt/idea
/opt/company-app
```

与 `/usr/local` 的区别可以粗略理解为：

| 路径 | 更常见用途 |
| - | - |
| `/usr/local` | 管理员本地编译或安装的类 Unix 风格软件 |
| `/opt` | 独立目录形式发布的第三方大型软件 |

# `/tmp`：临时文件

`/tmp` 存放临时文件，通常所有用户都可写。

```bash
cd /tmp
touch test.txt
```

注意：

- `/tmp` 可能在重启后被清理。
- 不要把重要文件长期放在 `/tmp`。
- 多用户环境中不要在 `/tmp` 放敏感明文数据。

权限常见为：

```text
drwxrwxrwt
```

最后的 `t` 是 sticky bit，表示用户只能删除自己拥有的文件，不能随便删除别人的文件。

# `/dev`：设备文件

`/dev` 存放设备文件。Linux 把很多硬件和虚拟设备暴露为文件接口。

常见设备：

| 路径 | 用途 |
| - | - |
| `/dev/null` | 丢弃所有写入内容 |
| `/dev/zero` | 持续输出零字节 |
| `/dev/random` | 随机数设备 |
| `/dev/urandom` | 非阻塞随机数设备 |
| `/dev/sda` | 常见磁盘设备名 |
| `/dev/tty` | 当前终端 |

示例：

```bash
echo "ignore me" > /dev/null
lsblk
```

`lsblk` 可以查看块设备和挂载点。

# `/proc`：进程与内核信息

`/proc` 是虚拟文件系统，不是真实磁盘目录。它由内核动态生成，提供进程和系统信息。

常见文件：

| 路径 | 用途 |
| - | - |
| `/proc/cpuinfo` | CPU 信息 |
| `/proc/meminfo` | 内存信息 |
| `/proc/uptime` | 系统运行时间 |
| `/proc/PID` | 指定进程的信息目录 |

示例：

```bash
cat /proc/cpuinfo
cat /proc/meminfo
ls /proc/1
```

`/proc/1` 表示 PID 为 1 的进程信息。现代 Linux 中 PID 1 通常是 `systemd`。

# `/sys`：设备与内核对象

`/sys` 也是虚拟文件系统，主要暴露内核设备模型、驱动、总线和硬件状态。

常见用途：

- 查看设备属性。
- 调整某些内核参数。
- 与驱动和硬件状态交互。

示例：

```bash
ls /sys/class
ls /sys/block
```

一般用户不应随意修改 `/sys` 下的内容，错误写入可能影响设备行为。

# `/run`：运行时状态

`/run` 存放系统启动后产生的运行时状态，通常位于 tmpfs，重启后清空。

常见内容：

```text
/run/systemd
/run/user
/run/lock
```

它适合放 PID 文件、Socket 文件、锁文件等运行时信息。

# `/boot`：启动文件

`/boot` 存放启动 Linux 所需文件。

常见内容：

| 路径 | 用途 |
| - | - |
| `/boot/vmlinuz-*` | Linux 内核镜像 |
| `/boot/initrd.img-*` | 初始内存盘 |
| `/boot/grub` | GRUB 启动加载器配置 |

不要随意删除 `/boot` 下的文件，否则可能导致系统无法启动。清理旧内核应使用发行版提供的包管理机制。

# `/lib` 与 `/lib64`：基础库

`/lib` 存放系统启动和基础命令需要的共享库。64 位系统可能还有 `/lib64`。

现代发行版中，这些目录也可能链接到 `/usr/lib` 或 `/usr/lib64`。

查看命令依赖库：

```bash
ldd /bin/ls
```

`ldd` 会显示可执行文件运行时需要加载哪些共享库。

# `/media` 与 `/mnt`：挂载点

`/media` 常用于自动挂载可移动设备，例如 U 盘、光盘。

`/mnt` 常用于管理员临时手动挂载文件系统。

示例：

```bash
sudo mount /dev/sdb1 /mnt
ls /mnt
sudo umount /mnt
```

注意命令是 `umount`，不是 `unmount`。

# 常见目录速查表

| 目录 | 一句话记忆 |
| - | - |
| `/` | 整个文件系统的根 |
| `/bin` | 基础用户命令 |
| `/sbin` | 基础系统管理命令 |
| `/usr` | 大多数用户空间程序和共享资源 |
| `/usr/local` | 本机手动安装的软件 |
| `/etc` | 系统配置 |
| `/home` | 普通用户家目录 |
| `/root` | root 用户家目录 |
| `/var` | 经常变化的数据，如日志、缓存、状态 |
| `/srv` | 对外服务的数据 |
| `/opt` | 第三方独立软件 |
| `/tmp` | 临时文件 |
| `/dev` | 设备文件 |
| `/proc` | 进程和内核信息虚拟文件系统 |
| `/sys` | 设备和内核对象虚拟文件系统 |
| `/run` | 运行时状态 |
| `/boot` | 启动相关文件 |
| `/lib` | 基础共享库 |
| `/media` | 自动挂载的可移动设备 |
| `/mnt` | 临时手动挂载点 |

# 排查问题时常看的目录

## 查配置

```bash
/etc
/etc/systemd/system
/etc/nginx
/etc/ssh
```

## 查日志

```bash
/var/log
journalctl
```

## 查服务数据

```bash
/var/lib
/srv
/opt
```

## 查用户配置

```bash
~
~/.config
~/.ssh
~/.bashrc
```

## 查系统状态

```bash
/proc
/sys
/run
```

# 初学者常见误区

- 把 `/root` 当成根目录。根目录是 `/`，`/root` 是 root 用户家目录。
- 误以为 `/usr` 是普通用户文件目录。普通用户文件一般在 `/home`。
- 随意修改 `/etc` 下配置但不备份。
- 把重要数据放在 `/tmp`。
- 不区分 `/var/log`、`/var/lib` 和 `/var/cache`。
- 直接删除 `/boot` 旧文件，导致系统无法启动。
- 不理解挂载点，把设备文件 `/dev/sdb1` 当成普通目录访问。

掌握目录结构后，看到一个路径通常就能推断它的用途：配置看 `/etc`，日志看 `/var/log`，用户文件看 `/home`，设备看 `/dev`，运行状态看 `/run`，内核和进程信息看 `/proc` 与 `/sys`。

