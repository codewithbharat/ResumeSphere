import React from 'react'
import Layout from '../components/Layout'
import heroImg from './assets/home_hero.png'
import { Link } from 'react-router-dom'

const Home = () => {
    const keyFeatures = [
        {
            name: 'Free Templates',
            description: 'Access a variety of professionally designed templates at no cost.',
        },
        {
            name: 'User Friendly',
            description: 'Create your resume in minutes with our easy to use interface.',
        },
        {
            name: 'Download as PDF',
            description: 'Download your resume as a PDF and start applying for jobs!',
        },
    ]

    const RenderKeyFeatures = () => {
        return keyFeatures.map((feature) => {
            return (
                <div className="bg-white flex flex-col items-center justify-center my-4 w-80 h-80 p-4 rounded-lg shadow-lg">
                    <p className='text-2xl text-semibold text-center'>{feature.name}</p>
                    <p className='p-4 text-md text-center'>{feature.description}</p>
                </div>
            )
        })
    }

    return (
        <Layout>
            <div className="flex w-full h-[700px]">
                <div className="hero flex flex-col-reverse items-center md:flex-row">
                    <div className="basis-1/2 flex justify-center items-center">
                        <img src={heroImg} alt="Hero" className='md:w-5/6 md:h-5/6' />
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
            <div className="keyFeatures p-12 w-full h-fit bg-blue-100">
                <h2 className='text-center w-full text-4xl p-8 font-semibold'>Key Features</h2>
                <div className="flex flex-row justify-around flex-wrap">
                    <RenderKeyFeatures />
                </div>
            </div>
        </Layout>
    )
}

export default Home