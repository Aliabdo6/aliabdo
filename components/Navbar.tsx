'use client';
import { useState, useEffect } from 'react';
import { Github, SunMoon, Command, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => document.documentElement.classList.toggle('dark');
  const openCmd = () => { window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true })); };

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <a href="#home" className="font-mono text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100 relative group">
            <span className="text-[#00FFD1] group-hover:text-[#FF4D6D] transition-colors">&lt;</span>
            Ali Abdo
            <span className="text-[#00FFD1] group-hover:text-[#FF4D6D] transition-colors"> /&gt;</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 font-sans text-sm font-medium">
              {links.map((l) => (
                <a key={l.name} href={l.href} className="text-slate-600 dark:text-slate-300 hover:text-[#00FFD1] transition-colors relative">
                  {l.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 pl-6 border-l border-slate-300 dark:border-[#1A2233]">
              <button onClick={openCmd} className="flex items-center gap-2 text-xs font-mono bg-slate-200 dark:bg-[#1A2233] text-slate-600 dark:text-slate-300 px-2.5 py-1.5 rounded-md hover:bg-slate-300 dark:hover:bg-[#00FFD1]/20 transition-colors" aria-label="Open Command Palette">
                <Command className="w-3.5 h-3.5" /> K
              </button>
              <button onClick={toggleTheme} className="text-slate-600 dark:text-slate-300 hover:text-[#00FFD1] transition-colors" aria-label="Toggle Theme">
                <SunMoon className="w-5 h-5" />
              </button>
              <a href="https://github.com/Aliabdo6" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-[#00FFD1] transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="text-slate-600 dark:text-slate-300">
              <SunMoon className="w-5 h-5" />
            </button>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="text-slate-600 dark:text-slate-300">
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-30 bg-[#080B10]/95 backdrop-blur-xl transition-transform duration-300 ${mobileMenu ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl font-space pt-20">
          {links.map((l) => (
            <a key={l.name} href={l.href} onClick={() => setMobileMenu(false)} className="text-slate-200 hover:text-[#00FFD1]">
              {l.name}
            </a>
          ))}
          <a href="https://github.com/Aliabdo6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 mt-4">
            <Github className="w-5 h-5" /> GitHub
          </a>
        </div>
      </div>
    </>
  );
}
