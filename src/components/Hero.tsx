import React from 'react';
import { ArrowRight, Cpu, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const stats = [
    { label: 'Ops Hours Saved', value: '150+', desc: 'Across clients weekly' },
    { label: 'Workflows Deployed', value: '80+', desc: 'Zapier, Make & n8n' },
    { label: 'Integration Accuracy', value: '99%', desc: 'Error-resistant designs' }
  ];

  const handleScroll = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-950">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Info */}
          <div className="lg:col-span-6 space-y-6 lg:pr-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-blue-400 bg-blue-400/5 border border-blue-400/15">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Workflow and AI Automation Specialist
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-display font-medium text-white tracking-tight leading-[1.1]">
              Providing The Best{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 font-semibold block mt-1">
                AI Automation Solutions
              </span>
            </h1>

            <p className="text-slate-300 font-sans text-base md:text-lg leading-relaxed max-w-xl">
              Designing intelligent systems with <span className="font-semibold text-white">Make.com</span>,{' '}
              <span className="font-semibold text-white">Zapier</span>, and{' '}
              <span className="font-semibold text-white">n8n</span>. I build AI-powered automations that streamline operations, automate content creation, and quietly remove the manual work from growing teams.
            </p>

            {/* Quick bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-slate-400 text-sm py-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Zapier Paths, Filters & Routers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Make.com Advanced Mappings</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>n8n Custom AI Agent Flows</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Google Apps Script Plugins</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleScroll('#contact')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 font-semibold font-display shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-sm cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScroll('#projects')}
                className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-850 hover:border-slate-700 font-medium font-display transition-all duration-200 text-sm cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>View Work</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl md:text-3xl font-display font-semibold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 leading-snug">
                    {stat.label}
                  </div>
                  <div className="text-[10px] font-sans text-slate-400">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Flow Diagram representation (Visual & Clean) */}
          <div className="lg:col-span-6 w-full flex justify-center items-center relative">
            <div className="relative w-full max-w-[480px] p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 shadow-2xl backdrop-blur-sm overflow-hidden group">
              {/* Animated overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/5 via-transparent to-cyan-400/5 opacity-50 pointer-events-none"></div>

              {/* Node graph wires background */}
              <svg className="absolute inset-0 w-full h-full stroke-slate-800 pointer-events-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Visual grid pattern */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" strokeWidth="1" stroke="rgba(255,255,255,0.02)" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Automation path lines */}
                <path d="M 50 100 Q 150 50 240 100 T 430 100" strokeWidth="2" strokeDasharray="4 4" className="stroke-slate-700/60" />
                <path d="M 50 200 Q 150 150 240 200 T 430 200" strokeWidth="2" strokeDasharray="4 4" className="stroke-slate-700/60" />
                <path d="M 50 300 Q 150 250 240 300 T 430 300" strokeWidth="2" strokeDasharray="4 4" className="stroke-slate-700/60" />

                <path d="M 120 100 L 120 300" strokeWidth="1.5" className="stroke-slate-800" />
                <path d="M 240 100 L 240 300" strokeWidth="1.5" className="stroke-slate-800" />
                <path d="M 360 100 L 360 300" strokeWidth="1.5" className="stroke-slate-800" />
              </svg>

              {/* Flow title banner */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500/80 inline-block"></span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 font-medium tracking-wide uppercase">Active AI Integration Hub</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
                  <span>Live</span>
                </div>
              </div>

              {/* Connected node blocks */}
              <div className="space-y-4 font-mono relative z-10">
                {/* Node 1: Trigger */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/85 border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300 shadow-md group-hover:translate-x-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-blue-400 text-sm font-semibold">
                      IN
                    </div>
                    <div>
                      <div className="text-[10px] text-blue-400 font-semibold tracking-wider uppercase">Trigger</div>
                      <div className="text-xs text-white font-sans font-medium">New Lead from Webhook / Form</div>
                    </div>
                  </div>
                  <div className="text-[10.5px] text-slate-500 bg-slate-900 border border-slate-850 px-2 py-0.5 rounded">Zapier</div>
                </motion.div>

                {/* Node 2: Logic Router */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/85 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 shadow-md group-hover:translate-x-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/5 border border-cyan-500/10 flex items-center justify-center text-cyan-400 text-sm font-semibold font-mono">
                      PM
                    </div>
                    <div>
                      <div className="text-[10px] text-cyan-400 font-semibold tracking-wider uppercase">Router & Workspace Setup</div>
                      <div className="text-xs text-white font-sans font-medium">Generate Asana Board & Drive folder</div>
                    </div>
                  </div>
                  <div className="text-[10.5px] text-slate-500 bg-slate-900 border border-slate-850 px-2 py-0.5 rounded">Make.com</div>
                </motion.div>

                {/* Node 3: AI Engine */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.05)] group-hover:translate-x-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-sm">
                      🤖
                    </div>
                    <div>
                      <div className="text-[10px] text-blue-400 font-bold tracking-wider uppercase flex items-center gap-1.5">
                        <span>AI Knowledge Retrieval</span>
                      </div>
                      <div className="text-xs text-slate-200 font-sans font-medium">Draft custom business audit</div>
                    </div>
                  </div>
                  <div className="text-[10.5px] text-blue-400 bg-blue-500/5 border border-blue-500/20 px-2 py-0.5 rounded font-bold">GPT-4o</div>
                </motion.div>

                {/* Node 4: Action */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/85 border border-slate-800/80 hover:border-purple-500/30 transition-all duration-300 shadow-md group-hover:translate-x-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/5 border border-purple-500/10 flex items-center justify-center text-purple-400 text-sm font-semibold">
                      OUT
                    </div>
                    <div>
                      <div className="text-[10px] text-purple-400 font-semibold tracking-wider uppercase">Fulfillment</div>
                      <div className="text-xs text-white font-sans font-medium">Deliver Onboarding SMS & Email</div>
                    </div>
                  </div>
                  <div className="text-[10.5px] text-slate-500 bg-slate-900 border border-slate-850 px-2 py-0.5 rounded">n8n</div>
                </motion.div>
              </div>

              {/* Status bar */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800/80 text-[10.5px] text-slate-500">
                <div className="flex items-center gap-1 font-mono">
                  <span>Ping:</span>
                  <span className="text-slate-300 font-bold">12ms</span>
                </div>
                <div className="flex items-center gap-1 font-mono">
                  <span>Success Rate:</span>
                  <span className="text-blue-400 font-bold">100%</span>
                </div>
                <div className="flex items-center gap-1 font-mono">
                  <span>Integrations:</span>
                  <span className="text-slate-300 font-bold">SaaS API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
