window.MFC_WEEK2_LESSONS = [
  {
    id: "derivative-definition",
    station: "derivative-foundations",
    number: "01",
    titleZh: "从平均变化率到导数",
    titleEn: "From average change to the derivative",
    source: "Definitions 4.1–4.2; Examples 4.3–4.5 · Lecture Notes p.3–5",
    english: "The average rate of change from a to a+h is [f(a+h) − f(a)]/h. The derivative f′(a) is the finite limit of this quotient as h → 0.",
    enSummary: "A derivative is a secant slope after the two points have been pushed together into a tangent.",
    theorem: {
      statementZh: "若 f 在 a 处可导，则 f′(a) 是差商 [f(a+h)−f(a)]/h 当 h→0 时的有限极限",
      statementEn: "If f is differentiable at a, then f′(a) is the finite limit of [f(a+h) − f(a)]/h as h→0",
      hypotheses: [
        "f 在 a 的某去心邻域内有定义",
        "h ≠ 0，先化简约分再取极限",
        "极限必须有限且存在"
      ],
      formula: "f′(a) = lim h→0 [f(a+h) − f(a)] / h",
      oneLineZh: "导数就是割线斜率在两点贴合时的极限。"
    },
    insight: "先化简约分，再让 h 趋近 0。",
    numericProbe: {
      zh: "f(x)=x²，a=1：h=0.1 得 2.1；h=0.01 得 2.01；h=0.001 得 2.001",
      en: "For f(x)=x² at a=1: h=0.1 gives 2.1; h=0.01 gives 2.01; h=0.001 gives 2.001"
    },
    networkGoal: "把“瞬时变化”翻译成差商极限",
    networkRisk: "一开始就代 h = 0",
    animation: "derivative-definition",
    animationTitle: "割线随 h 缩小而变成切线",
    symbols: [
      ["h", "input change", "输入改变量", "h = x − a"],
      ["f(a+h)−f(a)", "output change", "输出改变量", "纵向差"],
      ["difference quotient", "差商", "平均变化率", "输出差除以输入差"],
      ["f′(a)", "derivative at a", "a 点瞬时变化率", "差商的有限极限"]
    ],
    qaSteps: [
      {
        kind: "definition",
        labelZh: "符号含义",
        labelEn: "Symbols",
        questionZh: "f(a+h)、f(a)、h 和 f′(a) 各是什么，为什么不能直接代 h=0？",
        questionEn: "What does each symbol mean in the difference quotient?",
        hint: "导数研究的是 h 越来越小，而不是 h 永远等于 0。",
        answerZh: "结论：先认符号，再化简，不能提前把 h 写成 0。f(a) 是起点输出，a+h 是邻近输入，f(a+h) 是邻近输出，h 是输入差，f′(a) 是差商的有限极限；直接代 0 会得到 0/0。",
        formula: "f′(a) = lim h→0 [f(a+h) − f(a)]/h"
      },
      {
        kind: "computation",
        labelZh: "用定义算一次",
        labelEn: "First-principles computation",
        questionZh: "用定义求 f(x)=x² 在 a 点的导数，怎样展开并约分？",
        questionEn: "How does the first-principles calculation for x² work?",
        hint: "先展开 (a+h)²，再消去 a²。",
        answerZh: "结论：x² 的导数是 2x。展开得 (a+h)²−a²=2ah+h²；在 h≠0 时除以 h 得 2a+h；再令 h→0，得到 f′(a)=2a。",
        formula: "f′(a) = lim h→0 (2ah + h²) / h = 2a"
      },
      {
        kind: "derivation",
        labelZh: "为什么不能代 h=0",
        labelEn: "Why h ≠ 0",
        questionZh: "为什么取极限前必须始终保持 h≠0？",
        questionEn: "Why must h ≠ 0 be maintained until the limit stage?",
        hint: "分母含 h，先约分才能避开 0/0。",
        answerZh: "结论：h=0 会让分母为零。去心极限只让 h 靠近 0 而不等于 0，所以约分合法；整理成 2a+h 后才能取极限，否则会丢失原差商的信息。",
        formula: "h ≠ 0; f′(a) = lim h→0 (2a + h)"
      },
      {
        kind: "boundary",
        labelZh: "反例：尖角",
        labelEn: "Boundary case: a corner",
        questionZh: "|x| 在 0 处左右差商为 1 和 −1，为什么因此不可导？",
        questionEn: "Why do the one-sided difference quotients 1 and −1 make |x| non-differentiable at 0?",
        hint: "可导要求双侧差商趋于同一个有限数。",
        answerZh: "结论：|x| 在 0 处不可导。h>0 时差商为 1，h<0 时为 −1；左右极限不同，双侧差商极限不存在，因此没有唯一切线斜率。",
        formula: "( |0 + h| − |0| ) / h = sign(h), h ≠ 0"
      }
    ],
    counterexample: {
      wrong: "直接把 h=0 代入 (f(a+h)−f(a))/h 得到 0/0，所以导数不存在。",
      correct: "0/0 只说明原式不能直接代入；应先在 h≠0 下化简约分，再取 h→0。",
      why: "导数定义使用的是去心极限。"
    },
    retellZh: "导数是把割线两端越推越近后得到的切线斜率。",
    retellEn: "A derivative is the limiting slope of secants as the input separation tends to zero.",
    check: "为什么 f′(a) 是一个数，而 f′ 是一个函数？",
    answer: "f′(a) 固定了输入 a；f′ 把每个可导点 x 对应到导数值 f′(x)。"
  },
  {
    id: "differentiability-continuity",
    station: "derivative-foundations",
    number: "02",
    titleZh: "可导与连续：单向推出",
    titleEn: "Differentiability and continuity",
    source: "Theorem 4.7; Example 4.8 · Lecture Notes p.5–6",
    english: "If f is differentiable at an interior point a, then f is continuous at a. The converse is false: continuity does not guarantee differentiability.",
    enSummary: "Differentiability is stronger than continuity. A corner can stay connected while preventing one common tangent slope.",
    networkGoal: "分清连续与可导的方向",
    networkRisk: "把连续当作可导",
    animation: "differentiability-continuity",
    animationTitle: "角点左右割线趋于不同方向",
    symbols: [
      ["continuous", "连续", "附近极限等于点值", "无断点"],
      ["differentiable", "可导", "差商有限极限存在", "有共同切线"],
      ["⇒", "implies", "前件成立就推出后件", "可导 ⇒ 连续"],
      ["converse", "逆命题", "把箭头反过来", "连续 ⇏ 可导"]
    ],
    qaSteps: [
      {
        questionZh: "一条曲线不断开，为什么仍可能在某一点没有唯一切线？",
        questionEn: "Why can a connected curve fail to have a tangent?",
        hint: "把 |x| 画出来看看原点两侧。",
        answerZh: "不断开只保证从左右靠近时输出接近同一个高度。有切线还要求差商从左右两侧趋向同一个斜率；尖角处两条边方向不同，所以没有共同斜率。",
        formula: "连续性只管输出是否接上，可导性还要管斜率是否统一。"
      },
      {
        questionZh: "为什么可导会推出连续？差商极限存在时，输出的变化会发生什么？",
        questionEn: "Why does differentiability imply continuity?",
        hint: "把 f(x)−f(a) 写成差商乘 x−a。",
        answerZh: "f(x)−f(a)=[(f(x)−f(a))/(x−a)](x−a)。差商趋于有限数 f′(a)，而 x−a→0，所以输出差趋于 0，即 f(x)→f(a)，函数连续。",
        formula: "f′(a) 存在 ⇒ lim f(x)=f(a)。"
      },
      {
        questionZh: "对 |x| 在 0 处，左右差商分别算出来是什么？",
        questionEn: "Compute the one-sided difference quotients for |x| at 0.",
        hint: "分别令 h>0 和 h<0。",
        answerZh: "h>0 时 |h|/h=1；h<0 时 |h|/h=−1。因此右导数为 1、左导数为 −1，双侧差商不存在共同极限。",
        formula: "f′(0⁺)=1，f′(0⁻)=−1。"
      },
      {
        questionZh: "如果函数在某点已经确定不连续，能否还在那里可导？",
        questionEn: "Can a discontinuous function be differentiable at that point?",
        hint: "利用可导 ⇒ 连续的逆否命题。",
        answerZh: "不能。因为可导推出连续，逆否就是“不连续推出不可导”。但反过来，连续不一定可导，所以连续只通过第一道门。",
        formula: "不连续 ⇒ 不可导。"
      },
      {
        questionZh: "怎样用一句话向别人说清“可导”和“连续”的强弱关系？",
        questionEn: "Summarise the relationship between the two notions.",
        hint: "可导的需求更多还是更少？",
        answerZh: "可导要求更高，它不仅要求曲线不断开，还要求局部斜率稳定成一个有限数。因此可导集合比连续集合更严格。",
        formula: "differentiable ⇒ continuous。"
      }
    ],
    counterexample: {
      wrong: "|x| 在 0 连续，所以它在 0 可导。",
      correct: "它连续但不可导，因为左右斜率分别为 −1 和 1。",
      why: "连续性不控制切线的唯一性。"
    },
    retellZh: "可导必然连续，连续只保证不断开，不保证没有尖角。",
    retellEn: "Differentiability implies continuity, but continuity alone does not imply differentiability.",
    check: "连续但不可导的最小图形例子是什么？",
    answer: "f(x)=|x| 在 x=0。"
  },
  {
    id: "exp-trig-derivatives",
    station: "differentiation-rules",
    number: "03",
    titleZh: "指数与三角函数的导数",
    titleEn: "Derivatives of exponential and trigonometric functions",
    source: "Example 4.9; Proposition 4.10; Example 4.11 · Lecture Notes p.7–8",
    english: "The derivatives are (eˣ)′=eˣ, (sin x)′=cos x, and (cos x)′=−sin x, derived from fundamental limits at zero.",
    enSummary: "The basic formula comes from a difference quotient whose x-dependent part factors away, leaving a standard limit at zero.",
    networkGoal: "从差商得到基本函数导数",
    networkRisk: "循环使用 L’Hôpital 证明基础极限",
    animation: "exp-trig-derivatives",
    animationTitle: "单位圆上的 sin 与 cos 斜率联动",
    symbols: [
      ["e", "Euler's number", "自然指数底数", "约 2.718"],
      ["sec x", "secant", "1/cos x", "tan 的导数"],
      ["sin h / h", "fundamental limit", "弧度制下趋于 1", "三角函数导数基础"],
      ["radian", "弧度", "角度的自然单位", "公式成立的前提"]
    ],
    qaSteps: [
      {
        questionZh: "函数从 x 变到 x+h 时，eˣ 和 sin x 各自会比原来多出什么结构？",
        questionEn: "Which algebraic identities separate the difference quotients?",
        hint: "指数有 e^{x+h}=eˣeʰ，正弦有加法公式。",
        answerZh: "e^{x+h}=eˣeʰ，可以把不依赖 h 的 eˣ 提到极限外；sin(x+h)=sin x cos h+cos x sin h，可以拆成两个基本极限。",
        formula: "指数律和三角函数加法公式负责分离 x 与 h。"
      },
      {
        questionZh: "(eʰ−1)/h、sin h/h、(cos h−1)/h 在 h→0 时的值分别是什么？",
        questionEn: "State the three fundamental limits at zero.",
        hint: "前两个趋近 1，最后一个趋近 0。",
        answerZh: "它们分别趋于 1、1、0。这里的角必须用弧度制；如果使用角度制，sin h/h 会多出 π/180。",
        formula: "(eʰ−1)/h→1，sin h/h→1，(cos h−1)/h→0。"
      },
      {
        questionZh: "从 sin(x+h) 的差商怎样得到 (sin x)′=cos x？",
        questionEn: "Derive the derivative of sine from its addition formula.",
        hint: "把 sin x 与 cos x 当作相对于 h 的常数。",
        answerZh: "差商等于 sin x·(cos h−1)/h + cos x·(sin h/h)。分别取极限得 sin x·0+cos x·1=cos x。同理，余弦的加法公式给出 (cos x)′=−sin x。",
        formula: "(sin x)′=cos x；(cos x)′=−sin x。"
      },
      {
        questionZh: "为什么不能用 L’Hôpital 法则来证明这个 sin h/h 的极限？",
        questionEn: "Why is L’Hôpital circular for this foundational limit?",
        hint: "L’Hôpital 需要先知道 sin 的导数，而它是怎样得到的？",
        answerZh: "求 (sin x)′ 的过程本身使用了 sin h/h→1。若再用需要 sin 导数公式的 L’Hôpital 去证明 sin h/h，就会形成循环论证。",
        formula: "基础极限 → sin 导数 → 才能谈相关 L’Hôpital 应用。"
      },
      {
        questionZh: "用一句话说明这三个公式的共同来源。",
        questionEn: "What is the common source of these derivative formulas?",
        hint: "它们不是额外公理。",
        answerZh: "它们都来自导数定义，只在把差商整理后归结为 h→0 的三个基础极限；所以记忆公式的同时要知道弧度和基础极限。",
        formula: "导数公式 = 差商 + 基本极限。"
      }
    ],
    counterexample: {
      wrong: "用 L’Hôpital 计算 lim sin h/h 来证明 sin x 的导数。",
      correct: "该 L’Hôpital 计算依赖 sin 的导数，而 sin 的导数又依赖这个极限，属于循环。",
      why: "定理使用顺序不能倒置。"
    },
    retellZh: "eˣ、sin 和 cos 的导数来自差商中的三个零处极限，角度必须用弧度。",
    retellEn: "The elementary derivatives come from standard limits at zero and the addition or index identities.",
    check: "tan x 的导数是什么，定义域有何限制？",
    answer: "(tan x)′=sec²x，要求 cos x≠0。"
  },
  {
    id: "derivative-rules",
    station: "differentiation-rules",
    number: "04",
    titleZh: "基本求导工具箱",
    titleEn: "The basic differentiation toolkit",
    source: "Theorems 4.12–4.17; Examples 4.14–4.20 · Lecture Notes p.8–11",
    english: "Linearity, product and quotient rules build derivatives from simpler functions. For a product, (fg)′=f′g+fg′; for a quotient, (f/g)′=(f′g−fg′)/g².",
    enSummary: "Recognition of the outermost arithmetic operation selects the first rule. Products and quotients do not differentiate term by term.",
    networkGoal: "掌握线性、乘积和商法则",
    networkRisk: "把 (fg)′ 写成 f′g′",
    animation: "derivative-rules",
    animationTitle: "矩形变化展示乘积法则的两块面积",
    symbols: [
      ["xʳ", "power", "x 的 r 次幂", "x>0 时 r xʳ⁻¹"],
      ["cf+dg", "linearity", "常数倍与和", "分别求导"],
      ["fg", "product", "两个函数相乘", "两部分的贡献相加"],
      ["f/g", "quotient", "分子除以分母", "分母平方"]
    ],
    qaSteps: [
      {
        questionZh: "两个函数相加时，变化率为什么可以直接相加？",
        questionEn: "Why is differentiation linear over sums?",
        hint: "把差商按加法拆开。",
        answerZh: "差商对和可以逐项拆分，两个函数的差商各自有极限时，和的差商极限就是两个导数相加。常数倍同理，只是把常数提出差商。",
        formula: "(cf+dg)′=cf′+dg′。"
      },
      {
        questionZh: "为什么两个函数相乘不能只把两个导数相乘？乘积法则为什么有两项？",
        questionEn: "Why does the product rule contain two terms?",
        hint: "矩形面积同时由长和宽变化。",
        answerZh: "两因子都在变化：第一项记录 f 变化时乘当前 g，第二项记录 g 变化时乘当前 f。缺少第二项就是漏掉另一个因子的贡献。",
        formula: "(fg)′=f′g+fg′。"
      },
      {
        questionZh: "求 f(x)=x²eˣ 的导数，怎样按结构选择规则？",
        questionEn: "Differentiate x²eˣ using the product rule.",
        hint: "最外层是乘法。",
        answerZh: "先写 (x²)′eˣ+x²(eˣ)′，得到 2xeˣ+x²eˣ=xeˣ(x+2)。",
        formula: "f′(x)=xeˣ(x+2)。"
      },
      {
        questionZh: "商法则中分子两项的顺序为什么重要？",
        questionEn: "Why does the order in the quotient rule matter?",
        hint: "交换两项会改变符号。",
        answerZh: "正确顺序是“分子的导数乘分母，减去分子乘分母的导数”。交换会得到相反符号。还要检查原分母非零，因为商函数本身要求如此。",
        formula: "(f/g)′=(f′g−fg′)/g²。"
      },
      {
        questionZh: "遇到能先化简的分式，什么时候应先化简再求导？",
        questionEn: "When is simplification before differentiation better?",
        hint: "先检查是否存在公共因式。",
        answerZh: "如果代数化简明显缩短计算，可以先化简，但必须保留原函数定义域。例如 (x³+2x)/x=x²+2 仅在 x≠0 上成立，导数公式也只在这个定义域使用。",
        formula: "化简不能悄悄扩大定义域。"
      }
    ],
    counterexample: {
      wrong: "因为 (x·x)′=2x，所以乘积法则应该是 f′g′。",
      correct: "f′g′ 对 x·x 只给 1，正确乘积法则是 f′g+fg′=2x。",
      why: "乘法中的两个因子都在变化。"
    },
    retellZh: "加法逐项求导；乘积有两个贡献；商要按固定顺序并检查分母。",
    retellEn: "Use linearity for sums, both terms for products, and the ordered numerator for quotients.",
    check: "d/dx x¹⁰ 等于什么？",
    answer: "10x⁹。"
  },
  {
    id: "chain-rule",
    station: "differentiation-rules",
    number: "05",
    titleZh: "链式法则与混合求导",
    titleEn: "The chain rule and mixed differentiation",
    source: "Theorem 4.21; Examples 4.22–4.27; Exercise 4.29 · Lecture Notes p.11–14",
    english: "If u is differentiable at x and v is differentiable at u(x), then (v∘u)′(x)=v′(u(x))u′(x).",
    enSummary: "Differentiate the outermost layer, keep the inside intact, then multiply by the derivative of the inside.",
    networkGoal: "按最外层结构拆解复合函数",
    networkRisk: "漏乘内层导数",
    animation: "chain-rule",
    animationTitle: "复合机器逐层传递变化率",
    symbols: [
      ["v∘u", "composition", "先 u 后 v", "v(u(x))"],
      ["outer", "外层函数", "最后执行的操作", "先处理"],
      ["inner", "内层函数", "先接收 x", "最后乘其导数"],
      ["dy/du", "outer derivative", "相对于外层输入的变化率", "保留下一个因子"]
    ],
    qaSteps: [
      {
        questionZh: "把 (1+x²)⁵ 看成一串操作，哪一步先发生，哪一步最后发生？",
        questionEn: "What is the inside and outside of (1+x²)⁵?",
        hint: "先得到括号里的数，再取五次方。",
        answerZh: "内层先做 1+x²，得到 u；外层再把 u 取 5 次方。变化从 x 传到 u，再从 u 传到最终输出。",
        formula: "u=1+x²，y=u⁵。"
      },
      {
        questionZh: "为什么链式法则最后要乘 u′(x)？",
        questionEn: "Why multiply by the derivative of the inside?",
        hint: "x 的变化先被内层放大了多少？",
        answerZh: "外层只描述 u 变化时 y 如何变化；但 u 本身对 x 的变化速度是 u′(x)。两段变化率必须相乘，才能得到 y 对 x 的变化率。",
        formula: "dy/dx=(dy/du)(du/dx)。"
      },
      {
        questionZh: "求 (1+x²)⁵ 和 sin(e^{x²}) 的导数，怎样逐层进行？",
        questionEn: "Differentiate two nested compositions step by step.",
        hint: "每次只处理最外层，再处理括号内部。",
        answerZh: "(1+x²)⁵ 得 5(1+x²)⁴·2x。sin(e^{x²}) 先由 sin 得 cos(e^{x²})，再乘 e^{x²} 的导数 e^{x²}·2x，共为 2xe^{x²}cos(e^{x²})。",
        formula: "外层导数 × 内层导数 × 更内层导数。"
      },
      {
        questionZh: "当乘积、商和复合同时出现时，怎样决定第一条规则？",
        questionEn: "How do you choose the first differentiation rule?",
        hint: "先看整个表达式最后执行什么运算。",
        answerZh: "看最外层：如果整体是乘积，先乘积法则；整体是商，先商法则；整体是复合，先链式法则。然后对每个子部分继续识别更内层结构。",
        formula: "structure first, rule second。"
      },
      {
        questionZh: "用一句话复述链式法则。",
        questionEn: "State the chain rule in plain language.",
        hint: "外层变化率乘内层变化率。",
        answerZh: "一个变化要先经过内层、再经过外层传递，最终变化率是沿途每一层变化率的乘积。",
        formula: "复合变化率逐层相乘。"
      }
    ],
    counterexample: {
      wrong: "((1+x²)⁵)′=5(1+x²)⁴。",
      correct: "还必须乘内层导数 2x，得到 10x(1+x²)⁴。",
      why: "外层幂只描述了相对于括号整体的变化率。"
    },
    retellZh: "链式法则就是外层导数乘内层导数，逐层从外往内拆。",
    retellEn: "Differentiate the outer function, keep the inner intact, and multiply by the inner derivative.",
    check: "(e^{−2x})′ 是什么？",
    answer: "−2e^{−2x}。"
  },
  {
    id: "inverse-derivative",
    station: "advanced-differentiation",
    number: "06",
    titleZh: "反函数导数",
    titleEn: "Derivatives of inverse functions",
    source: "Theorem 5.1; Examples 5.2–5.4 · Lecture Notes p.15–18",
    english: "If f is differentiable at a, f′(a)≠0, and b=f(a), then (f⁻¹)′(b)=1/f′(a).",
    enSummary: "An inverse swaps horizontal and vertical changes, so tangent slopes reciprocate after the point is matched correctly.",
    networkGoal: "通过原函数的 a 点求逆函数在 b 点的导数",
    networkRisk: "把 f′(b) 放进分母",
    animation: "inverse-derivative",
    animationTitle: "图像关于 y=x 反射，斜率取倒数",
    symbols: [
      ["f⁻¹", "inverse function", "把输出送回输入", "不是倒数"],
      ["a", "original input", "原函数输入", "b=f(a)"],
      ["b", "inverse input", "原函数输出", "a=f⁻¹(b)"],
      ["1/f′(a)", "reciprocal slope", "匹配点的原斜率倒数", "前提非零"]
    ],
    qaSteps: [
      {
        questionZh: "如果一条切线斜率是 3，把整张图沿 y=x 翻过去后，新切线斜率应该是什么？",
        questionEn: "How does slope change after reflection in y=x?",
        hint: "纵向变化和横向变化会互换。",
        answerZh: "原斜率是“纵变/横变”，反射后变成“横变/纵变”，因此新斜率是原斜率的倒数 1/3。",
        formula: "m → 1/m。"
      },
      {
        questionZh: "为什么求 (f⁻¹)′(b) 要先找到 a=f⁻¹(b)？",
        questionEn: "Why must we identify the original input a?",
        hint: "b 是输出，原函数导数必须在其输入处计算。",
        answerZh: "b 属于原函数的值域。逆函数在 b 点的局部行为对应原函数在 a 点，其中 b=f(a)。因此要用 f′(a)，而不是 f′(b)。",
        formula: "(f⁻¹)′(b)=1/f′(a)。"
      },
      {
        questionZh: "f(x)=x³，求 (f⁻¹)′(8) 时应先算哪一个原函数输入？",
        questionEn: "Apply the inverse derivative formula at 8.",
        hint: "先解 8=x³。",
        answerZh: "a=2；f′(x)=3x²，f′(2)=12，所以逆函数在 8 的导数是 1/12。",
        formula: "(f⁻¹)′(8)=1/12。"
      },
      {
        questionZh: "如果 f′(a)=0，为什么逆函数导数公式不能使用？",
        questionEn: "Why does zero slope block the inverse derivative formula?",
        hint: "倒数的分母能为零吗？",
        answerZh: "公式需要除以 f′(a)，而零没有有限倒数。几何上原切线可能水平，反射后可能变为竖直切线，逆函数在该点可能没有有限导数。",
        formula: "f′(a)=0 ⇒ 不能用 reciprocal formula。"
      },
      {
        questionZh: "用一句话说清逆函数导数与倒数的区别。",
        questionEn: "Distinguish the inverse derivative from a reciprocal function.",
        hint: "f⁻¹ 是“反向函数”，不是 1/f。",
        answerZh: "f⁻¹ 把输出映射回输入；它的导数来自匹配点的斜率倒数。这个倒数与本函数值 f(x) 的倒数 1/f(x) 无关。",
        formula: "inverse function ≠ reciprocal value。"
      }
    ],
    counterexample: {
      wrong: "(f⁻¹)′(8)=1/f′(8)。",
      correct: "先找 a=f⁻¹(8)=2，再算 1/f′(2)。",
      why: "两个导数在对应点取值，不能直接拿同一个 x 代入。"
    },
    retellZh: "逆函数切线斜率是原对应点斜率的倒数，取导数的位置必须经过 f⁻¹ 匹配。",
    retellEn: "At corresponding points, inverse tangent slopes are reciprocals.",
    check: "为什么 f(x)=x³ 在 0 处的逆函数导数不能直接用 1/f′(0)？",
    answer: "f′(0)=0，公式前提不满足，而且 x^{1/3} 在 0 没有有限导数。"
  },
  {
    id: "lhopital",
    station: "advanced-differentiation",
    number: "07",
    titleZh: "L’Hôpital 法则与不定式",
    titleEn: "L’Hôpital’s Rule and indeterminate forms",
    source: "Theorem 5.6; Examples 5.8–5.15; Remark 5.7 · Lecture Notes p.18–21",
    english: "For a quotient with a 0/0 or ∞/∞ indeterminate form, under suitable differentiability and non-zero-denominator conditions, the quotient has the same limit as f′/g′ when that limit exists.",
    enSummary: "Check the indeterminate form and all hypotheses first. The rule compares limits; it never says the original quotient equals the derivative quotient as a function.",
    networkGoal: "判断何时可以安全使用 L’Hôpital",
    networkRisk: "看到分数就求导",
    animation: "lhopital",
    animationTitle: "0/0 形式进入导数商的检查通道",
    symbols: [
      ["0/0", "indeterminate", "无法直接定值的形式", "候选使用规则"],
      ["∞/∞", "indeterminate", "无穷比较的形式", "候选使用规则"],
      ["f′/g′", "derivative quotient", "分子分母分别求导", "新极限"],
      ["hypothesis", "前提", "规则成立所需条件", "可导且分母导数非零"]
    ],
    qaSteps: [
      {
        questionZh: "为什么 0/0 不能直接得到 0、1 或“不存在”中的任何一个固定答案？",
        questionEn: "Why is 0/0 indeterminate?",
        hint: "x/x、x²/x 和 x/x² 的分子分母都趋于 0。",
        answerZh: "这些简单例子的结果分别可以为 1、0 或趋于无穷，所以仅知道两边都趋近 0 不足以决定比值。必须继续化简或比较变化速度。",
        formula: "0/0 是待判断形式，不是数值。"
      },
      {
        questionZh: "使用 L’Hôpital 前必须检查哪些条件？",
        questionEn: "What must be checked before applying the rule?",
        hint: "商、形式、可导、分母、新极限。",
        answerZh: "确认整体是商；代入确实是 0/0 或 ∞/∞；附近可导且分母及其导数不为零；新的导数商有极限。只满足“是分数”不够。",
        formula: "形式 + 可导性 + 非零分母 + 新极限。"
      },
      {
        questionZh: "求 lim x→0 (1−cos x)/x² 时，规则执行后发生什么？",
        questionEn: "Apply L’Hôpital to (1−cos x)/x².",
        hint: "第一次求导后得到 sin x/(2x)。",
        answerZh: "原式是 0/0；求导得 sin x/(2x)，再结合 sin x/x→1，得到 1/2。也可以再确认一次它仍是 0/0 后再求一次。",
        formula: "lim = 1/2。"
      },
      {
        questionZh: "为什么 lim x→1 (2x−1)/x 不能使用 L’Hôpital？",
        questionEn: "Why does the rule fail on a 1/1 form?",
        hint: "先直接代入看看。",
        answerZh: "代入得到 1/1，已经是可直接求出的有限值，不是 0/0 或 ∞/∞。错误地对分子分母求导会得到 2，而正确极限为 1。",
        formula: "只有正确的不定式才进入 L’Hôpital 通道。"
      },
      {
        questionZh: "L’Hôpital 为什么是关于极限的规则，而不是函数恒等式？",
        questionEn: "Why is the rule a statement about limits?",
        hint: "f/g 与 f′/g′ 一般根本不是同一个函数。",
        answerZh: "例如 x²/x 与 2x/1 作为函数在大部分点都不相等，但去心极限可以相同。规则比较的是附近极限，不是把原函数整体替换。",
        formula: "lim f/g = lim f′/g′，并非 f/g ≡ f′/g′。"
      }
    ],
    counterexample: {
      wrong: "任何分式都可以把分子分母分别求导。",
      correct: "只有在满足不定式形式和规则前提时，才可以比较相应的极限。",
      why: "L’Hôpital 是条件定理，不是商的本恒等式。"
    },
    retellZh: "L’Hôpital 专门处理符合条件的 0/0 或∞/∞，先验形式与前提，再比较导数商的极限。",
    retellEn: "Use L’Hôpital only for checked indeterminate quotient forms and compare limits, not functions.",
    check: "∞−∞ 能直接使用 L’Hôpital 吗？",
    answer: "不能；应先改写为适合的商或指数形式。"
  },
  {
    id: "implicit-differentiation",
    station: "advanced-differentiation",
    number: "08",
    titleZh: "隐函数求导",
    titleEn: "Implicit differentiation",
    source: "Examples 5.17–5.18; Remark 5.19 · Lecture Notes p.22–23",
    english: "When a relation locally determines y as a differentiable function y(x), differentiate both sides with respect to x. Every derivative of a y-expression includes a factor dy/dx.",
    enSummary: "Treat y as an implicit function of x. Use the chain rule on y and the product rule when x and y occur together.",
    networkGoal: "从不是 y=f(x) 的方程求切线",
    networkRisk: "把 y 当常数",
    animation: "implicit-differentiation",
    animationTitle: "圆上的 y 随 x 移动，切线斜率来自 dy/dx",
    symbols: [
      ["F(x,y)=0", "implicit relation", "方程给出的点集", "不必显式解出 y"],
      ["y(x)", "implicit function", "局部把 y 看成 x 的函数", "可以求导"],
      ["dy/dx", "implicit derivative", "y 对 x 的变化率", "保留这个因子"],
      ["d(xy)/dx", "product relation", "x 和 y 都变化", "y+x y′"]
    ],
    qaSteps: [
      {
        questionZh: "圆的方程 x²+y²=r² 没有直接把 y 写成 x 的公式，为什么仍然能研究它的切线？",
        questionEn: "Why can we differentiate a relation without solving for y?",
        hint: "在局部一段圆弧上，y 仍然随 x 变化。",
        answerZh: "只要在关注点附近，方程能局部确定 y=y(x)，就可以把 y 看成隐函数并对两边关于 x 求导，不必先写出显式公式。",
        formula: "局部 y=y(x)。"
      },
      {
        questionZh: "对 y² 关于 x 求导，为什么得到 2y·dy/dx，而不是仅 2y？",
        questionEn: "Why does differentiating y² produce 2y y′?",
        hint: "外层平方后面还要穿过 y(x) 这一层。",
        answerZh: "y² 是外层 u² 和内层 u=y(x) 的复合。链式法则给 2y·y′；少掉 y′ 就等于把 y 当成了常数。",
        formula: "d(y²)/dx=2y y′。"
      },
      {
        questionZh: "从 x²+y²=r² 怎样得到 dy/dx=−x/y？",
        questionEn: "Differentiate the circle equation.",
        hint: "逐项求导并收集 y′。",
        answerZh: "两边求导得 2x+2y y′=0；当 y≠0 时移项得 y′=−x/y。",
        formula: "y′=−x/y，y≠0。"
      },
      {
        questionZh: "在圆的最右点 (r,0)，公式分母变成 0，切线是否就不存在？",
        questionEn: "What happens when the implicit derivative formula has zero denominator?",
        hint: "圆在那里仍有竖直切线。",
        answerZh: "圆和切线都存在，只是切线竖直，不能写成有限的 dy/dx。公式在 y=0 处失效，应回到原曲线判断竖直切线 x=r。",
        formula: "分母为零 ⇒ 不能直接除，检查原关系。"
      },
      {
        questionZh: "遇到 xy 这样的项，为什么同时需要乘积法则和链式法则？",
        questionEn: "Why does xy require both product and chain ideas?",
        hint: "x 与 y 都随 x 变化。",
        answerZh: "乘积法则先给出 x′y+xy′，其中 x′=1，y′保留为 dy/dx。第二项正是链式法则对 y 依赖 x 的记录。",
        formula: "d(xy)/dx=y+x y′。"
      }
    ],
    counterexample: {
      wrong: "x²+y²=r² 求导后写 2x+2y=0。",
      correct: "应是 2x+2y y′=0，因为 y 依赖 x。",
      why: "漏掉 dy/dx 等于把 y 当常数。"
    },
    retellZh: "隐函数求导把 y 当作 y(x)，y 的每一项都要乘 y′，x 与 y 同项再用乘积法则。",
    retellEn: "Differentiate implicit y-expressions through the chain rule and collect dy/dx.",
    check: "在 (r,0) 处圆 x²+y²=r² 的切线是什么？",
    answer: "竖直线 x=r。"
  },
  {
    id: "logarithmic-differentiation",
    station: "advanced-differentiation",
    number: "09",
    titleZh: "对数求导与变底指数",
    titleEn: "Logarithmic differentiation and variable exponents",
    source: "Examples 5.20–5.22; Exercise 5.23 · Lecture Notes p.24–25",
    english: "For positive y, take logarithms before differentiating. Products, quotients and powers become sums, differences and constant multiples.",
    enSummary: "Use logarithms when both base and exponent vary or when a product-quotient structure is too long for direct rules.",
    networkGoal: "把复杂乘除幂变成可求导的加法",
    networkRisk: "对非正数直接取对数",
    animation: "logarithmic-differentiation",
    animationTitle: "乘除幂在取对数后展开成加减",
    symbols: [
      ["ln y", "logarithm", "自然对数", "要求 y>0"],
      ["y′/y", "logarithmic derivative", "对 ln y 求 x 导数", "链式法则结果"],
      ["f^g", "variable power", "底数和指数都可能变", "改用 e^{g ln f}"],
      ["ln|y|", "absolute log", "处理负值区间", "在 y≠0 处可用"]
    ],
    qaSteps: [
      {
        questionZh: "为什么取对数能把复杂乘除变成更容易处理的形式？",
        questionEn: "Why do logarithms simplify products and quotients?",
        hint: "回忆对数的三条运算性质。",
        answerZh: "对数把乘积变成加法、商变成减法、幂变成系数乘法。求导对加减通常比直接对长乘积和长商使用多条规则更容易。",
        formula: "ln(AB)=ln A+ln B。"
      },
      {
        questionZh: "对 ln y 关于 x 求导为什么得到 y′/y？",
        questionEn: "Why is d(ln y)/dx=y′/y?",
        hint: "外层是 ln，内层是 y(x)。",
        answerZh: "这是复合函数的链式法则：ln 的导数是 1/y，再乘内层 y 对 x 的导数 y′。",
        formula: "d(ln y)/dx=y′/y。"
      },
      {
        questionZh: "求 y=xˣ 的导数时，为什么不能只用幂法则或指数法则？",
        questionEn: "Why do ordinary power and exponential rules fail for xˣ?",
        hint: "幂法则要求指数固定，指数法则要求底数固定。",
        answerZh: "xˣ 的底数和指数都在变化。正确方法是写成 e^{x ln x} 后使用链式法则，或取对数求 y′/y。",
        formula: "(xˣ)′=xˣ(ln x+1)。"
      },
      {
        questionZh: "如果 y 可能为负，为什么不能直接写 ln y？",
        questionEn: "Why is ln y invalid when y may be negative?",
        hint: "对数的定义域是什么？",
        answerZh: "自然对数只对正数有定义。在 y<0 的区间应使用 ln|y|；在 y 不变号的区间上仍有 d(ln|y|)/dx=y′/y。",
        formula: "ln y 需要 y>0。"
      },
      {
        questionZh: "对数求导最后为什么还要乘回 y？",
        questionEn: "Why multiply the logarithmic derivative by y at the end?",
        hint: "你算出的是 y′/y。",
        answerZh: "对数求导先得到 y′/y，而题目要 y′；所以必须乘回原来的 y，并保留原函数的正性和定义域条件。",
        formula: "y′=y·d(ln y)/dx。"
      }
    ],
    counterexample: {
      wrong: "(xˣ)′=x·x^{x−1}。",
      correct: "把变底变指数写成 e^{x ln x}，得到 xˣ(ln x+1)。",
      why: "幂法则只适用于指数为常数。"
    },
    retellZh: "对数求导先把乘除幂变成加减，再借 y′/y 找回 y′。",
    retellEn: "Logarithmic differentiation turns hard multiplicative structures into sums and recovers y′ through y.",
    check: "对 y=x^{√x}，第一步取对数得到什么？",
    answer: "ln y=√x ln x。"
  },
  {
    id: "parametric-derivative",
    station: "advanced-differentiation",
    number: "10",
    titleZh: "参数曲线的切线斜率",
    titleEn: "Tangents to parameterised curves",
    source: "Definition 5.24; Examples 5.25–5.27; Exercise 5.28 · Lecture Notes p.25–28",
    english: "For a curve x=x(t), y=y(t), dy/dx=(dy/dt)/(dx/dt) wherever dx/dt≠0.",
    enSummary: "The parameter t controls both coordinates. A zero dx/dt requires separate geometric treatment.",
    networkGoal: "从参数速度求图形斜率",
    networkRisk: "把 dy/dt 当作 dy/dx",
    animation: "parametric-derivative",
    animationTitle: "点沿曲线运动，速度和切线同步",
    symbols: [
      ["t", "parameter", "同时控制 x 和 y", "不一定是横坐标"],
      ["dx/dt", "horizontal rate", "x 对 t 的速度", "不能为零时作分母"],
      ["dy/dt", "vertical rate", "y 对 t 的速度", "斜率分子"],
      ["dy/dx", "curve slope", "y 对 x 的变化", "dy/dt ÷ dx/dt"]
    ],
    qaSteps: [
      {
        questionZh: "参数 t 像播放时间，一对 x(t)、y(t) 描述了什么？",
        questionEn: "What does a parameter pair describe?",
        hint: "每一时刻得到一个平面位置。",
        answerZh: "t 是第三方变量，它同时决定水平和竖直坐标。随时间推进，点沿平面曲线移动，还会决定运动方向。",
        formula: "(x(t), y(t))。"
      },
      {
        questionZh: "为什么 dy/dx 要写成 (dy/dt)/(dx/dt)，而不是 dy/dt？",
        questionEn: "Why divide vertical rate by horizontal rate?",
        hint: "斜率是纵变化除以横变化。",
        answerZh: "dy/dt 与 dx/dt 都相对于同一小段 t 变化。纵变化除以横变化时，dt 相消，留下真正的图形斜率。",
        formula: "dy/dx=(dy/dt)/(dx/dt)。"
      },
      {
        questionZh: "曲线 x=t²+1，y=t³−3t 在 t=1 的点和切线是什么？",
        questionEn: "Find the point and tangent for the example at t=1.",
        hint: "先代 t=1 求坐标，再分别对 x,y 求 t 导数。",
        answerZh: "点为 (2,−2)。dx/dt=2t，dy/dt=3t²−3，在 t=1 分别为 2 和 0，所以 dy/dx=0，切线为 y=−2。",
        formula: "t=1：point (2,−2)，tangent y=−2。"
      },
      {
        questionZh: "为什么 t=0 不能直接代入 dy/dx 公式？那里曲线发生了什么？",
        questionEn: "Why must t=0 be treated separately?",
        hint: "先算 dx/dt。",
        answerZh: "dx/dt=2t 在 t=0 为零，不能作分母；dy/dt=−3 非零，因此曲线在该点有竖直切线 x=1，不是普通的有限斜率。",
        formula: "dx/dt=0 时检查竖直切线。"
      },
      {
        questionZh: "如果我想知道点运动时是向右还是向左，应看哪个导数？",
        questionEn: "How do you determine the direction of travel?",
        hint: "t 增加时，x 变化方向看 dx/dt。",
        answerZh: "看 dx/dt 的符号：正时 x 增加向右，负时向左。切线斜率 dy/dx 则同时依赖 dx/dt 和 dy/dt。",
        formula: "方向由参数速度和切线斜率共同描述。"
      }
    ],
    counterexample: {
      wrong: "参数曲线 x=t²，y=t³ 的斜率就是 dy/dt=3t²。",
      correct: "图形斜率是 (3t²)/(2t)=3t/2（t≠0）。",
      why: "必须比较同一参数变化造成的 y 变化与 x 变化。"
    },
    retellZh: "参数曲线斜率等于纵向速度除横向速度，横向速度为零时要单独看竖直切线。",
    retellEn: "Parameterised slope is the quotient of vertical and horizontal rates when the latter is nonzero.",
    check: "单位圆在 t=0 处为什么不能用 −cos t/sin t 求斜率？",
    answer: "因为 sin 0=0，dx/dt=0；该点有竖直切线 x=1。"
  },
  {
    id: "monotonic-extrema",
    station: "curve-analysis",
    number: "11",
    titleZh: "单调性、驻点、临界点与极值",
    titleEn: "Monotonicity, stationary points, critical points and extrema",
    source: "Theorem 6.1; Definitions 6.2–6.4; Theorem 6.5 · Lecture Notes p.29–30",
    english: "If f′>0 throughout an interval, f is strictly increasing; if f′<0, f is strictly decreasing. An interior differentiable extremum must have f′(a)=0.",
    enSummary: "Derivative sign describes whole intervals. Stationary points are candidates for extrema, not conclusions.",
    networkGoal: "把导数符号转成增减与极值候选",
    networkRisk: "f′(a)=0 就断言极值",
    animation: "monotonic-extrema",
    animationTitle: "切线方向随导数符号改变",
    symbols: [
      ["f′>0", "positive slope", "切线向右上升", "函数严格递增"],
      ["stationary", "驻点", "f′(a)=0", "水平切线"],
      ["critical", "临界点", "f′=0 或不存在", "更大的候选集合"],
      ["local maximum", "局部最大", "附近输出最高", "不一定全局最高"]
    ],
    qaSteps: [
      {
        questionZh: "导数在某段上一直为正，图像会呈现什么变化方向？",
        questionEn: "What does a positive derivative on an interval imply?",
        hint: "每一点的切线斜率都向右上升。",
        answerZh: "函数在整个区间严格递增。注意必须是整个区间都为正，不是只检查一个点。",
        formula: "f′>0 on I ⇒ f strictly increasing on I。"
      },
      {
        questionZh: "驻点、临界点和极值点三者是什么关系？",
        questionEn: "How are stationary, critical and extremum points related?",
        hint: "极值必须是驻点吗？驻点必须是极值吗？",
        answerZh: "驻点要求 f′=0；临界点还包括导数不存在的点；极值点可能出现在内点临界点或闭区间端点。内点可导的极值必为驻点，但驻点不一定是极值。",
        formula: "stationary ⊂ critical；extremum ≠ automatically stationary at endpoints。"
      },
      {
        questionZh: "对 f=x³−3x，怎样从 f′ 的因式分解找出增减区间？",
        questionEn: "Build the monotonicity intervals for x³−3x.",
        hint: "f′=3(x−1)(x+1)。",
        answerZh: "临界点是 −1 和 1。x<−1 时两因子都为负，乘积正；−1<x<1 时一正一负，乘积负；x>1 时两者都正。于是先在 −1 到 1 之间递减，两侧递增。",
        formula: "递增 (−∞,−1) ∪ (1,∞)，递减 (−1,1)。"
      },
      {
        questionZh: "为什么 x³ 在 0 的导数为 0，却没有极值？",
        questionEn: "Why is x³ stationary but not extremal at 0?",
        hint: "左边和右边函数值相对 f(0) 怎样？",
        answerZh: "x<0 时 x³<0，x>0 时 x³>0，左右邻域分别落在 f(0) 的两侧，没有整个邻域都高于或都低于 f(0)。所以驻点只是候选，不是极值。",
        formula: "f′(0)=0 仅是必要条件。"
      },
      {
        questionZh: "在闭区间求全局最值时，为什么还要检查端点？",
        questionEn: "Why must endpoints be checked for global extrema?",
        hint: "闭区间端点不是内点。",
        answerZh: "Fermat 定理只适用于内点。闭区间端点可以有最大或最小，但端点不是双侧内点，导数条件不一定成立，所以必须直接代函数值比较。",
        formula: "闭区间候选 = 内部临界点 + 两端点。"
      }
    ],
    counterexample: {
      wrong: "f′(0)=0，所以 0 一定是 f 的极值点。",
      correct: "只是驻点候选；x³ 在 0 的导数为 0，却没有极值。",
      why: "Fermat 定理只给必要条件。"
    },
    retellZh: "导数符号决定整段增减，驻点只是极值候选，端点也要检查。",
    retellEn: "Derivative signs determine monotonicity; stationary points and endpoints are candidates, not automatic conclusions.",
    check: "f′(a) 不存在时，a 能成为临界点吗？",
    answer: "能；临界点包括导数为零或导数不存在的点。"
  },
  {
    id: "derivative-tests",
    station: "curve-analysis",
    number: "12",
    titleZh: "一阶与二阶导数判别",
    titleEn: "First- and second-derivative tests",
    source: "Theorem 6.7; Theorem 6.9; Examples 6.8–6.11 · Lecture Notes p.31–32",
    english: "A sign change of f′ classifies local extrema. If f′(a)=0 and f″(a)>0 or f″(a)<0, the second derivative can classify the point; f″(a)=0 is inconclusive.",
    enSummary: "First derivative controls increase/decrease. Second derivative controls the direction in which the slope itself changes.",
    networkGoal: "选择一阶或二阶判别",
    networkRisk: "二阶导数为零就断言无极值",
    animation: "derivative-tests",
    animationTitle: "一阶符号翻转与二阶弯曲方向",
    symbols: [
      ["f′ sign change", "slope flip", "切线从上升变下降", "极值"],
      ["f″>0", "convex", "斜率递增，像碗口向上", "局部最小候选"],
      ["f″<0", "concave", "斜率递减，像碗口向下", "局部最大候选"],
      ["inconclusive", "无结论", "信息不足", "改用一阶测试"]
    ],
    qaSteps: [
      {
        questionZh: "为什么看 f′ 的符号在驻点两边有没有翻转，能判断峰或谷？",
        questionEn: "How does a sign change of f′ classify extrema?",
        hint: "拐点前上升还是下降？",
        answerZh: "左正右负表示先升后降，形成局部最大；左负右正表示先降后升，形成局部最小；两边同号表示只停顿一下，没有峰谷。",
        formula: "正→负：max；负→正：min。"
      },
      {
        questionZh: "二阶导数在直观上描述什么？为什么 f″>0 常对应碗口向上？",
        questionEn: "What does the sign of f″ describe?",
        hint: "二阶导数是 f′ 的导数。",
        answerZh: "f″ 描述斜率 f′ 的变化方向。f″>0 时斜率越来越正，曲线向上弯；f″<0 时斜率递减，曲线向下弯。",
        formula: "f″ 是 slope of the slope。"
      },
      {
        questionZh: "对 f=x⁴−4x²，怎样找到驻点并判断类型？",
        questionEn: "Classify the stationary points of x⁴−4x².",
        hint: "f′=4x(x²−2)，f″=12x²−8。",
        answerZh: "驻点在 x=0、±√2。f″(0)=−8<0，所以 0 为局部最大；f″(±√2)=16>0，所以两点为局部最小。",
        formula: "max at 0；min at ±√2。"
      },
      {
        questionZh: "为什么 f″(a)=0 时不能直接说“没有极值”？",
        questionEn: "Why is a zero second derivative inconclusive?",
        hint: "比较 x⁴ 和 x³。",
        answerZh: "x⁴ 和 x³ 在 0 都有 f′=f″=0，但 x⁴ 有极小值，x³ 没有极值。二阶测试信息不足，需要回到一阶符号或其他定义。",
        formula: "f″(a)=0 ⇒ test inconclusive，不是 no extremum。"
      },
      {
        questionZh: "如果题目只要求增减区间，是否一定要算二阶导数？",
        questionEn: "Do you always need the second derivative?",
        hint: "增减由哪一阶导数决定？",
        answerZh: "不一定。增减区间只需要一阶导数的符号。二阶导数只在需要判断极值类型、凹凸性或题目特别要求时提供额外信息。",
        formula: "选择最少必要的信息。"
      }
    ],
    counterexample: {
      wrong: "f′(−1)=f″(−1)=0，所以 −1 处没有极值。",
      correct: "二阶测试无结论，必须另查一阶符号或定义。",
      why: "零二阶导数既可能对应极小，也可能没有极值。"
    },
    retellZh: "一阶符号翻转判峰谷，二阶非零时帮助分类，二阶为零时必须换方法。",
    retellEn: "Use first-derivative sign changes; use a nonzero second derivative for a shortcut, never a zero one as proof.",
    check: "f″(a)>0 在驻点处说明局部最大还是最小？",
    answer: "通常说明局部最小。"
  },
  {
    id: "curve-analysis",
    station: "curve-analysis",
    number: "13",
    titleZh: "完整函数图形分析",
    titleEn: "Complete elementary curve analysis",
    source: "Examples 6.12–6.13 · Lecture Notes p.32–34",
    english: "A complete analysis combines the domain, intercepts, stationary points, derivative signs, second-derivative information, endpoint behavior and any relevant limits.",
    enSummary: "A graph is a consistency check on several derivative facts. Local extrema are not automatically global extrema.",
    networkGoal: "把定义域、导数符号、截距和端行为合成图形",
    networkRisk: "只算临界点就画图",
    animation: "curve-analysis",
    animationTitle: "截距、峰谷和弯曲方向逐层叠加",
    symbols: [
      ["domain", "定义域", "允许的 x", "图形起点"],
      ["intercepts", "截距", "与坐标轴交点", "定位图形"],
      ["monotonic interval", "单调区间", "增减方向", "f′ 符号"],
      ["end behavior", "端行为", "两端趋于何处", "极限"]
    ],
    qaSteps: [
      {
        questionZh: "拿到一个函数准备画图时，为什么要先写定义域和截距，而不是先求导？",
        questionEn: "Why begin with domain and intercepts?",
        hint: "导数和截距只在函数有定义的地方有意义。",
        answerZh: "定义域决定整张图允许出现在哪些 x；截距给出与坐标轴的关键交点。先有边界和定位点，后面的增减、极值才不容易脱离原函数。",
        formula: "domain → intercepts → derivatives → graph。"
      },
      {
        questionZh: "对 f=x³−3x，一阶导数给出的峰谷坐标是什么？",
        questionEn: "Locate the extrema of x³−3x.",
        hint: "f′=3(x−1)(x+1)。",
        answerZh: "临界点为 −1 和 1。f(−1)=2，f(1)=−2；由符号变化，(−1,2) 是局部最大，(1,−2) 是局部最小。",
        formula: "local max (−1,2)，local min (1,−2)。"
      },
      {
        questionZh: "二阶导数 f″=6x 告诉你图形在哪段凹、哪段凸？",
        questionEn: "How does f″=6x divide the concavity intervals?",
        hint: "f″ 的零点是 0。",
        answerZh: "x<0 时 f″<0，曲线凹；x>0 时 f″>0，曲线凸。0 是弯曲方向改变的候选点。",
        formula: "concave on (−∞,0)，convex on (0,∞)。"
      },
      {
        questionZh: "在闭区间 [−2,3] 上找全局最值时，候选点有哪些？",
        questionEn: "What candidates are checked on a closed interval?",
        hint: "内部临界点加端点。",
        answerZh: "内部临界点 −1、1，以及端点 −2、3。比较 f(−2)=−2、f(−1)=2、f(1)=−2、f(3)=18，得全局最大 18、全局最小 −2。",
        formula: "check all candidates, not only stationary points。"
      },
      {
        questionZh: "当图形分析和公式结果不一致时，应该怎样排查？",
        questionEn: "How do you diagnose a graph that contradicts the algebra?",
        hint: "依次检查定义域、导数、符号表和端点。",
        answerZh: "先查原函数与导数计算，再检查区间端点和临界点是否遗漏，最后检查综合图形是否误读了二阶导数和端行为。图形是多个结论的一致性检查。",
        formula: "计算结果与图形互相校对。"
      }
    ],
    counterexample: {
      wrong: "闭区间上的全局最大值一定在局部最大处。",
      correct: "也可能在端点；[−2,3] 上 f(3)=18 就是端点处的全局最大值。",
      why: "局部极值只比较内部小邻域。"
    },
    retellZh: "完整画图要结合定义域、截距、导数符号、二阶弯曲、端行为和端点比较。",
    retellEn: "Curve analysis combines domain, intercepts, derivative signs, curvature, end behavior and endpoint checks.",
    check: "为什么局部最大不一定全局最大？",
    answer: "它只要求附近最高，远处可以有更大的函数值。"
  },
  {
    id: "method-selection",
    station: "curve-analysis",
    number: "14",
    titleZh: "选择正确的求导方法",
    titleEn: "Choosing a differentiation method",
    source: "Examples 6.15–6.19; Exercise 6.20 · Lecture Notes p.34–36",
    english: "Method selection depends on both the algebraic structure and the wording of the question. First identify the outermost operation, then choose the corresponding rule.",
    enSummary: "Never rush into calculation. Name the structure, the rule and any necessary inner rules before differentiating.",
    networkGoal: "先识别结构，再选择规则",
    networkRisk: "看到公式就从上往下乱套",
    animation: "method-selection",
    animationTitle: "表达式结构树亮起对应规则",
    symbols: [
      ["structure", "结构", "和、积、商或复合", "决定首条规则"],
      ["first principles", "定义法", "从差商开始", "题目要求时不能跳"],
      ["outermost", "最外层", "最后执行的操作", "先处理它"],
      ["diagnose", "诊断", "解释错误或选择依据", "检查前提"]
    ],
    qaSteps: [
      {
        questionZh: "看到一个复杂表达式，为什么先问“最外层是什么”，而不是立刻套公式？",
        questionEn: "Why identify the outermost operation first?",
        hint: "乘积、商和复合会触发不同规则。",
        answerZh: "最外层决定第一条规则。先把表达式拆成整体结构，再分别处理各子部分，能避免把乘积错当复合、把复合错当幂。",
        formula: "outermost operation → first rule。"
      },
      {
        questionZh: "遇到 x e^{x²}/(1+x²)，求导顺序应该怎样说清楚？",
        questionEn: "Describe the rule order for a mixed expression.",
        hint: "整体是商，分子是乘积，指数是复合。",
        answerZh: "整体最外层是商，所以先用商法则；分子 x e^{x²} 是乘积，需要乘积法则；其中 e^{x²} 是复合，还需要链式法则。",
        formula: "quotient → product → chain。"
      },
      {
        questionZh: "如果题目明确要求“from first principles”，为什么即使会用公式也必须从差商开始？",
        questionEn: "Why obey a first-principles instruction?",
        hint: "题目考的是方法，不只是结果。",
        answerZh: "题目可能在检查你理解导数定义。直接套幂法则可能得到正确数值，却没有完成所要求的过程，因此不能得分。",
        formula: "method instruction is part of the task。"
      },
      {
        questionZh: "已知 f′(a)=0 时，为什么还要继续选方法判断极值？",
        questionEn: "Why is more method selection needed after finding a stationary point?",
        hint: "Fermat 只给候选点。",
        answerZh: "驻点不等于极值。需要继续检查导数符号变化、二阶导数或定义，或者比较闭区间端点。方法选择要服务于当前问题，而不是停在求导。",
        formula: "stationary point → classification。"
      },
      {
        questionZh: "怎样用一句话建立稳定的求导习惯？",
        questionEn: "What routine should you use before differentiating?",
        hint: "先说结构，再说规则，再检查前提。",
        answerZh: "先写出“整体是什么结构、首条规则是什么、哪里还需链式法则、定义域是否保留”，然后才开始代数计算。",
        formula: "name → choose → check → calculate。"
      }
    ],
    counterexample: {
      wrong: "题目要求定义法，但我直接写 3x² 作为 x³ 的导数即可。",
      correct: "答案的数值相同，但没有执行 first principles 的过程。",
      why: "题目可能明确规定方法与推理要求。"
    },
    retellZh: "先识别最外层结构，再选首条规则，逐步处理内部并保留定义域。",
    retellEn: "Identify the structure and rule order before calculating, and follow any stipulated method.",
    check: "整体是商但分子是复合时，先用哪条规则？",
    answer: "先用商法则，再对分子内部使用链式法则。"
  },
  {
    id: "partial-derivatives",
    station: "partial-derivatives",
    number: "15",
    notExamined: true,
    titleZh: "偏导数：固定其他变量",
    titleEn: "Partial derivatives",
    source: "Definition 13.1; Examples 13.2–13.3 · Lecture Notes p.37–38",
    english: "For f(x,y), the partial derivative with respect to x differentiates along horizontal changes while y is fixed; the partial with respect to y holds x fixed.",
    enSummary: "A partial derivative is an ordinary derivative along one coordinate direction, with every other variable treated as a constant.",
    networkGoal: "理解多变量函数沿坐标轴的变化率",
    networkRisk: "对 x 求导时把 y 也求导",
    animation: "partial-derivatives",
    animationTitle: "沿水平线和竖直线切出两个一维函数",
    symbols: [
      ["∂f/∂x", "partial x derivative", "固定 y，对 x 求导", "水平方向"],
      ["∂f/∂y", "partial y derivative", "固定 x，对 y 求导", "竖直方向"],
      ["fₓ", "x-partial", "∂f/∂x 的简写", "另一变量不动"],
      ["(a,b)", "point", "二维输入点", "两个方向共享的点"]
    ],
    qaSteps: [
      {
        questionZh: "温度同时依赖位置和时间时，只想问“时间不变，向东走温度怎么变”，该固定什么？",
        questionEn: "Which variable stays fixed for a horizontal partial derivative?",
        hint: "向东只改变水平位置。",
        answerZh: "固定其他变量，只让 x 变化。偏导数就是沿这一条一维截面研究函数变化，其他变量被视为常数。",
        formula: "固定 y，对 x 求 ∂f/∂x。"
      },
      {
        questionZh: "∂f/∂x 与 fₓ 分别是什么意思？",
        questionEn: "What do the partial derivative notations mean?",
        hint: "它们是同一个方向导数。",
        answerZh: "两者都表示固定 y、只改变 x 时的变化率。∂f/∂y 则固定 x、改变 y；方向不同，结果不必相等。",
        formula: "fₓ=∂f/∂x，f_y=∂f/∂y。"
      },
      {
        questionZh: "对 f=x²y+3xy²−4y，在 (1,2) 分别求 fₓ 和 f_y。",
        questionEn: "Compute both partial derivatives in the example.",
        hint: "对 x 求导时把 y 当常数，反之亦然。",
        answerZh: "fₓ=2xy+3y²，在 (1,2) 为 4+12=16；f_y=x²+6xy−4，在 (1,2) 为 1+12−4=9。",
        formula: "fₓ(1,2)=16，f_y(1,2)=9。"
      },
      {
        questionZh: "为什么偏导数存在仍不能单独描述函数在所有方向上的变化？",
        questionEn: "Why do two coordinate partials not describe every direction?",
        hint: "平面上还有斜方向。",
        answerZh: "两个偏导数只记录水平与竖直坐标方向。沿斜线移动时 x 和 y 同时变化，变化率可能不同，需要方向导数描述。",
        formula: "coordinate directions are only two special cases。"
      },
      {
        questionZh: "用一句话复述偏导数的计算动作。",
        questionEn: "Summarise the calculation of a partial derivative.",
        hint: "只动一个变量。",
        answerZh: "把其他变量全部当常数，只对当前变量做普通一维求导，并保留原来所有定义域限制。",
        formula: "differentiate one direction, freeze the rest。"
      }
    ],
    counterexample: {
      wrong: "求 ∂f/∂x 时把 x²y 的 y 也写成 y′。",
      correct: "这里 y 是自变量，不是 x 的函数；对 x 求偏导时 y 当常数。",
      why: "偏导数固定其他坐标变量。"
    },
    retellZh: "偏导数就是固定其他变量后的一元导数，记录某个坐标方向的变化率。",
    retellEn: "A partial derivative differentiates one coordinate while freezing the others.",
    check: "求 f_y 时 x 当什么处理？",
    answer: "当常数处理。"
  },
  {
    id: "directional-derivatives",
    station: "partial-derivatives",
    number: "16",
    notExamined: true,
    titleZh: "方向导数：沿任意单位方向变化",
    titleEn: "Directional derivatives",
    source: "Definition 13.4; Example 13.5 · Lecture Notes p.38–39",
    english: "For a unit vector u=(u₁,u₂), the directional derivative Dᵤf(a,b) is the derivative at t=0 of φ(t)=f(a+tu₁,b+tu₂).",
    enSummary: "A directional derivative restricts the surface to a line through the point and differentiates along that one-dimensional slice.",
    networkGoal: "把方向变化降成一元参数导数",
    networkRisk: "使用非单位向量导致缩放错误",
    animation: "directional-derivatives",
    animationTitle: "斜向箭头在曲面上切出一维路径",
    symbols: [
      ["u=(u₁,u₂)", "direction vector", "变化方向", "需要单位长度"],
      ["unit vector", "单位向量", "长度为 1", "u₁²+u₂²=1"],
      ["φ(t)", "line restriction", "沿直线截出的函数", "f(a+tu₁,b+tu₂)"],
      ["Dᵤf", "directional derivative", "u 方向变化率", "φ′(0)"]
    ],
    qaSteps: [
      {
        questionZh: "想研究斜着走时函数怎样变化，为什么先要把路径限制成一条一维直线？",
        questionEn: "Why reduce a directional change to a one-variable path?",
        hint: "方向确定后只剩走多远 t。",
        answerZh: "固定起点和方向后，位置只由沿箭头走多远 t 决定。这样多变量函数就变成一元函数 φ(t)，可对 t 用普通导数研究。",
        formula: "φ(t)=f(a+tu₁,b+tu₂)。"
      },
      {
        questionZh: "为什么方向向量必须是单位向量？",
        questionEn: "Why must the direction vector have length one?",
        hint: "否则参数 t 不是实际距离。",
        answerZh: "单位长度让 t 直接量沿方向的真实距离。若把 u 加倍，同样的 t 会走两倍远，变化率也会被放大，失去统一解释。",
        formula: "u₁²+u₂²=1。"
      },
      {
        questionZh: "对 f=x²+y²，在 (1,2) 沿 u=(1/√2,1/√2) 方向时，怎样构造 φ(t)？",
        questionEn: "Build the one-variable path for the diagonal example.",
        hint: "把 a+tu₁ 和 b+tu₂ 代入 f。",
        answerZh: "φ(t)=(1+t/√2)²+(2+t/√2)²=5+6t/√2+t²。对 t 求导并令 t=0，得到方向导数 6/√2=3√2。",
        formula: "Dᵤf(1,2)=3√2。"
      },
      {
        questionZh: "两个偏导数分别是 2 和 4，为什么斜方向导数是 3√2，不等于简单相加？",
        questionEn: "How can the directional derivative differ from coordinate partials?",
        hint: "方向同时改变 x 和 y，变化率取决于组合方式。",
        answerZh: "偏导分别只沿水平或竖直走，方向导数沿斜线同时改变两者，还要乘单位向量的分量。不同方向本来就会得到不同变化率。",
        formula: "direction changes the measured rate。"
      },
      {
        questionZh: "用一句话说明方向导数与偏导数的关系。",
        questionEn: "How are directional and partial derivatives related?",
        hint: "水平、竖直方向只是二维中的两种方向。",
        answerZh: "偏导数是方向导数沿坐标轴方向的两个特例；方向导数把这一想法推广到任意单位方向。",
        formula: "u=(1,0) → fₓ；u=(0,1) → f_y。"
      }
    ],
    counterexample: {
      wrong: "沿 (1,1) 求方向导数时直接把 h 加在 x、y 上。",
      correct: "方向向量长度是 √2，应使用单位向量 (1/√2,1/√2)。",
      why: "非单位方向会让参数 t 与真实距离不一致。"
    },
    retellZh: "方向导数先把二维函数限制到一条单位方向的直线上，再对该一维参数函数求导。",
    retellEn: "A directional derivative is an ordinary derivative along a unit-direction line through the point.",
    check: "u=(1,0) 时方向导数等于哪个偏导？",
    answer: "∂f/∂x。"
  }
];
