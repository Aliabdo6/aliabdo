'use client';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Egypt timezone formatter
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Cairo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="text-sm font-mono text-slate-500 tracking-widest uppercase mb-2">Local Time</div>
      <div className="text-3xl lg:text-4xl font-space font-bold text-slate-800 dark:text-slate-100 tabular-nums">
        {time || '...'}
      </div>
      <div className="mt-2 text-xs font-sans text-slate-400 flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFD1] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFD1]"></span>
        </span>
        Cairo, Egypt (GMT+3)
      </div>
    </div>
  );
}
