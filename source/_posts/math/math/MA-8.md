---
layout: post
title: 第8章 一元函数积分学的概念与性质
description: 介绍原函数、不定积分、定积分、变限积分与反常积分，梳理存在性、基本性质、积分中值定理及判敛方法。
math: true
mermaid: true
date: 2026-07-21 00:00:03
categories:
  - 数学
  - 高等数学
tags:
---
> 介绍原函数、不定积分、定积分、变限积分与反常积分，梳理存在性、基本性质、积分中值定理及判敛方法。

# 一、不定积分

不定积分的本质是求导运算的逆运算：给定 $f$，寻找导数等于 $f$ 的函数。讨论原函数时，**定义域所属的区间**与“所有原函数之间相差常数”的结论同等重要；若忽略区间，许多结论会失去准确含义。

## 1. 原函数与不定积分

设函数 $f$ 定义在区间 $I$ 上。若存在函数 $F$ 在 $I$ 上可导，且对任意 $x\in I$ 都有

$$
F'(x)=f(x),
$$

则称 $F$ 是 $f$ 在区间 $I$ 上的一个**原函数**。

若 $F$ 是 $f$ 在 $I$ 上的一个原函数，则对任意常数 $C\in\mathbb R$，$F(x)+C$ 仍是 $f$ 的原函数。因此，把 $f$ 在 $I$ 上的全体原函数记作

$$
\boxed{
\int f(x)\,\mathrm{d}x=F(x)+C
}.
$$

这称为 $f$ 在 $I$ 上的**不定积分**。积分号 $\int$ 在这里表示“求原函数”，$C$ 是任意积分常数。

反过来，若 $F,G$ 都是 $f$ 在同一个区间 $I$ 上的原函数，则

$$
(F-G)'=0.
$$

由拉格朗日中值定理，$F-G$ 在区间 $I$ 上为常数。因此，**同一区间上的任意两个原函数只相差一个常数**。

### 基本运算与微分记号

若 $f,g$ 都在同一区间 $I$ 上有原函数，$\alpha,\beta$ 为常数，则不定积分满足线性性：

$$
\int\bigl[\alpha f(x)+\beta g(x)\bigr]\,\mathrm{d}x
=\alpha\int f(x)\,\mathrm{d}x+\beta\int g(x)\,\mathrm{d}x.
$$

等式右侧各自附带的积分常数最终可以合并成一个任意常数；因此，书写计算过程时通常只在最后统一写 $+C$。这条公式的依据是求导的线性性，而不是把积分号当作普通代数符号任意拆分。

若 $F'(x)=f(x)$，以微分记号写为 $\mathrm{d}F=f(x)\,\mathrm{d}x$，于是

$$
\int \mathrm{d}F=F+C,
\qquad
\mathrm{d}\left(\int f(x)\,\mathrm{d}x\right)=f(x)\,\mathrm{d}x.
$$

它们表达了在同一变量与同一区间内，微分与不定积分互为逆运算。这里的“逆”应理解为原函数族意义下的逆：求导会消去常数，故积分时必须补回 $+C$。

![原函数族：相差常数的曲线具有相同的导函数](/assets/math/MA-8/antiderivative-family.svg){.svg-md}

:::warning
“原函数”与“不定积分”必须说明所讨论的区间。上面的“相差常数”只对连通的区间成立。

例如 $f(x)=\dfrac1x$ 在 $(0,+\infty)$ 上的原函数为 $\ln x+C$，在 $(-\infty,0)$ 上的原函数为 $\ln(-x)+C$。若定义域取为不连通的 $(-\infty,0)\cup(0,+\infty)$，两个连通分支上的积分常数可以彼此独立，不能只用同一个常数描述全部原函数。
:::

+++ 例题 8.1：由不定积分恒等式确定函数
设 $0<x<1$，且 $\displaystyle\int(1-x^2)f(x^2)\,\mathrm{d}x=\arcsin x+C$，求 $f(x)$。

**【解】** 两端关于 $x$ 求导，得到

$$
(1-x^2)f(x^2)=\frac1{\sqrt{1-x^2}}.
$$

因此

$$
f(x^2)=(1-x^2)^{-\frac32}.
$$

令 $t=x^2$。由 $0<x<1$ 知 $0<t<1$，于是

$$
\boxed{
f(t)=(1-t)^{-\frac32}\quad(0<t<1)
}.
$$

将哑变量 $t$ 改回 $x$，可写为

$$
\boxed{f(x)=(1-x)^{-\frac32}\quad(0<x<1)}.
$$

注意：由 $x^2$ 改记为新变量时，定义域也必须随之转换，不能直接把原式中的 $x$ 当作同一个变量。
+++

+++ 例题 8.2：分段函数的原函数与衔接条件
设

$$
f(x)=
\begin{cases}
\dfrac1{\sqrt{1+x^2}}, & x\le0,\\[6pt]
(x+1)\cos x, & x>0.
\end{cases}
$$

求 $f$ 在 $\mathbb R$ 上的一个原函数。

**【解】** 在两个开区间内分别求原函数：

$$
\int\frac{\mathrm dx}{\sqrt{1+x^2}}
=\ln\left(\sqrt{1+x^2}+x\right)+C_1,
$$

$$
\int(x+1)\cos x\,\mathrm{d}x
=(x+1)\sin x+\cos x+C_2.
$$

原函数在 $x=0$ 处必须可导，因而首先必须连续。左侧表达式在 $x=0$ 处的值为 $C_1$，右侧极限为 $1+C_2$。取 $C_1=1,C_2=0$，得到

$$
F(x)=
\begin{cases}
\ln\left(\sqrt{1+x^2}+x\right)+1, & x\le0,\\[6pt]
(x+1)\sin x+\cos x, & x>0.
\end{cases}
$$

两侧在 $0$ 处函数值均为 $1$；左、右导数也都为 $1=f(0)$。故 $F$ 在 $\mathbb R$ 上可导，且 $F'(x)=f(x)$。因此上式为所求的一个原函数。

这里不能只在两个分段内分别积分后便停止：分段点处的连续性和可导性同样需要核对。
+++

## 2. 原函数（不定积分）存在定理

### （1）连续函数必有原函数

若 $f$ 在区间 $I$ 上连续，则 $f$ 在 $I$ 上必有原函数。

为说明这一结论，任取 $a\in I$，并暂时使用定积分记号定义

$$
F(x)=\int_a^x f(t)\,\mathrm{d}t.
$$

当 $x,x+h\in I$ 且 $h\ne0$ 时，

$$
\frac{F(x+h)-F(x)}h
=\frac1h\int_x^{x+h}f(t)\,\mathrm{d}t.
$$

由积分中值定理，存在介于 $x$ 与 $x+h$ 之间的 $\xi_h$，使

$$
\frac1h\int_x^{x+h}f(t)\,\mathrm{d}t=f(\xi_h).
$$

令 $h\to0$，则 $\xi_h\to x$。由于 $f$ 在 $x$ 处连续，

$$
F'(x)=\lim_{h\to0}f(\xi_h)=f(x).
$$

因此 $F$ 是 $f$ 的一个原函数。若 $x$ 是闭区间端点，上式对应的结论理解为单侧导数；在开区间内部则为通常的导数。

#### 积分中值定理

若函数 $f(x)$ 在闭区间 $[a,b]$ 上连续，其中 $a<b$，则至少存在一点 $\xi\in[a,b]$，使得

$$
\boxed{\int_a^b f(x)\,\mathrm{d}x=f(\xi)(b-a).}
$$

等价地，

$$
\frac{1}{b-a}\int_a^b f(x)\,\mathrm{d}x=f(\xi).
$$

右端的 $f(\xi)$ 称为 $f$ 在 $[a,b]$ 上的一个**积分平均值**：连续函数在区间上的平均高度，必在曲线上某点实际取得。

+++ 积分中值定理的证明
**证明** 由连续函数在闭区间上必取最值，设

$$
m=\min_{x\in[a,b]}f(x),\qquad M=\max_{x\in[a,b]}f(x).
$$

则对任意 $x\in[a,b]$，有 $m\leq f(x)\leq M$。两边在 $[a,b]$ 上积分，并注意 $b-a>0$，得

$$
m\leq\frac{1}{b-a}\int_a^b f(x)\,\mathrm{d}x\leq M.
$$

由介值定理，存在 $\xi\in[a,b]$，使

$$
f(\xi)=\frac{1}{b-a}\int_a^b f(x)\,\mathrm{d}x.
$$

移项即得结论。
+++

几何上，积分中值定理表示曲线 $y=f(x)$ 在 $[a,b]$ 上的**代数面积**，等于一个底为 $b-a$、高为 $f(\xi)$ 的矩形面积；若 $f(x)\geq0$，这里的代数面积就是通常的几何面积。前面对积分上限函数差商的推导，正是将此定理应用于端点 $x$ 与 $x+h$ 之间的定向区间。

#### 不定积分、定积分与积分上限函数

同样写作积分号的三个对象并不相同：

| 记号                               | 对象              | 含义                               |
| -------------------------------- | --------------- | -------------------------------- |
| $\displaystyle\int f(x)\,dx$     | 不定积分            | $f$ 的全体原函数，结果含任意常数 $C$           |
| $\displaystyle\int_a^b f(x)\,dx$ | 定积分             | 一个数；当 $f\ge0$ 时等于曲边梯形面积，否则为带符号面积 |
| $\displaystyle\int_a^x f(t)\,dt$ | 积分上限函数（变上限积分函数） | 关于 $x$ 的函数；连续 $f$ 时其导数为 $f(x)$   |

积分上限函数中的 $t$ 是积分变量（哑变量），不能写成 $\int_a^x f(x)\,\mathrm{d}x$ 后又把其中的 $x$ 同时解释为上下限中的自变量。图中的阴影区域随上限 $x$ 改变而改变，因此它描述的是一个函数，而不是固定面积。

![积分上限函数：随上限 x 变化的累计带符号面积](/assets/math/MA-8/upper-limit-integral.svg){.svg-md}

:::info
连续函数 $f$ 满足

$$
\boxed{
\int f(x)\,\mathrm{d}x
=\int_a^x f(t)\,\mathrm{d}t+C,
\qquad
\left[\int_a^x f(t)\,\mathrm{d}t\right]'=f(x)
}.
$$

前一个等式中的左侧表示全体原函数，右侧的积分上限函数只是其中一个特定原函数；$a$ 改变时，这个特定原函数会改变一个常数，但不定积分的全体不变。
:::

:::info
涉及积分的四则运算时，先把对象统一为同一种积分形式再化简。例如，若积分限相同，则

$$
\int_a^x f(t)\,\mathrm{d}t-\int_a^x g(t)\,\mathrm{d}t
=\int_a^x\bigl[f(t)-g(t)\bigr]\,\mathrm{d}t.
$$

但若上下限或积分变量的角色不同，不能仅凭符号相似直接合并。尤其要区分“关于 $x$ 的函数”与“积分中的哑变量”。
:::

### （2）含有第一类间断点和无穷间断点的函数没有原函数

连续性是原函数存在的充分条件，但不是必要条件。更精确地说，若 $f$ 在区间 $I$ 上有原函数，即存在 $F$ 使 $F'=f$，则 $f$ 必须是一个导函数；导函数具有比一般函数更强的结构。

若 $f$ 在区间 $I$ 的内点 $x_0$ 处有第一类间断点（可去间断或跳跃间断），或至少有一侧极限为 $+\infty$、$-\infty$，则 $f$ 在包含 $x_0$ 的区间上不可能有原函数。

:::info
第一类间断点包括：极限存在但不等于函数值的**可去间断点**，以及左右极限均存在但不相等的**跳跃间断点**。振荡间断点不属于第一类间断点；仅知其振荡，尚不能判断原函数是否存在。
:::

下图从左到右示意可去间断、跳跃间断与振荡间断。
前两者不能是导函数的间断形式；第三种则可能出现。

![从左到右：可去间断、跳跃间断与振荡间断的示意](/assets/math/MA-8/derivative-discontinuities.svg){.svg-full}

#### 函数 $f(x)$ 存在与导函数 $F'(x)$ 存在的区别

对一般函数 $f$，即使 $\displaystyle\lim_{x\to x_0}f(x)=A$ 存在，也不能推出 $f$ 在 $x_0$ 处连续：仍可能有 $f(x_0)\ne A$。
但若 $f=F'$ 是导函数，$F'(x_0)$ 已存在且 $\displaystyle\lim_{x\to x_0}F'(x)=A$ 为有限数，则必有

$$
\boxed{F'(x_0)=A}.
$$

这是导函数不能有可去间断点的根本原因。
事实上，对充分接近 $x_0$ 且不等于 $x_0$ 的 $x$，在 $x$ 与 $x_0$ 之间应用拉格朗日中值定理，存在 $\xi_x$，使

$$
\frac{F(x)-F(x_0)}{x-x_0}=F'(\xi_x).
$$

当 $x\to x_0$ 时，$\xi_x\to x_0$，于是

$$
F'(x_0)
=\lim_{x\to x_0}\frac{F(x)-F(x_0)}{x-x_0}
=\lim_{x\to x_0}F'(\xi_x)=A.
$$
上述结论也可应用 $0$ 比 $0$ 型洛必达法则证明。

导函数还具有**介值性**（达布定理）：若 $x_1<x_2$ 均在 $I$ 内，则对介于 $F'(x_1)$ 与 $F'(x_2)$ 之间的任意实数 $u$，存在 $\xi\in(x_1,x_2)$，使 $F'(\xi)=u$。
故导函数不能从一个值跳跃到另一个值，因而不可能有跳跃间断点。

+++ 达布定理的证明思路
设 $F'(x_1)<u<F'(x_2)$，令 $H(x)=F(x)-ux$。函数 $H$ 在闭区间 $[x_1,x_2]$ 上连续，且在开区间内可导，并有 $H'(x_1)<0, H'(x_2)>0$。由导数定义，$x_1$ 右侧有点使 $H(x)<H(x_1)$，$x_2$ 左侧有点使 $H(x)<H(x_2)$；所以 $H$ 在 $[x_1,x_2]$ 上的最小值不能取在端点。

由最值定理，$H$ 的最小值必取在某个内点 $\xi$；再由费马定理，$H'(\xi)=0$，即 $F'(\xi)=u$。另一种导数大小关系同理。这说明导函数即使不连续，也不会越过一段函数值而不取到其中的数。
+++

+++ 第一类间断与无穷间断时不存在原函数的证明
反设 $f$ 在包含 $x_0$ 的区间上有原函数 $F$，即 $F'=f$。

若 $x_0$ 是可去间断点，设 $\lim_{x\to x_0}f(x)=A$，且 $A\ne f(x_0)$。由上面的中值定理论证，

$$
F'(x_0)=\lim_{x\to x_0}F'(x)=A,
$$

但 $F'(x_0)=f(x_0)$，矛盾。

若 $x_0$ 是跳跃间断点，设 $\lim_{x\to x_0^-}f(x)=A_-$、$\lim_{x\to x_0^+}f(x)=A_+$，且 $A_-\ne A_+$。当 $x\to x_0^+$ 时，中值定理给出

$$
\frac{F(x)-F(x_0)}{x-x_0}=F'(\xi_x)\longrightarrow A_+;
$$

当 $x\to x_0^-$ 时，同理该差商趋于 $A_-$。但 $F$ 在 $x_0$ 处可导，差商的左右极限都应等于 $F'(x_0)$，故 $A_-=A_+$，矛盾。

若 $f$ 在 $x_0$ 的某一侧趋于 $+\infty$ 或 $-\infty$，仍取该侧的 $x\to x_0$。中值定理使上述差商趋于 $+\infty$ 或 $-\infty$，而可导函数在 $x_0$ 处的导数 $F'(x_0)$ 必为有限实数，矛盾。

因此，含第一类间断点或无穷间断点的函数不可能在包含该点的区间上拥有原函数。
+++

| $f$ 在内点 $x_0$ 的情形 | 对原函数存在性的结论 |
| --- | --- |
| $f$ 连续 | 必有原函数 |
| 可去间断或跳跃间断 | 不可能有原函数 |
| 某一侧极限为 $+\infty$ 或 $-\infty$ | 不可能有原函数 |
| 振荡间断 | 仅凭此条件不能判断 |

:::warning
“不连续”不能直接推出“没有原函数”。导函数可以有振荡间断点，甚至可以在任意小邻域内无界；不能把“导函数不一定连续”误读为“导函数可以有任意类型的间断”。
:::

#### 振荡间断点：可能有，也可能没有原函数

定义

$$
F(x)=
\begin{cases}
x^2\sin\dfrac1x, & x\ne0,\\[4pt]
0, & x=0.
\end{cases}
$$

则 $F$ 在 $\mathbb R$ 上可导，且

$$
F'(x)=
\begin{cases}
2x\sin\dfrac1x-\cos\dfrac1x, & x\ne0,\\[4pt]
0, & x=0.
\end{cases}
$$

当 $x\to0$ 时，$F'(x)$ 因 $\cos\dfrac1x$ 的无限振荡而没有极限；但 $F'(0)$ 存在。因此 $F'$ 在 $0$ 处有振荡间断点，同时 $F$ 是 $F'$ 的原函数。

![可导函数及其具有振荡间断点的导函数](/assets/math/MA-8/oscillatory-derivative.svg){.svg-xl}

相反，若

$$
g(x)=
\begin{cases}
\sin\dfrac1x, & x\ne0,\\[4pt]
2, & x=0,
\end{cases}
$$

则 $g$ 也在 $0$ 处振荡，却不具有达布性质：$g(0)=2$ 与附近函数值之间的数无法取到。因此 $g$ 不是任何函数的导数，也没有原函数。振荡间断点是否允许，关键不在“振荡”这一名称，而在是否满足导函数的必要性质。

+++ 补充例题：含振荡间断点的函数仍可有原函数
设 $h(x)=2x\sin\dfrac1x-\cos\dfrac1x\ (x\ne0)$，并规定 $h(0)=0$。证明 $h$ 在 $\mathbb R$ 上有原函数，但 $h$ 在 $0$ 处不连续。

**【解】** 令 $H(x)=x^2\sin\dfrac1x\ (x\ne0)$，并规定 $H(0)=0$。当 $x\ne0$ 时，直接求导得 $H'(x)=h(x)$；在 $x=0$ 处，

$$
H'(0)=\lim_{x\to0}\frac{x^2\sin\frac1x}{x}
=\lim_{x\to0}x\sin\frac1x=0=h(0).
$$

故 $H'(x)=h(x)$ 在 $\mathbb R$ 上成立，$H$ 就是 $h$ 的一个原函数。另一方面，$\cos\dfrac1x$ 在 $x\to0$ 时无限振荡，故 $h$ 在 $0$ 处不连续。
+++

:::info
导函数的结论可归纳为：

1. 若 $F'(x_0)$ 存在，且 $\lim_{x\to x_0}F'(x)$ 存在，则该极限必等于 $F'(x_0)$，故 $F'$ **在 $x_0$ 处连续**。
2. 若 $F'$ 在一个区间内处处存在且从不为 $0$，则由达布定理，$F'$ 在该区间内恒正或恒负，因而 $F$ **严格单调**。
3. 导函数为**连续函数**或含有**振荡间断点**的函数，且必**没有第一类间断点**。这与一般函数的情形不同：一般函数仅“函数值存在”并不强迫其邻近函数值趋近该值。
:::

## 3. 不定积分的解题检查

| 题目目标 | 优先处理 | 必须检查 |
| --- | --- | --- |
| 求不定积分 | 寻找一个原函数，再加 $C$ | 原函数公式的定义域和积分常数 |
| 验证原函数 | 对候选函数求导 | 分段点处是否可导，导数是否等于原函数 |
| 由 $\int h(x)\,dx=H(x)+C$ 求未知函数 | 两端求导 | 复合表达式的链式法则与变量范围 |
| 判断原函数存在性 | 先看连续性；不连续时检查必要条件 | 不能把“有间断”一概判为无原函数 |

不定积分题的最后一步通常应保留积分常数 $C$；只有题目给出初值、边值或要求某一个原函数时，才能据条件确定常数。若分段定义域不连通，还要分别处理各连通区间上的常数。

# 二、定积分

定积分把“分割、近似、求和、取极限”统一为一个数。它既可以表示曲线与坐标轴围成的带符号面积，也可以把离散和式转化为连续量；但定积分的存在性与原函数的存在性是两套不同的问题，不能相互替代。

## 1. 定义

### （1）黎曼积分的概念

设函数 $f$ 在有限闭区间 $[a,b]$ 上有界。任取分点

$$
a=x_0<x_1<\cdots<x_{n-1}<x_n=b,
$$

将 $[a,b]$ 分为 $n$ 个小区间。记

$$
\Delta x_k=x_k-x_{k-1},
\qquad
\lambda=\max_{1\leq k\leq n}\Delta x_k,
$$

并在每个小区间 $[x_{k-1},x_k]$ 内任取一点 $\xi_k$，构造黎曼和

$$
\sum_{k=1}^n f(\xi_k)\Delta x_k.
$$

若当 $\lambda\to0$ 时，该和式的极限存在，并且与分点 $x_k$ 及取样点 $\xi_k$ 的具体取法无关，则称 $f$ 在 $[a,b]$ 上**黎曼可积**，并把这个极限记为

$$
\boxed{
\int_a^b f(x)\,\mathrm{d}x
=\lim_{\lambda\to0}
\sum_{k=1}^n f(\xi_k)\Delta x_k
}.
$$

其中，$a,b$ 分别称为积分下限和积分上限，$f$ 称为被积函数，$f(x)\,\mathrm{d}x$ 称为被积表达式，$x$ 是积分变量。定积分的值是一个数，只由被积函数和积分区间决定。

:::info
“任意分割、任意取点”不是多余条件。它保证极限描述的是函数与区间共同确定的客观量，而不是某一种特殊矩形选法造成的结果。

用 $\varepsilon$ 语言表述：存在数 $I$，使对任意 $\varepsilon>0$，都存在 $\delta>0$；只要分割满足 $\lambda<\delta$，无论各 $\xi_k$ 如何选取，都有

$$
\left|
\sum_{k=1}^n f(\xi_k)\Delta x_k-I
\right|<\varepsilon.
$$

此时 $I=\int_a^b f(x)\,\mathrm{d}x$。
:::

![黎曼和：用窄矩形的带符号面积逼近定积分](/assets/math/MA-8/riemann-sum.svg){.svg-md}

积分符号 $\int$ 由莱布尼茨引入，可看作拉长的字母 $S$，对应拉丁文 *summa*（求和）；定义本身由黎曼系统化，因此上述积分也称为**黎曼积分**。

### （2）几何意义

设 $a<b$。

1. 若 $f(x)\geq0$，则 $\displaystyle\int_a^b f(x)\,\mathrm{d}x$ 等于曲线 $y=f(x)$、直线 $x=a$、$x=b$ 与 $x$ 轴围成的曲边梯形面积。
2. 若 $f(x)\leq0$，则定积分等于相应曲边梯形面积的负值。
3. 若 $f$ 在区间内既取正值又取负值，则定积分等于 $x$ 轴上方图形面积减去 $x$ 轴下方图形面积，即**带符号面积的代数和**。

![定积分的几何意义：正面积、负面积与带符号面积](/assets/math/MA-8/definite-integral-sign.svg){.svg-md}

因此，$\int_a^b f(x)\,\mathrm{d}x$ 与 $\int_a^b|f(x)|\,\mathrm{d}x$ 一般不同：前者允许正负面积抵消，后者才表示曲线与 $x$ 轴之间各部分几何面积之和。

### （3）等分区间时的常用形式

定义允许任意分割和任意取点，因此在已知 $f$ 可积时，可以选取便于计算的特殊分割。将 $[a,b]$ 等分为 $n$ 份，取

$$
\Delta x=\frac{b-a}{n},
\qquad
x_i=a+\frac{b-a}{n}i.
$$

若取每个小区间的右端点，则

$$
\boxed{
\int_a^b f(x)\,\mathrm{d}x
=\lim_{n\to\infty}
\sum_{i=1}^n
f\left(a+\frac{b-a}{n}i\right)\frac{b-a}{n}
}.
$$

若取左端点，则

$$
\int_a^b f(x)\,\mathrm{d}x
=\lim_{n\to\infty}
\sum_{i=0}^{n-1}
f\left(a+\frac{b-a}{n}i\right)\frac{b-a}{n}.
$$

特别地，在 $[0,1]$ 上取右端点，有考研中最常用的形式

$$
\boxed{
\int_0^1 f(x)\,\mathrm{d}x
=\lim_{n\to\infty}\sum_{i=1}^n
f\left(\frac{i}{n}\right)\frac1n
}.
$$

这里的推理顺序是：先确认函数可积，继而利用“任意分割、任意取点”选等分区间与端点取样，最后才把极限写成积分。

### （4）定积分的值与积分变量无关

积分变量是哑变量。当定积分存在时，

$$
\int_a^b f(x)\,\mathrm{d}x
=\int_a^b f(t)\,\mathrm{d}t
=\int_a^b f(u)\,\mathrm{d}u.
$$

改写积分变量不会改变被积函数的对应关系和积分区间，因此不会改变积分值；但积分上下限、参数以及积分号外仍在使用的变量不能随意改名。

## 2. 存在定理

这里讨论的是有限闭区间上有界函数的常义黎曼可积性。它与区间无穷或函数无界时的反常积分不同。

### 定积分存在的充分条件

下列每一项都能单独保证 $\displaystyle\int_a^b f(x)\,\mathrm{d}x$ 存在：

1. $f$ 在 $[a,b]$ 上连续；
2. $f$ 在 $[a,b]$ 上单调；
3. $f$ 在 $[a,b]$ 上有界，且只有有限个间断点；
4. $f$ 在 $[a,b]$ 上只有有限个第一类间断点。

连续函数在闭区间上必有界；单调函数也必被端点函数值所夹，因此条件 1、2 已自动包含有界性。条件 3 中必须明确写出“有界”，因为振荡间断点可能伴随无界；条件 4 中的第一类间断点具有有限的单侧极限，在有限个间断点之外函数连续，因而仍可积。

### 定积分存在的必要条件

若常义定积分 $\displaystyle\int_a^b f(x)\,\mathrm{d}x$ 存在，则：

- 区间 $[a,b]$ 必须有限；
- $f$ 在 $[a,b]$ 上必须有界。

“有界”只是必要条件，不是充分条件；存在有界但不可黎曼积的函数。另一方面，反常积分允许积分区间无穷或被积函数无界，其定义方法不同，不能用反常积分的存在反驳上述必要条件。

:::info
定积分存在与原函数存在彼此独立：

- 跳跃函数可以黎曼可积，却不可能在包含跳点的区间上有原函数；
- 某些导函数虽有原函数，却因在区间内无界而不存在常义定积分；
- 含无穷间断点的函数可能既没有原函数，也没有常义定积分；
- 有界的振荡型导函数可能既有原函数，又有定积分。

判断题中应分别核对“是不是导函数”和“是不是有界可积函数”，不能用一个结论代替另一个。
:::

+++ 例题 8.3：区分原函数与定积分的存在性
在区间 $[-1,2]$ 上判断下列四个结论的正误，并确定正确结论的个数。

1. 设
   $$
   f(x)=
   \begin{cases}
   2,&x>0,\\
   1,&x=0,\\
   -1,&x<0,
   \end{cases}
   $$
   则 $f$ 有原函数，但其定积分不存在。
2. 设
   $$
   f(x)=
   \begin{cases}
   2x\sin\dfrac1{x^2}-\dfrac2x\cos\dfrac1{x^2},&x\ne0,\\[6pt]
   0,&x=0,
   \end{cases}
   $$
   则 $f$ 有原函数，且其定积分也存在。
3. 设
   $$
   f(x)=
   \begin{cases}
   \dfrac1x,&x\ne0,\\[4pt]
   0,&x=0,
   \end{cases}
   $$
   则 $f$ 没有原函数，其定积分也不存在。
4. 设
   $$
   f(x)=
   \begin{cases}
   2x\cos\dfrac1x+\sin\dfrac1x,&x\ne0,\\[4pt]
   0,&x=0,
   \end{cases}
   $$
   则 $f$ 有原函数，且其定积分也存在。

**【解】**

第 1 个函数在 $x=0$ 处有跳跃间断点，故没有原函数；但它有界且只有一个间断点，故定积分存在。结论 1 错误。

第 2 个函数是

$$
F(x)=
\begin{cases}
x^2\sin\dfrac1{x^2},&x\ne0,\\
0,&x=0
\end{cases}
$$

的导函数，故有原函数；但 $-\dfrac2x\cos\dfrac1{x^2}$ 在 $0$ 的任意邻域内无界，所以 $f$ 在 $[-1,2]$ 上不黎曼可积。结论 2 错误。

第 3 个函数在 $0$ 处为无穷间断，既不可能有原函数，也因无界而不黎曼可积。结论 3 正确。

第 4 个函数是

$$
F(x)=
\begin{cases}
x^2\cos\dfrac1x,&x\ne0,\\
0,&x=0
\end{cases}
$$

的导函数，故有原函数；又有

$$
\left|2x\cos\frac1x+\sin\frac1x\right|
\leq2|x|+1,
$$

且仅在 $0$ 处振荡间断，所以它在 $[-1,2]$ 上有界且可积。结论 4 正确。

因此共有两个正确结论，即第 3、4 项。
+++

## 3. 定积分的规定与性质

以下各式均假设所涉及的定积分存在。

### 两个规定

为使区间可加性在端点次序改变时仍保持统一，规定

$$
\int_a^a f(x)\,\mathrm{d}x=0,
\qquad
\int_a^b f(x)\,\mathrm{d}x
=-\int_b^a f(x)\,\mathrm{d}x.
$$

第二式说明**交换积分上下限会改变积分符号**。

### 性质 1：区间长度

当 $a<b$ 时，

$$
\boxed{\int_a^b 1\,\mathrm{d}x=b-a.}
$$

更一般地，若 $c$ 为常数，则 $\int_a^b c\,\mathrm{d}x=c(b-a)$。

### 性质 2：线性性质

若 $k_1,k_2$ 为常数，则

$$
\boxed{
\int_a^b\bigl[k_1f(x)+k_2g(x)\bigr]\,\mathrm{d}x
=k_1\int_a^b f(x)\,\mathrm{d}x
+k_2\int_a^b g(x)\,\mathrm{d}x
}.
$$

### 性质 3：区间可加性

**无论 $a,b,c$ 的大小关系如何**，都有

$$
\boxed{
\int_a^b f(x)\,\mathrm{d}x
=\int_a^c f(x)\,\mathrm{d}x
+\int_c^b f(x)\,\mathrm{d}x
}.
$$

当 $c\in[a,b]$ 时，这对应把一个区间上的带符号面积拆成两段；
当 $c$ 在区间外时，仍可借助交换上下限的规定验证。

### 性质 4：保号性

若 $a<b$，且在 $[a,b]$ 上有 $f(x)\leq g(x)$，则

$$
\boxed{
\int_a^b f(x)\,\mathrm{d}x
\leq
\int_a^b g(x)\,\mathrm{d}x
}.
$$

特别地，由 $-|f(x)|\leq f(x)\leq|f(x)|$ 可得

$$
\boxed{
\left|\int_a^b f(x)\,\mathrm{d}x\right|
\leq
\int_a^b|f(x)|\,\mathrm{d}x
}.
$$

若连续函数 $f,g$ 满足 $f(x)\geq g(x)$，且二者不恒等，又有 $a<b$，则不等式严格：

$$
\int_a^b f(x)\,\mathrm{d}x
>
\int_a^b g(x)\,\mathrm{d}x.
$$

连续性在这里负责把某一点处的严格大于扩展为一个小区间上的统一正下界；若只知道可积函数在单个点处不等，严格不等式未必成立，因为改变有限个点的函数值不改变定积分。

### 性质 5：估值定理

若在 $[a,b]$ 上有 $m\leq f(x)\leq M$，且 $a<b$，则

$$
\boxed{
m(b-a)
\leq
\int_a^b f(x)\,\mathrm{d}x
\leq
M(b-a)
}.
$$

若 $f$ 连续，可以取 $m,M$ 为 $f$ 在 $[a,b]$ 上的最小值和最大值。该性质由保号性直接得到：

$$
\int_a^b m\,\mathrm{d}x
\leq
\int_a^b f(x)\,\mathrm{d}x
\leq
\int_a^b M\,\mathrm{d}x.
$$

### 性质 6：==积分中值定理==

若 $f$ 在 $[a,b]$ 上连续，且 $a<b$，则至少存在一点 $\xi\in[a,b]$，使

$$
\boxed{
\int_a^b f(x)\,\mathrm{d}x=f(\xi)(b-a)
}.
$$

等价地，连续函数的积分平均值

$$
\frac1{b-a}\int_a^b f(x)\,\mathrm{d}x
$$

必等于区间内某一点的函数值。该定理已在“不定积分”部分用于证明连续函数存在原函数；此处把它作为定积分的核心性质，与估值定理、介值定理形成“先夹住平均值，再保证取到”的逻辑链条。

+++ 例题 8.4：函数与反函数所围面积
设可导函数 $y=f(x)$ 在 $[0,+\infty)$ 上的值域为 $[0,+\infty)$，满足 $f(0)=0$、$f'(x)>0$；$x=\varphi(y)$ 是其反函数。记

$$
I=\int_0^a f(x)\,\mathrm{d}x+\int_0^b\varphi(y)\,\mathrm{d}y,
\qquad a,b>0.
$$

当 $a<\varphi(b)$ 时，比较 $I$ 与 $ab$ 的大小。

**【解】** 由 $f'(x)>0$，$f$ 严格递增。条件 $a<\varphi(b)$ 等价于 $f(a)<b$。曲线 $y=f(x)$ 与 $x=\varphi(y)$ 是同一条曲线的两种表示。

![函数与反函数积分的面积关系](/assets/math/MA-8/inverse-integral-area.svg){.svg-md}

$\int_0^a f(x)\,\mathrm{d}x$ 表示曲线下方、$0\leq x\leq a$ 的面积；$\int_0^b\varphi(y)\,\mathrm{d}y$ 表示曲线左侧、$0\leq y\leq b$ 的面积。二者合并后覆盖矩形 $[0,a]\times[0,b]$，并因 $f(a)<b$ 多出一块正面积。因此

$$
\boxed{I>ab}.
$$

这也是 Young 不等式

$$
\int_0^a f(x)\,\mathrm{d}x
+\int_0^b f^{-1}(y)\,\mathrm{d}y\geq ab
$$

的几何形式；等号当且仅当 $b=f(a)$。
+++

+++ 例题 8.5：衰减振荡曲线的面积
曲线 $y=e^{-x}\sin x$ 在 $[0,+\infty)$ 上与 $x$ 轴所围平面区域的面积，可以由下列哪些式子表示？

1. $\displaystyle\int_0^{+\infty}e^{-x}|\sin x|\,\mathrm{d}x$；
2. $\displaystyle\left|\int_0^{+\infty}e^{-x}\sin x\,\mathrm{d}x\right|$；
3. $\displaystyle\lim_{n\to\infty}\sum_{k=0}^n\left|\int_{k\pi}^{(k+1)\pi}e^{-x}\sin x\,\mathrm{d}x\right|$。

**【解】**

![衰减振荡曲线的带符号积分与总面积](/assets/math/MA-8/damped-sine-area.svg){.svg-md}

曲线在相邻的 $\pi$ 长区间上交替位于 $x$ 轴上方和下方。总面积必须把每一块面积都按正值相加，因此式 1 正确。式 2 先让正负面积抵消，再取绝对值，只得到面积代数和的绝对值，不是总面积。式 3 对每个半波积分分别取绝对值后求和，也正确。

因此共有两个正确表达式，即第 1、3 个。这里的积分上限为 $+\infty$，严格说属于反常积分；本题借助其收敛性考查的仍是定积分的几何意义。
+++

+++ 例题 8.6：将数列极限凑成定积分
求

$$
\lim_{n\to\infty}
\left(
\frac{n+1}{n^2+1}
+\frac{n+2}{n^2+4}
+\cdots+
\frac{n+n}{n^2+n^2}
\right).
$$

**【解】** 将通项提出区间长度因子 $\dfrac1n$：

$$
\sum_{i=1}^n\frac{n+i}{n^2+i^2}
=
\sum_{i=1}^n
\frac{1+\frac in}{1+\left(\frac in\right)^2}\cdot\frac1n.
$$

这正是 $[0,1]$ 上取右端点的黎曼和，故

$$
\lim_{n\to\infty}
\sum_{i=1}^n\frac{n+i}{n^2+i^2}
=\int_0^1\frac{1+x}{1+x^2}\,\mathrm{d}x
=\boxed{\frac{\pi}{4}+\frac12\ln2}.
$$

:::info
“凑定积分定义”的顺序：

1. 先提出 $\dfrac1n$，识别为 $\Delta x$；
2. 再把剩余部分全部写成 $\dfrac in$ 的函数；
3. 把 $\dfrac in$ 识别为 $[0,1]$ 上的右端点 $x_i$；
4. 写成积分，并检查指标从 $1$ 到 $n$ 与取样点是否对应。

若无法完整凑成同一函数的黎曼和，应改用夹逼准则等方法，不能强行套用定积分定义。
:::
+++

+++ 例题 8.7：非负连续函数积分的严格正性
设 $f$ 是 $[a,b]$ 上的非负连续函数，且 $f$ 不恒等于 $0$。证明

$$
\int_a^b f(x)\,\mathrm{d}x>0.
$$

**【证】** 因 $f$ 不恒为 $0$，存在 $x_0\in[a,b]$ 使 $f(x_0)>0$。由连续函数的局部保号性，存在 $\delta>0$ 和 $\eta>0$，使在

$$
J=[x_0-\delta,x_0+\delta]\cap[a,b]
$$

上恒有 $f(x)\geq\eta$，并且 $J$ 的长度 $|J|>0$。由保号性与区间可加性，

$$
\int_a^b f(x)\,\mathrm{d}x
\geq\int_J f(x)\,\mathrm{d}x
\geq\eta|J|>0.
$$

从而命题得证。

同理，若连续函数 $f(x)\geq g(x)$ 且不恒等，则

$$
\int_a^b f(x)\,\mathrm{d}x
>
\int_a^b g(x)\,\mathrm{d}x.
$$
+++

+++ 例题 8.8：证明积分中值定理并强化中值点位置
设 $f$ 在 $[a,b]$ 上连续，$a<b$。证明存在 $\xi\in(a,b)$，使

$$
\int_a^b f(x)\,\mathrm{d}x=f(\xi)(b-a).
$$

**【证】 方法一** 令

$$
F(x)=\int_a^x f(t)\,\mathrm{d}t.
$$

则 $F$ 在 $[a,b]$ 上连续、在 $(a,b)$ 内可导，且 $F'(x)=f(x)$。由拉格朗日中值定理，存在 $\xi\in(a,b)$，使

$$
F(b)-F(a)=F'(\xi)(b-a).
$$

由于 $F(a)=0$，故

$$
\int_a^b f(x)\,\mathrm{d}x=f(\xi)(b-a).
$$

**方法二** 令积分平均值

$$
k=\frac{\int_a^b f(x)\,\mathrm{d}x}{b-a},
$$

并构造

$$
G(x)=\int_a^x f(t)\,\mathrm{d}t-k(x-a).
$$

则 $G(a)=G(b)=0$。由罗尔定理，存在 $\xi\in(a,b)$ 使 $G'(\xi)=0$，即 $f(\xi)=k$，结论同样成立。
+++

+++ 例题 8.9：利用保号性比较积分
设

$$
I_1=\int_0^{\frac{\pi}{4}}\frac{\tan x}{x}\,\mathrm{d}x,
\qquad
I_2=\int_0^{\frac{\pi}{4}}\frac{x}{\tan x}\,\mathrm{d}x.
$$

比较 $I_1,I_2$ 与 $1$ 的大小。

**【解】** 当 $0<x<\dfrac{\pi}{4}$ 时，

$$
0<\sin x<x<\tan x.
$$

因此

$$
\frac{\tan x}{x}>1>\frac{x}{\tan x},
$$

从而 $I_1>I_2$。为估计 $I_1$ 的上界，令

$$
g(x)=\frac{\tan x}{x}.
$$

有

$$
g'(x)
=\frac{x\sec^2x-\tan x}{x^2}
=\frac{x-\sin x\cos x}{x^2\cos^2x}>0,
$$

故 $g$ 在 $\left(0,\dfrac{\pi}{4}\right)$ 上严格递增，于是

$$
\frac{\tan x}{x}<g\left(\frac{\pi}{4}\right)=\frac4\pi.
$$

由保号性，

$$
I_1
<\int_0^{\frac{\pi}{4}}\frac4\pi\,\mathrm{d}x=1.
$$

综上，

$$
\boxed{1>I_1>I_2}.
$$
+++

+++ 例题 8.10：比较两个复合函数积分
设

$$
M=\int_0^{\frac{\pi}{2}}\sin(\sin x)\,\mathrm{d}x,
\qquad
N=\int_0^{\frac{\pi}{2}}\cos(\cos x)\,\mathrm{d}x.
$$

比较 $M,N$ 与 $1$ 的大小。

**【解】** 对 $0<x<\dfrac{\pi}{2}$，有 $0<\sin x<1$，故

$$
\sin(\sin x)<\sin x.
$$

由严格保号性，

$$
M<\int_0^{\frac{\pi}{2}}\sin x\,\mathrm{d}x=1.
$$

再令

$$
h(x)=x+\cos x.
$$

因为 $h'(x)=1-\sin x\geq0$，所以

$$
x+\cos x<\frac{\pi}{2}
\qquad
\left(0\leq x<\frac{\pi}{2}\right).
$$

于是 $\dfrac{\pi}{2}-\cos x>x$。利用 $\sin x$ 在 $\left[0,\dfrac{\pi}{2}\right]$ 上严格递增，

$$
\cos(\cos x)
=\sin\left(\frac{\pi}{2}-\cos x\right)
>\sin x
\qquad
\left(0<x<\frac{\pi}{2}\right).
$$

因此

$$
N>\int_0^{\frac{\pi}{2}}\sin x\,\mathrm{d}x=1.
$$

最终得到

$$
\boxed{M<1<N}.
$$
+++

## 4. 定积分问题的检查顺序

| 题目类型 | 首要识别 | 关键检查 |
| --- | --- | --- |
| 判断定积分是否存在 | 常义积分还是反常积分 | 有限区间、有界性以及可用的充分条件 |
| 判断是否存在原函数 | 被积函数能否作为导函数 | 第一类间断、无穷间断与达布性质 |
| 面积表达式 | 函数在 $x$ 轴上下的符号 | 总面积用被积函数取绝对值或分段取绝对值，不能只对总积分取绝对值 |
| 数列极限化为积分 | 是否出现统一的 $\Delta x$ 与取样点 | 指标范围、区间端点和通项必须匹配 |
| 比较或估计积分 | 被积函数的点态大小 | 非严格与严格不等式的条件不能混淆 |
| 积分中值定理 | 连续性与区间长度 | 平均值先由估值定理夹住，再由介值性取到 |

定积分计算与性质题中，应始终区分三个层次：先确认积分存在，再使用性质变形，最后才进行数值计算或大小比较。若第一步缺失，后续的代数运算即使形式正确，也可能没有意义。

# 三、变限积分

定积分的上下限固定时，积分值是一个常数；若积分限随变量变化，积分值也随之变化，于是得到一个新的函数。变限积分把“累计的带符号面积”与函数求导联系起来，是牛顿—莱布尼茨公式的直接基础。

## 1. 概念

设 $f$ 在区间 $I$ 上可积，固定 $a\in I$。当 $x\in I$ 变化时，积分

$$
F(x)=\int_a^x f(t)\,\mathrm{d}t
$$

对每个 $x$ 都有确定的值，因而定义了一个关于 $x$ 的函数，称为 $f$ 的**变上限积分函数**，也简称**积分上限函数**。

这里用 $t$ 作为积分变量，是为了把积分号内部的哑变量与外部自变量 $x$ 区分开。类似地，

$$
\int_x^b f(t)\,\mathrm{d}t,
\qquad
\int_{\alpha(x)}^{\beta(x)}f(t)\,\mathrm{d}t
$$

分别是变下限积分和上下限同时变化的积分，统称为**变限积分**。它们都可以借助

$$
\int_{\alpha(x)}^{\beta(x)}f(t)\,\mathrm{d}t
=F\bigl(\beta(x)\bigr)-F\bigl(\alpha(x)\bigr)
$$

化为积分上限函数的复合。

![积分上限函数：随上限 x 变化的累计带符号面积](/assets/math/MA-8/upper-limit-integral.svg){.svg-md}

## 2. 基本性质

### 性质 1：可积必连续

若 $f$ 在区间 $I$ 上可积，则

$$
F(x)=\int_a^x f(t)\,\mathrm{d}t
$$

在 $I$ 上连续。

注意，这里只要求 $f$ 可积，并不要求 $f$ 连续。常义可积函数必有界，设 $|f(t)|\leq M$。对任意使 $x,x+\Delta x\in I$ 的 $\Delta x$，有

$$
F(x+\Delta x)-F(x)
=\int_x^{x+\Delta x}f(t)\,\mathrm{d}t,
$$

从而

$$
\left|F(x+\Delta x)-F(x)\right|
\leq M|\Delta x|.
$$

令 $\Delta x\to0$ 即得 $F(x+\Delta x)\to F(x)$。

> 事实上，这还说明 $F$ 满足 Lipschitz 条件，因而连续性比一般连续更强。

### 性质 2：连续必可导

若 $f$ 在区间 $I$ 上连续，则积分上限函数

$$
F(x)=\int_a^x f(t)\,\mathrm{d}t
$$

在 $I$ 上可导，且

$$
\boxed{F'(x)=f(x)}.
$$

**【证】** 对 $\Delta x\neq0$，由积分中值定理，存在介于 $x$ 与 $x+\Delta x$ 之间的 $\xi$，使

$$
\frac{F(x+\Delta x)-F(x)}{\Delta x}
=\frac{1}{\Delta x}\int_x^{x+\Delta x}f(t)\,\mathrm{d}t
=f(\xi).
$$

当 $\Delta x\to0$ 时，$\xi\to x$。由 $f$ 在 $x$ 处连续，得

$$
F'(x)=\lim_{\Delta x\to0}f(\xi)=f(x).
$$

因此，连续函数 $f$ 的积分上限函数就是它的一个原函数。这一结论常写成

$$
\boxed{
\frac{\mathrm{d}}{\mathrm{d}x}\int_a^x f(t)\,\mathrm{d}t=f(x)
}.
$$

对复合积分限，结合链式法则可得

$$
\boxed{
\frac{\mathrm{d}}{\mathrm{d}x}
\int_{\alpha(x)}^{\beta(x)}f(t)\,\mathrm{d}t
=f\bigl(\beta(x)\bigr)\beta'(x)
-f\bigl(\alpha(x)\bigr)\alpha'(x)
}.
$$

使用这条公式前，必须保证 $f$ 在相应积分路径上满足所需的连续性，并保证 $\alpha,\beta$ 可导。

### 性质 3：唯一间断点对可导性的影响

设 $x_0\in I$ 是 $f$ 在 $I$ 内唯一的间断点，并令

$$
F(x)=\int_a^x f(t)\,\mathrm{d}t.
$$

> 这里的 $F(x)$ 是**变限积分**，而不是 $f(x)$ 的原函数。

1. 若 $x_0$ 是跳跃间断点，则 $F$ 在 $x_0$ 处连续但不可导，而且

   $$
   F'_-(x_0)=\lim_{x\to x_0^-}f(x),
   \qquad
   F'_+(x_0)=\lim_{x\to x_0^+}f(x).
   $$

   两个单侧极限不相等，故两个单侧导数也不相等。

2. 若 $x_0$ 是可去间断点，则 $F$ 在 $x_0$ 处仍可导，并且

   $$
   F'(x_0)=\lim_{x\to x_0}f(x).
   $$

   此值可能不等于 $f(x_0)$，所以 $F$ 虽然可导，却未必是 $f$ 在整个 $I$ 上的原函数。

![跳跃间断与可去间断对积分上限函数可导性的影响](/assets/math/MA-8/variable-limit-discontinuities.svg){.svg-xl}

+++ 性质 3 的证明
当 $x\neq x_0$ 时，$f$ 在 $x$ 的邻域内连续，因此 $F'(x)=f(x)$。在 $x_0$ 处，先考察右导数：

$$
F'_+(x_0)
=\lim_{x\to x_0^+}
\frac{F(x)-F(x_0)}{x-x_0}
=\lim_{x\to x_0^+}
\frac{\int_{x_0}^{x}f(t)\,\mathrm{d}t}{x-x_0}.
$$

若 $\lim_{x\to x_0^+}f(x)$ 存在，由积分中值定理或洛必达法则可得

$$
F'_+(x_0)=\lim_{x\to x_0^+}f(x).
$$

同理，

$$
F'_-(x_0)=\lim_{x\to x_0^-}f(x).
$$

若 $x_0$ 是跳跃间断点，左右极限均存在但不相等，所以 $F$ 在 $x_0$ 处不可导；若 $x_0$ 是可去间断点，左右极限相等，所以 $F'(x_0)$ 存在，且等于该共同极限。两种情形下，性质 1 都保证 $F$ 仍然连续。
+++

:::warning
积分上限函数的三个层次不可混淆：

- $f$ 可积，只能保证 $F$ 连续；
- $f$ 在某点连续，才能直接断言 $F'$ 在该点等于 $f$；
- $f$ 在某点可去间断时，$F'$ 仍可能存在，但等于 $\lim f$，不一定等于人为规定的 $f(x_0)$。
:::

+++ 例题 8.11：由被积函数图像判断积分上限函数
设 $f$ 在 $[-1,3]$ 上的图像如图左所示，令 $F(x)=\int_0^x f(t)\,\mathrm{d}t$。判断 $F$ 的图像特征。

![由分段函数 f 的图像判断积分上限函数 F 的图像](/assets/math/MA-8/variable-limit-example.svg){.svg-lg}

**【解】** 由性质 1，只要 $f$ 在闭区间上可积，$F$ 就处处连续，所以 $F$ 的图像不能出现断点。

图中 $f$ 有两个跳跃间断点，故 $F$ 在对应位置连续但不可导，图像应出现两个尖角；同时

$$
F(0)=\int_0^0f(t)\,\mathrm{d}t=0,
$$

所以图像必须经过原点。原题四个选项中，满足这些条件的是 $\boxed{\mathrm D}$。
+++

+++ 例题 8.12：跳跃间断点处的可导性
设

$$
f(x)=
\begin{cases}
\cos x,&0\leq x<\pi,\\
1,&\pi\leq x\leq2\pi,
\end{cases}
\qquad
F(x)=\int_0^x f(t)\,\mathrm{d}t.
$$

判断 $F$ 在 $x=\pi$ 处的连续性与可导性。

**【解】** $f$ 在 $x=\pi$ 处为跳跃间断，因此 $F$ 在该点连续但不可导。也可直接计算

$$
F(x)=
\begin{cases}
\sin x,&0\leq x<\pi,\\
x-\pi,&\pi\leq x\leq2\pi.
\end{cases}
$$

两侧函数值都趋于 $0$，故 $F$ 连续；但

$$
F'_-(\pi)=-1,
\qquad
F'_+(\pi)=1,
$$

所以 $F$ 在 $x=\pi$ 处不可导。
+++

+++ 例题 8.13：可去间断点不妨碍积分上限函数可导
设

$$
f(x)=
\begin{cases}
e^{x^2}+x^2,&x\neq0,\\
a,&x=0,
\end{cases}
\qquad
F(x)=\int_{-1}^x f(t)\,\mathrm{d}t,
$$

其中 $a$ 为常数。判断 $F$ 在 $x=0$ 处是否可导。

**【解】** 无论 $a$ 取何值，

$$
\lim_{x\to0}f(x)=1.
$$

当 $a=1$ 时，$f$ 在 $0$ 处连续；当 $a\neq1$ 时，$0$ 是 $f$ 的可去间断点。两种情形下都有

$$
F'(0)=\lim_{x\to0}f(x)=1,
$$

所以 $F$ 在 $0$ 处总是可导。

但当 $a\neq1$ 时，$F'(0)=1\neq a=f(0)$，所以 $F$ 不是 $f$ 在任何包含 $0$ 的区间上的原函数。
+++

+++ 例题 8.14：利用积分上限函数估计有界性
设 $a>0$，函数 $f$ 在 $[0,+\infty)$ 上连续有界，$C$ 为常数。证明

$$
y=e^{-ax}\left[\int_0^x f(t)e^{at}\,\mathrm{d}t+C\right]
$$

在 $[0,+\infty)$ 上有界。

**【证】** 设 $|f(t)|\leq M$。当 $x\geq0$ 时，

$$
\begin{aligned}
|y|
&\leq |C|e^{-ax}
+e^{-ax}\int_0^x |f(t)|e^{at}\,\mathrm{d}t\\
&\leq |C|+Me^{-ax}\int_0^x e^{at}\,\mathrm{d}t\\
&=|C|+\frac{M}{a}(1-e^{-ax})\\
&\leq |C|+\frac{M}{a}.
\end{aligned}
$$

右端与 $x$ 无关，故 $y$ 有界。
+++

## 3. 变限积分的检查顺序

| 目标 | 首要条件 | 结论或公式 |
| --- | --- | --- |
| 判断连续性 | 被积函数在区间上可积 | $F(x)=\int_a^x f$ 必连续 |
| 判断可导性 | 被积函数在考察点连续 | $F'(x)=f(x)$ |
| 处理可去间断 | 检查 $\lim_{x\to x_0}f(x)$ | $F'(x_0)=\lim f(x)$ |
| 处理跳跃间断 | 计算 $f$ 的左右极限 | $F'_\pm(x_0)=f(x_0\pm)$，通常不可导 |
| 复合积分限求导 | $f$ 连续，积分限可导 | 上限项减下限项，并乘各自导数 |

# 四、反常积分

常义定积分的定义建立在**有限区间**和**有界被积函数**之上。若积分区间无穷，或被积函数在有限区间内无界，就不能直接使用黎曼积分定义，而应把问题改写为极限，这便得到反常积分，也称广义积分。

## 1. 概念

### （1）无穷区间上的反常积分

设 $F$ 是 $f$ 在相应区间上的一个原函数。

1. 在 $[a,+\infty)$ 上，定义

   $$
   \int_a^{+\infty}f(x)\,\mathrm{d}x
   =\lim_{R\to+\infty}\int_a^R f(x)\,\mathrm{d}x
   =\lim_{R\to+\infty}[F(R)-F(a)].
   $$

2. 在 $(-\infty,b]$ 上，定义

   $$
   \int_{-\infty}^{b}f(x)\,\mathrm{d}x
   =\lim_{L\to-\infty}\int_L^b f(x)\,\mathrm{d}x
   =F(b)-\lim_{L\to-\infty}F(L).
   $$

3. 在整个实轴上，任取有限分点 $c$，定义

   $$
   \int_{-\infty}^{+\infty}f(x)\,\mathrm{d}x
   =\int_{-\infty}^{c}f(x)\,\mathrm{d}x
   +\int_c^{+\infty}f(x)\,\mathrm{d}x.
   $$

   只有右端两个反常积分**分别收敛**时，整个积分才收敛；只要有一个发散，原积分就发散。

![无穷区间反常积分：用有限截断区间的极限定义](/assets/math/MA-8/improper-integral-types.svg){.svg-xl}

:::warning
这里的 $+\infty$ 和 $-\infty$ 不是普通积分限，而是提示应取极限。尤其不能用左右两端“恰好抵消”来替代分别收敛。例如

$$
\int_{-\infty}^{+\infty}x^3\,\mathrm{d}x
$$

并不收敛，尽管对称截断积分 $\int_{-R}^{R}x^3\,\mathrm{d}x=0$。后者描述的是柯西主值，不是本章所说的反常积分。
:::

### （2）无界函数的反常积分

若 $f$ 在有限区间内无界，则使 $f$ 无界的点称为**瑕点**或**奇点**。

1. 若 $x=a$ 是唯一瑕点，则

   $$
   \int_a^b f(x)\,\mathrm{d}x
   =\lim_{\varepsilon\to0^+}
   \int_{a+\varepsilon}^{b}f(x)\,\mathrm{d}x.
   $$

2. 若 $x=b$ 是唯一瑕点，则

   $$
   \int_a^b f(x)\,\mathrm{d}x
   =\lim_{\varepsilon\to0^+}
   \int_a^{b-\varepsilon}f(x)\,\mathrm{d}x.
   $$

3. 若 $c\in(a,b)$ 是唯一瑕点，则必须拆分为

   $$
   \int_a^b f(x)\,\mathrm{d}x
   =\int_a^c f(x)\,\mathrm{d}x
   +\int_c^b f(x)\,\mathrm{d}x.
   $$

   只有左右两个反常积分都收敛时，原积分才收敛。

在判敛时，一个反常积分中**只能保留一个奇点**；若积分区间含多个无穷端点或瑕点，必须先逐一拆分。

:::info
“可积函数必有界”说的是有限闭区间上的黎曼可积性；无界函数的反常积分则是另一个由极限定义的概念。无界函数的反常积分可能收敛，与常义可积函数必有界并不矛盾。答题时应明确写出讨论的是常义积分还是反常积分。
:::

## 2. 敛散性的判别法

以下比较判别法主要用于最终保持同号的函数。若被积函数变号，应先考虑绝对收敛，或把正负部分分开处理。

### （1）无穷区间的比较判别法

设 $f,g$ 在 $[a,+\infty)$ 上连续，且

$$
0\leq f(x)\leq g(x).
$$

则：

1. 若 $\int_a^{+\infty}g(x)\,\mathrm{d}x$ 收敛，则 $\int_a^{+\infty}f(x)\,\mathrm{d}x$ 收敛；
2. 若 $\int_a^{+\infty}f(x)\,\mathrm{d}x$ 发散，则 $\int_a^{+\infty}g(x)\,\mathrm{d}x$ 发散。

这两条实际上是同一结论及其逆否命题：大函数收敛可以控制小函数收敛，小函数发散可以迫使大函数发散。

### （2）无穷区间的极限比较判别法

设 $f(x), g(x)$ 在 $[a, +\infty)$ 都连续， $f(x)\geq0, g(x)>0$，且

$$
\lim_{x\to+\infty}\frac{f(x)}{g(x)}=\lambda
\qquad(\lambda\text{ 为有限数或 }\infty).
$$

则：

1. 若 $\lambda\neq0$ 且 $\lambda\neq\infty$，两个积分具有相同的敛散性；
2. 若 $\lambda=0$，且 $\int_a^{+\infty}g(x)\,\mathrm{d}x$ 收敛，则 $\int_a^{+\infty}f(x)\,\mathrm{d}x$ 收敛；
3. 若 $\lambda=\infty$，且 $\int_a^{+\infty}g(x)\,\mathrm{d}x$ 发散，则 $\int_a^{+\infty}f(x)\,\mathrm{d}x$ 发散。

### （3）瑕点附近的比较判别法

设 $f,g$ 在 $(a,b]$ 上连续，$x=a$ 为瑕点，且

$$
0\leq f(x)\leq g(x).
$$

则大函数收敛推出小函数收敛，小函数发散推出大函数发散。极限比较判别法也完全类似，只需把 $x\to+\infty$ 改为 $x\to a^+$。

### （4）关于 $p$ 积分的两个重要结论

反常积分判敛中最重要的比较对象是

$$
\boxed{
\int_0^1\frac{1}{x^p}\mathrm{d}x
\begin{cases}
\text{收敛},&0<p<1,\\
\text{发散},&p\geq1,
\end{cases}
}
$$

以及

$$
\boxed{
\int_1^{+\infty}\frac{1}{x^p}\mathrm{d}x
\begin{cases}
\text{收敛},&p>1,\\
\text{发散},&p\leq1.
\end{cases}
}
$$

![p 型反常积分在零点附近和无穷远处的不同判敛阈值](/assets/math/MA-8/p-integral-thresholds.svg){.svg-xl}

应把两个阈值分开记忆：

- 在 $x\to0^+$ 时，函数不能以 $x^{-1}$ 或更快的速度爆炸；
- 在 $x\to+\infty$ 时，函数必须比 $x^{-1}$ 衰减得更快。

若 $\sin x\sim x\ (x\to0)$，则

$$
\int_0^{\frac{\pi}{2}}\frac{1}{\sin^p x}\mathrm{d}x
$$

与 $\int_0^1x^{-p}\,\mathrm{d}x$ 同敛散；若 $a>0$ 且 $ax+b$ 在积分区间内保持为正，则

$$
\int_1^{+\infty}\frac{1}{(ax+b)^p}\mathrm{d}x
$$

与 $\int_1^{+\infty}x^{-p}\,\mathrm{d}x$ 同敛散。

+++ 例题 8.15：同时考察零点与无穷远处
设 $a>b>0$，且

$$
\int_0^{+\infty}\frac{\mathrm{d}x}{x^a+x^b}
$$

收敛，求 $a,b$ 应满足的条件。

**【解】** 必须在 $x=1$ 处分段：

$$
I=\int_0^1\frac{\mathrm{d}x}{x^a+x^b}
+\int_1^{+\infty}\frac{\mathrm{d}x}{x^a+x^b}
=I_1+I_2.
$$

当 $x\to0^+$ 时，由 $a>b$，有

$$
x^a+x^b\sim x^b,
$$

故 $I_1$ 与 $\int_0^1x^{-b}\,\mathrm{d}x$ 同敛散，要求 $b<1$。

当 $x\to+\infty$ 时，

$$
x^a+x^b\sim x^a,
$$

故 $I_2$ 与 $\int_1^{+\infty}x^{-a}\,\mathrm{d}x$ 同敛散，要求 $a>1$。综上，

$$
\boxed{a>1,\qquad b<1}.
$$
+++

+++ 例题 8.16：利用等价无穷小判敛
若

$$
\int_1^{+\infty}
\left(e^{-\cos\frac1x}-e^{-1}\right)x^k\,\mathrm{d}x
$$

收敛，求 $k$ 的取值范围。

**【解】** 当 $x\to+\infty$ 时，

$$
1-\cos\frac1x\sim\frac{1}{2x^2},
$$

并且

$$
e^{-\cos\frac1x}-e^{-1}
=e^{-1}\left(e^{1-\cos\frac1x}-1\right)
\sim\frac{e^{-1}}{2x^2}.
$$

因此原被积函数等价于常数倍的 $x^{k-2}$。要使无穷区间积分收敛，需

$$
2-k>1,
$$

故

$$
\boxed{k<1}.
$$
+++

+++ 例题 8.17：综合判断四个反常积分
判断下列反常积分中发散的是哪一个：

$$
\begin{aligned}
\text{(A)}\quad&
\int_1^{+\infty}
\left[\ln\left(1+\frac1x\right)-\frac{1}{1+x}\right]\mathrm{d}x,\\
\text{(B)}\quad&
\int_0^{+\infty}\frac{\ln x}{1+x^2}\,\mathrm{d}x,\\
\text{(C)}\quad&
\int_{-1}^{1}\frac{\mathrm{d}x}{\sin x},\\
\text{(D)}\quad&
\int_{-\infty}^{+\infty}\frac{\sin x}{1+x^2}\,\mathrm{d}x.
\end{aligned}
$$

**【解】** 对 (A)，由拉格朗日中值定理，$x<\xi<x+1$，有

$$
\ln\left(1+\frac1x\right)=\frac1\xi,
$$

故

$$
0<\ln\left(1+\frac1x\right)-\frac1{x+1}
<\frac1x-\frac1{x+1}
=\frac1{x(x+1)}<\frac1{x^2}.
$$

所以 (A) 收敛。

对 (B)，在 $x=1$ 处分段。$x\to0^+$ 时，$|\ln x|$ 可与 $x^{-1/2}$ 比较；$x\to+\infty$ 时，

$$
\frac{\ln x}{1+x^2}=o\left(\frac1{x^{3/2}}\right),
$$

故两段都绝对收敛。

对 (C)，$\sin x\sim x$，所以瑕点 $x=0$ 两侧分别与 $1/x$ 同阶并各自发散。左右符号相反不能用来抵消，故 (C) 发散。

对 (D)，

$$
\int_0^{+\infty}\left|\frac{\sin x}{1+x^2}\right|\mathrm{d}x
\leq\int_0^{+\infty}\frac{\mathrm{d}x}{1+x^2}
=\frac\pi2,
$$

负半轴同理，因此 (D) 绝对收敛。综上，答案为 $\boxed{\text{C}}$。
+++

:::info
对称区间上的反常积分只有在相应半轴积分收敛后，才能利用奇偶性：若 $f$ 为偶函数，则

$$
\int_{-\infty}^{+\infty}f(x)\,\mathrm{d}x
=2\int_0^{+\infty}f(x)\,\mathrm{d}x;
$$

若 $f$ 为奇函数，则

$$
\int_{-\infty}^{+\infty}f(x)\,\mathrm{d}x=0.
$$

若半轴积分不收敛，不能仅凭奇函数的对称性把结果写成 $0$。
:::

### （5）含对数因子的两个重要结论

对 $p\geq0$，有

$$
\boxed{
\int_0^1\frac{|\ln x|}{x^p}\,\mathrm{d}x
\begin{cases}
\text{收敛},&0\leq p<1,\\
\text{发散},&p\geq1,
\end{cases}
}
$$

以及

$$
\boxed{
\int_1^{+\infty}\frac{\ln x}{x^p}\,\mathrm{d}x
\begin{cases}
\text{收敛},&p>1,\\
\text{发散},&p\leq1.
\end{cases}
}
$$

原因是对任意 $\varepsilon>0$，

$$
|\ln x|=o(x^{-\varepsilon})\quad(x\to0^+),
\qquad
\ln x=o(x^\varepsilon)\quad(x\to+\infty).
$$

也就是说，对数因子比任意正幂增长得慢；判敛的主导因素仍是幂指数是否越过临界值 $1$。

+++ 例题 8.18：零点附近含对数因子的积分
已知 $\alpha>0$，判断

$$
\int_0^1\frac{|\ln x|}{x^\alpha}\,\mathrm{d}x
$$

的敛散性。

**【解】** 当 $\alpha<1$ 时，取充分小的 $\varepsilon>0$，使 $\alpha+\varepsilon<1$。由

$$
x^\varepsilon|\ln x|\to0
\qquad(x\to0^+),
$$

可知在 $0$ 的某个右邻域内

$$
\frac{|\ln x|}{x^\alpha}
\leq\frac{C}{x^{\alpha+\varepsilon}},
$$

右端积分收敛，故原积分收敛。

当 $\alpha\geq1$ 时，对充分小的 $x$ 有 $|\ln x|>1$，于是

$$
\frac{|\ln x|}{x^\alpha}\geq\frac1{x^\alpha},
$$

而右端积分发散。因此

$$
\boxed{0<\alpha<1\text{ 时收敛；}\alpha\geq1\text{ 时发散}}.
$$
+++

+++ 例题 8.19：无穷远处含对数因子的积分
已知 $\alpha>0$，判断

$$
\int_1^{+\infty}\frac{\ln x}{x^\alpha}\,\mathrm{d}x
$$

的敛散性。

**【解】** 当 $0<\alpha\leq1$ 时，对充分大的 $x$ 有 $\ln x>1$，故

$$
\frac{\ln x}{x^\alpha}\geq\frac1{x^\alpha},
$$

右端积分发散，所以原积分发散。

当 $\alpha>1$ 时，取充分小的 $\varepsilon>0$，使 $\alpha-\varepsilon>1$。由

$$
\frac{\ln x}{x^\varepsilon}\to0
\qquad(x\to+\infty),
$$

可知

$$
\frac{\ln x}{x^\alpha}
=o\left(\frac1{x^{\alpha-\varepsilon}}\right).
$$

右端对应的 $p$ 型积分收敛，故原积分收敛。综上，

$$
\boxed{\alpha>1\text{ 时收敛；}0<\alpha\leq1\text{ 时发散}}.
$$
+++

:::info
若 $f(x)\geq0$ 最终成立，且

$$
\lim_{x\to+\infty}x^p f(x)=\lambda,
\qquad 0<\lambda<+\infty,
$$

则 $f(x)$ 与 $x^{-p}$ 同阶。因此 $p>1$ 时 $\int_a^{+\infty}f(x)\,\mathrm{d}x$ 收敛，$p\leq1$ 时发散。若允许 $f$ 变号并且 $\lambda\neq0$，同样可对 $|f|$ 使用极限比较，从而得到绝对收敛或发散的结论。
:::

## 3. 反常积分的判敛流程

| 步骤 | 要做的事 | 常见错误 |
| --- | --- | --- |
| 识别奇点 | 找出所有无穷端点与函数无界点 | 把 $\infty$ 当普通端点，漏掉区间内部瑕点 |
| 拆分积分 | 每段只保留一个奇点 | 用两侧发散量相消，误把主值当反常积分 |
| 选择比较对象 | 优先与 $x^{-p}$ 或等价无穷小比较 | 只算极限，不核对比较函数本身的敛散性 |
| 检查符号 | 非负函数直接比较，变号函数先看绝对值 | 对非同号函数机械套用比较判别法 |
| 汇总结论 | 所有子积分都收敛，原积分才收敛 | 只证明其中一段收敛便下结论 |

本章讨论的是反常积分的**收敛性**，不是柯西主值。遇到对称区间、奇函数或内部瑕点时，应特别检查是否真的满足“每一段分别收敛”。
