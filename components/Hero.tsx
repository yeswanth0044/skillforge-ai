import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 mb-6">
            AI Interview & Communication Coach
          </div>

          <h1 className="text-6xl font-bold text-white leading-tight">
            Master Interviews &
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Professional Communication
            </span>
          </h1>

          <p className="mt-8 text-xl text-slate-300">
           Practice realistic interviews, improve communication,
and receive instant AI-powered coaching.
          </p>

          <div className="flex gap-4 mt-10">

  <Link
    href="/scenarios"
    className="bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
  >
    🚀 Start Interview
  </Link>

  <Link
    href="/history"
    className="border border-slate-700 hover:bg-slate-800 hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-xl"
  >
    📊 View History
  </Link>

</div>
        </div>

        {/* Right Side Preview */}
        <div className="bg-white/10 backdrop-blur-2xl border border-indigo-500/20 rounded-3xl p-8 shadow-[0_0_50px_rgba(99,102,241,0.25)]">

          <div className="mb-6">
            <span className="text-indigo-400 font-semibold">
              AI Interview Coach
            </span>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-xl text-slate-200">
              Tell me about yourself.
            </div>

            <div className="bg-indigo-600 p-4 rounded-xl text-white">
              I am a final-year CSE student interested in AI and web development.
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl">
              <p className="text-emerald-400">✓ Good structure</p>
              <p className="text-emerald-400">✓ Clear communication</p>
              <p className="text-yellow-400">⚠ Add achievements</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}