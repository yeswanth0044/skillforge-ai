import Link from "next/link";

type ScenarioCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function ScenarioCard({
  title,
  description,
  icon,
}: ScenarioCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-300">

      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h2 className="text-2xl font-bold text-white mb-3">
        {title}
      </h2>

      <p className="text-slate-400 mb-6">
        {description}
      </p>

      <Link
        href={`/chat?scenario=${encodeURIComponent(title)}`}
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl"
      >
        Start Practice
      </Link>

    </div>
  );
}