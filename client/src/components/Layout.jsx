import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col w-full h-screen overflow-hidden">
            <div className="h-1/12 py-2">
                <Navbar />
            </div>
            <div className="h-11/12 h-full">
                <div className='bg-slate-300 h-full px-12 text-white overflow-auto '>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout