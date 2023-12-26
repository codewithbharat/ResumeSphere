import React, { useEffect, useState } from 'react'
import DasboardLayout from '../../components/DashboardLayout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Project = () => {

    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')

    const navigate = useNavigate();

    const [projectData, setProjectData] = useState([])
    const [project, setProject] = useState({
        projectName: '',
        associated: '',
        startDate: '',
        endDate: '',
        description: '',
        currentlyworking: false
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
                setProjectData(user.project);
                console.log(user.project);
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



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_SERVER}/${user._id}/project`, project, {
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
            setProject({
                projectName: '',
                associated: '',
                startDate: '',
                endDate: '',
                description: '',
                currentlyworking: false
            })
        }).catch((err) => {
            console.log(err);
        })

    }

    const handleNextButton = () => {
        if (project.projectName !== '') {
            axios.post(`${import.meta.env.VITE_SERVER}/${user._id}/project`, project, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                const { message } = res.data;
                console.log(message);

                // get user data again
                getUserData();

                navigate('/dashboard/resume')
            }).catch((err) => {
                console.log(err);
            })
        }

        navigate('/dashboard/resume')
    }

    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }


    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long' };
        return new Date(date).toLocaleDateString('en-US', options);
    };

    const deleteProject = (project_id) => {
        axios.delete(`${import.meta.env.VITE_SERVER}/${user._id}/project/${project_id}`, {
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
                <h1 className='text-4xl'>Projects</h1>
                <div className="flex flex-col-reverse md:flex-col">
                    <form
                        onSubmit={handleSubmit}
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
                                <label htmlFor="associated" className='text-2xl font-semibold' >Associated With</label>
                                <input type="text" name="associated" id="associated" value={project.associated}
                                    className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                    placeholder='G Hosting, Patna' onChange={handleChange}
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
                                onClick={handleNextButton}
                                type='button'
                                className='bg-indigo-500 cursor-pointer text-white rounded-md px-4 py-2 my-2 text-xl'

                            >
                                Next Section &#8594;
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-col">
                        {projectData && projectData.toReversed().map((project) => (
                            <div key={project._id} className='bg-white p-2 md:p-4 rounded-md shadow-md my-4'>
                                <div className="flex flex-col">
                                    <p className='text-2xl md:text-4xl font-bold'>{project.projectName} <span className='font-normal'>- {project.associated}</span></p>
                                    <p>{formatDate(project.startDate)} - {(project.currentlyworking == true) ? "present" : formatDate(project.endDate)}</p>
                                    <p>{project.description}</p>
                                </div>

                                {/* Delete button */}
                                <button
                                    onClick={() => deleteProject(project._id)}
                                    className='bg-red-500 cursor-pointer text-white rounded-md px-4 py-2 my-2 text-xl'
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

export default Project