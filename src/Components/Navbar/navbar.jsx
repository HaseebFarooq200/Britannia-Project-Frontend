import React from 'react';
import DesktopViewNavbar from './desktop_view_navbar';
import MobileViewNavbar from './mobile_view_navbar';

const Navbar = () => {
    return (
        <div className='shadow-md bg-[#FFFFFF]' >
            <DesktopViewNavbar />
            <MobileViewNavbar />
        </div>
    );
}

export default Navbar;
