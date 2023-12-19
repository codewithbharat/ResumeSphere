import React, { useEffect } from 'react'
import DasboardLayout from '../components/DashboardLayout'
import { useNavigate } from 'react-router-dom'

const BasicInfo = () => {
    // Get user data from local storage and parse it into an object
    const user = JSON.parse(localStorage.getItem('user'));

    // Define the properties to display
    const userProperties = ['name', 'email', 'phone', 'address', 'jobTitle', 'github', 'linkedin', 'twitter', 'website'];

    const token = localStorage.getItem('token');

    const navigate = useNavigate();
    useEffect(() => {
        if (!token || !user) {
            navigate('/login');
        }
    }, []);


    return (
        <DasboardLayout>
            <div className="flex flex-col px-12">
                <h1 className='text-4xl'>Basic Info</h1>
                <div className='py-6'>
                    {user && userProperties.map(property => (
                        <p className='text-lg p-2' key={property}><span className='font-semibold'>{property.charAt(0).toUpperCase() + property.slice(1)}:</span> {user[property]}</p>
                    ))}
                </div>
            </div>
        </DasboardLayout>
    )
}

export default BasicInfo