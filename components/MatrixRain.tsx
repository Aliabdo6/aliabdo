'use client';
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function MatrixRain({ active, onClose }: { active: boolean; onClose: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~'.split('');
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) drops[x] = 1;

    let animFrame: number;

    const draw = () => {
      ctx.fillStyle = 'rgba(8, 11, 16, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00FFD1';
      ctx.font = fontSize + 'px JetBrains Mono';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animFrame = requestAnimationFrame(draw);
    };

    draw();

    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      cancelAnimationFrame(animFrame);
      clearTimeout(timer);
    };
  }, [active, onClose]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-[#080B10] flex items-center justify-center pointer-events-none"
        >
          <canvas ref={canvasRef} className="absolute inset-0 z-0" />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { delay: 1 } }}
            className="z-10 bg-[#0D1117]/80 backdrop-blur border border-[#00FFD1] p-8 rounded-xl"
          >
            <p className="font-mono text-[#00FFD1] text-xl md:text-3xl text-center glow-border p-4">
              You found it. We should talk. 👾
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
