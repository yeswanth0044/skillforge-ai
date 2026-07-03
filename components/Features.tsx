import {
  FaUserTie,
  FaComments,
  FaChartLine,
  FaBrain,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserTie size={28} />,
    title: "Interview Practice",
    description:
      "Prepare for HR and behavioral interviews."
  },
  {
    icon: <FaComments size={28} />,
    title: "Conflict Resolution",
    description:
      "Handle workplace conversations professionally."
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Progress Tracking",
    description:
      "Track confidence, clarity and communication."
  },
  {
    icon: <FaBrain size={28} />,
    title: "AI Feedback",
    description:
      "Receive actionable coaching after every answer."
  },
];

export default function Features() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Why SkillForge?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
             className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(99,102,241,0.35)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}