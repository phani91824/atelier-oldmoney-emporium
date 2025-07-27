
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, Users, ShoppingCart } from "lucide-react";
import { HeroSection } from '@/components/HeroSection';
import { CategorySection } from '@/components/CategorySection';
import { AboutSection } from '@/components/AboutSection';
import { ProductModal } from '@/components/ProductModal';
import { CustomerCareSection } from '@/components/CustomerCareSection';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-heritage-cream">
      <Header />
      
      <main>
        <HeroSection />
        <CategorySection onProductSelect={setSelectedProduct} />
        <AboutSection />
        <CustomerCareSection />
      </main>

      <Footer />

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full heritage-button shadow-lg hover:shadow-xl transition-all duration-300"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;
