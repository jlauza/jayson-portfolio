"use client";

import * as Switch from "@radix-ui/react-switch";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center gap-2">
      <SunIcon className="w-5 h-5 text-yellow-500 dark:text-gray-400" />
      <Switch.Root
        className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full shadow-inner outline-none cursor-pointer transition-all"
        checked={darkMode}
        onCheckedChange={setDarkMode}
      >
        <Switch.Thumb className="block w-5 h-5 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-all translate-x-1 dark:translate-x-6" />
      </Switch.Root>
      <MoonIcon className="w-5 h-5 text-gray-600 dark:text-yellow-300" />
    </div>
  );
}
