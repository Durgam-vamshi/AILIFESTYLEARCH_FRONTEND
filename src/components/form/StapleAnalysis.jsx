import React from "react";

export default React.memo(({ state, dispatch }) => {
  return (
    <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-5 md:p-6 shadow-md">
      
      {/* Header */}
      <h4 className="text-white font-semibold text-base md:text-lg mb-4">
        Staple Food Pattern
      </h4>

      <div className="space-y-5">
        
        {/* Primary Staple Input */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-400">Primary Staple</label>
          <input
            type="text"
            placeholder="e.g. Rice, Roti, Millet"
            value={state.primary}
            onChange={(e) =>
              dispatch({
                section: "staple",
                payload: { primary: e.target.value },
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

        {/* Heavy Rice Eater Toggle */}
        <label className="flex items-center gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={state.heavyRiceEater}
            onChange={(e) =>
              dispatch({
                section: "staple",
                payload: { heavyRiceEater: e.target.checked },
              })
            }
            className="
              h-5 w-5 rounded
              border border-slate-600
              text-indigo-500
              focus:ring-indigo-500
            "
          />
          <div>
            <p className="text-white font-medium">Heavy Rice Eater</p>
            <p className="text-xs text-slate-400">
              Frequently consumes rice in large portions
            </p>
          </div>
        </label>
      </div>
    </div>
  );
});
