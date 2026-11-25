window.MFC_ENGLISH_PACKS = window.MFC_ENGLISH_PACKS || {};

window.MFC_ENGLISH_PACKS.week1 = {
  "set-operations": {
    networkGoalEn: "Separate elements, subsets and set operations",
    networkRiskEn: "Mixing up ∈ with ⊆",
    explanationEn: [
      "A set is a collection of objects. Set operations compare membership: the union keeps an object when it appears in at least one set, the intersection keeps it only when it appears in both, and the difference keeps it only when it appears in the first set but not the second.",
      "The notation is a shorthand for membership tests. Read every symbol by asking what is on each side: an element belongs to a set with ∈, while a set is contained in another set with ⊆."
    ],
    framesEn: [
      "Two sets are shown separately.",
      "The union collects every member of A or B.",
      "The intersection keeps only the overlap.",
      "The difference removes B from A.",
      "Changing the operation changes the selected region."
    ],
    qa: [
      {
        hintEn: "Picture two boxes of cards and three different rules for selecting cards.",
        answerEn: "The union combines the cards from both boxes. The intersection keeps only cards that occur in both boxes. The difference starts with the left box and removes every card that also occurs in the right box."
      },
      {
        hintEn: "Ask whether each side of the symbol is an object or a set.",
        answerEn: "The symbol ∈ compares an object with a set, so 1 ∈ {1, 2} says that the number 1 is an element. The symbol ⊆ compares two sets, so {1} ⊆ {1, 2} says that every element of the first set lies in the second. Writing 1 ⊆ {1, 2} confuses an object with a set."
      },
      {
        hintEn: "Check each member of A and B against all three membership rules.",
        answerEn: "For A = {1, 2, 3} and B = {2, 4}, the union is {1, 2, 3, 4}; the intersection is {2}; and A ∖ B is {1, 3}. Sets do not remember order or repetition, so listing the union as {4, 3, 2, 1} describes the same set."
      },
      {
        hintEn: "Treat an endpoint as a separate membership question.",
        answerEn: "Whenever the operation removes an interval, test each endpoint independently. For example, when (2, 4] is removed from [0, 2], the point 2 remains because 2 is not an element of (2, 4]. A colored drawing helps, but the actual inequality decides whether the endpoint belongs."
      },
      {
        hintEn: "One inclusion rules out members missing from one side; the other inclusion rules out extra members.",
        answerEn: "Proving A ⊆ B shows that A has no element outside B. It does not rule out B having an extra element. Proving B ⊆ A removes that remaining possibility. Therefore A = B exactly when both inclusions hold."
      }
    ],
    counterexampleEn: {
      wrong: "Because 1 appears inside {1, 2}, write 1 ⊆ {1, 2}.",
      correct: "Write 1 ∈ {1, 2}. The subset statement is {1} ⊆ {1, 2}.",
      why: "The symbol ∈ compares an object with a container, while ⊆ compares two containers."
    },
    checkEn: "Why must equality of two sets be proved in both directions?",
    checkAnswerEn: "The proof A ⊆ B shows that A has no missing elements; B ⊆ A shows that B has no extra elements. Together they prove that the two collections contain exactly the same objects."
  },
  "number-intervals": {
    networkGoalEn: "Translate inequalities directly into intervals on the number line",
    networkRiskEn: "Closing an endpoint at infinity",
    explanationEn: [
      "An interval describes a continuous portion of the real line. Its inequality records where the interval lies, and its bracket type records whether each finite endpoint is included.",
      "A square bracket includes an endpoint, while a round bracket excludes it. Infinity is never a real endpoint, so the infinity side is always open."
    ],
    framesEn: [
      "An interval is one connected portion of the number line.",
      "Round brackets exclude the finite endpoints.",
      "Square brackets include the finite endpoints.",
      "The inequalities and endpoint marks describe the same set.",
      "Each endpoint must be checked separately."
    ],
    qa: [
      {
        hintEn: "Think of a stretch of road and decide whether each end post is part of the stretch.",
        answerEn: "An interval is a connected range on the number line. A finite interval needs a left position, a right position and a decision about whether each endpoint is included."
      },
      {
        hintEn: "Match each bracket to the strict or non-strict part of the inequality.",
        answerEn: "A round bracket excludes its endpoint, while a square bracket includes it. For −2 < x ≤ 3, the strict inequality at −2 gives a round bracket and the inequality at 3 allows equality, giving a square bracket. The interval is (−2, 3]."
      },
      {
        hintEn: "For an intersection, an endpoint survives only if both intervals contain it.",
        answerEn: "The right interval contains 3 and the left interval contains 4. Every number between 3 and 4 belongs to both intervals, and both endpoints are retained. Hence (1, 4] ∩ [3, 6) = [3, 4]."
      },
      {
        hintEn: "Infinity describes a direction of travel, not a number that can be reached.",
        answerEn: "Infinity is not the endpoint of a real interval. It only says that the interval continues without stopping in that direction. There is therefore no real point to include, and the infinity side is always written with a round bracket."
      },
      {
        hintEn: "Do not classify the entire interval as open or closed until both ends have been checked.",
        answerEn: "At each finite endpoint, ask whether the inequality permits equality. If it does, use a square bracket; if it does not, use a round bracket. If the endpoint is +∞ or −∞, use a round bracket immediately."
      }
    ],
    counterexampleEn: {
      wrong: "Write −2 < x ≤ 3 as (−2, 3).",
      correct: "Write it as (−2, 3], because x = 3 is allowed.",
      why: "The inequality at 3 includes equality, so the right endpoint must be included."
    },
    checkEn: "Why can an interval never have a square bracket beside infinity?",
    checkAnswerEn: "Infinity is a direction of unbounded extension, not a real number. There is no real point at infinity to include in the set."
  },
  "bounds-supremum": {
    networkGoalEn: "Distinguish upper bounds, suprema and maxima",
    networkRiskEn: "Assuming the supremum must belong to the set",
    explanationEn: [
      "An upper bound is a number that is at least as large as every member of the set. Many upper bounds may exist, and none of them has to belong to the set.",
      "The supremum is the smallest of all upper bounds. A maximum is stronger: it must be an upper bound and must also belong to the set."
    ],
    framesEn: [
      "A horizontal line lies above every point of the set.",
      "Many different upper bounds can be chosen.",
      "Lowering the upper bound makes the constraint tighter.",
      "The lowest possible upper bound is the supremum.",
      "The supremum is a maximum only if it belongs to the set."
    ],
    qa: [
      {
        hintEn: "Think of a ceiling that stays above every point.",
        answerEn: "A number M is an upper bound when every x in the set satisfies x ≤ M. The point M itself may lie outside the set; being above the set is the only requirement."
      },
      {
        hintEn: "Compare the jobs of three related objects: all ceilings, the lowest ceiling, and a highest member.",
        answerEn: "Upper bounds are all numbers that stay above the set. The least upper bound is the supremum. A maximum must be both the supremum and an element of the set. Thus max A exists exactly when sup A belongs to A."
      },
      {
        hintEn: "Show that 1 is the least upper bound and then ask whether 1 is in the interval.",
        answerEn: "Every point of (0, 1) is below 1, and any number smaller than 1 fails to be an upper bound. Hence sup(0, 1) = 1. But 1 is excluded from the interval. Also, for every x in (0, 1), the midpoint (x + 1)/2 is still in the set and is larger than x, so no member is largest."
      },
      {
        hintEn: "Adding endpoints changes membership, not the location of the least upper and lower bounds.",
        answerEn: "The smallest upper bound of [0, 1] is still 1, and now 1 belongs to the set, so sup[0, 1] = max[0, 1] = 1. Similarly, 0 becomes the minimum. Endpoint inclusion changes whether extrema are attained."
      },
      {
        hintEn: "Separate the question “is it an upper bound?” from “is it inside the set?”",
        answerEn: "A supremum is defined by its role among upper bounds, not by membership. In an open interval the least upper bound can be exactly the missing endpoint, so it need not belong to the set."
      }
    ],
    counterexampleEn: {
      wrong: "Since sup(0, 1) = 1, the maximum of (0, 1) is also 1.",
      correct: "The supremum is 1, but 1 is not an element, so the set has no maximum.",
      why: "A supremum may lie outside the set; a maximum is required to belong to it."
    },
    checkEn: "What extra condition turns a supremum into a maximum?",
    checkAnswerEn: "The supremum must also belong to the set."
  },
  "absolute-triangle": {
    networkGoalEn: "Read absolute value as distance and split errors safely",
    networkRiskEn: "Replacing the triangle inequality by an equality",
    explanationEn: [
      "Absolute value measures distance. The expression |x − a| is the distance between x and a, so an inequality such as |x − a| < r describes all points within a radius r of a.",
      "The triangle inequality says that taking a direct route is never longer than taking two legs. It is usually an inequality, not an equality, because opposite signs can cancel."
    ],
    framesEn: [
      "Absolute value measures the distance between two points.",
      "Going around through a second point cannot shorten the trip.",
      "The forward triangle inequality bounds a combined error.",
      "The reverse inequality prevents a distance from becoming too small.",
      "The inequality is usually strict in direction, with equality only in special cases."
    ],
    qa: [
      {
        hintEn: "Say “within r of a” in ordinary language first.",
        answerEn: "It means that the distance from x to a is less than r. Geometrically, x lies in an interval of radius r centred at a."
      },
      {
        hintEn: "Remove the absolute value by writing a double inequality.",
        answerEn: "The inequality |x − a| < r is equivalent to −r < x − a < r. Adding a to all three parts gives a − r < x < a + r."
      },
      {
        hintEn: "Move three units to the left and three units to the right from 2.",
        answerEn: "The distance from x to 2 is less than 3, so x is strictly between 2 − 3 = −1 and 2 + 3 = 5. Therefore the solution is the open interval (−1, 5)."
      },
      {
        hintEn: "Test numbers with opposite signs, such as 1 and −1.",
        answerEn: "With x = 1 and y = −1, |x + y| = 0 while |x| + |y| = 2. The expression on the right is larger, so equality is not generally valid. The triangle inequality gives an upper bound on the direct size."
      },
      {
        hintEn: "Use a concrete counterexample before giving the general explanation.",
        answerEn: "The pair x = 1, y = −1 shows that replacing ≤ by = is false: 0 is not equal to 2. The correct statement is |x + y| ≤ |x| + |y|; the inequality is exactly what is needed to bound a total error."
      }
    ],
    counterexampleEn: {
      wrong: "Because |1 + (−1)| = |1| + |−1|, the triangle inequality is always an equality.",
      correct: "The two sides are 0 and 2, so this example gives a strict inequality.",
      why: "Opposite signs cancel in the sum but not in the sum of absolute values."
    },
    checkEn: "Which numbers give equality in |x + y| = |x| + |y|?",
    checkAnswerEn: "Equality occurs when x and y have the same sign, or when at least one of them is zero."
  },
  "functions-images": {
    networkGoalEn: "Separate codomain, image and preimage",
    networkRiskEn: "Assuming f⁻¹(F) means that f has an inverse function",
    explanationEn: [
      "A function assigns exactly one output to each allowed input. Its domain says which inputs are allowed, and its codomain declares the larger set in which outputs live.",
      "The image collects outputs that are actually produced. A preimage starts with a set of outputs and collects every input that lands inside that set. Preimages exist even when no inverse function exists."
    ],
    framesEn: [
      "Each allowed input follows exactly one arrow to an output.",
      "The image collects the outputs that are actually reached.",
      "A preimage reverses the question for a chosen output set.",
      "Many inputs may land in the same preimage.",
      "The codomain can be larger than the set of outputs actually used."
    ],
    qa: [
      {
        hintEn: "Ask what can enter the machine, where its outputs are allowed to live, and how it processes an input.",
        answerEn: "A formula alone does not specify a function completely. The domain states the allowed inputs, the codomain states the ambient output set, and the rule assigns one output to each input."
      },
      {
        hintEn: "Compare “declared output space” with “outputs actually produced”.",
        answerEn: "The codomain is the declared output set. The image f(A) contains only the values that really occur as f(x) for some x in A. Therefore the image is a subset of the codomain and may be strictly smaller."
      },
      {
        hintEn: "Check the smallest and largest values of the square on the interval, remembering that squaring is not order-preserving for negative inputs.",
        answerEn: "The outputs include 0 at x = 0, include 1 at x = 1, and reach 4 at x = −2. No output is negative and no output exceeds 4, so the image is [0, 4], not [4, 1]."
      },
      {
        hintEn: "Solve x² ∈ [0, 4] without requiring a unique solution.",
        answerEn: "The condition 0 ≤ x² ≤ 4 is satisfied exactly by −2 ≤ x ≤ 2, so f⁻¹([0, 4]) = [−2, 2]. The function still has no global inverse because x and −x produce the same positive output."
      },
      {
        hintEn: "Use two directional questions.",
        answerEn: "For an image, ask: “Where do these inputs go?” For a preimage, ask: “Which inputs enter this chosen output set?” The first collects outputs; the second traces back from outputs to inputs."
      }
    ],
    counterexampleEn: {
      wrong: "Because x² is not injective, the expression f⁻¹([0, 4]) is undefined.",
      correct: "The inverse function does not exist, but the preimage is still [−2, 2].",
      why: "A preimage collects every input landing in the set; an inverse function requires a unique input for every output."
    },
    checkEn: "Can a preimage exist when the function is not injective?",
    checkAnswerEn: "Yes. A preimage may contain several inputs. Injectivity is only needed for an inverse function."
  },
  "composition-domain": {
    networkGoalEn: "Check a composition from the inside outward",
    networkRiskEn: "Missing a domain restriction from one layer",
    explanationEn: [
      "A composition is a chain of two machines. The inner function acts first, and the outer function must accept the output produced by the inner function.",
      "To find the natural domain, impose the inner function's restrictions and the outer function's restrictions at the same time. Simplifying a formula later does not restore points that were originally undefined."
    ],
    framesEn: [
      "The two function machines are joined in sequence.",
      "The input enters the inner function first.",
      "The outer function must accept the inner output.",
      "A failed domain condition stops the entire chain.",
      "Cancellation changes the formula but not the original domain."
    ],
    qa: [
      {
        hintEn: "Focus on the handoff between the two machines.",
        answerEn: "The first machine must produce an output that the second machine accepts. If f(x) lies outside the domain of g, then g(f(x)) has no defined value even though f(x) itself exists."
      },
      {
        hintEn: "Look at the inner expression next to x.",
        answerEn: "In g ∘ f, the function f acts first because it is next to x. The result f(x) is then passed to g. Thus (g ∘ f)(x) = g(f(x))."
      },
      {
        hintEn: "For √(x − 1), the quantity under the square root cannot be negative.",
        answerEn: "The composite is √(x − 1). The square root requires x − 1 ≥ 0, which gives x ≥ 1. Therefore the natural domain is [1, ∞)."
      },
      {
        hintEn: "Look for the denominator before thinking about cancellation.",
        answerEn: "At x = 2 the denominator x − 2 is zero, so the original expression is undefined. The nearby values being computable does not repair the missing point. The domain is [1, ∞) with x = 2 removed."
      },
      {
        hintEn: "Distinguish an equivalent formula from an equivalent domain.",
        answerEn: "Cancellation is valid only where the original denominator is nonzero. The simplified formula may have a value at a deleted point, but the original function still performs division by zero there. Its natural domain must be read from the original expression."
      }
    ],
    counterexampleEn: {
      wrong: "Cancel (x² − 1)/(x − 1) to x + 1 and claim the domain is all real numbers.",
      correct: "The simplified expression is x + 1 where defined, but the original function is undefined at x = 1.",
      why: "Cancellation cannot repair the original division by zero."
    },
    checkEn: "Why must the inner function's output be checked against the outer domain?",
    checkAnswerEn: "The outer function cannot accept values outside its domain, so the composition is undefined whenever an inner output leaves that allowed set."
  },
  "function-properties": {
    networkGoalEn: "Use arrows to recognise injective, surjective and bijective functions",
    networkRiskEn: "Judging a function without its domain and codomain",
    explanationEn: [
      "Injectivity forbids two different inputs from producing the same output. Surjectivity says that every element of the codomain is produced by at least one input. A bijection satisfies both properties.",
      "These properties depend on the full function data, including the domain and codomain. The same formula can be injective, surjective, both or neither when the sets change."
    ],
    framesEn: [
      "Distinct inputs are checked for collisions.",
      "Every codomain point is checked for coverage.",
      "A bijection has no collisions and no uncovered points.",
      "Only a bijection can be reversed for every output.",
      "Changing the domain or codomain changes the properties."
    ],
    qa: [
      {
        hintEn: "Think of arrows aimed from people on the left to seats on the right.",
        answerEn: "A collision means two inputs reach the same output; forbidding collisions is injectivity. An empty seat means a codomain point is never reached; covering every seat is surjectivity. A bijection does both."
      },
      {
        hintEn: "Notice that one property controls the left side and the other controls the right side.",
        answerEn: "Injectivity controls uniqueness on the input side, while surjectivity controls coverage on the output side. A function can have one without the other, so neither condition implies the other."
      },
      {
        hintEn: "Test x and −x, and then test whether every real output can be reached.",
        answerEn: "On R → R, x² sends 1 and −1 to the same value, and it never produces a negative output, so it is neither injective nor surjective. On R → [0, ∞), the collisions remain but every non-negative output is reached. On [0, ∞) → [0, ∞), distinct non-negative inputs give distinct squares and every non-negative output is reached, so the function is bijective."
      },
      {
        hintEn: "An inverse must recover exactly one input from every codomain output.",
        answerEn: "A collision prevents unique recovery, and an uncovered codomain point prevents a reverse value altogether. A bijection is exactly the case in which every output has one and only one input."
      },
      {
        hintEn: "A formula alone does not say where the inputs and outputs live.",
        answerEn: "A function is specified by its domain, codomain and assignment rule. The same rule can behave differently as a map between different sets, so injectivity, surjectivity and invertibility must be judged relative to those sets."
      }
    ],
    counterexampleEn: {
      wrong: "Because f(1) = f(−1), the rule x² never has an inverse.",
      correct: "It has no inverse on R, but it does have the inverse √y on [0, ∞) → [0, ∞).",
      why: "Invertibility depends on the complete domain and codomain, not on the formula alone."
    },
    checkEn: "Which two failures prevent a function from having an inverse?",
    checkAnswerEn: "Two inputs may share an output, or some codomain output may have no input at all. A bijection rules out both."
  },
  "elementary-functions": {
    networkGoalEn: "Find domain restrictions directly from the formula",
    networkRiskEn: "Cancelling before recording the original domain",
    explanationEn: [
      "Common elementary expressions fail at predictable operations: division by zero, even roots of negative numbers, logarithms of non-positive numbers, and tangent points where cosine is zero.",
      "A natural domain is the intersection of all restrictions. Every restriction in the original expression must remain visible, even if a later algebraic simplification looks simpler."
    ],
    framesEn: [
      "Each forbidden operation is treated as a gate.",
      "A denominator forbids zero.",
      "An even root requires a non-negative radicand.",
      "A logarithm requires a positive argument.",
      "The domain is the intersection of every valid condition."
    ],
    qa: [
      {
        hintEn: "Scan the expression for division, even roots, logarithms and trigonometric denominators.",
        answerEn: "The expression becomes undefined when a denominator is zero, an even root receives a negative number, a logarithm receives a non-positive number, or a trigonometric denominator vanishes. These operations must be checked before simplifying."
      },
      {
        hintEn: "List the restrictions and keep only values satisfying all of them.",
        answerEn: "The denominator requires Q(x) ≠ 0, an even root requires u ≥ 0, and a logarithm requires x > 0. A value belongs to the natural domain only when every condition is satisfied simultaneously, so the conditions are intersected."
      },
      {
        hintEn: "The root and denominator each contribute one condition.",
        answerEn: "The root requires x − 1 ≥ 0, giving x ≥ 1. The denominator requires x − 2 ≠ 0, giving x ≠ 2. Combining them yields [1, ∞) with 2 removed."
      },
      {
        hintEn: "Compare whether outputs at zero are finite real numbers.",
        answerEn: "Since √0 = 0, zero is allowed under an even square root. But log 0 has no finite real value, so the logarithm needs a strictly positive argument. This changes ≥ 0 into > 0."
      },
      {
        hintEn: "Keep the original expression in view while simplifying.",
        answerEn: "Simplifying can hide a factor that was originally in the denominator. The canceled point may look harmless afterward, but the original expression was undefined there. The natural domain must be determined before cancellation."
      }
    ],
    counterexampleEn: {
      wrong: "The domain of √(x − 1)/(x − 2) is [1, ∞).",
      correct: "The point x = 2 must also be removed, so the domain is [1, ∞) ∖ {2}.",
      why: "The square-root condition does not include the separate denominator condition."
    },
    checkEn: "Why does log x use x > 0 while √x uses x ≥ 0?",
    checkAnswerEn: "A non-negative square root is defined at zero, but a real logarithm is not finite at zero."
  },
  countability: {
    networkGoalEn: "Understand countable infinity and uncountability",
    networkRiskEn: "Treating every infinite set as uncountable",
    explanationEn: [
      "A set is countable when its elements can be listed by natural-number labels with no member permanently omitted. A countable set may still be infinite; what matters is the existence of a complete listing.",
      "Integers and rational numbers are infinite but countable. The real numbers are uncountable because no natural-number listing can contain every real number."
    ],
    framesEn: [
      "Countable means labelable by natural numbers.",
      "Integers can be interleaved as 0, 1, −1, 2, −2.",
      "A rational grid can be scanned by diagonals.",
      "Repeated fractions are skipped without changing countability.",
      "A diagonal construction shows that the real numbers cannot be listed completely."
    ],
    qa: [
      {
        hintEn: "Replace “I can count them all” with “I can give each one a natural-number label”.",
        answerEn: "An infinite set is countable if there is a systematic list whose first, second, third and later positions eventually include every member exactly once. The list never finishes, but no member is omitted."
      },
      {
        hintEn: "Alternate positive and negative integers after zero.",
        answerEn: "List the integers as 0, 1, −1, 2, −2, 3, −3, and continue. Each integer appears at a finite position, so the natural-number positions give every integer a unique label."
      },
      {
        hintEn: "Use a grid of numerator and denominator, then skip entries that represent an already listed value.",
        answerEn: "Scan the positive fractions and their negatives by diagonals of the numerator-denominator grid. If a fraction has already appeared in reduced form, skip the duplicate. Every rational number still receives a position, so the repetitions do not prevent countability."
      },
      {
        hintEn: "Use the decimal expansion of a hypothetical complete list.",
        answerEn: "Suppose every real number in (0, 1) could be listed. Construct a new decimal by choosing its nth digit different from the nth digit of the nth listed number. The new number lies in (0, 1) but differs from every entry, contradicting completeness of the list."
      },
      {
        hintEn: "Separate size from labelability.",
        answerEn: "Infinity only says that a set has no finite size. Uncountability is stronger: it says that even a never-ending natural-number list cannot include every member. Z and Q are infinite and countable; R is not."
      }
    ],
    counterexampleEn: {
      wrong: "N and R are both infinite, so they must have the same kind of countability.",
      correct: "N is countable by its identity listing, while R cannot be completely listed by natural numbers.",
      why: "Infinite sets can have different listing possibilities."
    },
    checkEn: "What property makes a set countable infinite?",
    checkAnswerEn: "There is a bijection from N onto the set, so every element receives exactly one natural-number label."
  },
  "sequence-epsilon-n": {
    networkGoalEn: "Turn “eventually close” into the epsilon-N definition",
    networkRiskEn: "Checking finitely many terms instead of the whole tail",
    explanationEn: [
      "A sequence converges to L when every chosen output tolerance is eventually respected by the entire tail. The tolerance is ε, and the starting position after which the tail stays inside is N.",
      "The threshold N may depend on ε. A larger tolerance may allow an earlier N, while a smaller tolerance usually forces N farther to the right."
    ],
    framesEn: [
      "A tolerance band of radius epsilon is placed around the candidate limit.",
      "Only the infinite tail of the sequence matters.",
      "Choosing a smaller epsilon usually pushes N to the right.",
      "Every term after N must remain inside the band.",
      "Infinitely many isolated returns are not enough; the whole tail must stay inside."
    ],
    qa: [
      {
        hintEn: "A sequence may return close infinitely often and still leave the band later.",
        answerEn: "The definition forbids the sequence from repeatedly escaping after getting close. After some position N, every later term must remain within the chosen tolerance. The word eventually refers to an entire infinite tail, not isolated good terms."
      },
      {
        hintEn: "ε is the required tolerance; N is the point after which that tolerance is guaranteed.",
        answerEn: "ε measures the maximum allowed distance from L. N is a starting index that may be chosen after ε is known. For all n ≥ N, |aₙ − L| must be smaller than ε."
      },
      {
        hintEn: "Solve 1/n < ε for n.",
        answerEn: "For ε > 0, the inequality 1/n < ε is equivalent to n > 1/ε. Choose any natural number N ≥ 1/ε. Then n ≥ N implies 1/n < ε, so 1/n → 0."
      },
      {
        hintEn: "Observe that the sequence keeps jumping back to 1 and −1 forever.",
        answerEn: "No single tolerance smaller than 1 can contain the whole tail because the terms keep alternating between 1 and −1. No N can remove both signs from the future, so the sequence does not converge."
      },
      {
        hintEn: "The key quantifier is “for every n ≥ N”, not “for some n”.",
        answerEn: "Ask whether all terms after a threshold are inside the band. A statement that good terms occur infinitely often only proves “for some n”; convergence requires the stronger universal statement about the entire tail."
      }
    ],
    counterexampleEn: {
      wrong: "Because infinitely many terms of (−1)ⁿ equal 1, the sequence converges to 1.",
      correct: "The other infinitely many terms equal −1, so no single limit can be approached by the entire tail.",
      why: "Convergence requires eventual permanent closeness, not repeated returns."
    },
    checkEn: "What does the quantifier order ∀ε>0 ∃N ∀n≥N mean?",
    checkAnswerEn: "For every chosen tolerance ε, there exists a threshold N such that every term from N onward satisfies the tolerance."
  },
  "sequence-laws": {
    networkGoalEn: "Use boundedness, limit laws and the squeeze theorem safely",
    networkRiskEn: "Assuming a bounded sequence must converge",
    explanationEn: [
      "Limit laws let a complicated convergent sequence be decomposed into simpler convergent sequences. Boundedness is often needed before manipulating products or quotients.",
      "Boundedness alone does not imply convergence: an alternating sequence can stay bounded forever without settling down. The squeeze theorem forces convergence when matching lower and upper bounds trap the middle sequence."
    ],
    framesEn: [
      "A complicated sequence is decomposed into simpler known sequences.",
      "A convergent sequence settles and is necessarily bounded.",
      "A bounded oscillating sequence may still fail to converge.",
      "Order is preserved only in the non-strict form at the limit.",
      "Matching upper and lower bounds squeeze the middle term."
    ],
    qa: [
      {
        hintEn: "Separate sums, differences, scalar multiples, products and quotients.",
        answerEn: "When the individual limits exist and all required denominators stay nonzero in the limit, the limit of the combined expression can be computed from the individual limits. This follows by applying the epsilon definition to the error of each part."
      },
      {
        hintEn: "Use the convergent case for the forward implication and the alternating sequence for the converse failure.",
        answerEn: "Every convergent sequence is bounded because its tail lies in a finite interval and only finitely many earlier terms lie outside. A bounded sequence need not converge; for example, (−1)ⁿ remains in [−1, 1] but never settles at one value."
      },
      {
        hintEn: "Divide numerator and denominator by n.",
        answerEn: "Divide by n to obtain (3 + 1/n)/(1), so the limit is 3. More generally, divide by the highest power of n when evaluating a rational expression in n."
      },
      {
        hintEn: "Write both sandwich inequalities and verify the two outer limits.",
        answerEn: "The inequalities must eventually have the form lowerₙ ≤ aₙ ≤ upperₙ. If both outer sequences converge to the same L, any tolerance band around L eventually contains the upper and lower tails, hence also the entire middle tail."
      },
      {
        hintEn: "Take a limit of both sides of a strict inequality such as −1/n < 0 < 1/n.",
        answerEn: "Strict inequalities are not necessarily preserved by limits. For example, −1/n < 0 < 1/n for every positive n, but the limit of the outer sides is 0. Limits preserve the non-strict order a ≤ b ⇒ lim a ≤ lim b."
      }
    ],
    counterexampleEn: {
      wrong: "Every bounded sequence must converge because it never goes to infinity.",
      correct: "The sequence (−1)ⁿ is bounded but oscillates between two accumulation values.",
      why: "Boundedness prevents escape to infinity but does not force the tail to settle."
    },
    checkEn: "Which extra condition makes a bounded sequence converge?",
    checkAnswerEn: "It must eventually settle toward one limit; boundedness alone is insufficient. Monotonicity is one useful additional condition."
  },
  "divergence-infinity": {
    networkGoalEn: "Distinguish divergence to infinity from general divergence",
    networkRiskEn: "Treating +∞ as an ordinary real limit",
    explanationEn: [
      "A sequence diverges to +∞ when it eventually exceeds every chosen horizontal level M. This describes unbounded upward behavior but does not provide a finite real limit.",
      "An unbounded alternating sequence can fail to diverge in either direction. Infinity is a behavior of the sequence, not a real number that can be substituted into ordinary arithmetic."
    ],
    framesEn: [
      "A horizontal level M is chosen at an arbitrary height.",
      "Every sufficiently late term of the sequence rises above M.",
      "Divergence to −∞ uses the opposite vertical direction.",
      "An unbounded alternating sequence need not tend in either direction.",
      "Infinity is not a real number and has different arithmetic rules."
    ],
    qa: [
      {
        hintEn: "Test the sequence against a horizontal line that can be placed arbitrarily high.",
        answerEn: "The sequence tends to +∞ if, for every real M, all sufficiently late terms satisfy aₙ > M. The threshold may depend on M, but once the threshold is crossed the entire tail must stay above it."
      },
      {
        hintEn: "Write the formal comparison aₙ > M instead of claiming a limit equals the symbol ∞.",
        answerEn: "Writing lim aₙ = ∞ is shorthand for the useful comparison property. There is no real number infinity, so ordinary algebraic laws for finite real limits do not automatically apply."
      },
      {
        hintEn: "Choose N ≥ M for the sequence aₙ = n.",
        answerEn: "Given M, choose any natural number N ≥ M. For every n ≥ N, n ≥ M. Therefore the entire tail lies above M, so n → +∞."
      },
      {
        hintEn: "Compare the positive and negative subsequences.",
        answerEn: "The positive terms grow without bound, but the negative terms also grow in magnitude in the opposite direction. The sequence has no eventual upward or downward behavior, so it is unbounded but does not tend to +∞ or −∞."
      },
      {
        hintEn: "Relate a large denominator to a small reciprocal.",
        answerEn: "If aₙ → +∞, then for every ε > 0 all sufficiently large terms satisfy aₙ > 1/ε. Since the terms are positive, it follows that 0 < 1/aₙ < ε, so 1/aₙ → 0."
      }
    ],
    counterexampleEn: {
      wrong: "The sequence (−1)ⁿ n has no upper bound, so it tends to +∞.",
      correct: "It alternates between large positive and large negative values and has no one-sided limit.",
      why: "Tending to +∞ requires the entire tail to stay above every level M."
    },
    checkEn: "What is the difference between unbounded and tending to +∞?",
    checkAnswerEn: "Unbounded merely means that no finite ceiling excludes all terms. Tending to +∞ requires the entire eventual tail to stay above every chosen level."
  },
  "function-limit": {
    networkGoalEn: "Translate local closeness into epsilon-delta control",
    networkRiskEn: "Using the value f(a) in a punctured limit",
    explanationEn: [
      "A function limit asks what output is forced when the input approaches a. The input a itself is excluded, so the value f(a) does not decide whether the limit exists.",
      "For every output tolerance ε, the definition asks for an input radius δ such that every allowed x within that radius has output within ε of L. The accumulation-point condition ensures that there are nearby domain points to test."
    ],
    framesEn: [
      "The values near a are studied, not the value at a.",
      "The punctured neighbourhood ignores x = a.",
      "Epsilon controls the vertical output error.",
      "Delta controls the horizontal input distance.",
      "An accumulation point guarantees that the punctured test can be made."
    ],
    qa: [
      {
        hintEn: "Think of a road approaching a town without requiring a house at the exact town centre.",
        answerEn: "The limit describes the trend of f(x) as x approaches a. A single point value can be missing or altered while the surrounding trend remains unchanged, so f(a) cannot determine the limit."
      },
      {
        hintEn: "Read ε as an output tolerance and δ as an input radius.",
        answerEn: "For every ε > 0, there must exist δ > 0 such that every x in the domain with 0 < |x − a| < δ satisfies |f(x) − L| < ε. The condition 0 < |x − a| removes x = a."
      },
      {
        hintEn: "Factor the output error as a multiple of |x − 2|.",
        answerEn: "For f(x) = 3x + 1, |f(x) − 7| = 3|x − 2|. To make this smaller than ε, choose δ = ε/3. Then 0 < |x − 2| < δ implies |f(x) − 7| < ε."
      },
      {
        hintEn: "Separate the function value from the surrounding limit.",
        answerEn: "At a removable discontinuity, the limit may be 2 while the actual value is 0. The limit still exists because every punctured neighbourhood approaches 2. Changing the point value to 2 repairs continuity but does not change the limit."
      },
      {
        hintEn: "Suppose no domain points existed arbitrarily close to a.",
        answerEn: "If a were an isolated point, eventually every punctured neighbourhood would contain no allowed input. The delta condition could then be technically vacuous. An accumulation point ensures that the definition describes actual approach behavior rather than an empty testing set."
      }
    ],
    counterexampleEn: {
      wrong: "Because the formula gives 0/0 at x = 1, the limit cannot exist.",
      correct: "Direct substitution failed, but factoring shows the punctured expression approaches 2.",
      why: "A function limit uses nearby points and may simplify on the punctured domain."
    },
    checkEn: "Why does f(a) not affect a punctured limit?",
    checkAnswerEn: "The definition explicitly requires 0 < |x − a|, so x = a is never used when deciding the limit."
  },
  "one-sided-laws": {
    networkGoalEn: "Compare left and right approaches before declaring a two-sided limit",
    networkRiskEn: "Repairing unequal one-sided limits by changing one point value",
    explanationEn: [
      "A two-sided limit exists exactly when the left-hand and right-hand limits both exist and have the same finite value. Each side is a separate approach path.",
      "Limit laws allow algebraic decomposition, while factoring can remove a removable 0/0 form on the punctured domain. Cancellation does not change the original function's missing point."
    ],
    framesEn: [
      "The left and right paths approach the same input from different directions.",
      "Different left and right outputs prevent a two-sided limit.",
      "A 0/0 substitution failure may be removable by factoring.",
      "An equal simplified expression is used only on the punctured domain.",
      "Changing a point value cannot repair unequal one-sided limits."
    ],
    qa: [
      {
        hintEn: "Approach the point from below and then from above.",
        answerEn: "The left limit uses x < a, and the right limit uses x > a. A two-sided limit exists only when both sides approach the same L."
      },
      {
        hintEn: "Compare the constant signs on each side.",
        answerEn: "For |x|/x, if x < 0 then |x|/x = −1, and if x > 0 then |x|/x = 1. The two one-sided values differ, so the two-sided limit does not exist."
      },
      {
        hintEn: "Factor x² − 1 before substituting.",
        answerEn: "Since x² − 1 = (x − 1)(x + 1), the quotient equals x + 1 for x ≠ 1. Therefore the punctured limit is lim(x + 1) = 2. The original function is still undefined at x = 1."
      },
      {
        hintEn: "Ask whether direct substitution produces a nonzero denominator.",
        answerEn: "If the denominator has a nonzero finite limit, substitution can be used after applying quotient laws. If direct substitution gives 0/0, algebraic simplification may reveal the punctured behavior, but the original domain restriction remains."
      },
      {
        hintEn: "Take f(0) as an arbitrary number and compare it with the two approach paths.",
        answerEn: "Changing f(0) affects only the point value, while both one-sided limits still approach 0 and 1. Since the two sides remain unequal, no point value can create a two-sided limit."
      }
    ],
    counterexampleEn: {
      wrong: "Set f(0) = 0 for |x|/x and the two-sided limit becomes 0.",
      correct: "The left limit stays −1 and the right limit stays 1, so the two-sided limit still does not exist.",
      why: "Changing one point does not alter the behavior of nearby points on either side."
    },
    checkEn: "Can a jump discontinuity be repaired by changing only f(a)?",
    checkAnswerEn: "No. The left and right limits remain different, and a point value cannot change either approach path."
  },
  continuity: {
    networkGoalEn: "Connect the point value, the limit and continuity",
    networkRiskEn: "Confusing existence of the limit with equality to the point value",
    explanationEn: [
      "Continuity at a requires three facts: the function is defined at a, the two-sided limit exists, and the limit equals the actual value f(a).",
      "A removable gap can be repaired by changing the point value, while a jump cannot. The sequential characterisation says that every allowed input sequence converging to a must send its outputs to f(a)."
    ],
    framesEn: [
      "The function must have a genuine value at the point.",
      "The two-sided limit must exist.",
      "The limit and the point value must agree.",
      "A removable gap can be repaired by changing one value.",
      "A jump cannot be repaired by changing only one point."
    ],
    qa: [
      {
        hintEn: "Treat “there is a value”, “there is a trend” and “they agree” as three separate checks.",
        answerEn: "A function is continuous at a when f(a) exists, lim x→a f(x) exists, and the two values are equal. Missing any one condition breaks continuity."
      },
      {
        hintEn: "The formula for continuity is an equality between two quantities.",
        answerEn: "The formal statement is lim x→a f(x) = f(a). The epsilon-delta definition is equivalent: for every ε > 0 there is δ > 0 such that |x − a| < δ implies |f(x) − f(a)| < ε."
      },
      {
        hintEn: "Identify whether the limit and the point value are different or the limit itself is missing.",
        answerEn: "If the limit is 2 but f(1) = 0, the point value is the only mismatch and changing it to 2 repairs continuity. In a jump, the left and right limits differ, so no single point value can make a two-sided limit exist."
      },
      {
        hintEn: "Use the sequential characterisation as a test.",
        answerEn: "Continuity means every sequence xₙ in the domain with xₙ → a must satisfy f(xₙ) → f(a). To disprove continuity, it is enough to find one allowed sequence whose outputs fail to approach f(a)."
      },
      {
        hintEn: "Check the three continuity conditions at the point.",
        answerEn: "A graph that looks connected does not prove the formal conditions. One must verify that the function is defined, that the limit exists, and that the limit equals the actual value."
      }
    ],
    counterexampleEn: {
      wrong: "If the limit exists, the function is continuous.",
      correct: "The limit may exist while the point value is missing or different.",
      why: "Continuity additionally requires the limit to equal the actual value f(a)."
    },
    checkEn: "Which three conditions define continuity at a?",
    checkAnswerEn: "f(a) must exist, the two-sided limit must exist, and the limit must equal f(a)."
  },
  "continuous-properties": {
    networkGoalEn: "Use the closure and extreme-value properties of continuous functions",
    networkRiskEn: "Applying closed-interval theorems to an open interval",
    explanationEn: [
      "Continuity is preserved by sums, products, quotients and compositions when the required operations are defined. The extreme value theorem says that a continuous function on a closed bounded interval is bounded and actually attains its maximum and minimum.",
      "Limits may pass through a continuous outer function when the inner limit lies in its domain. Infinite behavior still requires careful algebraic treatment; infinity is not a finite number."
    ],
    framesEn: [
      "Continuous functions preserve algebraic operations.",
      "A continuous curve on a closed interval is bounded.",
      "The curve attains a maximum and a minimum.",
      "A continuous outer function permits the limit to move inside.",
      "Infinite tendencies describe unbounded behavior, not finite values."
    ],
    qa: [
      {
        hintEn: "Check each operation and any exceptional denominator point.",
        answerEn: "Sums, products, scalar multiples and compositions of continuous functions are continuous where defined. A quotient is continuous where the denominator is nonzero, and a composition is continuous where the outer function accepts the inner output."
      },
      {
        hintEn: "Closed and bounded are both needed for the extreme-value theorem.",
        answerEn: "If f is continuous on a closed bounded interval [a, b], then it is bounded and there exist points where it reaches its global maximum and global minimum. Neither the closedness nor boundedness hypothesis can be ignored."
      },
      {
        hintEn: "The function is continuous on (0, 1], but the interval is not closed at 0.",
        answerEn: "On (0, 1], 1/x is continuous, but it grows without bound as x approaches 0 from the right. The interval is not closed and the function has no maximum. This shows that the theorem's hypotheses matter."
      },
      {
        hintEn: "Use the continuity of g at the limiting input.",
        answerEn: "If u(x) → L and g is continuous at L, then g(u(x)) → g(L). The continuity of g means that small input changes near L produce small output changes near g(L)."
      },
      {
        hintEn: "Treat ∞ as a direction and test whether the algebraic cancellation changes the limiting type.",
        answerEn: "Expressions such as ∞ − ∞ or ∞/∞ do not have a value before algebraic manipulation. They describe two quantities moving without bound, and the result depends on their relative rates. Rewrite the expression first, then use a finite limit theorem where possible."
      }
    ],
    counterexampleEn: {
      wrong: "Because 1/x is continuous on (0, 1], it must attain a maximum on that interval.",
      correct: "The extreme-value theorem applies to a closed bounded interval; (0, 1] is not closed, and 1/x has no maximum there.",
      why: "The hypotheses of a theorem are part of the theorem."
    },
    checkEn: "What two interval conditions are needed for the extreme-value theorem?",
    checkAnswerEn: "The interval must be closed and bounded, and the function must be continuous on it."
  }
};

window.MFC_ENGLISH_PACKS.week1Questions = {
  q1: {
    title: "1. Intervals, bounds and distance",
    prompt: "Let A = [−1, 3) and B = (1, 5]. Find A ∩ B, A ∪ B and A ∖ B. Write inf A and sup A, decide whether A has a maximum or minimum, and rewrite |x − 1| ≤ 2 as an interval.",
    answer: "<p><strong>Sets:</strong> A ∩ B = (1, 3), A ∪ B = [−1, 5], and A ∖ B = [−1, 1].</p><p><strong>Bounds:</strong> inf A = −1 and sup A = 3. Since −1 belongs to A, it is the minimum. The value 3 is not in A, so A has no maximum.</p><p><strong>Distance:</strong> |x − 1| ≤ 2 means −1 ≤ x ≤ 3, or [−1, 3]. It is the set of points whose distance from 1 is at most 2.</p>"
  },
  q2: {
    title: "2. Images, preimages and bijections",
    prompt: "Let f : R → R, f(x) = 2x − 3. Find f([0, 2]) and f⁻¹([1, 5]), decide whether f is injective, surjective or bijective, and find its inverse.",
    answer: "<p>f([0, 2]) = [−3, 1]. Solving 1 ≤ 2x − 3 ≤ 5 gives 2 ≤ x ≤ 4, so f⁻¹([1, 5]) = [2, 4].</p><p>If f(x₁) = f(x₂), then x₁ = x₂, so f is injective. For any y ∈ R, x = (y + 3)/2 satisfies f(x) = y, so f is surjective. Therefore f is bijective and f⁻¹(y) = (y + 3)/2.</p>"
  },
  q3: {
    title: "3. A direct epsilon-N proof",
    prompt: "Use only the epsilon-N definition to prove that 4/(n + 2) → 0.",
    answer: "<p>Let ε > 0 and choose N = ⌈4/ε⌉. For n ≥ N, we have n + 2 > 4/ε, hence</p><p><strong>|4/(n + 2) − 0| = 4/(n + 2) < ε.</strong></p><p>Therefore 4/(n + 2) → 0 by the definition.</p>"
  },
  q4: {
    title: "4. Limit laws and the squeeze theorem",
    prompt: "Find lim n→∞ (2n² − 3n + 4)/(5n² + n), and use the squeeze theorem to prove that (cos n)/n² → 0.",
    answer: "<p>Divide numerator and denominator by n²: the quotient becomes (2 − 3/n + 4/n²)/(5 + 1/n), which tends to 2/5.</p><p>Since −1 ≤ cos n ≤ 1, we have −1/n² ≤ cos n/n² ≤ 1/n². Both outer bounds tend to 0, so the squeeze theorem gives (cos n)/n² → 0.</p>"
  },
  q5: {
    title: "5. Function limits and one-sided limits",
    prompt: "Compute lim x→2 (3x + 1), explain why lim x→0 |x|/x does not exist, and evaluate lim x→1 (x² − 1)/(x − 1).",
    answer: "<p>Direct substitution gives lim x→2 (3x + 1) = 7.</p><p>For |x|/x, the left limit is −1 and the right limit is 1. They disagree, so the two-sided limit does not exist.</p><p>For x ≠ 1, (x² − 1)/(x − 1) = x + 1. Hence the punctured limit is 2, even though the original expression is undefined at x = 1.</p>"
  },
  q6: {
    title: "6. Quantifier order in convergence",
    prompt: "Explain why N may depend on ε and why reversing the quantifiers destroys the definition of convergence.",
    answer: "<p>N is chosen after ε because a smaller tolerance may require a later starting point. The correct order is: for every ε > 0, there exists N such that for every n ≥ N, the error is < ε. If a single N had to work for every ε at once, no sequence could satisfy arbitrarily small tolerances unless it eventually became exactly constant.</p>"
  },
  q7: {
    title: "7. Boundedness versus convergence",
    prompt: "Prove that a convergent sequence is bounded, and explain why a bounded sequence may diverge.",
    answer: "<p>If aₙ → L, choose ε = 1. Some N exists such that all later terms lie in (L − 1, L + 1). The finite initial block is also bounded, so the whole sequence is bounded.</p><p>The sequence (−1)ⁿ is bounded but never settles at one value, so boundedness does not imply convergence.</p>"
  },
  q8: {
    title: "8. Continuity and point values",
    prompt: "Give a function that has a limit at a but is not continuous there, and explain how changing one value can repair it.",
    answer: "<p>Let f(x) = (x² − 1)/(x − 1) for x ≠ 1, and set f(1) = 0. The limit at 1 is 2, but the point value is 0, so f is discontinuous. Changing f(1) to 2 makes the point value equal the limit and repairs continuity.</p>"
  },
  q9: {
    title: "9. Supremum versus maximum",
    prompt: "Explain, using an open interval, why a supremum need not be a maximum.",
    answer: "<p>For (0, 1), the supremum is 1 because 1 is the least upper bound. But 1 is not in the set. Moreover, for every x in (0, 1), the midpoint (x + 1)/2 is a larger point still in the set. Hence the set has no maximum.</p>"
  },
  q10: {
    title: "10. Preimages versus inverse functions",
    prompt: "Explain why f⁻¹([0, 4]) has meaning for f(x) = x² on R even though f has no inverse function.",
    answer: "<p>A preimage asks which inputs satisfy 0 ≤ x² ≤ 4. That set is [−2, 2]. An inverse function would require exactly one input for every output, which fails because x and −x share the same positive square.</p>"
  },
  q11: {
    title: "11. Strict inequalities and limits",
    prompt: "Show with an example why strict inequalities need not remain strict after taking limits.",
    answer: "<p>For every positive integer n, −1/n < 0 < 1/n. Both outer sequences tend to 0, so the limit preserves only the non-strict inequality. The strict signs disappear in the limit.</p>"
  },
  q12: {
    title: "12. Sequential characterisation of continuity",
    prompt: "State the sequential characterisation of continuity and explain how one bad sequence disproves continuity.",
    answer: "<p>f is continuous at a exactly when every sequence xₙ in the domain with xₙ → a satisfies f(xₙ) → f(a). To disprove continuity, it is enough to exhibit one allowed sequence for which the outputs do not converge to f(a).</p>"
  },
  q13: {
    title: "13. Repairing continuity at a point",
    prompt: "Describe the three continuity checks and explain the difference between a removable discontinuity and a jump.",
    answer: "<p>Check that f(a) exists, that lim x→a f(x) exists, and that the two values agree. In a removable discontinuity the limit exists but differs from the point value. In a jump the left and right limits already disagree, so changing one point cannot create a two-sided limit.</p>"
  },
  q14: {
    title: "14. Natural domains and continuity",
    prompt: "Find the natural domain of h(x) = √(x − 1)/(x − 2), and explain its continuity on that domain.",
    answer: "<p>The square root requires x ≥ 1, and the denominator requires x ≠ 2. Therefore the domain is [1, ∞) ∖ {2}. On this domain the square root and denominator are continuous and the denominator is nonzero, so the quotient is continuous by the continuity rules.</p>"
  }
};
