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

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];
function NavbarComponent() {
    return (
        <nav className='font-inriaSerif hidden md:flex items-center py-2 justify-between w-[60%] mx-auto rounded-full fixed shadow-xl z-[1] bg-white px-3 m-auto left-0 right-0 mt-4'>
            <h1 className='text-2xl'>Logo</h1>
            <div className='flex gap-6'>
                <Link href="/" className='text-[#1e1e5d] font-bold'>Home</Link>
                <Link href="/">About us</Link>
                <Link href="/">Our Verticals</Link>
                <Link href="/">Blogs</Link>
            </div>
            <button className='bg-[#1e1e5d] text-white p-2 rounded-full px-3 none'>
                Become a member!
            </button>
        </nav>
    )
}

export default NavbarComponent
