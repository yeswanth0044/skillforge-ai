type StrengthsCardProps = {
  items: string[];
};

export default function StrengthsCard({
  items,
}: StrengthsCardProps) {
  return (
    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-6">
      <h2 className="text-2xl font-bold text-emerald-400 mb-4">
        Strengths
      </h2>

      <ul className="space-y-3 text-slate-300">
        {items.map((item, index) => (
          <li key={index}>
            ✅ {item}
          </li>
        ))}
      </ul>
    </div>
  );
}