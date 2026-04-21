import Link from 'next/link';
import { Terminal, MoveLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080B10] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0"></div>
      
      {/* Gradient Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF4D6D]/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="relative z-10 glass-panel p-8 md:p-12 rounded-3xl border border-[#1A2233] max-w-lg w-full text-center">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-[#FF4D6D]/10 border border-[#FF4D6D]/30 flex items-center justify-center mb-8">
          <Terminal className="w-8 h-8 text-[#FF4D6D]" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-space font-bold text-slate-100 mb-4 tracking-tighter">
          404
        </h1>
        
        <h2 className="text-xl font-mono text-[#FF4D6D] mb-6">
          ERR_FILE_NOT_FOUND
        </h2>
        
        <p className="text-slate-400 font-sans mb-10">
          The requested endpoint doesn't exist in my architecture. You might have taken a wrong turn in the network matrix.
        </p>

        <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D1117] hover:bg-[#1A2233] text-slate-200 font-mono text-sm rounded-xl border border-[#1A2233] hover:border-[#00FFD1]/50 transition-all group">
          <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Return to Base Node
        </Link>
      </div>
    </div>
  );
}
