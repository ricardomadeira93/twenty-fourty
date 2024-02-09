// ProductCard.js
import React from 'react';
import tshirtImage from '@/app/assets/tshirt.webp';
import Image from 'next/image';

interface Product {
  name: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<{
  product: Product;
}> = ({ product }) => {
  return (
    <div className='bg-white p-4 shadow-md rounded-md w-72'>
      {' '}
      {/* Adjusted width */}
      <div className='relative h-48'>
        <Image
          src={tshirtImage}
          alt={product.name}
          className='object-cover rounded-md'
          layout='fill'
        />
      </div>
      <div className='mt-4'>
        <h2 className='text-lg font-semibold'>
          {product.name}
        </h2>
        <p className='text-gray-600'>
          {product.description}
        </p>
        <div className='mt-2'>
          <span className='text-gray-700 font-semibold'>
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
