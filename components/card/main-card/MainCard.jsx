/** @format */

import { HeartIcon, ImageSearchIcon, StarIcon } from "@/assets/svgIcons";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import Image from "next/image";
import React from "react";

const MainCard = ({ items, discount }) => {
  return (
    <div className='h-[400px] group'>
      <div className='h-[269px]  border border-neutral-200 rounded-lg cursor-pointer relative'>
        <Image
          src={items.img}
          alt='discount'
          objectFit='contain'
          layout='fill'
          className='w-full rounded-lg shadow-sm'
        />
        <div class='absolute bg-black/0 group-hover:bg-black/10 inset-0 transition-colors rounded-lg'></div>
      </div>
      <div className='flex justify-between items-center mt-3'>
        <h3 className='text-sm font-semibold text-black font-sans cursor-pointer hover:underline'>
          {items.brandName}
        </h3>
        <div className='rounded-xl hover:bg-neutral-100 p-1 cursor-pointer'>
          <HeartIcon className='text-gray-400 w-6 h-6' />
        </div>
      </div>
      <p className='text-sm text-gray-500 capitalize hover:underline font-sans mt-1 '>
        {items.description}
      </p>
      <div className='flex justify-between items-center'>
        <div className='flex items-center my-3'>
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon
              key={index}
              className='w-4 h-4 text-black cursor-pointer'
            />
          ))}

          <HoverCard>
            <HoverCardTrigger asChild>
              <div className='cursor-pointer px-2 hover:bg-neutral-100 rounded-lg'>
                <span className='text-xs text-neutral-600 font-medium font-sans'>
                  {items.rating}
                </span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className='w-[400px] bg-gray-100 rounded-lg py-4 px-3 font-sans text-sm relative z-20'>
              This is the Agora Product Score. We use a combination of customer
              reviews, feedback, shipping quality, and AI to determine a score.
              The higher the score, the more we recommend buying the product.
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className='rounded-xl hover:bg-neutral-100 p-1'>
          <ImageSearchIcon className='w-6 h-6 text-gray-400 cursor-pointer' />
        </div>
      </div>
      <div className='flex'>
        {discount && (
          <span className='text-sm cursor-pointer text-black font-semibold line-through mr-2'>
            ${items.priceBeforeDiscount}
          </span>
        )}
        <span className='text-sm cursor-pointer text-black font-semibold'>
          ${items.priceAfterDiscount}
        </span>
      </div>
    </div>
  );
};

export default MainCard;
