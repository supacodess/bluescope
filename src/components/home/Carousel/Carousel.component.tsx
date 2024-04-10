'use client';
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const images = ["/images/carousel.png"]
function CarouselComponent() {
    return (
        <div className='flex items-center justify-center bg-red-200 w-[90%] mx-auto h-[100vh]'>
            <div>
                <Image
                    src='/images/carousel.png'
                    alt={''}
                    sizes='100vw'
                    fill
                />
                <div className='bg-[#1e1e5d] absolute top-0 left-0 h-[100%] w-[100%] opacity-[55%]'></div>
            </div>
            <div className='z-10 text-white flex flex-col gap-4'>
                <h1 className='text-6xl font-bold font-inriaSerif'> BlueScope Company Pvt. Ltd.</h1>
                <p className='w-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                <button className='text-[#1e1e5d] bg-white px-4 py-1 rounded-full w-fit'>
                    Visit
                </button>
            </div>
        </div >
    )
}

export default CarouselComponent
