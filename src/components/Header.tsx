import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { Search, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'ABOUT US', page: 'about' },
    { label: 'PRODUCTS', page: 'products' },
    { label: 'CROP SOLUTIONS', page: 'crop-solutions' },
    { label: 'QUALITY & SCIENCE', page: 'quality' },
    { label: 'SUSTAINABILITY', page: 'sustainability' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-2.5 bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-200/80'
          : 'py-4 bg-white/95 backdrop-blur-md border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* 100% Boxless Transparent Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group text-left outline-none transition-transform hover:scale-[1.03]"
        >
          <LogoImage className="h-10 sm:h-12 w-auto object-contain" />
        </button>

        {/* Dynamic Animated Pill Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80 shadow-inner">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`px-4 py-2 rounded-full text-[11px] font-extrabold tracking-wider uppercase transition-all duration-300 relative ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-md shadow-orange-600/30 font-black scale-105'
                    : 'text-slate-700 hover:text-orange-600 hover:bg-white/80'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="p-2.5 text-slate-600 hover:text-orange-600 bg-slate-100/80 hover:bg-white rounded-full transition-all border border-slate-200/80 shadow-xs hover:shadow"
            title="Search Catalog"
            aria-label="Search catalog"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="relative inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full shadow-md hover:shadow-orange-600/30 transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 opacity-80 animate-pulse" />
              <span>CONTACT US</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 relative z-10" />
          </button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="p-2 text-slate-700 hover:text-orange-600"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-800 hover:text-orange-600 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 pt-5 pb-8 space-y-3 shadow-2xl animate-fadeInUp">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => {
                onNavigate(link.page);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                currentPage === link.page
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'text-slate-800 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-full shadow-md"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
