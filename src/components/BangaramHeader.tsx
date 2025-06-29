
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

export const BangaramHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bangaram-cream/95 backdrop-blur-sm border-b border-bangaram-lavender/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-bangaram-lavender rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-bangaram-black" />
            </div>
            <span className="font-playfair text-2xl font-bold text-bangaram-black">For Bangaram</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-bangaram-black hover:text-bangaram-lavender-dark transition-colors font-inter font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('moments')}
              className="text-bangaram-black hover:text-bangaram-lavender-dark transition-colors font-inter font-medium"
            >
              Special Moments
            </button>
            <button 
              onClick={() => scrollToSection('message')}
              className="text-bangaram-black hover:text-bangaram-lavender-dark transition-colors font-inter font-medium"
            >
              Message
            </button>
          </div>

          {/* Sparkles Icon */}
          <div className="flex items-center">
            <Sparkles className="w-6 h-6 text-bangaram-lavender animate-pulse" />
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden ml-4 text-bangaram-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className="w-full h-0.5 bg-bangaram-black transition-all"></span>
                <span className="w-full h-0.5 bg-bangaram-black transition-all"></span>
                <span className="w-full h-0.5 bg-bangaram-black transition-all"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-bangaram-lavender/20">
            <div className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-bangaram-black hover:text-bangaram-lavender-dark transition-colors font-inter font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('moments')}
                className="text-left text-bangaram-black hover:text-bangaram-lavender-dark transition-colors font-inter font-medium"
              >
                Special Moments
              </button>
              <button 
                onClick={() => scrollToSection('message')}
                className="text-left text-bangaram-black hover:text-bangaram-lavender-dark transition-colors font-inter font-medium"
              >
                Message
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
