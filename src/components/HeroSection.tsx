
import React from 'react';
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToCategories = () => {
    const element = document.getElementById('categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center heritage-texture">
      <div className="absolute inset-0 heritage-gradient opacity-90"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-heritage-cream mb-6 animate-fade-in">
          Timeless Elegance
        </h1>
        <p className="font-inter text-xl md:text-2xl text-heritage-cream/90 mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
          Where heritage meets contemporary luxury. Discover clothing that transcends seasons and trends.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Button 
            onClick={scrollToCategories}
            className="heritage-button text-lg px-10 py-4 hover-lift"
          >
            Explore Collection
          </Button>
          <Button 
            variant="outline" 
            className="text-lg px-10 py-4 border-heritage-cream text-heritage-cream hover:bg-heritage-cream hover:text-heritage-navy transition-all duration-300"
          >
            Our Story
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-heritage-cream rounded-full flex justify-center">
          <div className="w-1 h-3 bg-heritage-cream rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
