import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';

export default function Services() {
  const handleScrollToProjects = () => {
    const target = document.querySelector('#projects');
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
    <section id="services" className="py-20 bg-slate-950/40 relative border-t border-slate-900">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase mb-2">
            Services I Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight leading-tight">
            Designing Intelligent Automation Systems
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl font-sans">
            I craft systems that think, connect, and execute autonomously—allowing growing teams to claim back vital operational hours.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((srv) => {
            // Dynamically resolve icon component
            const Icon = (Icons as any)[srv.icon] || Icons.Cpu;
            return (
              <div
                key={srv.id}
                className="group relative bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-blue-500/40 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="space-y-5 relative z-10 font-sans">
                  {/* Icon Card */}
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:text-cyan-400 transition-colors duration-300 shadow-inner">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {srv.title}
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  {/* Feature Lists */}
                  <ul className="space-y-1.5 text-xs text-slate-300 border-t border-slate-850 pt-4">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icons.CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Automation Platforms Used Badges */}
                <div className="flex flex-wrap items-center gap-1.5 mt-6 pt-4 border-t border-slate-850 relative z-10">
                  {srv.platforms.map((platform, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-medium tracking-wide bg-slate-950 text-slate-400 border border-slate-800/80"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Feature Spotlight Section */}
        <div className="relative bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800/80 rounded-2xl p-6 md:p-8 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-cyan-500/5 opacity-50 pointer-events-none"></div>
          {/* Subtle decoration elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider">
                Signature Workflow Spotlight
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight">
                AI Content Repurposing & Distribution Engine
              </h3>
              <p className="text-slate-300 text-sm md:text-base font-sans leading-relaxed">
                A Zapier workflow that fires the moment a file is uploaded — generates a transcript, drafts two unique blog articles, and ships LinkedIn and Instagram copy for each post. Conditional paths on keyword detection plus Sheets logging keep distribution tracked end-to-end.
              </p>
            </div>
            
            <div className="shrink-0">
              <button
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-950 border border-slate-850 text-blue-400 hover:text-white hover:border-blue-500/30 font-display font-medium text-sm transition-all duration-300 hover:shadow-blue-500/5 shadow cursor-pointer text-left"
              >
                <span>See more projects</span>
                <Icons.ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
