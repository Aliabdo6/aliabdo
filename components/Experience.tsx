'use client';
import { motion } from 'motion/react';
import TiltCard from './TiltCard';

const EXPERIENCES = [
  {
    id: 1,
    role: "Freelance Front-End Architect",
    company: "Client Projects",
    period: "2023 - Present",
    desc: "Partnering with global clients to architect and build high-performance web applications. Delivering bespoke Next.js and React solutions with a focus on core web vitals and immersive UI/UX.",
    tech: ["Next.js 15", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    id: 2,
    role: "Freelance ML Engineer",
    company: "Independent Consultant",
    period: "2021 - 2023",
    desc: "Developed custom predictive models and NLP solutions for dynamic startups. Designed end-to-end ML pipelines and integrated them into existing company infrastructures via FastAPI.",
    tech: ["Python", "TensorFlow", "FastAPI", "Docker"],
  },
  {
    id: 3,
    role: "Data Analyst Consultant",
    company: "Upwork & Direct Clients",
    period: "2019 - 2021",
    desc: "Helped small-to-medium businesses make sense of their data. Automated daily reporting pipelines using Python and SQL, and built interactive dashboards in Tableau.",
    tech: ["SQL", "Pandas", "Tableau", "Python"],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative bg-slate-50 dark:bg-[#0A0E14] border-t border-slate-200 dark:border-[#1A2233]">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-4">
          <span className="text-slate-500 font-mono text-sm tracking-wider">{"// 05. EXPERIENCE"}</span>
        </motion.div>
        
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-space font-bold text-slate-800 dark:text-slate-100 mb-20">
          Career Timeline
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00FFD1] via-[#7C3AED] to-transparent opacity-30"></div>

          <div className="space-y-16">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center justify-between group ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Empty half for desktop layout */}
                  <div className="hidden md:block w-[45%]"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[15px] md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-slate-50 dark:border-[#0A0E14] bg-[#1A2233] flex items-center justify-center z-10 transition-colors shadow-[0_0_15px_rgba(124,58,237,0)] group-hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] group-hover:bg-[#7C3AED]">
                    <div className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-white transition-colors"></div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full pl-14 md:pl-0 md:w-[45%] relative perspective-1000">
                    <TiltCard glareColor={isEven ? "rgba(0, 255, 209, 0.1)" : "rgba(124, 58, 237, 0.1)"}>
                      <div className={`glass-panel p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117]/80 relative hover:border-[#7C3AED]/50 transition-colors glow-border`}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <h3 className="text-xl md:text-2xl font-space font-bold text-slate-800 dark:text-slate-100">{exp.role}</h3>
                            <span className="text-sm font-mono text-[#00FFD1] bg-[#00FFD1]/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">{exp.period}</span>
                        </div>
                        <h4 className="text-lg font-sans font-medium text-slate-600 dark:text-slate-300 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></span>
                            {exp.company}
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 font-sans text-sm mb-6 leading-relaxed">
                            {exp.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech) => (
                                <span key={tech} className="text-xs font-mono text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-[#1A2233] px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
