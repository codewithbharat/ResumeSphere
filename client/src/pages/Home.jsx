import React from 'react'
import Layout from '../components/Layout'
import heroImg from './assets/home_hero.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Layout>
            <div className="flex flex-col">
                <div className="flex w-full h-[700px]">
                    <div className=" hero flex flex-col-reverse items-center md:flex-row">
                        <div className="basis-1/2 flex justify-center items-center">
                            <img src={heroImg} alt="Hero" className='md:w-5/6 md:h-5/6 drop-shadow-md shadow-black' />
                        </div>
                        <div className="basis-1/2 flex flex-col items-center md:items-start justify-center w-5/6 md:w-2/3">
                            <h1 className="text-4xl md:text-5xl font-bold">"Craft Your Success with the Ultimate Resume Builder!"</h1>
                            <p className="py-2 text-xl tracking-wider md:w-5/6 md:text-2xl">Your Gateway to Standout Resumes: Simple, Smart, and Stylish.</p>
                            <div className='my-4 flex w-full justify-start'>
                                <Link to="/register" className=' bg-blue-300 p-3.5 text-white shadow-lg  rounded-md'>Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full h-[600px] bg-blue-200"></div>
            </div>
        </Layout>
    )
}

export default Home