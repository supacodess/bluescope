import { FormLabel, TextField } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Image from 'next/image';

function ContactUsForm() {
    const iconContainer = `flex items-center gap-2`;
    return (
        <div className='flex justify-between gap-[4rem] w-[90%] my-[5rem] mx-auto relative flex-wrap'>
            <div className='flex-1'>
                <p className='text-sm'>Contact Us</p>
                <h1 className='font-bold text-3xl text-[#1e1e5d]'>Get In Touch With Us</h1>
                <p className='text-[#6C6C6C] text-sm my-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
                <div className='mt-8 flex flex-col gap-8 text-start'>
                    <div className={`${iconContainer}`}>
                        <div className='bg-[#1e1e5d] p-[0.6rem]'>
                            <LocationOnIcon sx={{ color: 'white' }} />
                        </div>
                        <span>
                            <p>Our Location</p>
                            <p className='text-sm'>Ardasha, Bhaktapur, Nepal</p>
                        </span>
                    </div>
                    <div className={`${iconContainer}`}>
                        <div className='bg-[#1e1e5d] p-[0.6rem]'>
                            <PhoneIcon sx={{ color: 'white' }} />
                        </div>
                        <span>
                            <p>Phone Number</p>
                            <p className='text-sm'>+977 9812345678</p>
                        </span>
                    </div>
                    <div className={`${iconContainer}`}>
                        <div className='bg-[#1e1e5d] p-[0.6rem]'>
                            <EmailIcon sx={{ color: 'white' }} />
                        </div>
                        <span>
                            <p>Email Address</p>
                            <p className='text-sm'>info@bluescope.com.np</p>
                        </span>
                    </div>
                </div>
            </div>
            <form className='bg-background-texture text-white flex-1 py-[4rem] px-[2rem] flex flex-col gap-8 w-[100%]'>
                <div className='flex gap-4 flex-wrap'>
                    <div className='flex flex-col flex-1'>
                        <label>First Name</label>
                        <input type='text' className='border-b-2 bg-transparent' />
                    </div>
                    <div className='flex flex-col flex-1'>
                        <label>Last Name</label>
                        <input type='text' className='border-b-2 bg-transparent' />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label>Email</label>
                    <input type='text' className='border-b-2 bg-transparent' />
                </div>
                <div className='flex flex-col'>
                    <label>Your Message</label>
                    <textarea className='w-[100%] border-b-2 bg-transparent' rows={6} />
                </div>
                <button className='border py-4 hover:bg-white duration-500 hover:text-[#1e1e5d] font-bold'>
                    Send Message
                </button>
            </form>
        </div >
    )
}

export default ContactUsForm
