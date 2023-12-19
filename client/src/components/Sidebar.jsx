import React from 'react'
import { Link } from 'react-router-dom'
import { TiDocumentText } from "react-icons/ti";

const Sidebar = () => {
    return (
        <div className="flex-col">
            <div className="flex flex-row text-2xl bg-blue-800 shadow-lg rounded-sm text-white m-4 p-2 items-center">
                <TiDocumentText />
                <Link to='/dashboard/basic-info'>Personal Info</Link>
            </div>
        </div >
    )
}

export default Sidebar