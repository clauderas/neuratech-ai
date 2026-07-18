import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, Sparkles, AlertCircle, Building2, Calendar, Euro, Info } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectDescription: '',
    projectType: 'agents-ia',
    budget: '5k-15k',
    timeline: '1-3-months'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const projectTypes = [
    { id: 'agents-ia', label: 'Agent IA Autonome' },
    { id: 'chatbots', label: 'Chatbot Client' },
    { id: 'rag', label: 'Moteur de RAG' },
    { id: 'workflow', label: 'Automatisation Flow' },
    { id: 'other', label: 'Autre Solution IA' }
  ];

  const budgetOptions = [
    { id: 'under-5k', label: '< 5 000 €', subtitle: 'Projet d\'audit / PoC' },
    { id: '5k-15k', label: '5k - 15k €', subtitle: 'Intégration Standard' },
    { id: '15k-50k', label: '15k - 50k €', subtitle: 'Architecture d\'Entreprise' },
    { id: 'over-50k', label: '50 000 € +', subtitle: 'Plateforme Sur-Mesure' }
  ];

  const timelineOptions = [
    { id: 'urgent', label: 'Urgent (< 1 mois)' },
    { id: '1-3-months', label: 'Normal (1-3 mois)' },
    { id: 'flexible', label: 'Flexible (3 mois +)' }
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      setErrorMsg('Veuillez remplir votre nom, e-mail et entreprise.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Save simulation entry in localstorage
      const leads = JSON.parse(localStorage.getItem('neuratech_leads') || '[]');
      leads.push({
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('neuratech_leads', JSON.stringify(leads));
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      projectDescription: '',
      projectType: 'agents-ia',
      budget: '5k-15k',
      timeline: '1-3-months'
    });
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-deep relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-6" id="contact-heading">
          <span className="inline-block text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 font-mono uppercase tracking-wider">
            Demander une Démo & Audit
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Prêt à franchir{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              le cap de l'IA ?
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Remplissez notre formulaire de consultation en 1 minute. Nos ingénieurs analysent votre demande et vous contactent sous 48 heures pour une démo personnalisée sur vos propres outils.
          </p>
        </div>

        {/* Card Frame wrapping contact module */}
        <div className="bg-brand-card/60 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden relative" id="contact-form-container">
          <div className="absolute top-[-20%] right-[-10%] w-60 h-60 bg-indigo-500/5 rounded-full filter blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8 text-left"
              >
                {/* 1. Project Type Row */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-200 block">
                    1. Quel type d'IA ou d'automatisation souhaitez-vous explorer ?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3" id="contact-project-types">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type.id })}
                        className={`p-3.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer text-center flex items-center justify-center h-12 leading-tight ${
                          formData.projectType === type.id
                            ? 'bg-indigo-500/10 border-indigo-500 text-indigo-405 shadow-[0_0_12px_rgba(99,102,241,0.15)]'
                            : 'bg-brand-dark/50 border-slate-800 hover:border-slate-700/60 text-slate-300 hover:text-white'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Grid Budget & Timeline */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Budget Options */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                      <Euro className="w-4 h-4 text-indigo-400" />
                      2. Quel est votre budget estimatif pour cette intégration ?
                    </label>
                    <div className="grid grid-cols-2 gap-3" id="contact-budgets">
                      {budgetOptions.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: opt.id })}
                          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            formData.budget === opt.id
                              ? 'bg-indigo-500/10 border-indigo-500 text-indigo-405 shadow-[0_0_12px_rgba(99,102,241,0.15)]'
                              : 'bg-brand-dark/50 border-slate-800 hover:border-slate-700/60 text-slate-300 hover:text-white'
                          }`}
                        >
                          <span className="block text-xs font-bold">{opt.label}</span>
                          <span className="block text-[10px] text-slate-500 mt-0.5 font-medium">{opt.subtitle}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline options */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-indigo-400" />
                      3. Quel est votre horizon de déploiement souhaité ?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" id="contact-timelines">
                      {timelineOptions.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: opt.id })}
                          className={`p-3.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer h-14 flex items-center justify-center leading-tight ${
                            formData.timeline === opt.id
                              ? 'bg-indigo-500/10 border-indigo-500 text-indigo-405 shadow-[0_0_12px_rgba(99,102,241,0.15)]'
                              : 'bg-brand-dark/50 border-slate-800 hover:border-slate-700/60 text-slate-300 hover:text-white'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Text inputs Contact Info */}
                <div className="space-y-4">
                  <label className="text-sm font-semibold text-slate-200 block">
                    4. Dites-nous en plus sur vous et votre projet
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Votre nom complet</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Alexandre Martin"
                        className="w-full bg-brand-dark/60 text-sm text-white placeholder-slate-600 border border-slate-800 focus:border-indigo-500/50 focus:outline-none rounded-xl px-4 py-3 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">E-mail professionnel</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Ex: a.martin@entreprise.com"
                        className="w-full bg-brand-dark/60 text-sm text-white placeholder-slate-600 border border-slate-800 focus:border-indigo-500/50 focus:outline-none rounded-xl px-4 py-3 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Nom de l'entreprise</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ex: Martin & Co"
                        className="w-full bg-brand-dark/60 text-sm text-white placeholder-slate-600 border border-slate-800 focus:border-indigo-500/50 focus:outline-none rounded-xl px-4 py-3 transition-all"
                      />
                    </div>
                  </div>

                  {/* Project description textarea */}
                  <div className="space-y-1.5 text-left pt-2">
                    <label className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Décrivez brièvement le processus à automatiser ou votre besoin IA</label>
                    <textarea
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder="Ex: Nous souhaitons automatiser l'envoi de nos contrats de prêt bancaire en lisant les données envoyées par nos clients par PDF et en rédigeant un projet de convention avec RAG..."
                      className="w-full bg-brand-dark/60 text-sm text-white placeholder-slate-600 border border-slate-800 focus:border-indigo-500/50 focus:outline-none rounded-xl p-4 transition-all resize-none leading-relaxed"
                    />
                  </div>
                </div>

                {/* Error Banner */}
                {errorMsg && (
                  <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4 flex items-center space-x-3 text-rose-400 text-xs">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Form Action submit */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                    <Info className="w-4 h-4 text-indigo-400" />
                    <span>Conformité RGPD garantie : vos données restent strictement confidentielles.</span>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-500/15 hover:shadow-indigo-500/25 transition-all disabled:opacity-55 cursor-pointer flex items-center justify-center space-x-2 animate-none"
                  >
                    <span>{isSubmitting ? 'Analyse technique...' : 'Planifier mon audit gratuit'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Success visual card representation */
              <motion.div
                key="success-form"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center max-w-xl mx-auto space-y-8"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-550/10 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-550/10">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>

                <div className="space-y-3">
                  <h3 className="font-display font-bold text-2xl text-white">Demande reçue avec succès !</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Merci <strong>{formData.name}</strong>. Nos ingénieurs architectes IA étudient actuellement le dossier technique de <strong>{formData.company}</strong>.
                  </p>
                </div>

                {/* Interactive onboarding roadmap */}
                <div className="bg-brand-dark/60 border border-slate-800 rounded-2xl p-5 text-left space-y-4">
                  <h4 className="text-xs font-bold text-indigo-400 font-mono uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                    <Sparkles className="w-4 h-4 animate-spin text-indigo-400" />
                    Prochaines étapes de votre projet :
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 text-xs text-slate-300">
                      <div className="w-5 h-5 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-[10px] font-mono text-indigo-400 shrink-0 mt-0.5">1</div>
                      <div className="leading-normal">
                        <span className="block font-bold text-white">Audit Technique Flash (sous 24h)</span>
                        <span className="text-slate-400">Analyse de vos processus de départ par un consultant NeuraTech certifié.</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 text-xs text-slate-300">
                      <div className="w-5 h-5 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-[10px] font-mono text-indigo-400 shrink-0 mt-0.5">2</div>
                      <div className="leading-normal">
                        <span className="block font-bold text-white">Proposition de démonstration personnalisée</span>
                        <span className="text-slate-400">Nous vous envoyons un e-mail à <strong>{formData.email}</strong> pour planifier notre premier appel d'idéation (15 min).</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 text-xs text-slate-300">
                      <div className="w-5 h-5 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-[10px] font-mono text-indigo-400 shrink-0 mt-0.5">3</div>
                      <div className="leading-normal">
                        <span className="block font-bold text-white">Faisabilité technique et cadrage de PoC</span>
                        <span className="text-slate-400">Établissement de la grille budgétaire définitive et de la feuille de route d'automatisation.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-slate-850 hover:bg-slate-800 border border-slate-800 text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
