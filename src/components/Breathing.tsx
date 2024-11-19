import React, { useState, useEffect } from 'react';

interface BreathingProps {
  theme: 'day' | 'night';
}

export default function Breathing({ theme }: BreathingProps) {
  const [isBreathing, setIsBreathing] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');

  useEffect(() => {
    if (!isBreathing) return;

    const phases = {
      inhale: { next: 'hold', duration: 4000 },
      hold: { next: 'exhale', duration: 4000 },
      exhale: { next: 'inhale', duration: 4000 },
    };

    const timer = setTimeout(() => {
      setPhase(phases[phase].next as 'inhale' | 'hold' | 'exhale');
    }, phases[phase].duration);

    return () => clearTimeout(timer);
  }, [phase, isBreathing]);

  return (
    <div className="text-center">
      <div className="relative w-32 h-32 mb-4">
        <div className={`absolute inset-0 rounded-full transition-transform duration-1000 border-2 ${
          theme === 'day' ? 'border-slate-300' : 'border-slate-600'
        }`} />
        <div
          className={`absolute inset-0 rounded-full transition-all duration-[4000ms] ${
            theme === 'day' 
              ? 'bg-gradient-to-br from-blue-100 to-blue-200' 
              : 'bg-gradient-to-br from-blue-900/30 to-blue-800/30'
          } ${
            isBreathing && phase === 'inhale' ? 'scale-100 opacity-100' :
            isBreathing && phase === 'hold' ? 'scale-100 opacity-70' :
            'scale-50 opacity-30'
          }`}
        />
      </div>
      <button
        onClick={() => setIsBreathing(!isBreathing)}
        className={`px-8 py-3 rounded-full text-sm transition-all duration-300 ${
          theme === 'day'
            ? 'bg-gradient-to-r from-slate-100 to-blue-100 text-slate-700 hover:from-slate-200 hover:to-blue-200 shadow-md hover:shadow-lg'
            : 'bg-gradient-to-r from-slate-700 to-blue-900 text-slate-200 hover:from-slate-600 hover:to-blue-800 shadow-md shadow-slate-900/20 hover:shadow-lg'
        }`}
      >
        {isBreathing ? 'Stop' : 'Start'} Breathing
      </button>
      {isBreathing && (
        <p className={`mt-4 text-sm font-light tracking-wide ${
          theme === 'day' ? 'text-slate-600' : 'text-slate-400'
        }`}>
          {phase === 'inhale' ? 'Breathe in...' :
           phase === 'hold' ? 'Hold...' :
           'Breathe out...'}
        </p>
      )}
    </div>
  );
}