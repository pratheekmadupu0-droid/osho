import React from 'react';
import { PageType } from '../types';
import { ChevronRight, Award, ShieldCheck, Microscope, Users } from 'lucide-react';
import { CallToAction } from '../components/CallToAction';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Header Banner */}
      <div className="bg-slate-950 text-white py-16 relative overflow-hidden border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-400 mb-3 uppercase tracking-wider">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">About Us</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading">
            ABOUT <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">PRINSTAN AGRI CARE</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-2xl font-light">
            Empowering Indian farmers through scientific crop protection chemistry, high-purity biostimulants, and sustainable agricultural innovation.
          </p>
        </div>
      </div>

      {/* Main Corporate Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4 text-orange-600" />
                <span>INCORPORATED 2017 • HYDERABAD, TELANGANA</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                Bridging Scientific Research with Practical Farming Excellence
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                PRINSTAN AGRI CARE PVT. LTD. was established in 2017 in Hyderabad with a mission to deliver high-performance crop care solutions to Indian agriculture. We specialize in crop protection, plant nutrition biostimulants, bio-organic crop activators, and certified seed inputs.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Through our extensive pan-India network of over 10,000 distributors and dealers, PRINSTAN AGRI CARE provides farmers with reliable, lab-tested formulations that protect cash crops, cereals, and commercial horticulture from severe pest pressures and environmental stress.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1200&auto=format&fit=crop"
                  alt="PRINSTAN Agri Field"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-white space-y-2">
                  <h3 className="font-extrabold text-lg text-white">ISO 9001:2015 Quality Commitment</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Every batch of PRINSTAN products undergoes HPLC analytical purity verification before release to ensure maximum field efficacy.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
              THE PILLARS OF PRINSTAN AGRI CARE
            </h2>
            <p className="text-slate-600 text-sm">
              Our core principles driving agricultural innovation, product consistency, and farmer prosperity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="p-3 bg-orange-100 rounded-xl text-orange-600 w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Crop Health & Safety</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Formulating chemistry that provides targeted pest control while ensuring plant safety, leaf canopy health, and zero crop phytotoxicity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="p-3 bg-orange-100 rounded-xl text-orange-600 w-fit">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">HPLC Analytical Control</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                State-of-the-art laboratory testing ensuring standardized active ingredient percentages across all liquid and granular formulations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="p-3 bg-orange-100 rounded-xl text-orange-600 w-fit">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Farmer Empowerment</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Providing field advisory, dosage guidance, and accessible products that help farmers maximize yield return per acre.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction onNavigate={onNavigate} />

    </div>
  );
};
