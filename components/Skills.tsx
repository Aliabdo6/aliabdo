'use client';
import { motion } from 'motion/react';
import { Code2, Database, Wrench, BarChart } from 'lucide-react';

const SKILLS = [
  {
    title: "Frontend Development",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "JavaScript", desc: "ES6+, Async, DOM" },
      { name: "TypeScript", desc: "Type safety, Interfaces" },
      { name: "React.js", desc: "Hooks, Context, Components" },
      { name: "Next.js", desc: "SSR, SSG, App Router" },
      { name: "Redux", desc: "State management" },
      { name: "HTML5", desc: "Semantic markup" },
      { name: "CSS3", desc: "Flexbox, Grid, Animations" },
      { name: "Tailwind CSS", desc: "Utility-first styling" },
    ]
  },
  {
    title: "Data & Machine Learning",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "Python", desc: "Data processing, Scripts" },
      { name: "NumPy", desc: "Numerical computing" },
      { name: "Pandas", desc: "Data manipulation" },
      { name: "scikit-learn", desc: "Classical ML pipelines" },
      { name: "TensorFlow", desc: "Deep learning models" },
      { name: "Keras", desc: "Neural networks" },
      { name: "Matplotlib", desc: "Static plotting" },
      { name: "Seaborn", desc: "Statistical visualization" },
    ]
  },
  {
    title: "Backend & DevOps",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "Node.js", desc: "Server-side JS" },
      { name: "Express.js", desc: "RESTful APIs" },
      { name: "MongoDB", desc: "NoSQL databases" },
      { name: "Firebase", desc: "Auth, Firestore, Hosting" },
      { name: "Docker", desc: "Containerization" },
      { name: "Kubernetes", desc: "Orchestration" },
      { name: "OpenShift", desc: "Enterprise Kubernetes" },
      { name: "GitHub", desc: "Version control" },
    ]
  },
  {
    title: "Core Competencies",
    icon: <BarChart className="w-6 h-6" />,
    skills: [
      { name: "Data Cleaning", desc: "Preprocessing" },
      { name: "EDA", desc: "Exploratory analysis" },
      { name: "Statistical Analysis", desc: "Hypothesis testing" },
      { name: "Predictive Modeling", desc: "Forecasting" },
      { name: "Data Visualization", desc: "Insights delivery" },
      { name: "REST APIs", desc: "Integration" },
      { name: "Agile", desc: "Scrum, Kanban" },
      { name: "CI/CD", desc: "Automated pipelines" },
    ]
  }
];

const ALL_SKILL_NAMES = SKILLS.flatMap(category => category.skills.map(s => s.name));

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-slate-50 dark:bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-4">
          <span className="text-slate-500 font-mono text-sm tracking-wider">{"// 02. SKILLS"}</span>
        </motion.div>
        
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-space font-bold text-slate-800 dark:text-slate-100 mb-16">
          My Technical Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="glass-panel p-8 rounded-2xl border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117] hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6 text-slate-800 dark:text-[#00FFD1] group-hover:text-[#7C3AED] transition-colors">
                <div className="p-3 rounded-lg bg-slate-100 dark:bg-[#1A2233]">
                  {category.icon}
                </div>
                <h3 className="text-xl font-space font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="relative group/tooltip">
                    <span className="inline-block px-3 py-1.5 rounded border border-slate-200 dark:border-[#1A2233] bg-slate-50 dark:bg-[#0A0E14] text-sm font-sans text-slate-600 dark:text-slate-300 hover:border-[#00FFD1] hover:text-[#00FFD1] transition-colors cursor-default">
                      {skill.name}
                    </span>
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 dark:bg-[#1A2233] text-white dark:text-slate-200 text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 font-sans shadow-xl">
                      {skill.desc}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 dark:bg-[#1A2233] rotate-45"></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap py-4 border-y border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117]">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 dark:from-[#080B10] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 dark:from-[#080B10] to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-marquee items-center min-w-full">
          {/* Double the array to make seamless sliding */}
          {[...ALL_SKILL_NAMES, ...ALL_SKILL_NAMES].map((name, idx) => (
            <div key={`${name}-${idx}`} className="mx-6 flex items-center justify-center gap-4 group">
               <span className="text-[#00FFD1] font-mono text-lg opacity-50">+</span>
               <span className="text-xl md:text-3xl font-space font-bold text-slate-400 dark:text-slate-600 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-default">
                 {name}
               </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
