import React from 'react';
import { PageType } from '../types';
import { ChevronRight, Award, ShieldCheck, Microscope, Users } from 'lucide-react';
import { CallToAction } from '../components/CallToAction';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
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
            <span className="text-white">About Us</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading">
            ABOUT <span className="text-amber-200">OSHO CROP CARE</span>
          </h1>
          <p className="text-orange-50 text-base sm:text-lg mt-3 max-w-2xl font-light">
            Empowering Indian farmers through scientific crop protection chemistry, high-purity biostimulants, and sustainable agricultural innovation.
          </p>
        </div>
      </div>

      {/* Main Corporate Story */}
      <section className="py-16 bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider border border-orange-200">
                <Award className="w-4 h-4 text-orange-600" />
                <span>ESTABLISHED BRAND • HYDERABAD, TELANGANA</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                Bridging Scientific Research with Practical Farming Excellence
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                OSHO CROP CARE PVT. LTD. was established in Hyderabad with a mission to deliver high-performance crop care solutions to Indian agriculture. We specialize in crop protection, plant nutrition biostimulants, bio-organic crop activators, and certified seed inputs.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Through our extensive pan-India network of over 10,000 distributors and dealers, OSHO CROP CARE provides farmers with reliable, lab-tested formulations that protect cash crops, cereals, and commercial horticulture from severe pest pressures and environmental stress.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-orange-100">
                <div className="space-y-1">
                  <div className="text-2xl font-black text-orange-600">50+</div>
                  <div className="text-xs font-bold text-slate-700">Registered Formulations</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-black text-orange-600">10,000+</div>
                  <div className="text-xs font-bold text-slate-700">Pan-India Dealer Points</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-orange-200">
                <img
                  src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1200&auto=format&fit=crop"
                  alt="OSHO Agri Field"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-orange-200 text-slate-900 space-y-2 shadow-xl">
                  <h3 className="font-extrabold text-lg text-slate-900">ISO 9001:2015 Quality Commitment</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every batch of OSHO products undergoes HPLC analytical purity verification before release to ensure maximum field efficacy.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-orange-50/50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
              THE PILLARS OF OSHO CROP CARE
            </h2>
            <p className="text-slate-600 text-sm">
              Our core principles driving agricultural innovation, product consistency, and farmer prosperity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-orange-200 shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Lab-Certified Purity</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Raw technical materials and active ingredients undergo strict HPLC assay and physical parameter validation prior to commercial batching.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-orange-200 shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Field Efficacy Focus</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Our solutions are field-tested across diverse agro-climatic zones in India to guarantee reliable knock-down and systemic protection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-orange-200 shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Farmer Prosperity</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We empower growers with cost-effective crop protection protocols that maximize yield potential while safeguarding soil health.
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
