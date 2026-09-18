import React from 'react';
import { FOUNDATION_METRICS } from '../data/content';
import { Globe, Users, ShieldCheck, Award } from 'lucide-react';

interface AboutUsPageProps {
  onNavigate: (path: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#116DFF]">
          About Wix
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Empowering 250M+ creators worldwide
        </h1>
        <p className="text-base text-[#8F939A]">
          We believe the internet should be accessible for everyone to develop, create, and contribute. Through continuous innovation and technology, we empower millions of businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FOUNDATION_METRICS.map((m, i) => (
          <div key={i} className="p-8 rounded-3xl bg-[#16191E] border border-white/10 space-y-2 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#116DFF] font-mono">{m.value}</div>
            <h4 className="text-base font-bold text-white pt-2">{m.label}</h4>
            <p className="text-xs text-[#8F939A]">{m.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
