import React from 'react'
import Navbar from './Navbar'
import './styles/Layout.css'

const Layout = ({ children }) => {
    return (
        <div className=" min-h-screen flex flex-col">
            <header className=" p-4">
                <Navbar />
            </header>

            <main className="container mx-auto my-4 flex-grow">
                {/* Body content goes here */}
                {children}
            </main>

            <footer className="bg-gray-300 p-4">
                {/* Footer content goes here */}
                <div className="flex justify-center">
                    <p className="text-sm text-gray-600">© 2023 codewithbharat All rights reserved. | Source Code : <a className='font-semibold' href="https://github.com/codewithbharat/ResumeSphere">Github</a> </p>
                </div>
            </footer>
        </div >
    )
}

export default Layout