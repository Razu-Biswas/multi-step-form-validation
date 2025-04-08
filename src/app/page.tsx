"use client";
import { useEffect, useState } from "react";
import MultiStepForm from "./form/MultiStepForm";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme on first mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setDarkMode(saved === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Toggle <html> class and save preference
  useEffect(() => {
    const root = document.documentElement;
    console.log(root);
    if (darkMode) {
      root.classList.add("bg-blue-200");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <main className="min-h-screen transition-colors duration-300 bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text p-6">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 text-sm font-semibold 
            bg-light-secondary text-light-text 
            dark:bg-dark-secondary dark:text-dark-text 
            hover:bg-light-primary dark:hover:bg-dark-primary 
            rounded-md shadow-md transition-colors duration-300"
        >
          {darkMode ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>

      <MultiStepForm />
    </main>
  );
}
