import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 105);
      }

      setScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = ['home', 'services', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150; // offset for triggers

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#top', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Portfolio', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // height of navbar
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-slate-850/50 py-4 shadow-lg'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      {/* Scroll indicator bar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 transition-all duration-75 pointer-events-none"
        style={{ width: `${Math.min(scrollProgress, 100)}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo Branding */}
        <a href="#" onClick={(e) => handleScrollTo(e, '#top')} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-500 group-hover:text-slate-950 text-blue-400">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <span className="font-display font-medium text-base text-white tracking-wider uppercase block">
              {PERSONAL_INFO.shortName}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id || (link.id === 'home' && activeSection === 'top');
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`text-sm font-sans font-medium transition-colors duration-200 relative py-1.5 ${
                      isActive ? 'text-blue-400 font-semibold' : 'text-slate-300 hover:text-blue-400'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-white tracking-wide hover:border-blue-500 hover:text-blue-400 font-display transition-all duration-200"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl border border-slate-800 text-slate-300 focus:outline-none hover:border-blue-500/40"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 shadow-2xl transition-all duration-300 transform origin-top ${
          isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible h-0'
        }`}
      >
        <ul className="py-4 px-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`block text-base font-semibold transition-colors ${
                    isActive ? 'text-blue-400 font-bold' : 'text-slate-200 hover:text-blue-400'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-blue-500 hover:bg-blue-400 text-slate-950 font-semibold font-display shadow-lg transition-all"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
