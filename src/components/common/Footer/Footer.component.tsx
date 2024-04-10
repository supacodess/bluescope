import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function FooterComponent() {
    return (
        <section className='bg-background-texture font-inriaSerif py-20 text-white mt-8'>
            <div className='w-[90%] mx-auto flex gap-20 md:gap-40 flex-wrap'>
                <div>
                    <h1 className='text-4xl font-bold'>BlueScope Company Pvt. Ltd.</h1>
                    <p className='text-[#919090]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    <Image src="/images/facebook-icon.png" alt='facebook-icon' height={30} width={30} />
                </div>
                <div className='flex flex-col gap-4'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>About us</Link>
                    <Link href={'/'}>Our Verticls</Link>
                    <Link href={'/'}>Gallery</Link>
                    <Link href={'/'}>Blogs</Link>
                    <Link href={'/'}>Contact us</Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <p>Contact Us</p>
                    <p>+977 123456789</p>
                    <p>info@bluescope.com</p>
                </div>
            </div>
        </section>
    )
}

export default FooterComponent
