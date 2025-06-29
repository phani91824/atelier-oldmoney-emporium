
import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

interface BangaramHeroProps {
  onHeartClick: () => void;
}

export const BangaramHero = ({ onHeartClick }: BangaramHeroProps) => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center bangaram-gradient">
      <div className="absolute inset-0 bangaram-texture opacity-30"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <Sparkles className="w-16 h-16 text-bangaram-lavender-dark mx-auto mb-6 animate-pulse" />
        </div>
        
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-bangaram-black mb-6 animate-fade-in">
          Dear Bangaram
        </h1>
        
        <p className="font-inter text-xl md:text-2xl text-bangaram-soft-black/80 mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
          A special place created with love, just for you, Madam
        </p>
        
        <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Button 
            onClick={scrollToAbout}
            className="bangaram-button text-lg px-10 py-4 hover-lift"
          >
            Discover More
          </Button>
          <Button 
            onClick={onHeartClick}
            variant="outline" 
            className="text-lg px-10 py-4 border-bangaram-lavender text-bangaram-black hover:bg-bangaram-lavender hover:text-bangaram-black transition-all duration-300 rounded-full"
          >
            <Heart className="w-5 h-5 mr-2" />
            Send Love
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Heart className="w-8 h-8 text-bangaram-pastel-pink opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '1s'}}>
        <Sparkles className="w-6 h-6 text-bangaram-lavender opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{animationDelay: '2s'}}>
        <Heart className="w-6 h-6 text-bangaram-pastel-blue opacity-60" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-bangaram-lavender rounded-full flex justify-center">
          <div className="w-1 h-3 bg-bangaram-lavender rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
