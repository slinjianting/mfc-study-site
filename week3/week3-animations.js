(() => {
  "use strict";

  const ink = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const label = (ctx, text, x, y, options = {}) => {
    ctx.save();
    ctx.fillStyle = options.color || ink("--color-text-soft");
    ctx.font = options.font || '12px "Noto Sans SC", sans-serif';
    ctx.textAlign = options.align || "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, x, y, options.maxWidth || 230);
    ctx.restore();
  };
  const line = (ctx, x1, y1, x2, y2, options = {}) => {
    ctx.save();
    ctx.strokeStyle = options.color || ink("--color-border-strong");
    ctx.lineWidth = options.width || 1.5;
    ctx.setLineDash(options.dash || []);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  };
  const dot = (ctx, x, y, radius = 5, color = ink("--color-primary")) => {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  };
  const box = (ctx, x, y, width, height, color) => {
    ctx.save();
    ctx.fillStyle = color;
    ctx.strokeStyle = ink("--color-border");
    ctx.lineWidth = 1;
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);
    ctx.restore();
  };
  const axes = (ctx, w, h, x0, y0, x1, y1) => {
    line(ctx, x0, y0, x1, y0, { color: ink("--color-border-strong") });
    line(ctx, x0, y0, x0, y1, { color: ink("--color-border-strong") });
    line(ctx, x0, y0, x0 + 8, y0 + 4, { color: ink("--color-border-strong") });
    line(ctx, x0, y0, x0 + 8, y0 - 4, { color: ink("--color-border-strong") });
  };
  const plot = (ctx, points, stroke, width = 2.5) => {
    ctx.save();
    ctx.beginPath();
    points.forEach(([x, y], index) => index ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
    ctx.strokeStyle = stroke;
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.restore();
  };

  window.MFC_CUSTOM_ANIMATIONS = {
    "higher-derivatives"(ctx, w, h, t) {
      const items = ["f", "f′", "f″", "f‴", "f⁽⁴⁾"];
      items.forEach((item, index) => {
        const active = t * 4 >= index - 0.25;
        const x = 18 + index * ((w - 36) / 5);
        box(ctx, x, h * 0.34, (w - 60) / 5, 50, active ? ink("--color-primary-soft") : "transparent");
        label(ctx, item, x + (w - 60) / 10, h * 0.34 + 25, {
          color: active ? ink("--color-primary") : ink("--color-text-muted"),
          font: '16px "Cambria Math", serif'
        });
      });
      label(ctx, "differentiate again → match more local data", w / 2, h * 0.72);
    },

    "taylor-polynomial"(ctx, w, h, t) {
      const left = 34, right = w - 24, bottom = h - 32, top = 24;
      axes(ctx, w, h, left, bottom, right, top);
      const xOf = (x) => left + ((x + 1.5) / 3) * (right - left);
      const yOf = (y) => bottom - (y / 5) * (bottom - top);
      const degree = Math.min(4, Math.floor(t * 4.01));
      const taylor = (x) => [1, 1 + x, 1 + x + x * x / 2, 1 + x + x * x / 2 + x ** 3 / 6, 1 + x + x * x / 2 + x ** 3 / 6 + x ** 4 / 24][degree];
      const target = [];
      const approximation = [];
      for (let x = -1.35; x <= 1.35; x += 0.025) {
        target.push([xOf(x), yOf(Math.min(5, Math.exp(x)))]);
        approximation.push([xOf(x), yOf(Math.max(0, Math.min(5, taylor(x))))]);
      }
      plot(ctx, target, ink("--color-info"));
      plot(ctx, approximation, ink("--color-warning"), 2);
      dot(ctx, xOf(0), yOf(1), 6, ink("--color-primary"));
      label(ctx, `T${degree}(x)`, right - 36, top + 14, { color: ink("--color-warning"), font: '14px "Cambria Math", serif' });
      label(ctx, "matching derivatives at a = 0", w / 2, h - 14);
    },

    "maclaurin-families"(ctx, w, h, t) {
      const left = 35, right = w - 22, bottom = h - 34, top = 22;
      axes(ctx, w, h, left, bottom, right, top);
      const xOf = (x) => left + ((x + 3) / 6) * (right - left);
      const yOf = (y) => bottom - ((y + 2) / 4) * (bottom - top);
      const sin = [], cos = [], sinT = [], cosT = [];
      for (let x = -2.8; x <= 2.8; x += 0.03) {
        sin.push([xOf(x), yOf(Math.sin(x))]);
        cos.push([xOf(x), yOf(Math.cos(x))]);
        sinT.push([xOf(x), yOf(x - x ** 3 / 6 + (t > 0.7 ? x ** 5 / 120 : 0))]);
        cosT.push([xOf(x), yOf(1 - x * x / 2 + (t > 0.7 ? x ** 4 / 24 : 0))]);
      }
      plot(ctx, sin, ink("--color-info"));
      plot(ctx, cos, ink("--color-primary"));
      plot(ctx, sinT, ink("--color-warning"), 1.8);
      plot(ctx, cosT, ink("--color-danger"), 1.8);
      label(ctx, "sin x / T₅", left + 50, top + 12, { color: ink("--color-warning") });
      label(ctx, "cos x / T₆", right - 50, top + 12, { color: ink("--color-danger") });
    },

    "taylor-remainder"(ctx, w, h, t) {
      const left = 34, right = w - 24, bottom = h - 34, top = 22;
      axes(ctx, w, h, left, bottom, right, top);
      const xOf = (x) => left + ((x + 1.2) / 2.6) * (right - left);
      const yOf = (y) => bottom - (y / 4.8) * (bottom - top);
      const f = [], p = [];
      for (let x = -1; x <= 1.2; x += 0.02) {
        const T3 = 1 + x + x * x / 2 + x ** 3 / 6;
        f.push([xOf(x), yOf(Math.exp(x))]);
        p.push([xOf(x), yOf(T3)]);
        if (x > 0.12) {
          line(ctx, xOf(x), yOf(T3), xOf(x), yOf(Math.exp(x)), {
            color: ink("--color-primary"),
            width: 1.2
          });
        }
      }
      plot(ctx, f, ink("--color-info"));
      plot(ctx, p, ink("--color-warning"));
      label(ctx, "R₃(x) = f(x) − T₃(x)", w / 2, h - 14, { color: ink("--color-primary") });
    },

    "lagrange-error"(ctx, w, h, t) {
      const left = 35, right = w - 25, bottom = h - 34, top = 22;
      axes(ctx, w, h, left, bottom, right, top);
      const xOf = (x) => left + ((x - 0.5) / 1.2) * (right - left);
      const yOf = (y) => bottom - ((y - 0.8) / 0.9) * (bottom - top);
      const curve = [];
      for (let x = 0.55; x <= 1.65; x += 0.02) curve.push([xOf(x), yOf(Math.sqrt(x))]);
      plot(ctx, curve, ink("--color-info"));
      const T2 = (x) => 1 + (x - 1) / 2 - (x - 1) ** 2 / 8;
      for (let x = 0.55; x <= 1.65; x += 0.025) {
        const bound = Math.min(0.2, 0.1 * Math.abs(x - 1) ** 3);
        line(ctx, xOf(x), yOf(T2(x) - bound), xOf(x), yOf(T2(x) + bound), {
          color: ink("--color-warning"),
          width: t > 0.55 ? 2 : 1,
          dash: [3, 3]
        });
      }
      label(ctx, "T₂ ± explicit error bound", w / 2, h - 14, { color: ink("--color-warning") });
    },

    "big-o-orders"(ctx, w, h, t) {
      const left = 40, right = w - 25, bottom = h - 34, top = 22;
      axes(ctx, w, h, left, bottom, right, top);
      const hmax = 0.7;
      const xOf = (x) => left + (x / hmax) * (right - left);
      const yOf = (y) => bottom - (Math.min(0.4, y) / 0.4) * (bottom - top);
      const h2 = [], h4 = [];
      for (let x = 0.02; x <= hmax; x += 0.01) {
        h2.push([xOf(x), yOf(x * x)]);
        h4.push([xOf(x), yOf(x ** 4)]);
      }
      plot(ctx, h2, ink("--color-warning"));
      plot(ctx, h4, ink("--color-primary"));
      label(ctx, "O(h²)", right - 30, top + 18, { color: ink("--color-warning") });
      label(ctx, "O(h⁴)", right - 30, top + 42, { color: ink("--color-primary") });
      label(ctx, t > 0.7 ? "h⁴ decreases much faster near zero" : "compare reference powers", w / 2, h - 14);
    },

    "richardson-extrapolation"(ctx, w, h, t) {
      const y1 = h * 0.3, y2 = h * 0.5, y3 = h * 0.72;
      label(ctx, "A(h)", w * 0.18, y1, { font: '14px "Cambria Math", serif' });
      label(ctx, "4A(h/2)", w * 0.5, y2, { font: '14px "Cambria Math", serif' });
      label(ctx, "leading errors cancel", w * 0.78, y3, { color: ink("--color-primary") });
      line(ctx, w * 0.25, y1, w * 0.42, y2, { color: ink("--color-info"), width: 2 });
      line(ctx, w * 0.56, y2, w * 0.68, y3, { color: ink("--color-warning"), width: 2 });
      dot(ctx, w * 0.78, y3, 6, ink("--color-primary"));
      label(ctx, t > 0.65 ? "combine two approximations" : "inspect the leading error", w / 2, h - 14);
    },

    "partitions"(ctx, w, h, t) {
      const left = 35, right = w - 25, y = h * 0.48;
      const pieces = Math.min(12, 2 + Math.floor(t * 10));
      line(ctx, left, y, right, y, { color: ink("--color-border-strong"), width: 2 });
      for (let i = 0; i <= pieces; i += 1) {
        const x = left + (right - left) * i / pieces;
        line(ctx, x, y - 18, x, y + 18, { color: i === 0 || i === pieces ? ink("--color-primary") : ink("--color-warning"), width: 2 });
        label(ctx, `x${i}`, x, y + 30, { font: '11px "Cambria Math", serif' });
      }
      label(ctx, `n = ${pieces} subintervals`, w / 2, h - 18);
    },

    "darboux-sums"(ctx, w, h, t) {
      const left = 34, right = w - 24, bottom = h - 34, top = 24;
      axes(ctx, w, h, left, bottom, right, top);
      const pieces = Math.min(10, 2 + Math.floor(t * 9));
      const xOf = (x) => left + x * (right - left);
      const yOf = (y) => bottom - y * (bottom - top);
      for (let i = 0; i < pieces; i += 1) {
        const x0 = i / pieces, x1 = (i + 1) / pieces;
        const lo = x0 * x0, hi = x1 * x1;
        ctx.fillStyle = "rgba(62,103,128,0.16)";
        ctx.fillRect(xOf(x0), yOf(hi), xOf(x1) - xOf(x0) - 1, yOf(lo) - yOf(hi));
        line(ctx, xOf(x0), yOf(hi), xOf(x1), yOf(hi), { color: ink("--color-info"), width: 1.5 });
      }
      const curve = [];
      for (let x = 0; x <= 1; x += 0.02) curve.push([xOf(x), yOf(x * x)]);
      plot(ctx, curve, ink("--color-primary"), 2.5);
      label(ctx, "upper Darboux sum", w * 0.72, top + 16, { color: ink("--color-info") });
    },

    "riemann-integral"(ctx, w, h, t) {
      const fractions = (3 + Math.floor(t * 9));
      label(ctx, "lower sums ↑", w * 0.3, h * 0.27, { color: ink("--color-info") });
      label(ctx, "upper sums ↓", w * 0.7, h * 0.27, { color: ink("--color-warning") });
      for (let i = 0; i < fractions; i += 1) {
        const x = 34 + i * ((w - 68) / fractions);
        const width = (w - 68) / fractions;
        const lowerH = 25 + i * 2;
        const upperH = 115 - i * 2;
        box(ctx, x, h * 0.45 - lowerH, Math.max(2, width - 2), lowerH, "rgba(62,103,128,0.2)");
        line(ctx, x, h * 0.45 - upperH, x + width, h * 0.45 - upperH, { color: ink("--color-warning") });
      }
      label(ctx, "lower ≤ integral ≤ upper", w / 2, h - 18);
    },

    "integrability-criterion"(ctx, w, h, t) {
      const y1 = h * 0.34, y2 = h * 0.55;
      const gap = 22 * (1 - 0.82 * t);
      line(ctx, 45, y1, w - 40, y1, { color: ink("--color-info"), width: 3 });
      line(ctx, 45, y2, w - 40, y2, { color: ink("--color-warning"), width: 3 });
      line(ctx, 45, h * 0.72, w - 40, h * 0.72, { color: ink("--color-primary"), width: 2, dash: [5, 4] });
      label(ctx, "lower sum", w * 0.23, y1 - 14, { color: ink("--color-info") });
      label(ctx, "upper sum", w * 0.77, y2 - 14, { color: ink("--color-warning") });
      label(ctx, `gap < ε`, w / 2, h * 0.72 - 14, { color: ink("--color-primary") });
      line(ctx, w / 2, y1, w / 2, y1 + gap, { color: ink("--color-danger"), width: 2 });
      label(ctx, "ε", w / 2 + 12, y1 + gap / 2, { color: ink("--color-danger") });
      label(ctx, t > 0.72 ? "partition refines until the gap is small" : "compare lower and upper sums", w / 2, h - 14);
    },

    "continuous-vs-dirichlet"(ctx, w, h, t) {
      const left = w * 0.1, mid = w * 0.5;
      label(ctx, "continuous", left + 55, 24, { color: ink("--color-info") });
      label(ctx, "Dirichlet 1Q", mid + 55, 24, { color: ink("--color-danger") });
      const pts = [];
      for (let x = 0; x <= 1; x += 0.02) {
        pts.push([left + x * 100, h * 0.68 - x * 85]);
      }
      plot(ctx, pts, ink("--color-info"), 2.5);
      for (let i = 0; i <= 10; i += 1) {
        const x = mid + i * 10;
        dot(ctx, x, h * 0.68, 2.5, ink("--color-danger"));
        dot(ctx, x, h * 0.6, 2.5, ink("--color-primary"));
      }
      label(ctx, "small rectangles fill area", left + 55, h - 18);
      label(ctx, "every rectangle has gap 1", mid + 55, h - 18, { maxWidth: 110 });
      label(ctx, t > 0.65 ? "continuity is sufficient, not necessary" : "compare the partition behaviour", w / 2, h - 40);
    },

    "integral-properties"(ctx, w, h, t) {
      const left = 34, right = w - 24, bottom = h - 38, top = 28;
      axes(ctx, w, h, left, bottom, right, top);
      const xOf = (x) => left + x * (right - left);
      const yOf = (y) => bottom - (y / 3) * (bottom - top);
      ctx.fillStyle = "rgba(40,117,102,0.16)";
      ctx.fillRect(xOf(0), yOf(2), xOf(0.5) - xOf(0), yOf(0.5) - yOf(2));
      ctx.fillRect(xOf(0.5), yOf(2.5), xOf(1) - xOf(0.5), yOf(0.5) - yOf(2.5));
      line(ctx, xOf(0.5), bottom, xOf(0.5), top, { color: ink("--color-border-strong"), dash: [4, 4] });
      dot(ctx, xOf(0.7), yOf(3.2), 5, ink("--color-danger"));
      label(ctx, "one point spike", xOf(0.7) + 34, yOf(3.15), { color: ink("--color-danger") });
      label(ctx, "area is additive; zero-area changes do not matter", w / 2, h - 14);
    },

    "ftc-part-one"(ctx, w, h, t) {
      const left = 35, right = w - 24, bottom = h - 38, top = 26;
      axes(ctx, w, h, left, bottom, right, top);
      const xOf = (x) => left + x * (right - left);
      const yOf = (y) => bottom - (y / 4) * (bottom - top);
      const f = (x) => 0.7 + 2.4 * x * x;
      const end = 0.25 + 0.65 * t;
      const pts = [];
      for (let x = 0; x <= end; x += 0.02) pts.push([xOf(x), yOf(f(x))]);
      plot(ctx, pts, ink("--color-primary"), 2.5);
      ctx.fillStyle = "rgba(40,117,102,0.18)";
      ctx.beginPath();
      ctx.moveTo(xOf(0), yOf(0));
      pts.forEach(([x, y]) => ctx.lineTo(x, y));
      ctx.lineTo(xOf(end), yOf(0));
      ctx.closePath();
      ctx.fill();
      line(ctx, xOf(end), yOf(0), xOf(end), yOf(f(end)), { color: ink("--color-warning"), width: 3 });
      dot(ctx, xOf(end), yOf(f(end)), 5, ink("--color-warning"));
      label(ctx, `F′(x) = f(x)`, w / 2, h - 14, { color: ink("--color-primary"), font: '14px "Cambria Math", serif' });
    },

    "ftc-part-two"(ctx, w, h, t) {
      const left = 35, right = w - 28, bottom = h - 40;
      const points = [0.18, 0.5, 0.82];
      const heights = [0.2, 0.55, 0.85];
      line(ctx, left, bottom, right, bottom, { color: ink("--color-border-strong") });
      points.forEach((x, index) => {
        const px = left + x * (right - left);
        const py = bottom - heights[index] * (h - 85);
        dot(ctx, px, py, 5, index === 2 ? ink("--color-warning") : ink("--color-primary"));
        line(ctx, px, bottom, px, py, { color: ink("--color-border"), dash: [3, 3] });
      });
      label(ctx, "G(b) − G(a)", w / 2, h * 0.2, { color: ink("--color-warning"), font: '15px "Cambria Math", serif' });
      label(ctx, "height difference = accumulated area", w / 2, h - 15);
    },

    "improper-integrals"(ctx, w, h, t) {
      const left = 34, right = w - 24, bottom = h - 36, top = 25;
      axes(ctx, w, h, left, bottom, right, top);
      const xOf = (x) => left + (x / 4) * (right - left);
      const yOf = (y) => bottom - (Math.min(3, y) / 3) * (bottom - top);
      const curve = [];
      for (let x = 0.08; x <= 4; x += 0.03) curve.push([xOf(x), yOf(1 / Math.sqrt(x))]);
      plot(ctx, curve, ink("--color-primary"), 2.5);
      const cutoff = 1.2 + t * 2.2;
      ctx.fillStyle = "rgba(40,117,102,0.15)";
      ctx.beginPath();
      ctx.moveTo(xOf(0.08), yOf(0));
      curve.filter(([x]) => x <= xOf(cutoff)).forEach(([x, y]) => ctx.lineTo(x, y));
      ctx.lineTo(xOf(cutoff), yOf(0));
      ctx.closePath();
      ctx.fill();
      line(ctx, xOf(cutoff), top, xOf(cutoff), bottom, { color: ink("--color-warning"), dash: [5, 4] });
      label(ctx, `R = ${cutoff.toFixed(1)}`, xOf(cutoff), top + 10, { color: ink("--color-warning") });
      label(ctx, "truncate, integrate, then take the limit", w / 2, h - 14);
    }
  };
})();
