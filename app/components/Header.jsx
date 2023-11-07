import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='h-[30vh] flex flex-col items-center justify-center text-[50px] bg-[#8e3a60] text-white p-2'>
      <Image
        src='/border.png'
        width={500}
        height={500}
        alt='Picture of the author'
      />
      <h1>Toryork Market</h1>
      <Image
        className='rotate-180'
        src='/border.png'
        width={500}
        height={500}
        alt='Picture of the author'
      />
      <span className='text-[30px] pt-4 italic'>MENU</span>
    </div>
  );
};

export default Header;
