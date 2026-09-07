---
layout: post
title: 第1章 函数极限与连续
description: 梳理函数、极限与连续的基本概念和计算方法，覆盖不定式、无穷小、无穷大、连续性与间断点等考研数学基础。
math: true
date: 2026-03-02 00:00:03
categories:
  - 数学
  - 高等数学
tags:
---
> 梳理函数、极限与连续的基本概念和计算方法，覆盖不定式、无穷小、无穷大、连续性与间断点等考研数学基础。

## 极限的定义

1. 数列极限

$$
\forall \epsilon > 0 , \exists N \in \mathbb{N}, 当 n > N 时恒有 \vert x_n - A \vert < \epsilon , 则 \lim_{n \rightarrow \infty} x-n = A
$$

1. $x \rightarrow \infty$ 函数极限

$$
\forall \epsilon > 0, \exists X > 0, 当 \vert x \vert > X 时恒有 \vert f(x) - A \vert < \epsilon , 则 \lim_{x \rightarrow \infty} f(x) = A
$$

1. $x \rightarrow x_0$ 函数极限

$$
\forall \epsilon > 0, \exists \delta > 0, 当 0 < \vert x - x_0 \vert < \delta 时恒有 \vert f(x) - A \vert < \epsilon, 则 \lim_{x \rightarrow x_0} f(x) = A
$$

## 七种不定式的极限计算

在极限计算中，以下七种形式被称为不定式：
$$\frac{0}{0}、\frac{\infty}{\infty}、0 \cdot \infty、\infty - \infty、0^0、\infty^0、1^\infty$$
这些形式在直接代入极限时无法确定结果，需要通过变形、洛必达法则等方法进行计算。

通常的解题步骤：

1. 化简先行：通过代数变形、分子分母同除以最高次项等方法，尝试将不定式转化为确定的形式。
2. 判断类型：根据化简后的形式，判断属于哪种不定式类型。
3. 选择方法：根据不定式类型，选择适当的计算方法，如洛必达法则、泰勒展开等。
4. 计算极限：进行具体的计算，得出极限值。

### $\frac{0}{0}$、$\frac{\infty}{\infty}$、$0 \cdot \infty$ 型

- 对于 $\frac{0}{0}$ 和 $\frac{\infty}{\infty}$ 型，可以直接使用洛必达法则、夹逼准则等。
- 对于 $0 \cdot \infty$ 型，可以将其通过取公因子、倒数方法转化为 $\frac{0}{0}$ 或 $\frac{\infty}{\infty}$ 型。

:::info
在实际计算时，应用“抓大头“技巧，可以极大程度上简化计算：

- $x \rightarrow \infty$ 时，抓分子/分母的最高次项
- $x \rightarrow 0$ 时，抓分子/分母的最低次项

:::

### $\infty - \infty$ 型

- 如有分母，则通过通分，将其转化为 $\frac{0}{0}$ 或 $\frac{\infty}{\infty}$ 型。
- 如无分母，则通过提取公因子、倒代换等方法，将其转化为 $\frac{0}{0}$ 或 $\frac{\infty}{\infty}$ 型。

### $0^0$、$\infty^0$ 型

运用公式 $u^v = e^{v \ln u}$，可得$\lim u^v = e^{\lim v \ln u}$，即可以将其转化为基本型进行计算。

### $1^\infty$ 型

运用简化公式 $u^v = e^{v (u-1)}$，可得$\lim u^v = e^{\lim v (u-1)}$，即可以将其转化为基本型进行计算。

## 常见的极限等价代换

在极限计算中，常常使用一些等价代换来简化计算过程。以下是一些常见的极限等价代换：

### $x \rightarrow 0$ 时的等价代换（等价无穷小）

1. $\sin x \sim x$
2. $\tan x \sim x$
3. $\arcsin x \sim x$
4. $\arctan x \sim x$
5. $e^x - 1 \sim x$
6. $\ln(1+x) \sim x$
7. $a^x - 1 \sim x \ln a$
8. $(1+x)^a - 1 \sim  ax$
9. $1 - \cos x \sim \frac{1}{2} x^2$

使用泰勒展开式可以推导出的更多的等价代换：

10. $x - \sin x \sim \frac{1}{6} x^3$
11. $x-\arctan x \sim \frac{1}{3} x^3$
12. $x-\ln(1+x) \sim \frac{1}{2} x^2$
13. $(1+x)^{\frac{1}{x}} \sim e$

### $x \rightarrow \infty$ 时的等价代换

1. $(1+\frac{1}{x})^x \sim e$
