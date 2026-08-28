import React from 'react';
import { PageType } from '../types';
import { CROP_SOLUTIONS } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

interface CropSolutionsSectionProps {
  onNavigate: (page: PageType, categoryFilter?: string) => void;
}

export const CropSolutionsSection: React.FC<CropSolutionsSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-600">
            <span className="w-2.5 h-0.5 bg-orange-600 inline-block" />
            <span>/ CROP-SPECIFIC DEFENSE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            PROTECTION THAT STARTS<br />
            <span className="text-orange-600">WITH THE CROP.</span>
          </h2>

          <p className="text-slate-600 text-base font-normal">
            Customized defense protocols for major agricultural cash crops, food grains, and horticulture.
          </p>
        </div>

        {/* Large Photography-Driven Crop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CROP_SOLUTIONS.map((crop) => (
            <div
              key={crop.id}
              onClick={() => onNavigate('crop-solutions')}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-transparent hover:border-orange-500 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              {/* Background Image */}
              <img
                src={crop.imageUrl}
                alt={crop.name}
                className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

              {/* Minimal Text Overlay */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest bg-orange-600 text-white px-2.5 py-1 rounded shadow">
                    {crop.seasonality}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-orange-300 transition-colors">
                    {crop.name}
                  </h3>

                  <p className="text-slate-200 text-xs font-light line-clamp-2">
                    {crop.tagline}
                  </p>

                  <div className="pt-2 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-orange-400 group-hover:translate-x-1 transition-transform">
                    <span>Explore Crop Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
