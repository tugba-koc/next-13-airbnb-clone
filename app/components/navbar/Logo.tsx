'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from '../../../public/images/logo.png';

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt='logo'
      className='hidden md:block cursor-pointer'
      height={100}
      width={100}
      src={logo}
    />
  );
};

export default Logo;
