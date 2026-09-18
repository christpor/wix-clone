import React, { useState } from 'react';
import { Sparkles, Wand2, ArrowRight, Laptop, CheckCircle2, RefreshCw } from 'lucide-react';

interface AIBuilderPageProps {
  onNavigate: (path: string) => void;
}

export const AIBuilderPage: React.FC<AIBuilderPageProps> = ({ onNavigate }) => {
  const [businessType, setBusinessType] = useState('Coffee Roaster & Cafe');
  const [siteGoal, setSiteGoal] = useState('Sell coffee beans online & take table reservations');
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewReady, setPreviewReady] = useState(false);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setPreviewReady(false);
    setTimeout(() => {
      setIsGenerating(false);
      setPreviewReady(true);
    }, 1500);
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#116DFF]/10 border border-[#116DFF]/30 text-xs font-semibold text-[#116DFF]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Wix AI Website Builder</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Website creation, as natural as thinking
        </h1>
        <p className="text-base text-[#8F939A]">
          Have a conversation with our conversational AI builder. It crafts layout, writes marketing copy, curates imagery, and creates an operational site in under 60 seconds.
        </p>
      </div>

      {/* Interactive Generator Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Input parameters */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-[#16191E] border border-white/10 space-y-5">
          <h3 className="text-base font-bold text-white">Define your project</h3>
          <form onSubmit={handleSimulate} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#8F939A]">Business Name or Type</label>
              <input
                type="text"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#116DFF]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#8F939A]">What is the primary goal of the site?</label>
              <textarea
                rows={3}
                value={siteGoal}
                onChange={(e) => setSiteGoal(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#116DFF]"
              />
            </div>

            <button
              type="submit"
              disabled={isGenerating}
              className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#116DFF] hover:bg-[#0E5CD8] text-white shadow-xl shadow-[#116DFF]/25 transition-all flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Generating Custom Layout...</span>
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

        {/* Right: Live Interactive Render Preview */}
        <div className="lg:col-span-7 rounded-3xl bg-[#16191E] border border-white/10 p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-mono text-[#8F939A]">AI Canvas Output Preview</span>
            <span className="text-xs font-mono text-green-400">Status: {previewReady ? 'Ready' : 'Waiting for prompt'}</span>
          </div>

          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black/50 border border-white/10 relative flex flex-col justify-center items-center text-center p-8">
            <img 
              src="/assets/images/wix_asset_6.jpg" 
              alt="Generated Site" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 filter blur-[1px]" 
            />
            <div className="relative z-10 space-y-3 max-w-md">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#116DFF] text-white uppercase tracking-wider">
                {businessType}
              </span>
              <h2 className="text-2xl font-extrabold text-white">Artisanal Roast & Pour</h2>
              <p className="text-xs text-[#D1D5DB] line-clamp-2">{siteGoal}</p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => onNavigate('/builder/drag-and-drop')}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-white text-black hover:bg-slate-200 transition-colors"
                >
                  Customize in Studio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
