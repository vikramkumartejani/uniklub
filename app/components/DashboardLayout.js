"use client"
import React, { useState } from 'react'
import DashboardSideBar from './DashboardSideBar'
import DashboardNavbar from './DashboardNavbar'

const DashboardLayout = ({ children }) => {
    const [open, setOpen] = useState(false)

    const toggleSidebar = () => {
        setOpen(!open)
    }
    return (
        <main className='dashboard-home-bg'>
            <DashboardNavbar toggleSidebar={toggleSidebar} />
            <div className='flex'>
                {/* <div className='md:block hidden h-full'> */}
                    <DashboardSideBar isOpen={open} />
                {/* </div> */}
                <div className='w-full'>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default DashboardLayout