import React from 'react';
import { CheckCircle2, Microscope, ShieldCheck, Leaf, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const QualitySection: React.FC = () => {
  const principles = [
    {
      icon: Microscope,
      title: 'ANALYTICAL PURITY TESTING',
      desc: 'High-performance liquid chromatography (HPLC) & Gas chromatography verification of technical actives.'
    },
    {
      icon: ShieldCheck,
      title: 'FORMULATION STABILITY',
      desc: 'Extensive accelerated heat & cold storage testing ensuring shelf-life integrity under diverse tropical conditions.'
    },
    {
      icon: CheckCircle2,
      title: 'BATCH CONSISTENCY CONTROL',
      desc: 'Strict multi-stage quality control from raw material receipt through formulation, filling, and packaging.'
    },
    {
      icon: Leaf,
      title: 'FIELD EFFICACY VALIDATION',
      desc: 'Rigorous multi-location crop trial evaluations ensuring pest suppression and crop safety thresholds.'
    }
  ];

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>QUALITY & SCIENCE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              SCIENTIFIC RIGOR & <br />
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                QUALITY ASSURANCE
              </span>
            </h2>

            <p className="text-slate-600 text-base font-normal leading-relaxed">
              Every OSHO crop protection formulation undergoes stringent multi-stage quality checks to ensure maximum bio-efficacy and product integrity in the field.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Cards Grid with ScrollReveal Staggering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 hover:border-orange-500 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full relative">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors tracking-tight font-heading">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200/60 mt-6 flex items-center justify-between text-[10px] font-extrabold text-slate-400 uppercase tracking-widest group-hover:text-orange-600 transition-colors">
                    <span>STANDARD 0{idx + 1}</span>
                    <span className="w-2 h-2 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
