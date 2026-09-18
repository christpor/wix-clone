import React from 'react';
import { RealHero } from '../features/hero/RealHero';
import { StickySolutions } from '../features/solutions/StickySolutions';
import { CustomizationSection } from '../features/customization/CustomizationSection';
import { AIVisibilitySection } from '../features/ai-bento/AIVisibilitySection';
import { CommunityShowcase } from '../features/showcase/CommunityShowcase';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white">
      {/* 1. Authentic Wix Harmony Hero + Luna's Hair + Ask Aria Widget */}
      <RealHero onGetStarted={() => onNavigate('/ai-website-builder')} />

      {/* 2. Kinetic Sticky Scroll Solutions Accordion */}
      <StickySolutions onNavigate={onNavigate} />

      {/* 3. Radical Customization 3-Card Showcase */}
      <CustomizationSection onGetStarted={() => onNavigate('/ai-website-builder')} />

      {/* 4. GEO & AI Visibility LLM Bento & Business Management */}
      <AIVisibilitySection />

      {/* 5. "You're in Good Company" Floating Customer Showcase */}
      <CommunityShowcase onExplore={() => onNavigate('/builder/drag-and-drop')} />
    </div>
  );
};
