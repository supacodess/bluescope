'use client'
import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { useRouter } from 'next/navigation';

function BottomNavComponent() {
    const [value, setValue] = React.useState(0);
    const navigate = useRouter();
    return (
        <div className='fixed md:hidden bottom-0 w-[100vw]'>
            <Box sx={{ width: '100%' }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction onClick={() => navigate.push('/')} label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction onClick={() => navigate.push('/about-us')} label="About us" icon={<InfoIcon />} />
                    <BottomNavigationAction label="Our Verticls" icon={<AccountTreeIcon />} />
                    <BottomNavigationAction label="Contact us" icon={<PermContactCalendarIcon />} />
                </BottomNavigation>
            </Box>
        </div>
    )
}

export default BottomNavComponent
