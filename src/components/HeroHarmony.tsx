import React, { useState } from 'react';
import { Sparkles, ArrowRight, Wand2, Laptop, Check, Loader2 } from 'lucide-react';

interface HeroHarmonyProps {
  onNavigate: (path: string) => void;
}

export const HeroHarmony: React.FC<HeroHarmonyProps> = ({ onNavigate }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [genStep, setGenStep] = useState(0);

  const steps = [
    'Analyzing business concept...',
    'Generating bespoke design system & color palette...',
    'Synthesizing responsive layout with Aria AI...',
    'Preview ready!'
  ];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setGenStep(0);

    const interval = setInterval(() => {
      setGenStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setIsGenerating(false);
            onNavigate('/ai-website-builder');
          }, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 700);
  };

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#116DFF]/25 to-purple-600/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Release Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-semibold text-white/90">
          <span className="w-2 h-2 rounded-full bg-[#116DFF] animate-pulse" />
          <span>Wix Harmony Release</span>
          <span className="text-white/30">•</span>
          <span className="text-[#8F939A]">Website creation, as natural as thinking</span>
        </div>

        {/* Verbatim Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto font-sans">
          Create your future on the leading{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#116DFF]">
            website builder
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#8F939A] max-w-2xl mx-auto leading-relaxed">
          Wix Harmony is where you create a site that means business. Radical customization, unshakeable speed, and conversational AI engineering.
        </p>

        {/* Interactive Prompt Shell */}
        <div className="max-w-2xl mx-auto pt-2">
          <form 
            onSubmit={handleGenerate}
            className="p-2 sm:p-2.5 rounded-2xl sm:rounded-full bg-[#16191E]/90 border border-white/15 shadow-2xl backdrop-blur-xl flex flex-col sm:flex-row items-center gap-2 focus-within:border-[#116DFF] transition-all"
          >
            <div className="flex items-center gap-2.5 pl-3 sm:pl-4 w-full">
              <Wand2 className="w-4 h-4 text-[#116DFF] shrink-0" />
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your site (e.g. Minimalist coffee roaster in Tokyo)..."
                className="w-full bg-transparent text-sm text-white placeholder-[#8F939A] focus:outline-none py-2"
                disabled={isGenerating}
              />
            </div>
            <button
              type="submit"
              disabled={isGenerating}
              className="w-full sm:w-auto px-6 py-3 rounded-xl sm:rounded-full text-xs font-bold uppercase tracking-wider bg-[#116DFF] hover:bg-[#0E5CD8] text-white shadow-md shadow-[#116DFF]/30 transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Building...</span>
                </>
              ) : (
                <>
                  <span>Create Site</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>

          {/* Prompt Lifecycle Feedback Toast */}
          {isGenerating && (
            <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#116DFF]/10 border border-[#116DFF]/30 text-xs font-mono text-[#116DFF] animate-fade-in">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>{steps[genStep]}</span>
            </div>
          )}
        </div>

        {/* 3D Isometric Floating Template Canvas Grid */}
        <div className="pt-12 perspective-1000 max-w-5xl mx-auto">
          <div className="relative preserve-3d rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-white/10 to-transparent border border-white/15 shadow-2xl shadow-black/80 hover:rotate-x-2 transition-transform duration-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#16191E] shadow-xl group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src="/assets/images/wix_asset_0.jpg" 
                    alt="Pottery Studio Template" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                    eCommerce
                  </div>
                </div>
                <div className="p-4 text-left">
                  <h4 className="text-sm font-bold text-white">Earth & Clay Studio</h4>
                  <p className="text-xs text-[#8F939A] mt-0.5">Automated cart & inventory</p>
                </div>
              </div>

              {/* Card 2 (Center Hero Stage) */}
              <div className="rounded-2xl overflow-hidden border-2 border-[#116DFF]/40 bg-[#16191E] shadow-2xl group md:-translate-y-4">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src="/assets/images/wix_asset_2.jpg" 
                    alt="Tech SaaS Platform Template" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#116DFF] text-[10px] font-bold text-white uppercase tracking-wider">
                    AI Powered
                  </div>
                </div>
                <div className="p-4 text-left">
                  <h4 className="text-sm font-bold text-white">Pulse Analytics Hub</h4>
                  <p className="text-xs text-[#8F939A] mt-0.5">Custom CSS & database integration</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#16191E] shadow-xl group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src="/assets/images/wix_asset_1.jpg" 
                    alt="Architecture Collective Template" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                    Creative Portfolio
                  </div>
                </div>
                <div className="p-4 text-left">
                  <h4 className="text-sm font-bold text-white">Forma Architecture</h4>
                  <p className="text-xs text-[#8F939A] mt-0.5">High-res retina gallery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
