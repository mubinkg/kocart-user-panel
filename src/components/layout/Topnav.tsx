import React from 'react';
import { Navbar } from './navbar';
import Image from 'next/image';

export function Topnav() {
  return (
    <div className="shadow-md">
      <div className="container mx-auto flex justify-between">
        <Image src="/logo.png" width={50} height={50} alt="logo" />
        <Navbar />
      </div>
    </div>
  );
}
