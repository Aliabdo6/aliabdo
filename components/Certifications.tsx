'use client';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';

const CERTS = [
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford University & DeepLearning.AI",
    link: "https://coursera.org/verify/specialization/BZ8YXHADCKPK",
    icon: "🧠"
  },
  {
    title: "Data Analyst Professional Certificate",
    issuer: "DataCamp",
    link: "https://www.datacamp.com/certificate/DA0023219375492",
    icon: "📊"
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/E6PP9FUKV7VR",
    icon: "💻"
  },
  {
    title: "Front-End Web Developer Nanodegree",
    issuer: "Udacity",
    link: "https://www.udacity.com/certificate/e/0bdb1d5e-7174-11ed-bf41-0fa5635dc192",
    icon: "🎓"
  },
  {
    title: "IBM Back-End JavaScript Developer",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/BXBP7NQXAHRE",
    icon: "⚙️"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/5 via-transparent to-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-4 text-center">
          <span className="text-slate-500 font-mono text-sm tracking-wider">{"// 07. CERTIFICATIONS"}</span>
        </motion.div>
        
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-space font-bold text-slate-800 dark:text-slate-100 mb-20 text-center">
          Proof of Mastery
        </motion.h2>

        <div className="relative max-w-4xl mx-auto perspective-1000">
          {/* Vertical Line */}
          <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#1A2233] to-transparent hidden md:block"></div>

          <div className="space-y-16">
            {CERTS.map((cert, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center justify-between group ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="w-full md:w-[45%]"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-slate-50 dark:border-[#080B10] bg-[#1A2233] hidden md:flex items-center justify-center z-10 transition-colors shadow-[0_0_15px_rgba(0,255,209,0)] group-hover:shadow-[0_0_15px_rgba(0,255,209,0.5)] group-hover:bg-[#00FFD1]">
                    <div className="w-3 h-3 rounded-full bg-slate-400 group-hover:bg-[#080B10] transition-colors"></div>
                  </div>

                  <div className="w-full md:w-[45%] relative">
                    <TiltCard glareColor={isEven ? "rgba(124, 58, 237, 0.1)" : "rgba(0, 255, 209, 0.1)"}>
                      <div className={`glass-panel p-8 rounded-2xl border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117] relative ${isEven ? 'border-r-[#7C3AED]' : 'border-l-[#00FFD1]'} border-l-4 md:border-l-[1px] md:border-r-[1px] ${isEven ? 'md:border-r-4' : 'md:border-l-4'}`}>
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                            <span className="text-8xl">{cert.icon}</span>
                        </div>
                        <div className="text-4xl mb-6 relative z-10">{cert.icon}</div>
                        <h3 className="text-xl font-space font-bold text-slate-800 dark:text-slate-100 mb-2 relative z-10 group-hover:text-gradient transition-all">{cert.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-sans text-sm mb-8 relative z-10">{cert.issuer}</p>
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="relative z-[50] inline-flex items-center gap-2 text-sm font-mono text-[#00FFD1] px-4 py-2 rounded-full border border-[#00FFD1]/30 hover:bg-[#00FFD1]/10 transition-all font-bold tracking-wider"
                        >
                          Verify Certificate <ExternalLink className="w-3.5 h-3.5" />
                        </a>
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
