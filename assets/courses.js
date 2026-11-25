// Course registry: add each new week here. Paths are relative to the MFC folder.
// Encode a literal # in a folder name as %23 in the path.
window.MFC_COURSES = {
  id: "mfc",
  titleZh: "MFC 数学基础学习中心",
  titleEn: "Mathematical Foundations for Calculus",
  weeks: [
    {
      id: "week1",
      weekNumber: 1,
      titleZh: "集合、函数、极限与连续性",
      titleEn: "Sets, Functions, Limits and Continuity",
      path: "week1/Week1学习站.html",
      topics: [
        "集合与实数线",
        "函数与可数性",
        "数列极限",
        "函数极限",
        "连续性"
      ],
      sections: ["real-line", "functions", "sequences", "function-limits", "continuity", "practice"],
      status: "available"
    },
    {
      id: "week2",
      weekNumber: 2,
      titleZh: "导数、求导技巧与函数分析",
      titleEn: "Differentiation, Advanced Techniques and Curve Analysis",
      path: "week2/Week2学习站.html",
      topics: [
        "导数与差商",
        "求导工具与链式法则",
        "反函数、隐函数与参数曲线",
        "单调性、极值与曲线分析",
        "偏导数与方向导数（非考试）"
      ],
      sections: ["derivative-foundations", "differentiation-rules", "advanced-differentiation", "curve-analysis", "partial-derivatives", "practice"],
      status: "available"
    },
    {
      id: "week3",
      weekNumber: 3,
      titleZh: "Taylor 近似、Riemann 积分与 FTC",
      titleEn: "Taylor Approximation, Riemann Integration and the Fundamental Theorem",
      path: "week3/Week3学习站.html",
      topics: [
        "高阶导数与 Taylor 多项式",
        "Lagrange 余项与误差阶",
        "分割与 Darboux 和",
        "Riemann 可积性",
        "微积分基本定理",
        "Improper integrals"
      ],
      sections: ["taylor-core", "taylor-error", "riemann-sums", "riemann-integrable", "ftc", "improper-integrals", "practice"],
      status: "available"
    },
    {
      id: "week4",
      weekNumber: 4,
      titleZh: "积分技巧与课程综合",
      titleEn: "Integration Techniques and Course Consolidation",
      path: "week4/Week4学习站.html",
      topics: [
        "原函数与换元",
        "分部积分与有理函数",
        "三角、双曲与对称积分",
        "存在性、数值近似与方法选择",
        "标量线积分（非考试）"
      ],
      sections: ["integration-foundations", "parts-rational", "trig-hyperbolic", "integration-strategy", "line-integrals", "practice"],
      status: "available"
    }
  ]
};
