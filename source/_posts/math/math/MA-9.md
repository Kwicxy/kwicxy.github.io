---
layout: post
title: 第9章 一元函数积分学的计算
description: 系统梳理一元函数积分计算的基本公式，以及不定积分、定积分、变限积分与反常积分的计算方法。
math: true
date: 2026-07-28 00:00:03
categories:
  - 数学
  - 高等数学
tags:
---

> 系统梳理一元函数积分计算的基本公式，以及不定积分、定积分、变限积分与反常积分的计算方法。

# 一、基本积分公式

以下公式中的 $C$ 均为任意常数。使用公式时，不仅要识别被积函数的形式，还要注意参数条件和被积函数所在的区间。

## 1. 幂函数

当 $k\neq -1$ 时，

$$
\int x^k\mathrm{d}x=\frac{x^{k+1}}{k+1}+C.
$$

例如，

$$
\int\frac{1}{x^2}\mathrm{d}x=-\frac{1}{x}+C,\qquad
\int\frac{1}{\sqrt{x}}\mathrm{d}x=2\sqrt{x}+C.
$$

当 $k=-1$ 时不能使用幂函数公式，应改用对数公式。

## 2. 对数函数

$$
\int\frac{1}{x}\mathrm{d}x=\ln|x|+C.
$$

绝对值不可随意省略，因为 $(\ln|x|)'=1/x$ 在 $x>0$ 与 $x<0$ 上均成立（“视绝对值而不见”）。

## 3. 指数函数

$$
\int e^x\mathrm{d}x=e^x+C,
$$

$$
\int a^x\mathrm{d}x=\frac{a^x}{\ln a}+C
\qquad(a>0,\ a\neq 1).
$$

## 4. 三角函数

$$
\int\sin x\mathrm{d}x=-\cos x+C,\qquad
\int\cos x\mathrm{d}x=\sin x+C,
$$

$$
\int\tan x\mathrm{d}x=-\ln|\cos x|+C,\qquad
\int\cot x\mathrm{d}x=\ln|\sin x|+C,
$$

$$
\int\sec x\mathrm{d}x=\ln|\sec x+\tan x|+C,
$$

$$
\int\csc x\mathrm{d}x=\ln|\csc x-\cot x|+C,
$$

$$
\int\sec^2x\mathrm{d}x=\tan x+C,\qquad
\int\csc^2x\mathrm{d}x=-\cot x+C,
$$

$$
\int\sec x\tan x\mathrm{d}x=\sec x+C,\qquad
\int\csc x\cot x\mathrm{d}x=-\csc x+C.
$$

例如，正切函数的积分可由

$$
\int\tan x\mathrm{d}x
=\int\frac{\sin x}{\cos x}\mathrm{d}x
=-\int\frac{\mathrm{d}(\cos x)}{\cos x}
=-\ln|\cos x|+C
$$

得到。

## 5. 反正切型

$$
\int\frac{1}{1+x^2}\mathrm{d}x=\arctan x+C,
$$

$$
\int\frac{1}{a^2+x^2}\mathrm{d}x
=\frac{1}{a}\arctan\frac{x}{a}+C
\qquad(a>0).
$$

## 6. 反正弦型

$$
\int\frac{1}{\sqrt{1-x^2}}\mathrm{d}x=\arcsin x+C,
$$

$$
\int\frac{1}{\sqrt{a^2-x^2}}\mathrm{d}x
=\arcsin\frac{x}{a}+C
\qquad(a>0,\ |x|<a).
$$

## 7. 根式对数型

$$
\int\frac{1}{\sqrt{x^2+a^2}}\mathrm{d}x
=\ln\left|x+\sqrt{x^2+a^2}\right|+C
\qquad(a\neq 0),
$$

$$
\int\frac{1}{\sqrt{x^2-a^2}}\mathrm{d}x
=\ln\left|x+\sqrt{x^2-a^2}\right|+C
\qquad(|x|>|a|).
$$

## 8. 平方差型

当 $a>0$ 时，

$$
\int\frac{1}{x^2-a^2}\mathrm{d}x
=\frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right|+C,
$$

$$
\int\frac{1}{a^2-x^2}\mathrm{d}x
=\frac{1}{2a}\ln\left|\frac{x+a}{x-a}\right|+C.
$$

两式只相差一个负号，但对数中分式的次序也随之改变。

## 9. 半圆型根式

当 $a>0$ 且 $|x|\leqslant a$ 时，

$$
\int\sqrt{a^2-x^2}\mathrm{d}x
=\frac{a^2}{2}\arcsin\frac{x}{a}
+\frac{x}{2}\sqrt{a^2-x^2}+C.
$$

## 10. 三角函数平方

由降幂公式

$$
\sin^2x=\frac{1-\cos 2x}{2},\qquad
\cos^2x=\frac{1+\cos 2x}{2}
$$

可得

$$
\int\sin^2x\mathrm{d}x=\frac{x}{2}-\frac{\sin 2x}{4}+C,
$$

$$
\int\cos^2x\mathrm{d}x=\frac{x}{2}+\frac{\sin 2x}{4}+C.
$$

又由 $\tan^2x=\sec^2x-1$、$\cot^2x=\csc^2x-1$，有

$$
\int\tan^2x\mathrm{d}x=\tan x-x+C,
$$

$$
\int\cot^2x\mathrm{d}x=-\cot x-x+C.
$$

:::info
不定积分表示某个区间内的全体原函数。若被积函数的定义域不连通，则不同连通区间上的积分常数彼此独立。例如 $\int 1/x\,\mathrm{d}x=\ln|x|+C$ 应分别理解在 $(-\infty,0)$ 与 $(0,+\infty)$ 上成立。检验积分结果最可靠的方法是对所得原函数求导。
:::

# 二、不定积分的积分法

不定积分计算的核心不是机械套公式，而是把被积函数改写为“基本积分公式能够识别的形式”。常用方法依次为凑微分法、换元法、分部积分法和有理函数的部分分式法。

## 1. 凑微分法

### 基本思想

若在被积函数中能同时识别出复合函数 $g(x)$ 及其导数 $g'(x)$，则

$$
\int f[g(x)]g'(x)\mathrm{d}x
=\int f[g(x)]\mathrm{d}[g(x)]
=\int f(u)\mathrm{d}u,
\qquad u=g(x).
$$

凑微分的关键是从 $\mathrm{d}x$ 前拿出适当因子，与 $\mathrm{d}x$ 一起组成某个整体的微分。例如

$$
\int\frac{\ln^5x}{x}\mathrm{d}x
=\int\ln^5x\,\mathrm{d}(\ln x)
=\frac{\ln^6x}{6}+C
\qquad(x>0).
$$

### 常见凑微分结构

下表中的 $f$ 表示在相应范围内可积分的函数。

| 被积形式                                                             | 凑成的微分                                                 | 化简结果                                              |
| ---------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------- |
| $\displaystyle \int x f(x^2)\mathrm{d}x$                         | $\mathrm{d}(x^2)=2x\mathrm{d}x$.                      | $\displaystyle \frac12\int f(u)\mathrm{d}u$       |
| $\displaystyle \int\sqrt{x}\,f(x^{3/2})\mathrm{d}x$              | $\mathrm{d}(x^{3/2})=\frac32\sqrt{x}\mathrm{d}x$.     | $\displaystyle \frac23\int f(u)\mathrm{d}u$       |
| $\displaystyle \int\frac{f(\sqrt{x})}{\sqrt{x}}\mathrm{d}x$      | $\mathrm{d}(\sqrt{x})=\frac{\mathrm{d}x}{2\sqrt{x}}$. | $\displaystyle 2\int f(u)\mathrm{d}u$             |
| $\displaystyle \int\frac{f(-1/x)}{x^2}\mathrm{d}x$               | $\mathrm{d}(-1/x)=\mathrm{d}x/x^2$.                   | $\displaystyle \int f(u)\mathrm{d}u$              |
| $\displaystyle \int\frac{f(\ln x)}{x}\mathrm{d}x$                | $\mathrm{d}(\ln x)=\mathrm{d}x/x$.                    | $\displaystyle \int f(u)\mathrm{d}u$              |
| $\displaystyle \int e^xf(e^x)\mathrm{d}x$                        | $\mathrm{d}(e^x)=e^x\mathrm{d}x$.                     | $\displaystyle \int f(u)\mathrm{d}u$              |
| $\displaystyle \int a^xf(a^x)\mathrm{d}x$                        | $\mathrm{d}(a^x)=a^x\ln a\,\mathrm{d}x$.              | $\displaystyle \frac1{\ln a}\int f(u)\mathrm{d}u$ |
| $\displaystyle \int\sin x\,f(-\cos x)\mathrm{d}x$                | $\mathrm{d}(-\cos x)=\sin x\mathrm{d}x$.              | $\displaystyle \int f(u)\mathrm{d}u$              |
| $\displaystyle \int\cos x\,f(\sin x)\mathrm{d}x$                 | $\mathrm{d}(\sin x)=\cos x\mathrm{d}x$.               | $\displaystyle \int f(u)\mathrm{d}u$              |
| $\displaystyle \int\frac{f(\tan x)}{\cos^2x}\mathrm{d}x$         | $\mathrm{d}(\tan x)=\sec^2x\mathrm{d}x$.              | $\displaystyle \int f(u)\mathrm{d}u$              |
| $\displaystyle \int\frac{f(-\cot x)}{\sin^2x}\mathrm{d}x$        | $\mathrm{d}(-\cot x)=\csc^2x\mathrm{d}x$.             | $\displaystyle \int f(u)\mathrm{d}u$              |
| $\displaystyle \int\frac{f(\arctan x)}{1+x^2}\mathrm{d}x$        | $\mathrm{d}(\arctan x)=\mathrm{d}x/(1+x^2)$.          | $\displaystyle \int f(u)\mathrm{d}u$              |
| $\displaystyle \int\frac{f(\arcsin x)}{\sqrt{1-x^2}}\mathrm{d}x$ | $\mathrm{d}(\arcsin x)=\mathrm{d}x/\sqrt{1-x^2}$.     | $\displaystyle \int f(u)\mathrm{d}u$              |


表中的公式必须在各表达式有定义的区间内使用。例如对数型要求 $x>0$，$a^x$ 型要求 $a>0$ 且 $a\neq 1$，反正弦型通常限制在 $|x|<1$。

+++ 例题 9.1：根式中凑出幂函数的微分

求不定积分 $\displaystyle \int\frac{\sqrt{x}}{\sqrt{4-x^3}}\mathrm{d}x$。

**【解】**

因为

$$
\sqrt{x}\mathrm{d}x=\frac23\mathrm{d}(x^{3/2}),
$$

所以

$$
\begin{aligned}
\int\frac{\sqrt{x}}{\sqrt{4-x^3}}\mathrm{d}x
&=\frac23\int
\frac{\mathrm{d}(x^{3/2})}{\sqrt{4-(x^{3/2})^2}}\\
&=\frac23\arcsin\frac{x^{3/2}}{2}+C.
\end{aligned}
$$

+++

+++ 例题 9.2：先对复杂部分求导再凑微分

求不定积分
$\displaystyle \int
\frac{e^{\frac{\sin\theta}{\cos\theta+\sin\theta}}}
{(\cos\theta+\sin\theta)^2}\mathrm{d}\theta$。

**【解】**

先对复杂分式求导：

$$
\left(\frac{\sin\theta}{\cos\theta+\sin\theta}\right)'
=\frac{\cos\theta(\cos\theta+\sin\theta)
-\sin\theta(-\sin\theta+\cos\theta)}
{(\cos\theta+\sin\theta)^2}
=\frac{1}{(\cos\theta+\sin\theta)^2}.
$$

因此

$$
\begin{aligned}
\int
\frac{e^{\frac{\sin\theta}{\cos\theta+\sin\theta}}}
{(\cos\theta+\sin\theta)^2}\mathrm{d}\theta
&=\int e^{\frac{\sin\theta}{\cos\theta+\sin\theta}}
\mathrm{d}\left(\frac{\sin\theta}{\cos\theta+\sin\theta}\right)\\
&=e^{\frac{\sin\theta}{\cos\theta+\sin\theta}}+C.
\end{aligned}
$$

+++

## 2. 换元法

### 基本思想

当被积函数不能直接凑成简单微分时，可引入新变量。令

$$
x=g(t),\qquad \mathrm{d}x=g'(t)\mathrm{d}t,
$$

则

$$
\int f(x)\mathrm{d}x
=\int f[g(t)]g'(t)\mathrm{d}t.
$$

计算完关于 $t$ 的积分后，还要用 $t=g^{-1}(x)$ 回代。为了使回代关系明确，通常要求 $g$ 在所讨论区间上可导且单调；换元后的变量范围也必须与原积分区间、根式符号和反函数主值范围相容。

:::info
凑微分法和换元法本质相同：凑微分是从被积函数中识别 $u=g(x)$，换元法则主动令 $x=g(t)$ 来改造根式、复合函数或有理式。判断换元是否成功，要看变换后是否确实比原式更容易积分。
:::

### 常用换元

#### 1. 三角函数代换

当根式含有二次平方和或平方差时，常用

$$
\sqrt{a^2-x^2}:\quad x=a\sin t,\qquad
-\frac{\pi}{2}<t<\frac{\pi}{2},
$$

$$
\sqrt{a^2+x^2}:\quad x=a\tan t,\qquad
-\frac{\pi}{2}<t<\frac{\pi}{2},
$$

$$
\sqrt{x^2-a^2}:\quad x=a\sec t.
$$

在最后一种情形中，若 $x>a$，可取 $0<t<\pi/2$；若 $x<-a$，可取 $\pi/2<t<\pi$。这些范围保证代换在对应区间上单调，并能正确处理根式和绝对值。

![三角代换中变量与参数的取值范围](/assets/math/MA-9/trig-substitution-ranges.svg)

若根式为 $\sqrt{ax^2+bx+c}$，可先配方，将其化为

$$
\sqrt{\varphi^2(x)+k^2},\qquad
\sqrt{\varphi^2(x)-k^2},\qquad
\sqrt{k^2-\varphi^2(x)}
$$

之一，再选择相应的三角代换。

#### 2. 根式代换

被积函数含有 $\sqrt[n]{ax+b}$ 时，通常令

$$
\sqrt[n]{ax+b}=t.
$$

若同时出现 $\sqrt[m]{ax+b}$ 与 $\sqrt[n]{ax+b}$，则取 $m,n$ 的最小公倍数 $l$，令

$$
\sqrt[l]{ax+b}=t,
$$

从而把所有根式都化为 $t$ 的整数次幂。类似地，含

$$
\sqrt[n]{\frac{ax+b}{cx+d}}
$$

时，可令该根式整体等于 $t$。

#### 3. 倒代换

当有理式分母次数比分子次数高两次及以上，或令 $x=1/t$ 能明显降低复杂度时，可作倒代换

$$
x=\frac1t.
$$

倒代换不是固定步骤，只有在它能够约去高次幂或把式子化为熟悉结构时才值得使用。

#### 4. 复杂函数直接代换

当被积函数中出现 $a^x$、$e^x$、$\ln x$、$\arcsin x$、$\arctan x$ 等整体时，也可直接令该整体为新变量。但若 $\ln x$、$\arcsin x$、$\arctan x$ 与多项式相乘，或 $e^{ax}$ 与多项式相乘，通常优先考虑分部积分法。

+++ 例题 9.3：三角代换消去半圆型根式

求不定积分 $\displaystyle \int\sqrt{a^2-x^2}\mathrm{d}x$，其中 $a>0$。

**【解】**

令 $x=a\sin t$，取 $-\pi/2\leqslant t\leqslant\pi/2$，则

$$
\mathrm{d}x=a\cos t\,\mathrm{d}t,\qquad
\sqrt{a^2-x^2}=a\cos t,
$$

并且 $t=\arcsin(x/a)$。于是

$$
\begin{aligned}
\int\sqrt{a^2-x^2}\mathrm{d}x
&=a^2\int\cos^2t\,\mathrm{d}t\\
&=\frac{a^2}{2}\int(1+\cos2t)\mathrm{d}t\\
&=\frac{a^2}{2}t+\frac{a^2}{2}\sin t\cos t+C.
\end{aligned}
$$

回代 $\sin t=x/a$、$\cos t=\sqrt{a^2-x^2}/a$，得

$$
\int\sqrt{a^2-x^2}\mathrm{d}x
=\frac{a^2}{2}\arcsin\frac{x}{a}
+\frac{x}{2}\sqrt{a^2-x^2}+C.
$$

+++

## 3. 分部积分法

### 基本公式与选取原则

由乘积微分公式

$$
\mathrm{d}(uv)=u\,\mathrm{d}v+v\,\mathrm{d}u
$$

可得分部积分公式

$$
\int u\,\mathrm{d}v=uv-\int v\,\mathrm{d}u.
$$

该方法适合 $\int u\,\mathrm{d}v$ 较难，而交换“求导”和“积分”的对象后，$\int v\,\mathrm{d}u$ 更容易计算的情形。选取 $u$ 与 $\mathrm{d}v$ 时，一般令求导后会变简单的因子为 $u$，令容易积分的因子连同 $\mathrm{d}x$ 为 $\mathrm{d}v$。

常用经验可概括为“反、对、幂、指、三”：

1. 反三角函数；
2. 对数函数；
3. 幂函数；
4. 指数函数；
5. 三角函数。

乘积中同时出现这些类型时，通常把顺序靠前者选为 $u$，但这只是经验，不是定理。是否选取正确，最终仍以 $\int v\,\mathrm{d}u$ 是否更简单为准。

常见选择如下：

- $P_n(x)e^{ax}$、$P_n(x)\sin bx$、$P_n(x)\cos bx$：通常取 $u=P_n(x)$；
- $e^{ax}\sin bx$、$e^{ax}\cos bx$：两因子均可选作 $u$，连续使用两次分部积分后可解出原积分；
- $P_n(x)\ln x$、$P_n(x)\arcsin x$、$P_n(x)\arctan x$：通常分别取对数函数或反三角函数为 $u$。

例如，

$$
\begin{aligned}
\int\ln(1+x^2)\mathrm{d}x
&=x\ln(1+x^2)-\int x\cdot\frac{2x}{1+x^2}\mathrm{d}x\\
&=x\ln(1+x^2)-2x+2\arctan x+C,
\end{aligned}
$$

而

$$
\int x^3e^x\mathrm{d}x
=e^x(x^3-3x^2+6x-6)+C.
$$

### 多次分部积分与表格法

若 $u,v$ 具有足够阶的连续导数，多次使用分部积分公式可得

$$
\begin{aligned}
\int u\,v^{(n+1)}\mathrm{d}x
={}&uv^{(n)}-u'v^{(n-1)}+u''v^{(n-2)}-\cdots\\
&+(-1)^nu^{(n)}v
+(-1)^{n+1}\int u^{(n+1)}v\mathrm{d}x.
\end{aligned}
$$

当 $u$ 为多项式时，连续求导最终会得到 $0$，余下积分随之消失。计算时可把 $u,u',u'',\ldots$ 写在上行，把 $\mathrm{d}v$ 的连续原函数写在下行，自左上向右下错位相乘，符号依次为“$+$、$-$、$+$、$-$、$\cdots$”。

例如，

$$
\begin{aligned}
\int(x^3+2x+6)e^{2x}\mathrm{d}x
={}&(x^3+2x+6)\frac{e^{2x}}2
-(3x^2+2)\frac{e^{2x}}4\\
&+6x\frac{e^{2x}}8
-6\frac{e^{2x}}{16}+C\\
={}&\left(\frac12x^3-\frac34x^2+\frac74x+\frac{17}{8}\right)e^{2x}+C.
\end{aligned}
$$

+++ 例题 9.4：先换元消去根式，再作分部积分

求不定积分 $\displaystyle \int\frac{xe^x}{\sqrt{e^x-1}}\mathrm{d}x$，其中 $x>0$。

**【解】**

令

$$
u=\sqrt{e^x-1},
$$

则

$$
e^x=1+u^2,\qquad
x=\ln(1+u^2),\qquad
\mathrm{d}x=\frac{2u}{1+u^2}\mathrm{d}u.
$$

原积分化为

$$
\begin{aligned}
\int\frac{xe^x}{\sqrt{e^x-1}}\mathrm{d}x
&=2\int\ln(1+u^2)\mathrm{d}u\\
&=2u\ln(1+u^2)-4\int\frac{u^2}{1+u^2}\mathrm{d}u\\
&=2u\ln(1+u^2)-4u+4\arctan u+C.
\end{aligned}
$$

回代得

$$
\boxed{
2x\sqrt{e^x-1}-4\sqrt{e^x-1}
+4\arctan\sqrt{e^x-1}+C
}.
$$

+++

+++ 例题 9.5：三角换元后出现循环积分

求不定积分
$\displaystyle \int\frac{xe^{\arctan x}}{(1+x^2)^{3/2}}\mathrm{d}x$。

**【解】**

令 $x=\tan t$，其中 $-\pi/2<t<\pi/2$，则

$$
\mathrm{d}x=\sec^2t\,\mathrm{d}t,\qquad
(1+x^2)^{3/2}=\sec^3t.
$$

于是

$$
\int\frac{xe^{\arctan x}}{(1+x^2)^{3/2}}\mathrm{d}x
=\int e^t\sin t\,\mathrm{d}t.
$$

对右端连续使用两次分部积分：

$$
\begin{aligned}
\int e^t\sin t\,\mathrm{d}t
&=-e^t\cos t+\int e^t\cos t\,\mathrm{d}t\\
&=-e^t\cos t+e^t\sin t-\int e^t\sin t\,\mathrm{d}t.
\end{aligned}
$$

移项后

$$
\int e^t\sin t\,\mathrm{d}t
=\frac12e^t(\sin t-\cos t)+C.
$$

由 $\sin t=x/\sqrt{1+x^2}$、$\cos t=1/\sqrt{1+x^2}$，得

$$
\boxed{
\int\frac{xe^{\arctan x}}{(1+x^2)^{3/2}}\mathrm{d}x
=\frac{(x-1)e^{\arctan x}}{2\sqrt{1+x^2}}+C
}.
$$

一般地，

$$
\int e^{ax}\sin bx\,\mathrm{d}x
=\frac{ae^{ax}\sin bx-be^{ax}\cos bx}{a^2+b^2}+C,
$$

$$
\int e^{ax}\cos bx\,\mathrm{d}x
=\frac{ae^{ax}\cos bx+be^{ax}\sin bx}{a^2+b^2}+C.
$$

+++

+++ 例题 9.6：先由复合关系求出函数表达式

设 $\displaystyle f(\ln x)=\frac{\ln(1+x)}{x}$，计算 $\int f(x)\mathrm{d}x$。

**【解】**

令 $t=\ln x$，则 $x=e^t$，因此

$$
f(t)=\frac{\ln(1+e^t)}{e^t}.
$$

把自变量 $t$ 改写为 $x$，有

$$
f(x)=e^{-x}\ln(1+e^x).
$$

于是

$$
\begin{aligned}
\int f(x)\mathrm{d}x
&=\int\ln(1+e^x)\mathrm{d}(-e^{-x})\\
&=-e^{-x}\ln(1+e^x)+\int\frac{1}{1+e^x}\mathrm{d}x\\
&=-e^{-x}\ln(1+e^x)
+\int\left(1-\frac{e^x}{1+e^x}\right)\mathrm{d}x\\
&=x-(1+e^{-x})\ln(1+e^x)+C.
\end{aligned}
$$

+++

+++ 例题 9.7：通过分部积分制造原积分的抵消

计算不定积分 $\displaystyle \int e^{2x}(\tan x+1)^2\mathrm{d}x$。

**【解】**

因为

$$
(\tan x+1)^2
=\tan^2x+2\tan x+1
=\sec^2x+2\tan x,
$$

所以

$$
\begin{aligned}
\int e^{2x}(\tan x+1)^2\mathrm{d}x
&=\int e^{2x}\sec^2x\mathrm{d}x
+2\int e^{2x}\tan x\mathrm{d}x\\
&=\int e^{2x}\mathrm{d}(\tan x)
+2\int e^{2x}\tan x\mathrm{d}x\\
&=e^{2x}\tan x
-2\int e^{2x}\tan x\mathrm{d}x
+2\int e^{2x}\tan x\mathrm{d}x\\
&=e^{2x}\tan x+C.
\end{aligned}
$$

+++

## 4. 有理函数的积分

### 定义与基本思想

形如

$$
\int\frac{P_n(x)}{Q_m(x)}\mathrm{d}x
$$

的积分称为有理函数积分，其中 $P_n,Q_m$ 分别为 $n$ 次、$m$ 次多项式。

- 当 $n<m$ 时，称为真分式；
- 当 $n\geqslant m$ 时，先作多项式除法，把它化为一个多项式与真分式之和。

若 $Q_m(x)$ 能在实数范围内因式分解，就把真分式拆成若干最简有理分式之和，再逐项积分。实数范围内的不可约因子只有一次因式和判别式小于 $0$ 的二次因式，因此最简有理分式只有以下几类：

$$
\frac{A}{ax+b},\qquad
\frac{A_k}{(ax+b)^k},
$$

$$
\frac{Ax+B}{px^2+qx+r},\qquad
\frac{A_kx+B_k}{(px^2+qx+r)^k},
\qquad q^2-4pr<0.
$$

例如，

$$
\int\frac{1}{x+1}\mathrm{d}x=\ln|x+1|+C,
$$

$$
\int\frac{2}{(2x-1)^2}\mathrm{d}x
=-\frac{1}{2x-1}+C,
$$

$$
\begin{aligned}
\int\frac{x-1}{x^2+1}\mathrm{d}x
&=\frac12\int\frac{2x}{x^2+1}\mathrm{d}x
-\int\frac{1}{x^2+1}\mathrm{d}x\\
&=\frac12\ln(x^2+1)-\arctan x+C.
\end{aligned}
$$

有些积分还可利用分部积分建立递推关系。例如令

$$
I=\int\frac{1}{(1+x^2)^2}\mathrm{d}x,
$$

则

$$
\begin{aligned}
\int\frac{1}{1+x^2}\mathrm{d}x
&=\frac{x}{1+x^2}
+\int x\cdot\frac{2x}{(1+x^2)^2}\mathrm{d}x\\
&=\frac{x}{1+x^2}
+2\int\frac{x^2+1-1}{(1+x^2)^2}\mathrm{d}x\\
&=\frac{x}{1+x^2}+2\arctan x-2I,
\end{aligned}
$$

所以

$$
I=\frac{x}{2(1+x^2)}+\frac12\arctan x+C.
$$

### 部分分式的拆分规则

分母 $Q_m(x)$ 的每个因式按下列规则贡献相应项：

1. 一次单因式 $ax+b$ 产生一项 $\displaystyle A/(ax+b)$；
2. $k$ 重一次因式 $(ax+b)^k$ 产生
   $\displaystyle A_1/(ax+b)+A_2/(ax+b)^2+\cdots+A_k/(ax+b)^k$；
3. 二次不可约单因式 $px^2+qx+r$ 产生一项
   $\displaystyle (Ax+B)/(px^2+qx+r)$；
4. $k$ 重二次不可约因式 $(px^2+qx+r)^k$ 产生
   $\displaystyle (A_1x+B_1)/(px^2+qx+r)+\cdots+(A_kx+B_k)/(px^2+qx+r)^k$。

例如，若

$$
Q_m(x)=(ax+b)^2(px^2+qx+r)^2,
$$

则应设

$$
\frac{P(x)}{Q_m(x)}
=\frac{A_1}{ax+b}+\frac{A_2}{(ax+b)^2}
+\frac{A_3x+B_3}{px^2+qx+r}
+\frac{A_4x+B_4}{(px^2+qx+r)^2}.
$$

待定系数可通过比较多项式同次幂系数求得，也可把分母的根或其他便于计算的值代入恒等式；实际计算中常把两种方法结合使用。

+++ 例题 9.8：含重一次因式的部分分式

求不定积分
$\displaystyle \int\frac{4x^2-6x-1}{(x+1)(2x-1)^2}\mathrm{d}x$。

**【解】**

设

$$
\frac{4x^2-6x-1}{(x+1)(2x-1)^2}
=\frac{A}{x+1}+\frac{B}{2x-1}+\frac{C}{(2x-1)^2}.
$$

通分并比较分子，得恒等式

$$
4x^2-6x-1
=A(2x-1)^2+B(x+1)(2x-1)+C(x+1).
$$

令 $x=-1$，得 $9=9A$，故 $A=1$；令 $x=1/2$，得
$-3=3C/2$，故 $C=-2$；再令 $x=0$，得

$$
-1=A-B+C,
$$

从而 $B=0$。因此

$$
\frac{4x^2-6x-1}{(x+1)(2x-1)^2}
=\frac{1}{x+1}-\frac{2}{(2x-1)^2}.
$$

所以

$$
\boxed{
\int\frac{4x^2-6x-1}{(x+1)(2x-1)^2}\mathrm{d}x
=\ln|x+1|+\frac{1}{2x-1}+C
}.
$$

+++

+++ 例题 9.9：一次因式与二次不可约因式并存

求不定积分 $\displaystyle \int\frac{x}{x^3-x^2+x-1}\mathrm{d}x$。

**【解】**

因为

$$
x^3-x^2+x-1=(x-1)(x^2+1),
$$

设

$$
\frac{x}{(x-1)(x^2+1)}
=\frac{A}{x-1}+\frac{Bx+C}{x^2+1}.
$$

通分得

$$
x=A(x^2+1)+(Bx+C)(x-1).
$$

令 $x=1$，得 $A=1/2$；令 $x=0$，得 $C=1/2$；比较 $x^2$ 的系数，得 $A+B=0$，故 $B=-1/2$。于是

$$
\begin{aligned}
\int\frac{x}{x^3-x^2+x-1}\mathrm{d}x
&=\frac12\int\frac{\mathrm{d}x}{x-1}
-\frac12\int\frac{x-1}{x^2+1}\mathrm{d}x\\
&=\frac12\ln|x-1|
-\frac14\ln(x^2+1)
+\frac12\arctan x+C\\
&=\frac14\ln\frac{(x-1)^2}{x^2+1}
+\frac12\arctan x+C.
\end{aligned}
$$

+++

### 可化为有理函数的积分

#### 1. 三角有理式

形如 $R(\sin x,\cos x)$ 的有理式称为三角函数有理式。总可以作万能代换

$$
t=\tan\frac{x}{2},\qquad
\sin x=\frac{2t}{1+t^2},\qquad
\cos x=\frac{1-t^2}{1+t^2},\qquad
\mathrm{d}x=\frac{2}{1+t^2}\mathrm{d}t,
$$

把积分化为关于 $t$ 的有理函数积分。

若被积函数具有对称性，可使用更简单的代换：

$$
R(-\sin x,\cos x)=-R(\sin x,\cos x)
\quad\Longrightarrow\quad t=\cos x;
$$

$$
R(\sin x,-\cos x)=-R(\sin x,\cos x)
\quad\Longrightarrow\quad t=\sin x;
$$

$$
R(-\sin x,-\cos x)=R(\sin x,\cos x)
\quad\Longrightarrow\quad t=\tan x.
$$

#### 2. 根式有理化

对于

$$
\int f\!\left(\sqrt{a^2+x^2}\right)\mathrm{d}x,
$$

作 $x=a\tan t$ 往往可化为三角有理式，进而化为有理函数积分。

对于

$$
\int f\!\left(\sqrt{\frac{ax+b}{cx+d}}\right)\mathrm{d}x,
$$

令

$$
t=\sqrt{\frac{ax+b}{cx+d}},
$$

解出 $x$ 关于 $t$ 的有理表达式，即可把原积分化为关于 $t$ 的有理函数积分。

+++ 例题 9.10：把分子凑成分母的导数

计算 $\displaystyle \int\frac{2x+3}{x^2-x+1}\mathrm{d}x$。

**【解】**

把分子拆成

$$
2x+3=(2x-1)+4,
$$

则

$$
\begin{aligned}
\int\frac{2x+3}{x^2-x+1}\mathrm{d}x
&=\int\frac{\mathrm{d}(x^2-x+1)}{x^2-x+1}
+4\int\frac{\mathrm{d}x}{x^2-x+1}\\
&=\ln(x^2-x+1)
+4\int\frac{\mathrm{d}x}{(x-\frac12)^2+\frac34}.
\end{aligned}
$$

因此

$$
\boxed{
\int\frac{2x+3}{x^2-x+1}\mathrm{d}x
=\ln(x^2-x+1)
+\frac{8\sqrt3}{3}\arctan\frac{2x-1}{\sqrt3}+C
}.
$$

+++

:::info
不定积分题的常用判断顺序是：先化简与拆项，再尝试凑微分；含根式或复合结构时考虑换元；乘积中一个因子求导后明显变简单时考虑分部积分；纯有理函数先做多项式除法与部分分式分解。复杂题往往需要连续使用两种以上方法，不能只凭表面形式机械选择。
:::

# 三、定积分的计算

## 1. 牛顿—莱布尼茨公式

设函数 $F(x)$ 是连续函数 $f(x)$ 在 $[a,b]$ 上的一个原函数，即 $F'(x)=f(x)$。则

$$
\boxed{
\int_a^b f(x)\,\mathrm{d}x
=F(x)\bigg|_a^b
=F(b)-F(a)
}.
$$

这就是**牛顿—莱布尼茨公式**。它把定积分的计算归结为求被积函数的一个原函数，再代入上、下限。

:::info
**公式的证明。** 令

$$
G(x)=\int_a^x f(t)\,\mathrm{d}t\qquad(a\le x\le b).
$$

由积分上限函数的性质，$G'(x)=f(x)$，并且

$$
G(b)=\int_a^b f(t)\,\mathrm{d}t,
\qquad G(a)=0.
$$

又因 $F'(x)=f(x)$，故 $G(x)=F(x)+C$。于是

$$
\int_a^b f(x)\,\mathrm{d}x
=G(b)-G(a)
=F(b)-F(a).
$$
:::

:::info
**牛顿—莱布尼茨公式的推广。**

1. 若 $f(x)$ 在 $[a,b]$ 上有原函数 $F(x)$，则

   $$
   \int_a^b f(x)\,\mathrm{d}x=F(b)-F(a).
   $$

2. 若 $f(x)$ 在 $[a,b]$ 上分段有原函数。例如，在 $[a,c)$ 上有原函数 $F_1(x)$，在 $(c,b]$ 上有原函数 $F_2(x)$，则

   $$
   \begin{aligned}
   \int_a^b f(x)\,\mathrm{d}x
   &=\int_a^c f(x)\,\mathrm{d}x+\int_c^b f(x)\,\mathrm{d}x\\
   &=F_1(c-0)-F_1(a)+F_2(b)-F_2(c+0).
   \end{aligned}
   $$

   若 $F_1(c-0)$、$F_2(c+0)$ 都存在，则上述定积分收敛；若至少有一个不存在，则应按反常积分的定义另行判定，不能直接套用端点代入公式。
:::

+++ 例题 9.11：由复合关系确定被积函数

设

$$
f\!\left(x+\frac1x\right)=\frac{x+x^3}{1+x^4},
$$

求

$$
\int_2^{2\sqrt2} f(x)\,\mathrm{d}x.
$$

**【分析】** 先由给定的复合关系求出 $f(x)$ 在积分区间上的表达式，再计算定积分。

**【解】** 令

$$
t=x+\frac1x.
$$

则

$$
\frac{t}{t^2-2}
=\frac{x+\frac1x}{x^2+\frac1{x^2}}
=\frac{x+x^3}{1+x^4}.
$$

当 $t\ge2$ 时，故有

$$
f(t)=\frac{t}{t^2-2}.
$$

积分区间 $[2,2\sqrt2]$ 包含于 $[2,+\infty)$，因此

$$
\begin{aligned}
\int_2^{2\sqrt2} f(x)\,\mathrm{d}x
&=\int_2^{2\sqrt2}\frac{x}{x^2-2}\,\mathrm{d}x\\
&=\frac12\ln(x^2-2)\bigg|_2^{2\sqrt2}\\
&=\frac12\ln3.
\end{aligned}
$$

+++

由牛顿—莱布尼茨公式结合不定积分的计算方法，可以得到定积分的换元积分法和分部积分法。

## 2. 定积分的换元积分法

设 $f(x)$ 在 $[a,b]$ 上连续，函数 $x=\varphi(t)$ 满足：

1. $\varphi(\alpha)=a$，$\varphi(\beta)=b$；
2. $\varphi(t)$ 在 $[\alpha,\beta]$ 或 $[\beta,\alpha]$ 上有连续的导数；
3. $\varphi(t)$ 的值域为 $R_\varphi=[a,b]$。

则

$$
\boxed{
\int_a^b f(x)\,\mathrm{d}x
=\int_\alpha^\beta f\bigl(\varphi(t)\bigr)\varphi'(t)\,\mathrm{d}t
}.
$$

:::info
当 $\varphi(t)$ 的值域 $R_\varphi$ 超出 $[a,b]$ 时，只要 $f(x)$ 在整个 $R_\varphi$ 上连续，且端点与导数条件仍满足，上述换元公式依然成立。换元后必须同步变换积分上下限；若保留原上下限，就必须把积分变量换回去。
:::

## 3. 定积分的分部积分法

若 $u'(x)$、$v'(x)$ 在 $[a,b]$ 上连续，则

$$
\boxed{
\int_a^b u(x)v'(x)\,\mathrm{d}x
=u(x)v(x)\bigg|_a^b
-\int_a^b v(x)u'(x)\,\mathrm{d}x
}.
$$

与不定积分一样，分部积分时仍应优先把求导后更简单的一因子选作 $u$。定积分的边界项必须写成 $u(x)v(x)\big|_a^b$，不能遗漏上、下限的代入。

## 4. 计算定积分的常用结论

### （1）奇偶性

设 $f(x)$ 为连续偶函数，则

$$
\boxed{
\int_{-a}^a f(x)\,\mathrm{d}x
=2\int_0^a f(x)\,\mathrm{d}x
}.
$$

设 $f(x)$ 为连续奇函数，则

$$
\boxed{
\int_{-a}^a f(x)\,\mathrm{d}x=0
}.
$$

### （2）周期性

设 $f(x)$ 是以 $T$ 为周期的连续函数，则对任意实数 $a$，都有

$$
\boxed{
\int_a^{a+T} f(x)\,\mathrm{d}x
=\int_0^T f(x)\,\mathrm{d}x
}.
$$

也就是说，在长度为一个周期的区间上，定积分与该区间的起点位置无关。

### （3）区间再现公式

设 $f(x)$ 为连续函数，则

$$
\boxed{
\int_a^b f(x)\,\mathrm{d}x
=\int_a^b f(a+b-x)\,\mathrm{d}x
}.
$$

这个结论称为**区间再现公式**。若 $f(x)$ 复杂，而 $f(x)+f(a+b-x)$ 简单，则可取两式的平均：

$$
\boxed{
\int_a^b f(x)\,\mathrm{d}x
=\int_a^b\frac{f(x)+f(a+b-x)}2\,\mathrm{d}x
}.
$$

例如，

$$
\begin{aligned}
\int_0^{\frac\pi4}\ln(1+\tan x)\,\mathrm{d}x
&=\int_0^{\frac\pi4}\ln\left[1+\tan\left(\frac\pi4-x\right)\right],\mathrm{d}x\\
&=\int_0^{\frac\pi4}\ln\frac2{1+\tan x}\,\mathrm{d}x\\
&=\int_0^{\frac\pi4}
\frac{\ln(1+\tan x)+\ln\frac2{1+\tan x}}2\,\mathrm{d}x\\
&=\frac\pi8\ln2.
\end{aligned}
$$

### （4）华里士公式

当 $n$ 为大于 $1$ 的奇数或正偶数时，

$$
\int_0^{\frac\pi2}\sin^n x\,\mathrm{d}x
=\int_0^{\frac\pi2}\cos^n x\,\mathrm{d}x
=
\begin{cases}
\displaystyle
\frac{n-1}{n}\cdot\frac{n-3}{n-2}\cdots\frac23\cdot1,
& n\text{ 为大于 }1\text{ 的奇数},\\[10pt]
\displaystyle
\frac{n-1}{n}\cdot\frac{n-3}{n-2}\cdots\frac12\cdot\frac\pi2,
& n\text{ 为正偶数}.
\end{cases}
$$

从而

$$
\int_0^\pi\sin^n x\,\mathrm{d}x
=
\begin{cases}
\displaystyle
2\cdot\frac{n-1}{n}\cdot\frac{n-3}{n-2}\cdots\frac23\cdot1,
& n\text{ 为大于 }1\text{ 的奇数},\\[10pt]
\displaystyle
2\cdot\frac{n-1}{n}\cdot\frac{n-3}{n-2}\cdots\frac12\cdot\frac\pi2,
& n\text{ 为正偶数},
\end{cases}
$$

$$
\int_0^\pi\cos^n x\,\mathrm{d}x
=
\begin{cases}
0,& n\text{ 为正奇数},\\[6pt]
\displaystyle
2\cdot\frac{n-1}{n}\cdot\frac{n-3}{n-2}\cdots\frac12\cdot\frac\pi2,
& n\text{ 为正偶数},
\end{cases}
$$

以及

$$
\int_0^{2\pi}\cos^n x\,\mathrm{d}x
=\int_0^{2\pi}\sin^n x\,\mathrm{d}x
=
\begin{cases}
0,& n\text{ 为正奇数},\\[6pt]
\displaystyle
4\cdot\frac{n-1}{n}\cdot\frac{n-3}{n-2}\cdots\frac12\cdot\frac\pi2,
& n\text{ 为正偶数}.
\end{cases}
$$

上述四类公式合称华里士公式，可快速计算特殊的三角函数定积分。例如，

$$
\int_0^{\frac\pi2}\sin^8x\,\mathrm{d}x
=\frac78\cdot\frac56\cdot\frac34\cdot\frac12\cdot\frac\pi2
=\frac{35\pi}{256},
$$

$$
\int_0^\pi\sin^9x\,\mathrm{d}x
=2\int_0^{\frac\pi2}\sin^9x\,\mathrm{d}x
=2\cdot\frac89\cdot\frac67\cdot\frac45\cdot\frac23\cdot1
=\frac{256}{315}.
$$

+++ 例题 9.12：将数列极限化为定积分

计算

$$
\lim_{n\to\infty}\frac1n
\sum_{i=1}^n\left[\ln(3n-2i)-\ln(n+2i)\right].
$$

**【分析】** 先将对数中的 $n$ 提出，把和式整理为黎曼和。

**【解】**

$$
\ln(3n-2i)-\ln(n+2i)
=\ln\frac{3n-2i}{n+2i}
=\ln\frac{3-2\frac{i}{n}}{1+2\frac{i}{n}}.
$$

故原式为

$$
\begin{aligned}
\lim_{n\to\infty}\frac1n
\sum_{i=1}^n\ln\frac{3-2\frac{i}{n}}{1+2\frac{i}{n}}
&=\int_0^1\ln\frac{3-2x}{1+2x}\,\mathrm{d}x\\
&=\int_0^1\ln\frac{\frac32-x}{\frac12+x}\,\mathrm{d}x.
\end{aligned}
$$

令 $x-\dfrac12=t$，则

$$
\int_0^1\ln\frac{\frac32-x}{\frac12+x}\,\mathrm{d}x
=\int_{-\frac12}^{\frac12}\ln\frac{1-t}{1+t}\,\mathrm{d}t.
$$

由于 $\ln\dfrac{1-t}{1+t}$ 为奇函数，故原式为

$$
\boxed{0}.
$$

+++

+++ 例题 9.13：利用奇偶性和三角代换

计算

$$
\int_{-1}^1x^2\sqrt{1-x^2}\,\mathrm{d}x.
$$

**【分析】** 根式中含有平方项，可作三角函数代换；被积函数还是偶函数，应先利用区间对称性。

**【解】** 因被积函数为偶函数，

$$
\int_{-1}^1x^2\sqrt{1-x^2}\,\mathrm{d}x
=2\int_0^1x^2\sqrt{1-x^2}\,\mathrm{d}x.
$$

令 $x=\sin t$。当 $x=0$ 时，取 $t=0$；当 $x=1$ 时，取 $t=\dfrac\pi2$。在 $\left[0,\dfrac\pi2\right]$ 上，$\cos t$ 连续且 $x'(t)=\cos t$，从而

$$
\begin{aligned}
\int_{-1}^1x^2\sqrt{1-x^2}\,\mathrm{d}x
&=2\int_0^{\frac\pi2}\sin^2t\cos^2t\,\mathrm{d}t\\
&=2\left(\int_0^{\frac\pi2}\sin^2t\,\mathrm{d}t
-\int_0^{\frac\pi2}\sin^4t\,\mathrm{d}t\right)\\
&=2\left(\frac12\cdot\frac\pi2
-\frac34\cdot\frac12\cdot\frac\pi2\right)\\
&=\frac\pi8.
\end{aligned}
$$

:::warning
作 $x=\sin t$ 后，$x=0$ 可以对应 $t=0,\pm\pi,\pm2\pi,\ldots$，$x=1$ 也有多种对应取值；但

$$
\sqrt{1-x^2}=\sqrt{1-\sin^2t}=|\cos t|
$$

在不同的区间组合中绝对值的处理不同。因此应优先选取 $t\in\left[0,\dfrac\pi2\right]$，此时 $|\cos t|=\cos t$，再同步变换上下限。
:::

+++

+++ 例题 9.14：反三角函数与根式的定积分

计算

$$
\int_0^1\arcsin\sqrt{1-x^2}\,\mathrm{d}x.
$$

**【分析】** 一方面可用分部积分把反三角函数求导；另一方面，根式中含平方项，也可用三角换元。

**【解】** 结果为

$$
\boxed{1}.
$$

**方法一：分部积分法。** 取

$$
u=\arcsin\sqrt{1-x^2},\qquad \mathrm{d}v=\mathrm{d}x.
$$

则

$$
\begin{aligned}
\int_0^1\arcsin\sqrt{1-x^2}\,\mathrm{d}x
&=x\arcsin\sqrt{1-x^2}\bigg|_0^1
-\int_0^1x\,\mathrm{d}\!\left(\arcsin\sqrt{1-x^2}\right)\\
&=\int_0^1\frac{x}{\sqrt{1-x^2}}\,\mathrm{d}x\\
&=-\frac12\int_0^1\frac{\mathrm{d}(1-x^2)}{\sqrt{1-x^2}}\\
&=-\sqrt{1-x^2}\bigg|_0^1=1.
\end{aligned}
$$

**方法二：换元法。** 令 $x=\cos t$。当 $x=0$ 时，$t=\dfrac\pi2$；当 $x=1$ 时，$t=0$。于是

$$
\begin{aligned}
\int_0^1\arcsin\sqrt{1-x^2}\,\mathrm{d}x
&=\int_{\frac\pi2}^0\arcsin(\sin t)(-\sin t)\,\mathrm{d}t\\
&=\int_0^{\frac\pi2}t\sin t\,\mathrm{d}t\\
&=\left(-t\cos t+\sin t\right)\bigg|_0^{\frac\pi2}=1.
\end{aligned}
$$

+++

+++ 例题 9.15：利用已知积分和奇偶性

计算

$$
\int_0^1x\arcsin\sqrt{4x-4x^2}\,\mathrm{d}x.
$$

**【分析】**

$$
\sqrt{4x-4x^2}
=\sqrt{1-(1-2x)^2}.
$$

既可令 $1-2x=\cos t$ 作三角换元，也可令 $1-2x=t$，再利用例题 9.14 的结论。

**【解】** 令 $1-2x=t$，则

$$
x=\frac{1-t}{2},\qquad \mathrm{d}x=-\frac12\mathrm{d}t.
$$

于是

$$
\begin{aligned}
\int_0^1x\arcsin\sqrt{4x-4x^2}\,\mathrm{d}x
&=\frac14\int_{-1}^1(1-t)\arcsin\sqrt{1-t^2}\,\mathrm{d}t\\
&=\frac14\int_{-1}^1\arcsin\sqrt{1-t^2}\,\mathrm{d}t
-\frac14\int_{-1}^1t\arcsin\sqrt{1-t^2}\,\mathrm{d}t\\
&=\frac12\int_0^1\arcsin\sqrt{1-t^2}\,\mathrm{d}t\\
&=\frac12.
\end{aligned}
$$

+++

+++ 例题 9.16：证明周期函数的积分性质

证明：若函数 $f(x)$ 是以 $T$ 为周期的连续函数，则对任意实数 $a$，都有

$$
\int_a^{a+T}f(x)\,\mathrm{d}x
=\int_0^Tf(x)\,\mathrm{d}x.
$$

**【证】**

$$
\int_a^{a+T}f(x)\,\mathrm{d}x
=\int_a^0f(x)\,\mathrm{d}x
+\int_0^Tf(x)\,\mathrm{d}x
+\int_T^{a+T}f(x)\,\mathrm{d}x.
$$

在最后一项中令 $t=x-T$，则

$$
\int_T^{a+T}f(x)\,\mathrm{d}x
=\int_0^af(t+T)\,\mathrm{d}t
=\int_0^af(t)\,\mathrm{d}t
=\int_0^af(x)\,\mathrm{d}x.
$$

因此

$$
\int_a^{a+T}f(x)\,\mathrm{d}x
=\int_a^0f(x)\,\mathrm{d}x
+\int_0^Tf(x)\,\mathrm{d}x
+\int_0^af(x)\,\mathrm{d}x
=\int_0^Tf(x)\,\mathrm{d}x.
$$

:::info
若 $f(x)$ 还是连续且以 $T$ 为周期的奇函数，则

$$
\int_0^Tf(x)\,\mathrm{d}x=0.
$$
:::

+++

+++ 例题 9.17：证明区间再现公式

设 $f(x)$ 为连续函数，证明

$$
\int_a^bf(x)\,\mathrm{d}x
=\int_a^bf(a+b-x)\,\mathrm{d}x.
$$

**【证】** 作变量代换 $x=a+b-t$，则

$$
\begin{aligned}
\int_a^bf(x)\,\mathrm{d}x
&=\int_b^af(a+b-t)(-\mathrm{d}t)\\
&=\int_a^bf(a+b-t)\,\mathrm{d}t\\
&=\int_a^bf(a+b-x)\,\mathrm{d}x.
\end{aligned}
$$

+++

+++ 例题 9.18：区间再现公式的应用

设 $f(x)$ 在 $[0,1]$ 上连续，证明

$$
\int_0^\pi xf(\sin x)\,\mathrm{d}x
=\frac\pi2\int_0^\pi f(\sin x)\,\mathrm{d}x,
$$

并计算

$$
\int_0^\pi x\sin^9x\,\mathrm{d}x.
$$

**【分析】** $\displaystyle\int_0^\pi xf(\sin x)\,\mathrm{d}x$ 直接计算不便，应作区间再现换元。

**【证】** 令 $x=\pi-t$，作区间再现换元，有

$$
\begin{aligned}
\int_0^\pi xf(\sin x)\,\mathrm{d}x
&=\int_\pi^0(\pi-t)f[\sin(\pi-t)](-\mathrm{d}t)\\
&=\int_0^\pi(\pi-t)f(\sin t)\,\mathrm{d}t\\
&=\pi\int_0^\pi f(\sin t)\,\mathrm{d}t
-\int_0^\pi tf(\sin t)\,\mathrm{d}t.
\end{aligned}
$$

移项并将 $t$ 改写为 $x$，即得

$$
\int_0^\pi xf(\sin x)\,\mathrm{d}x
=\frac\pi2\int_0^\pi f(\sin x)\,\mathrm{d}x.
$$

取 $f(u)=u^9$，再由华里士公式，

$$
\int_0^\pi x\sin^9x\,\mathrm{d}x
=\frac\pi2\int_0^\pi\sin^9x\,\mathrm{d}x
=\frac\pi2\cdot\frac{256}{315}
=\boxed{\frac{128\pi}{315}}.
$$

+++

+++ 例题 9.19：积分上限函数参与定积分

设

$$
f(x)=\int_1^{x^2}e^{-t^2}\,\mathrm{d}t,
$$

则

$$
\int_0^1xf(x)\,\mathrm{d}x
=\left(\ \right).
$$

- （A）$\dfrac14(e^{-1}+1)$
- （B）$\dfrac14(e^{-1}-1)$
- （C）$\dfrac14(e+1)$
- （D）$\dfrac14(e-1)$

**【分析】** 无需先求出 $f(x)$ 的显式表达式；可由积分上限函数求导公式求出 $f'(x)$，再使用分部积分法。

**【解】** 由

$$
f(x)=\int_1^{x^2}e^{-t^2}\,\mathrm{d}t
$$

可知 $f(1)=0$，且

$$
f'(x)=2xe^{-x^4}.
$$

取 $u=f(x)$，$\mathrm{d}v=x\,\mathrm{d}x$，则

$$
\begin{aligned}
\int_0^1xf(x)\,\mathrm{d}x
&=\frac{x^2}{2}f(x)\bigg|_0^1
-\int_0^1\frac{x^2}{2}f'(x)\,\mathrm{d}x\\
&=-\int_0^1x^3e^{-x^4}\,\mathrm{d}x\\
&=\frac14\left(e^{-1}-1\right).
\end{aligned}
$$

故应选

$$
\boxed{\text{（B）}}.
$$

+++

# 四、变限积分的计算

## 1. 求导公式

设

$$
F(x)=\int_{\varphi_1(x)}^{\varphi_2(x)}f(t)\,\mathrm{d}t,
$$

其中 $f(x)$ 在 $[a,b]$ 上连续，可导函数 $\varphi_1(x)$ 和 $\varphi_2(x)$ 的值域均在 $[a,b]$ 上，则在 $\varphi_1(x)$ 和 $\varphi_2(x)$ 的公共定义域上，

$$
\boxed{
\begin{aligned}
F'(x)
&=\frac{\mathrm{d}}{\mathrm{d}x}
\left[\int_{\varphi_1(x)}^{\varphi_2(x)}f(t)\,\mathrm{d}t\right]\\
&=f\bigl[\varphi_2(x)\bigr]\varphi_2'(x)
-f\bigl[\varphi_1(x)\bigr]\varphi_1'(x).
\end{aligned}
}
$$

例如，

$$
\frac{\mathrm{d}}{\mathrm{d}x}
\int_{x^2}^{\sin^2x}f(t^2)\,\mathrm{d}t
=2\sin x\cos x\,f(\sin^4x)-2x\,f(x^4).
$$

:::info
上式中的 $x$ 是**求导变量**，$t$ 是**积分变量**。只有当被积函数中只含积分变量 $t$ 时，才能直接使用变限积分求导公式；若被积函数中还含有求导变量 $x$，必须先通过恒等变形、变量代换等方法，把 $x$ 从被积函数中移出，再求导。
:::

+++ 例题 9.20：由变限积分求曲线法线

曲线

$$
y=\int_0^{\sin x}e^{t^2}\,\mathrm{d}t
$$

在点 $(0,0)$ 处的法线方程为（ ）。

- （A）$y=\dfrac12x$
- （B）$y=-\dfrac12x$
- （C）$y=x$
- （D）$y=-x$

**【分析】** 求曲线在给定点处的法线方程时，应先检查该点是否在曲线上；确认后求该点处切线斜率，最后由法线斜率求方程。

**【解】** 易知点 $(0,0)$ 在曲线

$$
y=\int_0^{\sin x}e^{t^2}\,\mathrm{d}t
$$

上。由变限积分求导公式，

$$
y'=e^{\sin^2x}\cos x,
\qquad y'\big|_{x=0}=1.
$$

故切线斜率 $k=1$，法线斜率为 $-\dfrac1k=-1$，所求法线方程为

$$
\boxed{y=-x}.
$$

故应选（D）。

+++

+++ 例题 9.21：含绝对值的变限积分展开

设

$$
F(x)=\int_0^{\frac\pi2}|\sin x-\sin t|\,\mathrm{d}t
\qquad(x\ge0).
$$

若 $F(x)$ 在 $x\to0^+$ 处的二次泰勒多项式为 $a+bx+cx^2$，求 $abc$。

**【分析】** $\displaystyle\int_a^bf(x,t)\,\mathrm{d}t$ 不一定是定积分常数，也可能是关于 $x$ 的函数。此题先去掉绝对值，再将所得函数展开；也可依次求 $F(0)$、$F'(0)$、$F''(0)$。

**【解】** 当 $x\to0^+$ 时，$0<x<\dfrac\pi2$。由于 $\sin t$ 在 $\left[0,\dfrac\pi2\right]$ 上单调增加，故

$$
\begin{aligned}
F(x)
&=\int_0^x(\sin x-\sin t)\,\mathrm{d}t
+\int_x^{\frac\pi2}(\sin t-\sin x)\,\mathrm{d}t\\
&=x\sin x+(\cos x-1)+\cos x-\sin x\left(\frac\pi2-x\right)\\
&=\left(2x-\frac\pi2\right)\sin x+2\cos x-1.
\end{aligned}
$$

**方法一：直接展开。** 当 $x\to0^+$ 时，

$$
\sin x=x+o(x^2),
\qquad
\cos x=1-\frac12x^2+o(x^2).
$$

于是

$$
\begin{aligned}
F(x)
&=\left(2x-\frac\pi2\right)\bigl[x+o(x^2)\bigr]
+2\left[1-\frac12x^2+o(x^2)\right]-1\\
&=1-\frac\pi2x+x^2+o(x^2).
\end{aligned}
$$

**方法二：求导数。** 由上式，

$$
F'(x)=2\sin x+\left(2x-\frac\pi2\right)\cos x-2\sin x
=\left(2x-\frac\pi2\right)\cos x,
$$

$$
F''(x)=2\cos x-\left(2x-\frac\pi2\right)\sin x.
$$

从而

$$
F(0)=1,
\qquad F'(0)=-\frac\pi2,
\qquad F''(0)=2.
$$

故

$$
F(x)=F(0)+F'(0)x+\frac{F''(0)}{2!}x^2+\cdots
=1-\frac\pi2x+x^2+\cdots.
$$

两种方法均得

$$
a=1,
\qquad b=-\frac\pi2,
\qquad c=1,
\qquad \boxed{abc=-\frac\pi2}.
$$

+++

+++ 例题 9.22：变限积分的极值

设函数 $f(x)$ 可导，且

$$
f(x)<-2xf'(x),
$$

则曲线

$$
F(x)=\int_0^xtf(x^2-t^2)\,\mathrm{d}t
$$

（ ）。

- （A）在 $x=0$ 处取极大值
- （B）在 $x=0$ 处取极小值
- （C）拐点是 $(0,0)$
- （D）在 $(0,0)$ 处既非极值点也非拐点

**【分析】** 对 $f(x^2-t^2)$，令 $u=x^2-t^2$，先将被积函数中的求导变量 $x$ 移出，再对变限积分求导，最后利用极值的二阶充分条件判别。

**【解】** 令 $u=x^2-t^2$，则

$$
F(x)=\frac12\int_0^{x^2}f(u)\,\mathrm{d}u.
$$

于是

$$
F'(x)=\frac12\cdot2xf(x^2)=xf(x^2),
$$

$$
F''(x)=f(x^2)+2x^2f'(x^2).
$$

由题设，

$$
f(x^2)+2x^2f'(x^2)<0,
$$

即 $F''(x)<0$。又 $F(0)=F'(0)=0$，故由极值的二阶充分条件，$F(x)$ 在 $x=0$ 处取极大值，应选（A）。

+++

## 2. 变限积分函数的重要结论

### （1）被积函数为奇函数

若 $f(x)$ 为可积的奇函数，则

$$
\boxed{
\int_0^xf(t)\,\mathrm{d}t
\text{ 为奇函数}
}
$$

且

$$
\boxed{
\int_a^xf(t)\,\mathrm{d}t
\text{ 为偶函数}
\qquad(a\ne0)
}.
$$

:::info
若 $f(x)$ 是连续的奇函数，则

$$
\int_a^xf(t)\,\mathrm{d}t+C
$$

也是偶函数；因此，连续奇函数的一切原函数均为偶函数。

仅需被积函数可积，即可讨论上述变限积分函数的奇偶性；只有被积函数连续时，才能进一步讨论原函数的奇偶性。以下结论同理。
:::

### （2）被积函数为偶函数

若 $f(x)$ 为可积的偶函数，则

$$
\boxed{
\int_0^xf(t)\,\mathrm{d}t
\text{ 为奇函数}
}.
$$

对 $a\ne0$，有

$$
\int_a^xf(t)\,\mathrm{d}t
=\int_0^xf(t)\,\mathrm{d}t-\int_0^af(t)\,\mathrm{d}t.
$$

因此，若

$$
\int_a^xf(t)\,\mathrm{d}t
=\int_0^xf(t)\,\mathrm{d}t
$$

（等价于 $\displaystyle\int_0^af(t)\,\mathrm{d}t=0$），则其为奇函数；若不相等，则其为非奇非偶函数。

:::info
若 $f(x)$ 是连续的偶函数，则它的全体原函数中，只有

$$
\int_0^xf(t)\,\mathrm{d}t
$$

是奇函数。
:::

### （3）被积函数为周期函数

若 $f(x)$ 是可积且以 $T$ 为周期的函数，则

$$
\boxed{
\int_0^xf(t)\,\mathrm{d}t
\text{ 是以 }T\text{ 为周期的函数}
\Longleftrightarrow
\int_0^Tf(x)\,\mathrm{d}x=0
}.
$$

:::info
当 $a\ne0$ 时，

$$
\int_a^xf(t)\,\mathrm{d}t
=\int_a^0f(t)\,\mathrm{d}t+\int_0^xf(t)\,\mathrm{d}t.
$$

若 $\displaystyle\int_0^xf(t)\,\mathrm{d}t$ 是以 $T$ 为周期的函数，则加上常数后的 $\displaystyle\int_a^xf(t)\,\mathrm{d}t$ 也以 $T$ 为周期。
:::

+++ 例题 9.23：奇偶函数原函数的奇偶性

证明：连续的奇函数的一切原函数都是偶函数；连续的偶函数的原函数中仅有一个原函数是奇函数。

**【证】** 设 $f(x)$ 连续，其一个原函数可表示为

$$
F(x)=\int_a^xf(t)\,\mathrm{d}t.
$$

若 $f(x)$ 是连续的奇函数，则 $f(-x)=-f(x)$，且

$$
\int_{-a}^af(t)\,\mathrm{d}t=0.
$$

作代换 $t=-u$，有

$$
\begin{aligned}
F(-x)
&=\int_a^{-x}f(t)\,\mathrm{d}t\\
&=-\int_{-a}^xf(-u)\,\mathrm{d}u\\
&=\int_{-a}^xf(u)\,\mathrm{d}u\\
&=\int_{-a}^af(u)\,\mathrm{d}u+\int_a^xf(u)\,\mathrm{d}u\\
&=0+F(x)=F(x).
\end{aligned}
$$

所以连续奇函数的一切原函数都是偶函数。

若 $f(x)$ 是连续的偶函数，则 $f(-x)=f(x)$，且

$$
\int_{-a}^af(t)\,\mathrm{d}t
=2\int_0^af(t)\,\mathrm{d}t.
$$

同理，

$$
\begin{aligned}
F(-x)
&=\int_a^{-x}f(t)\,\mathrm{d}t\\
&=-\int_{-a}^xf(-u)\,\mathrm{d}u\\
&=-\int_{-a}^xf(u)\,\mathrm{d}u\\
&=-\int_{-a}^af(u)\,\mathrm{d}u-\int_a^xf(u)\,\mathrm{d}u\\
&=-2\int_0^af(u)\,\mathrm{d}u-F(x).
\end{aligned}
$$

只有当

$$
\int_0^af(u)\,\mathrm{d}u=0
$$

时，才有 $F(-x)=-F(x)$，即连续偶函数的原函数中仅有一个原函数是奇函数。

+++

+++ 例题 9.24：判断变限积分函数的奇偶性

设奇函数 $f(x)$ 在 $(-\infty,+\infty)$ 上具有连续导数，则（ ）。

- （A）$\displaystyle\int_0^x\left[\cos f(t)+f'(t)\right],\mathrm{d}t$ 是奇函数
- （B）$\displaystyle\int_0^x\left[\cos f(t)+f'(t)\right],\mathrm{d}t$ 是偶函数
- （C）$\displaystyle\int_0^x\left[\cos f'(t)+f(t)\right],\mathrm{d}t$ 是奇函数
- （D）$\displaystyle\int_0^x\left[\cos f'(t)+f(t)\right],\mathrm{d}t$ 是偶函数

**【分析】** 内偶则偶，内奇则奇。$f(x)$ 为奇函数时，$f'(x)$ 为偶函数，故 $\cos f(x)$、$\cos f'(x)$ 均为偶函数。

**【解】** $\cos f(t)+f'(t)$ 为偶函数，所以由上面的结论，

$$
\int_0^x\left[\cos f(t)+f'(t)\right],\mathrm{d}t
$$

为奇函数。另一方面，$\cos f'(t)+f(t)$ 为非奇非偶函数。故应选（A）。

#### 随堂练习

判断函数

$$
g(x)=\int_0^{\sin x}\cos t^2\,\mathrm{d}t
$$

的奇偶性。

**【分析】** 令

$$
h(x)=\int_0^x\cos t^2\,\mathrm{d}t.
$$

则 $g(x)=h(\sin x)$。$\cos t^2$ 为偶函数，故 $h(x)$ 为奇函数；又 $\sin x$ 为奇函数，所以 $g(x)$ 为奇函数。

+++

+++ 例题 9.25：周期函数积分上限函数的周期性

设 $f(x)$ 连续且以 $T$ 为周期，

$$
F(x)=\int_a^xf(t)\,\mathrm{d}t.
$$

证明：

1. 当且仅当 $\displaystyle\int_0^Tf(x)\,\mathrm{d}x=0$ 时，$F(x)$ 以 $T$ 为周期；
2. 函数

   $$
   F(x)-\frac{\displaystyle\int_0^Tf(t)\,\mathrm{d}t}{T}x
   $$

   以 $T$ 为周期。

**【证】**

1.

   $$
   F(x+T)
   =\int_a^xf(t)\,\mathrm{d}t
   +\int_x^{x+T}f(t)\,\mathrm{d}t.
   $$

   由于 $f(x)$ 以 $T$ 为周期，

   $$
   \int_x^{x+T}f(t)\,\mathrm{d}t
   =\int_0^Tf(t)\,\mathrm{d}t.
   $$

   因而

   $$
   F(x+T)-F(x)
   =\int_0^Tf(t)\,\mathrm{d}t.
   $$

   所以当且仅当 $\displaystyle\int_0^Tf(x)\,\mathrm{d}x=0$ 时，$F(x)$ 以 $T$ 为周期。

2. 记

   $$
   \varphi(x)
   =F(x)-\frac{\displaystyle\int_0^Tf(t)\,\mathrm{d}t}{T}x.
   $$

   则

   $$
   \begin{aligned}
   \varphi(x+T)-\varphi(x)
   &=\int_x^{x+T}f(t)\,\mathrm{d}t
   -\frac{\displaystyle\int_0^Tf(t)\,\mathrm{d}t}{T}\cdot T\\
   &=\int_0^Tf(t)\,\mathrm{d}t
   -\int_0^Tf(t)\,\mathrm{d}t=0.
   \end{aligned}
   $$

   故 $\varphi(x)$ 以 $T$ 为周期。

+++

# 五、反常积分的计算

计算反常积分时，首先应识别奇点：它可能出现在积分区间的端点，也可能出现在区间内部。对每个奇点都必须按定义取单侧极限；内部奇点必须先把积分区间拆开，不能跨越奇点直接代入原函数。

+++ 例题 9.26：含内部无穷间断点的反常积分

计算反常积分

$$
\int_{\frac12}^{\frac32}\frac{\mathrm{d}x}{\sqrt{|x-x^2|}}.
$$

**【分析】** 内部的点 $x=1$ 为奇点，因为

$$
\lim_{x\to1}\frac1{\sqrt{|x-x^2|}}=+\infty.
$$

反常积分必须在 $x=1$ 处分段，并先去掉绝对值。

**【解】** 在 $\left[\dfrac12,1\right)$ 上，$x-x^2\ge0$；在 $\left(1,\dfrac32\right]$ 上，$x^2-x\ge0$。故

$$
\begin{aligned}
\int_{\frac12}^{\frac32}\frac{\mathrm{d}x}{\sqrt{|x-x^2|}}
&=\lim_{r\to1^-}\int_{\frac12}^r\frac{\mathrm{d}x}{\sqrt{x-x^2}}
+\lim_{s\to1^+}\int_s^{\frac32}\frac{\mathrm{d}x}{\sqrt{x^2-x}}\\
&=\int_{\frac12}^1\frac{\mathrm{d}x}{\sqrt{x-x^2}}
+\int_1^{\frac32}\frac{\mathrm{d}x}{\sqrt{x^2-x}}.
\end{aligned}
$$

第一项为

$$
\begin{aligned}
\int_{\frac12}^1\frac{\mathrm{d}x}{\sqrt{x-x^2}}
&=\int_{\frac12}^1
\frac{\mathrm{d}x}
{\sqrt{\frac14-\left(x-\frac12\right)^2}}\\
&=\arcsin(2x-1)\bigg|_{\frac12}^1
=\frac\pi2.
\end{aligned}
$$

第二项为

$$
\begin{aligned}
\int_1^{\frac32}\frac{\mathrm{d}x}{\sqrt{x^2-x}}
&=\int_1^{\frac32}
\frac{\mathrm{d}x}
{\sqrt{\left(x-\frac12\right)^2-\frac14}}\\
&=\ln\left|
x-\frac12+
\sqrt{\left(x-\frac12\right)^2-\frac14}
\right|\bigg|_1^{\frac32}\\
&=\ln(2+\sqrt3).
\end{aligned}
$$

因此

$$
\boxed{
\int_{\frac12}^{\frac32}\frac{\mathrm{d}x}{\sqrt{|x-x^2|}}
=\frac\pi2+\ln(2+\sqrt3)
}.
$$

+++

+++ 例题 9.27：无穷区间上的三角换元

计算

$$
\int_3^{+\infty}
\frac{\mathrm{d}x}{(x-1)^4\sqrt{x^2-2x}}.
$$

**【解】** 作换元

$$
x-1=\sec\theta.
$$

当 $x=3$ 时，$\theta=\dfrac\pi3$；当 $x\to+\infty$ 时，$\theta\to\dfrac\pi2$。又

$$
\sqrt{x^2-2x}
=\sqrt{(x-1)^2-1}
=\tan\theta,
\qquad
\mathrm{d}x=\sec\theta\tan\theta\,\mathrm{d}\theta.
$$

故

$$
\begin{aligned}
\int_3^{+\infty}
\frac{\mathrm{d}x}{(x-1)^4\sqrt{x^2-2x}}
&=\int_{\frac\pi3}^{\frac\pi2}
\frac{\sec\theta\tan\theta}
{\sec^4\theta\tan\theta}\,\mathrm{d}\theta\\
&=\int_{\frac\pi3}^{\frac\pi2}
(1-\sin^2\theta)\cos\theta\,\mathrm{d}\theta\\
&=\frac23-\frac{3\sqrt3}{8}.
\end{aligned}
$$

:::info
在反常积分收敛的条件下，通过换元可以实现反常积分与定积分的相互转化；换元时仍须把无穷端点对应为新变量的极限端点。
:::

+++

+++ 例题 9.28：反常积分的分部积分与递推

计算

$$
I_n=\int_0^{+\infty}x^ne^{-x}\,\mathrm{d}x
\qquad(n\text{ 为非负整数}).
$$

**【分析】** 分部积分法可建立递推关系 $I_n=f(I_{n-1})$。

**【解】** 当 $n=1,2,\ldots$ 时，由分部积分法，

$$
\begin{aligned}
I_n
&=-\int_0^{+\infty}x^n\,\mathrm{d}(e^{-x})\\
&=\left(-x^ne^{-x}\right)\bigg|_0^{+\infty}
+n\int_0^{+\infty}x^{n-1}e^{-x}\,\mathrm{d}x\\
&=nI_{n-1}.
\end{aligned}
$$

其中

$$
\lim_{x\to+\infty}x^ne^{-x}=0,
$$

且

$$
I_0=\int_0^{+\infty}e^{-x}\,\mathrm{d}x
=-e^{-x}\bigg|_0^{+\infty}=1.
$$

所以

$$
\boxed{
I_n=nI_{n-1}=n(n-1)I_{n-2}=\cdots=n(n-1)\cdots1\cdot I_0=n!
}.
$$

:::info
若能使用 Gamma 函数，计算这类积分会更快。

**定义：**

$$
\Gamma(\alpha)
=\int_0^{+\infty}x^{\alpha-1}e^{-x}\,\mathrm{d}x
=2\int_0^{+\infty}t^{2\alpha-1}e^{-t^2}\,\mathrm{d}t
\qquad(\alpha>0),
$$

其中第二个等式由 $x=t^2$ 得到。

**递推式：**

$$
\begin{aligned}
\Gamma(\alpha+1)
&=\int_0^{+\infty}x^\alpha e^{-x}\,\mathrm{d}x\\
&=\int_0^{+\infty}x^\alpha\,\mathrm{d}(-e^{-x})\\
&=-x^\alpha e^{-x}\bigg|_0^{+\infty}
+\int_0^{+\infty}\alpha x^{\alpha-1}e^{-x}\,\mathrm{d}x\\
&=\alpha\Gamma(\alpha).
\end{aligned}
$$

其中

$$
\Gamma(1)=1,
\qquad
\Gamma\left(\frac12\right)=\sqrt\pi.
$$

故

$$
\Gamma(n+1)=n!,
\qquad
\Gamma(2)=1,
\qquad
\Gamma\left(\frac52\right)
=\frac32\cdot\frac12\Gamma\left(\frac12\right)
=\frac34\sqrt\pi.
$$
:::

+++

+++ 例题 9.29：利用 Gamma 函数计算反常积分

设

$$
f(x)=
\begin{cases}
\displaystyle
\frac{4x^2}{a^3\sqrt\pi}e^{-\frac{x^2}{a^2}},
&x>0,\\[10pt]
0,&x\le0,
\end{cases}
\qquad a>0,
$$

则

$$
\int_0^{+\infty}x^2f(x)\,\mathrm{d}x
=\underline{\hspace{3em}}.
$$

**【解】** 由 $x=au$，得

$$
\begin{aligned}
\int_0^{+\infty}x^2f(x)\,\mathrm{d}x
&=\frac{2a^2}{\sqrt\pi}\cdot2
\int_0^{+\infty}
\left(\frac xa\right)^{2\cdot\frac52-1}
e^{-\left(\frac xa\right)^2}
\,\mathrm{d}\left(\frac xa\right)\\
&=\frac{2a^2}{\sqrt\pi}\,
\Gamma\left(\frac52\right)\\
&=\frac{2a^2}{\sqrt\pi}\cdot
\frac32\cdot\frac12\,
\Gamma\left(\frac12\right)\\
&=\boxed{\frac32a^2}.
\end{aligned}
$$

:::info
**Gamma 函数的收敛性。** 将

$$
\Gamma(\alpha)
=\int_0^1x^{\alpha-1}e^{-x}\,\mathrm{d}x
+\int_1^{+\infty}x^{\alpha-1}e^{-x}\,\mathrm{d}x.
$$

1. 当 $\alpha-1\ge0$ 时，

   $$
   \lim_{x\to+\infty}
   \frac{x^{\alpha-1}e^{-x}}{1/x^2}
   =\lim_{x\to+\infty}x^{\alpha+1}e^{-x}=0.
   $$

   由于 $\displaystyle\int_1^{+\infty}\frac1{x^2}\,\mathrm{d}x$ 收敛，故

   $$
   \int_1^{+\infty}x^{\alpha-1}e^{-x}\,\mathrm{d}x
   $$

   收敛。

2. 当 $\alpha-1<0$ 时，

   $$
   \int_0^1x^{\alpha-1}e^{-x}\,\mathrm{d}x
   =\int_0^1\frac{e^{-x}}{x^{1-\alpha}}\,\mathrm{d}x.
   $$

   它在 $x=0$ 附近与

   $$
   \int_0^1\frac1{x^{1-\alpha}}\,\mathrm{d}x
   $$

   具有相同的敛散性。当且仅当 $1-\alpha<1$，即 $0<\alpha<1$ 时收敛；此时无穷远处的积分也收敛。

综上，当 $\alpha>0$ 时，$\Gamma(\alpha)$ 收敛。
:::

+++
