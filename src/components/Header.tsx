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
      
      {/* Dynamic Pill Navigation Bar Container */}
      <div 
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 border ${
          isScrolled 
            ? 'bg-slate-950/90 border-slate-800/90 shadow-2xl backdrop-blur-xl py-2 px-4 sm:px-6'
            : 'bg-slate-950/75 border-slate-800/60 shadow-lg backdrop-blur-md py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Identity & Logo with Canvas Boxless Background Stripping */}
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
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white font-heading group-hover:text-orange-400 transition-colors">
                OSHO CROP CARE
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-orange-400 uppercase">
                PVT. LTD. • HYDERABAD
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-full border border-slate-800">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md shadow-orange-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
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
              className="p-2.5 rounded-full bg-slate-900 hover:bg-orange-600 text-slate-300 hover:text-white border border-slate-800 transition-all shadow-sm"
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
              className="p-2 rounded-xl bg-slate-900 text-orange-400 border border-slate-800"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 text-white border border-slate-800"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-3 top-20 z-50 bg-slate-950/95 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-2xl animate-fadeIn space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>OSHO CROP CARE</span>
            </span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-slate-400 p-1 hover:text-white"
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
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'text-slate-200 hover:bg-slate-900'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-2">
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
