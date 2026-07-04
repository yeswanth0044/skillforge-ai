"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [stats, setStats] = useState({
  total_interviews: 0,
  average_score: 0,
  best_score: 0,
});

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    setName(
      localStorage.getItem("name") || ""
    );

    setEmail(
      localStorage.getItem("email") || ""
    );
    const userEmail =
  localStorage.getItem("email");

fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/dashboard/${userEmail}`
)
  .then((res) => res.json())
  .then((data) => {
    setStats(data);
  });

  }, []);

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");

    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          👤 Profile
        </h1>

        <div className="bg-slate-900 rounded-3xl p-8">

          <div className="mb-6">
            <p className="text-slate-400">
              Name
            </p>

            <h2 className="text-2xl font-semibold">
              {name}
            </h2>
          </div>

          <div className="mb-6">
            <p className="text-slate-400">
              Email
            </p>

            <h2 className="text-xl">
              {email}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

  <div className="bg-slate-800 p-5 rounded-2xl">
    <p className="text-slate-400">
      Total Interviews
    </p>

    <h2 className="text-3xl font-bold mt-2">
      {stats.total_interviews}
    </h2>
  </div>

  <div className="bg-slate-800 p-5 rounded-2xl">
    <p className="text-slate-400">
      Average Score
    </p>

    <h2 className="text-3xl font-bold mt-2">
      {stats.average_score}
    </h2>
  </div>

  <div className="bg-slate-800 p-5 rounded-2xl">
    <p className="text-slate-400">
      Best Score
    </p>

    <h2 className="text-3xl font-bold mt-2">
      {stats.best_score}
    </h2>
  </div>

</div>

          <button
            onClick={logout}
            className="bg-red-600 px-6 py-3 rounded-xl"
          >
            Logout
          </button>

        </div>

      </div>

    </main>
  );
}