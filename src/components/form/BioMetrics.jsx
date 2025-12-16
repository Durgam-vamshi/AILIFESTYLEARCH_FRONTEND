import React from "react";

export default React.memo(({ state, dispatch }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      {/* Card */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-xl p-6 md:p-8 border border-slate-700">
        
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
          Personal Information
        </h2>

        {/* Form Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          
          {/* Name */}
          <InputField
            label="Name"
            placeholder="Enter your name"
            value={state.name}
            onChange={(e) =>
              dispatch({
                section: "bio",
                payload: { name: e.target.value },
              })
            }
          />

          {/* Age */}
          <InputField
            label="Age"
            placeholder="Your age"
            value={state.age}
            onChange={(e) =>
              dispatch({
                section: "bio",
                payload: { age: e.target.value },
              })
            }
          />

          {/* Height */}
          <InputField
            label="Height (cm)"
            placeholder="e.g. 175"
            value={state.height}
            onChange={(e) =>
              dispatch({
                section: "bio",
                payload: { height: e.target.value },
              })
            }
          />

          {/* Weight */}
          <InputField
            label="Weight (kg)"
            placeholder="e.g. 70"
            value={state.weight}
            onChange={(e) =>
              dispatch({
                section: "bio",
                payload: { weight: e.target.value },
              })
            }
          />
        </div>
      </div>
    </div>
  );
});

/* Reusable Input Component */
const InputField = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-slate-300 font-medium">
        {label}
      </label>
      <input
        {...props}
        className="
          w-full px-4 py-3 rounded-xl
          bg-slate-900 text-white
          border border-slate-700
          placeholder:text-slate-500
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
          transition-all duration-200
        "
      />
    </div>
  );
};
