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
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 mb-3 uppercase tracking-wider">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Crop Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            CROP-FOCUSED <span className="text-orange-500">PROTECTION</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl font-light">
            Customized defense protocols for Paddy, Cotton, Chilli, Vegetables, Pulses, Fruits, and specialized field crops.
          </p>
        </div>
      </div>

      {/* Main Interactive Section */}
      <CropSolutionsSection onNavigate={onNavigate} />

      {/* Detailed Crop Grid Overview */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              AGRONOMIC ADVISORY BY CROP TYPE
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Explore key agricultural challenges and solution categories for each major crop segment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CROP_SOLUTIONS.map((crop) => (
              <div key={crop.id} className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4 hover:border-orange-300 transition-colors">
                <div className="flex items-center gap-3">
                  <img src={crop.imageUrl} alt={crop.name} className="w-12 h-12 rounded-lg object-cover border border-slate-300" />
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg">{crop.name}</h3>
                    <span className="text-[11px] text-orange-600 font-bold uppercase">{crop.seasonality}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed font-normal">{crop.tagline}</p>

                <div className="pt-2 border-t border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span>Common Pests/Diseases:</span>
                    <span className="text-orange-600 font-bold">{crop.commonPests.join(', ')}</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('products')}
                  className="w-full bg-white hover:bg-orange-600 hover:text-white border border-slate-300 hover:border-orange-600 text-slate-800 font-bold text-xs uppercase tracking-wider py-2.5 rounded-md transition-all flex items-center justify-center gap-2"
                >
                  <Sprout className="w-3.5 h-3.5" />
                  <span>Find {crop.name} Products</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction onNavigate={onNavigate} />
    </div>
  );
};
