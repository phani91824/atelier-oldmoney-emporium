
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-heritage-pearl">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-heritage-navy mb-6">
            Our Heritage
          </h2>
          <p className="font-inter text-lg text-heritage-charcoal leading-relaxed">
            Founded on the principles of timeless elegance and uncompromising quality, Heritage & Co. has been crafting 
            exceptional clothing for discerning individuals who appreciate the finer things in life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center bg-heritage-cream border-heritage-gold/20 hover-lift">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-heritage-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-heritage-cream font-playfair text-2xl font-bold">1</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-heritage-navy mb-4">Premium Materials</h3>
              <p className="font-inter text-heritage-charcoal">
                We source only the finest fabrics from renowned mills, ensuring each piece meets our exacting standards.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-heritage-cream border-heritage-gold/20 hover-lift">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-heritage-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-heritage-cream font-playfair text-2xl font-bold">2</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-heritage-navy mb-4">Artisan Craftsmanship</h3>
              <p className="font-inter text-heritage-charcoal">
                Every garment is meticulously crafted by skilled artisans who honor traditional techniques.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-heritage-cream border-heritage-gold/20 hover-lift">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-heritage-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-heritage-cream font-playfair text-2xl font-bold">3</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-heritage-navy mb-4">Timeless Design</h3>
              <p className="font-inter text-heritage-charcoal">
                Our designs transcend fleeting trends, offering pieces that remain elegant for generations.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-heritage-navy heritage-texture rounded-lg p-12 text-center">
          <h3 className="font-playfair text-3xl font-bold text-heritage-cream mb-6">
            "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution."
          </h3>
          <p className="font-inter text-heritage-cream/80 text-lg">
            — Heritage & Co. Founding Principle
          </p>
        </div>
      </div>
    </section>
  );
};
