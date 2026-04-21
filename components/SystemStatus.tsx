'use client';
import { motion, AnimatePresence } from 'motion/react';
import { Battery, Wifi, Cpu, Hexagon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function SystemStatus() {
  const [uptime, setUptime] = useState(0);
  const [metrics, setMetrics] = useState({ cpu: 12, mem: 45 });
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptime(prev => prev + 1);
      // Randomize metrics slightly
      setMetrics({
        cpu: Math.floor(Math.random() * 15) + 5,
        mem: Math.floor(Math.random() * 10) + 40
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5 }} // After boot screen
      className="absolute bottom-10 left-6 sm:left-10 z-40 hidden md:flex flex-col gap-2"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <div className="glass-panel px-4 py-2 rounded-full border border-slate-200 dark:border-[#1A2233] bg-white/80 dark:bg-[#0D1117]/80 backdrop-blur-md flex items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400 cursor-default shadow-xl">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFD1] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFD1]"></span>
          </span>
          <span className="text-slate-800 dark:text-slate-200">SYS.ONLINE</span>
        </div>
        
        <div className="w-[1px] h-3 bg-slate-300 dark:bg-slate-700"></div>
        <div className="flex items-center gap-1.5"><Wifi className="w-3.5 h-3.5" /> 12ms</div>
        <div className="w-[1px] h-3 bg-slate-300 dark:bg-slate-700"></div>
        <div className="flex items-center gap-1.5"><Battery className="w-3.5 h-3.5" /> 100%</div>
      </div>

      {/* Expanded Metrics */}
      <AnimatePresence>
        {showDetails && (
          <motion.div 
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-[#1A2233] bg-white/90 dark:bg-[#0D1117]/90 origin-bottom-left shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs font-mono text-slate-500">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest">Uptime</span>
                <span className="text-[#00FFD1] text-sm">{formatUptime(uptime)}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest">Target</span>
                <span className="text-slate-800 dark:text-slate-200 flex items-center gap-1"><Hexagon className="w-3 h-3 text-[#7C3AED]" /> PORTFOLIO_V1</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-slate-400" />
                <div className="flex-1">
                  <div className="flex justify-between mb-1 text-[9px]"><span>CPU</span><span>{metrics.cpu}%</span></div>
                  <div className="h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div animate={{ width: `${metrics.cpu}%` }} className="h-full bg-[#00FFD1]"></motion.div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded text-slate-400 border border-slate-400 flex items-center justify-center text-[8px]">RAM</div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1 text-[9px]"><span>MEM</span><span>{metrics.mem}%</span></div>
                  <div className="h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div animate={{ width: `${metrics.mem}%` }} className="h-full bg-[#7C3AED]"></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
