import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, RotateCcw, Mail, Search, Brain, Bell, CheckCircle2, ChevronRight, Loader2, Sparkles } from 'lucide-react';
import { WORKFLOW_STEPS_DEMO } from '../data';

interface Step {
  id: string;
  title: string;
  type: string;
  status: 'idle' | 'running' | 'completed';
  description: string;
  icon: string;
  details: string;
}

export default function WorkflowSimulator() {
  const [steps, setSteps] = useState<Step[]>(
    WORKFLOW_STEPS_DEMO.map(step => ({ ...step, status: 'idle' })) as Step[]
  );
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [logs, setLogs] = useState<string[]>([
    "Système prêt. Cliquez sur 'Lancer la simulation' pour tester un pipeline automatisé."
  ]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
  };

  const startSimulation = async () => {
    if (isSimulating) return;
    
    setIsSimulating(true);
    setLogs([]);
    addLog("Initialisation du pipeline NeuraTech AI...");
    
    // Reset all step statuses to idle
    setSteps(prev => prev.map(s => ({ ...s, status: 'idle' })));
    setCurrentStepIndex(0);

    // Run simulation sequences
    for (let i = 0; i < steps.length; i++) {
      setCurrentStepIndex(i);
      setSteps(prev => prev.map((s, idx) => idx === i ? { ...s, status: 'running' } : s));
      
      if (i === 0) {
        addLog("🔔 Déclencheur intercepté : Nouvelle demande reçue de client@entreprise.com.");
        addLog("Sujet extrait : 'Demande d'intégration d'un chatbot client sur Shopify'.");
      } else if (i === 1) {
        addLog("🔍 Interrogation de la base vectorielle d'entreprise (RAG)...");
        addLog("Récupération sémantique réussie de la grille tarifaire 2026 et de 3 modèles de contrats e-commerce.");
      } else if (i === 2) {
        addLog("🤖 Appel du modèle Llama-3.3-70B via Groq pour synthétiser les informations...");
        addLog("Génération du brouillon de devis commercial personnalisé (Durée : 1.1s, Jetons : 4,200).");
      } else if (i === 3) {
        addLog("⚡ Synchronisation avec l'API Salesforce : Opportunité #4092 créée (Statut : Proposition émise).");
        addLog("📨 Envoi d'un message de confirmation Slack à l'équipe commerciale #ventes.");
      }

      // Delay to simulate process
      await new Promise(resolve => setTimeout(resolve, 2200));

      setSteps(prev => prev.map((s, idx) => idx === i ? { ...s, status: 'completed' } : s));
      addLog(`✓ Étape ${i + 1} terminée avec succès.`);
    }

    setIsSimulating(false);
    setCurrentStepIndex(-1);
    addLog("🚀 Pipeline d'automatisation exécuté avec succès en 8.8 secondes (Économie : 15 minutes manuelles).");
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Mail': return <Mail className="w-5 h-5 text-cyan-400" />;
      case 'SearchCode': return <Search className="w-5 h-5 text-indigo-400" />;
      case 'BrainCircuit': return <Brain className="w-5 h-5 text-cyan-400" />;
      case 'BellRing': return <Bell className="w-5 h-5 text-indigo-400" />;
      default: return <Mail className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <div className="bg-brand-card/60 border border-slate-800 rounded-3xl p-6 relative overflow-hidden backdrop-blur-sm" id="workflow-simulator-card">
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full filter blur-2xl pointer-events-none" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            Simulateur d'Automatisation de Workflows
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Découvrez comment NeuraTech AI orchestre vos outils et injecte l'IA dans vos tâches quotidiennes.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={startSimulation}
            disabled={isSimulating}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center space-x-2 disabled:opacity-50 transition-all shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-95 cursor-pointer"
          >
            {isSimulating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Simulation en cours...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white text-white" />
                <span>Lancer la simulation</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Workflow Steps Lineup */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 relative mb-6" id="workflow-steps-grid">
        {steps.map((step, index) => {
          const isCurrent = index === currentStepIndex;
          const isCompleted = step.status === 'completed';
          const isRunning = step.status === 'running';

          return (
            <div key={step.id} className="relative flex items-center">
              <div
                className={`w-full bg-brand-dark/80 rounded-2xl p-4 border transition-all duration-300 relative ${
                  isRunning
                    ? 'border-indigo-500 bg-brand-dark shadow-[0_0_15px_rgba(99,102,241,0.15)] translate-y-[-4px]'
                    : isCompleted
                    ? 'border-emerald-500/50'
                    : 'border-slate-800'
                }`}
              >
                {/* Visual Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-4 h-0.5 z-10 pointer-events-none">
                    <div className={`h-full w-full ${isCompleted ? 'bg-emerald-500/60' : 'bg-slate-800'}`} />
                  </div>
                )}

                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl ${
                    isRunning ? 'bg-indigo-500/10' : 'bg-slate-800/40'
                  }`}>
                    {getIconComponent(step.icon)}
                  </div>

                  {/* Status Indicator */}
                  <div>
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 filter drop-shadow-[0_0_4px_rgba(16,185,129,0.4)]" />
                    ) : isRunning ? (
                      <Loader2 className="w-5 h-5 text-indigo-400 animate-spin" />
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    )}
                  </div>
                </div>

                <h4 className="font-display font-semibold text-white text-sm">
                  {step.title}
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 h-8 leading-normal">
                  {step.description}
                </p>

                {/* Sub info */}
                <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-slate-500 tracking-wider">
                    {step.type.toUpperCase()}
                  </span>
                  {isRunning && (
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="text-[9px] font-mono text-indigo-400"
                    >
                      Traitement...
                    </motion.span>
                  )}
                </div>

                {/* Micro-detail tooltip on hover or when running */}
                {(isCurrent || isCompleted) && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-3 right-3 bottom-full mb-2 bg-slate-900 border border-slate-800 rounded-lg p-2 shadow-xl z-20"
                  >
                    <p className="text-[10px] font-mono text-cyan-400 leading-normal">
                      {step.details}
                    </p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-900" />
                  </motion.div>
                )}
              </div>
              
              {/* Mobile arrows between sections */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center w-full py-2">
                  <ChevronRight className="w-5 h-5 text-slate-700 rotate-90" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Terminal Output logs */}
      <div className="bg-brand-dark border border-slate-800 rounded-2xl p-4 font-mono text-xs text-slate-300 shadow-inner h-[130px] overflow-y-auto flex flex-col justify-start">
        <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] text-slate-500 ml-2">CONSOLES LOGS - NEURATECH CORE</span>
          </div>
          <span className="text-[9px] text-slate-500 font-sans">Active Server</span>
        </div>
        <div className="space-y-1 select-all" id="terminal-logs">
          {logs.map((log, i) => (
            <div
              key={i}
              className={`leading-relaxed ${
                log.includes('✓') || log.includes('succès')
                  ? 'text-emerald-400'
                  : log.includes('🔔')
                  ? 'text-cyan-400'
                  : log.includes('🤖')
                  ? 'text-indigo-400'
                  : 'text-slate-400'
              }`}
            >
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
