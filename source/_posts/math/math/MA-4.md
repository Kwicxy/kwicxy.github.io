---
layout: post
title: 第4章 一元函数微分学的计算
math: true
date: 2026-07-14 23:28:03
categories:
  - 数学
  - 高等数学
tags:
---

本章集中整理考研数学中一元函数导数与微分的计算方法。做题时应先确认函数的定义域，再判断函数是显函数、分段函数、隐函数还是参数方程，最后选择相应的求导方法。所有公式都默认相关函数在所讨论点满足可导性要求。

# 一、基本求导公式

基本初等函数的求导公式也可参见同目录的《第 0 章 初等数学》（MA-TR-1）。本节仅列公式，不设置例题。

## 1. 常数、幂函数、指数函数与对数函数

$$
\begin{aligned}
(C)'&=0,\\
(x^\alpha)'&=\alpha x^{\alpha-1},\\
(e^x)'&=e^x,\\
(a^x)'&=a^x\ln a\quad(a>0,\ a\ne1),\\
(\ln x)'&=\frac1x\quad(x>0),\\
(\ln|x|)'&=\frac1x\quad(x\ne0),\\
(\log_a x)'&=\frac1{x\ln a}\quad(a>0,\ a\ne1,\ x>0).
\end{aligned}
$$

对于一般实数 $\alpha$，公式 $(x^\alpha)'=\alpha x^{\alpha-1}$ 通常在 $x>0$ 上使用；若 $\alpha$ 为整数，可按幂函数本身的定义域适当扩大范围。

## 2. 三角函数

$$
\begin{aligned}
(\sin x)'&=\cos x,\\
(\cos x)'&=-\sin x,\\
(\tan x)'&=\sec^2x,\\
(\cot x)'&=-\csc^2x,\\
(\sec x)'&=\sec x\tan x,\\
(\csc x)'&=-\csc x\cot x.
\end{aligned}
$$

## 3. 反三角函数

$$
\begin{aligned}
(\arcsin x)'&=\frac1{\sqrt{1-x^2}}\quad(|x|<1),\\
(\arccos x)'&=-\frac1{\sqrt{1-x^2}}\quad(|x|<1),\\
(\arctan x)'&=\frac1{1+x^2},\\
(\operatorname{arccot}x)'&=-\frac1{1+x^2}.
\end{aligned}
$$

# 二、四则运算

设 $u=u(x)$、$v=v(x)$ 在 $x$ 处可导，$C$ 为常数，则

$$
\begin{aligned}
(Cu)'&=Cu',\\
(u\pm v)'&=u'\pm v',\\
(uv)'&=u'v+uv',\\
\left(\frac uv\right)'&=\frac{u'v-uv'}{v^2}\quad(v\ne0).
\end{aligned}
$$

## 1. 由导数定义证明

由导数定义，

$$
\begin{aligned}
(u+v)'
&=\lim_{h\to0}\frac{u(x+h)+v(x+h)-u(x)-v(x)}h\\
&=u'(x)+v'(x).
\end{aligned}
$$

差法则和常数倍法则同理。对乘积，在分子中加减 $u(x)v(x+h)$：

$$
\begin{aligned}
(uv)'
&=\lim_{h\to0}\frac{u(x+h)v(x+h)-u(x)v(x)}h\\
&=\lim_{h\to0}\left[
\frac{u(x+h)-u(x)}h\,v(x+h)
+u(x)\frac{v(x+h)-v(x)}h
\right]\\
&=u'(x)v(x)+u(x)v'(x).
\end{aligned}
$$

这里使用了“可导必连续”，因此 $v(x+h)\to v(x)$。若 $v(x)\ne0$，则

$$
\begin{aligned}
\left(\frac1v\right)'
&=\lim_{h\to0}\frac{\frac1{v(x+h)}-\frac1{v(x)}}h\\
&=-\frac{v'(x)}{v^2(x)}.
\end{aligned}
$$

将 $u/v$ 看作 $u\cdot(1/v)$，再使用乘积法则即可得到商法则。

+++ 例题 1：乘积法则
求函数

$$
y=(x^2+1)e^x
$$

的导数。

由乘积法则，

$$
\begin{aligned}
y'
&=(x^2+1)'e^x+(x^2+1)(e^x)'\\
&=2xe^x+(x^2+1)e^x\\
&=e^x(x^2+2x+1).
\end{aligned}
$$
+++

+++ 例题 2：商法则
求函数

$$
y=\frac{\sin x}{1+\cos x}
$$

的导数。

当 $1+\cos x\ne0$ 时，

$$
\begin{aligned}
y'
&=\frac{\cos x(1+\cos x)-\sin x(-\sin x)}
{(1+\cos x)^2}\\
&=\frac{\cos x+\cos^2x+\sin^2x}{(1+\cos x)^2}\\
&=\frac1{1+\cos x}.
\end{aligned}
$$

最后的结果仍须保留原函数的定义域限制 $x\ne(2k+1)\pi$，$k\in\mathbb Z$。
+++

# 三、复合函数的导数与微分形式不变性

设

$$
y=f(u),\qquad u=g(x),
$$

其中 $g$ 在 $x$ 处可导，$f$ 在 $u=g(x)$ 处可导，则复合函数 $y=f(g(x))$ 在 $x$ 处可导，且

$$
\boxed{\frac{\mathrm dy}{\mathrm dx}
=\frac{\mathrm dy}{\mathrm du}\frac{\mathrm du}{\mathrm dx}}
$$

即

$$
[f(g(x))]'=f'(g(x))g'(x).
$$

复合层数较多时，应按“由外到内、逐层求导”的顺序计算。

## 1. 链式法则的证明思路

由可微的定义，

$$
\Delta y=f'(u)\Delta u+o(\Delta u),
\qquad
\Delta u=g'(x)\Delta x+o(\Delta x).
$$

将第二式代入第一式，得到

$$
\Delta y=f'(u)g'(x)\Delta x+o(\Delta x),
$$

故

$$
\frac{\mathrm dy}{\mathrm dx}=f'(u)g'(x).
$$

## 2. 一阶微分形式不变性

若 $u$ 是自变量，则 $\mathrm dy=f'(u)\mathrm du$。若 $u=g(x)$ 又是 $x$ 的函数，仍然有

$$
\mathrm dy=f'(u)\mathrm du,
\qquad
\mathrm du=g'(x)\mathrm dx.
$$

因此一阶微分 $\mathrm dy=f'(u)\mathrm du$ 的形式不因中间变量 $u$ 的身份变化而改变，这就是**一阶微分形式不变性**。

+++ 例题 1：多层复合函数
求

$$
y=e^{\sin(x^2)}
$$

的导数。

函数由 $x^2$、$\sin(x^2)$、$e^{\sin(x^2)}$ 三层复合而成，因此

$$
\begin{aligned}
y'
&=e^{\sin(x^2)}\cdot\cos(x^2)\cdot2x\\
&=2xe^{\sin(x^2)}\cos(x^2).
\end{aligned}
$$
+++

+++ 例题 2：链式法则与恒等变形
求

$$
y=\ln\left(x+\sqrt{1+x^2}\right)
$$

的导数。

由于 $\sqrt{1+x^2}>|x|$，对任意 $x\in\mathbb R$ 都有
$x+\sqrt{1+x^2}>0$。由链式法则，

$$
\begin{aligned}
y'
&=\frac{1+\frac{x}{\sqrt{1+x^2}}}
{x+\sqrt{1+x^2}}\\
&=\frac1{\sqrt{1+x^2}}.
\end{aligned}
$$
+++

# 四、分段函数的导数

设函数在 $x_0$ 处由不同表达式拼接。对于 $x\ne x_0$ 的区间内部，可直接对对应表达式求导；在分界点 $x_0$ 必须回到导数定义，或分别计算左、右导数：

$$
f'_-(x_0)=\lim_{x\to x_0^-}\frac{f(x)-f(x_0)}{x-x_0},
\qquad
f'_+(x_0)=\lim_{x\to x_0^+}\frac{f(x)-f(x_0)}{x-x_0}.
$$

函数在 $x_0$ 可导当且仅当：

1. $f$ 在 $x_0$ 连续；
2. $f'_-(x_0)$ 与 $f'_+(x_0)$ 都存在且相等。

“可导必连续”意味着若函数在分界点不连续，就可以直接判定该点不可导；但连续并不能保证可导。

+++ 例题 1：由定义求分界点导数
设

$$
f(x)=
\begin{cases}
x^2\sin\frac1x,&x\ne0,\\
0,&x=0.
\end{cases}
$$

求 $f'(x)$。

当 $x\ne0$ 时，

$$
f'(x)=2x\sin\frac1x-\cos\frac1x.
$$

在 $x=0$ 处，由定义

$$
\begin{aligned}
f'(0)
&=\lim_{h\to0}\frac{f(h)-f(0)}h\\
&=\lim_{h\to0}h\sin\frac1h=0.
\end{aligned}
$$

所以

$$
f'(x)=
\begin{cases}
2x\sin\frac1x-\cos\frac1x,&x\ne0,\\
0,&x=0.
\end{cases}
$$

注意 $f'$ 在 $0$ 处不连续，这说明“函数可导”并不推出“导函数连续”。
+++

+++ 例题 2：确定可导参数
设

$$
f(x)=
\begin{cases}
ax+b,&x<1,\\
x^2,&x\ge1.
\end{cases}
$$

求使 $f$ 在 $x=1$ 处可导的 $a,b$。

先由连续性得到

$$
a+b=1.
$$

再比较左右导数：

$$
f'_-(1)=a,\qquad f'_+(1)=2.
$$

可导要求 $a=2$，于是 $b=-1$。
+++

# 五、反函数的导数

设 $y=f(x)$ 在 $x_0$ 的某邻域内严格单调且可导，$y_0=f(x_0)$，并且

$$
f'(x_0)\ne0.
$$

则反函数 $x=f^{-1}(y)$ 在 $y_0$ 处可导，且

$$
\boxed{(f^{-1})'(y_0)=\frac1{f'(x_0)}
=\frac1{f'(f^{-1}(y_0))}}
$$

在莱布尼茨记号下，该公式常写成

$$
\frac{\mathrm dx}{\mathrm dy}
=\frac1{\frac{\mathrm dy}{\mathrm dx}},
$$

但分母必须非零。证明只需对恒等式 $f(f^{-1}(y))=y$ 使用链式法则。

更直接地，令 $g=f^{-1}$。当 $y\to y_0$ 时，由反函数在 $y_0$ 处连续可知
$x=g(y)\to x_0$，于是

$$
\begin{aligned}
g'(y_0)
&=\lim_{y\to y_0}\frac{g(y)-g(y_0)}{y-y_0}\\
&=\lim_{x\to x_0}\frac{x-x_0}{f(x)-f(x_0)}\\
&=\frac1{f'(x_0)}.
\end{aligned}
$$

+++ 例题 1：求反函数在指定点的导数
设

$$
f(x)=x+e^x,
$$

$g=f^{-1}$。求 $g'(1)$。

因为

$$
f(0)=1,
$$

所以 $g(1)=0$。又

$$
f'(x)=1+e^x,\qquad f'(0)=2.
$$

因此

$$
g'(1)=\frac1{f'(g(1))}=\frac1{f'(0)}=\frac12.
$$
+++

+++ 例题 2：由反函数公式推导反三角函数导数
令

$$
y=\arcsin x,\qquad x=\sin y,\qquad
y\in\left[-\frac\pi2,\frac\pi2\right].
$$

当 $|x|<1$ 时，$\cos y>0$，故

$$
\frac{\mathrm dy}{\mathrm dx}
=\frac1{\cos y}
=\frac1{\sqrt{1-\sin^2y}}
=\frac1{\sqrt{1-x^2}}.
$$

在 $x=\pm1$ 处相应分母为零，反函数没有有限导数。
+++

# 六、隐函数的导数

若 $x,y$ 由方程

$$
F(x,y)=0
$$

确定，且在所讨论点附近可以把 $y$ 看作 $x$ 的可导函数，则对等式两端关于 $x$ 求导：

$$
F_x+F_y\frac{\mathrm dy}{\mathrm dx}=0.
$$

当 $F_y\ne0$ 时，

$$
\boxed{\frac{\mathrm dy}{\mathrm dx}=-\frac{F_x}{F_y}}
$$

计算时必须把 $y$ 看成 $y(x)$。例如

$$
\frac{\mathrm d}{\mathrm dx}\sin y=\cos y\cdot y',
\qquad
\frac{\mathrm d}{\mathrm dx}y^2=2yy'.
$$

若需要二阶导数，可在一阶导数关系两边继续对 $x$ 求导。对二阶连续可偏导的 $F$，还可使用

$$
y''=-\frac{F_{xx}+2F_{xy}y'+F_{yy}(y')^2}{F_y},
\qquad F_y\ne0.
$$

+++ 例题 1：代数型隐函数
由方程

$$
x^2+xy+y^2=7
$$

确定 $y=y(x)$，求 $y'$。

两边对 $x$ 求导：

$$
2x+y+xy'+2yy'=0.
$$

整理得

$$
\boxed{y'=-\frac{2x+y}{x+2y}},
$$

其中要求 $x+2y\ne0$。
+++

+++ 例题 2：含幂指结构的隐函数
设 $x>0$、$y>0$，且

$$
x^y=y^x.
$$

求 $y'$。

先取自然对数：

$$
y\ln x=x\ln y.
$$

两边对 $x$ 求导：

$$
y'\ln x+\frac yx
=\ln y+\frac{x}{y}y'.
$$

因此

$$
\boxed{
y'=\frac{\ln y-\frac yx}{\ln x-\frac xy}
},
$$

其中还要求分母 $\ln x-x/y\ne0$。
+++

# 七、参数方程所确定的函数的导数

设曲线由参数方程

$$
\begin{cases}
x=\varphi(t),\\
y=\psi(t)
\end{cases}
$$

给出。若 $\varphi'(t)\ne0$，则

$$
\boxed{
\frac{\mathrm dy}{\mathrm dx}
=\frac{\frac{\mathrm dy}{\mathrm dt}}
{\frac{\mathrm dx}{\mathrm dt}}
=\frac{\psi'(t)}{\varphi'(t)}
}
$$

二阶导数不是 $\psi''(t)/\varphi''(t)$，而应继续使用链式法则：

$$
\boxed{
\frac{\mathrm d^2y}{\mathrm dx^2}
=\frac{\frac{\mathrm d}{\mathrm dt}
\left(\frac{\mathrm dy}{\mathrm dx}\right)}
{\frac{\mathrm dx}{\mathrm dt}}
}
$$

若 $\varphi'(t)=0$，上述公式不能直接使用，需要结合极限或改用 $x$ 关于 $y$ 的导数判断切线性质。

+++ 例题 1：参数方程的一阶导数
设

$$
\begin{cases}
x=t^2+1,\\
y=t^3-3t.
\end{cases}
$$

当 $t\ne0$ 时，

$$
\frac{\mathrm dy}{\mathrm dx}
=\frac{3t^2-3}{2t}
=\frac32\left(t-\frac1t\right).
$$

例如在 $t=1$ 对应的点 $(2,-2)$ 处，切线斜率为 $0$。
+++

+++ 例题 2：参数方程的二阶导数
仍取

$$
\begin{cases}
x=t^2+1,\\
y=t^3-3t.
\end{cases}
$$

由上一题，

$$
\frac{\mathrm dy}{\mathrm dx}
=\frac32\left(t-\frac1t\right).
$$

因此

$$
\begin{aligned}
\frac{\mathrm d^2y}{\mathrm dx^2}
&=\frac{\frac{\mathrm d}{\mathrm dt}
\left[\frac32\left(t-\frac1t\right)\right]}{2t}\\
&=\frac{\frac32\left(1+\frac1{t^2}\right)}{2t}\\
&=\frac{3(t^2+1)}{4t^3},
\qquad t\ne0.
\end{aligned}
$$
+++

# 八、对数求导法

当函数由多个因子的乘、除、乘方组成时，直接使用积商法则容易产生冗长计算。若 $y\ne0$，可先取

$$
\ln|y|,
$$

利用对数把乘除转化为加减、把乘方转化为乘法，再对等式两端求导。因为

$$
\frac{\mathrm d}{\mathrm dx}\ln|y|
=\frac{y'}y,
$$

最后有

$$
y'=y\cdot\frac{\mathrm d}{\mathrm dx}\ln|y|.
$$

若使用 $\ln y$ 而不是 $\ln|y|$，必须额外保证 $y>0$。

+++ 例题 1：多因子乘除
设 $x>1$，求

$$
y=\frac{(x^2+1)^3\sqrt{x-1}}{e^x}
$$

的导数。

取自然对数：

$$
\ln y=3\ln(x^2+1)+\frac12\ln(x-1)-x.
$$

两边求导：

$$
\frac{y'}y
=\frac{6x}{x^2+1}+\frac1{2(x-1)}-1.
$$

所以

$$
\boxed{
y'=\frac{(x^2+1)^3\sqrt{x-1}}{e^x}
\left(
\frac{6x}{x^2+1}+\frac1{2(x-1)}-1
\right)
}.
$$
+++

+++ 例题 2：绝对值对数的使用
在 $x\ne\pm1$ 的区间内，求

$$
y=\frac{(x-1)^2}{(x+1)^3}
$$

的导数。

在 $y\ne0$ 的区间内取绝对值对数：

$$
\ln|y|=2\ln|x-1|-3\ln|x+1|.
$$

于是

$$
\frac{y'}y=\frac2{x-1}-\frac3{x+1}.
$$

故

$$
\begin{aligned}
y'
&=\frac{(x-1)^2}{(x+1)^3}
\left(\frac2{x-1}-\frac3{x+1}\right)\\
&=\frac{(x-1)(5-x)}{(x+1)^4}.
\end{aligned}
$$

原函数在 $x=1$ 处有定义且可导，直接代入最终的有理式仍得 $y'(1)=0$；取对数的中间步骤只是暂时排除了该零点。
+++

# 九、幂指函数求导法

形如

$$
y=u(x)^{v(x)}
$$

且底数、指数都含变量的函数称为幂指函数。为在实数范围内使用统一公式，通常要求 $u(x)>0$。取对数：

$$
\ln y=v\ln u.
$$

两边求导可得

$$
\boxed{
y'=u^v\left(v'\ln u+v\frac{u'}u\right)
}.
$$

幂指函数求导本质上是对数求导法。若底数为常数或指数为常数，应优先使用基本公式；此时函数的实际定义域可能比 $u>0$ 更大。

+++ 例题 1：函数 $x^x$
设 $x>0$，求

$$
y=x^x
$$

的导数。

由通用公式，

$$
\boxed{
y'=x^x(\ln x+1)
}.
$$
+++

+++ 例题 2：三角型幂指函数
在 $\sin x>0$ 的区间内，求

$$
y=(\sin x)^{\cos x}
$$

的导数。

取自然对数：

$$
\ln y=\cos x\ln(\sin x).
$$

两边求导：

$$
\frac{y'}y
=-\sin x\ln(\sin x)+\cos x\frac{\cos x}{\sin x}.
$$

因此

$$
\boxed{
y'=(\sin x)^{\cos x}
\left[
-\sin x\ln(\sin x)+\frac{\cos^2x}{\sin x}
\right]
}.
$$
+++

# 十、高阶导数

函数的二阶及以上导数统称高阶导数：

$$
f''(x),\quad f^{(3)}(x),\quad\ldots,\quad f^{(n)}(x).
$$

考研中常见的高阶导数计算分为三类：寻找导数循环或归纳规律、使用莱布尼茨公式处理乘积、利用泰勒展开读取指定点处的高阶导数。

## 1. 归纳法

先连续求出前几阶导数，观察系数、符号、幂次或相位的规律，再用数学归纳法确认。常用结论包括

$$
\begin{aligned}
(e^{ax+b})^{(n)}
&=a^ne^{ax+b},\\
[\sin(ax+b)]^{(n)}
&=a^n\sin\left(ax+b+\frac{n\pi}2\right),\\
[\cos(ax+b)]^{(n)}
&=a^n\cos\left(ax+b+\frac{n\pi}2\right),\\
\left(\frac1{ax+b}\right)^{(n)}
&=\frac{(-1)^nn!a^n}{(ax+b)^{n+1}},\\
[\ln(ax+b)]^{(n)}
&=\frac{(-1)^{n-1}(n-1)!a^n}{(ax+b)^n},
\qquad n\ge1.
\end{aligned}
$$

三角函数的高阶导数具有四阶循环；含 $ax+b$ 时不要漏掉链式法则产生的 $a^n$。

+++ 例题 1：有理函数的 $n$ 阶导数
求

$$
f(x)=\frac1{2x+1}
$$

的 $n$ 阶导数。

前几阶导数为

$$
\begin{aligned}
f'(x)&=-\frac2{(2x+1)^2},\\
f''(x)&=\frac{2!\,2^2}{(2x+1)^3},\\
f^{(3)}(x)&=-\frac{3!\,2^3}{(2x+1)^4}.
\end{aligned}
$$

由此归纳得

$$
\boxed{
f^{(n)}(x)=\frac{(-1)^nn!2^n}{(2x+1)^{n+1}}
}.
$$
+++

+++ 例题 2：三角函数的循环
求

$$
f(x)=\sin(3x)
$$

的第 $n$ 阶导数。

每求一次导数，相位增加 $\pi/2$，同时由链式法则产生一个因子 $3$，故

$$
\boxed{
f^{(n)}(x)=3^n\sin\left(3x+\frac{n\pi}2\right)
}.
$$
+++

## 2. 莱布尼茨公式

若 $u,v$ 均 $n$ 阶可导，则乘积的 $n$ 阶导数为

$$
\boxed{
(uv)^{(n)}
=\sum_{k=0}^n C_n^k u^{(k)}v^{(n-k)}
}.
$$

该公式的系数与二项式展开完全一致。若其中一个因子是低次多项式，其足够高阶的导数为零，求和会自动截断，这是考研计算中最常用的情形。

+++ 例题 1：多项式与指数函数的乘积
求

$$
f(x)=x^2e^{3x}
$$

的 $n$ 阶导数。

因为 $(x^2)^{(k)}=0$（$k\ge3$），莱布尼茨公式只保留 $k=0,1,2$：

$$
\begin{aligned}
f^{(n)}(x)
&=x^2(3^ne^{3x})
+n(2x)(3^{n-1}e^{3x})
+C_n^2(2)(3^{n-2}e^{3x})\\
&=\boxed{
e^{3x}\left[
3^nx^2+2n3^{n-1}x+n(n-1)3^{n-2}
\right]
},
\end{aligned}
$$

其中 $n\ge2$；$n=0,1$ 可直接求导或按未化简的莱布尼茨求和式理解。
+++

+++ 例题 2：在指定点计算高阶导数
设

$$
f(x)=x^3e^x.
$$

求 $f^{(n)}(0)$。

由莱布尼茨公式，$x^3$ 只有三阶导数在 $x=0$ 时非零：

$$
(x^3)^{(3)}=3!.
$$

因此当 $n\ge3$ 时，

$$
\begin{aligned}
f^{(n)}(0)
&=C_n^3 3!\,e^0\\
&=n(n-1)(n-2).
\end{aligned}
$$

当 $n=0,1,2$ 时，$f^{(n)}(0)=0$。
+++

## 3. 泰勒展开式

若 $f$ 在 $x_0$ 附近具有泰勒展开

$$
f(x)=\sum_{n=0}^{\infty}
\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n,
$$

则 $(x-x_0)^n$ 的系数就是 $f^{(n)}(x_0)/n!$。因此若展开式中

$$
f(x)=\sum_{n=0}^{\infty}c_n(x-x_0)^n,
$$

就有

$$
\boxed{f^{(n)}(x_0)=n!c_n}.
$$

常用麦克劳林展开式为

$$
\begin{aligned}
e^x&=\sum_{n=0}^{\infty}\frac{x^n}{n!},\\
\sin x&=\sum_{n=0}^{\infty}
\frac{(-1)^nx^{2n+1}}{(2n+1)!},\\
\cos x&=\sum_{n=0}^{\infty}
\frac{(-1)^nx^{2n}}{(2n)!},\\
\ln(1+x)&=\sum_{n=1}^{\infty}
\frac{(-1)^{n-1}x^n}{n},\\
\frac1{1-x}&=\sum_{n=0}^{\infty}x^n.
\end{aligned}
$$

其中 $e^x$、$\sin x$、$\cos x$ 的展开对任意实数 $x$ 成立；
$\ln(1+x)$ 与 $1/(1-x)$ 的上述幂级数展开要求 $|x|<1$。

用泰勒展开读取 $n$ 阶导数时，必须展开到目标次数，并保证余项为 $o((x-x_0)^n)$；只知道一阶等价无穷小通常不足以确定高阶导数。

+++ 例题 1：由幂级数读取一般阶导数
定义

$$
f(x)=
\begin{cases}
\dfrac{\ln(1+x)}x,&x\ne0,\\
1,&x=0.
\end{cases}
$$

求 $f^{(n)}(0)$。

由

$$
\ln(1+x)=x-\frac{x^2}2+\frac{x^3}3-\cdots,
$$

可得

$$
f(x)=1-\frac x2+\frac{x^2}3-\frac{x^3}4+\cdots
=\sum_{n=0}^{\infty}\frac{(-1)^n}{n+1}x^n.
$$

因此

$$
\boxed{
f^{(n)}(0)=\frac{(-1)^nn!}{n+1}
}.
$$
+++

+++ 例题 2：只读取指定次数的系数
设

$$
f(x)=x^2e^{x^2},
$$

求 $f^{(10)}(0)$。

由

$$
e^{x^2}
=\sum_{k=0}^{\infty}\frac{x^{2k}}{k!},
$$

得到

$$
x^2e^{x^2}
=\sum_{k=0}^{\infty}\frac{x^{2k+2}}{k!}.
$$

$x^{10}$ 对应 $2k+2=10$，即 $k=4$，其系数为 $1/4!$。所以

$$
\boxed{
f^{(10)}(0)=\frac{10!}{4!}=151200
}.
$$
+++

# 十一、求导方法选择与易错点

1. **先看定义域。** 对数真数、偶次根式、分母以及幂指函数的底数限制必须在求导前确认。
2. **分段点用定义。** 区间内部套公式，分界点比较左右导数；不能把两段导函数直接拼接后就宣布可导。
3. **复合函数逐层求导。** 每经过一层复合，都要乘以内层函数的导数。
4. **隐函数中的 $y$ 是 $y(x)$。** 对 $\sin y$、$e^y$、$y^n$ 求导时都要乘 $y'$。
5. **参数方程的二阶导数要再除一次 $\mathrm dx/\mathrm dt$。** 一般没有 $\mathrm d^2y/\mathrm dx^2=\psi''(t)/\varphi''(t)$。
6. **对数求导的中间定义域可能缩小。** 对零点可另行直接判断，不能因 $\ln|y|$ 无定义就断言原函数不可导。
7. **高阶导数先识别结构。** 周期函数用循环，低次多项式乘其他函数用莱布尼茨公式，指定点处的高阶导数优先考虑泰勒展开。

# 参考资料

- [2026 年全国硕士研究生招生考试数学（一）考试大纲原文](https://kaoyan.wendu.com/2025/1017/212673.shtml)
- [OpenStax Calculus Volume 1：Differentiation](https://openstax.org/books/calculus-volume-1/pages/3-introduction)
- [MIT OpenCourseWare：Single Variable Calculus Lecture Notes](https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/pages/lecture-notes/)
