import React, { useState } from 'react'
import DasboardLayout from '../../components/DashboardLayout'

const Project = () => {
    const [project, setProject] = useState({
        projectName: '',
        assocaited: '',
        startDate: '',
        endDate: '',
        description: '',
        currentlyworking: false
    })

    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }
    return (
        <DasboardLayout>
            <div className="flex flex-col px-2 md:px-4 lg:px-12">
                <h1 className='text-4xl'>Skills</h1>
                <div className="flex flex-col-reverse md:flex-col">
                    <form

                        className='bg-white p-2 md:p-4 rounded-md shadow-md my-4 '
                    >
                        <div className="flex flex-col md:flex-row">
                            <div className='flex flex-col basis-1/2 m-2'>
                                <label htmlFor="projectName" className='text-2xl font-semibold' >Project Name</label>
                                <input type="text" name="projectName" id="projectName" value={project.projectName}
                                    className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                    placeholder='TODO App' onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='flex flex-col basis-1/2 m-2'>
                                <label htmlFor="assocaited" className='text-2xl font-semibold' >Associated With</label>
                                <input type="text" name="assocaited" id="assocaited" value={project.assocaited}
                                    className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                    placeholder='G Hosting, Patna'
                                />

                            </div>
                        </div>



                        <div className="flex flex-col md:flex-row">
                            <div className='flex flex-col basis-1/2 m-2'>
                                <label htmlFor="startDate" className='text-2xl font-semibold' >Start Date</label>
                                <input type="month" name="startDate" id="startDate" value={project.startDate}
                                    className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                    required onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col basis-1/2 m-2'>
                                <label htmlFor="endDate" className='text-2xl font-semibold' >End Date</label>
                                <input type="month" name="endDate" id="endDate" value={project.endDate}
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
                                    checked={project.currentlyWorking}
                                    onChange={() => setProject({ ...project, currentlyWorking: !project.currentlyWorking })}
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
                                value={project.description}
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

                    <div className="flex flex-col">



                    </div>
                </div>

            </div>



        </DasboardLayout>
    )
}

export default Project