import React, { useState } from 'react';
import { PageType, Product } from '../types';
import { PRODUCTS } from '../data/mockData';
import { Play, Volume2, VolumeX, ArrowRight, ShieldCheck, Video } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface DynamicFeaturedProductsProps {
  onNavigate: (page: PageType, filterCategory?: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const DynamicFeaturedProducts: React.FC<DynamicFeaturedProductsProps> = ({
  onNavigate,
  onSelectProduct
}) => {
  const [mutedStates, setMutedStates] = useState<{ [key: string]: boolean }>({
    'shooter-video': true,
    'allout-video': true
  });

  const videoProducts = PRODUCTS.filter(p => p.hasVideo);

  const toggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMutedStates(prev => {
      const nextMuted = !prev[id];
      const videoElem = document.getElementById(id) as HTMLVideoElement | null;
      if (videoElem) {
        videoElem.muted = nextMuted;
      }
      return { ...prev, [id]: nextMuted };
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-orange-50/30 to-white text-slate-900 relative overflow-hidden border-b border-orange-100">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200 text-xs font-mono font-bold uppercase tracking-widest backdrop-blur-md">
                <Video className="w-4 h-4 text-orange-600 animate-pulse" />
                <span>DYNAMIC 9:16 PRODUCT SHOWCASE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                DYNAMIC PRODUCT <br />
                <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent font-black">
                  ACTION & PERFORMANCE
                </span>
              </h2>

              <p className="text-slate-600 text-base font-normal leading-relaxed">
                Watch real application efficacy videos demonstrating rapid knockdown and systemic crop protection power.
              </p>
            </div>

            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white font-extrabold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 transition-all self-start md:self-auto"
            >
              <span>EXPLORE ALL FORMULATIONS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

        {/* Video Reel Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {videoProducts.map((product, idx) => {
            const videoId = product.id.includes('shooter') ? 'shooter-video' : 'allout-video';
            const isMuted = mutedStates[videoId] ?? true;

            return (
              <ScrollReveal key={product.id} animation="zoom-in" delay={idx * 200}>
                <div
                  onClick={() => onSelectProduct(product)}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-orange-200 shadow-xl hover:border-orange-500 hover:shadow-2xl shadow-orange-500/10 transition-all duration-500 cursor-pointer"
                >
                  
                  {/* 9:16 Aspect Ratio Vertical Video Reel Container */}
                  <div className="relative aspect-[9/16] w-full max-h-[640px] bg-slate-950 overflow-hidden">
                    <video
                      id={videoId}
                      src={product.videoUrl}
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>9:16 ACTION REEL</span>
                      </span>

                      {/* Mute/Unmute Control Toggle Button */}
                      <button
                        onClick={(e) => toggleMute(videoId, e)}
                        className="p-2.5 rounded-full bg-slate-950/80 hover:bg-orange-600 text-white backdrop-blur-md border border-slate-700 transition-all shadow-lg"
                        title={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                        aria-label="Toggle video audio"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-orange-400" />}
                      </button>
                    </div>

                    {/* Center Hover Play Indicator Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-orange-600/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-md transform group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 fill-current ml-1" />
                      </div>
                    </div>

                    {/* Bottom Card Copy & Tech Specs Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-3 z-20">
                      <div className="inline-block px-3 py-1 rounded bg-orange-600 text-white text-[10px] font-mono font-bold uppercase tracking-widest">
                        {product.category}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-orange-400 transition-colors font-heading">
                        {product.name}
                      </h3>

                      <p className="text-slate-300 text-xs sm:text-sm font-normal line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>

                      <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                        <div className="flex items-center gap-2 text-[11px] font-bold text-orange-400 uppercase tracking-wider">
                          <ShieldCheck className="w-4 h-4" />
                          <span>Formulation: {product.formulationType}</span>
                        </div>
                        
                        <div className="inline-flex items-center gap-1 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                          <span>DETAILS</span>
                          <ArrowRight className="w-3.5 h-3.5 text-orange-500" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
