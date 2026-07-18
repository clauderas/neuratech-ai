import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Calendar, ArrowRight, Lightbulb, Code2, Rocket, Settings, Search, ChevronRight } from 'lucide-react';
import { APPROACH_STEPS } from '../data';

export default function Approach() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (stepNum: number) => {
    switch (stepNum) {
      case 1: return <Search className="w-5 h-5 text-cyan-400" />;
      case 2: return <Lightbulb className="w-5 h-5 text-indigo-400" />;
      case 3: return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 4: return <Rocket className="w-5 h-5 text-indigo-400" />;
      case 5: return <Settings className="w-5 h-5 text-cyan-400" />;
      default: return <Search className="w-5 h-5 text-indigo-400" />;
    }
  };

  const handleScrollToContact = () => {
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

  const currentStepData = APPROACH_STEPS.find(s => s.stepNumber === activeStep) || APPROACH_STEPS[0];

  return (
    <section id="approach" className="py-20 md:py-28 bg-brand-deep relative">
      <div className="absolute top-[20%] left-[-10%] w-72 h-72 bg-indigo-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6" id="approach-heading">
          <span className="inline-block text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 font-mono uppercase tracking-wider">
            Notre Méthodologie
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Une approche rigoureuse pour des{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              résultats garantis
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Nous combinons l'Intelligence Artificielle, la valorisation de vos Données propriétaires et l'Automatisation logicielle pour structurer des projets fiables au ROI mesurable et rapide.
          </p>
        </div>

        {/* Interactive Steps Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="approach-interactive-container">
          
          {/* Left Column: 1-5 Horizontal Timeline selectors */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-center" id="approach-selectors">
            {APPROACH_STEPS.map((step) => {
              const isActive = step.stepNumber === activeStep;

              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 flex items-center space-x-4 cursor-pointer relative ${
                    isActive
                      ? 'bg-brand-card border-indigo-500/50 shadow-[0_4px_20px_rgba(99,102,241,0.08)]'
                      : 'bg-brand-card/40 border-slate-800 hover:bg-brand-card/70 hover:border-slate-700/60'
                  }`}
                >
                  {/* Step badge number or icon */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                    isActive
                      ? 'bg-indigo-500/10 border-indigo-500'
                      : 'bg-slate-800/40 border-slate-800'
                  }`}>
                    {isActive ? getStepIcon(step.stepNumber) : (
                      <span className="font-display font-bold text-slate-500 text-sm">{step.stepNumber}</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] text-slate-500 font-mono tracking-wider uppercase font-medium">Étape {step.stepNumber}</span>
                    <h3 className={`font-display font-bold text-sm sm:text-base tracking-tight truncate ${
                      isActive ? 'text-white' : 'text-slate-400'
                    }`}>
                      {step.title}
                    </h3>
                  </div>

                  <ChevronRight className={`w-5 h-5 text-slate-500 transition-transform ${
                    isActive ? 'rotate-90 text-indigo-400' : ''
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Step Card description */}
          <div className="lg:col-span-7 flex" id="approach-detail-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-brand-card/60 border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between w-full relative overflow-hidden backdrop-blur-sm"
              >
                {/* Visual watermark */}
                <div className="absolute right-0 bottom-0 text-[180px] font-black text-white/[0.01] select-none pointer-events-none leading-none translate-y-20 translate-x-10 font-display">
                  0{currentStepData.stepNumber}
                </div>

                <div className="space-y-6">
                  {/* Step details header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-xs text-indigo-400 font-mono uppercase tracking-wider font-semibold">L'approche en détail</span>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">
                        {currentStepData.title}
                      </h3>
                      <p className="text-xs text-slate-400 italic mt-0.5">{currentStepData.subtitle}</p>
                    </div>

                    {/* Duration badge */}
                    <div className="inline-flex items-center space-x-2 bg-slate-800/40 border border-slate-800 rounded-full px-3 py-1 shrink-0 self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span className="text-[11px] font-mono text-slate-300 font-medium">
                        {currentStepData.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description paragraph */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {currentStepData.description}
                  </p>

                  {/* Checklist Items */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider font-semibold">
                      Livrables & Actions clés
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentStepData.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start bg-brand-dark/30 p-3 rounded-xl border border-slate-800">
                          <Check className="w-4 h-4 text-indigo-400 mr-2 shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-300 leading-normal">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Final step action redirect */}
                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                  <p className="text-xs text-slate-400">
                    Prêt à lancer l'étape d'audit gratuit pour votre activité ?
                  </p>
                  <button
                    onClick={handleScrollToContact}
                    className="w-full sm:w-auto px-5 py-2.5 bg-slate-850 hover:bg-slate-800 border border-slate-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer"
                  >
                    <span>Lancer un audit</span>
                    <ArrowRight className="w-4 h-4 text-indigo-400" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
