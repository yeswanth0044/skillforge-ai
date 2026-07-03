type ScoreCardProps = {
  title: string;
  score: string;
};

export default function ScoreCard({
  title,
  score,
}: ScoreCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <h3 className="text-slate-400 text-sm uppercase tracking-wide">
        {title}
      </h3>

      <p className="text-4xl font-bold text-white mt-3">
        {score}
      </p>
    </div>
  );
}