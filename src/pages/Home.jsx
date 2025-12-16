import { useState } from "react";
import IntakeForm from "../components/form/IntakeForm";
import AIDashboard from "../components/dashboard/AIDashboard";

export default function Home() {
  const [analysisResult, setAnalysisResult] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      
      {/* Top Hero Section */}
      <header className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            🧠 AI Lifestyle Architect
          </h1>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Complete your daily routine and receive a personalized, AI-driven
            lifestyle transition plan designed for long-term health.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-14">
        
        {/* Intake Form */}
        <section>
          <IntakeForm onResult={setAnalysisResult} />
        </section>

        {/* AI Dashboard */}
        {analysisResult && (
          <section>
            <AIDashboard data={analysisResult} />
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-slate-500 text-sm">
          Powered by AI • Built for sustainable health
        </div>
      </footer>
    </div>
  );
}
