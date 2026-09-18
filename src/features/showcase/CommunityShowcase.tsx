import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CommunityShowcaseProps {
  onExplore: () => void;
}

export const CommunityShowcase: React.FC<CommunityShowcaseProps> = ({ onExplore }) => {
  return (
    <section className="relative w-full bg-wix-good-company py-28 sm:py-36 overflow-hidden">
      {/* Floating Ambient Brand Cards with Real Keyframe Animations */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
        {/* Card 1: Top Left */}
        <div className="absolute -top-10 left-6 lg:left-14 hidden md:block w-40 h-48 rounded-2xl bg-white shadow-xl border border-slate-200/80 p-2 animate-wix-float-slow hover:scale-105 transition-transform cursor-pointer">
          <div className="w-full h-32 rounded-xl overflow-hidden mb-2 bg-amber-100">
            <img 
              src="/assets/images/wix_asset_18.jpg" 
              alt="Artisan Creator Studio"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[11px] font-semibold text-slate-900 block">Studio Ceramics</span>
          <span className="text-[9px] text-slate-500">Paris, France</span>
        </div>

        {/* Card 2: Top Right */}
        <div className="absolute top-0 right-8 lg:right-16 hidden md:block w-44 h-52 rounded-2xl bg-white shadow-xl border border-slate-200/80 p-2 animate-wix-float-fast hover:scale-105 transition-transform cursor-pointer">
          <div className="w-full h-36 rounded-xl overflow-hidden mb-2 bg-emerald-50">
            <img 
              src="/assets/images/wix_asset_20.jpg" 
              alt="Editorial Lookbook"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[11px] font-semibold text-slate-900 block">Nordic Apparel</span>
          <span className="text-[9px] text-slate-500">Stockholm, Sweden</span>
        </div>

        {/* Card 3: Bottom Left */}
        <div className="absolute bottom-2 left-12 lg:left-24 hidden lg:block w-44 h-48 rounded-2xl bg-white shadow-xl border border-slate-200/80 p-2.5 animate-wix-float-reverse hover:scale-105 transition-transform cursor-pointer">
          <div className="w-full h-32 rounded-xl overflow-hidden mb-2 bg-indigo-50">
            <img 
              src="/assets/images/wix_asset_24.jpg" 
              alt="Elena Rostova Photography"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[11px] font-semibold text-slate-900 block">Elena Rostova</span>
          <span className="text-[9px] text-blue-600 font-medium">Fine Art Photography</span>
        </div>

        {/* Card 4: Bottom Right */}
        <div className="absolute -bottom-4 right-14 lg:right-28 hidden lg:block w-44 h-48 rounded-2xl bg-white shadow-xl border border-slate-200/80 p-2.5 animate-wix-float-slow hover:scale-105 transition-transform cursor-pointer">
          <div className="w-full h-32 rounded-xl overflow-hidden mb-2 bg-rose-50">
            <img 
              src="/assets/images/wix_asset_25.jpg" 
              alt="Motion Agency"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[11px] font-semibold text-slate-900 block">Kinetic Studio</span>
          <span className="text-[9px] text-slate-500">Tokyo, Japan</span>
        </div>

        {/* Central Content */}
        <div className="max-w-2xl mx-auto my-14">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[-0.035em] text-[#0F172A] leading-tight">
            You're in good company
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-slate-600 font-normal">
            Millions of sites already run on Wix.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onExplore}
              className="px-8 py-4 rounded-full bg-[#0F172A] hover:bg-black text-white text-[16px] font-medium tracking-normal transition-all shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Sites
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
