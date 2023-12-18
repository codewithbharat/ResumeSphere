import React from 'react'
import Layout from '../components/Layout'
import heroImg from './assets/home_hero.png'
import { Link } from 'react-router-dom'
import { FaFileAlt, FaListAlt, FaUser, FaUserPlus, FaFileSignature, FaDownload } from 'react-icons/fa';

const Home = () => {
    const keyFeatures = [
        {
            name: 'Free Templates',
            description: 'Access a variety of professionally designed templates at no cost.',
            icon: <FaFileAlt />,
        },
        {
            name: 'User Friendly',
            description: 'Create your resume in minutes with our easy-to-use interface.',
            icon: <FaUser />,
        },
        {
            name: 'Download as PDF',
            description: 'Download your resume as a PDF and start applying for jobs!',
            icon: <FaDownload />,
        },
    ];


    const RenderKeyFeatures = () => {
        return keyFeatures.map((feature) => {
            return (
                <div className="bg-white flex flex-col items-center justify-center my-4 w-80 h-80 p-4 rounded-lg shadow-lg">
                    <span className='text-5xl p-2'>
                        {feature.icon}
                    </span>
                    <p className='text-2xl text-semibold text-center'>{feature.name}</p>
                    <p className='p-4 text-md text-center font-light'>{feature.description}</p>
                </div>
            )
        })
    }

    const HeroSection = () => {
        return (
            <div className="hero flex flex-col-reverse items-center md:flex-row">
                <div className="basis-1/2 flex justify-center items-center">
                    <img src={heroImg} alt="Hero" className='md:w-5/6 md:h-5/6' />
                </div>
                <div className="basis-1/2 flex flex-col items-center md:items-start justify-center w-5/6 md:w-2/3">
                    <h1 className="text-4xl md:text-5xl font-bold">"Craft Your Success with the Ultimate Resume Builder!"</h1>
                    <p className="py-2 text-xl tracking-wider md:w-5/6 md:text-2xl">Your Gateway to Standout Resumes: Simple, Smart, and Stylish.</p>
                    <div className='my-4 flex w-full justify-start'>
                        <Link to="/register" className=' bg-blue-400 p-3.5 text-lg text-white shadow-lg font-semibold  rounded-md'>Get Started</Link>
                    </div>
                </div>
            </div>
        )
    }

    const resumeBuilderSteps = [
        {
            name: 'Sign Up',
            icon: <FaUserPlus />,
        },
        {
            name: 'Fill Your Details',
            icon: <FaListAlt />,
        },
        {
            name: 'Choose a Template',
            icon: <FaFileSignature />,
        },
        {
            name: 'Download Your Resume',
            icon: <FaDownload />,
        },
    ];

    const RenderResumeBuilder = () => {
        return (
            resumeBuilderSteps.map((step) => (
                <div className="flex flex-col m-4 w-40 h-40 justify-center items-center rounded-full shadow-md shadow-slate-800/20 bg-white">
                    <span className='text-4xl'>
                        {step.icon}
                    </span>
                    <p className=' font-light text-center p-2'>{step.name}</p>
                </div>
            ))
        )
    }


    return (
        <Layout>
            <div className="flex w-full py-10 h-fit lg:h-[700px]">
                <HeroSection />
            </div>
            <div className="keyFeatures px-12 py-20 w-full h-fit bg-blue-300">
                <h2 className='text-center w-full text-4xl drop-shadow-lg text-white md:text-6xl md:p-8 font-semibold'>Key Features</h2>
                <div className="flex flex-row justify-around flex-wrap">
                    <RenderKeyFeatures />
                </div>
            </div>
            <div className="how-it-works md:px-12 md:py-20  md:m-32 md:rounded-lg shadow-md h-fit bg-yellow-500/70 text-gray-600">
                <h2 className='text-center w-full text-5xl md:text-6xl drop-shadow-md p-8 font-bold capitalize text-white'>how it works</h2>
                <div className="flex flex-col lg:flex-row items-center md:justify-around md:px-12">
                    <RenderResumeBuilder />
                </div>
            </div>
        </Layout>
    )
}

export default Home