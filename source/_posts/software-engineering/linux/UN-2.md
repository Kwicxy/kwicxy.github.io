---
layout: post
title: Linux 基本命令
date: 2024-06-14 11:00:00
categories:
  - 软件工程
  - Linux
tags:
  - Linux
  - Shell
  - 命令行
---

Linux 命令行的核心能力不是记住所有参数，而是掌握“路径、文件、文本、进程、权限、帮助”几类基本操作。遇到不熟悉的命令时，应优先查帮助并在安全目录中试验。

# 命令基本格式

一般格式：

```bash
command [options] [arguments]
```

示例：

```bash
ls -la /etc
```

含义：

- `ls`：命令。
- `-la`：选项，等价于 `-l -a`。
- `/etc`：参数，表示要查看的目录。

常见帮助方式：

```bash
command --help
man command
type command
which command
```

例子：

```bash
ls --help
man ls
type cd
which python
```

`type` 可以判断一个名字是 Shell 内建命令、别名、函数，还是外部可执行文件。

# 路径与目录命令

## `pwd`：显示当前目录

```bash
pwd
```

`pwd` 是 print working directory 的缩写，用于确认当前工作目录。

## `cd`：切换目录

```bash
cd /etc
cd ..
cd ~
cd -
```

常见用法：

| 命令 | 含义 |
| - | - |
| `cd /etc` | 切换到绝对路径 `/etc` |
| `cd ..` | 返回上一级目录 |
| `cd ~` | 返回当前用户家目录 |
| `cd -` | 回到上一次所在目录 |

路径类型：

```bash
cd /usr/local/bin   # 绝对路径
cd ../logs          # 相对路径
```

绝对路径从 `/` 开始，相对路径从当前目录开始。

## `ls`：列出目录内容

```bash
ls
ls -l
ls -a
ls -lh
ls -R
ls /etc
```

常用选项：

| 选项 | 含义 |
| - | - |
| `-l` | 长格式显示权限、所有者、大小、时间 |
| `-a` | 显示隐藏文件 |
| `-h` | 与 `-l` 配合，以 KB/MB/GB 显示大小 |
| `-R` | 递归列出子目录 |
| `-t` | 按修改时间排序 |

示例：

```bash
ls -lah
```

隐藏文件以 `.` 开头，例如 `.bashrc`、`.ssh`。

## `mkdir`：创建目录

```bash
mkdir notes
mkdir -p projects/linux/logs
```

`-p` 表示父目录不存在时一并创建。

## `rmdir`：删除空目录

```bash
rmdir empty_dir
```

`rmdir` 只能删除空目录。删除非空目录通常使用 `rm -r`，但这是破坏性操作，必须确认路径。

# 文件创建与查看

## `touch`：创建空文件或更新时间

```bash
touch note.txt
touch a.txt b.txt
```

如果文件不存在，`touch` 创建空文件；如果文件已存在，更新时间戳。

## `cat`：输出文件内容

```bash
cat note.txt
cat a.txt b.txt
```

`cat` 适合查看短文件或拼接文件。长文件不建议直接 `cat`，容易刷屏。

## `less`：分页查看文件

```bash
less /var/log/syslog
```

常用操作：

| 按键 | 含义 |
| - | - |
| `Space` | 下一页 |
| `b` | 上一页 |
| `/keyword` | 搜索 |
| `n` | 下一个匹配 |
| `q` | 退出 |

## `head` 与 `tail`

```bash
head file.txt
head -n 20 file.txt
tail file.txt
tail -n 50 file.txt
tail -f app.log
```

`tail -f` 常用于实时观察日志。

# 文件复制、移动与删除

## `cp`：复制

```bash
cp source.txt backup.txt
cp -r dir1 dir2
cp -i source.txt target.txt
```

常用选项：

| 选项 | 含义 |
| - | - |
| `-r` | 递归复制目录 |
| `-i` | 覆盖前询问 |
| `-v` | 显示过程 |
| `-a` | 归档模式，尽量保留权限、时间等属性 |

## `mv`：移动或重命名

```bash
mv old.txt new.txt
mv file.txt /tmp/
```

`mv` 可以移动文件，也可以改名。

## `rm`：删除

```bash
rm file.txt
rm -i file.txt
rm -r dir
```

危险命令示例：

```bash
rm -rf /
rm -rf *
```

`rm` 删除后通常不会进入回收站。使用 `rm -r`、`rm -f` 前必须确认当前目录和目标路径。

# 文本搜索与处理

## `grep`：按内容搜索

```bash
grep "error" app.log
grep -i "error" app.log
grep -n "error" app.log
grep -R "TODO" src/
```

常用选项：

| 选项 | 含义 |
| - | - |
| `-i` | 忽略大小写 |
| `-n` | 显示行号 |
| `-R` | 递归搜索目录 |
| `-v` | 反向匹配 |
| `-E` | 使用扩展正则 |

## `wc`：统计

```bash
wc file.txt
wc -l file.txt
wc -w file.txt
wc -c file.txt
```

含义：

- `-l`：行数。
- `-w`：单词数。
- `-c`：字节数。

## `sort` 与 `uniq`

```bash
sort names.txt
sort names.txt | uniq
sort names.txt | uniq -c
```

`uniq` 只能合并相邻重复行，所以通常先 `sort` 再 `uniq`。

# 管道与重定向

## 管道

管道把前一个命令的标准输出交给后一个命令作为标准输入：

```bash
ps aux | grep nginx
grep "404" access.log | wc -l
cat names.txt | sort | uniq -c
```

## 输出重定向

```bash
echo "hello" > hello.txt
echo "world" >> hello.txt
```

区别：

| 写法 | 含义 |
| - | - |
| `>` | 覆盖写入 |
| `>>` | 追加写入 |

## 错误重定向

```bash
command 2> error.log
command > output.log 2>&1
```

`2>` 表示重定向标准错误。

# 进程命令

## `ps`：查看进程

```bash
ps
ps aux
ps -ef
```

常见字段：

| 字段 | 含义 |
| - | - |
| `USER` | 进程所属用户 |
| `PID` | 进程编号 |
| `%CPU` | CPU 占用 |
| `%MEM` | 内存占用 |
| `COMMAND` | 启动命令 |

查找指定进程：

```bash
ps aux | grep nginx
```

## `top`：动态查看系统状态

```bash
top
```

常用操作：

- `q`：退出。
- `P`：按 CPU 排序。
- `M`：按内存排序。

## `kill`：发送信号

```bash
kill PID
kill -9 PID
```

默认发送 `TERM` 信号，允许进程清理后退出。`-9` 是 `KILL`，强制终止，通常作为最后手段。

## 后台任务

```bash
command &
jobs
fg
bg
```

`&` 将命令放到后台执行，`jobs` 查看当前 Shell 的后台任务。

# 权限相关命令

## `chmod`：修改权限

```bash
chmod u+x script.sh
chmod 755 script.sh
chmod 644 notes.txt
```

数字权限：

| 数字 | 权限 |
| - | - |
| `4` | read |
| `2` | write |
| `1` | execute |

常见组合：

| 权限 | 含义 |
| - | - |
| `755` | 所有者可读写执行，其他人可读执行 |
| `644` | 所有者可读写，其他人只读 |
| `600` | 只有所有者可读写 |

## `chown`：修改所有者

```bash
sudo chown alice file.txt
sudo chown alice:dev file.txt
```

## `sudo`：以授权身份执行

```bash
sudo command
sudo -l
```

`sudo -l` 查看当前用户可执行的授权命令。

# 系统信息命令

```bash
uname -a
hostname
whoami
id
df -h
du -sh *
free -h
uptime
```

常见用途：

| 命令 | 用途 |
| - | - |
| `uname -a` | 查看内核和系统信息 |
| `whoami` | 查看当前用户名 |
| `id` | 查看 UID、GID、所属组 |
| `df -h` | 查看文件系统磁盘空间 |
| `du -sh *` | 查看当前目录下各项大小 |
| `free -h` | 查看内存 |
| `uptime` | 查看运行时间和负载 |

# 压缩与归档

## `tar`

打包：

```bash
tar -cf archive.tar dir/
```

解包：

```bash
tar -xf archive.tar
```

打包并 gzip 压缩：

```bash
tar -czf archive.tar.gz dir/
```

解压 gzip 包：

```bash
tar -xzf archive.tar.gz
```

常用选项：

| 选项 | 含义 |
| - | - |
| `-c` | 创建归档 |
| `-x` | 解开归档 |
| `-f` | 指定文件名 |
| `-z` | 使用 gzip |
| `-v` | 显示过程 |

# 网络基础命令

```bash
ip addr
ping example.com
curl https://example.com
ss -tulnp
```

用途：

| 命令 | 用途 |
| - | - |
| `ip addr` | 查看网络接口和 IP 地址 |
| `ping` | 测试网络连通性 |
| `curl` | 发送 HTTP 请求或下载内容 |
| `ss -tulnp` | 查看监听端口和进程 |

`ss` 常用于排查端口占用：

```bash
sudo ss -tulnp | grep 80
```

# 命令组合示例

## 统计日志中 404 次数

```bash
grep " 404 " access.log | wc -l
```

## 查看当前目录最大文件

```bash
du -sh * | sort -h
```

## 找出占用内存较高的进程

```bash
ps aux | sort -k4 -nr | head
```

## 实时查看服务日志中的错误

```bash
tail -f app.log | grep -i "error"
```

# 初学者常见误区

- 不确认当前目录就执行 `rm -r`。
- 把 `cat` 当作查看大日志的工具，导致终端刷屏。
- 不区分 `>` 和 `>>`，误覆盖文件。
- 遇到权限问题就盲目 `sudo`，没有先理解文件所有者和权限。
- 只背命令，不会查 `man` 和 `--help`。
- 把管道和重定向混淆。

建议养成习惯：

```bash
pwd
ls -lah
command --help
```

先确认环境，再执行修改性命令。

