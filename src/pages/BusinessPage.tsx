import React from 'react';
import { BUSINESS_SOLUTIONS } from '../data/content';
import { ShoppingBag, Calendar, Users, UtensilsCrossed, CheckCircle2, ArrowRight } from 'lucide-react';

interface BusinessPageProps {
  onNavigate: (path: string) => void;
}

export const BusinessPage: React.FC<BusinessPageProps> = ({ onNavigate }) => {
  const iconMap: Record<string, any> = { ShoppingBag, Calendar, Users, UtensilsCrossed };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#116DFF]">
          Business Operations
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          A better way to run your day-to-day
        </h1>
        <p className="text-base text-[#8F939A]">
          Manage bookings, capture leads, process invoices, and build lasting customer relationships from a centralized business dashboard.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BUSINESS_SOLUTIONS.map((sol, idx) => {
          const Icon = iconMap[sol.iconName] || Users;
          return (
            <div key={idx} className="p-8 rounded-3xl bg-[#16191E] border border-white/10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#116DFF]/10 flex items-center justify-center text-[#116DFF]">
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">{sol.title}</h3>
                <p className="text-sm text-[#8F939A] leading-relaxed">{sol.desc}</p>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono text-green-400">
                <span>Metric Impact:</span>
                <span className="font-bold">{sol.stat}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
