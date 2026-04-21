'use client';
import { motion } from 'motion/react';
import { Search, PenTool, Terminal, Rocket } from 'lucide-react';

const WORKFLOW_STEPS = [
  {
    id: 1,
    title: "Discovery & Scope",
    icon: <Search className="w-6 h-6 text-[#00FFD1]" />,
    desc: "We start with a deep dive into your business goals, data requirements, and technical constraints to outline a precise project scope.",
    color: "bg-[#00FFD1]"
  },
  {
    id: 2,
    title: "Architecture & Design",
    icon: <PenTool className="w-6 h-6 text-[#7C3AED]" />,
    desc: "I wireframe the UI/UX and design the underlying data pipelines or ML architecture. You get a clear blueprint before a single line of code is written.",
    color: "bg-[#7C3AED]"
  },
  {
    id: 3,
    title: "Agile Development",
    icon: <Terminal className="w-6 h-6 text-[#FF4D6D]" />,
    desc: "I build the front-end interfaces and train the models iteratively. You get regular updates and stagings to test and provide feedback.",
    color: "bg-[#FF4D6D]"
  },
  {
    id: 4,
    title: "Delivery & Handoff",
    icon: <Rocket className="w-6 h-6 text-[#EAB308]" />,
    desc: "Final optimization, strict testing, and safe deployment. I provide complete documentation and source code handoff for your team.",
    color: "bg-[#EAB308]"
  }
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-32 relative bg-slate-50 dark:bg-[#0A0E14] border-t border-slate-200 dark:border-[#1A2233] overflow-hidden">
      {/* Background connector line for desktop */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#1A2233] to-transparent hidden md:block -translate-y-1/2 z-0"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-slate-500 font-mono text-sm tracking-wider">{"// 04. HOW I WORK"}</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-space font-bold text-slate-800 dark:text-slate-100 mt-4">
            The Freelance Process
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
          {WORKFLOW_STEPS.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.15 }}
              className="relative"
            >
              {/* Connector dot */}
              <div className="hidden md:flex absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0D1117] border-2 border-[#1A2233] z-10 items-center justify-center">
                 <div className={`w-1.5 h-1.5 rounded-full ${step.color}`}></div>
              </div>

              <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117] relative hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col group shadow-xl">
                 <div className="absolute -top-6 -left-6 text-9xl font-space font-bold text-slate-100 dark:text-white/[0.02] z-0 pointer-events-none group-hover:text-white/[0.04] transition-colors">
                    {step.id}
                 </div>
                 
                 <div className="relative z-10 flex-1 flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-[#1A2233] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-space font-bold text-slate-800 dark:text-slate-100 mb-4">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 font-sans text-sm leading-relaxed">
                      {step.desc}
                    </p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
