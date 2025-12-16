// import { useState } from "react";
// import { useLifestyleReducer } from "../../hooks/useLifestyleReducer";
// import { validateMealOrder } from "../../utils/validators";
// import { submitLifestyle } from "../../utils/api";

// import BioMetrics from "./BioMetrics";
// import SugarProfile from "./SugarProfile";
// import StapleAnalysis from "./StapleAnalysis";
// import MealSection from "./MealSection";
// import SleepCycle from "./SleepCycle";

// export default function IntakeForm({ onResult }) {
//   const [state, dispatch] = useLifestyleReducer();
//   const [error, setError] = useState("");

//   async function handleSubmit() {
//     if (!validateMealOrder(state.meals)) {
//       setError("Meal timings are illogical");
//       return;
//     }

//     const res = await submitLifestyle(state);
//     onResult(res);
//   }

//   return (
//     <>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <BioMetrics state={state.bio} dispatch={dispatch} />
//       <SugarProfile state={state.sugarProfile} dispatch={dispatch} />
//       <StapleAnalysis state={state.staple} dispatch={dispatch} />

//       <MealSection label="Breakfast" mealKey="breakfast" meals={state.meals} dispatch={dispatch} />
//       <MealSection label="Lunch" mealKey="lunch" meals={state.meals} dispatch={dispatch} />
//       <MealSection label="Snacks" mealKey="snacks" meals={state.meals} dispatch={dispatch} />
//       <MealSection label="Dinner" mealKey="dinner" meals={state.meals} dispatch={dispatch} />

//       <SleepCycle state={state.sleep} dispatch={dispatch} />

//       <button onClick={handleSubmit}>Analyze</button>
//     </>
//   );
// }




import { useState } from "react";
import { useLifestyleReducer } from "../../hooks/useLifestyleReducer";
import { validateMealOrder } from "../../utils/validators";
import { submitLifestyle } from "../../utils/api";

import BioMetrics from "./BioMetrics";
import SugarProfile from "./SugarProfile";
import StapleAnalysis from "./StapleAnalysis";
import MealSection from "./MealSection";
import SleepCycle from "./SleepCycle";

export default function IntakeForm({ onResult }) {
  const [state, dispatch] = useLifestyleReducer();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setError("");

    if (!validateMealOrder(state.meals)) {
      setError("Meal timings are illogical. Please check the order.");
      return;
    }

    try {
      setLoading(true);
      const res = await submitLifestyle(state);
      onResult(res);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            AI Lifestyle Intake Form
          </h1>
          <p className="text-slate-400 mt-2 text-sm md:text-base">
            Enter your daily habits to get a personalized health analysis
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm">
            {error}
          </div>
        )}

        {/* Sections */}
        <Section title="Basic Information">
          <BioMetrics state={state.bio} dispatch={dispatch} />
        </Section>

        <Section title="Sugar Consumption">
          <SugarProfile state={state.sugarProfile} dispatch={dispatch} />
        </Section>

        <Section title="Staple Food Analysis">
          <StapleAnalysis state={state.staple} dispatch={dispatch} />
        </Section>

        <Section title="Meals & Timings">
          <div className="space-y-6">
            <MealSection label="Breakfast" mealKey="breakfast" meals={state.meals} dispatch={dispatch} />
            <MealSection label="Lunch" mealKey="lunch" meals={state.meals} dispatch={dispatch} />
            <MealSection label="Snacks" mealKey="snacks" meals={state.meals} dispatch={dispatch} />
            <MealSection label="Dinner" mealKey="dinner" meals={state.meals} dispatch={dispatch} />
          </div>
        </Section>

        <Section title="Sleep Cycle">
          <SleepCycle state={state.sleep} dispatch={dispatch} />
        </Section>

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="
              px-10 py-4 rounded-2xl font-semibold text-white
              bg-gradient-to-r from-indigo-500 to-purple-600
              hover:from-indigo-600 hover:to-purple-700
              focus:outline-none focus:ring-2 focus:ring-indigo-400
              transition-all duration-300
              disabled:opacity-60 disabled:cursor-not-allowed
              shadow-lg
            "
          >
            {loading ? "Analyzing..." : "Analyze Lifestyle"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* Reusable Section Wrapper */
const Section = ({ title, children }) => (
  <div className="bg-slate-900/70 backdrop-blur rounded-2xl p-6 md:p-8 border border-slate-700 shadow-lg">
    <h2 className="text-lg md:text-xl font-semibold text-white mb-5">
      {title}
    </h2>
    {children}
  </div>
);

