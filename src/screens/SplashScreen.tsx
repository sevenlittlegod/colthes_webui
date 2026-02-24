import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after a short delay
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-sky-900 to-sky-950 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-[40%] right-[-20%] w-48 h-48 bg-sky-300/30 rounded-full blur-2xl"></div>
      
      <div className={clsx(
        "flex flex-col items-center z-10 transition-all duration-1000 transform",
        mounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      )}>
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-white/30 rounded-3xl blur-xl transform scale-110"></div>
          <div className="relative w-28 h-28 bg-white rounded-3xl shadow-2xl flex items-center justify-center transform hover:rotate-6 transition-transform duration-500">
            <span className="material-symbols-outlined text-sky-500 text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_laundry_service</span>
          </div>
          {/* Decorative bubbles */}
          <div className={clsx("absolute -top-4 -right-4 w-8 h-8 bg-white/80 rounded-full backdrop-blur-sm flex items-center justify-center shadow-lg transition-all duration-700 delay-500", mounted ? "scale-100 opacity-100" : "scale-0 opacity-0")}>
            <span className="material-symbols-outlined text-sky-400 text-sm">wb_sunny</span>
          </div>
          <div className={clsx("absolute -bottom-2 -left-4 w-6 h-6 bg-white/80 rounded-full backdrop-blur-sm flex items-center justify-center shadow-lg transition-all duration-700 delay-700", mounted ? "scale-100 opacity-100" : "scale-0 opacity-0")}>
            <span className="material-symbols-outlined text-sky-400 text-xs">water_drop</span>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-3 tracking-widest drop-shadow-md">衣晾家丞</h1>
        <p className="text-sky-100 text-sm font-medium tracking-[0.3em] mb-16 drop-shadow-sm">智能洗护晾晒管家</p>
        
        <button 
          onClick={onFinish}
          className={clsx(
            "group relative overflow-hidden px-10 py-4 bg-white text-sky-900 rounded-full font-bold text-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(255,255,255,0.3)] transition-all duration-300 transform active:scale-95",
            mounted ? "translate-y-0 opacity-100 delay-700" : "translate-y-8 opacity-0"
          )}
        >
          <span className="relative z-10 flex items-center gap-2">
            开始体验
            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </span>
          <div className="absolute inset-0 bg-sky-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </button>
      </div>
      
      <div className={clsx(
        "absolute bottom-8 text-sky-100/60 text-xs font-medium tracking-widest transition-opacity duration-1000 delay-1000",
        mounted ? "opacity-100" : "opacity-0"
      )}>
        v1.0.0
      </div>
    </div>
  );
}
