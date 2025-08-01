'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'; // Assuming Shadcn's Card component is available

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

export const ProductCard = () => {
  const product = {
    imageUrl: 'https://placehold.co/400x400/cccccc/ffffff?text=Product+Image',
    title: 'Oversized Jeans Jacket',
    price: '$120',
    rating: 4.5,
    reviews: 88,
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <CardContent className="space-y-2">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="h-auto w-full rounded-t-xl object-cover"
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                'https://placehold.co/100x100/cccccc/ffffff?text=Image+Not+Found';
            }}
          />
          <CardTitle className="text-xl font-semibold">
            {product.title}
          </CardTitle>
          <div className="text-2xl font-bold text-red-500">{product.price}</div>
          <StarRating rating={product.rating} totalReviews={product.reviews} />
        </CardContent>
      </Card>
    </div>
  );
};
