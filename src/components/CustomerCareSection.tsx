
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const CustomerCareSection = () => {
  return (
    <section id="customer-care" className="py-20 bg-heritage-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-heritage-navy mb-6">
            Customer Care
          </h2>
          <p className="font-inter text-lg text-heritage-charcoal max-w-2xl mx-auto">
            We're dedicated to providing exceptional service that matches the quality of our garments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-heritage-pearl border-heritage-gold/20">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-heritage-navy mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-inter font-semibold text-heritage-navy mb-2">Customer Service</h4>
                    <p className="font-inter text-heritage-charcoal">+1 (555) 123-4567</p>
                    <p className="font-inter text-heritage-charcoal">Mon-Fri: 9AM-7PM EST</p>
                  </div>
                  
                  <div>
                    <h4 className="font-inter font-semibold text-heritage-navy mb-2">Email</h4>
                    <p className="font-inter text-heritage-charcoal">service@heritageandco.com</p>
                  </div>
                  
                  <div>
                    <h4 className="font-inter font-semibold text-heritage-navy mb-2">Address</h4>
                    <p className="font-inter text-heritage-charcoal">
                      123 Heritage Lane<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-heritage-gold/20">
                  <h4 className="font-inter font-semibold text-heritage-navy mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="border-heritage-navy text-heritage-navy">
                      Instagram
                    </Button>
                    <Button variant="outline" size="sm" className="border-heritage-navy text-heritage-navy">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="border-heritage-navy text-heritage-navy">
                      Twitter
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <Card className="bg-heritage-pearl border-heritage-gold/20 hover-lift">
              <CardContent className="p-6">
                <h4 className="font-playfair text-xl font-semibold text-heritage-navy mb-3">Personal Styling</h4>
                <p className="font-inter text-heritage-charcoal">
                  Our expert stylists are available for personal consultations to help you build a wardrobe that reflects your unique style.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-heritage-pearl border-heritage-gold/20 hover-lift">
              <CardContent className="p-6">
                <h4 className="font-playfair text-xl font-semibold text-heritage-navy mb-3">Alterations Service</h4>
                <p className="font-inter text-heritage-charcoal">
                  Professional alterations to ensure the perfect fit for every Heritage & Co. garment you purchase.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-heritage-pearl border-heritage-gold/20 hover-lift">
              <CardContent className="p-6">
                <h4 className="font-playfair text-xl font-semibold text-heritage-navy mb-3">Care Instructions</h4>
                <p className="font-inter text-heritage-charcoal">
                  Detailed care guides and professional cleaning recommendations to maintain your garments' pristine condition.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-heritage-pearl border-heritage-gold/20 hover-lift">
              <CardContent className="p-6">
                <h4 className="font-playfair text-xl font-semibold text-heritage-navy mb-3">Returns & Exchanges</h4>
                <p className="font-inter text-heritage-charcoal">
                  60-day return policy with complimentary exchanges to ensure your complete satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
