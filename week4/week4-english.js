window.MFC_ENGLISH_PACKS = window.MFC_ENGLISH_PACKS || {};

window.MFC_ENGLISH_PACKS.week4 = {
  "antiderivative-primitives": {
    networkGoalEn: "Reverse differentiation while respecting intervals and constants",
    networkRiskEn: "Merging constants across disconnected domain pieces",
    explanationEn: [
      "An antiderivative of f is a differentiable function whose derivative is f. On one interval, all antiderivatives differ by a constant, so an indefinite integral denotes a family of functions.",
      "The interval condition is essential. If the domain has several connected pieces, each piece may use a different constant."
    ],
    framesEn: ["Choose a function whose derivative matches the integrand.", "Add a vertical shift.", "Every shift has the same derivative.", "Separate disconnected intervals.", "Choose an independent constant on each piece."],
    qa: [
      { hintEn: "Differentiate the candidate family.", answerEn: "Since constants have derivative zero, (F(x)+C)′=F′(x)=f(x). Thus every F+C is an antiderivative." },
      { hintEn: "Find a function whose derivative is 2x.", answerEn: "x²+C is the family because its derivative is 2x. The constant C can be any real number." },
      { hintEn: "Look at the two connected pieces of R∖{0}.", answerEn: "On x>0 use log x+C₊ and on x<0 use log(−x)+C₋. A single constant would incorrectly connect two separate intervals." },
      { hintEn: "The definition itself is a derivative equality.", answerEn: "Differentiating the candidate verifies F′=f. It still does not replace checking the original domain or convergence across singularities." }
    ],
    counterexampleEn: { wrong: "Use one constant for ∫1/x dx over R∖{0}.", correct: "Use independent constants on the two connected intervals.", why: "Antiderivatives differ by a constant only on each connected interval." },
    checkEn: "Why does a definite integral not contain +C?",
    checkAnswerEn: "It is a number; the same integration constant cancels in the endpoint difference."
  },
  "integration-substitution": {
    networkGoalEn: "Recognise the chain rule in reverse",
    networkRiskEn: "Mixing old and new variables after substitution",
    explanationEn: [
      "Substitution changes the integration variable through x=t(y). The inner expression becomes t(y), the differential contributes t′(y), and the integrand and differential must use the same new variable.",
      "For an indefinite integral, convert the answer back to x. For a definite integral, change both bounds consistently or convert back before using the original bounds."
    ],
    framesEn: ["Identify an inner function.", "Look for its derivative factor.", "Set a new variable u or y.", "Convert the whole integrand and differential.", "Return to x or change both bounds."],
    qa: [
      { hintEn: "Look for a composition and its derivative factor.", answerEn: "Choose the inner function whose derivative appears as a factor. Typical examples are u=x²+1 or u=sin x." },
      { hintEn: "Set u=x²+1, so du=2x dx.", answerEn: "The integral becomes ∫u³du=u⁴/4+C. Returning to x gives (x²+1)⁴/4+C." },
      { hintEn: "The theorem uses oriented definite integrals.", answerEn: "The factor is t′ with its sign, not |t′|. A decreasing substitution reverses orientation, and the signed bounds account for that change." },
      { hintEn: "All values t(y) must remain in the original integrand’s domain.", answerEn: "The range condition t(y)∈J is required. Algebraic replacement alone does not guarantee that the composed integrand is defined." }
    ],
    counterexampleEn: { wrong: "Use u in one part of the integrand and keep x in another.", correct: "Convert the integrand, differential and bounds to one variable.", why: "Substitution changes the full integration variable." },
    checkEn: "What substitution is natural for ∫2xe^{x²}dx?",
    checkAnswerEn: "u=x², so du=2x dx."
  },
  "definite-substitution": {
    networkGoalEn: "Change integrand, differential and bounds together",
    networkRiskEn: "Keeping old bounds after changing variables",
    explanationEn: [
      "Definite substitution can be performed entirely in the new variable once the old endpoints are mapped to new endpoints.",
      "The orientation remains meaningful, and inverse trigonometric substitutions require a branch consistent with the original interval."
    ],
    framesEn: ["Map old endpoints to new endpoints.", "Replace the integrand.", "Replace the differential.", "Integrate in the new variable.", "Preserve direction and branch."],
    qa: [
      { hintEn: "Solve the substitution relation at the old endpoints.", answerEn: "The new endpoints are the α and β satisfying t(α)=a and t(β)=b. Old numerical bounds cannot be retained." },
      { hintEn: "Let u=1−x² and map x=0,1.", answerEn: "The bounds become u=1 and u=0. The integral is −1/2∫₁⁰u^{1/2}du=1/3." },
      { hintEn: "arcsin provides a restricted branch.", answerEn: "Choose a continuous single-valued branch matching the original interval. Otherwise the inverse may jump or produce the wrong orientation." },
      { hintEn: "Definite integrals are oriented.", answerEn: "A reversed new interval can produce a negative sign; this is consistent with oriented integration and cannot be discarded." }
    ],
    counterexampleEn: { wrong: "Substitute u=1+x² but keep the x-bounds.", correct: "Replace the bounds by their corresponding u-values.", why: "The integration variable has changed." },
    checkEn: "If x goes from 0 to 1 and u=1−x², what are the new bounds?",
    checkAnswerEn: "u goes from 1 to 0."
  },
  "integration-by-parts": {
    networkGoalEn: "Reverse the product rule and choose useful factors",
    networkRiskEn: "Choosing factors that make the remaining integral harder",
    explanationEn: [
      "Integration by parts follows from the product rule. A good choice makes u′ simpler and leaves a factor v′ that is easy to integrate.",
      "For a definite integral, the uv boundary difference is mandatory; it is not an optional decoration."
    ],
    framesEn: ["Write the product-rule identity.", "Choose one factor to differentiate.", "Choose the other factor to integrate.", "Transfer the derivative.", "Evaluate the boundary difference."],
    qa: [
      { hintEn: "Compare how each candidate changes after differentiation.", answerEn: "Choose u so u′ is simpler and v′ so v is easy to find. A polynomial often works as u." },
      { hintEn: "Take u=x and v′=eˣ.", answerEn: "Then u′=1 and v=eˣ. The integral is xeˣ−∫eˣdx=eˣ(x−1)+C." },
      { hintEn: "Use the endpoint difference of uv.", answerEn: "The boundary term is [uv]ₐᵇ=u(b)v(b)−u(a)v(a). It must be included for every definite parts calculation." },
      { hintEn: "A legal transfer may produce a worse integral.", answerEn: "The product rule remains valid, but the remaining ∫u′v can be harder. Method choice should simplify the problem." }
    ],
    counterexampleEn: { wrong: "Drop the uv term in a definite integral.", correct: "Keep the full endpoint difference.", why: "The boundary term is the integral of the derivative of uv." },
    checkEn: "For ∫x sin x dx, which factor should usually be u?",
    checkAnswerEn: "u=x, so u′ becomes the constant 1."
  },
  "repeated-parts-improper": {
    networkGoalEn: "Repeat parts without losing boundary contributions",
    networkRiskEn: "Forgetting accumulated endpoint terms or treating infinity as a number",
    explanationEn: [
      "When parts leaves another polynomial-exponential or polynomial-trigonometric product, repeat the procedure. Each iteration produces its own boundary contribution.",
      "For an improper integral, first compute the proper integral to R and only then take the limit."
    ],
    framesEn: ["Apply parts once.", "Inspect the remaining product.", "Lower the polynomial degree again.", "Accumulate each boundary term.", "Take limits only after truncation."],
    qa: [
      { hintEn: "Each part reduces the degree of x².", answerEn: "x²eˣ needs two parts: first reduce x² to x, then x to a constant. The result is eˣ(x²−2x+2)+C." },
      { hintEn: "Expect the original integral to reappear after two parts.", answerEn: "A cyclic equation such as I=boundary expression−I can be solved for I, while retaining the boundary terms." },
      { hintEn: "Every iteration has its own uv.", answerEn: "Boundary contributions must be accumulated. Omitting one produces an incorrect definite integral." },
      { hintEn: "Replace infinity by a finite truncation R.", answerEn: "Compute the proper integral up to R, keep the R-dependent boundary, then evaluate lim R→∞." }
    ],
    counterexampleEn: { wrong: "Stop after one parts step for x²eˣ.", correct: "The remaining integral of 2xeˣ still needs another parts step.", why: "Repeated parts continues until the remainder is elementary." },
    checkEn: "When should repeated parts stop?",
    checkAnswerEn: "When the remaining integral is directly computable from known primitives."
  },
  "rational-functions-division": {
    networkGoalEn: "Reduce rational integrands to proper fractions",
    networkRiskEn: "Applying a partial-fraction template before polynomial division",
    explanationEn: [
      "A rational function P/Q must be considered on intervals where the original denominator is nonzero.",
      "If degP≥degQ, polynomial division writes it as a polynomial plus a proper fraction. Only the proper fraction is sent to the partial-fraction stage."
    ],
    framesEn: ["Compare numerator and denominator degrees.", "Identify an improper rational fraction.", "Divide the polynomials.", "Keep the remainder over Q.", "Proceed with the proper fraction."],
    qa: [
      { hintEn: "Compare degrees.", answerEn: "A proper fraction has degP<degQ. If degP≥degQ, it is improper and division comes first." },
      { hintEn: "Divide x²+1 by x+1.", answerEn: "The quotient is x−1 and the remainder is 2, so (x²+1)/(x+1)=x−1+2/(x+1)." },
      { hintEn: "The original denominator controls the domain.", answerEn: "The denominator zeros create possible poles or removable points. Simplifying cannot enlarge the original domain." },
      { hintEn: "The remainder must be lower degree.", answerEn: "The degree condition matches the number of unknown coefficients available in a partial-fraction template." }
    ],
    counterexampleEn: { wrong: "Use a constant-numerator template for an improper rational fraction.", correct: "Divide first and apply the template only to the remainder fraction.", why: "The polynomial part is not part of a proper-fraction template." },
    checkEn: "What degree condition defines a proper rational fraction?",
    checkAnswerEn: "The numerator degree is strictly smaller than the denominator degree."
  },
  "partial-fractions": {
    networkGoalEn: "Translate denominator factors into complete coefficient templates",
    networkRiskEn: "Omitting repeated powers or using a constant numerator for a quadratic",
    explanationEn: [
      "Partial fractions follow a template determined entirely by the denominator: distinct linear factors, every power of repeated factors, and linear numerators over irreducible quadratic factors.",
      "Write the complete template first, then solve the coefficients by comparing expanded numerators or substituting convenient roots."
    ],
    framesEn: ["Factor the denominator completely.", "Write every linear term.", "Include every repeated power.", "Use a linear numerator for quadratics.", "Solve and verify the coefficients."],
    qa: [
      { hintEn: "Use the multiplicity of each root.", answerEn: "Each distinct linear factor contributes one constant numerator, and a repeated factor (x−r)ᵏ contributes all powers 1 through k." },
      { hintEn: "Set A/(x+1)+B/(x+2).", answerEn: "Solving the numerator identity gives A=1 and B=−1, so the decomposition is 1/(x+1)−1/(x+2)." },
      { hintEn: "A quadratic needs two coefficient degrees of freedom.", answerEn: "An irreducible quadratic factor requires a linear numerator Cx+D, not just a constant." },
      { hintEn: "Recombine or test non-pole values.", answerEn: "Recombine the terms to recover the original numerator identity, then verify the domain from the original denominator." }
    ],
    counterexampleEn: { wrong: "Write only one term for (x−1)².", correct: "Include both A/(x−1) and B/(x−1)².", why: "Every repeated power belongs to the template." },
    checkEn: "How many terms are needed for a repeated factor (x−1)²?",
    checkAnswerEn: "Two: A/(x−1)+B/(x−1)²."
  },
  "rational-primitives-poles": {
    networkGoalEn: "Connect partial-fraction primitives with domain and improper convergence",
    networkRiskEn: "Crossing a pole by substituting endpoints into one primitive",
    explanationEn: [
      "Linear partial-fraction terms produce logarithms, while irreducible quadratic terms are reduced to logarithms and arctangents.",
      "Theorem 10.22 gives an elementary primitive on each interval where the original denominator is nonzero. It does not imply that an integral across a pole converges."
    ],
    framesEn: ["Factor and split the rational function.", "Integrate linear terms.", "Complete the square for quadratic terms.", "Identify poles and valid intervals.", "Check improper convergence separately."],
    qa: [
      { hintEn: "Differentiate log and arctan to recover the basic modules.", answerEn: "1/(x−r) gives log|x−r|, a power contributes through the power rule, and a reduced nondegenerate quadratic gives log and arctan parts." },
      { hintEn: "Recognise the derivative of arctan.", answerEn: "∫1/(x²+1)dx=arctan x+C. A general irreducible quadratic is first completed to (x−h)²+k²." },
      { hintEn: "Split at the pole and take one-sided limits.", answerEn: "The integral over [0,2] must be split at x=1. The two improper tails diverge, so endpoint subtraction over the whole interval is invalid." },
      { hintEn: "Domain comes from the original denominator.", answerEn: "Cancellation changes the formula only on its allowed domain; it does not restore a point where the original denominator was zero." }
    ],
    counterexampleEn: { wrong: "A primitive exists on both sides, so the integral across the pole converges.", correct: "Each one-sided improper integral must have a finite limit.", why: "Local primitives do not establish convergence across a singular point." },
    checkEn: "What is the primitive of 1/(x²+1)?",
    checkAnswerEn: "arctan x+C."
  },
  "trig-powers-products": {
    networkGoalEn: "Choose substitution or power reduction from trigonometric parity",
    networkRiskEn: "Searching for a derivative factor that all-even powers do not provide",
    explanationEn: [
      "For products of sine and cosine, an odd power can be split to expose one derivative factor for substitution.",
      "If both powers are even, no spare factor exists; power-reduction identities rewrite squares as first-power double-angle terms."
    ],
    framesEn: ["Inspect both exponents.", "Find an odd power.", "Split off one derivative factor.", "Use identities when all powers are even.", "Integrate the resulting ordinary powers."],
    qa: [
      { hintEn: "One factor can become du.", answerEn: "An odd sine power is split into an even sine power times sin x dx. An odd cosine power is handled analogously." },
      { hintEn: "Use u=cos x and sin²=1−u².", answerEn: "The integral turns into −∫(1−u²)u²du before integrating." },
      { hintEn: "Power reduction prevents a missing derivative factor.", answerEn: "sin²x=(1−cos2x)/2 rewrites it as a first-power double-angle integral." },
      { hintEn: "Use tan x=sin x/cos x.", answerEn: "Let u=cos x, du=−sin x dx. Then ∫tan x dx=−log|cos x|+C." }
    ],
    counterexampleEn: { wrong: "Try to split a derivative factor from sin²x.", correct: "Both powers are even, so use a power-reduction identity.", why: "No additional first-power derivative factor is available." },
    checkEn: "Which identity handles ∫cos²x dx?",
    checkAnswerEn: "cos²x=(1+cos2x)/2."
  },
  "trig-substitution-branches": {
    networkGoalEn: "Eliminate radicals with a branch-safe trigonometric substitution",
    networkRiskEn: "Ignoring absolute values and inverse-function branches",
    explanationEn: [
      "Radicals related to 1−x², 1+x² and x²−1 suggest sine, tangent and related substitutions, respectively.",
      "A substitution identity simplifies the radical only after selecting a branch on which the inverse trig function and sign are controlled."
    ],
    framesEn: ["Match the radical to an identity.", "Choose the substitution.", "Restrict the parameter branch.", "Replace the differential.", "Convert back within the same branch."],
    qa: [
      { hintEn: "Use 1−sin²t=cos²t.", answerEn: "For √(1−x²), choose x=sin t. The radical becomes |cos t|, simplified only on a branch where cos t has known sign." },
      { hintEn: "The derivative of arcsin is 1/√(1−x²).", answerEn: "On the principal branch, the substitution gives ∫dt=t+C=arcsin x+C." },
      { hintEn: "A square root is nonnegative.", answerEn: "sin²t has square root |cos t|. Whether it equals cos t or −cos t depends on the branch." },
      { hintEn: "Boundary cases may involve inverse-trig limits.", answerEn: "Approach the endpoint within the chosen branch and treat an improper endpoint with one-sided limits." }
    ],
    counterexampleEn: { wrong: "Replace √(sin²t) by sin t on every branch.", correct: "It equals the nonnegative |sin t|; the branch determines the sign.", why: "The principal square root is nonnegative." },
    checkEn: "Which substitution suits √(1−x²)?",
    checkAnswerEn: "x=sin t on a selected branch."
  },
  "hyperbolic-integrals": {
    networkGoalEn: "Use exponential identities to simplify radicals with plus signs",
    networkRiskEn: "Using the trigonometric plus identity for hyperbolic functions",
    explanationEn: [
      "Hyperbolic functions are defined through eˣ and e⁻ˣ. Their derivatives are cosh and sinh, and the central identity has a minus sign: cosh²−sinh²=1.",
      "The substitution x=sinh t converts √(1+x²) to cosh t and is useful for the arsinh primitive."
    ],
    framesEn: ["Write hyperbolic functions using exponentials.", "Use cosh²−sinh²=1.", "Check denominators for tanh.", "Substitute into a radical.", "Return through arsinh or exponentials."],
    qa: [
      { hintEn: "Use the exponential definitions.", answerEn: "cosh x=(eˣ+e⁻ˣ)/2 and sinh x=(eˣ−e⁻ˣ)/2. Their derivatives are sinh and cosh respectively." },
      { hintEn: "Expand the two squares.", answerEn: "The cross terms cancel in the difference, leaving 4/4=1." },
      { hintEn: "Set x=sinh t.", answerEn: "√(1+sinh²t)=cosh t and dx=cosh t dt, so the integral becomes ∫dt=t+C=arsinh x+C." },
      { hintEn: "tanh is sinh/cosh.", answerEn: "The definition needs cosh x≠0. For real x, cosh x≥1, so tanh is defined for every real x." }
    ],
    counterexampleEn: { wrong: "State cosh²x+sinh²x=1.", correct: "The identity is cosh²x−sinh²x=1.", why: "Hyperbolic identities have different signs from circular trigonometric identities." },
    checkEn: "What is the logarithmic form of arsinh x?",
    checkAnswerEn: "log(x+√(1+x²))."
  },
  "integral-symmetry": {
    networkGoalEn: "Use parity on symmetric intervals to avoid unnecessary integration",
    networkRiskEn: "Applying parity when the interval is not symmetric",
    explanationEn: [
      "On [−a,a], an even function has mirror-image area on both sides, while an odd function has opposite signed contributions.",
      "The conclusion requires both parity and Riemann integrability. A visual symmetry alone does not repair a pole or an unbounded function."
    ],
    framesEn: ["Check that the interval is symmetric.", "Test f(−x).", "Reflect the left half to the right.", "Double the even contribution.", "Cancel the odd contribution."],
    qa: [
      { hintEn: "Compare f(−x) with f(x).", answerEn: "Even means f(−x)=f(x); odd means f(−x)=−f(x). The zero function satisfies both." },
      { hintEn: "x³ is odd on a symmetric interval.", answerEn: "The left and right signed areas are opposites, so the integral is zero." },
      { hintEn: "x² is even.", answerEn: "The two half-interval areas are equal, so the integral is 2∫₀¹x²dx=2/3." },
      { hintEn: "The interval must be [−a,a].", answerEn: "Without symmetry, the left and right contributions do not pair. Oddness alone does not force zero." }
    ],
    counterexampleEn: { wrong: "Because 1/x is odd, ∫−1¹1/x dx=0.", correct: "1/x is unbounded at 0 and both improper sides diverge.", why: "The symmetry theorem requires integrability." },
    checkEn: "What is an odd function’s integral on a symmetric interval?",
    checkAnswerEn: "Zero, provided the function is integrable."
  },
  "integration-existence-numerical": {
    networkGoalEn: "Separate existence, elementary expression and numerical approximation",
    networkRiskEn: "Concluding divergence because no elementary primitive was found",
    explanationEn: [
      "Continuity on a finite closed interval guarantees Riemann integrability, but not an elementary antiderivative.",
      "An exact integral expression, a numerical approximation and an elementary primitive are different kinds of answers. A numerical answer should specify method and accuracy."
    ],
    framesEn: ["Check existence first.", "Try structural elementary methods.", "Recognise a non-elementary possibility.", "Choose an approximation if appropriate.", "State the approximation error."],
    qa: [
      { hintEn: "Existence and elementary representation are separate questions.", answerEn: "A continuous function on a finite closed interval is integrable. Finding its primitive among elementary functions is an additional structural question." },
      { hintEn: "Failure to find a formula does not disprove existence.", answerEn: "The integral may exist without an elementary closed form. Improper convergence still needs a separate check." },
      { hintEn: "A Riemann sum is an approximation unless an error bound is supplied.", answerEn: "A finite Riemann sum gives a computable approximation; a guaranteed tolerance requires an error estimate." },
      { hintEn: "State method and precision.", answerEn: "The answer should include the numerical method and requested tolerance; a bare decimal is incomplete." }
    ],
    counterexampleEn: { wrong: "No elementary primitive means the integral does not exist.", correct: "The finite-interval continuous integral may exist without an elementary formula.", why: "Integrability does not depend on elementary expressibility." },
    checkEn: "Does non-elementarity imply divergence on an improper interval?",
    checkAnswerEn: "No; convergence must be checked separately."
  },
  "method-selection-combination": {
    networkGoalEn: "Choose methods from structure and combine them without losing hypotheses",
    networkRiskEn: "Applying a valid formula that makes the remaining problem harder",
    explanationEn: [
      "Begin by checking the domain and integrability, then identify the outermost algebraic structure of the integrand.",
      "A complex integral may require several methods in sequence. After each transformation, re-identify the new structure and recheck the current theorem’s hypotheses."
    ],
    framesEn: ["Check domain and existence.", "Identify the structure.", "Choose the first method.", "Transform the problem.", "Re-evaluate the new structure."],
    qa: [
      { hintEn: "Domain, structure and hypotheses.", answerEn: "First identify where the integrand is valid, then recognise its algebraic structure, then match that structure to a method with satisfied hypotheses." },
      { hintEn: "A polynomial times exponential suggests parts.", answerEn: "Use integration by parts; repeated polynomial degree may require multiple parts." },
      { hintEn: "A legal equation can still make the remainder worse.", answerEn: "Parts is valid whenever its hypotheses hold, but an unhelpful choice may complicate u′v. The method must reduce the remaining difficulty." },
      { hintEn: "Every transformation can introduce a restriction.", answerEn: "Substitutions, logarithms and inverse functions may change allowed values; all final conclusions must be checked against the original domain." }
    ],
    counterexampleEn: { wrong: "Continue a method merely because it is legal.", correct: "Change strategy when the remaining problem becomes more complicated.", why: "Method selection is judged by simplification, not only validity." },
    checkEn: "Which structure most directly suggests substitution?",
    checkAnswerEn: "An inner composition together with its derivative factor."
  },
  "course-consolidation": {
    networkGoalEn: "Combine integration techniques with existence, FTC and error analysis",
    networkRiskEn: "Reporting a primitive while ignoring domain, convergence or approximation error",
    explanationEn: [
      "An integration answer has several independent layers: existence of the integral, applicability of the method, validity of the primitive and convergence at singular or infinite endpoints.",
      "Numerical integration and Taylor approximation require a stated accuracy. A computed expression alone does not establish the requested precision."
    ],
    framesEn: ["Check existence and convergence.", "Choose and justify the method.", "Verify the primitive.", "Bound approximation error if needed.", "Reconcile the final domain."],
    qa: [
      { hintEn: "Check existence, method, precision and domain.", answerEn: "An answer should account for integrability or convergence, the method’s hypotheses, any approximation error, and the original domain." },
      { hintEn: "Combine exact integration with a Taylor remainder.", answerEn: "If a primitive is unavailable but the integral is finite, approximate the integrand or value and use a remainder or numerical error bound." },
      { hintEn: "FTC requires continuity on the interval.", answerEn: "A primitive on one side of a discontinuity does not automatically cross it. Split the interval and handle improper pieces separately." },
      { hintEn: "Check the original function and original interval.", answerEn: "Parity and symmetry can be checked before substitution and may eliminate the integral immediately. Any new variable introduces a new symmetry domain to inspect." }
    ],
    counterexampleEn: { wrong: "A primitive exists, so an improper integral across a pole must converge.", correct: "The one-sided improper limits still need to exist finitely.", why: "A local primitive does not settle global convergence." },
    checkEn: "What controls the error when a Taylor polynomial approximates an integral?",
    checkAnswerEn: "A Lagrange remainder or another explicit error bound."
  },
  "line-integrals-parametric": {
    networkGoalEn: "Integrate a scalar function along a parameterised curve",
    networkRiskEn: "Forgetting the speed factor or the curve’s multiplicity",
    explanationEn: [
      "A scalar line integral evaluates f at points of a parameterised curve and multiplies by the parameter speed |γ′(t)| to obtain length measure along the curve.",
      "The parameter interval, direction and multiplicity are part of the curve specification. This chapter is marked non-examinable."
    ],
    framesEn: ["Choose a parameterisation.", "Evaluate f on the curve.", "Compute the speed.", "Use ds=|γ′|dt.", "Respect direction and repeated tracing."],
    qa: [
      { hintEn: "The path element is speed times parameter differential.", answerEn: "ds=|γ′(t)|dt, so ∫C f ds=∫ₐᵇ f(γ(t))|γ′(t)|dt." },
      { hintEn: "Parameterise the segment linearly.", answerEn: "With γ(t)=(t,2t), 0≤t≤1, the speed is √5. Thus ∫C1ds=√5." },
      { hintEn: "The parameter travels around the circle twice.", answerEn: "The line integral follows the traced parameter path. A 4π interval traverses the circle twice and doubles the contribution for constant f=1." },
      { hintEn: "The notes label the chapter non-examinable.", answerEn: "The goal is conceptual familiarity and preparation for later courses, not a full proof-based treatment." }
    ],
    counterexampleEn: { wrong: "Two parameterisations of the same geometric circle always give the same line integral.", correct: "A parameterisation that traces the circle twice contributes twice.", why: "Line integrals depend on the parameterised trace and multiplicity." },
    checkEn: "What is ds in a scalar line integral?",
    checkAnswerEn: "ds=|γ′(t)|dt."
  }
};

window.MFC_ENGLISH_PACKS.week4Questions = {
  q1: { title: "1. Recognise substitutions", prompt: "Choose substitutions for the Exercise 10.6 forms and explain how the inner function and derivative factor pair.", answer: "<p>Select the inner function whose derivative is already present up to a constant. Convert the whole integrand and differential before integrating.</p>" },
  q2: { title: "2. Substitution and bounds", prompt: "Evaluate a definite integral by changing both bounds, and explain why old numeric bounds cannot be retained.", answer: "<p>Use the substitution to map the old endpoints to new endpoints. The integration variable has changed, so the bounds must be measured in the new variable.</p>" },
  q3: { title: "3. Integration by parts", prompt: "For the Exercise 10.14 integrals, choose u and v′ and explain why the choice simplifies the remaining integral.", answer: "<p>Choose u so its derivative is simpler and v′ so its primitive is easy. Include the uv boundary difference for definite integrals.</p>" },
  q4: { title: "4. Parts inside an improper limit", prompt: "Use proper truncation and integration by parts on an Exercise 10.16 improper integral.", answer: "<p>First integrate to a finite endpoint R. Apply parts to that proper integral, retain all R-boundary terms, and only then take the limit.</p>" },
  q5: { title: "5. Partial fractions and rational primitives", prompt: "For an Exercise 10.24 rational function, divide if needed, decompose into partial fractions, integrate, and verify by differentiation.", answer: "<p>Use a proper-fraction template, solve its coefficients, integrate the resulting modules, and differentiate the answer to verify F′=f.</p>" },
  q6: { title: "6. Domains, poles and removable points", prompt: "Explain an Exercise 10.25 case where cancellation hides a missing point or where a pole blocks endpoint subtraction.", answer: "<p>The original denominator determines the domain. Split improper integrals at poles and check one-sided convergence; cancellation does not restore a removed point.</p>" },
  q7: { title: "7. Trigonometric powers and products", prompt: "Select power reduction or a derivative-factor substitution for the Exercise 11.5 integrals.", answer: "<p>Use an odd-power substitution when a derivative factor is available; use power-reduction identities when all powers are even.</p>" },
  q8: { title: "8. Radicals and branches", prompt: "Choose a trigonometric substitution for one Exercise 11.8 integral and state the branch restrictions.", answer: "<p>Match 1−x², 1+x² or x²−1 to a suitable trig or hyperbolic relation, constrain the parameter branch, and track absolute values carefully.</p>" },
  q9: { title: "9. Hyperbolic integrals", prompt: "Use hyperbolic definitions and the identity cosh²−sinh²=1 on an Exercise 11.11 item.", answer: "<p>Rewrite the functions using exponentials or the hyperbolic identity, check denominator restrictions, and differentiate to verify the primitive.</p>" },
  q10: { title: "10. Parity and symmetry", prompt: "Apply even/odd symmetry only after verifying the Exercise 11.15 interval and integrability hypotheses.", answer: "<p>On a symmetric interval, even functions double the right half and odd functions cancel, provided the original function is integrable.</p>" },
  q11: { title: "11. Self-made: first method diagnosis", prompt: "A student chooses parts first for a composition with its derivative factor. Diagnose the better first move.", answer: "<p>Recognition should start from structure. A composition with derivative factor suggests substitution; parts is better suited to a product whose factors have complementary derivative/integral behaviour.</p>" },
  q12: { title: "12. Self-made: domain hidden by cancellation", prompt: "A rational expression simplifies to a polynomial. Explain why its integral still uses the original excluded points.", answer: "<p>The simplified polynomial equals the rational expression only on the original domain. Denominator-zero points remain excluded unless the original problem explicitly redefines them.</p>" },
  q13: { title: "13. Self-made: course consolidation", prompt: "Explain how FTC, a Taylor remainder and an improper limit answer three different layers of one integral problem.", answer: "<p>FTC connects existence to antiderivatives under continuity; Taylor remainder controls numerical approximation error; improper limits decide convergence at singular or infinite endpoints.</p>" },
  q14: { title: "14. Self-made: repeated line trace", prompt: "Why does a circle parameterised on [0,4π] give twice the line integral of the same function on [0,2π]?", answer: "<p>A line integral follows the parameterised trace. The longer interval traverses the circle twice, so the contribution is repeated.</p>" }
};
