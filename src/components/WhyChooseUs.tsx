import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      num: '01',
      title: 'CROP PROTECTION',
      desc: 'Focused agricultural protection solutions crafted to defend cash crops against devastating insects, weeds, and fungal pathogens.'
    },
    {
      num: '02',
      title: 'QUALITY FOCUS',
      desc: 'Unwavering commitment to consistent product quality, HPLC analytical purity, and reliable field performance.'
    },
    {
      num: '03',
      title: 'FARMER CENTRIC',
      desc: 'Solutions designed around real agricultural needs, supporting farmer livelihood, crop yield, and economic return.'
    },
    {
      num: '04',
      title: 'AGRI INNOVATION',
      desc: 'Continuously evolving agricultural solutions, modern formulation chemistry, and sustainable bio-organic crop care.'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE OSHO ADVANTAGE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
              WHY GROWERS & DISTRIBUTORS <br />
              <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-amber-200 bg-clip-text text-transparent font-black">
                TRUST OSHO CROP CARE
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((pt, idx) => (
            <ScrollReveal key={pt.num} animation="fade-up" delay={idx * 120}>
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 group relative flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <span className="text-4xl font-extrabold text-orange-500 font-mono tracking-tighter block group-hover:scale-110 transition-transform origin-left">
                    {pt.num}
                  </span>

                  <h3 className="text-base font-extrabold text-white group-hover:text-orange-400 transition-colors tracking-tight font-heading">
                    {pt.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {pt.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-900 flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  <span>OSHO COMMITMENT</span>
                  <div className="w-6 h-0.5 bg-orange-500 group-hover:w-12 transition-all duration-300" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
