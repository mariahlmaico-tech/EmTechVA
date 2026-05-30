/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { PERSONAL_INFO } from './data';
import { ArrowUp, Terminal, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 400);
    };

    const handleClick = (e: MouseEvent) => {
      // Create ripple effect on click
      const id = Date.now() + Math.random();
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      
      // Clean up ripple element after animation finishes
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 750);
    };

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen relative font-sans selection:bg-blue-500 selection:text-slate-950 overflow-x-hidden">
      {/* Dynamic Click Ripple Elements */}
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute rounded-full border border-blue-500/80 bg-blue-500/10 pointer-events-none click-ripple"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
              width: '50px',
              height: '50px',
            }}
          />
        ))}
      </div>

      {/* Decorative Grid Lines Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,41,59,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,41,59,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="relative z-10">
        <Hero />
        <Services />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      {/* Elegant Professional Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 relative z-10 font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display font-semibold text-sm text-white uppercase tracking-wider block">
                {PERSONAL_INFO.shortName}
              </span>
              <p className="text-[10px] text-slate-500 font-mono -mt-1 uppercase tracking-tight">AI Systems Automations</p>
            </div>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="text-xs text-slate-500 leading-normal">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
            </p>
            <p className="text-[10px] text-slate-600 font-mono flex items-center justify-center md:justify-end gap-1">
              <Terminal className="w-3.5 h-3.5" />
              <span>Makati City, Philippines • GMT+8 Timezone</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-50 p-3 bg-blue-500 hover:bg-blue-400 text-slate-950 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:scale-105"
        >
          <ArrowUp className="w-4.5 h-4.5 stroke-[2.5]" />
        </button>
      )}
    </div>
  );
}
