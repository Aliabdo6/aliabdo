'use client';
import { useEffect } from 'react';
import Cursor from '@/components/Cursor';
import ShortcutsGlobal from '@/components/ShortcutsGlobal';
import ScrollProgress from '@/components/ScrollProgress';
import SideNav from '@/components/SideNav';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Workflow from '@/components/Workflow';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Certifications from '@/components/Certifications';
import TerminalEmulator from '@/components/TerminalEmulator';
import GithubActivity from '@/components/GithubActivity';
import GlobeSection from '@/components/GlobeSection';
import Insights from '@/components/Insights';
import ClientFAQ from '@/components/ClientFAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BootScreen from '@/components/BootScreen';

export default function Home() {
  useEffect(() => {
    // Scroll to top on mount normally
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="bg-slate-50 dark:bg-[#080B10] min-h-screen relative selection:bg-[#00FFD1] selection:text-[#080B10]">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_200_200%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noiseFilter%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.65%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
      
      <BootScreen />
      
      <ScrollProgress />
      <Cursor />
      <ShortcutsGlobal />
      <SideNav />
      
      <Navbar />
      
      <Hero />
      <About />
      <Skills />
      <Services />
      <Workflow />
      <Experience />
      <Projects />
      <Certifications />
      <TerminalEmulator />
      <Testimonials />
      <GlobeSection />
      <Insights />
      <ClientFAQ />
      <GithubActivity />
      <Contact />
      
      <Footer />
    </main>
  );
}
