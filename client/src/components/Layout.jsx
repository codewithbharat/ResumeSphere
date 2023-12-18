import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col w-full h-screen">
            <div className="basis-1/12">
                <Navbar />
            </div>
            <div className="basis-11/12">
                <div className='bg-slate-100 h-full px-12 text-white '>
                    {children}
                </div>
                <div className="absolute bottom-0 h-6 text-white bg-slate-700/50 w-full text-center">
                    &copy; codewithbharat | Source Code on <a className='text-blue-300' href="https://github.com/codewithbharat/linky">GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Layout