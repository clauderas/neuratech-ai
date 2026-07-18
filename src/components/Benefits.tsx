import { motion } from 'motion/react';
import { TrendingUp, Zap, Smile, Award, CheckCircle2 } from 'lucide-react';
import { BENEFITS } from '../data';
import ROICalculator from './ROICalculator';

export default function Benefits() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-indigo-400" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-cyan-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-indigo-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-brand-deep relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Column layout: Qui sommes-nous introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="about-intro-grid">
          {/* Left: Brand Identity statement */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="inline-block text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 font-mono uppercase tracking-wider">
              Qui sommes-nous ?
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              L'alliance de l'intelligence artificielle et de l'automatisation.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Chez <strong>NeuraTech AI</strong>, nous croyons que l'avenir appartient aux entreprises capables de déléguer leurs tâches répétitives à des machines intelligentes pour libérer leur génie créatif.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Composée d'ingénieurs en IA, de développeurs full-stack et d'experts en optimisation de processus, notre équipe conçoit des architectures logicielles autonomes, fiables et sur mesure. Nous intégrons les LLM les plus récents (comme Gemini) au cœur de vos outils métiers existants pour en maximiser l'impact, tout en garantissant un respect rigoureux du RGPD et une isolation étanche de vos données propriétaires.
            </p>
          </div>

          {/* Right: core benefits cards layout */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4" id="about-benefits-subgrid">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-brand-card/40 border border-slate-800 rounded-2xl p-5 space-y-4 hover:border-indigo-500/20 hover:shadow-indigo-500/5 transition-all text-left flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-dark flex items-center justify-center border border-slate-800">
                    {getIconComponent(benefit.iconName)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-white">
                      {benefit.title}
                    </h4>
                    <p className="text-slate-400 text-xs mt-1.5 leading-normal">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {/* Big Metric row */}
                <div className="pt-3 border-t border-slate-800 mt-2">
                  <span className="block text-2xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                    {benefit.metric}
                  </span>
                  <span className="block text-[10px] text-slate-500 font-mono tracking-wider uppercase mt-0.5">
                    {benefit.metricLabel}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integrated ROI Calculator Module */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <ROICalculator />
        </motion.div>

      </div>
    </section>
  );
}
