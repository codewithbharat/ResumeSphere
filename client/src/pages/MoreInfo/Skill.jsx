import React, { useState } from 'react'
import DasboardLayout from '../../components/DashboardLayout'

const Skill = () => {

    const [skill, setSkill] = useState({
        skill: '',
        proficiency: ''
    })
    return (
        <DasboardLayout>
            <div className="flex flex-col px-2 md:px-4 lg:px-12">
                <h1 className='text-4xl'>Skills</h1>
                <div className="flex flex-col-reverse md:flex-col">
                    <form

                        className='bg-white p-2 md:p-4 rounded-md shadow-md my-4 '
                    >
                        <div className="flex flex-col md:flex-row">
                            <div className="basis-1/3">
                                <div className="flex flex-col">
                                    <div className='flex flex-col basis-1/2 m-2'>
                                        <label htmlFor="skill" className='text-2xl font-semibold' >Skill</label>
                                        <input type="text" name="skill" id="skill" value={skill.skill}
                                            className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                            placeholder='ReactJS'
                                            required
                                        />
                                    </div>
                                    <div className='flex flex-col basis-1/2 m-2'>
                                        <label htmlFor="proficiency" className='text-2xl font-semibold'>Proficiency</label>
                                        <select
                                            name="proficiency"
                                            id="proficiency"
                                            value={skill.proficiency}
                                            className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                            required
                                        >
                                            <option value="" disabled>Select...</option>
                                            <option value="beginner">Beginner</option>
                                            <option value="intermediate">Intermediate</option>
                                            <option value="advanced">Advanced</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
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

                        {/* skillsData */}

                    </div>
                </div>

            </div>
        </DasboardLayout>
    )
}

export default Skill