'use client';
import { motion } from 'motion/react';
import { useState, useRef, useEffect, ReactNode } from 'react';

type CommandItem = { id: string; type: 'input' | 'output'; content: ReactNode };

export default function TerminalEmulator() {
  const [history, setHistory] = useState<CommandItem[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setHistory([
      { id: '1', type: 'output', content: "Welcome to Ali's terminal..." },
      { id: '2', type: 'output', content: "Type 'help' to see available commands." }
    ]);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newHistory: CommandItem[] = [...history, { id: Date.now().toString() + 'in', type: 'input', content: trimmed }];
    let output: ReactNode = '';

    const args = trimmed.split(' ');
    const command = args[0].toLowerCase();

    // specific catch for sudo
    if (command === 'sudo') {
        output = <span className="text-[#FF4D6D]">Nice try. This incident will be reported.</span>;
        setHistory([...newHistory, { id: Date.now().toString() + 'out', type: 'output', content: output }]);
        return;
    }

    switch (command) {
      case 'help':
        output = (
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <span className="text-[#00FFD1]">whoami</span><span>prints bio summary</span>
            <span className="text-[#00FFD1]">skills</span><span>lists tech stack in tree format</span>
            <span className="text-[#00FFD1]">projects</span><span>lists project names + URLs</span>
            <span className="text-[#00FFD1]">contact</span><span>shows contact info</span>
            <span className="text-[#00FFD1]">github</span><span>opens GitHub in new tab</span>
            <span className="text-[#00FFD1]">hire</span><span>shows availability</span>
            <span className="text-[#00FFD1]">matrix</span><span>plays matrix rain effect</span>
            <span className="text-[#00FFD1]">clear</span><span>clears terminal output</span>
            <span className="text-[#00FFD1]">date</span><span>shows current date</span>
            <span className="text-[#00FFD1]">echo [text]</span><span>echoes text back</span>
          </div>
        );
        break;
      case 'whoami':
        output = "Ali Abdo — Front-End Developer | Data Analyst | ML Engineer based in Egypt.";
        break;
      case 'skills':
        output = (
          <pre className="text-slate-300">
            ├── Frontend{'\n'}
            │   ├── Next.js, React.js{'\n'}
            │   └── TypeScript, Tailwind{'\n'}
            ├── Data & ML{'\n'}
            │   ├── Python, Pandas{'\n'}
            │   └── TensorFlow, scikit-learn{'\n'}
            └── Backend / CI-CD{'\n'}
                ├── Node.js, Express{'\n'}
                └── Docker, GitHub Actions
          </pre>
        );
        break;
      case 'projects':
        output = (
          <div className="space-y-1">
            <div>1. Social Media App - <a href="https://next-social-app.vercel.app/" className="text-[#00FFD1] hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a></div>
            <div>2. AI Summarizer - <a href="https://summarizer-ai.netlify.app/" className="text-[#00FFD1] hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a></div>
            <div>3. Netflix Analysis - <a href="https://app.datacamp.com/workspace/w/68a6e7d7-f9af-4793-9cb7-31c12eeaf911/edit" className="text-[#00FFD1] hover:underline" target="_blank" rel="noopener noreferrer">DataCamp</a></div>
          </div>
        );
        break;
      case 'contact':
        output = (
          <div>
            <div>Email: <a href="mailto:aliabdo12121@outlook.sa" className="text-[#00FFD1]">aliabdo12121@outlook.sa</a></div>
            <div>LinkedIn: <a href="https://www.linkedin.com/in/aliabdo6/" className="text-[#00FFD1]" target="_blank" rel="noopener noreferrer">aliabdo6</a></div>
          </div>
        );
        break;
      case 'github':
        output = "Opening GitHub...";
        window.open('https://github.com/Aliabdo6', '_blank');
        break;
      case 'hire':
        output = "🚀 Available for opportunities! Email: aliabdo12121@outlook.sa";
        break;
      case 'matrix':
        output = "Triggering matrix. Hint: press 'R' anywhere on the page too.";
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'r' }));
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'date':
        output = new Date().toString();
        break;
      case 'echo':
        output = args.slice(1).join(' ');
        break;
      default:
        output = <span className="text-[#FF4D6D]">Command not found: {command}. Type 'help' for available commands.</span>;
    }

    setHistory([...newHistory, { id: Date.now().toString() + 'out', type: 'output', content: output }]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
      setInputVal('');
      // Use setTimeout to ensure focus happens after render without triggering native browser scroll to page center
      setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 10);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex);
          setInputVal(commandHistory[commandHistory.length - 1 - nextIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = ['help', 'whoami', 'skills', 'projects', 'contact', 'github', 'hire', 'matrix', 'clear', 'date', 'echo'];
      const match = commands.find(c => c.startsWith(inputVal.toLowerCase()));
      if (match) setInputVal(match);
    }
  };

  return (
    <section id="terminal" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-4">
          <span className="text-slate-500 font-mono text-sm tracking-wider">{"// 08. TERMINAL"}</span>
        </motion.div>
        
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-space font-bold text-slate-800 dark:text-slate-100 mb-16">
          Talk to My Portfolio
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[#0A0E14] rounded-xl overflow-hidden border border-[#1A2233] shadow-2xl glow-border relative">
            {/* Window Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0D1117] border-b border-[#1A2233]">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-4 text-xs font-mono text-slate-500 tracking-wider">ali@portfolio ~ bash</span>
            </div>

            <div 
              ref={scrollRef}
              className="p-6 h-[400px] overflow-y-auto font-mono text-sm md:text-base text-slate-300 scroll-smooth hide-scrollbar"
              onClick={() => inputRef.current?.focus({ preventScroll: true })}
            >
              {history.map(item => (
                <div key={item.id} className="mb-2 break-words">
                  {item.type === 'input' ? (
                    <div>
                      <span className="text-[#00FFD1]">aliabdo@portfolio:~$</span> <span className="text-white">{item.content}</span>
                    </div>
                  ) : (
                    <div className="text-slate-400 pl-4 border-l-2 border-[#1A2233] py-1">{item.content}</div>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[#00FFD1] shrink-0">aliabdo@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={e => setInputVal(e.target.value)}
                  onKeyDown={onKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-white caret-transparent"
                  autoComplete="off"
                  spellCheck="false"
                />
                {/* Custom Caret */}
                <span className="w-2.5 h-5 bg-[#00FFD1] animate-pulse -ml-2 inline-block"></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
