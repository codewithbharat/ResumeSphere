import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CompleteRegistration = () => {
    const [step, setStep] = useState(1);
    const token = localStorage.getItem('token');

    const user = JSON.parse(localStorage.getItem('user'));
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        jobTitle: '',
        phone: '',
        address: '',
        linkedin: '',
        twitter: '',
        github: '',
        website: '',
    });

    useEffect(() => {
        if (!token || !user) {
            navigate('/login');
        } else {
            setFormData({
                ...formData,
                name: user.name,
                email: user.email,
                password: user.password,
            })
        }
    }, [])




    const handleChange = (e, key) => {
        setFormData({
            ...formData,
            [key]: e.target.value
        });
    }


    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };


    const personalInfoFields = [
        {
            name: 'Job Title',
            type: 'text',
            placeholder: 'Software Engineer',
            key: 'jobTitle',
        },

        {
            name: 'Phone',
            type: 'number',
            placeholder: '123-456-7890',
            key: 'phone',
        },

        {
            name: 'Address',
            type: 'text',
            placeholder: 'City, State',
            key: 'address',
        },

    ]

    const socialInfoFields = [

        {
            name: 'LinkedIn',
            type: 'text',
            placeholder: 'https://linkedin.com/username',
            key: 'linkedin',
        },

        {
            name: 'Twitter',
            type: 'text',
            placeholder: 'https://twitter.com/username',
            key: 'twitter',
        },

        {
            name: 'Github',
            type: 'text',
            placeholder: 'https://github.com/username',
            key: 'github',
        },

        {
            name: 'Website',
            type: 'text',
            placeholder: 'https://website.com',
            key: 'website',
        }
    ]

    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        axios.put(`${import.meta.env.VITE_SERVER}/update-user`, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                const { user } = res.data;
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/dashboard/basic-info');
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="flex justify-center items-center bg-slate-400/80 h-screen w-full">
            <div className="w-full md:w-4/6 lg:w-3/6 xl:w-2/6 h-fit rounded-lg shadow-lg bg-white shadow-black/20">
                <form onSubmit={handelSubmit} className="p-6 md:p-12" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    {/* step-1 */}
                    {step === 1 && (
                        <div className="step-1">
                            <h2 className="text-4xl font-semibold">Personal Info</h2>
                            <div className="input-group flex flex-col my-4">
                                <div className="step-content">
                                    {personalInfoFields.map((info) => (
                                        <div className="flex flex-col my-4" key={info.name}>
                                            <label
                                                htmlFor={info.name}
                                                className="text-xl font-semibold"
                                            >
                                                {info.name}
                                            </label>
                                            <input
                                                type={info.type}
                                                name={info.name}
                                                id={info.name}
                                                value={formData[info.key]}
                                                onChange={(e) => handleChange(e, info.key)}
                                                placeholder={info.placeholder}
                                                className="p-2 my-1 border-2 border-gray-400 rounded-md"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}



                    {/* step-2 */}

                    {step === 2 && (
                        <div className="step-5">
                            <h2 className="text-4xl font-semibold">Social</h2>
                            <div className="input-group flex flex-col my-8">
                                <div className="step-content">
                                    {
                                        socialInfoFields.map((info) => (
                                            <div className="flex flex-col my-4" key={info.name}>
                                                <label
                                                    htmlFor={info.name}
                                                    className="text-xl font-semibold"
                                                >
                                                    {info.name}
                                                </label>
                                                <input
                                                    type={info.type}
                                                    name={info.name}
                                                    id={info.name}
                                                    value={formData[info.key]}
                                                    onChange={(e) => handleChange(e, info.key)}
                                                    placeholder={info.placeholder}
                                                    className="p-2 my-1 border-2 border-gray-400 rounded-md"
                                                />
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>

                    )}


                    {/* button group */}
                    <div className="flex justify-between w-full">
                        {step !== 1 && (
                            <button
                                onClick={prevStep}
                                className="bg-gray-500 font-semibold p-1 rounded-md shadow-lg cursor-pointer hover:shadow-black/20 hover:shadow-inner text-white w-10"
                            >
                                {'<'}
                            </button>
                        )}
                        {step !== 2 && (
                            <button
                                onClick={nextStep}
                                className="bg-gray-500 font-semibold p-1 rounded-md shadow-lg cursor-pointer hover:shadow-black/20 hover:shadow-inner text-white w-10"
                            >
                                {'>'}
                            </button>
                        )}

                        {
                            step === 2 && (
                                <button
                                    type='submit'
                                    className="bg-blue-500 font-semibold p-1 rounded-md shadow-lg cursor-pointer hover:shadow-blue-700 hover:shadow-inner text-white w-20"
                                    onClick={handelSubmit}
                                >
                                    Submit
                                </button>
                            )
                        }
                    </div>
                </form>
            </div>
        </div>

    )
}

export default CompleteRegistration