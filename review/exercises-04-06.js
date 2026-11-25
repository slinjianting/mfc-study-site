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
        id: "chapter-4",
        number: 4,
        titleZh: "导数与求导法则",
        titleEn: "The Derivative and Differentiation Rules",
        knowledgePoints: [
          {
            id: "kp-4-5",
            section: "4.5",
            titleZh: "链式法则与混合求导",
            titleEn: "The chain rule and mixed differentiation",
            summaryZh: "复杂函数按“最外层运算”逐层拆开；先辨认和差、乘积、商与复合，再选择相应法则。",
            lessonHref: "../week2/Week2学习站.html#concept-chain-rule",
            exercises: [
              E(
                "4.29",
                "求导法则与顺序选择",
                "Differentiation and method selection",
                "计算",
                T`Identify the order in which the differentiation rules should be applied, then differentiate the following functions.

\[
\begin{aligned}
f_1(x)&=x^7,&f_2(x)&=x^{-3},&f_3(x)&=e^x,\\
f_4(x)&=\log x,&f_5(x)&=\sin x,&f_6(x)&=\tan x,\\
f_7(x)&=4x^5-3x^{-2}+7,&f_8(x)&=x^2e^x,&f_9(x)&=\frac{x^2+1}{x-1},\\
f_{10}(x)&=(3x+1)^5,&f_{11}(x)&=e^{-2x},&f_{12}(x)&=\log(1+x^2),\\
f_{13}(x)&=(x^2+1)\sin x,&f_{14}(x)&=\frac{e^x}{1+x^2},&f_{15}(x)&=\sin(x^2),\\
f_{16}(x)&=(1+x^2)^4e^{-x},&f_{17}(x)&=\frac{\log x}{x^2},&f_{18}(x)&=\cos(\sin(2x)),\\
f_{19}(x)&=x^2e^{\sin(3x)},&f_{20}(x)&=\frac{\log(1+\sin^2(x^2))}{1+x^3}.
\end{aligned}
\]`,
                "先把 20 个函数按基本法则、乘积/商、链式法则和混合结构分组；外层是什么，就先考虑什么法则。",
                [
                  S(
                    "基本函数与幂法则",
                    "计算",
                    T`\begin{aligned}
f_1'&=7x^6,&f_2'&=-3x^{-4},&f_3'&=e^x,\\
f_4'&=\frac1x,&f_5'&=\cos x,&f_6'&=\sec^2x,\\
f_7'&=20x^4+6x^{-3}.&&&
\end{aligned}`,
                    T`前六题直接使用基本导数；\(f_7\) 逐项求导：

\[
f_7'=20x^4+6x^{-3}.
\]

其中 \(f_4\) 的定义域要求 \(x>0\)，\(f_6\) 要求 \(\cos x\ne0\)。`,
                    [
                      N("幂法则", "(xᵖ)′=pxᵖ⁻¹（在相应定义域内）。", "定理"),
                      N("基本导数", "(eˣ)′=eˣ，(ln x)′=1/x，(sin x)′=cos x，(tan x)′=sec²x。", "公式")
                    ]
                  ),
                  S(
                    "乘积、商与第一层复合",
                    "计算",
                    T`\begin{aligned}
f_8'&=e^x(x^2+2x),&
f_9'&=\frac{x^2-2x-1}{(x-1)^2},\\
f_{10}'&=15(3x+1)^4,&
f_{11}'&=-2e^{-2x},&
f_{12}'&=\frac{2x}{1+x^2}.
\end{aligned}`,
                    T`\(f_8\) 用乘积法则：

\[
f_8'=2xe^x+x^2e^x=e^x(x^2+2x).
\]

\(f_9\) 用商法则：

\[
f_9'=\frac{2x(x-1)-(x^2+1)}{(x-1)^2}
=\frac{x^2-2x-1}{(x-1)^2}.
\]

\(f_{10}\) 到 \(f_{12}\) 的外层分别是幂、指数、对数，再乘以内层导数：

\[
\begin{aligned}
f_{10}'&=5(3x+1)^4\cdot3=15(3x+1)^4,\\
f_{11}'&=e^{-2x}(-2),\\
f_{12}'&=\frac1{1+x^2}\cdot2x.
\end{aligned}
\]`,
                    [
                      N("乘积法则", "(uv)′=u′v+uv′。", "定理"),
                      N("商法则", "(u/v)′=(u′v−uv′)/v²。", "定理"),
                      N("链式法则", "(f(g(x)))′=f′(g(x))g′(x)。", "定理")
                    ]
                  ),
                  S(
                    "乘积与链式的组合",
                    "计算",
                    T`\begin{aligned}
f_{13}'&=2x\sin x+(x^2+1)\cos x,\\
f_{14}'&=\frac{e^x(x-1)^2}{(1+x^2)^2},\\
f_{15}'&=2x\cos(x^2),\\
f_{16}'&=e^{-x}(1+x^2)^3(8x-1-x^2),\\
f_{17}'&=\frac{1-2\log x}{x^3}.
\end{aligned}`,
                    T`\(f_{13}\) 是乘积：

\[
f_{13}'=2x\sin x+(x^2+1)\cos x.
\]

\(f_{14}\) 用商法则：

\[
f_{14}'
=\frac{e^x(1+x^2)-e^x2x}{(1+x^2)^2}
=\frac{e^x(x-1)^2}{(1+x^2)^2}.
\]

\(f_{15}\) 用链式法则：

\[
f_{15}'=2x\cos(x^2).
\]

\(f_{16}\) 先用乘积法则，再对两个因子用链式法则：

\[
\begin{aligned}
f_{16}'
&=8x(1+x^2)^3e^{-x}-e^{-x}(1+x^2)^4\\
&=e^{-x}(1+x^2)^3(8x-1-x^2).
\end{aligned}
\]

\(f_{17}\) 用商法则：

\[
f_{17}'
=\frac{(1/x)x^2-(\log x)2x}{x^4}
=\frac{1-2\log x}{x^3}.
\]`,
                    [
                      N("因式整理", "连续求导后把相同因式提出来，可读性和可检验性更好。"),
                      N("定义域", "对数要求 x>0；分母不能为 0。")
                    ]
                  ),
                  S(
                    "多层链式与混合结构",
                    "计算",
                    T`\begin{aligned}
f_{18}'&=-2\cos(2x)\sin(\sin(2x)),\\
f_{19}'&=xe^{\sin(3x)}(2+3x\cos(3x)),\\
f_{20}'&=\frac{\frac{2x\sin(2x^2)}{1+\sin^2(x^2)}(1+x^3)-3x^2\log(1+\sin^2(x^2))}{(1+x^3)^2}.
\end{aligned}`,
                    T`\(f_{18}\) 从外到内是余弦、正弦、线性：

\[
f_{18}'=-\sin(\sin(2x))\cdot\cos(2x)\cdot2.
\]

\(f_{19}\) 先用乘积法则：

\[
\begin{aligned}
f_{19}'
&=2xe^{\sin(3x)}
+x^2e^{\sin(3x)}\cos(3x)\cdot3\\
&=xe^{\sin(3x)}(2+3x\cos(3x)).
\end{aligned}
\]

\(f_{20}\) 最外层是商。记

\[
A(x)=\log(1+\sin^2(x^2)).
\]

则

\[
A'(x)=\frac{2\sin(x^2)\cos(x^2)\cdot2x}{1+\sin^2(x^2)}
=\frac{2x\sin(2x^2)}{1+\sin^2(x^2)}.
\]

因此

\[
f_{20}'=
\frac{A'(x)(1+x^3)-3x^2A(x)}{(1+x^3)^2}.
\]

这里依次用了商法则、对数链式、正弦平方链式和内层 \(x^2\) 的导数。`,
                    [
                      N("由外向内", "复合函数求导时，最外层先动，再逐层乘以内层导数。", "方法"),
                      N("二倍角", "2sin θcos θ=sin(2θ)，可把结果压缩。", "公式")
                    ]
                  )
                ],
                T`20 个导数已全部求出；关键是先判断外层是基本函数、乘积、商还是复合，再按由外向内或逐项方式应用法则。`
              ),
              E(
                "4.30",
                "从定义推导幂函数导数",
                "Deriving the power rules",
                "证明",
                T`In parts 1 and 2, begin with the definition of the derivative. Do not use the product, quotient or chain rule, or assume the general power rule.

1. Let \(n\) be a positive integer. Prove that the derivative of \(x^n\) at any \(a\in\mathbb R\) is \(na^{n-1}\).
2. Let \(n\) be a positive integer. Prove that the derivative of \(x^{-n}\) at any \(a\ne0\) is \(-na^{-n-1}\).
3. Let \(r\in\mathbb R\setminus\{0\}\). Prove that the derivative of \(x^r\) at any \(a>0\) is \(ra^{r-1}\).`,
                "前两问完全回到差商；第三问利用正数定义域，把一般实指数改写成 exp(r log x)。",
                [
                  S(
                    "正整数幂：因式分解差商",
                    "证明",
                    T`\frac{(a+h)^n-a^n}{h}\to na^{n-1}`,
                    T`由差商定义，

\[
\frac{(a+h)^n-a^n}{h}.
\]

使用因式分解

\[
b^n-a^n=(b-a)(b^{n-1}+b^{n-2}a+\cdots+a^{n-1}),
\]

其中 \(b=a+h\)。于是

\[
\frac{(a+h)^n-a^n}{h}
=(a+h)^{n-1}+\cdots+a^{n-1}.
\]

共有 \(n\) 项，每一项在 \(h\to0\) 时都趋于 \(a^{n-1}\)，所以极限为 \(na^{n-1}\)。`,
                    [
                      N("差商定义", "f′(a)=lim h→0 [f(a+h)−f(a)]/h。", "定义"),
                      N("因式分解", "bⁿ−aⁿ=(b−a)(bⁿ⁻¹+...+aⁿ⁻¹)。", "公式")
                    ]
                  ),
                  S(
                    "负整数幂：通分后调用上一问",
                    "证明",
                    T`\frac{(a+h)^{-n}-a^{-n}}h
=-\frac{(a+h)^n-a^n}{h}\frac1{(a+h)^n a^n}`,
                    T`先通分：

\[
\frac{(a+h)^{-n}-a^{-n}}h
=\frac{a^n-(a+h)^n}{h(a+h)^na^n}.
\]

把负号提出：

\[
=-\frac{(a+h)^n-a^n}{h}
\cdot\frac1{(a+h)^na^n}.
\]

第一因子由正整数幂结果趋于 \(na^{n-1}\)；第二因子趋于 \(1/a^{2n}\)。因此

\[
f'(a)=-na^{n-1}a^{-2n}=-na^{-n-1}.
\]`,
                    [
                      N("负指数", "a⁻ⁿ=1/aⁿ；要求 a≠0。", "定义")
                    ]
                  ),
                  S(
                    "实数指数：指数与对数复合",
                    "证明",
                    T`x^r=\exp(r\log x)`,
                    T`因为 \(a>0\)，在 \(a\) 的邻域内 \(x>0\)。于是

\[
x^r=e^{r\log x}.
\]

用链式法则：

\[
\frac{d}{dx}x^r
=e^{r\log x}\cdot\frac{r}{x}
=x^r\frac{r}{x}
=rx^{r-1}.
\]

在 \(x=a\) 时即 \(ra^{r-1}\)。`,
                    [
                      N("实数幂", "xʳ=e^{r ln x} 需要 x>0。", "定义"),
                      N("指数导数", "(e^u)′=e^u u′，(ln x)′=1/x。", "公式")
                    ]
                  )
                ],
                T`正整数幂由差商和因式分解得到 naⁿ⁻¹；负整数幂经通分调用前问得到 −na⁻ⁿ⁻¹；xʳ=e^{r ln x} 的链式求导给出 rxʳ⁻¹。`
              ),
              E(
                "4.31",
                "链式法则证明中的可去问题",
                "Proving the chain rule",
                "证明",
                T`Let \(u:I\to J\) and \(v:J\to\mathbb R\), where \(I,J\) are open intervals. Suppose \(u\) is differentiable at \(a\in I\) and \(v\) is differentiable at \(b=u(a)\). We want to prove
\[
(v\circ u)'(a)=v'(u(a))u'(a).
\]
A proposed proof writes
\[
\frac{v(u(a+h))-v(u(a))}{h}
=
\frac{v(u(a+h))-v(u(a))}{u(a+h)-u(a)}
\frac{u(a+h)-u(a)}h.
\]

1. Explain why the right-hand side need not be defined when \(h\ne0\).
2. Define
\[
Q(y)=
\begin{cases}
\dfrac{v(y)-v(b)}{y-b},&y\ne b,\\
v'(b),&y=b.
\end{cases}
\]
Use \(Q\) to complete the proof.`,
                "直接拆分时，内层函数可能在不同 h 上取相同值，导致分母为 0；Q 把“差商”连续延拓到 b 点来修复。",
                [
                  S(
                    "指出分母可能为零",
                    "边界",
                    T`u(a+h)-u(a)=0\text{ is possible for }h\ne0`,
                    T`即使 \(h\ne0\)，完全可能出现

\[
u(a+h)=u(a).
\]

此时原拆分式第一个分式的分母为 \(0\)，表达式没有定义。题目只假设 \(u\) 可导，并没有假设 \(u\) 在局部单射，所以不能直接这样相除。`,
                    [
                      N("复合求导陷阱", "链式法则证明不能默认内层函数增量非零。", "易错点")
                    ]
                  ),
                  S(
                    "验证 Q 在 b 点连续",
                    "证明",
                    T`Q(y)=\frac{v(y)-v(b)}{y-b}\ (y\ne b),\qquad Q(b)=v'(b)`,
                    T`当 \(y\to b\) 且 \(y\ne b\) 时，

\[
Q(y)=\frac{v(y)-v(b)}{y-b}\to v'(b)
\]

正是 \(v\) 在 \(b\) 可导的定义。并且定义 \(Q(b)=v'(b)\)，所以 \(Q\) 在 \(b\) 连续。`,
                    [
                      N("差商延拓", "把可去点的函数值补成导数，可得到一个连续函数。", "方法")
                    ]
                  ),
                  S(
                    "用 Q 写恒等分解",
                    "证明",
                    T`v(u(a+h))-v(u(a))=Q(u(a+h))(u(a+h)-u(a))`,
                    T`若 \(u(a+h)\ne b\)，这是普通差商的移项；若 \(u(a+h)=b\)，两边都为 \(0\)，并且 \(Q(b)\) 已定义。因此等式对所有 h 成立。

两边除以 \(h\ne0\)：

\[
\frac{v(u(a+h))-v(u(a))}{h}
=Q(u(a+h))\frac{u(a+h)-u(a)}h.
\]`,
                    [
                      N("恒等改写", "Q 的定义消除了内层增量为零时的分母问题。")
                    ]
                  ),
                  S(
                    "取极限得到链式法则",
                    "结论",
                    T`Q(u(a+h))\to Q(b)=v'(b),\qquad \frac{u(a+h)-u(a)}h\to u'(a)`,
                    T`因为 \(u\) 在 \(a\) 连续，\(u(a+h)\to b\)。又因 \(Q\) 在 \(b\) 连续，

\[
Q(u(a+h))\to Q(b)=v'(b).
\]

第二个因子正是 \(u\) 的差商，趋于 \(u'(a)\)。由乘积极限，

\[
(v\circ u)'(a)=v'(b)u'(a)=v'(u(a))u'(a).
\]`,
                    [
                      N("连续复合", "内层 u(a+h)→u(a)，外层 Q 在 b 连续，因此 Q 的复合收敛到 Q(b)。")
                    ]
                  )
                ],
                T`直接拆分可能在 u(a+h)=u(a) 时除以零；用 Q 的连续延拓后，差商等于 Q(u(a+h)) 乘以内层差商，取极限即得链式法则。`
              ),
              E(
                "4.32",
                "振荡导数与不连续导数",
                "An oscillating derivative",
                "证明 + 计算",
                T`Define \(f:\mathbb R\to\mathbb R\) by
\[
f(x)=
\begin{cases}
x^2\sin(1/x),&x\ne0,\\
0,&x=0.
\end{cases}
\]

1. Use the definition of the derivative and the Squeeze Theorem to prove that \(f\) is differentiable at \(0\), and find \(f'(0)\).
2. Calculate \(f'(x)\) for \(x\ne0\).
3. Is \(f'\) continuous at \(0\)? Justify your answer.`,
                "在 0 点不能直接使用乘积和链式法则，必须回到差商；远离 0 后再使用法则。",
                [
                  S(
                    "零点差商被 |x| 压住",
                    "证明",
                    T`\frac{f(x)-f(0)}{x-0}=x\sin(1/x)\to0`,
                    T`在 \(x=0\) 使用定义：

\[
\frac{f(x)-f(0)}{x-0}
=\frac{x^2\sin(1/x)}x
=x\sin(1/x).
\]

由于

\[
-|x|\le x\sin(1/x)\le|x|,
\]

两侧趋于 0，所以差商趋于 0。因此 \(f\) 在 0 可导，且 \(f'(0)=0\)。`,
                    [
                      N("零点差商", "分段函数在接缝求导时，先写完整差商并代入点值。", "方法"),
                      N("夹逼", "−1≤sin(1/x)≤1，因此乘积被 |x| 控制。")
                    ]
                  ),
                  S(
                    "计算非零点的导数",
                    "计算",
                    T`f'(x)=2x\sin(1/x)-\cos(1/x)\quad(x\ne0)`,
                    T`在 \(x\ne0\) 时用乘积与链式法则：

\[
\begin{aligned}
f'(x)
&=2x\sin(1/x)+x^2\cos(1/x)\left(-\frac1{x^2}\right)\\
&=2x\sin(1/x)-\cos(1/x).
\end{aligned}
\]`,
                    [
                      N("链式法则", "d/dx sin(1/x)=cos(1/x)·(−1/x²)。", "定理")
                    ]
                  ),
                  S(
                    "检查导数在 0 的极限",
                    "结论",
                    T`f'(x)\not\to f'(0)=0`,
                    T`如果 \(f'\) 在 0 连续，就应有 \(f'(x)\to f'(0)=0\)。但

\[
f'(x)=2x\sin(1/x)-\cos(1/x).
\]

第一项趋于 0，第二项 \(\cos(1/x)\) 在 \([-1,1]\) 中无限振荡，没有极限。因此 \(f'\) 不连续于 0。这个例子说明“可导”不推出“导数连续”。`,
                    [
                      N("导数未必连续", "f 可导只保证 f′ 在每点存在，不保证 f′ 本身连续。", "边界")
                    ]
                  )
                ],
                T`f′(0)=0；x≠0 时 f′(x)=2x sin(1/x)−cos(1/x)。由于 cos(1/x) 无极限，f′ 在 0 不连续。`
              ),
              E(
                "4.33",
                "复合绝对值在零点可导",
                "Differentiating an absolute value",
                "证明 + 反例",
                T`Suppose \(f\) is defined on an open interval containing \(a\), is differentiable at \(a\), and satisfies \(f(a)=0\).

1. Prove that \(x\mapsto|f(x)|\) is differentiable at \(a\) if and only if \(f'(a)=0\). Find its derivative at \(a\) when it exists.
2. Apply the result to \(x\mapsto|x|\) and \(x\mapsto|x^2|\) at \(0\).
3. Explain why \(x\mapsto|x^2|\) is differentiable at \(0\) even though the outer absolute value is not differentiable at \(0\). Does this contradict the chain rule?`,
                "把 \(|f(x)|\) 的差商与 \(f\) 的差商联系起来；如果 f′≠0，左右符号最终会不同。",
                [
                  S(
                    "证明 f′=0 时绝对值可导",
                    "证明",
                    T`\left|\frac{|f(x)|}{x-a}\right|\le\left|\frac{f(x)}{x-a}\right|\to0`,
                    T`因为 \(f(a)=0\)，

\[
\frac{|f(x)|-|f(a)|}{x-a}
=\frac{|f(x)|}{x-a}.
\]

取绝对值：

\[
\left|\frac{|f(x)|}{x-a}\right|
=\left|\frac{f(x)-f(a)}{x-a}\right|.
\]

右边的极限为 \(|f'(a)|\)。若 \(f'(a)=0\)，则上式趋于 0，从而原差商也趋于 0。因此 \(x\mapsto|f(x)|\) 在 \(a\) 可导，导数为 0。`,
                    [
                      N("零处绝对值", "|0|=0；当 f(a)=0 时，差商只剩 |f(x)|/(x−a)。")
                    ]
                  ),
                  S(
                    "证明 f′≠0 时不可导",
                    "反证",
                    T`\text{right quotient}\to|f'(a)|,\qquad\text{left quotient}\to-|f'(a)|`,
                    T`若 \(f'(a)\ne0\)，则 \(f(x)\) 在 a 的左右两侧最终同号于 \(f'(a)(x-a)\)。

从右侧 \(x>a\) 靠近时，\(|f(x)|/(x-a)\to|f'(a)|\)；从左侧靠近时，由于分母为负且函数符号相反，商趋于 \(-|f'(a)|\)。左右差商不相等，因此不可导。

结合前一步，充要条件正是 \(f'(a)=0\)。`,
                    [
                      N("左右差商", "函数在一点可导要求左右导数都存在且相等。", "定义")
                    ]
                  ),
                  S(
                    "应用到 |x| 与 |x²|",
                    "计算",
                    T`(|x|)'(0)\text{ does not exist};\qquad(|x^2|)'(0)=0`,
                    T`对 \(f(x)=x\)，有 \(f(0)=0\)、\(f'(0)=1\ne0\)，故 \(|x|\) 在 0 不可导。

对 \(f(x)=x^2\)，有 \(f(0)=0\)、\(f'(0)=0\)，故 \(|x^2|\) 在 0 可导，且导数为 0。事实上 \(|x^2|=x^2\)，直接求导也得到 \(0\)。`,
                    [
                      N("先验条件", "应用结论前必须检查内层函数 f 在 a 的导数。")
                    ]
                  ),
                  S(
                    "解释为何不违反链式法则",
                    "概念",
                    T`g(0)=0,\quad g'(0)=0`,
                    T`链式法则要求外层函数在“内层输出点”可导。这里外层是 \(y\mapsto|y|\)，内层 \(g(x)=x^2\) 满足 \(g(0)=0\)，而外层在 0 不可导，所以链式法则的前提不满足，不能引用它来判断不可导。

真正发生的是：内层导数 \(g'(0)=0\) 把左右变化压平，使复合函数恰好可导。因此并不矛盾。`,
                    [
                      N("链式法则前提", "链式法则没有满足时，它既不能推出可导，也不能排除可导。", "边界")
                    ]
                  )
                ],
                T`当 f(a)=0 时，|f| 在 a 可导当且仅当 f′(a)=0；|x| 不可导，|x²| 可导且导数为 0。链式法则前提不满足，因此没有矛盾。`
              )
            ]
          }
        ]
      },
      {
        id: "chapter-5",
        number: 5,
        titleZh: "进阶求导技巧",
        titleEn: "Further Differentiation Techniques",
        knowledgePoints: [
          {
            id: "kp-5-2",
            section: "5.2",
            titleZh: "L’Hôpital 法则与不定式",
            titleEn: "L’Hôpital’s Rule and indeterminate forms",
            summaryZh: "使用 L’Hôpital 前必须先确认 \(0/0\) 或 \(\infty/\infty\) 等形式，并检查可导和分母条件；它不是函数恒等式。",
            lessonHref: "../week2/Week2学习站.html#concept-lhopital",
            exercises: [
              E(
                "5.16",
                "极限方法与 L’Hôpital",
                "L’Hôpital’s Rule",
                "计算 + 判断",
                T`For each limit, first record the form obtained by substitution. Then decide whether to use limit algebra, continuity, or L’Hôpital’s Rule.

\[
\begin{aligned}
&\lim_{x\to0}\frac{\sin x}{x},&
&\lim_{x\to0}\frac{\log(1+x)}x,&
&\lim_{x\to0}\frac{1-\cos x}{x^2},\\
&\lim_{x\to0}\frac{e^x-1-x}{x^2},&
&\lim_{x\to\infty}\frac{\log x}{x^2},&
&\lim_{x\to\infty}\frac{x^3}{e^x},\\
&\lim_{x\to2}\frac{x^2-4}{x-2},&
&\lim_{x\to2}\frac{x+1}{x-1},&
&\lim_{x\to0^+}x^2\log x,\\
&\lim_{x\to0^+}x^x,&
&\lim_{x\to\infty}\left(1+\frac1x\right)^x.
\end{aligned}
\]
In the first limit, explain why L’Hôpital’s Rule cannot prove the limit.`,
                "先标记代入形式：可直接代入的走连续性，可约分的走代数，只有真正的不定式才考虑 L’Hôpital。",
                [
                  S(
                    "零点附近的三个基本不定式",
                    "计算",
                    T`\frac{\sin x}{x}\to1,\quad \frac{\log(1+x)}x\to1,\quad \frac{1-\cos x}{x^2}\to\frac12`,
                    T`第一式正是 \(\sin x\) 在 0 的导数定义：

\[
\lim_{x\to0}\frac{\sin x-\sin0}{x-0}=\cos0=1.
\]

课程中导数公式的建立本身依赖这个极限，所以用“sin 的导数是 cos”再套 L’Hôpital 会形成循环论证。

第二式可用 L’Hôpital：

\[
\lim_{x\to0}\frac{\log(1+x)}x
=\lim_{x\to0}\frac{1/(1+x)}1=1.
\]

第三式两次后可化为

\[
\frac{1-\cos x}{x^2}
\sim\frac{x^2/2}{x^2}\to\frac12.
\]

用 L’Hôpital 计算为

\[
\lim\frac{\sin x}{2x}=\frac12.
\]`,
                    [
                      N("形式检查", "只有 0/0 或 ∞/∞ 才能考虑 L’Hôpital。", "前提"),
                      N("循环论证", "不能用一个极限的结论去证明这个极限本身。", "易错点")
                    ]
                  ),
                  S(
                    "三阶局部展开型极限",
                    "计算",
                    T`\frac{e^x-1-x}{x^2}\to\frac12`,
                    T`代入得到 \(0/0\)。一次求导：

\[
\frac{e^x-1}{2x},
\]

仍是 \(0/0\)。再求导：

\[
\frac{e^x}{2}\to\frac12.
\]

也可用 \(e^x=1+x+x^2/2+o(x^2)\)，直接看出主导项是 \(x^2/2\)。`,
                    [
                      N("重复 L’Hôpital", "每次求导后都要重新检查形式；分母趋于零时可能需要再做一次。")
                    ]
                  ),
                  S(
                    "无穷远处的增长比较",
                    "计算",
                    T`\frac{\log x}{x^2}\to0,\qquad\frac{x^3}{e^x}\to0`,
                    T`两者都是 \(\infty/\infty\)。第一次求导：

\[
\frac{\log x}{x^2}
\sim\frac{1/x}{2x}
=\frac1{2x^2}\to0.
\]

第二个反复求导：

\[
\frac{x^3}{e^x}
\longrightarrow
\frac{3x^2}{e^x}
\longrightarrow
\frac{6x}{e^x}
\longrightarrow
\frac6{e^x}\to0.
\]

这体现指数增长快于任意固定次数的幂。`,
                    [
                      N("增长层级", "e^x 比任意固定幂 xᵖ 增长更快。")
                    ]
                  ),
                  S(
                    "代数约分与连续性",
                    "计算",
                    T`\lim_{x\to2}\frac{x^2-4}{x-2}=4,\qquad\lim_{x\to2}\frac{x+1}{x-1}=3`,
                    T`第一个是 \(0/0\)，但可直接约分：

\[
\frac{x^2-4}{x-2}=x+2\quad(x\ne2),
\]

故极限为 \(4\)。这里不需要 L’Hôpital。

第二个直接代入得到

\[
\frac{2+1}{2-1}=3.
\]

分母不为 0，函数在 2 连续，直接代入即可。`,
                    [
                      N("先做代数", "能因式分解或约分时，通常比 L’Hôpital 更直接。"),
                      N("连续代入", "在连续点求极限就是求函数值。")
                    ]
                  ),
                  S(
                    "对数、幂指数与指数型极限",
                    "计算",
                    T`x^2\log x\to0,\qquad x^x\to1,\qquad\left(1+\frac1x\right)^x\to e`,
                    T`对 \(x^2\log x\)，\(x\to0^+\) 时为 \(0\cdot(-\infty)\)。写

\[
x^2\log x=\frac{\log x}{x^{-2}},
\]

应用 L’Hôpital 得

\[
\frac{1/x}{-2x^{-3}}=-\frac{x^2}{2}\to0.
\]

对 \(x^x\)，取对数：

\[
\log(x^x)=x\log x\to0,
\]

所以 \(x^x\to e^0=1\)。

对 \((1+1/x)^x\)，令

\[
L=\lim_{x\to\infty}x\log(1+1/x).
\]

令 \(u=1/x\)，则 \(L=\lim_{u\to0^+}\log(1+u)/u=1\)。因此原极限为 \(e^L=e\)。`,
                    [
                      N("幂指函数", "对 x^g(x) 取对数，把指数降为乘积。", "方法"),
                      N("换元", "x→∞ 与 u=1/x→0⁺ 可以互相转换。")
                    ]
                  )
                ],
                T`各极限依次为 1、1、1/2、1/2、0、0、4、3、0、1、e；其中 sin x/x 不能由 L’Hôpital 反向证明，因为 sin 的导数依赖该极限。`
              )
            ]
          },
          {
            id: "kp-5-4",
            section: "5.4",
            titleZh: "对数求导与变底指数",
            titleEn: "Logarithmic differentiation and variable exponents",
            summaryZh: "幂指函数同时含变量底数和变量指数，必须同时考虑“幂规则”和“指数规则”的贡献。",
            lessonHref: "../week2/Week2学习站.html#concept-logarithmic-differentiation",
            exercises: [
              E(
                "5.23",
                "对数求导与变底指数",
                "Logarithmic differentiation",
                "计算 + 判断",
                T`1. Differentiate \(2^x\), \(10^{3x}\), and \(\log_2x\), using \(\log_2x=\log x/\log2\).
2. Differentiate \(x^x\), \(x>0\), in two ways.
3. Use logarithmic differentiation to find \(dy/dx\) for
\[
y=\frac{(x^2+1)^{3x}}{(x+4)^2},\qquad x>0.
\]
4. Differentiate \((\sin x)^x\) on \(0<x<\pi\), and explain why the interval is needed.
5. Explain why neither \(x\cdot x^{x-1}\) nor \(x^x\log x\) is the derivative of \(x^x\).`,
                "变底数或变指数时，先把幂改写成 e 的指数，或先取对数，再使用链式法则。",
                [
                  S(
                    "固定底数和固定底的对数",
                    "计算",
                    T`(2^x)'=2^x\log2,\quad(10^{3x})'=3\cdot10^{3x}\log10,\quad(\log_2x)'=\frac1{x\log2}`,
                    T`写 \(2^x=e^{x\log2}\)，得到

\[
(2^x)'=2^x\log2.
\]

同理，

\[
(10^{3x})'=10^{3x}\cdot3\log10.
\]

最后，

\[
(\log_2x)'=\left(\frac{\log x}{\log2}\right)'
=\frac1{x\log2}.
\]`,
                    [
                      N("指数函数导数", "(aˣ)′=aˣ ln a。", "公式")
                    ]
                  ),
                  S(
                    "两种方法求 x^x",
                    "计算",
                    T`(x^x)'=x^x(\log x+1)`,
                    T`方法一，取对数：

\[
\log y=x\log x.
\]

两边求导：

\[
\frac{y'}y=\log x+1.
\]

所以 \(y'=x^x(\log x+1)\)。

方法二：

\[
x^x=e^{x\log x},
\]

直接求导得到

\[
e^{x\log x}(\log x+1).
\]`,
                    [
                      N("对数求导", "先取自然对数，再用链式法则 y′/y。", "方法")
                    ]
                  ),
                  S(
                    "带商式结构的对数求导",
                    "计算",
                    T`\frac{y'}y=3\log(x^2+1)+\frac{6x^2}{x^2+1}-\frac2{x+4}`,
                    T`取对数：

\[
\log y=3x\log(x^2+1)-2\log(x+4).
\]

逐项求导：

\[
\frac{y'}y
=3\log(x^2+1)+3x\frac{2x}{x^2+1}-\frac2{x+4}.
\]

因此

\[
y'=y\left(3\log(x^2+1)+\frac{6x^2}{x^2+1}-\frac2{x+4}\right).
\]`,
                    [
                      N("对数化简商", "取对数后商变差、幂变倍，适合多个因子相乘除的函数。")
                    ]
                  ),
                  S(
                    "正弦幂的定义域与导数",
                    "边界",
                    T`((\sin x)^x)'=(\sin x)^x(\log(\sin x)+x\cot x)`,
                    T`只有在 \(\sin x>0\) 时，才能把 \((\sin x)^x\) 安全地写成

\[
e^{x\log(\sin x)}.
\]

在区间 \(0<x<\pi\) 内确实有 \(\sin x>0\)。求导：

\[
\begin{aligned}
\left(e^{x\log(\sin x)}\right)'
&=(\sin x)^x\left(\log(\sin x)+x\frac{\cos x}{\sin x}\right)\\
&=(\sin x)^x(\log(\sin x)+x\cot x).
\end{aligned}
\]`,
                    [
                      N("实幂定义域", "任意实指数的幂指函数需要底数为正。", "边界")
                    ]
                  ),
                  S(
                    "解释两个不完整导数",
                    "概念",
                    T`\frac{d}{dx}x^x\ne x\,x^{x-1}+x^x\log x\text{ separately}`,
                    T`\(x\cdot x^{x-1}=x^x\) 只来自把指数看成常数时的幂规则；\(\log x\) 因子只来自把底数看成常数时的指数规则。

这里底数和指数都随 \(x\) 变化，必须取对数后同时产生两部分：

\[
x^x(\log x+1).
\]

因此题目中的两个表达式各自都遗漏了另一半贡献。`,
                    [
                      N("双重变化", "x^x 不是单变量幂函数，也不是固定底指数函数。", "易错点")
                    ]
                  )
                ],
                T`基本结果为 2ˣln2、3·10^{3x}ln10、1/(x ln2)；xˣ 的导数为 xˣ(ln x+1)；复杂商式与 (sin x)ˣ 均按取对数后求导。`
              )
            ]
          },
          {
            id: "kp-5-5",
            section: "5.5",
            titleZh: "参数曲线与切线",
            titleEn: "Elementary parameterised curves",
            summaryZh: "参数曲线斜率 \(dy/dx=(dy/dt)/(dx/dt)\) 只在 \(dx/dt\ne0\) 时使用；分母为零处要单独看切线的几何方向。",
            lessonHref: "../week2/Week2学习站.html#concept-parametric-derivative",
            exercises: [
              E(
                "5.28",
                "参数曲线的方向与垂直切线",
                "A parameterised curve",
                "计算 + 几何",
                T`Let
\[
x(t)=t^2+1,\qquad y(t)=t^3-3t.
\]

1. Find the points for \(t=-1,0,1\), and describe the direction of travel between them.
2. Calculate \(dx/dt\) and \(dy/dt\).
3. Find \(dy/dx\) where the quotient formula applies.
4. Find the tangent line at \(t=1\).
5. Explain why \(t=0\) requires separate consideration.
6. Sketch the curve for \(-2\le t\le2\), marking the points and travel direction.`,
                "分别计算坐标与参数导数；t=0 时 dx/dt=0，斜率公式失效，但几何上仍可能有竖直切线。",
                [
                  S(
                    "计算三个参数点",
                    "计算",
                    T`t=-1:(2,2),\quad t=0:(1,0),\quad t=1:(2,-2)`,
                    T`代入参数：

\[
\begin{aligned}
t=-1 &: (2,2),\\
t=0 &: (1,0),\\
t=1 &: (2,-2).
\end{aligned}
\]

随 \(t\) 从 \(-1\) 增至 \(0\)，点向左、向下移动；从 \(0\) 增至 \(1\)，点向右、向下移动。`,
                    [
                      N("参数方向", "参数增大时曲线上的运动方向由相邻参数点决定。")
                    ]
                  ),
                  S(
                    "参数导数与 dy/dx",
                    "计算",
                    T`x'=2t,\qquad y'=3t^2-3,\qquad \frac{dy}{dx}=\frac{3t^2-3}{2t}\quad(t\ne0)`,
                    T`\[
x'(t)=2t,\qquad y'(t)=3t^2-3.
\]

由链式关系

\[
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}
=\frac{3t^2-3}{2t},
\]

当 \(t\ne0\)。`,
                    [
                      N("参数曲线斜率", "dy/dx=(dy/dt)/(dx/dt)，要求 dx/dt≠0。", "公式")
                    ]
                  ),
                  S(
                    "t=1 的切线",
                    "计算",
                    T`y=-2`,
                    T`当 \(t=1\) 时，点为

\[
(x,y)=(2,-2).
\]

斜率为

\[
\left.\frac{dy}{dx}\right|_{t=1}
=\frac{3-3}{2}=0.
\]

切线是水平线

\[
y=-2.
\]`,
                    [
                      N("点斜式", "已知点和斜率后写切线方程。")
                    ]
                  ),
                  S(
                    "t=0 的竖直切线",
                    "边界",
                    T`x'(0)=0,\qquad y'(0)=-3\ne0`,
                    T`当 \(t=0\) 时，

\[
x'(0)=0,\quad y'(0)=-3.
\]

因此 \(dy/dx\) 的商式分母为 0，不能直接使用。几何上参数改变主要让 \(y\) 改变，切线竖直。曲线在 \((1,0)\) 处上下两支具有竖直切线。

\(t<0\) 与 \(t>0\) 时 \(x(t)=t^2+1\) 相同，却对应不同 \(y\)，这正解释了接缝处需要单独考察。`,
                    [
                      N("竖直切线", "dx/dt=0 且 dy/dt≠0 时，参数曲线通常有竖直切线。", "边界")
                    ]
                  ),
                  S(
                    "整段草图要点",
                    "几何",
                    T`-2\le t\le2`,
                    T`在 \(t=-2,2\) 时点都为 \((5,\pm2)\) 的对应位置；曲线关于 \(x\) 轴并不对称，因为

\[
y(-t)=-y(t).
\]

草图应包含：

- \(t=-1\) 的 \((2,2)\)；
- \(t=0\) 的 \((1,0)\) 与竖直切线；
- \(t=1\) 的 \((2,-2)\)；
- 用箭头标出从左上到中间、再到右下的运动方向。`,
                    [
                      N("奇对称", "x(−t)=x(t)，y(−t)=−y(t)，曲线关于 x 轴对称。", "概念")
                    ]
                  )
                ],
                T`点依次为 (2,2)、(1,0)、(2,−2)；dy/dx=(3t²−3)/(2t)（t≠0）；t=1 切线 y=−2；t=0 处公式失效但有竖直切线。`
              )
            ]
          }
        ]
      },
      {
        id: "chapter-6",
        number: 6,
        titleZh: "用导数分析函数",
        titleEn: "Using Derivatives to Analyse Functions",
        knowledgePoints: [
          {
            id: "kp-6-3",
            section: "6.3",
            titleZh: "完整曲线分析",
            titleEn: "A complete elementary curve analysis",
            summaryZh: "驻点来自 \(f'=0\)，极值类型由一阶导数变号或二阶导数符号判断；端行为用于画图。",
            lessonHref: "../week2/Week2学习站.html#concept-curve-analysis",
            exercises: [
              E(
                "6.14",
                "三次函数的驻点与曲线行为",
                "Stationary points and curve behaviour",
                "计算 + 分析",
                T`Let \(f(x)=x^3-3x^2-9x+5\).

1. Find all stationary points.
2. Construct a sign table for \(f'\), and state the intervals on which \(f\) is strictly increasing or decreasing.
3. Classify each stationary point using the first-derivative test.
4. Check the classifications using \(f''\).
5. Find the \(y\)-intercept and describe the end behaviour needed for a basic sketch.`,
                "先因式分解导数找驻点，再用一阶符号表判断升降与极值，最后用二阶导数核对。",
                [
                  S(
                    "求驻点",
                    "计算",
                    T`f'(x)=3(x+1)(x-3)`,
                    T`\[
f'(x)=3x^2-6x-9=3(x^2-2x-3)=3(x+1)(x-3).
\]

令 \(f'(x)=0\)，得到

\[
x=-1\quad\text{或}\quad x=3.
\]

对应的函数值为 \(f(-1)=10\)，\(f(3)=-22\)。`,
                    [
                      N("驻点", "f′(x)=0 的内点称为驻点。", "定义")
                    ]
                  ),
                  S(
                    "符号表与单调区间",
                    "分析",
                    T`x<-1:f'>0;\quad -1<x<3:f'<0;\quad x>3:f'>0`,
                    T`由因式 \((x+1)(x-3)\) 的符号：

- \(x<-1\) 时两个因式都为负，乘积为正；
- \(-1<x<3\) 时一负一正，乘积为负；
- \(x>3\) 时两个因子都为正。

所以 \(f\) 在 \((-\infty,-1)\) 和 \((3,\infty)\) 严格递增，在 \((-1,3)\) 严格递减。`,
                    [
                      N("一阶判别", "导数正对应严格递增，导数负对应严格递减。")
                    ]
                  ),
                  S(
                    "用变号判断极值",
                    "结论",
                    T`(-1,10)\text{ local max},\qquad(3,-22)\text{ local min}`,
                    T`在 \(x=-1\) 左侧导数为正、右侧为负，由增转减，所以是局部最大值，值为 \(10\)。

在 \(x=3\) 左侧导数为负、右侧为正，由减转增，所以是局部最小值，值为 \(-22\)。`,
                    [
                      N("变号测试", "导数由 + 到 − 是局部最大，由 − 到 + 是局部最小。", "方法")
                    ]
                  ),
                  S(
                    "二阶导数核对与草图",
                    "核对",
                    T`f''(-1)=-12<0,\qquad f''(3)=12>0`,
                    T`\[
f''(x)=6x-6.
\]

所以 \(f''(-1)=-12<0\)，确认局部最大；\(f''(3)=12>0\)，确认局部最小。

又 \(f(0)=5\)，曲线与 y 轴交于 \((0,5)\)。当 \(x\to-\infty\) 时 \(f(x)\to-\infty\)；当 \(x\to\infty\) 时 \(f(x)\to\infty\)。画图时应先标出两个极值点和 y 截距，再按三段升降连接。`,
                    [
                      N("二阶判别", "f′(a)=0 且 f″(a)<0 时局部最大；f″(a)>0 时局部最小。")
                    ]
                  )
                ],
                T`驻点为 x=−1 和 x=3；增区间为 (−∞,−1)、(3,∞)，减区间为 (−1,3)；极大值 f(−1)=10，极小值 f(3)=−22；y 截距为 5。`
              )
            ]
          },
          {
            id: "kp-6-4",
            section: "6.4",
            titleZh: "选择求导与分析工具",
            titleEn: "Choosing a differentiation method",
            summaryZh: "先判断问题在问导数、隐函数斜率、参数斜率、极值还是极限，再决定使用哪种工具。",
            lessonHref: "../week2/Week2学习站.html#concept-method-selection",
            exercises: [
              E(
                "6.20",
                "求导与函数分析综合",
                "Differentiation consolidation",
                "综合",
                T`For each part, state the method before performing the calculation.

1. Use first principles to find the derivative of \(f(x)=x^3\) at an arbitrary point \(a\).
2. Differentiate \(g(x)=e^{-x}\log(1+x^2)\), stating its domain.
3. Let \(f(x)=x^3+x\). Explain why \(f^{-1}\) is continuous, and calculate \((f^{-1})'(2)\) without finding a formula.
4. The relation \(x^2+xy+y^2=7\) locally determines \(y\) near \((1,2)\). Find \(dy/dx\) and the tangent line.
5. A curve is \(x=1+t^2\), \(y=t-t^3\). Find \(dy/dx\) where applicable, and the tangent at \(t=1\).
6. Find and classify the stationary points of \(h(x)=x^4-2x^2\).
7. Evaluate \(\lim_{x\to\infty}x/e^x\), checking the hypotheses of any rule used.
8. Explain why each statement is false: every continuous function is differentiable; \(f'(a)=0\) implies an extremum at \(a\); L’Hôpital allows replacing \(f/g\) by \(f'/g'\) as a function identity.`,
                "这道综合题的价值在于先写“用哪种方法”，再算；每一小问都对应一个不同分析入口。",
                [
                  S(
                    "第一原则、乘积和反函数",
                    "计算",
                    T`f'(a)=3a^2,\qquad (f^{-1})'(2)=\frac14`,
                    T`第一问：

\[
\frac{(a+h)^3-a^3}{h}
=3a^2+3ah+h^2\to3a^2.
\]

第二问的 \(g\) 定义域为 \(\mathbb R\)：

\[
g'(x)=-e^{-x}\log(1+x^2)
+e^{-x}\frac{2x}{1+x^2}.
\]

第三问中 \(f'(x)=3x^2+1>0\)，所以 \(f\) 严格递增；又 \(x^3+x\) 连续且覆盖整个 \(\mathbb R\)，因此它是双射。连续严格单调双射的逆函数连续。因为 \(f(1)=2\)，

\[
(f^{-1})'(2)=\frac1{f'(1)}=\frac1{4}.
\]`,
                    [
                      N("反函数导数", "(f⁻¹)′(b)=1/f′(a)，其中 f(a)=b。", "定理"),
                      N("严格单调", "f′>0 推出严格递增。")
                    ]
                  ),
                  S(
                    "隐函数与参数曲线",
                    "计算",
                    T`y'=-\frac45,\qquad y-2=-\frac45(x-1)`,
                    T`对

\[
x^2+xy+y^2=7
\]

关于 x 求导：

\[
2x+y+xy'+2yy'=0.
\]

在 \((1,2)\)：

\[
2+2+y'+4y'=0,
\]

故 \(y'=-4/5\)。切线为

\[
y-2=-\frac45(x-1).
\]

参数曲线中

\[
\frac{dy}{dx}
=\frac{1-3t^2}{2t}.
\]

当 \(t=1\) 时点为 \((2,0)\)，斜率为

\[
\frac{1-3}{2}=-1,
\]

切线为

\[
y=-x+2.
\]`,
                    [
                      N("隐函数求导", "对方程两边关于 x 求导，把 y 看成 y(x)。"),
                      N("参数导数", "dy/dx=(dy/dt)/(dx/dt)。")
                    ]
                  ),
                  S(
                    "极值、L’Hôpital 与错误命题",
                    "综合",
                    T`h(-1)=h(1)=-1\text{ minima},\quad h(0)=0\text{ maximum}`,
                    T`对 \(h=x^4-2x^2\)：

\[
h'=4x(x-1)(x+1),
\]

驻点为 \(-1,0,1\)。

\[
h''=12x^2-4.
\]

在 \(\pm1\) 处 \(h''=8>0\)，故二者为局部最小；在 0 处 \(h''=-4<0\)，故为局部最大。函数值分别为 \(-1,0,-1\)。

对 \(x/e^x\)，\(x\to\infty\) 时为 \(\infty/\infty\)，满足 L’Hôpital 前提。求导得

\[
\frac1{e^x}\to0.
\]

三条错误命题各有反例：\(|x|\) 连续但不在 0 可导；\(x^3\) 在 0 有 \(f'(0)=0\) 却无极值；L’Hôpital 只比较极限，绝不能说两个函数本身相等。`,
                    [
                      N("二阶判别", "驻点类型可用二阶导数符号辅助判断。"),
                      N("L’Hôpital 是极限定理", "它不提供函数恒等式，只提供极限相等。", "易错点")
                    ]
                  )
                ],
                T`各问结果依次为 3a²；g′ 表达式；逆函数连续且 (f⁻¹)′(2)=1/4；隐函数斜率 −4/5；参数切线 y=−x+2；h 在 ±1 取最小值 −1、在 0 取最大值 0；x/e^x→0；三条命题均可由反例或定义否定。`
              )
            ]
          }
        ]
      }
    ]
  });
})();
