'use client';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'terminal', label: 'Terminal' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' }
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observers = new Map();
    
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // If a section takes up > 50% of the viewport, it's active
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    });

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
      {SECTIONS.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group relative flex items-center justify-end"
          aria-label={`Scroll to ${section.label}`}
        >
          <span className="absolute right-8 px-2 py-1 bg-[#1A2233] text-slate-200 text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {section.label}
          </span>
          <motion.div
            layout
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-[#00FFD1] shadow-[0_0_10px_#00FFD1] scale-125'
                : 'bg-slate-400 dark:bg-slate-700 hover:bg-slate-500 dark:hover:bg-slate-500'
            }`}
          />
        </a>
      ))}
    </div>
  );
}
