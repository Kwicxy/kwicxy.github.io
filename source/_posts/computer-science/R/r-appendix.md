---
layout: post
title: R 附录
date: 2025-12-29 20:17:16
categories:
  - 计算机科学
  - R 语言
tags:
---

# 常见相似函数的区别
## 检验 test 相关 
### `z.test`

### `t.test`

### `prop.test`

### `shapiro.test`

# 项目使用的包和函数
按包分组，先概述包用途，再列函数的主要作用与核心参数。

##  base / stats（基础内置）
- **主要用途**：语言内核、基础数据结构、IO、统计基础。
- `read.csv(path, header=TRUE, sep=",", stringsAsFactors=FALSE)`: 读表格文本。
- `write.csv(x, file)`, `write.table(x, file)`, `sink(file)`: 写出/重定向。
- 向量/序列：`c(...)`, `seq(from, to, by, length.out)`, `rep(x, times, each)`。
- 随机与分布：`rnorm(n, mean, sd)`, `pnorm(x, mean, sd)`, `qnorm(p, mean, sd)`, `pt/qt`。
- 索引/汇总：`which`, `which.max`, `which.min`, `mean`, `median`, `sum`, `var`, `sd`, `min`, `max`, `range`, `quantile`, `summary`, `head`, `tail`。
- 排序：`sort`, `order`, `rank`, `rev`。
- 结构：`matrix(data, nrow, ncol, byrow, dimnames)`, `cbind`, `rbind`, `array(dim=...)`。
- 数据框：`data.frame(...)`, `as.data.frame(obj)`, `colnames<-`, `row.names<-`, `subset(x, condition, select)`, `cut(x, breaks, labels, ordered)`, `factor(x, levels, ordered)`。
- apply 系列：`apply(X, MARGIN, FUN)`, `lapply(X, FUN)`, `sapply(X, FUN)`。
- 回归/ANOVA：`lm(formula, data)`, `aov(formula, data)`, `summary`, `confint`, `predict(model, newdata, interval)`, `anova(model)`, `plot(model)`，`TukeyHSD(aov_model)`。
- 统计检验：`shapiro.test(x)`, `ks.test(x, "pnorm", mean, sd)`。

##  agricolae
- **用途**：农学统计，事后比较。
- `HSD.test(aov_model, trt, alpha=0.05, group=TRUE, console=TRUE)`: Tukey HSD 分组。

##  BSDA / TeachingDemos
- **用途**：基础统计与教学函数。
- `z.test(x, mu=0, sigma.x, alternative, conf.level)`: 均值/比例 z 检验与区间。
- `z.test(xbar, mu, stdev, n, alternative, conf.level)`（TeachingDemos 形式）。

##  car
- **用途**：回归诊断与方差齐性检验。
- `leveneTest(y ~ group, data, center=median)`: 方差齐性。
- `ncvTest(model)`: 异方差检验。
- `durbinWatsonTest(model)`: 自相关检验。
- `vif(model)`: 方差膨胀因子。

##  DescTools
- **用途**：描述统计与效应量。
- `Mode(x)`: 众数。
- `EtaSq(model, type=1/2)`: 方差分析效应量 η²。
- `BarText(heights, b, horiz=FALSE, ...)`: 条形图标注。

##  e1071
- **用途**：统计扩展。
- `skewness(x, type)`, `kurtosis(x, type)`: 偏度、峰度。

##  ggiraphExtra
- **用途**：交互/雷达图。
- `ggRadar(data, rescale=FALSE, aes(group=...), alpha=0, size=2)`: 雷达图。

##  ggExtra
- **用途**：ggplot 边际图。
- `ggMarginal(p, type="boxplot"/"density")`: 添加边际分布。

##  gginference
- **用途**：基于 ggplot 的统计可视化。
- `ggaov(aov_model, colreject, colstat)`: ANOVA 可视化。

##  ggplot2
- **用途**：语法层次化绘图。
- `ggplot(data, aes(...))` + `geom_line/point/boxplot` 等；`facet_grid` 分面。

##  ggpubr
- **用途**：简化 ggplot 统计标注。
- `stat_anova_test(method="one_way", label="as_detailed_italic")`: 在图上标注 ANOVA 结果。

##  gplots
- **用途**：绘图增强。
- `plotmeans(formula, data, p=0.95, mean.labels=TRUE, ci.label=TRUE, n.label=TRUE)`: 均值与 CI 绘图。

##  HH
- **用途**：交互作用可视化。
- `interaction2wt(formula, data)`: 双因素交互图。

##  investr
- **用途**：回归辅助。
- `plotFit(model, interval="confidence"/"prediction", level)`: 绘制回归线及带。

##  lm.beta
- **用途**：标准化回归系数。
- `lm.beta(model)`: 计算标准化系数。

##  psych
- **用途**：心理与统计工具。
- `describe(x)`: 描述性统计表。
- `corr.test(mat, method="pearson")`: 相关系数与检验。

##  RColorBrewer
- **用途**：调色板。
- `brewer.pal(n, name)`: 获取离散色板。

##  readxl
- **用途**：读取 Excel 文件。
- `read_excel(path, sheet=1, col_names=TRUE)`: 选择工作表与表头。

##  reshape2
- **用途**：数据宽长转换。
- `melt(data, id.vars, variable.name, value.name)`: 宽转长。

##  sjPlot
- **用途**：回归结果可视化。
- `plot_model(model, type="est"/"std"/"diag", show.values=TRUE, show.p=TRUE)`: 系数/诊断图。

##  stringr
- **用途**：字符串处理。
- `str_extract(_all)(x, pattern)`: 提取匹配。
- `str_count(x, pattern)`, `str_length(x)`: 计数与长度。
- `str_replace(_all)(x, pattern, replacement)`: 替换。
