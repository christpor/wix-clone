import React, { useState, useRef } from 'react';
import { ArrowRight, Sparkles, Send, Mic, Plus } from 'lucide-react';

interface RealHeroProps {
  onGetStarted: () => void;
}

export const RealHero: React.FC<RealHeroProps> = ({ onGetStarted }) => {
  const [ariaPrompt, setAriaPrompt] = useState('Create a website for Luna\'s Hair, a hair studio specializing in deep treatments and braiding, with a fresh look & feel');
  const [isGenerating, setIsGenerating] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D Perspective Tilt on Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4; // max -4 to +4 deg
    const rotateY = ((x - centerX) / centerX) * 4;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 900);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-gradient-to-b from-[#C8F2EA]/40 via-[#E4F8F4]/30 to-white pt-14 sm:pt-18 pb-20 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Headline & Call to Action */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-normal tracking-[-0.035em] text-[#0F172A] leading-[1.08]">
            Create your future on the leading website builder
          </h1>
          
          <p className="mt-6 text-lg sm:text-[22px] text-slate-600 font-normal tracking-tight">
            Wix Harmony is where you create a site that means business.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <button
              onClick={onGetStarted}
              className="px-9 py-4 rounded-full bg-[#0F172A] hover:bg-black text-white text-[17px] font-medium tracking-normal transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started
            </button>
            <p className="text-xs text-slate-500 font-normal tracking-normal">
              Start for free. No credit card required.
            </p>
          </div>
        </div>

        {/* 3D Perspective Hero Showcase (Authentic Luna's Hair Carousel) */}
        <div 
          ref={containerRef}
          style={{
            perspective: '1400px',
          }}
          className="mt-14 sm:mt-16 relative max-w-6xl mx-auto flex items-center justify-center min-h-[480px] sm:min-h-[580px]"
        >
          {/* Outer 3D Layer Wrapper with dynamic tilt */}
          <div 
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="relative w-full flex items-center justify-center"
          >
            {/* 1. Left Floating Orange Scrunchie */}
            <div 
              style={{ transform: 'translateZ(60px)' }}
              className="absolute -left-4 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 pointer-events-none drop-shadow-2xl animate-pulse duration-1000 hidden sm:block"
            >
              <img 
                src="/assets/images/hero-scrunchie.png" 
                alt="3D Silk Scrunchie"
                className="w-24 sm:w-36 lg:w-44 object-contain filter drop-shadow-xl hover:scale-105 transition-transform"
              />
            </div>

            {/* 2. Left Floating Hair Styling Card */}
            <div 
              style={{ transform: 'translateZ(45px)' }}
              className="absolute left-8 sm:left-20 lg:left-28 top-1/2 -translate-y-1/2 z-20 hidden md:block"
            >
              <div className="rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-white/60 hover:scale-105 transition-all duration-300">
                <img 
                  src="/assets/images/hero-hair-card.png" 
                  alt="From $60 Hair Styling Booking"
                  className="w-40 sm:w-52 lg:w-60 object-contain"
                />
              </div>
            </div>

            {/* 3. Center Main Browser Mockup (Luna's Hair Studio) */}
            <div 
              style={{ transform: 'translateZ(10px)' }}
              className="relative z-10 w-full max-w-3xl lg:max-w-4xl rounded-2xl sm:rounded-3xl bg-white shadow-[0_30px_70px_-15px_rgba(0,0,0,0.18)] border border-slate-200/90 overflow-hidden"
            >
              {/* Browser Chrome Header */}
              <div className="bg-slate-100/90 border-b border-slate-200/80 px-4 sm:px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                </div>
                <div className="text-[12px] font-mono text-slate-600 truncate max-w-[200px] sm:max-w-xs">
                  lunashair.wixsite.com
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>Harmony 2.0</span>
                </div>
              </div>

              {/* Viewport Image Asset: Official Luna's Hair site capture */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-[#F2C1A8]">
                <img 
                  src="/assets/images/hero-luna-site.png" 
                  alt="Luna's Hair Studio Website on Wix"
                  className="w-full h-full object-cover object-center"
                />

                {/* Floating "Ask Aria" Conversational AI Chat Widget */}
                <div 
                  style={{ transform: 'translateZ(50px)' }}
                  className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-30 w-72 sm:w-96 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/80 p-4 sm:p-5 shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <img 
                        src="/assets/images/aria-avatar.png" 
                        alt="Aria AI"
                        className="w-5 h-5 rounded-full object-cover shadow-sm animate-pulse"
                      />
                      <span className="text-xs font-semibold text-slate-900">Ask Aria</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full font-medium">
                        Live AI
                      </span>
                    </div>
                  </div>

                  <div className="my-3 text-xs text-slate-700 bg-slate-50/90 p-3 rounded-xl leading-relaxed border border-slate-100">
                    {ariaPrompt}
                  </div>

                  <form onSubmit={handlePromptSubmit} className="relative flex items-center">
                    <input
                      type="text"
                      value={ariaPrompt}
                      onChange={(e) => setAriaPrompt(e.target.value)}
                      placeholder="Ask me anything..."
                      className="w-full bg-slate-100/90 hover:bg-slate-100 text-xs text-slate-900 pl-3 pr-16 py-2.5 rounded-full border border-transparent focus:border-blue-500 focus:bg-white focus:outline-hidden transition-all"
                    />
                    <div className="absolute right-1.5 flex items-center gap-1">
                      <button
                        type="submit"
                        disabled={isGenerating}
                        className="p-1.5 rounded-full bg-[#116DFF] hover:bg-[#0E5CD8] text-white transition-colors"
                      >
                        <Send className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* 4. Right Floating Styling Gel Bottle */}
            <div 
              style={{ transform: 'translateZ(55px)' }}
              className="absolute right-2 sm:right-10 lg:right-16 top-1/2 -translate-y-1/2 z-20 hidden md:block pointer-events-none"
            >
              <img 
                src="/assets/images/hero-gel-bottle.png" 
                alt="Luna's Styling Gel 3D Product"
                className="w-28 sm:w-36 lg:w-44 object-contain filter drop-shadow-2xl hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>

        {/* Bottom Floating Stats Pill Badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-8 py-4 rounded-2xl sm:rounded-full bg-white border border-slate-200/90 shadow-sm text-center">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">300M+</span>
              <span className="text-xs sm:text-sm text-slate-600 text-left leading-tight">
                Sites built<br className="hidden sm:block" /> on Wix
              </span>
            </div>
            <div className="hidden sm:block w-[1px] h-8 bg-slate-200" />
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">90K+</span>
              <span className="text-xs sm:text-sm text-slate-600 text-left leading-tight">
                Sites created<br className="hidden sm:block" /> daily
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
