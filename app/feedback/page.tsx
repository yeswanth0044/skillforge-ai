"use client";

import { useEffect, useState } from "react";

export default function FeedbackPage() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {

    const interview =
      localStorage.getItem(
        "selectedInterview"
      );

    if (interview) {
      setData(
        JSON.parse(interview)
      );
    }

  }, []);

  if (!data) {
    return (
      <div className="p-10 text-white">
        No feedback found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Interview Feedback
        </h1>

        <div className="bg-slate-900 rounded-3xl p-8">

          <h2 className="text-2xl font-semibold mb-4">
            {data.scenario}
          </h2>

          <p className="text-5xl font-bold text-green-400 mb-8">
            {data.score}%
          </p>

          <div className="grid grid-cols-3 gap-6 mb-8">

            <div>
              <p>Communication</p>
              <h3>{data.communication}%</h3>
            </div>

            <div>
              <p>Confidence</p>
              <h3>{data.confidence}%</h3>
            </div>

            <div>
              <p>Clarity</p>
              <h3>{data.clarity}%</h3>
            </div>

          </div>

          <h3 className="text-xl font-semibold mb-3">
            Strengths
          </h3>

          <ul className="mb-6">
            {data.strengths.map(
              (item: string, index: number) => (
                <li key={index}>
                  ✅ {item}
                </li>
              )
            )}
          </ul>

          <h3 className="text-xl font-semibold mb-3">
            Improvements
          </h3>

          <ul className="mb-6">
            {data.improvements.map(
              (item: string, index: number) => (
                <li key={index}>
                  🔹 {item}
                </li>
              )
            )}
          </ul>

          <h3 className="text-xl font-semibold mb-3">
            Summary
          </h3>

          <p>
            {data.summary}
          </p>

        </div>

      </div>

    </main>
  );
}