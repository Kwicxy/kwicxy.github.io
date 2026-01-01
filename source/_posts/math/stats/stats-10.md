---
layout: post
title: 第10章 线性回归
math: true
date: 2026-01-02 02:16:23
categories:
  - 数学
  - 管理统计
tags: []
---

# 相关 vs. 回归
**相关分析**
- 用来度量两个变量之间线性关系的强度
- 相关只考虑相关关系的强度
- 相关关系中不涉及因果关系

**回归分析**
- 根据至少一个自变量的值预测因变量的值
- 解释自变量的变化对因变量的影响

> 因变量 `Dependent variable`: 我们希望预测或解释的变量
> 自变量 `Independent variable`: 用来预测或解释因变量的变量

# 简单线性回归模型
- 只有一个自变量 $X$
- 用线性函数来描述 $X$ 与 $Y$ 之间的关系
- 假定 $Y$ 的变化与 $X$ 的变化相关

## 模型与假设

**线性模型**
$$
Y_i = \beta_0 + \beta_1 X_i + \epsilon_i
$$

> $Y_i$: 第 $i$ 个观测的因变量值
> $X_i$: 第 $i$ 个观测的自变量值
> $\beta_0$: 截距 (总体参数)
> $\beta_1$: 斜率 (总体参数)
> $\epsilon_i$: 随机误差项

常见假设：
- 误差项均值为0：$E(\epsilon_i)=0$
- 方差齐性：$Var(\epsilon_i)=\sigma^2$
- 独立：$\epsilon_i$ 相互独立
- 正态：$\epsilon_i \sim N(0,\sigma^2)$ (用于推断)

**回归模型方程**
$$
\hat{Y}_i = b_0 + b_1 X_i
$$

> $\hat{Y}_i$: 第 $i$ 个观测的 $Y$ 值预测值
> $b_0$: 回归截距的估计值 (当 $X=0$ 时，$Y$ 均值的估计值)
> $b_1$: 回归斜率的估计值 (当 $X$ 变化一单位，$Y$ 均值变化的估计值)
> $X_i$: 第 $i$ 个观测的 $X$ 值

## 最小二乘法

$b_0$ 和 $b_1$ 通过最小化残差平方和得到：

$$
\min \sum_{i=1}^{n} (Y_i-\hat{Y}_i)^2 = \min \sum_{i=1}^{n} (Y_i-(b_0+b_1 X_i))^2
$$

令残差 $e_i = Y_i - \hat{Y}_i$。

### 最小二乘估计

记：
- $\overline{X} = \frac{1}{n}\sum_{i=1}^{n}X_i$
- $\overline{Y} = \frac{1}{n}\sum_{i=1}^{n}Y_i$

$$
S_{xx} = \sum_{i=1}^{n}(X_i-\overline{X})^2
$$

$$
S_{xy} = \sum_{i=1}^{n}(X_i-\overline{X})(Y_i-\overline{Y})
$$

$$
b_1 = \frac{S_{xy}}{S_{xx}}
$$

$$
b_0 = \overline{Y} - b_1\overline{X}
$$

# 离差的度量
离差分解：
$$
SST = SSR + SSE
$$

## 总平方和 `SST`

$$
SST = \sum_{i=1}^{n}(Y_i-\overline{Y})^2
$$

## 回归平方和 `SSR`

$$
SSR = \sum_{i=1}^{n}(\hat{Y}_i-\overline{Y})^2
$$

## 残差平方和 `SSE`

$$
SSE = \sum_{i=1}^{n}(Y_i-\hat{Y}_i)^2 = \sum_{i=1}^{n} e_i^2
$$


## 可决系数 $r^2$

可决系数是衡量 $Y$ 的总离差中由回归模型解释的部分所占的比例，记为 $r^2$：
$$
r^2 = \frac{SSR}{SST}
$$

$r^2 = 1$:
- X 和 Y 之间是完美的线性关系
- Y 的变动 100% 可以由 X 的变动解释

$0 < r^2 < 1$:
- X 和 Y 之间是更弱的线性关系
- Y 的变动有一些但不是全部可以由 X 的变动解释

$r^2 = 0$:
- X 和 Y之间完全无线性关系:
- Y 值的变动 不依赖于 X (Y的变动 不能用X的变动解释)

## 相关系数 $r$

$$
r = \frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}
$$

其中：
$$
S_{yy} = \sum_{i=1}^{n}(Y_i-\overline{Y})^2 = SST
$$

> 简单线性回归中：$r^2$ 与相关系数的关系为 $r^2 = (r)^2$。
> $b_1$ 与 $r$ 同号。

## 标准误 $S_{YX}$

观测值围绕回归直线的方差的标准差可以用如下公式进行估计：

$$\begin {aligned}
S_{YX} &= \sqrt{\frac{SSE}{n-2}} \\
&= \sqrt{\frac{\sum_{i=1}^{n} (Y_i - \hat{Y}_i)^2}{n-2}}
\end {aligned}$$

> $SSE$: 残差平方和
> $n$: 样本容量

## 回归的方差分析表 (Regression ANOVA)

| Source | SS | d.f. | MS | F |
| --- | ---: | ---: | ---: | ---: |
| Regression | $SSR$ | $1$ | $MSR = SSR/1$ | $MSR/MSE$ |
| Error | $SSE$ | $n-2$ | $MSE = SSE/(n-2)$ | |
| Total | $SST$ | $n-1$ | | |

# 统计推断

## 斜率的 t 检验

检验 $X$ 与 $Y$ 是否存在线性关系，等价于检验斜率是否为0。

假设：
- Two-tail test: $H_0: \beta_1 = 0,\ H_1: \beta_1 \neq 0$

斜率的标准误：
$$
S_{b_1} = \frac{S_{YX}}{\sqrt{S_{xx}}}
$$

检验统计量：
$$
t_{STAT} = \frac{b_1 - \beta_1}{S_{b_1}}
$$

在 $H_0: \beta_1=0$ 下：
$$
t_{STAT} = \frac{b_1}{S_{b_1}}
$$

> 自由度 $d.f. = n-2$

## 相关系数的 t 检验

假设：
- Two-tail test: $H_0: \rho = 0,\ H_1: \rho \neq 0$

检验统计量：
$$
t_{STAT} = \frac{r\sqrt{n-2}}{\sqrt{1-r^2}}
$$

> 自由度 $d.f. = n-2$

## 显著性的 F 检验

检验回归模型整体显著性：

假设：
- $H_0: \beta_1 = 0$
- $H_1: \beta_1 \neq 0$

均方：
$$
MSR = \frac{SSR}{1},\ \ \ MSE = \frac{SSE}{n-2}
$$

检验统计量：
$$
F_{STAT} = \frac{MSR}{MSE}
$$

> 自由度：分子 $d.f. = 1$，分母 $d.f. = n-2$
> 简单线性回归中 $F_{STAT} = t_{STAT}^2$ (针对 $\beta_1$ 的检验)。

## 斜率的置信区间估计

$$
\mathrm{CI} = b_1 \pm t_{\alpha/2;\ n-2} S_{b_1}
$$

> 若区间不包含0，则通常认为斜率显著不为0。
