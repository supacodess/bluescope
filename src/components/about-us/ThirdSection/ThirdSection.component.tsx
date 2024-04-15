'use client';
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


const carouselItems = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function ThirdSectionComponent() {
    return (
        <section className='bg-background-texture py-[8rem] text-white w-[100%] '>
            <div className='flex item-center gap-[4rem] w-[90%] mx-auto flex-wrap'>
                <div className='flex-1 flex flex-col w-[100%]'>
                    <h1 className='font-bold text-2xl mb-2'>Lorem ipsum dolor sit amet</h1>
                    <p className='text-[#bbbbbb] text-balance'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className='flex flex-col md:flex-row gap-10 mt-8  items-center md:items-start'>
                        <div className='w-[16rem] shadow-lg p-4 hover:shadow-2xl duration-500 bg-white'>
                            <h4 className='font-bold text-lg text-black'>
                                4+ <br />
                                Sectors
                            </h4>
                            <p>  </p>
                            <p className='text-[#6C6C6C]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                        </div>
                        <div className='w-[16rem] p-4 shadow-lg hover:shadow-2xl duration-500 bg-white'>
                            <h4 className='font-bold text-lg text-black'>
                                8+ <br />
                                years of experiance
                            </h4>
                            <p className='text-[#6C6C6C]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                        </div>
                    </div>
                </div>
                <Carousel responsive={responsive} className='w-[25rem]'>
                    {
                        carouselItems.map((item: any) => (
                            <div key={item} className='h-[18rem] w-[25rem] bg-[#D9D9D9]'>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </section>
    )
}

export default ThirdSectionComponent

