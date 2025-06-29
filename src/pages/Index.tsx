
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles, Star } from "lucide-react";
import { BangaramHero } from '@/components/BangaramHero';
import { AboutBangaram } from '@/components/AboutBangaram';
import { SpecialMoments } from '@/components/SpecialMoments';
import { MessageSection } from '@/components/MessageSection';
import { BangaramHeader } from '@/components/BangaramHeader';
import { BangaramFooter } from '@/components/BangaramFooter';

const Index = () => {
  const [showHearts, setShowHearts] = useState(false);

  const triggerHearts = () => {
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 3000);
  };

  return (
    <div className="min-h-screen bg-bangaram-cream bangaram-texture">
      <BangaramHeader />
      
      <main>
        <BangaramHero onHeartClick={triggerHearts} />
        <AboutBangaram />
        <SpecialMoments />
        <MessageSection />
      </main>

      <BangaramFooter />

      {/* Floating Hearts Animation */}
      {showHearts && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(10)].map((_, i) => (
            <Heart
              key={i}
              className={`absolute text-bangaram-lavender animate-float opacity-70`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${20 + Math.random() * 20}px`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
