import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Quick scrollspy implementation
      const sections = ['home', 'expertises', 'about', 'approach', 'contact'];
      const scrollPosition = window.scrollY + 100;

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
    { id: 'home', label: 'Accueil' },
    { id: 'expertises', label: 'Expertises' },
    { id: 'about', label: 'À propos' },
    { id: 'approach', label: 'Notre Approche' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-deep/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo NeuraTech AI */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleScrollTo('home')}
            id="logo-container"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              {/* Animated Neural Network SVG logo matching prompt visual */}
              <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Central Glowing Node */}
                <circle cx="50" cy="50" r="6" className="fill-cyan-400 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                
                {/* Connective lines */}
                <path d="M50 50 L50 20 M50 50 L50 80 M50 50 L20 50 M50 50 L80 50" stroke="url(#blue-purple-grad)" strokeWidth="2" opacity="0.6" />
                <path d="M50 50 L28.7 28.7 M50 50 L71.3 71.3 M50 50 L28.7 71.3 M50 50 L71.3 28.7" stroke="url(#blue-purple-grad)" strokeWidth="1.5" opacity="0.4" />
                
                {/* Outer connected ring nodes */}
                <circle cx="50" cy="20" r="4.5" className="fill-blue-500 animate-pulse" />
                <circle cx="50" cy="80" r="4.5" className="fill-purple-500" />
                <circle cx="20" cy="50" r="4.5" className="fill-blue-400" />
                <circle cx="80" cy="50" r="4.5" className="fill-purple-600" />
                
                {/* Diagonal nodes */}
                <circle cx="28.7" cy="28.7" r="4" className="fill-blue-400" />
                <circle cx="71.3" cy="71.3" r="4" className="fill-purple-500" />
                <circle cx="28.7" cy="71.3" r="4" className="fill-cyan-400" />
                <circle cx="71.3" cy="28.7" r="4" className="fill-indigo-500" />

                {/* Cyber ring lines */}
                <circle cx="50" cy="50" r="30" stroke="url(#blue-purple-grad)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                <circle cx="50" cy="50" r="40" stroke="url(#blue-purple-grad)" strokeWidth="1" opacity="0.2" />

                <defs>
                  <linearGradient id="blue-purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-wide text-white group-hover:text-brand-accent-cyan transition-colors">
                NeuraTech <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI</span>
              </span>
              <span className="block text-[8px] tracking-[0.25em] text-gray-400 font-mono uppercase">
                Intelligence • Automation
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" id="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all relative ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleScrollTo('contact')}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center space-x-2 border border-white/10"
              id="header-cta"
            >
              <span>Demander une démo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-deep border-b border-white/10"
            id="mobile-nav-panel"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-white bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-l-4 border-cyan-400'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => handleScrollTo('contact')}
                  className="w-full text-center px-5 py-3 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Demander une démo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
