import React from 'react';
import { FOUNDATION_METRICS } from '../data/content';
import { ShieldCheck, Zap, Globe2, Lock, ArrowRight } from 'lucide-react';

export const FoundationSection: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#116DFF]">
          Enterprise Performance & Security
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Build your website on unshakeable foundations
        </h2>
        <p className="text-base text-[#8F939A]">
          Engineered for continuous 99.99% uptime, hyper-fast worldwide CDN caching, and automated enterprise security protocols.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FOUNDATION_METRICS.map((m, idx) => (
          <div 
            key={idx} 
            className="p-8 rounded-3xl bg-[#16191E] border border-white/10 hover:border-[#116DFF]/50 transition-all space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                {m.value}
              </div>
              <h3 className="text-base font-bold text-white pt-2">{m.label}</h3>
              <p className="text-xs text-[#8F939A] leading-relaxed">{m.sub}</p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs font-semibold text-[#116DFF]">
              <span>Learn about cloud infra</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
