
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Sparkles } from "lucide-react";

export const AboutBangaram = () => {
  return (
    <section id="about" className="py-20 bg-bangaram-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-bangaram-black mb-6">
            About You, Bangaram
          </h2>
          <p className="font-inter text-xl text-bangaram-soft-black/80 max-w-2xl mx-auto">
            This space is dedicated to celebrating the wonderful person you are
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-bangaram-pastel-pink/20 border-bangaram-pastel-pink hover-lift">
            <CardContent className="p-8 text-center">
              <Heart className="w-12 h-12 text-bangaram-lavender-dark mx-auto mb-4" />
              <h3 className="font-playfair text-2xl font-semibold text-bangaram-black mb-4">
                Your Kindness
              </h3>
              <p className="font-inter text-bangaram-soft-black/80">
                The warmth and kindness you show to everyone around you makes the world a better place.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-bangaram-pastel-blue/20 border-bangaram-pastel-blue hover-lift">
            <CardContent className="p-8 text-center">
              <Star className="w-12 h-12 text-bangaram-lavender-dark mx-auto mb-4" />
              <h3 className="font-playfair text-2xl font-semibold text-bangaram-black mb-4">
                Your Brilliance
              </h3>
              <p className="font-inter text-bangaram-soft-black/80">
                Your intelligence and wisdom inspire everyone who has the privilege of knowing you.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-bangaram-pastel-mint/20 border-bangaram-pastel-mint hover-lift">
            <CardContent className="p-8 text-center">
              <Sparkles className="w-12 h-12 text-bangaram-lavender-dark mx-auto mb-4" />
              <h3 className="font-playfair text-2xl font-semibold text-bangaram-black mb-4">
                Your Magic
              </h3>
              <p className="font-inter text-bangaram-soft-black/80">
                There's something truly magical about the way you light up every room you enter.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
