"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';

export default function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // 防止 hydration 错误
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button
      onClick={() => { setTheme(currentTheme === "dark" ? "light" : "dark")}}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {currentTheme === "dark" ? (
        <div className="box bg-neutral-500 w-8 h-8 flex justify-center items-center rounded-md">
          <SunnyIcon style={{color: 'black'}}/>
        </div>
      ) : (
        <div className="box bg-neutral-400 w-8 h-8 flex justify-center items-center rounded-md">
          <BedtimeIcon style={{color: 'white'}}/>
        </div>
      )}
    </button>
  );
}