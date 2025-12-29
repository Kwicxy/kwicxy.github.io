---
layout: post
title: R 语言统计应用
date: 2025-12-29 17:20:16
categories:
  - 计算机科学
  - R 语言
tags:
---
# 使用 R 完成统计学任务

## 1. 描述统计
- 集中趋势：`mean/median/quantile`；`weighted.mean`；众数 `DescTools::Mode`。
- 离散程度：`var/sd`，极差 `max-min`，`IQR`，自定义加权方差/标准差。
- 列级统计：`apply(df, 2, mean/sd)`；变异系数 `cv <- sd/mean`；`scale` 标准化。
- 形态：`e1071::skewness/kurtosis`；`psych::describe`。

```R
data1 <- read.csv("resources/data/example4_1.csv")
mean(data1$Online.shopping.amount)
median(data1$Online.shopping.amount)
quantile(data1$Online.shopping.amount, probs = c(0.25, 0.75))
```

## 2. 分布概率与区间估计
- 正态/标准正态：`pnorm/qnorm`；t 分布 `pt/qt`。
- 置信区间与 z 检验：`BSDA::z.test(x, mu, sigma.x, alternative, conf.level)`。

```R
1 - pnorm(80, mean = 10, sd = 10)
pnorm(30, mean = 50, sd = 10) - pnorm(20, mean = 50, sd = 10)
BSDA::z.test(example5_4$Food.weight, mu = 0, sigma.x = 5, conf.level = 0.95)
```

## 3. 假设检验
- 均值 z 检验：已知 σ 时 `z.test(..., sigma.x=...)`，`alternative=two.sided/less/greater`。
- 比例检验：`z <- (p-p0)/sqrt(p0*(1-p0)/n)`，`pnorm/1-pnorm` 求 p 值。

```R
example5_11 <- read.csv("resources/data/example5_11.csv")
z.test(example5_11$Protein.content, mu = 3, sigma.x = 0.07,
       alternative = "less", conf.level = 0.99)

n <- 200; x <- 170; p <- x / n; pi0 <- 0.8
z <- (p - pi0) / sqrt(pi0 * (1 - pi0) / n)
p_val <- 1 - pnorm(z)
```

## 4. 频数与分组
- 频数/频率：`table`、`prop.table`、`cumsum` 与反向累计。
- 分组数与组距：`k <- ceiling(1+3.322*log10(n))`，`h <- ceiling(range/k)`。

```R
mat <- c(78, 82, 65, 91, 73, 88, 76, 69, 85, 90)
table(mat); prop.table(table(mat))
k <- ceiling(1 + 3.322 * log10(length(mat)))
```

## 5. 单因素/双因素方差分析
- 单因素 ANOVA：数据长表 `melt`，模型 `aov(y ~ 组)`，效应量 `DescTools::EtaSq`，事后比较 `TukeyHSD` 或 `agricolae::HSD.test`，可视化 `gginference::ggaov`、`gplots::plotmeans`、`ggpubr::stat_anova_test`。

```R
library(reshape2)
example9_1 <- read.csv("resources/data/example9_1.csv")
example9_2 <- melt(example9_1, variable.name = "品种", value.name = "产量")
model_1w <- aov(产量 ~ 品种, data = example9_2)
summary(model_1w)
DescTools::EtaSq(model_1w)
TukeyHSD(model_1w)
agricolae::HSD.test(model_1w, "品种", group = TRUE, console = TRUE)
```

- 双因素 ANOVA（含交互）：`aov(y ~ 因子1 * 因子2)`；交互图 `HH::interaction2wt`；效应量 `EtaSq`。

```R
table9_4 <- read.csv("resources/data/example9_4.csv")
model_2 <- aov(产量 ~ 品种 * 施肥方式, data = table9_4)
summary(model_2)
DescTools::EtaSq(model_2)
HH::interaction2wt(产量 ~ 施肥方式 + 品种, data = table9_4)
```

- 假定检验：正态性 `shapiro.test`/`ks.test`，方差齐性 `car::leveneTest`，残差图 `plot(model, which=1)`。

```R
shapiro.test(table9_4$产量[table9_4$品种 == "品种1"])
car::leveneTest(产量 ~ 品种, center = median, data = table9_4)
```

## 6. 相关与回归
- 相关：`psych::corr.test`，可视化散点+边际箱线 `ggExtra::ggMarginal`。

```R
example10_1 <- read.csv("resources/data/example10_1.csv")
psych::corr.test(example10_1[, 1:6], method = "pearson")
```

- 一元线性回归：`lm(y ~ x)`，`summary`、`confint`、`anova`，预测区间/置信区间 `predict(model, newdata, interval=...)`，诊断图 `plot(model)`，残差与置信/预测带 `investr::plotFit`，异方差 `car::ncvTest`，自相关 `car::durbinWatsonTest`。

```R
model <- lm(每股收益 ~ 每股净资产, data = example10_1)
summary(model)
confint(model, level = 0.95)
predict(model, data.frame(每股净资产 = 10), interval = "prediction")
car::ncvTest(model)
```

- 多元线性回归与共线性：`lm(y ~ x1 + x2 + ...)`，标准化系数 `lm.beta::lm.beta`，VIF/容忍度 `car::vif`，逐步回归 `step(model)`，系数森林图与诊断 `sjPlot::plot_model(type="est"/"std"/"diag")`。

```R
model1 <- lm(每股收益 ~ 每股净资产 + 净资产收益率 + 每股资本公积金 + 每股现金流量 + 总股本,
             data = example10_1)
summary(model1)
lm.beta::lm.beta(model1)
car::vif(model1)
model2 <- step(model1)
sjPlot::plot_model(model1, type = "est", show.values = TRUE, show.p = TRUE)
```
