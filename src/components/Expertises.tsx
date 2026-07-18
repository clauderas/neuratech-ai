import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, MessageSquare, Database, Network, BarChart3, Sparkles, Check, ChevronRight, X, ArrowRight } from 'lucide-react';
import { EXPERTISES } from '../data';
import { Expertise } from '../types';

export default function Expertises() {
  const [selectedExpertise, setSelectedExpertise] = useState<Expertise | null>(null);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'MessageSquareCode':
        return <MessageSquare className="w-6 h-6 text-indigo-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-cyan-400" />;
      case 'Workflow':
        return <Network className="w-6 h-6 text-indigo-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      default:
        return <Cpu className="w-6 h-6 text-indigo-400" />;
    }
  };

  const handleScrollToContact = () => {
    setSelectedExpertise(null);
    const element = document.getElementById('contact');
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
    <section id="expertises" className="py-20 md:py-28 bg-brand-dark/30 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6" id="expertises-heading">
          <span className="inline-block text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 font-mono uppercase tracking-wider">
            Notre Catalogue d'Expertises
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Des solutions IA calibrées pour{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              vos performances
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Nous ne faisons pas d'IA pour le plaisir de la tech. Nous assemblons les meilleures briques technologiques existantes pour créer des solutions fiables, sécurisées et rentables pour vos équipes.
          </p>
        </div>

        {/* Expertises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="expertises-grid">
          {EXPERTISES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setSelectedExpertise(exp)}
              className="bg-brand-card/55 border border-slate-800 hover:border-indigo-500/30 rounded-2xl p-6 transition-all cursor-pointer flex flex-col justify-between group relative shadow-md hover:shadow-indigo-500/10"
            >
              <div className="space-y-4">
                {/* Card Icon Header */}
                <div className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform duration-300">
                  {getIconComponent(exp.iconName)}
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-indigo-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    {exp.shortDescription}
                  </p>
                </div>

                {/* Key features bullets list preview */}
                <ul className="space-y-1.5 pt-2 border-t border-slate-800">
                  {exp.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-indigo-400 mr-2 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Action */}
              <div className="pt-5 flex items-center justify-between mt-4">
                {/* Tech Badges mini-row */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack.slice(0, 2).map((tech, i) => (
                    <span key={i} className="text-[9px] font-mono bg-white/5 text-slate-500 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <span className="text-xs text-indigo-400 font-semibold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>Étude de cas</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Showcase Modal - Detailed Case Study Spotlight */}
        <AnimatePresence>
          {selectedExpertise && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="expertise-detail-modal">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedExpertise(null)}
                className="absolute inset-0 bg-brand-deep/80 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-brand-card border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl z-10 flex flex-col"
              >
                {/* Glow Ring inside modal */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full filter blur-2xl pointer-events-none" />

                {/* Modal Header */}
                <div className="p-6 border-b border-slate-800 flex items-start justify-between bg-brand-dark/40">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-deep border border-slate-800 flex items-center justify-center">
                      {getIconComponent(selectedExpertise.iconName)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                        {selectedExpertise.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-1.5">
                        {selectedExpertise.techStack.map((tech, i) => (
                          <span key={i} className="text-[10px] font-mono bg-indigo-400/10 text-indigo-400 border border-indigo-400/25 px-2 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedExpertise(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-6">
                  {/* Detailed Description */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-indigo-400 font-mono uppercase tracking-wider">Description de l'expertise</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {selectedExpertise.fullDescription}
                    </p>
                  </div>

                  {/* Capabilities Bullet points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-3 bg-brand-dark/30 p-4 rounded-xl border border-slate-800">
                      <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">Fonctionnalités Clés</h4>
                      <ul className="space-y-2">
                        {selectedExpertise.features.map((feat, i) => (
                          <li key={i} className="flex items-start text-xs text-slate-300 leading-normal">
                            <Check className="w-4 h-4 text-indigo-400 mr-2 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use Case Spotlight */}
                    <div className="bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 p-4 rounded-xl border border-indigo-500/10 space-y-3">
                      <h4 className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-mono uppercase tracking-wider flex items-center">
                        🔍 CAS D'USAGE REEL & ROI
                      </h4>
                      <div className="space-y-2.5 text-xs">
                        <div>
                          <span className="block font-semibold text-rose-400">Le problème :</span>
                          <span className="text-slate-400 leading-relaxed">{selectedExpertise.useCase.problem}</span>
                        </div>
                        <div>
                          <span className="block font-semibold text-indigo-400">La solution NeuraTech :</span>
                          <span className="text-slate-400 leading-relaxed">{selectedExpertise.useCase.solution}</span>
                        </div>
                        <div className="pt-1.5 border-t border-slate-800">
                          <span className="block font-bold text-emerald-400">L'impact :</span>
                          <span className="text-white font-medium leading-relaxed">{selectedExpertise.useCase.impact}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-slate-800 bg-brand-dark/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-400 text-center sm:text-left">
                    Intéressé par cette expertise pour votre activité ?
                  </p>
                  <button
                    onClick={handleScrollToContact}
                    className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
                  >
                    <span>En discuter avec un expert</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
