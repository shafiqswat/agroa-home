/** @format */
"use client";
import { ArrowRightIcon, MoonIcon } from "@/assets/svgIcons";
import { headerData } from "@/data/headerData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const [inputFocused, setInputFocused] = useState(false);
  const router = useRouter();

  return (
    <header className='py-7 flex flex-col md:flex-row flex-1 justify-between gap-5 md:gap-20 items-center sm:items-start md:items-center top-0 backdrop-blur-md bg-white/20 fixed w-screen z-50 px-5 md:px-24'>
      <div className='flex md:items-end'>
        <Image
          width={100}
          height={34}
          src='/logo.webp'
          alt='logo'
          className='cursor-pointer'
          onClick={() => router.push("/")}
        />
        <span className='text-[10px] font-semibold'>PK</span>
      </div>
      <form className='lg:w-[55%] md:w-[70%] w-full relative'>
        <input
          type='text'
          className={`border w-full py-3 px-4 rounded-full placeholder:text-[10px] sm:placeholder:text-sm bg-white focus:outline focus:outline-1 ${
            inputFocused ? "bg-red-400" : ""
          }`}
          placeholder='Search for products, stores, and brands'
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
        <div
          className={`${
            inputFocused && "bg-gray-100"
          } absolute  cursor-pointer top-[5px] right-4 hover:bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center`}>
          <ArrowRightIcon />
        </div>
      </form>
      <ul className='hidden lg:flex justify-center items-center gap-2'>
        {headerData.map((items, i) => (
          <li
            className='relative w-10 h-10 flex group items-center justify-center rounded-full bg-[#f5f5f5] hover:[bg-[#f9f9f9]]'
            key={i}>
            {items.text ? (
              <span className='absolute border w-16 text-sm bg-[#f5f5f5] h-12 hidden items-center justify-center rounded-lg group-hover:flex top-12 -right-2'>
                {items.text}
              </span>
            ) : null}
            <Link href='#'>
              <span>{items.icon}</span>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
