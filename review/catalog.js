(() => {
  "use strict";

  const parts = Array.isArray(window.MFC_EXERCISE_PARTS) ? window.MFC_EXERCISE_PARTS : [];
  const chapters = parts
    .flatMap((part) => (Array.isArray(part.chapters) ? part.chapters : []))
    .sort((a, b) => a.number - b.number)
    .map((chapter) => ({
      ...chapter,
      knowledgePoints: chapter.knowledgePoints.map((knowledgePoint) => ({
        ...knowledgePoint,
        exercises: knowledgePoint.exercises.map((exercise) => ({
          ...exercise,
          chapterId: chapter.id,
          knowledgePointId: knowledgePoint.id,
          source: `Exercise ${exercise.number} · Section ${knowledgePoint.section}`
        }))
      }))
    }));

  const exercises = chapters.flatMap((chapter) =>
    chapter.knowledgePoints.flatMap((knowledgePoint) =>
      knowledgePoint.exercises.map((exercise, index, list) => ({
        ...exercise,
        chapter,
        knowledgePoint,
        positionInPoint: index,
        positionInPointTotal: list.length
      }))
    )
  );

  const exerciseIndex = Object.fromEntries(exercises.map((exercise, index) => [
    exercise.id,
    { exercise, index }
  ]));

  window.MFC_EXERCISE_CATALOG = {
    version: 1,
    titleZh: "MFC 52 题总复习",
    titleEn: "Mathematical Foundations for Calculus · Complete Exercise Reader",
    chapters,
    exercises,
    exerciseIndex,
    stats: {
      chapters: chapters.length,
      knowledgePoints: chapters.reduce((sum, chapter) => sum + chapter.knowledgePoints.length, 0),
      exercises: exercises.length
    }
  };
})();
