import React, { useState } from 'react'

const CompleteRegistration = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        jobTitle: '',
        phone: '',
        address: '',
    });

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };


    const personalInfoFields = [
        {
            name: 'Full Name',
            type: 'text',
            placeholder: 'John Doe',
            key: 'fullName',
        },

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
            placeholder: '123 Main St',
            key: 'address',
        },

    ]

    const educationInfoFields = [
        {
            name: 'College Name',
            type: 'text',
            placeholder: 'Harvard University',
            key: 'collegeName',
        },

        {
            name: 'Degree',
            type: 'text',
            placeholder: 'Bachelor of Science',
            key: 'degree',
        },

        {
            name: 'Field of Study',
            type: 'text',
            placeholder: 'Computer Science',
            key: 'fieldOfStudy',
        },

        {
            name: 'From',
            type: 'date',
            placeholder: '01-01-2000',
            key: 'from',
        },

        {
            name: 'To',
            type: 'date',
            placeholder: '01-01-2004',
            key: 'to',
        },

        {
            name: 'Description',
            type: 'text',
            placeholder: 'Description',
            key: 'description',
        },
    ]

    const exprienceInfoFields = [
        {
            name: 'Company Name',
            type: 'text',
            placeholder: 'Google',
            key: 'companyName',
        },

        {
            name: 'Job Title',
            type: 'text',
            placeholder: 'Software Engineer',
            key: 'jobTitle',
        },

        {
            name: 'Location',
            type: 'text',
            placeholder: 'Mountain View, CA',
            key: 'location',
        },

        {
            name: 'From',
            type: 'date',
            placeholder: '01-01-2000',
            key: 'from',
        },

        {
            name: 'To',
            type: 'date',
            placeholder: '01-01-2004',
            key: 'to',
        },

        {
            name: 'Description',
            type: 'text',
            placeholder: 'Description',
            key: 'description',
        },
    ]

    const skillsInfoFields = [
        {
            name: 'Skill',
            type: 'text',
            placeholder: 'JavaScript',
            key: 'skill',
        },

        {
            name: 'Level',
            type: 'text',
            placeholder: 'Intermediate',
            key: 'level',
        },

        {
            name: 'Years',
            type: 'number',
            placeholder: '3',
        }
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
            placeholder: 'github.com/username',
            key: 'github',
        }
    ]

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
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
                        <div className="step-2">
                            <h2 className="text-4xl font-semibold">Education Info</h2>
                            <div className="input-group flex flex-col my-8">
                                <div className="step-content">
                                    {educationInfoFields.map((info) => (
                                        <div className="flex  flex-col my-4" key={info.name}>
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

                    {/* step 3 */}

                    {step === 3 && (
                        <div className="step-3">
                            <h2 className="text-4xl font-semibold">Experience <span className='font-normal'>{'(Optional)'}</span></h2>
                            <div className="input-group flex flex-col my-8">
                                <div className="step-content">
                                    {
                                        exprienceInfoFields.map((info) => (
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



                    {/* step-4  */}

                    {step === 4 && (
                        <div className="step-4">
                            <h2 className="text-4xl font-semibold">Skills <span className='font-normal'>{'(Optional)'}</span></h2>
                            <div className="input-group flex flex-col my-8">
                                <div className="step-content">
                                    {
                                        skillsInfoFields.map((info) => (
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
                        {step !== 4 && (
                            <button
                                onClick={nextStep}
                                className="bg-gray-500 font-semibold p-1 rounded-md shadow-lg cursor-pointer hover:shadow-black/20 hover:shadow-inner text-white w-10"
                            >
                                {'>'}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>

    )
}

export default CompleteRegistration