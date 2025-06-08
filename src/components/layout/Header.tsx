// Ensure this file is a Client Component for Next.js App Router
"use client";

import { motion } from "framer-motion";
import { ScaleIcon } from "@heroicons/react/24/outline"; // You can use any law-themed icon
import { useState, useEffect } from "react";

export default function Header() {
  // Persist dark mode in localStorage and sync with system preference
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // Language switcher (UI only, no i18n logic)
  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("lang") || "en";
    }
    return "en";
  });
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow flex items-center justify-between px-6 py-4"
    >
      <div className="flex items-center gap-3">
        <ScaleIcon className="w-8 h-8 text-blue-900 dark:text-yellow-400" aria-hidden="true" />
        <span suppressHydrationWarning className="text-2xl font-extrabold text-blue-900 dark:text-yellow-400 tracking-tight">
          Adv. Muhammad Babar
        </span>
      </div>
      <nav className="hidden md:flex space-x-6 text-base font-medium">
        <a href="/" className="hover:text-blue-700 transition-colors">Home</a>
        <a href="/about" className="hover:text-blue-700 transition-colors">About</a>
        <a href="/practice" className="hover:text-blue-700 transition-colors">Practice</a>
        <a href="/cases" className="hover:text-blue-700 transition-colors">Cases</a>
        <a href="/blog" className="hover:text-blue-700 transition-colors">Blog</a>
        <a href="/contact" className="hover:text-blue-700 transition-colors">Contact</a>
        <a href="/legal" className="hover:text-blue-700 transition-colors">Legal</a>
      </nav>
      <div className="flex items-center gap-2">
        <button
          aria-label="Toggle dark mode"
          onClick={() => setDark((d) => !d)}
          className="rounded-full p-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {dark ? (
            <span role="img" aria-label="Light">🌞</span>
          ) : (
            <span role="img" aria-label="Dark">🌙</span>
          )}
        </button>
        <select
          className="rounded px-2 py-1 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-blue-900 dark:text-yellow-400 text-sm focus:outline-none"
          value={lang}
          onChange={e => setLang(e.target.value)}
          aria-label="Language switcher"
        >
          <option value="en">EN</option>
          <option value="ur">اردو</option>
        </select>
        <a
          href="/contact"
          className="ml-4 px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 rounded-full shadow-lg hover:from-yellow-500 hover:to-yellow-400 hover:scale-105 active:scale-95 transition-all duration-200 font-bold tracking-wide border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 hidden sm:inline-block"
        >
          Book a Consultation
        </a>
      </div>
      {/* Mobile menu button (optional, for further UX improvement) */}
    </motion.header>
  );
}