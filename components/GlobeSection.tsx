'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Globe2, Code, Zap } from 'lucide-react';

export default function GlobeSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="globe" className="py-32 relative overflow-hidden bg-slate-50 dark:bg-[#0A0E14] border-t border-slate-200 dark:border-[#1A2233]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Stats/Text */}
        <div className="md:w-1/2 space-y-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-slate-500 font-mono text-sm tracking-wider">{"// GLOBAL REACH"}</span>
          </motion.div>
          
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-space font-bold text-slate-800 dark:text-slate-100">
            Delivering Code <br className="hidden md:block" />
            <span className="text-gradient">Across Borders.</span>
          </motion.h2>
          
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed max-w-md">
            I partner with forward-thinking businesses and visionary founders remotely. From Silicon Valley startups to European agencies, I engineer scalable frontends and powerful data models that transcend timezones.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex gap-8 pt-4 border-t border-slate-200 dark:border-[#1A2233]">
             <div className="space-y-1">
                <p className="text-3xl font-space font-bold text-slate-800 dark:text-slate-200">100%</p>
                <p className="text-sm font-mono text-slate-500">Remote Success</p>
             </div>
             <div className="space-y-1">
                <p className="text-3xl font-space font-bold text-slate-800 dark:text-slate-200">24/7</p>
                <p className="text-sm font-mono text-slate-500">Async Workflow</p>
             </div>
          </motion.div>
        </div>

        {/* Right Side: Abstract 3D/CSS Globe Representation */}
        <motion.div style={{ scale, opacity }} className="md:w-1/2 relative flex justify-center perspective-1000">
           <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">
              
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[80px]" />
              
              <motion.div style={{ rotate }} className="relative w-full h-full rounded-full border border-slate-300 dark:border-[#1A2233] animate-[spin_40s_linear_infinite] glow-border flex items-center justify-center">
                 {/* Longitudes */}
                 <div className="absolute inset-0 rounded-full border border-slate-200/50 dark:border-white/5 rotate-y-[45deg] scale-105" />
                 <div className="absolute inset-0 rounded-full border border-slate-200/50 dark:border-white/5 rotate-y-[90deg] scale-105" />
                 <div className="absolute inset-0 rounded-full border border-slate-200/50 dark:border-white/5 rotate-y-[135deg] scale-105" />
                 
                 {/* Latitudes */}
                 <div className="absolute inset-x-0 top-1/4 h-1/2 rounded-full border border-slate-200/50 dark:border-white/5 rotate-x-[75deg] scale-105" />
                 
                 <div className="w-48 h-48 rounded-full border-4 border-white/10 flex items-center justify-center relative overflow-hidden backdrop-blur-md bg-white/5 shadow-2xl">
                    <Globe2 className="w-20 h-20 text-[#00FFD1] animate-pulse" />
                 </div>
                 
                 {/* Floating Satellites Elements */}
                 <div className="absolute w-8 h-8 rounded-lg bg-[#7C3AED] shadow-[0_0_15px_#7C3AED] flex items-center justify-center top-0 -left-4 animate-float">
                    <Code className="w-4 h-4 text-white" />
                 </div>
                 <div className="absolute w-8 h-8 rounded-lg bg-[#FF4D6D] shadow-[0_0_15px_#FF4D6D] flex items-center justify-center bottom-10 -right-2 animate-float" style={{ animationDelay: '1s' }}>
                    <Zap className="w-4 h-4 text-white" />
                 </div>
              </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
