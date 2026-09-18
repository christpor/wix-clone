import React from 'react';
import { Search, CheckCircle2, Sparkles, Share2, TrendingUp, Bot } from 'lucide-react';

export const AIVisibilitySection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-24 sm:py-32 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Bento Cards with Real Wix CDN Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Search Engine Optimization */}
          <div className="lg:col-span-4 rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full w-fit">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Optimize Pages With AI
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-full w-fit">
                  <CheckCircle2 className="w-4 h-4 text-slate-400" />
                  Connect to Search Engines
                </div>
              </div>

              {/* Official Wix SEO Hub Image */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 aspect-[16/10] bg-slate-100">
                <img 
                  src="/assets/images/wix-seo.jpg" 
                  alt="SEO for website on Wix"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-medium text-slate-900 tracking-tight">
                Built-in SEO infrastructure
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Automated sitemaps, canonical tags, and structured schemas optimized to rank on Google instantly.
              </p>
            </div>
          </div>

          {/* Card 2 (Center Hero): GEO and AI visibility */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#E2F7ED] via-[#EDFBF4] to-white border border-emerald-200/60 p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            {/* Official Wix GEO and AI Visibility Image */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-emerald-200/80 aspect-[16/11] bg-white">
              <img 
                src="/assets/images/wix-geo-ai.jpg" 
                alt="GEO and AI website visibility on Wix"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Copy */}
            <div className="mt-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                  <Sparkles className="w-3 h-3" /> Gemini
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                  ChatGPT
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                  Perplexity
                </span>
              </div>
              <h3 className="text-2xl font-medium text-slate-900 tracking-tight">
                GEO and AI visibility
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Track where and how LLMs mention your brand, and get actionable insights to increase your reach across today's leading AI platforms.
              </p>
            </div>
          </div>

          {/* Card 3: Social Media & Marketing */}
          <div className="lg:col-span-3 rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            {/* Official Wix Social Media Image */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 aspect-[16/12] bg-slate-100">
              <img 
                src="/assets/images/wix-social.jpg" 
                alt="Social media management on Wix"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-medium text-slate-900 tracking-tight">
                Social media sync
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Publish content directly to social channels, run targeted campaigns, and sync in one unified dashboard.
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
