import React, { useState } from 'react';
import { 
  Layout, Sliders, Code2, ArrowRight, Eye, Monitor, Tablet, Smartphone, 
  Sparkles, Check, Copy, ExternalLink, X, CheckCircle2 
} from 'lucide-react';

interface DragAndDropPageProps {
  onNavigate: (path: string) => void;
}

interface TemplateCard {
  id: string;
  name: string;
  category: 'eCommerce' | 'Creative & Studio' | 'Business' | 'Community';
  image: string;
  badge?: string;
  description: string;
}

export const DragAndDropPage: React.FC<DragAndDropPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePreviewTemplate, setActivePreviewTemplate] = useState<TemplateCard | null>(null);
  const [deviceViewport, setDeviceViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Interactive Visual Inspector State
  const [borderRadius, setBorderRadius] = useState<number>(24);
  const [shadowStyle, setShadowStyle] = useState<'none' | 'soft' | 'floating' | 'dramatic'>('soft');
  const [cardPadding, setCardPadding] = useState<'p-4' | 'p-6' | 'p-8'>('p-6');
  const [accentColor, setAccentColor] = useState<string>('#116DFF');
  const [copiedCSS, setCopiedCSS] = useState(false);

  const templates: TemplateCard[] = [
    {
      id: 't1',
      name: 'Luna Hair & Wellness Studio',
      category: 'Business',
      image: '/assets/images/hero-luna-site.png',
      badge: 'Official Demo',
      description: 'High-converting boutique salon layout with online bookings and retail storefront.'
    },
    {
      id: 't2',
      name: 'Studio Folio Books & Publications',
      category: 'Creative & Studio',
      image: '/assets/images/custom-folio-books.png',
      badge: 'Award Winner',
      description: 'Minimalist editorial architecture with custom typography and publication grid.'
    },
    {
      id: 't3',
      name: 'IO Digital Magazine & Architecture',
      category: 'Creative & Studio',
      image: '/assets/images/custom-io-books.png',
      badge: 'Trending',
      description: 'Dynamic editorial portfolio with kinetic horizontal scroll and full-bleed photography.'
    },
    {
      id: 't4',
      name: 'Bonni Marse French Haute Cuisine',
      category: 'Business',
      image: '/assets/images/solution-bonni-marse.png',
      description: 'Elegant gastronomic experience with real-time table reservations and tasting menu.'
    },
    {
      id: 't5',
      name: 'Earth & Clay Ceramic Atelier',
      category: 'eCommerce',
      image: '/assets/images/wix_asset_0.jpg',
      badge: 'Best Seller',
      description: 'Tactile artisanal storefront with multi-currency cart and inventory sync.'
    },
    {
      id: 't6',
      name: 'Nordic Interior Atelier',
      category: 'Creative & Studio',
      image: '/assets/images/wix_asset_7.jpg',
      description: 'Spatial interior portfolio with fluid responsive masonry grid.'
    },
    {
      id: 't7',
      name: 'Fintech Venture Partners',
      category: 'Business',
      image: '/assets/images/wix_asset_8.jpg',
      badge: 'Enterprise',
      description: 'Institutional venture capital portal with team directory and deal-flow tracker.'
    },
    {
      id: 't8',
      name: 'Runway Athletic & Fitness Club',
      category: 'Community',
      image: '/assets/images/wix_asset_4.jpg',
      description: 'Member subscription community with recurring payments and schedule calendar.'
    }
  ];

  const filteredTemplates = selectedCategory === 'All'
    ? templates
    : templates.filter(t => t.category === selectedCategory);

  const getShadowClass = () => {
    switch (shadowStyle) {
      case 'none': return 'shadow-none';
      case 'soft': return 'shadow-md';
      case 'floating': return 'shadow-xl';
      case 'dramatic': return 'shadow-2xl';
    }
  };

  const generatedCSS = `.wix-studio-card {
  border-radius: ${borderRadius}px;
  padding: ${cardPadding === 'p-4' ? '1rem' : cardPadding === 'p-6' ? '1.5rem' : '2rem'};
  box-shadow: ${shadowStyle === 'none' ? 'none' : shadowStyle === 'soft' ? '0 4px 6px -1px rgb(0 0 0 / 0.1)' : shadowStyle === 'floating' ? '0 20px 25px -5px rgb(0 0 0 / 0.1)' : '0 25px 50px -12px rgb(0 0 0 / 0.25)'};
  border-top: 3px solid ${accentColor};
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCSS);
    setCopiedCSS(true);
    setTimeout(() => setCopiedCSS(false), 2000);
  };

  return (
    <div className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-20">

        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-[#116DFF]">
            <Layout className="w-3.5 h-3.5" />
            <span>Wix Studio & Visual Editor • Design System</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-[-0.035em] text-[#0F172A] leading-[1.1]">
            Radical creative freedom, remarkably fluid precision
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
            Build with freeform responsive precision. Drag and drop any element, write custom CSS and JavaScript with Velo, or start with 900+ award-winning designer templates.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button 
              onClick={() => onNavigate('/ai-website-builder')}
              className="px-7 py-3.5 rounded-full text-sm font-medium bg-[#0F172A] hover:bg-black text-white shadow-md transition-all flex items-center gap-2"
            >
              <span>Launch Studio Canvas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a 
              href="#inspector"
              className="px-6 py-3.5 rounded-full text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all flex items-center gap-2"
            >
              <Sliders className="w-4 h-4 text-[#116DFF]" />
              <span>Live Visual Inspector</span>
            </a>
          </div>
        </div>

        {/* Studio Core Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4 hover:border-slate-300 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#116DFF] flex items-center justify-center">
              <Layout className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Pixel-Freeform Canvas</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Break out of standard 12-column boxes. Position typography, high-res photography, vector illustrations, and 3D shapes freely anywhere on the screen.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4 hover:border-slate-300 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <Sliders className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Fluid Proportional Scaling</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Components automatically scale smoothly from 320px mobile viewports up to 4K ultra-wide monitors without requiring tedious media queries at every step.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4 hover:border-slate-300 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">FullStack Velo Code</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              When visual controls aren’t enough, write native Node.js serverless functions, connect external REST/GraphQL APIs, and manage custom database collections.
            </p>
          </div>
        </div>

        {/* Interactive Template Explorer */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Designer Template Catalog</h3>
              <p className="text-sm text-slate-500 mt-0.5">Explore production templates created by world-class art directors.</p>
            </div>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Creative & Studio', 'Business', 'eCommerce', 'Community'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0F172A] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Template Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTemplates.map(t => (
              <div 
                key={t.id} 
                className="group rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/90 hover:border-slate-300 hover:shadow-lg transition-all p-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white relative border border-slate-100">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    {t.badge && (
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-semibold text-slate-900 shadow-sm border border-slate-200">
                        {t.badge}
                      </div>
                    )}
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{t.category}</span>
                    <h4 className="text-sm font-semibold text-slate-900 mt-0.5 group-hover:text-blue-600 transition-colors line-clamp-1">{t.name}</h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">{t.description}</p>
                  </div>
                </div>

                <div className="pt-4 flex gap-2">
                  <button
                    onClick={() => setActivePreviewTemplate(t)}
                    className="flex-1 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>
                  <button
                    onClick={() => onNavigate('/ai-website-builder')}
                    className="flex-1 py-2 rounded-xl text-xs font-semibold bg-[#116DFF] hover:bg-[#0E5CD8] text-white transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Edit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Visual Inspector Sandbox */}
        <div id="inspector" className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 space-y-8">
          <div>
            <span className="text-xs uppercase font-semibold text-[#116DFF] tracking-wider">Studio Tooling Demo</span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">Live Visual Property Inspector</h3>
            <p className="text-sm text-slate-600 mt-1">
              Adjust design tokens and watch the layout adapt in real time with instant CSS code generation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Inspector Controls */}
            <div className="lg:col-span-5 space-y-6 bg-white p-6 rounded-2xl border border-slate-200">
              {/* Border Radius */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Corner Radius</span>
                  <span className="font-mono text-blue-600">{borderRadius}px</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="40" 
                  value={borderRadius} 
                  onChange={e => setBorderRadius(parseInt(e.target.value))}
                  className="w-full accent-[#116DFF]"
                />
              </div>

              {/* Shadow Elevation */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700">Elevation & Shadow</label>
                <div className="grid grid-cols-4 gap-1.5 text-xs">
                  {(['none', 'soft', 'floating', 'dramatic'] as const).map(s => (
                    <button
                      key={s}
                      onClick={() => setShadowStyle(s)}
                      className={`py-2 rounded-xl capitalize font-medium border text-center transition-all ${
                        shadowStyle === s
                          ? 'border-[#116DFF] bg-blue-50 text-[#116DFF] font-semibold'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Padding */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700">Content Padding</label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { label: 'Compact', val: 'p-4' as const },
                    { label: 'Balanced', val: 'p-6' as const },
                    { label: 'Generous', val: 'p-8' as const }
                  ].map(p => (
                    <button
                      key={p.label}
                      onClick={() => setCardPadding(p.val)}
                      className={`py-2 rounded-xl font-medium border text-center transition-all ${
                        cardPadding === p.val
                          ? 'border-[#116DFF] bg-blue-50 text-[#116DFF] font-semibold'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Accent Color */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700">Accent Highlight</label>
                <div className="flex gap-3">
                  {[
                    { color: '#116DFF', name: 'Wix Blue' },
                    { color: '#10B981', name: 'Emerald' },
                    { color: '#8B5CF6', name: 'Violet' },
                    { color: '#0F172A', name: 'Obsidian' }
                  ].map(c => (
                    <button
                      key={c.color}
                      onClick={() => setAccentColor(c.color)}
                      className={`w-8 h-8 rounded-full border-2 transition-transform ${
                        accentColor === c.color ? 'scale-110 border-slate-900' : 'border-transparent hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.color }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Live Interactive Preview & CSS Output */}
            <div className="lg:col-span-7 space-y-6">
              {/* Dynamic Styled Card */}
              <div 
                className={`bg-white border border-slate-200 transition-all duration-300 ${getShadowClass()} ${cardPadding}`}
                style={{ 
                  borderRadius: `${borderRadius}px`,
                  borderTop: `4px solid ${accentColor}`
                }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: accentColor }}
                    >
                      Active Component
                    </span>
                    <span className="text-xs text-slate-400 font-mono">wix-studio-element</span>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900">Custom Dynamic Module</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    This card reacts immediately to your property inspector values. In Wix Studio, every property is tied to responsive design tokens.
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs font-semibold">
                    <span style={{ color: accentColor }}>Ready for Production</span>
                    <span className="text-slate-400">0 KB Overhead</span>
                  </div>
                </div>
              </div>

              {/* Generated CSS Box */}
              <div className="rounded-2xl bg-slate-900 text-slate-100 p-5 font-mono text-xs space-y-3 shadow-md relative">
                <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                  <span>Generated Studio CSS</span>
                  <button 
                    onClick={copyToClipboard}
                    className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  >
                    {copiedCSS ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy CSS</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="overflow-x-auto text-emerald-400">
                  {generatedCSS}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Preview Modal */}
        {activePreviewTemplate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="w-full max-w-4xl max-h-[90vh] rounded-3xl bg-white p-6 shadow-2xl border border-slate-200 flex flex-col space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600">Template Inspection</span>
                  <h4 className="text-lg font-semibold text-slate-900">{activePreviewTemplate.name}</h4>
                </div>

                <div className="flex items-center gap-3">
                  {/* Viewport Switcher */}
                  <div className="flex rounded-full bg-slate-100 p-1 border border-slate-200 text-slate-600">
                    <button
                      onClick={() => setDeviceViewport('desktop')}
                      className={`p-1.5 rounded-full ${deviceViewport === 'desktop' ? 'bg-white text-[#116DFF] shadow-xs' : ''}`}
                    >
                      <Monitor className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setDeviceViewport('tablet')}
                      className={`p-1.5 rounded-full ${deviceViewport === 'tablet' ? 'bg-white text-[#116DFF] shadow-xs' : ''}`}
                    >
                      <Tablet className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setDeviceViewport('mobile')}
                      className={`p-1.5 rounded-full ${deviceViewport === 'mobile' ? 'bg-white text-[#116DFF] shadow-xs' : ''}`}
                    >
                      <Smartphone className="w-4 h-4" />
                    </button>
                  </div>

                  <button 
                    onClick={() => setActivePreviewTemplate(null)}
                    className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Viewport Frame */}
              <div className="flex-1 overflow-auto flex items-center justify-center p-4 bg-slate-100 rounded-2xl">
                <div 
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 transition-all duration-300 ${
                    deviceViewport === 'desktop' ? 'w-full max-w-3xl' : deviceViewport === 'tablet' ? 'w-[520px]' : 'w-[320px]'
                  }`}
                >
                  <img 
                    src={activePreviewTemplate.image} 
                    alt={activePreviewTemplate.name} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-500 font-medium">{activePreviewTemplate.description}</span>
                <button
                  onClick={() => {
                    setActivePreviewTemplate(null);
                    onNavigate('/ai-website-builder');
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#116DFF] hover:bg-[#0E5CD8] text-white flex items-center gap-1.5 shadow-xs"
                >
                  <span>Use This Template</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
