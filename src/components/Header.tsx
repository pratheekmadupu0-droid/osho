import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { Search, Menu, X, ChevronRight, Phone, ShieldCheck } from 'lucide-react';
import { LogoImage } from './LogoImage';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType, filter?: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'crop-solutions', label: 'Crop Solutions' },
    { id: 'quality', label: 'Quality & R&D' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 py-3">
      
      {/* Dynamic Light White & Orange Navigation Bar Container */}
      <div 
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 border ${
          isScrolled 
            ? 'bg-white/95 border-orange-200 shadow-xl shadow-orange-500/10 backdrop-blur-xl py-2 px-4 sm:px-6'
            : 'bg-white/90 border-orange-200/80 shadow-lg shadow-orange-500/5 backdrop-blur-md py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Identity & Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <LogoImage 
              src="/logo.jpeg" 
              alt="OSHO CROP CARE PVT. LTD. Logo"
              className="h-9 sm:h-11 w-auto transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 font-heading group-hover:text-orange-600 transition-colors">
                OSHO CROP CARE
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-orange-600 uppercase">
                PVT. LTD. • HYDERABAD
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-orange-50/80 p-1.5 rounded-full border border-orange-200/80">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md shadow-orange-600/30'
                      : 'text-slate-700 hover:text-orange-600 hover:bg-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar (Search & Contact Helpline) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full bg-orange-50 hover:bg-orange-600 text-orange-700 hover:text-white border border-orange-200 transition-all shadow-xs"
              title="Search Formulations"
              aria-label="Search Formulations"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white text-xs font-extrabold uppercase tracking-wider px-4 py-2.5 rounded-full shadow-lg shadow-orange-600/20 transition-all hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>1800-425-6746</span>
            </button>
          </div>

          {/* Mobile Menu & Search Triggers */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-xl bg-orange-50 text-orange-600 border border-orange-200"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-orange-50 text-slate-900 border border-orange-200 hover:bg-orange-100"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-800" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-3 top-20 z-50 bg-white/98 border border-orange-200 rounded-3xl p-6 shadow-2xl backdrop-blur-2xl animate-fadeIn space-y-4">
          <div className="flex items-center justify-between border-b border-orange-100 pb-3">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>OSHO CROP CARE</span>
            </span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-slate-500 p-1 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate(item.id);
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-left transition-colors ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md'
                    : 'text-slate-700 hover:bg-orange-50'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-orange-100 space-y-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('contact');
              }}
              className="w-full py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Helpline: 1800-425-6746</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
