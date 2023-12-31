import React, { useState } from 'react'
import { SiSnapcraft } from "react-icons/si";
import { Link } from 'react-router-dom'

import './styles/Navbar.css'

const Navbar = () => {

    const [toggle, SetToggle] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Redirect to home page
        window.location.href = '/';
    }

    // Fetch the user from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    const NavLinks = () => {
        if (!user) {
            return (
                <div className="nav flex">
                    <Link to="/login" className='navLink text-blue-400 rounded-md font-bold  md:font-semibold md:text-gray-800 mr-4  hover:text-blue-500'>Login</Link>
                    <Link to="/register" className='navLink hidden md:block mr-2 text-gray-800 font-semibold  hover:text-blue-500'>Register</Link>
                </div>
            )
        }

        return (
            <div className="nav flex">
                <Link onClick={() => SetToggle(!toggle)} className='navLink text-blue-400 rounded-md font-bold  md:font-semibold md:text-gray-800 mr-4  hover:text-blue-500'>{user.name.split(' ')[0]}</Link>
                {
                    toggle && (
                        <div className='absolute bg-white border-2 p-2 m-2 top-10 right-8 md:right-20 md:right-30'>
                            <div className='flex flex-col'>
                                <Link to="/dashboard/basic-info" className='navLink  md:block mr-2 text-gray-800 font-semibold  hover:text-blue-500'>Dashboard</Link>
                                <hr />
                                <Link to="/" onClick={handleLogout} className='navLink  md:block mr-2 text-gray-800 font-semibold  hover:text-blue-500'>Logout</Link>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }

    return (
        <div className="flex justify-between items-center h-full px-2 md:px-12 lg:px-20">
            <div className="flex">
                <Link to="/" className="text-xl md:text-2xl flex items-center font-semibold navBrand">
                    <SiSnapcraft />
                    <span className='ml-2'>ResumeSphere</span>
                </Link>
            </div>
            <NavLinks />

        </div>
    )
}

export default Navbar