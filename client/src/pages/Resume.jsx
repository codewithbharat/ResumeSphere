import React, { useState, useEffect } from 'react'
import DasboardLayout from '../components/DashboardLayout'
import './styles/Resume.css'

const Resume = () => {
    const [userData, setUserData] = useState({});

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

            {/* todo */}
            <div className="flex items-center justify-center">
                <div className="resume bg-white shadow-lg p-10">
                    <div className="header">
                        <h1 className='text-2xl font-bold'>{name}</h1>
                        <p>{jobTitle}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                        <p>{address}</p>
                    </div>
                    <hr className="divider" />

                    <div className="socials">
                        <h2 className='text-lg my-2 font-semibold'>Social Links</h2>
                        <p>{linkedin}</p>
                        <p>{github}</p>
                        <p>{twitter}</p>
                        <p>{instagram}</p>
                        <p>{website}</p>
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