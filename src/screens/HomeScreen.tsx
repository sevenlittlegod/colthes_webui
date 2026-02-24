import React, { useState } from 'react';
import { clsx } from 'clsx';

export default function HomeScreen({ onOpenWashingMachine, onOpenWeather }: { onOpenWashingMachine: () => void, onOpenWeather: () => void }) {
  const [autoMode, setAutoMode] = useState(true);
  const [rackStatus, setRackStatus] = useState<'expanded' | 'retracted'>('expanded');
  const [windEnabled, setWindEnabled] = useState(false);
  const [uvEnabled, setUvEnabled] = useState(false);

  return (
    <main className="flex-1 overflow-y-auto pb-24">
      <header className="flex items-center justify-between px-6 pt-10 pb-4 glass-nav sticky top-0 z-10 shadow-sm border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-sky-50 dark:bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-2xl">local_laundry_service</span>
          </div>
          <div>
            <h1 className="text-xl font-bold leading-tight" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>衣晾家丞</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">周一, 12月8日</p>
          </div>
        </div>
        <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <div className="px-6 mt-6">
        <div 
          onClick={onOpenWeather}
          className="relative overflow-hidden rounded-xl bg-gradient-to-br from-sky-400 to-primary p-6 text-white shadow-lg shadow-sky-400/20 cursor-pointer hover:shadow-sky-400/40 transition-shadow"
        >
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-sky-100 mb-1">今日天气</p>
              <h2 className="text-3xl font-bold mb-1 font-display">24°C</h2>
              <p className="text-sm text-sky-50 font-medium">晴朗</p>
            </div>
            <span className="material-symbols-outlined text-6xl text-white/80">wb_sunny</span>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">check_circle</span>
            <p className="text-xs font-medium">非常适合户外晾晒。</p>
          </div>
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        </div>
      </div>

      <div className="px-6 mt-4">
        <div 
          onClick={onOpenWeather}
          className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm cursor-pointer hover:border-primary/50 transition-colors"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500">
            <span className="material-symbols-outlined">lightbulb</span>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">智能穿衣建议</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">今日紫外线较强，建议穿着浅色棉质衣物并做好防晒措施。</p>
          </div>
          <button className="text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        </div>
      </div>

      <div className="px-6 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">晾衣架状态</h3>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">自动模式</span>
            <button 
              onClick={() => setAutoMode(!autoMode)}
              className={clsx(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                autoMode ? "bg-primary" : "bg-slate-300 dark:bg-slate-600"
              )}
            >
              <span className={clsx(
                "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                autoMode ? "translate-x-6" : "translate-x-1"
              )}></span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center gap-3 min-h-[160px]">
            <div className={clsx(
              "w-16 h-16 rounded-full flex items-center justify-center transition-colors",
              rackStatus === 'expanded' 
                ? "bg-green-50 dark:bg-green-900/20 text-green-500 animate-pulse" 
                : "bg-slate-100 dark:bg-slate-800 text-slate-400"
            )}>
              <span className="material-symbols-outlined text-3xl">
                {rackStatus === 'expanded' ? 'unfold_more' : 'unfold_less'}
              </span>
            </div>
            <div className="text-center">
              <p className="text-base font-bold text-slate-900 dark:text-slate-100">
                {rackStatus === 'expanded' ? '已展开' : '已收回'}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {rackStatus === 'expanded' ? '当前正在晾晒' : '空闲中'}
              </p>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-3">
            <button 
              onClick={() => setRackStatus('retracted')}
              disabled={autoMode}
              className={clsx(
                "group p-3 h-24 rounded-xl border shadow-sm flex flex-col items-center justify-center gap-2 transition-all",
                rackStatus === 'retracted' 
                  ? "bg-primary/10 border-primary text-primary" 
                  : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-primary",
                autoMode && "opacity-50 cursor-not-allowed hover:border-slate-100 dark:hover:border-slate-800"
              )}
            >
              <span className={clsx(
                "material-symbols-outlined text-2xl transition-colors",
                rackStatus === 'retracted' ? "text-primary" : "text-slate-400 group-hover:text-primary",
                autoMode && "group-hover:text-slate-400"
              )}>arrow_upward</span>
              <span className={clsx(
                "text-xs font-medium",
                rackStatus === 'retracted' ? "text-primary" : "text-slate-600 dark:text-slate-300"
              )}>收回</span>
            </button>
            <button 
              onClick={() => setRackStatus('expanded')}
              disabled={autoMode}
              className={clsx(
                "group p-3 h-24 rounded-xl border shadow-sm flex flex-col items-center justify-center gap-2 transition-all",
                rackStatus === 'expanded' 
                  ? "bg-primary/10 border-primary text-primary" 
                  : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-primary",
                autoMode && "opacity-50 cursor-not-allowed hover:border-slate-100 dark:hover:border-slate-800"
              )}
            >
              <span className={clsx(
                "material-symbols-outlined text-2xl transition-colors",
                rackStatus === 'expanded' ? "text-primary" : "text-slate-400 group-hover:text-primary",
                autoMode && "group-hover:text-slate-400"
              )}>arrow_downward</span>
              <span className={clsx(
                "text-xs font-medium",
                rackStatus === 'expanded' ? "text-primary" : "text-slate-600 dark:text-slate-300"
              )}>展开</span>
            </button>
            <button 
              onClick={() => setWindEnabled(!windEnabled)}
              disabled={autoMode}
              className={clsx(
                "group p-3 h-24 rounded-xl border shadow-sm flex flex-col items-center justify-center gap-2 transition-all",
                windEnabled 
                  ? "bg-primary/10 border-primary text-primary" 
                  : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-primary",
                autoMode && "opacity-50 cursor-not-allowed hover:border-slate-100 dark:hover:border-slate-800"
              )}
            >
              <span className={clsx(
                "material-symbols-outlined text-2xl transition-colors",
                windEnabled ? "text-primary" : "text-slate-400 group-hover:text-primary",
                autoMode && "group-hover:text-slate-400"
              )}>wind_power</span>
              <span className={clsx(
                "text-xs font-medium",
                windEnabled ? "text-primary" : "text-slate-600 dark:text-slate-300"
              )}>风干</span>
            </button>
            <button 
              onClick={() => setUvEnabled(!uvEnabled)}
              disabled={autoMode}
              className={clsx(
                "group p-3 h-24 rounded-xl border shadow-sm flex flex-col items-center justify-center gap-2 transition-all",
                uvEnabled 
                  ? "bg-primary/10 border-primary text-primary" 
                  : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-primary",
                autoMode && "opacity-50 cursor-not-allowed hover:border-slate-100 dark:hover:border-slate-800"
              )}
            >
              <span className={clsx(
                "material-symbols-outlined text-2xl transition-colors",
                uvEnabled ? "text-primary" : "text-slate-400 group-hover:text-primary",
                autoMode && "group-hover:text-slate-400"
              )}>light_mode</span>
              <span className={clsx(
                "text-xs font-medium",
                uvEnabled ? "text-primary" : "text-slate-600 dark:text-slate-300"
              )}>紫外线</span>
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 mt-8 mb-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">洗衣进度</h3>
        <div 
          onClick={onOpenWashingMachine}
          className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm cursor-pointer hover:border-primary transition-colors"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-sky-50 dark:bg-sky-900/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">local_laundry_service</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold text-slate-900 dark:text-slate-100">日常洗</h4>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">剩余35分钟</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">漂洗阶段 • 正常负载</p>
            </div>
          </div>
          <div className="relative w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-[65%] bg-primary rounded-full"></div>
          </div>
          <div className="flex justify-between mt-2 text-[10px] font-medium text-slate-400 uppercase tracking-wider">
            <span>洗涤</span>
            <span className="text-primary">漂洗</span>
            <span>脱水</span>
            <span>完成</span>
          </div>
        </div>
      </div>
    </main>
  );
}
