import React from 'react'
import Layout from './Layout'
import Sidebar from './Sidebar'



const DasboardLayout = ({ children }) => {

    return (
        <Layout>
            <div className="flex h-screen">
                <div className="basis-2/12">
                    <Sidebar />
                </div>
                <div className="basis-10/12">
                    {children}
                </div>
            </div>
        </Layout>
    )
}

export default DasboardLayout