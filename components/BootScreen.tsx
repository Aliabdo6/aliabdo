'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function BootScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [textStage, setTextStage] = useState(0);

  useEffect(() => {
    // Stage 1
    const t1 = setTimeout(() => setTextStage(1), 500);
    // Stage 2
    const t2 = setTimeout(() => setTextStage(2), 1200);
    // Stage 3
    const t3 = setTimeout(() => setTextStage(3), 1800);
    // Dissolve
    const t4 = setTimeout(() => setIsVisible(false), 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#05080f] flex flex-col items-center justify-center font-mono text-[#00FFD1]"
        >
          {/* Scanline overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_51%)] bg-[length:100%_4px]"></div>
          
          <div className="text-left max-w-sm w-full p-6 relative z-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2">
              ALI_ABDO.OS [Version 10.0.19045.3570]
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6">
              (c) Ali Abdo Corporation. All rights reserved.
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: textStage >= 1 ? 1 : 0 }} className="mb-1 text-slate-400">
              {'>'} Booting primary modules...
            </motion.div>
            
            {textStage >= 1 && (
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: "100%" }} 
                transition={{ duration: 0.5 }}
                className="h-1 bg-[#00FFD1] mb-2" 
              />
            )}

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: textStage >= 2 ? 1 : 0 }} className="mb-1 text-slate-400">
              {'>'} Decrypting portfolio layout... OK.
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: textStage >= 3 ? 1 : 0 }} className="mt-4 text-[#FF4D6D] font-bold animate-pulse">
              {'>'} ACCESS GRANTED.
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
