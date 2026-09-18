import React from 'react';
import { ArrowUpRight, Heart, Globe, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-white/10 bg-[#000000] pt-16 pb-12 text-sm text-[#8F939A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Col 1 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Product</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('/ai-website-builder')} className="hover:text-white transition-colors">AI Website Builder</button></li>
              <li><button onClick={() => onNavigate('/builder/drag-and-drop')} className="hover:text-white transition-colors">Website Templates</button></li>
              <li><button onClick={() => onNavigate('/ecommerce/online-store')} className="hover:text-white transition-colors">eCommerce Store</button></li>
              <li><button onClick={() => onNavigate('/business/website')} className="hover:text-white transition-colors">Business Solutions</button></li>
              <li><button onClick={() => onNavigate('/builder/drag-and-drop')} className="hover:text-white transition-colors">Wix Studio</button></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Solutions</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('/business/website')} className="hover:text-white transition-colors">Online Booking</button></li>
              <li><button onClick={() => onNavigate('/business/website')} className="hover:text-white transition-colors">Restaurant Menus</button></li>
              <li><button onClick={() => onNavigate('/business/website')} className="hover:text-white transition-colors">Blog & Content</button></li>
              <li><button onClick={() => onNavigate('/business/website')} className="hover:text-white transition-colors">Portfolio & CV</button></li>
              <li><button onClick={() => onNavigate('/about/us')} className="hover:text-white transition-colors">Enterprise Systems</button></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Community</h4>
            <ul className="space-y-2">
              <li><a href="https://wix.com/blog" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Wix Blog</a></li>
              <li><button onClick={() => onNavigate('/about/us')} className="hover:text-white transition-colors">Developer Forum</button></li>
              <li><button onClick={() => onNavigate('/about/us')} className="hover:text-white transition-colors">Partner Program</button></li>
              <li><button onClick={() => onNavigate('/about/us')} className="hover:text-white transition-colors">Accessibility Hub</button></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('/about/us')} className="hover:text-white transition-colors">About Wix</button></li>
              <li><button onClick={() => onNavigate('/about/us')} className="hover:text-white transition-colors">Investor Relations</button></li>
              <li><button onClick={() => onNavigate('/about/us')} className="hover:text-white transition-colors">Careers & Jobs</button></li>
              <li><button onClick={() => onNavigate('/about/us')} className="hover:text-white transition-colors">Privacy & Terms</button></li>
            </ul>
          </div>

          {/* Col 5: Brand Note */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <div className="flex items-center gap-1 text-white font-bold text-lg">
              <span>WiX</span>
              <span className="text-xs text-[#116DFF] font-mono font-normal ml-1">Harmony</span>
            </div>
            <p className="text-xs text-[#8F939A] leading-relaxed">
              The leading website builder platform trusted by over 250 million users in 190 countries.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2006-2026 Wix.com, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[#8F939A]">
            <button onClick={() => onNavigate('/about/us')} className="hover:text-white transition-colors">Security</button>
            <span>•</span>
            <button onClick={() => onNavigate('/about/us')} className="hover:text-white transition-colors">Terms of Use</button>
            <span>•</span>
            <button onClick={() => onNavigate('/about/us')} className="hover:text-white transition-colors">Privacy Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
