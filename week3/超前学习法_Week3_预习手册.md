# 超前学习法 Week 3 预习手册

## 0. 使用范围

- 主源：`week3/notes.pdf`，Foundations and Calculus, Week 3，讲义 p.3–29。
- 覆盖：Chapter 7 Taylor Approximation、Chapter 8 Riemann Integration、Chapter 9 The Fundamental Theorem of Calculus and Improper Integrals。
- 不在范围：Chapter 10 的积分技巧；Cauchy principal value；更一般测度积分的完整理论。
- 使用方式：先读知识地图，再按站顺序读精讲；遇到断点回 3.0；最后完成 14 题并填写待验证清单。
- 建议时间：地图与前置 20 分钟；精讲 100 分钟；漏洞与题目 60 分钟；复盘 20 分钟。总计约 3 小时 20 分。
- 页码约定：本文页码均按 `notes.pdf` 显示页码，不是 PDF 阅读器页码偏移。

## 0.1 开工前 5 分钟检查

必须能顺口说出以下前置：

1. 一阶导数存在时，差商有有限极限。
2. 连续函数在闭区间上可取最值，并可用一致连续性控制局部振幅。
3. 有界函数的上下确界是后续 Darboux 和的高度。
4. 积分若存在，应该能被所有分割从下方与上方同时逼近。

如果第 2 条或第 4 条说不顺，先回 Week 1 的连续性与 Week 2 的极值、局部变化率，不直接进入本章。

## 1. 问题一：知识地图

| 位置 | 概念 | 一句话 |
| --- | --- | --- |
| p.3–4 | Definition 7.1 Taylor polynomial | 用 a 点的前 n 阶导数匹配一个有限多项式 |
| p.4–6 | Definition 7.8 remainder | Rn=f−Tn，是精确误差而不是误差上界 |
| p.6–7 | Theorem 7.9 Lagrange remainder | 下一阶导数在未知中间点的值补回精确差额 |
| p.7–11 | Definition 7.16 big-O | 描述误差随 h→0 的幂次速度 |
| p.12 | Definition 8.1 partition | 用有限分点把区间切成互不重叠的子区间 |
| p.12–16 | Definitions 8.2–8.4 | 下和、上和、下积分、上积分与可积性 |
| p.16–19 | Theorems 8.5, 8.8, 8.13 | Darboux 判据、连续可积、积分性质 |
| p.20–24 | Theorems 9.1, 9.3 | 累积面积求导与端点差计算积分 |
| p.25–29 | Definitions 9.10–9.17 | 用截断真积分的极限定义 improper integral |

### 依赖链

高阶导数 → Taylor 多项式 → remainder → Lagrange 误差界 → big-O 误差速度  
→ partition → Darboux 下和与上和 → 上下积分 → Darboux 可积判据  
→ 累积面积 → FTC I → antiderivative → FTC II → improper integral 截断极限

### 与 Week 2 的三条联系

1. Week 2 的一阶导数在本周变为 f⁽ᵏ⁾，Taylor 系数直接读取这些高阶导数。
2. Week 2 的单调性与极值告诉我们连续函数在闭区间上可以控制局部振幅，为连续可积作准备。
3. Week 2 的可导性和切线语言在 FTC I 中反向出现：积分累积的导数回到被积函数。

## 2. 三个核心问题速览

1. **Taylor 多项式为什么能近似函数？**  
   因为它在展开点 a 匹配函数值与前 n 阶导数，把局部变化结构复制到一个有限多项式。

2. **Riemann 积分为什么不是“矩形近似”？**  
   积分是下和的上确界与上和的下确界相等后的共同值；矩形只是构造这些估计的语言。

3. **FTC 为什么连接导数与积分？**  
   累积面积每增加一小段，其变化率由被积函数在当前高度的值控制；反过来，原函数的端点差恢复总累积量。

## 3. 逐条精讲

### 3.0 推导断点协议

看到“这一步凭什么”接不上时：

1. **定位**：只抄下卡住的那一行。
2. **归类**：定义展开、已证定理、代数恒等、隐含前提。
3. **补式**：写出中间等号；写不动就代最小数字。
4. **查前提**：连续性、有界性、可导性、h≠0、ε>0、x≠a 是否满足。
5. **收口**：用“因为……所以……”写出理由；仍写不出就记入待验证清单。

### 3.1 高阶导数与 Taylor 多项式

**英文原句**：The degree-n Taylor polynomial of f about a is the finite polynomial whose derivatives through order n match those of f at a.

**中文**：Taylor 多项式只在 a 点匹配前 n 阶导数，不自动等于原函数。幂次写成 x−a，是因为位移在 a 点为 0。

**动作**：列出 f⁽ᵏ⁾(a)；每个值除以 k!；填入 (x−a)ᵏ。

**公式**：

```text
Tₙ[f;a](x) = Σ(k=0→n) f⁽ᵏ⁾(a)/k! · (x−a)ᵏ
Tₙ⁽ᵏ⁾(a) = f⁽ᵏ⁾(a), 0 ≤ k ≤ n
```

**坑**：f⁽ᵏ⁾ 是 k 阶导数，不是 f 的 k 次幂。

**凭什么**：对 (x−a)ᵏ 求 k 次导会在 a 点留下 k!，再除以 k! 才得到 f⁽ᵏ⁾(a) 的系数。

### 3.2 常见 Maclaurin 展开

**英文原句**：Standard Maclaurin polynomials are Taylor polynomials expanded at a=0.

**中文**：在 0 点展开时读取各阶导数在 0 的值；为 0 的幂不是漏项，而是系数确实为零。

**动作**：先找导数周期，再筛选奇偶幂。

**公式**：

```text
eˣ = 1 + x + x²/2! + x³/3! + …
sin x = x − x³/3! + x⁵/5! − …
cos x = 1 − x²/2! + x⁴/4! − …
log x around 1 = (x−1) − (x−1)²/2 + (x−1)³/3 − …
√(1+x) = 1 + x/2 − x²/8 + …
```

**坑**：log x 在 1 点展开的幂必须是 x−1，不是 x。

**凭什么**：sin 与 cos 的导数分别以四步循环；零点导数序列决定哪些系数消失。

### 3.3 Taylor remainder：精确定义

**英文原句**：The degree-n remainder is Rn[f;a](x)=f(x)−Tn[f;a](x).

**中文**：余项是精确误差，带符号；Taylor 多项式加余项恰好恢复原函数。

**动作**：先决定 n，再用同一 x 计算 f(x) 与 Tn(x)，最后相减。

**公式**：

```text
Rₙ = f − Tₙ
f = Tₙ + Rₙ
Rₙ(a) = 0
```

**坑**：|Rn|≤B 是误差上界，不是 Rn=B。

**凭什么**：定义直接给出 f−Tn，移项就是等式。

### 3.4 Lagrange remainder 定理

**英文原句**：Under enough smoothness, Rn is the (n+1)-st derivative at some intermediate point times the displacement power and factorial denominator.

**中文**：n 阶 Taylor 多项式已经匹配到 n 阶导数，第一个未匹配的数据是 n+1 阶导数。

**动作**：先检查可微性、连续性和 x≠a；再找一个统一 M 控制中间点导数。

**公式**：

```text
Rₙ[f;a](x) = f⁽ⁿ⁺¹⁾(ξ)/(n+1)! · (x−a)ⁿ⁺¹
```

**坑**：ξ 只知道位于 a 与 x 之间，通常不知道数值。

**凭什么**：定理保证存在某个中间点；实际估计用整个区间的导数上界把未知点消掉。

### 3.5 显式误差界

**英文原句**：If the next derivative is bounded by M, the absolute remainder is bounded by M times the displacement power divided by the factorial.

**中文**：误差界把未知导数换成区间上的统一上界 M。

**动作**：选区间；找 M；代入距离幂与阶乘；报告不等式。

**公式**：

```text
|Rₙ[f;a](x)| ≤ M/(n+1)! · |x−a|ⁿ⁺¹
```

**坑**：误差界可能很保守，但仍然是保证；不能把它当作精确误差。

**凭什么**：取绝对值后，未知中间点落入区间，因此 |f⁽ⁿ⁺¹⁾(ξ)|≤M。

### 3.6 Big-O 与 Richardson 外推

**英文原句**：r(h)=O(hᵖ) means there exist C and δ such that |r(h)|≤C|h|ᵖ for sufficiently small nonzero h.

**中文**：O(hᵖ) 记录的是误差下降速度，不是唯一函数；常数 C 仍可能影响固定 h 的实际误差。

**动作**：先用不等式证幂次；再利用 Taylor 展开识别首项误差，组合两个步长消去主导项。

**公式**：

```text
r(h)=O(hᵖ) ⇒ |r(h)|≤C|h|ᵖ, 0<|h|<δ
(4T(h/2) − T(h))/3 = L + O(h⁴) when T(h)=L+c h²+O(h⁴)
```

**坑**：O(hᵖ) 不说明 r(h)/hᵖ 必有极限，也不提供显式数值上界。

**凭什么**：C 和 δ 可以直接从不等式中取得；Richardson 系数由消去 h² 的线性组合得到。

### 3.7 Partition 与 Darboux 下和、上和

**英文原句**：A partition splits [a,b] into finitely many subintervals; Darboux sums use the infimum and supremum on each subinterval.

**中文**：分割先确定有限个小块，再用每块最低和最高高度构造面积估计。

**动作**：列出 x₀<…<xn；计算 Δxi；每块取 mi 与 Mi；求和。

**公式**：

```text
P={x₀,…,xₙ}, a=x₀<x₁<…<xₙ=b
L(f,P)=Σ mi Δxi, U(f,P)=Σ Mi Δxi
0 ≤ U(f,P)−L(f,P)
```

**坑**：左端点和不是 Darboux 下和；必须取整段的下确界。

**凭什么**：下确界保证每块矩形不高于该段函数，任何 Riemann 高度都落在两者之间。

### 3.8 上下积分与 Riemann 可积性

**英文原句**：The lower integral is the supremum of all lower sums and the upper integral is the infimum of all upper sums.

**中文**：积分不是某一个分割的答案，而是所有有限分割的上下估计最终一致。

**动作**：先确认有界；再比较所有分割的上下和；最后使用 Darboux 判据。

**公式**：

```text
∫lower = sup(P) L(f,P)
∫upper = inf(P) U(f,P)
f∈R([a,b]) ⇔ ∫lower=∫upper
∀ε>0 ∃P: U(f,P)−L(f,P)<ε
```

**坑**：只算一个分割的左右 Riemann 和不能证明可积。

**凭什么**：量词顺序是每个 ε 先给出，再选择一个足够细的分割 P；P 可以依赖 ε。

### 3.9 连续函数可积与 Dirichlet 反例

**英文原句**：Every continuous function on a closed interval is Riemann integrable, but boundedness alone is insufficient.

**中文**：连续性把每个小块的振幅压小；Dirichlet 函数在每段都同时取 0 和 1，无法压小。

**动作**：连续函数用一致连续性估计振幅；Dirichlet 函数用上下和固定差距否定可积。

**公式**：

```text
C([a,b]) ⊂ R([a,b])
1Q(x)=1 if x∈Q, 0 if x∉Q
L(1Q,P)=0, U(1Q,P)=b−a for every partition P
```

**坑**：有界不等于可积；连续也不是可积的必要条件。

**凭什么**：每个正长度子区间都同时含有理数和无理数。

### 3.10 积分性质与单点修改

**英文原句**：Riemann integrable functions obey linearity, interval additivity and order inequalities; changing finitely many values does not change the integral.

**中文**：积分保留线性、区间拆分和非严格保序；有限个点的修改没有面积。

**动作**：先检查相关函数可积；拆分区间；比较同一分割下的上下和。

**公式**：

```text
∫(αf+βg) = α∫f + β∫g
∫ₐᵇf = ∫ₐᶜf + ∫꜀ᵇf
f≤g ⇒ ∫f≤∫g
```

**坑**：严格不等式在取积分后可能变成等号。

**凭什么**：把 c 加入分割只会把一块拆成两块，面积和不变；单点可用分点隔离。

### 3.11 累积函数与 FTC I

**英文原句**：If f is continuous and F(x)=∫ₐˣf(t)dt, then F′=f at interior points.

**中文**：F(x+h)−F(x) 是新增小段的积分；连续函数在这段上的平均高度趋近 f(x)。

**动作**：固定 x；写差商为 x 到 x+h 的平均积分；用连续性估计误差。

**公式**：

```text
F(x)=∫ₐˣf(t)dt
F′(x)=f(x)
```

**坑**：t 是积分哑变量，导数的最终变量是上限 x。

**凭什么**：连续性使短区间上所有 |f(t)−f(x)| 都小于 ε；除以 h 后差商趋于 f(x)。

### 3.12 原函数与 FTC II

**英文原句**：If f is continuous and G′=f, then ∫ₐᵇf(x)dx=G(b)−G(a).

**中文**：定积分是数，不定积分是带 +C 的函数族；同一常数在端点差中抵消。

**动作**：找原函数；检查连续性；计算 G(b)−G(a)。

**公式**：

```text
∫ₐᵇf(x)dx=G(b)−G(a)
∫f(x)dx=G(x)+C
```

**坑**：不能把 FTC II 无条件套到跳跃点或无界奇点。

**凭什么**：FTC 连接定义积分与累积原函数；常数在端点差中相消。

### 3.13 Improper integral：无穷端

**英文原句**：An improper integral over an unbounded interval is the limit of proper integrals on truncated intervals.

**中文**：先取有限上限 R，再让 R 趋向无穷；∞ 不是可以代入的端点。

**动作**：截断；计算真积分；取极限；判断有限还是发散。

**公式**：

```text
∫ₐ∞f(x)dx := lim R→∞ ∫ₐᴿf(x)dx
∫₁∞x⁻ᵖdx converges ⇔ p>1
```

**坑**：∫−Rᴿx dx=0 不能证明全实线积分收敛；左右两半必须分别收敛。

**凭什么**：定义明确写在截断极限中，而不是把 ∞ 塞入原函数。

### 3.14 Improper integral：有限端点与内部奇点

**英文原句**：A finite singularity is approached from inside the domain, and an interior singularity requires both one-sided improper integrals to converge.

**中文**：在 0 的右端点奇点用 ε→0⁺；内部奇点必须分别检查 c 左右。

**动作**：找奇点；避开奇点积分；取单侧极限；内部奇点再分别验证。

**公式**：

```text
∫₀¹f(x)dx := lim ε→0⁺ ∫ε¹f(x)dx
∫₀¹x⁻ᵖdx converges ⇔ p<1
```

**坑**：p-test 在 0 点与 ∞ 点的阈值方向相反；跨奇点抵消不是定义。

**凭什么**：极限只允许从区间内部逼近，奇点本身从未被代入。

## 4. 问题二：漏洞自检

| 卡点 | 零基础版 | 材料没交代或注意 |
| --- | --- | --- |
| Taylor 系数为什么有 k! | (x−a)ᵏ 求 k 次导得到 k!，必须除掉 | 先说清楚 f⁽ᵏ⁾ 是导数不是幂 |
| sin/cos 的缺失幂 | 对应导数为 0，不是漏算 | 需要记住导数循环 |
| Rn 与误差界 | Rn 是这次差值，界是它的天花板 | 上界不取等 |
| Lagrange ξ | 只知道在某处，不知道何处 | 实用时要控制整段导数 |
| 上下和的 mi/Mi | 每块最低和最高，不是左右端点 | 函数可以取内部极值 |
| 可积性 | 所有分割的上下估计最终重合 | 一个分割不够 |
| 连续与可积 | 连续是充分条件 | Dirichlet 说明有界不足 |
| 单点修改 | 一个点没有面积 | 对无穷多点要另议 |
| FTC I 的 t 与 x | t 是内部哑变量，x 是上限 | 求导后变量是 x |
| FTC II 的 +C | 定积分是数，端点差消 C | 仍需连续性前提 |
| 无穷积分 | 截断 R，取极限 | 不能直接代 ∞ |
| 零点 p-test | 与无穷端阈值相反 | p<1 收敛 |
| 内部奇点 | 左右分别收敛 | 对称抵消不属于定义 |
| Big-O | 隐藏常数，不保证 ratio 有极限 | O 不是精确误差 |

### 将整体讲解概括为一段话

Taylor 多项式用局部导数复制函数，余项告诉我们复制误差；Riemann 积分用所有分割的上下矩形估计夹出唯一面积；FTC 说明累积面积的导数是被积函数，并把定积分化为原函数端点差；improper integral 则把无界端或奇点转成截断真积分的极限。

## 5. 问题三：出题人视角

### 手算

#### 1. Taylor 多项式构造

**来源**：官方 Exercise 7.7，讲义 p.5。  
**题**：求 eˣ 在 0 点的 T₄，并直接验证多项式与原函数在 0 点匹配到四阶导数。  
**解答**：T₄(x)=1+x+x²/2!+x³/3!+x⁴/4!。eˣ 的各阶导数在 0 点都是 1；对 T₄ 求 k 次导并代 0 得 k!·1/k!=1，k=0,1,2,3,4。  
**筛掉**：只会背展开式，不能说明系数为何匹配导数的人。

#### 2. e⁰·² 的误差界

**来源**：官方 Exercise 7.15，讲义 p.7。  
**题**：用 T₃ 在 0 点近似 e⁰·²，并给出 Lagrange 误差上界。  
**解答**：T₃(0.2)=1+0.2+0.02+0.001333…≈1.221333。区间 [0,0.2] 上 e^{ξ}≤e⁰·²<1.222，故 |R₃|≤1.222(0.2)⁴/4!<8.15×10⁻⁵。  
**筛掉**：把误差上界当成真实误差，或没有控制整个区间导数的人。

#### 3. 从定义证明 Big-O

**来源**：官方 Exercise 7.19，讲义 p.9。  
**题**：直接用 Definition 7.16 证明 5h³+2h⁴=O(h³) 当 h→0。  
**解答**：当 |h|<1 时，|5h³+2h⁴|≤5|h|³+2|h|³=7|h|³。取 C=7、δ=1。  
**筛掉**：只会写大 O，不会显式给常数和邻域的人。

#### 4. Richardson 外推

**来源**：官方 Exercise 7.20，讲义 p.10–11。  
**题**：设 T(h)=L+c h²+O(h⁴)。用 T(h) 与 T(h/2) 消去 h² 项。  
**解答**：4T(h/2)−T(h)=3L+O(h⁴)，所以 (4T(h/2)−T(h))/3=L+O(h⁴)。  
**筛掉**：只会机械背系数，不能解释误差抵消的人。

#### 5. 单调函数的 Darboux 和

**来源**：官方 Exercise 8.9，讲义 p.17。  
**题**：f(x)=x 在 [0,1] 上用 n 等分，写出下和、上和及差。  
**解答**：L=Σ(i−1)/n·1/n=(n−1)/(2n)，U=(n+1)/(2n)，U−L=1/n→0。  
**筛掉**：把下和误写成任意采样 Riemann 和的人。

### 给错解找错

#### 6. 可积性与 Dirichlet

**来源**：官方 Exercise 8.16，讲义 p.19。  
**题**：用上下和说明 f(x)=x 可积，而 1Q 在 [0,1] 不可积。  
**解答**：x 的均匀分割上下差随 n 趋于 0；1Q 每块同时有 0 和 1，所有下和为 0、上和为 1。  
**筛掉**：认为有界就能积分的人。

#### 7. FTC I

**来源**：官方 Exercise 9.8，讲义 p.24。  
**题**：求 F(x)=∫₁ˣ(1+t⁴)dt 的导数，并说明前提。  
**解答**：F′(x)=1+x⁴；被积函数连续，故 FTC I 适用。  
**筛掉**：把 t 当上限，或忽略连续性的人。

#### 8. 诊断 FTC 前提

**来源**：官方 Exercise 9.9，讲义 p.24–25。  
**题**：一个函数在区间内部有跳跃，学生直接套 FTC II。指出问题。  
**解答**：FTC II 需要被积函数在整段区间连续并有合格原函数。跳跃点处应分区间或按 improper integral 另行处理。  
**筛掉**：看到积分符号就套公式的人。

#### 9. 无穷区间积分

**来源**：官方 Exercise 9.18，讲义 p.28–29。  
**题**：先写定义极限，再计算 ∫₁∞x⁻³dx。  
**解答**：∫₁ᴿx⁻³dx=(1−R⁻²)/2，极限为 1/2。  
**筛掉**：直接把 ∞ 当端点代入的人。

#### 10. 零点 p-test

**来源**：官方 Exercise 9.18，讲义 p.28–29。  
**题**：判断 ∫₀¹x⁻ᵖdx 对 p 的收敛性。  
**解答**：p≠1 时截断积分=(1−ε^{1−p})/(1−p)，只有 p<1 收敛；p=1 时 −log ε→∞。  
**筛掉**：把零点与无穷端的 p 阈值混在一起的人。

### 概念追问

#### 11. 自造题：误差诊断

**来源**：自造，不是官方题。  
**题**：学生说“下一项系数很小，所以误差小于 10⁻⁴”。指出论证缺口。  
**解答**：系数不是余项上界；必须控制区间内下一阶导数 M，并乘距离幂与阶乘。  
**筛掉**：只盯系数大小，不会使用 Lagrange 上界的人。

#### 12. 自造题：分割量词

**来源**：自造，不是官方题。  
**题**：为什么只找到一个 U−L<ε 的分割，不能证明对所有 ε 可积？  
**解答**：判据要求 ∀ε>0 ∃P。一个固定分割只证明一个容差，必须能对任意更小 ε 继续找更细分割。  
**筛掉**：误解量词顺序的人。

### 综合

#### 13. 自造题：比较 FTC 两半

**来源**：自造，不是官方题。  
**题**：用连续函数 f 与累积函数 F 比较 FTC Part I 与 Part II。  
**解答**：Part I 构造 F 并证明 F′=f；Part II 用任意原函数 G 的端点差计算定积分。前者构造原函数，后者使用原函数。  
**筛掉**：只会背两个公式，不知道各自角色的人。

#### 14. 自造题：对称极限

**来源**：自造，不是官方题。  
**题**：∫−Rᴿx dx=0 为什么不能证明 ∫−∞∞x dx 收敛？  
**解答**：左右两半必须分别收敛；这里右半 ∫₀∞x dx 与左半都发散，对称抵消只是 Cauchy principal value。  
**筛掉**：把有限截断的抵消误当 improper integral 定义的人。

## 6. 待验证清单

- 已会：_____
- 有漏洞：_____
- 意料之外：_____
- 今天卡住的三步：_____
- 上课要问的问题：_____
- 下一次先重做的题：_____

## 附录 A：中英术语

| English | 中文 | 快速解释 |
| --- | --- | --- |
| Taylor polynomial | Taylor 多项式 | 匹配到 n 阶导数的有限多项式 |
| Maclaurin polynomial | Maclaurin 多项式 | 0 点展开 |
| higher derivative | 高阶导数 | 连续求导 |
| remainder | 余项 | 函数减 Taylor 多项式 |
| Lagrange remainder | Lagrange 余项 | 中间点的下一阶导数形式 |
| big-O | 大 O | 误差的局部增长速度 |
| partition | 分割 | 有限分点切分区间 |
| Darboux sum | Darboux 和 | 下和或上和 |
| lower integral | 下积分 | 所有下和的上确界 |
| upper integral | 上积分 | 所有上和的下确界 |
| Riemann integrable | Riemann 可积 | 上下积分相等 |
| Dirichlet function | Dirichlet 函数 | 有理点取 1、无理点取 0 |
| accumulation function | 累积函数 | 从固定下端点积到 x |
| antiderivative | 原函数 | 导数为被积函数 |
| Fundamental Theorem | 微积分基本定理 | 连接积分与导数 |
| improper integral | Improper integral | 截断真积分后的极限 |
| endpoint singularity | 端点奇点 | 有限端点无界 |
| interior singularity | 内部奇点 | 区间内部无界 |
| p-test | p 判别法 | 由幂次判断收敛 |
| Cauchy principal value | Cauchy 主值 | 对称抵消，不是本文 improper integral |

## 附录 B：页码速查

- p.3–6：Taylor polynomial、Maclaurin 例子、remainder 定义、Lagrange 定理。
- p.6–11：误差界、big-O、Richardson extrapolation。
- p.12–16：partition、Darboux sums、上下积分、可积定义、Darboux criterion。
- p.16–19：连续可积、Dirichlet 不可积、积分性质、单点修改。
- p.20–24：FTC I、antiderivative、FTC II、FTC 反例。
- p.25–29：improper integral 的无穷端、端点、内部奇点与 p-test。

## 交付前自检

- 引用：Definition 7.1、7.8、7.16；Theorem 7.9；Definition 8.1–8.4；Theorem 8.5、8.8、8.13；Theorem 9.1、9.3；Definition 9.10–9.17。
- 所有公式使用 Unicode，没有美元符号或 LaTeX 命令。
- 14 题均有解答与“筛掉”说明。
- 自造题均标明“自造，不是官方题”。
- 全部 Taylor、Darboux、FTC 与 improper integral 结果需在交付前再次独立复算。
