import React from 'react'
import { SiSnapcraft } from "react-icons/si";
import { Link } from 'react-router-dom'

import './styles/Navbar.css'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-full px-2 md:px-12 lg:px-20">
            <div className="flex">
                <Link to="/" className="text-xl md:text-2xl flex items-center font-semibold navBrand">
                    <SiSnapcraft />
                    <span className='ml-2'>ResumeSphere</span>
                </Link>
            </div>
            <div className="nav flex">
                <Link to="/login" className='navLink text-blue-400 rounded-md font-bold  md:font-semibold md:text-gray-800 mr-4  hover:text-blue-500'>Login</Link>
                <Link to="/register" className='navLink hidden md:block mr-2 text-gray-800 font-semibold  hover:text-blue-500'>Register</Link>
            </div>

        </div>
    )
}

export default Navbar