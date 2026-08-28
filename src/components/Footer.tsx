import React, { useState } from 'react';
import { PageType } from '../types';
import { COMPANY_CONTACT_INFO } from '../data/mockData';
import { ShieldCheck, Phone, Mail, MapPin, X } from 'lucide-react';
import { LogoImage } from './LogoImage';

interface FooterProps {
  onNavigate: (page: PageType, filter?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [legalModalTitle, setLegalModalTitle] = useState<string | null>(null);

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand & Corporate Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Boxless Logo */}
            <div className="flex items-center gap-3">
              <LogoImage className="h-10 w-auto object-contain" />
            </div>

            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-md">
              OSHO CROP CARE PVT. LTD. is a trusted agricultural solutions company delivering chemical crop protection formulations designed to defend yields, enhance plant health, and support sustainable farming operations.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-orange-400">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              <span>ISO 9001:2015 Quality Management Certified System</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-widest border-b border-slate-800 pb-2">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-orange-400 transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-orange-400 transition-colors">
                  About OSHO Crop Care
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-orange-400 transition-colors">
                  Crop Protection Products
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('crop-solutions')} className="hover:text-orange-400 transition-colors">
                  Crop Solutions & Advisory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quality')} className="hover:text-orange-400 transition-colors">
                  Quality & Scientific Standards
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sustainability')} className="hover:text-orange-400 transition-colors">
                  Stewardship & Sustainability
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-orange-400 transition-colors">
                  Corporate Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-widest border-b border-slate-800 pb-2">
              CORPORATE HEADQUARTERS
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{COMPANY_CONTACT_INFO.addressPlaceholder}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={`tel:${COMPANY_CONTACT_INFO.phonePlaceholder}`} className="hover:text-white transition-colors">
                  {COMPANY_CONTACT_INFO.phonePlaceholder}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={`mailto:${COMPANY_CONTACT_INFO.emailPlaceholder}`} className="hover:text-white transition-colors">
                  {COMPANY_CONTACT_INFO.emailPlaceholder}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal text-slate-500">
          <div>
            © {new Date().getFullYear()} OSHO CROP CARE PVT. LTD. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <button onClick={() => setLegalModalTitle('Privacy Policy')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => setLegalModalTitle('Terms of Use')} className="hover:text-white transition-colors">
              Terms of Use
            </button>
            <button onClick={() => setLegalModalTitle('Disclaimer')} className="hover:text-white transition-colors">
              Disclaimer
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modal */}
      {legalModalTitle && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 text-slate-300 space-y-4 relative shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white font-heading">{legalModalTitle}</h3>
              <button onClick={() => setLegalModalTitle(null)} className="p-1 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              This official document outlines the terms, governance policies, and legal compliance standards enforced by OSHO CROP CARE PVT. LTD. All product registrations, active ingredients, and trademarks remain the sole property of OSHO CROP CARE PVT. LTD.
            </p>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setLegalModalTitle(null)}
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-2 rounded-lg"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
