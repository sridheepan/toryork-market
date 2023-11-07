'use client';

import React from 'react';
import Header from './components/Header';
import Accordion from './components/Accordian';

const page = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-col justify-between items-center'>
        <div className='w-full text-black'>
        <Accordion />
        </div>
      </div>
    </div>
  );
};

export default page;
