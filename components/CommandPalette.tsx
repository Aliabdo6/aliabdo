'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Home, FolderOpen, User, Mail, SunMoon, Code, Download, Terminal } from 'lucide-react';

const commands = [
  { id: 'home', title: 'Go Home', icon: Home, action: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }), hint: 'G H' },
  { id: 'projects', title: 'Go to Projects', icon: FolderOpen, action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), hint: 'G P' },
  { id: 'about', title: 'Go to About', icon: User, action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), hint: 'G A' },
  { id: 'contact', title: 'Go to Contact', icon: Mail, action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), hint: 'G C' },
  { id: 'terminal', title: 'Interactive Terminal', icon: Terminal, action: () => document.getElementById('terminal')?.scrollIntoView({ behavior: 'smooth' }), hint: 'T T' },
  { id: 'github', title: 'Open GitHub', icon: Code, action: () => window.open('https://github.com/Aliabdo6', '_blank'), hint: '' },
  { id: 'theme', title: 'Toggle Theme', icon: SunMoon, action: () => document.documentElement.classList.toggle('dark'), hint: 'T' },
];

export default function CommandPalette({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (v: boolean) => void }) {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCommands = commands.filter(c => c.title.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSearch('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < filteredCommands.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          setIsOpen(false);
        }
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-lg z-[101] p-4"
          >
            <div className="bg-[#0D1117] border border-[#1A2233] rounded-xl shadow-2xl overflow-hidden flex flex-col glow-border">
              <div className="flex items-center px-4 border-b border-[#1A2233]">
                <Search className="w-5 h-5 text-slate-400" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={e => { setSearch(e.target.value); setSelectedIndex(0); }}
                  className="w-full bg-transparent border-none outline-none py-4 px-3 text-slate-200 placeholder-slate-500 font-sans"
                />
                <div className="text-xs text-slate-500 border border-[#1A2233] px-1.5 py-0.5 rounded font-mono">ESC</div>
              </div>
              <div className="max-h-80 overflow-y-auto py-2">
                {filteredCommands.length === 0 ? (
                  <div className="px-6 py-8 text-center text-slate-500 font-mono text-sm">No commands found.</div>
                ) : (
                  filteredCommands.map((cmd, index) => (
                    <div
                      key={cmd.id}
                      onClick={() => { cmd.action(); setIsOpen(false); }}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex items-center justify-between px-4 py-3 cursor-pointer mx-2 rounded-lg transition-colors ${
                        index === selectedIndex ? 'bg-[#00FFD1]/10 text-[#00FFD1]' : 'text-slate-300 hover:bg-[#1A2233]/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <cmd.icon className={`w-4 h-4 ${index === selectedIndex ? 'text-[#00FFD1]' : 'text-slate-400'}`} />
                        <span className="font-sans text-sm">{cmd.title}</span>
                      </div>
                      {cmd.hint && (
                        <div className="flex gap-1">
                          {cmd.hint.split(' ').map((key, i) => (
                            <span key={i} className="text-[10px] font-mono border border-[#1A2233] bg-[#0A0E14] px-1.5 py-[1px] rounded text-slate-400">
                              {key}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
