import React, { useState } from 'react';
import { Sparkles, Wand2, ArrowRight, CheckCircle2, RefreshCw, Layers, Sliders, Eye } from 'lucide-react';

interface AIBuilderPageProps {
  onNavigate: (path: string) => void;
}

export const AIBuilderPage: React.FC<AIBuilderPageProps> = ({ onNavigate }) => {
  const [businessType, setBusinessType] = useState('Artisanal Hair & Wellness Studio');
  const [siteGoal, setSiteGoal] = useState('Online booking, treatments showcase & organic retail store');
  const [selectedStyle, setSelectedStyle] = useState('Warm & Tactile');
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewReady, setPreviewReady] = useState(true);

  const presets = [
    { title: 'Hair & Wellness Studio', goal: 'Online appointments, treatments & retail products' },
    { title: 'Independent Architecture Agency', goal: 'Portfolio lookbook, client testimonials & project inquiries' },
    { title: 'Specialty Coffee Roastery', goal: 'Single-origin subscription store & tasting events' }
  ];

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setPreviewReady(false);
    setTimeout(() => {
      setIsGenerating(false);
      setPreviewReady(true);
    }, 1100);
  };

  return (
    <div className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-16">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-[#116DFF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Wix Harmony AI Studio</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-[-0.035em] text-[#0F172A] leading-[1.1]">
            Website creation, as natural as a conversation
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Talk to Aria, our next-generation conversational web architect. It designs customized layout hierarchies, curates photography, and drafts converting copy in seconds.
          </p>
        </div>

        {/* Interactive Generation Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Interactive Prompt Studio */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-200">
              <img 
                src="/assets/images/aria-avatar.png" 
                alt="Aria AI" 
                className="w-7 h-7 rounded-full object-cover shadow-sm animate-pulse"
              />
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Aria Web Architect</h3>
                <span className="text-[11px] text-slate-500">Autonomous design engine</span>
              </div>
            </div>

            <form onSubmit={handleSimulate} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Business or Brand Type</label>
                <input
                  type="text"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#116DFF] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Primary Objective & Key Services</label>
                <textarea
                  rows={3}
                  value={siteGoal}
                  onChange={(e) => setSiteGoal(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#116DFF] transition-colors"
                />
              </div>

              {/* Style Selector */}
              <div className="space-y-2 pt-1">
                <label className="text-xs font-semibold text-slate-700">Visual Aesthetic Tone</label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {['Warm & Tactile', 'Minimal Clean', 'Bold Editorial'].map((style) => (
                    <button
                      type="button"
                      key={style}
                      onClick={() => setSelectedStyle(style)}
                      className={`py-2 px-3 rounded-xl font-medium border text-center transition-all ${
                        selectedStyle === style
                          ? 'bg-blue-50 border-[#116DFF] text-[#116DFF] font-semibold'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preset Chips */}
              <div className="pt-2 space-y-1.5">
                <span className="text-[11px] text-slate-500 font-medium">Quick Prompts:</span>
                <div className="flex flex-wrap gap-1.5">
                  {presets.map((p, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => {
                        setBusinessType(p.title);
                        setSiteGoal(p.goal);
                      }}
                      className="text-[10px] px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-black hover:border-slate-300 transition-colors"
                    >
                      {p.title}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isGenerating}
                className="w-full mt-4 py-3.5 rounded-full text-sm font-medium bg-[#116DFF] hover:bg-[#0E5CD8] text-white shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Aria is composing layout & copy...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4" />
                    <span>Generate Bespoke Site</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right: Live Interactive Canvas Preview with Real Photography */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <Eye className="w-4 h-4 text-blue-600" />
                <span>Live Viewport Render</span>
              </div>
              <span className="text-xs font-mono text-emerald-600 font-medium">
                ● 100% Operational Preview
              </span>
            </div>

            {/* Generated Mockup Frame */}
            <div className="rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-md relative">
              {/* Browser Header */}
              <div className="bg-slate-100/90 border-b border-slate-200/80 px-4 py-2.5 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="font-mono text-[11px] text-slate-600">
                  {businessType.toLowerCase().replace(/[^a-z0-9]/g, '')}.wixsite.com
                </span>
                <span className="text-[10px] text-blue-600 font-medium">Wix Studio</span>
              </div>

              {/* Viewport Content with Real Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  src="/assets/images/hero-luna-site.png" 
                  alt="Generated AI Website" 
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isGenerating ? 'opacity-30 blur-xs scale-98' : 'opacity-100 blur-0 scale-100'
                  }`}
                />
                
                {/* Floating Generation Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600 block">
                      {selectedStyle} • Generated by Aria
                    </span>
                    <h4 className="text-sm font-semibold text-slate-900 mt-0.5">{businessType}</h4>
                    <p className="text-xs text-slate-500 line-clamp-1">{siteGoal}</p>
                  </div>
                  <button
                    onClick={() => onNavigate('/builder/drag-and-drop')}
                    className="px-5 py-2 rounded-full text-xs font-semibold bg-[#0F172A] hover:bg-black text-white transition-all whitespace-nowrap"
                  >
                    Open in Studio →
                  </button>
                </div>
              </div>
            </div>

            {/* Architecture Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
              <div className="p-3 rounded-2xl bg-white border border-slate-200">
                <span className="text-slate-400 block text-[10px]">PAGES</span>
                <span className="font-bold text-slate-800 text-sm">5 Ready</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200">
                <span className="text-slate-400 block text-[10px]">SEO TAGS</span>
                <span className="font-bold text-emerald-600 text-sm">Automated</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200">
                <span className="text-slate-400 block text-[10px]">PAYMENTS</span>
                <span className="font-bold text-blue-600 text-sm">Integrated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
