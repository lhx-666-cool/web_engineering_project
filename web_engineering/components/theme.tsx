'use client'
import React, { useState, useEffect } from 'react';
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 从localStorage加载主题
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const newTheme = !isDarkMode ? 'dark' : 'light';

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ?
        <>
          <div className="box bg-neutral-500 w-8 h-8 flex justify-center items-center rounded-md">
            <SunnyIcon style={{ color: 'black' }} />
          </div>
        </>
        :
        <>
          <div className="box bg-neutral-400 w-8 h-8 flex justify-center items-center rounded-md">
            <BedtimeIcon style={{ color: 'white' }} />
          </div>
        </>}
    </button>
  );
};

export default ThemeToggle;
