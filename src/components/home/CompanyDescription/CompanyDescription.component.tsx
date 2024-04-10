'use client'
import React from 'react'
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function CompanyDescriptionComponent() {
  const carouselItems = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className='bg-background-texture font-inriaSerif py-20 text-white'>
      <div className='w-[90%] mx-auto flex items-center flex-col lg:flex-row gap-20'>
        <div className='lg:w-[50%]'>
          <p className='text-2xl'>Welcome to</p>
          <h1 className='text-5xl font-bold'>BlueScope Company Pvt. Ltd.</h1>
          <p className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className='lg:w-[50%] flex items-end justify-end'>
          <Carousel responsive={responsive} className='w-[100vw] md:w-[30rem]'>
            {
              carouselItems.map((item: number) => (
                <div key={item} className='bg-[#D9D9D9] h-[25rem] w-[100vw] md:w-[30rem]'>

                </div>
              ))
            }
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default CompanyDescriptionComponent
