import React, { useState } from 'react';
import { PageType, Product } from '../types';
import { PRODUCTS } from '../data/mockData';
import { ArrowRight, ChevronDown, ShieldCheck, Sparkles, Sprout, Volume2, VolumeX, CheckCircle2, Zap, Award } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

interface HeroProps {
  onNavigate: (page: PageType) => void;
  onSelectProduct?: (product: Product) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onSelectProduct }) => {
  const [activeTab, setActiveTab] = useState<'supercobra' | 'hunter'>('supercobra');
  const [shooterMuted, setShooterMuted] = useState(true);
  const [alloutMuted, setAlloutMuted] = useState(true);

  const superCobraProduct = PRODUCTS.find(p => p.id === 'osho-super-cobra') || PRODUCTS[0];
  const hunterProduct = PRODUCTS.find(p => p.id === 'osho-hunter') || PRODUCTS[1];

  const currentProduct = activeTab === 'supercobra' ? superCobraProduct : hunterProduct;

  const toggleShooterMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShooterMuted(!shooterMuted);
    const elem = document.getElementById('hero-shooter-video') as HTMLVideoElement | null;
    if (elem) elem.muted = !shooterMuted;
  };

  const toggleAlloutMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAlloutMuted(!alloutMuted);
    const elem = document.getElementById('hero-allout-video') as HTMLVideoElement | null;
    if (elem) elem.muted = !alloutMuted;
  };

  const typewriterPhrases = [
    'POWERING EVERY HARVEST.',
    'SAFEGUARDING FARM YIELDS.',
    'ADVANCING CROP SCIENCE.',
    'DEFENDING CASH CROPS & CEREALS.'
  ];

  return (
    <section className="relative min-h-[90vh] sm:min-h-[95vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-amber-50/40 text-slate-900 border-b border-orange-100">
      
      {/* 1. Subtle Motion Photography Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-kenburns opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2000&auto=format&fit=crop')`
        }}
      />

      {/* 2. Atmospheric Vibrant Light Glows */}
      <div className="absolute top-1/4 left-1/6 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-orange-300/25 rounded-full blur-3xl animate-pulse-glow-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-64 sm:w-[450px] h-64 sm:h-[450px] bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Ambient Sparkles */}
      <div className="absolute top-24 right-8 sm:right-32 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-400/60 rounded-full blur-xs animate-float pointer-events-none" />
      <div className="absolute bottom-36 left-6 sm:left-20 w-3 h-3 sm:w-4 sm:h-4 bg-amber-500/50 rounded-full blur-xs animate-float pointer-events-none delay-1000" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols): Hero Headline & Value Props */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 animate-fadeInUp">
            
            {/* Live Floating Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-orange-100/90 border border-orange-300/80 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-orange-800 backdrop-blur-md shadow-md max-w-full">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-orange-600" />
              </span>
              <span className="truncate">OSHO CROP CARE PVT. LTD.</span>
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-600 animate-pulse shrink-0" />
            </div>

            {/* Shimmering Bold Title with Responsive Typewriter Animation */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] sm:leading-[1.05] font-heading drop-shadow-xs min-h-[130px] sm:min-h-[180px]">
              PROTECTING EVERY CROP.<br />
              <span className="animate-shimmer font-black block mt-1">
                <TypewriterText words={typewriterPhrases} typingSpeed={80} deletingSpeed={40} pauseTime={2000} />
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-slate-700 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl">
              OSHO CROP CARE PVT. LTD. provides high-performance agricultural products, organic crop care solutions, biostimulants, and farming innovations across India.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 max-w-lg text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-2.5 bg-white/90 p-3 rounded-xl border border-orange-200 shadow-xs backdrop-blur-xs">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Naturally Derived Bio-Actives</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/90 p-3 rounded-xl border border-orange-200 shadow-xs backdrop-blur-xs">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>250ml / Acre High Efficacy</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/90 p-3 rounded-xl border border-orange-200 shadow-xs backdrop-blur-xs">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>HPLC Analytical Batch Control</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/90 p-3 rounded-xl border border-orange-200 shadow-xs backdrop-blur-xs">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Pan-India Agronomic Network</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('products')}
                className="relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white font-extrabold text-xs uppercase tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>EXPLORE FORMULATIONS</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-orange-50 border border-orange-300 text-orange-700 font-bold text-xs uppercase tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-md transition-all hover:border-orange-400"
              >
                <span>ABOUT OSHO CROP CARE</span>
                <ArrowRight className="w-4 h-4 text-orange-600" />
              </button>
            </div>

          </div>

          {/* Right Column (5 cols): Interactive 3D Authentic Product Showcase Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            
            {/* Ambient Backlight Aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-amber-400 rounded-3xl blur-2xl opacity-20 animate-pulse-glow-slow" />

            <div className="relative bg-white border border-orange-200 rounded-3xl p-4 sm:p-6 shadow-2xl shadow-orange-500/10 space-y-4 sm:space-y-6">
              
              {/* Product Switcher Tabs */}
              <div className="flex items-center justify-between bg-orange-50/80 p-1.5 rounded-2xl border border-orange-200 gap-1">
                <button
                  onClick={() => setActiveTab('supercobra')}
                  className={`flex-1 py-2.5 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 ${
                    activeTab === 'supercobra'
                      ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md shadow-orange-600/30'
                      : 'text-slate-600 hover:text-orange-600'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 shrink-0" />
                  <span>SUPER COBRA</span>
                </button>

                <button
                  onClick={() => setActiveTab('hunter')}
                  className={`flex-1 py-2.5 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 ${
                    activeTab === 'hunter'
                      ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md shadow-orange-600/30'
                      : 'text-slate-600 hover:text-orange-600'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>HUNTER</span>
                </button>
              </div>

              {/* Active Product Video Reel Container (9:16 Vertical Ratio) */}
              <div className="relative aspect-[9/13] sm:aspect-[9/14] w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 group shadow-inner">
                {activeTab === 'supercobra' ? (
                  <video
                    id="hero-shooter-video"
                    src="/shooter-product.mp4"
                    autoPlay
                    loop
                    muted={shooterMuted}
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <video
                    id="hero-allout-video"
                    src="/allout-product.mp4"
                    autoPlay
                    loop
                    muted={alloutMuted}
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}

                {/* Dark Bottom Overlay for video readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Top Badge & Sound Toggle */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-20">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-700 text-amber-400 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                    <span>AUTHENTIC 9:16 REEL</span>
                  </span>

                  <button
                    onClick={activeTab === 'supercobra' ? toggleShooterMute : toggleAlloutMute}
                    className="p-2 rounded-full bg-slate-950/90 hover:bg-orange-600 text-white backdrop-blur-md border border-slate-700 transition-all shadow-md"
                    title="Toggle Audio"
                    aria-label="Toggle video audio"
                  >
                    {(activeTab === 'supercobra' ? shooterMuted : alloutMuted) ? (
                      <VolumeX className="w-3.5 h-3.5 text-slate-300" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5 text-orange-400" />
                    )}
                  </button>
                </div>

                {/* Bottom Overlay Info inside Video Card */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 space-y-1.5 sm:space-y-2 z-20">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-extrabold text-white uppercase tracking-wider truncate mr-2">
                      {currentProduct.name}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold text-orange-400 bg-orange-500/20 px-2 py-0.5 rounded shrink-0">
                      250ml / acre
                    </span>
                  </div>

                  <p className="text-[10px] sm:text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                    {currentProduct.shortDescription}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[10px] font-semibold text-slate-400 border-t border-slate-800">
                    <span className="truncate mr-2">Crops: Paddy, Cotton, Chilli, Vegetables</span>
                    {onSelectProduct && (
                      <button
                        onClick={() => onSelectProduct(currentProduct)}
                        className="text-orange-400 hover:text-orange-300 font-bold uppercase tracking-wider flex items-center gap-1 shrink-0"
                      >
                        <span>DOSAGE</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Composition Spec Matrix Card */}
              <div className="bg-orange-50/80 p-3.5 sm:p-4 rounded-2xl border border-orange-200 text-xs space-y-2">
                <div className="flex items-center justify-between font-mono font-bold text-[9px] sm:text-[10px] text-orange-800 uppercase tracking-widest border-b border-orange-200/80 pb-1.5">
                  <span>COMPOSITION MATRIX</span>
                  <span className="text-orange-600 font-black">HPLC TESTED</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-[11px] font-semibold text-slate-700">
                  <div>Bio-Actives: <span className="text-slate-900 font-bold">40.0%</span></div>
                  <div>Organic Acid: <span className="text-slate-900 font-bold">1.0%</span></div>
                  <div>Carriers: <span className="text-slate-900 font-bold">59.0%</span></div>
                  <div>Total Purity: <span className="text-orange-600 font-extrabold">100.0%</span></div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 4. Quick Stat Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          
          <div className="bg-white/95 border border-orange-200/90 shadow-lg p-3.5 sm:p-4 rounded-2xl flex items-center gap-3 sm:gap-4 hover:border-orange-500 hover:shadow-orange-500/10 transition-all duration-300 group">
            <div className="p-2.5 sm:p-3 bg-orange-100 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors shrink-0">
              <Sprout className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-base sm:text-xl font-extrabold text-slate-900">50+ Formulations</div>
              <div className="text-[10px] sm:text-[11px] text-slate-600 font-medium">Insecticide & Bio-Nutrients</div>
            </div>
          </div>

          <div className="bg-white/95 border border-orange-200/90 shadow-lg p-3.5 sm:p-4 rounded-2xl flex items-center gap-3 sm:gap-4 hover:border-orange-500 hover:shadow-orange-500/10 transition-all duration-300 group">
            <div className="p-2.5 sm:p-3 bg-orange-100 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-base sm:text-xl font-extrabold text-slate-900">100% Active Purity</div>
              <div className="text-[10px] sm:text-[11px] text-slate-600 font-medium">HPLC Analytical Control</div>
            </div>
          </div>

          <div className="bg-white/95 border border-orange-200/90 shadow-lg p-3.5 sm:p-4 rounded-2xl flex items-center gap-3 sm:gap-4 hover:border-orange-500 hover:shadow-orange-500/10 transition-all duration-300 group">
            <div className="p-2.5 sm:p-3 bg-orange-100 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors shrink-0">
              <Award className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-base sm:text-xl font-extrabold text-slate-900">ESTABLISHED BRAND</div>
              <div className="text-[10px] sm:text-[11px] text-slate-600 font-medium">Hyderabad, Telangana</div>
            </div>
          </div>

          <div className="bg-white/95 border border-orange-200/90 shadow-lg p-3.5 sm:p-4 rounded-2xl flex items-center gap-3 sm:gap-4 hover:border-orange-500 hover:shadow-orange-500/10 transition-all duration-300 group">
            <div className="p-2.5 sm:p-3 bg-orange-100 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors shrink-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-base sm:text-xl font-extrabold text-slate-900">10,000+ Dealers</div>
              <div className="text-[10px] sm:text-[11px] text-slate-600 font-medium">Pan-India Agronomic Network</div>
            </div>
          </div>

        </div>

      </div>

      {/* Subtle Bottom Arrow */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 text-center">
        <ChevronDown className="w-5 h-5 text-orange-600 animate-bounce" />
      </div>

    </section>
  );
};
