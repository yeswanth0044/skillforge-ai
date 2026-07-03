import ScenarioCard from "../../components/ScenarioCard";

const scenarios = [
  {
    title: "HR Interview",
    description: "Practice common HR and behavioral interview questions.",
    icon: "🎯",
  },
  {
    title: "Team Conflict",
    description: "Handle workplace disagreements professionally.",
    icon: "🤝",
  },
  {
    title: "Project Pitch",
    description: "Present your projects with confidence.",
    icon: "📢",
  },
  {
    title: "Client Meeting",
    description: "Improve client communication and professionalism.",
    icon: "💼",
  },
  {
    title: "Leadership Scenario",
    description: "Practice leadership and decision-making conversations.",
    icon: "🧠",
  },
  {
    title: "Self Introduction",
    description: "Perfect your tell-me-about-yourself answer.",
    icon: "🗣️",
  },
];

export default function ScenariosPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-32 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white">
            Choose Your Practice Mode
            </h1>

            <p className="text-slate-400 text-xl mt-4">
            Select a scenario and start improving your soft skills.
            </p>
        </div>

        {/* Learning Journey Banner */}
        <div className="mb-12 bg-indigo-500/10 border border-indigo-500/20 rounded-3xl p-6">
            <h2 className="text-white text-2xl font-semibold">
                Your Learning Journey
            </h2>

            <p className="text-slate-400 mt-2">
            Complete practice sessions and unlock advanced scenarios.
            </p>
        </div>

            {/* Scenario Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scenarios.map((scenario) => (
            <ScenarioCard
                key={scenario.title}
                title={scenario.title}
                description={scenario.description}
                icon={scenario.icon}
            />
            ))}
        </div>

      </div>

    </main>
  );
}