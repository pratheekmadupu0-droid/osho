import React from 'react';
import { PageType } from '../types';
import { Leaf, Droplets, Sun, ShieldCheck, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface SustainabilitySectionProps {
  onNavigate: (page: PageType) => void;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ onNavigate }) => {
  const pillars = [
    {
      icon: Leaf,
      title: 'TARGETED SPRAY EFFICACY',
      desc: 'Formulations engineered for optimal foliar adherence and canopy coverage, minimizing chemical run-off.'
    },
    {
      icon: Droplets,
      title: 'ENVIRONMENTAL STEWARDSHIP',
      desc: 'Adherence to stringent environmental safety benchmarks to protect non-target beneficial soil microbes.'
    },
    {
      icon: Sun,
      title: 'CROP RESILIENCE ENHANCEMENT',
      desc: 'Supporting plant vigor and physiological stress tolerance against heat, drought, and pest vector pressure.'
    },
    {
      icon: ShieldCheck,
      title: 'RESPONSIBLE USE & TRAINING',
      desc: 'Promoting proper dosage, correct application timing, and safe handling practices for agricultural applicators.'
    }
  ];

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-orange-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200 text-xs font-mono font-bold uppercase tracking-widest">
              <Leaf className="w-3.5 h-3.5 text-orange-600" />
              <span>RESPONSIBLE STEWARDSHIP</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              COMMITMENT TO <br />
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                SUSTAINABLE AGRICULTURE
              </span>
            </h2>

            <p className="text-slate-600 text-base font-normal leading-relaxed">
              Balancing crop protection power with environmental responsibility to ensure long-term soil health and agricultural sustainability for future generations.
            </p>
          </div>
        </ScrollReveal>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="bg-orange-50/40 p-8 rounded-2xl border border-orange-200 hover:border-orange-500 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors font-heading">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-orange-100 mt-6 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest group-hover:text-orange-600 transition-colors">
                    PILLAR 0{idx + 1}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal animation="fade-up" delay={400}>
          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('sustainability')}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-600/30 transition-all group"
            >
              <span>READ OUR SUSTAINABILITY INITIATIVES</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
