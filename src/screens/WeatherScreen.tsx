import React from 'react';

export default function WeatherScreen({ onBack }: { onBack?: () => void }) {
  return (
    <main className="flex-1 overflow-y-auto pb-24 selection:bg-primary/20">
      <header className="flex items-center justify-between p-4 pb-2 sticky top-0 z-20 bg-white dark:bg-slate-900 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
        <button 
          onClick={onBack}
          className="flex size-10 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold leading-tight flex-1 text-center">天气与指南</h2>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">more_vert</span>
        </button>
      </header>

      <div className="px-4 py-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-yellow-500 text-6xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>sunny</span>
          <h1 className="text-4xl font-bold tracking-tight mb-1">24°C 晴</h1>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">water_drop</span> 45% 湿度</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">air</span> 12km/h 风速</span>
          </div>
        </div>
      </div>

      <div className="px-4 mb-6">
        <div className="glass-card rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">7天趋势</p>
              <p className="text-2xl font-bold">平均 22°C</p>
            </div>
            <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded text-xs font-bold">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>+2%</span>
            </div>
          </div>
          
          <div className="relative h-32 w-full mb-4">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
              <line className="text-slate-200 dark:text-slate-700" stroke="currentColor" strokeDasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="10" y2="10"></line>
              <line className="text-slate-200 dark:text-slate-700" stroke="currentColor" strokeDasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="25" y2="25"></line>
              <line className="text-slate-200 dark:text-slate-700" stroke="currentColor" strokeDasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="40" y2="40"></line>
              <path className="fill-primary/10 dark:fill-primary/20" d="M0,35 Q15,20 30,25 T60,15 T100,10 V50 H0 Z"></path>
              <path className="stroke-primary" d="M0,35 Q15,20 30,25 T60,15 T100,10" fill="none" strokeLinecap="round" strokeWidth="2"></path>
              <circle className="fill-white stroke-primary stroke-2" cx="0" cy="35" r="2"></circle>
              <circle className="fill-white stroke-primary stroke-2" cx="30" cy="25" r="2"></circle>
              <circle className="fill-white stroke-primary stroke-2" cx="60" cy="15" r="2"></circle>
              <circle className="fill-white stroke-primary stroke-2" cx="100" cy="10" r="2"></circle>
            </svg>
          </div>
          <div className="flex justify-between text-xs font-medium text-slate-400 dark:text-slate-500">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>
      </div>

      <div className="px-4 pb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 bg-primary/10 rounded-lg">
            <span className="material-symbols-outlined text-primary text-xl">checkroom</span>
          </div>
          <h3 className="text-lg font-bold">穿衣推荐</h3>
          <span className="ml-auto text-xs font-bold bg-primary text-white px-2 py-0.5 rounded-full">AI指南</span>
        </div>

        <div className="glass-card rounded-2xl p-0 overflow-hidden shadow-sm mb-4">
          <div className="relative h-48 bg-slate-100 dark:bg-slate-800">
            <img alt="Model wearing light jacket outfit" className="w-full h-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCc3DoayQx7REX9M5t-3IR1ihTMfDBfwNtFuGX3duPX4Mp5g4KRplgFIFgkJUCDiUOtUFU7RtKeWuxLWq0RfDnLVhxLGzn3uiiZHIv08sZnE7hQZianOxqVi1wmNDQD0PiW_bmz5VpPto7Csvv-gsxcFdK4bXWNnVuBASxk_-SVQUXDHieOjUxFhr1TlKZ9TupP0KIWaXHBQt3JDS7cFDNpoSoTPM5zodrGFdAXYpPDJwsylihvGRne-_iwkXdUKrvB7TxYAuaQBe5" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-sm font-medium opacity-90 mb-1">晴朗有风</p>
              <p className="text-white text-xl font-bold">建议穿件薄夹克</p>
            </div>
          </div>
          
          <div className="p-4 flex gap-3 overflow-x-auto no-scrollbar">
            <div className="flex-shrink-0 flex flex-col gap-2 w-20">
              <div className="h-20 w-20 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center relative group overflow-hidden">
                <img alt="Denim jacket texture detail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOiLrx1tsmrR7saJGX8uMEQwutEx6peXiiE9JrRFc2qO_cj_eZlyoAsd0jB6K-SaREiqHefcLCqEeoAw7aPU6f18aVxLwiiDlnjZnrKXzr7jmwGWWnv-yivex2UlfKaz74ikY9tFEufgas_1dtHSR5VXAU70ofnQLb504uzxRit2eCzN_aXudXg2e5I-DKqPHDabiXhsykSD0Def2lXnDY8eS7AMggsTCWr20gBISmD9eX1n-xgsJsRXfu04nJrEkOMRVY2Epjis98" referrerPolicy="no-referrer" />
              </div>
              <span className="text-xs font-medium text-center truncate w-full">牛仔夹克</span>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-2 w-20">
              <div className="h-20 w-20 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center relative group overflow-hidden">
                <img alt="White t-shirt fabric" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKz_3F2c9MhHZt_MBTYtBjg25mv4We44gnCsDHfe0vcDAaSTNHczDqMBV8pN57VPV9ovJsvzvN6zAHULZk9B3I3OLoDhH2h5btGZlGfnd7cBlbKD5U9qhfmXliUnXiyqT7ZKMKzkuqgOX5Y11k-GHL3YCeq4fTbwIjuep3x-dnBG29ZDVwR1dm7qHMP5dTvTbCLhhIOBwVVQHcahSjmjqKVfzyfwUVycOZ6K45IRceoIrxrrwQmJQ_Q625MgXneU2QIpY-i33bLAEc" referrerPolicy="no-referrer" />
              </div>
              <span className="text-xs font-medium text-center truncate w-full">棉质T恤</span>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-2 w-20">
              <div className="h-20 w-20 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center relative group overflow-hidden">
                <img alt="Beige trousers detail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi6cVFv375D9TEPUFIaN7YvKjnAfHf5bkkB_TugSl-HyluHOSvPbGozKBs-h6lqzGChROGRy_UlNGpKHXYSicukOYz3vS6GlPL5YGpxPVgMHIfEhh2beDBHOqhvC5ypxIO4EZBcoseIXWVJ7kb9ad4TBZHlPSprv91l93Vj__tSW_vLFcYk9XkSU75n7lxS7MgCIvgiZQG3d5XlKhc-kC3N3mbnvo471cgUy0j175bd_bpMbvFHC-LB3X45TqYfgb82qEe0X-ZUK_Z" referrerPolicy="no-referrer" />
              </div>
              <span className="text-xs font-medium text-center truncate w-full">卡其裤</span>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-4 shadow-sm flex items-center gap-4">
          <div className="size-10 rounded-full bg-sky-100 dark:bg-sky-900/40 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
            <span className="material-symbols-outlined">umbrella</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold">无雨</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">非常适合户外晾晒衣物</p>
          </div>
        </div>
      </div>
    </main>
  );
}
