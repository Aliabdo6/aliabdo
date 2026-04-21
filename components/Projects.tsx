'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';

const PROJECTS = [
  {
    id: 1,
    title: "Social Media App",
    category: "Frontend",
    tech: ["Next.js", "TypeScript", "Tailwind", "Clerk Auth"],
    description: "Full social platform with user profiles, posts, comments, and likes.",
    links: [
      { label: "Live Demo", url: "https://next-social-app.vercel.app/", icon: <ExternalLink className="w-4 h-4" /> },
      { label: "GitHub", url: "https://github.com/Aliabdo6/next-social", icon: <Github className="w-4 h-4" /> }
    ],
    accent: "bg-[#00FFD1]",
    isRecent: true
  },
  {
    id: 2,
    title: "AI Article Summarizer",
    category: "Frontend/AI",
    tech: ["React.js", "OpenAI GPT-4", "JavaScript"],
    description: "Web app that summarizes articles and URLs using GPT-4. Smart, fast, beautiful.",
    links: [
      { label: "Live Demo", url: "https://summarizer-ai.netlify.app/", icon: <ExternalLink className="w-4 h-4" /> },
    ],
    accent: "bg-[#7C3AED]"
  },
  {
    id: 3,
    title: "Netflix Data Analysis",
    category: "Data Science",
    tech: ["Python", "Pandas", "DataCamp"],
    description: "Deep-dive analysis of Netflix movies & guest stars in 'The Office.'",
    links: [
      { label: "View Project", url: "https://app.datacamp.com/workspace/w/68a6e7d7-f9af-4793-9cb7-31c12eeaf911/edit", icon: <ExternalLink className="w-4 h-4" /> },
    ],
    accent: "bg-[#FF4D6D]"
  },
  {
    id: 4,
    title: "Heart Disease Predictor",
    category: "ML/AI",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
    description: "End-to-end ML classification project predicting heart disease risk.",
    links: [
      { label: "GitHub", url: "https://github.com/Aliabdo6/predicting-heart-disease-sklearn", icon: <Github className="w-4 h-4" /> },
    ],
    accent: "bg-[#7C3AED]"
  },
  {
    id: 5,
    title: "Pneumonia X-Ray Detector",
    category: "ML/AI",
    tech: ["Python", "TensorFlow", "Keras", "CNNs"],
    description: "Deep learning CNN that classifies chest X-rays for pneumonia detection.",
    links: [
      { label: "GitHub", url: "https://github.com/Aliabdo6/Pneumonia-Classifier-ml", icon: <Github className="w-4 h-4" /> },
    ],
    accent: "bg-[#00FFD1]"
  },
  {
    id: 6,
    title: "scikit-learn Workflow Suite",
    category: "ML/AI",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
    description: "Showcase of end-to-end ML workflows: data prep, model selection, tuning.",
    links: [
      { label: "GitHub", url: "https://github.com/Aliabdo6/scikit-learn-salutations", icon: <Github className="w-4 h-4" /> },
    ],
    accent: "bg-[#FF4D6D]"
  }
];

const FILTERS = ["All", "Frontend", "Data Science", "ML/AI"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(p => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Frontend" && p.category.includes("Frontend")) return true;
    if (activeFilter === "Data Science" && p.category.includes("Data Science")) return true;
    if (activeFilter === "ML/AI" && p.category.includes("ML/AI")) return true;
    return false;
  });

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-4">
              <span className="text-slate-500 font-mono text-sm tracking-wider">{"// 06. PROJECTS"}</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-space font-bold text-slate-800 dark:text-slate-100">
              Things I've Built
            </motion.h2>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-2">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-sans font-medium transition-colors ${
                  activeFilter === f 
                    ? 'bg-[#00FFD1] text-[#080B10] shadow-[0_0_15px_rgba(0,255,209,0.3)]' 
                    : 'bg-slate-200 dark:bg-[#1A2233] text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-[#1A2233]/80'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <TiltCard className="h-full group">
                  <div className="relative bg-white dark:bg-[#0D1117] rounded-xl overflow-hidden border border-slate-200 dark:border-[#1A2233] shadow-lg transition-colors flex flex-col h-full z-10 w-full">
                    {/* Top Accent Line */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] ${project.accent}`}></div>
                    
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex-1">
                          {project.isRecent && (
                            <span className="inline-block px-2 py-1 mb-3 text-[10px] font-mono uppercase tracking-wider text-[#00FFD1] border border-[#00FFD1]/30 bg-[#00FFD1]/10 rounded">
                              Recently Updated
                            </span>
                          )}
                          <h3 className="text-xl font-space font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#00FFD1] transition-colors">{project.title}</h3>
                        </div>
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 font-sans text-sm leading-relaxed mb-8 flex-1">
                        {project.description}
                      </p>

                      <div className="mt-auto space-y-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map(t => (
                            <span key={t} className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#0A0E14] px-2 py-1 rounded">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-[#1A2233]">
                          {project.links.map(link => (
                            <a
                              key={link.label}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative z-[50] flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#00FFD1] transition-colors"
                            >
                              {link.label}
                              {link.icon}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
