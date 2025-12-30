---
layout: post
title: R 语言可视化
date: 2025-12-29 17:19:16
categories:
  - 计算机科学
  - R语言
tags:
---

# R 语言可视化

## 常用绘图参数速查
- `type`：`"p"` 点，`"l"` 线，`"b"` 点线；常用于 `plot`/`lines`。
- `pch`：点形状，整数或字符；常见 16 (实心圆)、19 (大实心圆)、21 (填充圆)。
- `col` / `border` / `fill`：颜色；`col.axis`/`col.lab`/`col.main` 控制轴/标签/标题颜色。
- `cex`：整体缩放；`cex.axis`/`cex.lab`/`cex.main` 控制字号缩放。
- `lwd`：线宽；`lty` 线型 (1 实线, 2 虚线, 3 点线)。
- `xlab` / `ylab` / `main` / `sub`：轴标签与标题。
- `xlim` / `ylim`：坐标轴范围；`las` 坐标轴刻度文字方向。
- `mfrow` / `mfcol`：`par` 的多面板布局。
- `legend`：`legend(x, legend, col, pch, lwd, lty, bty="n")` 添加图例。


## 1. 基础绘图
- 散点图：`plot(x, y, type="p", pch=16, col=...)`，可加 `legend()`；叠加回归线 `abline(lm(y ~ x))`。

```r
set.seed(1145)
x <- sample(1:100, 80)
y <- 2 * x + 20 + rnorm(80, 0, 10)
plot(x, y, pch = 16, col = "blue", main = "Scatter Plot")
abline(lm(y ~ x), col = "coral", lwd = 2)
```

## 2. 条形图与帕累托
- 横向条形：`barplot(vals, horiz=TRUE, names=..., col=...)`；`DescTools::BarText` 添加数值。
- 帕累托：排序后 `barplot`，叠加累计曲线 `lines(cumsum(x)/sum(x))`。

```r
df <- read.csv("resources/data/example3_1.csv")
b <- barplot(df$Beijing, horiz = TRUE, names = df$Expenditure.items, col = "lightblue")
DescTools::BarText(df$Beijing, b = b, horiz = TRUE)
x <- sort(df$Beijing, decreasing = TRUE)
bar <- barplot(x, col = "skyblue")
lines(cumsum(x)/sum(x), type = "b", pch = 15)
```

## 3. 直方图与密度

```r
df <- read.csv("resources/data/example3_3.csv")
hist(df$turnover, breaks = 20, prob = TRUE, col = "lightblue")
lines(density(df$turnover), col = "coral", lwd = 2)
```

## 4. 箱线图

```r
df3_4 <- read.csv("resources/data/example3_4.csv")
boxplot(df3_4, xlab = "College", ylab = "English Score", col = RColorBrewer::brewer.pal(5, "Set3"))
points(apply(df3_4, 2, mean), col = "blue3", pch = "+", cex = 1.5)
```

## 5. 散点、气泡与线图

```r
df3_5 <- read.csv("resources/data/example3_5.csv")
plot(df3_5$per.capita.GDP, df3_5$Total.retail.sales.of.consumer.goods, pch = 19, col = "steelblue")
abline(lm(df3_5$Total.retail.sales.of.consumer.goods ~ df3_5$per.capita.GDP), col = "coral", lwd = 2)

symbols(x=df3_5$per.capita.GDP,
        y=df3_5$Total.retail.sales.of.consumer.goods,
        circles=df3_5$General.budgetary.expenditures.of.local.governments,
        inches=0.2, bg="pink")
```

## 6. 多系列/双轴折线

```r
stock <- readxl::read_excel("resources/data/stock.xlsx")
plot(stock$year, stock$SP, type = "b", pch = 16, col = "steelblue")
par(new = TRUE)
plot(stock$year, stock$SQ, type = "b", pch = 17, col = "coral", axes = FALSE, xlab = "", ylab = "")
axis(side = 4); mtext("价格", side = 4, line = 3)
```

## 7. 雷达与面积图

```r
df3_6 <- read.csv("resources/data/example3_6.csv")
ggiraphExtra::ggRadar(data = df3_6, rescale = FALSE, aes(group = Regional), alpha = 0, size = 2)

library(reshape2); library(ggplot2)
df <- reshape2::melt(read.csv("resources/data/example3_7.csv"), id.vars = "year")
ggplot(df, aes(x = year, y = value, color = variable, group = variable)) +
  geom_line() + geom_point()
```

## 8. 多图布局
- `par(mfrow = c(r, c))` 设置面板。

```r
par(mfrow = c(1, 2))
plot(1:5, main = "A")
plot(5:1, main = "B")
```
