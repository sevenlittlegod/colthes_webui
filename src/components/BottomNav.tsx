import React from 'react';
import { clsx } from 'clsx';

export type TabType = 'home' | 'monitor' | 'wardrobe' | 'weather' | 'profile';

interface BottomNavProps {
  activeTab: TabType;
  onChangeTab: (tab: TabType) => void;
}

export default function BottomNav({ activeTab, onChangeTab }: BottomNavProps) {
  const handleTabClick = (tab: TabType) => {
    if (activeTab === tab) {
      window.scrollTo(0, 0);
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      onChangeTab(tab);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full glass-nav pb-safe pt-2 z-50">
      <div className="flex justify-around items-end px-2 pb-2">
        <button
          onClick={() => handleTabClick('home')}
          className="flex flex-1 flex-col items-center justify-end gap-1 group"
        >
          <div className={clsx("flex h-8 items-center justify-center transition-colors", activeTab === 'home' ? "text-primary" : "text-slate-400 group-hover:text-primary")}>
            <span className="material-symbols-outlined text-[24px]" style={activeTab === 'home' ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" } : {}}>home</span>
          </div>
          <p className={clsx("text-xs font-medium leading-normal tracking-wide transition-colors", activeTab === 'home' ? "text-primary" : "text-slate-400 group-hover:text-primary")}>首页</p>
        </button>

        <button
          onClick={() => handleTabClick('monitor')}
          className="flex flex-1 flex-col items-center justify-end gap-1 group"
        >
          <div className={clsx("flex h-8 items-center justify-center transition-colors", activeTab === 'monitor' ? "text-primary" : "text-slate-400 group-hover:text-primary")}>
            <span className="material-symbols-outlined text-[24px]" style={activeTab === 'monitor' ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" } : {}}>monitoring</span>
          </div>
          <p className={clsx("text-xs font-medium leading-normal tracking-wide transition-colors", activeTab === 'monitor' ? "text-primary" : "text-slate-400 group-hover:text-primary")}>监控</p>
        </button>

        <div className="relative -top-5">
          <button className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[28px]">add</span>
          </button>
        </div>

        <button
          onClick={() => handleTabClick('wardrobe')}
          className="flex flex-1 flex-col items-center justify-end gap-1 group"
        >
          <div className={clsx("flex h-8 items-center justify-center transition-colors", activeTab === 'wardrobe' ? "text-primary" : "text-slate-400 group-hover:text-primary")}>
            <span className="material-symbols-outlined text-[24px]" style={activeTab === 'wardrobe' ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" } : {}}>checkroom</span>
          </div>
          <p className={clsx("text-xs font-medium leading-normal tracking-wide transition-colors", activeTab === 'wardrobe' ? "text-primary" : "text-slate-400 group-hover:text-primary")}>衣橱</p>
        </button>

        <button
          onClick={() => handleTabClick('weather')}
          className="flex flex-1 flex-col items-center justify-end gap-1 group"
        >
          <div className={clsx("flex h-8 items-center justify-center transition-colors", activeTab === 'weather' ? "text-primary" : "text-slate-400 group-hover:text-primary")}>
            <span className="material-symbols-outlined text-[24px]" style={activeTab === 'weather' ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" } : {}}>wb_sunny</span>
          </div>
          <p className={clsx("text-xs font-medium leading-normal tracking-wide transition-colors", activeTab === 'weather' ? "text-primary" : "text-slate-400 group-hover:text-primary")}>天气</p>
        </button>
      </div>
    </nav>
  );
}
