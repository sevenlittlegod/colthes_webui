import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AIScreenProps {
  onBack: () => void;
}

export default function AIScreen({ onBack }: AIScreenProps) {
  const [isListening, setIsListening] = useState(true);
  
  const suggestions = [
    "小丞，请立即停止晾衣",
    "小丞，启动强紫外线烘干功能",
    "小丞，请帮我取下白色衬衫给我",
    "小丞，今天的天气怎么样，推荐穿衣是什么"
  ];

  return (
    <main className="flex-1 overflow-y-auto flex flex-col bg-slate-900 scrollbar-hide pb-32">
      <header className="flex items-center justify-between p-4 glass-nav sticky top-0 z-20">
        <button 
          onClick={onBack}
          className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-white">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold text-white flex-1 text-center pr-10">AI 助手 - 小丞</h2>
      </header>

      <div className="flex-1 flex flex-col items-center justify-start pt-12 px-6 relative">
        {/* Interactive Floating Product Icon Orb */}
        <motion.button 
          onClick={() => setIsListening(!isListening)}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-10 group focus:outline-none"
        >
          {isListening && (
            <>
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              {/* Pulse Rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[ping_3s_linear_infinite]"></div>
              <div className="absolute inset-0 rounded-full border border-primary/10 animate-[ping_4s_linear_infinite_1s]"></div>
            </>
          )}
          
          <div className={`relative w-28 h-28 rounded-full bg-white/5 border transition-all duration-500 flex items-center justify-center backdrop-blur-xl ${isListening ? 'border-primary/30 shadow-[0_0_50px_rgba(56,189,248,0.25)]' : 'border-white/10 opacity-60'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-500 ${isListening ? 'text-primary' : 'text-slate-400'}`}>
              <rect x="3" y="2" width="18" height="5" rx="1.5" fill="currentColor" fillOpacity={isListening ? 0.2 : 0.05} />
              <line x1="8" y1="4.5" x2="16" y2="4.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M6 7 l3 5 m0 -5 l-3 5" strokeWidth="1.2" />
              <path d="M18 7 l-3 5 m0 -5 l3 5" strokeWidth="1.2" />
              <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2" />
              <line x1="4" y1="15" x2="20" y2="15" strokeWidth="1.5" />
              <path d="M8 15 v1 l-2 1.5 m2 -1.5 l2 1.5" strokeWidth="1.2" />
              <path d="M16 15 v1 l-2 1.5 m2 -1.5 l2 1.5" strokeWidth="1.2" />
            </svg>
          </div>
          
          {/* Label Tip */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            点击{isListening ? '结束' : '开始'}
          </div>
        </motion.button>

        {/* Animated Voice Waves */}
        <div className="flex items-center justify-center gap-1.5 h-16 mb-8">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-1 rounded-full transition-colors duration-500 ${isListening ? 'bg-primary' : 'bg-slate-700'}`}
              animate={isListening ? {
                height: [8, 32, 12, 48, 20, 8],
              } : { height: 4 }}
              transition={isListening ? {
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "linear"
              } : { duration: 0.3 }}
            />
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${isListening ? 'text-white' : 'text-slate-500'}`}>我是小丞</h3>
          <p className={`text-sm tracking-[0.2em] uppercase font-bold transition-colors duration-500 ${isListening ? 'text-primary' : 'text-slate-600'}`}>
            {isListening ? '正在倾听您的指令' : '待机中，点击图标开始对话'}
          </p>
        </div>

        <div className="w-full space-y-3 opacity-90">
          <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em] mb-4 text-center">您可以这样对话</p>
          {suggestions.map((text, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-left hover:bg-white/10 transition-all group flex items-center gap-4"
            >
              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-lg">chat_bubble</span>
              </div>
              <span className="text-[13px] text-slate-200 font-medium leading-tight">{text}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </main>
  );
}
