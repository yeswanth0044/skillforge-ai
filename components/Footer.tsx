import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              SkillForge
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              AI-powered interview preparation platform helping
              students improve communication, confidence,
              and interview performance.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">

              <Link
                href="/"
                className="block text-slate-400 hover:text-indigo-400 transition"
              >
                Home
              </Link>

              <Link
                href="/scenarios"
                className="block text-slate-400 hover:text-indigo-400 transition"
              >
                Practice
              </Link>

              <Link
                href="/history"
                className="block text-slate-400 hover:text-indigo-400 transition"
              >
                History
              </Link>

              <Link
                href="/profile"
                className="block text-slate-400 hover:text-indigo-400 transition"
              >
                Profile
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              <a
                href="#"
                className="text-slate-400 hover:text-indigo-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-indigo-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-indigo-400 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">

          © 2026 SkillForge AI Interview Coach • Built using Next.js, FastAPI & MongoDB

        </div>

      </div>

    </footer>
  );
}