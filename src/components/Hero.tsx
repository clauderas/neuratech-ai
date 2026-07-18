import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import ChatSimulator from './ChatSimulator';

export default function Hero() {
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

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex items-center justify-center bg-brand-deep"
    >
      {/* Background glowing gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-cyan-500/5 rounded-full filter blur-[80px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Core Pitch */}
          <div className="lg:col-span-7 space-y-8 text-left" id="hero-pitch-container">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5"
            >
              <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
              <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase font-mono">
                L'IA au service de votre croissance
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] sm:leading-[1.1]">
                Propulsez votre entreprise dans{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 filter drop-shadow-[0_2px_15px_rgba(99,102,241,0.15)]">
                  l'ère de l'automatisation.
                </span>
              </h1>
            </motion.div>

            {/* Subtitle description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans"
            >
              NeuraTech AI conçoit des agents autonomes intelligents, des systèmes RAG hautement sécurisés et des flux de travail automatisés sur mesure pour éliminer vos inefficacités et décupler votre productivité.
            </motion.p>

            {/* CTA and Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={() => handleScrollTo('contact')}
                className="px-8 py-4 rounded-xl text-base font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center space-x-2 border border-white/10 cursor-pointer"
                id="hero-primary-cta"
              >
                <span>Démarrez votre transformation</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => handleScrollTo('expertises')}
                className="px-8 py-4 rounded-xl text-base font-bold text-white bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                id="hero-secondary-cta"
              >
                <span>Découvrir nos solutions</span>
              </button>
            </motion.div>

            {/* Core Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left max-w-xl"
              id="hero-trust-indicators"
            >
              <div className="space-y-1">
                <span className="block text-2xl font-display font-extrabold text-white">40%+</span>
                <span className="block text-xs text-slate-500 font-medium">De gain d'efficacité moyen</span>
              </div>
              <div className="space-y-1">
                <span className="block text-2xl font-display font-extrabold text-indigo-400">100%</span>
                <span className="block text-xs text-slate-500 font-medium">Souveraineté des données (RGPD)</span>
              </div>
              <div className="space-y-1 col-span-2 sm:col-span-1">
                <span className="block text-2xl font-display font-extrabold text-cyan-400">&lt; 3 mois</span>
                <span className="block text-xs text-slate-500 font-medium">Seuil de rentabilité (ROI)</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Interactive Chat Simulator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 w-full"
            id="hero-visual-side"
          >
            <div className="relative">
              {/* Decorative light ring around chat widget */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl filter blur-xl opacity-20 animate-pulse pointer-events-none" />
              <ChatSimulator />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
