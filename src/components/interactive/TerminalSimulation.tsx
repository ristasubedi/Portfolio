// src/components/interactive/TerminalSimulation.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Maximize2, Circle, X, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TerminalSimulation() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<string[]>([
    "🚀 Portfolio Navigation Terminal v2.0",
    "",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "📍 NAVIGATION COMMANDS:",
    "  about      → Jump to About Me section",
    "  experience → View Work Experience",
    "  skills     → View Skills & Technologies",
    "  projects   → Browse Project Registry",
    "  contact    → Get in touch",
    "",
    "⚙️  SYSTEM COMMANDS:",
    "  sysinfo    → Display tech stack info",
    "  help       → Show this guide",
    "  clear      → Clear terminal",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    ""
  ]);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Keeps the terminal window automatically scrolled to the bottom on new outputs
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return `✔ Navigating to ${sectionId} section...`;
    }
    return `✘ Section '${sectionId}' not found.`;
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = input.trim().toLowerCase();
    if (!cleanInput) return;

    let response = `sys: command not found: '${cleanInput}'. Type 'help' for available commands.`;
    let shouldCloseTerminal = false;
    
    switch (cleanInput) {
      case 'help':
        response = "📍 NAVIGATION COMMANDS:\n  about      → Jump to About Me section\n  experience → View Work Experience\n  skills     → View Skills & Technologies\n  projects   → Browse Project Registry\n  contact    → Get in touch\n\n⚙️  SYSTEM COMMANDS:\n  sysinfo    → Display tech stack info\n  clear      → Clear terminal";
        break;
      case 'about':
        response = scrollToSection('about');
        shouldCloseTerminal = true;
        break;
      case 'experience':
        response = scrollToSection('experience');
        shouldCloseTerminal = true;
        break;
      case 'projects':
        response = scrollToSection('projects');
        shouldCloseTerminal = true;
        break;
      case 'skills':
        response = scrollToSection('skills');
        shouldCloseTerminal = true;
        break;
      case 'contact':
        response = scrollToSection('contact');
        shouldCloseTerminal = true;
        break;
      case 'sysinfo':
        response = "⚡ Runtime: Next.js 16.2 + React 19\n🎨 Styling: Tailwind CSS 4.0\n✨ Animations: Framer Motion\n🔧 Language: TypeScript 5.0\n📦 Build: Turbopack\n🚀 Status: Production Ready";
        break;
    }

    if (cleanInput === 'clear') {
      setHistory([""]);
    } else {
      setHistory(prev => [
        ...prev.slice(0, -1), 
        `guest@portfolio:~$ ${input}`, 
        response, 
        ""
      ]);
      
      // Auto-close terminal after navigation commands
      if (shouldCloseTerminal) {
        setTimeout(() => {
          setIsOpen(false);
        }, 800); // Small delay to show the success message
      }
    }
    setInput("");
  };

  return (
    <>
      {/* Enhanced Floating Terminal Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 group"
        aria-label="Open Navigation Terminal"
      >
        <div className="relative">
          {/* Pulsing glow ring */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-emerald-500 rounded-full blur-xl"
          />
          
          {/* Button with label */}
          <div className="relative flex items-center gap-3 bg-gradient-to-br from-slate-900 to-slate-950 px-4 py-3 rounded-full shadow-2xl border-2 border-emerald-500/50 group-hover:border-emerald-400 transition-all">
            <Terminal className="w-6 h-6 text-emerald-400" />
            <span className="text-emerald-400 font-mono text-sm font-semibold">Terminal</span>
          </div>
        </div>
      </motion.button>

      {/* Terminal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            {/* Terminal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-3xl"
            >
              <div className="w-full bg-slate-950 text-emerald-400 rounded-xl font-mono text-sm border-2 border-emerald-500/50 shadow-2xl flex flex-col h-[500px] overflow-hidden">
                
                {/* Terminal Header Bar */}
                <div className="bg-slate-900 border-b border-slate-800/80 px-4 py-3 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <Circle className="w-3 h-3 fill-rose-500 text-rose-500" />
                    <Circle className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                    <span className="text-slate-400 text-xs ml-2 flex items-center gap-1.5 font-sans">
                      <Terminal className="w-4 h-4" /> Navigation Terminal
                    </span>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-slate-500 hover:text-emerald-400 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Terminal Screen Terminal Logs Area */}
                <div className="p-4 overflow-y-auto flex-1 space-y-1.5 select-text selection:bg-emerald-500/30">
                  {history.map((line, idx) => {
                    let lineClass = "text-emerald-400";
                    if (line.startsWith('guest@')) lineClass = "text-slate-300";
                    if (line.startsWith('sys:')) lineClass = "text-rose-400";
                    if (line.startsWith('✔')) lineClass = "text-cyan-400";
                    if (line.startsWith('✘')) lineClass = "text-rose-400";
                    if (line.startsWith('🎯') || line.startsWith('📊') || line.startsWith('⚡') || line.startsWith('🎨') || line.startsWith('✨') || line.startsWith('🔧') || line.startsWith('📦') || line.startsWith('🚀')) lineClass = "text-yellow-400";

                    return (
                      <div key={idx} className={`whitespace-pre-wrap leading-relaxed ${lineClass}`}>
                        {line || "\u00A0"}
                      </div>
                    );
                  })}
                  <div ref={terminalEndRef} />
                </div>

                {/* Input Form Fields */}
                <form onSubmit={handleCommand} className="flex items-center border-t border-slate-900 px-4 py-3 bg-slate-950 shrink-0 text-slate-300">
                  <span className="mr-2 shrink-0 text-emerald-500 font-bold">guest@portfolio:~$</span>
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="bg-transparent focus:outline-none w-full text-emerald-400 caret-emerald-400 font-mono"
                    placeholder="type 'help' to start..."
                    autoFocus
                  />
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}