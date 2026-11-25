window.MFC_WEEK4_PROOFS = {
  weekId: "week4",
  proofPage: "week4-proofs.html",
  stations: [
    { id: "integration-foundations", titleZh: "积分基础", titleEn: "Integration foundations" },
    { id: "parts-rational", titleZh: "分部与有理函数", titleEn: "Parts and rational functions" },
    { id: "trig-hyperbolic", titleZh: "三角、双曲与对称", titleEn: "Trigonometry, hyperbolics and symmetry" }
  ],
  notes: [
    {
      id: "note-ftc-one", kind: "theorem", termZh: "FTC Part I", termEn: "FTC Part I",
      summaryZh: "连续被积函数的累积面积满足 F′=f。", summaryEn: "The accumulation function of a continuous integrand satisfies F′=f.",
      source: { label: "Theorem 9.1", pages: "p.20–21" }
    },
    {
      id: "note-chain-rule", kind: "theorem", termZh: "链式法则", termEn: "Chain rule",
      summaryZh: "复合函数求导时乘以内层导数。", summaryEn: "Differentiating a composition multiplies by the inner derivative.",
      source: { label: "Chain rule from Chapter 4", pages: "p.5" }
    },
    {
      id: "note-newton-leibniz", kind: "theorem", termZh: "Newton–Leibniz 公式", termEn: "Newton–Leibniz formula",
      summaryZh: "连续函数的定积分等于任一原函数的端点差。", summaryEn: "A continuous definite integral equals the endpoint difference of an antiderivative.",
      source: { label: "FTC Part II", pages: "p.22" }
    },
    {
      id: "note-oriented-integral", kind: "definition", termZh: "积分方向", termEn: "Oriented integral",
      summaryZh: "交换上下界会改变定积分的符号。", summaryEn: "Swapping the bounds reverses the sign of a definite integral.",
      source: { label: "Orientation convention", pages: "p.22" }
    },
    {
      id: "note-continuity", kind: "assumption", termZh: "连续性前提", termEn: "Continuity hypothesis",
      summaryZh: "Theorem 10.2 要求 integrand 和换元在对应区间上连续可微。", summaryEn: "Theorem 10.2 requires the relevant integrands and substitution to be continuous and differentiable.",
      source: { label: "Theorem 10.2", pages: "p.5" }
    },
    {
      id: "note-product-rule", kind: "theorem", termZh: "乘积法则", termEn: "Product rule",
      summaryZh: "(uv)′=u′v+uv′。", summaryEn: "(uv)′=u′v+uv′.",
      source: { label: "Product rule", pages: "p.7" }
    },
    {
      id: "note-linearity", kind: "theorem", termZh: "积分线性性", termEn: "Integral linearity",
      summaryZh: "积分的和、差与常数倍可逐项处理。", summaryEn: "Integral sums, differences and scalar multiples can be treated term by term.",
      source: { label: "Theorem 8.13", pages: "p.17" }
    },
    {
      id: "note-darboux-reflection", kind: "definition", termZh: "Darboux 反射", termEn: "Darboux reflection",
      summaryZh: "分割 u 与分割 −u 保持子区间长度和振幅关系。", summaryEn: "Reflecting a partition through the origin preserves interval lengths and oscillation data.",
      source: { label: "Proof of Proposition 11.13", pages: "p.22" }
    },
    {
      id: "note-subinterval", kind: "theorem", termZh: "子区间可积性", termEn: "Subinterval integrability",
      summaryZh: "在整段可积的函数在其闭子区间上也可积。", summaryEn: "A Riemann-integrable function is integrable on every closed subinterval.",
      source: { label: "Theorem 8.13", pages: "p.18" }
    },
    {
      id: "note-parity", kind: "definition", termZh: "奇偶性", termEn: "Parity",
      summaryZh: "偶函数满足 f(−u)=f(u)，奇函数满足 f(−u)=−f(u)。", summaryEn: "Even functions satisfy f(−u)=f(u); odd functions satisfy f(−u)=−f(u).",
      source: { label: "Definition 11.12", pages: "p.21" }
    }
  ],
  proofs: [
    {
      id: "proof-integration-substitution",
      lessonId: "integration-substitution",
      station: "integration-foundations",
      lessonNumber: "02",
      titleZh: "换元公式的证明",
      titleEn: "Proof: Integration by substitution",
      claimZh: "在 Theorem 10.2 的前提下，换元后的积分与原积分相等。",
      claimEn: "Under the hypotheses of Theorem 10.2, the substituted integral equals the original integral.",
      source: { label: "Theorem 10.2", pages: "p.5–6" },
      steps: [
        {
          id: "goal", titleZh: "目标：把 x 积分换成 y 积分",
          titleEn: "Goal: change the integration variable",
          formula: "∫ₐᵇ f(x)dx = ∫αβ f(t(y))t′(y)dy",
          reasonZh: "目标是证明两个有向定积分相等。",
          reasonEn: "The goal is to prove the two oriented definite integrals are equal.",
          noteIds: ["note-continuity"],
          source: { label: "Theorem 10.2", pages: "p.5" }
        },
        {
          id: "define-F", titleZh: "构造累积原函数",
          titleEn: "Construct an accumulation primitive",
          formula: "F(x)=∫ₓ₀ˣ f(s)ds, F′(x)=f(x)",
          reasonZh: "f 连续，因此 FTC I 给出 F′=f；先固定一个 x₀∈J。",
          reasonEn: "Continuity of f and FTC I give F′=f after fixing x₀∈J.",
          noteIds: ["note-ftc-one", "note-continuity"],
          source: { label: "Proof of Theorem 10.2", pages: "p.5" }
        },
        {
          id: "chain", titleZh: "对复合函数用链式法则",
          titleEn: "Apply the chain rule to the composition",
          formula: "d/dy F(t(y)) = F′(t(y))t′(y) = f(t(y))t′(y)",
          reasonZh: "外层 F 在 t(y) 处可导，内层 t 也可导。",
          reasonEn: "The outer F is differentiable at t(y), and the inner t is differentiable.",
          noteIds: ["note-chain-rule", "note-ftc-one"],
          source: { label: "Proof of Theorem 10.2", pages: "p.5" }
        },
        {
          id: "evaluate-left", titleZh: "用 Newton–Leibniz 计算 x 积分",
          titleEn: "Evaluate the x-integral by Newton–Leibniz",
          formula: "∫ₐᵇ f(x)dx = F(b)−F(a)",
          reasonZh: "F 是 f 的原函数，并且相关 integrand 连续。",
          reasonEn: "F is an antiderivative of f and the relevant integrands are continuous.",
          noteIds: ["note-newton-leibniz", "note-continuity"],
          source: { label: "Proof of Theorem 10.2", pages: "p.5" }
        },
        {
          id: "map-endpoints", titleZh: "代入端点关系",
          titleEn: "Substitute the endpoint relations",
          formula: "F(b)−F(a) = F(t(β))−F(t(α))",
          reasonZh: "题设给出 a=t(α)、b=t(β)。",
          reasonEn: "The hypotheses state a=t(α) and b=t(β).",
          noteIds: ["note-newton-leibniz"],
          source: { label: "Proof of Theorem 10.2", pages: "p.5" }
        },
        {
          id: "evaluate-right", titleZh: "用 Newton–Leibniz 计算 y 积分",
          titleEn: "Evaluate the y-integral by Newton–Leibniz",
          formula: "∫αβ f(t(y))t′(y)dy = F(t(β))−F(t(α))",
          reasonZh: "链式法则说明 F(t(y)) 是右侧 integrand 的原函数。",
          reasonEn: "The chain-rule identity shows F(t(y)) is a primitive of the right-hand integrand.",
          noteIds: ["note-newton-leibniz", "note-chain-rule"],
          source: { label: "Proof of Theorem 10.2", pages: "p.5" }
        },
        {
          id: "orientation", titleZh: "处理反向端点",
          titleEn: "Handle reversed orientation",
          formula: "∫βα = −∫αβ",
          reasonZh: "有向积分约定使 α>β 时等式仍成立。",
          reasonEn: "The oriented-integral convention keeps the identity valid when α>β.",
          noteIds: ["note-oriented-integral"],
          source: { label: "Orientation after Theorem 10.2", pages: "p.5" }
        },
        {
          id: "conclusion", titleZh: "合并得到换元公式",
          titleEn: "Combine the endpoint identities",
          formula: "∫ₐᵇf(x)dx = ∫αβf(t(y))t′(y)dy",
          reasonZh: "左右两边都等于同一端点差，换元公式成立。",
          reasonEn: "Both sides equal the same endpoint difference, proving the substitution formula.",
          noteIds: ["note-newton-leibniz", "note-oriented-integral"],
          source: { label: "Theorem 10.2", pages: "p.5–6" }
        }
      ],
      modes: {
        exam: { labelZh: "考场版", labelEn: "Exam", stepIds: ["goal", "define-F", "chain", "conclusion"] },
        full: { labelZh: "完整版", labelEn: "Full", stepIds: ["goal", "define-F", "chain", "evaluate-left", "map-endpoints", "evaluate-right", "orientation", "conclusion"] }
      },
      defaultMode: "exam",
      entryHref: "week4-proofs.html#proof-integration-substitution"
    },
    {
      id: "proof-integration-parts",
      lessonId: "integration-by-parts",
      station: "parts-rational",
      lessonNumber: "04",
      titleZh: "分部积分公式的证明",
      titleEn: "Proof: Integration by parts",
      claimZh: "乘积法则逐项积分后移项，得到分部积分公式。",
      claimEn: "Integrating the product rule and rearranging gives integration by parts.",
      source: { label: "Theorem 10.8", pages: "p.7" },
      steps: [
        {
          id: "goal", titleZh: "目标：证明分部公式",
          titleEn: "Goal: prove the parts identity",
          formula: "∫ₐᵇu v′dx = [uv]ₐᵇ − ∫ₐᵇu′v dx",
          reasonZh: "目标是把乘积的导数拆成两个积分贡献。",
          reasonEn: "The goal is to split the integral of a product derivative into two contributions.",
          noteIds: ["note-product-rule"],
          source: { label: "Theorem 10.8", pages: "p.7" }
        },
        {
          id: "product-rule", titleZh: "写出乘积法则",
          titleEn: "Write the product rule",
          formula: "(uv)′ = u′v + u v′",
          reasonZh: "u 与 v 连续可微，乘积法则适用。",
          reasonEn: "Since u and v are continuously differentiable, the product rule applies.",
          noteIds: ["note-product-rule"],
          source: { label: "Proof of Theorem 10.8", pages: "p.7" }
        },
        {
          id: "integrate", titleZh: "对等式两边积分",
          titleEn: "Integrate both sides",
          formula: "∫ₐᵇ(uv)′dx = ∫ₐᵇu′v dx + ∫ₐᵇu v′dx",
          reasonZh: "导数恒等式在区间上逐项积分。",
          reasonEn: "Integrate the derivative identity over the interval.",
          noteIds: ["note-linearity"],
          source: { label: "Proof of Theorem 10.8", pages: "p.7" }
        },
        {
          id: "endpoint", titleZh: "左端化为 UV 边界差",
          titleEn: "Convert the left side to a boundary difference",
          formula: "∫ₐᵇ(uv)′dx = [uv]ₐᵇ",
          reasonZh: "uv 的导数是 (uv)′，由 Newton–Leibniz 得到端点差。",
          reasonEn: "Newton–Leibniz converts the integral of (uv)′ into the uv endpoint difference.",
          noteIds: ["note-newton-leibniz"],
          source: { label: "Proof of Theorem 10.8", pages: "p.7" }
        },
        {
          id: "isolate", titleZh: "把 u′v 积分移到另一边",
          titleEn: "Move the u′v integral to the other side",
          formula: "∫ₐᵇu v′dx = [uv]ₐᵇ − ∫ₐᵇu′v dx",
          reasonZh: "对一个等式做减法即可隔离目标积分。",
          reasonEn: "Subtract one integral from both sides to isolate the target integral.",
          noteIds: ["note-linearity"],
          source: { label: "Proof of Theorem 10.8", pages: "p.7" }
        },
        {
          id: "boundary-notation", titleZh: "解释 UV 方括号",
          titleEn: "Interpret the UV bracket",
          formula: "[uv]ₐᵇ = u(b)v(b) − u(a)v(a)",
          reasonZh: "端点乘积之差就是定积分的边界贡献。",
          reasonEn: "The endpoint product difference is the boundary contribution.",
          noteIds: ["note-newton-leibniz"],
          source: { label: "Theorem 10.8", pages: "p.7" }
        },
        {
          id: "conclusion", titleZh: "得到分部积分公式",
          titleEn: "Obtain the integration-by-parts formula",
          formula: "∫ u v′ = uv − ∫ u′v",
          reasonZh: "将所有合法等式合并，分部积分成立。",
          reasonEn: "Combining the valid identities proves integration by parts.",
          noteIds: ["note-product-rule", "note-newton-leibniz"],
          source: { label: "Theorem 10.8", pages: "p.7" }
        }
      ],
      modes: {
        exam: { labelZh: "考场版", labelEn: "Exam", stepIds: ["goal", "integrate", "isolate"] },
        full: { labelZh: "完整版", labelEn: "Full", stepIds: ["goal", "product-rule", "integrate", "endpoint", "isolate", "boundary-notation", "conclusion"] }
      },
      defaultMode: "exam",
      entryHref: "week4-proofs.html#proof-integration-parts"
    },
    {
      id: "proof-integral-symmetry",
      lessonId: "integral-symmetry",
      station: "trig-hyperbolic",
      lessonNumber: "12",
      titleZh: "对称区间积分公式的证明",
      titleEn: "Proof: Symmetry of definite integrals",
      claimZh: "对称区间上，偶函数面积加倍，奇函数有向面积抵消。",
      claimEn: "On a symmetric interval, an even function doubles and an odd function cancels.",
      source: { label: "Proposition 11.13", pages: "p.22" },
      steps: [
        {
          id: "goal", titleZh: "目标：比较左右两半",
          titleEn: "Goal: compare the two halves",
          formula: "∫−aᵃ f = 2∫₀ᵃ f (even); ∫−aᵃ f = 0 (odd)",
          reasonZh: "先证明左半区间可反射到右半区间，再代入奇偶性。",
          reasonEn: "Reflect the left half onto the right, then apply parity.",
          noteIds: ["note-parity", "note-darboux-reflection"],
          source: { label: "Proposition 11.13", pages: "p.22" }
        },
        {
          id: "define-reflection", titleZh: "定义反射函数",
          titleEn: "Define the reflected function",
          formula: "h(u)=f(−u), 0≤u≤a",
          reasonZh: "用负变量把左半区间映射到右半区间。",
          reasonEn: "The negative variable maps the left half onto the right half.",
          noteIds: ["note-darboux-reflection"],
          source: { label: "Proof of Proposition 11.13", pages: "p.22" }
        },
        {
          id: "partition-reflection", titleZh: "反射每个分割点和子区间",
          titleEn: "Reflect each partition point and subinterval",
          formula: "P={u₀,…,uₙ} ↦ P*={−uₙ,…,−u₀}",
          reasonZh: "对应子区间长度相同，函数值的下确界与上确界也对应相同。",
          reasonEn: "Corresponding subintervals have equal lengths and matching infima and suprema.",
          noteIds: ["note-darboux-reflection"],
          source: { label: "Proof of Proposition 11.13", pages: "p.22" }
        },
        {
          id: "darboux-equality", titleZh: "比较 Darboux 和",
          titleEn: "Compare the Darboux sums",
          formula: "L(h,P)=L(f,P*), U(h,P)=U(f,P*)",
          reasonZh: "逐块反射使每个下和、上和对应相等。",
          reasonEn: "The reflection makes each lower and upper sum match term by term.",
          noteIds: ["note-darboux-reflection", "note-subinterval"],
          source: { label: "Proof of Proposition 11.13", pages: "p.22" }
        },
        {
          id: "integrability", titleZh: "得到左半区间可积",
          titleEn: "Conclude left-half integrability",
          formula: "∫−a⁰ f(x)dx = ∫₀ᵃ f(−u)du",
          reasonZh: "反射保持上下积分；原区间可积也给出左子区间可积。",
          reasonEn: "Reflection preserves the lower and upper integrals, and subinterval integrability is inherited.",
          noteIds: ["note-subinterval", "note-darboux-reflection"],
          source: { label: "Proof of Proposition 11.13", pages: "p.22" }
        },
        {
          id: "split-zero", titleZh: "在 0 点拆分",
          titleEn: "Split at zero",
          formula: "∫−aᵃ f = ∫−a⁰ f + ∫₀ᵃ f",
          reasonZh: "定积分的区间可加性允许在 0 分开。",
          reasonEn: "Interval additivity permits splitting the definite integral at zero.",
          noteIds: ["note-linearity"],
          source: { label: "Proof of Proposition 11.13", pages: "p.22" }
        },
        {
          id: "parity", titleZh: "代入偶函数或奇函数关系",
          titleEn: "Apply even or odd parity",
          formula: "f even: f(−u)=f(u); f odd: f(−u)=−f(u)",
          reasonZh: "偶函数两份相等相加，奇函数两份相反相消。",
          reasonEn: "Even terms add to twice one side; odd terms are opposites and cancel.",
          noteIds: ["note-parity", "note-linearity"],
          source: { label: "Proof of Proposition 11.13", pages: "p.22" }
        },
        {
          id: "conclusion", titleZh: "得到对称积分公式",
          titleEn: "Obtain the symmetric-integral formulas",
          formula: "even: 2∫₀ᵃ f; odd: 0",
          reasonZh: "拆分、反射和奇偶性共同完成证明。",
          reasonEn: "Splitting, reflection and parity complete the proof.",
          noteIds: ["note-parity", "note-darboux-reflection"],
          source: { label: "Proposition 11.13", pages: "p.22" }
        }
      ],
      modes: {
        exam: { labelZh: "考场版", labelEn: "Exam", stepIds: ["goal", "define-reflection", "split-zero", "parity"] },
        full: { labelZh: "完整版", labelEn: "Full", stepIds: ["goal", "define-reflection", "partition-reflection", "darboux-equality", "integrability", "split-zero", "parity", "conclusion"] }
      },
      defaultMode: "exam",
      entryHref: "week4-proofs.html#proof-integral-symmetry"
    }
  ]
};

window.MFC_PROOF_CATALOG = window.MFC_WEEK4_PROOFS;
