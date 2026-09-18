import React, { useState } from 'react';
import { ChevronDown, Globe, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNav = (path: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          {/* Left Cluster: Logo & Navigation */}
          <div className="flex items-center gap-8 xl:gap-10">
            {/* Wix Official Wordmark */}
            <div 
              onClick={() => handleNav('/')}
              className="cursor-pointer flex items-center group select-none"
            >
              <span className="text-[28px] font-black tracking-[-0.05em] text-black font-sans leading-none">
                WiX
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[15px] font-normal text-slate-800">
              <div 
                className="relative group cursor-pointer py-2 flex items-center gap-1 hover:text-black transition-colors"
                onMouseEnter={() => setActiveDropdown('product')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Product</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 transition-transform group-hover:rotate-180" />
                
                {activeDropdown === 'product' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 flex flex-col gap-1.5 animate-in fade-in zoom-in-95 duration-150">
                    <button 
                      onClick={() => handleNav('/ai-website-builder')}
                      className="text-left px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium text-slate-900"
                    >
                      AI Website Builder
                      <span className="block text-xs font-normal text-slate-500">Create a business site in minutes</span>
                    </button>
                    <button 
                      onClick={() => handleNav('/builder/drag-and-drop')}
                      className="text-left px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium text-slate-900"
                    >
                      Website Design
                      <span className="block text-xs font-normal text-slate-500">Pixel-level drag & drop freedom</span>
                    </button>
                    <button 
                      onClick={() => handleNav('/ecommerce/online-store')}
                      className="text-left px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium text-slate-900"
                    >
                      eCommerce Platform
                      <span className="block text-xs font-normal text-slate-500">Sell products & subscriptions</span>
                    </button>
                  </div>
                )}
              </div>

              <div 
                className="relative group cursor-pointer py-2 flex items-center gap-1 hover:text-black transition-colors"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Solutions</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 transition-transform group-hover:rotate-180" />

                {activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 flex flex-col gap-1.5 animate-in fade-in zoom-in-95 duration-150">
                    <button 
                      onClick={() => handleNav('/business/website')}
                      className="text-left px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium text-slate-900"
                    >
                      Business & Bookings
                    </button>
                    <button 
                      onClick={() => handleNav('/ecommerce/online-store')}
                      className="text-left px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium text-slate-900"
                    >
                      Online Store & Retail
                    </button>
                    <button 
                      onClick={() => handleNav('/')}
                      className="text-left px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium text-slate-900"
                    >
                      Portfolios & Freelancers
                    </button>
                  </div>
                )}
              </div>

              <div 
                className="relative group cursor-pointer py-2 flex items-center gap-1 hover:text-black transition-colors"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Resources</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 transition-transform group-hover:rotate-180" />

                {activeDropdown === 'resources' && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 flex flex-col gap-1.5 animate-in fade-in zoom-in-95 duration-150">
                    <button 
                      onClick={() => handleNav('/about/us')}
                      className="text-left px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium text-slate-900"
                    >
                      Blog & Guides
                    </button>
                    <button 
                      onClick={() => handleNav('/about/us')}
                      className="text-left px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium text-slate-900"
                    >
                      SEO Hub & Visibility
                    </button>
                    <button 
                      onClick={() => handleNav('/about/us')}
                      className="text-left px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium text-slate-900"
                    >
                      Help Center
                    </button>
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleNav('/')}
                className="hover:text-black transition-colors"
              >
                Domains
              </button>

              <button 
                onClick={() => handleNav('/')}
                className="hover:text-black transition-colors"
              >
                Pricing
              </button>

              {/* Vertical divider */}
              <div className="h-4 w-[1px] bg-slate-300" />

              <button 
                onClick={() => handleNav('/builder/drag-and-drop')}
                className="hover:text-black transition-colors flex items-center gap-1 font-medium"
              >
                Wix Studio
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </button>

              <button 
                onClick={() => handleNav('/about/us')}
                className="hover:text-black transition-colors"
              >
                Enterprise
              </button>
            </nav>
          </div>

          {/* Right Cluster: Actions */}
          <div className="flex items-center gap-5 sm:gap-6">
            <button 
              className="hidden sm:flex items-center justify-center p-2 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
              title="Change Language"
            >
              <Globe className="w-4 h-4 text-slate-800" />
            </button>

            <button
              onClick={() => handleNav('/about/us')}
              className="hidden sm:block text-[15px] font-normal text-slate-800 hover:text-black transition-colors"
            >
              Log In
            </button>

            <button
              onClick={() => handleNav('/ai-website-builder')}
              className="px-6 py-2.5 rounded-full text-[14px] font-medium tracking-normal bg-[#116DFF] hover:bg-[#0E5CD8] text-white shadow-sm hover:shadow transition-all active:scale-[0.98]"
            >
              Start for free
            </button>

            {/* Mobile hamburger */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-800 hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          data-lenis-prevent="true"
          className="lg:hidden border-b border-slate-200 bg-white px-6 py-6 space-y-4 shadow-xl"
        >
          <div className="space-y-2">
            <button
              onClick={() => handleNav('/ai-website-builder')}
              className="w-full text-left py-2 text-base font-medium text-slate-900 hover:text-blue-600"
            >
              AI Website Builder
            </button>
            <button
              onClick={() => handleNav('/ecommerce/online-store')}
              className="w-full text-left py-2 text-base font-medium text-slate-900 hover:text-blue-600"
            >
              eCommerce
            </button>
            <button
              onClick={() => handleNav('/business/website')}
              className="w-full text-left py-2 text-base font-medium text-slate-900 hover:text-blue-600"
            >
              Business Solutions
            </button>
            <button
              onClick={() => handleNav('/builder/drag-and-drop')}
              className="w-full text-left py-2 text-base font-medium text-slate-900 hover:text-blue-600"
            >
              Wix Studio
            </button>
            <button
              onClick={() => handleNav('/about/us')}
              className="w-full text-left py-2 text-base font-medium text-slate-900 hover:text-blue-600"
            >
              About & Enterprise
            </button>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => handleNav('/about/us')}
              className="w-full py-2.5 rounded-full text-sm font-medium text-slate-800 border border-slate-200"
            >
              Log In
            </button>
            <button
              onClick={() => handleNav('/ai-website-builder')}
              className="w-full py-3 rounded-full text-sm font-medium bg-[#116DFF] text-white text-center"
            >
              Start for free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
