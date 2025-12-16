


import RedFlags from "./RedFlags";
import RoutineTimeline from "./RoutineTimeline";

export default function AIDashboard({ data }) {
  if (!data) return null;

  return (
    <div className="mt-10 max-w-5xl mx-auto px-4 space-y-8">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 md:p-8 shadow-xl text-white">
        <h2 className="text-2xl md:text-3xl font-bold">
          📊 AI Lifestyle Analysis
        </h2>
        <p className="text-indigo-100 mt-2 text-sm md:text-base">
          Personalized insights based on your daily habits
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* BMI Card */}
        <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 shadow-md">
          <p className="text-slate-400 text-sm mb-1">Body Mass Index</p>
          <p className="text-3xl font-bold text-white">
            {data.calculated_bmi}
          </p>
        </div>

        {/* Health Status Card */}
        <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 shadow-md">
          <p className="text-slate-400 text-sm mb-1">Overall Health Status</p>
          <p className="text-white text-base leading-relaxed">
            {data.current_health_status}
          </p>
        </div>
      </div>

      {/* Red Flags */}
      <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 shadow-md">
        <RedFlags flags={data.critical_red_flags} />
      </div>

      {/* Routine Timeline */}
      <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 shadow-md">
        <RoutineTimeline routine={data.suggested_routine_table} />
      </div>
    </div>
  );
}
