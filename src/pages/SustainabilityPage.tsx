import React from 'react';
import { PageType } from '../types';
import { SustainabilitySection } from '../components/SustainabilitySection';
import { CallToAction } from '../components/CallToAction';
import { ChevronRight, Leaf, ShieldCheck, HeartHandshake } from 'lucide-react';

interface SustainabilityPageProps {
  onNavigate: (page: PageType) => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 min-h-screen bg-orange-50/30">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white py-16 relative overflow-hidden border-b border-orange-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-100 mb-3 uppercase tracking-wider">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Sustainability</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading">
            SUSTAINABLE <span className="text-amber-200 font-black">AGRICULTURE</span>
          </h1>
          <p className="text-orange-50 text-base sm:text-lg mt-3 max-w-2xl font-light">
            Empowering sustainable food production, biological crop health, and environmental stewardship across Indian agriculture.
          </p>
        </div>
      </div>

      {/* Main Sustainability Component */}
      <SustainabilitySection onNavigate={onNavigate} />

      {/* Ecological Strategy Overview */}
      <section className="py-16 bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
              GREEN CROP PROTECTION FRAMEWORK
            </h2>
            <p className="text-slate-600 text-sm">
              Our ongoing initiatives for eco-friendly formulation, biological stimulants, and residue reduction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-50/40 rounded-2xl p-6 border border-orange-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">Bio-Organic Micro-Nutrients</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Developing naturally derived plant growth promoters and organic acids to enhance root uptake without chemical soil degradation.
              </p>
            </div>

            <div className="bg-orange-50/40 rounded-2xl p-6 border border-orange-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">Zero-Residue Target Profiles</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Adhering to strict pre-harvest interval (PHI) recommendations to safeguard harvested food grains and commercial produce.
              </p>
            </div>

            <div className="bg-orange-50/40 rounded-2xl p-6 border border-orange-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">Farmer Safety Training</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Conducting field safety workshops on personal protective equipment (PPE), proper nozzle calibration, and container disposal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <CallToAction onNavigate={onNavigate} />

    </div>
  );
};
