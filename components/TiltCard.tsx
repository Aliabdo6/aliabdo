'use client';
import { useRef, useState, MouseEvent, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glareColor?: string;
}

export default function TiltCard({ 
  children, 
  className = '', 
  glareColor = 'rgba(0, 255, 209, 0.15)' 
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // High performance motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { damping: 30, stiffness: 400 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { damping: 30, stiffness: 400 });

  // Spring for moving the glare
  const glareX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), { damping: 20, stiffness: 200 });
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), { damping: 20, stiffness: 200 });
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative rounded-xl ${className}`}
    >
      {/* Glare effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden z-20"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <motion.div
          className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, ${glareColor}, transparent 50%)`,
          }}
        />
      </motion.div>
      
      {/* Content */}
      <div style={{ transform: 'translateZ(30px)' }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
}
