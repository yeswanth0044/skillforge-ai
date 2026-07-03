import {
  FaClipboardList,
  FaMicrophone,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaClipboardList size={30} />,
    title: "Choose a Scenario",
    description:
      "Select HR, Behavioral, Technical or Communication interviews.",
  },
  {
    icon: <FaMicrophone size={30} />,
    title: "Answer Questions",
    description:
      "Respond naturally as if you're in a real interview.",
  },
  {
    icon: <FaRobot size={30} />,
    title: "Get AI Feedback",
    description:
      "Receive instant analysis on confidence, clarity and communication.",
  },
  {
    icon: <FaChartLine size={30} />,
    title: "Track Progress",
    description:
      "Review your history and improve after every interview.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-900 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            How It Works
          </h2>

          <p className="text-slate-400 text-xl mt-4">
            Practice. Analyze. Improve.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (

            <div
              key={index}
              className="
                relative
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                text-center
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]
                transition-all
                duration-300
              "
            >

              <div className="absolute top-5 right-5 text-indigo-500 font-bold text-xl">
                0{index + 1}
              </div>

              <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-6 text-indigo-400">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}