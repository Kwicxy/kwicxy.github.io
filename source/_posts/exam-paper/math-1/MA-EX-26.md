---
layout: post
title: 2026 年考研数学一真题
description: 收录 2026 年考研数学一真题、参考答案与解析，按选择题、填空题和解答题编排，便于刷题复盘。
math: true
quiz: true
copyright: false
date: 2026-07-02 11:00:00
categories:
  - 试卷真题
  - 数学一
tags:
  - 考研数学
  - 数学一
  - 2026 年真题
---
> 收录 2026 年考研数学一真题、参考答案与解析，按选择题、填空题和解答题编排，便于刷题复盘。

# 2026 年考研数学一真题

# 选择题

1～10 小题，每小题 5 分，共 50 分。下列每题给出的四个选项中，只有一个选项符合题目要求。

## 01

1. 设函数 $z=z(x,y)$ 由方程 $x-az=e^{y+az}$（$a$ 是非 $0$ 常数）确定，则（　）{.quiz .no-index}
    - $\dfrac{\partial z}{\partial x}-\dfrac{\partial z}{\partial y}=\dfrac{1}{a}$. {.correct}
    - $\dfrac{\partial z}{\partial x}+\dfrac{\partial z}{\partial y}=\dfrac{1}{a}$.
    - $\dfrac{\partial z}{\partial x}-\dfrac{\partial z}{\partial y}=-\dfrac{1}{a}$.
    - $\dfrac{\partial z}{\partial x}+\dfrac{\partial z}{\partial y}=-\dfrac{1}{a}$.
{.options}

+++ 答案与解析
正确答案：`A`

由 $x-az=e^{y+az}$ 对 $x$、$y$ 分别求偏导：

$$
1-a z_x=ae^{y+az}z_x,\qquad
-a z_y=e^{y+az}(1+a z_y).
$$

解得

$$
z_x=\frac{1}{a(1+e^{y+az})},\qquad
z_y=-\frac{e^{y+az}}{a(1+e^{y+az})}.
$$

故 $z_x-z_y=\frac{1}{a}$。
+++

## 02

1. 幂级数 $\displaystyle \sum_{n=1}^{\infty}\left(\frac{3+(-1)^n}{4}\right)^n x^{2n}$ 的收敛域是（　）{.quiz .no-index}
    - $[-2,2]$.
    - $[-1,1]$.
    - $(-2,2)$.
    - $(-1,1)$. {.correct}
{.options}

+++ 答案与解析
正确答案：`D`

令 $y=x^2$，原级数化为 $\sum b_n y^n$，其中

$$
b_n=\left(\frac{3+(-1)^n}{4}\right)^n.
$$

$n$ 为偶数时 $b_n=1$，$n$ 为奇数时 $b_n=(1/2)^n$，所以根值上极限为 $1$，关于 $y$ 的收敛半径为 $1$。由 $|x|<1$ 得收敛；端点 $x=\pm1$ 时偶数项不趋于 $0$，发散。故收敛域为 $(-1,1)$。
+++

## 03

1. 设函数 $f(x)$ 在区间 $[-1,1]$ 上有定义，则（　）{.quiz .no-index}
    - 当 $f(x)$ 在 $(-1,0)$ 单调递减，在 $(0,1)$ 单调递增时，$f(0)$ 是极小值.
    - 当 $f(0)$ 是极小值时，$f(x)$ 在 $(-1,0)$ 单调递减，在 $(0,1)$ 单调递增.
    - 当 $f(x)$ 的图形在 $[-1,1]$ 是凹的时，$\frac{f(x)-f(1)}{x-1}$ 在 $[-1,1)$ 单调递增. {.correct}
    - $\frac{f(x)-f(1)}{x-1}$ 在 $[-1,1)$ 单调递增时，$f(x)$ 的图形在 $[-1,1]$ 是凹的.
{.options}

+++ 答案与解析
正确答案：`C`

A、B 都忽略了函数在 $0$ 附近可能不连续或震荡；D 的割线斜率单调性不能反推整体凹性。若 $f$ 凹向上，则导数单调递增，固定右端点 $1$ 时，割线斜率

$$
\frac{f(x)-f(1)}{x-1}
$$

随 $x$ 增大而增大，故 C 正确。
+++

## 04

1. 已知有界区域 $\Omega$ 由曲面 $z=\sqrt{4-x^2-y^2}$ 与 $z=\sqrt{x^2+y^2}$ 围成，函数 $f(u)$ 连续，则（　）{.quiz .no-index}
    - $\displaystyle \int_0^{2\pi}d\theta\int_0^2dr\int_r^{\sqrt{4-r^2}} f(r^2+z^2)r\,dz$.
    - $\displaystyle \int_0^{2\pi}d\theta\int_0^{\sqrt2}dr\int_0^{\sqrt{4-r^2}} f(r^2+z^2)r\,dz$.
    - $\displaystyle \int_0^{2\pi}d\theta\int_0^{\pi/4}d\varphi\int_0^2 f(r^2)r^2\sin\varphi\,dr$. {.correct}
    - $\displaystyle \int_0^{2\pi}d\theta\int_0^{\pi/2}d\varphi\int_0^2 f(r^2)r^2\sin\varphi\,dr$.
{.options}

+++ 答案与解析
正确答案：`C`

区域由半径为 $2$ 的上半球面与圆锥面 $z=\sqrt{x^2+y^2}$ 围成。球坐标下

$$
x=\rho\sin\varphi\cos\theta,\quad y=\rho\sin\varphi\sin\theta,\quad z=\rho\cos\varphi.
$$

圆锥面对应 $\varphi=\pi/4$，半球面对应 $0\le \rho\le2$，且 $0\le\theta\le2\pi$。被积函数变为 $f(\rho^2)$，体积元为 $\rho^2\sin\varphi\,d\rho d\varphi d\theta$。
+++

## 05

1. 单位矩阵经过若干次互换两行得到的矩阵称为置换矩阵。设 $A$ 为 $n$ 阶置换矩阵，$A^*$ 为 $A$ 的伴随矩阵，则（　）{.quiz .no-index}
    - $A^*$ 为置换矩阵.
    - $A^{-1}$ 为置换矩阵. {.correct}
    - $A^{-1}=A^*$.
    - $A^{-1}=-A^*$.
{.options}

+++ 答案与解析
正确答案：`B`

置换矩阵是正交矩阵，满足 $A^{-1}=A^T$，而 $A^T$ 仍为置换矩阵。又 $A^*=\det(A)A^{-1}$，当 $\det(A)=-1$ 时，$A^*$ 可能含负元素，所以 A 不恒成立；C、D 也只在特定行交换奇偶性下成立。
+++

## 06

1. 设 $A$、$B$ 为 $n$ 阶矩阵，$\beta$ 是 $n$ 维列向量。若 $A$ 的列向量组可由 $B$ 的列向量组表示，则（　）{.quiz .no-index}
    - 当 $Ax=\beta$ 有解时，$Bx=\beta$ 有解. {.correct}
    - 当 $A^Tx=\beta$ 有解时，$B^Tx=\beta$ 有解.
    - 当 $Bx=\beta$ 有解时，$Ax=\beta$ 有解.
    - 当 $B^Tx=\beta$ 有解时，$A^Tx=\beta$ 有解.
{.options}

+++ 答案与解析
正确答案：`A`

$A$ 的列向量组可由 $B$ 的列向量组表示，等价于存在矩阵 $C$ 使 $A=BC$，因此

$$
\operatorname{Col}(A)\subseteq \operatorname{Col}(B).
$$

若 $Ax=\beta$ 有解，则 $\beta\in\operatorname{Col}(A)$，从而 $\beta\in\operatorname{Col}(B)$，所以 $Bx=\beta$ 有解。
+++

## 07

1. 设二次型 $f(x_1,x_2,x_3)=a(x_1^2+x_2^2+x_3^2)+4x_1x_2+4x_1x_3+4x_2x_3$。若方程 $f(x_1,x_2,x_3)=-1$ 表示的曲面为圆柱面，则（　）{.quiz .no-index}
    - $a=-4$，且 $f$ 的规范型为 $-y_1^2-y_2^2-y_3^2$.
    - $a=-4$，且 $f$ 在正交变换下的标准型为 $-6y_1^2-6y_2^2$. {.correct}
    - $a=2$，且 $f$ 的规范型为 $-y_1^2-y_2^2-y_3^2$.
    - $a=2$，且 $f$ 在正交变换下的标准型为 $-6y_1^2-6y_2^2$.
{.options}

+++ 答案与解析
正确答案：`B`

二次型矩阵为

$$
\begin{pmatrix}
a&2&2\\
2&a&2\\
2&2&a
\end{pmatrix},
$$

特征值为 $a+4$、$a-2$、$a-2$。圆柱面要求一个特征值为 $0$，其余两个同号且方程有实点。取 $a=-4$ 时，特征值为 $0,-6,-6$，正交变换下标准型为 $-6y_1^2-6y_2^2$，方程化为 $y_1^2+y_2^2=1/6$，是圆柱面。
+++

## 08

1. 设随机变量 $X\sim N(1,2)$，令 $f(t)=E[(X+t)^2]$，则 $f(t)$ 的最小值点和最小值分别为（　）{.quiz .no-index}
    - $1,2$.
    - $1,4$.
    - $-1,2$. {.correct}
    - $-1,4$.
{.options}

+++ 答案与解析
正确答案：`C`

$$
f(t)=E(X^2)+2tE(X)+t^2.
$$

由 $X\sim N(1,2)$ 得 $E(X)=1$、$E(X^2)=D(X)+[E(X)]^2=3$，所以

$$
f(t)=t^2+2t+3=(t+1)^2+2.
$$

最小值点为 $t=-1$，最小值为 $2$。
+++

## 09

1. 设连续型随机变量 $X$ 的分布函数为 $F(x)$，随机变量 $Y$ 的分布函数为 $F(ay+b)$，$X$ 的数学期望为 $\mu$，方差为 $\sigma^2$（$\sigma>0$）。若 $Y$ 的数学期望和方差分别为 $0$ 和 $1$，则（　）{.quiz .no-index}
    - $a=\sigma,\ b=\mu$. {.correct}
    - $a=\sigma,\ b=-\mu$.
    - $a=\frac{1}{\sigma},\ b=\mu$.
    - $a=\frac{1}{\sigma},\ b=-\mu$.
{.options}

+++ 答案与解析
正确答案：`A`

由 $F_Y(y)=F(ay+b)$ 可知 $X=aY+b$，即

$$
Y=\frac{X-b}{a}.
$$

于是

$$
E(Y)=\frac{\mu-b}{a}=0,\qquad D(Y)=\frac{\sigma^2}{a^2}=1.
$$

取 $a>0$，得 $a=\sigma$，$b=\mu$。
+++

## 10

1. 设随机变量 $X$ 的概率分布为 $P\{X=k\}=\frac{1}{2^{k+1}}+\frac{1}{3^k}$（$k=1,2,\cdots$），则对于正整数 $m,n$ 有（　）{.quiz .no-index}
    - $P\{X>m+n\mid X>m\}=P\{X>m\}$.
    - $P\{X>m+n\mid X>m\}=P\{X>n\}$.
    - $P\{X>m+n\mid X>m\}>P\{X>m\}$.
    - $P\{X>m+n\mid X>m\}>P\{X>n\}$. {.correct}
{.options}

+++ 答案与解析
正确答案：`D`

先求尾概率：

$$
P\{X>k\}=\sum_{j=k+1}^{\infty}\left(\frac{1}{2^{j+1}}+\frac{1}{3^j}\right)
=\frac{1}{2^{k+1}}+\frac{1}{2\cdot3^k}.
$$

因此 $P\{X>m+n\mid X>m\}$ 是 $2^{-n}$ 与 $3^{-n}$ 的加权平均，且权重更偏向较大的 $2^{-n}$.而 $P\{X>n\}$ 是二者的等权平均。故条件概率大于 $P\{X>n\}$。
+++

# 填空题

11～16 小题，每小题 5 分，共 30 分。

## 11

设向量 $v_1=(0,x,z)$，$v_2=(y,0,1)$，令 $F(x,y,z)=v_1\times v_2$，则 $\operatorname{div}F=$ ____________。

+++ 答案与解析
答案：$1+z$.

$$
F=v_1\times v_2=(x,yz,-xy).
$$

故

$$
\operatorname{div}F=\frac{\partial x}{\partial x}
+\frac{\partial (yz)}{\partial y}
+\frac{\partial(-xy)}{\partial z}=1+z.
$$
+++

## 12

$\displaystyle \lim_{x\to0}\left(\frac{1}{x}-\frac{\ln(1+x)}{x\sin x}\right)=$ ____________。

+++ 答案与解析
答案：$\frac{1}{2}$.

通分得

$$
\lim_{x\to0}\frac{\sin x-\ln(1+x)}{x\sin x}.
$$

分子分母均趋于 $0$，两次使用洛必达法则：

$$
\lim_{x\to0}\frac{\cos x-\frac1{1+x}}{\sin x+x\cos x}
=
\lim_{x\to0}\frac{-\sin x+\frac1{(1+x)^2}}{2\cos x-x\sin x}
=\frac12.
$$
+++

## 13

设函数 $y=y(x)$ 由参数方程

$$
x=2\sin^2t,\qquad y=t+\cos t
$$

确定，则 $\left.\frac{d^2y}{dx^2}\right|_{t=\pi/4}=$ ____________。

+++ 答案与解析
答案：$-\frac{\sqrt2}{8}$.

$$
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}
=\frac{1-\sin t}{4\sin t\cos t}.
$$

再用

$$
\frac{d^2y}{dx^2}=\frac{d}{dt}\left(\frac{dy}{dx}\right)\bigg/\frac{dx}{dt}.
$$

当 $t=\pi/4$ 时，$\sin t=\cos t=\sqrt2/2$，代入得

$$
\left.\frac{d^2y}{dx^2}\right|_{t=\pi/4}=-\frac{\sqrt2}{8}.
$$
+++

## 14

设 $\displaystyle \int_1^{+\infty}\frac{\ln(x+1)}{x^2}\,dx=$ ____________。

+++ 答案与解析
答案：$2\ln2$.

分部积分，取 $u=\ln(x+1)$、$dv=x^{-2}dx$，则

$$
I=\left.-\frac{\ln(x+1)}{x}\right|_1^{+\infty}
+\int_1^{+\infty}\frac{1}{x(x+1)}\,dx.
$$

第一项为 $\ln2$.第二项

$$
\int_1^{+\infty}\left(\frac1x-\frac1{x+1}\right)dx=\ln2.
$$

故 $I=2\ln2$。
+++

## 15

设矩阵

$$
A=\begin{pmatrix}
1&0&0\\
2&a&2\\
0&2&a
\end{pmatrix},\qquad
B=\begin{pmatrix}
a&-1&-1\\
-1&2&1\\
-1&1&a
\end{pmatrix}.
$$

记 $m(X)$ 为 3 阶矩阵 $X$ 的实特征值中的最大值。若 $m(A)<m(B)$，则 $a$ 的取值范围为 ____________。

+++ 答案与解析
答案：$(-\infty,0)$.

$A$ 的特征值为 $1,a-2,a+2$，所以

$$
m(A)=\max\{1,a+2\}.
$$

$B$ 的特征值可化为 $a-1$、$2$、$a+1$，从而

$$
m(B)=
\begin{cases}
2,&a\le1,\\
a+1,&a>1.
\end{cases}
$$

分段比较：

- $a\le-1$ 时，$m(A)=1<2=m(B)$.
- $-1<a\le1$ 时，$a+2<2$，得 $a<0$.
- $a>1$ 时，$a+2<a+1$ 无解。

故 $a<0$。
+++

## 16

设随机变量 $X$ 服从参数为 $1$ 的泊松分布，随机变量 $Y$ 服从参数为 $3$ 的泊松分布，$X$ 与 $Y-X$ 相互独立，则 $E(XY)=$ ____________。

+++ 答案与解析
答案：$4$.

由 $X\sim P(1)$ 得 $E(X)=1$，$E(X^2)=D(X)+[E(X)]^2=2$。又

$$
E(Y-X)=E(Y)-E(X)=3-1=2.
$$

因为 $X$ 与 $Y-X$ 独立，

$$
E(XY)=E[X(X+Y-X)]=E(X^2)+E[X(Y-X)]=2+1\cdot2=4.
$$
+++

# 解答题

17～22 小题，共 70 分。解答应写出文字说明、证明过程或演算步骤。

## 17

（本题满分 10 分）求 $f(x,y)=(2x^2-y^2)e^x$ 的极值。

+++ 答案与解析
答案：在 $(-2,0)$ 处取得极大值 $8e^{-2}$.$(0,0)$ 为鞍点，无极值。

先求一阶偏导：

$$
f_x=e^x(2x^2+4x-y^2),\qquad f_y=-2ye^x.
$$

令 $f_x=f_y=0$，得临界点 $(0,0)$ 与 $(-2,0)$。

二阶偏导为

$$
f_{xx}=e^x(2x^2+8x+4-y^2),\quad f_{yy}=-2e^x,\quad f_{xy}=-2ye^x.
$$

在 $(0,0)$ 处，$D=f_{xx}f_{yy}-f_{xy}^2=4(-2)<0$，为鞍点。  
在 $(-2,0)$ 处，$D>0$ 且 $f_{xx}<0$，为极大值点，极大值

$$
f(-2,0)=8e^{-2}.
$$
+++

## 18

（本题满分 12 分）设 $f(u)$ 在 $(0,+\infty)$ 内具有 3 阶连续导数，且存在可微函数 $F(x,y)$ 使

$$
dF(x,y)=\frac{f(xy)}{x^2y}\,dx+\frac{f''(xy)}{xy^2}\,dy\qquad(xy>0).
$$

(1) 证明：$\frac{f''(u)}{u}-\frac{f(u)}{u}=c$，$c$ 为常数；  
(2) 设 $f(1)=1$，$f'(1)=-1$，$f''(1)=0$，求 $f(u)$ 的表达式。

+++ 答案与解析
答案：

$$
f(u)=e^{1-u}-e^{u-1}+u.
$$

设

$$
M=\frac{f(xy)}{x^2y},\qquad N=\frac{f''(xy)}{xy^2}.
$$

由于 $dF=Mdx+Ndy$ 是全微分，故 $M_y=N_x$。计算得

$$
\frac{xyf'(xy)-f(xy)}{x^2y^2}
=
\frac{xyf'''(xy)-f''(xy)}{x^2y^2}.
$$

令 $u=xy$，得

$$
uf'(u)-f(u)=uf'''(u)-f''(u).
$$

两边除以 $u^2$ 可写成

$$
\frac{d}{du}\left(\frac{f(u)}{u}\right)
=
\frac{d}{du}\left(\frac{f''(u)}{u}\right),
$$

故

$$
\frac{f''(u)}{u}-\frac{f(u)}{u}=c.
$$

代入 $u=1$ 得 $c=f''(1)-f(1)=-1$，所以

$$
f''(u)-f(u)=-u.
$$

通解为

$$
f(u)=Ae^u+Be^{-u}+u.
$$

由 $f(1)=1$、$f'(1)=-1$ 解得 $A=-e^{-1}$、$B=e$，故

$$
f(u)=e^{1-u}-e^{u-1}+u.
$$
+++

## 19

（本题满分 12 分）设有向曲线 $L$ 为椭圆 $x^2+3y^2=1$ 上沿逆时针方向从点 $A(-\frac12,-\frac12)$ 到点 $B(\frac12,\frac12)$ 的部分，计算曲线积分

$$
I=\int_L (e^{x^2}\sin x-2xy)\,dx+(6x-x^2-y\cos4y)\,dy.
$$

+++ 答案与解析
答案：

$$
I=\sqrt3\pi-\frac14.
$$

设

$$
P=e^{x^2}\sin x-2xy,\qquad Q=6x-x^2-y\cos4y.
$$

则

$$
\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}
=(6-2x)-(-2x)=6.
$$

整个椭圆面积为 $\pi/\sqrt3$，故

$$
\oint_E Pdx+Qdy=6\cdot\frac{\pi}{\sqrt3}=2\sqrt3\pi.
$$

取另一段椭圆弧 $L_2$，并补直线段 $L_1'$：$x=t,y=t$，$t\in[-1/2,1/2]$。直线段积分中奇函数项为零，只剩

$$
\int_{-1/2}^{1/2}(-3t^2)\,dt=-\frac14.
$$

由对称性，$L_2\cup L_1'$ 围成面积为椭圆面积的一半，故

$$
\int_{L_2}+\int_{L_1'}=6\cdot\frac{\pi}{2\sqrt3}=\sqrt3\pi.
$$

于是

$$
\int_{L_2}=\sqrt3\pi+\frac14,\qquad
I=2\sqrt3\pi-\left(\sqrt3\pi+\frac14\right)
=\sqrt3\pi-\frac14.
$$
+++

## 20

（本题满分 12 分）设可导函数 $f(x)$ 严格单调递增且满足 $\displaystyle \int_{-1}^1 f(x)\,dx=0$，记 $\displaystyle a=\int_0^1 f(x)\,dx$。

(1) 证明：$a>0$.  
(2) 令 $\displaystyle F(x)=a(1-x^2)+\int_1^x f(t)\,dt$，证明：存在 $\xi\in(-1,1)$ 使 $F''(\xi)=0$。

+++ 答案与解析
(1) 因为 $f$ 严格单调递增，在 $(-1,0)$ 上 $f(x)<f(0)$，在 $(0,1)$ 上 $f(x)>f(0)$。又

$$
\int_{-1}^1 f(x)\,dx=0,\qquad a=\int_0^1 f(x)\,dx,
$$

所以 $\int_{-1}^0 f(x)\,dx=-a$。由严格单调性可得

$$
-a<f(0)<a,
$$

从而 $a>0$。

(2) 计算

$$
F(-1)=0,\qquad F(0)=a-\int_0^1f(t)\,dt=0,\qquad F(1)=0.
$$

在 $[-1,0]$ 与 $[0,1]$ 上分别应用罗尔定理，存在 $c_1\in(-1,0)$、$c_2\in(0,1)$，使

$$
F'(c_1)=F'(c_2)=0.
$$

再在 $[c_1,c_2]$ 上对 $F'$ 使用罗尔定理，存在 $\xi\in(c_1,c_2)\subset(-1,1)$，使

$$
F''(\xi)=0.
$$
+++

## 21

（本题满分 12 分）已知向量组

$$
\alpha_1=\begin{pmatrix}1\\0\\-1\\-1\end{pmatrix},\quad
\alpha_2=\begin{pmatrix}1\\-1\\0\\-2\end{pmatrix},\quad
\alpha_3=\begin{pmatrix}0\\-1\\1\\-1\end{pmatrix},\quad
\alpha_4=\begin{pmatrix}0\\1\\-1\\1\end{pmatrix}.
$$

记 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$，$G=(\alpha_1,\alpha_2)$。

(1) 证明：$\alpha_1,\alpha_2$ 是 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 的极大线性无关组。  
(2) 求矩阵 $H$ 使得 $A=GH$，并求 $A^{10}$。

+++ 答案与解析
(1) 设 $k_1\alpha_1+k_2\alpha_2=0$，由分量比较得 $k_1=k_2=0$，所以 $\alpha_1,\alpha_2$ 线性无关。又

$$
\alpha_3=-\alpha_1+\alpha_2,\qquad
\alpha_4=\alpha_1-\alpha_2,
$$

故其余向量都可由 $\alpha_1,\alpha_2$ 表示，所以 $\alpha_1,\alpha_2$ 是极大线性无关组。

(2) 各列在基 $G$ 下的坐标为

$$
(1,0)^T,\ (0,1)^T,\ (-1,1)^T,\ (1,-1)^T,
$$

因此

$$
H=
\begin{pmatrix}
1&0&-1&1\\
0&1&1&-1
\end{pmatrix}.
$$

由 $A=GH$ 得

$$
A^{10}=G(HG)^9H.
$$

计算

$$
HG=\begin{pmatrix}1&0\\-1&1\end{pmatrix}
=I+\begin{pmatrix}0&0\\-1&0\end{pmatrix},
$$

且幂零部分平方为 $0$，故

$$
(HG)^9=\begin{pmatrix}1&0\\-9&1\end{pmatrix}.
$$

最终

$$
A^{10}=
\begin{pmatrix}
1&0&-1&-1\\
-8&-1&9&7\\
-9&-1&10&8\\
9&1&-10&-8
\end{pmatrix}.
$$
+++

## 22

（本题满分 12 分）假设某种元件寿命服从指数分布，其均值 $\theta$ 是未知参数。为估计 $\theta$，取 $n$ 个这种元件同时做寿命实验，试验直到出现 $k$（$1\le k\le n$）个元件失效时停止。

(1) 若 $k=1$，失效元件寿命记为 $T$，求 $T$ 的概率密度；确定 $a$，使 $\hat\theta=aT$ 是 $\theta$ 的无偏估计，并求 $D(\hat\theta)$。  
(2) 已知 $k$ 个失效元件寿命值分别为 $t_1,t_2,\cdots,t_k$，且 $t_1\le t_2\le\cdots\le t_k$，似然函数为

$$
L(\theta)=\frac{1}{\theta^k}\exp\left\{-\frac1\theta\left[\sum_{i=1}^k t_i+(n-k)t_k\right]\right\},
$$

求 $\theta$ 的最大似然估计值。

+++ 答案与解析
(1) 单个元件寿命密度为

$$
f(t)=\frac1\theta e^{-t/\theta},\qquad t\ge0.
$$

第一个失效时间 $T$ 为 $n$ 个独立样本的最小值：

$$
P(T>t)=e^{-nt/\theta}.
$$

故

$$
f_T(t)=\frac{n}{\theta}e^{-nt/\theta},\qquad t\ge0.
$$

于是 $E(T)=\theta/n$，要使 $\hat\theta=aT$ 无偏，应取 $a=n$。又 $D(T)=\theta^2/n^2$，所以

$$
D(\hat\theta)=D(nT)=\theta^2.
$$

(2) 取对数似然：

$$
\ln L(\theta)=-k\ln\theta-\frac1\theta\left[\sum_{i=1}^k t_i+(n-k)t_k\right].
$$

求导并令其为 $0$：

$$
-\frac{k}{\theta}
+\frac{1}{\theta^2}\left[\sum_{i=1}^k t_i+(n-k)t_k\right]=0.
$$

解得最大似然估计

$$
\hat\theta=
\frac1k\left[\sum_{i=1}^k t_i+(n-k)t_k\right].
$$
+++
