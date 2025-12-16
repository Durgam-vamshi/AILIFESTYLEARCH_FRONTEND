import React from "react";

export default React.memo(({ label, mealKey, meals, dispatch }) => {
  const meal = meals[mealKey];

  return (
    <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-5 md:p-6 shadow-md">
      
      {/* Header */}
      <h4 className="text-white font-semibold text-base md:text-lg mb-4">
        {label}
      </h4>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Food Input */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-400">Food</label>
          <input
            type="text"
            placeholder="What did you eat?"
            value={meal.food}
            onChange={(e) =>
              dispatch({
                section: "meals",
                payload: {
                  ...meals,
                  [mealKey]: { ...meal, food: e.target.value },
                },
              })
            }
            className="
              px-4 py-3 rounded-xl
              bg-slate-900 text-white
              border border-slate-700
              placeholder:text-slate-500
              focus:outline-none focus:ring-2 focus:ring-indigo-500
              transition-all
            "
          />
        </div>

        {/* Time Input */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-400">Time</label>
          <input
            type="time"
            value={meal.time}
            onChange={(e) =>
              dispatch({
                section: "meals",
                payload: {
                  ...meals,
                  [mealKey]: { ...meal, time: e.target.value },
                },
              })
            }
            className="
              px-4 py-3 rounded-xl
              bg-slate-900 text-white
              border border-slate-700
              focus:outline-none focus:ring-2 focus:ring-indigo-500
              transition-all
            "
          />
        </div>
      </div>
    </div>
  );
});
