
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-heritage-navy text-heritage-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-heritage-cream rounded-sm flex items-center justify-center">
                <span className="text-heritage-navy font-playfair font-bold text-lg">H</span>
              </div>
              <span className="font-playfair text-2xl font-bold">Heritage & Co.</span>
            </div>
            <p className="font-inter text-heritage-cream/80 leading-relaxed max-w-md">
              Crafting timeless elegance for the discerning individual. Where heritage meets contemporary luxury.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="font-inter space-y-2">
              <li><a href="#men" className="text-heritage-cream/80 hover:text-heritage-gold transition-colors">Men</a></li>
              <li><a href="#women" className="text-heritage-cream/80 hover:text-heritage-gold transition-colors">Women</a></li>
              <li><a href="#kids" className="text-heritage-cream/80 hover:text-heritage-gold transition-colors">Kids</a></li>
              <li><a href="#about" className="text-heritage-cream/80 hover:text-heritage-gold transition-colors">About</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="font-inter space-y-2">
              <li><a href="#" className="text-heritage-cream/80 hover:text-heritage-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-heritage-cream/80 hover:text-heritage-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-heritage-cream/80 hover:text-heritage-gold transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-heritage-cream/80 hover:text-heritage-gold transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-heritage-cream/20 mt-12 pt-8 text-center">
          <p className="font-inter text-heritage-cream/60">
            © 2024 Heritage & Co. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};
