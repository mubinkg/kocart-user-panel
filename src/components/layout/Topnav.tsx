import React from 'react';
import { Navbar } from './navbar';
import Image from 'next/image';

export function Topnav() {
  return (
    <div className="flex justify-between shadow-md">
      <div>
        <Image src="/logo.png" width={50} height={50} alt="logo" />
      </div>
      <Navbar />
    </div>
  );
}
