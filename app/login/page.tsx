"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async () => {

  setLoading(true);
  setError("");

  try {

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {

      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.name);
      localStorage.setItem("email", data.email);

      window.location.href = "/";

    } else {

      setError(data.message);

    }

  } catch {

    setError("Server not reachable.");

  }

  setLoading(false);

};

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-900 p-8 rounded-3xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-white mb-6">
          Login
        </h1>

        <input
          placeholder="Email"
          className="w-full p-3 rounded-xl mb-4 bg-slate-800 text-white"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="
w-full
p-3
rounded-xl
mb-4
bg-slate-800
text-white
border
border-slate-700
focus:border-indigo-500
outline-none
transition-all
"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
        {error && (

  <div className="mb-5 bg-red-500/10 border border-red-500 text-red-400 rounded-xl p-3">

    ❌ {error}

  </div>

)}

        <button
  onClick={login}
  disabled={loading}
  className="
    w-full
    bg-indigo-600
    hover:bg-indigo-700
    disabled:bg-slate-700
    py-3
    rounded-xl
    text-white
    font-semibold
    transition-all
    duration-300
  "
>

  {loading ? (
    <>🤖 Logging in...</>
  ) : (
    <>Login</>
  )}

</button>

      </div>

    </main>
  );
}