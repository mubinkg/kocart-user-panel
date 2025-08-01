'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button'; // Assuming Shadcn's Button component is available

// A simple star rating component using inline SVG for the stars
const StarRating = ({
  rating,
  totalReviews,
}: {
  rating: number;
  totalReviews: number;
}) => {
  const stars = [];
  // Function to create a full, half, or empty star based on the rating
  const createStar = (fill: string) => (
    <svg
      key={Math.random()} // Use a random key for simplicity in this example
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-yellow-400"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // Full star
      stars.push(createStar('currentColor'));
    } else if (rating > i - 1 && rating < i) {
      // Half star - using a combination of full and empty for visual representation
      stars.push(
        <div className="relative" key={i}>
          {createStar('none')}
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            {createStar('currentColor')}
          </div>
        </div>,
      );
    } else {
      // Empty star
      stars.push(createStar('none'));
    }
  }

  return (
    <div className="flex items-center space-x-1">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
      <span className="ml-2 text-sm text-gray-500">({totalReviews})</span>
    </div>
  );
};

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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(product => (
            <Card
              key={product.id}
              className="w-full overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <CardContent className="space-y-2">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="h-auto w-full rounded-t-xl object-cover"
                />
                <CardTitle className="text-xl font-semibold">
                  {product.title}
                </CardTitle>
                <div className="text-2xl font-bold text-red-500">
                  {product.price}
                </div>
                <StarRating
                  rating={product.rating}
                  totalReviews={product.reviews}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
