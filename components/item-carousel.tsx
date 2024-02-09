// CarouselExample.js
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';
import ProductCard from '@/components/product-card';

// Hardcoded product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description 1',
    price: 10,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description 2',
    price: 20,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description 3',
    price: 30,
  },
  // Add more products as needed
];

const ItemCarousel = () => {
  return (
    <div className='overflow-x-auto'>
      <Carousel>
        <CarouselPrevious />
        <CarouselContent className='flex'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ItemCarousel;
