"use client";
import jsPDF from "jspdf";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import ScoreCard from "@/components/ScoreCard";
import StrengthsCard from "@/components/StrengthsCard";
import ImprovementCard from "@/components/ImprovementCard";

export default function ReportPage() {

  const searchParams = useSearchParams();

  const sessionId =
    searchParams.get("sessionId");

  const [feedback, setFeedback] =
    useState<any>(null);

useEffect(() => {

if (!sessionId) return;

fetch(
`${process.env.NEXT_PUBLIC_API_URL}/feedback/${sessionId}`
)
.then((res) => res.json())
.then((data) => {


  console.log(
    "FEEDBACK DATA:",
    data
  );

  setFeedback(data);
});


}, [sessionId]);

const downloadPDF = () => {

const doc = new jsPDF();

doc.setFontSize(20);
doc.text(
"AI Interview Report",
20,
20
);

doc.setFontSize(14);

doc.text(
`Overall Score: ${feedback.overall_score}%`,
20,
40
);

doc.text(
`Communication: ${feedback.communication}`,
20,
55
);

doc.text(
`Confidence: ${feedback.confidence}`,
20,
70
);

doc.text(
`Clarity: ${feedback.clarity}`,
20,
85
);

doc.text(
`Summary: ${feedback.summary}`,
20,
105,
{ maxWidth: 170 }
);

doc.text(
"Strengths:",
20,
135
);

feedback.strengths.forEach(
(item: string, index: number) => {
doc.text(
`• ${item}`,
30,
150 + index * 10
);
}
);

const improvementStart =
170 +
feedback.strengths.length * 10;

doc.text(
"Improvements:",
20,
improvementStart
);

feedback.improvements.forEach(
(item: string, index: number) => {
doc.text(
`• ${item}`,
30,
improvementStart +
15 +
index * 10
);
}
);

doc.save(
"Interview_Report.pdf"
);
};


  
  if (!feedback) {
    return (
      <main className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        Loading Report...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 pt-28 pb-16 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white">
            Performance Report
          </h1>

          <p className="text-slate-400 mt-3">
            AI Generated Interview Analysis
          </p>
          <button
            onClick={downloadPDF}
  className="mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
>
  📄 Download PDF Report
</button>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 mb-10">

          <h2 className="text-white text-xl">
            Overall Performance
          </h2>

          <p className="text-6xl font-bold text-white mt-3">
            {feedback.overall_score}%
          </p>

          <p className="text-indigo-100 mt-2">
            {feedback.summary}
          </p>
          <div className="flex gap-4 mt-6">

  <Link
    href="/history"
    className="bg-white text-slate-900 px-5 py-3 rounded-xl font-semibold"
  >
    📚 View History
  </Link>

  <Link
    href="/"
    className="border border-white px-5 py-3 rounded-xl text-white"
  >
    🏠 Back Home
  </Link>

</div>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <ScoreCard
            title="Communication"
            score={`${feedback.communication}/100`}
          />

          <ScoreCard
            title="Confidence"
            score={`${feedback.confidence}/100`}
          />

          <ScoreCard
            title="Clarity"
            score={`${feedback.clarity}/100`}
          />

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <StrengthsCard
            items={feedback.strengths}
          />

          <ImprovementCard
            items={feedback.improvements}
          />

        </div>

      </div>

    </main>
  );
}