(() => {
  "use strict";

  const STORAGE_KEY = "mfc-learning:v2";
  const LEGACY_WEEK1_KEY = "mfc-week1:v1";
  const defaultWeekSections = ["real-line", "functions", "sequences", "function-limits", "continuity", "practice"];
  const rootElement = document.documentElement;
  const siteRoot = rootElement.dataset.siteRoot || "./";

  function getWeekSections(id) {
    const weeks = window.MFC_COURSES && Array.isArray(window.MFC_COURSES.weeks) ? window.MFC_COURSES.weeks : [];
    const week = weeks.find((item) => item.id === id);
    return week && Array.isArray(week.sections) && week.sections.length ? week.sections : defaultWeekSections;
  }

  function emptyWeek() {
    return {
      completed: [],
      answers: {},
      currentSection: "overview",
      pointValue: 0
    };
  }

  function emptyData() {
    return {
      version: 2,
      theme: "system",
      languageMode: "bilingual",
      lastWeek: null,
      weeks: {}
    };
  }

  function parseJson(value, fallback) {
    try {
      return JSON.parse(value);
    } catch {
      return fallback;
    }
  }

  function normalizeWeek(value, validSections = defaultWeekSections) {
    const base = emptyWeek();
    if (!value || typeof value !== "object") return base;
    return {
      ...base,
      ...value,
      completed: Array.isArray(value.completed)
        ? value.completed.filter((id) => validSections.includes(id))
        : [],
      answers: value.answers && typeof value.answers === "object" ? value.answers : {}
    };
  }

  function loadData() {
    let rawSaved = null;
    let rawLegacy = null;
    try {
      rawSaved = localStorage.getItem(STORAGE_KEY);
      rawLegacy = localStorage.getItem(LEGACY_WEEK1_KEY);
    } catch {
      // Some browsers disable storage for local files; use an in-memory session.
    }
    let saved = parseJson(rawSaved || "null", null);
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) saved = emptyData();
    saved.version = 2;
    saved.theme = ["system", "light", "dark"].includes(saved.theme) ? saved.theme : "system";
    saved.languageMode = ["english", "bilingual", "chinese"].includes(saved.languageMode) ? saved.languageMode : "bilingual";
    saved.weeks = saved.weeks && typeof saved.weeks === "object" ? saved.weeks : {};
    Object.keys(saved.weeks).forEach((id) => {
      saved.weeks[id] = normalizeWeek(saved.weeks[id], getWeekSections(id));
    });

    const legacy = parseJson(rawLegacy || "null", null);
    if (legacy && typeof legacy === "object" && !saved.weeks.week1) {
      saved.weeks.week1 = normalizeWeek(legacy, getWeekSections("week1"));
      saved.lastWeek = "week1";
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
      if (legacy) localStorage.removeItem(LEGACY_WEEK1_KEY);
    } catch {
      // The course stays usable when local file storage is unavailable.
    }
    return saved;
  }

  let learningData = loadData();

  function saveData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(learningData));
    } catch {
      // No persistence; current session state remains available.
    }
  }

  function getWeek(id) {
    return normalizeWeek(learningData.weeks[id], getWeekSections(id));
  }

  function updateWeek(id, patch) {
    const next = normalizeWeek({ ...getWeek(id), ...patch }, getWeekSections(id));
    learningData.weeks[id] = next;
    learningData.lastWeek = id;
    saveData();
    return next;
  }

  function resetWeek(id) {
    learningData.weeks[id] = emptyWeek();
    learningData.lastWeek = id;
    saveData();
    return learningData.weeks[id];
  }

  function effectiveTheme(theme) {
    if (theme === "light" || theme === "dark") return theme;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    const safeTheme = ["system", "light", "dark"].includes(theme) ? theme : "system";
    learningData.theme = safeTheme;
    rootElement.dataset.theme = safeTheme;
    rootElement.dataset.effectiveTheme = effectiveTheme(safeTheme);
    rootElement.style.colorScheme = rootElement.dataset.effectiveTheme;
    saveData();
  }

  function setTheme(theme) {
    applyTheme(theme);
    document.dispatchEvent(new CustomEvent("mfc:themechange", {
      detail: { theme: learningData.theme, effectiveTheme: effectiveTheme(learningData.theme) }
    }));
  }

  function setLanguageMode(mode) {
    const safeMode = ["english", "bilingual", "chinese"].includes(mode) ? mode : "bilingual";
    learningData.languageMode = safeMode;
    saveData();
    rootElement.dataset.languageMode = safeMode;
    if (window.MFC_LESSON_KIT) window.MFC_LESSON_KIT.applyLanguageMode(safeMode);
    document.dispatchEvent(new CustomEvent("mfc:languagechange", { detail: { mode: safeMode } }));
  }

  function resolveCoursePath(path) {
    return new URL(path, new URL(siteRoot, document.baseURI)).href;
  }

  function weekProgress(id) {
    const completed = getWeek(id).completed;
    const sections = getWeekSections(id);
    return {
      completed: sections.filter((section) => completed.includes(section)).length,
      total: sections.length
    };
  }

  function renderThemeControl() {
    document.querySelectorAll("[data-theme-control]").forEach((host) => {
      if (host.querySelector("select")) return;
      const label = document.createElement("label");
      label.className = "theme-control";
      const text = document.createElement("span");
      text.className = "sr-only";
      text.textContent = "主题";
      const select = document.createElement("select");
      select.setAttribute("aria-label", "选择主题");
      select.innerHTML = `
        <option value="system">跟随系统</option>
        <option value="light">浅色</option>
        <option value="dark">深色</option>
      `;
      select.value = learningData.theme;
      select.addEventListener("change", () => setTheme(select.value));
      label.append(text, select);
      host.append(label);
    });
  }

  function renderLanguageControl() {
    document.querySelectorAll(".top-actions").forEach((host) => {
      if (host.querySelector("[data-language-control]")) return;
      const label = document.createElement("label");
      label.className = "language-control theme-control";
      label.dataset.languageControl = "";
      const text = document.createElement("span");
      text.className = "sr-only";
      text.textContent = "Language mode";
      const select = document.createElement("select");
      select.setAttribute("aria-label", "Language mode · 语言模式");
      select.innerHTML = `
        <option value="english">English</option>
        <option value="bilingual">双语 · Bilingual</option>
        <option value="chinese">中文</option>
      `;
      select.value = learningData.languageMode;
      select.addEventListener("change", () => setLanguageMode(select.value));
      label.append(text, select);
      host.append(label);
    });
  }

  function renderHub() {
    const grid = document.querySelector("[data-week-grid]");
    if (!grid) return;
    const available = window.MFC_COURSES.weeks.filter((week) => week.status === "available");
    grid.innerHTML = available.map((week) => {
      const progress = weekProgress(week.id);
      const state = getWeek(week.id);
      const continueAnchor = state.currentSection && state.currentSection !== "overview" ? `#${state.currentSection}` : "";
      const percent = Math.round(progress.completed / progress.total * 100);
      return `
        <article class="week-card">
          <div class="week-card-kicker">WEEK ${String(week.weekNumber).padStart(2, "0")}</div>
          <h2>${week.titleZh}</h2>
          <p class="week-card-en" lang="en">${week.titleEn}</p>
          <div class="week-topics">${week.topics.map((topic) => `<span class="badge">${topic}</span>`).join("")}</div>
          <div class="week-progress-row">
            <div class="week-progress-track" role="progressbar" aria-label="Week ${week.weekNumber} 进度" aria-valuemin="0" aria-valuemax="${progress.total}" aria-valuenow="${progress.completed}"><span style="width:${percent}%"></span></div>
            <span>${progress.completed} / ${progress.total}</span>
          </div>
          <a class="button week-card-action" href="${resolveCoursePath(week.path)}${continueAnchor}">${progress.completed ? "继续学习" : "开始预习"}</a>
        </article>
      `;
    }).join("");

    const last = learningData.lastWeek
      ? window.MFC_COURSES.weeks.find((week) => week.id === learningData.lastWeek)
      : available[0];
    const continueLink = document.querySelector("[data-hub-continue]");
    if (continueLink && last) {
      const state = getWeek(last.id);
      continueLink.href = resolveCoursePath(last.path) + (state.currentSection !== "overview" ? `#${state.currentSection}` : "");
      continueLink.textContent = learningData.lastWeek ? "继续上次学习" : `开始 Week ${last.weekNumber}`;
      continueLink.hidden = false;
    }
  }

  function renderWeekShell() {
    const weekId = rootElement.dataset.weekId;
    if (!weekId) return;
    const weeks = window.MFC_COURSES.weeks.filter((week) => week.status === "available");
    const index = weeks.findIndex((week) => week.id === weekId);
    if (index < 0) return;
    const current = weeks[index];

    document.querySelectorAll("[data-week-label-zh]").forEach((node) => { node.textContent = current.titleZh; });
    document.querySelectorAll("[data-week-label-en]").forEach((node) => { node.textContent = current.titleEn; });
    document.querySelectorAll("[data-week-number]").forEach((node) => { node.textContent = `WEEK ${String(current.weekNumber).padStart(2, "0")}`; });
    document.querySelectorAll("[data-course-home]").forEach((node) => { node.href = resolveCoursePath("index.html"); });

    const prev = weeks[index - 1];
    const next = weeks[index + 1];
    document.querySelectorAll("[data-week-prev]").forEach((node) => {
      node.hidden = !prev;
      if (prev) {
        node.href = resolveCoursePath(prev.path);
        node.querySelector("strong").textContent = prev.titleZh;
      }
    });
    document.querySelectorAll("[data-week-next]").forEach((node) => {
      node.hidden = !next;
      if (next) {
        node.href = resolveCoursePath(next.path);
        node.querySelector("strong").textContent = next.titleZh;
      }
    });
    document.querySelectorAll("[data-week-current]").forEach((node) => {
      node.textContent = current.titleZh;
    });
  }

  applyTheme(learningData.theme);
  rootElement.dataset.languageMode = learningData.languageMode;
  window.MFC_STORE = {
    getData: () => learningData,
    save: saveData,
    getWeek,
    updateWeek,
    resetWeek,
    setTheme,
    setLanguageMode,
    getTheme: () => learningData.theme,
    getLanguageMode: () => learningData.languageMode,
    effectiveTheme: () => effectiveTheme(learningData.theme),
    resolveCoursePath,
    coreSections: defaultWeekSections,
    getWeekSections
  };
  window.runMfcShellSelfTest = () => {
    const weeks = window.MFC_COURSES && Array.isArray(window.MFC_COURSES.weeks) ? window.MFC_COURSES.weeks : [];
    const checks = [
      ["course manifest", weeks.length > 0],
      ["required week fields", weeks.every((week) => week.id && week.weekNumber && week.titleZh && week.titleEn && week.path && Array.isArray(week.topics))],
      ["encoded week path", weeks.every((week) => !week.path.includes("/#") && !week.path.startsWith("#"))],
      ["week section lists", weeks.every((week) => Array.isArray(week.sections) && week.sections.length > 0)],
      ["theme mode", ["system", "light", "dark"].includes(learningData.theme)],
      ["language mode", ["english", "bilingual", "chinese"].includes(learningData.languageMode)],
      ["week state shape", Boolean(weeks[0]) && Array.isArray(getWeek(weeks[0].id).completed)]
    ];
    const failed = checks.filter(([, ok]) => !ok);
    failed.forEach(([name]) => console.assert(false, `MFC shell self-test failed: ${name}`));
    return { passed: checks.length - failed.length, failed: failed.map(([name]) => name) };
  };

  document.addEventListener("DOMContentLoaded", () => {
    renderThemeControl();
    renderLanguageControl();
    renderHub();
    renderWeekShell();
    if (window.MFC_LESSON_KIT) window.MFC_LESSON_KIT.applyLanguageMode(learningData.languageMode);
  });

  if (window.matchMedia) {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const notifySystemTheme = () => {
      rootElement.dataset.effectiveTheme = effectiveTheme(learningData.theme);
      rootElement.style.colorScheme = rootElement.dataset.effectiveTheme;
      if (learningData.theme === "system") {
        document.dispatchEvent(new CustomEvent("mfc:themechange", {
          detail: { theme: "system", effectiveTheme: effectiveTheme("system") }
        }));
      }
    };
    if (media.addEventListener) media.addEventListener("change", notifySystemTheme);
    else if (media.addListener) media.addListener(notifySystemTheme);
  }
})();
