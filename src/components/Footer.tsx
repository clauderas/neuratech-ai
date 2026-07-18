import React, { useState, FormEvent } from 'react';
import { Sparkles, Linkedin, Twitter, Github, Mail, Send, Check } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  const sitemap = [
    { id: 'home', label: 'Accueil' },
    { id: 'expertises', label: 'Expertises' },
    { id: 'about', label: 'À propos de nous' },
    { id: 'approach', label: 'Notre Approche' },
    { id: 'contact', label: 'Demander une démo' }
  ];

  return (
    <footer className="bg-brand-deep border-t border-slate-800 pt-16 pb-8 text-left relative overflow-hidden" id="app-footer">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper footer split columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Presentation Column */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleScrollTo('home')}>
              {/* Dynamic Logo duplicate */}
              <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="6" className="fill-indigo-500 filter drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                <path d="M50 50 L50 20 M50 50 L50 80 M50 50 L20 50 M50 50 L80 50" stroke="url(#footer-logo-grad)" strokeWidth="2" opacity="0.6" />
                <path d="M50 50 L28.7 28.7 M50 50 L71.3 71.3 M50 50 L28.7 71.3 M50 50 L71.3 28.7" stroke="url(#footer-logo-grad)" strokeWidth="1.5" opacity="0.4" />
                <circle cx="50" cy="20" r="4.5" className="fill-indigo-600" />
                <circle cx="50" cy="80" r="4.5" className="fill-cyan-400" />
                <circle cx="20" cy="50" r="4.5" className="fill-indigo-450" />
                <circle cx="80" cy="50" r="4.5" className="fill-cyan-500" />
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <span className="font-display font-bold text-lg tracking-wide text-white">
                  NeuraTech <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI</span>
                </span>
                <span className="block text-[7px] tracking-[0.2em] text-slate-500 font-mono uppercase font-semibold">
                  Intelligence • Automation
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Cabinet de conseil et intégrateur de solutions d'intelligence artificielle. Nous connectons vos données métiers, automatisons vos tâches et concevons vos futurs agents IA souverains.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center space-x-3 pt-2" id="footer-social-links">
              <a href="#" className="p-2 bg-slate-850 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-850 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-850 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Sitemap links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider font-semibold">Plan du site</h4>
            <ul className="space-y-2.5">
              {sitemap.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="text-slate-400 hover:text-indigo-400 text-xs transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider font-semibold">Veille Technologique IA</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Inscrivez-vous à notre newsletter mensuelle « L'Automate » pour recevoir nos analyses, retours d'expérience RAG et actualités de l'IA métier.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center space-x-2" id="newsletter-form">
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  required
                  placeholder="votre@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-brand-dark border border-slate-800 focus:border-indigo-500/50 focus:outline-none rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-600 transition-all"
                  disabled={subscribed}
                />
              </div>

              <button
                type="submit"
                className={`p-2.5 rounded-xl font-medium transition-all shadow-md shrink-0 cursor-pointer ${
                  subscribed
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/10'
                }`}
                disabled={subscribed}
              >
                {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
              </button>
            </form>
            {subscribed && (
              <p className="text-[10px] text-emerald-400 mt-1 font-mono">
                ✓ Inscription validée ! Bienvenue à bord de L'Automate.
              </p>
            )}
          </div>
        </div>

        {/* Lower footer copyright block */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} NeuraTech AI. Tous droits réservés.
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center" id="footer-legal-links">
            <a href="#" className="hover:text-slate-300 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Politique de Confidentialité (Souveraine)</a>
            <a href="#" className="hover:text-slate-300 transition-colors">CGV</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
