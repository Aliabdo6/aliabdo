'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursor = useRef({ x: 0, y: 0 });
  const targetCursor = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const onMouseMove = (e: MouseEvent) => {
      targetCursor.current.x = e.clientX;
      targetCursor.current.y = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        isHovering.current = true;
      } else {
        isHovering.current = false;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    // Initial position
    cursor.current.x = window.innerWidth / 2;
    cursor.current.y = window.innerHeight / 2;
    targetCursor.current.x = window.innerWidth / 2;
    targetCursor.current.y = window.innerHeight / 2;

    let animFrame: number;

    const render = () => {
      // Lerp
      cursor.current.x += (targetCursor.current.x - cursor.current.x) * 0.15;
      cursor.current.y += (targetCursor.current.y - cursor.current.y) * 0.15;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;
      
      // Interpolate color from cyan (#00FFD1) to violet (#7C3AED)
      const r = Math.round(0 + (124 - 0) * scrollPercent);
      const g = Math.round(255 + (58 - 255) * scrollPercent);
      const b = Math.round(209 + (237 - 209) * scrollPercent);

      // Ambient Spotlight Glow
      const glowGradient = ctx.createRadialGradient(
        cursor.current.x, cursor.current.y, 0,
        cursor.current.x, cursor.current.y, 450
      );
      glowGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.04)`);
      glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(cursor.current.x, cursor.current.y, 450, 0, Math.PI * 2);
      ctx.fill();

      // Draw dot
      ctx.beginPath();
      ctx.arc(targetCursor.current.x, targetCursor.current.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#00FFD1';
      ctx.fill();

      // Draw outer ring
      ctx.beginPath();
      const radius = isHovering.current ? 24 : 12;
      ctx.arc(cursor.current.x, cursor.current.y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.6)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      animFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return <canvas ref={canvasRef} id="cursor-canvas" className="hidden lg:block pointer-events-none fixed inset-0 z-[9999]" />;
}
