import React, { useState } from 'react';
import { ArrowUpRight, ShoppingBag, Calendar, Users, Briefcase, BookOpen, GraduationCap, CheckCircle2, ChevronRight } from 'lucide-react';

interface SolutionItem {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  badge: string;
  previewType: 'ecommerce' | 'scheduling' | 'leads' | 'portfolio' | 'blog' | 'courses';
}

const solutions: SolutionItem[] = [
  {
    id: 'ecommerce',
    title: 'eCommerce',
    description: 'Sell products, manage global inventory, accept 50+ payment gateways, and scale your brand with an enterprise-grade storefront.',
    ctaText: 'Create an eCommerce Website',
    ctaLink: '/ecommerce/online-store',
    badge: 'Storefront & Checkout',
    previewType: 'ecommerce'
  },
  {
    id: 'scheduling',
    title: 'Scheduling',
    description: 'Let clients book appointments, classes, and memberships seamlessly on any device with automated calendar reminders and payments.',
    ctaText: 'Explore Wix Bookings',
    ctaLink: '/business/website',
    badge: 'Calendar & Bookings',
    previewType: 'scheduling'
  },
  {
    id: 'leads',
    title: 'Lead management',
    description: 'Capture high-intent leads with custom smart forms, automated marketing journeys, and CRM pipelines that convert visitors into loyal clients.',
    ctaText: 'Get Business Tools',
    ctaLink: '/business/website',
    badge: 'CRM & Growth',
    previewType: 'leads'
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: 'Showcase your creative work in high resolution with fluid gallery layouts, client proofing portals, and bespoke visual storytelling.',
    ctaText: 'Build Your Portfolio',
    ctaLink: '/builder/drag-and-drop',
    badge: 'Creative Showcase',
    previewType: 'portfolio'
  },
  {
    id: 'blog',
    title: 'Blog',
    description: 'Turn your expertise into a blog that grows your community, with AI to help you plan, write and publish every post.',
    ctaText: 'Start Your Blog',
    ctaLink: '/about/us',
    badge: 'Editorial & Community',
    previewType: 'blog'
  },
  {
    id: 'courses',
    title: 'Online courses',
    description: 'Monetize your knowledge with video masterclasses, downloadable syllabus resources, gated member areas, and recurring subscriptions.',
    ctaText: 'Create Online Courses',
    ctaLink: '/ecommerce/online-store',
    badge: 'LMS & Memberships',
    previewType: 'courses'
  }
];

export const StickySolutions: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [activeId, setActiveId] = useState<string>('ecommerce');

  const activeSolution = solutions.find((s) => s.id === activeId) || solutions[0];

  return (
    <section className="relative w-full bg-white py-24 lg:py-32 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-xs uppercase font-bold tracking-widest text-[#116DFF] mb-3 block">
            End-to-End Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] text-[#0F172A] leading-[1.1]">
            Everything your business needs to grow online
          </h2>
        </div>

        {/* Two-Column Sticky Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Device Mockup */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 z-20">
            <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 shadow-xl min-h-[460px] sm:min-h-[520px] flex flex-col justify-between overflow-hidden relative transition-all duration-300">
              {/* Badge & Controls */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#116DFF]" />
                  <span className="text-xs font-semibold text-slate-700 tracking-wide">
                    {activeSolution.badge}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">
                  Live View • 60 FPS
                </span>
              </div>

              {/* Dynamic Mockup Viewport */}
              <div className="my-auto py-4">
                {activeSolution.previewType === 'ecommerce' && (
                  <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm space-y-5 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">HIGHEST STREETWEAR</span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">In Stock</span>
                    </div>
                    <div className="h-44 sm:h-52 rounded-xl bg-gradient-to-br from-emerald-100/60 to-slate-100 flex items-center justify-center relative overflow-hidden group">
                      <div className="w-28 h-36 rounded-lg bg-emerald-700 shadow-xl transform group-hover:scale-105 transition-transform flex flex-col justify-between p-3 text-white">
                        <span className="text-[9px] font-mono tracking-widest uppercase">HIGHEST</span>
                        <div className="w-6 h-6 rounded-full bg-emerald-600/80 flex items-center justify-center">
                          <ShoppingBag className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-3 right-3 text-xs font-bold text-slate-800 bg-white/90 backdrop-blur px-2.5 py-1 rounded-md shadow-xs">
                        $89.00 USD
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">Technical Crossbody Pack</h4>
                        <p className="text-xs text-slate-500">Water-resistant Cordura • Olive Green</p>
                      </div>
                      <button 
                        onClick={() => onNavigate(activeSolution.ctaLink)}
                        className="px-4 py-2 rounded-full bg-black text-white text-xs font-medium hover:bg-slate-800 transition-colors"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                )}

                {activeSolution.previewType === 'scheduling' && (
                  <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-slate-900">Reserve Session • Wellness Studio</h4>
                      <span className="text-xs text-blue-600 font-medium">Available Today</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {['09:00 AM', '11:30 AM', '02:00 PM', '03:45 PM', '05:15 PM', '06:30 PM'].map((slot, i) => (
                        <div
                          key={slot}
                          className={`p-3 rounded-xl text-center text-xs font-medium border transition-colors cursor-pointer ${
                            i === 2 
                              ? 'bg-blue-50 border-[#116DFF] text-[#116DFF] font-semibold' 
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {slot}
                        </div>
                      ))}
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-semibold text-slate-900 block">Aromatherapy Deep Tissue</span>
                        <span className="text-slate-500">60 minutes • Dr. Sarah Chen</span>
                      </div>
                      <span className="font-bold text-slate-900">$120</span>
                    </div>
                  </div>
                )}

                {activeSolution.previewType === 'leads' && (
                  <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">SMART INBOUND PIPELINE</span>
                      <span className="text-xs font-bold text-emerald-600">+34% vs last week</span>
                    </div>
                    <div className="space-y-2.5">
                      {[
                        { name: 'Marcus Vance', company: 'Apex Studios', value: '$4,800', status: 'Quote Sent' },
                        { name: 'Elena Rostova', company: 'Nordic Design Co.', value: '$9,200', status: 'Discovery Call' },
                        { name: 'David Kim', company: 'Solstice Media', value: '$3,500', status: 'Contract Signed' }
                      ].map((lead, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                          <div>
                            <span className="font-semibold text-slate-900 block">{lead.name}</span>
                            <span className="text-slate-500">{lead.company}</span>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-slate-900 block">{lead.value}</span>
                            <span className="text-[10px] text-blue-600 font-medium">{lead.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeSolution.previewType === 'portfolio' && (
                  <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-sm tracking-wide text-slate-900">BONNI MARSE</span>
                      <span className="text-xs text-slate-400">Visual Direction</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-32 rounded-xl bg-[#F4E3D7] p-3 flex flex-col justify-between">
                        <span className="text-[10px] font-bold text-amber-900/60 uppercase">Obie Commercial</span>
                        <div className="w-8 h-8 rounded-full bg-rose-400/80 self-end" />
                      </div>
                      <div className="h-32 rounded-xl bg-[#E0E7FF] p-3 flex flex-col justify-between">
                        <span className="text-[10px] font-bold text-indigo-900/60 uppercase">Moa Poster</span>
                        <div className="w-8 h-8 rounded-full bg-indigo-500/80 self-end" />
                      </div>
                    </div>
                  </div>
                )}

                {activeSolution.previewType === 'blog' && (
                  <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <span className="text-xs uppercase font-bold tracking-wider text-rose-500">Travel & Expedition</span>
                    <h3 className="text-lg font-serif font-normal text-slate-900 leading-snug">
                      Glacier National Park: Exploring the Northern Continental Divide
                    </h3>
                    <div className="h-28 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 flex items-end p-4 text-white">
                      <p className="text-xs font-medium opacity-90">14 min read • Photography by Jeremy Cole</p>
                    </div>
                  </div>
                )}

                {activeSolution.previewType === 'courses' && (
                  <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">ACADEMY MASTERCLASS</span>
                      <span className="text-xs font-bold text-amber-600">4.9 ★ (1,280 reviews)</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
                      <span className="text-[10px] uppercase tracking-widest text-slate-400">MODULE 04</span>
                      <h4 className="text-sm font-semibold">Architectural Lighting & Composition</h4>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2">
                        <div className="bg-[#116DFF] h-1.5 rounded-full w-3/4" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Powered by Wix Harmony
                </span>
                <button
                  onClick={() => onNavigate(activeSolution.ctaLink)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#116DFF] hover:underline"
                >
                  {activeSolution.ctaText} <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Giant Kinetic Typography List */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            {solutions.map((item) => {
              const isActive = item.id === activeId;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  className="cursor-pointer border-b border-slate-200 pb-6 pt-3 group transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-4xl sm:text-5xl lg:text-[58px] font-normal tracking-tight transition-all duration-300 ${
                        isActive
                          ? 'text-[#0F172A] font-medium'
                          : 'text-slate-300 group-hover:text-slate-400'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <ArrowUpRight
                      className={`w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 ${
                        isActive
                          ? 'text-[#0F172A] translate-x-0 opacity-100'
                          : 'text-slate-300 -translate-x-2 opacity-0 group-hover:opacity-60'
                      }`}
                    />
                  </div>

                  {isActive && (
                    <div className="mt-4 pr-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                        {item.description}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate(item.ctaLink);
                        }}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F172A] hover:text-[#116DFF] transition-colors border-b border-[#0F172A] hover:border-[#116DFF] pb-0.5"
                      >
                        {item.ctaText} →
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
