import React from 'react';
import { MapPin, GraduationCap, Cpu, Layers, Terminal, Database, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, ALL_TECH_SKILLS } from '../data';

// Color and icon mapping for Simple Icons integration
interface TechBadgeProps {
  name: string;
  key?: string;
}

const logoMap: Record<string, { slug: string; color: string }> = {
  'Make.com': { slug: 'make', color: '8A3FFC' },
  'Zapier': { slug: 'zapier', color: 'FF6600' },
  'n8n': { slug: 'n8n', color: 'FF6C37' },
  'Google Apps Script': { slug: 'google', color: '4285F4' },
  'Asana': { slug: 'asana', color: 'F06A6A' },
  'ClickUp': { slug: 'clickup', color: '7B68EE' },
  'Airtable': { slug: 'airtable', color: '18BFFF' },
  'Zendesk Suite': { slug: 'zendesk', color: '03363D' },
  'Slack & Teams': { slug: 'slack', color: '4A154B' },
  'ChatGPT & GPT-4o': { slug: 'openai', color: '74AA9C' },
  'ElevenLabs API': { slug: 'elevenlabs', color: 'FFD54F' },
  'Google Workspace Sheets': { slug: 'googlesheets', color: '34A853' },
  'Microsoft 365': { slug: 'microsoft', color: 'F25022' },
  'Loom': { slug: 'loom', color: '625DF5' },
};

function TechBadge({ name }: TechBadgeProps) {
  const match = logoMap[name];
  
  if (match) {
    const logoUrl = `https://cdn.simpleicons.org/${match.slug}/${match.color}`;
    return (
      <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-950/60 hover:bg-slate-950 border border-slate-900 hover:border-slate-800 transition-all duration-200 group/item hover:-translate-y-0.5 select-none shrink-0 min-w-[130px] sm:min-w-[140px] md:min-w-[150px]">
        <img
          src={logoUrl}
          alt={`${name} Logo`}
          className="w-5 h-5 object-contain group-hover/item:scale-110 transition-transform"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Hide standard image error visual, fallback gracefully
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <span className="text-xs font-mono font-medium text-slate-300 group-hover/item:text-blue-300 transition-colors">
          {name}
        </span>
      </div>
    );
  }

  // Graceful fallback for non-branded text skills with stylized custom indicators
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/40 hover:bg-slate-900/70 border border-slate-850/80 rounded-xl select-none text-[11px] font-mono font-semibold text-slate-400 group-hover/item:text-slate-200 transition-all">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/65"></span>
      {name}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/20 border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Tech Stack Bento Board */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <div className="text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase mb-2">
                Ecosystem Framework
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight">
                Enterprise Tech Stack
              </h2>
              <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl font-sans leading-relaxed">
                A visual showcase of my core integration capabilities, highlighting direct platform expertise and custom API operations.
              </p>
            </div>

            {/* Bento Grid layout for Skills Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Category 1: Workflows */}
              <div className="bg-slate-900/15 border border-slate-900 hover:border-slate-850/70 transition-all rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-indigo-500/5 blur-[50px] rounded-full pointer-events-none"></div>
                <h3 className="text-sm font-display font-semibold text-white mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  Automation & Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ALL_TECH_SKILLS.automation.map((skill) => (
                    <TechBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>

              {/* Category 2: Generative AI */}
              <div className="bg-slate-900/15 border border-slate-900 hover:border-slate-850/70 transition-all rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-emerald-500/5 blur-[50px] rounded-full pointer-events-none"></div>
                <h3 className="text-sm font-display font-semibold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  Generative AI Models
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ALL_TECH_SKILLS.aiAndModels.map((skill) => (
                    <TechBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>

              {/* Category 3: CRM */}
              <div className="bg-slate-900/15 border border-slate-900 hover:border-slate-850/70 transition-all rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-purple-500/5 blur-[50px] rounded-full pointer-events-none"></div>
                <h3 className="text-sm font-display font-semibold text-white mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-400" />
                  CRM & Systems Ecosystem
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ALL_TECH_SKILLS.crmsAndPM.map((skill) => (
                    <TechBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>

              {/* Category 4: Productivity */}
              <div className="bg-slate-900/15 border border-slate-900 hover:border-slate-850/70 transition-all rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-amber-500/5 blur-[50px] rounded-full pointer-events-none"></div>
                <h3 className="text-sm font-display font-semibold text-white mb-4 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  Data Pipelines & Docs
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ALL_TECH_SKILLS.productivity.map((skill) => (
                    <TechBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Education Card & Core Credentials */}
          <div className="lg:col-span-4 space-y-8">
            {/* Academic Education Card */}
            <div className="bg-slate-900/30 border border-slate-900 rounded-3xl p-6 md:p-8 relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-cyan-500/5 blur-[50px] rounded-full pointer-events-none"></div>

              <h3 className="text-lg font-display font-semibold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-400 shrink-0" />
                Education Background
              </h3>

              <div className="space-y-4 font-sans">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full uppercase">
                    Graduated {PERSONAL_INFO.education.year}
                  </span>
                  <h4 className="text-lg font-semibold text-white mt-3 leading-tight">
                    {PERSONAL_INFO.education.degree}
                  </h4>
                  <p className="text-slate-300 text-xs mt-1">
                    {PERSONAL_INFO.education.institution}
                  </p>
                </div>
                
                <p className="text-slate-500 text-xs flex items-center gap-1.5 pt-1">
                  <MapPin className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>{PERSONAL_INFO.education.location}</span>
                </p>
                
                <p className="text-slate-400 text-xs leading-relaxed pt-4 border-t border-slate-900/60 mt-3">
                  This educational background in Marketing provides Mariah with a solid foundation to align complex technical integrations directly with business and commercial objectives, translating technical architectures into high-value ROI.
                </p>
              </div>
            </div>

            {/* Platform Badges Accent Card */}
            <div className="bg-gradient-to-br from-slate-950 to-slate-900/40 border border-slate-900/80 rounded-2xl p-6 space-y-4">
              <h4 className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">Expert Certifications</h4>
              <div className="space-y-2 font-mono text-[11px] text-slate-400">
                <div className="flex items-center justify-between border-b border-slate-900 pb-1.5">
                  <span>Zapier Certified Expert</span>
                  <span className="text-blue-400 font-bold font-sans">✔ Active</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-900 pb-1.5">
                  <span>Make.com Advanced Maker</span>
                  <span className="text-blue-400 font-bold font-sans">✔ Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>n8n Orchestration Pro</span>
                  <span className="text-blue-400 font-bold font-sans">✔ Active</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
