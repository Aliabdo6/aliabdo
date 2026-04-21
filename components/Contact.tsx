'use client';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MessageCircle, Send, CheckCircle2, ArrowUpRight, AlertCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import TiltCard from './TiltCard';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setStatus('submitting');
    
    emailjs.sendForm(
      'service_vip83mq', 
      'template_5wrs3jj', 
      formRef.current, 
      'rhJyoFefmwDCbaMNh'
    )
    .then((result) => {
        setStatus('success');
        setTimeout(() => setStatus('idle'), 3000);
        formRef.current?.reset();
    }, (error) => {
        console.error(error.text);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
    });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#7C3AED]/5 rounded-bl-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-4">
          <span className="text-slate-500 font-mono text-sm tracking-wider">{"// 12. COMMUNICATION"}</span>
        </motion.div>
        
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-space font-bold text-slate-800 dark:text-slate-100 mb-16">
          Let's Build Something<br />
          <span className="text-gradient">Extraordinary.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          
          {/* Main Direct Email Card (2 cols wide on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="md:col-span-2 h-full"
          >
            <TiltCard className="h-full">
              <div className="h-full glass-panel p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117]/80 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Mail className="w-32 h-32 text-[#00FFD1]" />
                </div>
                <div>
                  <h3 className="text-2xl font-space font-bold text-slate-800 dark:text-slate-100 mb-2">Direct Channel</h3>
                  <p className="text-slate-500 font-sans max-w-md">For serious inquiries, project proposals, or consulting opportunities.</p>
                </div>
                <div className="mt-12">
                  <a href="mailto:aliabdo12121@outlook.sa" className="inline-flex flex-col">
                    <span className="text-sm font-mono text-[#00FFD1] absolute -top-4 opacity-0 group-hover:opacity-100 group-hover:-top-6 transition-all duration-300">Click to copy/mail</span>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-space font-bold text-slate-800 dark:text-slate-200 hover:text-gradient flex items-center gap-4 transition-colors">
                      aliabdo12121@outlook.sa <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
                    </span>
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Social Links Terminal/Bento Blocks */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.3 }}
            className="md:col-span-1 grid grid-rows-2 gap-6 h-[300px] md:h-auto"
          >
            {/* LinkedIn Block */}
            <a href="https://linkedin.com/in/aliabdo6" target="_blank" rel="noopener noreferrer" className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117] hover:bg-slate-50 dark:hover:bg-[#121824] transition-all flex items-center justify-center group overflow-hidden relative shine-effect">
              <div className="absolute inset-0 bg-[#7C3AED] opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="flex flex-col items-center gap-3">
                <Linkedin className="w-8 h-8 text-slate-400 group-hover:text-[#7C3AED] transition-colors" />
                <span className="font-space font-bold tracking-wider text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-200">IN/ALIABDO6</span>
              </div>
            </a>
            
            {/* Split GitHub / WhatsApp Block */}
            <div className="grid grid-cols-2 gap-6">
              <a href="https://github.com/Aliabdo6" target="_blank" rel="noopener noreferrer" className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117] hover:bg-slate-50 dark:hover:bg-[#121824] transition-all flex items-center justify-center group">
                 <div className="absolute inset-0 bg-[#00FFD1] opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl"></div>
                 <Github className="w-8 h-8 text-slate-400 group-hover:text-[#00FFD1] transition-colors" />
              </a>
              <a href="https://wa.me/201090561644" target="_blank" rel="noopener noreferrer" className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117] hover:bg-slate-50 dark:hover:bg-[#121824] transition-all flex items-center justify-center group">
                 <div className="absolute inset-0 bg-[#FF4D6D] opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl"></div>
                 <MessageCircle className="w-8 h-8 text-slate-400 group-hover:text-[#FF4D6D] transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form Card (Full width on bottom) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.4 }}
            className="md:col-span-3 mt-6"
          >
            <div className="glass-panel p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-[#1A2233] bg-white dark:bg-[#0D1117] glow-border">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-space font-bold text-slate-800 dark:text-slate-100 mb-4">Drop a Message</h3>
                  <p className="text-slate-500 font-sans mb-8">Got an interesting project idea? Alternatively, bypass the inbox by executing the <code>hire</code> command in the terminal above.</p>
                  
                  <div className="hidden md:block">
                     <div className="flex items-center gap-3 text-sm text-slate-400 font-mono">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Status: Receiving Transmissions
                     </div>
                  </div>
                </div>

                <div className="md:w-2/3 w-full">
                  <form ref={formRef} onSubmit={handleSubmit} className="relative">
                    {status === 'success' ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white dark:bg-[#0D1117] z-10 rounded-xl">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-[#00FFD1] mb-6">
                          <CheckCircle2 className="w-16 h-16 mx-auto" />
                        </motion.div>
                        <h3 className="text-2xl font-space font-bold text-slate-200 mb-2">Message Delivered!</h3>
                        <p className="text-slate-400 font-sans">I'll get back to you across the wire shortly.</p>
                      </div>
                    ) : status === 'error' ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white dark:bg-[#0D1117] z-10 rounded-xl border border-red-500/30">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-red-500 mb-6">
                          <AlertCircle className="w-16 h-16 mx-auto" />
                        </motion.div>
                        <h3 className="text-2xl font-space font-bold text-slate-200 mb-2">Transmission Failed</h3>
                        <p className="text-slate-400 font-sans">Please try again or use direct email.</p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2 group">
                            <label className="text-sm font-mono text-slate-500 group-focus-within:text-[#00FFD1] transition-colors">Name</label>
                            <input name="user_name" required type="text" className="w-full bg-slate-50 dark:bg-[#0A0E14] border border-slate-200 dark:border-[#1A2233] rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-[#00FFD1] transition-all shadow-inner" placeholder="John Doe" />
                          </div>
                          <div className="space-y-2 group">
                            <label className="text-sm font-mono text-slate-500 group-focus-within:text-[#00FFD1] transition-colors">Email</label>
                            <input name="user_email" required type="email" className="w-full bg-slate-50 dark:bg-[#0A0E14] border border-slate-200 dark:border-[#1A2233] rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-[#00FFD1] transition-all shadow-inner" placeholder="john@domain.com" />
                          </div>
                        </div>
                        <div className="space-y-2 group">
                          <label className="text-sm font-mono text-slate-500 group-focus-within:text-[#00FFD1] transition-colors">Message</label>
                          <textarea name="message" required rows={4} className="w-full bg-slate-50 dark:bg-[#0A0E14] border border-slate-200 dark:border-[#1A2233] rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:border-[#00FFD1] transition-all shadow-inner resize-none" placeholder="Let's build something..." />
                        </div>
                        <button 
                          type="submit" 
                          disabled={status === 'submitting'}
                          className="w-full md:w-auto px-10 py-4 bg-slate-800 dark:bg-[#0A0E14] border border-[#00FFD1]/50 hover:border-[#00FFD1] rounded-xl font-space font-bold tracking-wider text-[#00FFD1] hover:bg-[#00FFD1] hover:text-[#080B10] transition-all flex items-center justify-center gap-3 disabled:opacity-50 float-right group cursor-pointer"
                        >
                          {status === 'submitting' ? 'Transmitting...' : 'Dispatch'} 
                          <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
