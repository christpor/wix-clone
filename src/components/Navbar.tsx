import React, { useState } from 'react';
import { Menu, X, ChevronDown, Sparkles, ArrowRight, Globe } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'AI Builder', path: '/ai-website-builder' },
    { label: 'eCommerce', path: '/ecommerce/online-store' },
    { label: 'Business Solutions', path: '/business/website' },
    { label: 'Studio & Templates', path: '/builder/drag-and-drop' },
    { label: 'About', path: '/about/us' }
  ];

  const handleNav = (path: string) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#000000]/85 backdrop-blur-xl border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <div 
            onClick={() => handleNav('/')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            {/* Authentic Wix 3D Monogram & Wordmark */}
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-2xl tracking-tighter text-white font-sans group-hover:text-[#116DFF] transition-colors">
                WiX
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-white/10 text-white/75 border border-white/10">
                Harmony
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNav(item.path)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'text-white bg-white/15'
                      : 'text-[#8F939A] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNav('/about/us')}
              className="px-4 py-2 rounded-full text-xs font-semibold text-white/80 hover:text-white transition-colors"
            >
              Enterprise
            </button>
            <button
              onClick={() => handleNav('/ai-website-builder')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#116DFF] hover:bg-[#0E5CD8] text-white shadow-lg shadow-[#116DFF]/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          data-lenis-prevent="true"
          className="lg:hidden border-b border-white/10 bg-[#000000]/95 backdrop-blur-2xl px-6 py-6 space-y-3 overscroll-contain"
        >
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNav(item.path)}
              className="w-full text-left py-2.5 text-base font-medium text-white/90 hover:text-white"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => handleNav('/ai-website-builder')}
              className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#116DFF] text-white text-center"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
