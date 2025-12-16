

import { useState } from "react";
import IntakeForm from "./components/form/IntakeForm";
import AIDashboard from "./dashboard/AIDashboard";

export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      
      {/* App Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg md:text-xl font-semibold">
            🧠 AI Lifestyle Architect
          </h1>
          <span className="text-xs text-slate-400">
            Personalized Health Intelligence
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        
        {/* Intake Form */}
        <section>
          <IntakeForm onResult={setResult} />
        </section>

        {/* AI Result */}
        {result && (
          <section>
            <AIDashboard data={result} />
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} AI Lifestyle Architect • Built By vamshi ❤️ 
        </div>
      </footer>
    </div>
  );
}
