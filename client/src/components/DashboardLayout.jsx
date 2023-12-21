import React from 'react'
import Sidebar from './Sidebar'



const DasboardLayout = ({ children }) => {

    return (
        <div className="flex flex-col md:flex-row h-screen bg-slate-100">
            <div className="basis-1/12">
                <Sidebar />
            </div>
            <div className="basis-11/12 p-2 md:px-5 md:py-20 overflow-scroll lg:p-20">
                {children}
            </div>
        </div>

    )
}

export default DasboardLayout