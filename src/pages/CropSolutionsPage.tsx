import React from 'react';
import { PageType } from '../types';
import { CropSolutionsSection } from '../components/CropSolutionsSection';
import { CallToAction } from '../components/CallToAction';
import { ChevronRight, Sprout } from 'lucide-react';
import { CROP_SOLUTIONS } from '../data/mockData';

interface CropSolutionsPageProps {
  onNavigate: (page: PageType, categoryFilter?: string) => void;
}

export const CropSolutionsPage: React.FC<CropSolutionsPageProps> = ({ onNavigate }) => {
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
            <span className="text-white">Crop Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading">
            CROP-FOCUSED <span className="text-amber-200">PROTECTION</span>
          </h1>
          <p className="text-orange-50 text-base sm:text-lg mt-3 max-w-2xl font-light">
            Customized defense protocols for Paddy, Cotton, Chilli, Vegetables, Pulses, Fruits, and specialized field crops.
          </p>
        </div>
      </div>

      {/* Main Interactive Section */}
      <CropSolutionsSection onNavigate={onNavigate} />

      {/* Detailed Crop Grid Overview */}
      <section className="py-16 bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              AGRONOMIC ADVISORY BY CROP TYPE
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Explore key agricultural challenges and solution categories for each major crop segment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CROP_SOLUTIONS.map((crop) => (
              <div key={crop.id} className="bg-orange-50/40 rounded-2xl p-6 border border-orange-200 space-y-4 hover:border-orange-500 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3">
                  <img src={crop.imageUrl} alt={crop.name} className="w-12 h-12 rounded-xl object-cover border border-orange-300" />
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg">{crop.name}</h3>
                    <span className="text-[11px] text-orange-600 font-bold uppercase">{crop.seasonality}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {crop.tagline}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-orange-100">
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-700 block">Primary Target Challenges:</span>
                  <div className="flex flex-wrap gap-1">
                    {crop.keyChallenges.map((item: string, idx: number) => (
                      <span key={idx} className="bg-white border border-orange-200 text-slate-800 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('products')}
                  className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Sprout className="w-3.5 h-3.5" />
                  <span>View Crop Formulations</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call To Action Banner */}
      <CallToAction onNavigate={onNavigate} />

    </div>
  );
};
