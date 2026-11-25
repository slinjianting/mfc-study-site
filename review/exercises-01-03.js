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
        id: "chapter-1",
        number: 1,
        titleZh: "集合、函数与实数线",
        titleEn: "Sets, Functions and the Real Line",
        knowledgePoints: [
          {
            id: "kp-1-1",
            section: "1.1",
            titleZh: "集合记号与集合运算",
            titleEn: "Set notation and set operations",
            summaryZh: "并、交、差与补集都通过“元素属于哪里”来定义；证明集合相等时最稳定的方法是双向包含。",
            lessonHref: "../week1/Week1学习站.html#concept-set-operations",
            exercises: [
              E(
                "1.6",
                "补集、De Morgan 律与笛卡尔积",
                "Complements and products",
                "计算 + 证明",
                T`Let \(X=\{1,2,3,4,5,6\}\), \(A=\{1,2,3\}\) and \(B=\{2,4,6\}\).

1. Find \(X\setminus(A\cup B)\) and \((X\setminus A)\cap(X\setminus B)\), and check that they agree.
2. Prove the second of De Morgan's laws by the method used for the first.
3. List the elements of \(\{0,1\}\times\{2,3,4\}\). Explain why this set is not equal to \(\{2,3,4\}\times\{0,1\}\), although both sets have six elements.`,
                "先具体计算一次补集与并交差，再用元素双向包含证明 De Morgan 律，最后检查有序对的顺序是否影响集合。",
                [
                  S(
                    "具体计算两种写法",
                    "计算",
                    T`A\cup B=\{1,2,3,4,6\},\quad X\setminus(A\cup B)=\{5\}`,
                    T`先把 \(A\cup B\) 求出来：

\[
A\cup B=\{1,2,3,4,6\}.
\]

所以

\[
X\setminus(A\cup B)=\{5\}.
\]

另一方面，

\[
X\setminus A=\{4,5,6\},\qquad X\setminus B=\{1,3,5\}.
\]

取交集得到

\[
(X\setminus A)\cap(X\setminus B)=\{5\}.
\]

两边确实相等。`,
                    [
                      N("并集", "并集收集至少属于其中一个集合的元素。"),
                      N("集合差", "X∖A 表示属于 X 但不属于 A 的元素。")
                    ]
                  ),
                  S(
                    "证明第二 De Morgan 律",
                    "证明",
                    T`X\setminus(A\cap B)=(X\setminus A)\cup(X\setminus B)`,
                    T`要证明两个集合相等，分别证明两个包含关系。

先取 \(x\in X\setminus(A\cap B)\)。那么 \(x\in X\)，但 \(x\notin A\cap B\)。一个元素不属于交集，意味着它至少不属于其中一个集合，即 \(x\notin A\) 或 \(x\notin B\)。因此 \(x\in X\setminus A\) 或 \(x\in X\setminus B\)，所以

\[
x\in(X\setminus A)\cup(X\setminus B).
\]

反过来，若 \(x\in(X\setminus A)\cup(X\setminus B)\)，则 \(x\notin A\) 或 \(x\notin B\)，从而 \(x\notin A\cap B\)。又因为 \(x\in X\)，所以 \(x\in X\setminus(A\cap B)\)。

两个方向都成立，故

\[
X\setminus(A\cap B)=(X\setminus A)\cup(X\setminus B).
\]`,
                    [
                      N("双向包含", "证明 A=B 时，通常证明 A⊆B 和 B⊆A。"),
                      N("交集的否定", "x∉A∩B 等价于 x∉A 或 x∉B。")
                    ]
                  ),
                  S(
                    "列出笛卡尔积并比较顺序",
                    "反例",
                    T`\{0,1\}\times\{2,3,4\}=\{(0,2),(0,3),(0,4),(1,2),(1,3),(1,4)\}`,
                    T`按定义，

\[
\{0,1\}\times\{2,3,4\}
=\{(a,b):a\in\{0,1\},b\in\{2,3,4\}\}.
\]

因此六个元素是

\[
(0,2),(0,3),(0,4),(1,2),(1,3),(1,4).
\]

交换顺序后，

\[
\{2,3,4\}\times\{0,1\}
=\{(2,0),(2,1),(3,0),(3,1),(4,0),(4,1)\}.
\]

两个集合虽然都含六个有序对，但没有一个有序对相同：前一个集合的第二个坐标只能是 \(2,3,4\)，后一个集合的第二个坐标只能是 \(0,1\)。有序对中的顺序具有意义。`,
                    [
                      N("笛卡尔积", "A×B 由所有有序对 (a,b) 组成；一般 A×B≠B×A。", "定义")
                    ]
                  )
                ],
                T`\(X\setminus(A\cup B)=(X\setminus A)\cap(X\setminus B)=\{5\}\)，并验证了第二 De Morgan 律；笛卡尔积因有序对坐标顺序不同而不能交换。`
              )
            ]
          },
          {
            id: "kp-1-5",
            section: "1.5",
            titleZh: "区间、绝对值与距离",
            titleEn: "Intervals, absolute value and distance",
            summaryZh: "绝对值不等式 \(|x-a|\le r\) 表示数轴上以 a 为中心、半径 r 的闭区间。",
            lessonHref: "../week1/Week1学习站.html#concept-absolute-triangle",
            exercises: [
              E(
                "1.21",
                "区间、确界与绝对值",
                "Foundations consolidation",
                "计算 + 概念",
                T`Let \(A=[-1,3)\) and \(B=(1,5]\).

1. Find \(A\cap B\), \(A\cup B\) and \(A\setminus B\).
2. State \(\inf A\) and \(\sup A\), and decide whether \(A\) has a minimum or maximum.
3. Rewrite \(|x-1|\le2\) as an interval and explain its geometric meaning.`,
                "这是一道基础整合题：先用端点是否包含计算区间运算，再区分确界与最值，最后把绝对值翻译成距离。",
                [
                  S(
                    "计算三个区间运算",
                    "计算",
                    T`A\cap B=(1,3),\quad A\cup B=[-1,5],\quad A\setminus B=[-1,1]`,
                    T`共同部分从较大的左端点 \(1\) 到较小的右端点 \(3\)，且两端都不包含，所以

\[
A\cap B=(1,3).
\]

并集覆盖从 \(-1\) 到 \(5\) 的全部点，端点 \(-1,5\) 属于原区间，所以

\[
A\cup B=[-1,5].
\]

从 \(A\) 去掉 \(B\) 中的点，只保留 \(x\le1\) 的部分；\(-1\) 属于 \(A\)，\(1\) 不属于 \(B\)，因此

\[
A\setminus B=[-1,1].
\]`,
                    [
                      N("区间端点", "圆括号不计端点，方括号计入端点；做交集时尤其要逐个检查端点。")
                    ]
                  ),
                  S(
                    "比较确界与最值",
                    "概念",
                    T`\inf A=-1,\quad \sup A=3`,
                    T`\(A\) 中的数都满足 \(-1\le x<3\)。

- 下界中最大的是 \(-1\)，且 \(-1\in A\)，所以 \(\inf A=-1\)，同时最小值也是 \(-1\)。
- 上界中最小的是 \(3\)，所以 \(\sup A=3\)。
- 但 \(3\notin A\)，因此 \(A\) 没有最大值。

结论：最小值是 \(-1\)，没有最大值。`,
                    [
                      N("上确界", "上确界是最小上界；它可以不属于集合。", "定义"),
                      N("最大值", "最大值必须同时是上界并且属于集合。")
                    ]
                  ),
                  S(
                    "把绝对值解释成距离",
                    "转化",
                    T`|x-1|\le2\iff -2\le x-1\le2\iff x\in[-1,3]`,
                    T`绝对值 \(|x-1|\) 是 \(x\) 到 \(1\) 的距离。距离不超过 \(2\)，意味着

\[
1-2\le x\le1+2.
\]

因此

\[
|x-1|\le2\iff x\in[-1,3].
\]

几何上，它表示数轴上以 \(1\) 为中心、半径为 \(2\) 的闭区间，包含两个端点。`,
                    [
                      N("绝对值的距离解释", "|x−a| 是从 x 到 a 的距离。", "定义")
                    ]
                  )
                ],
                T`A∩B=(1,3)，A∪B=[−1,5]，A∖B=[−1,1]；A 的 inf 为 −1 且最小值为 −1，sup 为 3 但没有最大值；|x−1|≤2 等价于 [−1,3]。`
              )
            ]
          },
          {
            id: "kp-1-6",
            section: "1.6",
            titleZh: "函数、像、原像与复合",
            titleEn: "Functions, images, preimages and composition",
            summaryZh: "像从输入集合推向输出集合，原像从输出反查输入；复合运算通常不满足交换律。",
            lessonHref: "../week1/Week1学习站.html#concept-functions-images",
            exercises: [
              E(
                "1.25",
                "并集与交集的像",
                "Images of unions and intersections",
                "证明 + 反例",
                T`Let \(f:A\to B\), and let \(E,F\subseteq A\).

1. Prove that \(f(E\cup F)=f(E)\cup f(F)\).
2. Prove that \(f(E\cap F)\subseteq f(E)\cap f(F)\).
3. Show by an example that equality need not hold in the second part.`,
                "像会保留并集，但对交集只能保证一个方向的包含；反例来自两个不同输入落到同一个输出。",
                [
                  S(
                    "证明并集的像相等",
                    "证明",
                    T`f(E\cup F)=f(E)\cup f(F)`,
                    T`先取 \(y\in f(E\cup F)\)。存在 \(x\in E\cup F\) 使 \(y=f(x)\)。若 \(x\in E\)，则 \(y\in f(E)\)；若 \(x\in F\)，则 \(y\in f(F)\)。故

\[
y\in f(E)\cup f(F).
\]

反过来，若 \(y\in f(E)\cup f(F)\)，则存在 \(x\in E\) 或 \(x\in F\) 使 \(y=f(x)\)。无论哪一种，\(x\in E\cup F\)，所以 \(y\in f(E\cup F)\)。双向包含给出相等。`,
                    [
                      N("集合的像", "f(S)={f(x):x∈S}。", "定义")
                    ]
                  ),
                  S(
                    "证明交集像的包含",
                    "证明",
                    T`f(E\cap F)\subseteq f(E)\cap f(F)`,
                    T`任取 \(y\in f(E\cap F)\)。存在

\[
x\in E\cap F
\]

使 \(y=f(x)\)。于是 \(x\in E\) 且 \(x\in F\)，从而 \(y\in f(E)\) 且 \(y\in f(F)\)。因此 \(y\in f(E)\cap f(F)\)。`,
                    [
                      N("包含关系", "要证 f(E∩F)⊆f(E)∩f(F)，任取交集像中的 y，再证明它属于右边。")
                    ]
                  ),
                  S(
                    "用两输入同像构造反例",
                    "反例",
                    T`f(1)=f(2)=0,\quad E=\{1\},\quad F=\{2\}`,
                    T`令 \(f:\{1,2\}\to\{0\}\) 满足 \(f(1)=f(2)=0\)，并取

\[
E=\{1\},\qquad F=\{2\}.
\]

那么 \(E\cap F=\varnothing\)，所以

\[
f(E\cap F)=\varnothing.
\]

另一方面，

\[
f(E)\cap f(F)=\{0\}\cap\{0\}=\{0\}.
\]

两边不相等，说明第二个包含通常不能反写。`,
                    [
                      N("交集像失效原因", "两个不同输入可以有同一个输出；交集为空时，它们仍共享输出。", "易错点")
                    ]
                  )
                ],
                T`像对并集分配，即 f(E∪F)=f(E)∪f(F)；但对交集只有 f(E∩F)⊆f(E)∩f(F)，等号不一定成立。`
              ),
              E(
                "1.28",
                "函数复合的顺序",
                "Order of composition",
                "计算 + 概念",
                T`Let \(f,g:\mathbb R\to\mathbb R\) be defined by \(f(x)=x^2\) and \(g(x)=x+1\). Find formulas for \(f\circ g\) and \(g\circ f\), and use them to explain why function composition is not generally commutative.`,
                "复合函数从右向左执行：先做靠近输入的那个函数。分别代入即可看出 f∘g 与 g∘f 不同。",
                [
                  S(
                    "按右到左的顺序代入",
                    "计算",
                    T`(f\circ g)(x)=f(x+1)=(x+1)^2`,
                    T`在 \(f\circ g\) 中先执行 \(g\)，再执行 \(f\)：

\[
(f\circ g)(x)=f(g(x))=f(x+1)=(x+1)^2.
\]`,
                    [
                      N("复合顺序", "f∘g 表示先 g 后 f。", "定义")
                    ]
                  ),
                  S(
                    "计算相反顺序并比较",
                    "结论",
                    T`(g\circ f)(x)=g(x^2)=x^2+1`,
                    T`反过来，

\[
(g\circ f)(x)=g(f(x))=g(x^2)=x^2+1.
\]

例如 \(x=1\) 时，\((f\circ g)(1)=4\)，而 \((g\circ f)(1)=2\)。因此

\[
f\circ g\ne g\circ f.
\]

函数复合不是一般可交换的运算；改变复合顺序会改变先作用的规则。`,
                    [
                      N("反例比较", "证明两个函数不同，只需给出一个输入使输出不同。", "方法")
                    ]
                  )
                ],
                T`(f∘g)(x)=(x+1)^2，(g∘f)(x)=x^2+1，二者不同，因此复合通常不交换。`
              )
            ]
          },
          {
            id: "kp-1-9",
            section: "1.9",
            titleZh: "有限集、可数无限集与可数性",
            titleEn: "Finite, countably infinite and countable sets",
            summaryZh: "集合可数意味着能与自然数建立一一对应；无限集合也可能可数。",
            lessonHref: "../week1/Week1学习站.html#concept-countability",
            exercises: [
              E(
                "1.39",
                "函数性质、逆函数与可数性",
                "Functions and countability",
                "计算 + 证明",
                T`Let \(f:\mathbb R\to\mathbb R\) be defined by \(f(x)=2x-3\).

1. Find \(f([0,2])\) and \(f^{-1}([1,5])\).
2. Decide whether \(f\) is injective, surjective or bijective.
3. If an inverse exists, find its rule and state its domain and codomain.
4. Explain why the function \(n\mapsto2n\) is a bijection from \(\mathbb N\) to the set of non-negative even integers.`,
                "先把线性函数的像与原像变换成对应区间，再检查唯一输入和能否覆盖整个陪域，最后把“可数”翻译成自然数编号。",
                [
                  S(
                    "计算像和原像",
                    "计算",
                    T`f([0,2])=[-3,1],\quad f^{-1}([1,5])=[2,4]`,
                    T`因为 \(f\) 严格递增，输入端点 \(0,2\) 分别得到输出 \(-3,1\)，所以

\[
f([0,2])=[-3,1].
\]

原像满足

\[
1\le2x-3\le5.
\]

三边加 \(3\) 再除以 \(2\)：

\[
2\le x\le4.
\]

所以 \(f^{-1}([1,5])=[2,4]\)。`,
                    [
                      N("原像", "f⁻¹(S) 是所有输出落在 S 中的输入组成的集合。", "定义")
                    ]
                  ),
                  S(
                    "判定单射、满射与双射",
                    "证明",
                    T`2x_1-3=2x_2-3\Longrightarrow x_1=x_2`,
                    T`若 \(f(x_1)=f(x_2)\)，则

\[
2x_1-3=2x_2-3,
\]

从而 \(x_1=x_2\)，所以 \(f\) 是单射。

任取 \(y\in\mathbb R\)，令

\[
x=\frac{y+3}{2}.
\]

则 \(f(x)=y\)，所以 \(f\) 是满射。两者都成立，因此 \(f\) 是双射。`,
                    [
                      N("单射", "不同输入不能产生同一个输出。"),
                      N("满射", "陪域中的每个元素都至少被一个输入命中。")
                    ]
                  ),
                  S(
                    "写出逆函数及定义域",
                    "计算",
                    T`f^{-1}(y)=\frac{y+3}{2},\quad f^{-1}:\mathbb R\to\mathbb R`,
                    T`由 \(y=2x-3\) 解出

\[
x=\frac{y+3}{2}.
\]

因此逆函数的规则是

\[
f^{-1}(y)=\frac{y+3}{2}.
\]

原来的定义域和陪域都是 \(\mathbb R\)，交换后逆函数的定义域与陪域仍都是 \(\mathbb R\)。`,
                    [
                      N("逆函数", "双射才能定义全局逆函数；原函数的陪域成为逆函数的定义域。")
                    ]
                  ),
                  S(
                    "证明偶数集可数",
                    "证明",
                    T`n\mapsto2n`,
                    T`若 \(2n_1=2n_2\)，则 \(n_1=n_2\)，所以该映射是单射。任一非负偶数都可以写成 \(2n\)，其中 \(n\in\mathbb N\)，所以它是满射。因此它是一一对应。

一一对应就是自然数编号，因而非负偶数集合是可数无限集。`,
                    [
                      N("可数无限", "能与自然数一一对应的集合称为可数无限集。", "定义")
                    ]
                  )
                ],
                T`f([0,2])=[−3,1]，原像为 [2,4]；f 是双射，逆函数 f⁻¹(y)=(y+3)/2，定义域和陪域均为 R；n↦2n 将自然数一一编号到非负偶数。`
              )
            ]
          }
        ]
      },
      {
        id: "chapter-2",
        number: 2,
        titleZh: "数列与收敛",
        titleEn: "Sequences and Convergence",
        knowledgePoints: [
          {
            id: "kp-2-4",
            section: "2.4",
            titleZh: "直接 ε–N 证明",
            titleEn: "Direct epsilon–N proofs",
            summaryZh: "要证明 \(a_n\to L\)，给定任意 \(\varepsilon>0\) 后必须构造一个 \(N\)，使所有 \(n\ge N\) 都满足误差界。",
            lessonHref: "../week1/Week1学习站.html#concept-sequence-epsilon-n",
            exercises: [
              E(
                "2.8",
                "用定义证明两个数列极限",
                "A direct epsilon–N proof",
                "证明",
                T`Use Definition 2.2 to prove each limit. In each proof, state a valid choice of \(N\) in terms of \(\varepsilon\) and verify the required inequality for every \(n\ge N\).

1. For \(n\in\mathbb N\),
\[
\frac{4}{n+2}\to0\quad(n\to\infty).
\]

2. For \(n\in\mathbb Z_+\),
\[
\frac{3n^2+n+1}{2n^2}-1\to\frac12
\quad(n\to\infty).
\]`,
                "关键不是“猜 N”，而是先化简 \(|a_n-L|\)，再把表达式压到一个容易求倒数的上界，最后验证所有 n≥N。",
                [
                  S(
                    "第一个极限：直接控制分母",
                    "证明",
                    T`N> \frac4\varepsilon-2`,
                    T`给定 \(\varepsilon>0\)。选取整数

\[
N>\max\left\{0,\frac4\varepsilon-2\right\}.
\]

当 \(n\ge N\) 时，\(n+2>4/\varepsilon\)，于是

\[
\left|\frac4{n+2}-0\right|
=\frac4{n+2}<\varepsilon.
\]

所以 \(4/(n+2)\to0\)。`,
                    [
                      N("ε–N 定义", "对所有 ε>0，存在 N，使 n≥N 时 |aₙ−L|<ε。", "定义"),
                      N("选择 N", "N 可以依赖 ε；证明时只要求存在一个有效 N。")
                    ]
                  ),
                  S(
                    "第二个极限：先化简误差",
                    "计算",
                    T`\left|\left(\frac{3n^2+n+1}{2n^2}-1\right)-\frac12\right|=\frac{n+1}{2n^2}`,
                    T`先计算括号内的表达式：

\[
\frac{3n^2+n+1}{2n^2}-1
=\frac{n^2+n+1}{2n^2}.
\]

再减去 \(1/2\)：

\[
\frac{n^2+n+1}{2n^2}-\frac12
=\frac{n+1}{2n^2}.
\]

因此误差正是 \((n+1)/(2n^2)\)。`,
                    [
                      N("先化简再估计", "ε–N 证明的核心是把 |aₙ−L| 变成容易控制的形式。", "方法")
                    ]
                  ),
                  S(
                    "选取 N 并验证",
                    "证明",
                    T`\frac{n+1}{2n^2}\le\frac1n<\varepsilon`,
                    T`当 \(n\ge1\) 时，

\[
\frac{n+1}{2n^2}
\le\frac{2n}{2n^2}
=\frac1n.
\]

给定 \(\varepsilon>0\)，选取整数

\[
N>\max\left\{1,\frac1\varepsilon\right\}.
\]

当 \(n\ge N\) 时，

\[
\left|\left(\frac{3n^2+n+1}{2n^2}-1\right)-\frac12\right|
=\frac{n+1}{2n^2}
\le\frac1n
<\varepsilon.
\]

因此第二个极限为 \(1/2\)。`,
                    [
                      N("充分上界", "不必求最精确的 N，只要找到能可靠小于 ε 的充分控制。")
                    ]
                  )
                ],
                T`第一个极限可取 N>4/ε−2；第二个误差化为 (n+1)/(2n²)≤1/n，取 N>1/ε，故极限为 1/2。`
              )
            ]
          },
          {
            id: "kp-2-6",
            section: "2.6",
            titleZh: "数列极限代数",
            titleEn: "Algebra of sequence limits",
            summaryZh: "已知两个收敛数列时可以直接使用极限的和、差、积、商规则；缺少收敛前提时必须回到定义。",
            lessonHref: "../week1/Week1学习站.html#concept-sequence-laws",
            exercises: [
              E(
                "2.15",
                "有界因子乘零数列",
                "A bounded factor and a null sequence",
                "证明 + 反例",
                T`Suppose \((a_n)_{n\in\mathbb N}\) is bounded and \(b_n\to0\).

1. Prove directly from the definitions that
\[
a_nb_n\to0.
\]

2. Find a counterexample to show that the boundedness of \((a_n)\) is essential.`,
                "有界性提供一个固定常数 K，再把 \(b_n\) 的误差阈值缩小 K 倍；若去掉有界性，因子可能把零数列重新放大。",
                [
                  S(
                    "把有界性写成一个常数",
                    "设定",
                    T`|a_n|\le K\quad(n\in\mathbb N)`,
                    T`因为 \((a_n)\) 有界，存在 \(K\ge0\)，使所有 \(n\) 都满足

\[
|a_n|\le K.
\]

如果 \(K=0\)，则 \(a_n=0\)，结论显然。以下假设 \(K>0\)。`,
                    [
                      N("有界数列", "存在同一个常数 K，使数列所有项都落在 [−K,K] 中。", "定义")
                    ]
                  ),
                  S(
                    "用缩小的阈值控制乘积",
                    "证明",
                    T`|b_n|<\frac{\varepsilon}{K}\Longrightarrow|a_nb_n|<\varepsilon`,
                    T`给定 \(\varepsilon>0\)。由于 \(b_n\to0\)，存在 \(N\)，使 \(n\ge N\) 时

\[
|b_n|<\frac{\varepsilon}{K}.
\]

于是

\[
|a_nb_n|=|a_n||b_n|
\le K\frac{\varepsilon}{K}
=\varepsilon.
\]

因此 \(a_nb_n\to0\)。`,
                    [
                      N("乘积误差", "绝对值的乘法性质允许把两个误差因子分开估计。")
                    ]
                  ),
                  S(
                    "去掉有界性构造反例",
                    "反例",
                    T`a_n=n,\qquad b_n=\frac1n`,
                    T`取

\[
a_n=n,\qquad b_n=\frac1n.
\]

则 \(b_n\to0\)，但

\[
a_nb_n=1
\]

对每个 \(n\) 都成立，因此乘积收敛到 \(1\)，而不是 \(0\)。这里 \((a_n)\) 无界，说明有界性条件不能省略。`,
                    [
                      N("反例目的", "反例只需要同时满足其余假设而推翻结论。", "方法")
                    ]
                  )
                ],
                T`若 |aₙ|≤K 且 bₙ→0，则 |aₙbₙ|≤K|bₙ|→0；没有有界性时，aₙ=n、bₙ=1/n 给出 aₙbₙ=1。`
              )
            ]
          },
          {
            id: "kp-2-7",
            section: "2.7",
            titleZh: "序关系与夹逼定理",
            titleEn: "Order and the Squeeze Theorem",
            summaryZh: "极限保持非严格不等式，但严格不等式在取极限时可能变成等号；夹逼定理用两条相同极限的边界锁住中间项。",
            lessonHref: "../week1/Week1学习站.html#concept-sequence-laws",
            exercises: [
              E(
                "2.17",
                "严格不等式与极限",
                "Strict inequalities and limits",
                "判断 + 反例",
                T`Suppose that \(a_n<b_n\) for every \(n\in\mathbb Z_+\) and that both sequences converge. Must
\[
\lim_{n\to\infty}a_n<\lim_{n\to\infty}b_n
\]
hold? Prove the statement or give a counterexample, and explain why this does not contradict order preservation.`,
                "严格不等式可能只在有限位置保留；取极限后只能保证非严格不等式。",
                [
                  S(
                    "给出反例",
                    "反例",
                    T`a_n=0,\qquad b_n=\frac1n`,
                    T`取

\[
a_n=0,\qquad b_n=\frac1n.
\]

对每个 \(n\)，都有 \(a_n<b_n\)。但

\[
\lim a_n=0=\lim b_n.
\]

所以题目中的严格不等式不必成立。`,
                    [
                      N("严格不等式取极限", "aₙ<bₙ 在极限后可能退化为 L≤M。", "边界")
                    ]
                  ),
                  S(
                    "解释与序保持不矛盾",
                    "概念",
                    T`a_n<b_n\Longrightarrow L\le M`,
                    T`极限的序保持定理只保证

\[
L\le M.
\]

它没有承诺把严格号保留下来。反例中恰好 \(L=M\)，仍满足 \(L\le M\)。因此不矛盾。`,
                    [
                      N("序保持", "若 aₙ≤bₙ 且两边收敛，则 lim aₙ≤lim bₙ。")
                    ]
                  )
                ],
                T`结论不成立；0<1/n 但两边极限都为 0。序保持只给出非严格的 ≤。`
              ),
              E(
                "2.21",
                "极限法则与夹逼综合",
                "Sequence-limit consolidation",
                "计算 + 证明",
                T`For \(n\in\mathbb Z_+\), use the limit laws to evaluate
\[
\lim_{n\to\infty}\frac{2n^2-3n+4}{5n^2+n}.
\]
Then use the Squeeze Theorem to prove
\[
\frac{\cos n}{n^2}\to0,\qquad n\in\mathbb Z_+.
\]
State explicitly which bound on \(\cos n\) you use.`,
                "有理式按最高次项归一，三角分子的振荡用统一上界压住。",
                [
                  S(
                    "分子分母同除 n²",
                    "计算",
                    T`\frac{2-3/n+4/n^2}{5+1/n}\to\frac25`,
                    T`分子分母同除以 \(n^2\)：

\[
\frac{2n^2-3n+4}{5n^2+n}
=\frac{2-3/n+4/n^2}{5+1/n}.
\]

由 \(1/n\to0\)、\(1/n^2\to0\) 和极限商的法则，极限为

\[
\frac{2-0+0}{5+0}=\frac25.
\]`,
                    [
                      N("最高次项", "有理式在 n→∞ 时由分子分母最高次项决定。"),
                      N("商的极限", "分母极限不为 0 时，商的极限等于极限的商。")
                    ]
                  ),
                  S(
                    "用余弦上界构造夹逼",
                    "证明",
                    T`-\frac1{n^2}\le\frac{\cos n}{n^2}\le\frac1{n^2}`,
                    T`对每个实数 \(n\)，

\[
-1\le\cos n\le1.
\]

因为 \(n\ge1\)，\(n^2>0\)，所以

\[
-\frac1{n^2}\le\frac{\cos n}{n^2}\le\frac1{n^2}.
\]

两侧数列都趋于 \(0\)，由夹逼定理，

\[
\frac{\cos n}{n^2}\to0.
\]`,
                    [
                      N("夹逼定理", "若下界和上界收敛到同一极限，中间数列也收敛到该极限。"),
                      N("余弦界", "对所有 n，−1≤cos n≤1。", "公式")
                    ]
                  )
                ],
                T`有理式极限为 2/5；利用 −1≤cos n≤1 与夹逼定理，cos n/n²→0。`
              )
            ]
          },
          {
            id: "kp-2-8",
            section: "2.8",
            titleZh: "发散到无穷",
            titleEn: "Divergence to infinity",
            summaryZh: "发散到 +∞ 或 −∞ 描述的是最终超过任意给定界，而不是“越来越大”的模糊说法。",
            lessonHref: "../week1/Week1学习站.html#concept-divergence-infinity",
            exercises: [
              E(
                "2.26",
                "无穷发散与振荡",
                "Divergence to infinity",
                "证明 + 反例",
                T`1. Use Definition 2.22 to prove that \(n^2-3\to+\infty\) and \(5-2n\to-\infty\).
2. Suppose \(a_n>0\) for every \(n\) and \(a_n\to0\). Prove that \(1/a_n\to+\infty\).
3. Suppose \(a_n\to+\infty\) and \((b_n)\) is bounded. Prove that \(a_n+b_n\to+\infty\).
4. You may assume \(\sin n>1/2\) for infinitely many \(n\), and \(\sin n<-1/2\) for infinitely many \(n\). Show that \((n\sin n)\) is not bounded above but does not diverge to \(+\infty\).`,
                "先逐字使用 \(+∞/−∞\) 的终局界定义，再处理倒数、加有界项和两个子列方向相反的情形。",
                [
                  S(
                    "直接证明两个无穷发散",
                    "证明",
                    T`n^2-3>M\iff n>\sqrt{M+3}`,
                    T`给定任意 \(M\in\mathbb R\)。选取

\[
N>\max\{0,\sqrt{M+3}\}.
\]

当 \(n\ge N\) 时，

\[
n^2-3>M,
\]

所以 \(n^2-3\to+\infty\)。

对 \(5-2n\to-\infty\)，给定 \(M\)，选取

\[
N>\max\left\{0,\frac{5-M}{2}\right\}.
\]

则 \(n\ge N\) 时 \(5-2n<M\)。`,
                    [
                      N("发散到 +∞", "任意 M 都存在 N，使 n≥N 时 aₙ>M。", "定义"),
                      N("发散到 −∞", "任意 M 都存在 N，使 n≥N 时 aₙ<M。", "定义")
                    ]
                  ),
                  S(
                    "正数列趋零时倒数趋无穷",
                    "证明",
                    T`0<a_n<\frac1M\Longrightarrow\frac1{a_n}>M`,
                    T`给定 \(M>0\)。由 \(a_n\to0\)，存在 \(N\)，使 \(n\ge N\) 时

\[
0<a_n<\frac1M.
\]

取倒数并利用正性得到

\[
\frac1{a_n}>M.
\]

若 \(M\le0\)，因所有项为正，结论自动成立。因此 \(1/a_n\to+\infty\)。`,
                    [
                      N("正性前提", "aₙ>0 保证倒数的方向在取倒数后保持。")
                    ]
                  ),
                  S(
                    "无穷大加有界项仍无穷大",
                    "证明",
                    T`a_n+b_n>(M+K)-K=M`,
                    T`设 \(|b_n|\le K\)。给定 \(M\)，由 \(a_n\to+\infty\)，存在 \(N\)，使 \(n\ge N\) 时

\[
a_n>M+K.
\]

同时 \(b_n\ge-K\)，所以

\[
a_n+b_n>(M+K)-K=M.
\]

因此 \(a_n+b_n\to+\infty\)。这里“有界”并不要求 \(b_n\) 收敛。`,
                    [
                      N("有界不收敛", "有界序列可能振荡，但它的下界仍可用于加法估计。", "边界")
                    ]
                  ),
                  S(
                    "用两个子列说明不趋于无穷",
                    "反例",
                    T`n_j\sin n_j>\frac{n_j}{2},\qquad m_j\sin m_j<-\frac{m_j}{2}`,
                    T`对于满足 \(\sin n_j>1/2\) 的无限多个 \(n_j\)，

\[
n_j\sin n_j>\frac{n_j}{2}\to+\infty.
\]

特别地，这意味着 \(n\sin n\) 不是有上界的。

但另一批 \(m_j\) 满足 \(\sin m_j<-1/2\)，于是

\[
m_j\sin m_j<-\frac{m_j}{2}\to-\infty.
\]

存在一个子列无限下冲，使完整数列不可能最终超过所有给定 M。因此 \(n\sin n\) 不趋于 \(+\infty\)。`,
                    [
                      N("子列判别", "若存在子列不能保持最终超过 M，则整个数列不满足 +∞ 定义。", "反例")
                    ]
                  )
                ],
                T`n²−3→+∞，5−2n→−∞；正零数列的倒数趋 +∞；无穷大数列加有界项仍趋 +∞；n sin n 无上界但因有子列趋于 −∞ 而不趋 +∞。`
              )
            ]
          }
        ]
      },
      {
        id: "chapter-3",
        number: 3,
        titleZh: "函数极限与连续性",
        titleEn: "Function Limits and Continuity",
        knowledgePoints: [
          {
            id: "kp-3-3",
            section: "3.3",
            titleZh: "单侧极限与点值",
            titleEn: "One-sided limits and point values",
            summaryZh: "极限考察点附近的行为，点值 \(f(a)\) 是另一个信息；只有连续性把两者锁在一起。",
            lessonHref: "../week1/Week1学习站.html#concept-one-sided-laws",
            exercises: [
              E(
                "3.9",
                "极限不能决定点值",
                "A limit need not determine the point value",
                "判断 + 反例",
                T`Decide whether the following statement is true: if
\[
\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=L,
\]
then \(f(a)=L\). Prove the statement or give a counterexample. State the additional condition that would make the conclusion valid.`,
                "单侧极限相同只保证两侧靠近同一个值；函数在该点可以另行定义一个不同的点值。",
                [
                  S(
                    "否定命题",
                    "反例",
                    T`f(x)=0\ (x\ne a),\quad f(a)=1`,
                    T`令

\[
f(x)=
\begin{cases}
0,&x\ne a,\\
1,&x=a.
\end{cases}
\]

无论从左边还是右边靠近 \(a\)，函数值都是 \(0\)，所以两个单侧极限都为 \(L=0\)。但

\[
f(a)=1\ne0.
\]

命题为假。`,
                    [
                      N("去点极限", "计算极限时不读取 x=a 的单个点值。", "易错点")
                    ]
                  ),
                  S(
                    "补上连续性条件",
                    "结论",
                    T`f\text{ continuous at }a\Longrightarrow f(a)=L`,
                    T`如果额外要求 \(f\) 在 \(a\) 连续，那么按连续性定义，

\[
\lim_{x\to a}f(x)=f(a).
\]

而两侧极限同为 \(L\)，所以两侧极限存在且等于 \(L\)，从而 \(f(a)=L\)。因此“\(f\) 在 \(a\) 连续”正是需要补充的条件。`,
                    [
                      N("连续性", "连续要求极限存在且等于点值。", "定义")
                    ]
                  )
                ],
                T`命题为假；可在 a 点单独改点值。若再要求 f 在 a 连续，则 f(a)=L。`
              )
            ]
          },
          {
            id: "kp-3-5",
            section: "3.5",
            titleZh: "合法代入与消去",
            titleEn: "Justified substitution and cancellation",
            summaryZh: "连续性允许直接代入；若出现 \(0/0\)，可在去点附近做代数约分，因为极限不考察该点本身。",
            lessonHref: "../week1/Week1学习站.html#concept-function-limit",
            exercises: [
              E(
                "3.16",
                "函数极限综合",
                "Function limits",
                "证明 + 计算",
                T`1. Prove directly from the epsilon–delta definition that
\[
\lim_{x\to-1}(2x-5)=-7.
\]
2. Evaluate
\[
\lim_{x\to3}\frac{x^2-9}{x-3},
\]
and explain why cancellation is legitimate for the limit.
3. Let \(h(x)=0\) for \(x<2\) and \(h(x)=1\) for \(x>2\). Find the two one-sided limits at \(2\) and decide whether the two-sided limit exists.
4. Prove directly from the one-sided epsilon–delta definition that
\[
\lim_{x\to2^-}\frac1{1-x}=-1.
\]`,
                "四小问分别练习线性函数、去点约分、跳跃间断和单侧 ε–δ；每次先说明所用定义。",
                [
                  S(
                    "线性函数：取 δ=ε/2",
                    "证明",
                    T`|(2x-5)-(-7)|=2|x+1|`,
                    T`给定 \(\varepsilon>0\)，取 \(\delta=\varepsilon/2\)。若 \(0<|x+1|<\delta\)，则

\[
|(2x-5)-(-7)|
=|2x+2|
=2|x+1|
<2\delta=\varepsilon.
\]

所以极限为 \(-7\)。`,
                    [
                      N("ε–δ 极限", "0<|x−a|<δ ⇒ |f(x)−L|<ε。", "定义")
                    ]
                  ),
                  S(
                    "约分后在去点附近求极限",
                    "计算",
                    T`\frac{x^2-9}{x-3}=x+3\quad(x\ne3)`,
                    T`当 \(x\ne3\) 时，

\[
\frac{x^2-9}{x-3}
=\frac{(x-3)(x+3)}{x-3}
=x+3.
\]

极限只看 \(x\to3\) 时 \(x\ne3\) 的取值，因此可以约去因子 \(x-3\)。于是

\[
\lim_{x\to3}\frac{x^2-9}{x-3}
=\lim_{x\to3}(x+3)=6.
\]

原表达式在 \(3\) 无定义并不妨碍极限存在；约分后的函数在 \(3\) 连续。`,
                    [
                      N("去点极限", "极限不要求函数在 a 点有定义，也不读取该点值。"),
                      N("可去间断", "约分后能连续延拓的点称为可去间断点。", "概念")
                    ]
                  ),
                  S(
                    "跳跃函数的两侧极限",
                    "计算",
                    T`\lim_{x\to2^-}h(x)=0,\quad\lim_{x\to2^+}h(x)=1`,
                    T`当 \(x<2\) 且靠近 \(2\) 时 \(h(x)=0\)，所以左极限为 \(0\)。当 \(x>2\) 且靠近 \(2\) 时 \(h(x)=1\)，所以右极限为 \(1\)。

两个单侧极限不同，因此两侧极限不存在。这是一个跳跃间断。`,
                    [
                      N("两侧极限存在条件", "两侧极限存在且相等，才可能有双侧极限。")
                    ]
                  ),
                  S(
                    "单侧极限的 ε–δ 验证",
                    "证明",
                    T`\left|\frac1{1-x}+1\right|=\frac{2-x}{|1-x|}`,
                    T`在 \(x\to2^-\) 时只需考虑 \(1<x<2\)。此时

\[
\left|\frac1{1-x}+1\right|
=\left|\frac{1+1-x}{1-x}\right|
=\frac{2-x}{x-1}.
\]

因为 \(x-1>1/2\)，所以

\[
\frac{2-x}{x-1}<2(2-x).
\]

给定 \(\varepsilon>0\)，取 \(\delta=\min\{1/2,\varepsilon/2\}\)。若 \(2-\delta<x<2\)，则 \(1<x<2\)，并且

\[
\left|\frac1{1-x}+1\right|<2(2-x)<\varepsilon.
\]

故左极限为 \(-1\)。`,
                    [
                      N("单侧定义", "x→a⁻ 时只要求 x<a 且 |x−a|<δ。", "定义")
                    ]
                  )
                ],
                T`线性极限 −7；可去极限 6；跳跃函数左极限 0、右极限 1，双侧极限不存在；倒数函数左极限 −1。`
              )
            ]
          },
          {
            id: "kp-3-6",
            section: "3.6",
            titleZh: "ε–δ 连续性",
            titleEn: "Epsilon–delta continuity",
            summaryZh: "连续性的 ε–δ 定义允许把输出误差阈值选择得足够小，以保护一个已有的正间距。",
            lessonHref: "../week1/Week1学习站.html#concept-continuity",
            exercises: [
              E(
                "3.20",
                "连续性局部保持严格正性",
                "Continuity preserves strict positivity locally",
                "证明",
                T`Let \(f:D\to\mathbb R\) be continuous at \(a\in D\), and suppose \(f(a)>0\). Use the epsilon–delta definition of continuity to prove that there exists \(\delta>0\) such that
\[
f(x)>\frac{f(a)}2
\]
for every \(x\in D\) satisfying \(|x-a|<\delta\).`,
                "取输出误差阈值为 \(f(a)/2\)，连续性会保证输出与 \(f(a)\) 的距离小于这个正间距。",
                [
                  S(
                    "选择 ε=f(a)/2",
                    "设定",
                    T`\varepsilon=\frac{f(a)}2>0`,
                    T`因为 \(f(a)>0\)，正数

\[
\varepsilon=\frac{f(a)}2
\]

是一个合法的 ε。`,
                    [
                      N("严格正性", "f(a)>0 才能让 f(a)/2 成为正的误差阈值。", "边界")
                    ]
                  ),
                  S(
                    "把输出误差翻译成下界",
                    "证明",
                    T`|f(x)-f(a)|<\frac{f(a)}2\Longrightarrow f(x)>\frac{f(a)}2`,
                    T`由 \(f\) 在 \(a\) 连续，存在 \(\delta>0\)，使 \(x\in D\) 且 \(|x-a|<\delta\) 时

\[
|f(x)-f(a)|<\frac{f(a)}2.
\]

绝对值不等式给出

\[
f(a)-f(x)<\frac{f(a)}2.
\]

移项得到

\[
f(x)>\frac{f(a)}2.
\]

这说明严格正性在一个足够小的局部邻域内保持不变。`,
                    [
                      N("绝对值展开", "|u|<c 等价于 −c<u<c。")
                    ]
                  )
                ],
                T`取 ε=f(a)/2，连续性给出 δ>0，使 |f(x)−f(a)|<f(a)/2，从而 f(x)>f(a)/2。`
              )
            ]
          },
          {
            id: "kp-3-7",
            section: "3.7",
            titleZh: "序列连续性刻画",
            titleEn: "Sequential characterisation",
            summaryZh: "ε–δ 连续的否定允许在每个 δ=1/n 处选出一个坏点，这些坏点趋近 a，但函数值保持固定间距。",
            lessonHref: "../week1/Week1学习站.html#concept-continuity",
            exercises: [
              E(
                "3.22",
                "序列连续推出 ε–δ 连续",
                "Sequential continuity implies epsilon–delta continuity",
                "证明",
                T`Assume that for every sequence \((x_n)\) in \(D\) with \(x_n\to a\), we have \(f(x_n)\to f(a)\). Prove that \(f\) is epsilon–delta continuous at \(a\) by following these steps.

1. Suppose, for a contradiction, that epsilon–delta continuity fails. Negate Definition 3.17 carefully.
2. Set \(x_0=a\). For each \(n\in\mathbb Z_+\), use \(\delta=1/n\) to choose \(x_n\in D\) with \(|x_n-a|<1/n\) and \(|f(x_n)-f(a)|\ge\varepsilon_0\).
3. Use the Squeeze Theorem to show \(x_n\to a\), and use the fixed lower bound \(\varepsilon_0\) to show \(f(x_n)\not\to f(a)\).
4. Explain the contradiction.`,
                "这是用序列把连续性的失败“捕获”出来：连续性失败意味着有一个固定输出间距无法被任何 δ 消除。",
                [
                  S(
                    "写出连续性的否定",
                    "设定",
                    T`\exists\varepsilon_0>0\ \forall\delta>0\ \exists x\in D:\ |x-a|<\delta,\ |f(x)-f(a)|\ge\varepsilon_0`,
                    T`ε–δ 连续的否定是：存在一个固定 \(\varepsilon_0>0\)，使对任意 \(\delta>0\)，都能找到 \(x\in D\)，满足

\[
|x-a|<\delta
\quad\text{但}\quad
|f(x)-f(a)|\ge\varepsilon_0.
\]

注意量词顺序：\(\varepsilon_0\) 先固定，坏点才可以随 \(\delta\) 改变。`,
                    [
                      N("量词否定", "否定 ∀δ ∃x 后得到 ∃ε₀ ∀δ ∃x；x 可以依赖 δ。", "易错点")
                    ]
                  ),
                  S(
                    "用 δ=1/n 构造坏序列",
                    "构造",
                    T`|x_n-a|<\frac1n,\qquad|f(x_n)-f(a)|\ge\varepsilon_0`,
                    T`对每个 \(n\ge1\)，取 \(\delta=1/n\)。由否定得到 \(x_n\in D\)，使

\[
|x_n-a|<\frac1n,
\]

同时

\[
|f(x_n)-f(a)|\ge\varepsilon_0.
\]`,
                    [
                      N("构造反例序列", "把可变 δ 依次取为 1/n，得到一串越来越靠近 a 的点。", "方法")
                    ]
                  ),
                  S(
                    "证明序列趋近但函数值不趋近",
                    "证明",
                    T`0\le|x_n-a|<\frac1n\to0`,
                    T`由

\[
0\le|x_n-a|<\frac1n
\]

和夹逼定理，得到 \(x_n\to a\)。按假设，任何这样的序列都应有 \(f(x_n)\to f(a)\)。

但所有 \(n\) 都满足

\[
|f(x_n)-f(a)|\ge\varepsilon_0.
\]

固定正下界阻止误差最终小于 \(\varepsilon_0/2\)，所以 \(f(x_n)\) 不可能收敛到 \(f(a)\)。`,
                    [
                      N("误差下界", "固定 ε₀>0 使逼近失败的结论不随 n 消失。")
                    ]
                  ),
                  S(
                    "得到矛盾并收尾",
                    "结论",
                    T`x_n\to a\ \text{but}\ f(x_n)\not\to f(a)`,
                    T`这直接违反题设的序列连续性。矛盾说明“ε–δ 连续性失败”的假设不可能成立，因此 \(f\) 在 \(a\) 是 ε–δ 连续的。`,
                    [
                      N("反证法", "否定目标推出矛盾，即可肯定原目标。", "方法")
                    ]
                  )
                ],
                T`若 ε–δ 连续失败，可在每个 δ=1/n 处选出坏点 xₙ；则 xₙ→a 但 f(xₙ) 不→f(a)，违反序列连续性，故结论成立。`
              )
            ]
          },
          {
            id: "kp-3-9",
            section: "3.9",
            titleZh: "初等函数的连续性与运算",
            titleEn: "Continuity of elementary functions and operations",
            summaryZh: "连续函数经过和、差、绝对值和常数倍后仍连续；max 与 min 可写成这些运算的组合。",
            lessonHref: "../week1/Week1学习站.html#concept-continuous-properties",
            exercises: [
              E(
                "3.28",
                "两个连续函数的最大值与最小值",
                "Maximum and minimum of two continuous functions",
                "证明",
                T`Suppose \(f,g:D\to\mathbb R\) are continuous at \(a\in D\). Use the continuity of the absolute-value function and the identities
\[
\max\{f(x),g(x)\}=\frac{f(x)+g(x)+|f(x)-g(x)|}{2},
\]
\[
\min\{f(x),g(x)\}=\frac{f(x)+g(x)-|f(x)-g(x)|}{2},
\]
to prove that \(x\mapsto\max\{f(x),g(x)\}\) and \(x\mapsto\min\{f(x),g(x)\}\) are continuous at \(a\).`,
                "把 max/min 化成连续函数的和差与绝对值复合，再逐条引用连续性的代数封闭性。",
                [
                  S(
                    "先把差变成连续函数",
                    "证明",
                    T`h(x)=f(x)-g(x)`,
                    T`因为 \(f,g\) 在 \(a\) 连续，差

\[
h(x)=f(x)-g(x)
\]

也在 \(a\) 连续。`,
                    [
                      N("连续函数的差", "两个在 a 连续的函数之差仍在 a 连续。")
                    ]
                  ),
                  S(
                    "复合绝对值",
                    "证明",
                    T`|h(x)|=|f(x)-g(x)|\text{ is continuous at }a`,
                    T`绝对值函数在实数上连续，且 \(h(a)\) 是有限实数，所以复合函数

\[
x\mapsto|h(x)|=|f(x)-g(x)|
\]

在 \(a\) 连续。`,
                    [
                      N("复合连续性", "外层连续且内层在对应点连续，则复合连续。")
                    ]
                  ),
                  S(
                    "用连续运算得到 max 与 min",
                    "结论",
                    T`\max(f,g)=\frac{f+g+|f-g|}{2},\quad\min(f,g)=\frac{f+g-|f-g|}{2}`,
                    T`和 \(f(x)+g(x)\) 连续，\(|f(x)-g(x)|\) 连续。常数倍、加法和减法都是连续运算，因此题中两个恒等式的右边都在 \(a\) 连续。

所以

\[
x\mapsto\max\{f(x),g(x)\},
\qquad
x\mapsto\min\{f(x),g(x)\}
\]

都在 \(a\) 连续。`,
                    [
                      N("连续运算封闭性", "连续函数的和、差、常数倍仍连续。")
                    ]
                  )
                ],
                T`由 f−g 连续、绝对值复合连续，再把 max 与 min 表示成连续函数的和差倍数，故二者均连续。`
              )
            ]
          },
          {
            id: "kp-3-10",
            section: "3.10",
            titleZh: "典型间断与分段函数",
            titleEn: "Representative discontinuities",
            summaryZh: "分段函数在接缝处的连续值必须同时等于左极限、右极限和所指定的点值。",
            lessonHref: "../week1/Week1学习站.html#concept-continuity",
            exercises: [
              E(
                "3.34",
                "分段函数的连续参数",
                "Continuity",
                "计算 + 构造",
                T`Let
\[
f(x)=
\begin{cases}
x+1,&x<1,\\
c,&x=1,\\
3-x,&x>1.
\end{cases}
\]

1. Compute the left- and right-hand limits at \(1\).
2. Determine the value of \(c\) for which \(f\) is continuous at \(1\).
3. For any other value of \(c\), construct a sequence \(x_n\to1\) that demonstrates the failure of sequential continuity.`,
                "左右表达式在 1 处都给出 2，因此只有 c=2 才能使点值接上。",
                [
                  S(
                    "计算左右极限",
                    "计算",
                    T`\lim_{x\to1^-}f(x)=2,\qquad\lim_{x\to1^+}f(x)=2`,
                    T`当 \(x\to1^-\) 时使用 \(x+1\)：

\[
\lim_{x\to1^-}f(x)=1+1=2.
\]

当 \(x\to1^+\) 时使用 \(3-x\)：

\[
\lim_{x\to1^+}f(x)=3-1=2.
\]`,
                    [
                      N("分段取支", "靠近点时使用点所在那一侧的分段表达式。")
                    ]
                  ),
                  S(
                    "令点值接上双侧极限",
                    "结论",
                    T`c=f(1)=2`,
                    T`双侧极限存在且为 \(2\)。连续要求

\[
f(1)=\lim_{x\to1}f(x),
\]

所以必须取 \(c=2\)。`,
                    [
                      N("连续条件", "点值必须等于双侧极限。", "定义")
                    ]
                  ),
                  S(
                    "坏点序列证明不连续",
                    "构造",
                    T`x_n=1+\frac1n\to1,\qquad f(x_n)=2-\frac1n\to2\ne c`,
                    T`若 \(c\ne2\)，取

\[
x_n=1+\frac1n.
\]

则 \(x_n>1\)，\(x_n\to1\)，并且

\[
f(x_n)=3-\left(1+\frac1n\right)=2-\frac1n\to2.
\]

但序列连续性要求 \(f(x_n)\to f(1)=c\)。因为 \(2\ne c\)，所以失败。`,
                    [
                      N("序列连续性", "任意 xₙ→a 都应有 f(xₙ)→f(a)。", "定义")
                    ]
                  )
                ],
                T`左右极限都为 2，因此 c=2 时连续；若 c≠2，序列 xₙ=1+1/n 给出 f(xₙ)→2≠c。`
              )
            ]
          },
          {
            id: "kp-3-11",
            section: "3.11",
            titleZh: "无穷远极限与不定式",
            titleEn: "Limits at infinity and infinite limits",
            summaryZh: "无穷远端极限先化成 \(1/x\to0\) 或使用终局界定义；∞−∞、∞/∞ 只是形式，必须回到具体函数比较。",
            lessonHref: "../week1/Week1学习站.html#concept-function-limit",
            exercises: [
              E(
                "3.40",
                "涉及无穷的极限",
                "Limits involving infinity",
                "证明 + 计算",
                T`1. Prove from Definition 3.35 that
\[
\lim_{x\to\infty}\frac{2x+1}{x}=2.
\]
2. Prove from Definition 3.36 that
\[
\lim_{x\to1^+}\frac1{x-1}=+\infty,
\]
and state the corresponding left-hand limit.
3. Suppose \(f(x)\to+\infty\) as \(x\to\infty\). Explain why \(1/f(x)\) is defined for sufficiently large \(x\), and prove \(1/f(x)\to0\).
4. Evaluate
\[
\lim_{x\to\infty}\frac{2x^2-x}{5x^2+3}
\]
using limit laws.
5. Use continuity composition to evaluate
\[
\lim_{x\to\infty}\cos\left(\frac{\pi x}{x+1}\right).
\]
6. For \(f=x+1\), \(g=x\), \(h=x^2\), find the limits of \(f-g\), \(h-g\), \(f/g\), \(h/g\), and explain why \(\infty-\infty\), \(\infty/\infty\) are called indeterminate.`,
                "分别用 x→∞ 的最终误差定义、单侧无穷界、倒数、同除最高次项和余弦连续性处理各小题。",
                [
                  S(
                    "两端无穷极限的定义验证",
                    "证明",
                    T`\left|\frac{2x+1}{x}-2\right|=\frac1x`,
                    T`给定 \(\varepsilon>0\)，取 \(X=1/\varepsilon\)。当 \(x>X\) 时，

\[
\left|\frac{2x+1}{x}-2\right|
=\left|2+\frac1x-2\right|
=\frac1x
<\varepsilon.
\]

所以极限为 \(2\)。

对第二问，给定 \(M>0\)，取 \(\delta=1/M\)。若 \(0<x-1<\delta\)，则 \(x-1<1/M\)，从而

\[
\frac1{x-1}>M.
\]

因此右极限为 \(+\infty\)。当 \(x\to1^-\) 时，\(x-1<0\)，函数值趋于 \(-\infty\)。`,
                    [
                      N("x→∞ 定义", "任意 ε>0 都有 X，使 x>X 时误差小于 ε。", "定义"),
                      N("单侧无穷", "任意 M>0 都有 δ，使从对应一侧靠近时函数值大于 M。", "定义")
                    ]
                  ),
                  S(
                    "证明无穷大的倒数为零",
                    "证明",
                    T`f(x)>1/\varepsilon\Longrightarrow0<\frac1{f(x)}<\varepsilon`,
                    T`由 \(f(x)\to+\infty\)，存在 \(X\)，使 \(x>X\) 时 \(f(x)>1\)。所以 \(f(x)\ne0\)，\(1/f(x)\) 在这些 \(x\) 上有定义。

给定 \(\varepsilon>0\)，再增大 \(X\)，使 \(x>X\) 时

\[
f(x)>\frac1\varepsilon.
\]

因为 \(f(x)>0\)，取倒数得到

\[
0<\frac1{f(x)}<\varepsilon.
\]

所以 \(1/f(x)\to0\)。`,
                    [
                      N("倒数的方向", "正数取倒数时会反转不等式方向。")
                    ]
                  ),
                  S(
                    "有理函数与余弦复合",
                    "计算",
                    T`\frac{2x^2-x}{5x^2+3}\to\frac25,\qquad\cos\left(\frac{\pi x}{x+1}\right)\to-1`,
                    T`对第一个有理函数，分子分母同除 \(x^2\)：

\[
\frac{2-1/x}{5+3/x^2}\to\frac25.
\]

这里使用了 \(1/x\to0\) 与 \(1/x^2\to0\)。

对余弦极限，先看内层：

\[
\frac{\pi x}{x+1}
=\pi\left(1-\frac1{x+1}\right)\to\pi.
\]

余弦函数在 \(\pi\) 连续，所以

\[
\lim_{x\to\infty}\cos\left(\frac{\pi x}{x+1}\right)
=\cos\pi=-1.
\]`,
                    [
                      N("最高次项", "有理函数在无穷远处由同次最高项系数之比给出极限。"),
                      N("连续复合", "内层极限落在连续函数定义域内时，可以穿过连续函数取极限。")
                    ]
                  ),
                  S(
                    "比较不定式",
                    "概念",
                    T`f-g=1,\quad h-g=x^2-x\to+\infty,\quad f/g\to1,\quad h/g\to+\infty`,
                    T`直接计算：

\[
(x+1)-x=1,
\]

\[
x^2-x\to+\infty,
\]

\[
\frac{x+1}{x}=1+\frac1x\to1,
\]

\[
\frac{x^2}{x}=x\to+\infty.
\]

同样是“两个趋于无穷的量相减”，结果可以是常数，也可以趋于无穷；同样是“无穷除以无穷”，结果可以是 1，也可以趋于无穷。因此 \(\infty-\infty\) 和 \(\infty/\infty\) 不能直接赋一个值，必须比较具体表达式的变化速度。`,
                    [
                      N("不定式", "符号只记录形式，真正极限必须由函数的具体增长关系决定。", "易错点")
                    ]
                  )
                ],
                T`(2x+1)/x→2；1/(x−1) 右极限 +∞、左极限 −∞；f→∞ 时 1/f→0；有理式 2/5；余弦极限 −1；不同增长方式说明 ∞−∞、∞/∞ 是不定式。`
              )
            ]
          }
        ]
      }
    ]
  });
})();
