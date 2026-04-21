'use client';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import TiltCard from './TiltCard';

const TESTIMONIALS = [
  {
    name: "Ahmed Hassan",
    role: "Startup Founder",
    text: "Working with Ali was fantastic. He took our rough ideas and transformed them into a beautiful, high-performance web app. Highly recommend him for freelance projects!",
    gradient: "from-[#00FFD1] to-[#00D1AB]"
  },
  {
    name: "Sarah Jenkins",
    role: "E-commerce Director",
    text: "Ali built a custom predictive model for our inventory that saved us countless hours. A true professional who communicates perfectly with his clients.",
    gradient: "from-[#7C3AED] to-[#5B21B6]"
  },
  {
    name: "Omar Tarek",
    role: "Agency Owner",
    text: "We hired Ali to help us fix performance bottlenecks for a key client. He delivered exactly what we needed ahead of schedule. An absolute lifesaver.",
    gradient: "from-[#FF4D6D] to-[#E11D48]"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 relative bg-slate-50 dark:bg-[#080B10]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-4 text-center">
          <span className="text-slate-500 font-mono text-sm tracking-wider">{"// 09. ENDORSEMENTS"}</span>
        </motion.div>
        
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-space font-bold text-slate-800 dark:text-slate-100 mb-16 text-center">
          What Others Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="h-full"
            >
              <TiltCard className="h-full group">
                <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117] h-full flex flex-col relative overflow-hidden shine-effect">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${t.gradient} opacity-50`}></div>
                  <Quote className="w-10 h-10 text-slate-200 dark:text-[#1A2233] mb-6 transform group-hover:-translate-y-2 group-hover:scale-110 transition-transform duration-500" />
                  <p className="text-slate-600 dark:text-slate-300 font-sans text-sm md:text-base leading-relaxed mb-8 flex-1 italic">
                    "{t.text}"
                  </p>
                  <div>
                    <h4 className="font-space font-bold text-slate-800 dark:text-slate-100">{t.name}</h4>
                    <span className="font-mono text-xs text-slate-400">{t.role}</span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
