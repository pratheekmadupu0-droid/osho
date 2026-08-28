import React from 'react';
import { PageType } from '../types';
import { QualitySection } from '../components/QualitySection';
import { CallToAction } from '../components/CallToAction';
import { ChevronRight, Microscope } from 'lucide-react';

interface QualityPageProps {
  onNavigate: (page: PageType) => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header Banner */}
      <div className="bg-slate-950 text-white py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 mb-3 uppercase tracking-wider">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Quality Standards</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            QUALITY AT <span className="text-orange-500">EVERY STEP</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl font-light">
            Scientific analytical protocols, formulation testing, and stringent quality control powering reliable agricultural inputs.
          </p>
        </div>
      </div>

      <QualitySection />

      {/* Laboratory Science Deep Dive */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-orange-600 font-bold text-xs uppercase tracking-wider">
                <Microscope className="w-4 h-4 text-orange-600" />
                <span>LABORATORY PROTOCOLS</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Rigorous Formulations Testing Framework
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                At OSHO CROP CARE PVT. LTD., our commitment to quality starts long before a container reaches the farm retail counter. Raw technical materials are subjected to comprehensive identity testing, specific gravity testing, active ingredient quantitative assay, and solubility verification.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Batch retain samples are archived under controlled environmental conditions to monitor stability across thermal fluctuations, ensuring that products remain effective throughout their designated shelf life.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop"
                alt="Scientific crop testing and laboratory analysis"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white font-bold text-sm">
                Scientific analytical verification & quality assurance.
              </div>
            </div>

          </div>
        </div>
      </section>

      <CallToAction onNavigate={onNavigate} />
    </div>
  );
};
