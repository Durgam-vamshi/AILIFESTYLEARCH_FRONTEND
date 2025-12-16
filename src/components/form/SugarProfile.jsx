import React from "react";

export default React.memo(({ state, dispatch }) => {
  return (
    <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-5 md:p-6 shadow-md">
      
      {/* Header */}
      <h4 className="text-white font-semibold text-base md:text-lg mb-4">
        Sugar Consumption
      </h4>

      <div className="space-y-5">
        
        {/* Sugar Toggle */}
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={state.consumesSugar}
            onChange={(e) =>
              dispatch({
                section: "sugarProfile",
                payload: { consumesSugar: e.target.checked },
              })
            }
            className="
              h-5 w-5 mt-1 rounded
              border border-slate-600
              text-indigo-500
              focus:ring-indigo-500
            "
          />
          <div>
            <p className="text-white font-medium">Consumes Sugar</p>
            <p className="text-xs text-slate-400">
              Includes sweets, sugary drinks, or added sugar
            </p>
          </div>
        </label>

        {/* Frequency Select */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-400">
            Consumption Frequency
          </label>
          <select
            value={state.frequency}
            onChange={(e) =>
              dispatch({
                section: "sugarProfile",
                payload: { frequency: e.target.value },
              })
            }
            className="
              px-4 py-3 rounded-xl
              bg-slate-900 text-white
              border border-slate-700
              focus:outline-none focus:ring-2 focus:ring-indigo-500
              transition-all
            "
          >
            <option value="">Select frequency</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Rarely</option>
          </select>
        </div>
      </div>
    </div>
  );
});
