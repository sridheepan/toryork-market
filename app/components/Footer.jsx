import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className='h-[5vh] flex bg-[#993399] text-white items-center justify-between w-full px-5'>
      <p className='text-sm'>© Copyright {date} | Toryork Market</p>
      <Link href="/login" className='text-black'>Login</Link>
    </div>
  );
};

export default Footer;
