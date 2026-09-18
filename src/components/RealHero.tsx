import React, { useState } from 'react';
import { ArrowRight, Sparkles, Send, Mic, Plus, CheckCircle, Search, RefreshCw } from 'lucide-react';

interface RealHeroProps {
  onGetStarted: () => void;
}

export const RealHero: React.FC<RealHeroProps> = ({ onGetStarted }) => {
  const [ariaPrompt, setAriaPrompt] = useState('Create a website for Zeni Café, a chill, artisanal coffee shop in the historic district.');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 800);
  };

  return (
    <section className="relative w-full bg-wix-hero-gradient pt-16 sm:pt-20 pb-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Main Headline & Call to Action */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-normal tracking-[-0.035em] text-[#0F172A] leading-[1.08]">
            Create your future on the leading website builder
          </h1>
          
          <p className="mt-6 text-lg sm:text-[22px] text-slate-600 font-normal tracking-tight">
            Wix Harmony is where you create a site that means business.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <button
              onClick={onGetStarted}
              className="px-9 py-4 rounded-full bg-[#0F172A] hover:bg-black text-white text-[17px] font-medium tracking-normal transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started
            </button>
            <p className="text-xs text-slate-500 font-normal tracking-normal">
              Start for free. No credit card required.
            </p>
          </div>
        </div>

        {/* Hero Browser Mockup & Interactive Showcase */}
        <div className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
          {/* Main Browser Window */}
          <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] overflow-hidden transition-all">
            {/* Browser Window Header */}
            <div className="bg-slate-50/90 border-b border-slate-200/80 px-4 sm:px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              
              <div className="hidden sm:flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-500 w-72 justify-center shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-[11px] text-slate-700">zenicafe.wixsite.com</span>
              </div>

              <div className="text-[11px] font-medium text-slate-500">
                Wix Harmony Studio
              </div>
            </div>

            {/* Browser Viewport Content: ZENI CAFÉ Showcase */}
            <div className="relative min-h-[440px] sm:min-h-[520px] bg-[#0E3B2E] text-white p-6 sm:p-12 overflow-hidden flex flex-col justify-between">
              {/* Decorative Subtle Grid & Texture */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Zeni Café Navbar */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center font-serif font-bold text-emerald-300">
                    Z
                  </div>
                  <span className="font-serif tracking-widest text-lg font-bold uppercase text-emerald-100">
                    ZENI CAFÉ
                  </span>
                </div>
                <div className="hidden md:flex items-center gap-6 text-xs text-emerald-100/80">
                  <span>Menu</span>
                  <span>Artisanal Roast</span>
                  <span>Locations</span>
                  <button className="px-4 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#0E3B2E] font-semibold text-xs transition-colors">
                    Order Online
                  </button>
                </div>
              </div>

              {/* Zeni Café Hero Content */}
              <div className="relative z-10 my-auto max-w-xl py-8 sm:py-12">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium tracking-wide mb-4">
                  Ethically Sourced • Kyoto Cold Brew
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-emerald-50 leading-[1.1]">
                  Exceptionally good coffee.
                </h2>
                <p className="mt-4 text-sm sm:text-base text-emerald-200/80 max-w-md font-sans">
                  Crafted with single-origin beans, roasted daily in small batches for the neighborhood and discerning coffee lovers.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <button className="px-6 py-2.5 rounded-full bg-white text-[#0E3B2E] text-xs sm:text-sm font-semibold hover:bg-emerald-100 transition-colors">
                    Explore Signature Brews
                  </button>
                  <button className="px-4 py-2.5 rounded-full text-xs sm:text-sm text-emerald-200 hover:text-white flex items-center gap-1.5 transition-colors">
                    View Roast Calendar <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Floating "Ask Aria" Conversational AI Chat Widget (Ground Truth from Frame 1-3) */}
              <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 w-80 sm:w-96 rounded-2xl bg-white text-slate-900 p-4 shadow-2xl border border-slate-200/90 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-900">Ask Aria</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium">AI Agent</span>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 text-xs">✕</button>
                </div>

                <div className="my-3 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl leading-relaxed border border-slate-100">
                  {ariaPrompt}
                </div>

                <form onSubmit={handlePromptSubmit} className="relative flex items-center">
                  <input
                    type="text"
                    value={ariaPrompt}
                    onChange={(e) => setAriaPrompt(e.target.value)}
                    placeholder="Describe changes or additions..."
                    className="w-full bg-slate-100 hover:bg-slate-100/80 focus:bg-white text-xs text-slate-900 pl-3 pr-16 py-2.5 rounded-full border border-transparent focus:border-blue-500 focus:outline-hidden transition-all"
                  />
                  <div className="absolute right-1.5 flex items-center gap-1">
                    <button
                      type="submit"
                      disabled={isGenerating}
                      className="p-1.5 rounded-full bg-[#116DFF] hover:bg-[#0E5CD8] text-white transition-colors"
                    >
                      <Send className={`w-3 h-3 ${isGenerating ? 'animate-spin' : ''}`} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Floating Stats Pill Badge (Frame 3 Ground Truth) */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-8 py-4 rounded-2xl sm:rounded-full bg-white border border-slate-200/90 shadow-sm text-center">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">300M+</span>
                <span className="text-xs sm:text-sm text-slate-600 text-left leading-tight">
                  Sites built<br className="hidden sm:block" /> on Wix
                </span>
              </div>
              <div className="hidden sm:block w-[1px] h-8 bg-slate-200" />
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">90K+</span>
                <span className="text-xs sm:text-sm text-slate-600 text-left leading-tight">
                  Sites created<br className="hidden sm:block" /> daily
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
