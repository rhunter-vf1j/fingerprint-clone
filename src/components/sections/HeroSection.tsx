import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPos = window.scrollY;
      const opacity = 1 - scrollPos / 500;
      const transform = scrollPos / 10;
      
      heroRef.current.style.opacity = Math.max(opacity, 0.2).toString();
      heroRef.current.style.transform = `translateY(${transform}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full filter blur-3xl opacity-50 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100 rounded-full filter blur-3xl opacity-50 transform -translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <Container className="relative z-10">
        <div ref={heroRef} className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            <span className="block">Stop Fraud,</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Protect Your Users
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The most accurate and privacy-friendly device intelligence platform. Identify users and bots across browsers and devices, even when they clear cookies.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg">Get Started for Free</Button>
            <Button size="lg" variant="outline">See How It Works</Button>
          </div>
          
          <div className="mt-12 text-gray-500 text-sm">
            <p>Trusted by 10,000+ businesses worldwide</p>
            <div className="mt-6 flex flex-wrap justify-center gap-8">
              {/* Placeholder for company logos */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-8 w-32 bg-gray-200 rounded-md animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      
      {/* Hero image */}
      <div className="mt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl shadow-2xl overflow-hidden bg-white p-2">
          <div className="rounded-xl bg-gray-800 h-[400px] flex items-center justify-center text-white">
            <p className="text-xl font-medium">Dashboard Visualization</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;