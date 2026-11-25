window.MFC_ENGLISH_PACKS = window.MFC_ENGLISH_PACKS || {};

window.MFC_ENGLISH_PACKS.week2 = {
  "derivative-definition": {
    networkGoalEn: "Translate instantaneous change into a limit of difference quotients",
    networkRiskEn: "Substituting h = 0 before simplifying",
    explanationEn: [
      "An average rate of change compares the outputs at two different inputs. Geometrically, it is the slope of the secant line through the corresponding two graph points.",
      "A derivative is the limiting value of that average rate as the input separation goes to zero. The quotient must first be simplified with h ≠ 0; only then is the limit h → 0 taken."
    ],
    explanationZh: [
      "平均变化率比较两个不同输入对应的输出，几何上就是两点割线的斜率。",
      "导数让输入间隔趋于零，取平均变化率的极限。差商必须先保持 h ≠ 0 完成约分，再让 h 趋近 0。"
    ],
    framesEn: [
      "Two input points determine a secant line.",
      "The second point moves toward the first.",
      "The quotient tracks the change in output divided by the change in input.",
      "The secant slopes settle toward one value.",
      "The finite limit is the tangent slope at the point."
    ],
    qa: [
      {
        hintEn: "Identify the starting input, the changed input, the output change and the limit point.",
        answerEn: "The value a is the base input, a + h is another input, f(a + h) − f(a) is the corresponding change in output, and h is the input change. The quotient requires h ≠ 0, so substitution of h = 0 must wait until after algebraic simplification."
      },
      {
        hintEn: "Expand (a + h)² and cancel the a² terms first.",
        answerEn: "For f(x) = x², the numerator is (a + h)² − a² = 2ah + h². Dividing by h with h ≠ 0 gives 2a + h. Letting h → 0 then gives f′(a) = 2a, or f′(x) = 2x."
      },
      {
        hintEn: "The denominator contains h, so cancellation is the step that removes the 0/0 form.",
        answerEn: "Setting h = 0 immediately makes the denominator zero. A punctured limit keeps h ≠ 0 while h approaches 0, so cancellation is legal. After simplifying to 2a + h, the limit can be taken without losing the original quotient."
      },
      {
        hintEn: "Differentiability requires one finite two-sided limit for the difference quotient.",
        answerEn: "For |x| at 0, h > 0 gives the difference quotient 1, while h < 0 gives −1. The left and right limits disagree, so the two-sided difference-quotient limit does not exist. Therefore |x| has no derivative at 0."
      }
    ],
    counterexampleEn: {
      wrong: "Substituting h = 0 immediately gives 0/0, so the derivative does not exist.",
      correct: "The 0/0 form only means direct substitution is invalid. Simplify for h ≠ 0 and then take the limit.",
      why: "The derivative is a punctured limit in the variable h."
    },
    checkEn: "Why is f′(a) a number while f′ is a function?",
    checkAnswerEn: "f′(a) is the derivative at the fixed input a. The function f′ assigns the derivative f′(x) to each point x where it exists."
  },
  "differentiability-continuity": {
    networkGoalEn: "Distinguish the one-way implication from differentiability to continuity",
    networkRiskEn: "Assuming that continuity implies differentiability",
    explanationEn: [
      "Continuity prevents the graph from jumping away from its point value. Differentiability also requires the difference quotient from both sides to approach one finite slope.",
      "Differentiability is therefore stronger: every differentiable function is continuous. The converse is false because a corner can remain connected while having different one-sided slopes."
    ],
    framesEn: [
      "Continuity requires both sides to meet at one height.",
      "Differentiability also requires both sides to meet at one slope.",
      "The graph of |x| remains connected at zero.",
      "Its left slope is −1 and its right slope is 1.",
      "Continuity therefore does not guarantee differentiability."
    ],
    qa: [
      {
        hintEn: "Compare meeting at the same height with having one common tangent direction.",
        answerEn: "A connected graph guarantees that the output approaches f(a), but a unique tangent also requires the slopes from both sides to agree. At a sharp corner the graph is connected while the two slopes differ."
      },
      {
        hintEn: "Factor f(x) − f(a) through the difference quotient.",
        answerEn: "Write f(x) − f(a) = [(f(x) − f(a))/(x − a)](x − a). If the quotient approaches f′(a) and x − a approaches zero, the product approaches zero. Hence f(x) → f(a), so f is continuous."
      },
      {
        hintEn: "Use h > 0 and h < 0 separately.",
        answerEn: "For |x| at 0, h > 0 gives |h|/h = 1, while h < 0 gives |h|/h = −1. The right derivative is 1 and the left derivative is −1, so no common two-sided derivative exists."
      },
      {
        hintEn: "Use the contrapositive of ‘differentiable implies continuous’.",
        answerEn: "A function that is discontinuous at a cannot be differentiable there, because differentiability would force continuity. The reverse direction is not available: continuity only gets through the first gate."
      },
      {
        hintEn: "State the arrow direction and give the corner example.",
        answerEn: "Differentiability is stronger than continuity: differentiability implies continuity, but continuity does not imply differentiability. The absolute-value function at zero is the standard counterexample."
      }
    ],
    counterexampleEn: {
      wrong: "The function |x| is continuous at 0, so it must be differentiable there.",
      correct: "It is continuous but has left slope −1 and right slope 1 at zero.",
      why: "Continuity controls the height of the graph, not the uniqueness of its slope."
    },
    checkEn: "What is the smallest standard example of a continuous but non-differentiable function?",
    checkAnswerEn: "f(x) = |x| at x = 0."
  },
  "exp-trig-derivatives": {
    networkGoalEn: "Derive basic exponential and trigonometric derivatives from fundamental limits",
    networkRiskEn: "Using L’Hôpital to prove the limits those derivatives depend on",
    explanationEn: [
      "The derivatives of eˣ, sin x and cos x follow from difference quotients and three fundamental limits at zero: (eʰ − 1)/h → 1, sin h/h → 1 and (cos h − 1)/h → 0.",
      "The algebraic identities first separate the x-dependent part of the difference quotient from the limiting part in h. Using L’Hôpital to prove the fundamental trigonometric limit would be circular because the derivative formulas depend on it."
    ],
    framesEn: [
      "A point on the unit circle has coordinates involving sine and cosine.",
      "As h shrinks, sin h/h approaches 1.",
      "The cosine difference quotient rearranges through the identity for cos(x + h).",
      "The three zero limits become fixed constants.",
      "Those constants produce the derivatives of the basic functions."
    ],
    qa: [
      {
        hintEn: "Use the addition formulas to separate terms depending on x from terms depending on h.",
        answerEn: "For sine, sin(x + h) = sin x cos h + cos x sin h. For cosine, cos(x + h) = cos x cos h − sin x sin h. For the exponential, e^{x+h} = eˣeʰ. These identities isolate a factor that does not change as h → 0."
      },
      {
        hintEn: "These are the standard limits from the notes.",
        answerEn: "The three limits are (eʰ − 1)/h → 1, sin h/h → 1, and (cos h − 1)/h → 0. They are fundamental because the derivative formulas are built from them."
      },
      {
        hintEn: "Insert the sine addition formula into the difference quotient and group terms.",
        answerEn: "The quotient becomes sin x(cos h − 1)/h + cos x(sin h/h). As h → 0, the first bracket tends to 0 and the second to 1, leaving cos x. Therefore (sin x)′ = cos x."
      },
      {
        hintEn: "The derivative of sine is what would be needed to apply L’Hôpital to sin h/h.",
        answerEn: "L’Hôpital would require the derivative of sin at 0, but that derivative is being derived from the limit sin h/h. The argument would assume the conclusion, so a geometric or independent limit argument is needed."
      },
      {
        hintEn: "The common source is a difference quotient whose inner limit is one of the fixed constants.",
        answerEn: "All three formulas come from separating the x-dependent part of the difference quotient and then evaluating a universal limit at zero. The x-independent limit supplies the coefficient."
      }
    ],
    counterexampleEn: {
      wrong: "Use L’Hôpital on sin h/h and conclude the derivative of sine is cosine.",
      correct: "First establish sin h/h → 1 without the derivative of sine, then use that limit to derive the derivative.",
      why: "Using the derivative to prove the limit that defines the derivative is circular."
    },
    checkEn: "Which fundamental limit is responsible for (sin x)′ = cos x?",
    checkAnswerEn: "sin h/h → 1, together with (cos h − 1)/h → 0."
  },
  "derivative-rules": {
    networkGoalEn: "Use linearity, product and quotient rules by recognising the outer structure",
    networkRiskEn: "Writing (fg)′ as f′g′ or losing the order in a quotient",
    explanationEn: [
      "Linearity says that derivatives respect sums and constant multiples. Products and quotients need separate rules because both factors can change simultaneously.",
      "The product rule contains two contributions: the first factor changes while the second is held fixed, and then the second changes while the first is held fixed. The quotient rule follows by rewriting a quotient as a product and using the reciprocal rule."
    ],
    framesEn: [
      "A product can change through its first factor.",
      "It can also change through its second factor.",
      "Both contributions must be included.",
      "The derivative collects the two product-rule terms.",
      "Quotient order matters because subtraction is not symmetric."
    ],
    qa: [
      {
        hintEn: "Apply the limit definition to f + g and split the error into two limits.",
        answerEn: "The difference quotient of f + g is the sum of the difference quotients of f and g. Taking limits uses the limit law for sums, so (f + g)′ = f′ + g′ wherever both derivatives exist."
      },
      {
        hintEn: "Think of an area whose width and height both change.",
        answerEn: "A small change in f contributes f′g, while a small change in g contributes fg′. The product rule keeps both first-order contributions, giving (fg)′ = f′g + fg′."
      },
      {
        hintEn: "Identify the product x² and eˣ before differentiating.",
        answerEn: "With f = x² and g = eˣ, the product rule gives 2x eˣ + x² eˣ. Factoring gives x eˣ(x + 2)."
      },
      {
        hintEn: "Write the quotient rule numerator in the order of the product rule.",
        answerEn: "The quotient rule is (f/g)′ = (f′g − fg′)/g². The terms cannot be swapped because subtraction changes sign. The denominator must be nonzero at the point."
      },
      {
        hintEn: "Simplify first when the algebra removes a repeated product or quotient structure.",
        answerEn: "If the expression can be rewritten into a sum of powers or a simple cancellation that reduces the number of rules, simplify first. Otherwise apply the outermost rule and then the inner rules."
      }
    ],
    counterexampleEn: {
      wrong: "Differentiate fg by multiplying f′ and g′.",
      correct: "Use (fg)′ = f′g + fg′; both factors contribute one term each.",
      why: "Each factor can change independently, so both changes affect the product."
    },
    checkEn: "Why does the product rule have two terms?",
    checkAnswerEn: "The product changes when either factor changes, so the total first-order change contains one contribution from each factor."
  },
  "chain-rule": {
    networkGoalEn: "Differentiate a composition by differentiating outward and multiplying inner rates",
    networkRiskEn: "Forgetting to multiply by the derivative of the inside",
    explanationEn: [
      "A composite function is a sequence of machines. The inner function changes the input first, and the outer function processes that result.",
      "The chain rule multiplies the outer rate at the inner value by the inner rate. In symbols, (v ∘ u)′(x) = v′(u(x))u′(x)."
    ],
    framesEn: [
      "The input passes through the inner function.",
      "The inner output becomes the outer input.",
      "The inner derivative measures the first rate of change.",
      "The outer derivative is evaluated at u(x).",
      "The two rates multiply."
    ],
    qa: [
      {
        hintEn: "Ask which operation happens first when evaluating the expression.",
        answerEn: "For (1 + x²)⁵, the inside operation is 1 + x². After that result is obtained, the fifth power is applied. The outer function is u ↦ u⁵ and the inner function is x ↦ 1 + x²."
      },
      {
        hintEn: "A small change in x is first amplified by the inner derivative.",
        answerEn: "The inner derivative converts an x-change into a change in u. The outer derivative converts that u-change into a change in y. Their product converts x-change directly into y-change."
      },
      {
        hintEn: "Differentiate the outer power first, then the inside.",
        answerEn: "For (1 + x²)⁵, the derivative is 5(1 + x²)⁴ · 2x. For sin(e^{x²}), the derivative is cos(e^{x²}) · e^{x²} · 2x."
      },
      {
        hintEn: "Inspect the outermost operation and then the operations inside each part.",
        answerEn: "Use the outermost operation as the first rule. If that layer contains a product, use the product rule inside; if it contains a function of a function, apply the chain rule again. Method selection follows the syntax tree."
      },
      {
        hintEn: "Say “outer derivative times inner derivative”.",
        answerEn: "Differentiate the outer function at the unchanged inner function, then multiply by the derivative of the inner function."
      }
    ],
    counterexampleEn: {
      wrong: "The derivative of (1 + x²)⁵ is only 5(1 + x²)⁴.",
      correct: "Multiply by the inner derivative 2x to obtain 10x(1 + x²)⁴.",
      why: "The inner function changes the rate at which the outer function receives its input."
    },
    checkEn: "What is the chain-rule word pattern?",
    checkAnswerEn: "Outer derivative evaluated at the inner function, multiplied by the inner derivative."
  },
  "inverse-derivative": {
    networkGoalEn: "Relate an inverse function's slope to the original slope at the matching point",
    networkRiskEn: "Using f′(b) instead of f′(a)",
    explanationEn: [
      "An inverse function swaps the roles of inputs and outputs. The point (a, b) on the original graph corresponds to (b, a) on the inverse graph.",
      "Under this swap, the tangent line is reflected in y = x. Its slope becomes the reciprocal, provided the original slope is nonzero. The matching original input must be found before evaluating the derivative."
    ],
    framesEn: [
      "The original point (a, b) corresponds to the inverse point (b, a).",
      "The graph is reflected in the line y = x.",
      "Horizontal and vertical changes swap roles.",
      "The original slope m becomes the inverse slope 1/m.",
      "The matching input a must be used before applying the formula."
    ],
    qa: [
      {
        hintEn: "Reflection in y = x interchanges horizontal and vertical directions.",
        answerEn: "A tangent slope of 3 becomes 1/3 after reflection, provided the original slope is nonzero. The point's coordinates swap at the same time."
      },
      {
        hintEn: "The inverse formula differentiates at the original input, not the output.",
        answerEn: "If b = f(a), the inverse derivative at b is 1/f′(a). We need a because the original derivative is evaluated at the point whose output is b."
      },
      {
        hintEn: "Find a such that a³ = 8.",
        answerEn: "Since 2³ = 8, a = 2. The original derivative is 3x², so f′(2) = 12. Therefore (f⁻¹)′(8) = 1/12."
      },
      {
        hintEn: "A zero original slope becomes vertical after reflection.",
        answerEn: "The reciprocal 1/0 is undefined. The inverse graph may have a vertical tangent there, so the inverse derivative formula does not apply as a finite slope."
      },
      {
        hintEn: "Distinguish inverse function notation from reciprocal notation.",
        answerEn: "f⁻¹ is the inverse function, not 1/f. Its derivative is 1/f′(a) at the matched point (b, a), whereas the derivative of 1/f would come from the quotient rule."
      }
    ],
    counterexampleEn: {
      wrong: "For f(x) = x³, use f′(8) to find (f⁻¹)′(8).",
      correct: "Find a with f(a) = 8 first: a = 2, then use 1/f′(2) = 1/12.",
      why: "The inverse derivative is evaluated at the original input that produces the requested output."
    },
    checkEn: "Which point on the original graph matches b = f(a) on the inverse graph?",
    checkAnswerEn: "The original point (a, b) corresponds to the inverse point (b, a)."
  },
  lhopital: {
    networkGoalEn: "Check indeterminate form and hypotheses before comparing derivative quotients",
    networkRiskEn: "Differentiating every quotient without checking the form",
    explanationEn: [
      "L’Hôpital’s rule is a theorem about limits of certain indeterminate quotients. Both the original quotient and the quotient of derivatives must satisfy the stated differentiability and denominator conditions.",
      "The rule compares limits; it does not say that the two functions are identical. A finite limit of f′/g′ can determine the limit of f/g, but only after the indeterminate form has been verified."
    ],
    framesEn: [
      "The numerator and denominator approach critical values.",
      "Direct substitution alone does not determine the quotient.",
      "Check that the form is an allowed indeterminate type.",
      "Check differentiability and nonzero denominator conditions.",
      "The derivative quotient may supply the original limit."
    ],
    qa: [
      {
        hintEn: "Think of different examples such as x/x, x²/x and sin x/x.",
        answerEn: "A 0/0 symbol does not fix a value because different nearby functions can produce different ratios. The limiting behavior depends on the relative rates at which numerator and denominator approach zero."
      },
      {
        hintEn: "The conclusion is not automatic from the appearance of a fraction.",
        answerEn: "Check that the quotient has an allowed 0/0 or ∞/∞ form, that the required derivatives exist near the point, and that the derivative quotient satisfies the denominator conditions and has the relevant limit."
      },
      {
        hintEn: "Differentiate once, simplify, and use a fundamental limit or differentiate again if the form remains indeterminate.",
        answerEn: "For (1 − cos x)/x², the first derivative quotient is sin x/(2x). The limit is 1/2, either by using sin x/x → 1 or by one more L’Hôpital step."
      },
      {
        hintEn: "Evaluate the numerator and denominator at the point first.",
        answerEn: "At x = 1, the quotient (2x − 1)/x tends to 1/1, a finite nonzero ratio, so direct substitution applies. It is not an indeterminate form and L’Hôpital is unnecessary."
      },
      {
        hintEn: "Compare x²/x with 2x/1 as functions and as limits.",
        answerEn: "The functions x²/x and 2x/1 are not identical everywhere, but their limits near zero can be compared under the theorem's conditions. L’Hôpital transfers a limit question, not an identity between functions."
      }
    ],
    counterexampleEn: {
      wrong: "Every quotient may be differentiated top and bottom.",
      correct: "Use the theorem only after checking an allowed indeterminate form and its hypotheses.",
      why: "L’Hôpital is a conditional theorem, not an algebraic identity."
    },
    checkEn: "What must be checked before applying L’Hôpital?",
    checkAnswerEn: "The indeterminate form, the needed differentiability, the denominator conditions, and the existence of the relevant derivative-quotient limit."
  },
  "implicit-differentiation": {
    networkGoalEn: "Differentiate a relation without solving explicitly for y",
    networkRiskEn: "Treating y as a constant",
    explanationEn: [
      "An implicit relation can define y locally as a differentiable function of x even when solving for y is difficult or impossible.",
      "Differentiate both sides with respect to x. Every derivative of a y-expression carries a factor dy/dx by the chain rule, and products involving x and y use the product rule."
    ],
    framesEn: [
      "The equation defines a curve rather than an explicit formula for y.",
      "Locally, y is treated as a function of x.",
      "Differentiating y² produces the factor dy/dx.",
      "Products such as xy require the product and chain rules.",
      "Collecting dy/dx gives the local tangent slope."
    ],
    qa: [
      {
        hintEn: "You do not need a global formula for y to differentiate locally.",
        answerEn: "If the relation determines y as a differentiable function near the point of interest, differentiate the equation with respect to x and keep dy/dx as an unknown factor. An explicit solution is not required."
      },
      {
        hintEn: "Apply the chain rule to the outer square and the inner y(x).",
        answerEn: "The derivative of u² is 2u u′. With u = y(x), this gives 2y y′. Omitting y′ would treat y as independent of x, which is false along the relation."
      },
      {
        hintEn: "Differentiate every term of x² + y² = r² with respect to x.",
        answerEn: "Differentiating gives 2x + 2y y′ = 0. If y ≠ 0, then y′ = −x/y. At y = 0, solve the geometry separately."
      },
      {
        hintEn: "A zero denominator usually signals a vertical tangent rather than a missing curve.",
        answerEn: "The formula y′ = −x/y fails when y = 0 because division by zero is undefined. On the circle x² + y² = r², the points (±r, 0) have vertical tangents, so the local tangent still exists but its finite slope is not represented by the formula."
      },
      {
        hintEn: "Apply the product rule to x·y(x), then use y′ for the derivative of y.",
        answerEn: "The derivative of xy is x′y + x y′. Since x′ = 1, this is y + x y′. The term y′ records that y changes with x."
      }
    ],
    counterexampleEn: {
      wrong: "Differentiating x² + y² = r² gives 2x + 2y = 0.",
      correct: "The correct derivative is 2x + 2y y′ = 0.",
      why: "The chain rule contributes dy/dx because y depends on x."
    },
    checkEn: "What is the tangent to x² + y² = r² at (r, 0)?",
    checkAnswerEn: "It is the vertical line x = r."
  },
  "logarithmic-differentiation": {
    networkGoalEn: "Turn complicated products, quotients and variable powers into sums",
    networkRiskEn: "Taking logarithms without checking positivity",
    explanationEn: [
      "Logarithms convert products into sums, quotients into differences and powers into constant multiples. This can make a complicated derivative easier to organise.",
      "If y > 0, differentiating ln y gives y′/y. For a variable power such as xˣ, rewrite it as e^{x ln x} or use logarithmic differentiation with the positive domain."
    ],
    framesEn: [
      "The original expression contains several multiplicative operations.",
      "Taking logarithms converts products into sums.",
      "Quotients become differences and powers become coefficients.",
      "Differentiate ln y to obtain y′/y.",
      "Multiply by y to recover the original derivative."
    ],
    qa: [
      {
        hintEn: "Recall the logarithm laws before differentiating.",
        answerEn: "For positive A and B, ln(AB) = ln A + ln B and ln(A/B) = ln A − ln B. Powers become constant multiples: ln(A^p) = p ln A."
      },
      {
        hintEn: "Use the chain rule with inner function y(x).",
        answerEn: "The derivative of ln u is u′/u. Taking u = y(x) gives y′/y. This requires y > 0 where the real logarithm is used."
      },
      {
        hintEn: "For xˣ, neither an ordinary constant power nor an ordinary exponential rule applies.",
        answerEn: "Write xˣ = e^{x ln x}. Differentiating the exponent gives ln x + 1, so the derivative is xˣ(ln x + 1)."
      },
      {
        hintEn: "The logarithm's domain is the positive real numbers.",
        answerEn: "ln y is undefined for y ≤ 0. On an interval where y < 0, one can use ln|y|; on any interval where y does not change sign, the logarithmic derivative is y′/y."
      },
      {
        hintEn: "The differentiated equation contains y′/y, not y′ alone, so multiply by y.",
        answerEn: "Logarithmic differentiation solves first for y′/y. Multiplying by y gives y′ = y · (ln y)′. The final answer must retain the original domain restrictions."
      }
    ],
    counterexampleEn: {
      wrong: "Differentiate xˣ with the power rule as x·x^{x−1}.",
      correct: "Rewrite xˣ = e^{x ln x}, giving xˣ(ln x + 1).",
      why: "The power rule requires a constant exponent; here the exponent also depends on x."
    },
    checkEn: "What is the first logarithmic step for y = x^{√x}, x > 0?",
    checkAnswerEn: "Write ln y = √x ln x before differentiating both sides."
  },
  "parametric-derivative": {
    networkGoalEn: "Compute a curve slope from horizontal and vertical parameter rates",
    networkRiskEn: "Confusing dy/dt with dy/dx",
    explanationEn: [
      "A parameter t controls both coordinates of a moving point. The derivatives dx/dt and dy/dt describe the horizontal and vertical rates relative to t.",
      "The graph slope is the vertical rate divided by the horizontal rate. If dx/dt = 0, the formula may indicate a vertical tangent and must be handled separately."
    ],
    framesEn: [
      "The parameter t controls both x and y.",
      "The point moves with horizontal and vertical rates.",
      "The curve slope compares the two rates.",
      "dy/dx is the vertical rate divided by the horizontal rate.",
      "A zero horizontal rate requires a special tangent check."
    ],
    qa: [
      {
        hintEn: "Think of t as the parameter of motion, not necessarily as the x-coordinate.",
        answerEn: "The pair (x(t), y(t)) gives the position of a point. Changing t moves the point along the curve, and the derivative pair gives its horizontal and vertical rates."
      },
      {
        hintEn: "A small change dt produces changes dx and dy.",
        answerEn: "During the same small parameter interval dt, the vertical change is approximately dy and the horizontal change is approximately dx. Their ratio is the slope, and dt cancels."
      },
      {
        hintEn: "Compute x(t), y(t), dx/dt and dy/dt at t = 1.",
        answerEn: "At t = 1, x = 2 and y = −2. Also dx/dt = 2t = 2 and dy/dt = 3t² − 3 = 0. Therefore dy/dx = 0, and the tangent is the horizontal line y = −2."
      },
      {
        hintEn: "Look at whether dx/dt and dy/dt vanish separately.",
        answerEn: "At t = 0, dx/dt = 0 while dy/dt = −3. The derivative formula cannot divide by zero, but the nonzero vertical rate signals a vertical tangent. With x(0) = 1, the tangent is x = 1."
      },
      {
        hintEn: "The sign of dx/dt tells whether the point moves right or left.",
        answerEn: "Positive dx/dt means x is increasing, so the point moves to the right; negative means it moves left. The tangent slope uses both derivatives, but the direction of travel is read primarily from the parameter velocity."
      }
    ],
    counterexampleEn: {
      wrong: "For x = t² and y = t³, the curve slope is dy/dt = 3t².",
      correct: "The curve slope is (dy/dt)/(dx/dt) = 3t/2 for t ≠ 0.",
      why: "The curve compares vertical and horizontal changes, not the vertical rate alone."
    },
    checkEn: "What does dx/dt = 0 at a point suggest?",
    checkAnswerEn: "The ordinary slope formula has a zero denominator; check for a vertical tangent and use the original geometry."
  },
  "monotonic-extrema": {
    networkGoalEn: "Translate derivative signs into increasing, decreasing and extrema candidates",
    networkRiskEn: "Calling every stationary point an extremum",
    explanationEn: [
      "The sign of f′ on an interval controls monotonicity. Positive derivative means the function is strictly increasing; negative derivative means strictly decreasing.",
      "Stationary points are candidates where f′ = 0. Critical points also include points where f′ is not defined. An extremum may occur at an interior critical point or at an endpoint of a closed interval."
    ],
    framesEn: [
      "The slope is positive where the curve rises.",
      "The slope is negative where the curve falls.",
      "A slope of zero gives a stationary candidate.",
      "A sign change can create a local peak or valley.",
      "Endpoints and non-differentiable points must also be checked."
    ],
    qa: [
      {
        hintEn: "The positive sign must hold on a whole interval, not merely at one point.",
        answerEn: "If f′ > 0 throughout an interval, then the function strictly increases on that interval. The condition is local on each point but quantitative over the whole interval; one positive derivative value at a single point is not enough to conclude global increase."
      },
      {
        hintEn: "Arrange the three types as subsets or candidate sets.",
        answerEn: "A stationary point satisfies f′ = 0. A critical point is a point where f′ = 0 or f′ is undefined. An extremum can occur at a critical point or at an endpoint, so stationary-candidate inclusion does not make every stationary point extremal."
      },
      {
        hintEn: "Factor the derivative and test its sign on the intervals separated by the stationary points.",
        answerEn: "For f = x³ − 3x, f′ = 3(x² − 1) = 3(x − 1)(x + 1). The derivative is positive on (−∞, −1), negative on (−1, 1), and positive on (1, ∞). Hence f is increasing, decreasing, then increasing."
      },
      {
        hintEn: "Compare values immediately to the left and right of zero.",
        answerEn: "For f = x³, f′(0) = 0, but f(x) < 0 for x < 0 and f(x) > 0 for x > 0. The point is not a local maximum or minimum because the nearby output lies on both sides of f(0)."
      },
      {
        hintEn: "A closed interval includes endpoints that are not interior points.",
        answerEn: "The derivative condition for an interior extremum does not apply at endpoints. For a global extremum on [a, b], compare all interior critical points and the endpoint values f(a), f(b)."
      }
    ],
    counterexampleEn: {
      wrong: "f′(0) = 0 means x = 0 is automatically an extremum.",
      correct: "It only means x = 0 is stationary; x³ is an example with f′(0) = 0 and no extremum.",
      why: "The zero-derivative condition is necessary for an interior differentiable extremum, not sufficient."
    },
    checkEn: "Can a point where f′ does not exist be a critical point?",
    checkAnswerEn: "Yes. Critical points include points where f′ is zero or undefined."
  },
  "derivative-tests": {
    networkGoalEn: "Choose between first- and second-derivative tests",
    networkRiskEn: "Concluding ‘no extremum’ from f″ = 0",
    explanationEn: [
      "The first-derivative test classifies a stationary point by a sign change. Positive to negative gives a local maximum; negative to positive gives a local minimum.",
      "The second-derivative test is a shortcut when f″ is nonzero at a stationary point. Positive f″ gives a local minimum candidate and negative f″ gives a local maximum candidate. If f″ = 0, the test is inconclusive."
    ],
    framesEn: [
      "The first derivative shows a change from rising to falling.",
      "The second derivative measures how the slope itself changes.",
      "Positive second derivative bends like an upward bowl.",
      "Negative second derivative bends like a downward bowl.",
      "A zero second derivative requires another test."
    ],
    qa: [
      {
        hintEn: "Read the left and right signs of f′.",
        answerEn: "If f′ changes from positive to negative, the function rises then falls, producing a local maximum. If it changes from negative to positive, it falls then rises, producing a local minimum. If the sign does not change, the point is not classified as an extremum by this test."
      },
      {
        hintEn: "Differentiate f′ once more.",
        answerEn: "The second derivative is the derivative of the slope. It tells whether the slope is increasing or decreasing, which corresponds to upward or downward bending of the graph."
      },
      {
        hintEn: "Find the stationary points, then evaluate f″ at each.",
        answerEn: "For f = x⁴ − 4x², f′ = 4x(x² − 2), with stationary points x = 0 and x = ±√2. At 0, f″ = −8 < 0, so it is a local maximum. At ±√2, f″ = 16 > 0, so both are local minima."
      },
      {
        hintEn: "Compare x⁴ and x³ at zero; both have zero first and second derivatives there.",
        answerEn: "A zero second derivative gives no conclusion. x⁴ has a local minimum at 0, while x³ has neither a maximum nor a minimum. The first-derivative sign or the definition must decide the case."
      },
      {
        hintEn: "Use the test that directly answers the question.",
        answerEn: "The second derivative is not always needed. To find increasing and decreasing intervals, use only the sign of f′. Use f″ when classifying extrema or studying concavity and only after confirming the hypotheses hold."
      }
    ],
    counterexampleEn: {
      wrong: "Because f′ and f″ both vanish at a point, there cannot be an extremum.",
      correct: "The second-derivative test is inconclusive; x⁴ has a minimum at 0 despite f′ = f″ = 0.",
      why: "A zero second derivative supplies too little information."
    },
    checkEn: "At a stationary point, what does f″ > 0 suggest?",
    checkAnswerEn: "The graph bends upward locally, suggesting a local minimum."
  },
  "curve-analysis": {
    networkGoalEn: "Combine domain, derivatives, curvature and end behavior",
    networkRiskEn: "Drawing a curve from critical points alone",
    explanationEn: [
      "A complete curve analysis begins with the domain and intercepts, then uses first-derivative signs for monotonicity and second-derivative signs for concavity.",
      "Critical points and endpoints are candidate locations for extrema. A graph is a consistency check on several algebraic facts, not a replacement for them."
    ],
    framesEn: [
      "The domain and intercepts establish where the graph can lie.",
      "The first derivative marks increasing and decreasing intervals.",
      "Critical points supply peak and valley candidates.",
      "The second derivative describes concavity.",
      "End behavior closes the global picture."
    ],
    qa: [
      {
        hintEn: "A derivative is only informative where the function is defined.",
        answerEn: "The domain tells us which x-values are admissible, and intercepts locate important points. Starting with the domain prevents conclusions about values outside the original function."
      },
      {
        hintEn: "Substitute the stationary x-values into the original function.",
        answerEn: "For f = x³ − 3x, the stationary points are x = −1 and x = 1. Their values are f(−1) = 2 and f(1) = −2. The sign changes identify a local maximum at (−1, 2) and a local minimum at (1, −2)."
      },
      {
        hintEn: "Find where 6x changes sign.",
        answerEn: "For f = x³ − 3x, f″ = 6x. The second derivative is negative for x < 0 and positive for x > 0, so the graph is concave down then concave up, with a possible inflection at 0."
      },
      {
        hintEn: "List the interior critical points and both endpoints before comparing values.",
        answerEn: "On [−2, 3], the candidates are x = −2, −1, 1, 3. The values are −2, 2, −2 and 18. The global maximum is 18 at x = 3, and the global minimum is −2 at x = −2 and x = 1."
      },
      {
        hintEn: "Check the algebra, the sign chart, the endpoints and the graph's scale separately.",
        answerEn: "Recalculate the derivative and its factors, verify the sign chart on each interval, compare all endpoint values, and confirm that the plotted window shows the relevant behavior. A mismatch usually identifies a missing candidate or a misread scale."
      }
    ],
    counterexampleEn: {
      wrong: "A global maximum on a closed interval must occur at a local maximum.",
      correct: "It may occur at an endpoint; on [−2, 3], f(3) = 18 is the global maximum even though 3 is an endpoint.",
      why: "Local extrema compare only small neighbourhoods, while global extrema compare all points in the domain."
    },
    checkEn: "Why is a local maximum not automatically a global maximum?",
    checkAnswerEn: "It only has the largest value in a small neighbourhood; another region or endpoint may have a larger value."
  },
  "method-selection": {
    networkGoalEn: "Identify the structure and rule order before differentiating",
    networkRiskEn: "Applying formulas without recognising the function's structure",
    explanationEn: [
      "Differentiation becomes reliable when the expression is parsed as a structure: sum, product, quotient, composition or a special instruction such as ‘from first principles’.",
      "Name the outermost operation first. That operation selects the first rule, and inner structures select the additional rules. The original domain and any stipulated method remain part of the problem."
    ],
    framesEn: [
      "Parse the expression into a structure tree.",
      "Identify whether the outermost operation is a quotient, product or composition.",
      "Choose the rule for the outermost operation.",
      "Mark the inner rules still required.",
      "Calculate only after the method is chosen."
    ],
    qa: [
      {
        hintEn: "The last operation in normal evaluation order is often the first differentiation rule.",
        answerEn: "The outermost operation determines the top-level rule. Parsing the structure first prevents mistakes such as treating a product as a composition or forgetting an inner chain rule."
      },
      {
        hintEn: "For x e^{x²}/(1 + x²), the whole expression is a quotient.",
        answerEn: "Use the quotient rule first. The numerator x e^{x²} is a product, so use the product rule inside it. The factor e^{x²} is a composition, so apply the chain rule to that factor. The denominator is a polynomial."
      },
      {
        hintEn: "A requested method is part of the mathematical task.",
        answerEn: "Directly using a known derivative may give the right number but does not demonstrate the requested reasoning. When a question says ‘from first principles’, begin with the difference quotient and perform the limiting argument."
      },
      {
        hintEn: "A stationary point is a candidate, not a completed analysis.",
        answerEn: "After finding f′(a) = 0, classify the point using a sign chart, a second-derivative test, or the definition. If the domain is a closed interval, compare endpoint values as well."
      },
      {
        hintEn: "Use a short routine: name, choose, check and calculate.",
        answerEn: "Say what the outermost structure is, choose the corresponding rule, list any inner rules and domain restrictions, then begin the algebra. This routine makes the reasoning auditable."
      }
    ],
    counterexampleEn: {
      wrong: "A first-principles question can be answered by writing the known derivative formula alone.",
      correct: "The numerical answer may agree, but the required derivation from the difference quotient is still missing.",
      why: "The question specifies both the result and the reasoning route."
    },
    checkEn: "If the whole expression is a quotient whose numerator is composite, what is the rule order?",
    checkAnswerEn: "Quotient rule first, then product or chain rules inside the numerator as required."
  },
  "partial-derivatives": {
    networkGoalEn: "Measure change along one coordinate while freezing the others",
    networkRiskEn: "Differentiating both variables when only one is selected",
    explanationEn: [
      "A function of two variables has a local surface over the xy-plane. A partial derivative with respect to x follows the slice where y is held constant.",
      "The calculation is an ordinary one-variable derivative in the chosen coordinate. The other variables are treated as constants, and the point of evaluation records both coordinates."
    ],
    framesEn: [
      "A point in the plane has horizontal and vertical coordinate directions.",
      "Fixing y produces a horizontal slice of the surface.",
      "Fixing x produces a vertical slice.",
      "Each slice becomes a one-variable function.",
      "The two partial derivatives record the two coordinate rates."
    ],
    qa: [
      {
        hintEn: "Horizontal motion changes x while y stays fixed.",
        answerEn: "For the partial derivative with respect to x, y is held constant. The derivative measures the rate along a horizontal slice through the chosen point."
      },
      {
        hintEn: "Translate the ∂ notation into the variable that is changing.",
        answerEn: "∂f/∂x differentiates with respect to x and treats y as constant. ∂f/∂y differentiates with respect to y and treats x as constant. The two results can be different because the coordinate directions are different."
      },
      {
        hintEn: "Differentiate once with y fixed, then once with x fixed.",
        answerEn: "For f = x²y + 3xy² − 4y, fₓ = 2xy + 3y² and f_y = x² + 6xy − 4. At (1, 2), fₓ = 4 + 12 = 16 and f_y = 1 + 12 − 4 = 9."
      },
      {
        hintEn: "A diagonal direction changes both variables at once.",
        answerEn: "The coordinate partials describe only the horizontal and vertical directions. Along a diagonal path, both x and y vary, so a directional derivative is needed to combine the coordinate rates with the direction components."
      },
      {
        hintEn: "Say what is held fixed and what is differentiated.",
        answerEn: "A partial derivative treats all but one independent variable as constants, differentiates with respect to the remaining variable, and evaluates at the chosen point."
      }
    ],
    counterexampleEn: {
      wrong: "When computing fₓ, differentiate the y in x²y as well.",
      correct: "Treat y as a constant, so the derivative of x²y with respect to x is 2xy.",
      why: "A partial derivative fixes the other coordinate variables."
    },
    checkEn: "What happens to x when computing f_y?",
    checkAnswerEn: "It is held constant."
  },
  "directional-derivatives": {
    networkGoalEn: "Reduce a change along an arbitrary direction to a one-variable derivative",
    networkRiskEn: "Forgetting to normalise the direction vector",
    explanationEn: [
      "A direction derivative chooses a unit vector u and follows the straight line through the point in that direction. The parameter t measures distance along the line.",
      "The resulting function φ(t) is one-variable, so its derivative at t = 0 gives the rate of change in the chosen direction. Coordinate partial derivatives are the special cases u = (1, 0) and u = (0, 1)."
    ],
    framesEn: [
      "Choose a direction from the point in the plane.",
      "Normalise the direction vector to unit length.",
      "Construct a one-variable path φ(t).",
      "Move along the path by changing t.",
      "φ′(0) gives the directional rate."
    ],
    qa: [
      {
        hintEn: "Once the direction is fixed, only the distance along it remains variable.",
        answerEn: "Fixing the point and direction leaves one degree of freedom, the distance t along the line. The surface restricts to a one-variable function φ(t)."
      },
      {
        hintEn: "Without unit length, the same parameter change would represent a different physical distance.",
        answerEn: "The derivative is a rate per unit distance. A unit vector makes t measure actual distance along the direction, so the derivative has a consistent interpretation and is not artificially scaled."
      },
      {
        hintEn: "Substitute a + tu₁ and b + tu₂ into f, then differentiate in t.",
        answerEn: "Let u = (1/√2, 1/√2). Then φ(t) = (1 + t/√2)² + (2 + t/√2)² = 5 + 6t/√2 + t². Its derivative at t = 0 is 6/√2 = 3√2."
      },
      {
        hintEn: "The coordinate directions are special cases in which one component of u is zero.",
        answerEn: "A diagonal direction changes both coordinates, so it can mix the horizontal and vertical rates. A directional derivative accounts for that combination and for the chosen vector's components."
      },
      {
        hintEn: "Set u equal to the coordinate unit vectors.",
        answerEn: "With u = (1, 0), the directional derivative is fₓ. With u = (0, 1), it is f_y. Thus partial derivatives are directional derivatives in the coordinate directions."
      }
    ],
    counterexampleEn: {
      wrong: "Use u = (1, 1) directly in f(a + tu) and call the derivative a directional rate.",
      correct: "First replace u by the unit vector (1/√2, 1/√2).",
      why: "A non-unit vector changes the meaning of the parameter and scales the derivative."
    },
    checkEn: "Which partial derivative corresponds to u = (1, 0)?",
    checkAnswerEn: "The partial derivative with respect to x, fₓ."
  }
};

window.MFC_ENGLISH_PACKS.week2Questions = {
  q1: {
    title: "1. Mixed differentiation rules",
    prompt: "Differentiate (3x + 1)⁵, e⁻²ˣ, ln(1 + x²), and x²eˣ.",
    answer: "<p>The derivatives are 15(3x + 1)⁴, −2e⁻²ˣ, 2x/(1 + x²), and xeˣ(x + 2).</p><p>The first and third use the chain rule; the last uses the product rule.</p>"
  },
  q2: {
    title: "2. Differentiate x³ from first principles",
    prompt: "Use the difference quotient to find the derivative of f(x) = x³ at a.",
    answer: "<p>[(a + h)³ − a³]/h = 3a² + 3ah + h². Letting h → 0 gives 3a².</p>"
  },
  q3: {
    title: "3. L’Hôpital and indeterminate forms",
    prompt: "Evaluate lim (1 − cos x)/x², lim (eˣ − 1 − x)/x², and lim x² ln x as x → 0⁺.",
    answer: "<p>The limits are 1/2, 1/2, and 0. The first can use sin x/x → 1 after one derivative step; the second uses the indeterminate quotient structure twice; the third is rewritten as ln x/(1/x²) before applying the rule.</p>"
  },
  q4: {
    title: "4. Inverse-function derivative",
    prompt: "For f(x) = x³ + x with f(1) = 2, find (f⁻¹)′(2).",
    answer: "<p>f′(x) = 3x² + 1, so f′(1) = 4. Therefore (f⁻¹)′(2) = 1/4.</p>"
  },
  q5: {
    title: "5. Variable base and exponent",
    prompt: "Differentiate y = x^{√x} for x > 0.",
    answer: "<p>Take logarithms: ln y = √x ln x. Differentiating gives y′/y = (ln x + 2)/(2√x), so y′ = x^{√x}(ln x + 2)/(2√x).</p>"
  },
  q6: {
    title: "6. Implicit differentiation and a tangent",
    prompt: "For x² + xy + y² = 7, find dy/dx and the tangent at (1, 2).",
    answer: "<p>Differentiating gives 2x + y + x y′ + 2y y′ = 0, so y′ = −(2x + y)/(x + 2y). At (1, 2), y′ = −4/5 and the tangent is y − 2 = −(4/5)(x − 1).</p>"
  },
  q7: {
    title: "7. Parameterised curve",
    prompt: "For x = t² + 1 and y = t³ − 3t, find the tangent at t = 1 and analyse t = 0.",
    answer: "<p>dx/dt = 2t and dy/dt = 3t² − 3. At t = 1, the point is (2, −2), the slope is 0, and the tangent is y = −2. At t = 0, dx/dt = 0 and dy/dt = −3, giving the vertical tangent x = 1.</p>"
  },
  q8: {
    title: "8. Continuity and differentiability",
    prompt: "Explain why |x| is continuous but not differentiable at zero.",
    answer: "<p>|x| is continuous at zero, but the right difference quotient is 1 and the left difference quotient is −1. Since the one-sided quotients disagree, the derivative at zero does not exist.</p>"
  },
  q9: {
    title: "9. Stationary points and extrema",
    prompt: "Analyse the stationary points, monotonicity intervals, extrema and end behavior of f(x) = x³ − 3x² − 9x + 5.",
    answer: "<p>f′ = 3(x − 3)(x + 1). The function increases on (−∞, −1) and (3, ∞), and decreases on (−1, 3). It has a local maximum 10 at x = −1 and a local minimum −22 at x = 3. Its end behavior is −∞ as x → −∞ and +∞ as x → +∞.</p>"
  },
  q10: {
    title: "10. Global extrema on a closed interval",
    prompt: "Find the global extrema of f(x) = x³ − 3x on [−2, 3].",
    answer: "<p>The candidate values are f(−2) = −2, f(−1) = 2, f(1) = −2 and f(3) = 18. The global maximum is 18 at x = 3, and the global minimum is −2 at x = −2 and x = 1.</p>"
  },
  q11: {
    title: "11. An inconclusive second-derivative test",
    prompt: "If f = x⁴ and g = x³ both have f′ = f″ = 0 at zero, can the second-derivative test classify the points?",
    answer: "<p>No. The second-derivative test is inconclusive. x⁴ has a local minimum at zero, while x³ has no extremum there. A first-derivative sign check distinguishes the two cases.</p>"
  },
  q12: {
    title: "12. Order of differentiation methods",
    prompt: "Without calculating, describe the differentiation order for f(x) = x e^{x²}/(1 + x²).",
    answer: "<p>The outer operation is a quotient, so use the quotient rule first. The numerator is a product, so use the product rule inside it. The factor e^{x²} is composite, so apply the chain rule to that factor.</p>"
  },
  q13: {
    title: "13. Definition, inverse and limit",
    prompt: "Use the definition for the derivative of x³, find the inverse derivative at 2 for f(x) = x³ + x, and evaluate lim x/eˣ.",
    answer: "<p>The first two answers are 3a² and 1/4. The limit is 0; it is an ∞/∞ form satisfying the hypotheses, so L’Hôpital gives lim 1/eˣ = 0.</p>"
  },
  q14: {
    title: "14. Partial derivatives (not examined)",
    prompt: "For f(x, y) = x²y + 3xy² − 4y, find both partial derivatives at (1, 2).",
    answer: "<p>fₓ = 2xy + 3y², so fₓ(1, 2) = 16. Also f_y = x² + 6xy − 4, so f_y(1, 2) = 9.</p>"
  }
};
