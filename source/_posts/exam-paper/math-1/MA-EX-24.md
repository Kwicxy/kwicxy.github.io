---
layout: post
title: 2024 年考研数学一真题
math: true
quiz: true
date: 2026-07-02 09:00:00
categories:
  - 试卷真题
  - 数学一
tags:
  - 考研数学
  - 数学一
  - 2024 年真题
---

# 2024 年考研数学一真题

# 选择题

1～10 小题，每小题 5 分，共 50 分。下列每题给出的四个选项中，只有一个选项符合题目要求。

## 01

1. 已知函数 $f(x)=\displaystyle\int_0^x e^{\cos t}\,dt$，$g(x)=\displaystyle\int_0^{\sin x}e^{t^2}\,dt$，则（　）{.quiz .no-index}
    - $f(x)$ 是奇函数，$g(x)$ 是偶函数.
    - $f(x)$ 是偶函数，$g(x)$ 是奇函数.
    - $f(x)$ 与 $g(x)$ 均为奇函数. {.correct}
    - $f(x)$ 与 $g(x)$ 均为周期函数.
{.options}

+++ 答案与解析
正确答案：`C`.

$e^{\cos t}$ 是偶函数，因此 $f(x)=\int_0^x e^{\cos t}\,dt$ 是奇函数。

又

$$
g'(x)=e^{\sin^2x}\cos x,
$$

而 $e^{\sin^2x}\cos x$ 是偶函数，且 $g(0)=0$，所以 $g(x)$ 是奇函数。
+++

## 02

1. 已知 $P=P(x,y,z)$，$Q=Q(x,y,z)$ 均连续，$\Sigma$ 为 $z=\sqrt{1-x^2-y^2}$，$x\le0$，$y\ge0$ 的上侧，则 $\displaystyle\iint_\Sigma P\,dy\,dz+Q\,dx\,dz=$（　）{.quiz .no-index}
    - $\displaystyle\iint_D\left(\frac{x}{z}P+\frac{y}{z}Q\right)\,dx\,dy$. {.correct}
    - $\displaystyle\iint_D\left(-\frac{x}{z}P+\frac{y}{z}Q\right)\,dx\,dy$.
    - $\displaystyle\iint_D\left(\frac{x}{z}P-\frac{y}{z}Q\right)\,dx\,dy$.
    - $\displaystyle\iint_D\left(-\frac{x}{z}P-\frac{y}{z}Q\right)\,dx\,dy$.
{.options}

+++ 答案与解析
正确答案：`A`.

上侧曲面 $z=z(x,y)$ 的投影公式为

$$
dy\,dz=-z_x\,dx\,dy,\qquad dx\,dz=-z_y\,dx\,dy.
$$

对 $z=\sqrt{1-x^2-y^2}$，有 $z_x=-\dfrac{x}{z}$，$z_y=-\dfrac{y}{z}$，故

$$
\iint_\Sigma P\,dy\,dz+Q\,dx\,dz
=\iint_D\left(\frac{x}{z}P+\frac{y}{z}Q\right)\,dx\,dy.
$$
+++

## 03

1. 已知幂级数 $\displaystyle\sum_{n=0}^{\infty}a_nx^n$ 的和函数为 $\ln(2+x)$，则 $\displaystyle\sum_{n=0}^{\infty}n a_{2n}=$（　）{.quiz .no-index}
    - $-\dfrac16$. {.correct}
    - $-\dfrac13$.
    - $\dfrac16$.
    - $\dfrac13$.
{.options}

+++ 答案与解析
正确答案：`A`.

由

$$
\ln(2+x)=\ln2+\ln\left(1+\frac{x}{2}\right)
=\ln2+\sum_{k=1}^{\infty}(-1)^{k-1}\frac{x^k}{k2^k},
$$

得

$$
a_{2n}=-\frac{1}{2n\,2^{2n}}.
$$

因此

$$
\sum_{n=0}^{\infty}n a_{2n}
=-\sum_{n=1}^{\infty}\frac{1}{2\cdot 4^n}
=-\frac12\cdot\frac{1/4}{1-1/4}
=-\frac16.
$$
+++

## 04

1. 设函数 $f(x)$ 在区间 $(-1,1)$ 上有定义，且 $\displaystyle\lim_{x\to0}f(x)=0$，则（　）{.quiz .no-index}
    - 当 $\displaystyle\lim_{x\to0}\frac{f(x)}x=m$ 时，$f'(0)=m$.
    - 当 $f'(0)=m$ 时，$\displaystyle\lim_{x\to0}\frac{f(x)}x=m$. {.correct}
    - 当 $\displaystyle\lim_{x\to0}f'(x)=m$ 时，$f'(0)=m$.
    - 当 $f'(0)=m$ 时，$\displaystyle\lim_{x\to0}f'(x)=m$.
{.options}

+++ 答案与解析
正确答案：`B`.

若 $f'(0)=m$，则 $f$ 在 $0$ 处连续。又 $\lim_{x\to0}f(x)=0$，故 $f(0)=0$，于是

$$
\lim_{x\to0}\frac{f(x)}x
=\lim_{x\to0}\frac{f(x)-f(0)}{x-0}
=f'(0)=m.
$$
+++

## 05

![三平面位置关系](https://csgraduates.com/images/math/2024_1_5.jpg)

1. 在空间直角坐标系 $O-xyz$ 中，三张平面 $\pi_i:a_ix+b_iy+c_iz=d_i$（$i=1,2,3$）的位置关系如图所示。记 $\alpha_i=(a_i,b_i,c_i)$，$\beta_i=(a_i,b_i,c_i,d_i)$，若 $r(\alpha_1,\alpha_2,\alpha_3)=m$，$r(\beta_1,\beta_2,\beta_3)=n$，则（　）{.quiz .no-index}
    - $m=1,\ n=2$.
    - $m=n=2$. {.correct}
    - $m=2,\ n=3$.
    - $m=n=3$.
{.options}

+++ 答案与解析
正确答案：`B`.

图示三平面有公共直线，因此对应线性方程组有无穷多解，故系数矩阵秩等于增广矩阵秩且小于 $3$。

又图中至少有两个平面的法向量不共线，所以 $r(\alpha_1,\alpha_2,\alpha_3)\ge2$。于是

$$
m=n=2.
$$
+++

## 06

1. 设向量 $\alpha_1=(a,1,-1,1)^T$，$\alpha_2=(1,1,b,a)^T$，$\alpha_3=(1,a,-1,1)^T$。若 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，且其中任意两个向量均线性无关，则（　）{.quiz .no-index}
    - $a=1,\ b\ne-1$.
    - $a=1,\ b=-1$.
    - $a\ne-2,\ b=2$.
    - $a=-2,\ b=2$. {.correct}
{.options}

+++ 答案与解析
正确答案：`D`.

由 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，取一个三阶子式得

$$
\begin{vmatrix}
a&1&1\\
1&1&a\\
1&a&1
\end{vmatrix}=0,
$$

解得 $a=1$ 或 $a=-2$。当 $a=1$ 时，$\alpha_1$ 与 $\alpha_3$ 线性相关，与题意矛盾，故 $a=-2$。

再由另一三阶子式

$$
\begin{vmatrix}
-2&1&1\\
1&1&-2\\
-1&b&-1
\end{vmatrix}=0
$$

可得 $b=2$。
+++

## 07

1. 设 $A$ 是秩为 $2$ 的 $3$ 阶矩阵，$\alpha$ 是满足 $A\alpha=0$ 的非零向量。若对满足 $\beta^T\alpha=0$ 的 $3$ 维列向量 $\beta$，均有 $A\beta=\beta$，则（　）{.quiz .no-index}
    - $A^3$ 的迹为 $2$. {.correct}
    - $A^3$ 的迹为 $5$.
    - $A^2$ 的迹为 $8$.
    - $A^2$ 的迹为 $9$.
{.options}

+++ 答案与解析
正确答案：`A`.

$A\alpha=0$ 且 $\alpha\ne0$，说明 $0$ 是 $A$ 的一个特征值。

与 $\alpha$ 正交的三维向量构成二维子空间，该子空间中任意向量 $\beta$ 都满足 $A\beta=\beta$，因此 $1$ 至少是二重特征值。又 $r(A)=2$，故 $A$ 的特征值为 $0,1,1$。

所以 $A^3$ 的特征值仍为 $0,1,1$，从而

$$
\operatorname{tr}(A^3)=2.
$$
+++

## 08

1. 设随机变量 $X,Y$ 相互独立，且 $X\sim N(0,2)$，$Y\sim N(-2,2)$。若 $P\{2X+Y<a\}=P\{X>Y\}$，则 $a=$（　）{.quiz .no-index}
    - $-2-\sqrt{10}$.
    - $-2+\sqrt{10}$. {.correct}
    - $-2-\sqrt6$.
    - $-2+\sqrt6$.
{.options}

+++ 答案与解析
正确答案：`B`.

由独立正态变量的线性组合可知

$$
2X+Y\sim N(-2,10),\qquad Y-X\sim N(-2,4).
$$

于是

$$
P\{2X+Y<a\}
=\Phi\left(\frac{a+2}{\sqrt{10}}\right),
$$

而

$$
P\{X>Y\}=P\{Y-X<0\}
=\Phi\left(\frac{0+2}{2}\right)=\Phi(1).
$$

故 $\dfrac{a+2}{\sqrt{10}}=1$，即 $a=-2+\sqrt{10}$。
+++

## 09

1. 设随机变量 $X$ 的概率密度为 $f(x)=\begin{cases}2(1-x),&0<x<1,\\0,&\text{其他},\end{cases}$ 在 $X=x$（$0<x<1$）的条件下，随机变量 $Y$ 服从区间 $(x,1)$ 上的均匀分布，则 $\operatorname{Cov}(X,Y)=$（　）{.quiz .no-index}
    - $-\dfrac1{36}$.
    - $-\dfrac1{72}$.
    - $\dfrac1{72}$.
    - $\dfrac1{36}$. {.correct}
{.options}

+++ 答案与解析
正确答案：`D`.

条件密度为

$$
f_{Y|X}(y|x)=\frac1{1-x},\qquad x<y<1.
$$

因此联合密度为 $f(x,y)=2$，其中 $0<x<y<1$。

计算得

$$
E(XY)=\int_0^1\int_0^y2xy\,dx\,dy=\frac14,
$$

$$
E(X)=\int_0^1 2x(1-x)\,dx=\frac13,\qquad
E(Y)=\int_0^1\int_0^y2y\,dx\,dy=\frac23.
$$

故

$$
\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y)
=\frac14-\frac13\cdot\frac23
=\frac1{36}.
$$
+++

## 10

1. 设随机变量 $X,Y$ 相互独立，且均服从参数为 $\lambda$ 的指数分布，令 $Z=|X-Y|$，则下列随机变量与 $Z$ 同分布的是（　）{.quiz .no-index}
    - $X+Y$.
    - $\dfrac{X+Y}{2}$.
    - $2X$.
    - $X$. {.correct}
{.options}

+++ 答案与解析
正确答案：`D`.

当 $z<0$ 时，$F_Z(z)=0$。当 $z\ge0$ 时，

$$
F_Z(z)=P(|X-Y|\le z)
=2\int_0^\infty\int_y^{y+z}\lambda^2e^{-\lambda(x+y)}\,dx\,dy
=1-e^{-\lambda z}.
$$

这正是参数为 $\lambda$ 的指数分布分布函数，因此 $Z$ 与 $X$ 同分布。
+++

# 填空题

11～16 小题，每小题 5 分，共 30 分。

## 11

若 $\displaystyle\lim_{x\to0}\frac{(1+ax^2)^{\sin x}-1}{x^3}=6$，则 $a=$ ____________。

+++ 答案与解析
答案：$6$.

因为

$$
(1+ax^2)^{\sin x}-1
\sim \sin x\ln(1+ax^2)
\sim x\cdot ax^2=ax^3,
$$

故极限为 $a$，所以 $a=6$。
+++

## 12

设函数 $f(u,v)$ 具有二阶连续偏导数，且

$$
df\big|_{(1,1)}=3\,du+4\,dv.
$$

令 $y=f(\cos x,1+x^2)$，则 $\left.\dfrac{d^2y}{dx^2}\right|_{x=0}=$ ____________。

+++ 答案与解析
答案：$5$.

由 $df|_{(1,1)}=3\,du+4\,dv$ 得

$$
f_u(1,1)=3,\qquad f_v(1,1)=4.
$$

设 $u=\cos x$，$v=1+x^2$，则 $u'(0)=v'(0)=0$，$u''(0)=-1$，$v''(0)=2$。因此

$$
y''(0)=f_u(1,1)u''(0)+f_v(1,1)v''(0)
=3(-1)+4\cdot2=5.
$$
+++

## 13

已知函数 $f(x)=x+1$，若

$$
f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}a_n\cos nx,\qquad x\in[0,\pi],
$$

则 $\displaystyle\lim_{n\to\infty}n^2\sin a_{2n-1}=$ ____________。

+++ 答案与解析
答案：$-\dfrac1\pi$.

余弦级数系数为

$$
a_n=\frac2\pi\int_0^\pi(x+1)\cos nx\,dx.
$$

当 $n$ 为奇数时，

$$
a_n=-\frac{4}{\pi n^2}.
$$

于是 $a_{2n-1}\to0$，$\sin a_{2n-1}\sim a_{2n-1}$，故

$$
\lim_{n\to\infty}n^2\sin a_{2n-1}
=\lim_{n\to\infty}n^2\left(-\frac{4}{\pi(2n-1)^2}\right)
=-\frac1\pi.
$$
+++

## 14

微分方程 $y'=\dfrac1{(x+y)^2}$ 满足条件 $y(1)=0$ 的解为 ____________。

+++ 答案与解析
答案：$x=\tan\left(y+\dfrac\pi4\right)-y$.

令 $u=x+y$，则

$$
\frac{du}{dx}=1+y'=1+\frac1{u^2}.
$$

故

$$
\frac{dx}{du}=\frac{u^2}{u^2+1}.
$$

积分得

$$
x=u-\arctan u+C.
$$

代入 $u=x+y$，可得

$$
y-\arctan(x+y)=C.
$$

由 $y(1)=0$ 得 $C=-\dfrac\pi4$，整理为

$$
x=\tan\left(y+\frac\pi4\right)-y.
$$
+++

## 15

设实矩阵 $A=\begin{pmatrix}a+1&a\\a&a\end{pmatrix}$，若对任意实向量 $\alpha=(x_1,x_2)^T$，$\beta=(y_1,y_2)^T$，都有

$$
(\alpha^TA\beta)^2\le \alpha^TA\alpha\cdot \beta^TA\beta,
$$

则 $a$ 的取值范围是 ____________。

+++ 答案与解析
答案：$[0,+\infty)$.

该不等式是由二次型 $\langle u,v\rangle_A=u^TAv$ 诱导的 Cauchy 不等式。它对任意实向量成立，当且仅当 $A$ 半正定。

由

$$
A=\begin{pmatrix}a+1&a\\a&a\end{pmatrix}
$$

半正定，需满足 $a+1\ge0$ 且

$$
\det A=(a+1)a-a^2=a\ge0.
$$

故 $a\in[0,+\infty)$。
+++

## 16

设随机试验每次成功的概率为 $p$。现进行 $3$ 次独立重复试验，在至少成功 $1$ 次的条件下，$3$ 次试验全部成功的概率为 $\dfrac4{13}$，则 $p=$ ____________。

+++ 答案与解析
答案：$\dfrac23$.

设 $X$ 为 $3$ 次试验成功次数，则 $X\sim B(3,p)$。由题意

$$
P(X=3\mid X\ge1)=\frac{p^3}{1-(1-p)^3}=\frac4{13}.
$$

化简得

$$
13p^3=4(3p-3p^2+p^3),
$$

即 $p(3p-2)^2=0$。又 $p>0$，故 $p=\dfrac23$。
+++

# 解答题

17～22 小题，共 70 分。解答应写出文字说明、证明过程或演算步骤。

## 17

（本题满分 10 分）已知平面区域

$$
D=\{(x,y)\mid \sqrt{1-y^2}\le x\le1,\ -1\le y\le1\},
$$

计算

$$
\iint_D\frac{x}{\sqrt{x^2+y^2}}\,dx\,dy.
$$

+++ 答案与解析
答案：$\sqrt2-2+\ln(1+\sqrt2)$.

区域关于 $x$ 轴对称，被积函数关于 $y$ 为偶函数，故

$$
I=2\int_0^1dy\int_{\sqrt{1-y^2}}^1\frac{x}{\sqrt{x^2+y^2}}\,dx.
$$

对内层积分令 $u=x^2+y^2$，得

$$
I=2\int_0^1\left(\sqrt{1+y^2}-1\right)\,dy.
$$

因此

$$
I=\left[y\sqrt{1+y^2}+\ln\left(y+\sqrt{1+y^2}\right)\right]_0^1-2
=\sqrt2-2+\ln(1+\sqrt2).
$$
+++

## 18

（本题满分 12 分）已知函数

$$
f(x,y)=x^3+y^3-(x+y)^2+3.
$$

设 $T$ 是曲面 $z=f(x,y)$ 在点 $(1,1,1)$ 处的切平面，$D$ 为 $T$ 与坐标平面所围成的有界区域在 $xOy$ 平面上的投影。

1. 求 $T$ 的方程；
2. 求 $f(x,y)$ 在 $D$ 上的最大值和最小值。

+++ 答案与解析
答案：$T:x+y+z=3$；最大值为 $21$，最小值为 $\dfrac{17}{27}$.

由

$$
f_x=3x^2-2(x+y),\qquad f_y=3y^2-2(x+y),
$$

得

$$
f_x(1,1)=f_y(1,1)=-1.
$$

所以切平面为

$$
z-1=-(x-1)-(y-1),
$$

即

$$
x+y+z=3.
$$

切平面与坐标平面围成的四面体在 $xOy$ 平面上的投影为

$$
D=\{(x,y)\mid x\ge0,\ y\ge0,\ x+y\le3\}.
$$

区域内部驻点由

$$
3x^2=2(x+y),\qquad 3y^2=2(x+y)
$$

确定，得 $(x,y)=\left(\dfrac43,\dfrac43\right)$，此时

$$
f\left(\frac43,\frac43\right)=\frac{17}{27}.
$$

边界上逐段检查：$x=0$、$y=0$ 与 $x+y=3$，再比较三个顶点，最大值在 $(3,0)$ 与 $(0,3)$ 处取得，值为 $21$。故最大值为 $21$，最小值为 $\dfrac{17}{27}$。
+++

## 19

（本题满分 12 分）设函数 $f(x)$ 具有二阶导数，且 $f'(0)=f'(1)$，$|f''(x)|\le1$。证明：

1. 当 $x\in(0,1)$ 时，

$$
\left|f(x)-f(0)(1-x)-f(1)x\right|\le\frac{x(1-x)}2;
$$

2. 

$$
\left|\int_0^1f(x)\,dx-\frac{f(0)+f(1)}2\right|\le\frac1{12}.
$$

+++ 答案与解析
证明如下.

令

$$
g(x)=f(x)-f(0)(1-x)-f(1)x.
$$

则 $g(0)=g(1)=0$，且 $g''(x)=f''(x)$。

令

$$
\varphi_1(x)=\frac{x(1-x)}2-g(x).
$$

则 $\varphi_1(0)=\varphi_1(1)=0$，并且

$$
\varphi_1''(x)=-1-f''(x)\le0.
$$

所以 $\varphi_1$ 在 $[0,1]$ 上为凹函数，端点为 $0$，从而 $\varphi_1(x)\ge0$，即

$$
g(x)\le\frac{x(1-x)}2.
$$

再令

$$
\varphi_2(x)=\frac{x(1-x)}2+g(x).
$$

则 $\varphi_2(0)=\varphi_2(1)=0$，并且

$$
\varphi_2''(x)=-1+f''(x)\le0.
$$

故 $\varphi_2(x)\ge0$，即

$$
g(x)\ge-\frac{x(1-x)}2.
$$

两式合并得

$$
\left|f(x)-f(0)(1-x)-f(1)x\right|
\le\frac{x(1-x)}2.
$$

对上式在 $[0,1]$ 上积分，得

$$
\left|\int_0^1f(x)\,dx-\int_0^1[f(0)(1-x)+f(1)x]\,dx\right|
\le\int_0^1\frac{x(1-x)}2\,dx.
$$

即

$$
\left|\int_0^1f(x)\,dx-\frac{f(0)+f(1)}2\right|
\le\frac1{12}.
$$
+++

## 20

（本题满分 12 分）已知有向曲线 $L$ 是球面 $x^2+y^2+z^2=2x$ 与平面 $2x-z-1=0$ 的交线，从 $z$ 轴正向往 $z$ 轴负向看去为逆时针方向，计算曲线积分

$$
\int_L(6xyz-yz^2)\,dx+2x^2z\,dy+xyz\,dz.
$$

+++ 答案与解析
答案：$\dfrac{4\sqrt5}{25}\pi$.

取平面片

$$
\Sigma:\ z=2x-1
$$

为 $L$ 所围成的曲面，方向取上侧。由 Stokes 公式，

$$
I=\iint_\Sigma
\begin{vmatrix}
dy\,dz&dz\,dx&dx\,dy\\
\partial_x&\partial_y&\partial_z\\
6xyz-yz^2&2x^2z&xyz
\end{vmatrix}.
$$

化简得

$$
I=\iint_D\left[4x^2-4x(2x-1)+(2x-1)^2\right]\,dx\,dy
=\iint_D1\,dx\,dy.
$$

投影区域 $D$ 由

$$
x^2+y^2+(2x-1)^2=2x
$$

给出，即

$$
5\left(x-\frac35\right)^2+y^2=\frac45.
$$

这是半轴长为 $\dfrac25$ 与 $\dfrac2{\sqrt5}$ 的椭圆，所以

$$
I=S_D=\pi\cdot\frac25\cdot\frac2{\sqrt5}
=\frac{4\sqrt5}{25}\pi.
$$
+++

## 21

（本题满分 12 分）已知数列 $\{x_n\}$，$\{y_n\}$，$\{z_n\}$ 满足 $x_0=-1$，$y_0=0$，$z_0=2$，且

$$
\begin{cases}
x_n=-2x_{n-1}+2z_{n-1},\\
y_n=-2y_{n-1}-2z_{n-1},\\
z_n=-6x_{n-1}-3y_{n-1}+3z_{n-1}.
\end{cases}
$$

记 $\alpha_n=(x_n,y_n,z_n)^T$，写出满足 $\alpha_n=A\alpha_{n-1}$ 的矩阵 $A$，并求 $A^n$ 及 $x_n,y_n,z_n$。

+++ 答案与解析
答案如下.

由递推式直接得

$$
A=\begin{pmatrix}
-2&0&2\\
0&-2&-2\\
-6&-3&3
\end{pmatrix}.
$$

当 $n\ge1$ 时，

$$
A^n=
\begin{pmatrix}
-4-(-2)^n&-2-(-2)^n&2\\
4+2(-2)^n&2+2(-2)^n&-2\\
-6&-3&3
\end{pmatrix}.
$$

于是

$$
\alpha_n=A^n\alpha_0
=
\begin{pmatrix}
8+(-2)^n\\
-8+(-2)^{n+1}\\
12
\end{pmatrix}
\qquad(n\ge1).
$$

故

$$
x_n=8+(-2)^n,\qquad
y_n=-8+(-2)^{n+1},\qquad
z_n=12\quad(n\ge1).
$$

这些结果与初始条件共同确定整个数列。
+++

## 22

（本题满分 12 分）设总体 $X$ 服从 $[0,\theta]$ 上的均匀分布，其中 $\theta\in(0,+\infty)$ 为未知参数。$X_1,X_2,\cdots,X_n$ 是来自总体 $X$ 的简单随机样本，记

$$
X_{(n)}=\max\{X_1,X_2,\cdots,X_n\},\qquad T_c=cX_{(n)}.
$$

1. 求 $c$，使得 $T_c$ 是 $\theta$ 的无偏估计；
2. 记 $h(c)=E(T_c-\theta)^2$，求使得 $h(c)$ 最小的 $c$。

+++ 答案与解析
答案：$(1)\ c=\dfrac{n+1}{n}$；$(2)\ c=\dfrac{n+2}{n+1}$.

总体分布函数为

$$
F(x)=
\begin{cases}
0,&x<0,\\
\dfrac{x}{\theta},&0\le x<\theta,\\
1,&x\ge\theta.
\end{cases}
$$

因此最大顺序统计量 $X_{(n)}$ 的密度为

$$
f_{X_{(n)}}(x)=\frac{n x^{n-1}}{\theta^n},\qquad 0<x<\theta.
$$

于是

$$
E(X_{(n)})=\int_0^\theta x\frac{n x^{n-1}}{\theta^n}\,dx
=\frac{n}{n+1}\theta.
$$

若 $T_c=cX_{(n)}$ 是 $\theta$ 的无偏估计，则

$$
c\frac{n}{n+1}\theta=\theta,
$$

故

$$
c=\frac{n+1}{n}.
$$

又

$$
E(X_{(n)}^2)=\int_0^\theta x^2\frac{n x^{n-1}}{\theta^n}\,dx
=\frac{n}{n+2}\theta^2.
$$

所以

$$
h(c)=E(cX_{(n)}-\theta)^2
=c^2\frac{n}{n+2}\theta^2
-2c\frac{n}{n+1}\theta^2+\theta^2.
$$

对 $c$ 求导：

$$
h'(c)=2c\frac{n}{n+2}\theta^2-2\frac{n}{n+1}\theta^2.
$$

令 $h'(c)=0$，得

$$
c=\frac{n+2}{n+1}.
$$
+++
