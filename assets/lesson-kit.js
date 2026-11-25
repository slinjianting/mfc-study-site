(() => {
  "use strict";

  const captions = {
    "set-operations": [
      "两个集合先各自独立。",
      "并集把所有属于 A 或 B 的对象放在一起。",
      "交集只保留同时属于两边的重叠部分。",
      "差集从 A 中删掉属于 B 的对象。",
      "同一个操作，换一个集合，结果也会变化。"
    ],
    "number-intervals": [
      "区间只是数轴上连续的一段。",
      "圆括号表示端点不取，方括号表示端点取到。",
      "先看不等号，再决定每个端点是否填补。",
      "同一组数用不同写法，仍然可以是同一个集合。",
      "判断区间时，端点归属永远要单独检查。"
    ],
    "bounds-supremum": [
      "上界是一条从上方压住集合的水平线。",
      "上界可以有很多条，而且不必属于集合。",
      "上界越低，限制越紧。",
      "最低但仍能压住集合的那条线，就是上确界。",
      "只有上确界本身也在集合里时，它才是最大值。"
    ],
    "absolute-triangle": [
      "绝对值衡量两点在数轴上的距离。",
      "绕一次路，总路程不会比直接走更短。",
      "正向三角不等式把总误差拆成几段。",
      "反向三角不等式用来保证距离不会太小。",
      "通常只能写“不超过”，不能把等号当成默认。"
    ],
    "functions-images": [
      "函数像一台机器：每个输入只得到一个输出。",
      "像问：选中的输入最终去了哪些输出？",
      "原像反过来问：哪些输入落进了选中的输出区域？",
      "即使没有逆函数，原像也仍然存在。",
      "“输出所在的大集合”不一定等于“实际跑出的像”。"
    ],
    "composition-domain": [
      "复合函数是两台机器首尾连接。",
      "输入先经过内层函数，再把结果交给外层函数。",
      "内层的输出必须满足外层函数的输入要求。",
      "任何一个定义域条件失败，整个复合就没有定义。",
      "约分只改变写法，不会自动补回被删除的输入。"
    ],
    "function-properties": [
      "单射问：有没有两个输入撞到同一个输出？",
      "满射问：陪域中的每个输出是否都被取到？",
      "双射要求既不碰撞，也没有遗漏。",
      "双射时才能把箭头完整地反向走。",
      "同一公式改变定义域或陪域，性质也会改变。"
    ],
    "elementary-functions": [
      "公式只有在每个操作都允许时才有意义。",
      "分母是禁止通过的门。",
      "偶次根号要求内部不为负。",
      "对数要求真数为正。",
      "自然定义域是所有限制同时满足的部分。"
    ],
    countability: [
      "可数不是“数得快”，而是“能被自然数逐个编号”。",
      "整数虽然向两边无限，却可以按 0、1、−1、2、−2 排好。",
      "有理数可以用网格对角线逐个扫过。",
      "重复的分数要跳过，但不会破坏可数性。",
      "实数无法被这样完整列出，因此不可数。"
    ],
    "sequence-epsilon-n": [
      "epsilon 是一条允许误差带。",
      "我们要的不是偶尔进入，而是从某个位置以后一直留在里面。",
      "epsilon 缩小时，通常需要把起点 N 往后推。",
      "只要尾部所有项都进入误差带，就满足定义。",
      "“无限多项进入”仍然不够，关键是最终整条尾部。"
    ],
    "sequence-laws": [
      "复杂表达式可以先拆成几个已知数列。",
      "收敛数列会稳定下来，而且一定有界。",
      "有界振荡仍可能永远不收敛。",
      "保序只保证极限满足不超过，严格关系可能消失。",
      "夹逼定理利用上下两条边界把中间数列压向同一个值。"
    ],
    "divergence-infinity": [
      "趋于无穷描述的是不断向上或向下的方向。",
      "无论水平线 M 放多高，数列最终都会超过它。",
      "趋于 −∞ 时，所有后来的项会低于任意水平线。",
      "无界不一定是趋于 +∞，因为它可能不断换方向。",
      "∞ 不是普通实数，不能直接套用有限极限运算。"
    ],
    "function-limit": [
      "函数极限只看 x 靠近 a 时附近的输出。",
      "定义刻意排除 x = a，所以 f(a) 不参与。",
      "epsilon 控制输出误差，delta 控制输入距离。",
      "找到合适的 delta 后，整个去心输入区间都必须满足误差要求。",
      "聚点保证输入附近确实存在可以取到的定义域点。"
    ],
    "one-sided-laws": [
      "左侧来和右侧来是两条不同的路线。",
      "如果左右输出不同，双侧极限就不存在。",
      "0/0 只是直接代入失败，不一定表示极限不存在。",
      "约去公共因式后，可以在去心邻域继续计算。",
      "点值不能修补左右极限不一致的问题。"
    ],
    continuity: [
      "连续先要求函数在 a 真的有一个值。",
      "然后要求附近的去心极限存在。",
      "最后还要求极限与真实点值相等。",
      "可去间断只需把点值移到极限处就能修复。",
      "跳跃间断无论怎么改一个点值都无法修复。"
    ],
    "continuous-properties": [
      "连续函数可以做常见的加减乘除和复合。",
      "闭区间上的连续曲线会被上下界住。",
      "它还会真正取到最大值和最小值。",
      "连续外层的函数允许我们把极限放到内部。",
      "无穷趋势描述定义域或输出无限延伸，不是有限实数。"
    ],
    "derivative-definition": [
      "两个输入点先给出一条割线。",
      "让 h 变小，第二个点向第一个点靠近。",
      "差商的纵变化和横变化同时被计算。",
      "割线斜率逐渐稳定。",
      "有限极限给出该点的切线斜率。"
    ],
    "differentiability-continuity": [
      "连续只要求左右输出接到同一个高度。",
      "可导还要求左右斜率接到同一个值。",
      "|x| 在 0 点没有断开。",
      "但左侧斜率是 −1，右侧斜率是 1。",
      "因此连续不能推出可导。"
    ],
    "exp-trig-derivatives": [
      "单位圆上的点由 sin 和 cos 控制。",
      "角度 h 缩小时，sin h 与 h 的比例趋近 1。",
      "余弦的差商被整理成 sin²h。",
      "基础极限分别固定为 1、1 和 0。",
      "这些极限推出指数和三角函数的导数。"
    ],
    "derivative-rules": [
      "长和宽都可以独立变化。",
      "宽度变化带来第一块面积。",
      "高度变化带来第二块面积。",
      "乘积的导数收集两种贡献。",
      "商的导数必须保持分子的正确顺序。"
    ],
    "chain-rule": [
      "输入先经过内层机器。",
      "内层输出再经过外层机器。",
      "x 的变化先被内层速度放大。",
      "外层再按自己的速度改变结果。",
      "最终变化率等于两层速度相乘。"
    ],
    "inverse-derivative": [
      "原函数的点 (a,b) 对应逆函数点 (b,a)。",
      "图像关于 y=x 反射。",
      "横向变化和纵向变化互换。",
      "原切线斜率 m 变成 1/m。",
      "求导时必须把 a 与 b 正确匹配。"
    ],
    lhopital: [
      "分子和分母都靠近零或都无限增长。",
      "直接代入不能给出比值。",
      "先检查是否属于允许的不定式。",
      "检查附近可导和分母条件。",
      "导数商的极限给出原商极限。"
    ],
    "implicit-differentiation": [
      "圆上的 x 和 y 同时受方程约束。",
      "把 y 看成随 x 变化的 y(x)。",
      "对 y² 求导要乘 dy/dx。",
      "xy 同时需要乘积和链式法则。",
      "移项后就得到局部切线斜率。"
    ],
    "logarithmic-differentiation": [
      "原式包含多个乘除和幂。",
      "取对数把乘积变成加法。",
      "商变成减法，幂变成系数。",
      "对 lny 求导得到 y′/y。",
      "乘回 y 后得到原来的 y′。"
    ],
    "parametric-derivative": [
      "参数 t 同时决定水平与竖直位置。",
      "点沿曲线移动，速度有水平分量和竖直分量。",
      "图形斜率要比较两个分量。",
      "dy/dx 是竖直速度除水平速度。",
      "水平速度为零时可能出现竖直切线。"
    ],
    "monotonic-extrema": [
      "切线斜率为正时曲线上升。",
      "斜率为负时曲线下降。",
      "斜率为零给出驻点候选。",
      "左右符号翻转才形成峰或谷。",
      "闭区间端点和不可导点也要检查。"
    ],
    "derivative-tests": [
      "一阶导数符号显示先升后降或先降后升。",
      "二阶导数描述斜率本身在增加还是减少。",
      "正二阶导数使曲线像向上的碗。",
      "负二阶导数使曲线像向下的碗。",
      "二阶导数为零时必须换方法。"
    ],
    "curve-analysis": [
      "先确定定义域和截距。",
      "一阶导数符号画出增减方向。",
      "峰谷点给图形成型。",
      "二阶导数画出弯曲方向。",
      "端点和无穷趋势封住整张图。"
    ],
    "method-selection": [
      "复杂表达式先拆成结构树。",
      "最外层是商、积或复合。",
      "首条规则由最外层决定。",
      "内部结构继续点亮子规则。",
      "先选方法，再做代数计算。"
    ],
    "partial-derivatives": [
      "二维输入点有水平和竖直两个方向。",
      "固定 y 时只沿水平线查看函数。",
      "固定 x 时只沿竖直线查看函数。",
      "两个切片分别化成一元函数。",
      "偏导数记录两个坐标方向的变化率。"
    ],
    "directional-derivatives": [
      "从平面中的点选择一个方向。",
      "方向向量先归一化为单位长度。",
      "沿箭头构造一维路径 φ(t)。",
      "改变 t 表示沿方向移动真实距离。",
      "φ′(0) 就是该方向的变化率。"
    ]
  };

  const FONT = '13px "Noto Sans SC", "Microsoft YaHei UI", sans-serif';
  const SMALL = '11px "Noto Sans SC", "Microsoft YaHei UI", sans-serif';
  const MATH = '14px "Cambria Math", "Times New Roman", serif';
  function prefersReducedMotion() {
    return Boolean(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  function css(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function clearCanvas(canvas) {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(rect.width, 280);
    const height = Math.max(rect.height, 220);
    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    return { ctx, width, height };
  }

  const labelTranslations = {
    "两个集合": "Two sets",
    "A ∪ B：至少在一个集合中": "A ∪ B: in at least one set",
    "A ∩ B：重叠部分": "A ∩ B: overlap",
    "A ∖ B：删去 B": "A ∖ B: remove B",
    "(a, b)：两个端点都不取": "(a, b): both endpoints excluded",
    "[a, b)：左端取，右端不取": "[a, b): left included, right excluded",
    "[a, b]：两个端点都取": "[a, b]: both endpoints included",
    "端点是否填补，决定区间开闭": "Endpoint inclusion determines open or closed",
    "候选上界 M": "Candidate upper bound M",
    "sup = 最紧上界": "sup = least upper bound",
    "M 再低一点？": "Can M be lowered?",
    "直接距离": "direct distance",
    "绕行总长": "detour length",
    "直达 ≤ 绕行": "direct ≤ detour",
    "输入": "inputs",
    "输出": "outputs",
    "输入 x": "input x",
    "看输入会到哪里：像": "image: where inputs go",
    "反过来看谁落到这里：原像": "preimage: which inputs land here",
    "原像允许有多个输入": "a preimage may contain several inputs",
    "内层输出进入外层": "inner output enters outer function",
    "输出不满足外层定义域": "inner output is outside the outer domain",
    "两个输入撞到同一输出：不单射": "two inputs collide: not injective",
    "一一对应，反向也唯一：双射": "no collisions and no gaps: bijection",
    "√ 与分母同时检查": "check both the root and the denominator",
    "每个整数都能分到一个自然数编号": "every integer receives a natural-number label",
    "上下界一起收缩，振荡也被压到同一个极限": "matching bounds squeeze the oscillation to one limit",
    "f(a) 不参与": "f(a) does not participate",
    "左右两侧都被压进 ε 带": "both sides enter the epsilon band",
    "两侧不一致，双侧极限不存在": "one-sided values differ: no two-sided limit",
    "有定义": "f(a) exists",
    "有极限": "limit exists",
    "二者相等": "limit = f(a)",
    "点值回到极限：连续": "continuous: value matches",
    "极限存在，但点值偏离：不连续": "discontinuous: value differs",
    "闭区间上的连续函数取到最值；极限可以穿过连续外层": "a continuous function on a closed interval attains its extrema; limits pass through continuous outer functions",
    "共同斜率不存在：不可导": "no common slope: not differentiable",
    "函数图像没有断开：连续": "the graph stays connected: continuous",
    "f⁻¹ 的切线斜率是匹配点原斜率的倒数": "the inverse tangent slope is the reciprocal of the original slope",
    "新极限存在 ⇒ 原商同极限": "new limit exists ⇒ original quotient has that limit",
    "先确认条件是 0/0 或 ∞/∞": "first check for 0/0 or ∞/∞",
    "y=0 处公式失效，检查竖直切线": "formula fails at y=0; check the vertical tangent",
    "y 随 x 变化，每一项都要保留 y′": "y depends on x, so keep y′ in every differentiated term",
    "最后乘回 y，并检查 y>0": "multiply back by y and check y>0",
    "对数把乘除幂变成加减": "logarithms turn products and powers into sums"
  };

  function label(ctx, text, x, y, options = {}) {
    ctx.save();
    ctx.fillStyle = options.color || css("--color-text-soft");
    ctx.font = options.font || FONT;
    ctx.textAlign = options.align || "center";
    ctx.textBaseline = options.baseline || "middle";
    const mode = document.documentElement.dataset.languageMode;
    const renderedText = mode === "chinese" ? text : (labelTranslations[text] || text);
    ctx.fillText(renderedText, x, y, options.maxWidth || 220);
    ctx.restore();
  }

  function line(ctx, x1, y1, x2, y2, options = {}) {
    ctx.save();
    ctx.strokeStyle = options.color || css("--color-border-strong");
    ctx.lineWidth = options.width || 1.5;
    ctx.setLineDash(options.dash || []);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  }

  function dot(ctx, x, y, radius = 5, options = {}) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = options.fill || css("--color-primary");
    ctx.fill();
    if (options.stroke) {
      ctx.strokeStyle = options.stroke;
      ctx.lineWidth = options.width || 2;
      ctx.stroke();
    }
    ctx.restore();
  }

  function arrow(ctx, x1, y1, x2, y2, color) {
    line(ctx, x1, y1, x2, y2, { color, width: 2 });
    const angle = Math.atan2(y2 - y1, x2 - x1);
    line(ctx, x2, y2, x2 - 8 * Math.cos(angle - 0.55), y2 - 8 * Math.sin(angle - 0.55), { color, width: 2 });
    line(ctx, x2, y2, x2 - 8 * Math.cos(angle + 0.55), y2 - 8 * Math.sin(angle + 0.55), { color, width: 2 });
  }

  function roundedRect(ctx, x, y, width, height, radius, options = {}) {
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, radius);
    ctx.fillStyle = options.fill || css("--color-surface-muted");
    ctx.fill();
    ctx.strokeStyle = options.stroke || css("--color-border");
    ctx.lineWidth = options.width || 1;
    ctx.stroke();
    ctx.restore();
  }

  const drawers = {
    "set-operations"(ctx, w, h, t) {
      const cy = h * 0.49;
      const gap = 18 + 22 * t;
      const ax = w * 0.5 - gap;
      const bx = w * 0.5 + gap;
      const radius = Math.min(w, h) * 0.25;
      ctx.save();
      ctx.globalAlpha = 0.15;
      dot(ctx, ax, cy, radius + 24, { fill: css("--color-info") });
      dot(ctx, bx, cy, radius + 24, { fill: css("--color-warning") });
      ctx.restore();
      ctx.save();
      ctx.beginPath();
      ctx.arc(ax, cy, radius + 24, 0, Math.PI * 2);
      ctx.clip();
      ctx.globalAlpha = 0.34;
      dot(ctx, bx, cy, radius + 24, { fill: css("--color-primary") });
      ctx.restore();
      dot(ctx, ax, cy, radius + 24, { fill: "transparent", stroke: css("--color-info"), width: 2 });
      dot(ctx, bx, cy, radius + 24, { fill: "transparent", stroke: css("--color-warning"), width: 2 });
      label(ctx, "A", ax - 18, cy - radius - 3, { font: MATH });
      label(ctx, "B", bx + 18, cy - radius - 3, { font: MATH });
      label(ctx, t < 0.3 ? "两个集合" : t < 0.55 ? "A ∪ B：至少在一个集合中" : t < 0.8 ? "A ∩ B：重叠部分" : "A ∖ B：删去 B", w / 2, h - 20);
    },
    "number-intervals"(ctx, w, h, t) {
      const left = 55;
      const right = w - 45;
      const y = h * 0.48;
      const a = w * 0.35;
      const b = w * 0.68;
      line(ctx, left, y, right, y, { color: css("--color-border-strong"), width: 2 });
      line(ctx, a, y, b, y, { color: css("--color-primary"), width: 9 });
      dot(ctx, a, y, 7, { fill: t < 0.35 ? css("--color-surface") : css("--color-primary"), stroke: css("--color-primary") });
      dot(ctx, b, y, 7, { fill: t < 0.65 ? css("--color-surface") : css("--color-primary"), stroke: css("--color-primary") });
      const px = left + (right - left) * Math.min(1, t * 1.15);
      dot(ctx, px, y - 24, 5, { fill: css("--color-warning") });
      label(ctx, "a", a, y + 24, { font: MATH });
      label(ctx, "b", b, y + 24, { font: MATH });
      label(ctx, t < 0.35 ? "(a, b)：两个端点都不取" : t < 0.65 ? "[a, b)：左端取，右端不取" : t < 0.85 ? "[a, b]：两个端点都取" : "端点是否填补，决定区间开闭", w / 2, h - 18);
    },
    "bounds-supremum"(ctx, w, h, t) {
      const x0 = 45;
      const x1 = w - 35;
      const y = h * 0.68;
      line(ctx, x0, y, x1, y, { color: css("--color-border-strong"), width: 2 });
      for (let i = 0; i < 7; i += 1) {
        const x = x0 + 22 + i * 34;
        dot(ctx, x, y, 5, { fill: css("--color-info") });
      }
      const boundY = h * (0.20 + 0.23 * t);
      line(ctx, x0, boundY, x1, boundY, { color: css("--color-primary"), width: 2.5, dash: [6, 5] });
      label(ctx, "候选上界 M", x1 - 5, boundY - 14, { align: "right", color: css("--color-primary") });
      const boundX = x0 + 22 + 6 * 34;
      line(ctx, boundX, y - 12, boundX, y + 12, { color: css("--color-warning"), width: 3 });
      label(ctx, t > 0.72 ? "sup = 最紧上界" : "M 再低一点？", w / 2, h - 18, { color: t > 0.72 ? css("--color-primary") : css("--color-text-muted") });
    },
    "absolute-triangle"(ctx, w, h, t) {
      const ax = 55;
      const ay = h * 0.7;
      const bx = w * 0.57;
      const by = h * 0.28;
      const cx = w - 38;
      const cy = h * 0.62;
      line(ctx, ax, ay, cx, cy, { color: css("--color-primary"), width: 3 });
      line(ctx, ax, ay, bx, by, { color: css("--color-info"), width: 2.5 });
      line(ctx, bx, by, cx, cy, { color: css("--color-warning"), width: 2.5 });
      const p = Math.min(1, t * 1.2);
      dot(ctx, ax + (cx - ax) * p, ay + (cy - ay) * p, 6, { fill: css("--color-primary") });
      if (t > 0.5) {
        const q = (t - 0.5) * 2;
        if (q < 0.5) dot(ctx, ax + (bx - ax) * q * 2, ay + (by - ay) * q * 2, 5, { fill: css("--color-info") });
        else dot(ctx, bx + (cx - bx) * (q - 0.5) * 2, by + (cy - by) * (q - 0.5) * 2, 5, { fill: css("--color-warning") });
      }
      label(ctx, "直接距离", (ax + cx) / 2, ay + 28, { color: css("--color-primary") });
      label(ctx, "绕行总长", (ax + bx + cx) / 3, h * 0.18, { color: css("--color-text-muted") });
      label(ctx, "直达 ≤ 绕行", w / 2, h - 18);
    },
    "functions-images"(ctx, w, h, t) {
      const lx = w * 0.23;
      const rx = w * 0.77;
      const ys = [h * 0.27, h * 0.5, h * 0.73];
      const values = [0, 1, 4];
      label(ctx, "输入", lx, 22);
      label(ctx, "输出", rx, 22);
      ys.forEach((y, i) => {
        dot(ctx, lx, y, 8, { fill: css("--color-info") });
        label(ctx, String([-2, 0, 2][i]), lx - 20, y, { font: MATH });
        dot(ctx, rx, y, 8, { fill: css("--color-primary"), stroke: t > 0.5 ? css("--color-primary") : "" });
        label(ctx, String(values[i]), rx + 20, y, { font: MATH });
      });
      arrow(ctx, lx + 13, h * 0.27, rx - 13, h * 0.73, css("--color-primary"));
      arrow(ctx, lx + 13, h * 0.5, rx - 13, h * 0.27, css("--color-primary"));
      arrow(ctx, lx + 13, h * 0.73, rx - 13, h * 0.27, css("--color-primary"));
      label(ctx, t < 0.5 ? "看输入会到哪里：像" : t < 0.8 ? "反过来看谁落到这里：原像" : "原像允许有多个输入", w / 2, h - 16);
    },
    "composition-domain"(ctx, w, h, t) {
      roundedRect(ctx, w * 0.2, h * 0.35, 70, 70, 10);
      roundedRect(ctx, w * 0.55, h * 0.35, 70, 70, 10);
      label(ctx, "f", w * 0.2 + 35, h * 0.35 + 35, { font: MATH });
      label(ctx, "g", w * 0.55 + 35, h * 0.35 + 35, { font: MATH });
      line(ctx, w * 0.2 + 70, h * 0.35 + 35, w * 0.55, h * 0.35 + 35, { color: css("--color-primary"), width: 2 });
      const x = 35 + (w - 70) * t;
      const passed = t < 0.78;
      dot(ctx, x, h * 0.35 + 35, 6, { fill: passed ? css("--color-primary") : css("--color-danger") });
      label(ctx, "输入 x", 36, h * 0.2, { align: "left" });
      label(ctx, passed ? "内层输出进入外层" : "输出不满足外层定义域", w / 2, h - 20, { color: passed ? css("--color-text-muted") : css("--color-danger") });
    },
    "function-properties"(ctx, w, h, t) {
      const left = w * 0.24;
      const right = w * 0.76;
      const ys = [h * 0.3, h * 0.5, h * 0.7];
      ys.forEach((y, i) => {
        dot(ctx, left, y, 8, { fill: css("--color-info") });
        dot(ctx, right, y, 8, { fill: i === 1 ? css("--color-surface") : css("--color-primary"), stroke: css("--color-primary") });
      });
      const collision = t < 0.55;
      arrow(ctx, left + 12, ys[0], right - 12, ys[1], collision ? css("--color-danger") : css("--color-primary"));
      arrow(ctx, left + 12, ys[1], right - 12, ys[1], collision ? css("--color-danger") : css("--color-primary"));
      if (!collision) arrow(ctx, left + 12, ys[2], right - 12, ys[2], css("--color-primary"));
      label(ctx, collision ? "两个输入撞到同一输出：不单射" : "一一对应，反向也唯一：双射", w / 2, h - 20, { color: collision ? css("--color-danger") : css("--color-primary") });
    },
    "elementary-functions"(ctx, w, h, t) {
      const y = h * 0.5;
      const segments = [
        { a: 36, b: w * 0.33, text: "x < 1", ok: false },
        { a: w * 0.36, b: w * 0.66, text: "x = 2", ok: false },
        { a: w * 0.69, b: w - 28, text: "x ≥ 1 且 x ≠ 2", ok: true }
      ];
      line(ctx, 30, y, w - 25, y, { color: css("--color-border-strong"), width: 2 });
      segments.forEach((segment) => {
        line(ctx, segment.a, y, segment.b, y, { color: segment.ok ? css("--color-primary") : css("--color-danger"), width: 10 });
      });
      [w * 0.34, w * 0.67].forEach((x) => dot(ctx, x, y, 7, { fill: css("--color-surface"), stroke: css("--color-danger"), width: 2 }));
      const x = 30 + (w - 55) * t;
      dot(ctx, x, y - 25, 6, { fill: css("--color-warning") });
      label(ctx, "√ 与分母同时检查", w / 2, h - 20);
    },
    countability(ctx, w, h, t) {
      const values = ["0", "1", "−1", "2", "−2", "3", "−3"];
      const visible = Math.max(1, Math.ceil(t * values.length));
      const startX = 44;
      const gap = (w - 78) / (values.length - 1);
      values.forEach((value, index) => {
        const active = index < visible;
        dot(ctx, startX + gap * index, h * 0.46, 7, { fill: active ? css("--color-primary") : css("--color-border") });
        label(ctx, value, startX + gap * index, h * 0.46 + 26, { font: MATH, color: active ? css("--color-text") : css("--color-text-muted") });
        if (index < values.length - 1) line(ctx, startX + gap * index + 8, h * 0.46, startX + gap * (index + 1) - 8, h * 0.46, { color: active ? css("--color-primary-border") : css("--color-border") });
      });
      label(ctx, "每个整数都能分到一个自然数编号", w / 2, h - 18);
    },
    "sequence-epsilon-n"(ctx, w, h, t) {
      const left = 38;
      const right = w - 20;
      const baseline = h * 0.62;
      const eps = 0.32 - 0.22 * t;
      const n = 5 + Math.round(33 * t);
      line(ctx, left, baseline, right, baseline, { color: css("--color-border-strong"), width: 1.5 });
      ctx.save();
      ctx.fillStyle = css("--color-primary-soft");
      ctx.fillRect(left, baseline - 80 * eps, right - left, 160 * eps);
      ctx.restore();
      for (let i = 1; i <= 40; i += 1) {
        const value = 1 / i;
        const x = left + (right - left) * (i - 1) / 39;
        const y = baseline - value * 150;
        const inBand = value < eps && i >= n;
        dot(ctx, x, y, i >= n ? 3.3 : 2.3, { fill: inBand ? css("--color-primary") : css("--color-text-muted") });
      }
      line(ctx, left + (right - left) * (n - 1) / 39, 30, left + (right - left) * (n - 1) / 39, h - 30, { color: css("--color-warning"), width: 2, dash: [5, 4] });
      label(ctx, `ε 带变窄，N 向右移动：N = ${n}`, w / 2, h - 15, { color: css("--color-text-muted") });
    },
    "sequence-laws"(ctx, w, h, t) {
      const left = 36;
      const right = w - 20;
      const mid = h * 0.5;
      line(ctx, left, mid, right, mid, { color: css("--color-border-strong"), width: 1.5 });
      const envelope = 85 * (1 - 0.78 * t);
      line(ctx, left, mid - envelope, right, mid - envelope, { color: css("--color-info"), width: 2 });
      line(ctx, left, mid + envelope, right, mid + envelope, { color: css("--color-warning"), width: 2 });
      for (let i = 1; i <= 30; i += 1) {
        const x = left + (right - left) * (i - 1) / 29;
        const y = mid + (i % 2 ? -1 : 1) * envelope * (1 - i / 35);
        dot(ctx, x, y, 2.8, { fill: css("--color-primary") });
      }
      label(ctx, "上下界一起收缩，振荡也被压到同一个极限", w / 2, h - 18);
    },
    "divergence-infinity"(ctx, w, h, t) {
      const left = 38;
      const right = w - 20;
      const bottom = h - 40;
      const level = bottom - (50 + 130 * t);
      line(ctx, left, bottom, right, bottom, { color: css("--color-border-strong"), width: 1.5 });
      line(ctx, left, level, right, level, { color: css("--color-warning"), width: 2, dash: [6, 4] });
      label(ctx, "M", right - 4, level - 12, { align: "right", color: css("--color-warning"), font: MATH });
      for (let i = 1; i <= 10; i += 1) {
        const x = left + (right - left) * (i - 1) / 9;
        const y = bottom - Math.min(150, i * 13 * (0.3 + t));
        dot(ctx, x, y, i > 5 && t > 0.4 ? 4.5 : 3, { fill: i > 5 && t > 0.4 ? css("--color-primary") : css("--color-text-muted") });
      }
      label(ctx, "Bounded above would stop somewhere; +∞ keeps passing every M", w / 2, h - 14, { font: SMALL });
    },
    "function-limit"(ctx, w, h, t) {
      const left = 36;
      const right = w - 20;
      const midX = w * 0.52;
      const baseline = h * 0.62;
      line(ctx, left, baseline, right, baseline, { color: css("--color-border-strong"), width: 1.5 });
      const band = 54 * (1 - 0.55 * t);
      ctx.save();
      ctx.fillStyle = css("--color-primary-soft");
      ctx.fillRect(left, baseline - band, right - left, band * 2);
      ctx.restore();
      const delta = 100 * (1 - 0.72 * t);
      ctx.save();
      ctx.fillStyle = colorWithAlpha(css("--color-warning"), 0.12);
      ctx.fillRect(midX - delta, 25, delta * 2, h - 52);
      ctx.restore();
      const curve = (x) => baseline - Math.pow((x - midX) / 100, 2) * 65;
      ctx.beginPath();
      for (let x = left; x <= right; x += 4) {
        if (Math.abs(x - midX) < 4) continue;
        const y = curve(x);
        if (x === left) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = css("--color-primary");
      ctx.lineWidth = 2.5;
      ctx.stroke();
      dot(ctx, midX, curve(midX + 18), 5, { fill: css("--color-primary") });
      dot(ctx, midX - delta, curve(midX - delta), 4, { fill: css("--color-info") });
      dot(ctx, midX + delta, curve(midX + delta), 4, { fill: css("--color-info") });
      dot(ctx, midX, curve(midX), 7, { fill: css("--color-surface"), stroke: css("--color-danger"), width: 2 });
      label(ctx, "f(a) 不参与", midX, curve(midX) + 20, { color: css("--color-danger"), font: SMALL });
      label(ctx, "左右两侧都被压进 ε 带", w / 2, h - 16);
    },
    "one-sided-laws"(ctx, w, h, t) {
      const left = 36;
      const right = w - 20;
      const midX = w * 0.52;
      const y1 = h * 0.36;
      const y2 = h * 0.66;
      line(ctx, left, y1, midX - 8, y1, { color: css("--color-info"), width: 4 });
      line(ctx, midX + 8, y2, right, y2, { color: css("--color-warning"), width: 4 });
      dot(ctx, midX - 8, y1, 7, { fill: css("--color-surface"), stroke: css("--color-info"), width: 2 });
      dot(ctx, midX + 8, y2, 7, { fill: css("--color-surface"), stroke: css("--color-warning"), width: 2 });
      const approach = 20 + 90 * (1 - t);
      dot(ctx, midX - approach, y1, 5, { fill: css("--color-info") });
      dot(ctx, midX + approach, y2, 5, { fill: css("--color-warning") });
      label(ctx, "left → 0", w * 0.2, h - 20, { color: css("--color-info") });
      label(ctx, "right → 1", w * 0.8, h - 20, { color: css("--color-warning") });
      label(ctx, "两侧不一致，双侧极限不存在", w / 2, h - 18, { color: css("--color-danger"), font: SMALL });
    },
    continuity(ctx, w, h, t) {
      const cx = w * 0.5;
      const yBase = h * 0.54;
      const c = -50 + 100 * t;
      dot(ctx, w * 0.3, h * 0.2, 7, { fill: css("--color-primary") });
      dot(ctx, w * 0.5, h * 0.2, 7, { fill: t > 0.28 ? css("--color-primary") : css("--color-border-strong") });
      dot(ctx, w * 0.7, h * 0.2, 7, { fill: t > 0.82 ? css("--color-primary") : css("--color-border-strong") });
      label(ctx, "有定义", w * 0.24, h * 0.2 + 20, { font: SMALL, maxWidth: 64 });
      label(ctx, "有极限", w * 0.5, h * 0.2 + 20, { font: SMALL });
      label(ctx, "二者相等", w * 0.76, h * 0.2 + 20, { font: SMALL, maxWidth: 70 });
      line(ctx, w * 0.18, yBase, cx - 20, yBase, { color: css("--color-primary"), width: 3 });
      line(ctx, cx + 20, yBase, w * 0.82, yBase, { color: css("--color-primary"), width: 3 });
      dot(ctx, cx, yBase, 7, { fill: css("--color-surface"), stroke: css("--color-danger"), width: 2 });
      dot(ctx, cx, yBase + c / 2, 7, { fill: t > 0.82 ? css("--color-primary") : css("--color-danger") });
      label(ctx, t > 0.82 ? "点值回到极限：连续" : "极限存在，但点值偏离：不连续", w / 2, h - 18, { color: t > 0.82 ? css("--color-primary") : css("--color-danger") });
    },
    "continuous-properties"(ctx, w, h, t) {
      const left = 45;
      const right = w - 35;
      const bottom = h - 42;
      line(ctx, left, bottom, right, bottom, { color: css("--color-border-strong"), width: 1.5 });
      const curveY = (x) => h * 0.62 - Math.sin((x - left) / (right - left) * Math.PI) * 105;
      ctx.beginPath();
      for (let x = left; x <= right; x += 3) {
        const y = curveY(x);
        if (x === left) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = css("--color-primary");
      ctx.lineWidth = 3;
      ctx.stroke();
      const mx = (left + right) / 2;
      const my = curveY(mx);
      dot(ctx, mx, my, t > 0.4 ? 6 : 3, { fill: css("--color-warning") });
      label(ctx, "max", mx, my - 18, { color: css("--color-warning") });
      if (t > 0.68) {
        arrow(ctx, right - 30, h * 0.18, w * 0.78, h * 0.22, css("--color-info"));
        label(ctx, "x → ∞", w - 35, h * 0.14, { align: "right", color: css("--color-info"), font: MATH });
      }
      label(ctx, "闭区间上的连续函数取到最值；极限可以穿过连续外层", w / 2, h - 15, { font: SMALL });
    },
    "derivative-definition"(ctx, w, h, t) {
      const left = 45;
      const right = w - 25;
      const bottom = h - 45;
      const top = 28;
      const xMap = (x) => left + (x + 1) / 8 * (right - left);
      const yMap = (y) => bottom - y / 6 * (bottom - top);
      const f = (x) => x * x;
      line(ctx, left, bottom, right, bottom, { color: css("--color-border-strong") });
      line(ctx, left, top, left, bottom, { color: css("--color-border-strong") });
      ctx.beginPath();
      for (let x = -0.8; x <= 2.6; x += 0.03) {
        const px = xMap(x), py = yMap(f(x));
        if (x === -0.8) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = css("--color-primary");
      ctx.lineWidth = 2.5;
      ctx.stroke();
      const a = 1;
      const hValue = 2.2 * Math.pow(1 - t, 2) + 0.08;
      const p1x = xMap(a), p1y = yMap(f(a)), p2x = xMap(a + hValue), p2y = yMap(f(a + hValue));
      line(ctx, p1x, p1y, p2x, p2y, { color: css("--color-warning"), width: 2 });
      line(ctx, xMap(-0.8), yMap(f(a) + 2 * a * (-0.8 - a)), xMap(2.5), yMap(f(a) + 2 * a * (2.5 - a)), { color: css("--color-primary"), width: 2, dash: [6, 4] });
      dot(ctx, p1x, p1y, 6, { fill: css("--color-text") });
      dot(ctx, p2x, p2y, 5, { fill: css("--color-warning") });
      label(ctx, `h = ${hValue.toFixed(2)}`, p2x + 15, p2y - 10, { color: css("--color-warning"), font: SMALL });
      label(ctx, `割线斜率 = ${(2 * a + hValue).toFixed(2)}`, w / 2, h - 16);
    },
    "differentiability-continuity"(ctx, w, h, t) {
      const left = 40, right = w - 30, midX = w / 2, midY = h * 0.58;
      line(ctx, left, midY, right, midY, { color: css("--color-border-strong") });
      line(ctx, midX, 24, midX, h - 35, { color: css("--color-border-strong") });
      line(ctx, left, midY + 60, midX, midY, { color: css("--color-info"), width: 4 });
      line(ctx, midX, midY, right, midY - 60, { color: css("--color-warning"), width: 4 });
      dot(ctx, midX, midY, 7, { fill: css("--color-primary") });
      const off = 10 + 95 * (1 - t);
      dot(ctx, midX - off, midY + off * 0.63, 5, { fill: css("--color-info") });
      dot(ctx, midX + off, midY - off * 0.63, 5, { fill: css("--color-warning") });
      label(ctx, "left slope −1", midX - 85, midY + 48, { color: css("--color-info"), font: SMALL });
      label(ctx, "right slope +1", midX + 85, midY - 48, { color: css("--color-warning"), font: SMALL });
      label(ctx, t > 0.72 ? "共同斜率不存在：不可导" : "函数图像没有断开：连续", w / 2, h - 14, { color: t > 0.72 ? css("--color-danger") : css("--color-text-muted") });
    },
    "exp-trig-derivatives"(ctx, w, h, t) {
      const cx = w * 0.34, cy = h * 0.48, radius = Math.min(w, h) * 0.27;
      const angle = 0.06 + 1.15 * Math.pow(1 - t, 1.4);
      line(ctx, cx - radius - 18, cy, cx + radius + 20, cy, { color: css("--color-border-strong") });
      line(ctx, cx, cy - radius - 18, cx, cy + radius + 20, { color: css("--color-border-strong") });
      dot(ctx, cx, cy, radius, { fill: "transparent", stroke: css("--color-border-strong"), width: 2 });
      const px = cx + radius * Math.cos(angle), py = cy - radius * Math.sin(angle);
      line(ctx, cx, cy, px, py, { color: css("--color-primary"), width: 2.5 });
      line(ctx, cx, cy, px, cy, { color: css("--color-info"), width: 3 });
      line(ctx, px, cy, px, py, { color: css("--color-warning"), width: 3 });
      dot(ctx, px, py, 5, { fill: css("--color-text") });
      label(ctx, "cos h", (cx + px) / 2, cy + 18, { color: css("--color-info"), font: SMALL });
      label(ctx, "sin h", px + 12, (cy + py) / 2, { color: css("--color-warning"), font: SMALL });
      const ratio = angle === 0 ? 1 : Math.sin(angle) / angle;
      label(ctx, `sin h / h = ${ratio.toFixed(3)} → 1`, w * 0.78, h * 0.34, { font: MATH });
      label(ctx, "(eˣ)′ = eˣ； (sin x)′ = cos x； (cos x)′ = −sin x", w * 0.72, h * 0.62, { font: SMALL });
    },
    "derivative-rules"(ctx, w, h, t) {
      const x = w * 0.17, y = h * 0.25, baseW = w * 0.44, baseH = h * 0.34;
      const dw = baseW * 0.18 * t, dh = baseH * 0.18 * t;
      roundedRect(ctx, x, y + dh, baseW, baseH - dh, 2, { fill: css("--color-primary-soft"), stroke: css("--color-primary") });
      ctx.save();
      ctx.fillStyle = colorWithAlpha(css("--color-info"), 0.35);
      ctx.fillRect(x, y, dw, baseH);
      ctx.fillStyle = colorWithAlpha(css("--color-warning"), 0.35);
      ctx.fillRect(x, y, baseW, dh);
      ctx.restore();
      label(ctx, "f", x + baseW * 0.25, y + baseH * 0.55, { font: MATH });
      label(ctx, "g", x + baseW * 0.78, y + baseH * 0.75, { font: MATH });
      label(ctx, "f′g", x + baseW + 35, y + baseH * 0.35, { align: "left", color: css("--color-info"), font: SMALL });
      label(ctx, "fg′", x + baseW + 35, y + baseH * 0.68, { align: "left", color: css("--color-warning"), font: SMALL });
      label(ctx, "(fg)′ = f′g + fg′", w / 2, h - 15, { font: MATH });
    },
    "chain-rule"(ctx, w, h, t) {
      const x0 = 45, y = h * 0.5;
      roundedRect(ctx, x0, y - 38, 80, 76, 10, { fill: css("--color-primary-soft"), stroke: css("--color-primary") });
      roundedRect(ctx, w * 0.58, y - 38, 80, 76, 10, { fill: css("--color-info-soft"), stroke: css("--color-info") });
      label(ctx, "u = 1+x²", x0 + 40, y, { font: MATH });
      label(ctx, "y = u⁵", w * 0.58 + 40, y, { font: MATH });
      arrow(ctx, x0 + 80, y, w * 0.58 - 5, y, css("--color-primary"));
      const tokenX = x0 + (w * 0.58 - x0) * t;
      dot(ctx, tokenX, y, 6, { fill: css("--color-warning") });
      label(ctx, "x → u", x0 + 25, y - 52, { color: css("--color-primary"), font: SMALL });
      label(ctx, "2x", (x0 + 80 + w * 0.58) / 2, y - 18, { font: MATH });
      label(ctx, "5u⁴", w * 0.58 + 40, y - 52, { color: css("--color-info"), font: SMALL });
      label(ctx, "dy/dx = 5u⁴ · 2x", w / 2, h - 16, { font: MATH });
    },
    "inverse-derivative"(ctx, w, h, t) {
      const left = 35, bottom = h - 35, size = Math.min(w - 60, h - 55);
      line(ctx, left, bottom, left + size, bottom, { color: css("--color-border-strong") });
      line(ctx, left, bottom, left, bottom - size, { color: css("--color-border-strong") });
      line(ctx, left, bottom, left + size, bottom - size, { color: css("--color-border"), dash: [5, 5] });
      const p = 0.35 + 0.45 * t;
      const ax = left + size * p, ay = bottom - size * Math.pow(p, 2);
      const bx = left + size * Math.pow(p, 2), by = bottom - size * p;
      line(ctx, ax - 30, ay + 15, ax + 30, ay - 15, { color: css("--color-primary"), width: 2 });
      line(ctx, bx - 15, by + 30, bx + 15, by - 30, { color: css("--color-info"), width: 2 });
      dot(ctx, ax, ay, 5, { fill: css("--color-primary") });
      dot(ctx, bx, by, 5, { fill: css("--color-info") });
      label(ctx, "(a,b)", ax + 18, ay - 12, { align: "left", color: css("--color-primary"), font: SMALL });
      label(ctx, "(b,a)", bx + 18, by + 16, { align: "left", color: css("--color-info"), font: SMALL });
      label(ctx, "slope m", ax - 10, ay - 22, { color: css("--color-primary"), font: SMALL });
      label(ctx, "slope 1/m", bx + 5, by - 32, { color: css("--color-info"), font: SMALL });
      label(ctx, "f⁻¹ 的切线斜率是匹配点原斜率的倒数", w / 2, h - 13, { font: SMALL });
    },
    lhopital(ctx, w, h, t) {
      const y1 = h * 0.27, y2 = h * 0.48;
      const shrink = 1 - 0.72 * t;
      line(ctx, 45, y1, w - 35, y1, { color: css("--color-border"), width: 8 });
      line(ctx, 45, y2, 45 + (w - 80) * shrink, y2, { color: css("--color-border"), width: 8 });
      label(ctx, "f(x) → 0 or ∞", w / 2, y1 - 18, { font: SMALL });
      label(ctx, "g(x) → 0 or ∞", (45 + w - 35) / 2, y2 + 18, { font: SMALL });
      arrow(ctx, w / 2, y2 + 35, w / 2, h * 0.68, css("--color-primary"));
      label(ctx, "check form", w / 2, h * 0.71, { color: css("--color-primary"), font: SMALL });
      label(ctx, "then compare f′/g′", w / 2, h * 0.82, { font: MATH });
      label(ctx, t > 0.72 ? "新极限存在 ⇒ 原商同极限" : "先确认条件是 0/0 或 ∞/∞", w / 2, h - 14, { font: SMALL });
    },
    "implicit-differentiation"(ctx, w, h, t) {
      const cx = w * 0.48, cy = h * 0.49, radius = Math.min(w, h) * 0.29;
      dot(ctx, cx, cy, radius, { fill: "transparent", stroke: css("--color-border-strong"), width: 2 });
      const angle = 0.35 + 2.1 * t;
      const x = cx + radius * Math.cos(angle), y = cy - radius * Math.sin(angle);
      const tangent = -Math.cos(angle) / Math.sin(angle);
      const dx = radius * 0.55;
      line(ctx, x - dx, y - tangent * dx, x + dx, y + tangent * dx, { color: css("--color-primary"), width: 2.5 });
      dot(ctx, x, y, 6, { fill: css("--color-warning") });
      line(ctx, cx, cy, x, y, { color: css("--color-info"), width: 1.5 });
      label(ctx, "x² + y² = r²", w * 0.68, h * 0.22, { align: "left", font: MATH });
      label(ctx, "d(y²)/dx = 2y·y′", w * 0.68, h * 0.38, { align: "left", font: MATH });
      label(ctx, "y′ = −x/y", w * 0.68, h * 0.54, { align: "left", font: MATH });
      label(ctx, t > 0.75 ? "y=0 处公式失效，检查竖直切线" : "y 随 x 变化，每一项都要保留 y′", w / 2, h - 15, { font: SMALL });
    },
    "logarithmic-differentiation"(ctx, w, h, t) {
      const y = h * 0.42;
      const left = 35, mid = w * 0.47, right = w * 0.78;
      roundedRect(ctx, left, y - 28, w * 0.34, 56, 8, { fill: css("--color-surface-muted"), stroke: css("--color-border") });
      label(ctx, "A · B / C", left + w * 0.17, y, { font: MATH });
      arrow(ctx, left + w * 0.34 + 5, y, mid - 8, y, css("--color-primary"));
      roundedRect(ctx, mid, y - 28, w * 0.34, 56, 8, { fill: css("--color-primary-soft"), stroke: css("--color-primary") });
      label(ctx, "ln A + ln B − ln C", mid + w * 0.17, y, { font: SMALL });
      arrow(ctx, mid + w * 0.17, y + 32, mid + w * 0.17, h * 0.68, css("--color-warning"));
      label(ctx, "y′/y = sum of log derivatives", w / 2, h * 0.73, { font: SMALL });
      label(ctx, "y′ = y × log derivative", w / 2, h * 0.84, { font: MATH });
      label(ctx, t > 0.72 ? "最后乘回 y，并检查 y>0" : "对数把乘除幂变成加减", w / 2, h - 14, { font: SMALL });
    },
    "parametric-derivative"(ctx, w, h, t) {
      const left = 42, bottom = h - 38, scaleX = (w - 75) / 5, scaleY = (h - 75) / 6;
      line(ctx, left, bottom, w - 25, bottom, { color: css("--color-border-strong") });
      line(ctx, left, 25, left, bottom, { color: css("--color-border-strong") });
      const paramT = -1.6 + 3.2 * t;
      const curve = (tt) => ({ x: left + (tt + 1.7) * scaleX, y: bottom - (tt + 2) * scaleY });
      ctx.beginPath();
      for (let tt = -1.8; tt <= 1.8; tt += 0.03) {
        const p = curve(tt);
        if (tt === -1.8) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
      }
      ctx.strokeStyle = css("--color-primary");
      ctx.lineWidth = 2.5;
      ctx.stroke();
      const p = curve(paramT);
      const slope = (3 * paramT * paramT - 3) / (2 * paramT);
      const tx = 48, ty = slope * 12;
      line(ctx, p.x - tx, p.y - ty, p.x + tx, p.y + ty, { color: css("--color-warning"), width: 2 });
      dot(ctx, p.x, p.y, 6, { fill: css("--color-warning") });
      label(ctx, `t = ${paramT.toFixed(1)}`, p.x + 12, p.y - 12, { align: "left", font: MATH });
      label(ctx, "dy/dx = (dy/dt)/(dx/dt)", w / 2, h - 14, { font: SMALL });
    },
    "monotonic-extrema"(ctx, w, h, t) {
      const left = 38, right = w - 25, bottom = h - 42, top = 24;
      const xMap = (x) => left + (x + 2.3) / 4.6 * (right - left);
      const yMap = (y) => bottom - (y + 3) / 6 * (bottom - top);
      const f = (x) => x ** 3 - 3 * x;
      line(ctx, left, bottom, right, bottom, { color: css("--color-border-strong") });
      ctx.beginPath();
      for (let x = -2.2; x <= 2.2; x += 0.03) {
        const px = xMap(x), py = yMap(f(x));
        if (x === -2.2) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = css("--color-primary");
      ctx.lineWidth = 2.5;
      ctx.stroke();
      dot(ctx, xMap(-1), yMap(2), t > 0.45 ? 6 : 3, { fill: css("--color-warning") });
      dot(ctx, xMap(1), yMap(-2), t > 0.7 ? 6 : 3, { fill: css("--color-info") });
      label(ctx, "f′ > 0", xMap(-1.6), yMap(0.4), { color: css("--color-primary"), font: SMALL });
      label(ctx, "f′ < 0", xMap(0), yMap(-0.2), { color: css("--color-danger"), font: SMALL });
      label(ctx, "f′ > 0", xMap(1.45), yMap(0.4), { color: css("--color-primary"), font: SMALL });
      label(ctx, "sign changes create candidates", w / 2, h - 14, { font: SMALL });
    },
    "derivative-tests"(ctx, w, h, t) {
      const y = h * 0.42;
      line(ctx, 38, y, w - 24, y, { color: css("--color-border-strong"), width: 2 });
      [-1, 1].forEach((x, index) => {
        const px = w * (0.34 + index * 0.31);
        dot(ctx, px, y, 6, { fill: index === 0 ? css("--color-warning") : css("--color-info") });
        label(ctx, index === 0 ? "f′=0" : "f′=0", px, y - 18, { font: SMALL });
        label(ctx, index === 0 ? "left + → right −" : "left − → right +", px, y + 25, { font: SMALL });
      });
      label(ctx, "max", w * 0.34, h * 0.18, { color: css("--color-warning"), font: MATH });
      label(ctx, "min", w * 0.65, h * 0.18, { color: css("--color-info"), font: MATH });
      if (t > 0.55) {
        ctx.beginPath();
        ctx.arc(w * 0.52, h * 0.74, 38, Math.PI, 2 * Math.PI);
        ctx.strokeStyle = css("--color-primary");
        ctx.lineWidth = 2.5;
        ctx.stroke();
        label(ctx, "f″ > 0", w * 0.52, h * 0.88, { color: css("--color-primary"), font: SMALL });
      }
      if (t > 0.8) label(ctx, "f″=0 ⇒ no conclusion", w / 2, h - 12, { color: css("--color-danger"), font: SMALL });
    },
    "curve-analysis"(ctx, w, h, t) {
      const left = 38, right = w - 24, bottom = h - 38, top = 24;
      const xMap = (x) => left + (x + 2.2) / 4.4 * (right - left);
      const yMap = (y) => bottom - (y + 18) / 34 * (bottom - top);
      const f = (x) => x ** 3 - 3 * x;
      line(ctx, left, yMap(0), right, yMap(0), { color: css("--color-border"), width: 1 });
      line(ctx, xMap(0), top, xMap(0), bottom, { color: css("--color-border"), width: 1 });
      ctx.beginPath();
      for (let x = -1.8; x <= 1.8; x += 0.025) {
        const px = xMap(x), py = yMap(f(x));
        if (x === -1.8) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = css("--color-primary");
      ctx.lineWidth = 2.5;
      ctx.stroke();
      if (t > 0.2) [-Math.sqrt(3), 0, Math.sqrt(3)].forEach((x) => dot(ctx, xMap(x), yMap(0), 4, { fill: css("--color-warning") }));
      if (t > 0.45) {
        dot(ctx, xMap(-1), yMap(2), 6, { fill: css("--color-info") });
        dot(ctx, xMap(1), yMap(-2), 6, { fill: css("--color-info") });
      }
      if (t > 0.68) {
        label(ctx, "concave", xMap(-1.35), yMap(3.8), { color: css("--color-danger"), font: SMALL });
        label(ctx, "convex", xMap(1.15), yMap(3.8), { color: css("--color-primary"), font: SMALL });
      }
      if (t > 0.86) label(ctx, "end behavior: −∞ to +∞", w / 2, h - 12, { font: SMALL });
    },
    "method-selection"(ctx, w, h, t) {
      const cx = w / 2, rootY = h * 0.2;
      roundedRect(ctx, cx - 58, rootY - 22, 116, 44, 8, { fill: css("--color-primary-soft"), stroke: css("--color-primary") });
      label(ctx, "outermost: quotient", cx, rootY, { font: SMALL });
      const nodes = [
        { x: w * 0.27, label: "product", color: css("--color-info") },
        { x: w * 0.52, label: "chain", color: css("--color-warning") },
        { x: w * 0.76, label: "domain", color: css("--color-primary") }
      ];
      nodes.forEach((node, index) => {
        const active = t > 0.22 * (index + 1);
        line(ctx, cx, rootY + 22, node.x, h * 0.49 - 20, { color: active ? node.color : css("--color-border"), width: 2 });
        roundedRect(ctx, node.x - 45, h * 0.49 - 20, 90, 40, 8, { fill: active ? css("--color-surface-muted") : css("--color-surface"), stroke: active ? node.color : css("--color-border") });
        label(ctx, node.label, node.x, h * 0.49, { color: active ? node.color : css("--color-text-muted"), font: SMALL });
      });
      label(ctx, "name the structure before calculating", w / 2, h - 16);
    },
    "partial-derivatives"(ctx, w, h, t) {
      const cx = w * 0.5, cy = h * 0.47, size = Math.min(w * 0.62, h * 0.6);
      ctx.fillStyle = colorWithAlpha(css("--color-primary"), 0.12);
      ctx.fillRect(cx - size / 2, cy - size / 2, size, size);
      line(ctx, cx - size / 2, cy, cx + size / 2, cy, { color: css("--color-info"), width: 3 });
      line(ctx, cx, cy - size / 2, cx, cy + size / 2, { color: css("--color-warning"), width: 3 });
      dot(ctx, cx, cy, 6, { fill: css("--color-text") });
      label(ctx, "(a,b)", cx + 15, cy - 12, { align: "left", font: MATH });
      label(ctx, "y fixed", cx + size * 0.25, cy + 22, { color: css("--color-info"), font: SMALL });
      label(ctx, "x fixed", cx + 14, cy - size * 0.25, { align: "left", color: css("--color-warning"), font: SMALL });
      label(ctx, "∂f/∂x: horizontal slice", w * 0.25, h * 0.15, { font: SMALL });
      label(ctx, "∂f/∂y: vertical slice", w * 0.75, h * 0.15, { font: SMALL });
      label(ctx, t > 0.72 ? "two coordinate directions, two rates" : "change one variable, freeze the other", w / 2, h - 14, { font: SMALL });
    },
    "directional-derivatives"(ctx, w, h, t) {
      const cx = w * 0.45, cy = h * 0.48, length = Math.min(w * 0.31, h * 0.34);
      line(ctx, 42, cy, w - 28, cy, { color: css("--color-border-strong") });
      line(ctx, cx, 26, cx, h - 38, { color: css("--color-border-strong") });
      dot(ctx, cx, cy, 6, { fill: css("--color-text") });
      const ux = 1 / Math.sqrt(2), uy = 1 / Math.sqrt(2);
      arrow(ctx, cx, cy, cx + ux * length, cy - uy * length, css("--color-primary"));
      const travel = Math.min(1, t * 1.15);
      dot(ctx, cx + ux * length * travel, cy - uy * length * travel, 6, { fill: css("--color-warning") });
      label(ctx, "u=(1/√2,1/√2)", cx + ux * length + 8, cy - uy * length - 10, { align: "left", font: SMALL });
      label(ctx, "φ(t)=f(a+tu₁,b+tu₂)", w / 2, h - 34, { font: SMALL });
      label(ctx, "Dᵤf=φ′(0)", w / 2, h - 14, { font: MATH });
    }
  };

  function colorWithAlpha(color, alpha) {
    const probe = document.createElement("canvas").getContext("2d");
    probe.fillStyle = color;
    const normalized = probe.fillStyle;
    if (normalized.startsWith("#")) {
      const hex = normalized.slice(1);
      const full = hex.length === 3 ? hex.split("").map((char) => char + char).join("") : hex;
      return `rgba(${parseInt(full.slice(0, 2), 16)}, ${parseInt(full.slice(2, 4), 16)}, ${parseInt(full.slice(4, 6), 16)}, ${alpha})`;
    }
    return color;
  }

  function createController(canvas, type) {
    let frame = 0;
    let value = 0;
    let raf = 0;
    let playing = false;
    let startedAt = 0;
    let startValue = value;
    const duration = 3600;
    const figure = canvas.closest(".micro-animation");
    const captionEn = figure && figure.querySelector("[data-micro-caption-en]");
    const captionZh = figure && figure.querySelector("[data-micro-caption-zh]");
    const progress = figure && figure.querySelector("[data-micro-progress]");
    const playButton = figure && figure.querySelector('[data-micro-action="play"]');
    let englishCaptions = [];
    try {
      englishCaptions = figure && figure.dataset.captionEn ? JSON.parse(figure.dataset.captionEn) : [];
    } catch {
      englishCaptions = [];
    }

    function render() {
      const { ctx, width, height } = clearCanvas(canvas);
      const drawer = window.MFC_CUSTOM_ANIMATIONS?.[type] || drawers[type];
      if (drawer) drawer(ctx, width, height, value);
      const captionIndex = Math.min(4, Math.round(value * 4));
      if (captionEn) captionEn.textContent = englishCaptions[captionIndex] || "";
      if (captionZh) captionZh.textContent = captions[type] ? captions[type][captionIndex] : "";
      if (progress) progress.textContent = `${captionIndex + 1} / 5`;
      if (playButton) playButton.textContent = playing ? "Pause · 暂停" : value >= 0.999 ? "Replay · 重播" : "Play · 播放";
      const englishCaption = englishCaptions[captionIndex] || "Mathematical concept animation";
      const chineseCaption = captions[type] ? captions[type][captionIndex] : "";
      canvas.setAttribute("aria-label", `${englishCaption} ${chineseCaption}`.trim());
    }

    function stop() {
      cancelAnimationFrame(raf);
      playing = false;
      frame = Math.max(0, Math.min(4, Math.round(value * 4)));
      value = frame / 4;
      render();
    }

    function tick(timestamp) {
      if (!playing) return;
      const elapsed = (timestamp - startedAt) / duration;
      value = Math.min(1, startValue + (1 - startValue) * elapsed);
      render();
      if (value < 1) raf = requestAnimationFrame(tick);
      else {
        playing = false;
        frame = 4;
        value = 1;
        render();
      }
    }

    function play() {
      if (prefersReducedMotion()) {
        frame = 4;
        value = 1;
        playing = false;
        render();
        return;
      }
      if (value >= 0.999) {
        frame = 0;
        value = 0;
      }
      startValue = value;
      startedAt = performance.now();
      playing = true;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
      render();
    }

    function replay() {
      frame = 0;
      value = 0;
      play();
    }

    function step(direction) {
      stop();
      frame = Math.max(0, Math.min(4, frame + direction));
      value = frame / 4;
      render();
    }

    function setFrame(index) {
      stop();
      frame = Math.max(0, Math.min(4, Number(index) || 0));
      value = frame / 4;
      render();
    }

    if (figure) {
      const actions = {
        play: () => playing ? stop() : play(),
        replay,
        prev: () => step(-1),
        next: () => step(1)
      };
      figure.querySelectorAll("[data-micro-action]").forEach((button) => {
        button.addEventListener("click", () => actions[button.dataset.microAction]());
      });
    }

    const resizeObserver = new ResizeObserver(render);
    resizeObserver.observe(canvas);
    document.addEventListener("mfc:themechange", render);
    document.addEventListener("mfc:languagechange", render);
    if (prefersReducedMotion()) value = 0;
    render();
    return {
      play,
      replay,
      pause: stop,
      setFrame,
      render,
      getFrame: () => playing ? Math.round(value * 4) : frame,
      isPlaying: () => playing
    };
  }

  function mountAll(scope = document) {
    scope.querySelectorAll("[data-micro-animation] canvas").forEach((canvas) => {
      if (canvas.dataset.ready) return;
      const lesson = canvas.closest("details.lesson");
      if (lesson && !lesson.open) return;
      canvas.dataset.ready = "true";
      const type = canvas.closest("[data-micro-animation]").dataset.microAnimation;
      canvas._microController = createController(canvas, type);
    });
  }

  function bindLesson(details) {
    const animation = details.querySelector("[data-micro-animation] canvas");
    if (!animation) return;
    const activateOpenStep = () => {
      mountAll(details);
      if (!animation._microController) return;
      const openStep = [...details.querySelectorAll(".qa-step")].findIndex((step) => step.open);
      animation._microController.setFrame(openStep >= 0 ? openStep : 0);
    };
    details.addEventListener("toggle", () => {
      if (details.open) activateOpenStep();
    });
    details.querySelectorAll(".qa-step").forEach((step, index) => {
      step.addEventListener("toggle", () => {
        if (!step.open || !details.open) return;
        mountAll(details);
        if (animation._microController) animation._microController.setFrame(index);
      });
    });
    if (details.open) activateOpenStep();
  }

  function setFrame(details, index) {
    const animation = details.querySelector("[data-micro-animation] canvas");
    if (animation && animation._microController) animation._microController.setFrame(index);
  }

  function escapeAttribute(value) {
    return String(value || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  }

  function normalizeExplanation(value) {
    const paragraphs = Array.isArray(value) ? value : [value];
    return paragraphs.map((paragraph) => String(paragraph || "").trim()).filter(Boolean);
  }

  function firstExplanation(...candidates) {
    for (const candidate of candidates) {
      const paragraphs = normalizeExplanation(candidate);
      if (paragraphs.length) return paragraphs;
    }
    return [];
  }

  function buildWeekContent(weekId, lessons, guideSource, englishPack = {}) {
    const merged = lessons.map((lesson) => {
      const guide = guideSource ? guideSource[lesson.id] : lesson;
      if (!guide) return lesson;
      const english = englishPack[lesson.id] || {};
      const qaSteps = guide.qaSteps.map((step, index) => ({
        ...step,
        hintEn: english.qa?.[index]?.hintEn || step.hintEn || "Pause and answer before revealing the explanation.",
        answerEn: english.qa?.[index]?.answerEn || step.answerEn || step.questionEn
      }));
      const explanationEn = firstExplanation(
        english.explanationEn,
        guide.explanationEn,
        guide.enSummary,
        lesson.enSummary,
        guide.retellEn,
        lesson.retellEn
      );
      const explanationZh = firstExplanation(
        english.explanationZh,
        guide.explanationZh,
        guide.zh,
        lesson.explanationZh,
        lesson.zh,
        guide.retellZh,
        lesson.retellZh,
        guide.qaSteps?.[0]?.answerZh,
        lesson.qaSteps?.[0]?.answerZh
      );
      return {
        ...lesson,
        ...guide,
        theorem: guide.theorem || lesson.theorem || null,
        insight: guide.insight || lesson.insight || "",
        numericProbe: guide.numericProbe || lesson.numericProbe || null,
        explanationEn: explanationEn.length ? explanationEn : ["English explanation pending."],
        explanationZh: explanationZh.length ? explanationZh : ["中文讲解待补充。"],
        networkGoalEn: english.networkGoalEn || guide.networkGoalEn || "",
        networkRiskEn: english.networkRiskEn || guide.networkRiskEn || "",
        animationFramesEn: english.framesEn || guide.animationFramesEn || [],
        qaSteps,
        counterexampleEn: english.counterexampleEn || guide.counterexampleEn || {},
        checkEn: english.checkEn || guide.checkEn || guide.check || "",
        checkAnswerEn: english.checkAnswerEn || guide.checkAnswerEn || guide.answer || ""
      };
    });
    const content = { weekId, lessons: merged, stations: [] };
    window.MFC_WEEK_CONTENT = content;
    return content;
  }

  function translationDetails(zhMarkup, summary = "中文解释 · Chinese support") {
    if (!zhMarkup) return "";
    return `<details class="translation-zh" data-translation><summary>${summary}</summary><div class="translation-body" lang="zh-CN">${zhMarkup}</div></details>`;
  }

  function renderSymbols(symbols) {
    if (!Array.isArray(symbols) || !symbols.length) return "";
    return `<div class="symbol-decoder"><span class="language-label">Symbols / 符号</span><div class="symbol-grid">${symbols.map(([symbol, english, chinese, example]) => `
      <div class="symbol-row"><strong>${symbol}</strong><span lang="en">${english}</span><span lang="zh-CN">${chinese}</span><code>${example}</code></div>
    `).join("")}</div></div>`;
  }

  function renderBiPair(zhHtml, enHtml, extraClass = "") {
    return `<div class="bi-pair ${extraClass}" data-bi-pair>
      <div class="bi-zh language-zh" lang="zh-CN">${zhHtml}</div>
      <div class="bi-en source-en" lang="en">${enHtml}</div>
    </div>`;
  }

  function renderTheoremCard(lesson) {
    const theorem = lesson.theorem;
    const statementZh = theorem?.statementZh || lesson.retellZh || lesson.networkGoal || "核心定义";
    const statementEn = theorem?.statementEn || [lesson.english, lesson.enSummary].filter(Boolean).join(" ");
    const hypotheses = theorem?.hypotheses?.length
      ? theorem.hypotheses
      : (lesson.symbols || []).slice(0, 3).map(([symbol, english, chinese]) => `${symbol}: ${chinese || english}`);
    const formula = theorem?.formula || (
      lesson.qaSteps?.[0]?.formula && !/[\u3400-\u9fff]/.test(lesson.qaSteps[0].formula)
        ? lesson.qaSteps[0].formula
        : ""
    );
    const badgeSource = String(lesson.source || "").split(";")[0].trim();
    const proofLink = lesson.proof?.entryHref
      ? `<a class="button secondary small theorem-proof-link" href="${lesson.proof.entryHref}" target="_blank" rel="noopener">看证明 · ${lesson.proof.modes.exam.stepIds.length} 步</a>`
      : "";
    return `<section class="theorem-card" data-theorem-card aria-label="Theorem / 定理">
      <div class="theorem-card-heading">
        <span class="language-label">Theorem / 定理</span>
        ${badgeSource ? `<span class="badge">${badgeSource}</span>` : ""}
      </div>
      ${renderBiPair(`<p>${statementZh}</p>`, `<p>${statementEn}</p>`)}
      <div class="theorem-hypotheses">
        <strong>Hypotheses / 前提</strong>
        <ul class="hypothesis-list">${hypotheses.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      ${formula ? `<div class="theorem-formula" lang="en">${formula}</div>` : ""}
      ${theorem?.oneLineZh ? `<p class="theorem-one-line language-zh" lang="zh-CN">${theorem.oneLineZh}</p>` : ""}
      ${proofLink ? `<div class="theorem-proof-actions">${proofLink}</div>` : ""}
    </section>`;
  }

  function renderNumericProbe(lesson) {
    if (!lesson.numericProbe?.zh && !lesson.numericProbe?.en) return "";
    return `<section class="numeric-probe" aria-label="Try a number / 先算一个数">
      <h3>先算一个数 · Try a number</h3>
      ${renderBiPair(`<p>${lesson.numericProbe.zh || ""}</p>`, `<p>${lesson.numericProbe.en || ""}</p>`)}
    </section>`;
  }

  function renderInsight(lesson) {
    if (!lesson.insight) return "";
    return `<p class="lesson-insight language-zh" lang="zh-CN"><span>Insight</span>${lesson.insight}</p>`;
  }

  function renderQASteps(lesson, options = {}) {
    const counterEn = lesson.counterexampleEn || {};
    const theoremFirst = Boolean(options.theoremFirst);
    const symbolsIndex = theoremFirst ? -1 : 1;
    const selfCheckIndex = theoremFirst ? lesson.qaSteps.length - 1 : 4;
    const kindLabels = {
      definition: "Definition · 定义",
      derivation: "Derivation · 推导",
      computation: "Computation · 计算",
      counterexample: "Counterexample · 反例",
      boundary: "Boundary · 边界"
    };
    return lesson.qaSteps.map((step, index) => {
      const englishFormula = /[\u3400-\u9fff]/.test(step.formula || "")
        ? ""
        : `<p class="qa-formula" lang="en">${step.formula}</p>`;
      const zhAnswer = `<p>${step.answerZh}</p>${step.formula ? `<p class="qa-formula" lang="zh-CN">${step.formula}</p>` : ""}`;
      const enAnswer = `<p>${step.answerEn}</p>${englishFormula}`;
      const symbolsBlock = index === symbolsIndex ? renderSymbols(lesson.symbols) : "";
      const counterexampleBlock = index === 3 ? renderBiPair(
        `<div class="counterexample-grid">
          <div class="counterexample wrong"><strong>容易误判</strong><p>${lesson.counterexample.wrong}</p></div>
          <div class="counterexample right"><strong>正确理解</strong><p>${lesson.counterexample.correct}</p></div>
        </div><p class="counterexample-reason"><strong>为什么：</strong>${lesson.counterexample.why}</p>`,
        counterEn.wrong ? `<div class="counterexample-grid">
          <div class="counterexample wrong"><strong>Common mistake</strong><p lang="en">${counterEn.wrong}</p></div>
          <div class="counterexample right"><strong>Correct view</strong><p lang="en">${counterEn.correct}</p></div>
        </div><p class="counterexample-reason"><strong>Why:</strong> ${counterEn.why}</p>` : "<p></p>",
        "counterexample-pair"
      ) : "";
      const selfCheckBlock = index === selfCheckIndex && lesson.check ? renderBiPair(
        `<div class="lesson-check"><h4>检查自己</h4><p>${lesson.check}</p><details><summary class="check-answer">查看参考答案</summary><p>${lesson.answer}</p></details></div>`,
        lesson.checkEn ? `<div class="lesson-check"><h4>Self-check</h4><p>${lesson.checkEn}</p><details><summary class="check-answer">Show answer · 查看答案</summary><p>${lesson.checkAnswerEn}</p></details></div>` : "<p></p>",
        "self-check-pair"
      ) : "";
      const retellBlock = !theoremFirst && index === 4 && lesson.retellZh
        ? renderBiPair(`<p>${lesson.retellZh}</p>`, `<p>${lesson.retellEn || ""}</p>`, "retell-pair")
        : "";
      const kind = Object.hasOwn(kindLabels, step.kind || "") ? step.kind : "";
      const kindBadge = kind ? `<span class="qa-kind" data-kind="${kind}">${kindLabels[kind]}</span>` : "";
      const openAttribute = !theoremFirst && index === 0 ? "open" : "";
      const labelZh = step.labelZh || step.questionZh;
      const labelEn = step.labelEn || step.questionEn;
      const summaryContent = theoremFirst
        ? `<span class="qa-question">
            <span class="qa-label">
              <span class="language-zh" lang="zh-CN">${labelZh}</span>
              <span class="source-en" lang="en">${labelEn}</span>
            </span>
            <span class="qa-prompt">
              <span class="question-zh language-zh" lang="zh-CN">${step.questionZh}</span>
              <span class="question-en source-en" lang="en">${step.questionEn}</span>
            </span>
          </span>
          ${kindBadge}`
        : `<span class="qa-question">
            <strong class="question-en source-en" lang="en">${step.questionEn}</strong>
            <span class="question-zh language-zh" lang="zh-CN">${step.questionZh}</span>
            <small class="source-en" lang="en">Think first: ${step.hintEn}</small>
            <small class="language-zh" lang="zh-CN">先想一想：${step.hint}</small>
          </span>`;
      return `<details class="qa-step${theoremFirst ? " qa-step--compact" : ""}" data-step-index="${index}" name="qa-${lesson.id}" ${openAttribute}>
        <summary>
          <span class="qa-step-number">Q${index + 1}</span>
          ${summaryContent}
        </summary>
        <div class="qa-answer">
          ${renderBiPair(zhAnswer, enAnswer, "answer-pair")}
          ${symbolsBlock}
          ${counterexampleBlock}
          ${retellBlock}
          ${selfCheckBlock}
        </div>
      </details>`;
    }).join("");
  }

  function renderLessonCard(lesson, options = {}) {
    const explanationEn = Array.isArray(lesson.explanationEn) ? lesson.explanationEn : [lesson.explanationEn || ""];
    const explanationZh = Array.isArray(lesson.explanationZh) ? lesson.explanationZh : [lesson.explanationZh || ""];
    const lab = options.lab;
    const theoremFirst = Boolean(lesson.theorem);
    const explanationPair = renderBiPair(
      explanationZh.filter(Boolean).map((paragraph) => `<p>${paragraph}</p>`).join(""),
      explanationEn.filter(Boolean).map((paragraph) => `<p>${paragraph}</p>`).join(""),
      "explanation-pair"
    );
    const legacyExplanation = theoremFirst ? "" : `
      <section class="source-definition source-en" lang="en">
        <span class="language-label">Definition / lecture note</span>
        <p>${lesson.english || ""}</p>
      </section>
      <section class="lecture-explanation source-en" lang="en">
        <span class="language-label">How to read it</span>
        ${explanationEn.filter(Boolean).map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </section>
      ${translationDetails(explanationZh.filter(Boolean).map((paragraph) => `<p>${paragraph}</p>`).join(""), "中文讲解 · Chinese explanation")}`;
    const leadingContent = theoremFirst
      ? `${renderTheoremCard(lesson)}${renderNumericProbe(lesson)}${renderSymbols(lesson.symbols)}${renderInsight(lesson)}
        <section class="lesson-explanations" aria-label="Bilingual explanation / 中英讲解">
          <span class="language-label">Explanation / 讲解</span>
          ${explanationPair}
        </section>`
      : legacyExplanation;
    return `<details class="lesson" id="concept-${lesson.id}"${theoremFirst ? ' data-theorem-first="true"' : ""}>
      <summary>
        <span class="lesson-number">${lesson.number}</span>
        <span class="lesson-title"><strong class="source-en" lang="en">${lesson.titleEn}</strong><span class="language-zh" lang="zh-CN">${lesson.titleZh}</span>${lesson.notExamined ? '<span class="badge warning lesson-exam-badge">非考试 · Not examined</span>' : ""}</span>
      </summary>
      <div class="lesson-body">
        <div class="lesson-layout">
          <div class="lesson-reading">
            ${leadingContent}
            <div class="qa-walk" aria-label="Derivation questions / 推导追问">${renderQASteps(lesson, { theoremFirst })}</div>
          </div>
          <figure class="micro-animation" data-micro-animation="${lesson.animation}" data-caption-en="${escapeAttribute(JSON.stringify(lesson.animationFramesEn || []))}">
            <div class="micro-heading"><span>Concept animation</span><span class="micro-progress" data-micro-progress>1 / 5</span></div>
            <div class="micro-stage"><canvas role="img" aria-label="${lesson.animationTitle || lesson.titleEn}"></canvas></div>
            <figcaption class="micro-caption"><span class="source-en" data-micro-caption-en lang="en"></span><span class="language-zh" data-micro-caption-zh lang="zh-CN"></span></figcaption>
            <div class="micro-controls">
              <button class="button ghost small" type="button" data-micro-action="prev" aria-label="Previous frame">←</button>
              <button class="button secondary small" type="button" data-micro-action="play">Play · 播放</button>
              <button class="button ghost small" type="button" data-micro-action="next" aria-label="Next frame">→</button>
              <button class="button ghost small" type="button" data-micro-action="replay">Replay · 重播</button>
            </div>
          </figure>
        </div>
        <div class="lesson-footer"><span class="source-chip">${lesson.source}</span>${lab ? `<a class="button ghost small" href="#${lab[0]}">Explore · ${lab[1]} →</a>` : ""}</div>
      </div>
    </details>`;
  }

  function renderQuestions(questions, languagePack = {}) {
    return questions.map((question) => {
      const english = languagePack[question.id] || {};
      return `<article class="question-card">
        <div class="question-head"><div><h3 lang="en">${english.title || question.title}</h3><div class="language-zh" lang="zh-CN">${question.title}</div><div class="question-source">${question.source}</div><a class="question-skill" href="#concept-${question.concept}" lang="en">${question.skill || ""} · review concept →</a></div><span class="badge ${question.source.startsWith("官方") ? "info" : ""}">${question.source.startsWith("官方") ? "Official · 官方" : "Extra · 自造"}</span></div>
        <p class="question-prompt source-en" lang="en">${english.prompt || question.prompt}</p>
        ${translationDetails(`<p>${question.prompt}</p>`, "中文题目 · Chinese prompt")}
        <label class="sr-only" for="answer-${question.id}">Answer ${question.id}</label>
        <textarea id="answer-${question.id}" data-answer="${question.id}" placeholder="Write your steps first, then reveal the solution. 先写步骤，再看解答。"></textarea>
        <div class="question-actions"><span class="badge">Saved locally · 自动保存</span><button class="button secondary small" type="button" data-reveal="${question.id}" aria-expanded="false">Show solution · 查看解答</button></div>
        <div class="answer-box" id="solution-${question.id}" hidden>
          <div class="source-en" lang="en">${english.answer || question.answer}</div>
          ${translationDetails(question.answer, "中文解答 · Chinese solution")}
        </div>
      </article>`;
    }).join("");
  }

  function applyLanguageMode(mode) {
    const safeMode = ["english", "bilingual", "chinese"].includes(mode) ? mode : "bilingual";
    document.documentElement.dataset.languageMode = safeMode;
    document.querySelectorAll("[data-translation]").forEach((details) => {
      details.open = safeMode === "chinese";
    });
  }

  window.MFC_LESSON_KIT = {
    mountAll,
    bindLesson,
    setFrame,
    buildWeekContent,
    renderTheoremCard,
    renderBiPair,
    renderQASteps,
    renderLessonCard,
    renderQuestions,
    applyLanguageMode
  };
})();
