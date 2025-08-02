'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Shadcn's Button component is available
import { ProductCard } from '../ui/product-card';

export function BestSelling() {
  const products = [
    {
      id: 1,
      imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=Denim+Jacket',
      title: 'Oversized Jeans Jacket',
      price: '$120',
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 2,
      imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=Plaid+Skirt',
      title: 'Plaid Skirt',
      price: '$120',
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 3,
      imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=Red+Sneakers',
      title: 'High-Top Sneakers',
      price: '$120',
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 4,
      imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=White+Shoes',
      title: 'Minimalist Sneakers',
      price: '$120',
      rating: 4.5,
      reviews: 88,
    },
  ];

  return (
    <div className="mb-10 flex justify-center">
      <div className="w-full">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-1.5 rounded-full bg-[#ff636d]" />
              <h2 className="text-lg font-semibold text-[#ff636d]">
                This month
              </h2>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">
              Best Selling Products
            </h1>
          </div>
          <Button className="rounded-full bg-[#ff636d] px-6 py-2 font-bold text-white shadow-lg transition-colors duration-300 hover:bg-[#e05860]">
            View all
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
