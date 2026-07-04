"use client";

import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
  const email = localStorage.getItem("email");

fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/history/${email}`
)
  .then((res) => res.json())
  .then((data) => {

    console.log("HISTORY DATA:", data);

    setResults(Array.isArray(data) ? data : []);
  });
}, []);

  const totalInterviews = results.length;

  const averageScore =
    results.length > 0
      ? Math.round(
          results.reduce(
            (sum, item) => sum + item.score,
            0
          ) / results.length
        )
      : 0;

  const bestScore =
    results.length > 0
      ? Math.max(
          ...results.map(
            (item) => item.score
          )
        )
      : 0;
  const lowestScore =
  results.length > 0
    ? Math.min(
        ...results.map(
          (item) => item.score
        )
      )
    : 0;

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Interview History
        </h1>

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white/5 p-6 rounded-2xl">
            <p className="text-slate-400">
              Total Interviews
            </p>

            <h2 className="text-4xl font-bold">
              {totalInterviews}
            </h2>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <p className="text-slate-400">
              Average Score
            </p>

            <h2 className="text-4xl font-bold">
              {averageScore}%
            </h2>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <p className="text-slate-400">
              Best Score
            </p>

            <h2 className="text-4xl font-bold">
              {bestScore}%
            </h2>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <p className="text-slate-400">
              Lowest Score
            </p>

            <h2 className="text-4xl font-bold">
              {lowestScore}%
            </h2>
          </div>

        </div>

        <div className="bg-white/5 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-6">
            Previous Interviews
          </h2>

          <div className="space-y-4">

            {results.map(
              (item, index) => (
                <div
  key={index}
  className="bg-slate-900 p-5 rounded-xl"
>

  <div className="flex justify-between items-center mb-4">

  <div>
    <h3 className="text-lg font-semibold text-white">
      {item.scenario}
    </h3>

    <p className="text-slate-400 text-sm">
      {item.created_at
        ? new Date(item.created_at)
            .toLocaleString()
        : "Unknown Date"}
    </p>
  </div>

  <span className="text-2xl font-bold text-green-400">
    {item.score}%
  </span>

</div>

  <div className="grid grid-cols-3 gap-4 text-center">

    <div>
      <p className="text-slate-400 text-sm">
        Communication
      </p>

      <p className="font-bold">
        {item.communication}%
      </p>
    </div>

    <div>
      <p className="text-slate-400 text-sm">
        Confidence
      </p>

      <p className="font-bold">
        {item.confidence}%
      </p>
    </div>

    <div>
      <p className="text-slate-400 text-sm">
        Clarity
      </p>

      <p className="font-bold">
        {item.clarity}%
      </p>
    </div>

  </div>

  <div className="mt-4">

  <p className="text-slate-400 text-sm">
    Summary
  </p>

  <p className="text-white mt-1">
    {item.summary.slice(0, 100)}...
  </p>

  <div className="mt-4 flex gap-3">

  <button
    className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg"
    onClick={() => {

      localStorage.setItem(
        "selectedInterview",
        JSON.stringify(item)
      );

      window.location.href =
        "/feedback";
    }}
  >
    View Feedback
  </button>

  <button
    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
    onClick={async () => {

      const confirmDelete =
        confirm(
          "Delete this interview?"
        );

      if (!confirmDelete) return;

      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/history/${item._id}`,
        {
          method: "DELETE",
        }
      );

      setResults(
        results.filter(
          (r) => r._id !== item._id
        )
      );
    }}
  >
    Delete
  </button>

</div>
</div>

</div>
              )
            )}

          </div>

        </div>

      </div>

    </main>
  );
}
