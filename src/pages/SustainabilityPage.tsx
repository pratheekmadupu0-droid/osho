import React from 'react';
import { PageType } from '../types';
import { SustainabilitySection } from '../components/SustainabilitySection';
import { CallToAction } from '../components/CallToAction';
import { ChevronRight, Leaf, Droplets, Sun } from 'lucide-react';

interface SustainabilityPageProps {
  onNavigate: (page: PageType) => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-3 uppercase tracking-wider">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Sustainability</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            PROTECTING CROPS. <span className="text-emerald-400">RESPECTING TOMORROW.</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl font-light">
            Our commitment to sustainable crop protection, responsible chemical dosage, and long-term soil health.
          </p>
        </div>
      </div>

      <SustainabilitySection onNavigate={onNavigate} />

      {/* Sustainable Stewardship Pillars */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 rounded-full text-emerald-700 font-bold text-xs uppercase tracking-wider">
              STEWARDSHIP PILLARS
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              BALANCING YIELD & ENVIRONMENTAL RESPONSIBILITY
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal">
              Practical eco-conscious agricultural strategies focused on field safety and resource conservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm space-y-3 hover:border-emerald-300 transition-colors">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg inline-block">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Precise Dosage Protocols</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                Promoting targeted spray calibration and recommended water volume ratios to ensure max biological effect with minimal chemical load.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm space-y-3 hover:border-emerald-300 transition-colors">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg inline-block">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Rhizosphere & Soil Vitality</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                Supporting bio-stimulants and specialty inputs that enhance root system expansion and beneficial soil microbial activity.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm space-y-3 hover:border-emerald-300 transition-colors">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg inline-block">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Applicator Safety & PPE</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                Educating farm workers on safe handling practices, protective gloves, face shields, and responsible container rinsing and disposal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction onNavigate={onNavigate} />
    </div>
  );
};
