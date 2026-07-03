"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {

    const response = await fetch(
      "http://127.0.0.1:8000/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      }
    );

    const data = await response.json();

    if (data.success) {

      alert("Account Created Successfully!");

      router.push("/login");

    } else {

      alert(data.message);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-900 p-8 rounded-3xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-white mb-6">
          Create Account
        </h1>

        <input
          placeholder="Name"
          className="w-full p-3 rounded-xl mb-4 bg-slate-800 text-white"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="w-full p-3 rounded-xl mb-4 bg-slate-800 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-xl mb-6 bg-slate-800 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signup}
          className="w-full bg-indigo-600 py-3 rounded-xl text-white font-semibold"
        >
          Sign Up
        </button>

      </div>

    </main>
  );
}