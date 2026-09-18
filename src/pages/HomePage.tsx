import React from 'react';
import { HeroHarmony } from '../components/HeroHarmony';
import { TemplateGrid } from '../components/TemplateGrid';
import { AriaShowcase } from '../components/AriaShowcase';
import { FoundationSection } from '../components/FoundationSection';
import { DomainSearch } from '../components/DomainSearch';
import { BUSINESS_SOLUTIONS } from '../data/content';
import { ShoppingBag, Calendar, Users, UtensilsCrossed, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const iconMap: Record<string, any> = {
    ShoppingBag,
    Calendar,
    Users,
    UtensilsCrossed
  };

  return (
    <div className="space-y-12">
      {/* 1. Signature Wix Harmony Hero */}
      <HeroHarmony onNavigate={onNavigate} />

      {/* 2. Solutions to Fuel Every Business Move */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#116DFF]">
            Integrated Platform
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Solutions to fuel every business move
          </h2>
          <p className="text-sm text-[#8F939A]">
            Whatever you're building, run your entire operation with specialized enterprise-grade engines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_SOLUTIONS.map((b, i) => {
            const Icon = iconMap[b.iconName] || ShoppingBag;
            return (
              <div 
                key={i} 
                onClick={() => onNavigate('/business/website')}
                className="p-6 rounded-3xl bg-[#16191E] border border-white/10 hover:border-[#116DFF]/50 transition-all flex flex-col justify-between space-y-6 cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#116DFF]/10 border border-[#116DFF]/20 flex items-center justify-center text-[#116DFF] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#116DFF] transition-colors">{b.title}</h3>
                  <p className="text-xs text-[#8F939A] leading-relaxed">{b.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-green-400 font-semibold">{b.stat}</span>
                  <ArrowRight className="w-4 h-4 text-[#8F939A] group-hover:translate-x-1 group-hover:text-white transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Designer Template Grid */}
      <TemplateGrid onNavigate={onNavigate} />

      {/* 4. Aria AI Spotlight */}
      <AriaShowcase onNavigate={onNavigate} />

      {/* 5. Unshakeable Foundations (Uptime, Global CDN, Security) */}
      <FoundationSection />

      {/* 6. Domain Search Engine */}
      <DomainSearch />
    </div>
  );
};
