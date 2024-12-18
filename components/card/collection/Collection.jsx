/** @format */

import Image from "next/image";
import React from "react";

const Collection = ({ items }) => {
  return (
    <div className='cursor-pointer'>
      {/* Main Image */}
      <div className='relative h-[246px]'>
        <Image
          src={items.firstImage}
          alt='collection'
          layout='fill'
          objectFit='cover'
          className='rounded-b-lg'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 rounded-t-xl flex justify-center items-center text-white font-semibold font-sans text-xl'>
          {items.title}
        </div>
      </div>

      {/* Secondary Images */}
      <div className='flex gap-1'>
        <div className='w-1/2 relative aspect-[1/1] cursor-pointer'>
          <Image
            src={items.secondImage}
            alt='collection2'
            layout='fill'
            objectFit='cover'
            className='rounded-b-lg'
          />
        </div>
        <div className='w-1/2 relative aspect-[1/1] cursor-pointer'>
          <Image
            src={items.thirdImage}
            alt='collection3'
            layout='fill'
            objectFit='cover'
            className='rounded-b-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default Collection;
