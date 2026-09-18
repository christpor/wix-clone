import React from 'react';
import { Search, CheckCircle2, Sparkles, Share2, TrendingUp, Bot, ExternalLink } from 'lucide-react';

export const AIVisibilitySection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-24 sm:py-32 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Bento Cards (Frames 18-20 Ground Truth) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Search Engine Optimization */}
          <div className="lg:col-span-4 rounded-3xl bg-slate-50 border border-slate-200/90 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full w-fit">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Optimize Pages With AI
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-full w-fit">
                  <CheckCircle2 className="w-4 h-4 text-slate-400" />
                  Connect to Search Engines
                </div>
              </div>

              {/* Google Search Snippet Preview */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">
                    G
                  </div>
                  <div className="text-[11px] text-slate-500 font-sans">
                    Afterglow • www.after-glow.com
                  </div>
                </div>
                <h4 className="text-sm font-medium text-blue-700 hover:underline cursor-pointer">
                  Wellness Studio | Natural Glow & Recovery
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Discover holistic bodywork, cold plunges, and infrared sauna treatments in downtown Brooklyn.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-medium text-slate-900 tracking-tight">
                Built-in SEO infrastructure
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Automated sitemaps, canonical tags, and structured schemas optimized to rank on Google instantly.
              </p>
            </div>
          </div>

          {/* Card 2 (Center Hero): GEO and AI visibility */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#E2F7ED] via-[#EDFBF4] to-white border border-emerald-200/60 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            {/* LLM Simulation Widget */}
            <div className="rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 p-5 shadow-sm space-y-4">
              {/* User Prompt */}
              <div className="flex justify-end">
                <div className="bg-emerald-600 text-white text-xs px-3.5 py-2 rounded-2xl rounded-tr-xs max-w-[240px]">
                  Suggest some local wellness centers I might like near me
                </div>
              </div>

              {/* AI Response with Brand Citation */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-emerald-700" />
                  <span className="text-xs font-bold text-slate-900">1. Afterglow</span>
                  <span className="text-[11px] text-amber-600 font-medium">★ 4.7 Recovery Studio</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="h-20 rounded-xl bg-amber-100 flex items-center justify-center text-[10px] font-mono text-amber-900 font-bold p-2 text-center">
                    AFTER GLOW LINENS
                  </div>
                  <div className="h-20 rounded-xl bg-slate-200 flex items-center justify-center text-[10px] font-mono text-slate-700 font-bold p-2 text-center">
                    RECOVERY SPA
                  </div>
                </div>

                {/* LLM Platform Citations */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                    <Sparkles className="w-3 h-3" /> Gemini
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                    ChatGPT
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                    Perplexity
                  </span>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="mt-8">
              <h3 className="text-2xl font-medium text-slate-900 tracking-tight">
                GEO and AI visibility
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Track where and how LLMs mention your brand, and get actionable insights to increase your reach across today's leading AI platforms.
              </p>
            </div>
          </div>

          {/* Card 3: Social Media & Marketing */}
          <div className="lg:col-span-3 rounded-3xl bg-slate-50 border border-slate-200/90 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div className="relative">
              {/* Mobile Reel Preview */}
              <div className="h-64 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 p-4 text-white flex flex-col justify-between shadow-md">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold">@afterglow</span>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">Reel</span>
                </div>

                <div className="text-center my-auto">
                  <span className="font-serif tracking-widest text-lg font-black uppercase text-white/90">
                    AFTERGLOW
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] bg-black/30 backdrop-blur-md p-2 rounded-xl">
                  <span>❤️ 2,840</span>
                  <span>💬 142</span>
                  <span>↗ Share</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-medium text-slate-900 tracking-tight">
                Social media sync
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Publish content directly to social channels, run targeted ads, and sync campaigns in one unified dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Headline Callout */}
        <div className="mt-20 sm:mt-28 flex flex-col md:flex-row md:items-center justify-between gap-8 pt-12 border-t border-slate-100">
          <div className="max-w-xl">
            <h3 className="text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-[#0F172A] leading-tight">
              Manage it all, in one place
            </h3>
          </div>
          <div className="max-w-md">
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              From big picture to finest detail, get total visibility and control of your business on any device, at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
