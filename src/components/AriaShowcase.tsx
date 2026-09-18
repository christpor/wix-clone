import React from 'react';
import { Sparkles, Bot, Zap, ArrowRight, MessageSquareCode } from 'lucide-react';

interface AriaShowcaseProps {
  onNavigate: (path: string) => void;
}

export const AriaShowcase: React.FC<AriaShowcaseProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#16191E] via-[#12161D] to-[#0A0D12] border border-white/15 relative overflow-hidden shadow-2xl">
        {/* Background glow */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-400">
              <Bot className="w-3.5 h-3.5" />
              <span>Next-Generation Assistant</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Meet Aria, your unfair advantage.
            </h2>

            <p className="text-base text-[#8F939A] leading-relaxed">
              Aria sits alongside your workflow to suggest optimal layouts, generate high-converting SEO copy, write custom Velo backend code, and automate repetitive tasks across your entire online presence.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                  <Zap className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Instant Copy & Visual Refinement</h4>
                  <p className="text-xs text-[#8F939A]">Generate multi-lingual hero copy and matching typography styles on the fly.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                  <MessageSquareCode className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Custom FullStack Velo Scripts</h4>
                  <p className="text-xs text-[#8F939A]">Ask Aria to build custom payment webhooks, database queries, and dynamic API endpoints.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('/ai-website-builder')}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-600 hover:bg-purple-700 text-white shadow-xl shadow-purple-600/30 transition-all flex items-center gap-2"
              >
                <span>Try Aria in AI Builder</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl p-6 bg-black/60 border border-white/10 backdrop-blur-xl shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="text-xs font-mono text-[#8F939A] ml-2">Aria Studio Console</span>
                </div>
                <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                  Active Agent
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white/5 text-slate-300">
                  <span className="text-purple-400">User:</span> Optimize our checkout page for mobile cart conversion.
                </div>
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-white space-y-2">
                  <div className="flex items-center gap-1.5 text-purple-300 font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Aria:</span>
                  </div>
                  <p className="text-[#D1D5DB] leading-relaxed">
                    Analyzing store funnel... Identified 2 friction points: 3-step checkout and lack of Apple Pay. I have enabled Express Checkout and reduced field requirements.
                  </p>
                  <div className="text-[10px] text-green-400 font-bold">
                    ✓ Applied 1-click Express Checkout (+24% projected lift)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
