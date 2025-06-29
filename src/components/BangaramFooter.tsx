
import React from 'react';
import { Heart, Sparkles } from "lucide-react";

export const BangaramFooter = () => {
  return (
    <footer className="bg-bangaram-black text-bangaram-cream py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Brand */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-bangaram-lavender rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-bangaram-black" />
            </div>
            <span className="font-playfair text-2xl font-bold">For Bangaram</span>
          </div>
          
          <p className="font-inter text-bangaram-cream/80 leading-relaxed max-w-md mx-auto mb-8">
            A beautiful space created with love, admiration, and the warmest wishes for someone truly special.
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <Sparkles className="w-6 h-6 text-bangaram-lavender animate-pulse" />
            <Heart className="w-6 h-6 text-bangaram-pastel-pink animate-pulse" />
            <Sparkles className="w-6 h-6 text-bangaram-lavender animate-pulse" />
          </div>

          <div className="border-t border-bangaram-cream/20 pt-8">
            <p className="font-inter text-bangaram-cream/60 text-sm">
              Made with ❤️ for the most wonderful person - Bangaram
            </p>
            <p className="font-inter text-bangaram-cream/40 text-xs mt-2">
              © 2024 • A Labor of Love
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
