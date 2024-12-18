/** @format */
"use client";
import { ArrowDownIcon } from "@/assets/svgIcons";
import Button from "@/components/button/Button";
import Collection from "@/components/card/collection/Collection";
import MainCard from "@/components/card/main-card/MainCard";
import Stores from "@/components/card/stores/Stores";
import Input from "@/components/input/Input";
import { discountData } from "@/data/discount";
import { featuredCollection } from "@/data/featuredCollection";
import { gift } from "@/data/gift";
import { store } from "@/data/stores";
import Image from "next/image";

const Home = () => {
  const BtnText = [
    "25L waterproof backpack",
    "Grid foam roller",
    "Natural dog treats",
  ];
  return (
    <div className='pt-28 px-5 md:px-24'>
      {/* Hero Section */}
      <section className='h-[80vh]'>
        <div className='flex flex-col items-center h-full'>
          <Image
            src='/logo.webp'
            alt='logo'
            width={350}
            height={117}
            className='mt-12 mb-5'
          />
          <Input />
          <div>
            {BtnText.map((text, i) => (
              <Button
                key={i}
                className='mr-2'>
                {text}
              </Button>
            ))}
          </div>
          <span
            className='mt-auto cursor-pointer'
            onClick={() => {
              const nextSection = document.getElementById(
                "featured-collections"
              );
              nextSection?.scrollIntoView({ behavior: "smooth" });
            }}>
            <ArrowDownIcon />
          </span>
        </div>
      </section>
      {/* Featured Collection  */}
      <section id='featured-collections'>
        <h2 className='font-medium my-16 text-2xl font-sans'>
          Featured collections
        </h2>
        <di className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>
          {featuredCollection.map((items, i) => (
            <Collection
              items={items}
              key={i}
            />
          ))}
        </di>
      </section>
      {/* Featured Stores */}
      <section>
        <h2 className='font-medium my-16 text-2xl font-sans ps-5'>
          Featured stores
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-10'>
          {store.map((items, i) => (
            <Stores
              items={items}
              key={i}
            />
          ))}
        </div>
      </section>
      {/* Gift ideas */}
      <section className='my-16'>
        <h2 className='font-medium text-2xl font-sans ps-5 mb-6'>Gift Ideas</h2>
        <div className='remove-scroll flex overflow-x-auto gap-4 px-5 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
          {gift.map((items, i) => (
            <div
              className='w-[195px]  p-4 flex-shrink-0'
              key={i}>
              <Image
                src={items.imagePath}
                width={200}
                height={200}
                className='rounded-lg mb-4'
                alt={items.title}
              />
              <h2 className='text-lg font-sans font-semibold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis'>
                {items.title}
              </h2>
            </div>
          ))}
        </div>
      </section>
      {/* Most discounted */}
      <section>
        <h2 className='font-medium text-2xl font-sans my-16'>
          Most discounted
        </h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-6 gap-5 xl:gap-10'>
          {discountData.map((items, i) => (
            <MainCard
              discount={true}
              items={items}
              key={i}
            />
          ))}
        </div>
      </section>
      {/* Top Searches */}
      <section>
        <h2 className='font-medium my-16 text-2xl font-sans'>Top searches</h2>
        <di className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>
          {featuredCollection.map((items, i) => (
            <Collection
              items={items}
              key={i}
            />
          ))}
        </di>
      </section>
      {/* Popular Products */}
      <section>
        <h2 className='font-medium text-2xl font-sans my-16'>
          Popular products
        </h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-6 gap-5 xl:gap-10'>
          {discountData.map((items, i) => (
            <MainCard
              discount={true}
              items={items}
              key={i}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
