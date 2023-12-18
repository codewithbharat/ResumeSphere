import React from 'react'
import Layout from '../components/Layout'

const Home = () => {
    return (
        <Layout>
            <div className="flex flex-col">
                <div className="flex w-full h-[600px] bg-black"></div>
                <div className="flex w-full h-[600px] bg-blue-200"></div>
            </div>
        </Layout>
    )
}

export default Home