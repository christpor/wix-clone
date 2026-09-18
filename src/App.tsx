import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CommandPalette } from './components/common/CommandPalette';
import { AriaOrb } from './components/common/AriaOrb';
import { HomePage } from './pages/HomePage';
import { AIBuilderPage } from './pages/AIBuilderPage';
import { EcommercePage } from './pages/EcommercePage';
import { BusinessPage } from './pages/BusinessPage';
import { DragAndDropPage } from './pages/DragAndDropPage';
import { AboutUsPage } from './pages/AboutUsPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname || '/');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Dynamic document title update per route
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': "Wix.com: Website Builder | Create a Free Website Today",
      '/ai-website-builder': "Aria AI Website Builder | Wix Studio",
      '/ecommerce/online-store': "Wix Stores: eCommerce Engine & Online Store",
      '/ecommerce': "Wix Stores: eCommerce Engine & Online Store",
      '/business/website': "Business Solutions, Scheduling & CRM | Wix",
      '/business': "Business Solutions, Scheduling & CRM | Wix",
      '/builder/drag-and-drop': "Wix Studio & Templates | Radical Design Freedom",
      '/builder': "Wix Studio & Templates | Radical Design Freedom",
      '/about/us': "About Us & Enterprise Multi-Cloud SLA | Wix",
      '/about': "About Us & Enterprise Multi-Cloud SLA | Wix",
    };
    document.title = titles[currentPath] || "Wix.com: Create a Website You're Proud Of";
  }, [currentPath]);

  // Global Keyboard Listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Initialize Lenis Kinetic Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      lenis.scrollTo(0, { immediate: true });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('popstate', handlePopState);
      lenis.destroy();
    };
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const renderPage = () => {
    if (currentPath === '/ai-website-builder') {
      return <AIBuilderPage onNavigate={navigate} />;
    }
    if (currentPath === '/ecommerce/online-store' || currentPath === '/ecommerce') {
      return <EcommercePage onNavigate={navigate} />;
    }
    if (currentPath === '/business/website' || currentPath === '/business') {
      return <BusinessPage onNavigate={navigate} />;
    }
    if (currentPath === '/builder/drag-and-drop' || currentPath === '/builder') {
      return <DragAndDropPage onNavigate={navigate} />;
    }
    if (currentPath === '/about/us' || currentPath === '/about') {
      return <AboutUsPage onNavigate={navigate} />;
    }
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A] relative">
      <Navbar 
        currentPath={currentPath} 
        onNavigate={navigate} 
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />

      {/* Global Command Palette (Cmd+K) */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={navigate}
      />

      {/* Persistent Floating Aria AI Assistant */}
      <AriaOrb onNavigate={navigate} />
    </div>
  );
};
