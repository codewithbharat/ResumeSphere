import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const Register = () => {
    const inputFileds = [
        {
            name: 'Name',
            type: 'text'
        },
        {
            name: 'Email',
            type: 'email'
        },
        {
            name: 'Password',
            type: 'password'
        }
    ]
    return (
        <Layout>
            <div className="flex justify-center items-center">
                <div className=" md:basis-4/6 lg:basis-2/3 xl:basis-1/2 basis-5/6 p-2 flex items-center justify-center ">
                    <div className="w-full bg-blue-200/60 shadow-md rounded-md p-4 md:pl-12 md:py-4">
                        <h1 className='text-2xl md:text-4xl font-semibold'>Get Started Now</h1>
                        <form className='flex flex-col  md:w-10/12 py-2'>
                            {
                                inputFileds.map((input) => (
                                    <div className="flex flex-col my-2">
                                        <label htmlFor={input.name} className='text-xl mb-2'>{input.name}</label>
                                        <input required type={input.type} name={input.name} id={input.name} className='py-2 px-4 rounded-md border-2 border-gray-400 focus:border-blue-400 focus:outline-none' />
                                    </div>
                                ))
                            }
                            <div>
                                <div className='pb-2 md:text-xl'>
                                    <input required type="checkbox" name="terms" id="terms" className='mr-2' />
                                    <label htmlFor="terms">I agree to <Link to="/terms" className=' underline text-blue-700'>terms&policy</Link> </label>
                                </div>
                                <input type="submit" className="bg-blue-400 text-white p-2 rounded-md shadow-sm" value="Register" />
                            </div>
                        </form>

                        <div className='text-center'>
                            <p className='md:text-xl'>Already have an account? <Link to="/login" className='underline text-blue-700'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Register