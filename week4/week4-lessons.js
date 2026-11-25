window.MFC_WEEK4_LESSONS = [
  {
    id: "antiderivative-primitives", station: "integration-foundations", number: "01",
    titleZh: "原函数、不定积分与定义域", titleEn: "Antiderivatives, indefinite integrals and domains",
    source: "Definition 10.1 · Lecture Notes p.3–4",
    theorem: {
      statementZh: "在区间 I 上，若 F′=f，则 f 的不定积分是全部 F+C 形式的原函数",
      statementEn: "On an interval I, if F′=f, then the indefinite integral of f is the family of all antiderivatives F+C.",
      hypotheses: ["I 必须是连通的非空开区间", "F 在 I 上可导且 F′=f", "不同连通区间上的常数可以不同"],
      formula: "∫ f(x)dx = F(x) + C",
      oneLineZh: "不定积分给出函数族，定积分才给出一个数。"
    },
    insight: "先找原函数，再保留同一区间上的任意常数。",
    numericProbe: { zh: "∫2x dx=x²+C；x=0 时 C=0 给出 x²，C=3 给出 x²+3", en: "∫2x dx=x²+C; C=0 gives x² and C=3 gives x²+3." },
    networkGoal: "把求导反过来并正确处理常数", networkRisk: "跨过 1/x 的零点把多个常数合并",
    animation: "antiderivative-family", animationTitle: "原函数族沿纵轴平移",
    symbols: [["F′", "derivative of primitive", "候选原函数的导数", "F′=f"], ["+C", "integration constant", "区间内所有原函数的平移", "C∈R"], ["dx", "integration variable", "积分针对的变量", "与上下界不同"]],
    explanationZh: ["原函数不是唯一的；同一区间上任意两个原函数只差常数，所以不定积分是一族函数。", "若定义域分成多个不连通区间，常数可以逐段不同；跨过极点用一个 C 会把不同区间错误粘在一起。"],
    qaSteps: [
      { kind: "definition", labelZh: "函数族", labelEn: "Function family", questionZh: "为什么不定积分后面有 +C？", questionEn: "Why does an indefinite integral contain +C?", hint: "常数求导为零。", answerZh: "结论：常数的导数为 0。若 F′=f，则 (F+C)′=f，所以所有 F+C 都是原函数。", formula: "(F(x)+C)′ = f(x)" },
      { kind: "computation", labelZh: "基本原函数", labelEn: "Basic primitive", questionZh: "∫2x dx 的原函数族是什么？", questionEn: "What is the antiderivative family of ∫2x dx?", hint: "寻找导数为 2x 的函数。", answerZh: "结论：x²+C。对 x²+C 求导得到 2x，C 是任意实常数。", formula: "∫2x dx = x² + C" },
      { kind: "boundary", labelZh: "断开定义域", labelEn: "Disconnected domain", questionZh: "1/x 在 R∖{0} 上为什么不能只写一个 log|x|+C？", questionEn: "Why is one constant insufficient for 1/x on R∖{0}?", hint: "定义域有两个独立连通区间。", answerZh: "结论：正负两支互不连通，两支的常数可分别选择。每支分别写 log|x|+C₊ 与 log|x|+C₋。", formula: "F(x)=log x+C₊ on x>0; F(x)=log(−x)+C₋ on x<0" },
      { kind: "boundary", labelZh: "求导验证", labelEn: "Differentiate to verify", questionZh: "为什么最后要对候选原函数求导？", questionEn: "Why differentiate the candidate primitive?", hint: "原函数定义就是 F′=f。", answerZh: "结论：求导验证直接检查定义。它能发现符号、常数因子和链式法则遗漏，但不能单独证明定义域和收敛性。", formula: "F′(x)=f(x)" }
    ],
    counterexample: { wrong: "把 ∫1/x dx 写成 log|x|+C 后认为它在 R∖{0} 只用同一个常数。", correct: "两个连通区间可以分别使用独立常数。", why: "原函数只在每个连通区间上相差常数。" },
    retellZh: "不定积分是每个连通区间上的原函数族；常数逐段允许不同。", retellEn: "An indefinite integral is a family of antiderivatives, with independent constants on disconnected intervals.",
    check: "为什么定积分没有 +C？", answer: "定积分是数；原函数的同一常数在端点相减时抵消。"
  },
  {
    id: "integration-substitution", station: "integration-foundations", number: "02",
    titleZh: "换元定理与链式因子", titleEn: "Substitution theorem and the chain-rule factor",
    source: "Theorem 10.2; Examples 10.3–10.4 · Lecture Notes p.5–6",
    theorem: {
      statementZh: "在连续性、可微性和值域包含条件下，f 关于 x 的积分可改为 f(t(y))t′(y) 关于 y 的积分",
      statementEn: "Under continuity, differentiability and range assumptions, the integral of f(x) equals the integral of f(t(y))t′(y) in y.",
      hypotheses: ["f 在开区间 J 上连续", "t 在两端点附近连续可导", "t(y) 位于 J 中", "不定积分最后须回到原变量"],
      formula: "∫ₐᵇ f(x)dx = ∫αβ f(t(y))t′(y)dy, a=t(α), b=t(β)",
      oneLineZh: "换元把复合结构与导数因子一起换成新变量。"
    },
    insight: "先找内层函数，再看它的导数因子是否出现。",
    numericProbe: { zh: "∫2x(x²+1)³dx：u=x²+1、du=2xdx，得 u⁴/4+C", en: "For ∫2x(x²+1)³dx, u=x²+1 gives du=2x dx and u⁴/4+C." },
    networkGoal: "识别链式法则的反向结构", networkRisk: "换元后仍混用 x 和 u",
    animation: "substitution-factor", animationTitle: "内层导数因子进入换元",
    symbols: [["u=g(x)", "substitution", "选择的内层变量", "du=g′dx"], ["t′(y)", "chain factor", "换元的导数因子", "不能漏乘"], ["α,β", "new bounds", "新变量的积分端点", "不是旧的 a,b"]],
    explanationZh: ["换元不是形式上的 dx 替换；它证明的是链式法则反向组合出的积分等式。", "当不定积分用 u 代换时，最后必须回到 x；定积分可以同时改上下界，也可以先回代到 x 再使用原边界。"],
    qaSteps: [
      { kind: "definition", labelZh: "选择内层", labelEn: "Choose the inside", questionZh: "怎样选择换元 u？", questionEn: "How do you choose a substitution u?", hint: "寻找被包在幂、指数或其他函数内部的结构。", answerZh: "结论：先找复合的内层函数，并检查它的导数因子是否在 integrand 中出现。常见选择是 u=x²+1、u=sin x 或 u=1+x²。", formula: "u=g(x), du=g′(x)dx" },
      { kind: "computation", labelZh: "完整换元", labelEn: "Complete substitution", questionZh: "怎样计算 ∫2x(x²+1)³dx？", questionEn: "How do you evaluate ∫2x(x²+1)³dx?", hint: "令 u=x²+1。", answerZh: "结论：u=x²+1，du=2xdx，integrand 变为 ∫u³du=u⁴/4+C，回代为 (x²+1)⁴/4+C。", formula: "∫u³du = u⁴/4 + C" },
      { kind: "derivation", labelZh: "方向与符号", labelEn: "Orientation and sign", questionZh: "递减换元时为什么不能把导数因子改成绝对值？", questionEn: "Why is the factor t′ not replaced by |t′|?", hint: "定积分带有方向。", answerZh: "结论：Theorem 10.2 的端点满足 a=t(α), b=t(β)，有向积分会自动带上 t′ 的符号；使用绝对值会破坏方向。", formula: "t′dy" },
      { kind: "boundary", labelZh: "区间前提", labelEn: "Range hypothesis", questionZh: "换元后为什么不能只做代数替换？", questionEn: "Why is algebraic replacement alone insufficient for substitution?", hint: "t(y) 必须始终落在 f 的区间 J。", answerZh: "结论：必须保证 t(y) 在两端之间都落在 f 的定义区间。否则 f(t(y)) 可能出现未定义或跨越问题。", formula: "t(y) ∈ J" }
    ],
    counterexample: { wrong: "做 u=x² 后积分式一半用 u，一半仍保留 x。", correct: "integrand 与 du 必须全部换到同一个变量。", why: "换元改变的是积分变量，而不是单个符号。" },
    retellZh: "换元法是链式法则的反向使用，内层函数和导数因子必须一起换。", retellEn: "Substitution reverses the chain rule and changes both the inner expression and its differential together.",
    check: "∫e^{x²}2x dx 应取什么 u？", answer: "取 u=x²，du=2x dx。"
  },
  {
    id: "definite-substitution", station: "integration-foundations", number: "03",
    titleZh: "定积分换元、边界与分支", titleEn: "Definite substitution, bounds and branches",
    source: "Theorem 10.2; Examples 10.3–10.5 · Lecture Notes p.5–6",
    theorem: {
      statementZh: "定积分换元时，新端点必须满足 t(α)=a 和 t(β)=b，积分方向由端点顺序保留",
      statementEn: "For definite substitution, the new endpoints must satisfy t(α)=a and t(β)=b, with orientation preserved by their order.",
      hypotheses: ["换元函数在端点之间连续可导", "新像落在原 integrand 的定义区间", "反解或分支选择必须符合所选端点"],
      formula: "∫ₐᵇ f(x)dx = ∫αβ f(t(y))t′(y)dy",
      oneLineZh: "定积分换元必须同时换 integrand、微分和上下界。"
    },
    insight: "三种东西一起换：函数、微分、端点。",
    numericProbe: { zh: "∫₀¹ x√(1−x²)dx 用 u=1−x²：du=−2xdx，端点从 1 到 0，结果 1/3", en: "For ∫₀¹x√(1−x²)dx with u=1−x², the bounds go from 1 to 0 and the value is 1/3." },
    networkGoal: "在定积分中正确切换边界与方向", networkRisk: "换了变量却保留旧端点",
    animation: "definite-substitution", animationTitle: "积分区间随变量变换",
    symbols: [["α,β", "new bounds", "y 变量的端点", "由 t(α)=a 等确定"], ["orientation", "direction", "上下界顺序有符号意义", "不能随意交换"], ["branch", "inverse branch", "反解时选择的分支", "必须匹配端点"]],
    explanationZh: ["定积分换元不需要先回到 x；只要把原端点映射到新端点，就可直接在新变量上积分。", "若换元不是全局一一，仍可按 Theorem 10.2 的复合形式进行；当需要反解时，分支必须与端点所在区间一致。"],
    qaSteps: [
      { kind: "definition", labelZh: "端点映射", labelEn: "Map the bounds", questionZh: "换元后新端点怎样找？", questionEn: "How are new bounds obtained after substitution?", hint: "把旧端点代进换元关系。", answerZh: "结论：若 x=t(y)，旧端点 a,b 对应 α,β 满足 t(α)=a,t(β)=b。端点必须成对映射，不能保留旧数值。", formula: "a=t(α), b=t(β)" },
      { kind: "computation", labelZh: "定积分例子", labelEn: "Definite example", questionZh: "怎样计算 ∫₀¹x√(1−x²)dx？", questionEn: "How do you evaluate ∫₀¹x√(1−x²)dx?", hint: "令 u=1−x²。", answerZh: "结论：u=1−x²，du=−2xdx；x=0→u=1，x=1→u=0，积分为 −1/2∫₁⁰√u du=1/3。", formula: "−1/2∫₁⁰u^{1/2}du = 1/3" },
      { kind: "boundary", labelZh: "反解分支", labelEn: "Inverse branch", questionZh: "若 x=sin t，求 t 的端点时为什么要注意分支？", questionEn: "Why does the branch matter when inverting x=sin t?", hint: "arcsin 只给一个主分支。", answerZh: "结论：sin 不是全局单射。反解必须选择与原 x 区间一致的连续分支，否则端点可能跳支或方向错误。", formula: "x=sin t, t∈[−π/2,π/2]" },
      { kind: "boundary", labelZh: "方向约定", labelEn: "Orientation", questionZh: "新上界小于新下界时积分是否是负的？", questionEn: "Can a substitution produce a negative definite integral when the new upper bound is smaller?", hint: "定积分有方向。", answerZh: "结论：可以。有向积分按朝向计符号；t′ 的负号会与端点交换共同保持等式，不能强行取正。", formula: "∫αβ = −∫βα" }
    ],
    counterexample: { wrong: "用 u=x²+1 后仍保留 x 从 0 到 1 的边界。", correct: "边界也必须变为 u 的值。", why: "积分变量换了，端点数值也必须跟着换。" },
    retellZh: "定积分换元要把函数、微分和端点一起换，并保留积分方向。", retellEn: "Definite substitution changes the function, differential and both bounds while preserving orientation.",
    check: "x 从 0 到 1，u=1−x² 时新端点顺序是什么？", answer: "从 1 到 0。"
  },
  {
    id: "integration-by-parts", station: "parts-rational", number: "04",
    titleZh: "分部积分与选因子", titleEn: "Integration by parts and choosing factors",
    source: "Theorem 10.8; Examples 10.9–10.12 · Lecture Notes p.7–9",
    theorem: {
      statementZh: "对连续可微的 u、v，u v′ 的积分等于边界项 uv 减去 u′v 的积分",
      statementEn: "For continuously differentiable u and v, the integral of u v′ equals the boundary term uv minus the integral of u′v.",
      hypotheses: ["u、v 在区间上连续可微", "边界项按 u(b)v(b)−u(a)v(a) 计算", "选择 v′ 必须容易积分"],
      formula: "∫ₐᵇu(x)v′(x)dx = [u(x)v(x)]ₐᵇ − ∫ₐᵇu′(x)v(x)dx",
      oneLineZh: "分部积分把乘积的导数责任从一侧转移到另一侧。"
    },
    insight: "让多项式求导，让容易积分的因子先积分。",
    numericProbe: { zh: "∫x eˣdx：u=x、v′=eˣ，得 x eˣ−eˣ+C", en: "For ∫x eˣdx choose u=x and v′=eˣ, giving x eˣ−eˣ+C." },
    networkGoal: "反向使用乘积法则", networkRisk: "选了会让积分更复杂的因子",
    animation: "integration-parts", animationTitle: "边界项与剩余积分交换",
    symbols: [["u,v", "parts factors", "乘积法则中的两个函数", "选 u 与 v′"], ["[uv]ₐᵇ", "boundary term", "端点乘积之差", "必须计算"], ["u′v", "remaining integrand", "转移后的乘积", "希望更容易积分"]],
    explanationZh: ["分部积分来自乘积法则，不是猜测公式。选择 u 与 v′ 是策略问题，不改变定理。", "好的选择通常让 u′ 更简单，同时让 v 容易求，从而使剩余积分比原积分更简单。"],
    qaSteps: [
      { kind: "definition", labelZh: "选因子", labelEn: "Choose factors", questionZh: "分部积分怎样选择 u 和 v′？", questionEn: "How are u and v′ chosen in integration by parts?", hint: "看哪个因子求导后变简单，哪个容易积分。", answerZh: "结论：选择 u 使 u′ 更简单，选择 v′ 使其容易得到 v。常见是 u=多项式、v′=eˣ 或三角函数。", formula: "u v′" },
      { kind: "computation", labelZh: "x eˣ", labelEn: "x eˣ", questionZh: "∫x eˣdx 怎样计算？", questionEn: "How do you evaluate ∫x eˣdx?", hint: "u=x，v′=eˣ。", answerZh: "结论：u′=1、v=eˣ，于是 ∫xeˣdx=xeˣ−∫eˣdx=eˣ(x−1)+C。", formula: "∫xeˣdx = eˣ(x−1)+C" },
      { kind: "derivation", labelZh: "边界项", labelEn: "Boundary term", questionZh: "定积分分部积分的方括号项是什么？", questionEn: "What is the bracket term in definite parts?", hint: "把 uv 在两个端点相减。", answerZh: "结论：[uv]ₐᵇ=u(b)v(b)−u(a)v(a)。它不是可选项，定积分中使用分部积分必须保留。", formula: "[uv]ₐᵇ = u(b)v(b)−u(a)v(a)" },
      { kind: "boundary", labelZh: "错误选择", labelEn: "Bad choice", questionZh: "为什么把 u=eˣ、v′=x 不一定方便？", questionEn: "Why is choosing u=eˣ and v′=x not always convenient?", hint: "看剩余积分 u′v。", answerZh: "结论：这样会留下 eˣ·x²/2 一类更复杂的项。分部公式正确，但选择要让剩余积分更容易。", formula: "u′v" }
    ],
    counterexample: { wrong: "分部积分后忘记 UV 边界项。", correct: "定积分必须保留 u(b)v(b)−u(a)v(a)。", why: "边界项来自乘积导数的积分。" },
    retellZh: "分部积分把 u v′ 换成 uv 边界项减 u′v 的积分。", retellEn: "Integration by parts replaces the integral of u v′ with the uv boundary difference minus the integral of u′v.",
    check: "∫x sin x dx 应让谁做 u？", answer: "令 u=x，使 u′ 变为常数。"
  },
  {
    id: "repeated-parts-improper", station: "parts-rational", number: "05",
    titleZh: "重复分部、端点项与 improper 积分", titleEn: "Repeated parts, boundary terms and improper limits",
    source: "Examples 10.10–10.13; Exercises 10.14–10.16 · Lecture Notes p.8–10",
    theorem: {
      statementZh: "分部积分可以重复使用；每次重复都必须带上新的边界项，若为 improper 积分还必须先截断再取极限",
      statementEn: "Integration by parts may be repeated, but every iteration contributes a boundary term; improper integrals require a proper truncation before taking limits.",
      hypotheses: ["每次分部所需的连续可微条件成立", "重复次数有限", "improper 情形先使用有限截断"],
      formula: "∫u v′ = uv − ∫u′v; repeat while the remainder simplifies",
      oneLineZh: "重复分部是逐步降低剩余难度的过程。"
    },
    insight: "分部一次不够时，检查剩余积分是否真的变简单。",
    numericProbe: { zh: "∫x²eˣdx：分部两次，结果 eˣ(x²−2x+2)+C", en: "Integrating x²eˣ needs two parts and gives eˣ(x²−2x+2)+C." },
    networkGoal: "把分部当作可递归的化简过程", networkRisk: "重复时漏掉边界项或超越收敛条件",
    animation: "repeated-parts", animationTitle: "多项式次数逐次下降",
    symbols: [["repeat", "iteration", "继续把剩余乘积拆开", "每步检查更简单"], ["boundary", "new boundary term", "每次分部产生的端点项", "不能合并遗漏"], ["truncation", "improper limit", "先算到 R 再取极限", "不能直接代∞"]],
    explanationZh: ["多项式乘指数或三角函数时，每分部一次可让多项式次数下降一阶。", "在无穷区间上使用分部积分，必须把积分写成有限 R 的截断形式，再让 R→∞；∞ 本身不能代入边界项。"],
    qaSteps: [
      { kind: "computation", labelZh: "两次分部", labelEn: "Two parts", questionZh: "∫x²eˣdx 为什么需要两次分部？", questionEn: "Why does ∫x²eˣdx need two parts steps?", hint: "每次让 u 的多项式次数下降。", answerZh: "结论：第一次把 x² 降为 x，第二次把 x 降为常数，最后只剩 ∫eˣdx。两次边界项都要保留。", formula: "∫x²eˣdx=eˣ(x²−2x+2)+C" },
      { kind: "definition", labelZh: "循环分部", labelEn: "Cyclic parts", questionZh: "∫eˣsin x dx 为什么会出现循环关系？", questionEn: "Why does ∫eˣsin x dx lead to a cyclic equation?", hint: "指数与三角的导数会循环。", answerZh: "结论：连续分部两次后，右侧重新出现原积分；把它移到左侧解代数方程即可，但仍保留已出现的边界项。", formula: "I = ... − I" },
      { kind: "boundary", labelZh: "端点项", labelEn: "Endpoint term", questionZh: "重复分部时为什么不能只累加内部积分？", questionEn: "Why can repeated parts not ignore accumulated boundary terms?", hint: "每次乘积规则都给出 uv。", answerZh: "结论：每一步分部都产生新的 uv 端点项。漏掉一项就会使定积分结果错误，即使不定积分部分看起来正确。", formula: "∑ [uᵢvᵢ]ₐᵇ" },
      { kind: "boundary", labelZh: "Improper 分部", labelEn: "Improper parts", questionZh: "在无穷积分上使用分部积分的第一步是什么？", questionEn: "What is the first step when using parts on an improper integral?", hint: "先截断为 R。", answerZh: "结论：先算 ∫₀ᴿ 的普通积分，保留 R 的边界项，再分别取 R→∞。不能直接写 [uv]₀∞ 当普通端点差。", formula: "lim R→∞ [uv]₀ᴿ" }
    ],
    counterexample: { wrong: "∫x²eˣdx 分部一次就得到答案。", correct: "第一次后还剩 ∫2x eˣdx，需要再次按组件降次。", why: "重复分部不是重复同一步，而是继续化简剩余积分。" },
    retellZh: "重复分部逐次降低代数复杂度，并保留每一步的边界项。", retellEn: "Repeated parts reduce the remaining algebraic complexity while retaining each boundary contribution.",
    check: "重复分部停止的条件是什么？", answer: "当剩余积分已经可由基本原函数直接计算时停止。"
  },
  {
    id: "rational-functions-division", station: "parts-rational", number: "06",
    titleZh: "有理函数、真分式与多项式除法", titleEn: "Rational functions, proper fractions and polynomial division",
    source: "Definition 10.17; Examples 10.18–10.20 · Lecture Notes p.10–12",
    theorem: {
      statementZh: "有理函数的分子次数不小于分母时，可先用多项式除法写成多项式加真分式",
      statementEn: "If a rational function has numerator degree at least the denominator degree, polynomial division rewrites it as a polynomial plus a proper fraction.",
      hypotheses: ["P、Q 为实多项式且 Q 非零", "在 Q≠0 的区间上工作", "真分式满足 degP<degQ"],
      formula: "P(x)/Q(x) = S(x) + R(x)/Q(x), deg R<deg Q",
      oneLineZh: "分子次数太高时，先除法把多项式部分剥离。"
    },
    insight: "有理积分先看次数，再看分母因式。",
    numericProbe: { zh: "(x²+1)/(x+1)=x−1+2/(x+1)", en: "(x²+1)/(x+1)=x−1+2/(x+1)." },
    networkGoal: "在拆分前先得到真分式", networkRisk: "直接给假分式套部分分式模板",
    animation: "rational-division", animationTitle: "除法剥离多项式部分",
    symbols: [["deg", "degree", "多项式的最高次数", "比较分子分母"], ["proper", "proper fraction", "分子次数小于分母", "degP<degQ"], ["S", "quotient polynomial", "除法得到的多项式部分", "直接积分"], ["R/Q", "remainder fraction", "剩余真分式", "再做拆分"]],
    explanationZh: ["有理函数先检查分母是否为零，并确定每个连通区间的积分范围。", "多项式部分可直接逐项积分；剩余真分式才使用部分分式。若跳过除法，模板次数会不完整。"],
    qaSteps: [
      { kind: "definition", labelZh: "真分式", labelEn: "Proper fraction", questionZh: "真分式与假分式怎样区分？", questionEn: "How do proper and improper rational fractions differ?", hint: "比较分子和分母次数。", answerZh: "结论：degP<degQ 时为真分式；次数不小于分母时为假分式。假分式先除法。", formula: "degP<degQ" },
      { kind: "computation", labelZh: "除法例子", labelEn: "Division example", questionZh: "(x²+1)/(x+1) 怎样分解？", questionEn: "How does (x²+1)/(x+1) divide?", hint: "做多项式长除法。", answerZh: "结论：商为 x−1，余式为 2，因此 (x²+1)/(x+1)=x−1+2/(x+1)。", formula: "x−1+2/(x+1)" },
      { kind: "boundary", labelZh: "分母零点", labelEn: "Denominator zero", questionZh: "有理函数拆分前为什么先写定义域？", questionEn: "Why record the domain before decomposing a rational function?", hint: "约分可能隐藏洞。", answerZh: "结论：原分母的零点可能造成极点或可去点。原函数的定义域不能被代数化简扩大。", formula: "Q(x)≠0" },
      { kind: "derivation", labelZh: "部分分式入口", labelEn: "Entry to partial fractions", questionZh: "为什么剩余真分式的次数条件重要？", questionEn: "Why does the degree condition matter for partial fractions?", hint: "模板要匹配分母因式。", answerZh: "结论：真分式的分子次数低于分母后，标准部分分式模板才与未知系数数量匹配；否则先除法。", formula: "degR<degQ" }
    ],
    counterexample: { wrong: "对 (x³+1)/(x+1) 直接列常数分子模板。", correct: "先做除法，得到多项式部分和低次余式。", why: "假分式的多项式部分不属于任何真分式模板。" },
    retellZh: "有理积分先除到真分式，再对分母因式分解。", retellEn: "Rational integration first divides to a proper fraction before using denominator factors.",
    check: "真分式的次数条件是什么？", answer: "分子次数严格小于分母次数。"
  },
  {
    id: "partial-fractions", station: "parts-rational", number: "07",
    titleZh: "部分分式模板与待定系数", titleEn: "Partial-fraction templates and unknown coefficients",
    source: "Examples 10.18–10.21 · Lecture Notes p.10–13",
    theorem: {
      statementZh: "按实分母的不同线性因子、重复因子和不可约二次因子，为每项设置完整分子模板并解线性方程",
      statementEn: "For distinct linear factors, repeated factors and irreducible quadratic factors, set a complete partial-fraction template and solve the resulting linear equations.",
      hypotheses: ["P/Q 已为真分式", "分母已因式分解", "每个重复幂都要出现", "不可约二次因子使用线性分子"],
      formula: "R/Q = Σ Aᵢ/(x−rᵢ) + Σ Bⱼ/(x−rⱼ)ʲ + Σ (Cₖx+Dₖ)/qₖ(x)",
      oneLineZh: "分母有什么重复或二次结构，模板就完整保留什么。"
    },
    insight: "模板先写全，再解系数，不要边猜边漏项。",
    numericProbe: { zh: "1/((x+1)(x+2))=1/(x+1)−1/(x+2)", en: "1/((x+1)(x+2))=1/(x+1)−1/(x+2)." },
    networkGoal: "将真有理式拆成可积基本项", networkRisk: "重复因子只写一次或二次因子只写常数分子",
    animation: "partial-fractions", animationTitle: "分母因式拆成基本模块",
    symbols: [["A,B,C,D", "unknown coefficients", "待定系数", "通过展开或代根求"], ["(x−r)ᵏ", "repeated factor", "需要 k 个幂次项", "不能只写一项"], ["q(x)", "irreducible quadratic", "不可约二次分母", "分子用 Cx+D"]],
    explanationZh: ["部分分式不是猜测；每一类分母因子对应固定形式的模块。先写完整模板，再用合并分子或代根法求系数。", "不可约二次因子的分子必须是一次的 Cx+D，单个常数不能覆盖一般情形。"],
    qaSteps: [
      { kind: "definition", labelZh: "分配模板", labelEn: "Assign a template", questionZh: "不同线性因子对应什么模板？", questionEn: "What template belongs to distinct linear factors?", hint: "每个根一个常数分子。", answerZh: "结论：每个不同的 x−r 对应一个 A/(x−r) 项。重复因子 (x−r)ᵏ 还要写 A₁/(x−r)+…+Aₖ/(x−r)ᵏ。", formula: "A/(x−r)" },
      { kind: "computation", labelZh: "两个线性因子", labelEn: "Two linear factors", questionZh: "1/((x+1)(x+2)) 怎样拆分？", questionEn: "How do you decompose 1/((x+1)(x+2))?", hint: "设 A/(x+1)+B/(x+2)。", answerZh: "结论：1=A(x+2)+B(x+1)。代 x=−1 得 A=1，代 x=−2 得 B=−1，所以拆分为 1/(x+1)−1/(x+2)。", formula: "1/(x+1) − 1/(x+2)" },
      { kind: "boundary", labelZh: "不可约二次", labelEn: "Irreducible quadratic", questionZh: "二次因子为什么不能只写一个常数分子？", questionEn: "Why can a quadratic factor not use only a constant numerator?", hint: "需要覆盖两个自由度。", answerZh: "结论：不可约二次因子需要 Cx+D 的线性分子才能匹配一般真分式。只有常数会漏掉一类贡献。", formula: "(Cx+D)/(x²+bx+c)" },
      { kind: "computation", labelZh: "验证拆分", labelEn: "Verify decomposition", questionZh: "求完部分分式后怎样快速检查？", questionEn: "How can a partial-fraction decomposition be checked?", hint: "合并回去或代几个点。", answerZh: "结论：把拆分式合并回单一有理式，检查分子恒等；也可代若干非极点值作数值核对。最后再检查定义域。", formula: "recombine and compare numerators" }
    ],
    counterexample: { wrong: "对 (x²+1)/((x−1)²(x²+4)²) 只写一个 A/(x−1)+B/(x²+4)。", correct: "重复的线性与二次因子都必须写出所有幂次，二次项分子为一次式。", why: "模板必须覆盖分母因子的全部重数和次数。" },
    retellZh: "部分分式先按分母完整铺模板，再用恒等式求系数。", retellEn: "Partial fractions first write a complete denominator-driven template, then solve its coefficients.",
    check: "重复线性因子 (x−1)² 需要几个项？", answer: "两个：A/(x−1)+B/(x−1)²。"
  },
  {
    id: "rational-primitives-poles", station: "parts-rational", number: "08",
    titleZh: "有理原函数、极点与可去点", titleEn: "Rational primitives, poles and removable points",
    source: "Theorem 10.22; Examples 10.23; Exercises 10.24–10.25 · Lecture Notes p.13–14",
    theorem: {
      statementZh: "实有理函数在原分母不为零的每个区间上都有初等原函数，但原函数不能跨越极点直接拼接",
      statementEn: "Every real rational function has an elementary antiderivative on each interval where its original denominator is nonzero, but a primitive cannot be spliced across a pole.",
      hypotheses: ["在每个原分母非零的连通区间上讨论", "部分分式必须来自原分母", "跨过极点要重新检查 improper 收敛"],
      formula: "P/Q has elementary primitive on every interval with Q≠0",
      oneLineZh: "原函数逐区间存在，不等于跨越极点后可积。"
    },
    insight: "先找极点，再在每个合法区间分别积分。",
    numericProbe: { zh: "1/(x−1) 的原函数为 log|x−1|，但 ∫₀²1/(x−1)dx 两侧发散", en: "The primitive of 1/(x−1) is log|x−1|, but ∫₀²1/(x−1)dx diverges on both sides." },
    networkGoal: "把部分分式结果与定义域、improper 收敛连接", networkRisk: "跨过极点直接代端点",
    animation: "rational-primitives-poles", animationTitle: "极点把定义域切成独立区间",
    symbols: [["log", "logarithmic primitive", "线性因子产生对数", "检查真数正性"], ["arctan", "arctangent primitive", "不可约二次产生 arctan", "配方后使用"], ["pole", "denominator zero", "原函数可能无界", "不能跨越"], ["elementary", "elementary primitive", "由熟悉函数有限组成", "不是所有积分都初等"]],
    explanationZh: ["部分分式的线性项积出对数，不可约二次项可分成对数与 arctan 两部分。", "原函数存在只保证在每个连通区间上可以积分；跨过极点时，左右 improper 积分必须分别收敛，不能靠端点相减抵消。"],
    qaSteps: [
      { kind: "definition", labelZh: "基本模块", labelEn: "Primitive modules", questionZh: "部分分式项分别积成什么？", questionEn: "What primitives arise from partial-fraction terms?", hint: "区分离散线性幂和不可约二次。", answerZh: "结论：1/(x−r) 积成 log|x−r|；幂次项由幂律处理；不可约二次通常配方后分成对数与 arctan。", formula: "∫1/(x−r)dx=log|x−r|+C" },
      { kind: "computation", labelZh: "arctan 项", labelEn: "Arctangent term", questionZh: "怎样积分 1/(x²+1)？", questionEn: "How do you integrate 1/(x²+1)?", hint: "识别 arctan 的导数。", answerZh: "结论：∫1/(x²+1)dx=arctan x+C。一般不可约二次先配方，再用 arctan 公式。", formula: "∫dx/(x²+1)=arctan x+C" },
      { kind: "boundary", labelZh: "跨越极点", labelEn: "Across a pole", questionZh: "为什么 log|x−1| 不能直接给 ∫₀²1/(x−1)dx？", questionEn: "Why does log|x−1| not directly evaluate ∫₀²1/(x−1)dx?", hint: "在 1 处函数无界。", answerZh: "结论：必须把积分拆成 (0,1) 与 (1,2) 的 improper 极限。两边分别发散，有限端点相减无效。", formula: "∫₀¹ + ∫₁²" },
      { kind: "boundary", labelZh: "可去点", labelEn: "Removable point", questionZh: "原式约分后连续，能否自动补回被删的点？", questionEn: "Does cancellation automatically restore a removed point?", hint: "原函数定义域由原式决定。", answerZh: "结论：不能。化简只改变允许区间上的表达式，不把原分母为零的点重新定义回来。", formula: "domain read from original Q" }
    ],
    counterexample: { wrong: "原函数在每个区间存在，所以跨极点的定积分一定收敛。", correct: "跨极点后必须检查两侧 improper 极限。", why: "原函数局部存在不等于跨越奇点的积分收敛。" },
    retellZh: "有理函数逐区间有初等原函数，跨极点时必须重新检查收敛。", retellEn: "Rational functions have elementary primitives on valid intervals, but crossing a pole requires a separate convergence check.",
    check: "1/(x²+1) 的原函数是什么？", answer: "arctan x+C。"
  },
  {
    id: "trig-powers-products", station: "trig-hyperbolic", number: "09",
    titleZh: "三角幂与乘积的换元策略", titleEn: "Substitution strategy for trigonometric powers and products",
    source: "Section 11.1; Examples 11.1–11.4 · Lecture Notes p.15–17",
    theorem: {
      statementZh: "三角幂乘积中若存在可保留的奇次导数因子，可用换元；全偶次幂则用降幂恒等式",
      statementEn: "In trigonometric products, a spare odd-power derivative factor enables substitution; purely even powers require power-reduction identities.",
      hypotheses: ["先检查 sin/cos 的奇偶次幂", "保留一个导数为 du 的因子", "全偶次幂使用 sin²、cos² 恒等式"],
      formula: "sin²x=(1−cos2x)/2; cos²x=(1+cos2x)/2",
      oneLineZh: "有奇次因子就换元，全偶次就降幂。"
    },
    insight: "奇次幂留一个因子给微分，偶次幂换成低倍角。",
    numericProbe: { zh: "∫sin³x cos²x dx 令 u=cos x，得 −∫(1−u²)u²du", en: "For ∫sin³x cos²x dx, u=cos x gives −∫(1−u²)u²du." },
    networkGoal: "根据幂次奇偶选择三角积分方法", networkRisk: "全偶次仍硬找不存在的导数因子",
    animation: "trig-powers", animationTitle: "奇次因子与降幂选择",
    symbols: [["odd power", "spare derivative factor", "保留一个三角因子充当 du", "换元"], ["even power", "power reduction", "用倍角恒等式降幂", "sin²/cos²"], ["du", "differential factor", "换元的导数部分", "必须完整出现"]],
    explanationZh: ["先看幂次的奇偶性，再选择换元或恒等式。三角积分不是只在公式表里找原函数。", "奇次因子提供一个可用的微分；若没有，降幂公式把平方换成一次倍角。"],
    qaSteps: [
      { kind: "definition", labelZh: "奇次因子", labelEn: "Odd factor", questionZh: "为什么奇次 sin 或 cos 容易换元？", questionEn: "Why does an odd sine or cosine power simplify substitution?", hint: "拆出一个因子作为导数。", answerZh: "结论：奇次幂可拆出一个因子与 du 配对，剩余偶次幂再写成另一三角函数。", formula: "sin³x dx = sin²x·sin x dx" },
      { kind: "computation", labelZh: "sin³cos²", labelEn: "sin³cos²", questionZh: "怎样处理 ∫sin³x cos²x dx？", questionEn: "How do you handle ∫sin³x cos²x dx?", hint: "令 u=cos x，sin x dx=−du。", answerZh: "结论：sin³x cos²x dx=sin²x cos²x sin x dx=(1−u²)u²(−du)，再积分。", formula: "−∫(1−u²)u²du" },
      { kind: "boundary", labelZh: "全偶次", labelEn: "All even powers", questionZh: "∫sin²x dx 为什么不能拆出 sin x dx？", questionEn: "Why can ∫sin²x dx not expose a spare sin x dx factor?", hint: "幂次是偶数。", answerZh: "结论：没有额外奇次因子可作 du。应使用 sin²x=(1−cos2x)/2 降为一次倍角。", formula: "sin²x=(1−cos2x)/2" },
      { kind: "computation", labelZh: "tan 与 sec", labelEn: "tan and sec", questionZh: "tan x 的积分怎样写成导数因子？", questionEn: "How is tan x rewritten as a derivative factor?", hint: "tan=sin/cos。", answerZh: "结论：tan x=sin x/cos x，取 u=cos x，du=−sin x dx，得到 −log|cos x|+C。", formula: "∫tan x dx=−log|cos x|+C" }
    ],
    counterexample: { wrong: "所有 sin^m x cos^n x 都靠拆奇次因子。", correct: "当 m,n 都为偶数时，应优先降幂。", why: "全偶次没有可用于换元的额外导数因子。" },
    retellZh: "三角乘积先看奇偶，有奇次就换元，全偶次就降幂。", retellEn: "Inspect parity: odd powers expose a substitution factor, while all-even powers need reduction.",
    check: "∫cos²x dx 使用什么恒等式？", answer: "cos²x=(1+cos2x)/2。"
  },
  {
    id: "trig-substitution-branches", station: "trig-hyperbolic", number: "10",
    titleZh: "三角换元、根式与分支选择", titleEn: "Trigonometric substitution, radicals and branch choice",
    source: "Section 11.2; Examples 11.6–11.7 · Lecture Notes p.17–19",
    theorem: {
      statementZh: "对含 1−x²、1+x² 或 x²−1 的根式，用正弦、正切或有向双曲替换，并选择与积分区间匹配的单射分支",
      statementEn: "For radicals involving 1−x², 1+x² or x²−1, use sine, tangent or hyperbolic substitutions and choose an injective branch matching the interval.",
      hypotheses: ["根式内部须非负", "换元连续可导且内部取值落在合法区间", "反解时的分支必须与端点一致"],
      formula: "1−x²=x: x=sin t; 1+x²: x=tan t",
      oneLineZh: "根式结构决定替换，区间决定分支。"
    },
    insight: "看到根式先选三角形，再限制 t 的区间。",
    numericProbe: { zh: "∫√(1−x²)dx 在 [−1,1] 取 x=sin t，t∈[−π/2,π/2]", en: "For ∫√(1−x²)dx on [−1,1], choose x=sin t with t∈[−π/2,π/2]." },
    networkGoal: "把根式代数限制转成三角恒等式", networkRisk: "只写替换却忽略反函数分支",
    animation: "trig-substitution", animationTitle: "三角形与分支区间",
    symbols: [["x=sin t", "sine substitution", "处理 1−x²", "t 限制主分支"], ["x=tan t", "tangent substitution", "处理 1+x²", "避免端点"], ["√(1−x²)", "radical relation", "变成 |cos t|", "分支决定去绝对值"]],
    explanationZh: ["三角换元用恒等式消去根号，但反解 arcsin 或 arctan 时必须限制分支。", "在某个单射分支上，根式可安全化为无绝对值的三角函数；跨分支时要重新检查符号和边界。"],
    qaSteps: [
      { kind: "definition", labelZh: "结构匹配", labelEn: "Match the radical", questionZh: "√(1−x²) 应想到哪种换元？", questionEn: "Which substitution suits √(1−x²)?", hint: "使用 1−sin²=cos²。", answerZh: "结论：令 x=sin t。则 1−x²=cos²t，根式由所选分支化为 cos t 或 −cos t。", formula: "x=sin t" },
      { kind: "computation", labelZh: "arcsine 例子", labelEn: "Arcsine example", questionZh: "x=sin t 为什么可以帮助识别 arcsin 原函数？", questionEn: "How does x=sin t reveal the arcsine primitive?", hint: "dx=cos t dt。", answerZh: "结论：在 −π/2<t<π/2，∫1/√(1−x²)dx=∫1dt=t+C=arcsin x+C。", formula: "∫dx/√(1−x²)=arcsin x+C" },
      { kind: "boundary", labelZh: "根式绝对值", labelEn: "Radical absolute value", questionZh: "√(1−x²) 换元后为什么可能涉及 |cos t|？", questionEn: "Why can substitution introduce |cos t|?", hint: "根号只给非负数。", answerZh: "结论：x=sin t 时 1−x²=cos²t，所以根式等于 |cos t|。只有在选定分支使 cos t 非负时才能简写为 cos t。", formula: "√(cos²t)=|cos t|" },
      { kind: "boundary", labelZh: "端点极限", labelEn: "Endpoint limit", questionZh: "为什么在 x=1 附近做三角换元要特别小心？", questionEn: "Why is a trigonometric substitution delicate near x=1?", hint: "反三角函数端点或 improper 端点。", answerZh: "结论：分支端点和原根式端点可能对应反三角函数的极限。先检查 proper/inproper 区间，再用匹配分支的极限。", formula: "x→1⁻" }
    ],
    counterexample: { wrong: "√(1−sin²t) 总是 cos t。", correct: "它等于 |cos t|；只有选择 cos t≥0 的分支才能去掉绝对值。", why: "平方根主值始终非负。" },
    retellZh: "三角换元消除根式，分支和绝对值决定化简是否正确。", retellEn: "Trigonometric substitution removes radicals, with branch and absolute-value choices controlling correctness.",
    check: "√(1−x²) 的自然换元是什么？", answer: "x=sin t，并选择匹配区间的分支。"
  },
  {
    id: "hyperbolic-integrals", station: "trig-hyperbolic", number: "11",
    titleZh: "双曲函数、恒等式与对数原函数", titleEn: "Hyperbolic functions, identities and logarithmic primitives",
    source: "Definition 11.9; Examples 11.10; Exercise 11.11 · Lecture Notes p.19–21",
    theorem: {
      statementZh: "双曲函数由指数定义，满足 cosh²x−sinh²x=1，并提供包含 √(1+x²) 的积分与 arsinh 原函数",
      statementEn: "Hyperbolic functions are defined from exponentials, satisfy cosh²x−sinh²x=1, and provide useful primitives and substitutions involving √(1+x²).",
      hypotheses: ["实变量 x", "分母 cosh x 不为 0 当定义 tanh 时", "双曲恒等式与三角符号差异要保留"],
      formula: "cosh²x−sinh²x=1; ∫dx/√(1+x²)=arsinh x+C",
      oneLineZh: "双曲换元把加号根式变成 cosh²−sinh²。"
    },
    insight: "注意加减号：双曲恒等式中间是减号。",
    numericProbe: { zh: "x=sinh t：√(1+x²)=cosh t，dx=cosh t dt", en: "With x=sinh t, √(1+x²)=cosh t and dx=cosh t dt." },
    networkGoal: "用指数定义的函数处理加号根式", networkRisk: "把双曲恒等式写成三角的加号版本",
    animation: "hyperbolic-identity", animationTitle: "cosh² 与 sinh² 的差",
    symbols: [["cosh x", "hyperbolic cosine", "(eˣ+e⁻ˣ)/2", "偶函数"], ["sinh x", "hyperbolic sine", "(eˣ−e⁻ˣ)/2", "奇函数"], ["arsinh", "inverse hyperbolic sine", "log(x+√(1+x²))", "可作原函数"], ["tanh", "hyperbolic tangent", "sinh/cosh", "cosh≠0"]],
    explanationZh: ["双曲函数由指数定义，导数和恒等式与三角函数相似，但符号不同。", "对含 1+x² 的根式，双曲替换与三角替换都可用；双曲恒等式往往直接消去加号根式。"],
    qaSteps: [
      { kind: "definition", labelZh: "指数定义", labelEn: "Exponential definition", questionZh: "cosh x 与 sinh x 的定义是什么？", questionEn: "How are cosh x and sinh x defined?", hint: "使用 eˣ 与 e⁻ˣ 的和/差。", answerZh: "结论：cosh x=(eˣ+e⁻ˣ)/2，sinh x=(eˣ−e⁻ˣ)/2。导数分别是 sinh x 与 cosh x。", formula: "cosh x=(eˣ+e⁻ˣ)/2; sinh x=(eˣ−e⁻ˣ)/2" },
      { kind: "computation", labelZh: "平方差恒等式", labelEn: "Difference identity", questionZh: "为什么 cosh²x−sinh²x=1？", questionEn: "Why does cosh²x−sinh²x=1?", hint: "直接把指数定义代入。", answerZh: "结论：展开 ((eˣ+e⁻ˣ)²−(eˣ−e⁻ˣ)²)/4，交叉项相消，得到 4/4=1。", formula: "cosh²x−sinh²x=1" },
      { kind: "computation", labelZh: "双曲换元", labelEn: "Hyperbolic substitution", questionZh: "∫1/√(1+x²)dx 怎样使用 sinh？", questionEn: "How can sinh evaluate ∫1/√(1+x²)dx?", hint: "x=sinh t。", answerZh: "结论：√(1+sinh²t)=cosh t，dx=cosh t dt，integrand 化为 1，积分得 t+C=arsinh x+C。", formula: "arsinh x=log(x+√(1+x²))" },
      { kind: "boundary", labelZh: "tanh 定义域", labelEn: "tanh domain", questionZh: "tanh x 的定义有什么排除条件？", questionEn: "What restriction does tanh x require?", hint: "它是 sinh/cosh。", answerZh: "结论：tanh x=sinh x/cosh x，需要 cosh x≠0。对实数 x，cosh x≥1，所以实数 tanh 处处定义。", formula: "cosh x≥1" }
    ],
    counterexample: { wrong: "cosh²x+sinh²x=1。", correct: "cosh²x−sinh²x=1。", why: "双曲恒等式的符号与正弦余弦恒等式不同。" },
    retellZh: "双曲函数由指数定义，平方差恒等式帮助消去 1+x² 根式。", retellEn: "Hyperbolic functions come from exponentials, and their difference identity simplifies radicals with 1+x².",
    check: "arsinh x 的对数形式是什么？", answer: "log(x+√(1+x²))。"
  },
  {
    id: "integral-symmetry", station: "trig-hyperbolic", number: "12",
    titleZh: "奇偶性与定积分对称", titleEn: "Parity and symmetry of definite integrals",
    source: "Definition 11.12; Proposition 11.13; Example 11.14 · Lecture Notes p.21–23",
    theorem: {
      statementZh: "在对称区间 [−a,a] 上，偶函数积分等于 0 到 a 的两倍，奇函数积分为 0",
      statementEn: "On a symmetric interval [−a,a], the integral of an even function is twice its integral on [0,a], while the integral of an odd function is zero.",
      hypotheses: ["区间关于 0 对称", "f 在 [−a,a] 上 Riemann 可积", "先验证奇偶性，再使用结论"],
      formula: "f even: ∫−aᵃf=2∫₀ᵃf; f odd: ∫−aᵃf=0",
      oneLineZh: "偶函数左右相加，奇函数左右抵消。"
    },
    insight: "区间不关于 0 对称时，奇偶性不能直接消项。",
    numericProbe: { zh: "∫−2²x³dx=0；∫−1¹x²dx=2∫₀¹x²dx=2/3", en: "∫−2²x³dx=0 and ∫−1¹x²dx=2∫₀¹x²dx=2/3." },
    networkGoal: "用对称性减少定积分计算", networkRisk: "忽略区间是否关于 0 对称",
    animation: "integral-symmetry", animationTitle: "奇函数抵消与偶函数加倍",
    symbols: [["even", "f(−x)=f(x)", "图像关于 y 轴对称", "面积加倍"], ["odd", "f(−x)=−f(x)", "图像关于原点对称", "有向积分抵消"], ["[−a,a]", "symmetric interval", "左半映射到右半", "前提"]],
    explanationZh: ["对称性来自左侧积分通过 x→−u 反射到右侧。它依赖区间和函数性质同时成立。", "奇函数两侧有向面积符号相反；偶函数两侧相同，因此左侧贡献与右侧相加。"],
    qaSteps: [
      { kind: "definition", labelZh: "奇偶判断", labelEn: "Test parity", questionZh: "怎样判断 f 是偶函数或奇函数？", questionEn: "How do you test whether f is even or odd?", hint: "比较 f(−x) 与 f(x)。", answerZh: "结论：f(−x)=f(x) 为偶函数；f(−x)=−f(x) 为奇函数。两者不是互斥的：恒为零的函数同时是偶和奇。", formula: "f(−x)=±f(x)" },
      { kind: "computation", labelZh: "奇函数积分", labelEn: "Odd integral", questionZh: "∫−2²x³dx 为什么是 0？", questionEn: "Why is ∫−2²x³dx zero?", hint: "x³ 是奇函数，区间对称。", answerZh: "结论：x³ 是奇函数且 [−2,2] 关于 0 对称，两侧有向面积抵消，积分等于 0。", formula: "∫−2²x³dx=0" },
      { kind: "computation", labelZh: "偶函数积分", labelEn: "Even integral", questionZh: "∫−1¹x²dx 为什么等于两倍右半？", questionEn: "Why is ∫−1¹x²dx twice the right-half integral?", hint: "x² 偶函数。", answerZh: "结论：左右两侧面积相同，所以等于 2∫₀¹x²dx=2/3。", formula: "2∫₀¹x²dx=2/3" },
      { kind: "boundary", labelZh: "区间前提", labelEn: "Symmetric interval", questionZh: "∫₀²x³dx 为什么不能因奇函数直接写成 0？", questionEn: "Why can ∫₀²x³dx not be set to zero by oddness?", hint: "区间不对称。", answerZh: "结论：奇偶抵消需要 [−a,a] 这样的对称区间。非对称区间的左右面积没有一一对应。", formula: "[−a,a]" }
    ],
    counterexample: { wrong: "1/x 是奇函数，所以 ∫−1¹1/x dx=0。", correct: "1/x 在 0 无界，improper 两侧分别发散；奇偶性不能修复前提。", why: "对称性结论要求函数在闭区间上可积。" },
    retellZh: "对称区间上的偶函数加倍、奇函数抵消，但必须先满足可积性。", retellEn: "On a symmetric interval, even functions double and odd functions cancel, provided integrability holds.",
    check: "奇函数在对称区间上的积分是多少？", answer: "若可积，积分为 0。"
  },
  {
    id: "integration-existence-numerical", station: "integration-strategy", number: "13",
    titleZh: "存在性、初等表达与数值积分", titleEn: "Existence, elementary expressions and numerical evaluation",
    source: "Section 12.1; Examples 12.1–12.2; Exercise 12.3 · Lecture Notes p.24–26",
    theorem: {
      statementZh: "连续函数在有限闭区间上可积，但不保证有初等原函数；精确积分表达与数值近似回答不同问题",
      statementEn: "A continuous function on a finite closed interval is integrable, but it need not have an elementary primitive; exact integral notation and numerical approximation answer different questions.",
      hypotheses: ["存在性与初等可积性分开判断", "数值求和需要明确的近似范围", "非初等事实只使用讲义陈述"],
      formula: "continuous on [a,b] ⇒ Riemann integrable",
      oneLineZh: "积分存在不等于能写成初等公式。"
    },
    insight: "先判断存在，再判断是否值得找初等原函数。",
    numericProbe: { zh: "e^{−x²} 的有限区间积分存在，但不能用讲义现有的初等函数有限表达", en: "e^{−x²} is integrable on finite intervals but has no elementary primitive within the course's stated facts." },
    networkGoal: "区分存在、精确表达与数值近似", networkRisk: "找不到原函数就断言积分不存在",
    animation: "integration-existence", animationTitle: "精确面积与有限和近似",
    symbols: [["Riemann integrable", "existence", "面积存在", "不要求初等原函数"], ["elementary", "finite familiar expression", "有限个熟悉函数组成", "不是所有积分都有"], ["numerical", "approximation", "有限和或数值算法", "需说明误差"]],
    explanationZh: ["连续函数在有限闭区间上可积，这是存在性结论。求初等原函数是另一项更强的结构要求。", "无法找到初等原函数时，保留精确积分记号、给出数值近似或说明非初等事实都可以是有效答案，但必须说明它回答的层次。"],
    qaSteps: [
      { kind: "definition", labelZh: "存在性", labelEn: "Existence", questionZh: "积分存在与找到原函数分别意味着什么？", questionEn: "How do existence and finding a primitive differ?", hint: "存在性是面积定义；原函数是求导逆问题。", answerZh: "结论：有限闭区间上的连续函数可以积分；找初等原函数是额外的代数可行性问题。", formula: "f∈C([a,b]) ⇒ f∈R([a,b])" },
      { kind: "boundary", labelZh: "非初等", labelEn: "Non-elementary", questionZh: "找不到原函数能否说明积分发散？", questionEn: "Does failure to find a primitive imply divergence?", hint: "有限区间存在性独立。", answerZh: "结论：不能。积分可能存在但没有初等表达式；在 improper 情形还必须另行验证收敛。", formula: "no elementary primitive ≠ divergent" },
      { kind: "computation", labelZh: "数值近似", labelEn: "Numerical approximation", questionZh: "有限 Riemann 和能提供什么？", questionEn: "What does a finite Riemann sum provide?", hint: "它是近似，不是自动保证。", answerZh: "结论：有限和给出可计算的近似值；若要声明误差，需要误差界、单调性或其他数值分析依据。", formula: "Sₙ ≈ ∫ₐᵇf" },
      { kind: "boundary", labelZh: "指定精度", labelEn: "Specified accuracy", questionZh: "题目要求数值近似时答案需要包含什么？", questionEn: "What must a numerical approximation answer include?", hint: "说明方法与精度。", answerZh: "结论：应写明是否使用精确积分记号、数值方法和请求精度。仅有小数而没有误差说明通常不够。", formula: "approximation + method + tolerance" }
    ],
    counterexample: { wrong: "e^{−x²} 找不到初等原函数，所以它在 [0,1] 上不可积。", correct: "它连续，因此在 [0,1] 上可积；只是原函数不能由课程中的初等函数有限表示。", why: "积分的存在性不以初等原函数为条件。" },
    retellZh: "连续函数可积，但初等原函数不是必然；精确表达和数值近似是不同答案。", retellEn: "Continuity gives integrability, but not necessarily an elementary primitive; exact and numerical answers serve different purposes.",
    check: "找不到初等原函数是否意味着 improper 积分发散？", answer: "不意味着；必须单独检查收敛。"
  },
  {
    id: "method-selection-combination", station: "integration-strategy", number: "14",
    titleZh: "积分方法选择与组合", titleEn: "Selecting and combining integration methods",
    source: "Section 12.2; Examples 12.4–12.5; Exercises 12.6–12.7 · Lecture Notes p.26–28",
    theorem: {
      statementZh: "积分方法由 integrand 的结构和定义域共同选择，复杂题可以在换元、分部、部分分式、三角或对称之间组合",
      statementEn: "Integration method is selected from the integrand's structure and domain, and complex problems may combine substitution, parts, partial fractions, trigonometry or symmetry.",
      hypotheses: ["先写定义域和存在性", "识别最外层代数结构", "每一步仍检查所选方法的定理前提"],
      formula: "structure → first method → new structure → next method",
      oneLineZh: "方法由结构决定，不靠试遍公式。"
    },
    insight: "先问结构，再问第一步；不要先算。",
    numericProbe: { zh: "∫x log x dx：先分部；若出现 inner composition，则先换元", en: "∫x log x dx starts with parts; an inner composition suggests substitution first." },
    networkGoal: "建立可解释的方法选择流程", networkRisk: "只凭公式外观随机尝试",
    animation: "method-selection", animationTitle: "从结构树选择第一条规则",
    symbols: [["structure", "algebraic structure", "复合、乘积、商或根式", "决定首法"], ["combination", "mixed method", "一步后继续识别新结构", "允许连续换法"], ["domain", "validity domain", "每一步都要是否合法", "尤其是换元和对数"]],
    explanationZh: ["复杂题往往不是只用一种方法。换元后可能出现分部，分部后可能出现部分分式，三角化简后再换元。", "每一步都重新识别结构，并检查当前方法的连续性、定义域和端点前提。图 12.1 提供决策清单，不是万能算法。"],
    qaSteps: [
      { kind: "definition", labelZh: "首步问题", labelEn: "First question", questionZh: "看到积分题先问哪三个问题？", questionEn: "What three questions should precede an integration attempt?", hint: "定义域、结构、方法前提。", answerZh: "结论：先确认定义域和可积性，再识别最外层结构，最后检查候选方法的定理前提。", formula: "domain → structure → hypothesis" },
      { kind: "computation", labelZh: "混合方法", labelEn: "Mixed strategy", questionZh: "换元之后出现多项式乘指数，下一步应考虑什么？", questionEn: "After substitution produces a polynomial times exponential, what method is next?", hint: "识别乘积结构。", answerZh: "结论：新结构是乘积，通常考虑分部积分；如果多项式次数较高，可能需重复分部。", formula: "product → parts" },
      { kind: "boundary", labelZh: "不合理首步", labelEn: "Unhelpful first step", questionZh: "分部积分公式合法是否等于它值得选择？", questionEn: "Does validity of parts imply it is a good choice?", hint: "剩余积分可能更复杂。", answerZh: "结论：公式合法不等于有用。选择应让剩余积分变简单；否则应回到结构识别。", formula: "u′v simpler?" },
      { kind: "boundary", labelZh: "定义域回查", labelEn: "Recheck domain", questionZh: "方法与答案为何必须继续检查定义域？", questionEn: "Why must domain checking continue after choosing a method?", hint: "换元和对数会引入限制。", answerZh: "结论：每次换元、对数或部分分式都可能改变允许范围；定理前提和最终答案必须使用原积分区间。", formula: "final domain = original domain" }
    ],
    counterexample: { wrong: "第一部分部后更复杂，仍继续重复同一选择。", correct: "重新识别剩余结构；合法的方法不一定是有用的方法。", why: "方法选择以降低复杂度为目标。" },
    retellZh: "先分定义域和结构，再选方法；复杂题可以在每一步重新选择。", retellEn: "Check domain and structure, choose the first method, then re-evaluate the new structure after each step.",
    check: "复合函数最内层及其导数是哪类方法的首选？", answer: "换元法。"
  },
  {
    id: "course-consolidation", station: "integration-strategy", number: "15",
    titleZh: "积分方法综合与课程连接", titleEn: "Consolidating integration methods and prior chapters",
    source: "Section 12.3; Example 12.8; Exercises 12.7, 12.9 · Lecture Notes p.28–30",
    theorem: {
      statementZh: "积分技巧必须与连续性、FTC、Taylor 误差、improper 极限和奇偶对称等已有结论联合使用",
      statementEn: "Integration techniques must be used together with continuity, the FTC, Taylor error bounds, improper limits and symmetry results.",
      hypotheses: ["积分存在性与技巧计算分开检查", "Taylor 近似不是精确恒等式", "FTC 和 symmetry 各有独立前提"],
      formula: "existence + method + error bound + domain consistency",
      oneLineZh: "会求原函数只是开始，结论还必须与定义域和误差一致。"
    },
    insight: "每个答案同时检查存在、计算、精度和定义域。",
    numericProbe: { zh: "e^{0.1} 的 T₃ 近似约 1.105166，误差由 Lagrange 余项另算", en: "The T₃ approximation of e^{0.1} is about 1.105166, with error handled by the Lagrange remainder." },
    networkGoal: "把积分技巧放回整门课的结构中", networkRisk: "算出原函数就忽略可积性、误差与前提",
    animation: "integration-map", animationTitle: "从 FTC 到积分技巧的综合地图",
    symbols: [["FTC", "bridge to antiderivatives", "积分与导数桥梁", "需连续性"], ["Taylor remainder", "numerical error control", "Taylor 数值近似的误差", "不是精确等式"], ["improper", "limit across singularity", "先截断再取极限", "不可省略"]],
    explanationZh: ["本周技巧只负责找到某些原函数；积分是否存在、端点是否收敛、Taylor 近似误差多大仍是独立检查。", "综合题可能同时用到换元、分部、FTC 和误差界。每一步的定理前提都要在同一最终区间上成立。"],
    qaSteps: [
      { kind: "definition", labelZh: "四层检查", labelEn: "Four checks", questionZh: "一个积分答案通常要经过哪四类检查？", questionEn: "What four checks should an integral answer pass?", hint: "存在、方法、精度、定义域。", answerZh: "结论：检查可积性与收敛；检查所选方法的定理前提；若近似则检查误差；最后确认定义域和端点方向。", formula: "existence → method → error → domain" },
      { kind: "computation", labelZh: "Taylor 连接", labelEn: "Taylor connection", questionZh: "积分技巧与 Taylor 误差怎样共同出现？", questionEn: "How can integration techniques and Taylor error occur together?", hint: "原函数可能只能用近似值。", answerZh: "结论：若原函数难求但积分有限，可用 Taylor 多项式近似 integrand 或积分值，并用 Lagrange 余项给出误差界。", formula: "∫f ≈ ∫Tₙ + ∫Rₙ" },
      { kind: "boundary", labelZh: "FTC 前提", labelEn: "FTC hypothesis", questionZh: "为什么找到某段原函数不能自动跨越不连续点？", questionEn: "Why does a primitive on one piece not automatically cross a discontinuity?", hint: "FTC 要求连续。", answerZh: "结论：FTC 的连续性前提可能失败。跨越断点或极点时必须拆成多个 proper/improper 积分分别处理。", formula: "f∈C([a,b])" },
      { kind: "definition", labelZh: "奇偶连接", labelEn: "Symmetry connection", questionZh: "综合题中对称性最早应在何时检查？", questionEn: "When should symmetry be checked in a multi-step integral?", hint: "在原积分区间尚未改变前。", answerZh: "结论：先从原函数和原区间检查奇偶性，可能直接消去整段积分；换元后也可重新检查新变量的对称性。", formula: "[−a,a]" }
    ],
    counterexample: { wrong: "求出原函数并代入端点，就认为 improper 积分一定收敛。", correct: "若端点有奇点，必须先检查两侧 improper 极限。", why: "原函数在区间内部存在不能替代收敛检查。" },
    retellZh: "积分技巧必须与存在性、FTC 前提、误差界和定义域联合检查。", retellEn: "Integration techniques are combined with existence, FTC hypotheses, error bounds and domain checks.",
    check: "Taylor 近似积分值时，误差由哪个工具控制？", answer: "Lagrange 余项或其他显式误差界。"
  },
  {
    id: "line-integrals-parametric", station: "line-integrals", number: "16",
    titleZh: "参数曲线上的标量线积分", titleEn: "Scalar line integrals along parameterised curves",
    source: "Definition 14.1; Examples 14.2–14.4 · Lecture Notes p.31–33; Non-examinable",
    theorem: {
      statementZh: "标量线积分是 f(γ(t)) 乘参数速度 |γ′(t)| 从参数区间的积分，并依赖曲线的定向参数化",
      statementEn: "A scalar line integral integrates f evaluated on the curve multiplied by the parameter speed, using the curve's oriented parameterisation.",
      hypotheses: ["曲线由连续可微参数化给出", "参数区间合法", "速度、方向和重复描迹都要记录", "本章非考试"],
      formula: "∫_C f ds = ∫ₐᵇ f(γ(t))|γ′(t)|dt",
      oneLineZh: "沿曲线的面积元是函数值乘参数速度。"
    },
    insight: "先看路径是否重复或反向，再代参数和速度。",
    numericProbe: { zh: "从 (0,0) 到 (1,2) 的线段，|γ′|=√5，常数 f=1 时线积分为 √5", en: "For the segment from (0,0) to (1,2), |γ′|=√5 and the line integral of f=1 is √5." },
    networkGoal: "把一维积分扩展到参数路径", networkRisk: "忘记乘速度或忽略重复参数化",
    animation: "line-integral", animationTitle: "路径速度与线积分元",
    symbols: [["γ(t)", "parameterisation", "曲线上的点", "t 在区间内变化"], ["|γ′(t)|", "speed", "参数速度", "不能漏乘"], ["ds", "path element", "长度微元", "|γ′|dt"], ["non-exam", "non-examinable", "了解概念，不参加考试", "标记清楚"]],
    explanationZh: ["线积分把普通区间积分沿一条曲线展开。参数 t 控制位置，速度 |γ′| 把参数变化转成曲线长度。", "不同参数化可能描迹同一曲线不同次数或不同方向；线积分必须连同参数区间和路径方向一起指定。"],
    qaSteps: [
      { kind: "definition", labelZh: "线积分定义", labelEn: "Line-integral definition", questionZh: "标量线积分的 ds 等于什么？", questionEn: "What is ds in a scalar line integral?", hint: "把参数变化换成曲线速度。", answerZh: "结论：ds=|γ′(t)|dt。线积分是 f(γ(t))|γ′(t)| 对参数 t 的普通积分。", formula: "ds=|γ′(t)|dt" },
      { kind: "computation", labelZh: "直线段", labelEn: "Straight segment", questionZh: "线段 (0,0)→(1,2) 的常数 1 线积分是多少？", questionEn: "What is the line integral of f=1 on the segment (0,0)→(1,2)?", hint: "参数速度就是线段长度的速率。", answerZh: "结论：参数化 γ(t)=(t,2t)，0≤t≤1，速度 √5，积分为 √(1²+2²)=√5。", formula: "∫C1ds=√5" },
      { kind: "boundary", labelZh: "重复描迹", labelEn: "Repeated trace", questionZh: "同一圆用 0≤t≤4π 参数化为什么得到两倍？", questionEn: "Why does parameterising the circle on 0≤t≤4π double the integral?", hint: "路径被描了两次。", answerZh: "结论：线积分按参数化的运动累加；圆被走两圈，常数 1 的线积分为 4π 而不是 2π。", formula: "0≤t≤4π" },
      { kind: "boundary", labelZh: "非考试标记", labelEn: "Non-exam label", questionZh: "为什么本章仍提供定义而不展开一般证明？", questionEn: "Why give definitions without full proofs for this non-exam chapter?", hint: "讲义明确标记为熟悉性介绍。", answerZh: "结论：用于了解参数曲线积分的结构和后续课程接口；不要求把本章定理完整证明当作考试内容。", formula: "Non-examinable" }
    ],
    counterexample: { wrong: "参数化同一个圆，所以 0≤t≤2π 与 0≤t≤4π 的线积分必然相同。", correct: "第二组参数把路径走了两遍，线积分也重复累加。", why: "线积分依赖参数化轨迹及重数。" },
    retellZh: "线积分是沿参数曲线的 f 乘参数速度的普通积分，轨迹与方向必须说明。", retellEn: "A scalar line integral integrates f along a parameterised curve, weighted by speed and interpreted with its traced direction and multiplicity.",
    check: "ds 的公式是什么？", answer: "ds=|γ′(t)|dt。"
  }
];
