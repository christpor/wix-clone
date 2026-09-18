import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AIBuilderPage } from './pages/AIBuilderPage';
import { EcommercePage } from './pages/EcommercePage';
import { BusinessPage } from './pages/BusinessPage';
import { DragAndDropPage } from './pages/DragAndDropPage';
import { AboutUsPage } from './pages/AboutUsPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname || '/');
  const lenisRef = useRef<Lenis | null>(null);

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
    <div className="min-h-screen flex flex-col bg-[#000000] text-[#F3F4F6]">
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};
