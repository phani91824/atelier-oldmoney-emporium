
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    
    console.log('Adding to cart:', {
      product: product.name,
      size: selectedSize,
      quantity: quantity,
      price: product.price
    });
    
    alert(`Added ${product.name} (Size: ${selectedSize}, Qty: ${quantity}) to cart!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-auto bg-heritage-cream">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2">
            {/* Product Image */}
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 md:h-full object-cover"
              />
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 bg-heritage-navy text-heritage-cream rounded-full flex items-center justify-center hover:bg-heritage-charcoal transition-colors"
              >
                ×
              </button>
            </div>

            {/* Product Details */}
            <div className="p-8">
              <h2 className="font-playfair text-3xl font-bold text-heritage-navy mb-4">
                {product.name}
              </h2>
              
              <p className="font-inter text-2xl text-heritage-gold font-semibold mb-6">
                {product.price}
              </p>

              <div className="space-y-6">
                {/* Product Description */}
                <div>
                  <h3 className="font-playfair text-lg font-semibold text-heritage-navy mb-2">Description</h3>
                  <p className="font-inter text-heritage-charcoal leading-relaxed">
                    Crafted from the finest materials with meticulous attention to detail. This piece embodies 
                    our commitment to timeless elegance and superior quality. Perfect for those who appreciate 
                    sophisticated style and lasting luxury.
                  </p>
                </div>

                {/* Size Selection */}
                <div>
                  <h3 className="font-playfair text-lg font-semibold text-heritage-navy mb-3">Size</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`p-2 border rounded transition-all ${
                          selectedSize === size
                            ? 'border-heritage-navy bg-heritage-navy text-heritage-cream'
                            : 'border-heritage-charcoal/30 text-heritage-charcoal hover:border-heritage-navy'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <h3 className="font-playfair text-lg font-semibold text-heritage-navy mb-3">Quantity</h3>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 border border-heritage-charcoal/30 rounded flex items-center justify-center hover:border-heritage-navy"
                    >
                      -
                    </button>
                    <span className="font-inter text-lg px-4">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 border border-heritage-charcoal/30 rounded flex items-center justify-center hover:border-heritage-navy"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button 
                  onClick={handleAddToCart}
                  className="w-full heritage-button text-lg py-3 mt-8"
                >
                  Add to Cart
                </Button>

                {/* Product Details */}
                <div className="pt-6 border-t border-heritage-gold/20">
                  <h3 className="font-playfair text-lg font-semibold text-heritage-navy mb-3">Details</h3>
                  <ul className="font-inter text-sm text-heritage-charcoal space-y-1">
                    <li>• Premium quality materials</li>
                    <li>• Expertly tailored construction</li>
                    <li>• Dry clean recommended</li>
                    <li>• Made with attention to detail</li>
                    <li>• 60-day return policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
