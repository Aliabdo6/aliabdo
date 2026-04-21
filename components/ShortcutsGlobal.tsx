'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CommandPalette from './CommandPalette';
import MatrixRain from './MatrixRain';
import { Terminal } from 'lucide-react';

export default function ShortcutsGlobal() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [matrixActive, setMatrixActive] = useState(false);

  useEffect(() => {
    let keyBuffer: string[] = [];
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if inside an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      // Konami
      keyBuffer.push(e.key);
      if (keyBuffer.length > konamiCode.length) keyBuffer.shift();
      if (keyBuffer.join(',') === konamiCode.join(',')) {
        setMatrixActive(true);
        keyBuffer = [];
        return;
      }

      // Command Palette
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen(true);
      }
      if (e.key === '/') {
        e.preventDefault();
        setPaletteOpen(true);
      }

      // Shortcuts Modal
      if (e.key === '?') {
        setModalOpen(true);
      }

      // Single character commands (if modal.palette not open)
      if (!paletteOpen && !modalOpen) {
        if (e.key.toLowerCase() === 't') {
          document.documentElement.classList.toggle('dark');
        }
        if (e.key.toLowerCase() === 'r') {
          setMatrixActive(true);
        }
      }

      // Sequence navigation
      if (keyBuffer.length >= 2) {
        const seq = keyBuffer.slice(-2).join('').toLowerCase();
        if (seq === 'gh') { document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); keyBuffer = []; }
        else if (seq === 'gp') { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); keyBuffer = []; }
        else if (seq === 'ga') { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); keyBuffer = []; }
        else if (seq === 'gc') { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); keyBuffer = []; }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paletteOpen, modalOpen]);

  return (
    <>
      <CommandPalette isOpen={paletteOpen} setIsOpen={setPaletteOpen} />
      <MatrixRain active={matrixActive} onClose={() => setMatrixActive(false)} />
      
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              onClick={e => e.stopPropagation()}
              className="bg-[#0D1117] border border-[#1A2233] p-6 rounded-xl max-w-md w-full shadow-2xl relative"
            >
              <h2 className="text-xl font-space font-bold text-slate-100 flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-[#00FFD1]" /> Keyboard Shortcuts
              </h2>
              
              <div className="space-y-3 font-sans text-sm text-slate-300">
                <div className="flex justify-between items-center py-2 border-b border-[#1A2233]">
                  <span>Command Palette</span>
                  <span className="font-mono bg-[#1A2233] px-2 py-1 rounded text-xs">⌘K / Ctrl+K / /</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#1A2233]">
                  <span>Toggle Theme</span>
                  <span className="font-mono bg-[#1A2233] px-2 py-1 rounded text-xs">T</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#1A2233]">
                  <span>Trigger Easter Egg</span>
                  <span className="font-mono bg-[#1A2233] px-2 py-1 rounded text-xs">R</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#1A2233]">
                  <span>Go to Sections</span>
                  <span className="font-mono bg-[#1A2233] px-2 py-1 rounded text-xs">G then H/A/P/C</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#1A2233]">
                  <span>Konami Code</span>
                  <span className="font-mono bg-[#1A2233] px-2 py-1 rounded text-xs">↑ ↑ ↓ ↓ ← → ← → B A</span>
                </div>
              </div>

              <div className="mt-6 text-center text-xs text-slate-500 font-mono">
                Press Esc or click outside to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
