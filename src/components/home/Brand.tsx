'use client';

import * as React from 'react';
import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button'; // Assuming Shadcn's Button component is available
import { ArrowLeft, ArrowRight } from 'lucide-react'; // Assuming lucide-react is available for icons

// Mock brand data
const brands = [
  { name: 'Dr.Piel', logo: 'Dr.Piel' },
  { name: 'LOTTE', logo: 'LOTTE' },
  { name: 'AMUSE', logo: 'AMUSE' },
  { name: 'SAMYANG', logo: 'SAMYANG' },
  { name: 'rom&nd', logo: 'rom&nd' },
  { name: 'Binggrae', logo: 'Binggrae' },
  { name: '3CE', logo: '3CE' },
  { name: 'HOLIKA HOLIKA', logo: 'HOLIKA HOLIKA' },
  { name: 'NONGSHIM', logo: 'NONGSHIM' },
  { name: 'SO', logo: 'SO' },
  { name: 'Innisfree', logo: 'Innisfree' },
  { name: 'Mizon', logo: 'Mizon' },
  { name: 'Tonymoly', logo: 'Tonymoly' },
];

// Custom component for the hexagon shape.
// This uses a custom style for clip-path since it's not directly in Tailwind.
const HexagonCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div
      className={cn(
        'relative h-[173.2px] w-[150px] rounded-lg bg-white shadow-md transition-transform duration-200 hover:scale-105',
        'flex items-center justify-center p-4',
        className,
      )}
      style={{
        clipPath:
          'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      }}
    >
      {children}
    </div>
  );
};

export function Brand() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 250; // Adjust scroll distance
      if (direction === 'left') {
        scrollContainerRef?.current?.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
        });
      } else {
        scrollContainerRef?.current?.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="mb-10 flex items-center justify-center bg-[#f3f5ff]">
      <div className="mx-auto w-full px-6 py-8 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="mb-2 flex items-center space-x-2">
              <div className="h-6 w-1.5 rounded-full bg-[#ff636d]" />
              <h2 className="text-lg font-semibold text-[#ff636d]">Brands</h2>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">
              Browse by Brands
            </h1>
          </div>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-200 bg-white shadow-md hover:bg-gray-100"
              onClick={() => scroll('left')}
            >
              <ArrowLeft className="h-4 w-4 text-gray-600" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-200 bg-white shadow-md hover:bg-gray-100"
              onClick={() => scroll('right')}
            >
              <ArrowRight className="h-4 w-4 text-gray-600" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto p-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {brands.map((brand, index) => (
            <HexagonCard key={index} className="flex-none">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-2 flex h-16 w-16 items-center justify-center">
                  <span className="text-lg font-bold text-gray-700">
                    {brand.logo}
                  </span>
                </div>
              </div>
            </HexagonCard>
          ))}
        </div>
      </div>
    </div>
  );
}
