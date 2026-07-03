import {
  FaBrain,
  FaComments,
  FaChartLine,
} from "react-icons/fa";

export default function WhyKaizen() {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Why Choose
            <span className="text-indigo-400"> SkillForge</span>
          </h2>

          <p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto">
            Technical skills get you shortlisted.
            Communication skills get you hired.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-300">

            <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-6 text-indigo-400">
              <FaBrain size={30} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              AI Coaching
            </h3>

            <p className="text-slate-400 leading-7">
              Practice interviews with an AI coach that asks realistic questions and evaluates every answer.
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-300">

            <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-6 text-indigo-400">
              <FaComments size={30} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Better Communication
            </h3>

            <p className="text-slate-400 leading-7">
              Improve confidence, clarity, vocabulary and speaking structure through continuous practice.
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-300">

            <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-6 text-indigo-400">
              <FaChartLine size={30} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Track Growth
            </h3>

            <p className="text-slate-400 leading-7">
              Monitor your interview history and watch your communication improve over time.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}