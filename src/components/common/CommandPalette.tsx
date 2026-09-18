import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Sparkles, ShoppingBag, Calendar, Layout, Globe, 
  ArrowRight, X, Layers, Sliders, ChevronRight, CornerDownLeft 
} from 'lucide-react';
import { playClickSound, playPopSound } from '../../utils/audio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

interface PaletteItem {
  id: string;
  title: string;
  category: 'Pages' | 'Templates' | 'Tools' | 'AI';
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      playPopSound();
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const items: PaletteItem[] = [
    {
      id: 'ai-builder',
      title: 'Aria AI Website Builder',
      category: 'Pages',
      subtitle: 'Conversational site generator with responsive layout composer',
      icon: Sparkles,
      action: () => { onNavigate('/ai-website-builder'); onClose(); }
    },
    {
      id: 'ecommerce',
      title: 'eCommerce & Online Store',
      category: 'Pages',
      subtitle: 'Multi-currency checkout, catalog & Bakong KHQR rails',
      icon: ShoppingBag,
      action: () => { onNavigate('/ecommerce/online-store'); onClose(); }
    },
    {
      id: 'business',
      title: 'Business Operations & CRM',
      category: 'Pages',
      subtitle: 'Client calendar scheduling & Kanban lead pipeline',
      icon: Calendar,
      action: () => { onNavigate('/business/website'); onClose(); }
    },
    {
      id: 'studio',
      title: 'Wix Studio & Visual Editor',
      category: 'Pages',
      subtitle: 'Freeform pixel canvas & live visual property inspector',
      icon: Layout,
      action: () => { onNavigate('/builder/drag-and-drop'); onClose(); }
    },
    {
      id: 'about',
      title: 'About Us & Infrastructure',
      category: 'Pages',
      subtitle: '300M+ users, AWS/GCP multi-cloud SLA & global hubs',
      icon: Globe,
      action: () => { onNavigate('/about/us'); onClose(); }
    },
    {
      id: 'tpl-luna',
      title: 'Luna Hair & Wellness Studio',
      category: 'Templates',
      subtitle: 'Boutique beauty salon template with 3D bottle hero',
      icon: Layers,
      action: () => { onNavigate('/builder/drag-and-drop'); onClose(); }
    },
    {
      id: 'tpl-folio',
      title: 'Studio Folio Books & Publications',
      category: 'Templates',
      subtitle: 'Architectural lookbook & editorial grid template',
      icon: Layers,
      action: () => { onNavigate('/builder/drag-and-drop'); onClose(); }
    },
    {
      id: 'tool-inspector',
      title: 'Live CSS Visual Inspector',
      category: 'Tools',
      subtitle: 'Manipulate border radius, shadows & extract clean CSS',
      icon: Sliders,
      action: () => { onNavigate('/builder/drag-and-drop'); onClose(); }
    }
  ];

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      playClickSound();
      setSelectedIndex(prev => (prev + 1) % (filteredItems.length + (query.trim() ? 1 : 0)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      playClickSound();
      setSelectedIndex(prev => (prev - 1 + (filteredItems.length + (query.trim() ? 1 : 0))) % (filteredItems.length + (query.trim() ? 1 : 0)));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (query.trim() && selectedIndex === 0) {
        // Route as Aria prompt
        playClickSound();
        onNavigate('/ai-website-builder');
        onClose();
      } else {
        const targetIndex = query.trim() ? selectedIndex - 1 : selectedIndex;
        if (filteredItems[targetIndex]) {
          playClickSound();
          filteredItems[targetIndex].action();
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3 bg-slate-50/70">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, search pages, or ask Aria AI..."
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none text-slate-900 placeholder:text-slate-400 text-sm sm:text-base focus:outline-none"
          />
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-500 shadow-2xs">
              ESC to close
            </span>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-3 space-y-1">
          {/* Custom Aria AI Query Action */}
          {query.trim() && (
            <div
              onClick={() => {
                playClickSound();
                onNavigate('/ai-website-builder');
                onClose();
              }}
              onMouseEnter={() => setSelectedIndex(0)}
              className={`p-3.5 rounded-2xl cursor-pointer flex items-center justify-between transition-colors ${
                selectedIndex === 0 ? 'bg-blue-50/80 text-slate-900' : 'hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#116DFF] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-blue-600 flex items-center gap-1.5">
                    <span>Ask Aria AI to build: "{query}"</span>
                  </div>
                  <div className="text-xs text-slate-500">Autonomous design hierarchy & bespoke copy draft</div>
                </div>
              </div>
              <CornerDownLeft className="w-4 h-4 text-blue-500" />
            </div>
          )}

          {filteredItems.map((item, idx) => {
            const actualIndex = query.trim() ? idx + 1 : idx;
            const isSelected = selectedIndex === actualIndex;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => {
                  playClickSound();
                  item.action();
                }}
                onMouseEnter={() => setSelectedIndex(actualIndex)}
                className={`p-3 rounded-2xl cursor-pointer flex items-center justify-between transition-colors ${
                  isSelected ? 'bg-slate-100 text-slate-900' : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                      <span>{item.title}</span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-slate-200/60 text-slate-600">
                        {item.category}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 truncate">{item.subtitle}</div>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 transition-opacity ${isSelected ? 'opacity-100 text-slate-900' : 'opacity-0'}`} />
              </div>
            );
          })}

          {filteredItems.length === 0 && !query.trim() && (
            <div className="p-8 text-center text-xs text-slate-400">
              No matching commands or pages found.
            </div>
          )}
        </div>

        {/* Footer Navigation Hints */}
        <div className="p-3 bg-slate-50 border-t border-slate-200/80 px-4 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
          </div>
          <span className="text-[#116DFF] font-sans font-semibold">Wix Spotlight</span>
        </div>
      </div>
    </div>
  );
};
