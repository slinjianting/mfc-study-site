(() => {
  "use strict";

  const catalog = window.MFC_PROOF_CATALOG;
  if (!catalog) return;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHtml = (value) => String(value || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const proofs = Array.isArray(catalog.proofs) ? catalog.proofs : [];
  const notes = Object.fromEntries((catalog.notes || []).map((note) => [note.id, note]));
  const proofsById = Object.fromEntries(proofs.map((proof) => [proof.id, proof]));
  const store = window.MFC_STORE;
  let progress = null;

  function initialProofState(proof) {
    const mode = ["exam", "full"].includes(proof.defaultMode) ? proof.defaultMode : "exam";
    return {
      mode,
      states: {
        exam: { revealedCount: 0, activeStepId: proof.modes.exam.stepIds[0] },
        full: { revealedCount: 0, activeStepId: proof.modes.full.stepIds[0] }
      }
    };
  }

  function loadProgress() {
    const week = store.getWeek(catalog.weekId);
    progress = week.proofProgress && typeof week.proofProgress === "object" ? week.proofProgress : {};
    progress.activeProofId = proofsById[progress.activeProofId] ? progress.activeProofId : proofs[0]?.id;
    progress.proofs = progress.proofs && typeof progress.proofs === "object" ? progress.proofs : {};
    proofs.forEach((proof) => {
      const saved = progress.proofs[proof.id];
      const fallback = initialProofState(proof);
      progress.proofs[proof.id] = {
        mode: ["exam", "full"].includes(saved?.mode) ? saved.mode : fallback.mode,
        states: {
          exam: {
            ...fallback.states.exam,
            ...(saved?.states?.exam || {})
          },
          full: {
            ...fallback.states.full,
            ...(saved?.states?.full || {})
          }
        }
      };
      ["exam", "full"].forEach((mode) => {
        const modeSteps = proof.modes[mode].stepIds;
        const state = progress.proofs[proof.id].states[mode];
        state.revealedCount = Math.max(0, Math.min(modeSteps.length, Number(state.revealedCount) || 0));
        state.activeStepId = modeSteps.includes(state.activeStepId) ? state.activeStepId : modeSteps[0];
      });
    });
  }

  function persistProgress() {
    progress.activeProofId = activeProofId();
    store.updateWeek(catalog.weekId, { proofProgress: progress });
  }

  function activeProofId() {
    const hashId = location.hash.replace(/^#/, "");
    return proofsById[hashId] ? hashId : progress?.activeProofId || proofs[0]?.id;
  }

  function currentProof() {
    return proofsById[activeProofId()] || proofs[0];
  }

  function currentMode(proof) {
    return progress.proofs[proof.id].mode;
  }

  function currentModeState(proof) {
    return progress.proofs[proof.id].states[currentMode(proof)];
  }

  function proofPair(zh, en, className = "") {
    return `<div class="proof-pair bi-pair ${className}"><div class="language-zh" lang="zh-CN">${zh}</div><div class="source-en" lang="en">${en}</div></div>`;
  }

  function renderToc() {
    const host = $("[data-proof-toc-list]");
    if (!host) return;
    const current = activeProofId();
    const groups = catalog.stations || [];
    host.innerHTML = groups.map((station) => {
      const stationProofs = proofs.filter((proof) => proof.station === station.id);
      if (!stationProofs.length) return "";
      return `<section class="proof-toc-group">
        <h2>${escapeHtml(station.titleZh)}</h2>
        ${stationProofs.map((proof) => `<a class="proof-toc-item" href="#${escapeHtml(proof.id)}" data-proof-target="${escapeHtml(proof.id)}" aria-current="${proof.id === current}"><span class="proof-toc-number">${escapeHtml(proof.lessonNumber)}</span><span class="proof-toc-title"><span class="language-zh">${escapeHtml(proof.titleZh)}</span><span class="source-en">${escapeHtml(proof.titleEn)}</span></span><small>${proof.modes.exam.stepIds.length} / ${proof.modes.full.stepIds.length}</small></a>`).join("")}
      </section>`;
    }).join("");
  }

  function noteMarkup(noteId) {
    const note = notes[noteId];
    if (!note) return "";
    return `<li class="proof-note-item">
      <span class="proof-note-kind">${escapeHtml(note.kind)}</span>
      ${proofPair(`<strong>${escapeHtml(note.termZh)}</strong>`, `<strong>${escapeHtml(note.termEn)}</strong>`)}
      ${proofPair(`<p>${escapeHtml(note.summaryZh)}</p>`, `<p>${escapeHtml(note.summaryEn)}</p>`)}
      <small>${escapeHtml(note.source?.label || "")} · ${escapeHtml(note.source?.pages || "")}</small>
    </li>`;
  }

  function stepReason(step, mode) {
    const override = step.modeOverrides?.[mode];
    return {
      zh: override?.reasonZh || step.reasonZh,
      en: override?.reasonEn || step.reasonEn
    };
  }

  function renderProof() {
    const proof = currentProof();
    const stage = $("[data-proof-stage]");
    if (!proof || !stage) return;
    const mode = currentMode(proof);
    const modeConfig = proof.modes[mode];
    const state = currentModeState(proof);
    const stepIds = modeConfig.stepIds;
    const stepMap = Object.fromEntries(proof.steps.map((step) => [step.id, step]));
    const activeStep = stepMap[state.activeStepId] || stepMap[stepIds[0]];
    const activeNoteIds = activeStep?.noteIds || [];
    const activeNotes = activeNoteIds.map(noteMarkup).filter(Boolean).join("");
    const canPrev = state.revealedCount > 0;
    const canNext = state.revealedCount < stepIds.length;

    stage.innerHTML = `<article class="proof-record" data-proof-id="${escapeHtml(proof.id)}" data-mode="${mode}">
      <header class="proof-record-heading">
        <div class="proof-record-kicker">${escapeHtml(proof.source?.label || "")}</div>
        <div class="proof-record-title">${proofPair(`<h2>${escapeHtml(proof.titleZh)}</h2>`, `<h2>${escapeHtml(proof.titleEn)}</h2>`)}</div>
        ${proofPair(`<p>${escapeHtml(proof.claimZh)}</p>`, `<p>${escapeHtml(proof.claimEn)}</p>`)}
        <div class="proof-source-line"><span>${escapeHtml(proof.source?.pages || "")}</span><span>${stepIds.length} steps · ${modeConfig.labelZh}</span></div>
      </header>
      <div class="proof-controls">
        <div class="proof-mode-switch" role="group" aria-label="Proof detail level">
          ${["exam", "full"].map((item) => `<button class="proof-mode-button" type="button" data-proof-mode="${item}" aria-pressed="${item === mode}">${escapeHtml(proof.modes[item].labelZh)} · ${proof.modes[item].stepIds.length}</button>`).join("")}
        </div>
        <div class="proof-toolbar">
          <button class="button secondary small proof-action" type="button" data-proof-action="prev" ${canPrev ? "" : "disabled"}>← 上一步</button>
          <button class="button secondary small proof-action" type="button" data-proof-action="next" ${canNext ? "" : "disabled"}>下一步 →</button>
          <button class="button ghost small proof-action" type="button" data-proof-action="expand">全部展开</button>
          <button class="button ghost small proof-action" type="button" data-proof-action="collapse">收起</button>
        </div>
      </div>
      <div class="proof-progress" data-proof-progress>${Math.min(state.revealedCount, stepIds.length)} / ${stepIds.length} 已展开</div>
      <ol class="proof-step-list">
        ${stepIds.map((stepId, index) => {
          const step = stepMap[stepId];
          if (!step) return "";
          const revealed = index < state.revealedCount;
          const target = index === state.revealedCount;
          if (!revealed && !target) return "";
          const active = step.id === state.activeStepId;
          const reason = stepReason(step, mode);
          const stepNotes = (step.noteIds || []).map(noteMarkup).filter(Boolean).join("");
          return `<li class="proof-step-row" data-step-id="${escapeHtml(step.id)}" data-active="${active}">
            <article class="proof-step">
              <button class="proof-step-heading" type="button" data-select-step="${escapeHtml(step.id)}" aria-expanded="${revealed}">
                <span class="proof-step-number">${index + 1}</span>
                <span class="proof-step-title"><span class="language-zh" lang="zh-CN"><strong>${escapeHtml(step.titleZh)}</strong></span><span class="source-en" lang="en"><strong>${escapeHtml(step.titleEn)}</strong></span></span>
              </button>
              <p class="proof-step-goal">${escapeHtml(revealed ? "本步已完成" : "当前目标：打开这一步推理")}</p>
              <div class="proof-step-body" ${revealed ? "" : "hidden"}>
                <p class="proof-formula" lang="en">${escapeHtml(step.formula)}</p>
                ${proofPair(`<p>${escapeHtml(reason.zh)}</p>`, `<p>${escapeHtml(reason.en)}</p>`, "proof-reason")}
                <div class="proof-step-source">${escapeHtml(step.source?.label || "")} · ${escapeHtml(step.source?.pages || "")}</div>
              </div>
            </article>
            ${active ? `<aside class="proof-note-panel" aria-label="Knowledge needed for this step"><h2>这一步用到的知识</h2><ul class="proof-note-list">${stepNotes || '<li class="proof-note-empty">本步沿用前面已引入的记号。</li>'}</ul></aside>` : ""}
          </li>`;
        }).join("")}
      </ol>
    </article>`;

    $("[data-proof-title]").textContent = modeConfig.labelZh;
    document.title = `${proof.titleZh} · Week 4 Proofs`;
    bindProofControls(proof);
    renderToc();
    if (window.MFC_LESSON_KIT?.applyLanguageMode) {
      window.MFC_LESSON_KIT.applyLanguageMode(store.getLanguageMode());
    }
  }

  function bindProofControls(proof) {
    const state = currentModeState(proof);
    const stepIds = proof.modes[currentMode(proof)].stepIds;
    $$("[data-proof-mode]").forEach((button) => button.addEventListener("click", () => {
      progress.proofs[proof.id].mode = button.dataset.proofMode;
      persistProgress();
      renderProof();
    }));
    $$("[data-proof-action]").forEach((button) => button.addEventListener("click", () => {
      const action = button.dataset.proofAction;
      if (action === "next") {
        state.revealedCount = Math.min(stepIds.length, state.revealedCount + 1);
        state.activeStepId = stepIds[Math.max(0, state.revealedCount - 1)];
      } else if (action === "prev") {
        state.revealedCount = Math.max(0, state.revealedCount - 1);
        state.activeStepId = stepIds[Math.max(0, state.revealedCount - 1)];
      } else if (action === "expand") {
        state.revealedCount = stepIds.length;
        state.activeStepId = stepIds[stepIds.length - 1];
      } else if (action === "collapse") {
        state.revealedCount = 0;
        state.activeStepId = stepIds[0];
      }
      persistProgress();
      renderProof();
    }));
    $$("[data-select-step]").forEach((button) => button.addEventListener("click", () => {
      state.activeStepId = button.dataset.selectStep;
      persistProgress();
      renderProof();
    }));
  }

  function selectProof(proofId, updateHash = true) {
    if (!proofsById[proofId]) proofId = proofs[0]?.id;
    if (!proofId) return;
    progress.activeProofId = proofId;
    if (updateHash && location.hash !== `#${proofId}`) {
      history.replaceState(null, "", `#${proofId}`);
    }
    persistProgress();
    renderProof();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function bindNavigation() {
    document.addEventListener("click", (event) => {
      const link = event.target.closest("[data-proof-target]");
      if (!link) return;
      event.preventDefault();
      selectProof(link.dataset.proofTarget);
    });
    window.addEventListener("hashchange", () => {
      const proofId = location.hash.replace(/^#/, "");
      if (proofsById[proofId]) selectProof(proofId, false);
    });
  }

  function init() {
    if (!proofs.length) {
      const stage = $("[data-proof-stage]");
      if (stage) stage.innerHTML = '<p class="proof-empty">本周暂无可展示证明。</p>';
      return;
    }
    loadProgress();
    bindNavigation();
    const initialId = location.hash.replace(/^#/, "");
    if (proofsById[initialId]) progress.activeProofId = initialId;
    renderProof();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
