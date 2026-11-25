(() => {
  "use strict";

  const T = String.raw;
  const N = (term, body, kind = "知识点", formula = "") => ({ term, body, kind, formula });
  const S = (label, kind, formula, answer, notes) => ({ label, kind, formula, answer, notes });
  const E = (number, titleZh, titleEn, type, prompt, intentZh, steps, result) => ({
    id: `exercise-${number.replace(".", "-")}`,
    number,
    titleZh,
    titleEn,
    type,
    prompt,
    intentZh,
    steps,
    result
  });

  window.MFC_EXERCISE_PARTS = window.MFC_EXERCISE_PARTS || [];
  window.MFC_EXERCISE_PARTS.push({
    chapters: [
      {
        id: "chapter-7",
        number: 7,
        titleZh: "Taylor 近似",
        titleEn: "Taylor Approximation",
        knowledgePoints: [
          {
            id: "kp-7-1",
            section: "7.1",
            titleZh: "高阶导数与 Taylor 多项式",
            titleEn: "Higher derivatives and Taylor polynomials",
            summaryZh: "Taylor 多项式用展开点处的高阶导数匹配函数局部数据，系数由 \(f^{(k)}(a)/k!\) 唯一确定。",
            lessonHref: "../week3/Week3学习站.html#concept-higher-derivatives-taylor",
            exercises: [
              E(
                "7.7",
                "构造 Taylor 多项式",
                "Constructing Taylor polynomials",
                "计算 + 核对",
                T`1. Find \(T_4[e^x;0](x)\).
2. Find \(T_7[\sin x;0](x)\) and \(T_4[\cos x;0](x)\).
3. Find the degree-3 Taylor polynomial of \(f(x)=1/x\) about \(a=1\).
4. Find the degree-2 Taylor polynomial of \(f(x)=e^x\) about \(a=1\).
5. For one answer, verify directly that the polynomial and function have matching derivatives at the expansion point through the required order.`,
                "先列展开点处的导数，再除以阶乘；局部幂统一使用 x−a。",
                [
                  S(
                    "指数函数的两种展开点",
                    "计算",
                    T`T_4[e^x;0](x)=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}`,
                    T`\(e^x\) 的每一阶导数仍是 \(e^x\)，在 0 都为 1。因此

\[
T_4[e^x;0](x)
=1+x+\frac{x^2}{2}+\frac{x^3}{6}+\frac{x^4}{24}.
\]

在 \(a=1\) 时，\(f^{(k)}(1)=e\)，所以二次 Taylor 多项式为

\[
T_2[e^x;1](x)
=e\left(1+(x-1)+\frac{(x-1)^2}{2}\right).
\]`,
                    [
                      N("Taylor 系数", "cₖ=f⁽ᵏ⁾(a)/k!。", "定义")
                    ]
                  ),
                  S(
                    "正弦与余弦的 Maclaurin 多项式",
                    "计算",
                    T`T_7[\sin x;0]=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}`,
                    T`\(\sin x\) 在 0 的奇阶导数交替为 \(1,-1,1,-1\)，偶阶为 0：

\[
T_7[\sin x;0](x)
=x-\frac{x^3}{6}+\frac{x^5}{120}-\frac{x^7}{5040}.
\]

\(\cos x\) 的偶阶导数交替符号：

\[
T_4[\cos x;0](x)
=1-\frac{x^2}{2}+\frac{x^4}{24}.
\]`,
                    [
                      N("只保留非零项", "正弦只有奇次项，余弦只有偶次项。")
                    ]
                  ),
                  S(
                    "在 a=1 展开 1/x",
                    "计算",
                    T`1-(x-1)+(x-1)^2-(x-1)^3`,
                    T`对 \(f(x)=x^{-1}\)：

\[
f(1)=1,\quad f'(1)=-1,\quad f''(1)=2,\quad f'''(1)=-6.
\]

代入系数公式：

\[
T_3[f;1](x)
=1-(x-1)+\frac{2}{2}(x-1)^2-\frac{6}{6}(x-1)^3.
\]

即

\[
1-(x-1)+(x-1)^2-(x-1)^3.
\]`,
                    [
                      N("局部变量", "在 a=1 展开时要写 x−1，而不是 x。", "易错点")
                    ]
                  ),
                  S(
                    "直接核对导数数据",
                    "核对",
                    T`P^{(k)}(0)=f^{(k)}(0),\qquad k=0,1,2,3,4`,
                    T`取 \(P=T_4[e^x;0]\)。在 0 处：

\[
\begin{aligned}
P(0)&=1,\\
P'(x)&=1+x+\frac{x^2}{2}+\frac{x^3}{6},&P'(0)&=1,\\
P''(x)&=1+x+\frac{x^2}{2},&P''(0)&=1,\\
P'''(0)&=1,\qquad P^{(4)}(0)=1.
\end{aligned}
\]

而 \(e^x\) 在 0 的 0 到 4 阶导数都为 1，因此局部导数数据全部匹配。`,
                    [
                      N("导数匹配", "Tₙ 的定义正是使 0 到 n 阶导数在展开点吻合。", "定理")
                    ]
                  )
                ],
                T`T₄eˣ=1+x+x²/2+x³/6+x⁴/24；T₇sin x=x−x³/6+x⁵/120−x⁷/5040；T₄cos x=1−x²/2+x⁴/24；1/x 的三次式为 1−(x−1)+(x−1)²−(x−1)³；eˣ 在 1 处二次式为 e[1+(x−1)+(x−1)²/2]。`
              )
            ]
          },
          {
            id: "kp-7-2",
            section: "7.2",
            titleZh: "余项与显式误差界",
            titleEn: "Remainders and explicit error bounds",
            summaryZh: "精确余项给出真实差额；误差界用区间内下一阶导数的最大值把它变成可计算的保证。",
            lessonHref: "../week3/Week3学习站.html#concept-lagrange-error-bounds",
            exercises: [
              E(
                "7.15",
                "Taylor 近似与误差界",
                "Taylor approximation and error",
                "计算 + 误差",
                T`1. Use \(T_3[e^x;0]\) to approximate \(e^{0.2}\). Bound the error using \(e^y\le e^{0.2}\) for \(0\le y\le0.2\).
2. Use a Taylor polynomial for \(\sin x\) to approximate \(\sin(0.1)\), and obtain an explicit Lagrange-remainder bound.
3. Use the degree-2 Taylor polynomial of \(x^{1/2}\) about \(a=1\) to approximate \((1.04)^{1/2}\). State an interval on which you bound the third derivative.
4. Explain the difference between the exact remainder \(R_n[f;a](x)\) and an upper bound for its absolute value.`,
                "先代值得到近似，再用 Lagrange 余项与导数上界给出误差；误差界不是实际误差。",
                [
                  S(
                    "近似 e^0.2 并控制误差",
                    "计算",
                    T`e^{0.2}\approx1.221333,\qquad |R_3|\le\frac{e^{0.2}}{24}(0.2)^4<0.0002`,
                    T`三次 Taylor 多项式在 \(x=0.2\) 处：

\[
1+0.2+\frac{0.2^2}{2}+\frac{0.2^3}{6}
=1.221333\ldots
\]

Lagrange 余项为

\[
R_3=\frac{e^\xi}{24}(0.2)^4
\]

对某个 \(0<\xi<0.2\)。按题设 \(e^\xi\le e^{0.2}\)。若再用课程常见上界 \(e^{0.2}<e<3\)，则

\[
|R_3|<\frac{3}{24}(0.2)^4=0.0002.
\]

这个界保证真实值与近似值相差小于 \(0.0002\)。`,
                    [
                      N("Lagrange 余项", "Rₙ=f⁽ⁿ⁺¹⁾(ξ)/(n+1)!·(x−a)ⁿ⁺¹。", "公式"),
                      N("误差界", "用导数最大值替代未知 ξ，得到可计算的上界。")
                    ]
                  ),
                  S(
                    "近似 sin(0.1) 并给出余项",
                    "计算",
                    T`\sin(0.1)\approx0.09983333,\qquad |R_3|\le\frac{0.1^4}{24}`,
                    T`取 \(T_3[\sin x;0]=x-x^3/6\)。于是

\[
T_3(0.1)=0.1-\frac{0.001}{6}
=0.099833333\ldots
\]

第四阶导数是 \(\sin x\)，故

\[
R_3=\frac{\sin\xi}{24}(0.1)^4
\]

其中 \(0<\xi<0.1\)。因为 \(|\sin\xi|\le1\)，

\[
|R_3|\le\frac{0.1^4}{24}\approx4.17\times10^{-6}.
\]`,
                    [
                      N("正弦余项", "T₃ 的下一项是四阶；sin 的四阶导数仍为 sin，绝对值不超过 1。")
                    ]
                  ),
                  S(
                    "近似根号 1.04",
                    "计算",
                    T`f(1.04)\approx1.0198,\qquad |R_2|\le4\times10^{-6}`,
                    T`\(f(x)=x^{1/2}\) 在 1 处：

\[
f(1)=1,\quad f'(1)=\frac12,\quad f''(1)=-\frac14.
\]

因此

\[
T_2=1+\frac12(x-1)-\frac18(x-1)^2.
\]

代入 \(x-1=0.04\)：

\[
1+0.02-\frac18(0.0016)=1.0198.
\]

三阶导数为

\[
f'''(x)=\frac38x^{-5/2}.
\]

在 \([1,1.04]\) 上最大值为 \(3/8\)，所以

\[
|R_2|
\le\frac{3/8}{6}(0.04)^3
=\frac1{16}\cdot0.000064
=4\times10^{-6}.
\]`,
                    [
                      N("选择导数区间", "误差界必须在包含 a 与 x 的整个区间上取上界。")
                    ]
                  ),
                  S(
                    "区分真实余项与误差上界",
                    "概念",
                    T`R_n=f(x)-T_n(x)`,
                    T`精确余项定义为

\[
R_n(x)=f(x)-T_n(x),
\]

它是真实差额，可能依赖一个未知的 \(\xi\)。

误差上界是让 \(|R_n(x)|\) 小于某个可计算数值的保证。真实误差可能远小于上界；误差界通常更保守，但更适合考试和数值验证。`,
                    [
                      N("真实误差与保证", "上界不是“实际误差是多少”，而是“最多不会超过多少”。", "易错点")
                    ]
                  )
                ],
                T`e^0.2 的三次近似为 1.221333，误差小于约 0.0002；sin(0.1) 的三次近似误差不超过 0.1⁴/24；√1.04 的二次近似为 1.0198，误差不超过 4×10⁻⁶；实际余项与绝对误差上界不同。`
              )
            ]
          },
          {
            id: "kp-7-3",
            section: "7.3",
            titleZh: "局部误差阶与 Richardson 外推",
            titleEn: "Local error order and Richardson extrapolation",
            summaryZh: "\(O(h^p)\) 描述 h→0 时误差的幂次级；更高阶表示下降更快，但不保证商的极限一定存在。",
            lessonHref: "../week3/Week3学习站.html#concept-big-o-richardson",
            exercises: [
              E(
                "7.19",
                "解释 Big-O 误差阶",
                "Interpreting error order",
                "证明 + 判断",
                T`1. Prove directly from Definition 7.16 that \(5h^3+2h^4=O(h^3)\) as \(h\to0\).
2. Suppose \(r(h)=O(h^2)\) and \(s(h)=O(h^4)\). Prove \(r(h)+s(h)=O(h^2)\).
3. Explain why \(O(h^4)\) gives a stronger local error order than \(O(h^2)\) as \(h\to0\).
4. Does \(r(h)=O(h^2)\) imply that \(r(h)/h^2\) has a limit? Give a reason.`,
                "Big-O 是“存在常数”的估计，不是展开式，也不要求主系数收敛。",
                [
                  S(
                    "给多项式误差找常数",
                    "证明",
                    T`|5h^3+2h^4|\le7|h|^3\quad(|h|\le1)`,
                    T`当 \(|h|\le1\) 时，\(|h^4|\le|h|^3\)，所以

\[
|5h^3+2h^4|
\le5|h|^3+2|h|^3
=7|h|^3.
\]

按定义存在 \(H=1\) 与 \(C=7\)，使 \(0<|h|<H\) 时误差不超过 \(C|h|^3\)。因此多项式是 \(O(h^3)\)。`,
                    [
                      N("Big-O", "r(h)=O(hᵖ) 表示存在 H,C，使 0<|h|<H 时 |r(h)|≤C|h|ᵖ。", "定义")
                    ]
                  ),
                  S(
                    "合并两个误差项",
                    "证明",
                    T`|r+s|\le(C_1+C_2)|h|^2\quad\text{when }|h|^4\le|h|^2`,
                    T`存在常数 \(C_1,C_2\) 和足够小的 \(H\)，使

\[
|r(h)|\le C_1|h|^2,\qquad
|s(h)|\le C_2|h|^4.
\]

当 \(|h|\le1\) 时，\(|h|^4\le|h|^2\)，于是

\[
|r(h)+s(h)|
\le(C_1+C_2)|h|^2.
\]

所以和为 \(O(h^2)\)。`,
                    [
                      N("低阶项主导和", "保留较弱阶；高阶项在小 h 时被低阶项吸收。")
                    ]
                  ),
                  S(
                    "比较下降速度",
                    "概念",
                    T`h^4/h^2=h^2\to0`,
                    T`当 \(|h|\) 很小时，\(h^4\) 比 \(h^2\) 更快趋近 0。例如 \(h=10^{-2}\) 时，\(h^2=10^{-4}\)，而 \(h^4=10^{-8}\)。

因此 \(O(h^4)\) 给出更小的渐近误差上界，在同样缩小步长时收敛得更快。`,
                    [
                      N("更高阶更细", "越高的误差阶表示随 h→0 衰减越快。")
                    ]
                  ),
                  S(
                    "用振荡函数否定极限",
                    "反例",
                    T`r(h)=h^2\sin(1/h)=O(h^2),\qquad r(h)/h^2=\sin(1/h)`,
                    T`令

\[
r(h)=h^2\sin(1/h).
\]

因为 \(|\sin(1/h)|\le1\)，所以 \(r(h)=O(h^2)\)。但

\[
\frac{r(h)}{h^2}=\sin(1/h)
\]

在 \(h\to0\) 时振荡，没有极限。故 Big-O 不保证归一化后的商收敛。`,
                    [
                      N("O 不提供极限", "Big-O 只给上界，不保证存在唯一的首项系数。", "边界")
                    ]
                  )
                ],
                T`5h³+2h⁴=O(h³)，两个误差相加保留 O(h²)；O(h⁴) 比 O(h²) 下降更快；r(h)=O(h²) 不保证 r(h)/h² 收敛，振荡例子即可说明。`
              ),
              E(
                "7.20",
                "Richardson 外推",
                "Richardson extrapolation",
                "推导",
                T`Let \(f\) have five continuous derivatives near \(x\), and define
\[
D(h)=\frac{f(x+h)-f(x-h)}{2h}.
\]
Follow these steps.

1. Use Taylor's theorem through degree 4 to expand \(f(x+h)\) and \(f(x-h)\).
2. Subtract and divide by \(2h\) to obtain
\[
D(h)=f'(x)+\frac{f^{(3)}(x)}6h^2+O(h^4).
\]
3. Replace \(h\) by \(h/2\).
4. Multiply by 4, subtract the original equation, and cancel the \(h^2\) terms.
5. Conclude
\[
\frac{4D(h/2)-D(h)}3=f'(x)+O(h^4).
\]`,
                "中心差分的一阶误差自动消失，剩下的首个误差是 h²；用 h 与 h/2 两个差分消掉这一项。",
                [
                  S(
                    "写出两边的 Taylor 展开",
                    "展开",
                    T`f(x\pm h)=f\pm f'h+\frac{f''}{2}h^2\pm\frac{f^{(3)}}6h^3+\frac{f^{(4)}}{24}h^4+O(h^5)`,
                    T`关于 \(x\) 展开：

\[
\begin{aligned}
f(x+h)&=f+f'h+\frac{f''}{2}h^2+\frac{f^{(3)}}6h^3
+\frac{f^{(4)}}{24}h^4+O(h^5),\\
f(x-h)&=f-f'h+\frac{f''}{2}h^2-\frac{f^{(3)}}6h^3
+\frac{f^{(4)}}{24}h^4+O(h^5).
\end{aligned}
\]

五阶导数的连续性保证余项在足够小闭区间上统一为 \(O(h^5)\)。`,
                    [
                      N("Taylor 展开", "中心在 x 时，奇次项在 h 与 −h 展开中符号相反。", "公式")
                    ]
                  ),
                  S(
                    "相减消去偶数项",
                    "计算",
                    T`f(x+h)-f(x-h)=2f'h+\frac{f^{(3)}}3h^3+O(h^5)`,
                    T`两式相减，常数项、二阶项与四阶项抵消：

\[
f(x+h)-f(x-h)
=2f'(x)h+\frac{f^{(3)}(x)}3h^3+O(h^5).
\]

除以 \(2h\)：

\[
D(h)=f'(x)+\frac{f^{(3)}(x)}6h^2+O(h^4).
\]`,
                    [
                      N("中心差分", "对称采样取消了一阶误差项，所以二阶精度来自 h²。")
                    ]
                  ),
                  S(
                    "替换 h 为 h/2",
                    "计算",
                    T`D(h/2)=f'(x)+\frac{f^{(3)}(x)}{24}h^2+O(h^4)`,
                    T`在原式中把 \(h\) 换成 \(h/2\)：

\[
D(h/2)
=f'(x)+\frac{f^{(3)}(x)}6\left(\frac h2\right)^2+O(h^4).
\]

因为 \(1/6\cdot1/4=1/24\)，得到所示式子。`,
                    [
                      N("步长减半", "步长减半使 h² 误差缩小为四分之一。")
                    ]
                  ),
                  S(
                    "组合两式消去 h²",
                    "结论",
                    T`4D(h/2)-D(h)=3f'(x)+O(h^4)`,
                    T`四倍第二条式子再减第一条：

\[
\begin{aligned}
4D(h/2)-D(h)
&=\left(4f'+\frac{f^{(3)}}6h^2+O(h^4)\right)\\
&\quad-\left(f'+\frac{f^{(3)}}6h^2+O(h^4)\right)\\
&=3f'(x)+O(h^4).
\end{aligned}
\]

除以 3：

\[
\frac{4D(h/2)-D(h)}3=f'(x)+O(h^4).
\]

这说明把二阶近似组合成四阶近似，而不是只把步长继续缩小。`,
                    [
                      N("Richardson 外推", "组合不同步长的近似，以消去主导误差项。", "方法")
                    ]
                  )
                ],
                T`中心差分 D(h)=f′+f‴h²/6+O(h⁴)；四倍 D(h/2) 后减去 D(h) 可消去 h²，得到 [4D(h/2)−D(h)]/3=f′+O(h⁴)。`
              )
            ]
          }
        ]
      },
      {
        id: "chapter-8",
        number: 8,
        titleZh: "Riemann 积分",
        titleEn: "Riemann Integration",
        knowledgePoints: [
          {
            id: "kp-8-1",
            section: "8.1",
            titleZh: "分割与 Darboux 和",
            titleEn: "Partitions and Darboux sums",
            summaryZh: "每个子区间用下确界和上确界构造下和、上和；加密分割会改善两边估计。",
            lessonHref: "../week3/Week3学习站.html#concept-darboux-sums",
            exercises: [
              E(
                "8.9",
                "Darboux 和与分割加密",
                "Darboux sums",
                "计算 + 证明",
                T`1. For \(f(x)=x^2\) on \([0,1]\) and \(P=\{0,1/2,1\}\), calculate \(L(f,P)\) and \(U(f,P)\).
2. For \(f(x)=2-x\) on \([0,2]\), use a uniform partition with \(n\) subintervals to calculate \(U(f,P_n)-L(f,P_n)\). Use the Darboux criterion to prove integrability.
3. Explain why adding partition points cannot decrease a lower sum or increase an upper sum.
4. A student says that \(\sup_P L(f,P)\) is the lower sum of the finest partition. Explain both errors.`,
                "对单调函数可直接用端点确定子区间最小值和最大值；加密分割只压缩上下和的间隙。",
                [
                  S(
                    "计算 x² 的上下和",
                    "计算",
                    T`L(f,P)=\frac18,\qquad U(f,P)=\frac58`,
                    T`在 \([0,1/2]\) 上 \(x^2\) 的最小值为 0、最大值为 \(1/4\)；在 \([1/2,1]\) 上最小值为 \(1/4\)、最大值为 1。

\[
\begin{aligned}
L(f,P)&=\frac12\left(0+\frac14\right)=\frac18,\\
U(f,P)&=\frac12\left(\frac14+1\right)=\frac58.
\end{aligned}
\]`,
                    [
                      N("下和", "L(f,P)=Σ mᵢΔxᵢ，mᵢ 为子区间下确界。", "定义"),
                      N("上和", "U(f,P)=Σ MᵢΔxᵢ，Mᵢ 为子区间上确界。", "定义")
                    ]
                  ),
                  S(
                    "均匀分割的间隙",
                    "计算",
                    T`U-L=\frac4n\to0`,
                    T`对 \(f(x)=2-x\)，函数递减，因此每段的

\[
m_i=f(x_i),\qquad M_i=f(x_{i-1}).
\]

宽为 \(2/n\)，函数值差为 \(2/n\)，每段贡献间隙

\[
\frac2n\cdot\frac2n=\frac4{n^2}.
\]

共有 \(n\) 段：

\[
U(f,P_n)-L(f,P_n)=\frac4n\to0.
\]

由 Darboux 判据，\(f\) 在 \([0,2]\) 上可积。`,
                    [
                      N("Darboux 判据", "可积当且仅当存在分割使上和与下和之差任意小。", "定理")
                    ]
                  ),
                  S(
                    "加密分割的单调作用",
                    "证明",
                    T`L(f,P)\le L(f,P')\le U(f,P')\le U(f,P)`,
                    T`把一个子区间再切小，原来的下确界可能变大，但不会变小；原来的上确界可能变小，但不会变大。

因此下和只会上升，上和只会下降，两者间隙缩小。任意分割都满足

\[
L(f,P)\le U(f,P).
\]`,
                    [
                      N("加密分割", "增加分点只让估计更精细，不改变函数本身。")
                    ]
                  ),
                  S(
                    "解释“最细分割”的说法错误",
                    "概念",
                    T`P\text{ can always be refined}`,
                    T`第一处错误：存在无数个分割，并没有“最细分割”。任意有限分割都能再加入一个新分点，所以通常没有最大值，因而要用上确界。

第二处错误：\(\sup_PL(f,P)\) 是下积分，不是某个实际下和的值；它可能是所有有限分割下和的极限，而不等于某个“最细分割”的结果。`,
                    [
                      N("上确界不等于最大值", "集合可以没有最大元素，但仍可有上确界。", "边界")
                    ]
                  )
                ],
                T`x² 的两段下和、上和分别为 1/8、5/8；2−x 的均匀分割间隙为 4/n→0，故可积；加密分割使下和上升、上和下降；不存在最细分割，下积分应取上确界。`
              )
            ]
          },
          {
            id: "kp-8-2",
            section: "8.2",
            titleZh: "可积与非可积函数",
            titleEn: "Integrable and non-integrable functions",
            summaryZh: "连续函数可积，单个点或有限多点修改不影响积分；Dirichlet 函数因每段同时取 0 和 1 而不可积。",
            lessonHref: "../week3/Week3学习站.html#concept-continuous-dirichlet",
            exercises: [
              E(
                "8.16",
                "可积性、单点修改与积分界",
                "Integrability and elementary properties",
                "证明 + 计算",
                T`1. Use Darboux sums to prove that \(1_{\mathbb Q}\) is not Riemann integrable on \([0,1]\).
2. Let \(f=0\) on \([0,1]\) except that \(f(1/2)=7\). Prove directly that \(f\) is integrable and find its integral.
3. If \(f\) is Riemann integrable and \(m\le f(x)\le M\), derive \(m(b-a)\le\int_a^bf\le M(b-a)\).
4. If \(f\) is integrable on \([1,1.02]\) and \(|f(x)|\le3\), find a guaranteed upper bound for \(|\int_1^{1.02}f(x)dx|\).
5. Explain why “discontinuous” does not imply “not Riemann integrable”, and why “bounded” does not imply “Riemann integrable”.`,
                "用上下和间隙判定可积；孤立高点被极小宽度隔离，无法影响极限。",
                [
                  S(
                    "Dirichlet 函数的每个子区间都取 0 和 1",
                    "证明",
                    T`m_i=0,\quad M_i=1,\quad L(1_{\mathbb Q},P)=0,\quad U(1_{\mathbb Q},P)=1`,
                    T`任一正长度子区间都同时包含有理数和无理数，因此

\[
\inf_{I_i}1_{\mathbb Q}=0,\qquad
\sup_{I_i}1_{\mathbb Q}=1.
\]

所以任意分割都有

\[
L(1_{\mathbb Q},P)=0,\qquad
U(1_{\mathbb Q},P)=1.
\]

上下和间隙始终为 1，不能任意小，故不可积。`,
                    [
                      N("有理/无理稠密", "每个非退化区间都同时含有有理数与无理数。", "定理")
                    ]
                  ),
                  S(
                    "隔离单点高值",
                    "证明 + 计算",
                    T`\int_0^1f=0`,
                    T`取围绕 \(1/2\) 的窄区间

\[
I=[1/2-\varepsilon,1/2+\varepsilon].
\]

在其余部分函数值为 0，而在 \(I\) 上函数值最多为 7。因此

\[
U(f,P)-L(f,P)\le7\cdot2\varepsilon=14\varepsilon.
\]

给定任意 \(\delta>0\)，取 \(\varepsilon<\delta/14\)，就能使间隙小于 \(\delta\)。所以 \(f\) 可积。

积分等于 0 函数加一个孤立点修改，故

\[
\int_0^1f=0.
\]`,
                    [
                      N("单点修改", "修改一个点的函数值不会改变 Riemann 积分。", "定理")
                    ]
                  ),
                  S(
                    "用常函数比较积分的界",
                    "推导",
                    T`m(b-a)\le\int_a^bf\le M(b-a)`,
                    T`常函数的积分是

\[
\int_a^b m=m(b-a),\qquad
\int_a^b M=M(b-a).
\]

对可积函数使用积分的序关系：

\[
m\le f\le M
\Longrightarrow
\int_a^b m\le\int_a^bf\le\int_a^bM.
\]

代入常数积分即得。`,
                    [
                      N("积分序关系", "被积函数逐点较小，积分也较小。", "定理")
                    ]
                  ),
                  S(
                    "用绝对值界给出数值界",
                    "计算",
                    T`\left|\int_1^{1.02}f\right|\le0.06`,
                    T`区间长度为

\[
1.02-1=0.02.
\]

由

\[
\left|\int_a^bf\right|
\le\int_a^b|f|
\le3(b-a),
\]

得到

\[
\left|\int_1^{1.02}f\right|
\le3\cdot0.02=0.06.
\]`,
                    [
                      N("积分绝对值界", "|∫f|≤∫|f|。", "公式")
                    ]
                  ),
                  S(
                    "两对反例说明两种条件",
                    "概念",
                    T`\text{discontinuous}\nRightarrow\text{not integrable};\qquad \text{bounded}\nRightarrow\text{integrable}`,
                    T`“有界”与“可积”不是同一件事。

- \(1_{\mathbb Q}\) 有界，但由第一问不可积。
- 分段常数函数在 0 处跳跃，仍可积；例如 \(\operatorname{sgn}(x)\) 在 \([-1,1]\) 上只有有限个间断点，上下和间隙可通过隔离间断点压小。

因此不能仅凭“有间断”判定不可积，也不能仅凭“有界”判定可积。`,
                    [
                      N("充分条件", "连续函数可积，但可积函数不必连续。", "边界")
                    ]
                  )
                ],
                T`1_ℚ 不可积；除 1/2 点外为 0 的函数可积且积分为 0；m≤f≤M 给出 m(b−a)≤∫f≤M(b−a)；0.02 区间上的绝对值积分不超过 0.06；有界不保证可积，间断也不必然不可积。`
              )
            ]
          }
        ]
      },
      {
        id: "chapter-9",
        number: 9,
        titleZh: "微积分基本定理与 Improper Integrals",
        titleEn: "The Fundamental Theorem of Calculus and Improper Integrals",
        knowledgePoints: [
          {
            id: "kp-9-2",
            section: "9.2",
            titleZh: "原函数与定积分计算",
            titleEn: "Antiderivatives and evaluation of definite integrals",
            summaryZh: "FTC I 对连续被积函数的累积函数求导；FTC II 用原函数端点差计算定积分；点值异常不能破坏积分。",
            lessonHref: "../week3/Week3学习站.html#concept-ftc-part-two",
            exercises: [
              E(
                "9.8",
                "微积分基本定理的应用",
                "The Fundamental Theorem of Calculus",
                "计算 + 概念",
                T`1. Use FTC Part I to differentiate \(F(x)=\int_1^x(1+t^4)dt\).
2. Use FTC Part II to evaluate \(\int_{-1}^2(2x+3)dx\).
3. Find an antiderivative and evaluate \(\int_0^\pi(2\sin x+3\cos x)dx\).
4. Explain which part of the theorem is used in each of the first three parts.
5. For \(f(x)=\operatorname{sgn}(x)\), verify separately for \(x>0\) and \(x<0\) that \(\int_0^xf(t)dt=|x|\).
6. Let \(g(0)=-5\) and \(g(x)=x^2\) for \(x\ne0\). Find \(G(x)=\int_0^xg(t)dt\) and compare \(G'(0)\) with \(g(0)\).`,
                "先把连续性和可积性当作入口条件，再分 FTC I 的累积求导与 FTC II 的端点差两个方向。",
                [
                  S(
                    "FTC I 与 FTC II",
                    "计算",
                    T`F'(x)=1+x^4,\qquad \int_{-1}^2(2x+3)dx=12`,
                    T`\(1+t^4\) 连续，因此由 FTC I：

\[
F'(x)=1+x^4.
\]

对第二个积分，原函数为 \(x^2+3x\)，故

\[
\int_{-1}^2(2x+3)dx
=[x^2+3x]_{-1}^2=10-(-2)=12.
\]`,
                    [
                      N("FTC I", "若 f 连续，F(x)=∫ₐˣf 满足 F′=f。", "定理"),
                      N("FTC II", "∫ₐᵇf=F(b)−F(a)，F 为 f 的原函数。", "定理")
                    ]
                  ),
                  S(
                    "三角积分与原函数",
                    "计算",
                    T`\int_0^\pi(2\sin x+3\cos x)dx=4`,
                    T`\(2\sin x+3\cos x\) 连续，且

\[
\frac{d}{dx}(-2\cos x+3\sin x)
=2\sin x+3\cos x.
\]

所以

\[
\begin{aligned}
\int_0^\pi(2\sin x+3\cos x)dx
&=[-2\cos x+3\sin x]_0^\pi\\
&=2-(-2)=4.
\end{aligned}
\]`,
                    [
                      N("原函数", "−2cos x+3sin x 是 integrand 的原函数。")
                    ]
                  ),
                  S(
                    "符号函数的累积函数",
                    "证明",
                    T`G(x)=|x|`,
                    T`若 \(x>0\)，在 \((0,x)\) 上 integrand 为 1：

\[
\int_0^x f(t)dt=x.
\]

若 \(x<0\)，在 \((x,0)\) 上 integrand 为 \(-1\)，有向积分给出

\[
\int_0^x f(t)dt=-x.
\]

在 \(x=0\) 时积分为 0。因此 \(G(x)=|x|\)。第一问应用 FTC I，第二、三问应用 FTC II。`,
                    [
                      N("有向积分", "交换上下界会改变符号；对 x<0 尤其要保留方向。")
                    ]
                  ),
                  S(
                    "单点改动不改变积分",
                    "结论",
                    T`G(x)=\frac{x^3}{3},\qquad G'(0)=0\ne-5=g(0)`,
                    T`虽然 \(g(0)=-5\)，但单点修改不影响积分。在积分中 \(g(t)=t^2\) 几乎处处成立，所以

\[
G(x)=\int_0^x t^2dt=\frac{x^3}{3}.
\]

于是 \(G'(0)=0\)，而 \(g(0)=-5\)。说明积累函数并不能恢复孤立的点值，FTC I 需要连续性假设。`,
                    [
                      N("FTC I 假设", "被积函数连续时才能保证 F′=f；单点断点会使等式在某点失效。", "边界")
                    ]
                  )
                ],
                T`F′=1+x⁴；∫₋₁²(2x+3)=12；∫₀π(2sin+3cos)=4；sgn 的累积函数为 |x|；将 g(0) 改为 −5 后 G=x³/3，仍有 G′(0)=0≠g(0)。`
              )
            ]
          },
          {
            id: "kp-9-3",
            section: "9.3",
            titleZh: "Improper Integrals 的截断极限",
            titleEn: "Improper integrals as limits",
            summaryZh: "无界区间或奇点上的积分必须先截断成真积分，再分别取极限；不能直接代入 ∞。",
            lessonHref: "../week3/Week3学习站.html#concept-improper-unbounded",
            exercises: [
              E(
                "9.9",
                "诊断 FTC 前提",
                "Diagnosing FTC hypotheses",
                "判断",
                T`Decide whether each argument is valid. If invalid, identify the missing hypothesis or incorrect conclusion.

1. Since every bounded function is Riemann integrable, \(1_{\mathbb Q}\) has an accumulation function to which Part I applies.
2. If \(f\) is continuous on \([a,b]\), then
\[
\frac d{dx}\int_a^xf(t)dt=f(x)
\]
for \(x\in(a,b)\).
3. Changing \(f(a)\) alone must change \(\int_a^bf(x)dx\), because the integrand has changed.
4. If an integrable function is discontinuous at \(c\), then its accumulation function can never be differentiable at \(c\).
5. Use the examples in this section to support your answers.`,
                "逐条检查：可积性、连续性、单点修改和积累函数的可导性分别提供了什么、不能提供什么。",
                [
                  S(
                    "前两条：可积 ≠ 有界，连续给出 FTC I",
                    "判断",
                    T`1\text{ false},\qquad 2\text{ true}`,
                    T`第一条错误。Dirichlet 函数 \(1_{\mathbb Q}\) 有界，但不可积，因此没有可用于 FTC 的 Riemann 积累函数。

第二条正确。\(f\) 在 \([a,b]\) 连续，FTC I 对内部点 \(x\in(a,b)\) 给出

\[
\frac d{dx}\int_a^xf(t)dt=f(x).
\]`,
                    [
                      N("可积与有界", "有界是可积的必要条件之一，但不是充分条件。", "易错点")
                    ]
                  ),
                  S(
                    "中间两条：单点与间断",
                    "判断",
                    T`3\text{ false},\qquad 4\text{ false}`,
                    T`第三条错误。修改单个点的函数值不改变积分；区间长度对单点为零。

第四条也错误。一个可积函数的间断可能被积分“抹平”。例如 \(f\) 在 0 处被改为 100、其余处为 1，则

\[
F(x)=\int_0^x f(t)dt=x,
\]

且 \(F'(0)=1\)，与修改后的点值 100 无关。`,
                    [
                      N("单点修改", "积分忽略零宽度的点；因此点值不能由积分恢复。", "定理")
                    ]
                  ),
                  S(
                    "用符号函数作对照",
                    "例子",
                    T`F(x)=\int_0^x\operatorname{sgn}(t)dt=|x|`,
                    T`对符号函数，0 是跳跃间断，其累积函数为 \(|x|\)，在 0 不可导，这是第四条所述结论在此例子中恰好成立。

但对单点修改的常数函数，间断不妨碍累积函数可导。因此只能判断具体例子，不能把第四条作为普遍结论。`,
                    [
                      N("积累函数", "F 的光滑程度取决于断点的类型和数量，而不只取决于“有间断”。")
                    ]
                  )
                ],
                T`1 假：有界不保证可积；2 真：连续性满足 FTC I；3 假：单点修改不改变积分；4 假：单点间断的积累函数仍可能可导。`
              ),
              E(
                "9.18",
                "Improper Integrals",
                "Improper integrals",
                "计算 + 收敛性",
                T`In every part, write the defining limit before evaluating the integral.

1. Determine whether \(\int_1^\infty x^{-3}dx\) converges.
2. Determine whether \(\int_1^\infty x^{-1/2}dx\) converges.
3. Evaluate \(\int_0^1x^{-1/2}dx\).
4. Determine whether \(\int_0^1x^{-2}dx\) converges.
5. Evaluate \(\int_0^\infty e^{-2x}dx\).
6. Explain why writing \([-e^{-x}]_0^\infty\) without a limit is not a definition.
7. Evaluate \(\int_{-\infty}^0e^{3x}dx\).
8. Show that \(\int_{-\infty}^\infty(1+x^2)^{-1}dx=\pi\).
9. Explain why \(\int_{-\infty}^\infty x^3dx\) diverges although \(\int_{-R}^R x^3dx=0\) for every R.`,
                "每一题先写截断积分，再取极限；双侧无穷必须分成两个独立极限。",
                [
                  S(
                    "无穷端幂函数的 p 判据",
                    "计算",
                    T`\int_1^\infty x^{-3}dx=\frac12,\qquad\int_1^\infty x^{-1/2}dx=\infty`,
                    T`\[
\int_1^\infty x^{-3}dx
=\lim_{R\to\infty}\left[-\frac1{2x^2}\right]_1^R
=\lim_{R\to\infty}\left(\frac12-\frac1{2R^2}\right)
=\frac12.
\]

对 \(x^{-1/2}\)：

\[
\int_1^R x^{-1/2}dx=2(\sqrt R-1)\to\infty,
\]

所以发散。一般地，\(\int_1^\infty x^{-p}dx\) 在 \(p>1\) 时收敛。`,
                    [
                      N("无穷端 p 判据", "∫₁∞x⁻ᵖ 收敛当且仅当 p>1。", "定理")
                    ]
                  ),
                  S(
                    "奇点端的 p 判据",
                    "计算",
                    T`\int_0^1x^{-1/2}dx=2,\qquad\int_0^1x^{-2}dx=\infty`,
                    T`从右侧截断：

\[
\int_\varepsilon^1x^{-1/2}dx
=2(1-\sqrt\varepsilon)\to2.
\]

所以收敛，值为 2。

对 \(x^{-2}\)：

\[
\int_\varepsilon^1x^{-2}dx
\left[-\frac1x\right]_\varepsilon^1
=\frac1\varepsilon-1\to\infty,
\]

故发散。一般地，\(\int_0^1x^{-p}dx\) 在 \(p<1\) 时收敛。`,
                    [
                      N("端点 p 判据", "∫₀¹x⁻ᵖ 收敛当且仅当 p<1。", "定理")
                    ]
                  ),
                  S(
                    "指数函数的优势",
                    "计算",
                    T`\int_0^\infty e^{-2x}dx=\frac12,\qquad\int_{-\infty}^0e^{3x}dx=\frac13`,
                    T`\[
\int_0^R e^{-2x}dx
=\frac12(1-e^{-2R})\to\frac12.
\]

第二个积分写成

\[
\int_{-R}^0e^{3x}dx
=\frac13(1-e^{-3R})\to\frac13.
\]`,
                    [
                      N("截断", "无界区间的积分先取有限端点，再取极限。")
                    ]
                  ),
                  S(
                    "arctan 与双侧极限",
                    "计算",
                    T`\int_{-\infty}^\infty\frac{dx}{1+x^2}
=\pi`,
                    T`双侧积分必须拆成

\[
\lim_{A\to-\infty}\int_A^0\frac{dx}{1+x^2}
+\lim_{B\to\infty}\int_0^B\frac{dx}{1+x^2}.
\]

使用 \(\arctan x\)：

\[
\lim_{B\to\infty}\arctan B=\frac\pi2,\qquad
\lim_{A\to-\infty}\arctan A=-\frac\pi2.
\]

因此两个极限分别为 \(\pi/2\)，总和为 \(\pi\)。`,
                    [
                      N("双侧无穷", "必须分别收敛；不能用一个对称参数 R→±∞ 替代两个独立极限。", "易错点")
                    ]
                  ),
                  S(
                    "对称抵消不是收敛",
                    "反例",
                    T`\int_{R}^\infty x^3dx=\infty,\qquad\int_{-\infty}^{-R}x^3dx=-\infty`,
                    T`虽然

\[
\int_{-R}^R x^3dx=0
\]

由奇函数对称性得到，但双侧 improper integral 要求分别检查两侧：

\[
\int_R^\infty x^3dx=+\infty,\qquad
\int_{-\infty}^{-R}x^3dx=-\infty.
\]

两端都不独立收敛，所以原积分发散。对称抵消得到的是 Cauchy principal value，不是普通 improper integral。`,
                    [
                      N("Cauchy principal value", "对称截断的抵消值不等于双侧 improper integral。", "边界")
                    ]
                  )
                ],
                T`∫₁∞x⁻³=1/2；∫₁∞x⁻¹ᐟ² 发散；∫₀¹x⁻¹ᐟ²=2；∫₀¹x⁻² 发散；两个指数积分分别为 1/2、1/3；双侧 1/(1+x²) 积分为 π；x³ 因两侧各自发散而发散。`
              ),
              E(
                "9.19",
                "第 7–9 章综合",
                "Consolidation of Chapters 7–9",
                "综合",
                T`1. Construct a Taylor polynomial about \(a\ne0\) and verify its matching derivative data.
2. Use a Lagrange remainder to give an explicit numerical error bound.
3. Explain what \(r(h)=O(h^4)\) does and does not assert.
4. Calculate lower and upper Darboux sums for a simple monotone function and discuss integrability.
5. Compare the single-point modification result with the failure of integrability for \(1_{\mathbb Q}\).
6. State both parts of the Fundamental Theorem of Calculus, including hypotheses, and give one application of each.
7. Use Examples 9.6 and 9.7 to explain why integration and differentiation are inverse operations only under suitable hypotheses.
8. Compare the convergence conditions for \(\int_1^\infty x^{-p}dx\) and \(\int_0^1x^{-p}dx\).`,
                "把近似、可积、累积和 improper 收敛四条主线放进同一张检查表。",
                [
                  S(
                    "Taylor 展开与误差界",
                    "推导",
                    T`T_3[e^x;1](x)=e\left(1+(x-1)+\frac{(x-1)^2}{2}+\frac{(x-1)^3}{6}\right)`,
                    T`取 \(f(x)=e^x\)，在 \(a=1\) 展开到三次。因为所有导数仍为 \(e^x\)，在 1 处都为 \(e\)：

\[
T_3=e\left(1+(x-1)+\frac{(x-1)^2}{2}+\frac{(x-1)^3}{6}\right).
\]

其 0 到 3 阶导数在 1 处与 \(e^x\) 匹配。

若取 \(x=1.1\)，Lagrange 余项为

\[
|R_3|=\frac{e^\xi}{24}(0.1)^4,
\]

其中 \(1<\xi<1.1\)。由于 \(e^\xi<e^{1.1}\)，可以把误差压成一个数值上界。

\(O(h^4)\) 只说明误差不超过某常数倍 \(h^4\)，不说明存在极限、主系数为 1，也不说明误差非零。`,
                    [
                      N("Taylor + 误差", "先匹配导数，再用区间内下一阶导数的最大值给误差界。")
                    ]
                  ),
                  S(
                    "Darboux 和与单点修改",
                    "证明",
                    T`f(x)=x,\quad P_n:\ 0<\frac1n<\cdots<1`,
                    T`对 \(f(x)=1-x\) 在 \([0,1]\) 上的均匀分割：

\[
U-L=\sum_{i=1}^n\frac1n\cdot\frac1n=\frac1n\to0.
\]

所以可积。

若把某一积分值改成 7，则只有一个小区的上界可能变大，把该区宽度取到任意小即可使上下和间隙任意小，因此仍可积且积分不变。

\(1_{\mathbb Q}\) 则不同：每个非退化子区间都同时取 0 和 1，任意分割都有

\[
L=0,\qquad U=1,
\]

故不可积。`,
                    [
                      N("孤立修改与稠密振荡", "单点修改不影响积分；处处稠密的双值函数会破坏可积性。")
                    ]
                  ),
                  S(
                    "FTC 的两个方向",
                    "定理",
                    T`F(x)=\int_a^xf(t)dt\Rightarrow F'=f\quad(f\text{ continuous})`,
                    T`FTC I：若 \(f\) 在包含 \(a,x\) 的区间上连续，则

\[
\frac d{dx}\int_a^xf(t)dt=f(x).
\]

应用：对 \(F(x)=\int_0^x e^{-t^2}dt\)，有 \(F'(x)=e^{-x^2}\)。

FTC II：若 \(f\) 连续且 \(F'=f\)，则

\[
\int_a^bf(x)dx=F(b)-F(a).
\]

应用：\(\int_0^1 2x\,dx=[x^2]_0^1=1\)。`,
                    [
                      N("FTC 条件", "两个方向都常以连续性作为安全前提。", "定理")
                    ]
                  ),
                  S(
                    "两个例题与端点收敛差异",
                    "概念",
                    T`p>1\ (+\infty);\qquad p<1\ (0^+)`,
                    T`Example 9.6：\(\operatorname{sgn}(x)\) 有跳跃间断，但其积累函数为 \(|x|\)，在跳跃点不可导；所以积分后再求导未必恢复原函数。

Example 9.7：只改一个点的函数值，积累函数仍为 \(x\)，导数不恢复被改掉的点值。

因此“积分和求导互逆”必须加连续性或合适的光滑性条件。

最后比较 p 积分：

\[
\int_1^\infty x^{-p}dx\text{ 收敛}\iff p>1,
\]

而

\[
\int_0^1x^{-p}dx\text{ 收敛}\iff p<1.
\]

原因是 \(+\infty\) 端需要衰减足够快，\(0\) 端需要奇性足够弱。`,
                    [
                      N("端点和无穷的阈值相反", "∞ 需要 p>1；0⁺ 需要 p<1。", "易错点")
                    ]
                  )
                ],
                T`Taylor 三次式、Lagrange 误差界、Big-O、Darboux 和、单点修改、FTC I/II 与 p 判据已串联；关键边界是：有限点修改不改变积分，但连续性决定 FTC 是否恢复 integrand，无穷端与奇点端 p 条件相反。`
              )
            ]
          }
        ]
      }
    ]
  });
})();
