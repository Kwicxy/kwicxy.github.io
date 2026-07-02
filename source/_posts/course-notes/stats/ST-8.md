---
layout: post
title: 第8章 两个样本检验
math: true
date: 2026-01-02 01:12:43
categories:
  - 课程笔记
  - 管理统计
tags:
  - 两个样本检验
---

# 均值检验
## 相互独立样本
### $\sigma_1$ 与 $\sigma_2$ 未知，假设相等
用 $S_p$ 估计未知的 $\sigma$. 使用混合方差t检验 `Pooled-variance t-test`

**假设检验**
- Lower-tail test: $H_0: \mu_1 - \mu_2 \ge 0, H_1: \mu_1 - \mu_2 < 0$
- Upper-tail test: $H_0: \mu_1 - \mu_2 \le 0, H_1: \mu_1 - \mu_2 > 0$
- Two-tail test: $H_0: \mu_1 - \mu_2 = 0, H_1: \mu_1 - \mu_2 \neq 0$

**混合方差**

$$
S_{p}^2 = \frac{(n_1 - 1)S_1^2 + (n_2 - 1)S_2^2}{(n_1 - 1) + (n_2 - 1)}
$$

**检验统计量**
$$
t_{STAT} = \frac{(\overline{X}_1 - \overline{X}_2) - (\mu_1 - \mu_2)}{ \sqrt{S_p^2(\frac{1}{n_1} + \frac{1}{n_2})} }
$$

> 自由度 $d.f. = n_1 + n_2 - 2$

**$\mu_1 - \mu_2$的置信区间**
$$
\mathrm{CI} = (\overline{X}_1 - \overline{X}_2) \pm t_{\alpha/2} \sqrt{S_p^2(\frac{1}{n_1} + \frac{1}{n_2})}
$$

### $\sigma_1$ 与 $\sigma_2$ 未知，没有假设相等
用 $S_1$ 与$S_2$ 估计未知的 $\sigma_1$ 与 $\sigma_2$. 使用 `Separated-variance t-test`

**检验统计量**
$$
t_{STAT} = \frac{(\overline{X}_1 - \overline{X}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}}}
$$

> 自由度 $d.f.$ 使用 Welch-Satterthwaite 公式计算:
> $$ d.f. = \frac{(\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2})^2}{ \frac{(\frac{S_1^2}{n_1})^2}{n_1 - 1} + \frac{(\frac{S_2^2}{n_2})^2}{n_2 - 1} } $$

## 相关样本
检验两个相关总体的均值差异（配对样本 t 检验 `Paired t-test`）。

**假设检验**
- Lower-tail test: $H_0: \mu_D \ge 0, H_1: \mu_D < 0$
- Upper-tail test: $H_0: \mu_D \le 0, H_1: \mu_D > 0$
- Two-tail test: $H_0: \mu_D = 0, H_1: \mu_D \neq 0$

**检验统计量**
$$
t_{STAT} = \frac{\overline{D} - \mu_D}{ \frac{S_D}{\sqrt{n}} }
$$

> $\overline{D}$ 是样本差值的均值
> $S_D$ 是样本差值的标准差
> $n$ 是配对的数量
> 自由度 $d.f. = n - 1$

**置信区间**
$$
\mathrm{CI} = \overline{D} \pm t_{\alpha/2} \frac{S_D}{\sqrt{n}}
$$

# 比例检验
检验两个独立总体的比例差异（Z 检验 `Z-test for the difference between two proportions`）。

**假设检验**
- Lower-tail test: $H_0: \pi_1 - \pi_2 \ge 0, H_1: \pi_1 - \pi_2 < 0$
- Upper-tail test: $H_0: \pi_1 - \pi_2 \le 0, H_1: \pi_1 - \pi_2 > 0$
- Two-tail test: $H_0: \pi_1 - \pi_2 = 0, H_1: \pi_1 - \pi_2 \neq 0$

**混合比例**
在 $H_0: \pi_1 = \pi_2$ 假设下，使用混合比例 $\overline{p}$：
$$
\overline{p} = \frac{X_1 + X_2}{n_1 + n_2}
$$

**检验统计量**
$$
Z_{STAT} = \frac{(p_1 - p_2) - (\pi_1 - \pi_2)}{\sqrt{\overline{p}(1-\overline{p})(\frac{1}{n_1} + \frac{1}{n_2})}}
$$

**$\pi_1 - \pi_2$ 的置信区间**
$$
\mathrm{CI} = (p_1 - p_2) \pm Z_{\alpha/2} \sqrt{\frac{p_1(1-p_1)}{n_1} + \frac{p_2(1-p_2)}{n_2}}
$$
