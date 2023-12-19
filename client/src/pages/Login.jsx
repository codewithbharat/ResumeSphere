import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [loginData, setLoinData] = useState({
        email: '',
        password: ''
    })
    const inputFileds = [
        {
            name: 'email',
            type: 'email'
        },
        {
            name: 'password',
            type: 'password'
        }
    ]

    const handleChange = (e) => {
        setLoinData({
            ...loginData,
            [e.target.name]: e.target.value
        })

    }

    // handle form Submit
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginData);
        axios.post(`${import.meta.env.VITE_SERVER}/login`, loginData)
            .then(res => {
                console.log(res.data);
                const { token, user } = res.data;
                console.log(token);
                console.log(user);
                // Save the token and user details in localStorage
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/profile');

            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <Layout>
            <div className="flex justify-center items-center">
                <div className=" md:basis-4/6 lg:basis-2/3 xl:basis-1/2 basis-5/6 p-2 flex items-center justify-center ">
                    <div className="w-full bg-blue-200/60 shadow-md rounded-md p-4 md:pl-12 md:py-4">
                        <h1 className='text-2xl md:text-4xl font-semibold'>Get Started Now</h1>
                        <form onSubmit={handleSubmit} className='flex flex-col  md:w-10/12 py-2'>
                            {
                                inputFileds.map((input) => (
                                    <div className="flex flex-col my-2">
                                        <label htmlFor={input.name} className='text-xl mb-2 capitalize'>{input.name}</label>
                                        <input required
                                            value={loginData[input.name]}
                                            onChange={handleChange}
                                            type={input.type} name={input.name} id={input.name} className='py-2 px-4 rounded-md border-2 border-gray-400 focus:border-blue-400 focus:outline-none' />
                                    </div>
                                ))
                            }
                            <div>

                                <input type="submit" className="bg-blue-400 text-white p-2 rounded-md shadow-sm" value="Login" />
                            </div>
                        </form>

                        <div className='text-center'>
                            <p className='md:text-xl'> Don't have an account? <Link to="/register" className='underline text-blue-700'>register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login