import React, { useState, useEffect } from 'react';
import { ChevronDown, Globe, Menu, X, ArrowUpRight, Search, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { isAudioMuted, toggleAudioMute, playClickSound, playPopSound } from '../../utils/audio';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenCommandPalette }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setMuted(isAudioMuted());
    const handleMuteChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ muted: boolean }>;
      if (customEvent.detail) {
        setMuted(customEvent.detail.muted);
      }
    };
    window.addEventListener('wix_audio_mute_change', handleMuteChange);
    return () => window.removeEventListener('wix_audio_mute_change', handleMuteChange);
  }, []);

  const handleNav = (path: string) => {
    playClickSound();
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    onNavigate(path);
  };

  const handleToggleMute = () => {
    const nextMuted = toggleAudioMute();
    setMuted(nextMuted);
    if (!nextMuted) {
      playPopSound();
    }
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
                      <span className="block text-xs font-normal text-slate-500">Client scheduling & CRM</span>
                    </button>
                    <button 
                      onClick={() => handleNav('/ecommerce/online-store')}
                      className="text-left px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium text-slate-900"
                    >
                      Online Store & Retail
                      <span className="block text-xs font-normal text-slate-500">Inventory & payment rails</span>
                    </button>
                    <button 
                      onClick={() => handleNav('/')}
                      className="text-left px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium text-slate-900"
                    >
                      Portfolios & Freelancers
                      <span className="block text-xs font-normal text-slate-500">Creative showcase galleries</span>
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
                      Infrastructure & Cloud
                    </button>
                    <button 
                      onClick={() => handleNav('/about/us')}
                      className="text-left px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium text-slate-900"
                    >
                      Global Offices & Story
                    </button>
                    <button 
                      onClick={() => handleNav('/about/us')}
                      className="text-left px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium text-slate-900"
                    >
                      Security & Compliance
                    </button>
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleNav('/builder/drag-and-drop')}
                className="hover:text-black transition-colors flex items-center gap-1 font-medium"
              >
                Templates
              </button>

              <button 
                onClick={() => handleNav('/builder/drag-and-drop')}
                className="hover:text-black transition-colors flex items-center gap-1 font-medium text-[#116DFF]"
              >
                Wix Studio
                <ArrowUpRight className="w-3 h-3" />
              </button>

              <button 
                onClick={() => handleNav('/about/us')}
                className="hover:text-black transition-colors"
              >
                Enterprise
              </button>
            </nav>
          </div>

          {/* Right Cluster: Command Palette, Audio Toggle, CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Quick Spotlight / Cmd+K Pill */}
            {onOpenCommandPalette && (
              <button
                onClick={() => {
                  playPopSound();
                  onOpenCommandPalette();
                }}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-600 text-xs font-medium border border-slate-200/60 transition-all active:scale-95"
                title="Search or ask Aria (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span>Search</span>
                <kbd className="font-mono text-[10px] bg-white px-1.5 py-0.5 rounded border border-slate-300 text-slate-500 shadow-2xs">
                  ⌘K
                </kbd>
              </button>
            )}

            {/* Tactile Audio Mute Toggle */}
            <button
              onClick={handleToggleMute}
              className={`p-2 rounded-full border transition-all ${
                muted 
                  ? 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-700' 
                  : 'bg-blue-50/70 border-blue-200 text-[#116DFF] hover:bg-blue-100'
              }`}
              title={muted ? 'Unmute tactile audio effects' : 'Mute tactile audio effects'}
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <button
              onClick={() => handleNav('/about/us')}
              className="hidden sm:block text-[15px] font-normal text-slate-800 hover:text-black transition-colors"
            >
              Log In
            </button>

            <button
              onClick={() => handleNav('/ai-website-builder')}
              className="px-6 py-2.5 rounded-full text-[14px] font-medium tracking-normal bg-[#116DFF] hover:bg-[#0E5CD8] text-white shadow-sm hover:shadow transition-all active:scale-[0.98] flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start for free</span>
            </button>

            {/* Mobile hamburger */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => {
                  playPopSound();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
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
          className="lg:hidden border-b border-slate-200 bg-white px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          {/* Quick Mobile Search */}
          {onOpenCommandPalette && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-100 text-slate-600 text-xs font-medium"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-slate-400" />
                <span>Search pages & ask Aria AI...</span>
              </div>
              <kbd className="font-mono text-[10px] bg-white px-2 py-0.5 rounded border border-slate-300">
                ⌘K
              </kbd>
            </button>
          )}

          <div className="space-y-1 text-sm font-medium text-slate-800">
            <button
              onClick={() => handleNav('/ai-website-builder')}
              className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-50 flex items-center justify-between"
            >
              <span>AI Website Builder</span>
              <span className="text-[10px] uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">New</span>
            </button>
            <button
              onClick={() => handleNav('/ecommerce/online-store')}
              className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-50 flex items-center justify-between"
            >
              <span>eCommerce Platform</span>
              <span className="text-xs text-slate-400">$14B+ GMV</span>
            </button>
            <button
              onClick={() => handleNav('/business/website')}
              className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Business & Bookings</span>
              <span className="text-xs text-slate-400">CRM Suite</span>
            </button>
            <button
              onClick={() => handleNav('/builder/drag-and-drop')}
              className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Wix Studio & Templates</span>
              <span className="text-xs text-slate-400">900+</span>
            </button>
            <button
              onClick={() => handleNav('/about/us')}
              className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-50 flex items-center justify-between"
            >
              <span>About Us & Cloud SLA</span>
              <span className="text-xs text-slate-400">AWS/GCP</span>
            </button>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => handleNav('/about/us')}
              className="w-full py-2.5 rounded-full text-sm font-medium text-slate-800 border border-slate-200 hover:bg-slate-50"
            >
              Log In
            </button>
            <button
              onClick={() => handleNav('/ai-website-builder')}
              className="w-full py-3 rounded-full text-sm font-semibold bg-[#116DFF] hover:bg-[#0E5CD8] text-white text-center shadow-md"
            >
              Start for free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
