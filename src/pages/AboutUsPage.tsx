import React, { useState } from 'react';
import { 
  Globe, Users, ShieldCheck, Award, ArrowRight, Sparkles, 
  MapPin, Clock, Server, CheckCircle2, Building2 
} from 'lucide-react';

interface AboutUsPageProps {
  onNavigate: (path: string) => void;
}

interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  role: string;
  teamSize: string;
  timezone: string;
  established: string;
  address: string;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  const offices: OfficeLocation[] = [
    {
      id: 'tlv',
      city: 'Tel Aviv',
      country: 'Israel (Global HQ)',
      role: 'Core Engine & AI Research Lab',
      teamSize: '2,400+ Team Members',
      timezone: 'UTC+3',
      established: '2006',
      address: 'Nemal Tel Aviv St 40'
    },
    {
      id: 'nyc',
      city: 'New York',
      country: 'United States',
      role: 'Enterprise & North America Operations',
      teamSize: '850+ Team Members',
      timezone: 'UTC-4 (EDT)',
      established: '2010',
      address: '500 7th Ave, Manhattan'
    },
    {
      id: 'sfo',
      city: 'San Francisco',
      country: 'United States',
      role: 'Wix Studio Partner Ecosystem',
      teamSize: '420+ Team Members',
      timezone: 'UTC-7 (PDT)',
      established: '2012',
      address: '500 Terry A Francois Blvd'
    },
    {
      id: 'tyo',
      city: 'Tokyo',
      country: 'Japan',
      role: 'APAC Product Localization & Support',
      teamSize: '280+ Team Members',
      timezone: 'UTC+9 (JST)',
      established: '2019',
      address: 'Shibuya Scramble Square 39F'
    },
    {
      id: 'lon',
      city: 'London',
      country: 'United Kingdom',
      role: 'European Commercial & Brand Hub',
      teamSize: '360+ Team Members',
      timezone: 'UTC+1 (BST)',
      established: '2015',
      address: '100 Bishopsgate, City of London'
    }
  ];

  const [activeOffice, setActiveOffice] = useState<OfficeLocation>(offices[0]);

  return (
    <div className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-20">

        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-[#116DFF]">
            <Globe className="w-3.5 h-3.5" />
            <span>Our Mission • The Web Belongs To Everyone</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-[-0.035em] text-[#0F172A] leading-[1.1]">
            Empowering 300 million creators worldwide
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
            We believe the internet should be an open, limitless canvas for everyone to develop, design, and grow. Through pioneering visual technology and multi-cloud resilience, we empower businesses across 190 countries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button 
              onClick={() => onNavigate('/ai-website-builder')}
              className="px-7 py-3.5 rounded-full text-sm font-medium bg-[#0F172A] hover:bg-black text-white shadow-md transition-all flex items-center gap-2"
            >
              <span>Build with Wix</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onNavigate('/ecommerce/online-store')}
              className="px-6 py-3.5 rounded-full text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all flex items-center gap-2"
            >
              <span>Explore Platform</span>
            </button>
          </div>
        </div>

        {/* Foundation Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">300M+</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Registered Users</div>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">190</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Countries Served</div>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">5,000+</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Global Team Members</div>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-emerald-600 tracking-tight">99.99%</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Multi-Cloud Uptime</div>
          </div>
        </div>

        {/* Real Wix Media Story Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm aspect-[4/3]">
            <img 
              src="/assets/images/wix-geo-ai.jpg" 
              alt="Global Infrastructure & Multi-Cloud SLA" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-xs uppercase font-semibold text-[#116DFF] tracking-wider">
              Infrastructure At Scale
            </span>
            <h3 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              Enterprise security & multi-cloud resilience by default
            </h3>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Every website created on Wix benefits from enterprise architecture. Distributed Edge caching across 200+ PoPs, automated SOC 2 Type II compliance, and automated multi-cloud failover across AWS and Google Cloud.
            </p>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>PCI-DSS Level 1 certified payment processing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Automated multi-region DDoS mitigation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero-downtime rolling deployments worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Global Office Switcher */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-xs uppercase font-semibold text-[#116DFF] tracking-wider">Global Footprint</span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-1">Our Worldwide Innovation Hubs</h3>
            </div>
            
            {/* City Selection Pills */}
            <div className="flex flex-wrap gap-2">
              {offices.map(o => (
                <button
                  key={o.id}
                  onClick={() => setActiveOffice(o)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    activeOffice.id === o.id
                      ? 'bg-[#0F172A] text-white'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {o.city}
                </button>
              ))}
            </div>
          </div>

          {/* Active Office Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-8 rounded-2xl border border-slate-200">
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600">
                <MapPin className="w-4 h-4" />
                <span>{activeOffice.country}</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900">{activeOffice.city} Hub</h4>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                {activeOffice.role}
              </p>
              <div className="text-xs text-slate-500 space-y-1 pt-1">
                <div><strong>Address:</strong> {activeOffice.address}</div>
                <div><strong>Established:</strong> {activeOffice.established}</div>
              </div>
            </div>

            <div className="md:col-span-6 grid grid-cols-2 gap-4 text-center">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <Users className="w-5 h-5 text-blue-600 mx-auto mb-1.5" />
                <div className="text-xs text-slate-400">TEAM SIZE</div>
                <div className="text-base font-bold text-slate-900 mt-0.5">{activeOffice.teamSize}</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <Clock className="w-5 h-5 text-indigo-600 mx-auto mb-1.5" />
                <div className="text-xs text-slate-400">TIME ZONE</div>
                <div className="text-base font-bold text-slate-900 mt-0.5">{activeOffice.timezone}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Guiding Principles */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-3xl font-semibold text-slate-900">What Drives Us Every Day</h3>
            <p className="text-sm text-slate-600">Our four foundational anchors since day one.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#116DFF] flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-slate-900">Universal Web</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Empowering everyone from local artisans to global conglomerates with equal creative autonomy.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-slate-900">Zero Compromise</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sub-second LCP speeds, PCI Level 1 compliance, and 99.99% multi-cloud uptime standard.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-slate-900">Creator Sovereignty</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete data ownership, custom domains, zero vendor lock-in, and full code export flexibility.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-slate-900">Augmentive AI</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Building AI that expands human creative expression and removes technical toil, never replacing craft.
              </p>
            </div>
          </div>
        </div>

        {/* Final Pre-footer CTA */}
        <div className="p-10 sm:p-14 rounded-3xl bg-[#0F172A] text-white text-center space-y-6">
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Ready to bring your vision to life?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal">
            Join over 300 million people who build, run, and scale their businesses on Wix.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('/ai-website-builder')}
              className="px-8 py-4 rounded-full text-sm font-medium bg-[#116DFF] hover:bg-[#0E5CD8] text-white shadow-lg transition-all inline-flex items-center gap-2"
            >
              <span>Start Creating Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
