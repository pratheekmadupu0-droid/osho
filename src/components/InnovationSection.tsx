import React from 'react';
import { Cpu, Activity, Layers, ArrowUpRight } from 'lucide-react';
import { PageType } from '../types';

interface InnovationSectionProps {
  onNavigate: (page: PageType) => void;
}

export const InnovationSection: React.FC<InnovationSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Animated Glowing Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg className="w-full h-full stroke-orange-500/40 fill-none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(234, 88, 12, 0.15)" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Glowing Animated Network Paths */}
          <path d="M0 200 Q 300 100, 600 300 T 1200 150" stroke="#ea580c" strokeWidth="2" strokeDasharray="8 8" className="animate-pulse" />
          <path d="M200 600 Q 700 400, 1100 700 T 1600 450" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 font-bold text-xs uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-orange-400 animate-spin" style={{ animationDuration: '10s' }} />
              <span>AGRITECH & PRECISION FARMING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              INNOVATION FOR <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">MODERN AGRICULTURE</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-light">
              Modern crop protection demands combining proven chemical science with smart digital insights. At PRINSTAN AGRI CARE, we explore precise application protocols, targeted release systems, and field monitoring to minimize wastage and maximize protection efficacy.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 transition-colors flex items-start gap-3">
                <div className="p-2 bg-orange-500/20 text-orange-400 rounded-lg shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Targeted Efficacy</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Optimized drop size and adhesion for minimum environmental loss.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 transition-colors flex items-start gap-3">
                <div className="p-2 bg-orange-500/20 text-orange-400 rounded-lg shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Synergistic Blends</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Multi-active chemistry preventing target pest resistance build-up.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('sustainability')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-md shadow-xl transition-all group"
              >
                <span>Discover Modern Innovations</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Futuristic Visual HUD Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-orange-500/30 shadow-2xl bg-slate-900 p-2">
              <div className="relative h-[420px] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop"
                  alt="Futuristic crop health scanning and digital agriculture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Simulated Digital HUD Data Overlays */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded border border-orange-500/40 text-[11px] font-mono text-orange-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>CROP HEALTH SCAN :: ONLINE</span>
                  </div>
                  <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded border border-orange-500/40 text-[11px] font-mono text-slate-300">
                    PRECISION FORMULATION v4.2
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 backdrop-blur-md p-5 rounded-xl border border-orange-500/30 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
                    <span>FOLIAR ABSORPTION EFFICACY</span>
                    <span className="text-orange-400 font-bold">OPTIMIZED</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-400 h-full w-[88%] rounded-full animate-pulse" />
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans leading-tight">
                    Combining scientific surfactant chemistry with micro-emulsion technology to safeguard crop leaves against environmental stress.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
