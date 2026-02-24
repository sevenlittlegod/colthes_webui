import React from 'react';

export default function WardrobeScreen({ onBack }: { onBack?: () => void }) {
  return (
    <main className="flex-1 overflow-y-auto pb-24">
      <div className="flex items-center glass-nav p-4 pb-2 justify-between sticky top-0 z-10 border-b border-slate-100 dark:border-slate-800">
        <div 
          onClick={onBack}
          className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center cursor-pointer"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </div>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">衣橱记录</h2>
        <div className="flex w-12 items-center justify-end absolute right-4">
          <button className="flex items-center justify-center rounded-lg size-10 bg-transparent text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">calendar_month</span>
          </button>
        </div>
      </div>

      <div className="px-4 pt-6 pb-2">
        <div className="flex items-center justify-between">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">今日</h3>
          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">4件衣物</span>
        </div>
      </div>

      {/* Item 1 */}
      <div className="flex items-center gap-4 bg-white dark:bg-slate-900 px-4 py-4 border-b border-slate-100 dark:border-slate-800">
        <div className="relative shrink-0">
          <div className="bg-center bg-no-repeat bg-cover rounded-xl size-16 bg-slate-100 dark:bg-slate-800 flex items-center justify-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGl9a6z_goWlIS2nEvK5ued5UM1xKyxsZzmd4oWyY0ZLpq9b7d97bwNzRDPH4-5tKkbrv248chDE42rg8kQ-XNt3p800WpNHtDC26J_yjsu7TBDbxJVeypk2GuC7hkxWtruVB2Vfk0AofuP0M2bdeZowsV5CG3yl7NG9tpioJf8jqfTlw1R2wDo72Ovn3AiTSsYAwG03tc-gnam4HGtGkBpal6UdAUwVUuZBsqGCVfggJjoBXoMBNYBEXT8LyDyoLhIDpMzSvvqMz5")' }}></div>
          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full border-2 border-white dark:border-slate-900 p-0.5">
            <span className="material-symbols-outlined text-white text-[12px] font-bold">check</span>
          </div>
        </div>
        <div className="flex flex-col justify-center flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal truncate">白色棉质衬衫</p>
            <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded ml-2 whitespace-nowrap">清新</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal mt-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            9:00 收回
          </p>
        </div>
        <button className="shrink-0 text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>

      {/* Item 2 */}
      <div className="flex items-center gap-4 bg-white dark:bg-slate-900 px-4 py-4 border-b border-slate-100 dark:border-slate-800">
        <div className="relative shrink-0">
          <div className="bg-center bg-no-repeat bg-cover rounded-xl size-16 bg-slate-100 dark:bg-slate-800 flex items-center justify-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCc_FEsE40vnjaqX_aHRQfLr7WVsGuhyGb1VSSEy2NtI5ukn9C2HTHVBXFDcNYv1pnA1aq1iVRFuUMvNrVLyHeLhqpQ6GVUpsmu8aUPAavj4_If7S6LpUq_IWVMg4mmJmv1fjiT4txs0CWwu3Kt0mwASBMlR-J6RXfRD3JwpgLLDA0P55WhMe0Mgj-iXjKxfbQX66LwS7_2J-UxCkpmw1KZN7IQfzAbmUIF1agEg0GC8-Mdnv8AuNhzKYlFHOPR5h7kNGk91nrNsR1Z")' }}></div>
          <div className="absolute -bottom-1 -right-1 bg-amber-500 rounded-full border-2 border-white dark:border-slate-900 p-0.5">
            <span className="material-symbols-outlined text-white text-[12px] font-bold">iron</span>
          </div>
        </div>
        <div className="flex flex-col justify-center flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal truncate">牛仔裤</p>
            <span className="text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded ml-2 whitespace-nowrap">需熨烫</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal mt-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            10:15 收回
          </p>
        </div>
        <button className="shrink-0 text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>

      {/* Item 3 */}
      <div className="flex items-center gap-4 bg-white dark:bg-slate-900 px-4 py-4 border-b border-slate-100 dark:border-slate-800">
        <div className="relative shrink-0">
          <div className="bg-center bg-no-repeat bg-cover rounded-xl size-16 bg-slate-100 dark:bg-slate-800 flex items-center justify-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAGEqBTesF7CoqQgUXwLykk2UrLD4gKNWKqU7gyoNR3907Dg0dOPFXyn4TI9bkfgZmXLGkHUg-gMI6ZOzXosp1JRlmefpjg_Rkuo-21RxfPqLAPbuAQWolyGWeN0wV7WRnlEwc9s8NBNA0er015r-1hEg2EazfbW14nXDwlmTI3kzKQzyTFjs0oHpSgU_C0iuFZ0jcb8LK8pyBbMaV4QyIlpyb6K6it1LjlfkVFPIhiGZVwRPrAVc7sR2Kjf0YngLh4SdgkdxGPzB_")' }}></div>
          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full border-2 border-white dark:border-slate-900 p-0.5">
            <span className="material-symbols-outlined text-white text-[12px] font-bold">check</span>
          </div>
        </div>
        <div className="flex flex-col justify-center flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal truncate">丝巾</p>
            <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded ml-2 whitespace-nowrap">轻柔</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal mt-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            11:30 收回
          </p>
        </div>
        <button className="shrink-0 text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>

      {/* Item 4 */}
      <div className="flex items-center gap-4 bg-white dark:bg-slate-900 px-4 py-4">
        <div className="relative shrink-0">
          <div className="bg-center bg-no-repeat bg-cover rounded-xl size-16 bg-slate-100 dark:bg-slate-800 flex items-center justify-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbvywhKC26me1eHARpvlQzbRtqWvnx8X3V_rsLbUg9Kw-kV85dP0AugwCArk8xGgtX4KJ2fW8D_XeH9CbWX_5_3Q9SYCAomBfHsgpGQlUqC2jwNYrP3Gkb1m40vU3vXIMi3SGdk5x-pr_w5a6hw1QntnbdPqKd1dIgV0Xtu_HK8AmeSBJiYa6j_FP2VbTkoLUlL0e2Lool1-Ev4A7cPa5mVXI9t31pLHLGtdF6a1lXWSsJaMZJuBT-Zgv5d4cGbIPkCCcwBRvTyOXN")' }}></div>
          <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full border-2 border-white dark:border-slate-900 p-0.5">
            <span className="material-symbols-outlined text-white text-[12px] font-bold">dry_cleaning</span>
          </div>
        </div>
        <div className="flex flex-col justify-center flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal truncate">休闲裤</p>
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded ml-2 whitespace-nowrap">干洗</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal mt-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            12:45 收回
          </p>
        </div>
        <button className="shrink-0 text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>

      <div className="px-4 pt-6 pb-2">
        <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">昨日</h3>
      </div>

      {/* Item 5 */}
      <div className="flex items-center gap-4 bg-white dark:bg-slate-900 px-4 py-4 opacity-70">
        <div className="relative shrink-0">
          <div className="bg-center bg-no-repeat bg-cover rounded-xl size-16 bg-slate-100 dark:bg-slate-800 flex items-center justify-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtlawv_YOgK2n3zmLGdRzxijgi5U69ggq9Wvq8XxXz7mavzlKib3bR_yYpWFhFePRjuStQKjhD8aOGzcSy2Vnr6X7DwPt_qmlXayU6AHMX208eWmmBIMephI6NzlWlfJgwL0E8msenhSa5CDQejnWdJGLkj1w3Zm_AOeeccKJgbQt-fljkN4NvbGWquUgbqmJgl38YN4ww9w1pg2-KXMAR-vKjMGKkmXBXH7T2roWzLgzMdoiZui5RelRR3tFB4n9PTVU2C35Dbj4O")' }}></div>
        </div>
        <div className="flex flex-col justify-center flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal truncate">红色卫衣</p>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded ml-2 whitespace-nowrap">已入库</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal mt-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            16:20 收回
          </p>
        </div>
        <button className="shrink-0 text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>

      <div className="fixed bottom-[88px] left-0 right-0 px-4 z-20 pointer-events-none">
        <div className="flex justify-end pointer-events-auto">
          <button className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg transition-all transform active:scale-95">
            <span className="material-symbols-outlined">dry_cleaning</span>
            <span className="font-bold">准备所选衣物</span>
          </button>
        </div>
      </div>
    </main>
  );
}
