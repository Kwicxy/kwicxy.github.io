---
layout: post
title: R 语言基础
date: 2025-12-29 17:17:16
categories:
  - 计算机科学
  - R 语言
tags:
---

# R 语言基础

## 1. 基本语法与赋值
- 赋值两种：`x <- 1`、`1 -> x`。
- 向量构造：`c(1, 2, 3)`；混合类型会字符化。
- 序列与重复：`1:4 + 1`，`seq(from = 2, to = 10, by = 2)`，`rep(1:4, times = 2)`。

```r
x <- seq(1, 10)
x[3:5]       # 切片
x[x > 5]     # 逻辑筛选
which.max(x) # 最大值位置
```

## 2. 基本函数与汇总
- 数值：`sqrt/sum/mean/var/sd/min/max/range`。
- 排序与排名：`rev/sort/order/rank`。
- 查看：`summary(x)`，`head(x, 6)`，`tail(x, 6)`，`data()` 列出示例数据。

```r
x <- c(97, 93, 85, 74, 32, 100, 99, 67)
mean(x); sd(x); range(x)
sort(x); rank(x)
```

## 3. 随机数与快速矩阵
- 正态随机：`rnorm(n, mean, sd)`。
- 随机矩阵：`matrix(rnorm(15, 5, 2), nrow = 5, ncol = 3)`。

```r
set.seed(1)
rnorm(5, 2, 3)
matrix(rnorm(12), nrow = 3)
```
