/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
    {
        img: '/images/1.png',
        title: 'Breakfast',
        rows: 4,
        cols: 2,
    },
    // {
    //     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    //     title: 'Burger',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    //     title: 'Camera',
    // },
    {
        img: '/images/2.png',
        title: 'Coffee',
        cols: 2,
        rows: 3,
    },
    // {
    //     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    //     title: 'Hats',
    //     cols: 2,
    // },
    {
        img: '/images/3.png',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    // {
    //     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    //     title: 'Basketball',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    //     title: 'Fern',
    // },
    {
        img: '/images/4.png',
        title: 'Mushrooms',
        rows: 3,
        cols: 2,
    },
    {
        img: '/images/5.png',
        title: 'Tomato basil',
        rows: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        rows: 2,

    },
    // {
    //     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    //     title: 'Bike',
    //     cols: 2,
    // },
];
function GalleryComponent() {

    function srcset(image: string, size: number, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }
    return (
        <section className='w-[90vw] mx-auto font-inriaSerif py-10'>
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-4xl font-bold text-[#1e1e5d]'>Gallery</h1>
                <button className='text-white bg-[#1e1e5d] px-4 py-1 rounded-full w-fit'>
                    View All
                </button>
            </div>
            <ImageList
                sx={{ width: 'fit', height: 'fill' }}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} className='relative'>
                        <div className='bg-[#1e1e5d] absolute h-[100%] w-[100%] opacity-[50%] hover:opacity-[0%] duration-500'>
                        </div>
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                            className='object-cover'
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </section >
    )
}

export default GalleryComponent
