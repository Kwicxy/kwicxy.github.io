---
layout: post
title: 第9章 方差检验
math: true
date: 2026-01-02 01:45:43
categories:
  - 数学
  - 管理统计
tags: 
  - 方差分析
---

# 单因素方差分析

只有一个因素或因变量，有2个或多个水平，用单因素方差分析进行分析

假设：
- 总体服从正态分布
- 不同总体有相同的方差
- 样本随机、独立抽取

假设 $H_0: \mu_1 =\mu_2 =\mu_3 = \cdots = \mu_c$

- 所有样本均值都相等
- 即，没有因素效果 (不同组的均值没有变化)

假设 $H_1: Not\ all\ \mu_j\ are\ the\ same$

- 并非所有的均值都相等，至少一个总体均值是不同的
- 即, 有一个因素是起作用的
- 并不意味着所有的总体均值都是不同的 (某些对可以是相同的)

## 离差

总离差可以分为:
$$SST = SSA + SSW$$
> SST = 离差平方和 (总离差)
> SSA = 组间离差平方和 (因素带来的离差)
> SSW = 组内离差平方和 (由于随机误差带来的方差)

### 组间离差 `SSA`

$$
SSA = \sum_{j=1}^{c} n_j(\overline{X}_{j} - \overline{\overline{X}})^2
$$

> $c$: 组的数目
> $n_j$: 组$j$的样本容量
> $\overline{X}_{j}$: 组$j$的样本均值
> $\overline{\overline{X}}$: 所有数据的均值

### 组内离差 `SSW`

$$
SSW = \sum_{j=1}^{c} \sum_{i=1}^{n_j} (X_{ij} - \overline{X}_{j})^2
$$

> $c$: 组的数目
> $n_j$: 组$j$的样本容量
> $\overline{X}_{j}$: 组$j$的样本均值
> $X_{ij}$: 组$j$中第$i$个观测值

### 总离差 `SST`
$$\begin {aligned}
SST &= SSA+SSW \\
&= \sum_{j=1}^{c} n_j(\overline{X}_{j} - \overline{\overline{X}})^2 + \sum_{j=1}^{c} \sum_{i=1}^{n_j} (X_{ij} - \overline{X}_{j})^2 \\
&= \sum_{j=1}^{c} \sum_{i=1}^{n_j} (X_{ij} - \overline{\overline{X}})^2
\end {aligned}$$

## 均方差

### 组间均方差 `MSA`
$$
MSA = \frac{SSA}{c-1}
$$

### 组内均方差 `MSW`
$$
MSW = \frac{SSW}{n-c}
$$

### 总均方差 `MST`
$$
MST = \frac{SST}{n-1}
$$

> 在 $H_0$ 下，$E(MSA)=E(MSW)=\sigma^2$；若组均值差异明显，则通常会出现 $MSA > MSW$。

## F 检验
$$
F_{STAT} = \frac{MSA}{MSW}
$$

> 自由度：分子 $d.f. = c-1$，分母 $d.f. = n-c$

**检验步骤**
- 给定显著性水平 $\alpha$
- 计算 $SSA, SSW$，进而计算 $MSA, MSW, F$
- 右尾检验拒绝域：若 $F_{STAT} > F_{\alpha;\ c-1,\ n-c}$，拒绝 $H_0$

## 方差分析表 (One-way ANOVA)

| Source | SS | d.f. | MS | F |
| --- | ---: | ---: | ---: | ---: |
| Between (A) | $SSA$ | $c-1$ | $MSA$ | $MSA/MSW$ |
| Within (W) | $SSW$ | $n-c$ | $MSW$ | |
| Total (T) | $SST$ | $n-1$ | $MST$ | |

# 双因素方差分析

有两个因素 (A 与 B)，每个因素有多个水平，用双因素方差分析衡量：A 主效应、B 主效应、以及交互作用效应 (A×B)。

假设：
- 各处理组合下总体服从正态分布
- 各处理组合方差相同
- 样本随机、独立抽取

## 符号约定 (平衡设计)

为便于写公式，假设平衡设计：因素 A 有 $a$ 个水平，因素 B 有 $b$ 个水平，每个处理组合有 $n$ 次重复。

> $X_{ijk}$: A 的第 $i$ 个水平、B 的第 $j$ 个水平下，第 $k$ 个观测值
> $i=1,\dots,a$；$j=1,\dots,b$；$k=1,\dots,n$
> $N = abn$: 总样本量
> $\overline{X}_{ij.}$: 单元格 (i,j) 的样本均值
> $\overline{X}_{i..}$: A 的第 $i$ 个水平下的边际均值
> $\overline{X}_{.j.}$: B 的第 $j$ 个水平下的边际均值
> $\overline{X}_{...}$: 全部观测的样本均值

## 假设检验

### 因素 A 的主效应

$$H_0^A: \mu_{1..} = \mu_{2..} = \cdots = \mu_{a..}$$
$$H_1^A: Not\ all\ \mu_{i..}\ are\ the\ same$$

### 因素 B 的主效应

$$H_0^B: \mu_{.1.} = \mu_{.2.} = \cdots = \mu_{.b.}$$
$$H_1^B: Not\ all\ \mu_{.j.}\ are\ the\ same$$

### 交互作用 A×B

假设 $H_0^{AB}$: 无交互作用

假设 $H_1^{AB}$: 有交互作用

> 若交互作用显著，解释主效应时需要谨慎。

## 离差平方和分解

总离差可以分为:
$$
SST = SSA + SSB + SSAB + SSE
$$

### 因素 A 的离差平方和 `SSA`
$$
SSA = bn \sum_{i=1}^{a} (\overline{X}_{i..} - \overline{X}_{...})^2
$$

### 因素 B 的离差平方和 `SSB`
$$
SSB = an \sum_{j=1}^{b} (\overline{X}_{.j.} - \overline{X}_{...})^2
$$

### 交互作用离差平方和 `SSAB`
$$
SSAB = n \sum_{i=1}^{a} \sum_{j=1}^{b} (\overline{X}_{ij.} - \overline{X}_{i..} - \overline{X}_{.j.} + \overline{X}_{...})^2
$$

### 误差离差平方和 `SSE`
$$
SSE = \sum_{i=1}^{a} \sum_{j=1}^{b} \sum_{k=1}^{n} (X_{ijk} - \overline{X}_{ij.})^2
$$

### 总离差 `SST`
$$
SST = \sum_{i=1}^{a} \sum_{j=1}^{b} \sum_{k=1}^{n} (X_{ijk} - \overline{X}_{...})^2
$$

## 自由度与均方

> $d.f._T = N-1 = abn-1$
> $d.f._A = a-1$
> $d.f._B = b-1$
> $d.f._{AB} = (a-1)(b-1)$
> $d.f._E = ab(n-1)$

$$
MSA = \frac{SSA}{a-1}
$$

$$
MSB = \frac{SSB}{b-1}
$$

$$
MSAB = \frac{SSAB}{(a-1)(b-1)}
$$

$$
MSE = \frac{SSE}{ab(n-1)}
$$

## F 检验

$$
F_A = \frac{MSA}{MSE}
$$

$$
F_B = \frac{MSB}{MSE}
$$

$$
F_{AB} = \frac{MSAB}{MSE}
$$

> $F_A$ 的自由度为 $(a-1,\ ab(n-1))$
> $F_B$ 的自由度为 $(b-1,\ ab(n-1))$
> $F_{AB}$ 的自由度为 $((a-1)(b-1),\ ab(n-1))$

## 方差分析表 (Two-way ANOVA)

| Source | SS | d.f. | MS | F |
| --- | ---: | ---: | ---: | ---: |
| Factor A | $SSA$ | $a-1$ | $MSA$ | $MSA/MSE$ |
| Factor B | $SSB$ | $b-1$ | $MSB$ | $MSB/MSE$ |
| Interaction (A×B) | $SSAB$ | $(a-1)(b-1)$ | $MSAB$ | $MSAB/MSE$ |
| Error (E) | $SSE$ | $ab(n-1)$ | $MSE$ | |
| Total (T) | $SST$ | $abn-1$ | | |
