'use client';
import { motion } from 'motion/react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import TiltCard from './TiltCard';

const INSIGHTS = [
  {
    id: 1,
    title: "Why Next.js App Router is the Future of Web Apps",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    tag: "Frontend",
    desc: "A deep dive into Server Components, streaming, and how the paradigm shift in Next.js 15 affects performance and DX.",
    link: "https://medium.com",
    gradient: "from-[#00FFD1]/20 to-transparent"
  },
  {
    id: 2,
    title: "Building Scalable ML Pipelines with FastAPI & Docker",
    date: "Aug 04, 2024",
    readTime: "8 min read",
    tag: "Machine Learning",
    desc: "How to decouple your model inference logic from your main web servers for better scalability and independent deployments.",
    link: "https://medium.com",
    gradient: "from-[#7C3AED]/20 to-transparent"
  },
  {
    id: 3,
    title: "The Art of Data Visualization: Dashboard Best Practices",
    date: "Jun 22, 2024",
    readTime: "6 min read",
    tag: "Data Analytics",
    desc: "Stop building confusing charts. Learn the psychological principles of color, layout, and hierarchy applied to modern Tableau dashboards.",
    link: "https://medium.com",
    gradient: "from-[#FF4D6D]/20 to-transparent"
  }
];

export default function Insights() {
  return (
    <section id="insights" className="py-32 relative bg-slate-50 dark:bg-[#0A0E14] border-y border-slate-200 dark:border-[#1A2233]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-4">
              <span className="text-slate-500 font-mono text-sm tracking-wider">{"// 09. INSIGHTS"}</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-space font-bold text-slate-800 dark:text-slate-100">
              Thoughts & Articles
            </motion.h2>
          </div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
             <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#0D1117] border border-slate-200 dark:border-[#1A2233] rounded-full text-slate-600 dark:text-slate-300 hover:text-[#00FFD1] hover:border-[#00FFD1]/50 transition-all group font-sans font-medium text-sm">
                <BookOpen className="w-4 h-4" />
                Read All Articles
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          {INSIGHTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="h-full"
            >
              <TiltCard className="h-full w-full group cursor-pointer" onClick={() => window.open(post.link, '_blank')}>
                <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117] h-full flex flex-col relative overflow-hidden transition-colors hover:border-[#00FFD1]/30">
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${post.gradient} rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="flex justify-between items-start mb-6">
                     <span className="text-xs font-mono px-3 py-1 bg-slate-100 dark:bg-[#1A2233] text-slate-500 rounded-full">{post.tag}</span>
                     <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#00FFD1] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  
                  <h3 className="text-xl font-space font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-[#00FFD1] transition-colors line-clamp-2">
                     {post.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 font-sans text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                     {post.desc}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-6 border-t border-slate-100 dark:border-[#1A2233]">
                     <span>{post.date}</span>
                     <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                        {post.readTime}
                     </div>
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
