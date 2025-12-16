

import React from "react";

export default function RedFlags({ flags }) {
  const hasFlags = flags && flags.length > 0;

  return (
    <div className="space-y-4">
      
      {!hasFlags && (
        <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl text-sm">
          <span className="text-lg">🎉</span>
          <span>No critical red flags detected. Keep it up!</span>
        </div>
      )}

      {hasFlags && (
        <>
          <div className="flex items-center gap-2 text-red-400">
            <span className="text-xl">⚠️</span>
            <h3 className="text-lg font-semibold">
              Critical Red Flags
            </h3>
          </div>

          <ul className="space-y-3">
            {flags.map((flag, index) => (
              <li
                key={index}
                className="
                  bg-red-500/10 border border-red-500/30
                  text-red-300 px-4 py-3 rounded-xl
                  text-sm font-medium
                "
              >
                {flag}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
