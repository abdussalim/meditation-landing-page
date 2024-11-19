import React, { useState } from 'react';
import { Wind, Moon, Sun, CloudRain } from 'lucide-react';
import ZenQuote from './components/ZenQuote';
import Meditation from './components/Meditation';
import Breathing from './components/Breathing';

function App() {
  const [theme, setTheme] = useState<'day' | 'night'>('day');

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${
      theme === 'day' 
        ? 'bg-gradient-to-br from-stone-50 via-blue-50 to-stone-100 gradient-animate'
        : 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800 gradient-animate'
    }`}>
      <div className="fixed inset-0 bg-grid-slate-900/[0.04] -z-10" />
      
      <button
        onClick={() => setTheme(theme === 'day' ? 'night' : 'day')}
        className="fixed top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:scale-110 transition-all duration-300 hover:rotate-12"
      >
        {theme === 'day' ? (
          <Moon className="w-6 h-6 text-slate-700" />
        ) : (
          <Sun className="w-6 h-6 text-amber-100" />
        )}
      </button>

      <main className="container mx-auto px-4 py-16 flex flex-col items-center gap-16">
        <header className="text-center animate-float">
          <h1 className={`text-6xl font-extralight mb-6 tracking-wide ${
            theme === 'day' ? 'text-slate-700' : 'text-slate-100'
          }`}>
            Find Your Peace
          </h1>
          <p className={`text-lg font-light tracking-wider ${
            theme === 'day' ? 'text-slate-600' : 'text-slate-300'
          }`}>
            A moment of zen in your daily journey
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          <div className="group animate-float" style={{ animationDelay: '0.2s' }}>
            <div className={`aspect-square rounded-3xl p-8 flex flex-col items-center justify-center gap-6 transition-all duration-500 backdrop-blur-sm ${
              theme === 'day' 
                ? 'bg-white/70 shadow-lg hover:shadow-xl hover:bg-white/90' 
                : 'bg-slate-800/50 shadow-lg shadow-slate-800/30 hover:shadow-slate-800/50 hover:bg-slate-800/70'
            }`}>
              <Wind className={`w-12 h-12 ${
                theme === 'day' ? 'text-slate-700' : 'text-slate-200'
              }`} />
              <h2 className={`text-2xl font-light tracking-wide ${
                theme === 'day' ? 'text-slate-700' : 'text-slate-200'
              }`}>Breathing</h2>
              <Breathing theme={theme} />
            </div>
          </div>

          <div className="group animate-float" style={{ animationDelay: '0.4s' }}>
            <div className={`aspect-square rounded-3xl p-8 flex flex-col items-center justify-center gap-6 transition-all duration-500 backdrop-blur-sm ${
              theme === 'day' 
                ? 'bg-white/70 shadow-lg hover:shadow-xl hover:bg-white/90' 
                : 'bg-slate-800/50 shadow-lg shadow-slate-800/30 hover:shadow-slate-800/50 hover:bg-slate-800/70'
            }`}>
              <CloudRain className={`w-12 h-12 ${
                theme === 'day' ? 'text-slate-700' : 'text-slate-200'
              }`} />
              <h2 className={`text-2xl font-light tracking-wide ${
                theme === 'day' ? 'text-slate-700' : 'text-slate-200'
              }`}>Meditation</h2>
              <Meditation theme={theme} />
            </div>
          </div>

          <div className="group md:col-span-2 lg:col-span-1 animate-float" style={{ animationDelay: '0.6s' }}>
            <div className={`aspect-square rounded-3xl p-8 flex flex-col items-center justify-center gap-6 transition-all duration-500 backdrop-blur-sm ${
              theme === 'day' 
                ? 'bg-white/70 shadow-lg hover:shadow-xl hover:bg-white/90' 
                : 'bg-slate-800/50 shadow-lg shadow-slate-800/30 hover:shadow-slate-800/50 hover:bg-slate-800/70'
            }`}>
              <ZenQuote theme={theme} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;