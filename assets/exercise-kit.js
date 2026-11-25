(() => {
  "use strict";

  const catalog = window.MFC_EXERCISE_CATALOG;
  const store = window.MFC_STORE;
  if (!catalog || !store) return;

  const exercises = catalog.exercises;
  const chapterIndex = Object.fromEntries(catalog.chapters.map((chapter) => [chapter.id, chapter]));
  const mapHost = document.querySelector("[data-course-map]");
  const reader = document.querySelector("[data-exercise-reader]");
  const announcer = document.querySelector("[data-review-announcer]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const reviewState = loadReviewState();
  const initialState = resolveInitialState();
  let viewMode = initialState.viewMode;
  let currentChapterId = initialState.chapterId;
  let currentId = initialState.exerciseId;
  let pendingScrollToReader = false;
  let pendingScrollExerciseId = initialState.viewMode === "chapter" ? initialState.exerciseId : null;
  let pendingViewportAnchor = null;
  let chapterSyncFrame = null;

  function emptyProgress() {
    return {
      activeExerciseId: exercises[0]?.id || null,
      reviewedIds: [],
      byExercise: {}
    };
  }

  function normalizeExerciseProgress(progress, exercise) {
    const max = exercise.steps.length;
    return {
      revealedCount: Math.max(0, Math.min(max, Number(progress?.revealedCount) || 0)),
      activeStepIndex: Math.max(0, Math.min(max - 1, Number(progress?.activeStepIndex) || 0))
    };
  }

  function loadReviewState() {
    const week = store.getWeek("review");
    const saved = week.reviewProgress && typeof week.reviewProgress === "object"
      ? week.reviewProgress
      : {};
    const progress = {
      viewMode: saved.viewMode === "chapter" ? "chapter" : "exercise",
      activeChapterId: chapterIndex[saved.activeChapterId] ? saved.activeChapterId : null,
      activeExerciseId: catalog.exerciseIndex[saved.activeExerciseId]
        ? saved.activeExerciseId
        : exercises[0]?.id,
      reviewedIds: Array.isArray(saved.reviewedIds)
        ? saved.reviewedIds.filter((id) => catalog.exerciseIndex[id])
        : [],
      byExercise: {}
    };
    exercises.forEach((exercise) => {
      progress.byExercise[exercise.id] = normalizeExerciseProgress(
        saved.byExercise?.[exercise.id],
        exercise
      );
    });
    return progress;
  }

  function saveReviewState() {
    reviewState.activeExerciseId = currentId;
    reviewState.viewMode = viewMode;
    reviewState.activeChapterId = currentChapterId;
    const data = store.getData();
    const week = store.getWeek("review");
    data.weeks.review = {
      ...week,
      reviewProgress: reviewState
    };
    store.save();
  }

  function resolveInitialState() {
    const hashId = location.hash.replace(/^#/, "");
    if (chapterIndex[hashId]) {
      const chapter = chapterIndex[hashId];
      const savedExercise = reviewState.viewMode === "chapter"
        && reviewState.activeChapterId === hashId
        ? chapterExercises(chapter).find((item) => item.id === reviewState.activeExerciseId)
        : null;
      const exercise = savedExercise
        || chapterExercises(chapter).find((item) => !isReviewed(item.id))
        || chapterExercises(chapter)[0];
      return {
        viewMode: "chapter",
        chapterId: hashId,
        exerciseId: exercise?.id || exercises[0]?.id
      };
    }
    if (catalog.exerciseIndex[hashId]) {
      return {
        viewMode: "exercise",
        chapterId: catalog.exerciseIndex[hashId].exercise.chapterId,
        exerciseId: hashId
      };
    }
    if (reviewState.viewMode === "chapter" && chapterIndex[reviewState.activeChapterId]) {
      const chapter = chapterIndex[reviewState.activeChapterId];
      const savedExercise = chapterExercises(chapter).find(
        (exercise) => exercise.id === reviewState.activeExerciseId
      );
      return {
        viewMode: "chapter",
        chapterId: chapter.id,
        exerciseId: savedExercise?.id || chapterExercises(chapter)[0]?.id
      };
    }
    const savedExercise = catalog.exerciseIndex[reviewState.activeExerciseId]?.exercise;
    return {
      viewMode: "exercise",
      chapterId: savedExercise?.chapterId || catalog.chapters[0]?.id,
      exerciseId: savedExercise?.id || exercises[0]?.id
    };
  }

  function currentExercise() {
    return catalog.exerciseIndex[currentId]?.exercise || exercises[0];
  }

  function currentChapter() {
    return chapterIndex[currentChapterId] || currentExercise()?.chapter;
  }

  function chapterExercises(chapter) {
    if (!chapter) return [];
    return chapter.knowledgePoints.flatMap((knowledgePoint) => knowledgePoint.exercises);
  }

  function currentProgress(exercise) {
    if (!reviewState.byExercise[exercise.id]) {
      reviewState.byExercise[exercise.id] = normalizeExerciseProgress({}, exercise);
    }
    return reviewState.byExercise[exercise.id];
  }

  function isReviewed(exerciseId) {
    return reviewState.reviewedIds.includes(exerciseId);
  }

  function setReviewed(exerciseId, reviewed) {
    const next = new Set(reviewState.reviewedIds);
    if (reviewed) next.add(exerciseId);
    else next.delete(exerciseId);
    reviewState.reviewedIds = [...next];
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function paragraphs(value) {
    return String(value || "")
      .split(/\n{2,}/)
      .map((part) => `<p>${escapeHtml(part)}</p>`)
      .join("");
  }

  function renderMap() {
    if (!mapHost) return;
    const activeExerciseId = currentId;
    const activeChapterId = viewMode === "chapter" ? currentChapterId : currentExercise().chapterId;
    mapHost.innerHTML = catalog.chapters.map((chapter) => {
      const chapterHasActive = chapter.id === activeChapterId;
      const chapterReviewed = chapter.knowledgePoints
        .flatMap((point) => point.exercises)
        .filter((exercise) => isReviewed(exercise.id)).length;
      const chapterTotal = chapter.knowledgePoints.reduce(
        (sum, point) => sum + point.exercises.length,
        0
      );
      return `<article class="map-chapter">
        <details data-map-chapter="${escapeHtml(chapter.id)}" ${chapterHasActive ? "open" : ""}>
          <summary>
            <a
              class="map-chapter-entry"
              href="#${escapeHtml(chapter.id)}"
              data-chapter-target="${escapeHtml(chapter.id)}"
              title="连续阅读本章"
              aria-current="${chapter.id === activeChapterId ? "true" : "false"}"
            >
              <span class="map-chapter-number">CH ${String(chapter.number).padStart(2, "0")}</span>
              <span class="map-chapter-copy">
                <strong>${escapeHtml(chapter.titleZh)}</strong>
                <small lang="en">${escapeHtml(chapter.titleEn)}</small>
              </span>
              <span class="map-count">${chapterReviewed} / ${chapterTotal}</span>
            </a>
            <span class="map-chapter-toggle" aria-hidden="true">目录</span>
          </summary>
          <div class="map-points">
            ${chapter.knowledgePoints.map((point) => {
              const pointHasActive = point.exercises.some((exercise) => exercise.id === activeExerciseId);
              const reviewed = point.exercises.filter((exercise) => isReviewed(exercise.id)).length;
              return `<details class="map-point" data-map-point="${escapeHtml(point.id)}" ${pointHasActive ? "open" : ""}>
                <summary>
                  <span class="map-point-section">${escapeHtml(point.section)}</span>
                  <span>${escapeHtml(point.titleZh)}</span>
                  <small>${reviewed} / ${point.exercises.length}</small>
                </summary>
                <div class="map-exercises">
                  ${point.exercises.map((exercise) => `<a
                    class="map-exercise"
                    href="#${escapeHtml(exercise.id)}"
                    data-exercise-target="${escapeHtml(exercise.id)}"
                    aria-current="${exercise.id === activeExerciseId ? "true" : "false"}"
                    data-reviewed="${isReviewed(exercise.id) ? "true" : "false"}"
                  >
                    <span class="map-exercise-number">${escapeHtml(exercise.number)}</span>
                    <span class="map-exercise-copy">
                      <strong>${escapeHtml(exercise.titleZh)}</strong>
                      <small lang="en">${escapeHtml(exercise.titleEn)}</small>
                    </span>
                    <span class="map-status">${isReviewed(exercise.id) ? "已复习 ✓" : escapeHtml(exercise.type)}</span>
                  </a>`).join("")}
                </div>
              </details>`;
            }).join("")}
          </div>
        </details>
      </article>`;
    }).join("");
    openCurrentBranch();
  }

  function openCurrentBranch() {
    const exercise = currentExercise();
    const chapter = mapHost?.querySelector(`[data-map-chapter="${exercise.chapterId}"]`);
    const point = mapHost?.querySelector(`[data-map-point="${exercise.knowledgePointId}"]`);
    if (chapter) chapter.open = true;
    if (point) point.open = true;
  }

  function stepNotesMarkup(exercise, step) {
    const notes = (step.notes || []).map((note) => `<li class="step-note">
      <span class="step-note-kind">${escapeHtml(note.kind || "知识点")}</span>
      <strong>${escapeHtml(note.term)}</strong>
      <p>${escapeHtml(note.body)}</p>
      ${note.formula ? `<div class="step-note-formula" data-tex>${escapeHtml(`$$${note.formula}$$`)}</div>` : ""}
    </li>`).join("");
    return `<div class="note-stack">
      <div class="knowledge-anchor">
        <span>本题知识锚点</span>
        <strong>${escapeHtml(exercise.knowledgePoint.section)} ${escapeHtml(exercise.knowledgePoint.titleZh)}</strong>
        <p>${escapeHtml(exercise.knowledgePoint.summaryZh)}</p>
        <a href="${escapeHtml(exercise.knowledgePoint.lessonHref)}">回到周学习站细读 →</a>
      </div>
      <h3>这一步用到的知识</h3>
      <ul>${notes || '<li class="step-note-empty">本步沿用前面已经引入的记号与方法。</li>'}</ul>
    </div>`;
  }

  function exerciseCardMarkup(exercise, { continuous = false } = {}) {
    exercise = catalog.exerciseIndex[exercise.id]?.exercise || exercise;
    const progress = currentProgress(exercise);
    const stepIdsVisible = Math.min(exercise.steps.length, progress.revealedCount + 1);
    const activeStep = exercise.steps[progress.activeStepIndex] || exercise.steps[0];
    const reviewed = isReviewed(exercise.id);
    const globalPosition = catalog.exerciseIndex[exercise.id].index;
    const globalPrev = exercises[globalPosition - 1];
    const globalNext = exercises[globalPosition + 1];
    const siblings = chapterExercises(exercise.chapter);
    const localPosition = siblings.findIndex((item) => item.id === exercise.id);
    const localPrev = siblings[localPosition - 1];
    const localNext = siblings[localPosition + 1];
    const prev = continuous ? localPrev : globalPrev;
    const next = continuous ? localNext : globalNext;

    return `<article
      class="exercise-reader-card${continuous ? " chapter-exercise-card" : ""}"
      id="exercise-card-${escapeHtml(exercise.id)}"
      data-exercise-card
      data-exercise-id="${escapeHtml(exercise.id)}"
    >
      <header class="exercise-reader-heading">
        <div class="exercise-reading-kicker">
          <span>CHAPTER ${exercise.chapter.number} · SECTION ${escapeHtml(exercise.knowledgePoint.section)}</span>
          <span>${escapeHtml(exercise.source)}</span>
          ${continuous ? `<span>第 ${localPosition + 1} / ${siblings.length} 题</span><button class="chapter-focus-button" type="button" data-focus-exercise="${escapeHtml(exercise.id)}">单题模式 ↗</button>` : ""}
        </div>
        <div class="exercise-title-row">
          <span class="exercise-number-badge">${escapeHtml(exercise.number)}</span>
          <div>
            <h2>${escapeHtml(exercise.titleZh)}</h2>
            <p class="exercise-title-en" lang="en">${escapeHtml(exercise.titleEn)}</p>
          </div>
          <span class="exercise-type">${escapeHtml(exercise.type)}</span>
        </div>
      </header>

      <section class="question-card" aria-labelledby="question-label-${escapeHtml(exercise.id)}">
        <p class="panel-label" id="question-label-${escapeHtml(exercise.id)}">Original Exercise · 英文原题</p>
        <div class="question-text" lang="en">${paragraphs(exercise.prompt)}</div>
      </section>

      <div class="intent-card">
        <span>中文题意</span>
        <p>${escapeHtml(exercise.intentZh)}</p>
      </div>

      <div class="step-toolbar">
        <div class="step-toolbar-copy">
          <strong>分步答案</strong>
          <span data-step-count>${progress.revealedCount} / ${exercise.steps.length} 步已展开</span>
        </div>
        <div class="step-toolbar-actions">
          <button class="button secondary small" type="button" data-step-action="prev" ${progress.revealedCount > 0 ? "" : "disabled"}>← 上一步</button>
          <button class="button secondary small" type="button" data-step-action="next" ${progress.revealedCount < exercise.steps.length ? "" : "disabled"}>下一步 →</button>
          <button class="button ghost small" type="button" data-step-action="expand">全部展开</button>
          <button class="button ghost small" type="button" data-step-action="collapse">收起</button>
        </div>
      </div>

      <ol class="step-list">
        ${exercise.steps.slice(0, stepIdsVisible).map((step, index) => {
          const revealed = index < progress.revealedCount;
          const active = index === progress.activeStepIndex;
          return `<li class="step-row" data-step-index="${index}" data-active="${active}">
            <article class="step-card">
              <button
                class="step-heading"
                type="button"
                data-select-step="${index}"
                aria-expanded="${revealed}"
              >
                <span class="step-number">${String(index + 1).padStart(2, "0")}</span>
                <span class="step-title-wrap">
                  <span class="step-kind">${escapeHtml(step.kind)}</span>
                  <strong>${escapeHtml(step.label)}</strong>
                  <small>${revealed ? "点击查看这一步的知识点" : "当前目标：点击展开推理"}</small>
                </span>
                <span class="step-chevron" aria-hidden="true">${revealed ? "−" : "+"}</span>
              </button>
              <div class="step-body" ${revealed ? "" : "hidden"}>
                ${step.formula ? `<div class="step-formula" data-tex>${escapeHtml(`$$${step.formula}$$`)}</div>` : ""}
                <div class="step-answer">${paragraphs(step.answer)}</div>
              </div>
            </article>
            ${active ? `<aside class="step-knowledge" aria-label="当前步骤知识点">${stepNotesMarkup(exercise, activeStep)}</aside>` : ""}
          </li>`;
        }).join("")}
      </ol>

      <section class="result-card" ${progress.revealedCount >= exercise.steps.length ? "" : "hidden"}>
        <span>结论 / Answer</span>
        <div data-tex>${escapeHtml(exercise.result)}</div>
      </section>

      <div class="exercise-actions">
        <button class="button secondary small" type="button" data-prev-exercise ${prev ? "" : "disabled"}>← 上一题</button>
        <button class="review-mark" type="button" data-toggle-reviewed aria-pressed="${reviewed}">
          ${reviewed ? "已复习 ✓" : "标记已复习"}
        </button>
        <button class="button secondary small" type="button" data-next-exercise ${next ? "" : "disabled"}>下一题 →</button>
      </div>
    </article>`;
  }

  function chapterReaderMarkup() {
    const chapter = currentChapter();
    const list = chapterExercises(chapter);
    const reviewed = list.filter((exercise) => isReviewed(exercise.id)).length;
    const chapterPosition = catalog.chapters.findIndex((item) => item.id === chapter.id);
    const previousChapter = catalog.chapters[chapterPosition - 1];
    const nextChapter = catalog.chapters[chapterPosition + 1];

    return `<article class="chapter-reader-card" data-chapter-reader="${escapeHtml(chapter.id)}">
      <header class="chapter-reader-heading">
        <div class="eyebrow">CHAPTER ${String(chapter.number).padStart(2, "0")} · CONTINUOUS REVIEW</div>
        <div class="chapter-title-row">
          <div>
            <h2>${escapeHtml(chapter.titleZh)}</h2>
            <p lang="en">${escapeHtml(chapter.titleEn)}</p>
          </div>
          <div class="chapter-stats">
            <strong>${reviewed} / ${list.length}</strong>
            <span>已复习</span>
          </div>
        </div>
        <p class="chapter-reader-summary">覆盖 ${chapter.knowledgePoints.length} 个知识点、${list.length} 道 Exercise。题目按知识点顺序连续排列，答案仍逐题逐步展开。</p>
        <div class="chapter-answer-actions" role="group" aria-label="本章答案显示控制">
          <button class="button secondary small" type="button" data-chapter-answer-action="expand">展开本章答案</button>
          <button class="button ghost small" type="button" data-chapter-answer-action="collapse">收起本章答案</button>
        </div>
      </header>

      <nav class="chapter-question-strip" aria-label="本章题号导航" data-chapter-question-strip>
        ${list.map((exercise) => `<button
          class="chapter-question-jump"
          type="button"
          data-chapter-jump="${escapeHtml(exercise.id)}"
          aria-current="${exercise.id === currentId ? "true" : "false"}"
          data-reviewed="${isReviewed(exercise.id) ? "true" : "false"}"
        >
          <strong>${escapeHtml(exercise.number)}</strong>
          <span>${isReviewed(exercise.id) ? "已复习" : "未复习"}</span>
        </button>`).join("")}
      </nav>

      <div class="chapter-content">
        ${chapter.knowledgePoints.map((point) => `<section class="chapter-knowledge-group">
          <header class="chapter-knowledge-heading">
            <span>${escapeHtml(point.section)}</span>
            <div>
              <h3>${escapeHtml(point.titleZh)}</h3>
              <p>${escapeHtml(point.summaryZh)}</p>
            </div>
          </header>
          <div class="chapter-knowledge-exercises">
            ${point.exercises.map((exercise) => exerciseCardMarkup(exercise, { continuous: true })).join("")}
          </div>
        </section>`).join("")}
      </div>

      <nav class="chapter-pager" aria-label="章节连续阅读导航">
        <button class="button secondary" type="button" data-open-chapter="${escapeHtml(previousChapter?.id || "")}" ${previousChapter ? "" : "disabled"}>
          <small>上一章</small>
          <strong>${escapeHtml(previousChapter?.titleZh || "已经是第一章")}</strong>
        </button>
        <a class="button ghost" href="#course-map">返回思维导图</a>
        <button class="button secondary" type="button" data-open-chapter="${escapeHtml(nextChapter?.id || "")}" ${nextChapter ? "" : "disabled"}>
          <small>下一章</small>
          <strong>${escapeHtml(nextChapter?.titleZh || "已经是最后一章")}</strong>
        </button>
      </nav>
    </article>`;
  }

  function renderReader() {
    if (!reader) return;
    if (!currentExercise()) {
      reader.innerHTML = '<p class="empty-reader">暂时没有可显示的题目。</p>';
      return;
    }

    reader.innerHTML = viewMode === "chapter"
      ? chapterReaderMarkup()
      : exerciseCardMarkup(currentExercise());

    renderMath(reader);
    updateGlobalProgress();
    updateMapStatus();
    document.title = viewMode === "chapter"
      ? `${currentChapter().number} ${currentChapter().titleZh} · 连续复习 · MFC 52 题总复习`
      : `${currentExercise().number} ${currentExercise().titleZh} · MFC 52 题总复习`;
    document.querySelectorAll("[data-reader-mode-label]").forEach((node) => {
      node.textContent = viewMode === "chapter" ? "CHAPTER CONTINUOUS READER" : "SINGLE EXERCISE READER";
    });

    window.requestAnimationFrame(() => {
      if (pendingViewportAnchor) {
        const anchor = pendingViewportAnchor;
        pendingViewportAnchor = null;
        const card = reader.querySelector(`[data-exercise-card][data-exercise-id="${anchor.id}"]`);
        if (card) {
          const nextTop = card.getBoundingClientRect().top;
          window.scrollBy({ top: nextTop - anchor.top, behavior: "auto" });
        }
      }
      if (viewMode === "chapter" && pendingScrollExerciseId) {
        const targetId = pendingScrollExerciseId;
        pendingScrollExerciseId = null;
        scrollToChapterExercise(targetId, { behavior: reducedMotion.matches ? "auto" : "smooth" });
      } else if (pendingScrollToReader) {
        pendingScrollToReader = false;
        reader.closest(".reader-section")?.scrollIntoView({
          behavior: reducedMotion.matches ? "auto" : "smooth",
          block: "start"
        });
      }
      if (viewMode === "chapter") syncChapterQuestionPosition();
    });
  }

  function renderMath(root) {
    if (!root || typeof window.renderMathInElement !== "function") return;
    try {
      window.renderMathInElement(root, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false,
        strict: "ignore"
      });
    } catch (error) {
      console.error("KaTeX rendering failed", error);
    }
  }

  function updateGlobalProgress() {
    const count = reviewState.reviewedIds.length;
    document.querySelectorAll("[data-top-progress]").forEach((node) => {
      node.textContent = `已复习 ${count} / ${exercises.length}`;
    });
  }

  function updateMapStatus() {
    const activeChapterId = viewMode === "chapter" ? currentChapterId : currentExercise().chapterId;
    mapHost?.querySelectorAll("[data-exercise-target]").forEach((link) => {
      const id = link.dataset.exerciseTarget;
      const reviewed = isReviewed(id);
      const status = link.querySelector(".map-status");
      const exercise = catalog.exerciseIndex[id]?.exercise;
      if (status) status.textContent = reviewed ? "已复习 ✓" : exercise?.type || "";
      link.dataset.reviewed = String(reviewed);
      link.setAttribute("aria-current", id === currentId ? "true" : "false");
    });
    mapHost?.querySelectorAll("[data-chapter-target]").forEach((link) => {
      link.setAttribute("aria-current", link.dataset.chapterTarget === activeChapterId ? "true" : "false");
    });
    mapHost?.querySelectorAll(".map-chapter").forEach((chapterNode) => {
      const chapterId = chapterNode.querySelector("[data-map-chapter]")?.dataset.mapChapter;
      const chapter = catalog.chapters.find((item) => item.id === chapterId);
      if (!chapter) return;
      const all = chapter.knowledgePoints.flatMap((point) => point.exercises);
      const count = all.filter((exercise) => isReviewed(exercise.id)).length;
      const badge = chapterNode.querySelector(".map-count");
      if (badge) badge.textContent = `${count} / ${all.length}`;
    });
    updateChapterNavigation();
  }

  function updateChapterNavigation() {
    document.querySelectorAll("[data-chapter-jump]").forEach((button) => {
      const id = button.dataset.chapterJump;
      button.setAttribute("aria-current", id === currentId ? "true" : "false");
      button.dataset.reviewed = String(isReviewed(id));
      const status = button.querySelector("span");
      if (status) status.textContent = isReviewed(id) ? "已复习" : "未复习";
    });
  }

  function setActiveChapterExercise(exerciseId, { persist = true } = {}) {
    if (!catalog.exerciseIndex[exerciseId]) return;
    const exercise = catalog.exerciseIndex[exerciseId].exercise;
    currentChapterId = exercise.chapterId;
    if (currentId !== exerciseId) {
      currentId = exerciseId;
      reviewState.activeExerciseId = exerciseId;
      if (persist) saveReviewState();
    }
    updateMapStatus();
  }

  function scrollToChapterExercise(exerciseId, options = {}) {
    const target = reader?.querySelector(
      `[data-exercise-card][data-exercise-id="${exerciseId}"]`
    );
    if (!target) return;
    setActiveChapterExercise(exerciseId);
    target.scrollIntoView({
      behavior: options.behavior || (reducedMotion.matches ? "auto" : "smooth"),
      block: "start"
    });
    const strip = document.querySelector("[data-chapter-question-strip]");
    const active = strip?.querySelector(`[data-chapter-jump="${exerciseId}"]`);
    if (strip && active) {
      const stripRect = strip.getBoundingClientRect();
      const activeRect = active.getBoundingClientRect();
      if (activeRect.left < stripRect.left || activeRect.right > stripRect.right) {
        strip.scrollBy({
          left: activeRect.left - stripRect.left - (stripRect.width - activeRect.width) / 2,
          behavior: reducedMotion.matches ? "auto" : "smooth"
        });
      }
    }
  }

  function syncChapterQuestionPosition() {
    if (viewMode !== "chapter") return;
    const cards = [...(reader?.querySelectorAll("[data-exercise-card]") || [])];
    if (!cards.length) return;
    const topbarHeight = document.querySelector(".topbar")?.getBoundingClientRect().height || 0;
    const stripHeight = document.querySelector("[data-chapter-question-strip]")?.getBoundingClientRect().height || 0;
    const threshold = topbarHeight + stripHeight + 28;
    let activeId = cards[0].dataset.exerciseId;
    cards.forEach((card) => {
      if (card.getBoundingClientRect().top <= threshold) {
        activeId = card.dataset.exerciseId;
      }
    });
    setActiveChapterExercise(activeId);
    const strip = document.querySelector("[data-chapter-question-strip]");
    const active = strip?.querySelector(`[data-chapter-jump="${activeId}"]`);
    if (strip && active) {
      const stripRect = strip.getBoundingClientRect();
      const activeRect = active.getBoundingClientRect();
      if (activeRect.left < stripRect.left || activeRect.right > stripRect.right) {
        strip.scrollBy({
          left: activeRect.left - stripRect.left - (stripRect.width - activeRect.width) / 2,
          behavior: reducedMotion.matches ? "auto" : "smooth"
        });
      }
    }
  }

  function announce(message) {
    if (!announcer) return;
    announcer.textContent = "";
    window.requestAnimationFrame(() => {
      announcer.textContent = message;
    });
  }

  function selectExercise(exerciseId, options = {}) {
    if (!catalog.exerciseIndex[exerciseId]) return;
    const exercise = catalog.exerciseIndex[exerciseId].exercise;
    viewMode = "exercise";
    currentId = exerciseId;
    currentChapterId = exercise.chapterId;
    reviewState.activeExerciseId = exerciseId;
    if (options.updateHash !== false && location.hash !== `#${exerciseId}`) {
      history.replaceState(null, "", `#${exerciseId}`);
    }
    saveReviewState();
    renderMap();
    pendingScrollToReader = options.scroll === true;
    renderReader();
    if (options.scroll === true) announce(`已打开 Exercise ${currentExercise().number}。`);
  }

  function selectChapter(chapterId, options = {}) {
    const chapter = chapterIndex[chapterId];
    if (!chapter) return;
    const list = chapterExercises(chapter);
    let target = options.exerciseId
      ? list.find((exercise) => exercise.id === options.exerciseId)
      : null;
    if (!target && options.startAtUnread) {
      target = list.find((exercise) => !isReviewed(exercise.id));
    }
    if (!target && currentChapterId === chapterId) {
      target = list.find((exercise) => exercise.id === currentId);
    }
    target = target || list.find((exercise) => !isReviewed(exercise.id)) || list[0];
    if (!target) return;

    viewMode = "chapter";
    currentChapterId = chapterId;
    currentId = target.id;
    reviewState.activeExerciseId = target.id;
    if (options.updateHash !== false && location.hash !== `#${chapterId}`) {
      history.replaceState(null, "", `#${chapterId}`);
    }
    saveReviewState();
    renderMap();
    pendingScrollExerciseId = options.scroll === false ? null : target.id;
    pendingScrollToReader = false;
    renderReader();
    if (options.scroll !== false) {
      announce(`已打开第 ${chapter.number} 章连续复习，共 ${list.length} 道题。`);
    }
  }

  function updateStep(index, exercise = currentExercise()) {
    const progress = currentProgress(exercise);
    progress.activeStepIndex = Math.max(0, Math.min(exercise.steps.length - 1, index));
  }

  function setReviewMark(reviewed, exercise = currentExercise()) {
    setReviewed(exercise.id, reviewed);
    saveReviewState();
    renderMap();
    renderReader();
    announce(reviewed ? `Exercise ${exercise.number} 已标记为已复习。` : `Exercise ${exercise.number} 已取消复习标记。`);
  }

  mapHost?.addEventListener("click", (event) => {
    const chapterLink = event.target.closest("[data-chapter-target]");
    if (chapterLink) {
      event.preventDefault();
      event.stopPropagation();
      selectChapter(chapterLink.dataset.chapterTarget, {
        scroll: true,
        startAtUnread: true
      });
      return;
    }
    const link = event.target.closest("[data-exercise-target]");
    if (!link) return;
    event.preventDefault();
    selectExercise(link.dataset.exerciseTarget, { scroll: true });
  });

  document.querySelector("[data-map-expand='all']")?.addEventListener("click", () => {
    mapHost?.querySelectorAll("details").forEach((details) => {
      details.open = true;
    });
    announce("已展开整课思维导图。");
  });

  document.querySelector("[data-map-expand='none']")?.addEventListener("click", () => {
    mapHost?.querySelectorAll("details").forEach((details) => {
      details.open = false;
    });
    announce("已收起整课思维导图。");
  });

  document.querySelector("[data-map-expand='current']")?.addEventListener("click", () => {
    mapHost?.querySelectorAll("details").forEach((details) => {
      details.open = false;
    });
    openCurrentBranch();
    announce("已展开当前题目所在分支。");
  });

  reader?.addEventListener("click", (event) => {
    const card = event.target.closest("[data-exercise-card]");
    const exercise = card && catalog.exerciseIndex[card.dataset.exerciseId]
      ? catalog.exerciseIndex[card.dataset.exerciseId].exercise
      : currentExercise();
    const captureAnchor = () => {
      if (viewMode === "chapter" && card) {
        pendingViewportAnchor = {
          id: exercise.id,
          top: card.getBoundingClientRect().top
        };
      }
    };

    const stepButton = event.target.closest("[data-select-step]");
    if (stepButton) {
      const progress = currentProgress(exercise);
      const index = Number(stepButton.dataset.selectStep);
      if (index >= progress.revealedCount) progress.revealedCount = index + 1;
      updateStep(index, exercise);
      if (progress.revealedCount >= exercise.steps.length) setReviewed(exercise.id, true);
      saveReviewState();
      captureAnchor();
      renderMap();
      renderReader();
      return;
    }

    const action = event.target.closest("[data-step-action]")?.dataset.stepAction;
    if (action) {
      const progress = currentProgress(exercise);
      if (action === "next") {
        progress.revealedCount = Math.min(exercise.steps.length, progress.revealedCount + 1);
        progress.activeStepIndex = Math.max(0, progress.revealedCount - 1);
      } else if (action === "prev") {
        progress.revealedCount = Math.max(0, progress.revealedCount - 1);
        progress.activeStepIndex = Math.max(0, progress.revealedCount - 1);
      } else if (action === "expand") {
        progress.revealedCount = exercise.steps.length;
        progress.activeStepIndex = exercise.steps.length - 1;
      } else if (action === "collapse") {
        progress.revealedCount = 0;
        progress.activeStepIndex = 0;
      }
      if (progress.revealedCount >= exercise.steps.length) setReviewed(exercise.id, true);
      saveReviewState();
      captureAnchor();
      renderMap();
      renderReader();
      return;
    }

    if (event.target.closest("[data-toggle-reviewed]")) {
      captureAnchor();
      setReviewMark(!isReviewed(exercise.id), exercise);
      return;
    }

    if (event.target.closest("[data-prev-exercise]")) {
      if (viewMode === "chapter") {
        const list = chapterExercises(exercise.chapter);
        const index = list.findIndex((item) => item.id === exercise.id);
        if (index > 0) scrollToChapterExercise(list[index - 1].id);
        return;
      }
      const index = catalog.exerciseIndex[currentId].index;
      if (index > 0) selectExercise(exercises[index - 1].id, { scroll: true });
      return;
    }

    if (event.target.closest("[data-next-exercise]")) {
      if (viewMode === "chapter") {
        const list = chapterExercises(exercise.chapter);
        const index = list.findIndex((item) => item.id === exercise.id);
        if (index >= 0 && index < list.length - 1) scrollToChapterExercise(list[index + 1].id);
        return;
      }
      const index = catalog.exerciseIndex[currentId].index;
      if (index < exercises.length - 1) selectExercise(exercises[index + 1].id, { scroll: true });
      return;
    }

    const focusButton = event.target.closest("[data-focus-exercise]");
    if (focusButton) {
      selectExercise(focusButton.dataset.focusExercise, { scroll: true });
      return;
    }

    const chapterJump = event.target.closest("[data-chapter-jump]");
    if (chapterJump) {
      scrollToChapterExercise(chapterJump.dataset.chapterJump);
      return;
    }

    const answerAction = event.target.closest("[data-chapter-answer-action]")?.dataset.chapterAnswerAction;
    if (answerAction) {
      const list = chapterExercises(currentChapter());
      const anchorCard = reader.querySelector(`[data-exercise-card][data-exercise-id="${currentId}"]`);
      if (anchorCard) {
        pendingViewportAnchor = {
          id: currentId,
          top: anchorCard.getBoundingClientRect().top
        };
      }
      list.forEach((item) => {
        const progress = currentProgress(item);
        if (answerAction === "expand") {
          progress.revealedCount = item.steps.length;
          progress.activeStepIndex = item.steps.length - 1;
          setReviewed(item.id, true);
        } else {
          progress.revealedCount = 0;
          progress.activeStepIndex = 0;
        }
      });
      saveReviewState();
      renderMap();
      renderReader();
      announce(answerAction === "expand" ? "本章所有答案已展开。" : "本章所有答案已收起。");
      return;
    }

    const openChapterButton = event.target.closest("[data-open-chapter]");
    if (openChapterButton && !openChapterButton.disabled) {
      selectChapter(openChapterButton.dataset.openChapter, {
        scroll: true,
        startAtUnread: true
      });
    }
  });

  document.querySelector("[data-continue-review]")?.addEventListener("click", () => {
    if (viewMode === "chapter") {
      selectChapter(currentChapterId, {
        scroll: true,
        exerciseId: currentId
      });
    } else {
      selectExercise(currentId || exercises[0].id, { scroll: true });
    }
  });

  document.querySelector("[data-back-to-map]")?.addEventListener("click", () => {
    document.querySelector("#course-map")?.scrollIntoView({
      behavior: reducedMotion.matches ? "auto" : "smooth",
      block: "start"
    });
  });

  document.querySelector("[data-reset-review]")?.addEventListener("click", () => {
    if (!window.confirm("清除 52 题总复习的展开步骤和已复习标记？主题与周学习进度会保留。")) {
      return;
    }
    reviewState.activeExerciseId = exercises[0].id;
    reviewState.viewMode = "exercise";
    reviewState.activeChapterId = exercises[0].chapterId;
    reviewState.reviewedIds = [];
    reviewState.byExercise = {};
    exercises.forEach((exercise) => {
      reviewState.byExercise[exercise.id] = normalizeExerciseProgress({}, exercise);
    });
    viewMode = "exercise";
    currentChapterId = exercises[0].chapterId;
    currentId = exercises[0].id;
    history.replaceState(null, "", `#${currentId}`);
    saveReviewState();
    renderMap();
    renderReader();
    updateGlobalProgress();
    announce("总复习进度已重置。");
  });

  window.addEventListener("hashchange", () => {
    const id = location.hash.replace(/^#/, "");
    if (chapterIndex[id]) {
      if (viewMode !== "chapter" || id !== currentChapterId) {
        selectChapter(id, { updateHash: false, scroll: true, startAtUnread: true });
      }
    } else if (catalog.exerciseIndex[id] && (viewMode !== "exercise" || id !== currentId)) {
      selectExercise(id, { updateHash: false });
    }
  });

  window.addEventListener("scroll", () => {
    if (viewMode !== "chapter") return;
    if (chapterSyncFrame !== null) window.cancelAnimationFrame(chapterSyncFrame);
    chapterSyncFrame = window.requestAnimationFrame(() => {
      chapterSyncFrame = null;
      syncChapterQuestionPosition();
    });
  }, { passive: true });

  window.addEventListener("resize", () => {
    if (viewMode === "chapter") syncChapterQuestionPosition();
  });

  renderMap();
  renderReader();
  updateGlobalProgress();

  if (location.hash === "#self-test") {
    console.assert(catalog.stats.exercises === 52, "Expected 52 exercises");
    console.assert(catalog.stats.chapters === 12, "Expected 12 chapters");
    console.assert(document.querySelectorAll("[data-exercise-target]").length === 52, "Map should contain 52 targets");
    console.assert(document.querySelectorAll("[data-chapter-target]").length === 12, "Map should contain 12 chapter targets");
    console.assert(!document.querySelector("textarea[data-answer]"), "No answer input should exist");
  }
})();
