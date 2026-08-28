import React from 'react';
import { PageType } from '../types';
import { COMPANY_CONTACT_INFO, PRODUCT_CATEGORIES } from '../data/mockData';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { LogoImage } from './LogoImage';

interface FooterProps {
  onNavigate: (page: PageType, filter?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 relative overflow-hidden">
      
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand Info & Transparent Logo */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <LogoImage
                src="/logo.jpeg"
                alt="PRINSTAN AGRI CARE PVT. LTD. Logo"
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-extrabold text-white tracking-tight font-heading">
                  PRINSTAN AGRI CARE
                </h3>
                <span className="text-[10px] font-mono font-bold text-orange-400 tracking-widest uppercase block">
                  PVT. LTD. • HYDERABAD
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              PRINSTAN AGRI CARE PVT. LTD. provides high-performance agricultural crop protection products, organic bio-stimulants, fertilizers, and crop health solutions across India.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
              <span>EST. 2017 • ISO Certified Manufacturing</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest border-b border-slate-800 pb-2">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-orange-500" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-orange-500" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-orange-500" />
                  <span>Products Catalog</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('crop-solutions')} className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-orange-500" />
                  <span>Crop Solutions</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quality')} className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-orange-500" />
                  <span>Quality & R&D</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-orange-500" />
                  <span>Contact Office</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Segments */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest border-b border-slate-800 pb-2">
              PRODUCT SOLUTIONS
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate('products', cat.name)}
                    className="hover:text-orange-400 transition-colors text-left truncate max-w-full block"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office Location */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest border-b border-slate-800 pb-2">
              HEAD OFFICE
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_CONTACT_INFO.addressPlaceholder}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="tel:+919550758929" className="hover:text-orange-400 transition-colors font-bold">
                  {COMPANY_CONTACT_INFO.phonePlaceholder}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="mailto:info@prinstanagricarepvtltd.com" className="hover:text-orange-400 transition-colors font-mono">
                  {COMPANY_CONTACT_INFO.emailPlaceholder}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400 text-[11px]">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{COMPANY_CONTACT_INFO.businessHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300">PRINSTAN AGRI CARE PVT. LTD.</strong> All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Corporate Identity No. U24210TG2017PTC118892</span>
            <span>•</span>
            <span>Hyderabad, Telangana</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
