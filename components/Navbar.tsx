"use client";

import Link from "next/link";
import {
  useEffect,
  useState,
  useRef
} from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);


  const router = useRouter();
  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");

    router.push("/login");

    window.location.reload();
  };

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
      setName(
        localStorage.getItem("name") || ""
      );
    }

  }, []);
  useEffect(() => {

  function handleClickOutside(
    event: MouseEvent
  ) {

    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(
        event.target as Node
      )
    ) {
      setDropdown(false);
    }

  }

  document.addEventListener(
    "mousedown",
    handleClickOutside
  );

  return () => {

    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );

  };

}, []);

  

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

       <h1 className="text-2xl font-bold text-white">
  Skill<span className="text-indigo-400">Forge</span>
</h1>

        <div className="flex items-center gap-6 text-slate-300">

          <Link href="/">
            Home
          </Link>

          <Link href="/scenarios">
            Scenarios
          </Link>

         

          

          {!isLoggedIn ? (
  <>
    <Link href="/login">
      Login
    </Link>

    <Link href="/signup">
      Signup
    </Link>

    <Link
      href="/scenarios"
      className="bg-indigo-600 px-5 py-2 rounded-lg text-white hover:bg-indigo-700 transition"
    >
      Get Started
    </Link>
  </>
) : (
  <div
  className="relative"
  ref={dropdownRef}
>

    <button
      onClick={() =>
        setDropdown(!dropdown)
      }
      className="
flex
items-center
gap-2
bg-slate-800
hover:bg-slate-700
px-4
py-2
rounded-lg
text-white
transition-all
duration-200
"
    >
      👤 {name} ▼
    </button>

    <div
  className={`
    absolute
    right-0
    mt-0
    w-48
    bg-slate-900
    rounded-xl
    border
    border-slate-700
    shadow-lg
    transition-all
    duration-200
    ease-out
    overflow-hidden
    ${
      dropdown
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-2 pointer-events-none"
    }
  `}
>
        <Link
          href="/profile"
          onClick={() => setDropdown(false)}
          className="block px-4 py-3 hover:bg-slate-800"
        >
          Profile
        </Link>

        <Link
          href="/history"
          onClick={() => setDropdown(false)}
          className="block px-4 py-3 hover:bg-slate-800"
        >
          History
        </Link>

        <button
          onClick={logout}
          className="w-full text-left px-4 py-3 hover:bg-slate-800 text-red-400"
        >
          Logout
        </button>

      </div>

    

  </div>
)}

        </div>

      </div>

    </nav>
  );
}