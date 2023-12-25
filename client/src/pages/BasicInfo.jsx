import React, { useEffect, useState } from 'react'
import DasboardLayout from '../components/DashboardLayout'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const BasicInfo = () => {
    // Get user data from local storage and parse it into an object
    const user = JSON.parse(localStorage.getItem('user'));

    const [basicInfo, setBasicInfo] = useState({
        name: user.name,
        email: user.email,
        phone: user.phone,
        jobTitle: user.jobTitle,
        address: user.address,
        website: user.website,

    });

    const token = localStorage.getItem('token');

    const navigate = useNavigate();
    useEffect(() => {
        if (!token || !user) {
            navigate('/login');
        }
    }, []);

    const handleChange = (e) => {
        setBasicInfo({
            ...basicInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${import.meta.env.VITE_SERVER}/update-user`, basicInfo, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            const { user } = res.data;
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/dashboard/social-links');
        })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <DasboardLayout>
            <div className="flex flex-col px-2 md:px-4 lg:px-12">
                <h1 className='text-4xl'>Basic Info</h1>
                <form onSubmit={handleSubmit}
                    className='bg-white p-2 md:p-4 rounded-md shadow-md my-4 '
                >
                    <div className="flex flex-col md:flex-row">
                        <div className='flex flex-col basis-1/2 m-2'>
                            <label htmlFor="name" className='text-2xl font-semibold' >Full Name</label>
                            <input type="text" name="name" id="name" value={basicInfo.name}
                                className='border-2 border-indigo-100 rounded-md p-2 my-2 text-xl capitalize'
                                disabled
                            />
                        </div>
                        <div className='flex flex-col basis-1/2 m-2'>
                            <label htmlFor="email" className='text-2xl font-semibold' >Email Address</label>
                            <input type="email" name="email" id="email" value={basicInfo.email}
                                disabled
                                className='border-2 border-indigo-100 rounded-md p-2 my-2 text-xl'
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <div className='flex flex-col basis-1/2 m-2'>
                            <label htmlFor="jobTitle" className='text-2xl font-semibold' >Job Title</label>
                            <input type="text" name="jobTitle" id="jobTitle" value={basicInfo.jobTitle}
                                onChange={handleChange}
                                className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl capitalize'
                            />
                        </div>
                        <div className='flex flex-col basis-1/2 m-2'>
                            <label htmlFor="phone" className='text-2xl font-semibold' >Phone</label>
                            <input type="number" name="phone" id="phone" value={basicInfo.phone}
                                onChange={handleChange}
                                className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl '
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className='flex flex-col basis-1/2 m-2'>
                            <label htmlFor="address" className='text-2xl font-semibold' >Address</label>
                            <input type="text" name="address" id="address" value={basicInfo.address}
                                onChange={handleChange}
                                className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                            />
                        </div>
                        <div className='flex flex-col basis-1/2 m-2'>
                            <label htmlFor="website" className='text-2xl font-semibold' >Website</label>
                            <input type="text" name="website" id="website" value={basicInfo.website}
                                onChange={handleChange}
                                className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl '
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

export default BasicInfo