import React from 'react';
import { PageType } from '../types';
import { COMPANY_CONTACT_INFO, PRODUCT_CATEGORIES } from '../data/mockData';
import { Phone, Mail, MapPin, ShieldCheck, ChevronRight, Heart } from 'lucide-react';
import { LogoImage } from './LogoImage';

interface FooterProps {
  onNavigate: (page: PageType, filterCategory?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t-4 border-orange-600 relative overflow-hidden">
      
      {/* Glow ambient background effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-800">
          
          {/* Col 1: Corporate Identity & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <LogoImage 
                src="/logo.jpeg" 
                alt="OSHO CROP CARE Logo"
                className="h-10 w-auto bg-white rounded p-1"
              />
              <div className="flex flex-col">
                <span className="font-black text-lg tracking-tight text-white font-heading">
                  OSHO CROP CARE
                </span>
                <span className="text-[10px] font-mono font-bold tracking-widest text-orange-400 uppercase">
                  PVT. LTD. • HYDERABAD
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md font-light">
              Pioneering crop protection chemistry, plant nutrition biostimulants, bio-activators, and seed inputs empowering farmers across India.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
                <span>CIN: U24210TG2015PTC099882</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
                <span>ISO 9001:2015 Analytical Quality Certified</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Osho' },
                { id: 'products', label: 'All Products' },
                { id: 'crop-solutions', label: 'Crop Solutions' },
                { id: 'quality', label: 'Quality & R&D' },
                { id: 'sustainability', label: 'Sustainability' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id as PageType)}
                    className="hover:text-orange-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Categories (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
              CATEGORIES
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate('products', cat.name)}
                    className="hover:text-orange-400 transition-colors flex items-center gap-1.5 group text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    <span className="truncate">{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
              HEADQUARTERS
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_CONTACT_INFO.addressPlaceholder}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="tel:18004256746" className="hover:text-orange-400 font-bold text-white transition-colors">
                  1800-425-6746
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="mailto:info@oshocropcare.com" className="hover:text-orange-400 transition-colors font-mono">
                  info@oshocropcare.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300">OSHO CROP CARE PVT. LTD.</strong> All Rights Reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Dedicated to Indian Farmers</span>
            <Heart className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};
