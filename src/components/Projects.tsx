import { useState } from 'react';
import * as Icons from 'lucide-react';
import { PROJECTS } from '../data';
import { Project, FlowStep } from '../types';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'All' | 'Zapier' | 'Make.com' | 'n8n'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(PROJECTS[0]);

  // Color mappings
  const getPlatformColors = (platform: string) => {
    switch (platform) {
      case 'Zapier':
        return {
          bg: 'bg-orange-500/10',
          text: 'text-orange-400',
          border: 'border-orange-500/20',
          hoverBorder: 'hover:border-orange-500/50',
          solidBg: 'bg-orange-500'
        };
      case 'Make.com':
        return {
          bg: 'bg-violet-500/10',
          text: 'text-violet-400',
          border: 'border-violet-500/20',
          hoverBorder: 'hover:border-violet-500/50',
          solidBg: 'bg-violet-500'
        };
      case 'n8n':
        return {
          bg: 'bg-emerald-500/10',
          text: 'text-emerald-400',
          border: 'border-emerald-500/20',
          hoverBorder: 'hover:border-emerald-500/50',
          solidBg: 'bg-emerald-500'
        };
      default:
        return {
          bg: 'bg-slate-500/10',
          text: 'text-slate-400',
          border: 'border-slate-500/20',
          hoverBorder: 'hover:border-slate-500/50',
          solidBg: 'bg-slate-500'
        };
    }
  };

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeTab === 'All') return true;
    return proj.platform === activeTab;
  });

  const getStepIcon = (type: FlowStep['type']) => {
    switch (type) {
      case 'trigger':
        return Icons.Zap;
      case 'filter':
        return Icons.Filter;
      case 'ai':
        return Icons.Sparkles;
      case 'router':
        return Icons.Network;
      case 'action':
        return Icons.ArrowRight;
      default:
        return Icons.HelpCircle;
    }
  };

  const getStepClass = (type: FlowStep['type']) => {
    switch (type) {
      case 'trigger':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/25';
      case 'filter':
        return 'text-sky-400 bg-sky-500/10 border-sky-500/25';
      case 'ai':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/25';
      case 'router':
        return 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/25';
      case 'action':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/25';
      default:
        return 'text-slate-400 bg-slate-500/10 border-slate-500/25';
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-950/40 relative border-t border-slate-900 border-b">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-[20%] w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase mb-2">
            Selected Highlights
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight leading-tight">
            Advanced Integrations & Case Studies
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-2">
            Browse through some of my core projects deployed across Zapier, Make.com, and n8n below. Select any project to view its active system architecture pipeline logs.
          </p>
        </div>

        {/* Tab Filter Button Row */}
        <div className="flex flex-wrap items-center gap-2.5 pb-8 mb-8 border-b border-slate-850">
          {(['All', 'Zapier', 'Make.com', 'n8n'] as const).map((tab) => {
            const isSelected = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  // Auto-select first in filtered list
                  const matches = PROJECTS.filter(p => tab === 'All' || p.platform === tab);
                  if (matches.length > 0) {
                    setSelectedProject(matches[0]);
                  }
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-medium tracking-wide transition-all duration-300 border ${
                  isSelected
                    ? 'bg-blue-500 border-blue-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(59,130,246,0.35)]'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Dual Layout: Projects Grid + Interactive Detail Drawer Panel in Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Project Cards List */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold pl-1 mb-2">
              Showing {filteredProjects.length} Custom Deployments
            </div>

            <div className="space-y-4">
              {filteredProjects.map((proj) => {
                const colors = getPlatformColors(proj.platform);
                const isSelected = selectedProject?.id === proj.id;
                return (
                  <div
                    key={proj.id}
                    onClick={() => setSelectedProject(proj)}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between gap-4 ${
                      isSelected
                        ? 'bg-slate-900 border-blue-500/80 shadow-[0_0_15px_rgba(59,130,246,0.1)]'
                        : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="space-y-3">
                      {/* Platform Pill */}
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-0.5 rounded text-[9px] font-mono font-semibold tracking-widest uppercase border ${colors.bg} ${colors.text} ${colors.border}`}>
                          {proj.platform}
                        </span>
                        
                        {/* Selector indicator dot */}
                        {isSelected && (
                          <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                            Active Board
                          </div>
                        )}
                      </div>

                      {/* Title block */}
                      <h3 className="text-lg md:text-xl font-display font-semibold text-white">
                        {proj.title}
                      </h3>
                      
                      <p className="text-slate-400 text-xs md:text-sm leading-relaxed line-clamp-2">
                        {proj.shortDescription}
                      </p>
                    </div>

                    {/* Metrics Grid inside card */}
                    <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-850">
                      {proj.metrics.slice(0, 3).map((metric, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-xs font-display font-semibold text-white leading-tight">
                            {metric.value}
                          </div>
                          <div className="text-[9px] font-mono text-slate-500 uppercase tracking-tight mt-0.5 truncate">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Selected Project Architecture detail panel board */}
          <div className="lg:col-span-6 z-15">
            {selectedProject ? (
              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 relative overflow-hidden shadow-xl">
                
                {/* Visual decorative grids */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.3)_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none opacity-20"></div>

                <div className="relative space-y-6">
                  {/* Top: Header Board and Platform logo style info */}
                  <div className="flex items-start justify-between gap-4 border-b border-slate-850 pb-5">
                    <div>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-semibold tracking-widest uppercase border mb-2 inline-block ${getPlatformColors(selectedProject.platform).bg} ${getPlatformColors(selectedProject.platform).text} ${getPlatformColors(selectedProject.platform).border}`}>
                        {selectedProject.platform} Scenario Code
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white">
                        {selectedProject.title}
                      </h3>
                    </div>

                    {/* Link indicators */}
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 shrink-0">
                      <Icons.Cpu className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>

                  {/* Section 1: Detailed narrative */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">Case Description</h4>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Visual Blueprint Diagram Card */}
                  {selectedProject.imageUrl && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                        <Icons.Layers className="w-3.5 h-3.5 text-blue-400" />
                        Live Scenario Canvas & Logic Flowchart
                      </h4>
                      <div className="relative group/img overflow-hidden rounded-2xl border border-slate-850 bg-slate-900/10 shadow-lg">
                        <img 
                          src={selectedProject.imageUrl} 
                          alt={`${selectedProject.title} workflow canvas`} 
                          className="w-full h-auto aspect-[16/6] md:aspect-[16/7] object-cover object-center group-hover/img:scale-[1.03] transition-transform duration-500 cursor-zoom-in"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  )}

                  {/* Section 2: Visual Architecture Pipeline Map (Crucial! Represents how the platform works visually) */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <Icons.Network className="w-3.5 h-3.5 text-blue-400" />
                      Visual Node Architecture Map
                    </h4>

                    {/* Pipeline blocks stack */}
                    <div className="border border-slate-850/80 bg-slate-900/20 rounded-2xl p-4 space-y-3">
                      {selectedProject.flowSteps.map((step, idx) => {
                        const StepIcon = getStepIcon(step.type);
                        const styleClass = getStepClass(step.type);
                        return (
                          <div key={step.id} className="flex items-start gap-3 relative">
                            {/* Pipeline vertical connecting bar line */}
                            {idx < selectedProject.flowSteps.length - 1 && (
                              <div className="absolute left-[13px] top-[26px] bottom-[-22px] w-[2px] bg-slate-800 z-0"></div>
                            )}

                            {/* Node icon */}
                            <div className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 z-10 ${styleClass}`}>
                              <StepIcon className="w-3.5 h-3.5" />
                            </div>

                            {/* Node info content */}
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-white leading-none">{step.label}</span>
                                <span className="text-[8px] font-mono px-1.5 py-0.25 bg-slate-950 text-slate-500 rounded border border-slate-850 uppercase leading-none">
                                  {step.type}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-400 leading-normal">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 3: Technical Highlights block bullets list */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">Implementation Details</h4>
                    <ul className="space-y-2">
                      {selectedProject.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Icons.CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 4: Technologists tags and tools integrated block */}
                  <div className="pt-4 border-t border-slate-850 space-y-2">
                    <h4 className="text-[10pt] font-mono font-bold text-slate-500 uppercase tracking-widest">Tools Integrated</h4>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {selectedProject.toolsUsed.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ) : (
              <div className="bg-slate-950/40 border border-slate-850 border-dashed rounded-3xl p-12 text-center text-slate-500 italic flex items-center justify-center min-h-[400px]">
                Select an integration case-study from the list to preview visual architecture mappings...
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
