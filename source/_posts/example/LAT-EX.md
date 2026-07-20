---
layout: post
title: LaTeX 数学符号表
date: 2026-07-18 22:00:00
categories:
  - 示例
tags:
  - LaTeX
  - KaTeX
  - 数学公式
math: true
---

> 本文依据《LaTeX Mathematical Symbols》整理为 Markdown 查询页。
> 原表中一部分冷门符号来自 `amssymb`。

# 数学环境

行内公式使用一对 `$`：`$a^2+b^2=c^2$`，显示为 $a^2+b^2=c^2$。

独占一行的公式使用 `$$`：

```latex
$$
\int_a^b f(x)\,\mathrm{d}x
$$
```

$$
\int_a^b f(x)\,\mathrm{d}x
$$

命令必须在数学环境内使用。普通文本内的反斜杠命令应放入反引号中，例如 `\alpha`。

# 希腊字母与希伯来字母

## 小写希腊字母

| 预览 | 命令 | 预览 | 命令 | 预览 | 命令 |
| --- | --- | --- | --- | --- | --- |
| $\alpha$ | `\alpha` | $\beta$ | `\beta` | $\gamma$ | `\gamma` |
| $\delta$ | `\delta` | $\epsilon$ | `\epsilon` | $\zeta$ | `\zeta` |
| $\eta$ | `\eta` | $\theta$ | `\theta` | $\iota$ | `\iota` |
| $\kappa$ | `\kappa` | $\lambda$ | `\lambda` | $\mu$ | `\mu` |
| $\nu$ | `\nu` | $\xi$ | `\xi` | $\pi$ | `\pi` |
| $\rho$ | `\rho` | $\sigma$ | `\sigma` | $\tau$ | `\tau` |
| $\upsilon$ | `\upsilon` | $\phi$ | `\phi` | $\chi$ | `\chi` |
| $\psi$ | `\psi` | $\omega$ | `\omega` | | |

## 变体与大写字母

| 预览            | 命令            | 预览          | 命令          | 预览        | 命令        |
| ------------- | ------------- | ----------- | ----------- | --------- | --------- |
| $\varepsilon$ | `\varepsilon` | $\vartheta$ | `\vartheta` | $\varpi$  | `\varpi`  |
| $\varrho$     | `\varrho`     | $\varsigma$ | `\varsigma` | $\varphi$ | `\varphi` |
| $\Gamma$      | `\Gamma`      | $\Delta$    | `\Delta`    | $\Theta$  | `\Theta`  |
| $\Lambda$     | `\Lambda`     | $\Xi$       | `\Xi`       | $\Pi$     | `\Pi`     |
| $\Sigma$      | `\Sigma`      | $\Upsilon$  | `\Upsilon`  | $\Phi$    | `\Phi`    |
| $\Psi$        | `\Psi`        | $\Omega$    | `\Omega`    |           |           |

## 罕见字母

| 预览 | 命令 | 预览 | 命令 | 预览 | 命令 |
| --- | --- | --- | --- | --- | --- |
| $\digamma$ | `\digamma` | $\varkappa$ | `\varkappa` | $\aleph$ | `\aleph` |
| $\beth$ | `\beth` | $\gimel$ | `\gimel` | $\daleth$ | `\daleth` |

# 常用构造

| 效果 | 命令 | 说明 |
| --- | --- | --- |
| $\frac{a}{b}$. | `\frac{a}{b}` | 分式 |
| $f'$ | `f'` | 一阶导数撇号 |
| $\sqrt{a}$. | `\sqrt{a}` | 平方根 |
| $\sqrt[n]{a}$. | `\sqrt[n]{a}` | $n$ 次根 |
| $\overline{abc}$. | `\overline{abc}` | 上横线 |
| $\underline{abc}$. | `\underline{abc}` | 下划线 |
| $\widehat{abc}$. | `\widehat{abc}` | 宽帽 |
| $\widetilde{abc}$. | `\widetilde{abc}` | 宽波浪线 |
| $\overrightarrow{abc}$. | `\overrightarrow{abc}` | 右箭头 |
| $\overleftarrow{abc}$. | `\overleftarrow{abc}` | 左箭头 |
| $\overbrace{abc}$. | `\overbrace{abc}` | 上花括号 |
| $\underbrace{abc}$. | `\underbrace{abc}` | 下花括号 |

下标与上标分别使用 `_` 和 `^`。多字符内容必须用花括号分组：

```latex
x_i^2 \qquad x_{i+1}^{n-1}
```

$$
x_i^2 \qquad x_{i+1}^{n-1}
$$

# 定界符

| 预览 | 命令 | 预览 | 命令 |
| --- | --- | --- | --- |
| $(\;)$ | `(` `)` | $[\;]$ | `[` `]` |
| $\{\;\}$ | `\{` `\}` | $\langle\;\rangle$ | `\langle` `\rangle` |
| $\lfloor\;\rfloor$ | `\lfloor` `\rfloor` | $\lceil\;\rceil$ | `\lceil` `\rceil` |
| $\vert$ | `\vert` | $\Vert$ | `\Vert` |
| $/$ | `/` | $\backslash$ | `\backslash` |
| $\uparrow$ | `\uparrow` | $\downarrow$ | `\downarrow` |
| $\Uparrow$ | `\Uparrow` | $\Downarrow$ | `\Downarrow` |
| $\ulcorner$ | `\ulcorner` | $\urcorner$ | `\urcorner` |
| $\llcorner$ | `\llcorner` | $\lrcorner$ | `\lrcorner` |

使用 `\left` 和 `\right` 让成对定界符随内容自动伸缩：

```latex
\left( \frac{a}{b} \right)
\qquad
\left\{ \begin{array}{ll} x, & x \ge 0 \\ -x, & x < 0 \end{array} \right.
```

$$
\left( \frac{a}{b} \right)
\qquad
\left\{ \begin{array}{ll} x, & x \ge 0 \\ -x, & x < 0 \end{array} \right.
$$

# 大型运算符

大型运算符在显示公式中会自动使用较大的形式；行内公式可通过 `\displaystyle` 强制放大。

| 预览 | 命令 | 预览 | 命令 |
| --- | --- | --- | --- |
| $\sum$ | `\sum` | $\prod$ | `\prod` |
| $\coprod$ | `\coprod` | $\int$ | `\int` |
| $\oint$ | `\oint` | $\iint$ | `\iint` |
| $\iiint$ | `\iiint` | $\bigcup$ | `\bigcup` |
| $\bigcap$ | `\bigcap` | $\bigsqcup$ | `\bigsqcup` |
| $\bigvee$ | `\bigvee` | $\bigwedge$ | `\bigwedge` |
| $\bigoplus$ | `\bigoplus` | $\bigotimes$ | `\bigotimes` |
| $\bigodot$ | `\bigodot` | $\biguplus$ | `\biguplus` |

```latex
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
```

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

# 标准函数名

函数名应用直立体，不要写成普通变量相乘的斜体。$sin x$ 与 $\sin x$ 的排版效果不同。

| 预览 | 命令 | 预览 | 命令 |
| --- | --- | --- | --- |
| $\arccos$ | `\arccos` | $\arcsin$ | `\arcsin` |
| $\arctan$ | `\arctan` | $\arg$ | `\arg` |
| $\cos$ | `\cos` | $\cosh$ | `\cosh` |
| $\cot$ | `\cot` | $\coth$ | `\coth` |
| $\csc$ | `\csc` | $\deg$ | `\deg` |
| $\det$ | `\det` | $\dim$ | `\dim` |
| $\exp$ | `\exp` | $\gcd$ | `\gcd` |
| $\hom$ | `\hom` | $\inf$ | `\inf` |
| $\ker$ | `\ker` | $\lg$ | `\lg` |
| $\lim$ | `\lim` | $\liminf$ | `\liminf` |
| $\limsup$ | `\limsup` | $\ln$ | `\ln` |
| $\log$ | `\log` | $\max$ | `\max` |
| $\min$ | `\min` | $\Pr$ | `\Pr` |
| $\sec$ | `\sec` | $\sin$ | `\sin` |
| $\sinh$ | `\sinh` | $\sup$ | `\sup` |
| $\tan$ | `\tan` | $\tanh$ | `\tanh` |

# 二元运算符

| 预览 | 命令 | 预览 | 命令 | 预览 | 命令 |
| --- | --- | --- | --- | --- | --- |
| $\ast$ | `\ast` | $\star$ | `\star` | $\cdot$ | `\cdot` |
| $\circ$ | `\circ` | $\bullet$ | `\bullet` | $\bigcirc$ | `\bigcirc` |
| $\diamond$ | `\diamond` | $\times$ | `\times` | $\div$ | `\div` |
| $\centerdot$ | `\centerdot` | $\circledast$ | `\circledast` | $\circledcirc$ | `\circledcirc` |
| $\circleddash$ | `\circleddash` | $\dotplus$ | `\dotplus` | $\divideontimes$ | `\divideontimes` |
| $\pm$ | `\pm` | $\mp$ | `\mp` | $\amalg$ | `\amalg` |
| $\odot$ | `\odot` | $\ominus$ | `\ominus` | $\oplus$ | `\oplus` |
| $\oslash$ | `\oslash` | $\otimes$ | `\otimes` | $\wr$ | `\wr` |
| $\Box$ | `\Box` | $\boxplus$ | `\boxplus` | $\boxminus$ | `\boxminus` |
| $\boxtimes$ | `\boxtimes` | $\boxdot$ | `\boxdot` | $\square$ | `\square` |
| $\cap$ | `\cap` | $\cup$ | `\cup` | $\uplus$ | `\uplus` |
| $\sqcap$ | `\sqcap` | $\sqcup$ | `\sqcup` | $\wedge$ | `\wedge` |
| $\vee$ | `\vee` | $\dagger$ | `\dagger` | $\ddagger$ | `\ddagger` |
| $\barwedge$ | `\barwedge` | $\curlywedge$ | `\curlywedge` | $\Cap$ | `\Cap` |
| $\Cup$ | `\Cup` | $\bot$ | `\bot` | $\intercal$ | `\intercal` |
| $\doublebarwedge$ | `\doublebarwedge` | $\rightthreetimes$ | `\rightthreetimes` | $\leftthreetimes$ | `\leftthreetimes` |

# 关系符

## 基础关系

| 预览 | 命令 | 预览 | 命令 | 预览 | 命令 |
| --- | --- | --- | --- | --- | --- |
| $\equiv$ | `\equiv` | $\cong$ | `\cong` | $\neq$ | `\neq` |
| $\sim$ | `\sim` | $\simeq$ | `\simeq` | $\approx$ | `\approx` |
| $\asymp$ | `\asymp` | $\doteq$ | `\doteq` | $\propto$ | `\propto` |
| $\models$ | `\models` | $\leq$ | `\leq` | $\geq$ | `\geq` |
| $\prec$ | `\prec` | $\succ$ | `\succ` | $\preceq$ | `\preceq` |
| $\succeq$ | `\succeq` | $\ll$ | `\ll` | $\gg$ | `\gg` |
| $\subset$ | `\subset` | $\supset$ | `\supset` | $\subseteq$ | `\subseteq` |
| $\supseteq$ | `\supseteq` | $\sqsubset$ | `\sqsubset` | $\sqsupset$ | `\sqsupset` |
| $\sqsubseteq$ | `\sqsubseteq` | $\sqsupseteq$ | `\sqsupseteq` | $\dashv$ | `\dashv` |
| $\vdash$ | `\vdash` | $\in$ | `\in` | $\ni$ | `\ni` |
| $\perp$ | `\perp` | $\mid$ | `\mid` | $\parallel$ | `\parallel` |
| $\bowtie$ | `\bowtie` | $\Join$ | `\Join` | $\smile$ | `\smile` |
| $\frown$ | `\frown` | $\notin$ | `\notin` | | |

## 扩展关系

下列命令主要来自 `amssymb`：

| 预览 | 命令 | 预览 | 命令 |
| --- | --- | --- | --- |
| $\approxeq$ | `\approxeq` | $\thicksim$ | `\thicksim` |
| $\backsim$ | `\backsim` | $\backsimeq$ | `\backsimeq` |
| $\triangleq$ | `\triangleq` | $\circeq$ | `\circeq` |
| $\bumpeq$ | `\bumpeq` | $\Bumpeq$ | `\Bumpeq` |
| $\doteqdot$ | `\doteqdot` | $\thickapprox$ | `\thickapprox` |
| $\fallingdotseq$ | `\fallingdotseq` | $\risingdotseq$ | `\risingdotseq` |
| $\varpropto$ | `\varpropto` | $\therefore$ | `\therefore` |
| $\because$ | `\because` | $\eqcirc$ | `\eqcirc` |
| $\lessgtr$ | `\lessgtr` | $\gtrless$ | `\gtrless` |
| $\lesseqgtr$ | `\lesseqgtr` | $\gtreqless$ | `\gtreqless` |
| $\lesseqqgtr$ | `\lesseqqgtr` | $\gtreqqless$ | `\gtreqqless` |
| $\lessapprox$ | `\lessapprox` | $\gtrapprox$ | `\gtrapprox` |
| $\lesssim$ | `\lesssim` | $\gtrsim$ | `\gtrsim` |
| $\eqslantless$ | `\eqslantless` | $\eqslantgtr$ | `\eqslantgtr` |
| $\precsim$ | `\precsim` | $\succsim$ | `\succsim` |
| $\precapprox$ | `\precapprox` | $\succapprox$ | `\succapprox` |
| $\Subset$ | `\Subset` | $\Supset$ | `\Supset` |
| $\subseteqq$ | `\subseteqq` | $\supseteqq$ | `\supseteqq` |
| $\curlyeqprec$ | `\curlyeqprec` | $\curlyeqsucc$ | `\curlyeqsucc` |
| $\preccurlyeq$ | `\preccurlyeq` | $\succcurlyeq$ | `\succcurlyeq` |
| $\blacktriangleleft$ | `\blacktriangleleft` | $\blacktriangleright$ | `\blacktriangleright` |
| $\trianglelefteq$ | `\trianglelefteq` | $\trianglerighteq$ | `\trianglerighteq` |
| $\vartriangleleft$ | `\vartriangleleft` | $\vartriangleright$ | `\vartriangleright` |
| $\nleq$ | `\nleq` | $\ngeq$ | `\ngeq` |
| $\nleqq$ | `\nleqq` | $\ngeqq$ | `\ngeqq` |
| $\nless$ | `\nless` | $\ngtr$ | `\ngtr` |
| $\nprec$ | `\nprec` | $\nsucc$ | `\nsucc` |
| $\npreceq$ | `\npreceq` | $\nsucceq$ | `\nsucceq` |
| $\nsubseteq$ | `\nsubseteq` | $\nsupseteq$ | `\nsupseteq` |
| $\nsubseteqq$ | `\nsubseteqq` | $\nsupseteqq$ | `\nsupseteqq` |
| $\subsetneq$ | `\subsetneq` | $\supsetneq$ | `\supsetneq` |
| $\subsetneqq$ | `\subsetneqq` | $\supsetneqq$ | `\supsetneqq` |
| $\varsubsetneq$ | `\varsubsetneq` | $\varsupsetneq$ | `\varsupsetneq` |
| $\varsubsetneqq$ | `\varsubsetneqq` | $\varsupsetneqq$ | `\varsupsetneqq` |
| $\nmid$ | `\nmid` | $\nparallel$ | `\nparallel` |
| $\nshortmid$ | `\nshortmid` | $\nshortparallel$ | `\nshortparallel` |
| $\nVDash$ | `\nVDash` | $\nvDash$ | `\nvDash` |
| $\nvdash$ | `\nvdash` | $\ntriangleleft$ | `\ntriangleleft` |
| $\ntriangleright$ | `\ntriangleright` | $\ntrianglelefteq$ | `\ntrianglelefteq` |
| $\ntrianglerighteq$ | `\ntrianglerighteq` | | |

# 箭头

## 常用箭头

| 预览 | 命令 | 预览 | 命令 | 预览 | 命令 |
| --- | --- | --- | --- | --- | --- |
| $\leftarrow$ | `\leftarrow` | $\rightarrow$ | `\rightarrow` | $\leftrightarrow$ | `\leftrightarrow` |
| $\Leftarrow$ | `\Leftarrow` | $\Rightarrow$ | `\Rightarrow` | $\Leftrightarrow$ | `\Leftrightarrow` |
| $\longleftarrow$ | `\longleftarrow` | $\longrightarrow$ | `\longrightarrow` | $\longleftrightarrow$ | `\longleftrightarrow` |
| $\Longleftarrow$ | `\Longleftarrow` | $\Longrightarrow$ | `\Longrightarrow` | $\Longleftrightarrow$ | `\Longleftrightarrow` |
| $\uparrow$ | `\uparrow` | $\downarrow$ | `\downarrow` | $\updownarrow$ | `\updownarrow` |
| $\Uparrow$ | `\Uparrow` | $\Downarrow$ | `\Downarrow` | $\Updownarrow$ | `\Updownarrow` |
| $\mapsto$ | `\mapsto` | $\longmapsto$ | `\longmapsto` | $\hookleftarrow$ | `\hookleftarrow` |
| $\hookrightarrow$ | `\hookrightarrow` | $\nearrow$ | `\nearrow` | $\searrow$ | `\searrow` |
| $\swarrow$ | `\swarrow` | $\nwarrow$ | `\nwarrow` | $\leadsto$ | `\leadsto` |

## 扩展箭头

| 预览 | 命令 | 预览 | 命令 |
| --- | --- | --- | --- |
| $\leftharpoonup$ | `\leftharpoonup` | $\leftharpoondown$ | `\leftharpoondown` |
| $\rightharpoonup$ | `\rightharpoonup` | $\rightharpoondown$ | `\rightharpoondown` |
| $\rightleftharpoons$ | `\rightleftharpoons` | $\leftrightharpoons$ | `\leftrightharpoons` |
| $\dashrightarrow$ | `\dashrightarrow` | $\dashleftarrow$ | `\dashleftarrow` |
| $\leftleftarrows$ | `\leftleftarrows` | $\rightrightarrows$ | `\rightrightarrows` |
| $\twoheadleftarrow$ | `\twoheadleftarrow` | $\twoheadrightarrow$ | `\twoheadrightarrow` |
| $\leftarrowtail$ | `\leftarrowtail` | $\rightarrowtail$ | `\rightarrowtail` |
| $\curvearrowleft$ | `\curvearrowleft` | $\curvearrowright$ | `\curvearrowright` |
| $\circlearrowleft$ | `\circlearrowleft` | $\circlearrowright$ | `\circlearrowright` |
| $\Lsh$ | `\Lsh` | $\Rsh$ | `\Rsh` |
| $\multimap$ | `\multimap` | $\rightsquigarrow$ | `\rightsquigarrow` |
| $\leftrightsquigarrow$ | `\leftrightsquigarrow` | $\looparrowleft$ | `\looparrowleft` |
| $\looparrowright$ | `\looparrowright` | $\upuparrows$ | `\upuparrows` |
| $\downdownarrows$ | `\downdownarrows` | $\upharpoonleft$ | `\upharpoonleft` |
| $\upharpoonright$ | `\upharpoonright` | $\downharpoonleft$ | `\downharpoonleft` |
| $\downharpoonright$ | `\downharpoonright` | $\nleftarrow$ | `\nleftarrow` |
| $\nrightarrow$ | `\nrightarrow` | $\nLeftarrow$ | `\nLeftarrow` |
| $\nRightarrow$ | `\nRightarrow` | $\nleftrightarrow$ | `\nleftrightarrow` |
| $\nLeftrightarrow$ | `\nLeftrightarrow` | | |

# 杂项符号

| 预览 | 命令 | 预览 | 命令 | 预览 | 命令 |
| --- | --- | --- | --- | --- | --- |
| $\infty$ | `\infty` | $\nabla$ | `\nabla` | $\partial$ | `\partial` |
| $\forall$ | `\forall` | $\exists$ | `\exists` | $\nexists$ | `\nexists` |
| $\emptyset$ | `\emptyset` | $\varnothing$ | `\varnothing` | $\imath$ | `\imath` |
| $\jmath$ | `\jmath` | $\ell$ | `\ell` | $\wp$ | `\wp` |
| $\clubsuit$ | `\clubsuit` | $\diamondsuit$ | `\diamondsuit` | $\heartsuit$ | `\heartsuit` |
| $\spadesuit$ | `\spadesuit` | $\cdots$ | `\cdots` | $\vdots$ | `\vdots` |
| $\ldots$ | `\ldots` | $\ddots$ | `\ddots` | $\Im$ | `\Im` |
| $\Re$ | `\Re` | $\sharp$ | `\sharp` | $\flat$ | `\flat` |
| $\natural$ | `\natural` | $\Bbbk$ | `\Bbbk` | $\bigstar$ | `\bigstar` |
| $\diagdown$ | `\diagdown` | $\diagup$ | `\diagup` | $\Diamond$ | `\Diamond` |
| $\Finv$ | `\Finv` | $\Game$ | `\Game` | $\hbar$ | `\hbar` |
| $\hslash$ | `\hslash` | $\lozenge$ | `\lozenge` | $\mho$ | `\mho` |
| $\prime$ | `\prime` | $\square$ | `\square` | $\surd$ | `\surd` |
| $\angle$ | `\angle` | $\measuredangle$ | `\measuredangle` | $\sphericalangle$ | `\sphericalangle` |
| $\complement$ | `\complement` | $\triangledown$ | `\triangledown` | $\triangle$ | `\triangle` |
| $\vartriangle$ | `\vartriangle` | $\blacklozenge$ | `\blacklozenge` | $\blacksquare$ | `\blacksquare` |
| $\blacktriangle$ | `\blacktriangle` | $\blacktriangledown$ | `\blacktriangledown` | $\backprime$ | `\backprime` |
| $\circledS$ | `\circledS` | | | | |

# 数学重音

| 预览 | 命令 | 预览 | 命令 |
| --- | --- | --- | --- |
| $\acute{a}$. | `\acute{a}` | $\grave{a}$. | `\grave{a}` |
| $\breve{a}$. | `\breve{a}` | $\check{a}$. | `\check{a}` |
| $\ddot{a}$. | `\ddot{a}` | $\dot{a}$. | `\dot{a}` |
| $\hat{a}$. | `\hat{a}` | $\tilde{a}$. | `\tilde{a}` |
| $\bar{a}$. | `\bar{a}` | $\vec{a}$. | `\vec{a}` |

宽重音适合多个字符：

```latex
\widehat{ABC} \qquad \widetilde{ABC} \qquad \overline{ABC}
```

$$
\widehat{ABC} \qquad \widetilde{ABC} \qquad \overline{ABC}
$$

# 数组、矩阵与分段函数

数组环境的列格式中，`l`、`c`、`r` 分别表示左对齐、居中、右对齐；使用 `|` 可在列间加入竖线。每一行用 `\\` 结束，每个单元格用 `&` 分隔。

```latex
\begin{array}{cc}
  2\tau & 7\phi - \frac{5}{12} \\
  3\psi & \frac{\pi}{8}
\end{array}
```

$$
\begin{array}{cc}
  2\tau & 7\phi - \frac{5}{12} \\
  3\psi & \frac{\pi}{8}
\end{array}
$$

常见矩阵与行向量、列向量写法：

```latex
\left(
  \begin{array}{c}
    x \\
    y
  \end{array}
\right)
\qquad
\left[
  \begin{array}{cc|c}
    3 & 4 & 5 \\
    1 & 3 & 729
  \end{array}
\right]
```

$$
\left(
  \begin{array}{c}
    x \\
    y
  \end{array}
\right)
\qquad
\left[
  \begin{array}{cc|c}
    3 & 4 & 5 \\
    1 & 3 & 729
  \end{array}
\right]
$$

分段函数可组合 `\left\{`、`array` 与 `\right.`：

```latex
f(z) = \left\{
  \begin{array}{rcl}
    \overline{z^2 + \cos z} & \text{for} & |z| < 3 \\
    0 & \text{for} & 3 \le |z| \le 5 \\
    \sin \overline{z} & \text{for} & |z| > 5
  \end{array}
\right.
```

$$
f(z) = \left\{
  \begin{array}{rcl}
    \overline{z^2 + \cos z} & \text{for} & |z| < 3 \\
    0 & \text{for} & 3 \le |z| \le 5 \\
    \sin \overline{z} & \text{for} & |z| > 5
  \end{array}
\right.
$$

# 数学字体与字号

| 效果 | 命令 | 用途 |
| --- | --- | --- |
| $\mathcal{ABC}$. | `\mathcal{ABC}` | 花体大写字母 |
| $\mathbb{ABC}$. | `\mathbb{ABC}` | 黑板粗体，常用于数集 |
| $\mathfrak{ABC}$. | `\mathfrak{ABC}` | Fraktur 字体 |
| $\mathsf{ABC}$. | `\mathsf{ABC}` | 无衬线体 |
| $\mathbf{ABC}$. | `\mathbf{ABC}` | 粗体罗马字母 |
| $\mathit{ABC}$. | `\mathit{ABC}` | 数学斜体 |
| $\mathrm{d}x$. | `\mathrm{d}x` | 直立罗马体 |
| $\text{for}$. | `\text{for}` | 公式中的普通文本 |

数学样式大小：

| 效果 | 命令 |
| --- | --- |
| $\displaystyle \int f^{-1}(x-x_a)\,\mathrm{d}x$ | `\displaystyle` |
| $\textstyle \int f^{-1}(x-x_a)\,\mathrm{d}x$ | `\textstyle` |
| $\scriptstyle \int f^{-1}(x-x_a)\,\mathrm{d}x$ | `\scriptstyle` |
| $\scriptscriptstyle \int f^{-1}(x-x_a)\,\mathrm{d}x$ | `\scriptscriptstyle` |

文本模式字号命令包括 `\tiny`、`\scriptsize`、`\footnotesize`、`\small`、`\normalsize`、`\large`、`\Large`、`\LARGE`、`\huge` 与 `\Huge`。

# 文本模式的重音与符号

下列内容属于 LaTeX 文本模式，适用于普通段落而非数学环境。

| 输出 | 命令 | 输出 | 命令 |
| --- | --- | --- | --- |
| ó | `\'{o}` | ö | `\"{o}` |
| ô | `\^{o}` | ò | ``\`{o}`` |
| õ | `\~{o}` | ō | `\={o}` |
| ȯ | `\.{o}` | ŏ | `\u{o}` |
| ő | `\H{o}` | o͡o | `\t{oo}` |
| ø | `\o` | å | `\aa` |
| Å | `\AA` | æ | `\ae` |
| Æ | `\AE` | ß | `\ss` |
| ı | `\i` |  | `\j` |
| § | `\S` | ¶ | `\P` |
| † | `\dag` | ‡ | `\ddag` |
| © | `\copyright` | £ | `\pounds` |

# 快速示例

```latex
$$
\forall \varepsilon > 0,\ \exists \delta > 0,
\quad |x-a| < \delta \Rightarrow |f(x)-f(a)| < \varepsilon.
$$
```

$$
\forall \varepsilon > 0,\ \exists \delta > 0,
\quad |x-a| < \delta \Rightarrow |f(x)-f(a)| < \varepsilon.
$$

```latex
$$
A \subseteq B \Longrightarrow A \cap B = A,
\qquad
A \cup B = B.
$$
```

$$
A \subseteq B \Longrightarrow A \cap B = A,
\qquad
A \cup B = B.
$$
