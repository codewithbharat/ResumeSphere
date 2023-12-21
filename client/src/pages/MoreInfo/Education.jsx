import React, { useEffect, useState } from 'react'
import DasboardLayout from '../../components/DashboardLayout'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Education = () => {

    const navigate = useNavigate();
    // Get user data from local storage and parse it into an object
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    const [institute, setInstitute] = useState({
        instName: '',
        course: '',
        degree: '',
        grade: '',
        startDate: '',
        endDate: ''

    })
    const [educationData, setEducationData] = useState([]);

    const getUserData = () => {
        axios.get(`${import.meta.env.VITE_SERVER}/${user._id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                const { user } = res.data;
                localStorage.setItem('user', JSON.stringify(user));
                setEducationData(user.education);
            }
            )

            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getUserData();
    }, [])


    const handleChange = (e) => {
        setInstitute({
            ...institute,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        // console.log(institute);
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_SERVER}/${user._id}/education`, institute, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            const { message } = res.data;
            console.log(message);

            // get user data again
            getUserData();
        })
            .catch(err => {
                console.log(err);
            })

        setInstitute({
            instName: '',
            course: '',
            degree: '',
            grade: '',
            startDate: '',
            endDate: ''
        })
    }


    const deleteEducation = (education_id) => {
        axios.delete(`${import.meta.env.VITE_SERVER}/${user._id}/education/${education_id}`, {
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


    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long' };
        return new Date(date).toLocaleDateString('en-US', options);
    };



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
                                <label htmlFor="instName" className='text-2xl font-semibold' >Institute</label>
                                <input type="text" name="instName" id="instName" value={institute.instName}
                                    className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                    onChange={handleChange}
                                    placeholder='harvard university'
                                    required
                                />
                            </div>
                            <div className='flex flex-col basis-1/2 m-2'>
                                <label htmlFor="degree" className='text-2xl font-semibold' >Degree</label>
                                <input type="text" name="degree" id="degree" value={institute.degree}
                                    className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                    onChange={handleChange}
                                    placeholder='B.Tech'
                                    required
                                />

                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            <div className='flex flex-col basis-1/2 m-2'>
                                <label htmlFor="course" className='text-2xl font-semibold' >Course</label>
                                <input type="text" name="course" id="course" value={institute.course}
                                    className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                    onChange={handleChange}
                                    placeholder='Computer Science'
                                    required
                                />
                            </div>
                            <div className='flex flex-col basis-1/2 m-2'>
                                <label htmlFor="grade" className='text-2xl font-semibold' >Grade</label>
                                <input type="text" name="grade" id="grade" value={institute.grade}
                                    className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                    onChange={handleChange}
                                    placeholder='9.5'
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            <div className='flex flex-col basis-1/2 m-2'>
                                <label htmlFor="startDate" className='text-2xl font-semibold' >Start Year</label>
                                <input type="month" name="startDate" id="startDate" value={institute.startDate}
                                    className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className='flex flex-col basis-1/2 m-2'>
                                <label htmlFor="endDate" className='text-2xl font-semibold' >End Year <span>{'(expected year)'}</span></label>
                                <input type="month" name="endDate" id="endDate" value={institute.endDate}
                                    className='border-2 border-indigo-300 rounded-md p-2 my-2 text-xl'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex px-4 justify-between">
                            <input
                                type='submit'
                                className='bg-indigo-500 cursor-pointer text-white rounded-md px-4 py-2 my-2 text-xl'
                                value={'Add'}
                            />

                            <button
                                onClick={() => navigate('/dashboard/experience')}
                                className='bg-indigo-500 cursor-pointer text-white rounded-md px-4 py-2 my-2 text-xl'

                            >
                                Next Section &#8594;
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-col">

                        {educationData.toReversed().map((educationItem) => (
                            <div key={educationItem._id} className='bg-white p-2 md:p-4 rounded-md shadow-md my-4'>
                                {/* <p>Institution: {educationItem.instName}</p>
                                <p>Course: {educationItem.course}</p>
                                <p>Degree: {educationItem.degree}</p>
                                <p>Grade: {educationItem.grade}</p>
                                <p>Start Date: {formatDate(educationItem.startDate)}</p>
                                <p>End Date: {formatDate(educationItem.endDate)}</p> */}

                                <div className="flex flex-col">
                                    <p className='text-2xl md:text-4xl font-bold'>{educationItem.degree} <span className='font-normal'>- {educationItem.course}</span></p>
                                    <p className='text-2xl pt-2 font-semibold'>{educationItem.instName} <span className='font-light ml-10 md:ml-20'>{`( ${educationItem.grade} CGPA )`}</span></p>
                                    <p>{formatDate(educationItem.startDate)} - {formatDate(educationItem.endDate)}</p>
                                </div>

                                {/* // delete button */}
                                <button
                                    onClick={() => deleteEducation(educationItem._id)}
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

export default Education