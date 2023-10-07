'use client';

import React from 'react';
import SpecialsMenu from './components/SpecialsMenu';
import MainMenu from './components/MainMenu';
import Header from './components/Header';

const Menu = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-col justify-between items-center'>
        <div className='w-full text-black'>
        <h1 className='text-[20px] w-full text-center p-4 text-[#800000] font-bold italic border-b-2 border-[#800000]'>Specials Menu</h1>
          <SpecialsMenu />
        </div>
        <h1 className='text-[20px] w-full text-center p-4 text-[#800000] font-bold italic border-y-2 border-[#800000]'>Main Menu</h1>
        <div className='w-full text-black'>
          <MainMenu />
        </div>
      </div>
    </div>
  );
};

export default Menu;
