import React from 'react';
import { PageType } from '../types';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

interface CallToActionProps {
  onNavigate: (page: PageType) => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white relative overflow-hidden shadow-2xl">
      {/* Decorative Light Elements */}
      <div className="absolute -right-12 -bottom-12 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute left-10 top-0 w-64 h-64 bg-amber-300/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-mono font-bold uppercase tracking-widest backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" />
          <span>JOIN THE OSHO DISTRIBUTOR NETWORK</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading max-w-3xl mx-auto leading-tight">
          READY TO ELEVATE YOUR AGRICULTURAL YIELDS?
        </h2>

        <p className="text-orange-50 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Contact our technical agronomic team today to inquire about product distribution, custom dosage schedules, or bulk commercial orders.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-orange-50 text-orange-600 font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>GET IN TOUCH WITH AN AGRO-ADVISOR</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:18004256746"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-950/40 hover:bg-orange-950/60 border border-white/30 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all backdrop-blur-md"
          >
            <PhoneCall className="w-4 h-4 text-amber-300" />
            <span>TOLL-FREE: 1800-425-6746</span>
          </a>
        </div>

      </div>
    </section>
  );
};
