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
  const [activeTab, setActiveTab] = useState<'shooter' | 'allout'>('shooter');
  const [shooterMuted, setShooterMuted] = useState(true);
  const [alloutMuted, setAlloutMuted] = useState(true);

  const shooterProduct = PRODUCTS.find(p => p.id === 'osho-shooter-flagship') || PRODUCTS[0];
  const alloutProduct = PRODUCTS.find(p => p.id === 'osho-allout-flagship') || PRODUCTS[1];

  const currentProduct = activeTab === 'shooter' ? shooterProduct : alloutProduct;

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
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-slate-950 text-white">
      
      {/* 1. Cinema-Grade Pan-Zoom Motion Photography Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-kenburns opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2000&auto=format&fit=crop')`
        }}
      />

      {/* 2. Atmospheric Dark Vignette & Dynamic Light Glows */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-3xl animate-pulse-glow-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-[450px] h-[450px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Ambient Sparkles */}
      <div className="absolute top-24 right-32 w-3 h-3 bg-amber-400/50 rounded-full blur-xs animate-float pointer-events-none" />
      <div className="absolute bottom-36 left-20 w-4 h-4 bg-orange-500/40 rounded-full blur-xs animate-float pointer-events-none delay-1000" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols): Hero Headline & Value Props */}
          <div className="lg:col-span-7 space-y-8 animate-fadeInUp">
            
            {/* Live Floating Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-orange-500/40 text-xs font-mono font-bold uppercase tracking-widest text-orange-400 backdrop-blur-md shadow-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
              </span>
              <span>OSHO CROP PROTECTION CHEMISTRY</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            </div>

            {/* Shimmering Bold Title with Typewriter Animation */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] font-heading drop-shadow-md min-h-[160px] sm:min-h-[190px]">
              PROTECTING EVERY CROP.<br />
              <span className="animate-shimmer font-black block">
                <TypewriterText words={typewriterPhrases} typingSpeed={80} deletingSpeed={40} pauseTime={2000} />
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed max-w-2xl text-shadow-sm">
              Advanced crop protection formulations engineered to defend cash crops, cereals, and vegetables against severe pest pressures, crop disease, and environmental stress.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-lg text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 backdrop-blur-xs">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Naturally Derived Organic Actives</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 backdrop-blur-xs">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>250ml / Acre High Efficacy</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 backdrop-blur-xs">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>HPLC Analytical Batch Purity</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 backdrop-blur-xs">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Pan-India Distribution Reach</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('products')}
                className="relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-xl hover:shadow-orange-600/40 transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>EXPLORE FORMULATIONS</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all backdrop-blur-md hover:border-white/40"
              >
                <span>ABOUT OSHO CROP CARE</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>
            </div>

          </div>

          {/* Right Column (5 cols): Interactive 3D Authentic Product Showcase Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Backlight Aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-amber-500 rounded-3xl blur-2xl opacity-30 animate-pulse-glow-slow" />

            <div className="relative bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 backdrop-blur-2xl shadow-2xl space-y-6">
              
              {/* Product Switcher Tabs */}
              <div className="flex items-center justify-between bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
                <button
                  onClick={() => setActiveTab('shooter')}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                    activeTab === 'shooter'
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-600/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                  <span>OSHO SHOOTER</span>
                </button>

                <button
                  onClick={() => setActiveTab('allout')}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                    activeTab === 'allout'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
                  <span>OSHO ALL OUT</span>
                </button>
              </div>

              {/* Active Product Video Reel Container (9:16 Vertical Ratio) */}
              <div className="relative aspect-[9/14] w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 group shadow-inner">
                {activeTab === 'shooter' ? (
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

                {/* Dark Bottom Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Top Badge & Sound Toggle */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-700 text-amber-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                    <span>AUTHENTIC 9:16 FIELD DEMO</span>
                  </span>

                  <button
                    onClick={activeTab === 'shooter' ? toggleShooterMute : toggleAlloutMute}
                    className="p-2 rounded-full bg-slate-950/90 hover:bg-orange-600 text-white backdrop-blur-md border border-slate-700 transition-all shadow-md"
                    title="Toggle Audio"
                    aria-label="Toggle video audio"
                  >
                    {(activeTab === 'shooter' ? shooterMuted : alloutMuted) ? (
                      <VolumeX className="w-4 h-4 text-slate-300" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-orange-400" />
                    )}
                  </button>
                </div>

                {/* Bottom Overlay Info inside Video Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 space-y-2 z-20">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-extrabold text-white uppercase tracking-wider">
                      {currentProduct.name}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-orange-400 bg-orange-500/20 px-2 py-0.5 rounded">
                      DOSAGE: 250ml / acre
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                    {currentProduct.shortDescription}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[10px] font-semibold text-slate-400 border-t border-slate-800">
                    <span>CROPS: Chili, Tomato, Cotton, Pulses, Grapes</span>
                    {onSelectProduct && (
                      <button
                        onClick={() => onSelectProduct(currentProduct)}
                        className="text-orange-400 hover:text-orange-300 font-bold uppercase tracking-wider flex items-center gap-1"
                      >
                        <span>VIEW DOSAGE</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Composition Spec Matrix Card */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs space-y-2">
                <div className="flex items-center justify-between font-mono font-bold text-[10px] text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-1.5">
                  <span>ANALYTICAL COMPOSITION</span>
                  <span className="text-orange-400">GC / LC / SP TESTED</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-300">
                  <div>Enzyme Hydrolysates: <span className="text-white font-bold">40.0%</span></div>
                  <div>Organic Acid: <span className="text-white font-bold">1.0%</span></div>
                  <div>Carriers & Fillers: <span className="text-white font-bold">59.0%</span></div>
                  <div>Total Active: <span className="text-orange-400 font-bold">100.0%</span></div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 4. Quick Stat Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="glass-card-dark p-4 rounded-2xl flex items-center gap-4 hover:border-orange-500/50 transition-all duration-300 group">
            <div className="p-3 bg-orange-600/20 rounded-xl text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white">4+ Formulations</div>
              <div className="text-[11px] text-slate-400 font-medium">Insecticide & Fungicide</div>
            </div>
          </div>

          <div className="glass-card-dark p-4 rounded-2xl flex items-center gap-4 hover:border-orange-500/50 transition-all duration-300 group">
            <div className="p-3 bg-orange-600/20 rounded-xl text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white">100% Active Purity</div>
              <div className="text-[11px] text-slate-400 font-medium">Batch Analytical Control</div>
            </div>
          </div>

          <div className="glass-card-dark p-4 rounded-2xl flex items-center gap-4 hover:border-orange-500/50 transition-all duration-300 group">
            <div className="p-3 bg-orange-600/20 rounded-xl text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white">ISO 9001:2015</div>
              <div className="text-[11px] text-slate-400 font-medium">Certified Quality System</div>
            </div>
          </div>

          <div className="glass-card-dark p-4 rounded-2xl flex items-center gap-4 hover:border-orange-500/50 transition-all duration-300 group">
            <div className="p-3 bg-orange-600/20 rounded-xl text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white">Pan-India Reach</div>
              <div className="text-[11px] text-slate-400 font-medium">Agronomic Advisory</div>
            </div>
          </div>

        </div>

      </div>

      {/* Subtle Bottom Arrow */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 text-center">
        <ChevronDown className="w-5 h-5 text-orange-400 animate-bounce" />
      </div>

    </section>
  );
};
