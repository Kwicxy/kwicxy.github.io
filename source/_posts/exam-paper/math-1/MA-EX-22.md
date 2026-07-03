---
layout: post
title: 2022 年考研数学一真题
math: true
quiz: true
copyright: false
date: 2026-07-02 07:00:00
categories:
  - 试卷真题
  - 数学一
tags:
  - 考研数学
  - 数学一
  - 2022 年真题
---

# 2022 年考研数学一真题

# 选择题

1～10 小题，每小题 5 分，共 50 分。下列每题给出的四个选项中，只有一个选项符合题目要求。

## 01

1. 设 $\displaystyle\lim_{x\to1}\frac{f(x)}{\ln x}=1$，则（　）{.quiz .no-index}
    - $f(1)=0$.
    - $\displaystyle\lim_{x\to1}f(x)=0$. {.correct}
    - $f'(1)=1$.
    - $\displaystyle\lim_{x\to1}f'(x)=1$.
{.options}

+++ 答案与解析
正确答案：`B`.

当 $x\to1$ 时，$\ln x\to0$，且 $\frac{f(x)}{\ln x}\to1$，所以

$$
f(x)=\ln x\cdot \frac{f(x)}{\ln x}\to0.
$$

题设不能保证 $f(1)$ 的取值，也不能保证 $f$ 在 $x=1$ 处可导或 $f'(x)$ 的极限存在。
+++

## 02

1. 设 $f(u)$ 可导，$z=xyf\left(\frac{y}{x}\right)$，若 $\displaystyle x\frac{\partial z}{\partial x}+y\frac{\partial z}{\partial y}=y^2(\ln y-\ln x)$，则（　）{.quiz .no-index}
    - $f(1)=\dfrac12,\ f'(1)=0$.
    - $f(1)=0,\ f'(1)=\dfrac12$. {.correct}
    - $f(1)=\dfrac12,\ f'(1)=1$.
    - $f(1)=0,\ f'(1)=1$.
{.options}

+++ 答案与解析
正确答案：`B`.

由链式法则，

$$
\frac{\partial z}{\partial x}
=yf\left(\frac yx\right)-\frac{y^2}{x}f'\left(\frac yx\right),
\qquad
\frac{\partial z}{\partial y}
=xf\left(\frac yx\right)+yf'\left(\frac yx\right).
$$

因此

$$
x\frac{\partial z}{\partial x}+y\frac{\partial z}{\partial y}
=2xyf\left(\frac yx\right).
$$

与 $y^2\ln\frac yx$ 比较得

$$
f(u)=\frac12u\ln u,
$$

故 $f(1)=0,\ f'(1)=\frac12$。
+++

## 03

1. 设数列 $\{x_n\}$ 满足 $-\dfrac{\pi}{2}\le x_n\le\dfrac{\pi}{2}$，则（　）{.quiz .no-index}
    - 若 $\displaystyle\lim_{n\to\infty}\cos(\sin x_n)$ 存在，则 $\displaystyle\lim_{n\to\infty}x_n$ 存在.
    - 若 $\displaystyle\lim_{n\to\infty}\sin(\cos x_n)$ 存在，则 $\displaystyle\lim_{n\to\infty}x_n$ 存在.
    - 若 $\displaystyle\lim_{n\to\infty}\cos(\sin x_n)$ 存在，则 $\displaystyle\lim_{n\to\infty}\sin x_n$ 存在，但 $\displaystyle\lim_{n\to\infty}x_n$ 不一定存在.
    - 若 $\displaystyle\lim_{n\to\infty}\sin(\cos x_n)$ 存在，则 $\displaystyle\lim_{n\to\infty}\cos x_n$ 存在，但 $\displaystyle\lim_{n\to\infty}x_n$ 不一定存在. {.correct}
{.options}

+++ 答案与解析
正确答案：`D`.

因 $\cos x_n\in[0,1]$，而 $\sin x$ 在 $[0,1]$ 上单调且有反函数。若 $\sin(\cos x_n)$ 极限存在，则 $\cos x_n$ 极限存在。

但 $\cos x_n$ 极限存在不推出 $x_n$ 极限存在。例如取 $x_n=(-1)^n\frac{\pi}{2}$，则 $\cos x_n\to0$，而 $x_n$ 不收敛。
+++

## 04

1. 若 $\displaystyle I_1=\int_0^1\frac{x}{2(1+\cos x)}\,dx$，$\displaystyle I_2=\int_0^1\frac{\ln(1+x)}{1+\cos x}\,dx$，$\displaystyle I_3=\int_0^1\frac{2x}{1+\sin x}\,dx$，则（　）{.quiz .no-index}
    - $I_1<I_2<I_3$. {.correct}
    - $I_2<I_1<I_3$.
    - $I_1<I_3<I_2$.
    - $I_3<I_2<I_1$.
{.options}

+++ 答案与解析
正确答案：`A`.

当 $0<x<1$ 时，

$$
\frac{x}{2}<\ln(1+x)<x.
$$

于是

$$
\frac{x}{2(1+\cos x)}
<
\frac{\ln(1+x)}{1+\cos x}.
$$

又因为 $1<1+\sin x<2$，所以

$$
\frac{2x}{1+\sin x}>x>
\frac{\ln(1+x)}{1+\cos x}.
$$

在同一区间积分，即得 $I_1<I_2<I_3$。
+++

## 05

1. 下列 4 个条件中，3 阶矩阵 $A$ 可相似对角化的一个充分非必要条件是（　）{.quiz .no-index}
    - $A$ 有 3 个不同的特征值. {.correct}
    - $A$ 有 3 个线性无关的特征向量.
    - $A$ 有 3 个两两线性无关的特征向量.
    - $A$ 的属于不同特征值的特征向量相互正交.
{.options}

+++ 答案与解析
正确答案：`A`.

$n$ 阶矩阵有 $n$ 个不同特征值时，必有 $n$ 个线性无关特征向量，因此可相似对角化。

反过来，可相似对角化不要求特征值互不相同。例如单位矩阵本身可对角化，但只有一个特征值。
+++

## 06

1. 设 $A,B$ 为 $n$ 阶矩阵，$E$ 为 $n$ 阶单位矩阵，若方程组 $Ax=0$ 与 $Bx=0$ 同解，则（　）{.quiz .no-index}
    - $\begin{pmatrix}A&E\\O&B\end{pmatrix}y=0$ 只有零解.
    - $\begin{pmatrix}E&O\\A&AB\end{pmatrix}y=0$ 只有零解.
    - $\begin{pmatrix}A&O\\B&B\end{pmatrix}y=0$ 与 $\begin{pmatrix}B&O\\A&A\end{pmatrix}y=0$ 同解. {.correct}
    - $\begin{pmatrix}AB&B\\O&A\end{pmatrix}y=0$ 与 $\begin{pmatrix}BA&A\\O&B\end{pmatrix}y=0$ 同解.
{.options}

+++ 答案与解析
正确答案：`C`.

设 $y=\begin{pmatrix}y_1\\y_2\end{pmatrix}$。对 C 中第一个系数矩阵作初等行变换：

$$
\begin{pmatrix}A&O\\B&B\end{pmatrix}
\sim
\begin{pmatrix}A&O\\O&B\end{pmatrix},
$$

其解满足 $Ay_1=0,\ By_2=0$。同理，

$$
\begin{pmatrix}B&O\\A&A\end{pmatrix}
\sim
\begin{pmatrix}B&O\\O&A\end{pmatrix},
$$

其解满足 $By_1=0,\ Ay_2=0$。由于 $Ax=0$ 与 $Bx=0$ 同解，故两个分块方程组同解。
+++

## 07

1. 设 $\alpha_1=(\lambda,1,1)^T$，$\alpha_2=(1,\lambda,1)^T$，$\alpha_3=(1,1,\lambda)^T$，$\alpha_4=(1,\lambda,\lambda^2)^T$。若 $\alpha_1,\alpha_2,\alpha_3$ 与 $\alpha_1,\alpha_2,\alpha_4$ 等价，则 $\lambda$ 的取值范围是（　）{.quiz .no-index}
    - $\{0,1\}$.
    - $\{\lambda\mid \lambda\in\mathbb R,\lambda\ne-2\}$.
    - $\{\lambda\mid \lambda\in\mathbb R,\lambda\ne-1,\lambda\ne-2\}$. {.correct}
    - $\{\lambda\mid \lambda\in\mathbb R,\lambda\ne-1\}$.
{.options}

+++ 答案与解析
正确答案：`C`.

两向量组等价的充要条件为

$$
r(\alpha_1,\alpha_2,\alpha_3)
=r(\alpha_1,\alpha_2,\alpha_4)
=r(\alpha_1,\alpha_2,\alpha_3,\alpha_4).
$$

计算行列式得

$$
|\alpha_1,\alpha_2,\alpha_3|=(\lambda-1)^2(\lambda+2),
\qquad
|\alpha_1,\alpha_2,\alpha_4|=(\lambda-1)^2(\lambda+1).
$$

当 $\lambda\ne-2$ 且 $\lambda\ne-1$ 时，两个三元向量组的秩均与合并向量组一致，故等价。$\lambda=1$ 时四个向量相同，也包含在该范围中。
+++

## 08

1. 设随机变量 $X$ 服从区间 $(0,3)$ 上的均匀分布，随机变量 $Y$ 服从参数为 $2$ 的泊松分布，且 $X$ 与 $Y$ 的协方差为 $-1$，则 $D(2X-Y+1)=$（　）{.quiz .no-index}
    - $1$.
    - $5$.
    - $9$. {.correct}
    - $12$.
{.options}

+++ 答案与解析
正确答案：`C`.

$X\sim U(0,3)$，故 $D(X)=\frac{(3-0)^2}{12}=\frac34$；$Y$ 服从参数为 $2$ 的泊松分布，故 $D(Y)=2$。

因此

$$
D(2X-Y+1)=4D(X)+D(Y)-4\operatorname{Cov}(X,Y)
=4\cdot\frac34+2-4(-1)=9.
$$
+++

## 09

1. 设随机变量 $X_1,X_2,\cdots,X_n$ 独立同分布，且 $X_1$ 的 4 阶矩存在，$E(X_1^k)=\mu_k\ (k=1,2,3,4)$，则根据切比雪夫不等式，对任意 $\varepsilon>0$，都有

   $$
   P\left\{\left|\frac1n\sum_{i=1}^nX_i^2-\mu_2\right|\ge\varepsilon\right\}\le
   $$

   （　）{.quiz .no-index}
    - $\dfrac{\mu_4-\mu_2^2}{n\varepsilon^2}$. {.correct}
    - $\dfrac{\mu_4-\mu_2^2}{\sqrt n\,\varepsilon^2}$.
    - $\dfrac{\mu_2-\mu_1^2}{n\varepsilon^2}$.
    - $\dfrac{\mu_2-\mu_1^2}{\sqrt n\,\varepsilon^2}$.
{.options}

+++ 答案与解析
正确答案：`A`.

令

$$
\overline{Z}=\frac1n\sum_{i=1}^nX_i^2.
$$

则 $E(\overline Z)=\mu_2$。由于 $X_i$ 独立同分布，

$$
D(\overline Z)
=\frac1{n^2}\sum_{i=1}^nD(X_i^2)
=\frac{\mu_4-\mu_2^2}{n}.
$$

由切比雪夫不等式得

$$
P\{|\overline Z-\mu_2|\ge\varepsilon\}
\le\frac{D(\overline Z)}{\varepsilon^2}
=\frac{\mu_4-\mu_2^2}{n\varepsilon^2}.
$$
+++

## 10

1. 设随机变量 $X\sim N(0,1)$，若在 $X=x$ 的条件下，随机变量 $Y\sim N(x,1)$，则 $X$ 与 $Y$ 的相关系数为（　）{.quiz .no-index}
    - $\dfrac14$.
    - $\dfrac12$.
    - $\dfrac{\sqrt3}{3}$.
    - $\dfrac{\sqrt2}{2}$. {.correct}
{.options}

+++ 答案与解析
正确答案：`D`.

由条件分布可写成

$$
Y=X+\varepsilon,
$$

其中 $\varepsilon\sim N(0,1)$ 且与 $X$ 独立。于是

$$
\operatorname{Cov}(X,Y)=\operatorname{Cov}(X,X+\varepsilon)=D(X)=1,
$$

且 $D(Y)=D(X)+D(\varepsilon)=2$。故相关系数为

$$
\rho_{XY}=\frac{\operatorname{Cov}(X,Y)}{\sqrt{D(X)D(Y)}}=\frac1{\sqrt2}=\frac{\sqrt2}{2}.
$$
+++

# 填空题

11～16 小题，每小题 5 分，共 30 分。

## 11

函数 $f(x,y)=x^2+2y^2$ 在点 $(0,1)$ 处的最大方向导数为 ______。

+++ 答案与解析
答案：$4$.

最大方向导数等于梯度模长。因为

$$
\nabla f(x,y)=(2x,4y),
$$

所以 $\nabla f(0,1)=(0,4)$，最大方向导数为 $|\nabla f(0,1)|=4$。
+++

## 12

$$
\int_1^{e^2}\frac{\ln x}{\sqrt{x}}\,dx= \underline{\hspace{3cm}}.
$$

+++ 答案与解析
答案：$4$.

令 $t=\sqrt{x}$，则 $x=t^2,\ dx=2t\,dt$，积分化为

$$
\int_1^e \frac{\ln t^2}{t}\cdot2t\,dt
=4\int_1^e\ln t\,dt
=4[t\ln t-t]_1^e
=4.
$$
+++

## 13

当 $x\ge0,\ y\ge0$ 时，$x^2+y^2\le ke^{x+y}$ 恒成立，则 $k$ 的取值范围是 ______。

+++ 答案与解析
答案：$[4e^{-2},+\infty)$.

原不等式等价于

$$
(x^2+y^2)e^{-(x+y)}\le k.
$$

设 $F(x,y)=(x^2+y^2)e^{-(x+y)}$。在区域内部驻点满足

$$
2x=x^2+y^2,\qquad 2y=x^2+y^2,
$$

得 $(1,1)$，此时 $F(1,1)=2e^{-2}$。边界 $x=0$ 时 $F(0,y)=y^2e^{-y}$，最大值在 $y=2$ 处取得，为 $4e^{-2}$；边界 $y=0$ 同理。故最大值为 $4e^{-2}$。
+++

## 14

已知级数 $\displaystyle\sum_{n=1}^{\infty}\frac{n!}{n^n}e^{-nx}$ 的收敛域为 $(a,+\infty)$，则 $a=$ ______。

+++ 答案与解析
答案：$-1$.

令 $u_n=\frac{n!}{n^n}e^{-nx}$。则

$$
\lim_{n\to\infty}\frac{u_{n+1}}{u_n}
=e^{-x}\lim_{n\to\infty}\frac{n^n}{(n+1)^n}
=e^{-x-1}.
$$

由比值审敛法，级数收敛需 $e^{-x-1}<1$，即 $x>-1$。当 $x<-1$ 时级数发散。端点 $x=-1$ 时，原级数为

$$
\sum_{n=1}^{\infty}\frac{n!}{n^n}e^n,
$$

其一般项不趋于 $0$，故发散。因此收敛域为 $(-1,+\infty)$，所以 $a=-1$。
+++

## 15

已知矩阵 $A$ 和 $E-A$ 可逆，其中 $E$ 为单位矩阵。若矩阵 $B$ 满足

$$
\left[E-(E-A)^{-1}\right]B=A,
$$

则 $B-A=$ ______。

+++ 答案与解析
答案：$-E$.

两端左乘 $E-A$：

$$
\left[(E-A)-(E-A)(E-A)^{-1}\right]B=(E-A)A.
$$

即

$$
-AB=A-A^2.
$$

由于 $A$ 可逆，左乘 $A^{-1}$ 得 $-B=E-A$，所以 $B=A-E$，从而 $B-A=-E$。
+++

## 16

设 $A,B,C$ 为随机事件，且 $A$ 与 $B$ 互不相容，$A$ 与 $C$ 互不相容，$B$ 与 $C$ 相互独立，$P(A)=P(B)=P(C)=\dfrac13$，则

$$
P(B\cup C\mid A\cup B\cup C)= \underline{\hspace{3cm}}.
$$

+++ 答案与解析
答案：$\dfrac58$.

由条件知

$$
P(AB)=P(AC)=0,\qquad P(BC)=P(B)P(C)=\frac19.
$$

所以

$$
P(A\cup B\cup C)=\frac13+\frac13+\frac13-\frac19=\frac89,
$$

且

$$
P(B\cup C)=\frac13+\frac13-\frac19=\frac59.
$$

故

$$
P(B\cup C\mid A\cup B\cup C)=\frac{P(B\cup C)}{P(A\cup B\cup C)}=\frac58.
$$
+++

# 解答题

17～22 小题，共 70 分。解答应写出文字说明、证明过程或演算步骤。

## 17

（本题满分 10 分）设函数 $y(x)$ 是微分方程

$$
y'+\frac1{2\sqrt{x}}y=2+\sqrt{x}
$$

的满足条件 $y(1)=3$ 的解，求曲线 $y=y(x)$ 的渐近线。

+++ 答案与解析
答案：曲线的渐近线为 $y=2x$.

该方程为一阶线性微分方程。积分因子为

$$
e^{\int\frac1{2\sqrt{x}}dx}=e^{\sqrt{x}}.
$$

故

$$
y=e^{-\sqrt{x}}\left[\int(2+\sqrt{x})e^{\sqrt{x}}\,dx+C\right].
$$

令 $u=\sqrt{x}$，则

$$
\int(2+\sqrt{x})e^{\sqrt{x}}\,dx
=2\int(2+u)ue^u\,du
=2u^2e^u
=2xe^{\sqrt{x}}.
$$

于是

$$
y=2x+Ce^{-\sqrt{x}}.
$$

由 $y(1)=3$ 得 $C=e$，即

$$
y=2x+e^{1-\sqrt{x}}.
$$

当 $x\to+\infty$ 时，$y-2x=e^{1-\sqrt{x}}\to0$，所以斜渐近线为 $y=2x$。
+++

## 18

（本题满分 12 分）已知平面区域

$$
D=\left\{(x,y)\ \middle|\ y-2\le x\le\sqrt{4-y^2},\ 0\le y\le2\right\},
$$

计算

$$
I=\iint_D\frac{(x-y)^2}{x^2+y^2}\,dx\,dy.
$$

+++ 答案与解析
答案：$2\pi-2$.

区域 $D$ 由直线 $y=x+2$、圆 $x^2+y^2=4$ 以及 $x$ 轴围成。转为极坐标后，被积函数与面积元为

$$
\frac{(x-y)^2}{x^2+y^2}\,dx\,dy
=(\cos\theta-\sin\theta)^2 r\,dr\,d\theta.
$$

区域可分为

$$
D_1:\ 0\le\theta\le\frac\pi2,\ 0\le r\le2,
$$

以及

$$
D_2:\ \frac\pi2\le\theta\le\pi,\ 0\le r\le\frac{2}{\sin\theta-\cos\theta}.
$$

于是

$$
I=\int_0^{\pi/2}\int_0^2(\cos\theta-\sin\theta)^2r\,dr\,d\theta
+\int_{\pi/2}^{\pi}\int_0^{2/(\sin\theta-\cos\theta)}(\cos\theta-\sin\theta)^2r\,dr\,d\theta.
$$

计算得

$$
I=\pi-2+\pi=2\pi-2.
$$
+++

## 19

（本题满分 12 分）已知曲线 $L$ 是曲面

$$
\Sigma:\ 4x^2+y^2+z^2=1,\quad x\ge0,\ y\ge0,\ z\ge0
$$

的边界，曲面 $\Sigma$ 方向朝上，曲线 $L$ 的方向和曲面 $\Sigma$ 的方向符合右手法则，计算

$$
I=\oint_L (yz^2-\cos z)\,dx+2xz^2\,dy+(2xyz+x\sin z)\,dz.
$$

+++ 答案与解析
答案：$0$.

记

$$
P=yz^2-\cos z,\quad Q=2xz^2,\quad R=2xyz+x\sin z.
$$

由斯托克斯公式，

$$
I=\iint_\Sigma
\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right)dy\,dz
+\left(\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}\right)dz\,dx
+\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dx\,dy.
$$

计算得

$$
I=\iint_\Sigma (-2xz)\,dy\,dz+z^2\,dx\,dy.
$$

给 $\Sigma$ 补上三个坐标面上的边界曲面，构成第一卦限中的封闭曲面。对向量场 $(-2xz,0,z^2)$ 用高斯公式，其散度为

$$
\frac{\partial(-2xz)}{\partial x}+\frac{\partial z^2}{\partial z}=-2z+2z=0.
$$

坐标面补片上的通量也为 $0$，所以 $I=0$。
+++

## 20

（本题满分 12 分）设函数 $f(x)$ 在 $(-\infty,+\infty)$ 上有二阶连续导数，证明：$f''(x)\ge0$ 的充分必要条件是对任意不同的实数 $a,b$，都有

$$
f\left(\frac{a+b}{2}\right)\le\frac1{b-a}\int_a^b f(x)\,dx
$$

成立。

+++ 答案与解析
证明如下.

不妨设 $a<b$，记 $m=\frac{a+b}{2}$。

先证必要性。若 $f''(x)\ge0$，则 $f$ 为凸函数。对任意 $t\in[0,\frac{b-a}{2}]$，凸性给出

$$
f(m)\le\frac{f(m-t)+f(m+t)}2.
$$

两端对 $t$ 从 $0$ 到 $\frac{b-a}{2}$ 积分，得

$$
\frac{b-a}{2}f(m)
\le
\frac12\int_0^{(b-a)/2}\left[f(m-t)+f(m+t)\right]dt
=\frac12\int_a^b f(x)\,dx.
$$

整理即得

$$
f(m)\le\frac1{b-a}\int_a^b f(x)\,dx.
$$

再证充分性。若存在 $x_0$ 使 $f''(x_0)<0$，由连续性可取充分小的 $h>0$，使 $f''(x)<0$ 在 $[x_0-h,x_0+h]$ 上成立。此时 $f$ 在该小区间上严格凹，按上面不等式反向成立：

$$
f(x_0)>\frac1{2h}\int_{x_0-h}^{x_0+h}f(x)\,dx,
$$

与题设矛盾。因此对任意 $x$ 都有 $f''(x)\ge0$。
+++

## 21

（本题满分 12 分）设二次型

$$
f(x_1,x_2,x_3)=\sum_{i=1}^{3}\sum_{j=1}^{3}ijx_ix_j.
$$

（Ⅰ）写出 $f(x_1,x_2,x_3)$ 对应的矩阵；

（Ⅱ）求正交变换 $x=Qy$ 将 $f(x_1,x_2,x_3)$ 化为标准形；

（Ⅲ）求 $f(x_1,x_2,x_3)=0$ 的解。

+++ 答案与解析
答案：（Ⅰ）$A=\begin{pmatrix}1&2&3\\2&4&6\\3&6&9\end{pmatrix}$；（Ⅱ）标准形为 $14y_1^2$；（Ⅲ）$x_1+2x_2+3x_3=0$.

（Ⅰ）二次型对应矩阵为

$$
A=(ij)_{3\times3}
=\begin{pmatrix}
1&2&3\\
2&4&6\\
3&6&9
\end{pmatrix}.
$$

该矩阵可写为

$$
A=\begin{pmatrix}1\\2\\3\end{pmatrix}
\begin{pmatrix}1&2&3\end{pmatrix},
$$

故特征值为 $14,0,0$。

取单位正交特征向量

$$
\varepsilon_1=\frac1{\sqrt{14}}\begin{pmatrix}1\\2\\3\end{pmatrix},\quad
\varepsilon_2=\frac1{\sqrt5}\begin{pmatrix}-2\\1\\0\end{pmatrix},\quad
\varepsilon_3=\frac1{\sqrt{70}}\begin{pmatrix}-3\\-6\\5\end{pmatrix}.
$$

令

$$
Q=(\varepsilon_1,\varepsilon_2,\varepsilon_3),
$$

则正交变换 $x=Qy$ 下

$$
Q^TAQ=\operatorname{diag}(14,0,0),
$$

所以标准形为

$$
f=14y_1^2.
$$

由 $f=(x_1+2x_2+3x_3)^2$，方程 $f=0$ 等价于

$$
x_1+2x_2+3x_3=0.
$$

其通解为

$$
x=k_1\begin{pmatrix}-2\\1\\0\end{pmatrix}
+k_2\begin{pmatrix}-3\\0\\1\end{pmatrix},
$$

其中 $k_1,k_2$ 为任意常数。
+++

## 22

（本题满分 12 分）设 $X_1,X_2,\cdots,X_n$ 为来自均值为 $\theta$ 的指数分布总体的简单随机样本，$Y_1,Y_2,\cdots,Y_m$ 为来自均值为 $2\theta$ 的指数分布总体的简单随机样本，且两样本相互独立，其中 $\theta(\theta>0)$ 是未知参数。利用样本 $X_1,X_2,\cdots,X_n,Y_1,Y_2,\cdots,Y_m$，求 $\theta$ 的最大似然估计量 $\hat\theta$，并求 $D(\hat\theta)$。

+++ 答案与解析
答案：$\displaystyle\hat\theta=\frac{2\sum_{i=1}^nX_i+\sum_{j=1}^mY_j}{2(m+n)}$，$\displaystyle D(\hat\theta)=\frac{\theta^2}{m+n}$.

因为 $E(X)=\theta$，所以 $X_i$ 的密度为

$$
f_X(x)=\frac1\theta e^{-x/\theta},\quad x>0.
$$

因为 $E(Y)=2\theta$，所以 $Y_j$ 的密度为

$$
f_Y(y)=\frac1{2\theta}e^{-y/(2\theta)},\quad y>0.
$$

似然函数为

$$
L(\theta)=\frac1{2^m\theta^{m+n}}
\exp\left[
-\frac1\theta\sum_{i=1}^nx_i
-\frac1{2\theta}\sum_{j=1}^my_j
\right].
$$

取对数：

$$
\ln L(\theta)
=-m\ln2-(m+n)\ln\theta
-\frac1\theta\sum_{i=1}^nx_i
-\frac1{2\theta}\sum_{j=1}^my_j.
$$

令导数为 $0$：

$$
-\frac{m+n}{\theta}
+\frac1{\theta^2}\sum_{i=1}^nx_i
+\frac1{2\theta^2}\sum_{j=1}^my_j=0.
$$

解得

$$
\hat\theta=\frac{\sum_{i=1}^nX_i+\frac12\sum_{j=1}^mY_j}{m+n}
=\frac{2\sum_{i=1}^nX_i+\sum_{j=1}^mY_j}{2(m+n)}.
$$

又 $D(X_i)=\theta^2$，$D(Y_j)=(2\theta)^2=4\theta^2$，且两样本相互独立，故

$$
D(\hat\theta)
=\frac1{(m+n)^2}D\left(\sum_{i=1}^nX_i\right)
+\frac1{4(m+n)^2}D\left(\sum_{j=1}^mY_j\right)
=\frac{n\theta^2+m\theta^2}{(m+n)^2}
=\frac{\theta^2}{m+n}.
$$
+++
