import React from 'react'
import { SiSnapcraft } from "react-icons/si";
import { Link } from 'react-router-dom'

import './styles/Navbar.css'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-full px-2 md:px-12">
            <div className="flex">
                <Link to="/" className="text-xl md:text-2xl flex items-center font-semibold navBrand">
                    <SiSnapcraft />
                    <span className='ml-2'>ResumeSphere</span>
                </Link>
            </div>
            <div className="nav flex">
                <Link to="/login" className='navLink mr-2 border-b-2 border-white hover:border-blue-500/50 hover:drop-shadow-sm hover:text-blue-500'>Login</Link>
                <Link to="/register" className='navLink mr-2 border-b-2 border-white hover:border-blue-500/50 hover:drop-shadow-sm hover:text-blue-500'>Register</Link>
            </div>
        </div>
    )
}

export default Navbar