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
    <div className="pt-24 min-h-screen bg-orange-50/30">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white py-16 relative overflow-hidden border-b border-orange-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-100 mb-3 uppercase tracking-wider">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Quality & R&D</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading">
            ANALYTICAL QUALITY & <span className="text-amber-200 font-black">R&D</span>
          </h1>
          <p className="text-orange-50 text-base sm:text-lg mt-3 max-w-2xl font-light">
            ISO 9001:2015 certified quality controls, active purity HPLC analysis, and comprehensive field trial validation.
          </p>
        </div>
      </div>

      {/* Main Quality Section */}
      <QualitySection />

      {/* Laboratory Science Deep Dive */}
      <section className="py-20 bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 border border-orange-200 rounded-full text-orange-700 font-bold text-xs uppercase tracking-wider">
                <Microscope className="w-4 h-4 text-orange-600" />
                <span>LABORATORY PROTOCOLS</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
                Rigorous Formulations Testing Framework
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                At OSHO CROP CARE PVT. LTD., our commitment to quality starts long before a container reaches the farm retail counter. Raw technical materials are subjected to comprehensive identity testing, specific gravity testing, active ingredient quantitative assay, and solubility verification.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Batch retain samples are archived under controlled environmental conditions to monitor stability across thermal fluctuations, ensuring that products remain effective throughout their designated shelf life.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-orange-200">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop"
                alt="Scientific crop testing and laboratory analysis"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md border border-orange-200 rounded-xl text-slate-900 text-xs font-semibold">
                HPLC High-Performance Chromatography Assay Testing
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <CallToAction onNavigate={onNavigate} />
    </div>
  );
};
