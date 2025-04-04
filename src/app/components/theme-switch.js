"use client";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (event) => {
    const state = event.target.checked;
    console.log(state);

    if (state) {
      // document.documentElement.classList.remove("dark");
      // localStorage.setItem("theme", "light");
      console.log("Dark mode");
      setDarkMode(state);
    } else {
      // document.documentElement.classList.add("dark");
      // localStorage.setItem("theme", "dark");
      console.log("Light mode");
      setDarkMode(state);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <SunIcon
        className={`w-5 h-5 text-yellow-500  ${
          darkMode === false ? "dark:text-yellow-300" : "dark:text-gray-400"
        }`}
      />
      <Switch checked={darkMode} onChange={handleChange} />

      <MoonIcon
        className={`w-5 h-5 text-yellow-500  ${
          darkMode === true ? "dark:text-yellow-300" : "dark:text-gray-400"
        }`}
      />
    </div>
  );
}
