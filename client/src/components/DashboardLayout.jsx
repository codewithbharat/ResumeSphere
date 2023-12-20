import React from 'react'
import Sidebar from './Sidebar'



const DasboardLayout = ({ children }) => {

    return (
        <div className="flex flex-col md:flex-row h-screen bg-slate-600">
            <div className="basis-2/12">
                <Sidebar />
            </div>
            <div className="basis-10/12 p-2 md:px-5 md:py-20 lg:p-20">
                {children}
            </div>
        </div>

    )
}

export default DasboardLayout