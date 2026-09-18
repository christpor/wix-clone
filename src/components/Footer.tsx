import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200/80 pt-16 pb-12 text-slate-700">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Upper Grid: 5 Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 pb-16 border-b border-slate-200">
          {/* Column 1: PRODUCT */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Product</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <button onClick={() => onNavigate('/ai-website-builder')} className="hover:text-black transition-colors">
                  AI Website Builder
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/builder/drag-and-drop')} className="hover:text-black transition-colors">
                  Website Templates
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/ecommerce/online-store')} className="hover:text-black transition-colors">
                  eCommerce Store
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/builder/drag-and-drop')} className="hover:text-black transition-colors">
                  Wix Studio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/builder/drag-and-drop')} className="hover:text-black transition-colors">
                  App Market
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: SOLUTIONS */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <button onClick={() => onNavigate('/business/website')} className="hover:text-black transition-colors">
                  Online Bookings
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/ecommerce/online-store')} className="hover:text-black transition-colors">
                  Restaurant System
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/business/website')} className="hover:text-black transition-colors">
                  Blog & Publications
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/builder/drag-and-drop')} className="hover:text-black transition-colors">
                  Portfolio Websites
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about/us')} className="hover:text-black transition-colors">
                  Enterprise
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: COMMUNITY */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Community</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <button onClick={() => onNavigate('/about/us')} className="hover:text-black transition-colors">
                  Wix Partners
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about/us')} className="hover:text-black transition-colors">
                  Developer Center
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about/us')} className="hover:text-black transition-colors">
                  Wix Events
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about/us')} className="hover:text-black transition-colors">
                  Community Forum
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: SUPPORT */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Support</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <button onClick={() => onNavigate('/about/us')} className="hover:text-black transition-colors">
                  Help Center
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about/us')} className="hover:text-black transition-colors">
                  Hire a Professional
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about/us')} className="hover:text-black transition-colors">
                  System Status
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about/us')} className="hover:text-black transition-colors">
                  Speed & Reliability
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: COMPANY */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Company</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <button onClick={() => onNavigate('/about/us')} className="hover:text-black transition-colors">
                  About Wix
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about/us')} className="hover:text-black transition-colors">
                  Press & Media
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about/us')} className="hover:text-black transition-colors">
                  Investor Relations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about/us')} className="hover:text-black transition-colors">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about/us')} className="hover:text-black transition-colors">
                  Sustainability
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Bar: Brand, Legal & Language */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-6">
            <span className="text-2xl font-black tracking-tighter text-black">WiX</span>
            <div className="flex items-center gap-4 flex-wrap">
              <button onClick={() => onNavigate('/about/us')} className="hover:text-slate-900 transition-colors">Terms of Use</button>
              <button onClick={() => onNavigate('/about/us')} className="hover:text-slate-900 transition-colors">Privacy Policy</button>
              <button onClick={() => onNavigate('/about/us')} className="hover:text-slate-900 transition-colors">Accessibility Statement</button>
              <button onClick={() => onNavigate('/about/us')} className="hover:text-slate-900 transition-colors">Security</button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-full">
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>English (US)</span>
            </div>
            <span>© 2006-2026 Wix.com, Inc</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
