import React, { useState } from 'react'
import DasboardLayout from '../../components/DashboardLayout'


const Experience = () => {

    const [experienceData, setExperienceData] = useState([]);
    const [experience, setExperience] = useState({
        companyName: '',
        position: '',
        location: '',
        locationType: '',
        startDate: '',
        endDate: '',
        description: '',
        currentlyWorking: false,
    });

    const handleChange = (e) => {
        setExperience({ ...experience, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(experience);
    }

    return (
        <DasboardLayout>
            <div className="flex flex-col px-2 md:px-4 lg:px-12">
                <h1 className='text-4xl'>Education</h1>
                <div className="flex flex-col-reverse md:flex-col">
                    <form
                        onSubmit={handleSubmit}
                        className='bg-white p-2 md:p-4 rounded-md shadow-md my-4 '
                    >
                        <div className="flex flex-col md:flex-row">
                            <div className='flex flex-col basis-1/2 m-2'>
                                <label htmlFor="companyName" className='text-2xl font-semibold' >Company Name</label>
                                <input type="text" name="companyName" id="companyName" value={experience.companyName}
                                    className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                    placeholder='Google' onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='flex flex-col basis-1/2 m-2'>
                                <label htmlFor="position" className='text-2xl font-semibold' >Position</label>
                                <input type="text" name="position" id="position" value={experience.position}
                                    className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                    placeholder='Software Engineer' onChange={handleChange}
                                    required
                                />

                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            <div className='flex flex-col basis-1/2 m-2'>
                                <label htmlFor="location" className='text-2xl font-semibold' >Location</label>
                                <input type="text" name="location" id="location" value={experience.location}
                                    className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                    placeholder='Banglore' onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='flex flex-col basis-1/2 m-2'>
                                <label htmlFor="locationType" className='text-2xl font-semibold'>Location Type</label>
                                <select
                                    name="locationType"
                                    id="locationType"
                                    value={experience.locationType}
                                    onChange={handleChange}
                                    className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                >
                                    <option value="" disabled>Select...</option>
                                    <option value="on-site">On-site</option>
                                    <option value="hybrid">Hybrid</option>
                                    <option value="remote">Remote</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            <div className='flex flex-col basis-1/2 m-2'>
                                <label htmlFor="startDate" className='text-2xl font-semibold' >Start Date</label>
                                <input type="month" name="startDate" id="startDate" value={experience.startDate}
                                    className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='flex flex-col basis-1/2 m-2'>
                                <label htmlFor="endDate" className='text-2xl font-semibold' >End Date</label>
                                <input type="month" name="endDate" id="endDate" value={experience.endDate}
                                    className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                    onChange={handleChange}
                                />

                            </div>
                        </div>

                        <div className='px-2 text-xl font-mono'>
                            <label>

                                <input
                                    name="currentlyWorking"
                                    type="checkbox"
                                    className='mr-2'
                                    checked={experience.currentlyWorking}
                                    onChange={() => setExperience({ ...experience, currentlyWorking: !experience.currentlyWorking })}
                                />
                                Currently Working
                            </label>
                        </div>

                        <div className='flex flex-col m-2'>
                            <label htmlFor="description" className='text-2xl font-semibold' >Description</label>
                            <textarea
                                name="description"
                                id="description"
                                cols="30"
                                rows="5"
                                value={experience.description}
                                onChange={handleChange}
                                className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                            ></textarea>

                        </div>

                        <div className="flex px-4 justify-between">
                            <input
                                type='submit'
                                className='bg-indigo-500 cursor-pointer text-white rounded-md px-4 py-2 my-2 text-xl'
                                value={'Add'}
                            />

                            <button

                                className='bg-indigo-500 cursor-pointer text-white rounded-md px-4 py-2 my-2 text-xl'

                            >
                                Next Section &#8594;
                            </button>
                        </div>
                    </form>
                </div>

            </div>



        </DasboardLayout>
    )
}

export default Experience