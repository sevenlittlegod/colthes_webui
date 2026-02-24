import React from 'react';

export default function WashingMachineScreen({ onBack }: { onBack: () => void }) {
  return (
    <>
      <div className="flex items-center justify-between p-4 pb-2 bg-surface-light dark:bg-surface-dark backdrop-blur-md sticky top-0 z-10">
        <button onClick={onBack} className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back</span>
        </button>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">洗衣机</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center rounded-full size-10 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-slate-100">
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>settings</span>
          </button>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto pb-24">
        <div className="px-6 py-8 flex flex-col items-center">
          <div className="relative size-64 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-primary/10"></div>
            <div className="absolute inset-4 rounded-full border border-primary/5"></div>
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36" style={{ display: 'block', margin: '0 auto', maxWidth: '80%', maxHeight: '250px' }}>
              <path className="fill-none stroke-slate-100 dark:stroke-slate-800" strokeWidth="2.5" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
              <path className="fill-none stroke-primary" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="size-12 mb-2 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" style={{ fontSize: '28px', fontVariationSettings: "'FILL' 1" }}>water_drop</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">当前循环</p>
              <h1 className="text-slate-900 dark:text-white text-3xl font-bold mb-1">漂洗中</h1>
              <p className="text-primary font-semibold text-lg">剩余12分钟</p>
            </div>
            <div className="absolute top-0 right-10 size-3 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute bottom-10 left-4 size-2 bg-blue-300 rounded-full opacity-40"></div>
          </div>

          <div className="grid grid-cols-3 gap-4 w-full mt-8">
            <div className="flex flex-col items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <span className="material-symbols-outlined text-slate-400 mb-2" style={{ fontSize: '20px' }}>thermostat</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">40°C</span>
              <span className="text-xs text-slate-500">温度</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <span className="material-symbols-outlined text-slate-400 mb-2" style={{ fontSize: '20px' }}>speed</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">800</span>
              <span className="text-xs text-slate-500">转速</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <span className="material-symbols-outlined text-slate-400 mb-2" style={{ fontSize: '20px' }}>weight</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">4.5kg</span>
              <span className="text-xs text-slate-500">载重</span>
            </div>
          </div>
        </div>

        <div className="w-full h-24 relative overflow-hidden my-2">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-surface-dark dark:via-transparent dark:to-surface-dark z-10"></div>
          <div className="w-full h-full opacity-30 flex items-center justify-center">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
              <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#137fec" fillOpacity="0.3"></path>
              <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#137fec" fillOpacity="0.5"></path>
            </svg>
          </div>
        </div>

        <div className="px-6 mb-8">
          <div className="flex justify-between items-center relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -z-10"></div>
            <div className="absolute top-1/2 left-0 w-3/4 h-0.5 bg-primary/30 -z-10"></div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="size-3 rounded-full bg-primary ring-4 ring-white dark:ring-surface-dark"></div>
              <span className="text-xs font-medium text-primary">洗涤</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="size-3 rounded-full bg-primary ring-4 ring-white dark:ring-surface-dark"></div>
              <span className="text-xs font-medium text-primary">漂洗</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="size-3 rounded-full bg-slate-200 dark:bg-slate-700 ring-4 ring-white dark:ring-surface-dark"></div>
              <span className="text-xs font-medium text-slate-400">脱水</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="size-3 rounded-full bg-slate-200 dark:bg-slate-700 ring-4 ring-white dark:ring-surface-dark"></div>
              <span className="text-xs font-medium text-slate-400">烘干</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-surface-dark rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.03)] dark:shadow-none border-t border-slate-100 dark:border-slate-800 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold">预约任务</h3>
            <button className="text-primary text-sm font-medium hover:text-primary/80">查看全部</button>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
              <div className="size-12 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined">dry_cleaning</span>
              </div>
              <div className="flex-1">
                <h4 className="text-slate-900 dark:text-white font-bold text-base">白色棉织物</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">今日 17:00</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-primary text-xs font-bold">
                已预约
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 opacity-70">
              <div className="size-12 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center text-slate-400 shadow-sm">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div className="flex-1">
                <h4 className="text-slate-900 dark:text-white font-bold text-base">运动装</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">昨日 20:00</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-bold">
                已完成
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
