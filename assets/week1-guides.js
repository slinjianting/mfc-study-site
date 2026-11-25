window.MFC_WEEK1_GUIDES = {
  "set-operations": {
    animation: "set-operations",
    animationTitle: "两个集合怎样合并、取共同部分或删除",
    networkGoal: "分清元素、子集与集合运算",
    networkRisk: "把 ∈ 和 ⊆ 混用",
    symbols: [
      ["∈", "belongs to", "某个对象属于一个集合", "1 ∈ {1, 2}"],
      ["⊆", "is a subset of", "左边集合的每个元素都在右边集合里", "{1} ⊆ {1, 2}"],
      ["∪", "union", "至少属于一个集合", "A ∪ B"],
      ["∩", "intersection", "同时属于两个集合", "A ∩ B"],
      ["∖", "set difference", "属于左边但不属于右边", "A ∖ B"]
    ],
    qaSteps: [
      {
        questionZh: "先不看符号：把两个盒子里的东西合并、找共同物品、或只保留左边独有物品，分别是什么意思？",
        questionEn: "What do union, intersection and difference mean without symbols?",
        hint: "想象桌上有两个装卡片的盒子。",
        answerZh: "并集是“把两个盒子的卡片都拿出来放在一起”；交集是“只保留两个盒子都有的卡片”；差集是“从左边盒子里拿走右边也有的卡片，只留下左边独有部分”。",
        formula: "并集取“至少一个”，交集取“同时两个”，差集取“左边有、右边没有”。"
      },
      {
        questionZh: "这些符号分别在比较什么？为什么不能把 1 ∈ A 改写成 1 ⊆ A？",
        questionEn: "What does each symbol compare?",
        hint: "先问括号左边到底是“对象”还是“集合”。",
        answerZh: "∈ 左边是一个元素，右边是一个集合，所以 1 ∈ {1, 2} 说的是“数字 1 在集合里”。⊆ 两边都是集合，所以 {1} ⊆ {1, 2} 说的是“第一个集合被第二个包含”。单个数与一个集合的包含关系不是通常的子集写法。",
        formula: "元素与集合用 ∈；集合与集合用 ⊆。"
      },
      {
        questionZh: "拿 A = {1, 2, 3}、B = {2, 4} 走一遍，并、交、差分别得到什么？",
        questionEn: "Apply the three operations to a concrete example.",
        hint: "先不看顺序，把共同出现的 2 单独圈出来。",
        answerZh: "A ∪ B 收集所有出现过的数，得到 {1, 2, 3, 4}；A ∩ B 只留下同时出现的数，得到 {2}；A ∖ B 从 A 中删去 2，得到 {1, 3}。集合不关心排列顺序，所以 {4, 3, 2, 1} 也是同一个并集。",
        formula: "A ∪ B = {1, 2, 3, 4}；A ∩ B = {2}；A ∖ B = {1, 3}。"
      },
      {
        questionZh: "如果两个集合共用端点，差集的端点会怎样变化？为什么只凭肉眼很容易错？",
        questionEn: "Why do endpoint rules matter for interval operations?",
        hint: "把“属于”与否逐个端点判断。",
        answerZh: "运算最终是在判断每个点是否满足条件，所以端点是否属于集合必须单独检查。例如从 [0, 2] 删去 (2, 4] 时，2 根本没有出现在右边，因此 2 会留在差集里。只画粗线容易把开放端点和闭端点看混。",
        formula: "先判断点的归属，再画结果；颜色只是辅助。"
      },
      {
        questionZh: "用自己的话解释：为什么证明两个集合相等要证明两个方向？",
        questionEn: "Why must equality of sets be proved in both directions?",
        hint: "“左边包含在右边”只排除了一个方向的遗漏。",
        answerZh: "证明 A ⊆ B 只说明 A 中没有 B 外的元素；仍可能 B 中多出 A 没有的元素。再证明 B ⊆ A，才能排除反方向遗漏。两个包含都成立，才说明两边元素完全相同。",
        formula: "A = B ⇔ A ⊆ B 且 B ⊆ A。"
      }
    ],
    counterexample: {
      wrong: "看到 1 出现在 {1, 2} 中，就写 1 ⊆ {1, 2}。",
      correct: "正确写法是 1 ∈ {1, 2}；{1} ⊆ {1, 2} 才是集合包含。",
      why: "∈ 比较对象和容器，⊆ 比较两个容器。"
    },
    retellZh: "集合运算就是按“至少一个、同时两个、只要左边独有”三种规则筛选对象。",
    retellEn: "Set operations filter objects by union, intersection or difference conditions."
  },
  "number-intervals": {
    animation: "number-intervals",
    animationTitle: "端点在数轴上一开一合",
    networkGoal: "把不等式直接翻译成数轴区间",
    networkRisk: "把 ∞ 配上方括号",
    symbols: [
      ["(a, b)", "open interval", "两个端点都不取", "a < x < b"],
      ["[a, b]", "closed interval", "两个端点都取", "a ≤ x ≤ b"],
      ["[a, b)", "half-open", "左端取、右端不取", "a ≤ x < b"],
      ["∞", "infinity", "表示无限延伸的方向", "永远是开放端"]
    ],
    qaSteps: [
      {
        questionZh: "先不看区间符号：怎样用一条连续的数轴描述“从某个数到另一个数之间的一段”？",
        questionEn: "What is an interval on the number line?",
        hint: "像在道路上画出一段，但要说明两个路口算不算在路段里。",
        answerZh: "区间就是数轴上的一段。确定一段需要知道起点和终点；如果端点是有限实数，还要决定这个端点到底算不算在路段里。",
        formula: "区间 = 位置范围 + 端点归属。"
      },
      {
        questionZh: "圆括号和方括号分别对端点做了什么？−2 < x ≤ 3 应该怎样写？",
        questionEn: "What do round and square brackets do?",
        hint: "看不等号有没有等号。",
        answerZh: "圆括号排除端点，方括号包含端点。−2 < x 的左端没有等号，所以写圆括号；x ≤ 3 的右端有等号，所以写方括号，结果是 (−2, 3]。",
        formula: "−2 < x ≤ 3 ⇔ x ∈ (−2, 3]。"
      },
      {
        questionZh: "求 (1, 4] 与 [3, 6) 的交集时，为什么结果是闭区间 [3, 4]？",
        questionEn: "Why is the intersection [3, 4] closed at both ends?",
        hint: "同时满足两个区间条件的点才留下。",
        answerZh: "右区间从 3 开始且包含 3，所以 3 被保留；左区间到 4 为止且包含 4，所以 4 被保留。两边共同覆盖的范围是 3 到 4，两个端点都在，因此是 [3, 4]。",
        formula: "(1, 4] ∩ [3, 6) = [3, 4]。"
      },
      {
        questionZh: "为什么可以写 [a, ∞)，却绝不能写 [a, ∞]？",
        questionEn: "Why can infinity never be a closed endpoint?",
        hint: "∞ 是一个可达到的数值吗？",
        answerZh: "∞ 只表示一直向右延伸，不是某个能取到的实数，因此不存在“把右端点包含进来”这回事。无限端点永远使用圆括号，与左端是否包含无关。",
        formula: "∞ 与 −∞ 永远不是实数端点。"
      },
      {
        questionZh: "如果同学只看不等号却漏看端点，你会怎样提醒他检查？",
        questionEn: "How would you check endpoint inclusion systematically?",
        hint: "为每个端点问一次“等号成立吗”。",
        answerZh: "针对每个端点分别看 ≤ 或 ≥ 是否允许等号：允许就用方括号，不允许就用圆括号；遇到 ∞ 直接确定为圆括号。这样不会把整段区间笼统地判成开或闭。",
        formula: "一次只判断一个端点。"
      }
    ],
    counterexample: {
      wrong: "把 −2 < x ≤ 3 写成 (−2, 3)。",
      correct: "应写成 (−2, 3]，因为 3 满足 x ≤ 3。",
      why: "右边不等号包含等号，右端点必须保留。"
    },
    retellZh: "区间就是把不等式画在数轴上，圆括号排除、方括号包含，无穷永远不包含。",
    retellEn: "An interval encodes a range and explicitly records endpoint inclusion."
  },
  "bounds-supremum": {
    animation: "bounds-supremum",
    animationTitle: "候选上界逐条下降",
    networkGoal: "分清上界、上确界和最大值",
    networkRisk: "把 sup 当成集合里的点",
    symbols: [
      ["M", "upper bound", "从上方压住整个集合的数", "所有 x ≤ M"],
      ["sup A", "supremum", "所有上界中最小的一个", "最小上界"],
      ["max A", "maximum", "属于集合的最大元素", "sup A 且 sup A ∈ A"]
    ],
    qaSteps: [
      {
        questionZh: "先不用定义：如果一条水平线要永远压在一群点上面，这条线需要满足什么？",
        questionEn: "What does it mean for a horizontal line to stay above a set?",
        hint: "集合里不能有点跑到线上方。",
        answerZh: "只要集合里的每一个点都在线的下方或线上，这条线对应的数就是上界。上界是一条限制线，不要求线本身落在集合里。",
        formula: "M 是上界 ⇔ 对每个 x ∈ A，都有 x ≤ M。"
      },
      {
        questionZh: "上界和上确界差在哪里？上确界和最大值又差在哪里？",
        questionEn: "How are bounds, suprema and maxima different?",
        hint: "先问“是不是界的极值”，再问“是不是集合成员”。",
        answerZh: "上界可以有很多，所有上界里最小的那个叫上确界。上确界仍然是“界”，可以站在集合外；最大值要求一个上界同时属于集合。所以 sup A ∈ A 时，它才是 max A。",
        formula: "max A = sup A 且 sup A ∈ A。"
      },
      {
        questionZh: "对 (0, 1)，为什么 sup 是 1，最大值却不存在？",
        questionEn: "Why does (0, 1) have a supremum but no maximum?",
        hint: "检查 1 是否属于 (0, 1)。",
        answerZh: "所有点都小于 1，而且任何小于 1 的数上方都还有点，所以 1 是最小上界。可是 1 不属于 (0, 1)，不能成为最大值。而且任取 x ∈ (0, 1)，(x + 1)/2 仍在集合里并比 x 大，因此也找不到集合内的最大点。",
        formula: "sup (0, 1) = 1；max (0, 1) 不存在。"
      },
      {
        questionZh: "如果集合改成 [0, 1]，情况哪里变了？只是多出来的两个点影响了什么？",
        questionEn: "What changes when open endpoints are included?",
        hint: "上确界数值变了吗？端点是否成为成员？",
        answerZh: "上确界仍然是 1，因为最小的上界没有变化；但 1 现在属于集合，所以它同时成为最大值。0 也进入集合并成为最小值。端点归属改变了“有没有最值”，没有改变 sup 与 inf 的位置。",
        formula: "sup [0, 1] = max [0, 1] = 1。"
      },
      {
        questionZh: "用一句话说：为什么“最小的上界”不一定是集合里的元素？",
        questionEn: "Why need the least upper bound not belong to the set?",
        hint: "界本来就可以站在集合外。",
        answerZh: "很多上界都可能在集合外，唯一要求只是它们压住集合。最小的那条上界也可能恰好位于开区间的空端点上，所以它不必属于集合。",
        formula: "上界和成员是两个独立问题。"
      }
    ],
    counterexample: {
      wrong: "sup (0, 1) = 1，所以 max (0, 1) = 1。",
      correct: "sup (0, 1) = 1，但 1 不属于集合，所以没有最大值。",
      why: "上确界可以不在集合里，最大值必须在集合里。"
    },
    retellZh: "上界负责压住集合，上确界是最紧的上界，最大值还必须是集合里的成员。",
    retellEn: "A supremum is the least upper bound; a maximum must also belong to the set."
  },
  "absolute-triangle": {
    animation: "absolute-triangle",
    animationTitle: "直达路径与绕行路径",
    networkGoal: "把绝对值读成距离并拆分误差",
    networkRisk: "把三角不等式写成等号",
    symbols: [
      ["abs(x − a)", "distance", "x 到 a 的距离", "abs(5 − 2) = 3"],
      ["< r", "within r", "距离严格小于 r", "开区间"],
      ["≤", "at most", "包含边界的距离限制", "闭区间"],
      ["abs(x + y) ≤ abs(x) + abs(y)", "triangle inequality", "直接走不长于绕路", "拆分误差"]
    ],
    qaSteps: [
      {
        questionZh: "先不用绝对值符号：怎样描述“某个点离指定点不超过一段距离”？",
        questionEn: "How would you describe closeness without absolute value?",
        hint: "在地图上，围绕中心画一个范围。",
        answerZh: "可以把它想成数轴上的距离。点 x 到中心 a 的范围不超过 r，就是 x 落在 a 左右两边各 r 的范围里。",
        formula: "到 a 的距离小于 r：a 左右各展开 r。"
      },
      {
        questionZh: "|x − a| < r 为什么等价于 a − r < x < a + r？",
        questionEn: "Why does the absolute-value inequality become an interval?",
        hint: "距离小于 r，意味着 x 可以在 a 左边，也可以在右边。",
        answerZh: "绝对值比较的是距离。x 与 a 的差在 −r 和 r 之间时，距离才小于 r；把 −r < x − a < r 三边都加 a，就得到 a − r < x < a + r。",
        formula: "abs(x − a) < r ⇔ a − r < x < a + r。"
      },
      {
        questionZh: "解 |x − 2| < 3 时，为什么答案从中心 2 向左右各扩展 3？",
        questionEn: "Why does the centre 2 expand by 3 in each direction?",
        hint: "先找最左点和最右点。",
        answerZh: "左边可以到 2 − 3 = −1，但严格大于；右边可以到 2 + 3 = 5，也严格小于。因此解集是 (−1, 5)。",
        formula: "|x − 2| < 3 ⇔ −1 < x < 5。"
      },
      {
        questionZh: "为什么 |1 + (−1)| 等于 0，而 |1| + |−1| 等于 2？这说明三角不等式通常是什么号？",
        questionEn: "Why is equality not the usual case?",
        hint: "两个方向相反的数相加会互相抵消。",
        answerZh: "1 和 −1 相加抵消为 0，但分别取绝对值再相加不会抵消。因此三角不等式通常给上界，写作 ≤；只有在特定同向情形才可能取等号。",
        formula: "一般写 abs(x + y) ≤ abs(x) + abs(y)。"
      },
      {
        questionZh: "如果别人把“两个误差相加”写成等号，你会怎样解释错在哪里？",
        questionEn: "How would you explain the error in replacing ≤ by =?",
        hint: "举一个最小的反例。",
        answerZh: "用 x = 1、y = −1 即可：两边分别得到 0 和 2。我们只需要知道总量不超过各段之和，这个不等式已经足够控制误差；等号不是一般事实。",
        formula: "用反例检查等号：abs(1 − 1) = 0。"
      }
    ],
    counterexample: {
      wrong: "abs(1 + (−1)) = abs(1) + abs(−1)，所以三角不等式总能取等号。",
      correct: "0 ≤ 2，所以只能得到 ≤；例子恰好显示不等号。",
      why: "正负号相反时，相加会抵消，误差不会按绝对值直接叠加。"
    },
    retellZh: "绝对值是距离，三角不等式说直达不大于绕行，因此通常只能拆出一个上界。",
    retellEn: "Absolute value is distance, and the triangle inequality bounds a direct path by the sum of two legs."
  },
  "functions-images": {
    animation: "functions-images",
    animationTitle: "箭头从输入流向输出，再反向查找",
    networkGoal: "分清陪域、像和原像",
    networkRisk: "看到 f⁻¹(F) 就以为 f 有逆函数",
    symbols: [
      ["f : A → B", "function from A to B", "A 中每个输入只给一个 B 中输出", "domain A, codomain B"],
      ["f(E)", "image", "E 中所有输入实际到达的输出", "{f(x) : x ∈ E}"],
      ["f⁻¹(F)", "preimage", "所有落到 F 里的输入", "{x : f(x) ∈ F}"]
    ],
    qaSteps: [
      {
        questionZh: "把函数想成自动售货机：为什么只说“按钮规则”还不够，还要说明有哪些按钮、会掉出哪些商品？",
        questionEn: "Why does a function need more than a formula?",
        hint: "定义域决定可输入什么，陪域决定输出放在哪类集合里。",
        answerZh: "同一个规则在不同输入集合上可能是不同函数。定义域说明哪些输入允许使用，陪域声明输出所在的大集合，规则说明每个输入具体得到什么输出。",
        formula: "函数 = 定义域 + 陪域 + 规则。"
      },
      {
        questionZh: "“像”和“陪域”看起来都在说输出，为什么它们不是同一件事？",
        questionEn: "Why can the image differ from the codomain?",
        hint: "陪域是允许输出所在的大盒子，像实际跑出来的全部商品。",
        answerZh: "陪域只是事先声明的输出范围，不保证每个元素都被用到；像 f(A) 是实际被某些输入产生的输出集合。所以像总是陪域的子集，但可能小很多。",
        formula: "f(A) ⊆ B，且不一定相等。"
      },
      {
        questionZh: "对 x²，输入 [−2, 1] 的所有输出为什么是 [0, 4]，而不是 [4, 1]？",
        questionEn: "Why is the image [0, 4]?",
        hint: "平方会把负数变成正数，先找最小和最大输出。",
        answerZh: "输入中 0 会输出 0，最小的平方是 0；−2 输出 4，1 输出 1，所以最大输出是 4。平方在这一段内不会产生负数，因此像是 [0, 4]。",
        formula: "f([−2, 1]) = [0, 4]。"
      },
      {
        questionZh: "为什么 f : R → R，f(x) = x² 没有全局逆函数，但仍然可以有原像 f⁻¹([0, 4])？",
        questionEn: "Why can a preimage exist without an inverse function?",
        hint: "原像只需要找出所有符合条件的输入，不要求唯一。",
        answerZh: "原像把输出条件翻译成输入条件。满足 0 ≤ x² ≤ 4 的输入是 [−2, 2]，其中每个非零正输出通常有两个输入。逆函数要求唯一反推，需求更强，因此这里不存在。",
        formula: "f⁻¹([0, 4]) = [−2, 2]，但 f 无全局逆。"
      },
      {
        questionZh: "如果必须向完全没学过的人区分“像”和“原像”，你会用哪两个问题？",
        questionEn: "Which two questions distinguish image from preimage?",
        hint: "一个从前向后看，一个从后向前看。",
        answerZh: "看像时问“这些输入会去哪些输出”；看原像时问“哪些输入会进入这个输出范围”。前者从前向后收集输出，后者从目标范围向前查找输入。",
        formula: "像：输入 → 输出；原像：输出条件 → 输入。"
      }
    ],
    counterexample: {
      wrong: "因为 f(x) = x² 不是单射，所以说 f⁻¹([0, 4]) 没有意义。",
      correct: "它不是逆函数，但原像仍是好定义的集合，等于 [−2, 2]。",
      why: "原像允许多个输入对应同一个输出；逆函数才要求唯一。"
    },
    retellZh: "函数是带定义域和陪域的规则；像向前收集输出，原像向后寻找输入。",
    retellEn: "An image collects outputs of inputs; a preimage collects all inputs landing in a chosen output set."
  },
  "composition-domain": {
    animation: "composition-domain",
    animationTitle: "两台函数机器与定义域闸门",
    networkGoal: "按从内到外的顺序检查复合函数",
    networkRisk: "漏掉任一层的定义域限制",
    symbols: [
      ["g ∘ f", "g after f", "先 f，再 g", "(g ∘ f)(x) = g(f(x))"],
      ["domain", "定义域", "允许输入的集合", "所有限制同时成立"],
      ["√u", "square root", "要求 u ≥ 0", "偶数根号"],
      ["log x", "logarithm", "要求 x > 0", "对数真数"]
    ],
    qaSteps: [
      {
        questionZh: "先不看公式：两台加工机器首尾相连时，第一台做出的零件必须满足第二台什么要求？",
        questionEn: "What must the first machine produce for the second machine?",
        hint: "第二台机器只能接受它定义域里的输入。",
        answerZh: "第一台的输出会变成第二台的输入，所以它必须落在第二台能接受的范围内。否则第一台虽然能工作，整个连接过程仍会在第二台入口失败。",
        formula: "f 的输出必须属于 g 的定义域。"
      },
      {
        questionZh: "g ∘ f 中为什么先算 f，后算 g？两个字母的位置容易怎样看反？",
        questionEn: "Which function acts first in g ∘ f?",
        hint: "把 (g ∘ f)(x) 展开成 g(f(x))。",
        answerZh: "离 x 最近的 f 先计算，得到 f(x)；随后把整块结果交给 g。所以顺序是先内后外，与文字阅读方向相反。",
        formula: "(g ∘ f)(x) = g(f(x))。"
      },
      {
        questionZh: "若 f(u) = √u，g(x) = x − 1，求 f ∘ g 的定义域时应该先检查什么？",
        questionEn: "How do you find the domain of a composition?",
        hint: "先构造复合式，再看最内层和最外层的条件。",
        answerZh: "先得到 (f ∘ g)(x) = √(x − 1)。外层的根号要求内部 x − 1 非负，所以 x ≥ 1。定义域是 [1, ∞)。",
        formula: "x − 1 ≥ 0 ⇔ x ≥ 1。"
      },
      {
        questionZh: "为什么 h(x) = √(x − 1)/(x − 2) 在 x = 2 没有定义，即使附近的值看起来都算得出来？",
        questionEn: "Why is x = 2 excluded?",
        hint: "代入分母会发生什么？",
        answerZh: "x = 2 时分母变成 0，原式是除以零，根本无法得到函数值。即使从附近靠近时数值可以计算，也不能把这个缺失点自动塞回定义域。",
        formula: "x ≥ 1 且 x ≠ 2，所以定义域是 [1, ∞) ∖ {2}。"
      },
      {
        questionZh: "如果表达式可以约分，为什么还不能直接用约分后的定义域？",
        questionEn: "Why does cancellation not restore the original domain?",
        hint: "原表达式在缺失点的分母是多少？",
        answerZh: "约分只在原来分母非零的点上成立。约分后的式子可能在那里有值，但原式仍然经历了除以零，不能因为换了相等写法就补上原定义域缺失的点。",
        formula: "需要同时检查原式与化简式。"
      }
    ],
    counterexample: {
      wrong: "把 (x² − 1)/(x − 1) 约成 x + 1 后，直接把定义域写成 R。",
      correct: "化简后虽为 x + 1，原函数仍在 x = 1 无定义，定义域是 R ∖ {1}。",
      why: "约分不会恢复原表达式中的 0/0 点。"
    },
    retellZh: "复合函数先内后外，定义域必须让每一层机器都愿意接收输入。",
    retellEn: "Compose from the inside out and intersect every domain restriction."
  },
  "function-properties": {
    animation: "function-properties",
    animationTitle: "箭头碰撞、遗漏与一一对应",
    networkGoal: "用箭头判断单射、满射和双射",
    networkRisk: "只看公式不看定义域和陪域",
    symbols: [
      ["injective", "单射", "不同输入不撞同一输出", "f(x₁)=f(x₂) ⇒ x₁=x₂"],
      ["surjective", "满射", "陪域每个元素都被取到", "f(A)=B"],
      ["bijective", "双射", "同时单射和满射", "存在逆函数"],
      ["f⁻¹", "inverse", "把输出唯一送回输入", "不是倒数"]
    ],
    qaSteps: [
      {
        questionZh: "把函数想成从左边一排人向右边座位射箭：什么叫“不撞”，什么叫“没有空座”？",
        questionEn: "What do no collisions and no empty seats represent?",
        hint: "一个描述左边，一个描述右边是否覆盖。",
        answerZh: "不同的人射到同一个座位叫碰撞，排除碰撞就是单射；右边每个座位都至少被射中一次叫覆盖完整，就是满射。两个同时成立就是双射。",
        formula: "单射看输入是否唯一，满射看输出是否覆盖。"
      },
      {
        questionZh: "为什么单射和满射不能互相推出？",
        questionEn: "Why are injectivity and surjectivity independent?",
        hint: "可以没有碰撞但有空座，也可以没有空座但发生碰撞。",
        answerZh: "单射只禁止两个输入共享一个输出，不保证覆盖整个陪域；满射只保证覆盖，不禁止多个输入撞到同一个输出。方向不同，所以不能互相推出。",
        formula: "双射 = 单射 + 满射。"
      },
      {
        questionZh: "x ↦ x² 从 R 到 R、从 R 到 [0, ∞)、从 [0, ∞) 到 [0, ∞)，性质为什么不同？",
        questionEn: "How do domain and codomain change the properties of x²?",
        hint: "先检查 1 与 −1，再检查输出能否覆盖陪域。",
        answerZh: "R → R 中，1 和 −1 都输出 1，所以不单射；负输出没有原像，所以不满射。R → [0, ∞) 仍然不单射，但已满射。[0, ∞) → [0, ∞) 中负输入被排除且非负数都取到，所以是双射。",
        formula: "[0, ∞) → [0, ∞), x² 的逆是 √y。"
      },
      {
        questionZh: "为什么“有逆函数”和“一个公式能反解”不是一回事？",
        questionEn: "Why is invertibility about the whole function?",
        hint: "反解出来的输入是否唯一？是否覆盖所有输出？",
        answerZh: "逆函数必须能把陪域里的每个输出唯一送回定义域。若两个输入给同一输出，反解不唯一；若有陪域输出取不到，反解根本不存在。只有双射同时解决这两个问题。",
        formula: "逆函数存在 ⇔ f 是双射。"
      },
      {
        questionZh: "如果同一规则 x² 在两套定义域和陪域下性质不同，那么“函数”到底由什么组成？",
        questionEn: "What data fully specifies a function?",
        hint: "公式之外还有两个集合。",
        answerZh: "函数必须同时包含定义域、陪域和规则。只写 x² 不足以确定是在哪个集合之间工作，因此也不足以判断单射、满射或逆函数是否存在。",
        formula: "同一规则 + 不同集合 = 不同函数。"
      }
    ],
    counterexample: {
      wrong: "因为 f(1) = f(−1)，所以 x² 没有逆函数。",
      correct: "R → R 下确实不单射，因此无逆；但 [0, ∞) → [0, ∞) 是双射，有逆函数 √y。",
      why: "单射、满射和逆函数必须相对于完整定义域和陪域讨论。"
    },
    retellZh: "单射禁止碰撞，满射要求覆盖，双射同时满足，逆函数才能存在。",
    retellEn: "Injectivity prevents collisions, surjectivity covers the codomain, and bijectivity permits an inverse."
  },
  "elementary-functions": {
    animation: "elementary-functions",
    animationTitle: "输入依次通过分母、根号和对数闸门",
    networkGoal: "从公式中逐项找出定义域限制",
    networkRisk: "先约分再看定义域",
    symbols: [
      ["P(x)/Q(x)", "rational function", "分母不能为 0", "Q(x) ≠ 0"],
      ["√u", "even root", "被开方数不能为负", "u ≥ 0"],
      ["log x", "logarithm", "真数必须为正", "x > 0"],
      ["tan x", "tangent", "cos x 不能为 0", "分母限制"]
    ],
    qaSteps: [
      {
        questionZh: "看到一个复杂公式时，最先应该找哪几种“会让表达式失效的动作”？",
        questionEn: "Which operations can make an expression undefined?",
        hint: "想一想除法、根号和对数。",
        answerZh: "先找分母有没有可能为零，再找偶次根号内部是否可能为负，最后找对数真数是否可能不为正。三角函数的分母也要单独排除零点。",
        formula: "除法、根号、对数、三角分母是常见限制来源。"
      },
      {
        questionZh: "分母、根号和对数的条件分别是什么？为什么要取交集？",
        questionEn: "What are the restrictions, and why intersect them?",
        hint: "每一层操作都必须愿意接收这个输入。",
        answerZh: "分母要求 Q(x) ≠ 0，偶次根号要求 u ≥ 0，对数要求 x > 0。一个复合表达式要成立，所有条件必须同时成立，所以是求交集。",
        formula: "定义域 = 分母条件 ∩ 根号条件 ∩ 对数条件。"
      },
      {
        questionZh: "求 h(x) = √(x − 1)/(x − 2) 的定义域时，怎样一步步找限制？",
        questionEn: "Find the natural domain step by step.",
        hint: "根号和分母各自给出一个条件。",
        answerZh: "根号要求 x − 1 ≥ 0，得到 x ≥ 1；分母要求 x − 2 ≠ 0，得到 x ≠ 2。两者同时成立得到 [1, ∞) ∖ {2}。",
        formula: "[1, ∞) ∩ (R ∖ {2})。"
      },
      {
        questionZh: "√x 与 log x 为什么一个允许 0，另一个不允许？",
        questionEn: "Why do root and logarithm treat zero differently?",
        hint: "在 0 处，两个操作分别有没有定义？",
        answerZh: "√0 = 0 是实数，所以根号允许 0；log 0 没有有限实数值，所以对数要求真数严格大于 0。两个看似相似的“非负条件”端点不同。",
        formula: "√x：x ≥ 0；log x：x > 0。"
      },
      {
        questionZh: "如果你先化简公式再求定义域，最可能漏掉什么？",
        questionEn: "What may be lost by simplifying before finding the domain?",
        hint: "约分能不能恢复原来消失的分母？",
        answerZh: "可能漏掉原分母为零而被删除的点。化简式可能在这些点有值，但原表达式在那些点没有定义，所以自然定义域仍要依据原式。",
        formula: "先确定原式定义域，再讨论化简。"
      }
    ],
    counterexample: {
      wrong: "把 √(x − 1)/(x − 2) 的定义域写成 [1, ∞)。",
      correct: "还必须排除 x = 2，所以是 [1, ∞) ∖ {2}。",
      why: "根号条件没有包含分母非零条件。"
    },
    retellZh: "自然定义域就是把分母、根号、对数等所有限制同时满足的输入集合。",
    retellEn: "A natural domain is the intersection of every restriction imposed by the expression."
  },
  countability: {
    animation: "countability",
    animationTitle: "把整数一个个分配给自然数编号",
    networkGoal: "理解可数无限与不可数的差别",
    networkRisk: "把“无限”直接等同于“不可数”",
    symbols: [
      ["N", "natural numbers", "用于编号的自然数集合", "0, 1, 2, ..."],
      ["bijection", "双射", "一一对应且无遗漏", "可数无限的定义"],
      ["countable", "可数", "有限或可数无限", "可列出"],
      ["uncountable", "不可数", "不能与 N 建立双射", "R"]
    ],
    qaSteps: [
      {
        questionZh: "“可数”在日常生活中是数得完，这里为什么连无限集也能可数？",
        questionEn: "Why can an infinite set be countable?",
        hint: "重点不是数完，而是有没有一套编号规则。",
        answerZh: "这里“可数”表示能用自然数逐个编号，并保证每个元素最终都有一个编号、没有遗漏和重复。即使编号永远继续，只要规则能覆盖全部元素，就叫可数无限。",
        formula: "A 可数无限 ⇔ 存在双射 N → A。"
      },
      {
        questionZh: "整数向正负两边无限延伸，为什么还能被自然数编号？",
        questionEn: "How can integers be listed by natural numbers?",
        hint: "正负数可以交替出场。",
        answerZh: "可以按 0, 1, −1, 2, −2, 3, −3, ... 排列。每一个整数都会在某个有限位置出现，不会永久被跳过，因此每个整数都能分到唯一编号。",
        formula: "0, 1, −1, 2, −2, ..."
      },
      {
        questionZh: "有理数的分数表示会重复，比如 1/2 = 2/4。重复为何不阻止可数？",
        questionEn: "Why do repeated fractions not break countability?",
        hint: "列出时可以跳过已经见过的值。",
        answerZh: "先用网格把分子和分母组合起来，再沿对角线扫描。如果遇到 1/2 的另一个表示，只保留第一次出现的值并跳过重复。重复项可以删除，仍能得到每个有理数的唯一位置。",
        formula: "网格扫描 + 跳过重复 = 有理数枚举。"
      },
      {
        questionZh: "为什么 R 不像 Q 一样可数？区别到底发生在哪里？",
        questionEn: "Why is R uncountable?",
        hint: "假设所有实数真的能排成一个完整列表，会发生什么？",
        answerZh: "若假设 (0, 1) 中所有实数都能被列出，可以逐位构造一个新数，使它和列表第 n 个数的第 n 位都不同。这个新数仍在 (0, 1)，却没有出现在列表里，因此列表不可能完整。",
        formula: "Cantor 对角线构造阻断完整枚举。"
      },
      {
        questionZh: "用一句话回答：为什么“无限”和“不可数”不是同义词？",
        questionEn: "Why are infinity and uncountability not synonyms?",
        hint: "Z 和 R 都是无限，编号能力相同吗？",
        answerZh: "无限只说明集合没有有限个元素；不可数说明它连自然数编号都做不完。Z、Q 无限但可数，R 无限且不可数，所以两个概念不能混同。",
        formula: "countable infinite 与 uncountable 是不同层级。"
      }
    ],
    counterexample: {
      wrong: "整数向两个方向无限，所以整数不可数。",
      correct: "整数可以交替编号为 0, 1, −1, 2, −2, ...，所以可数无限。",
      why: "可数看的是能否完整编号，不是直观上是否能“数完”。"
    },
    retellZh: "可数无限就是能用自然数无遗漏地编号；R 不能这样编号，所以不可数。",
    retellEn: "Countable infinite means a complete natural-number enumeration exists; the reals admit no such list."
  },
  "sequence-epsilon-n": {
    animation: "sequence-epsilon-n",
    animationTitle: "误差带收紧，数列尾部仍在带内",
    networkGoal: "读懂 epsilon-N 中“最终所有项”",
    networkRisk: "只看无限多个好项",
    symbols: [
      ["aₙ", "nth term", "数列第 n 个数", "n 是指标"],
      ["ε", "epsilon", "允许的最大输出误差", "ε > 0"],
      ["N", "threshold", "某个起始下标", "可以依赖 ε"],
      ["∀", "for all", "所有相关对象", "所有 n ≥ N"],
      ["abs(aₙ − L)", "error", "当前项与极限的距离", "要小于 ε"]
    ],
    qaSteps: [
      {
        questionZh: "先不看 epsilon：说一个数列“最终都靠近某个数”，为什么不能允许好项和远离项永远交替出现？",
        questionEn: "What does eventual closeness mean?",
        hint: "“最终”强调从某个位置以后整段都稳定。",
        answerZh: "如果好项和坏项永远交替，数列从未真正稳定下来。最终靠近意味着存在一个起点，从它以后不再出现离开误差带的项；前面有限多项可以例外。",
        formula: "重点在整条尾部，不是零散的好项。"
      },
      {
        questionZh: "epsilon、N 和 aₙ 分别扮演什么角色？为什么 N 可以依赖 epsilon？",
        questionEn: "What roles do epsilon, N and a-n play?",
        hint: "容差越小，通常越需要等待更久。",
        answerZh: "epsilon 是要求的误差上限；aₙ 是数列的项；N 是开始检查的起始位置。容差变严格时，需要把 N 往后推，所以 N 可以依赖 epsilon，但选定后必须对所有 n ≥ N 生效。",
        formula: "∀ε > 0，∃N，∀n ≥ N：abs(aₙ − L) < ε。"
      },
      {
        questionZh: "证明 1/n → 0 时，给定 ε 后怎样找到 N？",
        questionEn: "How do you choose N for 1/n → 0?",
        hint: "先要求 1/n 小于 epsilon，再反解 n。",
        answerZh: "要让 1/n < ε，就要求 n > 1/ε。因此取一个大于 1/ε 的整数 N；当 n ≥ N 时，1/n ≤ 1/N < ε，误差要求成立。",
        formula: "取 N > 1/ε。"
      },
      {
        questionZh: "(−1)ⁿ 有无限多个偶数是 1，也有无限多个奇数项；为什么它仍不收敛？",
        questionEn: "Why does the alternating sequence still diverge?",
        hint: "取一个很小的误差带，尾部会不会一直包含两类值？",
        answerZh: "取 ε = 1/2 时，收敛要求足够大的所有项都进入同一个 L 的 1/2 邻域。但尾部仍不断出现 1 和 −1，两者距离为 2，不可能被同一个很小的邻域同时包住。",
        formula: "有界振荡不满足最终整条尾部靠近。"
      },
      {
        questionZh: "如果有人说“有无限多项满足误差”，你会追问哪一个量词？",
        questionEn: "Which quantifier would you check?",
        hint: "看它说的是“存在无限多个 n”还是“存在 N 后所有 n”。",
        answerZh: "要追问是否找到了 N，使所有 n ≥ N 都满足误差。无限多个可能仍然分散在整条数列中，不能推出从某个位置以后全部成立。",
        formula: "∀n ≥ N 是收敛与“经常靠近”的分界线。"
      }
    ],
    counterexample: {
      wrong: "0, 1, 0, 1, ... 有无限多个 0，所以它趋于 0。",
      correct: "后面的 1 会反复离开容差带，因此不收敛。",
      why: "存在无限多个好项，不等于存在一个门槛让所有后来的项都好。"
    },
    retellZh: "epsilon-N 说的是：无论误差要求多严格，从某个下标以后所有项都能一直满足。",
    retellEn: "For every tolerance, the entire tail eventually lies within that tolerance."
  },
  "sequence-laws": {
    animation: "sequence-laws",
    animationTitle: "上下两条边界把振荡项夹向同一极限",
    networkGoal: "从已知极限计算复杂数列",
    networkRisk: "把有界误当成收敛",
    symbols: [
      ["aₙ → a", "converges to a", "数列靠近 a", "极限"],
      ["bounded", "有界", "整条数列不无限变大", "被某个 M 压住"],
      ["≤ eventually", "最终不大于", "从某下标开始成立", "保序"],
      ["Squeeze", "夹逼", "上下界同极限", "中间也同极限"]
    ],
    qaSteps: [
      {
        questionZh: "如果复杂数列由两个简单数列相加组成，而且两个简单的都知道极限，整个和的极限看起来应该怎样？",
        questionEn: "What should happen to the limit of a sum?",
        hint: "两个误差可以各自分配一半容差。",
        answerZh: "和会趋于两个极限的和。因为可以要求两个误差分别小于 ε/2，再用三角不等式把总误差控制在 ε 内。这就是极限加法法则的证明思路。",
        formula: "aₙ → a，bₙ → b ⇒ aₙ + bₙ → a + b。"
      },
      {
        questionZh: "收敛、有界和振荡之间是什么方向的关系？为什么有界不能推出收敛？",
        questionEn: "How are convergence and boundedness related?",
        hint: "找一条有界但永远在跳的数列。",
        answerZh: "收敛数列一定有界，因为尾巴进入一个固定小范围，前面有限项也能一起被压住。但 (−1)ⁿ 被限制在 [−1, 1] 内却一直振荡，所以有界不保证收敛。",
        formula: "收敛 ⇒ 有界；有界 ⇏ 收敛。"
      },
      {
        questionZh: "求 (3n + 1)/n 的极限时，怎样把复杂部分变回已知的 1/n？",
        questionEn: "How do limit laws simplify a rational expression?",
        hint: "先把单项式拆开。",
        answerZh: "把分子分成两项，得到 (3n + 1)/n = 3 + 1/n。常数 3 的极限仍是 3，1/n 的极限是 0，所以总和趋于 3。",
        formula: "(3n + 1)/n → 3 + 0 = 3。"
      },
      {
        questionZh: "夹逼定理为什么要求上下两条边界最终夹住中间项？只让它们各自收敛还不够吗？",
        questionEn: "Why must the squeeze inequalities hold eventually?",
        hint: "中间项必须和边界处在同一段尾部关系。",
        answerZh: "如果中间项不在两条边界之间，它就不受控制。夹逼要求从某个共同位置以后 aₙ ≤ bₙ ≤ cₙ 同时成立，这样边界同时进入 L 的容差带时，bₙ 被迫一起进入。",
        formula: "aₙ ≤ bₙ ≤ cₙ eventually，且 aₙ,cₙ → L。"
      },
      {
        questionZh: "如果逐项都有 aₙ < bₙ，取极限后为什么可能变成相等？",
        questionEn: "Why can strict inequalities become equality at the limit?",
        hint: "找两个都趋于 0 但逐项不同的数列。",
        answerZh: "取 aₙ = 1/(n + 1)，bₙ = 1/n。每项都严格小于，但两边都趋于 0。极限只保留最终趋势，不会继承无限接近中的严格差别；保序定理只保证 ≤。",
        formula: "aₙ < bₙ 可以推出 lim aₙ ≤ lim bₙ，但不能推出 <。"
      }
    ],
    counterexample: {
      wrong: "(−1)ⁿ 有界，所以它有极限。",
      correct: "它有界但发散；有界只是收敛的必要条件。",
      why: "有界振荡可以永远不进入一个稳定极限。"
    },
    retellZh: "极限法则负责拆分运算，有界和收敛方向不能写反，夹逼要有共同尾部的上下边界。",
    retellEn: "Limit laws reuse known limits; boundedness does not imply convergence, and squeezing needs eventually matching bounds."
  },
  "divergence-infinity": {
    animation: "divergence-infinity",
    animationTitle: "高度线不断上移，数列仍然追过它",
    networkGoal: "理解发散到无穷并不是普通极限",
    networkRisk: "把无界等同于趋于正无穷",
    symbols: [
      ["+∞", "positive infinity", "任意大的方向", "不是实数"],
      ["M", "level", "任意固定高度", "要最终超过"],
      ["aₙ → +∞", "diverges to +∞", "最终大于任意 M", "越来越高"],
      ["−∞", "negative infinity", "任意小的方向", "最终低于任意 M"]
    ],
    qaSteps: [
      {
        questionZh: "先不说符号：说一列数“往上跑得没有尽头”，用水平线怎样检验？",
        questionEn: "How would a horizontal-level test detect growth to infinity?",
        hint: "把水平线抬得任意高，数列最终能否超过它？",
        answerZh: "先随便把一条水平线放到高度 M。无论 M 多高，只要最终从某个位置开始的项都能越过它，就说明数列朝上无限增长。",
        formula: "∀M，最终 aₙ > M。"
      },
      {
        questionZh: "趋于 +∞ 为什么不能直接写成“极限等于 ∞ 这个数”？",
        questionEn: "Why is infinity not a real limit value?",
        hint: "∞ 能参与普通的加减乘除吗？",
        answerZh: "∞ 不属于实数，它只描述数列没有有限极限、并且朝正方向不断增长。写 aₙ → +∞ 是记录这种发散方式，不是说存在一个叫 +∞ 的实数 L。",
        formula: "+∞ 是方向，不是 R 中的成员。"
      },
      {
        questionZh: "证明 n → +∞ 时，给定任意高度 M，怎样选一个起点 N？",
        questionEn: "How do you prove n diverges to +∞?",
        hint: "n 达到 M 以后，所有后面的 n 还会怎样？",
        answerZh: "由阿基米德性质可选整数 N > M。若 n ≥ N，则 n > M，所以从 N 以后所有项都超过水平线 M。",
        formula: "取 N > M。"
      },
      {
        questionZh: "为什么 ((−1)ⁿ n) 没有上界，却不趋于 +∞？",
        questionEn: "Why is an unbounded alternating sequence not tending to +∞?",
        hint: "奇数项跑到哪个方向？",
        answerZh: "它的偶数项越来越大，但奇数项越来越负。无论下标多大，奇数项都会重新掉到很低的位置，因此不能保证从某个 N 以后所有项都超过任意正高度 M。",
        formula: "无界 + 方向反复 ⇒ 不趋于 +∞。"
      },
      {
        questionZh: "如果 aₙ → +∞，为什么它的倒数 1/aₙ 会趋于 0？",
        questionEn: "Why does the reciprocal tend to zero?",
        hint: "分母最终会超过任意大的数。",
        answerZh: "取任意 ε > 0，让水平 M = 1/ε。由于 aₙ 最终大于 1/ε，且足够大后为正，所以 0 < 1/aₙ < ε，说明倒数趋于 0。",
        formula: "aₙ > 1/ε ⇒ 1/aₙ < ε。"
      }
    ],
    counterexample: {
      wrong: "((−1)ⁿ n) 没有上界，所以它趋于 +∞。",
      correct: "它正负无界交替，既不趋于 +∞，也不趋于 −∞。",
      why: "趋于 +∞ 要求最终所有项都超过任意高度，而非只有一些项很高。"
    },
    retellZh: "趋于正无穷就是无论水平线多高，整条尾部最终都在它上面；它不是普通实数极限。",
    retellEn: "Divergence to +∞ means the entire tail eventually exceeds every prescribed level."
  },
  "function-limit": {
    animation: "function-limit",
    animationTitle: "x 从两侧靠近，输出被压进误差带",
    networkGoal: "从数列极限过渡到函数邻域",
    networkRisk: "把 f(a) 的值塞进极限判断",
    symbols: [
      ["lim x→a", "limit as x approaches a", "x 靠近 a 但不等于 a", "去心邻域"],
      ["ε", "epsilon", "允许的输出误差", "水平误差带"],
      ["δ", "delta", "允许的输入距离", "竖直输入区间"],
      ["0 < abs(x − a)", "punctured", "排除 x = a", "点值无关"]
    ],
    qaSteps: [
      {
        questionZh: "看一条曲线在某个位置附近：为什么研究“走过去时的趋势”时，不需要看那一点本身是否被填上？",
        questionEn: "Why does a limit ignore the actual value at a point?",
        hint: "把道路封闭在目的地那一点，通往它的路仍然存在。",
        answerZh: "极限描述的是从附近靠近时输出会稳定到哪里。即使目的地本身缺失或被单独改了值，只要附近轨迹稳定，趋势仍然可以存在。",
        formula: "极限看附近，不看 f(a)。"
      },
      {
        questionZh: "epsilon 和 delta 分别在图上控制什么方向？为什么顺序是“先 epsilon，再 delta”？",
        questionEn: "What do epsilon and delta control?",
        hint: "epsilon 是输出要求，delta 是我们选择的输入范围。",
        answerZh: "epsilon 规定输出离 L 最多多远，也就是水平误差带；delta 是我们为了让输出进入误差带而限制 x 离 a 多近。先收到输出要求，再选择输入范围，所以 epsilon 在前。",
        formula: "∀ε > 0，∃δ > 0。"
      },
      {
        questionZh: "证明 lim x→2 (3x + 1) = 7 时，怎样从误差要求反推出 delta？",
        questionEn: "How do you choose delta for a linear function?",
        hint: "先把输出误差化简到只含 x − 2。",
        answerZh: "输出误差是 abs((3x + 1) − 7) = 3 abs(x − 2)。要让这个量小于 epsilon，只需要 abs(x − 2) < ε/3，所以取 δ = ε/3。",
        formula: "δ = ε/3。"
      },
      {
        questionZh: "如果函数在 a 处被单独定义成一个奇怪的值，或者在 a 处没有定义，为什么极限仍可能不变？",
        questionEn: "Why can a punctured limit survive a missing or altered point value?",
        hint: "定义中的 0 < abs(x − a) 排除了什么？",
        answerZh: "因为定义要求 0 < abs(x − a)，也就是检查时永远不取 x = a。f(a) 是否奇怪、是否存在都不进入条件，只要 a 附近定义域点的输出稳定。",
        formula: "0 < abs(x − a) < δ。"
      },
      {
        questionZh: "用自己的话解释聚点：为什么没有它，函数极限可能变成“空话”？",
        questionEn: "Why is an accumulation point necessary?",
        hint: "a 附近如果没有别的定义域点，就没有任何 x 能检验。",
        answerZh: "聚点保证 a 的任意小邻域里都存在别的定义域点。如果 a 附近根本没有可取的 x，条件“所有靠近 a 的 x 都满足……”会因为找不到测试对象而空洞成立，不能表达真实趋势。",
        formula: "每个 δ 邻域里都要有 x ∈ D 且 x ≠ a。"
      }
    ],
    counterexample: {
      wrong: "如果 f(a) 被改成 0，而附近极限是 2，那么极限也变成 0。",
      correct: "去心极限仍然是 2；只有连续性会因为点值不同而失败。",
      why: "函数极限定义排除了 x = a。"
    },
    retellZh: "函数极限只问附近输入的输出是否被控制住，f(a) 是否存在、等于什么都不参与。",
    retellEn: "A punctured limit describes nearby output behaviour and ignores the actual value at the point."
  },
  "one-sided-laws": {
    animation: "one-sided-laws",
    animationTitle: "左右两路靠近同一点，却落在不同高度",
    networkGoal: "用单侧极限和代数化简判断双侧极限",
    networkRisk: "0/0 时直接停止或直接代入",
    symbols: [
      ["x → a−", "left limit", "从小于 a 的一侧靠近", "左极限"],
      ["x → a+", "right limit", "从大于 a 的一侧靠近", "右极限"],
      ["0/0", "indeterminate form", "不能直接得到值", "可能需要约分"],
      ["lim fg", "product limit", "乘积的极限等于极限的乘积", "前提是有限极限"]
    ],
    qaSteps: [
      {
        questionZh: "一条曲线在点的左边和右边可能朝同一个高度，也可能分开。判断双侧极限前，为什么先看两侧更稳？",
        questionEn: "Why inspect both one-sided approaches first?",
        hint: "双侧要求来自任一方向的输入都得到同一输出。",
        answerZh: "如果左右两侧稳定到不同值，那么无论从哪边定义一条单一极限都不合适。先分别求两侧，就能清楚看到它们是否汇合到同一点。",
        formula: "双侧极限存在 ⇔ 左右极限相等。"
      },
      {
        questionZh: "对 |x|/x，为什么左侧恒为 −1、右侧恒为 1？",
        questionEn: "Why does abs(x)/x take different signs on each side?",
        hint: "分别使用负数与正数的绝对值定义。",
        answerZh: "当 x > 0 时，abs(x) = x，比值是 1；当 x < 0 时，abs(x) = −x，比值是 −1。左右输出完全不同，所以 0 处的双侧极限不存在。",
        formula: "左极限 −1，右极限 1。"
      },
      {
        questionZh: "为什么 (x² − 1)/(x − 1) 在 x = 1 直接代入得到 0/0，却仍然可能有极限？",
        questionEn: "Why can 0/0 still have a limit?",
        hint: "0/0 是代入失败，不是最终结论。",
        answerZh: "在 x ≠ 1 时，分子可以分解成 (x − 1)(x + 1)，约去公共因式 x − 1，得到 x + 1。极限只检查去心附近，因此可以沿着化简后的表达式靠近 2。",
        formula: "lim x→1 (x² − 1)/(x − 1) = lim x→1 (x + 1) = 2。"
      },
      {
        questionZh: "约分后 x + 1 在 x = 1 有值，为什么不能因此改变原函数的定义域？",
        questionEn: "Why does cancellation not define the original point?",
        hint: "原式在 x = 1 的分母是多少？",
        answerZh: "原式在 x = 1 会除以 0，所以仍然没有定义。约分只说明在挖掉该点以后两个表达式相等，用于计算极限；它不会恢复原函数缺失的点。",
        formula: "约分成立在 x ≠ 1 的去心邻域。"
      },
      {
        questionZh: "若左右极限分别是 0 和 1，能不能只改 f(a) 让双侧极限存在？",
        questionEn: "Can changing the point value repair unequal one-sided limits?",
        hint: "f(a) 会进入左右靠近的过程吗？",
        answerZh: "不能。去心极限完全忽略 f(a)，左右两侧仍然稳定到不同值。改点值可能改变连续性，但不能让两个不同的单侧极限合并。",
        formula: "左右极限先相等，才谈双侧极限。"
      }
    ],
    counterexample: {
      wrong: "因为 x = 1 代入是 0/0，所以 (x² − 1)/(x − 1) 的极限不存在。",
      correct: "在 x ≠ 1 时约分为 x + 1，所以极限为 2。",
      why: "0/0 表示直接代入无效，不代表附近趋势不存在。"
    },
    retellZh: "双侧极限要左右两边先汇合；0/0 时可以先在去心邻域约分再求趋势。",
    retellEn: "Check both one-sided limits; algebraic cancellation may resolve a 0/0 trend without defining the missing point."
  },
  continuity: {
    animation: "continuity",
    animationTitle: "有定义、有极限、二者相等三盏灯",
    networkGoal: "把极限和真实点值连接起来",
    networkRisk: "极限存在就误判连续",
    symbols: [
      ["continuous at a", "在 a 连续", "附近变化不会突然偏离点值", "极限 = 点值"],
      ["f(a)", "function value", "点 a 的实际输出", "必须存在"],
      ["limit", "函数极限", "附近输出趋向的数", "必须存在"],
      ["xₙ → a", "sequence approaching a", "所有输入序列都靠近 a", "序列刻画"]
    ],
    qaSteps: [
      {
        questionZh: "把曲线看成一条可以走的路：为什么只在附近“接近”某个高度，不代表这个点真的铺在路面上？",
        questionEn: "Why does nearby approach not guarantee the point itself is on the curve?",
        hint: "极限可以存在，而点值可能缺失或不同。",
        answerZh: "极限只描述附近趋势。目的地本身可能有一个洞，也可能被单独放到别的高度。连续要求道路不仅附近通向该高度，而且这个点本身也确实在那里。",
        formula: "连续要求极限与点值握手。"
      },
      {
        questionZh: "连续性需要检查哪三件事？为什么缺一件都不行？",
        questionEn: "What three checks define continuity at a point?",
        hint: "点有值、附近有极限、两个数相同。",
        answerZh: "第一，函数在 a 必须有定义；第二，双侧极限必须存在；第三，极限值必须等于 f(a)。缺第一项没有点值可比较，缺第二项不知道趋势，缺第三项曲线会在点处跳开。",
        formula: "f(a) 存在；lim x→a f(x) 存在；二者相等。"
      },
      {
        questionZh: "可去间断中极限为 2，但 f(1) = 0。为什么改 f(1) 就能修复？",
        questionEn: "Why can a removable discontinuity be repaired?",
        hint: "附近趋势已经正确，只差点值。",
        answerZh: "附近所有输入已经稳定输出接近 2，只是实际点值被单独设成 0。把 f(1) 改成 2 后，三条件立即同时满足，所以断点被修复。",
        formula: "把 f(1) 从 0 改为 2。"
      },
      {
        questionZh: "跳跃函数左侧趋于 0、右侧趋于 1，为什么无论 f(0) 取什么值都无法连续？",
        questionEn: "Why cannot changing one point repair a jump?",
        hint: "先看双侧极限是否存在。",
        answerZh: "左右极限不相等，所以双侧极限根本不存在。连续性需要已经存在的双侧极限等于点值；点值只是第三项，无法修复第二项的失败。",
        formula: "左极限 ≠ 右极限 ⇒ 双侧极限不存在。"
      },
      {
        questionZh: "为什么“用所有序列判断连续”与“用 epsilon-delta 判断连续”等价？",
        questionEn: "Why is the sequential characterisation equivalent to epsilon-delta continuity?",
        hint: "连续先给 delta，序列收敛再把 delta 变成 N。",
        answerZh: "若 epsilon-delta 连续成立，对任意 ε 取到 δ；任何 xₙ → a 最终都会进入 δ 邻域，所以 f(xₙ) → f(a)。反过来若连续失败，可以造出一个固定误差下界并越来越靠近 a 的坏序列。",
        formula: "连续 ⇒ 所有序列保持收敛；坏序列 ⇒ 不连续。"
      }
    ],
    counterexample: {
      wrong: "lim x→1 f(x) = 2，函数在 x = 1 也有定义，所以 f 连续。",
      correct: "还必须检查 f(1) 是否等于 2；如果 f(1) = 0，仍不连续。",
      why: "有定义和有极限只是两项，第三项是二者相等。"
    },
    retellZh: "连续要三件事同时成立：点有定义、极限存在、极限正好等于点值。",
    retellEn: "Continuity requires a defined point value, an existing limit, and equality between them."
  },
  "continuous-properties": {
    animation: "continuous-properties",
    animationTitle: "闭区间曲线取到峰顶，并延伸到无穷趋势",
    networkGoal: "连接连续函数性质、间断与无穷极限",
    networkRisk: "忽略定理条件或把 ∞ 当实数",
    symbols: [
      ["continuous", "连续", "附近输出跟随点值", "无跳跃"],
      ["EVT", "Extreme Value Theorem", "闭区间连续函数有最大最小值", "需要闭、有界、连续"],
      ["g(u(x))", "composition", "外层连续时可把极限搬进去", "g(L)"],
      ["x → ∞", "limit at infinity", "输入无限增大", "不是取 x = ∞"]
    ],
    qaSteps: [
      {
        questionZh: "为什么连续函数可以直接做加减乘除和复合？这些结论依赖什么前提？",
        questionEn: "Why do continuous functions preserve algebraic operations?",
        hint: "每一项极限都存在且等于对应点值。",
        answerZh: "连续给出每个部分的极限等于它的点值，再使用函数极限运算和复合法则，结果仍等于整体在点处的值。除法还要求分母在该点不为零。",
        formula: "连续函数对有限运算与合理复合封闭。"
      },
      {
        questionZh: "闭区间上的连续曲线为什么一定被上下界住，并真的达到最高和最低点？",
        questionEn: "What does the Extreme Value Theorem guarantee?",
        hint: "同时检查“闭区间”和“连续”两个条件。",
        answerZh: "极值定理保证函数在 [a, b] 上有界，并存在区间内的点取到最小值与最大值。区间闭保证端点不会无限逃开，连续保证图像不会在某个位置漏掉极限高度。",
        formula: "f : [a,b] → R 连续 ⇒ 有界且取到最值。"
      },
      {
        questionZh: "为什么 1/x 在 (0, 1] 连续，却没有最大值，也不能套用闭区间最值定理？",
        questionEn: "Why does 1/x fail the closed-interval guarantee?",
        hint: "(0, 1] 是闭且有界区间吗？",
        answerZh: "(0, 1] 左端不包含 0，不是闭区间。1/x 越靠近 0 越大，没有上界，也不取到有限最大值。这个例子说明定理条件不能省略。",
        formula: "连续不等于自动有界；还要看区间条件。"
      },
      {
        questionZh: "当 u(x) → L 且 g 在 L 连续时，为什么可以把极限写进外层函数？",
        questionEn: "Why can limits pass through continuous outer functions?",
        hint: "外层连续性先控制 g 的输出误差，再让内层靠近 L。",
        answerZh: "给定输出误差 ε，外层连续性给出一个中间误差 η；内层极限再保证 u(x) 离 L 足够近。两阶段串起来，就得到 g(u(x)) → g(L)。",
        formula: "u(x) → L，g 在 L 连续 ⇒ g(u(x)) → g(L)。"
      },
      {
        questionZh: "为什么 ∞ − ∞ 和 ∞/∞ 不能像普通数那样计算？",
        questionEn: "Why are infinity expressions indeterminate?",
        hint: "增长速度不同，结果可能完全不同。",
        answerZh: "∞ 只描述无限增长，不给出具体大小。两个趋于无穷的表达式相减，差距可能趋于有限值、无穷，甚至不存在，取决于它们的增长关系。必须先化简再求极限。",
        formula: "∞ 是趋势标记，不是可代数运算的实数。"
      }
    ],
    counterexample: {
      wrong: "1/x 连续，所以它在 (0, 1] 上一定有最大值。",
      correct: "(0, 1] 不是闭区间，而且 1/x 没有上界，没有最大值。",
      why: "最值定理要求闭区间 [a, b] 与连续性同时成立。"
    },
    retellZh: "连续函数保留常见运算；闭区间连续函数取到最值；无穷极限先化简，不能把 ∞ 当普通数。",
    retellEn: "Continuity preserves operations and limits through compositions, but extreme values require the full closed-interval hypotheses."
  }
};
