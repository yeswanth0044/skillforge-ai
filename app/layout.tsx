import "./globals.css";
import Navbar from "../components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SkillForge",
  description: "AI Interview & Communication Coach",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950">
        <Navbar />
        {children}
      </body>
    </html>
  );
}