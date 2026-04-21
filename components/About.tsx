'use client';
import { motion } from 'motion/react';
import { useState } from 'react';
import LiveClock from './LiveClock';
import { Code2 } from 'lucide-react';

const AnimatedCounter = ({ end, suffix = '', title }: { end: number, suffix?: string, title: string }) => {
  const [count, setCount] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();
        
        const update = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out expo
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setCount(Math.floor(easeProgress * end));
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      }}
      className="flex flex-col"
    >
      <div className="text-3xl md:text-5xl font-space font-bold text-[#00FFD1] mb-1 md:mb-2">{count}{suffix}</div>
      <div className="text-xs md:text-sm font-sans text-slate-600 dark:text-slate-400 font-medium">{title}</div>
    </motion.div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-4">
          <span className="text-slate-500 font-mono text-sm tracking-wider">{"// 01. ABOUT"}</span>
        </motion.div>
        
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-space font-bold text-slate-800 dark:text-slate-100 mb-12">
          The Person Behind the Code
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">
          
          {/* Main Bio Card - Spans 2x2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="md:col-span-2 md:row-span-2 glass-panel p-8 rounded-3xl flex flex-col justify-center border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117] shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#7C3AED]/10 to-transparent rounded-bl-full pointer-events-none"></div>
            <h3 className="text-2xl font-space font-bold text-slate-800 dark:text-slate-100 mb-4">Architecting Digital Futures</h3>
            <div className="space-y-4 font-sans text-slate-600 dark:text-slate-400 leading-relaxed z-10">
              <p>
                I'm Ali Abdo — a passionate Front-End Developer and Data Analyst based in Egypt. I hold a Bachelor of Law from Tanta University, but my true calling led me deep into technology, data, and machine learning.
              </p>
              <p>
                I specialize in building performant, scalable web applications with Next.js & TypeScript, while applying data science techniques to extract real-world insights. I believe the best interfaces are invisible — they just work, beautifully.
              </p>
            </div>
          </motion.div>

          {/* Timezone Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 glass-panel p-6 rounded-3xl border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117] shadow-xl flex items-center justify-center relative overflow-hidden"
          >
            <LiveClock />
          </motion.div>

          {/* Code Snippet Card - Modifying to span 1 col, 2 rows for vertical block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.4 }}
            className="md:col-span-1 md:row-span-2 glass-panel p-6 rounded-3xl border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0A0E14] shadow-xl flex flex-col glow-border"
          >
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#1A2233]">
              <Code2 className="w-4 h-4 text-[#00FFD1]" />
              <span className="text-xs font-mono text-slate-500">ali.ts</span>
            </div>
            <div className="flex-1 overflow-auto hide-scrollbar text-[11px] lg:text-[12px] leading-relaxed">
              <pre className="font-mono text-slate-300">
                <span className="text-[#7C3AED]">const</span> <span className="text-[#00FFD1]">ali</span> <span className="text-[#00FFD1]">=</span> <span className="text-[#00FFD1]">{'{'}</span>{'\n'}
                {'  '}<span className="text-slate-400">location:</span> <span className="text-[#FF4D6D]">"Egypt 🇪🇬"</span>{','}{'\n'}
                {'  '}<span className="text-slate-400">roles:</span> <span className="text-[#00FFD1]">{'['}</span><span className="text-[#FF4D6D]">"Front-End Dev"</span>{', '}<span className="text-[#FF4D6D]">"Data Analyst"</span>{', '}<span className="text-[#FF4D6D]">"ML Engineer"</span><span className="text-[#00FFD1]">{']'}</span>{','}{'\n'}
                {'  '}<span className="text-slate-400">education:</span> <span className="text-[#FF4D6D]">"B.Law — Tanta University"</span>{','}{'\n'}
                {'  '}<span className="text-slate-400">languages:</span> <span className="text-[#00FFD1]">{'['}</span><span className="text-[#FF4D6D]">"JavaScript"</span>{', '}<span className="text-[#FF4D6D]">"Python"</span>{', '}<span className="text-[#FF4D6D]">"TypeScript"</span><span className="text-[#00FFD1]">{']'}</span>{','}{'\n'}
                {'  '}<span className="text-slate-400">currentFocus:</span> <span className="text-[#FF4D6D]">"Next.js + ML Systems"</span>{','}{'\n'}
                {'  '}<span className="text-slate-400">openTo:</span> <span className="text-[#FF4D6D]">"Opportunities & Collabs"</span>{'\n'}
                <span className="text-[#00FFD1]">{'}'}</span>{';'}
              </pre>
            </div>
          </motion.div>

          {/* Status/Location Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.5 }}
            className="md:col-span-1 md:row-span-1 glass-panel p-6 rounded-3xl border border-slate-200 dark:border-[#1A2233] bg-[#00FFD1]/5 border-l-4 border-l-[#00FFD1] flex flex-col justify-center"
          >
             <div className="flex items-center gap-2 mb-2">
                 <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse"></span>
                 <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Focus</span>
             </div>
             <div className="font-space font-bold text-lg text-slate-800 dark:text-slate-100">
                Advanced ML Systems
             </div>
             <p className="text-sm font-sans text-slate-500 mt-2">Constantly expanding boundaries in AI & Web.</p>
          </motion.div>

        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="glass-panel p-6 rounded-3xl text-center border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117]">
             <AnimatedCounter end={5} suffix="+" title="Years Exp." />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }} className="glass-panel p-6 rounded-3xl text-center border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117]">
             <AnimatedCounter end={23} suffix="+" title="GitHub Repos" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="glass-panel p-6 rounded-3xl text-center border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117]">
             <AnimatedCounter end={5} title="Certificates" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.9 }} className="glass-panel p-6 rounded-3xl text-center border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117] flex flex-col justify-center items-center">
             <div className="text-3xl md:text-5xl font-space font-bold text-[#00FFD1] mb-1 md:mb-2 text-center">∞</div>
             <div className="text-xs md:text-sm font-sans text-slate-600 dark:text-slate-400 font-medium text-center">Problems Solved</div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
