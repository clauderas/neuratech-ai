import { useState } from 'react';
import { Calculator, Sparkles, Calendar, TrendingDown, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ROICalculator() {
  const [teamSize, setTeamSize] = useState<number>(12);
  const [hoursWasted, setHoursWasted] = useState<number>(8); // hours per employee per week
  const [hourlyRate, setHourlyRate] = useState<number>(35); // in euros

  // Constants based on NeuraTech AI historical data
  const AUTOMATION_EFFICIENCY_GAIN = 0.65; // average 65% tasks automated
  const WEEKS_PER_YEAR = 46; // accounting for holidays
  const NEURATECH_SETUP_ESTIMATED_COST = Math.max(3500, teamSize * 450); // scales with team

  // Calculations
  const currentHoursWastedAnnual = teamSize * hoursWasted * WEEKS_PER_YEAR;
  const currentCostAnnual = currentHoursWastedAnnual * hourlyRate;

  const hoursSavedAnnual = Math.round(currentHoursWastedAnnual * AUTOMATION_EFFICIENCY_GAIN);
  const costSavedAnnual = Math.round(currentCostAnnual * AUTOMATION_EFFICIENCY_GAIN);

  const monthsToBreakEven = ((NEURATECH_SETUP_ESTIMATED_COST / (costSavedAnnual / 12))).toFixed(1);

  // Formatting helpers
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('fr-FR').format(num);
  };

  return (
    <div className="bg-brand-card/60 border border-slate-800 rounded-3xl p-6 md:p-8 relative overflow-hidden backdrop-blur-sm" id="roi-calculator-container">
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-indigo-500/10 rounded-full filter blur-2xl pointer-events-none" />

      <div className="mb-6">
        <span className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-1 rounded-full font-mono uppercase tracking-wider">
          Outil d'aide à la décision
        </span>
        <h3 className="font-display font-bold text-2xl text-white mt-2 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-indigo-400" />
          Estimez votre Retour sur Investissement
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Ajustez les curseurs ci-dessous en fonction de votre entreprise pour évaluer l'impact financier de l'IA.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sliders Input Column */}
        <div className="lg:col-span-6 space-y-6 bg-brand-dark/40 p-5 rounded-2xl border border-slate-800" id="roi-inputs">
          {/* Slider 1: Team Size */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300">Taille de l'équipe</label>
              <span className="text-sm font-mono font-bold text-indigo-400 bg-indigo-500/5 px-2 py-0.5 rounded border border-indigo-500/10">
                {teamSize} collaborateur{teamSize > 1 ? 's' : ''}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="150"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>1</span>
              <span>75</span>
              <span>150</span>
            </div>
          </div>

          {/* Slider 2: Hours wasted */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300">Saisie, relance & tâches répétitives</label>
              <span className="text-sm font-mono font-bold text-indigo-400 bg-indigo-500/5 px-2 py-0.5 rounded border border-indigo-500/10">
                {hoursWasted} h / semaine / collab
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="35"
              value={hoursWasted}
              onChange={(e) => setHoursWasted(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>2h (Léger)</span>
              <span>15h</span>
              <span>35h (Bloquant)</span>
            </div>
          </div>

          {/* Slider 3: Hourly Cost */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300">Coût horaire moyen chargé</label>
              <span className="text-sm font-mono font-bold text-indigo-400 bg-indigo-500/5 px-2 py-0.5 rounded border border-indigo-500/10">
                {hourlyRate} € / heure
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="90"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>20 € / h (PME)</span>
              <span>55 € / h</span>
              <span>90 € / h (Cadre)</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <p className="text-[10px] text-slate-400 leading-normal">
              Nos projections s'appuient sur un taux moyen d'automatisation constaté de <strong>65%</strong> sur les processus de saisie, de recherche d'information (RAG) et de support client.
            </p>
          </div>
        </div>

        {/* ROI Outputs Column */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6" id="roi-outputs">
          {/* Result cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-brand-dark/60 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between">
              <span className="text-xs text-slate-400">Temps réinvesti par an</span>
              <div className="mt-2">
                <span className="text-3xl font-display font-extrabold text-cyan-400 tracking-tight">
                  {formatNumber(hoursSavedAnnual)} h
                </span>
                <p className="text-[10px] text-emerald-400 font-medium mt-1">
                  Équivalant à {Math.round(hoursSavedAnnual / 7)} jours de travail
                </p>
              </div>
            </div>

            <div className="bg-brand-dark/60 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between">
              <span className="text-xs text-slate-400">Économie financière nette</span>
              <div className="mt-2">
                <span className="text-3xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tight">
                  {formatNumber(costSavedAnnual)} €
                </span>
                <p className="text-[10px] text-slate-400 mt-1">
                  Par an, réinjectés dans votre croissance
                </p>
              </div>
            </div>
          </div>

          {/* Savings visual comparison */}
          <div className="bg-brand-dark/50 border border-slate-800 rounded-2xl p-4 space-y-3">
            <h4 className="text-xs font-semibold text-slate-300 flex items-center justify-between">
              <span>Coût annuel de l'inefficacité actuelle</span>
              <span className="text-xs font-mono text-slate-400">{formatNumber(currentCostAnnual)} €</span>
            </h4>
            
            <div className="space-y-2">
              <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                <div className="bg-rose-500/70 h-full rounded-full" style={{ width: '100%' }} />
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>Sans NeuraTech AI (Saisie manuelle)</span>
                <span className="text-rose-400">100% de pertes</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full" style={{ width: `${100 - (AUTOMATION_EFFICIENCY_GAIN * 100)}%` }} />
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>Avec NeuraTech AI (Optimisé)</span>
                <span className="text-emerald-400">-{Math.round(AUTOMATION_EFFICIENCY_GAIN * 100)}% de coûts</span>
              </div>
            </div>
          </div>

          {/* Break even section */}
          <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-left">
              <div className="p-2.5 bg-indigo-500/10 rounded-xl">
                <Calendar className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-white">Seuil de rentabilité (Break-even)</h5>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Durée estimée pour amortir le coût d'intégration de l'IA.
                </p>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <span className="text-2xl font-display font-extrabold text-white">
                {Number(monthsToBreakEven) <= 0 ? 'Immédiat' : `${monthsToBreakEven} mois`}
              </span>
              <p className="text-[9px] font-mono text-indigo-400">Amortissement ultra-rapide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
