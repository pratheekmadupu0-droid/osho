import React from 'react';
import { STATISTIC_PLACEHOLDERS } from '../data/mockData';
import { Info } from 'lucide-react';

export const StatisticsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 relative border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Placeholder Disclaimer Banner */}
        <div className="mb-10 p-3 bg-orange-50 border border-orange-200 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold text-orange-800 text-center">
          <Info className="w-4 h-4 text-orange-600 shrink-0" />
          <span>Note: Statistic indicators below are structured as verified company data placeholders to be updated upon official certification.</span>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATISTIC_PLACEHOLDERS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200/80 shadow-sm text-center hover:shadow-md hover:border-orange-300 transition-all space-y-2 group"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-orange-600 font-mono tracking-tight group-hover:scale-105 transition-transform">
                {stat.numberPlaceholder}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-500 font-normal">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
