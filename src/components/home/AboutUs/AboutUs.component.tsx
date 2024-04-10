'use client';
import React, { useState } from 'react'
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
function AboutUsComponent() {
    const [tag, setTag] = useState('Agriculture');

    const changeTag = (e: React.BaseSyntheticEvent) => {
        const content = e.target.innerText
        if (content === 'Agriculture Sector') {
            setTag('Agriculture')
        } else if (content === 'Education Sector') {
            setTag('Education')
        } else if (content === 'Logistics Sector') {
            setTag('Logistics')
        } else {
            setTag('Retail')
        }
    }

    const tagClass = `text-white px-4 py-2 rounded-full w-fit cursor-pointer duration-300`;

    const carouselItems = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <section className='w-[100vw] text-center py-20 font-inriaSerif'>
            <div className='w-[90%] mx-auto flex flex-col gap-8 mb-12'>
                <h1 className='text-4xl font-inriaSerif font-bold'>Delivering iconic project with our sub-companies around Nepal</h1>
                <div className='flex items-center justify-center gap-4'>
                    <div onClick={(e) => changeTag(e)} className={`${tagClass}  ${tag === 'Agriculture' ? 'bg-[#1e1e5d] text-white' : 'bg-[#adadad] text-[555] hover:bg-[#1e1e5d] hover:opacity-85'}`}><p>Agriculture Sector</p></div>
                    <div onClick={(e) => changeTag(e)} className={`${tagClass}  ${tag === 'Education' ? 'bg-[#1e1e5d] text-white' : 'bg-[#adadad] text-[555] hover:bg-[#1e1e5d] hover:opacity-85'}`}><p>Education Sector</p></div>
                    <div onClick={(e) => changeTag(e)} className={`${tagClass}  ${tag === 'Logistics' ? 'bg-[#1e1e5d] text-white' : 'bg-[#adadad] text-[555] hover:bg-[#1e1e5d] hover:opacity-85'}`}><p>Logistics Sector</p></div>
                    <div onClick={(e) => changeTag(e)} className={`${tagClass}  ${tag === 'Retail' ? 'bg-[#1e1e5d] text-white' : 'bg-[#adadad] text-[555] hover:bg-[#1e1e5d] hover:opacity-85'}`}><p>Retail Sector</p></div>
                </div>
                <p className='text-[#6C6C6C]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
            </div>
            <Carousel responsive={responsive}>
                {
                    carouselItems.map((item: number) => (
                        <div key={item} className='bg-[#D9D9D9] h-[15rem] w-[25rem]'>

                        </div>
                    ))
                }
            </Carousel>
        </section >
    )
}

export default AboutUsComponent
