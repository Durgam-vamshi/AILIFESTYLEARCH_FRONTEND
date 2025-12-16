// import React from "react";

// export default function RoutineTimeline({ routine }) {
//   if (!routine || routine.length === 0) return null;

//   return (
//     <div>
//       <h3>🕒 Suggested Daily Routine</h3>

//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {routine.map((item, index) => (
//           <li
//             key={index}
//             style={{
//               marginBottom: "12px",
//               padding: "10px",
//               borderLeft: "4px solid #4caf50",
//               background: "#f9f9f9"
//             }}
//           >
//             <strong>{item.time}</strong> — {item.activity}
//             <p style={{ fontSize: "0.85rem", color: "#555" }}>
//               {item.reason}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



import React from "react";

export default function RoutineTimeline({ routine }) {
  if (!routine || routine.length === 0) return null;

  return (
    <div className="space-y-5">
      
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-xl">🕒</span>
        <h3 className="text-lg md:text-xl font-semibold text-white">
          Suggested Daily Routine
        </h3>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-slate-700 pl-6 space-y-6">
        {routine.map((item, index) => (
          <div key={index} className="relative">
            
            {/* Dot */}
            <span className="absolute -left-[11px] top-1.5 w-3 h-3 rounded-full bg-indigo-500"></span>

            {/* Card */}
            <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-4 md:p-5 shadow-md">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-400 font-semibold text-sm">
                  {item.time}
                </span>
                <span className="text-white font-medium">
                  {item.activity}
                </span>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {item.reason}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

