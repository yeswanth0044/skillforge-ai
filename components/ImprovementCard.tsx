type ImprovementCardProps = {
  items: string[];
};

export default function ImprovementCard({
  items,
}: ImprovementCardProps) {
  return (
    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-6">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        Areas to Improve
      </h2>

      <ul className="space-y-3 text-slate-300">
        {items.map((item, index) => (
          <li key={index}>
            ⚠️ {item}
          </li>
        ))}
      </ul>
    </div>
  );
}