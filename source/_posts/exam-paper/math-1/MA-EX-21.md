---
layout: post
title: 2021 年考研数学一真题
math: true
quiz: true
date: 2026-07-02 06:00:00
categories:
  - 试卷真题
  - 数学一
tags:
  - 考研数学
  - 数学一
  - 2021 年真题
---

# 2021 年考研数学一真题

# 选择题

1～10 小题，每小题 5 分，共 50 分。下列每题给出的四个选项中，只有一个选项符合题目要求。

## 01

1. 设函数 $f(x)=\begin{cases}\dfrac{e^x-1}{x},&x\ne0,\\1,&x=0,\end{cases}$ 则 $f(x)$ 在 $x=0$ 处（　）{.quiz .no-index}
    - 连续且取极大值.
    - 连续且取极小值.
    - 可导且导数为 $0$.
    - 可导且导数不为 $0$. {.correct}
{.options}

+++ 答案与解析
正确答案：`D`.

由

$$
\lim_{x\to0}\frac{e^x-1}{x}=1=f(0),
$$

可知 $f$ 在 $x=0$ 处连续。又

$$
f'(0)=\lim_{x\to0}\frac{f(x)-f(0)}{x}
=\lim_{x\to0}\frac{e^x-1-x}{x^2}
=\frac12,
$$

所以 $f$ 在 $x=0$ 处可导且导数不为 $0$。
+++

## 02

1. 设函数 $f(x,y)$ 可微，且 $f(x+1,e^x)=x(x+1)^2$，$f(x,x^2)=2x^2\ln x$，则 $df(1,1)=$（　）{.quiz .no-index}
    - $dx+dy$.
    - $dx-dy$.
    - $dy$. {.correct}
    - $-dy$.
{.options}

+++ 答案与解析
正确答案：`C`.

对 $f(x+1,e^x)=x(x+1)^2$ 在 $x=0$ 处求导，得

$$
f_x(1,1)+f_y(1,1)=1.
$$

对 $f(x,x^2)=2x^2\ln x$ 在 $x=1$ 处求导，得

$$
f_x(1,1)+2f_y(1,1)=2.
$$

解得 $f_x(1,1)=0$，$f_y(1,1)=1$，故

$$
df(1,1)=f_x(1,1)\,dx+f_y(1,1)\,dy=dy.
$$
+++

## 03

1. 设函数 $f(x)=\dfrac{\sin x}{1+x^2}$ 在 $x=0$ 处的 3 次泰勒多项式为 $ax+bx^2+cx^3$，则（　）{.quiz .no-index}
    - $a=1,\ b=0,\ c=-\dfrac76$. {.correct}
    - $a=1,\ b=0,\ c=\dfrac76$.
    - $a=-1,\ b=-1,\ c=-\dfrac76$.
    - $a=-1,\ b=-1,\ c=\dfrac76$.
{.options}

+++ 答案与解析
正确答案：`A`.

设

$$
\frac{\sin x}{1+x^2}=ax+bx^2+cx^3+o(x^3),
$$

则

$$
\sin x=(1+x^2)(ax+bx^2+cx^3+o(x^3))
=ax+bx^2+(a+c)x^3+o(x^3).
$$

又 $\sin x=x-\dfrac{x^3}{6}+o(x^3)$，比较系数得

$$
a=1,\qquad b=0,\qquad a+c=-\frac16,
$$

故 $c=-\dfrac76$。
+++

## 04

1. 设函数 $f(x)$ 在区间 $[0,1]$ 上连续，则 $\displaystyle\int_0^1 f(x)\,dx=$（　）{.quiz .no-index}
    - $\displaystyle\lim_{n\to\infty}\sum_{k=1}^{n} f\left(\frac{2k-1}{2n}\right)\frac{1}{2n}$.
    - $\displaystyle\lim_{n\to\infty}\sum_{k=1}^{n} f\left(\frac{2k-1}{2n}\right)\frac{1}{n}$. {.correct}
    - $\displaystyle\lim_{n\to\infty}\sum_{k=1}^{2n} f\left(\frac{k-1}{2n}\right)\frac{1}{n}$.
    - $\displaystyle\lim_{n\to\infty}\sum_{k=1}^{2n} f\left(\frac{k}{2n}\right)\frac{2}{n}$.
{.options}

+++ 答案与解析
正确答案：`B`.

把 $[0,1]$ 等分为 $n$ 份，第 $k$ 个小区间的中点为

$$
\xi_k=\frac{k-1}{n}+\frac{1}{2n}=\frac{2k-1}{2n}.
$$

由定积分定义，

$$
\int_0^1 f(x)\,dx
=\lim_{n\to\infty}\sum_{k=1}^{n}f\left(\frac{2k-1}{2n}\right)\frac1n.
$$
+++

## 05

1. 二次型 $f(x_1,x_2,x_3)=(x_1+x_2)^2+(x_2+x_3)^2-(x_3-x_1)^2$ 的正惯性指数与负惯性指数依次为（　）{.quiz .no-index}
    - $2,\ 0$.
    - $1,\ 1$. {.correct}
    - $2,\ 1$.
    - $1,\ 2$.
{.options}

+++ 答案与解析
正确答案：`B`.

展开得

$$
f=2x_2^2+2x_1x_2+2x_1x_3+2x_2x_3,
$$

对应矩阵为

$$
A=\begin{pmatrix}
0&1&1\\
1&2&1\\
1&1&0
\end{pmatrix}.
$$

其特征多项式为

$$
|\lambda E-A|=\lambda(\lambda-3)(\lambda+1),
$$

特征值为 $3,-1,0$，所以正惯性指数与负惯性指数均为 $1$。
+++

## 06

1. 设 $\alpha_1=(1,0,1)^T$，$\alpha_2=(1,2,1)^T$，$\alpha_3=(3,1,2)^T$，$\beta_1=\alpha_1$，$\beta_2=\alpha_2-k\beta_1$，$\beta_3=\alpha_3-l_1\beta_1-l_2\beta_2$。若 $\beta_1,\beta_2,\beta_3$ 两两正交，则 $l_1,l_2$ 依次为（　）{.quiz .no-index}
    - $\dfrac52,\ \dfrac12$. {.correct}
    - $\dfrac52,\ -\dfrac12$.
    - $-\dfrac52,\ \dfrac12$.
    - $-\dfrac52,\ -\dfrac12$.
{.options}

+++ 答案与解析
正确答案：`A`.

由 $(\beta_1,\beta_2)=0$，得

$$
(\alpha_1,\alpha_2-k\alpha_1)=2-2k=0,
$$

故 $k=1$，于是 $\beta_2=(0,2,0)^T$。再由 $(\beta_1,\beta_3)=0$，

$$
(\alpha_1,\alpha_3)-l_1(\alpha_1,\alpha_1)=5-2l_1=0,
$$

得 $l_1=\dfrac52$。由 $(\beta_2,\beta_3)=0$，

$$
(\beta_2,\alpha_3)-l_2(\beta_2,\alpha_2)=2-4l_2=0,
$$

得 $l_2=\dfrac12$。
+++

## 07

1. 设 $A,B$ 为 $n$ 阶实矩阵，下列不成立的是（　）{.quiz .no-index}
    - $\displaystyle r\begin{pmatrix}A&O\\O&A^TA\end{pmatrix}=2r(A)$.
    - $\displaystyle r\begin{pmatrix}A&O\\AB&A^T\end{pmatrix}=2r(A)$.
    - $\displaystyle r\begin{pmatrix}A&O\\B&A^TA\end{pmatrix}=2r(A)$. {.correct}
    - $\displaystyle r\begin{pmatrix}A&BA\\O&A^T\end{pmatrix}=2r(A)$.
{.options}

+++ 答案与解析
正确答案：`C`.

A 中 $r(A^TA)=r(A)$，故成立。B、D 可由分块矩阵初等变换和 $r(A^T)=r(A)$ 判断成立。

C 不恒成立。例如取

$$
A=\begin{pmatrix}1&1\\0&0\end{pmatrix},\qquad
B=\begin{pmatrix}1&0\\0&0\end{pmatrix},
$$

则对应分块矩阵秩为 $3$，而 $2r(A)=2$，故 C 不成立。
+++

## 08

1. 设 $A,B$ 为随机事件，且 $0<P(B)<1$，下列命题中为假命题的是（　）{.quiz .no-index}
    - 若 $P(A\mid B)=P(A)$，则 $P(A\mid \overline B)=P(A)$.
    - 若 $P(A\mid B)>P(A)$，则 $P(\overline A\mid\overline B)>P(\overline A)$.
    - 若 $P(A\mid B)>P(A\mid\overline B)$，则 $P(A\mid B)>P(A)$.
    - 若 $P(A\mid A\cup B)>P(\overline A\mid A\cup B)$，则 $P(A)>P(B)$. {.correct}
{.options}

+++ 答案与解析
正确答案：`D`.

A 表示 $A,B$ 独立，可推出 $A,\overline B$ 也独立。B、C 都可由

$$
P(AB)>P(A)P(B)
$$

推出。

D 只说明在 $A\cup B$ 已发生的条件下，$A$ 比 $\overline A$ 更可能发生，不能推出 $P(A)>P(B)$，因此为假命题。
+++

## 09

1. 设 $(X_1,Y_1),(X_2,Y_2),\cdots,(X_n,Y_n)$ 为来自总体 $N(\mu_1,\mu_2;\sigma_1^2,\sigma_2^2;\rho)$ 的简单随机样本，令 $\theta=\mu_1-\mu_2$，$\overline X=\dfrac1n\sum_{i=1}^nX_i$，$\overline Y=\dfrac1n\sum_{i=1}^nY_i$，$\hat\theta=\overline X-\overline Y$，则（　）{.quiz .no-index}
    - $\hat\theta$ 是 $\theta$ 的无偏估计，$D(\hat\theta)=\dfrac{\sigma_1^2+\sigma_2^2}{n}$.
    - $\hat\theta$ 不是 $\theta$ 的无偏估计，$D(\hat\theta)=\dfrac{\sigma_1^2+\sigma_2^2}{n}$.
    - $\hat\theta$ 是 $\theta$ 的无偏估计，$D(\hat\theta)=\dfrac{\sigma_1^2+\sigma_2^2-2\rho\sigma_1\sigma_2}{n}$. {.correct}
    - $\hat\theta$ 不是 $\theta$ 的无偏估计，$D(\hat\theta)=\dfrac{\sigma_1^2+\sigma_2^2-2\rho\sigma_1\sigma_2}{n}$.
{.options}

+++ 答案与解析
正确答案：`C`.

因为

$$
E(\hat\theta)=E(\overline X)-E(\overline Y)=\mu_1-\mu_2=\theta,
$$

所以 $\hat\theta$ 是无偏估计。又

$$
D(\hat\theta)=D(\overline X-\overline Y)
=\frac{\sigma_1^2}{n}+\frac{\sigma_2^2}{n}
-2\operatorname{Cov}(\overline X,\overline Y),
$$

而 $\operatorname{Cov}(\overline X,\overline Y)=\dfrac{\rho\sigma_1\sigma_2}{n}$，故

$$
D(\hat\theta)=\frac{\sigma_1^2+\sigma_2^2-2\rho\sigma_1\sigma_2}{n}.
$$
+++

## 10

1. 设 $X_1,X_2,\cdots,X_{16}$ 是来自总体 $N(\mu,4)$ 的简单随机样本，考虑假设检验 $H_0:\mu\le10$，$H_1:\mu>10$。$\Phi(x)$ 表示标准正态分布函数，若拒绝域为 $W=\{\overline X\ge11\}$，其中 $\overline X=\dfrac1{16}\sum_{i=1}^{16}X_i$，则 $\mu=11.5$ 时犯第二类错误的概率为（　）{.quiz .no-index}
    - $1-\Phi(0.5)$.
    - $1-\Phi(1)$. {.correct}
    - $1-\Phi(1.5)$.
    - $1-\Phi(2)$.
{.options}

+++ 答案与解析
正确答案：`B`.

当 $\mu=11.5$ 时，

$$
\overline X\sim N\left(11.5,\frac14\right),
$$

因此犯第二类错误的概率为

$$
P_{\mu=11.5}(\overline X<11)
=P\left(\frac{\overline X-11.5}{1/2}<-1\right)
=\Phi(-1)=1-\Phi(1).
$$
+++

# 填空题

11～16 小题，每小题 5 分，共 30 分。

## 11

$\displaystyle\int_0^{+\infty}\frac{1}{x^2+2x+2}\,dx=$ ____________。

+++ 答案与解析
答案：$\dfrac{\pi}{4}$.

因为

$$
x^2+2x+2=(x+1)^2+1,
$$

所以

$$
\int_0^{+\infty}\frac{dx}{x^2+2x+2}
=\left.\arctan(x+1)\right|_0^{+\infty}
=\frac{\pi}{2}-\frac{\pi}{4}
=\frac{\pi}{4}.
$$
+++

## 12

设函数 $y=y(x)$ 由参数方程

$$
\begin{cases}
x=2e^t+t+1,\\
y=4(t-1)e^t+t^2
\end{cases}
$$

确定，则 $\left.\dfrac{d^2y}{dx^2}\right|_{t=0}=$ ____________。

+++ 答案与解析
答案：$\dfrac23$.

有

$$
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}
=\frac{4te^t+2t}{2e^t+1}=2t.
$$

故

$$
\frac{d^2y}{dx^2}
=\frac{d(2t)/dt}{dx/dt}
=\frac{2}{2e^t+1},
$$

代入 $t=0$ 得 $\dfrac23$。
+++

## 13

欧拉方程 $x^2y''+xy'-4y=0$ 满足条件 $y(1)=1$，$y'(1)=2$ 的解为 $y=$ ____________。

+++ 答案与解析
答案：$x^2$.

令 $x=e^t$，$D=\dfrac{d}{dt}$，则

$$
xy'=Dy,\qquad x^2y''=D(D-1)y.
$$

原方程化为

$$
D^2y-4y=0,
$$

通解为

$$
y=C_1x^{-2}+C_2x^2.
$$

由 $y(1)=1$、$y'(1)=2$ 得 $C_1=0$，$C_2=1$，故 $y=x^2$。
+++

## 14

设 $\Sigma$ 为空间区域 $\{(x,y,z)\mid x^2+4y^2\le4,\ 0\le z\le2\}$ 表面的外侧，则曲面积分

$$
\iint_\Sigma x^2\,dy\,dz+y^2\,dz\,dx+z\,dx\,dy
$$

的值为 ____________。

+++ 答案与解析
答案：$4\pi$.

设 $\Sigma$ 围成的空间区域为 $\Omega$。由高斯公式，

$$
I=\iiint_\Omega (2x+2y+1)\,dv.
$$

由于区域关于 $x,y$ 对称，含 $x,y$ 的奇函数积分为 $0$，故

$$
I=\iiint_\Omega 1\,dv.
$$

底面椭圆半轴为 $2,1$，高为 $2$，体积为

$$
2\cdot\pi\cdot2\cdot1=4\pi.
$$
+++

## 15

设 $A=(a_{ij})$ 为 3 阶矩阵，$A_{ij}$ 为代数余子式。若 $A$ 的每行元素之和均为 $2$，且 $|A|=3$，则 $A_{11}+A_{21}+A_{31}=$ ____________。

+++ 答案与解析
答案：$\dfrac32$.

由每行元素之和均为 $2$，得

$$
A\begin{pmatrix}1\\1\\1\end{pmatrix}
=2\begin{pmatrix}1\\1\\1\end{pmatrix}.
$$

又 $A^*A=|A|E=3E$，两边左乘 $A^*$ 后等价于

$$
3\begin{pmatrix}1\\1\\1\end{pmatrix}
=2A^*\begin{pmatrix}1\\1\\1\end{pmatrix},
$$

所以

$$
A^*\begin{pmatrix}1\\1\\1\end{pmatrix}
=\frac32\begin{pmatrix}1\\1\\1\end{pmatrix}.
$$

$A_{11}+A_{21}+A_{31}$ 是 $A^*$ 第一行元素之和，故为 $\dfrac32$。
+++

## 16

甲、乙两个盒子中各装有 2 个红球和 2 个白球，先从甲盒中任取一球，观察颜色后放入乙盒中，再从乙盒中任取一球。令 $X,Y$ 分别表示从甲盒和乙盒中取到的红球个数，则 $X$ 与 $Y$ 的相关系数为 ____________。

+++ 答案与解析
答案：$\dfrac15$.

$P(X=0)=P(X=1)=\dfrac12$。若 $X=0$，则乙盒有 2 红 3 白，$P(Y=1\mid X=0)=\dfrac25$；若 $X=1$，则乙盒有 3 红 2 白，$P(Y=1\mid X=1)=\dfrac35$。

于是

$$
P(X=0,Y=0)=\frac12\cdot\frac35=\frac3{10},\qquad
P(X=1,Y=1)=\frac12\cdot\frac35=\frac3{10}.
$$

且 $E(X)=E(Y)=\dfrac12$，$D(X)=D(Y)=\dfrac14$，$E(XY)=\dfrac3{10}$。故

$$
\rho_{XY}=
\frac{E(XY)-E(X)E(Y)}{\sqrt{D(X)}\sqrt{D(Y)}}
=\frac{\frac3{10}-\frac14}{\frac12\cdot\frac12}
=\frac15.
$$
+++

# 解答题

17～22 小题，共 70 分。解答应写出文字说明、证明过程或演算步骤。

## 17

（本题满分 10 分）求极限

$$
\lim_{x\to0}\left(\frac{1+\displaystyle\int_0^x e^{t^2}\,dt}{e^x-1}-\frac1{\sin x}\right).
$$

+++ 答案与解析
答案：$\dfrac12$.

将式子通分：

$$
\frac{(1+\int_0^x e^{t^2}\,dt)\sin x-(e^x-1)}
{(e^x-1)\sin x}.
$$

由于 $(e^x-1)\sin x\sim x^2$，只需计算分子到二阶项。由

$$
\int_0^x e^{t^2}\,dt=x+o(x^2),\qquad
\sin x=x+o(x^2),\qquad
e^x-1=x+\frac{x^2}{2}+o(x^2),
$$

得

$$
(1+\int_0^x e^{t^2}\,dt)\sin x-(e^x-1)
=\left(1+x+o(x)\right)(x+o(x^2))-\left(x+\frac{x^2}{2}+o(x^2)\right)
=\frac{x^2}{2}+o(x^2).
$$

故原极限为 $\dfrac12$。
+++

## 18

（本题满分 12 分）设

$$
u_n(x)=e^{-nx}+\frac{x^{n+1}}{n(n+1)}\quad(n=1,2,\cdots),
$$

求级数 $\displaystyle\sum_{n=1}^{\infty}u_n(x)$ 的收敛域及和函数。

+++ 答案与解析
答案：收敛域为 $(0,1]$，和函数见下式.

级数分解为

$$
\sum_{n=1}^{\infty}u_n(x)
=\sum_{n=1}^{\infty}e^{-nx}
+\sum_{n=1}^{\infty}\frac{x^{n+1}}{n(n+1)}.
$$

第一项为等比级数，收敛条件为 $x>0$，且

$$
\sum_{n=1}^{\infty}e^{-nx}
=\frac{e^{-x}}{1-e^{-x}}
=\frac{1}{e^x-1}.
$$

第二项幂级数收敛域为 $[-1,1]$，因此原级数收敛域为 $(0,1]$。当 $0<x<1$ 时，

$$
\sum_{n=1}^{\infty}\frac{x^{n+1}}{n(n+1)}
=\sum_{n=1}^{\infty}\left(\frac{x^{n+1}}n-\frac{x^{n+1}}{n+1}\right)
=(1-x)\ln(1-x)+x.
$$

当 $x=1$ 时，

$$
\sum_{n=1}^{\infty}\frac1{n(n+1)}=1,
\qquad
\sum_{n=1}^{\infty}e^{-n}=\frac1{e-1}.
$$

故

$$
S(x)=
\begin{cases}
\dfrac{1}{e^x-1}+(1-x)\ln(1-x)+x,&0<x<1,\\[6pt]
\dfrac{e}{e-1},&x=1.
\end{cases}
$$
+++

## 19

（本题满分 12 分）已知曲线

$$
C:\begin{cases}
x^2+2y^2-z=6,\\
4x+2y+z=30,
\end{cases}
$$

求 $C$ 上的点到 $xOy$ 坐标面距离的最大值。

+++ 答案与解析
答案：$66$.

点 $M(x,y,z)$ 到 $xOy$ 面的距离为 $|z|$，等价于在约束条件下求 $z^2$ 的最大值。设

$$
F=z^2+\lambda(x^2+2y^2-z-6)+\mu(4x+2y+z-30).
$$

由

$$
\begin{cases}
2\lambda x+4\mu=0,\\
4\lambda y+2\mu=0,\\
2z-\lambda+\mu=0,\\
x^2+2y^2-z-6=0,\\
4x+2y+z-30=0
\end{cases}
$$

解得候选点

$$
(x,y,z)=(4,1,12),\qquad (-8,-2,66).
$$

比较 $|z|$，最大距离为 $66$。
+++

## 20

（本题满分 12 分）设 $D\subset\mathbb R^2$ 是有界单连通闭区域，

$$
I(D)=\iint_D(4-x^2-y^2)\,dx\,dy
$$

取得最大值的积分区域为 $D_1$。

（Ⅰ）求 $I(D_1)$ 的值；

（Ⅱ）计算

$$
\int_{\partial D_1}\frac{(xe^{x^2+4y^2}+y)\,dx+(4ye^{x^2+4y^2}-x)\,dy}{x^2+4y^2},
$$

其中 $\partial D_1$ 是 $D_1$ 的正向边界。

+++ 答案与解析
答案：（Ⅰ）$I(D_1)=8\pi$；（Ⅱ）$-\pi$.

（Ⅰ）为使积分最大，应取被积函数非负的区域：

$$
D_1=\{(x,y)\mid x^2+y^2\le4\}.
$$

于是

$$
I(D_1)=\int_0^{2\pi}\int_0^2(4-r^2)r\,dr\,d\theta
=8\pi.
$$

（Ⅱ）被积表达式在原点奇异。取小椭圆

$$
L_0:x^2+4y^2=r^2
$$

绕开原点，用格林公式可知圆盘去掉小椭圆后的区域积分为 $0$，故原积分等于小椭圆正向积分。设 $L_0$ 所围区域为 $D_2$，则

$$
\int_{L_0}\frac{(xe^{x^2+4y^2}+y)\,dx+(4ye^{x^2+4y^2}-x)\,dy}{x^2+4y^2}
=-\pi.
$$

因此所求积分为 $-\pi$。
+++

## 21

（本题满分 12 分）已知

$$
A=\begin{pmatrix}
a&1&-1\\
1&a&-1\\
-1&-1&a
\end{pmatrix}.
$$

（Ⅰ）求正交矩阵 $P$，使得 $P^TAP$ 为对角矩阵；

（Ⅱ）求正定矩阵 $C$，使得 $C^2=(a+3)E-A$。

+++ 答案与解析
答案如下.

特征多项式为

$$
|\lambda E-A|=(\lambda-a+1)^2(\lambda-a-2),
$$

故特征值为 $a-1,a-1,a+2$。对应的单位正交特征向量可取

$$
\gamma_1=\frac1{\sqrt2}(-1,1,0)^T,\quad
\gamma_2=\frac1{\sqrt6}(1,1,2)^T,\quad
\gamma_3=\frac1{\sqrt3}(-1,-1,1)^T.
$$

令

$$
P=
\begin{pmatrix}
-\dfrac1{\sqrt2}&\dfrac1{\sqrt6}&-\dfrac1{\sqrt3}\\[4pt]
\dfrac1{\sqrt2}&\dfrac1{\sqrt6}&-\dfrac1{\sqrt3}\\[4pt]
0&\dfrac2{\sqrt6}&\dfrac1{\sqrt3}
\end{pmatrix},
$$

则

$$
P^TAP=\operatorname{diag}(a-1,a-1,a+2).
$$

又

$$
P^T\bigl((a+3)E-A\bigr)P
=\operatorname{diag}(4,4,1).
$$

故所求正定矩阵为

$$
C=P\operatorname{diag}(2,2,1)P^T
=\frac13
\begin{pmatrix}
5&-1&1\\
-1&5&1\\
1&1&5
\end{pmatrix}.
$$
+++

## 22

（本题满分 12 分）在区间 $(0,2)$ 上随机取一点，将该区间分成两段，较短一段的长度为 $X$，较长一段的长度为 $Y$，令 $Z=\dfrac{Y}{X}$。

（Ⅰ）求 $X$ 的概率密度；

（Ⅱ）求 $Z$ 的概率密度；

（Ⅲ）求 $E\left(\dfrac{X}{Y}\right)$。

+++ 答案与解析
答案：（Ⅰ）$f_X(x)=\begin{cases}1,&0<x<1,\\0,&\text{其他};\end{cases}$ （Ⅱ）$f_Z(z)=\begin{cases}\dfrac{2}{(z+1)^2},&z>1,\\0,&z\le1;\end{cases}$ （Ⅲ）$2\ln2-1$.

设随机点到左端点距离为 $T$，则 $T\sim U(0,2)$，且

$$
X=\min(T,2-T),\qquad Y=2-X.
$$

对 $0<x<1$，

$$
P(X\le x)=1-P(x<T<2-x)=1-\frac{2-2x}{2}=x,
$$

故

$$
f_X(x)=
\begin{cases}
1,&0<x<1,\\
0,&\text{其他}.
\end{cases}
$$

由 $Z=\dfrac{Y}{X}=\dfrac{2-X}{X}=\dfrac2X-1$，当 $z>1$ 时，

$$
F_Z(z)=P\left(\frac2X-1\le z\right)
=P\left(X\ge\frac2{z+1}\right)
=1-\frac2{z+1}
=\frac{z-1}{z+1}.
$$

所以

$$
f_Z(z)=
\begin{cases}
\dfrac{2}{(z+1)^2},&z>1,\\
0,&z\le1.
\end{cases}
$$

最后

$$
E\left(\frac{X}{Y}\right)
=E\left(\frac{X}{2-X}\right)
=\int_0^1\frac{x}{2-x}\,dx
=2\ln2-1.
$$
+++
