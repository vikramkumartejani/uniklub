import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
    return (
        <div className='bg-color min-h-svh'>
            <Navbar />
            <div className='container text-white'>
                <div className='max-w-[940px] w-full px-[10px] md:px-[20px] mx-auto'>
                    <h2 className='pt-[20px] md:pt-[66px] text-[27px] md:text-[50px] leading-[60.51px] font-semibold'>Platforms Supported</h2>
                </div>
            </div>
        </div>
    )
}

export default page