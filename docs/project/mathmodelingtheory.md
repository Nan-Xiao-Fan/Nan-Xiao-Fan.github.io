# 数学建模 - 理论分析

## 引言

在大部分的高校里，外卖无法送入校园、放置于室外无法妥善保管，因此，设立一个外卖柜，通过信息化手段保证外卖的安全性就很有必要。

同时，高校的中午、晚上往往是外卖存取的高峰期，在高峰期，客户的外卖数量可能会大幅增加，如果外卖柜的容量不足，则无法满足客户的需求，导致外卖配送效率降低、用户体验下降等问题。因此，外卖柜的承载能力是评估其服务质量和效率的重要指标之一。

考虑到这一情况，本文尝试通过运用排队论理论对外卖柜的存取过程进行数学建模，尝试分析出不同外卖柜格子数下，外卖柜的存储效率、承载能力等，并据此进行决策。

## 外卖柜存取流程

<div align="center">
<img src="/img/mathmodeling1.svg">
</div>


在外卖员存入外卖，以及用户扫码取走外卖的过程中，我们还需要考虑服务台的数量。

1. 服务台（外卖柜终端机）只有 $1$ 个

    这种情况下，虽然有多个柜子，但是由于顾客都需要将时间花费在终端机的处理上，因此也就可以简化为排队论模型中的 M/M/1 模型

2. 服务台（外卖柜每个柜子）有 $n$ 个

    这种情况，每个用户分别由不同的柜子进行服务，因此，也就可以简化为排队论模型中的 M/M/n 模型 

## 外卖柜 M/M/1 排队模型

假设外卖柜有多个格子，但只有一个处理终端，此时顾客花费的时间大部分在终端的处理上（手机扫码等），即可简化为 M/M/1 模型，外卖订单到达的速率为 $\lambda$，处理速率为 $\mu$。当外卖订单到达后，如果外卖柜终端正在忙碌中，则顾客需要等待直到外卖柜终端空闲为止。我们可以使用排队模型的基本公式求解系统中顾客的平均等待时间、平均逗留时间等指标。

系统中的顾客等待时间服从参数为 $\frac{1}{\mu-\lambda}$ 的指数分布，因此系统中顾客的平均等待时间为：

$$
W_q = \frac{\lambda^2}{\mu(\mu-\lambda)}
$$

系统中的顾客逗留时间服从参数为 $\frac{1}{\mu}$ 的指数分布，因此系统中顾客的平均逗留时间为：

$$
W = \frac{1}{\mu-\lambda}
$$

最后，我们可以根据外卖柜的处理速率和外卖订单的到达速率，计算出系统的繁忙程度 $\rho = \frac{\lambda}{\mu}$，以评估外卖柜的负载情况。

$\rho < 1$ 时，系统处于轻负载状态，外卖柜的承载能力足够；当 $\rho > 1$ 时，系统处于重负载状态，外卖柜的承载能力不足，需要增加处理速率或减少到达速率来提高系统的性能。

为了确定最佳的格子数，我们可以使用成本模型，将顾客等待时间和外卖柜利用率的成本加权求和，得到总成本最小的格子数量作为最佳的格子数量。成本模型可以表示为：

$$
C = c_1 W_q + c_2 (1 - U),
$$

其中 $c_1$ 和 $c_2$ 是等待时间和利用率的权重系数，可以根据具体情况进行调整。最小化总成本 $C$ 可以得到最佳的格子数量。

## 外卖柜 M/M/n 排队模型

假设有 $n$ 个格子，每个格子能够存储一个外卖订单，即 M/M/n 模型，外卖订单到达的速率为 $\lambda$，用户取走外卖的速率为 $\mu$。我们可以用 $P_n$ 来表示系统中有 $n$ 个格子的稳态概率，用 $P_{n,i}$ 表示系统中有 $n$ 个格子且有 $i$ 个格子被占用的稳态概率。

我们可以根据排队论的基本公式得到：

$$
P_{n,i}=\frac{\rho^i}{i!}\frac{(n-i)^{n-i}}{(n)^{n-i}}P_{n,0},
$$

其中 $\rho=\frac{\lambda}{\mu}$ 是系统的负载因子，$P_{n,0}$ 是系统中没有格子被占用的稳态概率。由于 $\sum_{i=0}^n P_{n,i}=1$，我们可以通过归一化 $P_{n,0}$ 来求解 $P_{n,i}$。

为了求解 $P_{n,0}$，我们可以使用 Little 定理，即：

$$
L=\lambda W,
$$

其中 $L$ 是平均队长，$W$ 是平均逗留时间。在我们的模型中，$L=\sum_{i=1}^n i P_{n,i}$，$W=\frac{1}{\mu-\lambda}$。因此，我们可以得到：

$$
P_{n,0}=\left(\sum_{i=0}^n\frac{(n\rho)^i}{i!}\right)^{-1}.
$$

要确定最佳的外卖柜格子数量，需要考虑两个因素：顾客的等待时间和外卖柜的利用率。

首先，我们需要确定顾客的平均等待时间。假设顾客到达服从泊松分布，服务时间服从指数分布。那么顾客的平均等待时间为：

$$
W_q = \frac{L}{\lambda} = \frac{\sum_{i=1}^n i P_{n,i}}{\lambda},
$$

其中 $L$ 是平均队长，$\lambda$ 是顾客到达率，$P_{n,i}$ 是系统中有 $n$ 个格子且有 $i$ 个格子被占用的稳态概率。我们可以通过计算不同外卖柜格子数量下的平均等待时间来确定最佳的格子数量。

其次，我们需要考虑外卖柜的利用率。外卖柜的利用率为：

$$
U = 1 - P_0,
$$

其中 $P_0$ 是系统中没有格子被占用的稳态概率。我们可以通过计算不同外卖柜格子数量下的利用率来确定最佳的格子数量。

最后，我们需要综合考虑顾客的等待时间和外卖柜的利用率，选择一个平衡点作为最佳的格子数量。一种常见的方法是使用成本模型，将顾客等待时间和外卖柜利用率的成本加权求和，得到总成本最小的格子数量作为最佳的格子数量。成本模型可以表示为：

$$
C = c_1 W_q + c_2 (1 - U),
$$

其中 $c_1$ 和 $c_2$ 是等待时间和利用率的权重系数，可以根据具体情况进行调整。最小化总成本 $C$ 可以得到最佳的格子数量。

## 两种情况下外卖柜承载能力计算

综上，我们可以得到以下评估外卖柜承载能力的数学计算表格：

使用以下符号来表示各种参数：

- $\lambda$：顾客到达率（单位时间内平均到达的顾客数）
- $\mu$：服务率（单位时间内平均服务的顾客数）
- $\rho$：系统繁忙率（即顾客到达率与服务率之比）
- $n$：服务台数量

|指标\模型|单服务台|多服务台|
|:-:|:-:|:-:|
|服务台空闲的概率 $P_0$	| $P_0 = \frac{1}{1 + \sum_{n=1}^\infty \frac{(\lambda/\mu)^n}{n!}}$ | $P_0 = \left[\sum_{i=0}^{n-1} \frac{(\lambda/\mu)^i}{i!} + \frac{(\lambda/\mu)^n}{n!} \cdot \frac{1}{1-\rho/n}\right]^{-1}$|
|顾客必须等待的概率	| $P_w = \frac{(\lambda/\mu)^n \cdot P_0}{n! \cdot (1-\rho)}$ | $P_w = \frac{(\lambda/\mu)^n \cdot P_0}{n! \cdot (1-\rho/n)}$|
|平均队列长$L_q$ | $L_q = \frac{\rho^2}{1-\rho} \cdot \frac{\lambda}{\mu - \lambda}$ | $L_q = \frac{\rho^n}{n!(1-\rho/n)} \cdot \frac{\lambda}{(\mu/n)(\mu/n-\lambda)}$|
|平均队长$L_s$ | $L_s = L_q + \rho$ | $L_s = L_q + \rho$|
|平均逗留时间$W_s$ | $W_s = \frac{L_s}{\lambda} = \frac{1}{\mu - \lambda}$ | $W_s = \frac{L_s}{\lambda} = \frac{1}{\mu - \lambda} + \frac{L_q}{\lambda}$
|平均等待时间$W_q$ | $W_q = \frac{L_q}{\lambda} = \frac{\rho}{\mu - \lambda}$ | $W_q = \frac{L_q}{\lambda} = \frac{\rho^n}{n!(1-\rho/n)} \cdot \frac{1}{(\mu/n-\lambda)}$|

然后，我们根据收集的数据，可以得到相关参数：
代入后得到表格：

|指标\模型	| 单服务台	| 多服务台|
|:-:|:-:|:-:|
|服务台空闲的概率 $P_0$		| |
|顾客必须等待的概率		| |
|平均队列长$L_q$		| |
|平均队长$L_s$		| |
|平均逗留时间$W_s$		| |
|平均等待时间$W_q$		| |

## 两种情况下外卖柜承载能力分析

需要根据具体参数，利用成本模型，具体选择合适的 $C_i$，以此决策，目前待定

## 小结

注意：以上只是一种理论模型，假设了一些特殊的情况，也忽略了实际情况中可能存在的外卖柜的故障等因素，因此实际应用中需要根据具体情况进行调整和修正。

同时，我们还需要考虑到外卖柜的实际容量、取餐方式、外卖员的操作效率等因素，需要进行实际测试和调整。

此外，我们还应该考虑外卖柜的成本、维护问题，如多服务台和单服务台的维护难度有所不同等，进行最终的决策。

