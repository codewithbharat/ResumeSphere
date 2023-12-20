import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TiDocumentText } from "react-icons/ti";

const Sidebar = () => {
    const [toggle, SetToggle] = useState(true);

    useEffect(() => {
        if (window.innerWidth < 768) {
            SetToggle(false);
        }

    }, []);

    const SidebarLinks = [
        {
            name: 'Personal',
            link: "/dashboard/basic-info",
            icon: <TiDocumentText />
        },

        {
            name: "Social Links",
            link: "/dashboard/social-links",
            icon: <TiDocumentText />
        },

        {
            name: 'Education',
            link: "/dashboard/education",
            icon: <TiDocumentText />
        },

        {
            name: 'Experience',
            link: "/dashboard/experience",
            icon: <TiDocumentText />
        },

        {
            name: 'Skills',
            link: "/dashboard/skills",
            icon: <TiDocumentText />
        },

        {
            name: 'Projects',
            link: "/dashboard/projects",
            icon: <TiDocumentText />
        },

        {
            name: 'Templates',
            link: '/dashboard/templates',
            icon: <TiDocumentText />
        }
    ]

    const handleClick = () => {
        if (window.innerWidth < 768) {
            SetToggle(!toggle);
        }
    }
    return (
        <div className="absolute w-full h-screen md:static flex flex-col">
            <div className="flex p-4 md:border-r-2 border-black/50">
                <TiDocumentText size={32} onClick={() => SetToggle(!toggle)} />
                <h1 className="text-2xl font-semibold">ResumeSphere</h1>
            </div>
            {
                toggle && (
                    <div className=' bg-gray-700 p-1 h-full'>
                        {

                            SidebarLinks.map(({ name, link, icon }) => (
                                <div className="flex hover:shadow-inner hover:shadow-black/40 hover:rounded-md flex-row text-2xl bg-blue-800 shadow-lg rounded-sm text-white m-4 py-2 px-4 items-center">
                                    {icon}
                                    <Link className='ml-2' onClick={handleClick} to={link}>{name}</Link>
                                </div>
                            ))
                        }
                        <button
                            className=' hover:shadow-inner hover:shadow-black/40 hover:rounded-md  w-40 text-md bg-gray-400 shadow-lg rounded-sm text-white m-4 py-2 px-4 items-center'
                            onClick={() => {
                                localStorage.removeItem('token');
                                localStorage.removeItem('user');
                                window.location.href = '/';
                            }}
                        >
                            Logout
                        </button>
                    </div>
                )
            }


        </div >
    )
}

export default Sidebar