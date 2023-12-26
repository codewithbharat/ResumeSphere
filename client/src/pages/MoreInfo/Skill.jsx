import React, { useEffect, useState } from 'react'
import DasboardLayout from '../../components/DashboardLayout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Skill = () => {

    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')

    const navigate = useNavigate();

    const [skillsData, setSkillsData] = useState([]);

    const [skill, setSkill] = useState({
        skill: '',
        proficiency: ''
    })

    const getUserData = () => {
        axios.get(`${import.meta.env.VITE_SERVER}/${user._id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                const { user } = res.data;
                localStorage.setItem('user', JSON.stringify(user));
                setSkillsData(user.skill);
                console.log(user.skill);
            }
            )

            .catch(err => {
                console.log(err);
            })
    }


    useEffect(() => {
        if (token) {
            getUserData();
        } else {
            navigate('/login');
        }
    }, [])


    const handleChange = (e) => {
        setSkill({ ...skill, [e.target.name]: e.target.value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_SERVER}/${user._id}/skill`, skill, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            const { message } = res.data;
            console.log(message);

            // get user data again
            getUserData();

            // clear form
            setSkill({
                skill: '',
                proficiency: ''
            })
        }).catch((err) => {
            console.log(err);
        })


    }

    const handleNextButton = () => {
        if (skill.skill !== '') {
            axios.post(`${import.meta.env.VITE_SERVER}/${user._id}/skill`, skill, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                const { message } = res.data;
                console.log(message);

                // get user data again
                getUserData();

                navigate('/dashboard/projects');
            }).catch((err) => {
                console.log(err);
            })
        }

        navigate('/dashboard/projects')
    }

    const deleteSkill = (skill_id) => {
        axios.delete(`${import.meta.env.VITE_SERVER}/${user._id}/skill/${skill_id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                const { message } = res.data;
                console.log(message);

                // get user data again
                getUserData();

            }
            )
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <DasboardLayout>
            <div className="flex flex-col px-2 md:px-4 lg:px-12">
                <h1 className='text-4xl'>Skills</h1>
                <div className="flex flex-col-reverse md:flex-col">
                    <form
                        onSubmit={handleSubmit}
                        className='bg-white p-2 md:p-4 rounded-md shadow-md my-4 '
                    >
                        <div className="flex flex-col md:flex-row">
                            <div className="basis-1/3">
                                <div className="flex flex-col">
                                    <div className='flex flex-col basis-1/2 m-2'>
                                        <label htmlFor="skill" className='text-2xl font-semibold' >Skill</label>
                                        <input type="text" name="skill" id="skill" value={skill.skill}
                                            className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                            placeholder='ReactJS' onChange={handleChange}
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
                                            required onChange={handleChange}
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
                                type='button'
                                onClick={handleNextButton}
                                className='bg-indigo-500 cursor-pointer text-white rounded-md px-4 py-2 my-2 text-xl'

                            >
                                Next Section &#8594;
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-col md:flex-row md:flex-wrap">
                        {skillsData && skillsData.toReversed().map((skill, index) => (
                            <div key={index} className='bg-white p-2 md:p-4 rounded-md shadow-md m-4'>
                                <div className="flex flex-col">
                                    <p className='text-2xl font-bold'>{skill.skill} <span className='font-normal'>- {skill.proficiency}</span></p>
                                    {/* Add more details here if needed */}
                                </div>

                                {/* Delete button */}
                                <button
                                    onClick={() => deleteSkill(skill._id)} // Replace with your actual delete function
                                    className='bg-red-500 cursor-pointer text-white rounded-md px-4 py-2 mt-6 text-xl'
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </DasboardLayout>
    )
}

export default Skill