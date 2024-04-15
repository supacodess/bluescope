'use client';
import Link from 'next/link'
import React from 'react'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { usePathname } from 'next/navigation';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];
function NavbarComponent() {
    const pathname = usePathname();
    return (
        <nav className='font-inriaSerif hidden md:flex items-center py-2 justify-between w-[60%] mx-auto rounded-full fixed shadow-xl z-[10] bg-white px-3 m-auto left-0 right-0 mt-4'>
            <h1 className='text-2xl'>Logo</h1>
            <div className='flex gap-6'>
                <Link href="/" className={`${pathname == '/' ? 'text-[#1e1e5d] font-bold' : ''}`}>Home</Link>
                <Link href="/about-us" className={`${pathname == '/about-us' ? 'text-[#1e1e5d] font-bold' : ''}`}>About us</Link>
                <Link href="/" className={`${pathname == '/' ? 'text-[#1e1e5d] font-bold' : ''}`}>Our Verticals</Link>
                <Link href="/" className={`${pathname == '/' ? 'text-[#1e1e5d] font-bold' : ''}`}>Gallery</Link>
            </div>
            <button className='bg-[#1e1e5d] text-white p-2 rounded-full px-3 none'>
                Become a member!
            </button>
        </nav>
    )
}

export default NavbarComponent
