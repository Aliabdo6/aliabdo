'use client';
import { Github, Linkedin, MessageCircle, ArrowUp, Music } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#080B10] pt-16 pb-8 overflow-hidden z-20">
      {/* Animated gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00FFD1] via-[#7C3AED] to-[#FF4D6D] opacity-70"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          <div className="font-mono text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100 relative group cursor-pointer" onClick={scrollToTop}>
            <span className="text-[#00FFD1]">&lt;</span>
            Ali Abdo
            <span className="text-[#00FFD1]"> /&gt;</span>
          </div>

          {/* Now Playing Widget */}
          <div className="flex items-center gap-3 px-4 py-2 border border-slate-200 dark:border-[#1A2233] bg-slate-50 dark:bg-[#0A0E14] rounded-full shadow-inner group w-full md:w-auto overflow-hidden">
            <Music className="w-4 h-4 text-[#00FFD1] group-hover:animate-bounce" />
            <div className="flex gap-1 items-end h-3 group-hover:opacity-100 opacity-60 transition-opacity">
              <span className="w-0.5 h-full bg-[#00FFD1] animate-[pulse_1s_ease-in-out_infinite]"></span>
              <span className="w-0.5 h-1/2 bg-[#00FFD1] animate-[pulse_1.5s_ease-in-out_infinite]"></span>
              <span className="w-0.5 h-full bg-[#00FFD1] animate-[pulse_0.8s_ease-in-out_infinite]"></span>
              <span className="w-0.5 h-2/3 bg-[#00FFD1] animate-[pulse_1.2s_ease-in-out_infinite]"></span>
            </div>
            <div className="flex flex-col max-w-[150px] overflow-hidden ml-1">
               <span className="text-[10px] font-mono text-slate-400 capitalize -mb-1">Currently Coding To</span>
               <span className="text-xs font-sans text-slate-700 dark:text-slate-300 whitespace-nowrap truncate animate-marquee hover:animate-none">Lofi Synthwave Mix 24/7</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Aliabdo6" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00FFD1] transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/aliabdo6" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#7C3AED] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://wa.me/201090561644" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00FFD1] transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <button onClick={scrollToTop} className="hidden md:flex w-8 h-8 rounded-full border border-slate-300 dark:border-[#1A2233] items-center justify-center text-slate-400 hover:text-[#00FFD1] hover:border-[#00FFD1] ml-4 transition-colors">
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-200 dark:border-[#1A2233]/50 pt-8 mt-8 gap-4">
          <p className="text-xs font-mono text-slate-500 dark:text-slate-500">
            Press <kbd className="border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-[10px]">?</kbd> for keyboard shortcuts · <kbd className="border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-[10px]">⌘</kbd> <kbd className="border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-[10px]">K</kbd> for command palette
          </p>
          <div className="text-slate-500 font-sans text-xs text-center">
            Designed & Built by Ali Abdo · {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
