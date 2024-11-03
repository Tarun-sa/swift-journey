import Image from 'next/image';
import React from 'react';
import Logo from '../public/logo.png';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <div className="flex gap-4 justify-between p-3 shadow-md">
      <Image src={Logo} alt="swift-journey-logo" width={80} height={80} className='cursor-pointer' />
      <div className="hidden md:flex items-center gap-6 ">
        <h2 className='navbar-items'>Home</h2>
        <h2 className='navbar-items'>History</h2>
        <h2 className='navbar-items'>Help</h2>
      </div>
      <UserButton />
    </div>
  );
};

export default Navbar;
