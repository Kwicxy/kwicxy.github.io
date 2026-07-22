---
layout: post
title: 2025 年考研数学一真题
description: 收录 2025 年考研数学一真题、参考答案与解析，按选择题、填空题和解答题编排，便于刷题复盘。
math: true
quiz: true
copyright: false
date: 2026-07-02 10:00:00
categories:
  - 试卷真题
  - 数学一
tags:
  - 考研数学
  - 数学一
  - 2025 年真题
---
> 收录 2025 年考研数学一真题、参考答案与解析，按选择题、填空题和解答题编排，便于刷题复盘。

# 2025 年考研数学一真题

# 选择题

1～10 小题，每小题 5 分，共 50 分。下列每题给出的四个选项中，只有一个选项符合题目要求。

## 01

1. 已知函数 $f(x)=\displaystyle\int_0^x e^{t^2}\sin t\,dt$，$g(x)=\displaystyle\int_0^x e^{t^2}\,dt\cdot \sin^2x$，则（　）{.quiz .no-index}
    - $x=0$ 是 $f(x)$ 的极值点，也是 $g(x)$ 的极值点.
    - $x=0$ 是 $f(x)$ 的极值点，$(0,0)$ 是曲线 $y=g(x)$ 的拐点. {.correct}
    - $x=0$ 是 $f(x)$ 的极值点，$(0,0)$ 是曲线 $y=f(x)$ 的拐点.
    - $(0,0)$ 是曲线 $y=f(x)$ 的拐点，也是曲线 $y=g(x)$ 的拐点.
{.options}

+++ 答案与解析
正确答案：`B`.

$f'(x)=e^{x^2}\sin x$，$f'(0)=0$，且 $f''(0)=1>0$，所以 $x=0$ 是 $f$ 的极小值点。

$g(x)$ 在 $x=0$ 附近的主部为 $x^3$，故 $g'(0)=g''(0)=0$ 且 $g'''(0)\ne0$，$(0,0)$ 是曲线 $y=g(x)$ 的拐点。
+++

## 02

1. 级数 $\displaystyle\sum_{n=1}^{\infty}\sin\frac{n^3\pi}{n^2+1}$ 与级数 $\displaystyle\sum_{n=1}^{\infty}(-1)^n\left(\frac{1}{n^{2/3}}-\tan\frac{1}{n^{2/3}}\right)$ 的敛散性为（　）{.quiz .no-index}
    - 两者均条件收敛.
    - 前者条件收敛，后者绝对收敛. {.correct}
    - 前者绝对收敛，后者条件收敛.
    - 两者均绝对收敛.
{.options}

+++ 答案与解析
正确答案：`B`.

第一项中

$$
\frac{n^3\pi}{n^2+1}=n\pi-\frac{n\pi}{n^2+1},
$$

所以通项等价于 $(-1)^{n+1}\frac{\pi}{n}$，级数条件收敛但不绝对收敛。

第二项令 $u_n=n^{-2/3}$，则

$$
u_n-\tan u_n\sim-\frac{u_n^3}{3}=-\frac{1}{3n^2},
$$

故绝对收敛。
+++

## 03

1. 设函数 $f(x)$ 在 $[0,+\infty)$ 上可导，则（　）{.quiz .no-index}
    - 当 $\displaystyle\lim_{x\to+\infty}f(x)$ 存在时，$\displaystyle\lim_{x\to+\infty}f'(x)$ 存在.
    - 当 $\displaystyle\lim_{x\to+\infty}f'(x)$ 存在时，$\displaystyle\lim_{x\to+\infty}f(x)$ 存在.
    - 当 $\displaystyle\lim_{x\to+\infty}\frac1x\int_0^x f(t)\,dt$ 存在时，$\displaystyle\lim_{x\to+\infty}f(x)$ 存在.
    - 当 $\displaystyle\lim_{x\to+\infty}f(x)$ 存在时，$\displaystyle\lim_{x\to+\infty}\frac1x\int_0^x f(t)\,dt$ 存在. {.correct}
{.options}

+++ 答案与解析
正确答案：`D`.

D 是连续型 Cesaro 平均结论：若 $f(x)\to A$，则

$$
\frac1x\int_0^x f(t)\,dt\to A.
$$

A 可用收敛但导数振荡的函数反例否定；B 可用 $f(x)=x$ 否定；C 可用 $f(x)=\cos x$ 否定。
+++

## 04

1. 设函数 $f(x,y)$ 连续，则 $\displaystyle\int_{-2}^{2}dx\int_{4-x^2}^{4}f(x,y)\,dy=$（　）{.quiz .no-index}
    - $\displaystyle\int_0^4\left[\int_{-2}^{-\sqrt{4-y}}f(x,y)\,dx+\int_{\sqrt{4-y}}^{2}f(x,y)\,dx\right]dy$. {.correct}
    - $\displaystyle\int_0^4\left[\int_{-2}^{\sqrt{4-y}}f(x,y)\,dx+\int_{\sqrt{4-y}}^{2}f(x,y)\,dx\right]dy$.
    - $\displaystyle\int_0^4\left[\int_{-2}^{-\sqrt{4-y}}f(x,y)\,dx+\int_{2}^{\sqrt{4-y}}f(x,y)\,dx\right]dy$.
    - $\displaystyle2\int_0^4dy\int_{\sqrt{4-y}}^{2}f(x,y)\,dx$.
{.options}

+++ 答案与解析
正确答案：`A`.

原积分区域为

$$
-2\le x\le2,\qquad 4-x^2\le y\le4.
$$

换成先 $y$ 后 $x$：$0\le y\le4$，且 $x^2\ge4-y$，即

$$
-2\le x\le-\sqrt{4-y}
\quad\text{或}\quad
\sqrt{4-y}\le x\le2.
$$
+++

## 05

1. 二次型 $f(x_1,x_2,x_3)=x_1^2+2x_1x_2+2x_1x_3$ 的正惯性指数为（　）{.quiz .no-index}
    - $0$.
    - $1$. {.correct}
    - $2$.
    - $3$.
{.options}

+++ 答案与解析
正确答案：`B`.

二次型矩阵为

$$
A=\begin{pmatrix}
1&1&1\\
1&0&0\\
1&0&0
\end{pmatrix}.
$$

其特征值为 $2,-1,0$，因此正惯性指数为 $1$。
+++

## 06

1. 设 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 是 $n$ 维列向量，$\alpha_1,\alpha_2$ 线性无关，$\alpha_1,\alpha_2,\alpha_3$ 线性相关，且 $\alpha_1+\alpha_2+\alpha_4=0$。在空间直角坐标系 $O-xyz$ 中，方程组 $x\alpha_1+y\alpha_2+z\alpha_3=\alpha_4$ 的几何图形是（　）{.quiz .no-index}
    - 过原点的一个平面.
    - 过原点的一条直线.
    - 不过原点的一个平面.
    - 不过原点的一条直线. {.correct}
{.options}

+++ 答案与解析
正确答案：`D`.

因为 $\alpha_1,\alpha_2$ 线性无关，而 $\alpha_3$ 可由 $\alpha_1,\alpha_2$ 线性表示，所以系数矩阵秩为 $2$。又 $\alpha_4=-(\alpha_1+\alpha_2)$，方程组相容，解集维数为 $3-2=1$，是一条直线。

若原点在解集中，则 $\alpha_4=0$，从而 $\alpha_1+\alpha_2=0$，与 $\alpha_1,\alpha_2$ 线性无关矛盾，故该直线不过原点。
+++

## 07

1. 设 $n$ 阶矩阵 $A,B,C$ 满足 $r(A)+r(B)+r(C)=r(ABC)+2n$。给出下列结论：① $r(ABC)+n=r(AB)+r(C)$；② $r(AB)+n=r(A)+r(B)$；③ $r(A)=r(B)=r(C)=n$；④ $r(AB)=r(BC)=n$。正确的是（　）{.quiz .no-index}
    - ①②. {.correct}
    - ①③.
    - ②④.
    - ③④.
{.options}

+++ 答案与解析
正确答案：`A`.

由 Sylvester 秩不等式：

$$
r(AB)\ge r(A)+r(B)-n,\qquad
r(ABC)\ge r(AB)+r(C)-n.
$$

两式相加得

$$
r(ABC)\ge r(A)+r(B)+r(C)-2n.
$$

题设恰使不等式取等号，因此上面两步均取等号，得到 ①②。③④不一定成立。
+++

## 08

1. 设二维随机变量 $(X,Y)$ 服从正态分布 $N(0,0;1,1;\rho)$，其中 $\rho\in(-1,1)$。若 $a,b$ 满足 $a^2+b^2=1$，则 $D(aX+bY)$ 的最大值为（　）{.quiz .no-index}
    - $1$.
    - $2$.
    - $1+|\rho|$. {.correct}
    - $1+\rho^2$.
{.options}

+++ 答案与解析
正确答案：`C`.

由 $D(X)=D(Y)=1$、$\operatorname{Cov}(X,Y)=\rho$，

$$
D(aX+bY)=a^2+b^2+2ab\rho=1+2ab\rho.
$$

在 $a^2+b^2=1$ 下，$|2ab|\le1$，故最大值为 $1+|\rho|$。
+++

## 09

1. 设 $X_1,X_2,\cdots,X_{20}$ 是来自总体 $B(1,0.1)$ 的简单随机样本，记 $T=\sum_{i=1}^{20}X_i$。利用泊松分布近似二项分布，可得 $P\{T\le1\}\approx$（　）{.quiz .no-index}
    - $\dfrac{1}{e^2}$.
    - $\dfrac{2}{e^2}$.
    - $\dfrac{3}{e^2}$. {.correct}
    - $\dfrac{4}{e^2}$.
{.options}

+++ 答案与解析
正确答案：`C`.

$T\sim B(20,0.1)$，用泊松分布近似时参数 $\lambda=np=2$。因此

$$
P\{T\le1\}\approx P\{Z=0\}+P\{Z=1\}=e^{-2}+2e^{-2}=\frac{3}{e^2}.
$$
+++

## 10

1. 设 $X_1,X_2,\cdots,X_n$ 为来自正态总体 $N(\mu,2)$ 的简单随机样本，记 $\overline X=\frac1n\sum_{i=1}^nX_i$，$\overline x$ 为 $\overline X$ 的观察值，$z_\alpha$ 表示标准正态分布的上侧 $\alpha$ 分位数。假设检验问题 $H_0:\mu\le1,\ H_1:\mu>1$ 的显著性水平为 $\alpha$ 的拒绝域为（　）{.quiz .no-index}
    - $\left\{(x_1,\cdots,x_n)\mid \overline x>1+\frac{2}{n}z_\alpha\right\}$.
    - $\left\{(x_1,\cdots,x_n)\mid \overline x>1+\frac{\sqrt2}{n}z_\alpha\right\}$.
    - $\left\{(x_1,\cdots,x_n)\mid \overline x>1+\frac{2}{\sqrt n}z_\alpha\right\}$.
    - $\left\{(x_1,\cdots,x_n)\mid \overline x>1+\sqrt{\frac2n}z_\alpha\right\}$. {.correct}
{.options}

+++ 答案与解析
正确答案：`D`.

这是方差已知的右侧检验，检验统计量为

$$
Z=\frac{\overline X-1}{\sqrt{2/n}}.
$$

显著性水平为 $\alpha$ 时拒绝域为 $Z>z_\alpha$，即

$$
\overline x>1+\sqrt{\frac2n}z_\alpha.
$$
+++

# 填空题

11～16 小题，每小题 5 分，共 30 分。

## 11

求极限 $\displaystyle\lim_{x\to0^+}\frac{\ln x\cdot\ln(1-x)}{x^x-1}=$ ____________。

+++ 答案与解析
答案：$-1$.

当 $x\to0^+$ 时，$\ln(1-x)\sim -x$，且

$$
x^x-1=e^{x\ln x}-1\sim x\ln x.
$$

因此原式等价于

$$
\frac{\ln x\cdot(-x)}{x\ln x}=-1.
$$
+++

## 12

已知函数

$$
f(x)=
\begin{cases}
0,&0\le x<\frac12,\\
x^2,&\frac12\le x\le1
\end{cases}
$$

的傅里叶正弦级数为 $\displaystyle\sum_{n=1}^{\infty}b_n\sin n\pi x$，$S(x)$ 为该级数的和函数，则 $S\left(-\frac72\right)=$ ____________。

+++ 答案与解析
答案：$\dfrac18$.

正弦级数的和函数按周期 $2$ 延拓，且在间断点取左右极限平均值。由于

$$
S\left(-\frac72\right)=S\left(\frac12\right),
$$

而 $x=\frac12$ 处左右极限分别为 $0$ 与 $\frac14$，故

$$
S\left(\frac12\right)=\frac{0+\frac14}{2}=\frac18.
$$
+++

## 13

设 $u(x,y,z)=xy^2z^3$，$\boldsymbol n=(2,2,-1)$，则 $\displaystyle\frac{\partial u}{\partial \boldsymbol n}\bigg|_{(1,1,1)}=$ ____________。

+++ 答案与解析
答案：$1$.

单位方向向量为

$$
\boldsymbol e=\frac{(2,2,-1)}{\sqrt{4+4+1}}=\left(\frac23,\frac23,-\frac13\right).
$$

又

$$
\nabla u=(y^2z^3,2xyz^3,3xy^2z^2),
$$

所以 $\nabla u(1,1,1)=(1,2,3)$，方向导数为

$$
(1,2,3)\cdot\left(\frac23,\frac23,-\frac13\right)=1.
$$
+++

## 14

已知有向曲线 $L$ 是沿抛物线 $y=1-x^2$ 从点 $(1,0)$ 到点 $(-1,0)$ 的一段，则曲线积分

$$
\int_L (y+\cos x)\,dx+(2x+\cos y)\,dy=
$$

____________。

+++ 答案与解析
答案：$\dfrac43-2\sin1$.

补上线段 $L_0:y=0$，方向从 $(-1,0)$ 到 $(1,0)$，则 $L\cup L_0$ 围成正向闭曲线。设 $P=y+\cos x$，$Q=2x+\cos y$，则

$$
\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=2-1=1.
$$

区域面积为

$$
\int_{-1}^{1}(1-x^2)\,dx=\frac43.
$$

而

$$
\int_{L_0}P\,dx+Q\,dy=\int_{-1}^{1}\cos x\,dx=2\sin1.
$$

故所求积分为 $\frac43-2\sin1$。
+++

## 15

设矩阵

$$
A=\begin{pmatrix}
4&a&b\\
2&3&5\\
-3&-4&-7
\end{pmatrix}.
$$

若方程组 $A^2x=0$ 与 $Ax=0$ 不同解，则 $a-b=$ ____________。

+++ 答案与解析
答案：$-4$.

要使 $A^2x=0$ 与 $Ax=0$ 不同解，必要地 $A$ 不可逆，故 $|A|=0$。计算行列式：

$$
\begin{aligned}
|A|
&=\begin{vmatrix}
4&a&b\\
2&3&5\\
-3&-4&-7
\end{vmatrix}\\
&=\begin{vmatrix}
4&a&b\\
2&3&5\\
-1&-1&-2
\end{vmatrix}
=\begin{vmatrix}
4&a&b\\
0&1&1\\
-1&-1&-2
\end{vmatrix}\\
&=4(-2+1)-(a-b).
\end{aligned}
$$

令 $|A|=0$，得 $a-b=-4$。
+++

## 16

设事件 $A,B$ 相互独立且互不相等，$P(A)=2P(B)$，$P(A\cup B)=\dfrac58$。已知 $A,B$ 至少有一个发生，则恰有一个发生的概率为 ____________。

+++ 答案与解析
答案：$\dfrac45$.

设 $P(B)=p$，则 $P(A)=2p$。由独立性，

$$
P(A\cup B)=2p+p-2p^2=\frac58.
$$

解得 $p=\frac14$ 或 $p=\frac54$，取 $p=\frac14$。于是

$$
P(A\triangle B)=P(A)+P(B)-2P(AB)=\frac12+\frac14-2\cdot\frac18=\frac12.
$$

所求条件概率为

$$
\frac{P(A\triangle B)}{P(A\cup B)}
=\frac{\frac12}{\frac58}=\frac45.
$$
+++

# 解答题

17～22 小题，共 70 分。解答应写出文字说明、证明过程或演算步骤。

## 17

（本题满分 10 分）计算 $\displaystyle\int_0^1\frac{dx}{(x+1)(x^2-2x+2)}$。

+++ 答案与解析
答案：$\dfrac{3}{10}\ln2+\dfrac{\pi}{10}$.

作部分分式分解：

$$
\frac{1}{(x+1)(x^2-2x+2)}
=\frac{1}{5(x+1)}+\frac{-x+3}{5(x^2-2x+2)}.
$$

因此

$$
\begin{aligned}
I
&=\int_0^1\left[\frac{1}{5(x+1)}+\frac{-x+3}{5(x^2-2x+2)}\right]dx\\
&=\frac15\ln(1+x)\bigg|_0^1
-\frac1{10}\ln(x^2-2x+2)\bigg|_0^1
+\frac25\arctan(x-1)\bigg|_0^1\\
&=\frac{3}{10}\ln2+\frac{\pi}{10}.
\end{aligned}
$$
+++

## 18

（本题满分 12 分）已知函数 $f(u)$ 在区间 $(0,+\infty)$ 内具有二阶导数，记 $g(x,y)=f\left(\frac{x}{y}\right)$。若 $g(x,y)$ 满足

$$
x^2\frac{\partial^2g}{\partial x^2}
+xy\frac{\partial^2g}{\partial x\partial y}
+y^2\frac{\partial^2g}{\partial y^2}=1,
$$

且 $g(x,x)=1$，$\displaystyle\frac{\partial g}{\partial x}(x,x)=\frac2x$，求 $f(u)$。

+++ 答案与解析
答案：$f(u)=\dfrac12\ln^2u+2\ln u+1$.

令 $u=\frac{x}{y}$。由链式法则代入题设偏微分方程，可化为

$$
u^2f''(u)+uf'(u)=1.
$$

令 $p=f'(u)$，得

$$
p'+\frac1u p=\frac1{u^2}.
$$

解得

$$
p=\frac{\ln u+C}{u}.
$$

由 $g(x,x)=f(1)=1$，以及

$$
g_x(x,x)=\frac{f'(1)}{x}=\frac2x,
$$

得 $f'(1)=2$，所以 $C=2$。积分得

$$
f(u)=\frac12\ln^2u+2\ln u+C_1.
$$

再由 $f(1)=1$ 得 $C_1=1$。
+++

## 19

（本题满分 12 分）设函数 $f(x)$ 在区间 $(a,b)$ 内可导。证明：导函数 $f'(x)$ 在 $(a,b)$ 内严格单调增加的充分必要条件是：对 $(a,b)$ 内任意 $x_1<x_2<x_3$，有

$$
\frac{f(x_2)-f(x_1)}{x_2-x_1}
<
\frac{f(x_3)-f(x_2)}{x_3-x_2}.
$$

+++ 答案与解析
证明如下.

必要性：若 $f'(x)$ 严格单调增加，则由拉格朗日中值定理，存在

$$
\xi_1\in(x_1,x_2),\qquad \xi_2\in(x_2,x_3),
$$

使

$$
\frac{f(x_2)-f(x_1)}{x_2-x_1}=f'(\xi_1),\qquad
\frac{f(x_3)-f(x_2)}{x_3-x_2}=f'(\xi_2).
$$

由于 $\xi_1<\xi_2$，故 $f'(\xi_1)<f'(\xi_2)$，必要性成立。

充分性：任取 $s<t$。由题设，对任意 $s<x<t$，

$$
\frac{f(x)-f(s)}{x-s}
<
\frac{f(t)-f(x)}{t-x}.
$$

令 $x\to s^+$，得

$$
f'(s)\le \frac{f(t)-f(s)}{t-s}.
$$

令 $x\to t^-$，得

$$
\frac{f(t)-f(s)}{t-s}\le f'(t).
$$

结合严格割线斜率条件，可推出 $f'(s)<f'(t)$，故 $f'(x)$ 在 $(a,b)$ 内严格单调增加。
+++

## 20

（本题满分 12 分）设 $\Sigma$ 是由直线

$$
\begin{cases}
x=0,\\
y=0
\end{cases}
$$

绕直线 $x=t,\ y=t,\ z=t$（$t$ 为参数）旋转一周得到的曲面，$\Sigma_1$ 是 $\Sigma$ 介于平面 $x+y+z=0$ 与平面 $x+y+z=1$ 之间部分的外侧。计算曲面积分

$$
I=\iint_{\Sigma_1}x\,dy\,dz+(y+1)\,dz\,dx+(z+2)\,dx\,dy.
$$

+++ 答案与解析
答案：$-\dfrac{2\sqrt3}{3}\pi$.

旋转曲面为圆锥面

$$
xy+yz+zx=0.
$$

记 $\boldsymbol F=(x,y+1,z+2)$，则 $\operatorname{div}\boldsymbol F=3$。补上平面 $x+y+z=1$ 上的截面 $S_1$ 与 $x+y+z=\varepsilon$ 上的截面 $S_\varepsilon$，对封闭曲面使用高斯公式，最后令 $\varepsilon\to0^+$。

作正交变换

$$
u=\frac{x+y+z}{\sqrt3},\quad
v=\frac{x-y}{\sqrt2},\quad
w=\frac{x+y-2z}{\sqrt6},
$$

圆锥面化为 $v^2+w^2=2u^2$。对应截锥体体积在极限下为

$$
V=\int_0^{1/\sqrt3}2\pi u^2\,du=\frac{2\pi}{9\sqrt3}.
$$

上截面 $S_1$ 的通量为

$$
\frac{4}{\sqrt3}\cdot\frac{2\pi}{3}
=\frac{8\pi}{3\sqrt3}.
$$

下截面在 $\varepsilon\to0^+$ 时通量趋于 $0$。因此

$$
I=3V-\frac{8\pi}{3\sqrt3}
=\frac{2\pi}{3\sqrt3}-\frac{8\pi}{3\sqrt3}
=-\frac{2\pi}{\sqrt3}
=-\frac{2\sqrt3}{3}\pi.
$$
+++

## 21

（本题满分 12 分）设矩阵

$$
A=\begin{pmatrix}
0&-1&-1\\
-1&0&-1\\
2&2&a
\end{pmatrix},
$$

已知 $1$ 是 $A$ 的特征多项式的重根。

（1）求 $a$ 的值；

（2）求所有满足 $A\alpha=\alpha+\beta$，$A^2\alpha=\alpha+2\beta$ 的非零列向量 $\alpha,\beta$。

+++ 答案与解析
（1）$a=3$.

特征多项式为

$$
|A-\lambda E|=(1-\lambda)\big[(\lambda-a)(\lambda+1)+4\big].
$$

因为 $1$ 是重根，代入括号项得

$$
(1-a)(1+1)+4=0,
$$

故 $a=3$。

（2）当 $a=3$ 时，

$$
A-E=
\begin{pmatrix}
-1&-1&-1\\
-1&-1&-1\\
2&2&2
\end{pmatrix},
\qquad (A-E)^2=0.
$$

由 $A\alpha=\alpha+\beta$ 得 $\beta=(A-E)\alpha$；由 $A^2\alpha=\alpha+2\beta$ 得 $(A-E)^2\alpha=0$，对任意 $\alpha$ 均成立。

设

$$
\alpha=(a_1,a_2,a_3)^T.
$$

则

$$
\beta=(A-E)\alpha
=(2a_3-a_1-a_2)(1,1,1)^T.
$$

由于要求 $\alpha,\beta$ 均为非零列向量，因此

$$
(a_1,a_2,a_3)\ne(0,0,0),\qquad a_1+a_2\ne2a_3.
$$

故全部解为

$$
\alpha=(a_1,a_2,a_3)^T,\qquad
\beta=(2a_3-a_1-a_2,\,2a_3-a_1-a_2,\,2a_3-a_1-a_2)^T,
$$

其中 $(a_1,a_2,a_3)\ne(0,0,0)$ 且 $a_1+a_2\ne2a_3$。
+++

## 22

（本题满分 12 分）投保人的损失事件发生时，保险公司的赔付额 $Y$ 与投保人的损失额 $X$ 的关系为

$$
Y=
\begin{cases}
0,&X\le100,\\
X-100,&X>100.
\end{cases}
$$

设定损事件发生时，投保人的损失额 $X$ 的概率密度为

$$
f(x)=
\begin{cases}
\dfrac{2\times100^2}{(100+x)^3},&x>0,\\
0,&x\le0.
\end{cases}
$$

（1）求 $P\{Y>0\}$ 及 $EY$。

（2）这种损失事件在一年内发生的次数记为 $N$，保险公司在一年内就这种损失事件产生的理赔次数记为 $M$。假设 $N$ 服从参数为 $8$ 的泊松分布，在 $N=n$（$n\ge1$）的条件下，$M$ 服从二项分布 $B(n,p)$，其中 $p=P\{Y>0\}$，求 $M$ 的概率分布。

+++ 答案与解析
（1）$P\{Y>0\}=\dfrac14$，$EY=50$.

由于 $Y>0\iff X>100$，

$$
P\{Y>0\}
=\int_{100}^{+\infty}\frac{2\times100^2}{(100+x)^3}\,dx
=\frac14.
$$

又

$$
EY=\int_{100}^{+\infty}(x-100)\frac{2\times100^2}{(100+x)^3}\,dx=50.
$$

（2）由（1）知 $p=\frac14$。对 $m=0,1,2,\cdots$，

$$
\begin{aligned}
P\{M=m\}
&=\sum_{n=m}^{\infty}P\{N=n\}P\{M=m\mid N=n\}\\
&=\sum_{n=m}^{\infty}\frac{8^n}{n!}e^{-8}\binom{n}{m}
\left(\frac14\right)^m\left(\frac34\right)^{n-m}\\
&=\frac{2^m}{m!}e^{-8}\sum_{n=m}^{\infty}\frac{6^{n-m}}{(n-m)!}\\
&=\frac{2^m}{m!}e^{-8}e^6
=\frac{2^m}{m!}e^{-2}.
\end{aligned}
$$

因此

$$
M\sim P(2).
$$
+++
