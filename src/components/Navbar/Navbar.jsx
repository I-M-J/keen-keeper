import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router';
import { FaRegClock } from 'react-icons/fa';
import { TfiStatsUp } from 'react-icons/tfi';
import { RiHome2Line } from 'react-icons/ri';

const Navbar = () => {
    const navLinksObjs = [
        {
            path: '/',
            title: 'Home',
            icon: <RiHome2Line />
        },
        {
            path: '/timeline',
            title: 'Timeline',
            icon: <FaRegClock />
        },
        {
            path: '/analytics',
            title: 'Stats',
            icon: <TfiStatsUp />
        }
    ]

    const navLinks = navLinksObjs.map((link, index) => {
        return (
            <NavLink key={index} to={link.path} className={({ isActive }) => `px-4 py-3 flex items-center gap-1 ${isActive ? 'font-semibold text-white bg-green-24 rounded-sm' : 'font-medium text-gray-64'}`}>
                <span className='text-xl'>{link.icon}</span>
                {link.title}
            </NavLink>
        )
    })

    return (
        <nav className='py-4.25 border-b border-[#E9E9E9]'>
            <div className='max-w-360 mx-auto w-11/12 xl:9/10'>
                <div className='flex flex-col sm:flex-row gap-4 items-center justify-between'>
                    <div>
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className='flex items-center gap-0'>
                        {navLinks}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;