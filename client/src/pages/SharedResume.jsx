import React, { useState, useEffect, useRef } from 'react'
import './styles/Resume.css'
import ReactToPrint from 'react-to-print';
import axios from 'axios';


// importing icons
import { IoIosMail } from "react-icons/io";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { PiGlobeLight } from "react-icons/pi";

import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';

const SharedResume = () => {
    const { userId } = useParams();
    console.log(userId);
    const [userData, setUserData] = useState({});
    const componentRef = useRef();

    const getUserData = () => {
        axios.get(`${import.meta.env.VITE_SERVER}/user/${userId}`)
            .then(res => {
                const { user } = res.data;
                console.log(user);
                setUserData(user);
            }
            )

            .catch(err => {
                console.log(err);
            })
    }


    useEffect(() => {
        getUserData();
    }, [])

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

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long' };
        return new Date(date).toLocaleDateString('en-US', options);
    };
    return (
        <div>
            <div className='my-4'>
                <Navbar />
            </div>
            <div className="md:flex mt-20 h-[600px] md:h-auto md:flex-col md:justify-center md:items-center">
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
                            {linkedin && <p className='flex items-center '> <FaLinkedinIn className='mr-1' /> {linkedin}</p>}
                            {github && <p className='flex items-center '> <TbBrandGithubFilled className='mr-1' /> {github}</p>}
                            {twitter && <p className='flex items-center '> <FaTwitter className='mr-1' /> {twitter}</p>}
                            {instagram && <p className='flex items-center '> <AiFillInstagram className='mr-1' /> {instagram}</p>}
                            {website && <p className='flex items-center '><PiGlobeLight className='mr-1' />{website}</p>}
                        </div>
                    </div>

                    <hr className="divider" />

                    <div className="body">
                        <div className="education">
                            <h2 className='text-lg my-2 font-semibold'>Education</h2>
                            {/* Map through education array and display details */}
                            {education &&
                                education.map((educationItem) => (
                                    <div key={educationItem._id} className='my-2'>
                                        <div className="flex flex-col">
                                            <div className="flex justify-between">
                                                <p className='text-xl font-bold'>{educationItem.degree} - {educationItem.course}</p>
                                                <p className='font-semibold font-sans text-sm text-right'>{formatDate(educationItem.startDate)} - {formatDate(educationItem.endDate)}</p>
                                            </div>
                                            <div className='text-lg flex'><span>- {educationItem.instName}</span> <span className='font-light text-sm ml-auto'>{`( ${educationItem.grade} cGPA )`}</span></div>
                                        </div>
                                    </div>
                                ))}
                        </div>

                        <hr className="divider" />

                        <div className="experience">
                            <h2 className='text-lg my-2 font-semibold'>Experience</h2>
                            {/* Map through experience array and display details */}
                            {experience &&
                                experience.map((exp) => (
                                    <div key={exp._id} className='my-4'>
                                        <div className="flex flex-col">
                                            <div className="flex justify-between">
                                                <p className='text-xl font-bold capitalize'>{exp.companyName} - {exp.position}</p>
                                                <p className='font-semibold font-sans text-sm text-right'>{formatDate(exp.startDate)} - {(exp.currentlyWorking == true) ? "Presesnt" : exp.endDate} </p>
                                            </div>
                                            <div className='text-xl flex justify-between'><p>- {exp.location}</p>  <p className='capitalize text-sm'>{`( ${exp.locationType} )`}</p></div>
                                            {exp.description && <div className='flex'><p className='mr-2'>More Info:</p> <p className='basis-8/12'>{exp.description}</p></div>}
                                        </div>
                                    </div>
                                ))}
                        </div>

                        <hr className="divider" />

                        <div className="skills">
                            <h2 className='text-lg my-2 font-semibold'>Skills</h2>
                            {/* Map through skills array and display details */}
                            {skill &&
                                skill.map((skill, index) => (
                                    <p key={index}>{skill.skill}</p>
                                ))}
                        </div>

                        <hr className="divider" />

                        <div className="projects">
                            <h2 className='text-lg my-2 font-semibold'>Projects</h2>
                            {/* Map through projects array and display details */}
                            {project &&
                                project.map((project) => (
                                    <div key={project._id} className='my-4'>
                                        <div className="flex flex-col">
                                            <div className="flex justify-between">
                                                <p className='text-xl font-bold capitalize'>{project.projectName} <span className='font-normal'>- {project.associated}</span></p>
                                                <p className='font-semibold font-sans text-sm text-right'>{formatDate(project.startDate)} - {(project.currentlyworking == true) ? "present" : formatDate(project.endDate)}</p>
                                            </div>
                                            {project.description && <div className="flex">
                                                <p className='mr-2'>More Info :</p>
                                                <p className='basis-8/12'>{project.description}</p>
                                            </div>}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
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
        </div>
    )
}

export default SharedResume