'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const carouselItems = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function HeroSectionComponent() {
    return (
        <section className='h-fit pb-[10rem] bg-background-texture bg-cover'>
            {/* Company Name Div */}
            <div className='w-[90%] mx-auto pt-[10rem] flex justify-between flex-wrap gap-4 md:gap-0'>
                <div className='w-[40rem] text-[#fff] '>
                    <p className='text-sm'>About</p>
                    <h1 className='text-6xl font-bold'>BlueScope Company Pvt. Ltd.</h1>
                </div>
                <div className='w-[40rem]'>
                    <p className='text-[#b9b9b9]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className='bg-white text-[#1e1e5d] px-4 py-2 text-sm mt-2 rounded-full'>
                        Explore more
                    </button>
                </div>
            </div>
            {/* Company Description Div */}
            <div className='mt-[4rem]'>
                <Carousel responsive={responsive} className='w-[100%]'>
                    {
                        carouselItems.map((item: any) => (
                            <div key={item} className='h-[18rem] w-[100%] md:w-[20rem] bg-[#D9D9D9]'>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </section>
    )
}

export default HeroSectionComponent
