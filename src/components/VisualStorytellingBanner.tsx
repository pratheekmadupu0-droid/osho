import React from 'react';

export const VisualStorytellingBanner: React.FC = () => {
  return (
    <section className="relative h-[480px] sm:h-[560px] overflow-hidden bg-slate-950 text-white">
      {/* Full-width Photographic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-80"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2000&auto=format&fit=crop')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-400">
            <span className="w-2.5 h-0.5 bg-orange-500 inline-block" />
            <span>/ FIELD REALITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
            DEDICATED TO THE HEALTH OF<br />
            <span className="text-orange-400">EVERY FARM FIELD.</span>
          </h2>

          <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed">
            From paddy tillers in southern river basins to cotton bolls in central plateaus, our formulations support resilient crop growth through every stage of cultivation.
          </p>
        </div>
      </div>
    </section>
  );
};
