import React from 'react';
import { WIX_TEMPLATES } from '../data/content';
import { Layout, Sliders, Code2, ArrowRight } from 'lucide-react';

interface DragAndDropPageProps {
  onNavigate: (path: string) => void;
}

export const DragAndDropPage: React.FC<DragAndDropPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#116DFF]">
          Wix Studio & Visual Editor
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Radical customization, remarkably simple
        </h1>
        <p className="text-base text-[#8F939A]">
          Create with fluid precision. Drag and drop any element, write custom CSS and JavaScript, or build modular design components for high-traffic platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-[#16191E] border border-white/10 space-y-4">
          <Layout className="w-8 h-8 text-[#116DFF]" />
          <h3 className="text-xl font-bold text-white">Pixel-Perfect Canvas</h3>
          <p className="text-xs text-[#8F939A] leading-relaxed">Position text, videos, vector art, and 3D shapes freely anywhere on the screen.</p>
        </div>

        <div className="p-8 rounded-3xl bg-[#16191E] border border-white/10 space-y-4">
          <Sliders className="w-8 h-8 text-[#116DFF]" />
          <h3 className="text-xl font-bold text-white">Dynamic Breakpoints</h3>
          <p className="text-xs text-[#8F939A] leading-relaxed">Customize layout behavior across desktop, tablet, and mobile with independent control.</p>
        </div>

        <div className="p-8 rounded-3xl bg-[#16191E] border border-white/10 space-y-4">
          <Code2 className="w-8 h-8 text-[#116DFF]" />
          <h3 className="text-xl font-bold text-white">FullStack Velo Code</h3>
          <p className="text-xs text-[#8F939A] leading-relaxed">Add custom database collections, backend serverless functions, and third-party API webhooks.</p>
        </div>
      </div>
    </div>
  );
};
