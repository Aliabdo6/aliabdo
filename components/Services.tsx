'use client';
import { motion } from 'motion/react';
import { Code2, Database, BrainCircuit } from 'lucide-react';
import TiltCard from './TiltCard';

const SERVICES = [
  {
    id: 1,
    title: "Front-End Architecture",
    icon: <Code2 className="w-8 h-8 text-[#00FFD1]" />,
    desc: "I build fast, responsive, and visually stunning web applications from scratch tailored to your business needs.",
    features: ["Next.js & React SPA", "Immersive UI/UX", "Performance Optimization", "Responsive Design"],
    accent: "hover:border-[#00FFD1]/50 group-hover:shadow-[0_0_30px_rgba(0,255,209,0.15)] glow-border"
  },
  {
    id: 2,
    title: "Data Analytics & Engineering",
    icon: <Database className="w-8 h-8 text-[#7C3AED]" />,
    desc: "Transforming raw data into actionable insights. I design pipelines and build interactive dashboards to guide your strategy.",
    features: ["Data Pipelines (ETL)", "SQL Optimization", "Interactive Dashboards", "Statistical Analysis"],
    accent: "hover:border-[#7C3AED]/50 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] glow-border"
  },
  {
    id: 3,
    title: "Machine Learning Solutions",
    icon: <BrainCircuit className="w-8 h-8 text-[#FF4D6D]" />,
    desc: "Leveraging predictive models and algorithms to solve complex problems and automate key decisions for your product.",
    features: ["Predictive Modeling", "NLP & Computer Vision", "Model Deployment", "Data Preprocessing"],
    accent: "hover:border-[#FF4D6D]/50 group-hover:shadow-[0_0_30px_rgba(255,77,109,0.15)] glow-border"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative bg-slate-50 dark:bg-[#0A0E14] border-t border-slate-200 dark:border-[#1A2233]">
      <div className="container mx-auto px-6 max-w-7xl">
         <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-4">
          <span className="text-slate-500 font-mono text-sm tracking-wider">{"// 03. SERVICES"}</span>
        </motion.div>
        
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-space font-bold text-slate-800 dark:text-slate-100 mb-16">
          What I Can Do For You
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="h-full"
            >
              <TiltCard className="h-full group">
                <div className={`glass-panel p-8 rounded-3xl border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117]/80 h-full flex flex-col relative overflow-hidden transition-all duration-500 ${service.accent}`}>
                  <div className="mb-6 p-4 bg-slate-100 dark:bg-[#1A2233] rounded-2xl inline-block w-fit group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-space font-bold text-slate-800 dark:text-slate-100 mb-4">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-sans text-sm leading-relaxed mb-6 flex-1">
                    {service.desc}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-[#00FFD1] transition-colors"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
