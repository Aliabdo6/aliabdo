'use client';
import Magnetic from '@/components/Magnetic';
import SystemStatus from '@/components/SystemStatus';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Github, Linkedin, MessageCircle } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const ROLES = [
  "Freelance Front-End Architect",
  "Freelance Data Engineer",
  "Freelance ML Engineer",
  "Next.js Consultant",
  "Problem Solver"
];

const DELAY = 2.4; // Account for boot screen

const TECH_BUBBLES = [
  "React", "Next.js", "TypeScript", "TailwindCSS", "Python", "TensorFlow", "Pandas", "PyTorch", "Kubernetes", "AWS", "Node.js", "Docker", "SQL", "GraphQL"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    // Only start typing animation after boot screen is done
    const initTimer = setTimeout(() => {
      let timer: NodeJS.Timeout;
      const currentRole = ROLES[roleIndex];
      if (isDeleting) {
        if (roleText.length > 0) {
          timer = setTimeout(() => setRoleText(currentRole.substring(0, roleText.length - 1)), 50);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      } else {
        if (roleText.length < currentRole.length) {
          timer = setTimeout(() => setRoleText(currentRole.substring(0, roleText.length + 1)), 100);
        } else {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        }
      }
      return () => clearTimeout(timer);
    }, DELAY * 1000);

    return () => clearTimeout(initTimer);
  }, [roleText, isDeleting, roleIndex]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden bg-slate-50 dark:bg-[#080B10]">
      
      {/* Animated 3D Floor Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-1000 z-0">
         <div className="absolute bottom-0 left-[-50%] w-[200%] h-[50vh] origin-bottom mask-radial-fade">
            <div className="w-full h-[200%] relative" style={{ transform: 'rotateX(75deg)' }}>
               {/* Grid Layer */}
               <div className="absolute inset-0 bg-grid-pattern opacity-50 dark:opacity-40 animate-grid-flow"></div>
            </div>
         </div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FFD1]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Floating System Status Widget */}
      <SystemStatus />

      {/* Floating Bubbles Marquee Header */}
      <div className="absolute top-[15%] left-0 w-full overflow-hidden pointer-events-none z-0 opacity-40">
         <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...TECH_BUBBLES, ...TECH_BUBBLES, ...TECH_BUBBLES].map((tech, idx) => (
                <span key={idx} className="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-black/50 text-slate-400 font-mono text-xs backdrop-blur-sm shadow-sm inline-block">
                    {tech}
                </span>
            ))}
         </div>
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-6 max-w-7xl relative z-10 pt-16">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: DELAY }}
            className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00FFD1]/30 bg-[#00FFD1]/10 text-xs font-mono text-[#00FFD1] shadow-[0_0_15px_rgba(0,255,209,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#00FFD1] animate-pulse"></span>
            ✦ Available for Opportunities ✦
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-space font-bold tracking-tighter text-slate-800 dark:text-white leading-[1.1] mb-6 drop-shadow-lg">
            <Magnetic>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: DELAY + 0.1 }} className="block hover:text-[#00FFD1] transition-colors cursor-default">Building Digital</motion.span>
            </Magnetic>
            <Magnetic>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: DELAY + 0.2 }} className="block text-gradient pb-2 cursor-default">Experiences That</motion.span>
            </Magnetic>
            <Magnetic>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: DELAY + 0.3 }} className="block hover:text-[#7C3AED] transition-colors cursor-default">Matter.</motion.span>
            </Magnetic>
          </h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: DELAY + 0.5 }} className="min-h-[3rem] mb-10 inline-flex items-center justify-center backdrop-blur-sm px-5 py-3 rounded-lg bg-white/5 dark:bg-black/20 border border-white/10 relative z-20">
            <span className="text-lg md:text-xl font-mono text-slate-700 dark:text-slate-300 flex items-center">
              <span className="text-[#00FFD1] mr-2">{'>'}</span> {roleText}
              <span className="animate-pulse inline-block w-2.5 h-6 bg-[#00FFD1] ml-2"></span>
            </span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: DELAY + 0.6 }} className="flex flex-col sm:flex-row gap-6 items-center mb-12">
            <Magnetic>
              <a href="#projects" className="px-8 py-4 bg-[#00FFD1] text-[#080B10] font-sans font-bold rounded-full hover:bg-[#00D1AB] shadow-[0_0_20px_rgba(0,255,209,0.3)] hover:shadow-[0_0_30px_rgba(0,255,209,0.5)] transition-all flex items-center gap-2">
                View My Work <ArrowDown className="w-4 h-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#" className="px-8 py-4 border border-slate-300 dark:border-slate-700 font-sans font-medium rounded-full hover:bg-slate-100 dark:hover:bg-[#1A2233] transition-colors relative z-10 glass-panel hover:border-[#7C3AED] group">
                <span className="group-hover:text-gradient transition-all">Download CV</span>
              </a>
            </Magnetic>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: DELAY + 0.7 }} className="flex gap-6 z-10">
            <Magnetic>
              <a href="https://github.com/Aliabdo6" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-[#1A2233] rounded-full text-slate-600 dark:text-slate-300 hover:text-[#00FFD1] shadow-lg hover:shadow-[0_0_20px_rgba(0,255,209,0.5)] border border-slate-200 dark:border-transparent transition-all block">
                <Github className="w-5 h-5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://www.linkedin.com/in/aliabdo6/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-[#1A2233] rounded-full text-slate-600 dark:text-slate-300 hover:text-[#7C3AED] shadow-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] border border-slate-200 dark:border-transparent transition-all block">
                <Linkedin className="w-5 h-5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://wa.me/201090561644" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-[#1A2233] rounded-full text-slate-600 dark:text-slate-300 hover:text-[#00FFD1] shadow-lg hover:shadow-[0_0_20px_rgba(0,255,209,0.5)] border border-slate-200 dark:border-transparent transition-all block">
                <MessageCircle className="w-5 h-5" />
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: DELAY + 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest shadow-sm px-2 py-1 bg-white/5 backdrop-blur-md rounded border border-white/10">Scroll</span>
        <ArrowDown className="w-4 h-4 text-[#00FFD1] animate-bounce" />
      </motion.div>
    </section>
  );
}
