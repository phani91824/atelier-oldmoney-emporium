
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 'men',
    title: 'Men',
    subtitle: 'Sophisticated Essentials',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
    products: [
      { id: 1, name: 'Heritage Wool Blazer', price: '$890', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop' },
      { id: 2, name: 'Classic Oxford Shirt', price: '$245', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop' },
      { id: 3, name: 'Tailored Wool Trousers', price: '$425', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop' }
    ]
  },
  {
    id: 'women',
    title: 'Women',
    subtitle: 'Elegant Refinement',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop',
    products: [
      { id: 4, name: 'Silk Evening Dress', price: '$1,290', image: 'https://images.unsplash.com/photo-1566479179817-6f45e6ca12e2?w=400&h=500&fit=crop' },
      { id: 5, name: 'Cashmere Cardigan', price: '$690', image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=500&fit=crop' },
      { id: 6, name: 'Pearl Button Blouse', price: '$385', image: 'https://images.unsplash.com/photo-1551752779-6c6b0fa0cfd5?w=400&h=500&fit=crop' }
    ]
  },
  {
    id: 'kids',
    title: 'Kids',
    subtitle: 'Young Heritage',
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800&h=1000&fit=crop',
    products: [
      { id: 7, name: 'Junior Polo Shirt', price: '$125', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop' },
      { id: 8, name: 'Little Lady Dress', price: '$165', image: 'https://images.unsplash.com/photo-1522771930619-df60ac2d9a0b?w=400&h=500&fit=crop' },
      { id: 9, name: 'Heritage Cardigan', price: '$145', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=500&fit=crop' }
    ]
  }
];

export const CategorySection = ({ onProductSelect }: { onProductSelect: (product: any) => void }) => {
  return (
    <section id="categories" className="py-20 bg-heritage-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-heritage-navy mb-4">
            Our Collections
          </h2>
          <p className="font-inter text-lg text-heritage-charcoal max-w-2xl mx-auto">
            Curated selections that embody sophistication and timeless style for every member of the family.
          </p>
        </div>

        <div className="space-y-24">
          {categories.map((category, index) => (
            <div key={category.id} id={category.id} className="animate-fade-in">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Category Hero Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg shadow-2xl hover-lift">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-96 lg:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-heritage-navy/20"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-2">{category.title}</h3>
                      <p className="font-inter text-lg">{category.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Products Grid */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                    {category.products.map((product) => (
                      <Card 
                        key={product.id} 
                        className="overflow-hidden hover-lift cursor-pointer bg-heritage-pearl border-heritage-gold/20"
                        onClick={() => onProductSelect(product)}
                      >
                        <CardContent className="p-0">
                          <div className="relative">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-heritage-navy/0 hover:bg-heritage-navy/10 transition-all duration-300"></div>
                          </div>
                          <div className="p-4">
                            <h4 className="font-playfair text-lg font-semibold text-heritage-navy mb-1">{product.name}</h4>
                            <p className="font-inter text-heritage-gold font-medium">{product.price}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
