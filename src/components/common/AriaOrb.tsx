import React, { useState } from 'react';
import { Sparkles, MessageSquare, X, ArrowRight, Wand2, RefreshCw } from 'lucide-react';
import { playClickSound, playPopSound } from '../../utils/audio';

interface AriaOrbProps {
  onNavigate: (path: string) => void;
}

export const AriaOrb: React.FC<AriaOrbProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputPrompt, setInputPrompt] = useState('');

  const samplePrompts = [
    'Build an online ceramics boutique with instant checkout',
    'Design a minimalist architecture portfolio with dark lookbook',
    'Create an artisanal coffee roastery with subscription box'
  ];

  const handleToggle = () => {
    if (!isOpen) {
      playPopSound();
    } else {
      playClickSound();
    }
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputPrompt.trim()) return;
    playClickSound();
    setIsOpen(false);
    onNavigate('/ai-website-builder');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Chat Card */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-3xl bg-white shadow-2xl border border-slate-200/90 p-5 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <img 
                src="/assets/images/aria-avatar.png" 
                alt="Aria AI" 
                className="w-8 h-8 rounded-full object-cover shadow-sm ring-2 ring-blue-100"
              />
              <div>
                <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                  <span>Aria AI Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </h4>
                <span className="text-[11px] text-slate-500">Autonomous Web Architect</span>
              </div>
            </div>
            <button 
              onClick={handleToggle}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Prompt Suggestions */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Try asking:</span>
            <div className="space-y-1.5">
              {samplePrompts.map((p, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInputPrompt(p);
                    playClickSound();
                  }}
                  className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/70 hover:border-blue-200 text-xs text-slate-700 hover:text-blue-700 transition-colors"
                >
                  "{p}"
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="relative">
              <input
                type="text"
                value={inputPrompt}
                onChange={e => setInputPrompt(e.target.value)}
                placeholder="What website would you like to create?"
                className="w-full pl-3.5 pr-10 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#116DFF] focus:bg-white transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-[#116DFF] text-white hover:bg-[#0E5CD8] transition-colors"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onNavigate('/ai-website-builder');
              }}
              className="w-full py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1"
            >
              <Wand2 className="w-3.5 h-3.5" />
              <span>Open Full AI Studio Canvas →</span>
            </button>
          </form>
        </div>
      )}

      {/* Floating Orb Button */}
      <button
        onClick={handleToggle}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0F172A] hover:bg-black text-white shadow-xl hover:shadow-2xl border border-slate-800 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <div className="relative">
          <img 
            src="/assets/images/aria-avatar.png" 
            alt="Aria AI" 
            className="w-6 h-6 rounded-full object-cover ring-2 ring-blue-500"
          />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-blue-500 animate-ping" />
        </div>
        <span className="text-xs font-semibold tracking-wide">Ask Aria</span>
        <Sparkles className="w-3.5 h-3.5 text-blue-400 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};
