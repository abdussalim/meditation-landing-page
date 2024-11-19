import React, { useState, useEffect } from 'react';

interface MeditationProps {
  theme: 'day' | 'night';
}

export default function Meditation({ theme }: MeditationProps) {
  const [time, setTime] = useState(300);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    setTime(300);
    setIsActive(false);
  };

  return (
    <div className="text-center">
      <div className={`text-5xl font-extralight mb-6 tracking-wider ${
        theme === 'day' ? 'text-slate-700' : 'text-slate-200'
      }`}>
        {formatTime(time)}
      </div>
      <div className="space-x-3">
        <button
          onClick={() => setIsActive(!isActive)}
          className={`px-8 py-3 rounded-full text-sm transition-all duration-300 ${
            theme === 'day'
              ? 'bg-gradient-to-r from-slate-100 to-blue-100 text-slate-700 hover:from-slate-200 hover:to-blue-200 shadow-md hover:shadow-lg'
              : 'bg-gradient-to-r from-slate-700 to-blue-900 text-slate-200 hover:from-slate-600 hover:to-blue-800 shadow-md shadow-slate-900/20 hover:shadow-lg'
          }`}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={handleReset}
          className={`px-8 py-3 rounded-full text-sm transition-all duration-300 ${
            theme === 'day'
              ? 'bg-gradient-to-r from-slate-100 to-rose-100 text-slate-700 hover:from-slate-200 hover:to-rose-200 shadow-md hover:shadow-lg'
              : 'bg-gradient-to-r from-slate-700 to-rose-900 text-slate-200 hover:from-slate-600 hover:to-rose-800 shadow-md shadow-slate-900/20 hover:shadow-lg'
          }`}
        >
          Reset
        </button>
      </div>
    </div>
  );
}