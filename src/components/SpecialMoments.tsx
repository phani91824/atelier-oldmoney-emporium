
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Camera, Music } from "lucide-react";

export const SpecialMoments = () => {
  return (
    <section id="moments" className="py-20 bg-bangaram-lavender-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-bangaram-black mb-6">
            Special Moments
          </h2>
          <p className="font-inter text-xl text-bangaram-soft-black/80 max-w-2xl mx-auto">
            A collection of beautiful memories and moments to celebrate
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-bangaram-white/80 border-bangaram-lavender/30 hover-lift">
            <CardContent className="p-6">
              <Calendar className="w-8 h-8 text-bangaram-lavender-dark mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-bangaram-black mb-3">
                Important Dates
              </h3>
              <p className="font-inter text-bangaram-soft-black/80 mb-4">
                Special days that hold meaning and create lasting memories.
              </p>
              <div className="text-sm text-bangaram-lavender-dark">
                • Birthdays to celebrate
                • Anniversaries to remember
                • Milestones to cherish
              </div>
            </CardContent>
          </Card>

          <Card className="bg-bangaram-white/80 border-bangaram-lavender/30 hover-lift">
            <CardContent className="p-6">
              <Camera className="w-8 h-8 text-bangaram-lavender-dark mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-bangaram-black mb-3">
                Beautiful Memories
              </h3>
              <p className="font-inter text-bangaram-soft-black/80 mb-4">
                Captured moments that tell the story of joy and happiness.
              </p>
              <div className="text-sm text-bangaram-lavender-dark">
                • Smiles that light up the world
                • Laughter that fills the air
                • Moments of pure joy
              </div>
            </CardContent>
          </Card>

          <Card className="bg-bangaram-white/80 border-bangaram-lavender/30 hover-lift md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <Music className="w-8 h-8 text-bangaram-lavender-dark mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-bangaram-black mb-3">
                Favorite Things
              </h3>
              <p className="font-inter text-bangaram-soft-black/80 mb-4">
                The little things that bring happiness and comfort.
              </p>
              <div className="text-sm text-bangaram-lavender-dark">
                • Songs that touch the heart
                • Colors that inspire
                • Moments of peace and tranquility
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
