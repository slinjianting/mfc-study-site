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
        id: "chapter-10",
        number: 10,
        titleZh: "原函数与积分方法",
        titleEn: "Antiderivatives and Integration Methods",
        knowledgePoints: [
          {
            id: "kp-10-2",
            section: "10.2",
            titleZh: "换元与链式因子",
            titleEn: "Substitution and the chain-rule factor",
            summaryZh: "换元的目标是把 integrand 中的“内层函数 × 内层导数”识别为一个新的微分 \(du\)。",
            lessonHref: "../week4/Week4学习站.html#concept-integration-substitution",
            exercises: [
              E(
                "10.6",
                "识别换元与链式因子",
                "Recognising substitutions",
                "计算",
                T`1. Find \(\int3x^2(1+x^3)^4dx\), identifying the inner function and its derivative.
2. Find \(\int xe^{x^2}dx\) and explain the factor \(1/2\).
3. Find \(\int\cos x\,e^{\sin x}dx\) and \(\int\sin3x\cos x\,dx\). For each, identify the derivative factor.
4. Find \(\int e^x/(e^x+2)dx\). Explain why the logarithm obtained is defined for every real \(x\).`,
                "观察“内层函数 + 其导数”成对出现；若只差常数倍，就把该常数补到 \(du\) 中。",
                [
                  S(
                    "两个 u 等于内层的换元",
                    "计算",
                    T`\int3x^2(1+x^3)^4dx=\frac{(1+x^3)^5}{5}+C`,
                    T`令

\[
u=1+x^3,\qquad du=3x^2dx.
\]

原积分直接变成

\[
\int u^4du=\frac{u^5}{5}+C
=\frac{(1+x^3)^5}{5}+C.
\]

求导可立即检查：

\[
\frac d{dx}\frac{(1+x^3)^5}{5}
=(1+x^3)^4\cdot3x^2.
\]`,
                    [
                      N("换元", "u=g(x), du=g′(x)dx。", "定理")
                    ]
                  ),
                  S(
                    "指数型换元与常数因子",
                    "计算",
                    T`\int xe^{x^2}dx=\frac12e^{x^2}+C`,
                    T`令 \(u=x^2\)，则 \(du=2xdx\)，所以

\[
xdx=\frac12du.
\]

因此

\[
\int xe^{x^2}dx
=\frac12\int e^u du
=\frac12e^{x^2}+C.
\]

因子 \(1/2\) 来自 \(du=2xdx\)，用于补偿原式只有 \(xdx\)。`,
                    [
                      N("链式因子", "若 du=2x dx，而积分中只有 x dx，就必须补乘 1/2。", "方法")
                    ]
                  ),
                  S(
                    "三角换元与积化和差",
                    "计算",
                    T`\int\cos x\,e^{\sin x}dx=e^{\sin x}+C`,
                    T`第一式令 \(u=\sin x\)，\(du=\cos x\,dx\)：

\[
\int e^u du=e^{\sin x}+C.
\]

第二式使用恒等式

\[
\sin3x\cos x
=\frac12(\sin4x+\sin2x).
\]

所以

\[
\int\sin3x\cos x\,dx
=-\frac18\cos4x-\frac14\cos2x+C.
\]`,
                    [
                      N("积化和差", "sin A cos B=[sin(A+B)+sin(A−B)]/2。", "公式")
                    ]
                  ),
                  S(
                    "分母的导数作为换元",
                    "计算",
                    T`\int\frac{e^x}{e^x+2}dx=\log(e^x+2)+C`,
                    T`令 \(u=e^x+2\)，则 \(du=e^xdx\)，于是

\[
\int\frac{du}{u}=\log|u|+C.
\]

因为对所有实数 \(x\)，\(e^x>0\)，所以

\[
e^x+2>2>0.
\]

绝对值可以去掉，得到 \(\log(e^x+2)+C\)。`,
                    [
                      N("对数原函数", "∫du/u=ln|u|+C；先检查 u 的符号可去掉绝对值。", "公式")
                    ]
                  )
                ],
                T`四个基础积分为 (1+x³)⁵/5+C、e^{x²}/2+C、e^{sin x}+C、−cos4x/8−cos2x/4+C，以及 ln(eˣ+2)+C。`
              ),
              E(
                "10.7",
                "定积分换元与边界",
                "Substitution and bounds",
                "计算 + 诊断",
                T`1. Evaluate \(\int_0^1 2x/(1+x^2)dx\) with transformed bounds.
2. A proposed solution writes \(\int_0^1 2x/(1+x^2)dx=\int_0^1 du/u\) after \(u=1+x^2\). Identify the error and correct it.
3. Evaluate \(\int_0^1xe^{x^2}dx\), showing both the transformed bounds and the constant factor.
4. Apply substitution \(u=x^2\) to \(\int_{-1}^1 2x\,dx\). Explain why non-injectivity does not invalidate the calculation.`,
                "定积分换元时必须同时换 bounds；有时一个 u 值对应两个 x，但只要微分关系和路径上的积分正确仍可使用。",
                [
                  S(
                    "同步变换函数、微分与上下界",
                    "计算",
                    T`\int_0^1\frac{2x}{1+x^2}dx=\log2`,
                    T`令 \(u=1+x^2\)，则 \(du=2xdx\)。当 \(x=0\) 时 \(u=1\)；当 \(x=1\) 时 \(u=2\)。因此

\[
\int_0^1\frac{2x}{1+x^2}dx
=\int_1^2\frac{du}{u}
=[\log u]_1^2
=\log2.
\]`,
                    [
                      N("定积分换元", "换 u 时同时换 dx 与 bounds，换完不再回到 x。", "定理")
                    ]
                  ),
                  S(
                    "纠正错误边界",
                    "诊断",
                    T`\int_0^1\frac{2x}{1+x^2}dx\ne\int_0^1\frac{du}{u}`,
                    T`给 \(u=1+x^2\) 时，\(x=0,1\) 对应的 \(u\) 是 \(1,2\)，不是 \(0,1\)。此外 \(du=2xdx\)，原式中的 \(2xdx\) 恰好就是 \(du\)。

正确写法是

\[
\int_1^2\frac{du}{u}.
\]

两个错误合在一起是：忘了换上下界，也误把 x 的端点直接当成 u 的端点。`,
                    [
                      N("换元三件套", "表达式、微分、端点必须一起改变。", "易错点")
                    ]
                  ),
                  S(
                    "指数换元中的倍率",
                    "计算",
                    T`\int_0^1xe^{x^2}dx=\frac12(e-1)`,
                    T`令 \(u=x^2\)，则 \(du=2xdx\)。当 \(x=0\) 时 \(u=0\)；当 \(x=1\) 时 \(u=1\)。于是

\[
\int_0^1xe^{x^2}dx
=\frac12\int_0^1e^u du
=\frac12(e-1).
\]`,
                    [
                      N("常数倍", "x dx 只等于 du 的一半，必须保留 1/2。")
                    ]
                  ),
                  S(
                    "非单射换元的合法性",
                    "证明",
                    T`u=x^2,\quad du=2xdx,\quad u(-1)=u(1)=1`,
                    T`应用换元公式：

\[
\int_{-1}^1 2x\,dx
=\int_1^1du=0.
\]

虽然 \(u=x^2\) 在整个区间不是单射，但定理要求的是等式在路径上成立，并不要求 \(u\) 全局一一对应。这里正确保留了 \(du=2xdx\) 和端点变化，计算仍然有效。`,
                    [
                      N("非单射不自动失效", "换元合法性取决于连续可微和微分关系，不要求整个区间单射。", "边界")
                    ]
                  )
                ],
                T`三个数值积分分别为 ln2、ln2（纠错后）和 (e−1)/2；u=x² 在 [−1,1] 非单射，但换元公式仍给出 ∫2x dx=∫₁¹du=0。`
              )
            ]
          },
          {
            id: "kp-10-3",
            section: "10.3",
            titleZh: "分部积分与重复使用",
            titleEn: "Integration by parts and the product rule",
            summaryZh: "分部积分把 \(\int uv'\) 换成边界项减去 \(\int u'v\)；选择 u 的目标是让剩余积分更简单。",
            lessonHref: "../week4/Week4学习站.html#concept-integration-by-parts",
            exercises: [
              E(
                "10.14",
                "分部积分基础",
                "Integration by parts",
                "计算",
                T`1. Find \(\int xe^xdx\), recording \(u,u',v'\) and \(v\), and check your answer.
2. Evaluate \(\int_1^e\log x\,dx\) by parts, with an explicit endpoint calculation.
3. Evaluate \(\int_0^1xe^xdx\) directly with the definite parts formula.
4. Find \(\int x\sin(5x)dx\), accounting for the constant in the trigonometric primitive.`,
                "先选 u 使求导后变简单，再选 dv 使其容易积分；定积分还要计算边界项。",
                [
                  S(
                    "多项式乘指数函数",
                    "计算",
                    T`\int xe^xdx=(x-1)e^x+C`,
                    T`取

\[
u=x,\quad u'=1,\quad v'=e^x,\quad v=e^x.
\]

则

\[
\int xe^xdx=xe^x-\int e^xdx
=(x-1)e^x+C.
\]

求导检查：

\[
\frac d{dx}(x-1)e^x=e^x+(x-1)e^x=xe^x.
\]`,
                    [
                      N("分部积分", "∫u v′=uv−∫u′v。", "定理")
                    ]
                  ),
                  S(
                    "对数函数的分部积分",
                    "计算",
                    T`\int_1^e\log x\,dx=1`,
                    T`取 \(u=\log x\)、\(v'=1\)，于是 \(u'=1/x\)、\(v=x\)：

\[
\begin{aligned}
\int_1^e\log x\,dx
&=[x\log x]_1^e-\int_1^e1\,dx\\
&=(e\cdot1-0)-(e-1)=1.
\end{aligned}
\]`,
                    [
                      N("边界项", "[uv]ₐᵇ=u(b)v(b)−u(a)v(a)。", "公式")
                    ]
                  ),
                  S(
                    "带上下界的指数积分",
                    "计算",
                    T`\int_0^1xe^xdx=1`,
                    T`使用

\[
\int_0^1xe^xdx=[(x-1)e^x]_0^1.
\]

在 1 处为 0，在 0 处为 \((-1)e^0=-1\)，所以

\[
0-(-1)=1.
\]`,
                    [
                      N("先求原函数", "也可以先得到不定积分，再代入端点。")
                    ]
                  ),
                  S(
                    "三角函数原函数的常数",
                    "计算",
                    T`\int x\sin5x\,dx=-\frac{x\cos5x}{5}+\frac{\sin5x}{25}+C`,
                    T`取 \(u=x\)、\(v'=\sin5x\)。由于

\[
v=-\frac15\cos5x,
\]

有

\[
\begin{aligned}
\int x\sin5x\,dx
&=-\frac{x\cos5x}{5}
+\frac15\int\cos5x\,dx\\
&=-\frac{x\cos5x}{5}+\frac{\sin5x}{25}+C.
\end{aligned}
\]`,
                    [
                      N("原函数倍率", "∫sin(kx)dx=−cos(kx)/k+C。", "易错点")
                    ]
                  )
                ],
                T`四个积分分别为 (x−1)eˣ+C、1、1、−x cos5x/5+sin5x/25+C。`
              ),
              E(
                "10.15",
                "比较分部选择与重复分部",
                "Comparing choices and repeating parts",
                "计算 + 解释",
                T`1. For \(\int xe^xdx\), compare \(u=x,v'=e^x\) with \(u=e^x,v'=x\). Explain which remaining integral is simpler.
2. Outline and complete two applications of parts for \(\int x^2\cos x\,dx\). Check the answer by differentiation.
3. Explain why repeated differentiation of a polynomial can terminate a parts calculation with an exponential or sine/cosine factor.`,
                "选 u 的优先级服务于减少次数：多项式应被反复求导，指数或三角函数适合被积分。",
                [
                  S(
                    "比较两种 u 选择",
                    "分析",
                    T`u=x\text{ leaves }\int e^xdx;\qquad u=e^x\text{ leaves }\int \frac{x^2}{2}e^xdx`,
                    T`选择 \(u=x\)、\(v'=e^x\) 时，剩余积分为

\[
\int1\cdot e^xdx,
\]

立刻可积。

若选 \(u=e^x\)、\(v'=x\)，则剩余积分带有 \(\int (x^2/2)e^xdx\)，多项式次数反而增加。因此应让多项式部分被求导。`,
                    [
                      N("选择 u", "通常让 u 的导数比 u 简单，让 dv 容易积分。", "方法")
                    ]
                  ),
                  S(
                    "连续两次分部",
                    "计算",
                    T`\int x^2\cos x\,dx=x^2\sin x+2x\cos x-2\sin x+C`,
                    T`第一次取 \(u=x^2\)、\(v'=\cos x\)：

\[
\int x^2\cos x\,dx=x^2\sin x-2\int x\sin x\,dx.
\]

第二次取 \(u=x\)、\(v'=\sin x\)：

\[
\int x\sin x\,dx=-x\cos x+\sin x.
\]

代回：

\[
\int x^2\cos x\,dx
=x^2\sin x+2x\cos x-2\sin x+C.
\]`,
                    [
                      N("重复分部", "每做一次，多项式次数减少 1。")
                    ]
                  ),
                  S(
                    "检查最终原函数",
                    "核对",
                    T`\frac d{dx}(x^2\sin x+2x\cos x-2\sin x)=x^2\cos x`,
                    T`逐项求导：

\[
\begin{aligned}
&2x\sin x+x^2\cos x\\
&\quad+2\cos x-2x\sin x-2\cos x\\
&=x^2\cos x.
\end{aligned}
\]

所以原函数正确。`,
                    [
                      N("求导检查", "不定积分的结果必须通过求导恢复 integrand。")
                    ]
                  ),
                  S(
                    "为什么多项式项会终止",
                    "概念",
                    T`x^m\mapsto mx^{m-1}\mapsto\cdots\mapsto0`,
                    T`每次分部都让多项式因子降一次；\(x^m\) 在 \(m+1\) 次求导后归零。指数函数和正余弦在积分下循环但保持同类，因而重复分部会在有限步后终止。`,
                    [
                      N("终止条件", "多项式次数有限，所以重复求导会到零。")
                    ]
                  )
                ],
                T`u=x 的剩余积分更简单；∫x²cos x=x²sin x+2x cos x−2sin x+C，求导验证正确；多项式的有限次数保证重复分部会终止。`
              ),
              E(
                "10.16",
                "Improper 积分中的分部与换元",
                "Techniques inside improper limits",
                "计算 + 收敛性",
                T`In each part, begin with proper truncated integrals and justify every limiting boundary term.

1. Evaluate \(\int_0^\infty xe^{-x}dx\).
2. Determine whether \(\int_0^1x\log x\,dx\) converges, and find its value.
3. Evaluate \(\int_0^\infty2xe^{-x^2}dx\) by substitution on \([0,R]\) and a limit.`,
                "先在有限截断区间上使用普通积分技巧，再把边界项单独取极限。",
                [
                  S(
                    "截断后分部积分",
                    "计算",
                    T`\int_0^Rxe^{-x}dx=1-(R+1)e^{-R}\to1`,
                    T`在 \([0,R]\) 上，

\[
\int_0^Rxe^{-x}dx=[-(x+1)e^{-x}]_0^R
=1-(R+1)e^{-R}.
\]

因为 \((R+1)e^{-R}\to0\)，所以原 improper integral 收敛且值为 1。`,
                    [
                      N("截断极限", "先保证 R 有限、积分为真积分。")
                    ]
                  ),
                  S(
                    "处理 x→0 的对数奇点",
                    "计算",
                    T`\int_0^1x\log x\,dx=-\frac14`,
                    T`在 \([\varepsilon,1]\) 上分部积分：

\[
\int_\varepsilon^1x\log x\,dx
=\left[\frac{x^2}{2}\log x-\frac{x^2}{4}\right]_\varepsilon^1.
\]

右边为

\[
-\frac14-\frac{\varepsilon^2}{2}\log\varepsilon
+\frac{\varepsilon^2}{4}.
\]

且 \(\varepsilon^2\log\varepsilon\to0\) 当 \(\varepsilon\to0^+\)。所以极限为 \(-1/4\)，积分收敛。`,
                    [
                      N("对数奇点", "x log x 在 0⁺ 为 0·(−∞)，用极限判断，不能直接代入。")
                    ]
                  ),
                  S(
                    "指数平方换元",
                    "计算",
                    T`\int_0^\infty2xe^{-x^2}dx=1`,
                    T`在 \([0,R]\) 上令 \(u=x^2\)，\(du=2xdx\)：

\[
\int_0^R2xe^{-x^2}dx
=\int_0^{R^2}e^{-u}du
=1-e^{-R^2}.
\]

令 \(R\to\infty\)，得到 1。`,
                    [
                      N("换元后取极限", "先换元得到显式截断值，再取 R→∞。")
                    ]
                  )
                ],
                T`三个 improper 积分分别为 1、−1/4 和 1。`
              )
            ]
          },
          {
            id: "kp-10-4",
            section: "10.4",
            titleZh: "有理函数与部分分式",
            titleEn: "Rational functions and partial fractions",
            summaryZh: "有理函数先做多项式除法，再按因式的重数和不可约二次项写完整部分分式模板。",
            lessonHref: "../week4/Week4学习站.html#concept-partial-fractions",
            exercises: [
              E(
                "10.24",
                "部分分式与有理原函数",
                "Partial fractions and rational primitives",
                "计算",
                T`In each part, state the domain, perform division if necessary, verify the decomposition by recombination, and check the primitive by differentiation.

1. Find \(\int dx/((x+1)(x+2))\) by determining both coefficients.
2. Find \(\int(x+1)/(x-1)^2dx\), using a template with both powers of \(x-1\).
3. Find \(\int(x^2+1)/(x+4)dx\) by polynomial division.
4. Find \(\int(2x+3)/(x^2+2x+2)dx\), separating a derivative factor from an arctangent term.
5. Write the full template for \((x^2+1)/((x-1)^2(x^2+4)^2)\), without calculating coefficients or primitives.`,
                "先按分母结构写正确模板，再比较系数或做除法；最后核对 log、负幂和 arctan 三种基本原函数。",
                [
                  S(
                    "两个不同线性因子",
                    "计算",
                    T`\frac1{(x+1)(x+2)}
=\frac1{x+1}-\frac1{x+2}`,
                    T`设

\[
\frac1{(x+1)(x+2)}
=\frac A{x+1}+\frac B{x+2}.
\]

相乘得 \(1=A(x+2)+B(x+1)\)，所以 \(A=1,B=-1\)。定义域为 \(x\ne-1,-2\)。

积分：

\[
\int\frac{dx}{(x+1)(x+2)}
=\log|x+1|-\log|x+2|+C.
\]`,
                    [
                      N("不同线性因式", "每个一次因式对应一个常数分子。", "模板")
                    ]
                  ),
                  S(
                    "重根模板",
                    "计算",
                    T`\frac{x+1}{(x-1)^2}
=\frac1{x-1}+\frac2{(x-1)^2}`,
                    T`因为分母是 \((x-1)^2\)，模板必须包含两个幂次：

\[
\frac{x+1}{(x-1)^2}
=\frac A{x-1}+\frac B{(x-1)^2}.
\]

相乘得 \(x+1=A(x-1)+B\)，故 \(A=1,B=2\)。定义域 \(x\ne1\)。

积分：

\[
\int\frac{x+1}{(x-1)^2}dx
=\log|x-1|-\frac2{x-1}+C.
\]`,
                    [
                      N("重根", "分母含 (x−r)ᵐ 时，要列出 m 个从 1 到 m 次幂的项。", "模板")
                    ]
                  ),
                  S(
                    "多项式除法与导数因子",
                    "计算",
                    T`\frac{x^2+1}{x+4}=x-4+\frac{17}{x+4}`,
                    T`做除法：

\[
x^2+1=(x+4)(x-4)+17.
\]

所以在 \(x\ne-4\) 上，

\[
\frac{x^2+1}{x+4}=x-4+\frac{17}{x+4}.
\]

积分得到

\[
\frac{x^2}{2}-4x+17\log|x+4|+C.
\]

另一个分式可写为

\[
\frac{2x+3}{x^2+2x+2}
=\frac{2x+2}{x^2+2x+2}
+\frac1{(x+1)^2+1}.
\]

因此积分为

\[
\log(x^2+2x+2)+\arctan(x+1)+C.
\]

其中二次式恒正，log 不需要绝对值。`,
                    [
                      N("先除法", "分子次数不小于分母次数时，先化成分式加真分式。"),
                      N("导数因子", "把分子拆成分母导数 + 常数，分别得到 log 与 arctan。", "方法")
                    ]
                  ),
                  S(
                    "完整部分分式模板",
                    "模板",
                    T`\frac{x^2+1}{(x-1)^2(x^2+4)^2}
=\frac A{x-1}+\frac B{(x-1)^2}
+\frac{Cx+D}{x^2+4}
+\frac{Ex+F}{(x^2+4)^2}`,
                    T`分母包含重一次因式 \((x-1)^2\) 和重不可约二次因式 \((x^2+4)^2\)。因此完整模板为

\[
\frac A{x-1}+\frac B{(x-1)^2}
+\frac{Cx+D}{x^2+4}
+\frac{Ex+F}{(x^2+4)^2}.
\]

每个不可约二次因式的分子都需要一次式，每个出现过的幂次都要保留，不能只写最高次幂。`,
                    [
                      N("不可约二次", "x²+4 在实数上没有线性因子，所以用线性分子 Cx+D。", "模板")
                    ]
                  )
                ],
                T`主要原函数为 ln|x+1|−ln|x+2|+C、ln|x−1|−2/(x−1)+C、x²/2−4x+17ln|x+4|+C、ln(x²+2x+2)+arctan(x+1)+C；第五问给出了含重一次和重二次因式的完整模板。`
              ),
              E(
                "10.25",
                "定义域、极点与可去点",
                "Domains, poles and removable points",
                "分析 + 计算",
                T`1. Explain why \(\log|x-1|\) being a primitive on either side of 1 does not give a convergent integral of \(1/(x-1)\) over \([0,2]\). Calculate the two limits.
2. Let \(f(x)=(x^2-1)/(x-1)\) on its original domain \(\mathbb R\setminus\{1\}\). Simplify the rule and find primitives on \((-\infty,1)\) and \((1,\infty)\). Explain why simplification does not define \(f(1)\).
3. Define \(\tilde f(x)=f(x)\) for \(x\ne1\), \(\tilde f(1)=2\). Prove continuity and evaluate its proper integral over \([0,2]\). Compare with the two one-sided improper integrals of the original \(f\).
4. Give one rational example with a convergent integral on a closed interval and one with a divergent improper integral. Explain Theorem 10.22's role.`,
                "有理原函数在极点两侧存在，不代表跨极点的 improper 积分自动存在；可去点还能做连续延拓。",
                [
                  S(
                    "跨极点积分失败",
                    "计算",
                    T`\int_0^{1-\varepsilon}\frac{dx}{x-1}\to-\infty,\qquad
\int_{1+\varepsilon}^2\frac{dx}{x-1}\to+\infty`,
                    T`在 1 左侧：

\[
\int_0^{1-\varepsilon}\frac{dx}{x-1}
=[\log|x-1|]_0^{1-\varepsilon}
=\log\varepsilon\to-\infty.
\]

在 1 右侧：

\[
\int_{1+\varepsilon}^2\frac{dx}{x-1}
=[\log|x-1|]_{1+\varepsilon}^2
=-\log\varepsilon\to+\infty.
\]

两侧积分都必须独立收敛，而这里都发散；因此原积分在 \([0,2]\) 上不存在。`,
                    [
                      N("内部奇点", "在奇点处拆成两个独立 improper 积分，各自都必须收敛。", "边界")
                    ]
                  ),
                  S(
                    "可去点的原定义域",
                    "概念",
                    T`f(x)=x+1\quad(x\ne1)`,
                    T`当 \(x\ne1\) 时，

\[
\frac{x^2-1}{x-1}=x+1.
\]

在 \((-\infty,1)\) 上原函数可取

\[
\frac{x^2}{2}+x+C_1,
\]

在 \((1,\infty)\) 上可取

\[
\frac{x^2}{2}+x+C_2.
\]

两侧的常数不必相同。原函数 \(f\) 在 1 没有定义，化简不能凭空把 1 加回定义域。`,
                    [
                      N("自然定义域", "化简表达式不会恢复被原始分母排除的点。", "定义")
                    ]
                  ),
                  S(
                    "连续延拓与真积分",
                    "证明 + 计算",
                    T`\tilde f(x)=x+1,\qquad\int_0^2\tilde f(x)dx=4`,
                    T`定义

\[
\tilde f(x)=
\begin{cases}
x+1,&x\ne1,\\
2,&x=1.
\end{cases}
\]

这正是 \(x+1\)，它在 1 连续。于是

\[
\int_0^2(x+1)dx
=\left[\frac{x^2}{2}+x\right]_0^2=4.
\]

对原来的 \(f\) 按两段 proper 积分取极限：

\[
\int_0^{1-\varepsilon}f(x)dx+\int_{1+\varepsilon}^2f(x)dx
\to 4.
\]

两个单侧积分都收敛，数值与连续延拓后的真积分相同；区别在于原函数在 1 原本没有定义，而延拓显式补上了 \(f(1)=2\)。`,
                    [
                      N("可去间断", "若极限存在，可补充一个点值使函数连续。", "概念")
                    ]
                  ),
                  S(
                    "有理函数原函数与收敛性",
                    "例子",
                    T`\int_0^1\frac{dx}{1+x^2}=\frac\pi4,\qquad
\int_0^2\frac{dx}{(x-1)^2}\text{ diverges}`,
                    T`\(1/(1+x^2)\) 在 \([0,1]\) 上没有极点，连续，因此积分收敛：

\[
\int_0^1\frac{dx}{1+x^2}=\frac\pi4.
\]

另一方面，\((x-1)^{-2}\) 在 1 有极点，且某一侧截断积分发散：

\[
\int_{1+\varepsilon}^2\frac{dx}{(x-1)^2}
=\frac1\varepsilon-1\to+\infty.
\]

Theorem 10.22 只保证原始分母不为零的每个开区间上存在初等原函数，不保证跨极点的 improper integral 收敛。`,
                    [
                      N("定理范围", "Theorem 10.22 是原函数存在性，不是 improper 收敛性。", "边界")
                    ]
                  )
                ],
                T`1/(x−1) 跨 1 的两侧积分分别发散；原 f 化简为 x+1 但定义域仍缺 1；原 f 的两个单侧积分都收敛且总和为 4，连续延拓后的真积分也为 4；Theorem 10.22 只保证各无极点区间上存在初等原函数。`
              )
            ]
          }
        ]
      },
      {
        id: "chapter-11",
        number: 11,
        titleZh: "三角与双曲积分",
        titleEn: "Trigonometric and Hyperbolic Integrals",
        knowledgePoints: [
          {
            id: "kp-11-1",
            section: "11.1",
            titleZh: "三角幂、乘积与换元策略",
            titleEn: "Trigonometric powers, products and substitutions",
            summaryZh: "乘积先用积化和差或和差化积；偶次幂用降幂，奇次幂保留一个因子给 \(du\)。",
            lessonHref: "../week4/Week4学习站.html#concept-trig-powers-products",
            exercises: [
              E(
                "11.5",
                "三角幂与乘积",
                "Trigonometric powers and products",
                "计算",
                T`Explain your choice of substitution or identity before each calculation.

1. Find \(\int\sin3x\cos2x\,dx\).
2. Evaluate \(\int_0^{\pi/2}\sin^2x\,dx\) and \(\int_0^{\pi/2}\cos^2x\,dx\).
3. Find \(\int\tan x\sec^2x\,dx\) and \(\int\tan^3x\sec^2x\,dx\).
4. Find \(\int\sin^2(2x)dx\).
5. Use \(\sin2x\cos x=(\sin3x+\sin x)/2\) to integrate.
6. Find \(\int\cos^4x\,dx\) by applying the power-reduction formula twice.
7. Show \((\sec x)'=\sec x\tan x\) and find \(\int\sec x\,dx\).`,
                "先判断是“不同频率乘积”还是“同函数幂”，分别选择积化和差、降幂或 u 换元。",
                [
                  S(
                    "不同频率乘积与平方降幂",
                    "计算",
                    T`\int\sin3x\cos2x\,dx
=-\frac1{10}\cos5x-\frac12\cos x+C`,
                    T`使用

\[
\sin3x\cos2x
=\frac12(\sin5x+\sin x).
\]

因此

\[
\int\sin3x\cos2x\,dx
=-\frac1{10}\cos5x-\frac12\cos x+C.
\]

平方项使用

\[
\sin^2x=\frac{1-\cos2x}{2},\qquad
\cos^2x=\frac{1+\cos2x}{2}.
\]

在每个长度为 \(\pi/2\) 的区间上，两个积分都为 \(\pi/4\)。`,
                    [
                      N("积化和差", "sin A cos B=[sin(A+B)+sin(A−B)]/2。", "公式"),
                      N("降幂", "sin²x=(1−cos2x)/2，cos²x=(1+cos2x)/2。", "公式")
                    ]
                  ),
                  S(
                    "tan 与 sec² 的链式配对",
                    "计算",
                    T`\int\tan x\sec^2x\,dx=\frac12\tan^2x+C`,
                    T`因为

\[
(\tan x)'=\sec^2x,
\]

可直接令 \(u=\tan x\)：

\[
\int u\,du=\frac12\tan^2x+C.
\]

同理，令 \(u=\tan x\)：

\[
\int\tan^3x\sec^2x\,dx
=\int u^3du
=\frac14\tan^4x+C.
\]

公式只在 \(\cos x\ne0\) 的区间上适用。`,
                    [
                      N("sec² 因子", "sec²x dx 是 tan x 的微分。", "方法")
                    ]
                  ),
                  S(
                    "倍角降幂与积化和差",
                    "计算",
                    T`\int\sin^2(2x)dx=\frac x2-\frac{\sin4x}{8}+C`,
                    T`把 \(2x\) 代入降幂式：

\[
\sin^2(2x)=\frac{1-\cos4x}{2}.
\]

所以

\[
\int\sin^2(2x)dx
=\frac x2-\frac{\sin4x}{8}+C.
\]

对 \(\sin2x\cos x\)，使用题中恒等式：

\[
\int\frac{\sin3x+\sin x}{2}dx
=-\frac{\cos3x}{6}-\frac{\cos x}{2}+C.
\]`,
                    [
                      N("角度同步", "sin²(2x) 的降幂会产生 cos(4x)，角度是原来两倍。")
                    ]
                  ),
                  S(
                    "cos⁴ 的两次降幂",
                    "计算",
                    T`\int\cos^4x\,dx
=\frac{3x}{8}+\frac{\sin2x}{4}+\frac{\sin4x}{32}+C`,
                    T`\[
\cos^4x=(\cos^2x)^2
=\frac14(1+2\cos2x+\cos^22x).
\]

再对 \(\cos^22x\) 降幂：

\[
\cos^22x=\frac{1+\cos4x}{2}.
\]

合并得到

\[
\cos^4x=\frac38+\frac12\cos2x+\frac18\cos4x.
\]

逐项积分：

\[
\frac{3x}{8}+\frac{\sin2x}{4}+\frac{\sin4x}{32}+C.
\]`,
                    [
                      N("偶次幂", "偶次幂通常用多次降幂，逐步降低频率。")
                    ]
                  ),
                  S(
                    "sec 的导数与积分技巧",
                    "计算",
                    T`\int\sec x\,dx=\log|\sec x+\tan x|+C`,
                    T`由 \(d/dx\cos x=-\sin x\) 与商法则：

\[
(\sec x)'
=\left(\frac1{\cos x}\right)'
=\frac{\sin x}{\cos^2x}
=\sec x\tan x.
\]

将 integrand 乘以

\[
\frac{\sec x+\tan x}{\sec x+\tan x},
\]

其分子恰是分母的导数，因此

\[
\int\sec x\,dx
=\log|\sec x+\tan x|+C.
\]

该式在每个 \(\cos x\ne0\) 的连续区间上成立。`,
                    [
                      N("技巧因子", "乘 1 的技巧用于把 integrand 变成 u′/u。"),
                      N("适用区间", "sec 与 tan 在 cos x≠0 的区间上连续。", "边界")
                    ]
                  )
                ],
                T`主要结果为 −cos5x/10−cosx/2+C；两个平方积分为 π/4；tan 积分为 tan²x/2+C 和 tan⁴x/4+C；sin²2x 与 cos⁴x 的结果分别是 x/2−sin4x/8+C、3x/8+sin2x/4+sin4x/32+C；∫secx=ln|secx+tanx|+C。`
              )
            ]
          },
          {
            id: "kp-11-2",
            section: "11.2",
            titleZh: "三角换元与分支",
            titleEn: "Trigonometric substitution and branch choice",
            summaryZh: "三角换元必须选定使根号为正、余弦不变号的分支；端点奇异要另作 improper 处理。",
            lessonHref: "../week4/Week4学习站.html#concept-trig-substitution-branches",
            exercises: [
              E(
                "11.8",
                "根式积分与分支选择",
                "Radicals and branches",
                "计算 + 概念",
                T`1. Recover \(\int dx/\sqrt{1-x^2}\) using \(x=\sin t\). State the branch and explain each use of positivity.
2. Find \(\int\sqrt{1-x^2}dx\) by the same substitution and power reduction. Check by differentiation.
3. Evaluate \(\int_0^{1/2}dx/\sqrt{1-x^2}\) using transformed bounds.
4. Explain why \(\sqrt{\cos^2t}=\cos t\) fails when cosine is negative. Explain separately why \(x=1\) requires an improper limit for the reciprocal radical.`,
                "选择 \(t\in[-\pi/2,\pi/2]\) 保证 cos t≥0，根号可无损打开；端点 x=1 仍是真积分的奇点。",
                [
                  S(
                    "倒根式的标准换元",
                    "计算",
                    T`\int\frac{dx}{\sqrt{1-x^2}}=\arcsin x+C`,
                    T`令

\[
x=\sin t,\qquad t\in\left[-\frac\pi2,\frac\pi2\right],\quad dx=\cos t\,dt.
\]

在该分支上 \(\cos t\ge0\)，故

\[
\sqrt{1-x^2}=\sqrt{\cos^2t}=\cos t.
\]

积分为

\[
\int\frac{\cos t\,dt}{\cos t}=t+C
=\arcsin x+C.
\]

严格来说 \(x=\pm1\) 时原 integrand 在端点奇异，内部积分式在 \((-1,1)\) 上使用。`,
                    [
                      N("主值分支", "arcsin 的主值范围是 [−π/2,π/2]，在此区间 cos t≥0。", "定义")
                    ]
                  ),
                  S(
                    "根式积分的降幂",
                    "计算",
                    T`\int\sqrt{1-x^2}dx
=\frac12\arcsin x+\frac12x\sqrt{1-x^2}+C`,
                    T`同样令 \(x=\sin t\)，\(dx=\cos tdt\)：

\[
\int\sqrt{1-x^2}dx
=\int\cos^2t\,dt
=\frac t2+\frac{\sin2t}{4}+C.
\]

而

\[
\sin2t=2\sin t\cos t=2x\sqrt{1-x^2}.
\]

故结果为

\[
\frac12\arcsin x+\frac12x\sqrt{1-x^2}+C.
\]

求导可核对：其中 arctan/arcsin 项与乘积项的导数相消，恢复到 \(\sqrt{1-x^2}\)。`,
                    [
                      N("回代", "用 sin2t=2sin t cos t 把三角结果写回 x。")
                    ]
                  ),
                  S(
                    "变换端点求定积分",
                    "计算",
                    T`\int_0^{1/2}\frac{dx}{\sqrt{1-x^2}}=\frac\pi6`,
                    T`\(x=0\) 对应 \(t=0\)，\(x=1/2\) 对应 \(t=\pi/6\)。于是

\[
\int_0^{1/2}\frac{dx}{\sqrt{1-x^2}}
=\int_0^{\pi/6}dt
=\frac\pi6.
\]`,
                    [
                      N("端点同步", "三角换元后使用 t 的上下界，避免回代。")
                    ]
                  ),
                  S(
                    "两个边界陷阱",
                    "边界",
                    T`\sqrt{\cos^2t}=|\cos t|`,
                    T`平方根永远非负，因此一般有

\[
\sqrt{\cos^2t}=|\cos t|.
\]

若某个分支上 \(\cos t<0\)，把根号写成 \(\cos t\) 会得到一个负数，错误。选主值分支正是为了避免此问题。

另外，\(1/\sqrt{1-x^2}\) 在 \(x\to1^-\) 时无界。即使 \(\arcsin x\) 有有限的极限 \(\pi/2\)，正式定义仍应写

\[
\lim_{b\to1^-}\int_0^b\frac{dx}{\sqrt{1-x^2}},
\]

而不能在真积分符号里直接把 1 当成普通端点。`,
                    [
                      N("根号非负", "√(u²)=|u|，除非已知 u≥0。", "易错点")
                    ]
                  )
                ],
                T`∫dx/√(1−x²)=arcsinx+C；∫√(1−x²)=arcsinx/2+x√(1−x²)/2+C；0 到 1/2 为 π/6；必须使用 cos≥0 的主分支，x=1 需作端点 improper limit。`
              )
            ]
          },
          {
            id: "kp-11-3",
            section: "11.3",
            titleZh: "双曲函数与对数原函数",
            titleEn: "Hyperbolic functions and a logarithmic primitive",
            summaryZh: "双曲函数由指数定义，满足 \(\cosh^2x-\sinh^2x=1\)；其导数形成自然的配对。",
            lessonHref: "../week4/Week4学习站.html#concept-hyperbolic-integrals",
            exercises: [
              E(
                "11.11",
                "双曲定义、导数与积分",
                "Hyperbolic definitions and integrals",
                "证明 + 计算",
                T`1. Use exponential definitions to prove \(\cosh^2x-\sinh^2x=1\) and \(\cosh x>0\).
2. Derive the derivatives of \(\sinh,\cosh,\tanh\).
3. Find primitives of \(\cosh x\), \(\sinh x\), \(1/\cosh^2x\), and evaluate \(\int_0^1\cosh x\,dx\).
4. Find \(\int dx/\sqrt{1+x^2}\) using \(x=\sinh t\), justifying positivity of the logarithm's argument.
5. Evaluate \(\int_0^1dx/\sqrt{1+x^2}\), checking continuity.`,
                "双曲函数的指数定义直接给出恒等式和导数；根式换元后使用 cosh t 恒正。",
                [
                  S(
                    "从指数定义证明恒等式",
                    "证明",
                    T`\cosh^2x-\sinh^2x=1,\qquad\cosh x=\frac{e^x+e^{-x}}2>0`,
                    T`定义

\[
\cosh x=\frac{e^x+e^{-x}}2,\qquad
\sinh x=\frac{e^x-e^{-x}}2.
\]

于是

\[
\cosh^2x-\sinh^2x
=\left(\frac{e^x+e^{-x}}2\right)^2
-\left(\frac{e^x-e^{-x}}2\right)^2
=1.
\]

因为 \(e^x>0\) 且 \(e^{-x}>0\)，和的一半严格为正，所以 \(\cosh x>0\)。`,
                    [
                      N("双曲定义", "cosh x=(eˣ+e⁻ˣ)/2，sinh x=(eˣ−e⁻ˣ)/2。", "定义")
                    ]
                  ),
                  S(
                    "三个导数",
                    "计算",
                    T`(\sinh x)'=\cosh x,\quad(\cosh x)'=\sinh x,\quad(\tanh x)'=\sech^2x`,
                    T`由指数定义直接求导：

\[
(\sinh x)'=\cosh x,\qquad
(\cosh x)'=\sinh x.
\]

对

\[
\tanh x=\frac{\sinh x}{\cosh x}
\]

用商法则：

\[
(\tanh x)'
=\frac{\cosh^2x-\sinh^2x}{\cosh^2x}
=\frac1{\cosh^2x}
=\sech^2x.
\]`,
                    [
                      N("商法则", "tanh 的导数是 sech²x。")
                    ]
                  ),
                  S(
                    "原函数与定积分",
                    "计算",
                    T`\int\cosh x=\sinh x+C,\quad\int\sinh x=\cosh x+C,\quad\int\sech^2x=\tanh x+C`,
                    T`由导数表直接反推：

\[
\int\cosh x\,dx=\sinh x+C,\qquad
\int\sinh x\,dx=\cosh x+C,
\]

以及

\[
\int\frac{dx}{\cosh^2x}=\tanh x+C.
\]

因此

\[
\int_0^1\cosh x\,dx=\sinh1.
\]`,
                    [
                      N("原函数配对", "双曲函数求导与积分保持 sinh、cosh 互换。")
                    ]
                  ),
                  S(
                    "双曲换元与 arsinh",
                    "计算",
                    T`\int\frac{dx}{\sqrt{1+x^2}}
=\log(x+\sqrt{1+x^2})+C`,
                    T`令

\[
x=\sinh t,\qquad dx=\cosh tdt.
\]

因为对所有 t 有 \(\cosh t>0\)，

\[
\sqrt{1+x^2}=\sqrt{1+\sinh^2t}
=\sqrt{\cosh^2t}=\cosh t.
\]

于是积分变为 \(t+C=\operatorname{arsinh}x+C\)。又

\[
\operatorname{arsinh}x=\log(x+\sqrt{1+x^2}).
\]

对任意实数 x，\(x+\sqrt{1+x^2}>0\)，因此对数参数始终为正。

\(\sqrt{1+x^2}\) 连续，在 \([0,1]\) 上可正常使用原函数，所以

\[
\int_0^1\frac{dx}{\sqrt{1+x^2}}
=\operatorname{arsinh}1=\log(1+\sqrt2).
\]`,
                    [
                      N("arsinh", "arsinhx=ln(x+√(1+x²))，参数恒正。", "公式")
                    ]
                  )
                ],
                T`cosh²−sinh²=1；导数为 sinh′=cosh、cosh′=sinh、tanh′=sech²；相应原函数为 sinh、cosh、tanh；∫dx/√(1+x²)=ln(x+√(1+x²))+C，0 到 1 为 ln(1+√2)。`
              )
            ]
          },
          {
            id: "kp-11-4",
            section: "11.4",
            titleZh: "奇偶性与定积分对称",
            titleEn: "Parity and symmetry of definite integrals",
            summaryZh: "对称区间上偶函数面积加倍、奇函数抵消；前提是函数可积并且积分区间确实对称。",
            lessonHref: "../week4/Week4学习站.html#concept-integral-symmetry",
            exercises: [
              E(
                "11.15",
                "奇偶性、对称与失效前提",
                "Parity, symmetry and hypotheses",
                "判断 + 计算",
                T`1. On \(\mathbb R\), classify \(x^2,x^3,\cos x,\sin x,\cosh x,\sinh x,e^x,x^3+x^2\) as even, odd or neither.
2. Simplify and evaluate \(\int_{-2}^2(x^3+x^2)dx\) using parity.
3. Simplify \(\int_{-1}^1\cosh x\,dx\) and evaluate.
4. Diagnose: “Since \(1/x\) is odd, its integral from \(-1\) to \(1\) is zero.”
5. Explain why evenness alone does not permit \(\int_{-1}^2f=2\int_0^2f\). Give a continuous even counterexample.`,
                "先验证奇偶性，再验证区间对称和可积性；三个前提少一个就不能机械套公式。",
                [
                  S(
                    "分类奇偶函数",
                    "判断",
                    T`\begin{array}{c|c}
\text{even}&x^2,\cos x,\cosh x\\
\text{odd}&x^3,\sin x,\sinh x\\
\text{neither}&e^x,x^3+x^2
\end{array}`,
                    T`偶函数满足 \(g(-x)=g(x)\)，奇函数满足 \(g(-x)=-g(x)\)。

\(x^2,\cos x,\cosh x\) 为偶函数；\(x^3,\sin x,\sinh x\) 为奇函数。

\(e^{-x}=1/e^x\) 既不是 \(e^x\) 也不是 \(-e^x\)。对 \(x^3+x^2\)，其中奇偶部分混合，通常也不满足任一关系。`,
                    [
                      N("奇偶定义", "偶函数关于 y 轴对称，奇函数关于原点对称。", "定义")
                    ]
                  ),
                  S(
                    "用奇偶性拆分对称积分",
                    "计算",
                    T`\int_{-2}^2(x^3+x^2)dx=\frac{16}{3}`,
                    T`区间 \([-2,2]\) 对称。\(x^3\) 是奇函数，贡献为 0；\(x^2\) 是偶函数，贡献加倍：

\[
\int_{-2}^2x^3dx=0,
\]

\[
\int_{-2}^2x^2dx
=2\int_0^2x^2dx
=2\left[\frac{x^3}{3}\right]_0^2
=\frac{16}{3}.
\]

故总和为 \(16/3\)。`,
                    [
                      N("对称积分", "∫₋ₐᵃ 奇=0，∫₋ₐᵃ 偶=2∫₀ᵃ。", "定理")
                    ]
                  ),
                  S(
                    "双曲余弦的对称积分",
                    "计算",
                    T`\int_{-1}^1\cosh x\,dx=2\sinh1`,
                    T`\(\cosh x\) 是偶函数，所以

\[
\int_{-1}^1\cosh x\,dx
=2\int_0^1\cosh x\,dx
=2\sinh1.
\]`,
                    [
                      N("cosh 原函数", "∫cosh x dx=sinh x。")
                    ]
                  ),
                  S(
                    "奇函数公式也需要可积",
                    "反例",
                    T`\int_0^1\frac{dx}{x}=+\infty,\qquad
\int_{-1}^0\frac{dx}{x}=-\infty`,
                    T`\(1/x\) 确实是奇函数，但它在 \([−1,1]\) 内有无界奇点，不能直接使用对称区间公式。必须拆成两个 improper 积分：

\[
\lim_{\varepsilon\to0^+}\int_\varepsilon^1\frac{dx}{x}
=\infty,
\]

\[
\lim_{\varepsilon\to0^+}\int_{-1}^{-\varepsilon}\frac{dx}{x}
=-\infty.
\]

两侧分别发散，所以原 improper integral 不存在。失败的前提是可积性。`,
                    [
                      N("奇偶公式前提", "Proposition 11.13 要求 f 在 [−a,a] 上 Riemann 可积。", "边界")
                    ]
                  ),
                  S(
                    "区间不对称时不能加倍",
                    "反例",
                    T`f(x)=1,\qquad
\int_{-1}^2f=3,\quad 2\int_0^2f=4`,
                    T`对称积分公式依赖于区间从 \(-a\) 到 \(a\)。区间 \([-1,2]\) 不对称，即使 f 是偶函数，也不能把左半段映射为整个 \([0,2]\) 的两倍。

取连续偶函数 \(f(x)=1\)：

\[
\int_{-1}^2 1\,dx=3,
\]

但

\[
2\int_0^2 1\,dx=4.
\]

两者不同。`,
                    [
                      N("区间对称", "偶函数加倍公式要求积分区间两端互为相反数。", "易错点")
                    ]
                  )
                ],
                T`奇偶分类完成；∫₋₂²(x³+x²)=16/3；∫₋₁¹cosh=2sinh1；1/x 因跨 0 不可积，奇对称不能给出 0；[-1,2] 不对称，偶函数不能直接加倍。`
              )
            ]
          }
        ]
      },
      {
        id: "chapter-12",
        number: 12,
        titleZh: "积分的其他主题",
        titleEn: "Other Topics in Integration",
        knowledgePoints: [
          {
            id: "kp-12-1",
            section: "12.1",
            titleZh: "存在性、初等表达与数值积分",
            titleEn: "Existence, elementary expressions and numerical evaluation",
            summaryZh: "连续函数一定 Riemann 可积；但“积分存在”不等于“存在初等原函数”。",
            lessonHref: "../week4/Week4学习站.html#concept-integration-existence-numerical",
            exercises: [
              E(
                "12.3",
                "可积、非初等原函数与数值近似",
                "Existence and the form of an answer",
                "概念 + 计算",
                T`1. Assume that \(e^{-x^2}\) has no elementary antiderivative. Explain why its integral on \([0,1]\) exists, and construct an antiderivative using FTC Part I.
2. Compare \(e^{-x^2}\) on \([0,1]\) with \(1_{\mathbb Q}\). Which is Riemann integrable? Justify using Darboux sums.
3. Write a right-endpoint Riemann sum with eight equal intervals for \(\int_0^1e^{-x^2}dx\). Explain the distinction between a finite approximation and a limit.`,
                "“连续 → 可积”先保证积分存在；“没有初等原函数”只影响答案写成哪种形式，不否定积分。",
                [
                  S(
                    "用 FTC 构造非初等原函数",
                    "证明",
                    T`F(x)=\int_0^xe^{-t^2}dt,\qquad F'(x)=e^{-x^2}`,
                    T`\(e^{-x^2}\) 在 \([0,1]\) 上连续，因此 Riemann 可积，定积分存在。

定义

\[
F(x)=\int_0^xe^{-t^2}dt.
\]

FTC I 给出

\[
F'(x)=e^{-x^2}.
\]

所以 F 就是一个原函数，只是它通常不能写成有限个初等函数。`,
                    [
                      N("积分存在", "连续函数在闭有界区间上可积。", "定理"),
                      N("初等原函数", "原函数存在与能用初等函数写出是两件事。", "边界")
                    ]
                  ),
                  S(
                    "与 Dirichlet 函数对比",
                    "比较",
                    T`e^{-x^2}\text{ integrable};\qquad1_{\mathbb Q}\text{ not integrable}`,
                    T`\(e^{-x^2}\) 连续，所以可积。

对 \(1_{\mathbb Q}\)，任意分割的每个非退化子区间都同时含有有理数和无理数，故每段

\[
m_i=0,\qquad M_i=1.
\]

因此任意分割都有

\[
L=0,\qquad U=1,
\]

上下和间隙不能任意小，故不可积。`,
                    [
                      N("连续性充分条件", "连续性足以保证可积；但非连续函数也可能可积。", "定理")
                    ]
                  ),
                  S(
                    "写八区间右端点和",
                    "计算",
                    T`R_8=\frac18\sum_{k=1}^8e^{-(k/8)^2}`,
                    T`八等分时

\[
\Delta x=\frac18,\qquad
x_k=\frac k8.
\]

右端点 Riemann 和为

\[
R_8=\frac18\sum_{k=1}^8
e^{-(k/8)^2}.
\]

这是一个有限近似。真正的 Riemann 积分定义为分割宽度趋于 0 时的极限，而不是某个固定的 \(R_8\)。`,
                    [
                      N("Riemann 和", "固定 n 只给近似；积分是网格粗细趋于 0 的极限。", "定义")
                    ]
                  )
                ],
                T`e^{-x²} 连续故可积，可由 F(x)=∫₀ˣe^{-t²}dt 给出原函数；1_Q 不可积；八区间右端点和为 1/8 Σₖ₌₁⁸e^{−(k/8)²}，它不是积分极限本身。`
              )
            ]
          },
          {
            id: "kp-12-2",
            section: "12.2",
            titleZh: "方法选择与组合",
            titleEn: "Selecting and combining integration techniques",
            summaryZh: "先看结构：链式因子、部分分式、三角恒等式或非初等原函数；选定后用求导检查。",
            lessonHref: "../week4/Week4学习站.html#concept-method-selection-combination",
            exercises: [
              E(
                "12.6",
                "计算前先选方法",
                "Choosing a method before calculating",
                "计算 + 判断",
                T`In each part, give one sentence explaining a useful first step and state the relevant domain. Then calculate a primitive where an elementary one is available.

1. \(2xe^{x^2}\).
2. \(x\log x\) on \(x>0\).
3. \(1/((x+1)(x+2))\).
4. \(\sin^2x\).
5. For \(\int_0^1e^{-x^2}dx\), explain why retaining exact integral notation or giving a specified numerical approximation is appropriate.
6. For \(\int_0^2dx/(x-1)\), identify the convergence question that must be addressed first.`,
                "每题先写“结构 → 方法”，避免一上来就机械套公式。",
                [
                  S(
                    "换元与分部",
                    "计算",
                    T`\int2xe^{x^2}dx=e^{x^2}+C`,
                    T`第一题看到 \(2x\) 是 \(x^2\) 的导数，令 \(u=x^2\)：

\[
\int e^u du=e^{x^2}+C.
\]

第二题 \(x\log x\) 用分部积分，取 \(u=\log x\)、\(v'=x\)，定义域 \(x>0\)：

\[
\int x\log x\,dx
=\frac{x^2}{2}\log x-\int\frac{x}{2}dx
=\frac{x^2}{2}\log x-\frac{x^2}{4}+C.
\]`,
                    [
                      N("先看结构", "链式配对用换元；对数乘多项式常用分部。", "方法")
                    ]
                  ),
                  S(
                    "部分分式与降幂",
                    "计算",
                    T`\int\frac{dx}{(x+1)(x+2)}
=\log\left|\frac{x+1}{x+2}\right|+C`,
                    T`第三个 integrand 是不同线性因式的有理函数，使用部分分式：

\[
\frac1{(x+1)(x+2)}
=\frac1{x+1}-\frac1{x+2}.
\]

定义域 \(x\ne-1,-2\)，积分得

\[
\log|x+1|-\log|x+2|+C.
\]

第四题用平方降幂：

\[
\int\sin^2x\,dx
=\int\frac{1-\cos2x}{2}dx
=\frac x2-\frac{\sin2x}{4}+C.
\]`,
                    [
                      N("部分分式", "不同线性因式用两个常数分子。", "模板")
                    ]
                  ),
                  S(
                    "非初等原函数与 improper 入口",
                    "概念",
                    T`\int_0^1e^{-x^2}dx\text{ exists but lacks elementary closed form}`,
                    T`第五题的 integrand 连续，定积分存在；按题设它没有初等原函数。因此保留积分记号或明确给出数值近似是合理答案，不能为了“写出漂亮公式”而编造一个不存在的初等原函数。

第六题 \(1/(x-1)\) 在 1 有内部奇点。必须先把它拆成

\[
\int_0^1+\int_1^2
\]

并分别检查两个 improper 极限。只找到一个两侧原函数 \(\log|x-1|\) 不足以说明积分存在。`,
                    [
                      N("答案形式", "精确积分、特殊函数形式和数值近似都可以是有效数学答案。", "边界"),
                      N("内部奇点", "跨奇点积分必须分段并分别收敛。", "易错点")
                    ]
                  )
                ],
                T`四个基础原函数分别是 e^{x²}+C、x²lnx/2−x²/4+C、ln|x+1|−ln|x+2|+C、x/2−sin2x/4+C；Gaussian 积分应保留积分记号或明确数值；1/(x−1) 必须先检查跨 1 的两侧 improper 收敛。`
              ),
              E(
                "12.7",
                "组合多种积分方法",
                "Combining methods",
                "计算 + 检查",
                T`1. Evaluate \(\int_0^1x\log(1+x^2)dx\). Separate the bounds transformation, constant factor, parts calculation and endpoint evaluation.
2. Evaluate \(\int_{-1}^1(x^3+1/(1+x^2))dx\). State where continuity and symmetry are used.
3. Evaluate \(\int_0^1x/(1+x^2)dx\) by substitution.
4. For each of the first two parts, explain what a derivative check verifies and what further checks are needed for the definite value.`,
                "先换元把对数内层简化，再做分部；定积分结束后还要核对边界项。",
                [
                  S(
                    "换元后再分部",
                    "计算",
                    T`\int_0^1x\log(1+x^2)dx=\log2-\frac12`,
                    T`令 \(u=1+x^2\)，\(du=2xdx\)。端点 \(0\to1\)、\(1\to2\)，所以

\[
\int_0^1x\log(1+x^2)dx
=\frac12\int_1^2\log u\,du.
\]

分部积分：

\[
\int\log u\,du=u\log u-u+C.
\]

代入端点：

\[
\frac12[(2\log2-2)-(0-1)]
=\log2-\frac12.
\]`,
                    [
                      N("边界换元", "x 的 0,1 变成 u 的 1,2，常数 1/2 来自 du=2xdx。")
                    ]
                  ),
                  S(
                    "对称奇函数与 arctan",
                    "计算",
                    T`\int_{-1}^1\left(x^3+\frac1{1+x^2}\right)dx=\frac\pi2`,
                    T`\(x^3\) 连续且为奇函数，在对称区间上的积分为 0。\(1/(1+x^2)\) 也连续，其原函数为 \(\arctan x\)：

\[
\int_{-1}^1\frac{dx}{1+x^2}
=[\arctan x]_{-1}^1
=\frac\pi4-\left(-\frac\pi4\right)
=\frac\pi2.
\]`,
                    [
                      N("两个前提", "使用对称公式必须验证可积；使用 FTC II 必须验证连续性。")
                    ]
                  ),
                  S(
                    "简单换元",
                    "计算",
                    T`\int_0^1\frac{x}{1+x^2}dx=\frac12\log2`,
                    T`令 \(u=1+x^2\)，\(du=2xdx\)，端点仍为 1,2：

\[
\int_0^1\frac{x}{1+x^2}dx
=\frac12\int_1^2\frac{du}{u}
=\frac12\log2.
\]

部分分式并不直接适用于 \(1+x^2\)，因为它在实数上是不可约二次式；换元更直接。`,
                    [
                      N("方法优先级", "出现分母导数因子时先换元，不必强拆部分分式。")
                    ]
                  ),
                  S(
                    "求导检查与定积分检查",
                    "核对",
                    T`F'=f\text{ checks the primitive; }F(b)-F(a)\text{ checks the definite value}`,
                    T`求导检查只能验证不定积分原函数是否正确。对于定积分，还必须检查：

- 上下界代入是否反向；
- 有向积分的符号；
- 端点是否超过原函数定义域；
- 积分过程中是否跨越了奇点。

因此求导检查不能替代端点计算和定义域检查。`,
                    [
                      N("检查层级", "原函数正确不代表定积分边界代入必然正确。", "易错点")
                    ]
                  )
                ],
                T`前三个积分分别为 ln2−1/2、π/2、ln2/2；求导只检查原函数，定积分还要核对端点、方向、定义域与奇点。`
              )
            ]
          },
          {
            id: "kp-12-3",
            section: "12.3",
            titleZh: "全课程连接",
            titleEn: "Connections with limits, differentiation and integral foundations",
            summaryZh: "极限、导数、Taylor、可积性与 improper 收敛是同一套条件意识的多个侧面：每条结论都附有前提。",
            lessonHref: "../week4/Week4学习站.html#concept-course-consolidation",
            exercises: [
              E(
                "12.9",
                "全课程综合复习",
                "Course consolidation",
                "综合",
                T`1. Prove from the epsilon–N definition that \(1/n\to0\), with \(n\in\mathbb Z_+\).
2. Explain the difference between \(\lim_{x\to0}(e^x-1)/x\) and a value assigned to that quotient at zero.
3. Check the primitives \((x-1)e^x\) and \(\log|x|\) by differentiation.
4. Give a continuous function not differentiable at zero.
5. For \(f(x)=e^x\), construct \(T_3[f;0]\) and state a Lagrange remainder bound at \(0.1\).
6. Compare \(e^{-x^2}\), \(1_{\mathbb Q}\), and \(1/(x-1)\) across 1 on \([0,2]\).
7. State both parts of FTC with continuity hypotheses and use the sign function to explain the role of a jump.
8. Compare \(\int_0^1x^{-1/2}dx\) with \(\int_1^\infty x^{-1/2}dx\).
9. A proposed solution differentiates a primitive of \(1/(x-1)\) correctly and concludes the integral over \([0,2]\) exists. Explain the missing step and actual outcome.`,
                "最后用九个检查点把“量词、导数、Taylor 误差、可积性、FTC 和 improper 收敛”串起来。",
                [
                  S(
                    "ε–N 与零点导数",
                    "证明",
                    T`\left|\frac1n-0\right|=\frac1n`,
                    T`给定 \(\varepsilon>0\)，取整数 \(N>1/\varepsilon\)。当 \(n\ge N\) 时，

\[
\left|\frac1n-0\right|=\frac1n<\varepsilon.
\]

所以 \(1/n\to0\)。起始索引只影响有限多项，不影响趋近性；关键是 \(N\) 可以依赖先给定的 ε。

对第二问，\((e^x-1)/x\) 在 0 处没有定义，但

\[
\frac{e^x-e^0}{x-0}\to(e^x)'_{x=0}=1.
\]

极限存在和点值存在是两件事。`,
                    [
                      N("量词顺序", "∀ε∃N∀n≥N；N 可以依赖 ε。", "定义"),
                      N("导数定义", "lim h→0 [f(a+h)−f(a)]/h=f′(a)。", "定义")
                    ]
                  ),
                  S(
                    "检查原函数与连续反例",
                    "核对",
                    T`((x-1)e^x)'=xe^x,\qquad(\log|x|)'=\frac1x\quad(x\ne0)`,
                    T`\[
((x-1)e^x)'=e^x+(x-1)e^x=xe^x.
\]

所以 \((x-1)e^x\) 是 \(xe^x\) 的原函数，定义域为 \(\mathbb R\)。

对 \(\log|x|\)，在 x>0 和 x<0 分别求导都为 \(1/x\)，定义域为 \(x\ne0\)。

\(|x|\) 在 0 连续但

\[
\frac{|x|-0}{x}
\]

的左右极限分别为 \(-1\) 与 \(1\)，故不可导。这说明“可导 ⇒ 连续”不能反过来。`,
                    [
                      N("原函数定义域", "分段定义域上的原函数要在每个连通区间分别检查。", "边界")
                    ]
                  ),
                  S(
                    "Taylor 与三类积分对象",
                    "综合",
                    T`T_3[e^x;0]=1+x+\frac{x^2}{2}+\frac{x^3}{6}`,
                    T`\(e^x\) 在 0 的 Taylor 多项式为

\[
T_3=1+x+\frac{x^2}2+\frac{x^3}6.
\]

在 \(x=0.1\) 时，

\[
|R_3|=\frac{e^\xi}{24}(0.1)^4,\qquad0<\xi<0.1.
\]

若用 \(e^\xi<3\)，得到小于 \(1.25\times10^{-5}\) 的误差界。

三类对象要分清：

- \(e^{-x^2}\) 连续，Riemann 可积，但没有初等原函数；
- \(1_{\mathbb Q}\) 有界，却因上下和始终为 0、1 而不可积；
- \(1/(x-1)\) 在各侧有初等原函数，但跨 1 的 improper 积分发散。`,
                    [
                      N("三种“存在”", "积分存在、初等原函数存在、improper 收敛是三个不同问题。", "易错点")
                    ]
                  ),
                  S(
                    "FTC 条件与符号函数",
                    "定理",
                    T`\operatorname{sgn}(x)=
\begin{cases}-1,&x<0,\\0,&x=0,\\1,&x>0.\end{cases}`,
                    T`FTC I：若 f 连续，则 \(F(x)=\int_a^xf(t)dt\) 满足 \(F'=f\)。

FTC II：若 f 连续且 \(F'=f\)，则 \(\int_a^bf=F(b)-F(a)\)。

符号函数在 0 有跳跃。它可积，积累函数

\[
\int_0^x\operatorname{sgn}(t)dt=|x|
\]

在 0 不可导。这不是 FTC 反例，因为 integrand 在 0 不连续，连续性前提不满足。`,
                    [
                      N("跳跃间断", "连续性是 FTC I 在断点直接恢复 f 值的安全前提。", "边界")
                    ]
                  ),
                  S(
                    "两个 p 积分与跨极点",
                    "比较",
                    T`\int_0^1x^{-1/2}dx=2,\qquad\int_1^\infty x^{-1/2}dx=\infty`,
                    T`在 0 端：

\[
\int_0^1x^{-1/2}dx
=\lim_{\varepsilon\to0^+}[2\sqrt x]_\varepsilon^1=2.
\]

在无穷端：

\[
\int_1^Rx^{-1/2}dx=2(\sqrt R-1)\to\infty.
\]

对于 \(\int_0^21/(x-1)dx\)，\(\log|x-1|\) 确实是各侧的原函数，但必须检查两侧极限：

\[
\int_0^1\frac{dx}{x-1}=-\infty,\qquad
\int_1^2\frac{dx}{x-1}=+\infty.
\]

因此跨极点积分发散；“找到原函数”不是最后一步，还必须验证 improper 极限。`,
                    [
                      N("最后检查", "原函数 → 分段 → 取极限，三步缺一不可。", "方法")
                    ]
                  )
                ],
                T`九个检查点完成：1/n→0；去点极限可与点值不同；两个原函数求导正确；|x| 连续不可导；T₃eˣ 与误差界成立；三类积分对象须区分；FTC 依赖连续性；x⁻¹ᐟ² 在 0 端收敛、无穷端发散；1/(x−1) 跨 1 发散。`
              )
            ]
          }
        ]
      }
    ]
  });
})();
