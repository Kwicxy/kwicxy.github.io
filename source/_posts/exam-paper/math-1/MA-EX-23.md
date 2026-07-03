---
layout: post
title: 2023 年考研数学一真题
math: true
quiz: true
copyright: false
date: 2026-07-02 08:00:00
categories:
  - 试卷真题
  - 数学一
tags:
  - 考研数学
  - 数学一
  - 2023 年真题
---

# 2023 年考研数学一真题

# 选择题

1～10 小题，每小题 5 分，共 50 分。下列每题给出的四个选项中，只有一个选项符合题目要求。

## 01

1. 曲线 $y=x\ln\left(e+\dfrac{1}{x-1}\right)$ 的渐近线方程为（　）{.quiz .no-index}
    - $y=x+e$.
    - $y=x+\dfrac{1}{e}$. {.correct}
    - $y=x$.
    - $y=x-\dfrac{1}{e}$.
{.options}

+++ 答案与解析
正确答案：`B`.

斜渐近线设为 $y=kx+b$。有

$$
k=\lim_{x\to\infty}\frac{y}{x}
=\lim_{x\to\infty}\ln\left(e+\frac{1}{x-1}\right)=1.
$$

截距为

$$
b=\lim_{x\to\infty}\left[x\ln\left(e+\frac{1}{x-1}\right)-x\right]
=\lim_{x\to\infty}x\ln\left(1+\frac{1}{e(x-1)}\right)=\frac{1}{e}.
$$

故渐近线为 $y=x+\dfrac{1}{e}$。
+++

## 02

1. 若微分方程 $y''+ay'+by=0$ 的解在 $(-\infty,+\infty)$ 上有界，则（　）{.quiz .no-index}
    - $a<0,\ b>0$.
    - $a>0,\ b>0$.
    - $a=0,\ b>0$. {.correct}
    - $a=0,\ b<0$.
{.options}

+++ 答案与解析
正确答案：`C`.

特征方程为 $\lambda^2+a\lambda+b=0$。若有实根，通解含指数项或 $xe^{\lambda x}$ 项，一般不能在整个实轴上有界。

要使所有解为有界振荡形式，应有共轭纯虚根 $\lambda=\pm \beta i$，即

$$
a=0,\qquad b=\beta^2>0.
$$
+++

## 03

1. 设函数 $y=f(x)$ 由参数方程 $\begin{cases}x=2t+|t|,\\ y=|t|\sin t\end{cases}$ 确定，则（　）{.quiz .no-index}
    - $f(x)$ 连续，$f'(0)$ 不存在.
    - $f'(0)$ 存在，$f'(x)$ 在 $x=0$ 处不连续.
    - $f'(x)$ 连续，$f''(0)$ 不存在. {.correct}
    - $f''(0)$ 存在，$f''(x)$ 在 $x=0$ 处不连续.
{.options}

+++ 答案与解析
正确答案：`C`.

由参数方程可得

$$
f(x)=
\begin{cases}
\dfrac{x}{3}\sin\dfrac{x}{3}, & x\ge0,\\
-x\sin x, & x<0.
\end{cases}
$$

于是 $f$ 在 $0$ 处连续，且 $f'(0)=0$，左右导数极限也同为 $0$，所以 $f'(x)$ 在 $0$ 处连续。

但二阶导数在 $0$ 处左右极限不同，故 $f''(0)$ 不存在。
+++

## 04

1. 已知 $a_n<b_n\ (n=1,2,\cdots)$，若级数 $\displaystyle\sum_{n=1}^{\infty}a_n$ 与 $\displaystyle\sum_{n=1}^{\infty}b_n$ 均收敛，则“级数 $\displaystyle\sum_{n=1}^{\infty}a_n$ 绝对收敛”是“级数 $\displaystyle\sum_{n=1}^{\infty}b_n$ 绝对收敛”的（　）{.quiz .no-index}
    - 充分必要条件. {.correct}
    - 充分不必要条件.
    - 必要不充分条件.
    - 既不充分也不必要条件.
{.options}

+++ 答案与解析
正确答案：`A`.

因为 $b_n-a_n>0$，且

$$
\sum_{n=1}^{\infty}(b_n-a_n)
=\sum_{n=1}^{\infty}b_n-\sum_{n=1}^{\infty}a_n
$$

收敛，所以 $\sum (b_n-a_n)$ 绝对收敛。

若 $\sum a_n$ 绝对收敛，则由

$$
|b_n|\le |b_n-a_n|+|a_n|
$$

知 $\sum b_n$ 绝对收敛；反向同理由

$$
|a_n|\le |a_n-b_n|+|b_n|
$$

得到。因此二者互为充要条件。
+++

## 05

1. 已知 $n$ 阶矩阵 $A,B,C$ 满足 $ABC=O$，$E$ 为 $n$ 阶单位矩阵。记矩阵 $\begin{pmatrix}O&BC\\ A&E\end{pmatrix}$、$\begin{pmatrix}A&B&O\\ C&E&O\end{pmatrix}$、$\begin{pmatrix}E&A&B\\ A&B&O\end{pmatrix}$ 的秩分别为 $r_1,r_2,r_3$，则（　）{.quiz .no-index}
    - $r_1\le r_2\le r_3$.
    - $r_1\le r_3\le r_2$. {.correct}
    - $r_3\le r_1\le r_2$.
    - $r_2\le r_1\le r_3$.
{.options}

+++ 答案与解析
正确答案：`B`.

由初等变换和 $ABC=O$ 可得

$$
r_1=n,\qquad r_2=n+r(AB),\qquad r_3=n+r(ABAB).
$$

又 $r(ABAB)\le r(AB)$，故

$$
r_1\le r_3\le r_2.
$$
+++

## 06

1. 下列矩阵不能相似于对角矩阵的是（　）{.quiz .no-index}
    - $\begin{pmatrix}1&0&0\\1&2&0\\a&2&3\end{pmatrix}$.
    - $\begin{pmatrix}1&1&a\\1&2&0\\a&0&3\end{pmatrix}$.
    - $\begin{pmatrix}1&0&0\\1&2&0\\a&0&2\end{pmatrix}$.
    - $\begin{pmatrix}1&0&0\\1&2&0\\a&2&2\end{pmatrix}$. {.correct}
{.options}

+++ 答案与解析
正确答案：`D`.

A 的特征值互异，故可对角化；B 是实对称矩阵，必可正交相似对角化；C 对二重特征值 $2$ 有两个线性无关特征向量，也可对角化。

D 中特征值 $2$ 的代数重数为 $2$，但对应特征子空间维数不足 $2$，因此不能相似于对角矩阵。
+++

## 07

1. 已知 $\alpha_1=(1,2,3)^T$，$\alpha_2=(2,1,1)^T$，$\beta_1=(2,5,9)^T$，$\beta_2=(1,0,1)^T$。若 $\gamma$ 既可由 $\alpha_1,\alpha_2$ 线性表示，也可由 $\beta_1,\beta_2$ 线性表示，则 $\gamma=$（　）{.quiz .no-index}
    - $k(3,3,4)^T,\ k\in\mathbb R$.
    - $k(3,5,10)^T,\ k\in\mathbb R$.
    - $k(-1,1,2)^T,\ k\in\mathbb R$.
    - $k(1,5,8)^T,\ k\in\mathbb R$. {.correct}
{.options}

+++ 答案与解析
正确答案：`D`.

设

$$
\gamma=k_1\alpha_1+k_2\alpha_2=t_1\beta_1+t_2\beta_2.
$$

比较三个分量得线性方程组，解得 $k_1=-3k_2$。于是

$$
\gamma=-3k_2\alpha_1+k_2\alpha_2
=k_2(-1,-5,-8)^T
=k(1,5,8)^T.
$$
+++

## 08

1. 设随机变量 $X$ 服从参数为 $1$ 的泊松分布，则 $E(|X-EX|)=$（　）{.quiz .no-index}
    - $\dfrac{1}{e}$.
    - $\dfrac{1}{2}$.
    - $\dfrac{2}{e}$. {.correct}
    - $1$.
{.options}

+++ 答案与解析
正确答案：`C`.

由 $X\sim P(1)$，有 $EX=1$，且 $P\{X=k\}=e^{-1}/k!$。因此

$$
E|X-1|
=e^{-1}+\sum_{k=2}^{\infty}(k-1)\frac{e^{-1}}{k!}
=\frac{2}{e}.
$$
+++

## 09

1. 设 $X_1,\cdots,X_n$ 为来自总体 $N(\mu,\sigma^2)$ 的简单随机样本，$Y_1,\cdots,Y_m$ 为来自总体 $N(\mu,2\sigma^2)$ 的简单随机样本，且两样本相互独立。记 $S_1^2,S_2^2$ 分别为两样本方差，则（　）{.quiz .no-index}
    - $\dfrac{S_2^2}{S_1^2}\sim F(n,m)$.
    - $\dfrac{S_2^2}{S_1^2}\sim F(n-1,m-1)$.
    - $\dfrac{S_2^2}{2S_1^2}\sim F(n,m)$.
    - $\dfrac{S_2^2}{2S_1^2}\sim F(m-1,n-1)$. {.correct}
{.options}

+++ 答案与解析
正确答案：`D`.

由正态总体样本方差性质，

$$
\frac{(n-1)S_1^2}{\sigma^2}\sim \chi^2(n-1),\qquad
\frac{(m-1)S_2^2}{2\sigma^2}\sim \chi^2(m-1).
$$

两样本独立，所以

$$
\frac{S_2^2}{2S_1^2}\sim F(m-1,n-1)
$$
+++

## 10

1. 设 $X_1,X_2$ 为来自总体 $N(\mu,\sigma^2)$ 的简单随机样本，其中 $\sigma>0$ 是未知参数。若 $\hat\sigma=a|X_1-X_2|$ 为 $\sigma$ 的无偏估计，则 $a=$（　）{.quiz .no-index}
    - $\dfrac{\sqrt{\pi}}{2}$. {.correct}
    - $\dfrac{\sqrt{2\pi}}{2}$.
    - $\sqrt{\pi}$.
    - $\sqrt{2\pi}$.
{.options}

+++ 答案与解析
正确答案：`A`.

因为 $X_1-X_2\sim N(0,2\sigma^2)$，所以

$$
E|X_1-X_2|=\sqrt{2}\sigma\cdot\sqrt{\frac{2}{\pi}}=\frac{2\sigma}{\sqrt{\pi}}.
$$

由 $E\hat\sigma=\sigma$ 得

$$
a\cdot\frac{2\sigma}{\sqrt{\pi}}=\sigma,\qquad a=\frac{\sqrt{\pi}}{2}.
$$
+++

# 填空题

11～16 小题，每小题 5 分，共 30 分。

## 11

当 $x\to0$ 时，函数 $f(x)=ax+bx^2+\ln(1+x)$ 与 $g(x)=e^{x^2}-\cos x$ 是等价无穷小，则 $ab=$ __________。

+++ 答案与解析
答案：$-2$.

展开得

$$
e^{x^2}-\cos x=\frac{3}{2}x^2+o(x^2),
$$

而

$$
ax+bx^2+\ln(1+x)=(a+1)x+\left(b-\frac12\right)x^2+o(x^2).
$$

要等价，需 $a+1=0$ 且 $b-\frac12=\frac32$，故 $a=-1,\ b=2$，从而 $ab=-2$。
+++

## 12

曲面 $z=x+2y+\ln(1+x^2+y^2)$ 在点 $(0,0,0)$ 处的切平面方程为 __________。

+++ 答案与解析
答案：$x+2y-z=0$.

令

$$
F(x,y,z)=x+2y+\ln(1+x^2+y^2)-z.
$$

则

$$
\nabla F(0,0,0)=(1,2,-1),
$$

所以切平面为 $x+2y-z=0$。
+++

## 13

设 $f(x)$ 是周期为 $2$ 的周期函数，且 $f(x)=1-x,\ x\in[0,1]$。若 $f(x)=\dfrac{a_0}{2}+\displaystyle\sum_{n=1}^{\infty}a_n\cos n\pi x$，则 $\displaystyle\sum_{n=1}^{\infty}a_{2n}=$ __________。

+++ 答案与解析
答案：$0$.

由余弦系数公式，

$$
a_n=2\int_0^1(1-x)\cos n\pi x\,dx
=\frac{2(1-\cos n\pi)}{n^2\pi^2}.
$$

当 $n$ 为偶数时，$\cos n\pi=1$，所以 $a_{2n}=0$，故级数和为 $0$。
+++

## 14

设连续函数 $f(x)$ 满足 $f(x+2)-f(x)=x$，$\displaystyle\int_0^2f(x)\,dx=0$，则 $\displaystyle\int_1^3f(x)\,dx=$ __________。

+++ 答案与解析
答案：$\dfrac12$.

有

$$
\begin{aligned}
\int_1^3 f(x)\,dx
&=\int_1^2 f(x)\,dx+\int_2^3 f(x)\,dx\\
&=\int_1^2 f(x)\,dx+\int_0^1 f(x+2)\,dx\\
&=\int_0^2 f(x)\,dx+\int_0^1 x\,dx\\
&=\frac12.
\end{aligned}
$$
+++

## 15

已知向量

$$
\alpha_1=(1,0,1,1)^T,\quad
\alpha_2=(-1,-1,0,1)^T,\quad
\alpha_3=(0,1,-1,1)^T,
$$

$$
\beta=(1,1,1,-1)^T,\qquad
\gamma=k_1\alpha_1+k_2\alpha_2+k_3\alpha_3.
$$

若 $\gamma^T\alpha_i=\beta^T\alpha_i\ (i=1,2,3)$，则 $k_1^2+k_2^2+k_3^2=$ __________。

+++ 答案与解析
答案：$\dfrac{11}{9}$.

三向量 $\alpha_1,\alpha_2,\alpha_3$ 两两正交，且模平方均为 $3$。因此

$$
3k_i=\beta^T\alpha_i.
$$

计算得

$$
k_1=\frac13,\qquad k_2=-1,\qquad k_3=-\frac13.
$$

所以

$$
k_1^2+k_2^2+k_3^2=\frac{1}{9}+1+\frac{1}{9}=\frac{11}{9}.
$$
+++

## 16

设随机变量 $X$ 与 $Y$ 相互独立，且 $X\sim B\left(1,\dfrac13\right)$，$Y\sim B\left(2,\dfrac12\right)$，则 $P\{X=Y\}=$ __________。

+++ 答案与解析
答案：$\dfrac13$.

$X$ 只可能取 $0,1$，所以

$$
\begin{aligned}
P\{X=Y\}
&=P\{X=0,Y=0\}+P\{X=1,Y=1\}\\
&=\frac23\cdot\left(\frac12\right)^2+\frac13\cdot {2\choose1}\left(\frac12\right)^2\\
&=\frac13.
\end{aligned}
$$
+++

# 解答题

17～22 小题，共 70 分。解答应写出文字说明、证明过程或演算步骤。

## 17

（本题满分 10 分）设曲线 $y=y(x)\ (x>0)$ 经过点 $(1,2)$，该曲线上任一点 $P(x,y)$ 到 $y$ 轴的距离等于该点处的切线在 $y$ 轴上的截距。

（1）求 $y(x)$；

（2）求函数 $f(x)=\displaystyle\int_1^x y(t)\,dt$ 在 $(0,+\infty)$ 上的最大值。

+++ 答案与解析
答案：（1）$y=x(2-\ln x)$；（2）最大值为 $\dfrac{e^4-5}{4}$.

曲线在 $P(x,y)$ 处的切线为

$$
Y-y=y'(X-x).
$$

令 $X=0$，切线在 $y$ 轴上的截距为 $y-xy'$。题设给出

$$
x=y-xy',
$$

即

$$
y'-\frac{1}{x}y=-1.
$$

解得 $y=x(C-\ln x)$。由 $y(1)=2$ 得 $C=2$，故

$$
y=x(2-\ln x).
$$

于是

$$
f'(x)=x(2-\ln x).
$$

当 $0<x<e^2$ 时 $f'(x)>0$，当 $x>e^2$ 时 $f'(x)<0$，故最大值在 $x=e^2$ 处取得：

$$
f(e^2)=\int_1^{e^2}t(2-\ln t)\,dt=\frac{e^4-5}{4}.
$$
+++

## 18

（本题满分 12 分）求函数 $f(x,y)=(y-x^2)(y-x^3)$ 的极值。

+++ 答案与解析
答案：极小值为 $-\dfrac{4}{729}$.

先求驻点。由

$$
f_y=2y-x^2-x^3=0,
$$

得 $y=\dfrac{x^2+x^3}{2}$。再代入 $f_x=0$，可得

$$
x=0,\quad x=1,\quad x=\frac23.
$$

对应驻点为

$$
(0,0),\qquad (1,1),\qquad \left(\frac23,\frac{10}{27}\right).
$$

对 $(0,0)$，沿 $y=x^2+kx^3$ 有 $f(x,y)=kx^5$，邻域内可正可负，故不是极值点。

对 $(1,1)$，Hessian 判别式小于 $0$，不是极值点。

对 $\left(\dfrac23,\dfrac{10}{27}\right)$，Hessian 判别式大于 $0$ 且 $f_{xx}>0$，故为极小值点，极小值为

$$
f\left(\frac23,\frac{10}{27}\right)
=\left(\frac{10}{27}-\frac49\right)
\left(\frac{10}{27}-\frac{8}{27}\right)
=-\frac{4}{729}.
$$
+++

## 19

（本题满分 12 分）设空间有界区域 $\Omega$ 由柱面 $x^2+y^2=1$ 与平面 $z=0$ 和 $x+z=1$ 围成，$\Sigma$ 为 $\Omega$ 的边界曲面的外侧。计算曲面积分

$$
I=\iint_{\Sigma}2xz\,dy\,dz+xz\cos y\,dz\,dx+3yz\sin x\,dx\,dy.
$$

+++ 答案与解析
答案：$\dfrac{5\pi}{4}$.

由高斯公式，

$$
I=\iiint_{\Omega}(2z-xz\sin y+3y\sin x)\,dV.
$$

区域关于 $y$ 对称，且 $xz\sin y$、$y\sin x$ 对 $y$ 为奇函数，故对应积分为 $0$。于是

$$
I=\iiint_{\Omega}2z\,dV.
$$

在圆域 $D:x^2+y^2\le1$ 上，$0\le z\le1-x$，所以

$$
\begin{aligned}
I
&=\iint_D\int_0^{1-x}2z\,dz\,dx\,dy\\
&=\iint_D(1-x)^2\,dx\,dy\\
&=\iint_D(1-2x+x^2)\,dx\,dy\\
&=\pi+\iint_Dx^2\,dx\,dy
=\pi+\frac{\pi}{4}
=\frac{5\pi}{4}.
\end{aligned}
$$
+++

## 20

（本题满分 12 分）设函数 $f(x)$ 在 $[-a,a]$ 上具有 2 阶连续导数。证明：

（1）若 $f(0)=0$，则存在 $\xi\in(-a,a)$，使得

$$
f''(\xi)=\frac{f(a)+f(-a)}{a^2};
$$

（2）若 $f(x)$ 在 $(-a,a)$ 内取得极值，则存在 $\eta\in(-a,a)$，使得

$$
|f''(\eta)|\ge \frac{1}{2a^2}|f(a)-f(-a)|.
$$

+++ 答案与解析
证明如下.

（1）由 Taylor 公式，

$$
f(a)=af'(0)+\frac{a^2}{2}f''(\eta_1),\qquad
f(-a)=-af'(0)+\frac{a^2}{2}f''(\eta_2),
$$

其中 $\eta_1\in(0,a)$，$\eta_2\in(-a,0)$。两式相加得

$$
f(a)+f(-a)=\frac{a^2}{2}\left[f''(\eta_1)+f''(\eta_2)\right].
$$

因 $f''$ 连续，由介值定理，存在 $\xi\in(\eta_2,\eta_1)\subset(-a,a)$，使

$$
f''(\xi)=\frac{f''(\eta_1)+f''(\eta_2)}{2}.
$$

故

$$
f''(\xi)=\frac{f(a)+f(-a)}{a^2}.
$$

（2）设 $f$ 在 $x_0\in(-a,a)$ 处取得极值，则 $f'(x_0)=0$。由 Taylor 公式，

$$
f(a)=f(x_0)+\frac{(a-x_0)^2}{2}f''(\gamma_1),
$$

$$
f(-a)=f(x_0)+\frac{(-a-x_0)^2}{2}f''(\gamma_2),
$$

其中 $\gamma_1,\gamma_2\in(-a,a)$。令

$$
M=\max\{|f''(\gamma_1)|,\ |f''(\gamma_2)|\}.
$$

则

$$
|f(a)-f(-a)|
\le \frac{M}{2}\left[(a-x_0)^2+(a+x_0)^2\right]
=M(a^2+x_0^2)<2Ma^2.
$$

故

$$
M\ge \frac{1}{2a^2}|f(a)-f(-a)|.
$$

取使 $M$ 达到的点为 $\eta$，即得结论。
+++

## 21

（本题满分 12 分）已知二次型

$$
f(x_1,x_2,x_3)=x_1^2+2x_2^2+2x_3^2+2x_1x_2-2x_1x_3,
$$

$$
g(y_1,y_2,y_3)=y_1^2+y_2^2+y_3^2+2y_2y_3.
$$

（1）求可逆变换 $x=Py$，将 $f(x_1,x_2,x_3)$ 化成 $g(y_1,y_2,y_3)$；

（2）是否存在正交变换 $x=Qy$，将 $f(x_1,x_2,x_3)$ 化成 $g(y_1,y_2,y_3)$？

+++ 答案与解析
答案：（1）$P=\begin{pmatrix}1&0&0\\-1&1&0\\1&0&1\end{pmatrix}$；（2）不存在正交变换.

配方得

$$
f=(x_1+x_2-x_3)^2+(x_2+x_3)^2,
$$

令

$$
z_1=x_1+x_2-x_3,\quad z_2=x_2+x_3,\quad z_3=x_3.
$$

又

$$
g=y_1^2+(y_2+y_3)^2,
$$

令

$$
z_1=y_1,\quad z_2=y_2+y_3,\quad z_3=y_3.
$$

由两组变换联立可得

$$
x=Py,\qquad
P=\begin{pmatrix}
1&0&0\\
-1&1&0\\
1&0&1
\end{pmatrix}.
$$

若存在正交变换 $x=Qy$ 使 $Q^TAQ=B$，则二次型矩阵 $A,B$ 相似，迹应相等。

但

$$
A=\begin{pmatrix}1&1&-1\\1&2&0\\-1&0&2\end{pmatrix},\qquad
B=\begin{pmatrix}1&0&0\\0&1&1\\0&1&1\end{pmatrix},
$$

且 $\operatorname{tr}(A)=5$，$\operatorname{tr}(B)=3$，矛盾。因此不存在这样的正交变换。
+++

## 22

（本题满分 12 分）设二维随机变量 $(X,Y)$ 的概率密度为

$$
f(x,y)=
\begin{cases}
\dfrac{2}{\pi}(x^2+y^2), & x^2+y^2\le1,\\
0, & \text{其他}.
\end{cases}
$$

（1）求 $X$ 与 $Y$ 的协方差；

（2）判断 $X$ 与 $Y$ 是否相互独立；

（3）求 $Z=X^2+Y^2$ 的概率密度。

+++ 答案与解析
答案：（1）$\operatorname{Cov}(X,Y)=0$；（2）$X$ 与 $Y$ 不相互独立；（3）$f_Z(z)=\begin{cases}2z,&0<z<1,\\0,&\text{其他}.\end{cases}$.

（1）由区域和密度关于 $x,y$ 的对称性，

$$
E(X)=E(Y)=0,\qquad E(XY)=0,
$$

故

$$
\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y)=0.
$$

（2）当 $-1<x<1$ 时，

$$
f_X(x)=\int_{-\sqrt{1-x^2}}^{\sqrt{1-x^2}}\frac{2}{\pi}(x^2+y^2)\,dy
=\frac{4}{\pi}\left[x^2\sqrt{1-x^2}+\frac13(1-x^2)^{3/2}\right].
$$

同理可得 $f_Y(y)$。一般有

$$
f(x,y)\ne f_X(x)f_Y(y),
$$

所以 $X$ 与 $Y$ 不相互独立。

（3）令 $Z=X^2+Y^2$。当 $0\le z<1$ 时，改用极坐标得

$$
F_Z(z)=P\{X^2+Y^2\le z\}
=\int_0^{2\pi}\int_0^{\sqrt z}\frac{2}{\pi}r^2\cdot r\,dr\,d\theta
=z^2.
$$

因此

$$
f_Z(z)=F_Z'(z)=
\begin{cases}
2z,&0<z<1,\\
0,&\text{其他}.
\end{cases}
$$
+++
