import React, { useState } from 'react';
import { clsx } from 'clsx';

const ALL_ITEMS = [
  {
    id: 1,
    name: '棉质床单',
    category: '床品',
    type: 'King Size',
    progress: 100,
    status: '已完成',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYst-NODSIBDQbZkGuRFyBThziqY7FWpKD_koT5LiYnk0W75y10xvsZn9SOkCxBEAC_kB44td9oVwy3r9M4dN0HKIMeg4INW6GBhB9VFk6zj3X2s2fZyWjwrOCqnBsmRAGCdhV9belI7PsfbkaGAoXjsD65jxevz8UAeI1IC2_R_-zzQNld8Le6Rf-vK8Mx0FQPH14cXn_2aUNRXZ_eib5lXaGV_wSG6GjtD7bnm76mngzSdV9oTwuS1bP3zwiV3WAG8rynqq9Xz-D',
    timeRemaining: '准备收回',
    estimatedTime: '',
  },
  {
    id: 2,
    name: '棉质T恤',
    category: '上装',
    type: '精细洗涤',
    progress: 85,
    status: '干燥中',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAApjU488GMRbXwnkOAK8ixqIrcrzkGHt_Lsp0c5qGa2a_lvpWPdSePfBDG0H5E6M3ow-sPDr4X6MQTt3e4s7uTCKsF71cCHjOWZZsFNjV_bMjzdrlHczLPx04Qan7MAcVquMAbaZzcQfxcOvqrF5wIikFniilIbOYdCwPN6NsjeRa9apHopeyfLbJVIm6qhLF888HhcnloI6KViZkK6CoZvDHwjT-wtNrXdreXwk-irhlLMPwm2ezAc6c5sXcYPzSqe0ymqs2ac8bb',
    timeRemaining: '剩余约12分钟',
    estimatedTime: '14:45',
  },
  {
    id: 3,
    name: '蓝色牛仔裤',
    category: '下装',
    type: '强力模式',
    progress: 45,
    status: '干燥中',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARFU17wcSYviq5om882Yu47w6ZLFwkg5dVyzRYzC9Ow1yYRO5VOEfxr3VIWe9vkPKbPxGStUGl0jez_p-yDqn_u4bfMTGDQ1u4G1QuemF9BUUHoK2TVgD-6Hla6vsaH82RTy3Sf26rzcpbJPY8awO_VfcJpdYwgF28IvUqcdzPLwODFngH15ND_3HauFYbdNyYU1uhtdkQZKi8RoxD6_9_Q-TZatQOgU25CU7diMyyR-tEKEtKMfBSulSQYuFS-L26F-2OmzQkFyud',
    timeRemaining: '剩余约35分钟',
    estimatedTime: '15:10',
  },
  {
    id: 4,
    name: '羊毛毛衣',
    category: '上装',
    type: '轻柔烘干',
    progress: 20,
    status: '干燥中',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOiLrx1tsmrR7saJGX8uMEQwutEx6peXiiE9JrRFc2qO_cj_eZlyoAsd0jB6K-SaREiqHefcLCqEeoAw7aPU6f18aVxLwiiDlnjZnrKXzr7jmwGWWnv-yivex2UlfKaz74ikY9tFEufgas_1dtHSR5VXAU70ofnQLb504uzxRit2eCzN_aXudXg2e5I-DKqPHDabiXhsykSD0Def2lXnDY8eS7AMggsTCWr20gBISmD9eX1n-xgsJsRXfu04nJrEkOMRVY2Epjis98',
    timeRemaining: '剩余约50分钟',
    estimatedTime: '15:25',
  },
  {
    id: 5,
    name: '真丝枕套',
    category: '床品',
    type: '冷风吹干',
    progress: 60,
    status: '干燥中',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKz_3F2c9MhHZt_MBTYtBjg25mv4We44gnCsDHfe0vcDAaSTNHczDqMBV8pN57VPV9ovJsvzvN6zAHULZk9B3I3OLoDhH2h5btGZlGfnd7cBlbKD5U9qhfmXliUnXiyqT7ZKMKzkuqgOX5Y11k-GHL3YCeq4fTbwIjuep3x-dnBG29ZDVwR1dm7qHMP5dTvTbCLhhIOBwVVQHcahSjmjqKVfzyfwUVycOZ6K45IRceoIrxrrwQmJQ_Q625MgXneU2QIpY-i33bLAEc',
    timeRemaining: '剩余约20分钟',
    estimatedTime: '14:53',
  }
];

export default function MonitoringScreen({ onBack, onOpenWardrobe }: { onBack?: () => void, onOpenWardrobe?: () => void }) {
  const [activeFilter, setActiveFilter] = useState('全部');
  const filters = ['全部', '上装', '下装', '床品'];

  const filteredItems = ALL_ITEMS.filter(item => activeFilter === '全部' || item.category === activeFilter);

  return (
    <main className="flex-1 overflow-y-auto pb-24">
      <header className="sticky top-0 z-10 bg-white dark:bg-slate-900 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="text-slate-900 dark:text-slate-100 p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold text-center flex-1">晾晒监控</h1>
        <button className="text-slate-900 dark:text-slate-100 p-2 -mr-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <div className="px-4 pt-6 pb-2">
        <h2 className="text-2xl font-bold tracking-tight">当前负荷</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">设备 A • 剩余 {filteredItems.length} 件</p>
      </div>

      <div className="flex gap-3 px-4 py-2 overflow-x-auto no-scrollbar">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={clsx(
              "flex h-9 shrink-0 items-center justify-center px-4 rounded-full text-sm font-medium transition-colors",
              activeFilter === filter
                ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
                : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4 p-4">
        {filteredItems.map(item => (
          <div 
            key={item.id} 
            onClick={onOpenWardrobe}
            className={clsx("relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-sm border cursor-pointer hover:shadow-md transition-shadow", item.progress === 100 ? "border-primary/20 dark:border-primary/30" : "border-slate-100 dark:border-slate-700")}
          >
            <div className={clsx("absolute top-0 left-0 w-1 h-full", item.progress === 100 ? "bg-green-500" : "bg-primary")}></div>
            <div className="flex flex-col md:flex-row h-full">
              <div className="h-40 md:h-auto md:w-1/3 bg-slate-100 dark:bg-slate-700 relative">
                <img alt={item.name} className="w-full h-full object-cover" src={item.image} referrerPolicy="no-referrer" />
                {item.progress === 100 && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    已完成
                  </div>
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">{item.name}</h3>
                    <span className={clsx("font-bold text-sm", item.progress === 100 ? "text-green-600 dark:text-green-400" : "text-primary")}>
                      {item.progress}% 干燥
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{item.category} • {item.type}</p>
                </div>
                <div className="space-y-3">
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div className={clsx("h-2 rounded-full transition-all duration-500", item.progress === 100 ? "bg-green-500" : "bg-primary")} style={{ width: `${item.progress}%` }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    {item.progress === 100 ? (
                      <>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{item.timeRemaining}</p>
                        <button className="bg-primary hover:bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm shadow-sky-200 dark:shadow-none">
                          立即收取
                        </button>
                      </>
                    ) : (
                      <>
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1 text-xs">
                          <span className="material-symbols-outlined text-[16px]">schedule</span>
                          {item.timeRemaining}
                        </span>
                        <span className="font-medium text-slate-700 dark:text-slate-300 text-xs">{item.estimatedTime}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined">water_drop</span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium">湿度</span>
            <span className="text-xl font-bold text-slate-900 dark:text-slate-100">24%</span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined">thermostat</span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium">温度</span>
            <span className="text-xl font-bold text-slate-900 dark:text-slate-100">42°C</span>
          </div>
        </div>
      </div>
    </main>
  );
}
