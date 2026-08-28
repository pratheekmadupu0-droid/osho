import React from 'react';
import { PageType } from '../types';
import { PRODUCT_CATEGORIES } from '../data/mockData';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ProductsShowcaseProps {
  onNavigate: (page: PageType, filterCategory?: string) => void;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-mono font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CROP PROTECTION PORTFOLIO</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
                OUR <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">SOLUTIONS</span>
              </h2>

              <p className="text-slate-600 text-base font-normal leading-relaxed">
                Focused crop protection solutions for the challenges faced by modern agriculture.
              </p>
            </div>

            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-orange-600 hover:text-orange-700 transition-colors group self-start md:self-auto"
            >
              <span>VIEW ALL FORMULATIONS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </ScrollReveal>

        {/* Large Editorial Category Cards Grid with ScrollReveal Staggering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <ScrollReveal key={category.id} animation="fade-up" delay={index * 120}>
              <div
                onClick={() => onNavigate('products', category.name)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between cursor-pointer group relative hover:-translate-y-1.5"
              >
                <div>
                  {/* Photo with Subtle Zoom (1.05x) */}
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                      src={category.imageUrl}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    
                    <span className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] uppercase font-extrabold tracking-widest px-3.5 py-1 rounded-full shadow">
                      {category.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 space-y-3">
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {category.name}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {category.shortDescription}
                    </p>

                    <div className="pt-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Indication: Field Crops, Horticulture & Cash Crops
                    </div>
                  </div>
                </div>

                {/* Bottom Orange Expanding Line & Explore Arrow */}
                <div className="p-6 sm:p-8 pt-0 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-900 group-hover:text-orange-600 transition-colors">
                    <span>EXPLORE CATEGORY</span>
                    <ArrowUpRight className="w-4 h-4 text-orange-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  
                  {/* Bottom Expanding Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
