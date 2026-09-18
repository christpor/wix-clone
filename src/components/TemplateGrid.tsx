import React, { useState } from 'react';
import { WIX_TEMPLATES, TemplateItem } from '../data/content';
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react';

interface TemplateGridProps {
  onNavigate: (path: string) => void;
}

export const TemplateGrid: React.FC<TemplateGridProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Business', 'Store', 'Creative', 'Community'];

  const filtered = selectedCategory === 'All' 
    ? WIX_TEMPLATES 
    : WIX_TEMPLATES.filter(t => t.category === selectedCategory);

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#116DFF]">
            Designer-Made Templates
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Website templates for any industry
          </h2>
          <p className="text-sm text-[#8F939A]">
            Choose from over 900 fully customizable, mobile-optimized website templates crafted by professional designers.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === c
                  ? 'bg-[#116DFF] text-white shadow-md shadow-[#116DFF]/25'
                  : 'bg-white/5 text-[#8F939A] hover:text-white hover:bg-white/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map(item => (
          <div
            key={item.id}
            onClick={() => onNavigate('/builder/drag-and-drop')}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-[#16191E] border border-white/10 hover:border-[#116DFF]/50 transition-all flex flex-col justify-between"
          >
            <div className="aspect-[4/3] overflow-hidden bg-slate-900 relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = '/assets/images/wix_asset_0.jpg';
                }}
              />
              {item.badge && (
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#116DFF] text-[10px] font-bold text-white uppercase tracking-wider">
                  {item.badge}
                </div>
              )}
            </div>

            <div className="p-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#8F939A]">{item.category}</span>
                <h4 className="text-sm font-bold text-white group-hover:text-[#116DFF] transition-colors line-clamp-1">
                  {item.title}
                </h4>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-[#116DFF] transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
