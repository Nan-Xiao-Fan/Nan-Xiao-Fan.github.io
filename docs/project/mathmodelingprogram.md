# 数学建模 - 程序实现

``` py
import sympy as sp

# 定义符号

lambda_ = sp.Symbol('lambda')  # 到达率
mu = sp.Symbol('mu')  # 服务率
rho = sp.Symbol('rho')  # 系统利用率
n = sp.Symbol('n')  # 服务台数量
i=sp.Symbol('i')

# 计算单服务台模型的指标

P0_single = 1 / (1 + sp.Sum((lambda_ / mu)**i / sp.factorial(i), (i, 0, sp.oo)))
Pw_single = ((lambda / mu)n  P0_single) / (sp.factorial(n) * (1 - rho))
Lq_single = (rho**2 / (1 - rho)) * (lambda / (mu - lambda_))
Ls_single = Lq_single + rho
Ws_single = Ls_single / lambda_
Wq_single = Lq_single / lambda_

# 计算多服务台模型的指标

P0_multi = (sp.Sum((lambda_ / (n * mu))i / sp.factorial(i), (i, 0, n-1)) +
            (sp.Sum((lambda_ / (n  mu))i / (sp.factorial(n)  (n(i-n))), (i, n, sp.oo))  (lambda_ / (n * mu))**n /
             (sp.factorial(n) * (1 - rho / n))))  -1
Pw_multi = ((lambda_ / (n  mu))n  P0_multi) / (sp.factorial(n)  (1 - rho / n))
Lq_multi = ((lambda_ / (n  mu))**n  rho / (sp.factorial(n)  (1 - rho / n))) / (1 - rho / n)
Ls_multi = Lq_multi + rho
Ws_multi = Ls_multi / lambda_
Wq_multi = Lq_multi / lambda_

# 替换参数值进行计算

parameters = {
    lambda_: 70,  # 到达率
    mu: 50,  # 服务率
    rho: 70 / 50,  # 系统利用率
    n: 40  # 服务台数量
}

# 计算结果

P0_single_val = P0_single.subs(parameters).evalf()
Pw_single_val = Pw_single.subs(parameters).evalf()
Lq_single_val = Lq_single.subs(parameters).evalf()
Ls_single_val = Ls_single.subs(parameters).evalf()
Ws_single_val = Ws_single.subs(parameters).evalf()
Wq_single_val = Wq_single.subs(parameters).evalf()

P0_multi_val = P0_multi.subs(parameters).evalf()
Pw_multi_val = Pw_multi.subs(parameters).evalf()
Lq_multi_val = Lq_multi.subs(parameters).evalf()
Ls_multi_val = Ls_multi.subs(parameters).evalf()
Ws_multi_val = Ws_multi.subs(parameters).evalf()
Wq_multi_val = Wq_multi.subs(parameters).evalf()

# 打印结果

print("单服务台模型:")
print(f"P0: {P0_single_val}")
print(f"Pw: {Pw_single_val}")
print(f"Lq: {Lq_single_val}")
print(f"Ls: {Ls_single_val}")
print(f"Ws: {Ws_single_val}")
print(f"Wq: {Wq_single_val}")

print("\n多服务台模型:")
print(f"P0: {P0_multi_val}")
print(f"Pw: {Pw_multi_val}")
print(f"Lq: {Lq_multi_val}")
print(f"Ls: {Ls_multi_val}")
print(f"Ws: {Ws_multi_val}")
print(f"Wq: {Wq_multi_val}")
```
