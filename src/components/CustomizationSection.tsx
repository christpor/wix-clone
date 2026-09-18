import React from 'react';
import { Sparkles, Move, Layers, ArrowRight } from 'lucide-react';

interface CustomizationProps {
  onGetStarted: () => void;
}

export const CustomizationSection: React.FC<CustomizationProps> = ({ onGetStarted }) => {
  return (
    <section className="relative w-full bg-white py-24 sm:py-32 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-6xl font-normal tracking-[-0.03em] text-[#0F172A] leading-[1.1]">
              Radical customization, remarkably simple
            </h2>
          </div>

          <div className="max-w-md flex flex-col items-start gap-5">
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Combine the power of AI with hands-on creative control, so every choice is yours and every detail feels like you.
            </p>
            <button
              onClick={onGetStarted}
              className="px-7 py-3 rounded-full bg-[#0F172A] hover:bg-black text-white text-sm font-medium tracking-normal transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* 3 Horizontal Feature Cards (Direct Ground Truth from Frames 14-16) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Vibe-style creation */}
          <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
            {/* Visual Canvas */}
            <div className="h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-[#801B2E] via-[#A62B45] to-[#D9534F] p-6 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between z-10">
                <span className="text-xs uppercase tracking-widest text-rose-200/90 font-medium">Independent Bookstore</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white font-mono">AI Canvas</span>
              </div>

              {/* Bold 3D typography */}
              <div className="relative z-10 my-auto">
                <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase leading-none font-sans drop-shadow-md">
                  FOLIO<br />BOOKS
                </h3>
                <div className="mt-4 flex gap-2">
                  <span className="text-[10px] px-2.5 py-1 rounded bg-black/30 backdrop-blur font-mono">Vol. 01</span>
                  <span className="text-[10px] px-2.5 py-1 rounded bg-black/30 backdrop-blur font-mono">Vol. 02</span>
                </div>
              </div>

              {/* Aesthetic subtle curve */}
              <div className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full border-4 border-white/10" />
            </div>

            {/* Copy */}
            <div className="mt-8">
              <h3 className="text-2xl font-medium text-slate-900 tracking-tight">
                Vibe-style creation
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Describe what you want in your own words and watch it instantly take shape.
              </p>
            </div>
          </div>

          {/* Card 2: Drag and drop freedom */}
          <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
            {/* Visual Canvas with Editor & Aria */}
            <div className="h-64 sm:h-72 rounded-2xl bg-[#E8EDC6] p-6 text-slate-900 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-slate-700 font-medium border-b border-black/10 pb-2 z-10">
                <span className="font-bold">IO BOOKS</span>
                <div className="flex gap-2 text-[10px]">
                  <span>Shop All</span>
                  <span>About</span>
                </div>
              </div>

              {/* Floating mini Aria Pill */}
              <div className="z-10 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-black/10 my-auto max-w-[240px]">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-800 pb-1.5 border-b border-slate-100">
                  <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-blue-600" /> Aria</span>
                  <span className="text-slate-400 text-[9px]">Active</span>
                </div>
                <div className="mt-2 text-[11px] text-slate-600">
                  Add interactive lookbook carousel
                </div>
                <div className="mt-2 text-[9px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-mono">
                  drag to canvas
                </div>
              </div>

              <div className="text-[10px] text-slate-600 z-10">
                Pixel-level fluid grid
              </div>
            </div>

            {/* Copy */}
            <div className="mt-8">
              <h3 className="text-2xl font-medium text-slate-900 tracking-tight">
                Drag and drop freedom
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Move and adjust any element with pixel-level precision on a totally fluid canvas—no limits, just your vision.
              </p>
            </div>
          </div>

          {/* Card 3: A library of possibilities */}
          <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
            {/* Visual Canvas with Design Assets */}
            <div className="h-64 sm:h-72 rounded-2xl bg-gradient-to-tr from-[#9AB78C] to-[#C9E4B8] p-6 text-slate-900 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between text-xs font-semibold text-emerald-950 z-10">
                <span>Design Library</span>
                <span className="px-2 py-0.5 rounded-full bg-white/40 text-[10px]">1000+ Blocks</span>
              </div>

              {/* Mockup component swatch */}
              <div className="z-10 bg-white/90 backdrop-blur rounded-xl p-4 shadow-md max-w-[220px] my-auto space-y-2.5">
                <div className="h-3 w-2/3 bg-slate-300 rounded" />
                <div className="h-2 w-full bg-slate-200 rounded" />
                <div className="flex gap-1.5 pt-1">
                  <div className="w-4 h-4 rounded-full bg-pink-400" />
                  <div className="w-4 h-4 rounded-full bg-emerald-500" />
                  <div className="w-4 h-4 rounded-full bg-indigo-500" />
                  <div className="w-4 h-4 rounded-full bg-amber-400" />
                </div>
              </div>

              <div className="text-[10px] font-mono text-emerald-900 z-10">
                Customizable tokens & typography
              </div>
            </div>

            {/* Copy */}
            <div className="mt-8">
              <h3 className="text-2xl font-medium text-slate-900 tracking-tight">
                A library of possibilities
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Explore 1000s of free components and customizable design assets to make your website unique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
