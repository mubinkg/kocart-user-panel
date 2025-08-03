'use client';

import Image from 'next/image';
import React, { useState } from 'react';

// Inline SVG Icons
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-gray-500"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-gray-700"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-gray-700"
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-1 h-4 w-4 transition-transform"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// const MenuIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <line x1="4" x2="20" y1="12" y2="12" />
//     <line x1="4" x2="20" y1="6" y2="6" />
//     <line x1="4" x2="20" y1="18" y2="18" />
//   </svg>
// );

// const XIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M18 6 6 18" />
//     <path d="m6 6 12 12" />
//   </svg>
// );

// Main Navigation Bar Component
export function Navbar() {
  const [isMobileMenuOpen,] = useState(false);
  const [isBrandsDropdownOpen, setIsBrandsDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] =
    useState(false);
  const [isBeautySubDropdownOpen, setIsBeautySubDropdownOpen] = useState(false);

  // Data for the navigation links and dropdowns
  const navLinks = [
    { title: 'Home', href: '#' },
    { title: 'Offers', href: '#' },
    {
      title: 'Korean Brands',
      href: '#',
      dropdown: ['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'],
      isDropdownOpen: isBrandsDropdownOpen,
      setDropdownOpen: setIsBrandsDropdownOpen,
    },
    {
      title: 'Categories',
      href: '#',
      dropdown: [
        {
          title: 'Beauty',
          subDropdown: [
            'Bath & Body',
            'Beauty Tools',
            'Fragrance',
            'Haircare',
            'Makeup',
            'Skincare',
          ],
          isSubDropdownOpen: isBeautySubDropdownOpen,
          setSubDropdownOpen: setIsBeautySubDropdownOpen,
        },
        'Electronics',
        'Entertainment',
        'Fashion',
        'Food & Beverage',
        'Home & Decor',
        'Kids',
      ],
      isDropdownOpen: isCategoriesDropdownOpen,
      setDropdownOpen: setIsCategoriesDropdownOpen,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white font-sans shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />

        <div className="hidden items-center space-x-6 md:flex">
          {navLinks.map(link => (
            <div
              key={link.title}
              className="group relative"
              onMouseEnter={() =>
                link.setDropdownOpen && link.setDropdownOpen(true)
              }
              onMouseLeave={() =>
                link.setDropdownOpen && link.setDropdownOpen(false)
              }
            >
              <a
                href={link.href}
                className="flex items-center rounded-md p-2 text-gray-700 transition-colors hover:text-blue-600"
              >
                {link.title}
                {link.dropdown && (
                  <span
                    className={`transform transition-transform duration-200 ${link.isDropdownOpen ? 'rotate-180' : ''
                      }`}
                  >
                    <ChevronDownIcon />
                  </span>
                )}
              </a>
              {link.dropdown && link.isDropdownOpen && (
                <div className="absolute top-full left-0 z-50 mt-2 min-w-[200px] rounded-md bg-white py-2 shadow-lg">
                  {link.dropdown.map((item, index) =>
                    typeof item === 'object' ? (
                      // Nested dropdown for Categories
                      <div
                        key={item.title}
                        className="group/sub relative"
                        onMouseEnter={() => item.setSubDropdownOpen(true)}
                        onMouseLeave={() => item.setSubDropdownOpen(false)}
                      >
                        <a
                          href="#"
                          className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {item.title}
                          <span
                            className={`transform transition-transform duration-200 ${item.isSubDropdownOpen ? 'rotate-180' : ''
                              }`}
                          >
                            <ChevronDownIcon />
                          </span>
                        </a>
                        {item.isSubDropdownOpen && (
                          <div className="absolute top-0 left-full z-50 mt-0 ml-2 min-w-[200px] rounded-md bg-white py-2 shadow-lg">
                            {item.subDropdown.map(subItem => (
                              <a
                                key={subItem}
                                href="#"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                              >
                                {subItem}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {item}
                      </a>
                    ),
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search Bar and Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search Korean Product..."
              className="w-72 rounded-full border border-gray-300 py-2 pr-4 pl-10 transition-shadow focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <span className="absolute top-1/2 left-3 -translate-y-1/2 transform">
              <SearchIcon />
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative">
              <UserIcon />
              <span className="absolute top-0 right-0 -mt-1 -mr-1 h-3 w-3 rounded-full border-2 border-white bg-red-500" />
            </button>
            <button>
              <CartIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (visible on small screens) */}
      <div
        className={`absolute top-16 left-0 w-full transform bg-white shadow-lg transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="flex flex-col space-y-2 p-4">
          {navLinks.map(link => (
            <div key={link.title}>
              <button
                onClick={() =>
                  link.setDropdownOpen &&
                  link.setDropdownOpen(!link.isDropdownOpen)
                }
                className="flex w-full items-center justify-between rounded-md p-2 text-gray-700 hover:bg-gray-100"
              >
                {link.title}
                {link.dropdown && <ChevronDownIcon />}
              </button>
              {link.dropdown && link.isDropdownOpen && (
                <div className="mt-2 ml-4 border-l border-gray-200">
                  {link.dropdown.map((item, index) =>
                    typeof item === 'object' ? (
                      <div key={item.title}>
                        <button
                          onClick={() =>
                            item.setSubDropdownOpen(!item.isSubDropdownOpen)
                          }
                          className="flex w-full items-center justify-between rounded-md p-2 text-gray-700 hover:bg-gray-100"
                        >
                          {item.title}
                          <ChevronDownIcon />
                        </button>
                        {item.isSubDropdownOpen && (
                          <div className="mt-2 ml-4">
                            {item.subDropdown.map(subItem => (
                              <a
                                key={subItem}
                                href="#"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                              >
                                {subItem}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {item}
                      </a>
                    ),
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
