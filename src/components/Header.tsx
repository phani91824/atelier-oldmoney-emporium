
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Users } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-heritage-cream/95 backdrop-blur-sm border-b border-heritage-navy/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-heritage-navy rounded-sm flex items-center justify-center">
              <span className="text-heritage-cream font-playfair font-bold text-lg">H</span>
            </div>
            <span className="font-playfair text-2xl font-bold text-heritage-navy">Heritage & Co.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('men')}
              className="text-heritage-navy hover:text-heritage-gold transition-colors font-inter font-medium"
            >
              Men
            </button>
            <button 
              onClick={() => scrollToSection('women')}
              className="text-heritage-navy hover:text-heritage-gold transition-colors font-inter font-medium"
            >
              Women
            </button>
            <button 
              onClick={() => scrollToSection('kids')}
              className="text-heritage-navy hover:text-heritage-gold transition-colors font-inter font-medium"
            >
              Kids
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-heritage-navy hover:text-heritage-gold transition-colors font-inter font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('customer-care')}
              className="text-heritage-navy hover:text-heritage-gold transition-colors font-inter font-medium"
            >
              Customer Care
            </button>
          </div>

          {/* Cart and Account */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-heritage-navy hover:text-heritage-gold">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-heritage-navy hover:text-heritage-gold">
              <Users className="w-5 h-5" />
            </Button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-heritage-navy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className="w-full h-0.5 bg-heritage-navy transition-all"></span>
                <span className="w-full h-0.5 bg-heritage-navy transition-all"></span>
                <span className="w-full h-0.5 bg-heritage-navy transition-all"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-heritage-navy/10">
            <div className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => scrollToSection('men')}
                className="text-left text-heritage-navy hover:text-heritage-gold transition-colors font-inter font-medium"
              >
                Men
              </button>
              <button 
                onClick={() => scrollToSection('women')}
                className="text-left text-heritage-navy hover:text-heritage-gold transition-colors font-inter font-medium"
              >
                Women
              </button>
              <button 
                onClick={() => scrollToSection('kids')}
                className="text-left text-heritage-navy hover:text-heritage-gold transition-colors font-inter font-medium"
              >
                Kids
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-heritage-navy hover:text-heritage-gold transition-colors font-inter font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('customer-care')}
                className="text-left text-heritage-navy hover:text-heritage-gold transition-colors font-inter font-medium"
              >
                Customer Care
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
