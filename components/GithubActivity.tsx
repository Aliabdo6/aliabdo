'use client';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import TiltCard from './TiltCard';

// Generate 52 weeks * 7 days of random contribution data
const generateData = () => {
  const weeks = [];
  for (let w = 0; w < 52; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      // More active on weekdays
      const isWeekend = d === 0 || d === 6;
      let count = Math.random() < 0.7 ? 0 : Math.floor(Math.random() * 5);
      if (!isWeekend && Math.random() < 0.6) {
        count = Math.floor(Math.random() * 10) + 1;
      }
      days.push(count);
    }
    weeks.push(days);
  }
  return weeks;
};

export default function GithubActivity() {
  const [data, setData] = useState<number[][]>([]);

  useEffect(() => {
    setData(generateData());
  }, []);

  const getColor = (count: number) => {
    if (count === 0) return 'bg-slate-200 dark:bg-[#0D1117] border border-slate-300 dark:border-[#1A2233]';
    if (count < 3) return 'bg-[#003a2e]';
    if (count < 6) return 'bg-[#00724e]';
    if (count < 9) return 'bg-[#00a372]';
    return 'bg-[#00FFD1]';
  };

  return (
    <section id="activity" className="py-32 relative bg-slate-50 dark:bg-[#0A0E14] border-y border-slate-200 dark:border-[#1A2233]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-4">
          <span className="text-slate-500 font-mono text-sm tracking-wider">{"// 11. ACTIVITY"}</span>
        </motion.div>
        
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-space font-bold text-slate-800 dark:text-slate-100 mb-16">
          Building Every Day
        </motion.h2>

        <div className="flex flex-col xl:flex-row gap-12 items-center xl:items-start justify-center perspective-1000">
          
          {/* Stats Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="flex sm:flex-row xl:flex-col gap-8 xl:w-64"
          >
            <div className="text-center xl:text-left glass-panel p-6 rounded-2xl w-full border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117]/80 group hover:border-[#00FFD1] transition-colors relative overflow-hidden shine-effect">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-5xl">💻</div>
              <div className="text-4xl font-space font-bold text-[#00FFD1] mb-2">847</div>
              <div className="text-sm font-sans text-slate-500 dark:text-slate-400">Total Commits</div>
            </div>
            <div className="text-center xl:text-left glass-panel p-6 rounded-2xl w-full border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117]/80 group hover:border-[#7C3AED] transition-colors relative overflow-hidden shine-effect">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-5xl">📦</div>
              <div className="text-4xl font-space font-bold text-[#7C3AED] mb-2">23</div>
              <div className="text-sm font-sans text-slate-500 dark:text-slate-400">Repositories</div>
            </div>
            <div className="text-center xl:text-left glass-panel p-6 rounded-2xl w-full border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117]/80 group hover:border-[#FF4D6D] transition-colors relative overflow-hidden shine-effect">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-5xl">⭐</div>
              <div className="text-4xl font-space font-bold text-[#FF4D6D] mb-2">156</div>
              <div className="text-sm font-sans text-slate-500 dark:text-slate-400">GitHub Stars</div>
            </div>
          </motion.div>

          {/* Heatmap Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.3 }}
            className="flex-1 w-full"
          >
            <TiltCard glareColor="rgba(0, 255, 209, 0.1)">
              <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117] overflow-x-auto overflow-y-hidden shadow-2xl relative">
                <div className="min-w-[700px]">
                  <div className="flex gap-[4px] mb-2 text-xs font-mono text-slate-500 justify-between px-2">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                  </div>
                  <div className="flex gap-[4px]">
                    {data.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-[4px]">
                        {week.map((count, dIdx) => (
                          <motion.div 
                            key={`${wIdx}-${dIdx}`}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (wIdx * 0.01) }}
                            className={`w-3 h-3 rounded-sm ${getColor(count)} cursor-help relative group hover:scale-125 hover:z-10 transition-transform`}
                          >
                             <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-[#00FFD1] text-[10px] font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 hidden md:block glow-border">
                                {count} commits
                             </div>
                          </motion.div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-2 justify-end text-xs font-mono text-slate-500">
                    Less 
                    <div className="flex gap-[4px]">
                      <div className={`w-3 h-3 rounded-sm ${getColor(0)}`}></div>
                      <div className={`w-3 h-3 rounded-sm ${getColor(2)}`}></div>
                      <div className={`w-3 h-3 rounded-sm ${getColor(5)}`}></div>
                      <div className={`w-3 h-3 rounded-sm ${getColor(8)}`}></div>
                      <div className={`w-3 h-3 rounded-sm ${getColor(10)}`}></div>
                    </div>
                    More
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
