import React from 'react';
import { RealHero } from '../components/RealHero';
import { StickySolutions } from '../components/StickySolutions';
import { CustomizationSection } from '../components/CustomizationSection';
import { AIVisibilitySection } from '../components/AIVisibilitySection';
import { CommunityShowcase } from '../components/CommunityShowcase';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white">
      {/* 1. Authentic Wix Harmony Hero + Zeni Cafe + Ask Aria Widget */}
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
