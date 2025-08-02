'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="mt-10 w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="relative overflow-hidden rounded-2xl bg-[#2B2E83] p-6 text-white md:p-12">
              <div className="flex flex-col md:flex-row md:items-center">
                {/* Left side content */}
                <div className="z-10 w-full md:w-1/2">
                  <h3 className="mb-2 text-base font-medium md:text-xl">
                    Fusion of elegance, comfort, and contemporary design
                  </h3>
                  <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                    Elevate your look with our newest arrivals! ✨
                  </h2>
                  <Button
                    variant="default"
                    className="rounded-full bg-[#E74C3C] px-8 py-6 text-lg font-bold hover:bg-[#C0392B]"
                  >
                    Shop now
                  </Button>
                </div>

                {/* Right side image */}
                <div className="z-10 mt-6 w-full md:mt-0 md:w-1/2">
                  <div className="relative h-48 md:h-64">
                    <Image
                      src="/placeholder-shoes.png" // Replace with your image path
                      alt="Newest arrivals"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="object-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant="secondary"
        className="-left-[15px] cursor-pointer border-2 border-white bg-gray-300 hover:bg-gray-300"
      />
      <CarouselNext
        variant="secondary"
        className="-right-[15px] cursor-pointer border-2 border-white bg-gray-300 hover:bg-gray-300"
      />
    </Carousel>
  );
}
