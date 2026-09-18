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

        {/* 3 Horizontal Feature Cards with Real High-Res Photography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Vibe-style creation (Folio Books) */}
          <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            {/* Real Visual Canvas from Screencast */}
            <div className="h-64 sm:h-72 rounded-2xl overflow-hidden relative shadow-sm border border-slate-200/80 bg-slate-100">
              <img 
                src="/assets/images/custom-folio-books.png" 
                alt="Folio Books 3D Artwork"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Copy */}
            <div className="mt-7">
              <h3 className="text-2xl font-medium text-slate-900 tracking-tight">
                Vibe-style creation
              </h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                Describe what you want in your own words and watch it instantly take shape.
              </p>
            </div>
          </div>

          {/* Card 2: Drag and drop freedom (IO Books Canvas) */}
          <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            {/* Real Visual Canvas from Screencast */}
            <div className="h-64 sm:h-72 rounded-2xl overflow-hidden relative shadow-sm border border-slate-200/80 bg-slate-100">
              <img 
                src="/assets/images/custom-io-books.png" 
                alt="IO Books Canvas Editor"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Copy */}
            <div className="mt-7">
              <h3 className="text-2xl font-medium text-slate-900 tracking-tight">
                Drag and drop freedom
              </h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                Move and adjust any element with pixel-level precision on a totally fluid canvas—no limits, just your vision.
              </p>
            </div>
          </div>

          {/* Card 3: A library of possibilities (Threads Pink Book) */}
          <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            {/* Real Visual Canvas from Screencast */}
            <div className="h-64 sm:h-72 rounded-2xl overflow-hidden relative shadow-sm border border-slate-200/80 bg-slate-100">
              <img 
                src="/assets/images/custom-threads.png" 
                alt="Library of Components"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Copy */}
            <div className="mt-7">
              <h3 className="text-2xl font-medium text-slate-900 tracking-tight">
                A library of possibilities
              </h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                Explore 1000s of free components and customizable design assets to make your website unique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
