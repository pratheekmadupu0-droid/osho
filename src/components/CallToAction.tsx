import React from 'react';
import { ArrowRight, Mail, Sprout } from 'lucide-react';
import { PageType } from '../types';

interface CallToActionProps {
  onNavigate: (page: PageType) => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-white">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg className="w-full h-full stroke-white fill-none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90%" cy="50%" r="300" strokeWidth="2" strokeDasharray="8 8" />
          <circle cx="10%" cy="50%" r="200" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-1 rounded-full">
          <Sprout className="w-4 h-4 text-amber-200" />
          <span className="text-xs font-bold uppercase tracking-widest text-amber-100">
            PARTNER WITH PRINSTAN AGRI CARE
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          LET'S GROW A BETTER FUTURE
        </h2>

        <p className="text-base sm:text-xl text-orange-50 font-normal max-w-2xl mx-auto">
          Discover crop protection solutions designed for modern agriculture.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('products')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-md shadow-2xl transition-all duration-300 group"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-orange-50 text-orange-600 font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-md shadow-xl transition-all duration-300"
          >
            <Mail className="w-4 h-4 text-orange-600" />
            <span>Contact Us</span>
          </button>
        </div>

      </div>
    </section>
  );
};
