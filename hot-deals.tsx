'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: number;
  name: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  countdown: {
    days: number;
    hours: number;
    minutes: number;
  };
}

const products: Product[] = [
  {
    id: 1,
    name: 'Oversized Jeans Jacket',
    image: '/placeholder.svg?height=200&width=200',
    originalPrice: 160,
    discountedPrice: 120,
    discount: 40,
    rating: 4.5,
    reviews: 88,
    countdown: { days: 3, hours: 23, minutes: 19 },
  },
  {
    id: 2,
    name: 'Oversized Jeans Jacket',
    image: '/placeholder.svg?height=200&width=200',
    originalPrice: 160,
    discountedPrice: 120,
    discount: 25,
    rating: 4.5,
    reviews: 88,
    countdown: { days: 0, hours: 21, minutes: 10 },
  },
  {
    id: 3,
    name: 'Oversized Jeans Jacket',
    image: '/placeholder.svg?height=200&width=200',
    originalPrice: 160,
    discountedPrice: 120,
    discount: 40,
    rating: 4.5,
    reviews: 88,
    countdown: { days: 3, hours: 23, minutes: 19 },
  },
  {
    id: 4,
    name: 'Oversized Jeans Jacket',
    image: '/placeholder.svg?height=200&width=200',
    originalPrice: 160,
    discountedPrice: 120,
    discount: 40,
    rating: 4.5,
    reviews: 88,
    countdown: { days: 3, hours: 23, minutes: 19 },
  },
  {
    id: 5,
    name: 'Oversized Jeans Jacket',
    image: '/placeholder.svg?height=200&width=200',
    originalPrice: 160,
    discountedPrice: 120,
    discount: 40,
    rating: 4.5,
    reviews: 88,
    countdown: { days: 3, hours: 23, minutes: 19 },
  },
];

export default function HotDeals() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % Math.max(1, products.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex(
      prev =>
        (prev - 1 + Math.max(1, products.length - 3)) %
        Math.max(1, products.length - 3),
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : i < rating
              ? 'fill-yellow-400/50 text-yellow-400'
              : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="destructive" className="bg-red-500 hover:bg-red-600">
            Today's
          </Badge>
          <h2 className="text-2xl font-bold text-gray-900">Hot Deals 🔥</h2>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="h-10 w-10 rounded-full bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="h-10 w-10 rounded-full bg-transparent"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
        >
          {products.map(product => (
            <div key={product.id} className="w-72 flex-none">
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg">
                {/* Product Image */}
                <div className="relative aspect-square bg-gray-50">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <Badge
                    variant="destructive"
                    className="absolute top-3 left-3 bg-red-500 hover:bg-red-600"
                  >
                    -{product.discount}%
                  </Badge>
                </div>

                {/* Countdown Timer */}
                <div className="border-b p-4">
                  <div className="flex justify-center gap-4">
                    <div className="text-center">
                      <div className="min-w-[50px] rounded bg-blue-600 px-3 py-2 text-lg font-bold text-white">
                        {String(product.countdown.days).padStart(2, '0')}
                      </div>
                      <div className="mt-1 text-xs text-gray-500">Days</div>
                    </div>
                    <div className="text-center">
                      <div className="min-w-[50px] rounded bg-red-500 px-3 py-2 text-lg font-bold text-white">
                        {String(product.countdown.hours).padStart(2, '0')}
                      </div>
                      <div className="mt-1 text-xs text-gray-500">Hours</div>
                    </div>
                    <div className="text-center">
                      <div className="min-w-[50px] rounded bg-blue-600 px-3 py-2 text-lg font-bold text-white">
                        {String(product.countdown.minutes).padStart(2, '0')}
                      </div>
                      <div className="mt-1 text-xs text-gray-500">Minutes</div>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="mb-2 font-medium text-gray-900">
                    {product.name}
                  </h3>

                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg font-bold text-red-500">
                      ${product.discountedPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
