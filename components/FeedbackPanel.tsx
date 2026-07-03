interface FeedbackPanelProps {
  communication: number;
  confidence: number;
  clarity: number;
  strength: string;
  improvement: string;
}

export default function FeedbackPanel({
  communication,
  confidence,
  clarity,
  strength,
  improvement,
}: FeedbackPanelProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        AI Feedback
      </h2>

      <div className="space-y-4 text-slate-300">

        <div>
          <p className="text-white font-semibold">
            Communication
          </p>
          <p>{communication}%</p>
        </div>

        <div>
          <p className="text-white font-semibold">
            Confidence
          </p>
          <p>{confidence}%</p>
        </div>

        <div>
          <p className="text-white font-semibold">
            Clarity
          </p>
          <p>{clarity}%</p>
        </div>

        <hr className="border-slate-700 my-4" />

        <div>
          <p className="text-green-400 font-semibold">
            ✅ Strength
          </p>
          <p>{strength}</p>
        </div>

        <div>
          <p className="text-yellow-400 font-semibold">
            ⚠ Improvement
          </p>
          <p>{improvement}</p>
        </div>

      </div>

    </div>
  );
}