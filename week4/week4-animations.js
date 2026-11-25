(() => {
  "use strict";

  const color = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const label = (ctx, text, x, y, options = {}) => {
    ctx.save();
    ctx.fillStyle = options.color || color("--color-text-soft");
    ctx.font = options.font || '12px "Noto Sans SC", sans-serif';
    ctx.textAlign = options.align || "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, x, y, options.maxWidth || 230);
    ctx.restore();
  };
  const line = (ctx, x1, y1, x2, y2, options = {}) => {
    ctx.save();
    ctx.strokeStyle = options.color || color("--color-border-strong");
    ctx.lineWidth = options.width || 1.5;
    ctx.setLineDash(options.dash || []);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  };
  const dot = (ctx, x, y, radius = 5, fill = color("--color-primary"), stroke = "", width = 1.5) => {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = width;
      ctx.stroke();
    }
    ctx.restore();
  };
  const rect = (ctx, x, y, width, height, fill, stroke = "transparent") => {
    ctx.save();
    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.fillRect(x, y, width, height);
    if (stroke !== "transparent") ctx.strokeRect(x, y, width, height);
    ctx.restore();
  };
  const axes = (ctx, left, bottom, right, top) => {
    line(ctx, left, bottom, right, bottom, { color: color("--color-border-strong") });
    line(ctx, left, bottom, left, top, { color: color("--color-border-strong") });
  };
  const path = (ctx, points, stroke, width = 2.5) => {
    ctx.save();
    ctx.beginPath();
    points.forEach(([x, y], index) => index ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
    ctx.strokeStyle = stroke;
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.restore();
  };

  window.MFC_CUSTOM_ANIMATIONS = {
    "antiderivative-family"(ctx, w, h, t) {
      const left = 35, right = w - 25, bottom = h - 34, top = 22;
      axes(ctx, left, bottom, right, top);
      const xOf = (x) => left + (x / 6) * (right - left);
      const yOf = (y) => bottom - (y / 8) * (bottom - top);
      const selected = -2 + Math.round(t * 4);
      for (let c = -2; c <= 2; c += 1) {
        if (c > selected) continue;
        const points = [];
        for (let x = 0; x <= 5; x += 0.1) points.push([xOf(x), yOf(x * x / 4 + c)]);
        path(ctx, points, c === selected ? color("--color-primary") : color("--color-border-strong"), c === selected ? 2.5 : 1);
      }
      label(ctx, "F(x) + C", w / 2, h - 14);
      label(ctx, `C = ${selected}`, w * 0.78, 24, { color: color("--color-primary") });
    },
    "substitution-factor"(ctx, w, h, t) {
      const y = h * 0.46;
      const left = w * 0.12, right = w * 0.88;
      label(ctx, "2x", left + 25, y, { font: '15px "Cambria Math", serif' });
      label(ctx, "(x² + 1)³", w / 2, y, { font: '15px "Cambria Math", serif' });
      label(ctx, "du", right - 25, y, { color: color("--color-info"), font: '15px "Cambria Math", serif' });
      const dotX = left + (right - left) * t;
      line(ctx, left, y + 28, right, y + 28, { color: color("--color-border-strong") });
      dot(ctx, dotX, y + 28, 6, color("--color-warning"));
      label(ctx, "u = x² + 1", w / 2, h - 20, { color: color("--color-primary") });
    },
    "definite-substitution"(ctx, w, h, t) {
      const y = h * 0.42;
      line(ctx, 40, y, w - 30, y, { color: color("--color-border-strong"), width: 2 });
      line(ctx, 40, y + 42, w - 30, y + 42, { color: color("--color-border-strong"), width: 2 });
      const bounds = [[0.25, "a", "α"], [0.72, "b", "β"]];
      bounds.forEach(([p, oldText, newText]) => {
        const x = 40 + (w - 70) * p;
        dot(ctx, x, y, 6, color("--color-primary"));
        label(ctx, oldText, x, y - 18, { color: color("--color-primary"), font: '13px "Cambria Math", serif' });
        line(ctx, x, y + 8, x, y + 34, { color: color("--color-warning"), width: 2, dash: [5, 4] });
        if (t > 0.01) {
          ctx.save();
          ctx.globalAlpha = Math.min(1, t * 1.4);
          const mappedY = y + 8 + 34 * t;
          dot(ctx, x, mappedY, 6, color("--color-warning"));
          label(ctx, newText, x, mappedY + 22, { color: color("--color-warning"), font: '13px "Cambria Math", serif' });
          ctx.restore();
        }
      });
      label(ctx, "x bounds", w * 0.5, y - 22);
      label(ctx, "u bounds", w * 0.5, y + 62);
      label(ctx, t > 0.55 ? "old bounds replaced on the new axis" : "map each old bound to a new bound", w / 2, h - 14);
    },
    "integration-parts"(ctx, w, h, t) {
      const y = h * 0.45;
      rect(ctx, w * 0.12, y - 32, w * 0.3, 64, color("--color-info-soft"), color("--color-info"));
      rect(ctx, w * 0.58, y - 32, w * 0.3, 64, color("--color-warning-soft"), color("--color-warning"));
      label(ctx, "u v′", w * 0.27, y, { font: '15px "Cambria Math", serif' });
      label(ctx, "u′ v", w * 0.73, y, { font: '15px "Cambria Math", serif' });
      line(ctx, w * 0.45, y, w * 0.55, y, { color: color("--color-primary"), width: 2 });
      dot(ctx, w * (0.45 + 0.1 * t), y, 6, color("--color-warning"));
      label(ctx, "∫u v′ = uv − ∫u′v", w / 2, h - 18, { font: '15px "Cambria Math", serif' });
    },
    "repeated-parts"(ctx, w, h, t) {
      const phase = Math.round(t * 4);
      for (let index = 0; index < 4; index += 1) {
        const y = 38 + index * 42;
        const reached = index <= Math.min(3, phase);
        const active = index === Math.min(3, phase);
        label(ctx, `u = x${index ? "′".repeat(index) : ""}`, 38, y, { align: "left", color: reached ? color("--color-primary") : color("--color-text-muted") });
        label(ctx, "↓ parts", w / 2, y + 14, { color: active ? color("--color-warning") : reached ? color("--color-border-strong") : color("--color-text-muted") });
      }
      label(ctx, phase >= 4 ? "polynomial factor exhausted" : "remaining integral gets simpler", w / 2, h - 14);
    },
    "rational-division"(ctx, w, h, t) {
      label(ctx, "P(x) / Q(x)", w / 2, 28, { font: '15px "Cambria Math", serif' });
      line(ctx, w * 0.25, 52, w * 0.75, 52, { color: color("--color-border-strong"), width: 2 });
      const width = Math.max(0, 160 * t);
      rect(ctx, w / 2 - width / 2, 88, width, 48, color("--color-primary-soft"), color("--color-primary"));
      label(ctx, "S(x)", w / 2, 112, { color: color("--color-primary") });
      if (t > 0.65) {
        label(ctx, "R(x) / Q(x)", w / 2, 174, { color: color("--color-warning") });
        label(ctx, "proper remainder", w / 2, 198);
      }
      label(ctx, "divide before partial fractions", w / 2, h - 15);
    },
    "partial-fractions"(ctx, w, h, t) {
      label(ctx, "1 / ((x+1)(x+2))", w / 2, 28, { font: '15px "Cambria Math", serif' });
      const x1 = w * 0.27, x2 = w * 0.73, y = h * 0.48;
      const currentX1 = w / 2 + (x1 - w / 2) * t;
      const currentX2 = w / 2 + (x2 - w / 2) * t;
      line(ctx, w / 2, 48, currentX1, y - 28, { color: color("--color-border-strong") });
      line(ctx, w / 2, 48, currentX2, y - 28, { color: color("--color-border-strong") });
      rect(ctx, currentX1 - 58, y - 28, 116, 56, color("--color-primary-soft"), color("--color-primary"));
      rect(ctx, currentX2 - 58, y - 28, 116, 56, color("--color-warning-soft"), color("--color-warning"));
      label(ctx, "A/(x+1)", currentX1, y, { color: color("--color-primary") });
      label(ctx, "B/(x+2)", currentX2, y, { color: color("--color-warning") });
      label(ctx, t > 0.65 ? "solve coefficients" : "write the full template", w / 2, h - 15);
    },
    "rational-primitives-poles"(ctx, w, h, t) {
      const y = h * 0.46;
      line(ctx, 35, y, w - 25, y, { color: color("--color-border-strong"), width: 2 });
      line(ctx, w / 2, 30, w / 2, h - 42, { color: color("--color-danger"), width: 2, dash: [5, 4] });
      const approach = (w - 60) * (0.34 - t * 0.065);
      dot(ctx, w / 2 - approach, y, 6, color("--color-primary"));
      dot(ctx, w / 2 + approach, y, 6, color("--color-info"));
      line(ctx, w / 2 - approach, y - 18, w / 2, y - 18, { color: color("--color-primary"), dash: [4, 4] });
      line(ctx, w / 2, y - 18, w / 2 + approach, y - 18, { color: color("--color-info"), dash: [4, 4] });
      label(ctx, "pole", w / 2, 20, { color: color("--color-danger") });
      label(ctx, "log |x−r|", w * 0.25, y - 30, { color: color("--color-primary") });
      label(ctx, "log |x−r|", w * 0.75, y - 30, { color: color("--color-info") });
      label(ctx, "arctan q(x)", w / 2, h - 20, { color: color("--color-warning") });
    },
    "trig-powers"(ctx, w, h, t) {
      const y = h * 0.42;
      label(ctx, "sin³x cos²x dx", w / 2, 28, { font: '16px "Cambria Math", serif' });
      const phase = Math.round(t * 4);
      label(ctx, "sin²x · sin x dx", w / 2, y, { color: phase >= 1 ? color("--color-primary") : color("--color-text-muted") });
      label(ctx, "u = cos x, du = −sin x dx", w / 2, y + 42, { color: phase >= 2 ? color("--color-info") : color("--color-text-muted") });
      label(ctx, "−∫(1−u²)u²du", w / 2, y + 78, { color: phase >= 3 ? color("--color-warning") : color("--color-text-muted") });
      label(ctx, phase >= 4 ? "odd factor removed; integrate in u" : phase >= 2 ? "odd power supplies the derivative factor" : "inspect both exponents first", w / 2, h - 16);
    },
    "trig-substitution"(ctx, w, h, t) {
      const cx = w * 0.3, cy = h * 0.62, radius = Math.min(w, h) * 0.32;
      dot(ctx, cx, cy, radius, "transparent", color("--color-border-strong"));
      const angle = 0.2 + t * 1.2;
      const x = cx + radius * Math.cos(angle), y = cy - radius * Math.sin(angle);
      line(ctx, cx, cy, x, y, { color: color("--color-primary"), width: 2 });
      line(ctx, cx, cy, x, cy, { color: color("--color-info"), width: 1.5 });
      line(ctx, x, cy, x, y, { color: color("--color-warning"), width: 1.5 });
      label(ctx, "sin t", (cx + x) / 2, cy + 18, { color: color("--color-info") });
      label(ctx, "cos t", x + 30, (cy + y) / 2, { color: color("--color-warning") });
      label(ctx, "√(1−x²) → |cos t|", w * 0.72, h * 0.28, { color: color("--color-primary") });
      label(ctx, "branch fixes the sign", w / 2, h - 16);
    },
    "hyperbolic-identity"(ctx, w, h, t) {
      const y = h * 0.32;
      label(ctx, "cosh²t − sinh²t = 1", w / 2, 28, { font: '16px "Cambria Math", serif' });
      const a = 30 + t * 120, b = 30 + (1 - t) * 120;
      rect(ctx, w * 0.28, y, a, 34, color("--color-primary-soft"), color("--color-primary"));
      rect(ctx, w * 0.28, y + 66, b, 34, color("--color-warning-soft"), color("--color-warning"));
      label(ctx, "cosh²", w * 0.28 + a / 2, y + 17);
      label(ctx, "sinh²", w * 0.28 + b / 2, y + 83);
      label(ctx, "difference stays 1", w / 2, h - 16);
    },
    "integral-symmetry"(ctx, w, h, t) {
      const left = 35, right = w - 25, bottom = h - 38, axis = h * 0.52;
      axes(ctx, left, bottom, right, 24);
      line(ctx, left, axis, right, axis, { color: color("--color-border") });
      const mid = (left + right) / 2;
      ctx.fillStyle = color("--color-primary-soft");
      ctx.fillRect(mid, axis - 68, mid - left, 68);
      ctx.fillRect(mid, axis, mid - left, 68);
      ctx.fillStyle = color("--color-warning-soft");
      ctx.fillRect(left, axis, mid - left, 45);
      label(ctx, "even → double", w * 0.75, 22, { color: color("--color-primary") });
      const arrowX = left + 22 + (mid - left - 22) * t;
      line(ctx, left + 22, h * 0.24, arrowX, h * 0.24, { color: color("--color-primary"), width: 3 });
      line(ctx, arrowX, h * 0.24, arrowX - 8, h * 0.24 - 5, { color: color("--color-primary"), width: 2 });
      line(ctx, arrowX, h * 0.24, arrowX - 8, h * 0.24 + 5, { color: color("--color-primary"), width: 2 });
      label(ctx, t > 0.65 ? "odd half cancels its reflection" : "reflect the left half", w / 2, h - 14, { color: color("--color-warning") });
    },
    "integration-existence"(ctx, w, h, t) {
      const left = 35, right = w - 25, bottom = h - 38, top = 25;
      axes(ctx, left, bottom, right, top);
      const points = [];
      for (let x = 0; x <= 1; x += 0.02) points.push([left + x * (right - left), bottom - Math.exp(-x * x) * (bottom - top)]);
      path(ctx, points, color("--color-primary"));
      const count = 2 + Math.round(t * 8);
      const barWidth = (right - left) / count;
      for (let i = 0; i < count; i += 1) {
        const mid = (i + 0.5) / count;
        rect(ctx, left + i * barWidth, bottom - Math.exp(-mid * mid) * (bottom - top), barWidth - 1, Math.exp(-mid * mid) * (bottom - top), "rgba(40,117,102,0.12)");
      }
      label(ctx, "exact integral exists", w * 0.3, 20, { color: color("--color-primary") });
      label(ctx, `${count} rectangles: finite approximation`, w * 0.66, h - 14, { color: color("--color-warning") });
    },
    "method-selection"(ctx, w, h, t) {
      const cx = w / 2, top = 28;
      const phase = Math.round(t * 4);
      rect(ctx, cx - 60, top, 120, 44, color("--color-primary-soft"), color("--color-primary"));
      label(ctx, "identify structure", cx, top + 22, { color: color("--color-primary") });
      const nodes = [["substitution", w * 0.2], ["parts", w * 0.5], ["fractions", w * 0.8]];
      nodes.forEach(([text, x], index) => {
        const active = phase > index;
        line(ctx, cx, top + 44, x, h * 0.46, { color: active ? color("--color-warning") : color("--color-border"), width: 2 });
        rect(ctx, x - 48, h * 0.46, 96, 42, active ? color("--color-warning-soft") : "transparent", active ? color("--color-warning") : color("--color-border"));
        label(ctx, text, x, h * 0.46 + 21, { color: active ? color("--color-warning") : color("--color-text-muted") });
      });
      const routeY = h * 0.72;
      line(ctx, w * 0.16, routeY, w * 0.84, routeY, { color: color("--color-border") });
      dot(ctx, w * 0.16 + (w * 0.68) * t, routeY, 6, color("--color-primary"));
      label(ctx, phase >= 4 ? "transform, then recheck the new structure" : `test candidate ${phase + 1}`, w / 2, h - 16);
    },
    "integration-map"(ctx, w, h, t) {
      const nodes = ["FTC", "substitution", "parts", "fractions", "symmetry"];
      nodes.forEach((text, index) => {
        const x = 40 + index * ((w - 80) / 4);
        const active = t * 4 >= index - 0.2;
        dot(ctx, x, h * 0.4, active ? 12 : 7, active ? color("--color-primary") : color("--color-border-strong"));
        label(ctx, text, x, h * 0.4 + 32, { color: active ? color("--color-text") : color("--color-text-muted") });
        if (index < nodes.length - 1) line(ctx, x + 12, h * 0.4, x + (w - 80) / 4 - 12, h * 0.4, { color: active ? color("--color-primary") : color("--color-border") });
      });
      label(ctx, "existence + method + error + domain", w / 2, h - 16);
    },
    "line-integral"(ctx, w, h, t) {
      const left = 38, right = w - 25, bottom = h - 36, top = 26;
      axes(ctx, left, bottom, right, top);
      const curve = [];
      for (let x = 0; x <= 1; x += 0.02) curve.push([left + x * (right - left), bottom - (0.2 + 0.55 * x * x) * (bottom - top)]);
      path(ctx, curve, color("--color-primary"));
      const index = Math.min(curve.length - 1, Math.floor(t * (curve.length - 1)));
      const [x, y] = curve[index];
      dot(ctx, x, y, 6, color("--color-warning"));
      line(ctx, x - 15, y + 12, x + 15, y - 12, { color: color("--color-info"), width: 2 });
      label(ctx, "γ(t)", x + 22, y - 10, { align: "left" });
      label(ctx, "ds = |γ′(t)| dt", w / 2, h - 14);
    }
  };
})();
