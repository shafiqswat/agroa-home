/** @format */

import Image from "next/image";
import React from "react";

const Stores = ({ items }) => {
  const ImagesPath = ["firstImage", , "secondImage", "thirdImage", "lastImage"];
  return (
    <div className='rounded-lg'>
      <h2 className='ps-2 font-sans font-semibold text-2xl mb-4'>
        {items.title}
      </h2>
      <div className='grid grid-cols-2 gap-2'>
        {ImagesPath.map((key, index) => (
          <div
            key={index}
            className='relative group w-full h-32 cursor-pointer rounded-xl overflow-hidden'>
            <Image
              src={items[key]}
              alt={`Store Image ${index + 1}`}
              layout='fill'
              objectFit='cover'
              className='rounded-xl group-hover:opacity-50 transition-opacity duration-300'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stores;
