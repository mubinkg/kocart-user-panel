import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-indigo-800 px-6 py-12 text-white">
      <div className="container mx-auto">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
              <Image src="/logo.png" alt="logo" width={150} height={150} />
            </div>
          </div>

          {/* Korean Brands Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Korean Brands</h3>
            <ul className="space-y-2 text-sm">
              <li>• Dr.Piel</li>
              <li>• LOTTE</li>
              <li>• AMUSE</li>
              <li>• SAMYANG</li>
              <li>• Rom&nd</li>
              <li>• Binggrae</li>
            </ul>
            <button className="mt-3 text-sm text-gray-300 underline hover:text-white">
              See all
            </button>
          </div>

          {/* Our Categories Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>• Mens&apos; Fashion</li>
              <li>• Women&apos;s Fashion</li>
              <li>• Kids</li>
              <li>• Electrics</li>
              <li>• Beauty</li>
              <li>• Home & Decor</li>
            </ul>
            <button className="mt-3 text-sm text-gray-300 underline hover:text-white">
              See all
            </button>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Download App</h3>
            <div className="flex flex-col items-start space-y-4">
              {/* QR Code */}
              <div className="h-20 w-20 rounded bg-white p-2">
                <div className="flex h-full w-full items-center justify-center rounded bg-black">
                  <div className="grid grid-cols-8 gap-px">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 w-1 ${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* App Store Buttons */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 rounded bg-black px-3 py-1">
                  <div className="text-xs text-white">
                    <div className="text-[10px] text-gray-300">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 rounded bg-black px-3 py-1">
                  <div className="text-xs text-white">
                    <div className="text-[10px] text-gray-300">
                      Download on the
                    </div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="my-8 flex justify-center space-x-4">
          <Facebook className="h-6 w-6 cursor-pointer text-gray-300 hover:text-white" />
          <Twitter className="h-6 w-6 cursor-pointer text-gray-300 hover:text-white" />
          <Instagram className="h-6 w-6 cursor-pointer text-gray-300 hover:text-white" />
          <Linkedin className="h-6 w-6 cursor-pointer text-gray-300 hover:text-white" />
        </div>

        {/* Copyright */}
        <div className="border-t border-indigo-700 pt-6 text-center text-sm text-gray-400">
          Copyright © 2025 KoCart, All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
