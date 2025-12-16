// import React from "react";

// export default React.memo(({ state, dispatch }) => (
//   <>
//     <input type="time" value={state.sleepTime}
//       onChange={e =>
//         dispatch({ section: "sleep", payload: { sleepTime: e.target.value } })
//       } />
//     <input type="time" value={state.wakeTime}
//       onChange={e =>
//         dispatch({ section: "sleep", payload: { wakeTime: e.target.value } })
//       } />
//   </>
// ));




import React from "react";

export default React.memo(({ state, dispatch }) => {
  return (
    <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-5 md:p-6 shadow-md">
      
      {/* Header */}
      <h4 className="text-white font-semibold text-base md:text-lg mb-4">
        Sleep Cycle
      </h4>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Sleep Time */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-400">Sleep Time</label>
          <input
            type="time"
            value={state.sleepTime}
            onChange={(e) =>
              dispatch({
                section: "sleep",
                payload: { sleepTime: e.target.value },
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

        {/* Wake Time */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-400">Wake Time</label>
          <input
            type="time"
            value={state.wakeTime}
            onChange={(e) =>
              dispatch({
                section: "sleep",
                payload: { wakeTime: e.target.value },
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
