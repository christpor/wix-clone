import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface SolutionItem {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  badge: string;
  imageSrc: string;
}

const solutions: SolutionItem[] = [
  {
    id: 'ecommerce',
    title: 'eCommerce',
    description: 'Sell products, manage inventory, accept payments, and scale your brand with an enterprise-grade storefront.',
    ctaText: 'Create an eCommerce Website',
    ctaLink: '/ecommerce/online-store',
    badge: 'Storefront & Inventory',
    imageSrc: '/assets/images/wix-ecommerce.jpg'
  },
  {
    id: 'scheduling',
    title: 'Scheduling',
    description: 'Let clients book appointments, classes, and memberships seamlessly on any device with automated sync.',
    ctaText: 'Explore Wix Bookings',
    ctaLink: '/business/website',
    badge: 'Calendar & Bookings',
    imageSrc: '/assets/images/wix-bookings.jpg'
  },
  {
    id: 'leads',
    title: 'Lead management',
    description: 'Capture high-intent leads with custom smart forms, automated marketing journeys, and CRM pipelines.',
    ctaText: 'Get Business Tools',
    ctaLink: '/business/website',
    badge: 'CRM & Pipeline',
    imageSrc: '/assets/images/wix-leads.jpg'
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: 'Showcase your creative work in high resolution with fluid gallery layouts, client proofing, and bespoke visual storytelling.',
    ctaText: 'Build Your Portfolio',
    ctaLink: '/builder/drag-and-drop',
    badge: 'Creative Showcase',
    imageSrc: '/assets/images/wix-portfolio.jpg'
  },
  {
    id: 'blog',
    title: 'Blog',
    description: 'Turn your expertise into a blog that grows your community, with AI to help you plan, write and publish every post.',
    ctaText: 'Start Your Blog',
    ctaLink: '/about/us',
    badge: 'Editorial & Community',
    imageSrc: '/assets/images/wix-blog.jpg'
  },
  {
    id: 'courses',
    title: 'Online courses',
    description: 'Monetize your knowledge with video masterclasses, downloadable syllabus resources, gated member areas, and subscriptions.',
    ctaText: 'Create Online Courses',
    ctaLink: '/ecommerce/online-store',
    badge: 'LMS & Memberships',
    imageSrc: '/assets/images/wix-programs.jpg'
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
          {/* Left Column: Sticky Device Mockup with Real High-Res Wix CDN Image */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 z-20">
            <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-5 sm:p-7 shadow-xl min-h-[460px] sm:min-h-[520px] flex flex-col justify-between overflow-hidden relative transition-all duration-300">
              {/* Badge & Controls */}
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#116DFF] animate-pulse" />
                  <span className="text-xs font-semibold text-slate-700 tracking-wide">
                    {activeSolution.badge}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">
                  Official Wix Engine
                </span>
              </div>

              {/* Dynamic Image Display with Smooth Crossfade */}
              <div className="my-auto py-3">
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-[16/11] bg-slate-100 group">
                  <img 
                    key={activeSolution.imageSrc}
                    src={activeSolution.imageSrc} 
                    alt={activeSolution.title}
                    className="w-full h-full object-cover object-center animate-in fade-in zoom-in-95 duration-300 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Ready to launch in minutes
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
                          ? 'text-[#0F172A] font-medium scale-[1.01]'
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
