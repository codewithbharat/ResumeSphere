import React, { useState, useEffect, useRef } from 'react'
import DasboardLayout from '../components/DashboardLayout'
import './styles/Resume.css'
import ReactToPrint from 'react-to-print';


// importing icons
import { IoIosMail } from "react-icons/io";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { PiGlobeLight } from "react-icons/pi";


const Resume = () => {
    const [userData, setUserData] = useState({});
    const componentRef = useRef();

    useEffect(() => {
        // Retrieve user data from local storage
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            setUserData(user);
        }
    }, []);

    const {
        name,
        email,
        phone,
        address,
        jobTitle,
        linkedin,
        github,
        twitter,
        instagram,
        website,
        education,
        experience,
        skill,
        project,
    } = userData;


    return (
        <DasboardLayout>

            {/* If any user data is missing create a alert  */}
            <div className="flex justify-center">
                <ReactToPrint
                    className="absolute"
                    trigger={() => <button className="p-2 bg-blue-500 m-4 rounded-md text-white">Print Resume </button>}
                    content={() => componentRef.current}
                    // pirnt page one only 
                    pageStyle="@page { size: A4; margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } }"
                    onBeforeGetContent={() => { document.title = `${userData.name.split(' ')[0]}'s Resume`; }}
                />
            </div>
            {/* todo */}
            <div className="md:flex md:flex-col md:justify-center md:items-center">
                <div ref={componentRef} id='resume' className="resume scale-50 md:scale-100 bg-white shadow-lg p-10">
                    <div className="flex">
                        <div className="header basis-2/3">
                            <h1 className='text-4xl font-bold'>{name}</h1>
                            <p>{jobTitle}</p>
                            <p className='flex items-center'> <IoIosMail className='mr-1' /> {email}</p>
                            <p className='flex items-center'> <IoCall className='mr-1' />{phone}</p>
                            <p className='flex items-center'> <IoLocationSharp className='mr-1'></IoLocationSharp> {address}</p>
                        </div>

                        <div className="socials basis-1/3 text-right mt-6">
                            <p className='flex items-center '> <FaLinkedinIn className='mr-1' /> {linkedin}</p>
                            <p className='flex items-center '> <TbBrandGithubFilled className='mr-1' /> {github}</p>
                            <p className='flex items-center '> <FaTwitter className='mr-1' /> {twitter}</p>
                            <p className='flex items-center '> <AiFillInstagram className='mr-1' /> {instagram}</p>
                            <p className='flex items-center '><PiGlobeLight className='mr-1' />{website}</p>
                        </div>
                    </div>

                    <hr className="divider" />

                    <div className="body">
                        <div className="education">
                            <h2 className='text-lg my-2 font-semibold'>Education</h2>
                            {/* Map through education array and display details */}
                            {education &&
                                education.map((edu, index) => (
                                    <div key={index}>
                                        <p>{edu.instName}</p>
                                        <p>{edu.degree}</p>
                                        <p>{edu.year}</p>
                                    </div>
                                ))}
                        </div>

                        <hr className="divider" />

                        <div className="section">
                            <h2>Experience</h2>
                            {/* Map through experience array and display details */}
                            {experience &&
                                experience.map((exp, index) => (
                                    <div key={index}>
                                        <p>{exp.companyName}</p>
                                        <p>{exp.position}</p>
                                        <p>{exp.date}</p>
                                        <p>{exp.description}</p>
                                    </div>
                                ))}
                        </div>

                        <hr className="divider" />

                        <div className="skills">
                            <h2>Skills</h2>
                            {/* Map through skills array and display details */}
                            {skill &&
                                skill.map((skill, index) => (
                                    <p key={index}>{skill.skill}</p>
                                ))}
                        </div>

                        <hr className="divider" />

                        <div className="projects">
                            <h2>Projects</h2>
                            {/* Map through projects array and display details */}
                            {project &&
                                project.map((project, index) => (
                                    <div key={index}>
                                        <p>{project.projectName}</p>
                                        <p>{project.associated}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

        </DasboardLayout>
    );
};

export default Resume