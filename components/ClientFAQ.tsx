'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, MessageSquareCode } from 'lucide-react';

const FAQS = [
  {
    id: 1,
    q: "Do you work with international clients?",
    a: "Absolutely. I collaborate with clients and agencies worldwide. We establish asynchronous communication channels and overlap hours to ensure smooth, continuous delivery no matter the time zone."
  },
  {
    id: 2,
    q: "How do you price your freelance projects?",
    a: "I generally offer project-based pricing to give you predictability. After a discovery call, I outline the scope, architecture, and a fixed price. For ongoing ML/Data consulting, I also offer monthly retainer options."
  },
  {
    id: 3,
    q: "Can you integrate a machine learning model into my existing React app?",
    a: "Yes! That's my specialty. I can wrap your ML models (or build new ones) into a fast Python backend (like FastAPI), containerize it with Docker, and hook it up seamlessly to your Next.js or React frontend."
  },
  {
    id: 4,
    q: "What is your typical turnaround time?",
    a: "It depends strictly on the project's complexity. A standard SaaS dashboard frontend might take 2-3 weeks, while a full-stack application with custom data pipelines and predictive models could take 6-10 weeks."
  },
  {
    id: 5,
    q: "Do you provide long-term support?",
    a: "I do. I build systems to be extremely maintainable with clean TypeScript and Python code, but I also offer post-launch support and iteration packages to keep your product scaling smoothly."
  }
];

export default function ClientFAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="faq" className="py-32 relative bg-white dark:bg-[#080B10]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#1A2233] text-slate-500 font-mono text-sm tracking-wider mb-4">
              <MessageSquareCode className="w-4 h-4 text-[#7C3AED]" />
              {"// 10. FREQUENTLY ASKED"}
            </span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-space font-bold text-slate-800 dark:text-slate-100">
            Client FAQ
          </motion.h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                className={`glass-panel border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#00FFD1]/50 bg-[#00FFD1]/5 dark:bg-[#00FFD1]/5' : 'border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117] hover:border-slate-300 dark:hover:border-slate-700'}`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-space font-semibold text-lg text-slate-800 dark:text-slate-100">
                    <span className="text-[#00FFD1] mr-3 font-mono text-sm">{`0${faq.id}.`}</span>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#00FFD1] text-[#080B10]' : 'bg-slate-100 dark:bg-[#1A2233] text-slate-500'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
