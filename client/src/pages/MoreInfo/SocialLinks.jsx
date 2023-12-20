import React, { useState } from 'react'
import DasboardLayout from '../../components/DashboardLayout'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SocialLinks = () => {
    // Get user data from local storage and parse it into an object
    const user = JSON.parse(localStorage.getItem('user'));

    const [socialLinks, setSocialLinks] = useState({
        email: user.email,
        github: user.github,
        linkedin: user.linkedin,
        twitter: user.twitter,
        instagram: user.instagram,
    });

    const token = localStorage.getItem('token');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setSocialLinks({
            ...socialLinks,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${import.meta.env.VITE_SERVER}/update-user`, socialLinks, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            const { user } = res.data;
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/dashboard/education');
        })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <DasboardLayout>
            <div className="flex flex-col px-2 md:px-4 lg:px-12">
                <h1 className='text-4xl'>Social Links</h1>
                <form onSubmit={handleSubmit}
                    className='bg-white p-2 md:p-4 rounded-md shadow-md my-4 '
                >
                    <div className="flex flex-col md:flex-row">
                        <div className='flex flex-col basis-1/2 m-2'>
                            <label htmlFor="github" className='text-2xl font-semibold' >Github</label>
                            <input type="text" name="github" id="github" value={socialLinks.github}
                                className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex flex-col basis-1/2 m-2'>
                            <label htmlFor="linkedin" className='text-2xl font-semibold' >Linkedin</label>
                            <input type="text" name="linkedin" id="linkedin" value={socialLinks.linkedin}
                                onChange={handleChange}
                                className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <div className='flex flex-col basis-1/2 m-2'>
                            <label htmlFor="twitter" className='text-2xl font-semibold' >Twitter</label>
                            <input type="text" name="twitter" id="twitter" value={socialLinks.twitter}
                                className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex flex-col basis-1/2 m-2'>
                            <label htmlFor="instagram" className='text-2xl font-semibold' >Instagram</label>
                            <input type="text" name="instagram" id="instagram" value={socialLinks.instagram}
                                onChange={handleChange}
                                className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                            />
                        </div>
                    </div>



                    <div className="flex px-4 justify-center md:justify-start">
                        <input
                            type='submit'
                            className='bg-indigo-500 cursor-pointer text-white rounded-md px-4 py-2 my-2 text-xl'
                            value={'Next'}
                        />
                    </div>
                </form>
            </div>
        </DasboardLayout>
    )
}

export default SocialLinks