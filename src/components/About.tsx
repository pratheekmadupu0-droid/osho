import React from 'react';
import { PageType } from '../types';
import { ArrowRight, ShieldCheck, Sprout } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface AboutProps {
  onNavigate: (page: PageType) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial 60/40 Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Statement & Editorial Copy with Scroll Reveal */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-600 border border-orange-200/60 text-xs font-mono font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-orange-600 animate-ping" />
                <span>OUR CORPORATE PURPOSE</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={200}>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                AGRICULTURE DESERVES<br />
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  BETTER PROTECTION.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={300}>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                At OSHO CROP CARE PVT. LTD., we believe that protecting crops is essential to securing agricultural productivity and supporting farming communities. As modern agriculture faces evolving pest challenges, climate variability, and pressure for higher yields, access to dependable crop protection chemistry becomes paramount.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={400}>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Our focus centers on delivering targeted insecticides, fungicides, herbicides, and plant nutrition formulations designed to defend cash crops, cereals, pulses, and horticulture. We prioritize quality control, product safety, and practical agronomic utility to help growers achieve healthy crop canopies and bountiful harvests.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={500}>
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-3 bg-slate-900 hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg hover:shadow-orange-600/30 transition-all duration-300 group"
                >
                  <span>Discover OSHO</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 border-l border-slate-200 pl-6">
                  <ShieldCheck className="w-5 h-5 text-orange-600" />
                  <span>ISO 9001:2015 Quality Certified</span>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: High-Resolution Real Field Photograph with Scroll Reveal & Hover Effects */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal animation="zoom-in" delay={300}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
                  alt="Real Indian agricultural field with green crop rows"
                  className="w-full h-[460px] object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="inline-flex items-center gap-2 bg-orange-600 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-md shadow">
                    <Sprout className="w-3 h-3" />
                    <span>FIELD ADVISORY & PROTECTION</span>
                  </div>
                  <h4 className="font-extrabold text-base sm:text-lg text-white">
                    Supporting Farmers across Key Agro-Climatic Belts
                  </h4>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
