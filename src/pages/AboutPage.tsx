import React from 'react';
import { PageType } from '../types';
import { About } from '../components/About';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CallToAction } from '../components/CallToAction';
import { ChevronRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-slate-950 text-white py-16 relative overflow-hidden border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-400 mb-3 uppercase tracking-wider">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">About Us</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading">
            ABOUT <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">OSHO CROP CARE</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-2xl font-light">
            An agricultural corporate dedicated to targeted crop protection formulations, farmer empowerment, and reliable field solutions.
          </p>
        </div>
      </div>

      {/* Main Purpose Section */}
      <About onNavigate={onNavigate} />

      {/* Digestible Editorial Story Blocks */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Block 1: OUR STORY & OUR PURPOSE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-600">
                <span className="w-2.5 h-0.5 bg-orange-600 inline-block" />
                <span>/ OUR STORY & PURPOSE</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
                Empowering Agriculture Through Targeted Chemistry
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                OSHO CROP CARE PVT. LTD. was established to address the critical need for consistent, reliable crop defense inputs across cash crops, cereals, and vegetables. We understand that pest pressure and plant disease can severely impact a farmer's seasonal economic livelihood.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Our purpose is straightforward: deliver high-efficacy insecticides, fungicides, herbicides, and growth promoters that give growers confidence in the field.
              </p>
            </div>

            <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000&auto=format&fit=crop"
                alt="Crop protection field application"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Block 2: OUR APPROACH & OUR VALUES */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=1000&auto=format&fit=crop"
                alt="Fungal disease protection research"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-600">
                <span className="w-2.5 h-0.5 bg-orange-600 inline-block" />
                <span>/ OUR APPROACH & VALUES</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
                Quality Control & Agricultural Focus
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                We approach product formulation with rigorous laboratory analytical verification and practical field trial feedback. Every product standard focuses on solubility, spray suspension stability, and rainfastness.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-xs uppercase">Quality First</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Zero tolerance for active ingredient degradation.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-xs uppercase">Farmer Centric</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Clear dosage guidance and applicator safety.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Sequence */}
      <WhyChooseUs />
      <CallToAction onNavigate={onNavigate} />
    </div>
  );
};
