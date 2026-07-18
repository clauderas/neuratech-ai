import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Sparkles, MessageSquare } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Expertises from './components/Expertises';
import Benefits from './components/Benefits';
import WorkflowSimulator from './components/WorkflowSimulator';
import Approach from './components/Approach';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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

  return (
    <div className="bg-brand-deep min-h-screen text-gray-100 font-sans antialiased overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Dynamic Navigation Header */}
      <Header />

      {/* Hero Header Presentation Screen */}
      <Hero />

      {/* Main content flow */}
      <main>
        {/* Nos Expertises Section */}
        <Expertises />

        {/* Pourquoi Nous Choisir / Bénéfices Section */}
        <Benefits />

        {/* Interactive Automation Lab Section (WorkflowSimulator) */}
        <section className="py-20 bg-brand-deep relative overflow-hidden border-t border-b border-white/5">
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Lab Intro */}
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-6">
              <span className="inline-block text-[10px] font-mono tracking-wider text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full border border-cyan-400/20 uppercase">
                Laboratoire d'Innovation
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                L'IA en Action : Notre Lab d'Automatisation
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Visualisez la puissance d'un pipeline d'IA décisionnel en temps réel. Découvrez comment nous connectons vos services d'entreprise pour accélérer le traitement de vos flux de données.
              </p>
            </div>

            {/* Workflow Simulator Block */}
            <WorkflowSimulator />
          </div>
        </section>

        {/* Notre Approche Section */}
        <Approach />

        {/* Formulaire de Contact Section */}
        <ContactForm />
      </main>

      {/* Sleek Footer Section */}
      <Footer />

      {/* Floating Action Buttons UI */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3" id="floating-actions-dock">
        {/* Scroll back to top */}
        {showScrollTop && (
          <button
            onClick={handleScrollToTop}
            className="p-3 bg-brand-card hover:bg-brand-card/90 text-gray-400 hover:text-white rounded-full border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 active:translate-y-0 shadow-lg"
            title="Retour en haut"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Quick contact trigger */}
        <button
          onClick={handleScrollToContact}
          className="p-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/35 hover:scale-110 active:scale-95 transition-all flex items-center justify-center border border-white/10 group cursor-pointer"
          title="Prendre rendez-vous"
        >
          <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 text-xs font-semibold tracking-wide uppercase transition-all duration-300 whitespace-nowrap">
            Parler à un expert
          </span>
        </button>
      </div>

    </div>
  );
}
