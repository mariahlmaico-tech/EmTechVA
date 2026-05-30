import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative bg-slate-900/20">
      {/* Background ambient neon dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase mb-2">
            What Clients Say
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight">
            What Clients Say
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Read what agency owners, corporate developers, and global business founders say about Mariah's automation systems.
          </p>
        </div>

        {/* Bento Quote Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((test) => {
            return (
              <div
                key={test.id}
                className="relative bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between gap-6 overflow-hidden"
              >
                {/* Visual quote accent mark */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-800/25 pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  {/* Rating star row */}
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                    ))}
                  </div>

                  {/* Feedback text */}
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed italic">
                    "{test.feedback}"
                  </p>
                </div>

                {/* Reviewer info card */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-850 relative z-10">
                  {/* Avatar Circle with stylized letter seed */}
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center text-slate-950 font-bold font-display text-sm">
                    {test.avatarSeed}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {test.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {test.role}, <span className="text-slate-500">{test.company}</span>
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Upwork & Onlinejobs callout banner */}
        <div className="mt-12 bg-slate-950 border border-slate-850 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-lg font-display font-semibold text-white">
              Vetted on Global Platforms
            </h4>
            <p className="text-slate-400 text-xs md:text-sm max-w-xl">
              I am highly responsive and available for contract hiring via Upwork and Onlinejobs.ph. Fully verified profiles with excellent job completion stats.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.upwork.com/freelancers/~01249d59524865ced1?companyReference=606308636514217985&mp_source=share"
              target="_blank"
              rel="noreferrer referrerpolicy"
              className="px-5 py-2.5 rounded-full text-xs font-mono bg-blue-500 hover:bg-blue-400 text-slate-950 font-semibold transition-all duration-200 shadow-md"
            >
              Upwork Profile
            </a>
            <a
              href="https://v2.onlinejobs.ph/jobseekers/info/390576"
              target="_blank"
              rel="noreferrer referrerpolicy"
              className="px-5 py-2.5 rounded-full text-xs font-mono bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 transition-all duration-200"
            >
              OnlineJobs PH
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
