import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CommunityShowcaseProps {
  onExplore: () => void;
}

export const CommunityShowcase: React.FC<CommunityShowcaseProps> = ({ onExplore }) => {
  return (
    <section className="relative w-full bg-wix-good-company py-28 sm:py-36 overflow-hidden">
      {/* Floating Ambient Brand Cards (Ground Truth from Frames 22-24) */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
        {/* Decorative Floating Cards */}
        <div className="absolute -top-12 left-10 hidden md:block w-36 h-44 rounded-2xl bg-amber-100/90 shadow-lg border border-amber-200/50 p-2 transform -rotate-6 hover:rotate-0 transition-transform">
          <div className="w-full h-24 rounded-xl bg-amber-800/80 mb-2 flex items-center justify-center text-white text-xs font-serif font-bold">
            Studio M
          </div>
          <span className="text-[10px] text-amber-900 font-medium block">Ceramics & Clay</span>
        </div>

        <div className="absolute top-2 right-12 hidden md:block w-40 h-48 rounded-2xl bg-emerald-50/90 shadow-lg border border-emerald-200/50 p-2 transform rotate-6 hover:rotate-0 transition-transform">
          <div className="w-full h-28 rounded-xl bg-emerald-800/80 mb-2 flex items-center justify-center text-white text-xs font-mono font-bold">
            ARCHIVE 04
          </div>
          <span className="text-[10px] text-emerald-900 font-medium block">Editorial Lookbook</span>
        </div>

        <div className="absolute bottom-4 left-16 hidden lg:block w-44 h-36 rounded-2xl bg-white shadow-lg border border-slate-200/80 p-3 transform 3 hover:scale-105 transition-transform">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Featured Creator</span>
          <p className="text-xs font-semibold text-slate-800 mt-1">Elena Rostova Photography</p>
          <span className="text-[10px] text-blue-600 mt-2 block">120K followers</span>
        </div>

        <div className="absolute -bottom-6 right-20 hidden lg:block w-40 h-40 rounded-2xl bg-indigo-50 shadow-lg border border-indigo-100 p-2 transform -rotate-3 hover:scale-105 transition-transform">
          <div className="w-full h-24 rounded-xl bg-indigo-700 mb-2 flex items-center justify-center text-white text-xs font-bold">
            KINETIC
          </div>
          <span className="text-[10px] text-indigo-900 font-medium block">Motion Agency</span>
        </div>

        {/* Central Content */}
        <div className="max-w-2xl mx-auto my-12">
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
