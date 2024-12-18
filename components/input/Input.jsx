/** @format */
"use client";
import {
  ArrowRightIcon,
  CameraIcon,
  ChatIcon,
  CopyIcon,
  MapIcon,
  SearchIcon,
} from "@/assets/svgIcons";
import React, { useState } from "react";

const Input = () => {
  const [activeIcon, setActiveIcon] = useState(0);
  const [value, setValue] = useState("");

  const icons = [
    {
      component: SearchIcon,
      label: "Search",
      placeholder: "Search for products, stores, and brands",
    },
    {
      component: CameraIcon,
      label: "Camera",
      placeholder: "Drag-and-drop a product image or click here to upload",
    },
    {
      component: CopyIcon,
      label: "Copy",
      placeholder: "Enter a product URL or try this one",
    },
    {
      component: ChatIcon,
      label: "Chat",
      placeholder: "Chat with Athena, your personalized shopping assistan",
    },
    {
      component: MapIcon,
      label: "Map",
      placeholder: "Enter an address to find local stores",
    },
    {
      component: ArrowRightIcon,
      label: "Arrow",
    },
  ];
  return (
    <form
      className='border rounded w-full sm:w-[90%] md:w-[80%] lg:w-[55%] p-2'
      aria-labelledby='search-bar'
      onSubmit={(e) => e.preventDefault()}>
      <input
        id='search-bar'
        className='border-0 focus:outline-none p-2 w-full'
        placeholder={icons[activeIcon]?.placeholder}
        aria-label={icons[activeIcon]?.placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className='flex mt-2 pe-4 items-center'>
        {icons.map((icon, i) => (
          <span
            key={i}
            className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer ${
              icon.label === "Arrow" && "bg-[#f5f5f5] text-black ms-auto"
            } ${icon.label === "Arrow" && value.length > 0 && "bg-black "} `}
            aria-label={icon.label}
            onClick={() => setActiveIcon(i)}>
            <icon.component
              className={`w-5 h-5 ${
                i === activeIcon ? "text-black" : "text-gray-400"
              } ${icon.label === "Arrow" && value.length > 0 && "text-white"} `}
            />
          </span>
        ))}
      </div>
    </form>
  );
};

export default Input;
