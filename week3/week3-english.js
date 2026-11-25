window.MFC_ENGLISH_PACKS = window.MFC_ENGLISH_PACKS || {};

window.MFC_ENGLISH_PACKS.week3 = {
  "higher-derivatives-taylor": {
    networkGoalEn: "Move from repeated derivatives to derivative-matching polynomials",
    networkRiskEn: "Reading f⁽ᵏ⁾ as the k-th power of f",
    explanationEn: [
      "A Taylor polynomial is a finite polynomial whose derivatives at the expansion point match the derivatives of the original function through a chosen order. It is not automatically an infinite series equal to the function.",
      "Powers of x−a are used because their derivatives vanish at a except for the matching term. Dividing the k-th coefficient by k! offsets the constant produced by differentiating (x−a)ᵏ k times."
    ],
    framesEn: ["Differentiate the function repeatedly.", "Collect the derivative values at the centre.", "Place each derivative over its factorial.", "Match the polynomial derivatives to the original data.", "Higher order matches more local information."],
    qa: [
      { hintEn: "Differentiate (x−a)ᵏ k times and inspect the remaining constant.", answerEn: "The factorial comes from repeated differentiation. The k-th powers of x−a produce k! after being differentiated k times, so division by k! makes the coefficient equal to the k-th derivative at a." },
      { hintEn: "Every derivative of eˣ is eˣ, and e⁰=1.", answerEn: "T₃(x)=1+x+x²/2+x³/6. All derivatives of eˣ equal eˣ, so every derivative at 0 is 1; substituting k=0,1,2,3 gives the coefficients." },
      { hintEn: "Evaluate the k-th derivative of the polynomial at a.", answerEn: "The coefficients are forced one order at a time. After differentiating k times and substituting x=a, exactly the x-dependent part of the k-th coefficient survives, giving cₖ=f⁽ᵏ⁾(a)/k!." },
      { hintEn: "Look at the upper limit of the sum in Definition 7.1.", answerEn: "They are not the same object. The Taylor polynomial stops at degree n. A Taylor series continues forever, and its convergence back to the function is a separate question." }
    ],
    counterexampleEn: { wrong: "Treat f⁽³⁾ as f cubed.", correct: "f⁽³⁾ is the third derivative of f.", why: "The parenthesized superscript records derivative order, not a power." },
    checkEn: "Through which derivative order does Tₙ match f at a?",
    checkAnswerEn: "It matches derivative data through order n, giving n+1 derivative conditions."
  },
  "maclaurin-families": {
    networkGoalEn: "Apply the coefficient formula to standard functions at zero",
    networkRiskEn: "Mixing the sine and cosine patterns of nonzero powers",
    explanationEn: [
      "A Maclaurin polynomial is simply a Taylor polynomial expanded at zero. The derivative cycles of sine and cosine determine which powers survive.",
      "For sine, only odd powers occur at zero; for cosine, only even powers occur. For log x about 1, the displacement is x−1 rather than x."
    ],
    framesEn: ["Inspect the derivative cycle.", "Evaluate derivatives at zero.", "Keep nonzero coefficients only.", "Compare the polynomial with the function.", "Increasing degree improves the local match."],
    qa: [
      { hintEn: "Use the derivatives at 0: 0,1,0,−1,0,1.", answerEn: "T₅(x)=x−x³/3!+x⁵/5!=x−x³/6+x⁵/120. The even-order derivatives vanish at zero, so their coefficients are zero rather than omitted arbitrarily." },
      { hintEn: "Check every odd derivative of cosine at zero.", answerEn: "Odd powers are absent because all odd derivatives of cosine at zero are zero. The derivative values 1,0,−1,0 produce cos x=1−x²/2!+x⁴/4!−x⁶/6!+…." },
      { hintEn: "The powers must be expressed relative to the expansion point.", answerEn: "The derivatives are evaluated at 1, so the polynomial uses powers of x−1. At x=1 the displacement is zero, so only the value term survives." },
      { hintEn: "Remember the real domain of the square root.", answerEn: "The original real function requires 1+x≥0. A polynomial can be written algebraically beyond that domain, but it does not automatically reproduce the original real function there." }
    ],
    counterexampleEn: { wrong: "An absent even power in sin x means the calculation forgot a coefficient.", correct: "The corresponding derivative at zero is zero, so the coefficient is genuinely zero.", why: "Every missing power should be explained by derivative data." },
    checkEn: "Which powers occur in the Maclaurin polynomial of cos x?",
    checkAnswerEn: "Only even powers, because every odd derivative of cosine vanishes at zero."
  },
  "taylor-remainder-definition": {
    networkGoalEn: "Represent approximation error as an exact remainder",
    networkRiskEn: "Confusing an error bound with the exact remainder",
    explanationEn: [
      "The Taylor remainder is the exact difference between the function and its Taylor polynomial. It is signed and becomes zero at the expansion point.",
      "The identity f=Tₙ+Rₙ is exact by definition. A separate inequality may then bound |Rₙ| for practical estimates."
    ],
    framesEn: ["Compare f and Tₙ at the same x.", "Measure their vertical difference.", "Record the signed remainder.", "At the centre the difference is zero.", "An error bound gives a separate ceiling."],
    qa: [
      { hintEn: "Read the definition as a subtraction.", answerEn: "Rₙ measures the exact difference f(x)−Tₙ(x). Its sign matters because it is not replaced by an absolute value." },
      { hintEn: "Use Tₙ(a)=f(a).", answerEn: "At x=a the Taylor polynomial and function have the same value, so their difference is zero. Derivative matching controls nearby behavior." },
      { hintEn: "Rearrange the definition of Rₙ.", answerEn: "The identity f=Tₙ+Rₙ is exact because Rₙ is defined to be the remaining difference. It is not an approximation." },
      { hintEn: "One object is an error; the other is an inequality.", answerEn: "Rₙ is the actual error. An upper bound B only guarantees |Rₙ|≤B; the true error can be much smaller." }
    ],
    counterexampleEn: { wrong: "From |Rₙ|≤10⁻⁵, conclude Rₙ=10⁻⁵.", correct: "The inequality only gives a ceiling on the magnitude.", why: "A bound controls a range rather than identifying the exact remainder." },
    checkEn: "Why is Rₙ(a)=0?",
    checkAnswerEn: "Because Tₙ(a)=f(a), so the definition of the remainder gives zero."
  },
  "lagrange-remainder": {
    networkGoalEn: "Turn the exact remainder into a derivative-controlled formula",
    networkRiskEn: "Replacing the unknown intermediate point by an endpoint",
    explanationEn: [
      "Taylor's theorem with Lagrange remainder says the next unmatched derivative controls the error. The derivative is evaluated at an unknown point between a and x.",
      "The theorem guarantees existence of the intermediate point but not its numerical value. A useful estimate therefore bounds the next derivative over the whole interval."
    ],
    framesEn: ["Compare Tₙ with f away from the centre.", "The gap increases with the displacement.", "The first unmatched derivative is order n+1.", "The intermediate point lies between a and x.", "A derivative bound controls all possible gaps."],
    qa: [
      { hintEn: "Use the strict between-ness condition.", answerEn: "The point ξ is guaranteed to lie strictly between a and x. Replacing it by an endpoint changes the formula and discards the theorem's control." },
      { hintEn: "Count the matched and unmatched derivative orders.", answerEn: "A degree-n Taylor polynomial matches orders 0 through n. The first missing information is the (n+1)-st derivative, so it controls the remainder." },
      { hintEn: "The exponential is increasing on the interval.", answerEn: "All intermediate points lie between 0 and 0.1, so eξ≤e0.1<e. The Lagrange bound is e(0.1)⁴/4!≈1.14×10⁻⁵." },
      { hintEn: "Check the differentiability hypothesis first.", answerEn: "No. The formula relies on the stated smoothness assumptions, including the next derivative. Without them the theorem cannot simply be applied." }
    ],
    counterexampleEn: { wrong: "Set the Lagrange intermediate point equal to a.", correct: "It is only known to lie somewhere strictly between a and x.", why: "The theorem controls an unknown point by bounding the derivative across the whole interval." },
    checkEn: "Why bound a derivative over the whole interval instead of finding ξ?",
    checkAnswerEn: "The theorem does not identify ξ, so the bound must cover every possible intermediate point."
  },
  "lagrange-error-bounds": {
    networkGoalEn: "Convert the unknown remainder point into an explicit numerical guarantee",
    networkRiskEn: "Reporting an error bound as the exact error",
    explanationEn: [
      "The Lagrange error bound replaces the unknown derivative value by a uniform derivative ceiling M on the interval between a and x.",
      "A guarantee is an inequality. It proves the error is no larger than the stated number, but it does not claim that the true error reaches that ceiling."
    ],
    framesEn: ["Choose the interval between a and x.", "Bound the next derivative by M.", "Insert the factorial denominator.", "Multiply by the displacement power.", "Obtain a guaranteed error ceiling."],
    qa: [
      { hintEn: "Use sin x for the third derivative of cosine.", answerEn: "The third derivative of cos x is −sin x, whose absolute value is at most 1. Therefore |R₂(x)|≤|x|³/3!=|x|³/6." },
      { hintEn: "M is a bound over all possible intermediate points.", answerEn: "The bound must hold over the whole interval between a and x. If the interval changes, the derivative ceiling M can change." },
      { hintEn: "An upper bound need not be sharp.", answerEn: "It does not mean the bound is wrong. A loose ceiling remains valid as long as the actual error never exceeds it." },
      { hintEn: "Compare |x|⁴ with |x|² when |x|<1.", answerEn: "Increasing the order usually makes the displacement power smaller for short distances. The derivative bound and factorial still affect the final numerical guarantee." }
    ],
    counterexampleEn: { wrong: "If the bound is 10⁻⁵, the exact error must be 10⁻⁵.", correct: "The exact error is only known to be at most 10⁻⁵.", why: "An upper bound describes a possible range, not a unique value." },
    checkEn: "What inequality must M satisfy?",
    checkAnswerEn: "The absolute next derivative must be at most M throughout the interval between a and x."
  },
  "big-o-richardson": {
    networkGoalEn: "Describe error order and cancel leading approximation terms",
    networkRiskEn: "Treating O(hᵖ) as a particular function",
    explanationEn: [
      "Big-O notation describes an error class controlled by a constant multiple of |h|ᵖ in a sufficiently small neighbourhood of zero.",
      "It records the rate at which the error shrinks, not an exact error. Richardson extrapolation uses Taylor expansions to combine two approximations and cancel their leading error term."
    ],
    framesEn: ["Compare h² and h⁴ near zero.", "Big-O hides a constant but records a power rate.", "Compute approximations at h and h/2.", "Combine them to cancel the first error term.", "The remaining error has a higher order."],
    qa: [
      { hintEn: "Expand the definition with C and δ.", answerEn: "There exist constants C>0 and δ>0 such that |r(h)|≤C|h|² for 0<|h|<δ. The ratio r(h)/h² need not have a limit." },
      { hintEn: "Split the polynomial and use |h|<1.", answerEn: "|3h²−h³|≤3|h|²+|h|³≤4|h|² when |h|<1. Thus C=4 and δ=1 are sufficient; the exact constants do not affect the order." },
      { hintEn: "Assume T(h)=L+c h²+O(h⁴).", answerEn: "The combination 4T(h/2)−T(h) removes the h² term; dividing by 3 preserves L. The first remaining error is O(h⁴)." },
      { hintEn: "Big-O has a hidden constant.", answerEn: "No. Big-O describes asymptotic order but does not provide a numerical ceiling for a fixed h." }
    ],
    counterexampleEn: { wrong: "F(h)=O(h²), therefore F(h)=h².", correct: "F(h) is bounded by C h² up to a constant for sufficiently small h.", why: "Big-O is an error class, not an equality." },
    checkEn: "Why does O(h⁴) usually beat O(h²) for small h?",
    checkAnswerEn: "h⁴ shrinks faster than h², although hidden constants still matter for a fixed h."
  },
  "partitions": {
    networkGoalEn: "Represent a continuous interval by finitely many subintervals",
    networkRiskEn: "Treating a partition as a free choice of sample points",
    explanationEn: [
      "A partition is a finite increasing list of points from a to b. It determines the boundaries of subintervals, not the function values used inside them.",
      "A refinement keeps every old partition point and adds more. This gives a systematic way to make subintervals narrower."
    ],
    framesEn: ["Place initial cut points from a to b.", "Record the width of each subinterval.", "Add more cut points to refine.", "The largest mesh size decreases.", "The finite partition now controls the approximation."],
    qa: [
      { hintEn: "Subinterval widths require an ordering.", answerEn: "The points must increase from a to b so that no subinterval is reversed, repeated or missing. A partition is a finite ordered set of cut points." },
      { hintEn: "Divide total length by the number of equal pieces.", answerEn: "For n equal pieces of [0,1], Δx=1/n and xᵢ=i/n. Every subinterval then has the same width." },
      { hintEn: "A refinement contains the previous partition.", answerEn: "A refinement keeps old points and adds new ones. This monotone structure is what lets lower sums rise and upper sums fall under refinement." },
      { hintEn: "Darboux sums are finite sums.", answerEn: "Finite partitions allow the sums ΣmᵢΔxᵢ and ΣMᵢΔxᵢ to be finite. The limit process is handled through suprema and infima over all finite refinements." }
    ],
    counterexampleEn: { wrong: "A partition is just an arbitrary collection of sample points.", correct: "A partition specifies interval boundaries; sample values are separate choices.", why: "The partition determines the subintervals whose extrema are used." },
    checkEn: "What is the refinement relation?",
    checkAnswerEn: "A refinement contains the old partition and adds further cut points."
  },
  "darboux-sums": {
    networkGoalEn: "Build lower and upper area estimates from interval extrema",
    networkRiskEn: "Using endpoint values instead of the extrema on each block",
    explanationEn: [
      "Darboux sums replace a function on each subinterval by its infimum or supremum. The lower sum is a conservative area estimate and the upper sum is an overestimate.",
      "The gap between the two sums measures the total oscillation across subintervals. For a general function, endpoint values need not be the extrema."
    ],
    framesEn: ["Choose a partition.", "Find the infimum on every subinterval.", "Build the lower rectangles.", "Find the supremum and build upper rectangles.", "Compare the two sums."],
    qa: [
      { hintEn: "The rectangle must cover the whole subinterval.", answerEn: "Using infimum and supremum handles every interior value. Endpoint values alone can miss a larger or smaller value inside the subinterval." },
      { hintEn: "For f(x)=x, use left and right endpoint heights.", answerEn: "The lower sum uses heights 0,1/4,1/2,3/4 and equals 0.375. The upper sum uses 1/4,1/2,3/4,1 and equals 0.625." },
      { hintEn: "Refining shrinks the set of possible values in each block.", answerEn: "Refining a partition decreases the maximum value and raises the minimum on the smaller blocks, so lower sums increase and upper sums decrease." },
      { hintEn: "Darboux sums require finite block heights.", answerEn: "For an unbounded function, the infimum or supremum may be infinite, so the finite rectangle heights used in Darboux sums are unavailable." }
    ],
    counterexampleEn: { wrong: "Use left endpoint values for f(x)=x and call them Darboux sums.", correct: "Darboux sums use the infimum and supremum on every subinterval.", why: "Endpoint values need not capture the extrema for a general function." },
    checkEn: "What do the lower and upper Darboux sums estimate?",
    checkAnswerEn: "The lower sum gives a low area estimate and the upper sum a high estimate."
  },
  "riemann-integral": {
    networkGoalEn: "Define the integral through equal lower and upper best estimates",
    networkRiskEn: "Checking only one partition or one sample set",
    explanationEn: [
      "The lower integral is the supremum of all lower Darboux sums and the upper integral is the infimum of all upper sums.",
      "A bounded function is Riemann integrable exactly when these two values agree. That common value is the integral, not the output of a single chosen partition."
    ],
    framesEn: ["Collect lower sums from all partitions.", "Collect upper sums from all partitions.", "Take the supremum of the lower sums.", "Take the infimum of the upper sums.", "The integral exists when the two values agree."],
    qa: [
      { hintEn: "One is a supremum and the other an infimum.", answerEn: "The lower integral is the supremum of lower sums; the upper integral is the infimum of upper sums. Integrability requires equality." },
      { hintEn: "Compare x² with its subinterval extrema.", answerEn: "As the mesh becomes finer, the oscillation of x² on each subinterval tends to zero. The lower and upper sums approach the same area, ∫₀¹x²dx=1/3." },
      { hintEn: "One partition is only one pair of estimates.", answerEn: "The definition takes suprema and infima over every finite partition. A single partition cannot rule out a bad gap elsewhere." },
      { hintEn: "If the lower and upper integrals differ, no unique area value is forced.", answerEn: "The function is not Riemann integrable. The Dirichlet function is a standard bounded example with unequal lower and upper integrals." }
    ],
    counterexampleEn: { wrong: "One uniform partition gives equal lower and upper limits, so the function is integrable.", correct: "Integrability requires the lower and upper integrals, taken over all partitions, to agree.", why: "One test partition does not cover every possible refinement." },
    checkEn: "What common value defines the integral?",
    checkAnswerEn: "The shared value of the lower and upper integrals when they agree."
  },
  "darboux-criterion": {
    networkGoalEn: "Turn integrability into a quantifier-controlled partition gap",
    networkRiskEn: "Reversing the order of ε and the partition",
    explanationEn: [
      "The Darboux criterion says a bounded function is integrable exactly when every requested positive gap ε can be met by some partition.",
      "The partition may depend on ε. The criterion is quantitative: refine the interval until the total upper-lower gap is below the requested threshold."
    ],
    framesEn: ["Choose an error threshold ε.", "Select a partition.", "Compute the upper-lower gap.", "Refine if the gap is too large.", "A small gap proves integrability."],
    qa: [
      { hintEn: "State the quantifiers in order.", answerEn: "For every ε>0 there exists a partition P with U(f,P)−L(f,P)<ε. The partition may vary with ε." },
      { hintEn: "For x, each block has width 1/n and amplitude 1/n.", answerEn: "There are n blocks, so the total upper-lower gap is n(1/n)²=1/n. As n grows, the gap tends to zero." },
      { hintEn: "The difference is non-negative and bounded by every positive ε.", answerEn: "The difference between the upper and lower integrals is non-negative and smaller than every positive ε; therefore it must be zero. Conversely, equality permits partitions with arbitrarily small gaps." },
      { hintEn: "Write the definition with the quantifier order visible.", answerEn: "The correct order is for every ε there exists P. A fixed P need not meet every arbitrarily small tolerance." }
    ],
    counterexampleEn: { wrong: "A gap of 0.05 verifies the criterion for ε=0.01.", correct: "The gap must be below the requested ε; 0.05 is larger than 0.01.", why: "The threshold and partition must match the same ε." },
    checkEn: "Can the partition depend on ε?",
    checkAnswerEn: "Yes; the definition explicitly allows a different partition for each positive ε."
  },
  "continuous-dirichlet": {
    networkGoalEn: "Distinguish continuity as a sufficient condition from boundedness",
    networkRiskEn: "Reversing the implication continuous implies integrable",
    explanationEn: [
      "Continuity on a closed interval forces the local oscillation to become uniformly small on sufficiently fine partitions, proving integrability.",
      "The Dirichlet function is bounded but jumps between 0 and 1 on every positive-length subinterval, so its lower and upper sums never converge to one value."
    ],
    framesEn: ["Continuous functions have small local oscillation.", "Fine partitions make the gap small.", "Dirichlet assigns 1 to rationals and 0 to irrationals.", "Every block has minimum 0 and maximum 1.", "The lower and upper integrals stay apart."],
    qa: [
      { hintEn: "Use uniform continuity on a closed interval.", answerEn: "On a closed interval, a continuous function has uniformly small oscillations on sufficiently short intervals. The Darboux gap can therefore be made smaller than every positive ε." },
      { hintEn: "The value depends on whether x is rational.", answerEn: "The Dirichlet function 1Q equals 1 on rational points and 0 on irrational points. Every interval of positive length contains both kinds of point." },
      { hintEn: "Find the infimum and supremum on each block.", answerEn: "Every block has infimum 0 and supremum 1. Hence every lower sum is 0 and every upper sum is b−a, so the two integrals are unequal." },
      { hintEn: "Look only at the direction in the theorem.", answerEn: "No. Continuity is sufficient but not necessary for Riemann integrability; the implication cannot be reversed." }
    ],
    counterexampleEn: { wrong: "A bounded function must be Riemann integrable.", correct: "The Dirichlet function is bounded but not Riemann integrable.", why: "Boundedness alone does not make the lower and upper sums meet." },
    checkEn: "Which bounded function in this section is not integrable?",
    checkAnswerEn: "The Dirichlet function 1Q on any interval of positive length."
  },
  "integral-properties": {
    networkGoalEn: "Use linearity, interval splitting, order and zero-area changes",
    networkRiskEn: "Assuming a single-point value change alters the integral",
    explanationEn: [
      "Riemann integrable functions remain integrable under linear combinations and interval splitting, and order relations pass to non-strict integral inequalities.",
      "Changing finitely many function values does not change the integral because those points have no positive length and can be isolated by a partition."
    ],
    framesEn: ["Split an interval into two pieces.", "Add the two integrals.", "Compare a function pointwise with another.", "Pass the inequality to integrals.", "A single spike has zero area."],
    qa: [
      { hintEn: "The individual integrals must exist.", answerEn: "Both f and g must be Riemann integrable on the same interval. Then the integral of αf+βg is α∫f+β∫g." },
      { hintEn: "Add the split point to a partition.", answerEn: "Adding c to a partition splits one block into two and preserves the sum of areas. Therefore the integral from a to b equals the sum from a to c and c to b." },
      { hintEn: "A point has zero length.", answerEn: "A finite point change can be isolated or controlled by arbitrarily small intervals, so it does not alter the limit of lower and upper sums." },
      { hintEn: "Use the same partition for both functions.", answerEn: "If f≤g everywhere, every lower/upper sum comparison preserves the inequality. At the limit, ∫f≤∫g; a strict inequality may become equality." }
    ],
    counterexampleEn: { wrong: "Changing f(0.5) to 100 changes the integral substantially.", correct: "A single point has zero area, so the Riemann integral is unchanged.", why: "Positive-length intervals create area; single points do not." },
    checkEn: "What value changes do not affect a Riemann integral?",
    checkAnswerEn: "Changing finitely many point values does not affect the integral."
  },
  "ftc-part-one": {
    networkGoalEn: "Differentiate an accumulated area with respect to its upper endpoint",
    networkRiskEn: "Confusing the dummy integration variable with the upper limit",
    explanationEn: [
      "The accumulation function F(x)=∫ₐˣf(t)dt measures the area up to x. Increasing x by a small amount adds an integral over that short interval.",
      "If f is continuous, the average value on the tiny interval approaches f(x), so the derivative of F is f(x)."
    ],
    framesEn: ["Accumulate area from the lower endpoint.", "Move the upper endpoint slightly.", "The new strip has height close to f(x).", "Divide the new area by the width.", "The derivative of the accumulation is f(x)."],
    qa: [
      { hintEn: "Separate the moving endpoint from the dummy variable.", answerEn: "The variable x is the moving upper limit. The variable t is a dummy integration variable that describes the interval being accumulated." },
      { hintEn: "Use interval additivity.", answerEn: "The difference of the accumulated areas is the integral from x to x+h. Dividing by h gives the average height of f on the new short interval." },
      { hintEn: "Integrate t² and then differentiate.", answerEn: "F(x)=x³/3, so F′(x)=x². This equals the integrand evaluated at the moving upper endpoint." },
      { hintEn: "The theorem explicitly assumes continuity.", answerEn: "The standard conclusion requires continuity. Without it, the accumulation function can have corners or other failures of the derivative identity." }
    ],
    counterexampleEn: { wrong: "Because f(t) appears in the integral, F′(x)=f(t).", correct: "F′(x)=f(x); t is a dummy variable while x is the upper endpoint.", why: "The derivative evaluates the integrand at the moving endpoint." },
    checkEn: "What is the difference quotient interpretation of F(x+h)−F(x)?",
    checkAnswerEn: "It is the integral over the short interval from x to x+h."
  },
  "ftc-part-two": {
    networkGoalEn: "Evaluate definite integrals through antiderivative endpoint differences",
    networkRiskEn: "Confusing a definite integral with the indefinite integral family",
    explanationEn: [
      "An antiderivative G satisfies G′=f. The second part of the Fundamental Theorem says the definite integral is G(b)−G(a).",
      "The arbitrary constant in an indefinite integral cancels in the difference. Continuity of f is part of the theorem's hypotheses."
    ],
    framesEn: ["Find an antiderivative G.", "Evaluate G at both endpoints.", "Subtract the lower value from the upper value.", "The arbitrary constant cancels.", "The endpoint difference equals the area."],
    qa: [
      { hintEn: "Write the derivative condition for G.", answerEn: "An antiderivative G is differentiable on the interval and satisfies G′(x)=f(x) for every interior x." },
      { hintEn: "One object is a number and the other is a family.", answerEn: "A definite integral has specified endpoints and is a number. An indefinite integral is the family G+C of antiderivatives." },
      { hintEn: "Use G=x³−x²+4x and evaluate at 2 and 0.", answerEn: "G(2)=8−4+8=12 and G(0)=0, so the definite integral is 12." },
      { hintEn: "FTC II requires continuous f.", answerEn: "A jump or endpoint singularity can invalidate the direct use of the theorem. Check continuity and the domain before evaluating." }
    ],
    counterexampleEn: { wrong: "The constant C remains in the value of a definite integral.", correct: "It cancels in G(b)−G(a), leaving a definite number.", why: "A definite integral has no arbitrary additive constant." },
    checkEn: "Why is +C irrelevant in FTC II?",
    checkAnswerEn: "The same constant occurs in G(b) and G(a), so it cancels."
  },
  "improper-unbounded": {
    networkGoalEn: "Define unbounded-interval integrals through truncation limits",
    networkRiskEn: "Substituting infinity as a real endpoint",
    explanationEn: [
      "An integral with an infinite endpoint is defined by first integrating over a finite truncated interval and then letting the endpoint tend to infinity.",
      "Convergence requires a finite limit. Integrals over the whole real line require both halves to converge separately; symmetric cancellation is not the definition."
    ],
    framesEn: ["Choose a finite truncation R.", "Compute the proper integral to R.", "Let R tend to infinity.", "A finite limit gives convergence.", "Two infinite ends are controlled separately."],
    qa: [
      { hintEn: "Write the definition as a limit.", answerEn: "The improper integral is lim R→∞∫₁ᴿf(x)dx, assuming the truncated integrals and the limit exist as a finite real number." },
      { hintEn: "Integrate e⁻ˣ from 0 to R.", answerEn: "The truncated integral is 1−e⁻ᴿ. Since e⁻ᴿ→0, the infinite-interval integral converges to 1." },
      { hintEn: "Separate the cases p=1 and p≠1.", answerEn: "The integral ∫₁∞x⁻ᵖdx converges exactly when p>1, with value 1/(p−1). The logarithmic p=1 case and p<1 cases diverge." },
      { hintEn: "A single symmetric limit can hide divergence on one side.", answerEn: "The two sides must converge independently. A finite symmetric truncation does not define a convergent improper integral if either side diverges." }
    ],
    counterexampleEn: { wrong: "∫−Rᴿx dx=0 for every R, so its improper integral equals 0.", correct: "Both halves of ∫−∞∞x dx must be checked; each diverges.", why: "The definition uses separate one-sided limits, not a symmetric cancellation." },
    checkEn: "What does an infinite endpoint in a Riemann integral represent?",
    checkAnswerEn: "A limiting process on truncated finite intervals."
  },
  "improper-singularities": {
    networkGoalEn: "Handle finite endpoint and interior singularities by one-sided limits",
    networkRiskEn: "Using FTC across an interior singularity",
    explanationEn: [
      "A finite singularity is handled by removing a tiny neighbourhood of the singular point and then letting its size tend to zero from inside the interval.",
      "An interior singularity requires both sides to converge separately. A cancellation across the singular point is not part of the improper integral definition."
    ],
    framesEn: ["Identify the singular point.", "Truncate a small neighbourhood.", "Integrate the proper remaining interval.", "Let the removed length tend to zero.", "Check both sides of an interior singularity."],
    qa: [
      { hintEn: "The truncation point must remain inside the interval.", answerEn: "The definition uses ε→0⁺ so that a+ε stays inside the domain and eventually approaches the singular endpoint from the legal side." },
      { hintEn: "The antiderivative of x⁻¹ᐟ² is 2√x.", answerEn: "The proper integral from ε to 1 is 2(1−√ε). Its limit as ε→0⁺ is 2, so the singularity is integrable." },
      { hintEn: "The logarithm of a tiny positive number tends to −∞.", answerEn: "The endpoint integral of x⁻¹ diverges. In general ∫₀¹x⁻ᵖdx converges exactly when p<1." },
      { hintEn: "Check convergence on each side of the singular point.", answerEn: "Both one-sided integrals must be finite. If either side diverges, the whole integral diverges; combining the sides into a single symmetric limit is not allowed." }
    ],
    counterexampleEn: { wrong: "Use the antiderivative difference across 0 to cancel the two singular sides.", correct: "Each side must be treated as its own improper integral and must converge.", why: "The definition does not use a symmetric principal value." },
    checkEn: "What is the convergence threshold for ∫₀¹x⁻ᵖdx?",
    checkAnswerEn: "It converges exactly when p<1."
  }
};

window.MFC_ENGLISH_PACKS.week3Questions = {
  q1: { title: "1. Taylor polynomial construction", prompt: "Construct T₄ for eˣ at 0 and verify that the polynomial and eˣ have matching derivatives through order 4 at 0.", answer: "<p>T₄(x)=1+x+x²/2!+x³/3!+x⁴/4!.</p><p>All derivatives of eˣ are 1 at 0, and differentiating T₄ k times at 0 gives k!·(1/k!)=1 for k=0,1,2,3,4.</p>" },
  q2: { title: "2. Error bound for e⁰·²", prompt: "Use T₃ for eˣ at 0 to approximate e⁰·² and bound the error with a Lagrange remainder.", answer: "<p>T₃(0.2)=1+0.2+0.2²/2+0.2³/6≈1.221333.</p><p>On [0,0.2], the fourth derivative e^ξ is at most e⁰·²<1.222. Hence |R₃(0.2)|≤1.222·(0.2)⁴/24<8.15×10⁻⁵.</p>" },
  q3: { title: "3. Big-O from the definition", prompt: "Prove directly from Definition 7.16 that 5h³+2h⁴=O(h³) as h→0.", answer: "<p>For |h|<1, |5h³+2h⁴|≤5|h|³+2|h|³=7|h|³.</p><p>Take C=7 and δ=1, so the definition of O(h³) is satisfied.</p>" },
  q4: { title: "4. Richardson extrapolation", prompt: "Suppose T(h)=L+c h²+O(h⁴). Show how to combine T(h) and T(h/2) to remove the h² term.", answer: "<p>4T(h/2)−T(h)=3L+O(h⁴). Dividing by 3 gives (4T(h/2)−T(h))/3=L+O(h⁴), so the h² term cancels.</p>" },
  q5: { title: "5. Darboux sums for a monotone function", prompt: "For f(x)=x on [0,1] with n equal subintervals, compute the lower and upper Darboux sums.", answer: "<p>L=Σ(i−1)/n·1/n=(n−1)/(2n); U=Σi/n·1/n=(n+1)/(2n).</p><p>Their difference is 1/n, which tends to zero.</p>" },
  q6: { title: "6. Integrable versus Dirichlet", prompt: "Explain why f(x)=x is Riemann integrable while the Dirichlet function 1Q is not, using lower and upper Darboux sums.", answer: "<p>For x, refining the uniform partition makes the maximum within each block approach the minimum, so U−L→0.</p><p>For 1Q, every positive-length subinterval contains rational and irrational points, so every lower sum is 0 and every upper sum is 1 over [0,1]. The gap does not shrink.</p>" },
  q7: { title: "7. FTC Part I", prompt: "Differentiate F(x)=∫₁ˣ(1+t⁴)dt and state why the theorem applies.", answer: "<p>F′(x)=1+x⁴. The integrand is continuous, so FTC Part I applies at every interior x.</p>" },
  q8: { title: "8. Diagnose an FTC hypothesis", prompt: "A student uses FTC II on a function with a jump at an interior point. Identify the possible missing hypothesis.", answer: "<p>FTC II requires a continuous integrand on the whole interval and an antiderivative with the stated differentiability condition. A jump can invalidate direct application; split the domain or use the definition of the improper integral if there is a singularity.</p>" },
  q9: { title: "9. Improper integral at infinity", prompt: "Evaluate ∫₁∞x⁻³dx and state the defining limit.", answer: "<p>∫₁ᴿx⁻³dx=1/2(1−R⁻²). Therefore the improper integral equals lim R→∞ 1/2(1−R⁻²)=1/2.</p>" },
  q10: { title: "10. Power convergence at zero", prompt: "Determine for which p∈R the integral ∫₀¹x⁻ᵖdx converges.", answer: "<p>For p≠1, ∫ε¹x⁻ᵖdx=(1−ε¹⁻ᵖ)/(1−p). It has a finite limit exactly when 1−p>0.</p><p>For p=1, the integral is −log ε→∞. Hence convergence occurs iff p<1.</p>" },
  q11: { title: "11. Self-made Taylor error diagnosis", prompt: "A student says “T₂(c) has error at most 10⁻⁴ because the next coefficient is small.” Identify what is missing from the error argument.", answer: "<p>The coefficient alone is not a remainder bound. The student must control the next derivative on the whole interval between a and c, then multiply its bound by |c−a|³/3!.</p>" },
  q12: { title: "12. Self-made Darboux reasoning", prompt: "Explain why checking a single partition with U−L<ε does not prove integrability for every ε.", answer: "<p>Integrability requires the quantifier order ∀ε>0 ∃P with U(f,P)−L(f,P)<ε. A single partition fixes one gap; it does not establish arbitrarily small gaps for all smaller tolerances.</p>" },
  q13: { title: "13. Self-made FTC comparison", prompt: "Compare FTC Part I and Part II using a continuous function f and its accumulation function F.", answer: "<p>Part I identifies an antiderivative through accumulation: F′=f. Part II evaluates a definite integral by taking any antiderivative’s endpoint difference. Part I constructs an antiderivative; Part II uses one to evaluate an integral.</p>" },
  q14: { title: "14. Self-made improper integral boundary", prompt: "Can a symmetric cancellation such as ∫−Rᴿx dx=0 prove that ∫−∞∞x dx converges? Explain.", answer: "<p>No. The two one-sided improper integrals ∫₀∞x dx and ∫−∞⁰x dx must converge separately. They do not; the symmetric limit is only a Cauchy principal value and is not the improper integral defined in the notes.</p>" }
};
