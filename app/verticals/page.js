import React from 'react'
import Image from 'next/image';
import DashboardLayout from '../components/DashboardLayout'
import { FaGreaterThan } from "react-icons/fa6";


const Verticals = () => {
    const verticalsitems = [
        {
            id: '1',
            name: 'Instagram',
            category: "Social Media",
            price: "$345.6",
        },
        {
            id: '2',
            name: 'TikTok',
            category: "Social Media",
            price: "$345.6",
        },
        {
            id: '3',
            name: 'LTK',
            category: "Affiliate",
            price: "$345.6",
        },
        {
            id: '4',
            name: 'Looking’ For',
            category: "123455677795",
            price: "$345.6",
        },
        {
            id: '5',
            name: 'Looking’ For',
            category: "123455677795",
            price: "$345.6",
        },
        {
            id: '6',
            name: 'Looking’ For',
            category: "123455677795",
            price: "$345.6",
        },
        {
            id: '7',
            name: 'Looking’ For',
            category: "123455677795",
            price: "$345.6",
        },
        {
            id: '8',
            name: 'Looking’ For',
            category: "123455677795",
            price: "$345.6",
        },
        {
            id: '9',
            name: 'Looking’ For',
            category: "123455677795",
            price: "$345.6",
        },
        {
            id: '10',
            name: 'Looking’ For',
            category: "123455677795",
            price: "$345.6",
        },
        {
            id: '11',
            name: 'Looking’ For',
            category: "123455677795",
            price: "$345.6",
        },
        {
            id: '12',
            name: 'Looking’ For',
            category: "123455677795",
            price: "$345.6",
        },
        {
            id: '13',
            name: 'Looking’ For',
            category: "123455677795",
            price: "$345.6",
        },
    ];

    return (
        <DashboardLayout>
            <div className='mx-[10px] md:mx-[17px] mt-[47px] text-white '>
                <h1 className='text-[35.31px] leading-[35.31px] tracking-[-0.01em] font-semibold mb-[47px] sm:mb-[80px]'>Verticals</h1>
                <div className='mb-[30px] flex items-center gap-[5px]'>
                    <h2 className='text-[#3A5AFE] text-[19.86px] leading-[47.68px] font-semibold underline underline-offset-4 underline-custom'>Export CSV</h2>
                    <Image src='/assets/icon-coming-soon-verticals.svg' alt='Logo' width={18.75} height={25.72} />
                </div>
                <div className='rounded-[20px] w-full max-w-[1085px] border border-white py-[38px] mb-[40px] px-[15px] bg-[#170C42]'>
                    <div className='border-b border-red-600'>
                        jkdfgkj
                    </div>
                    <div className='grid grid-cols-1 gap-[40px] sm:w-full overflow-scroll'>
                        {verticalsitems.map((item) => (
                            <div key={item.id} className="min-w-[500px] overflow-scroll flex items-center">
                                <div className="flex items-center justify-between w-full">
                                    <div className='flex items-center gap-[15px]'>
                                        <Image src='/assets/verticals.svg' alt='Logos' width={38.5} height={39.3} />
                                        <span className="text-[16px] leading-[35.31px] font-semibold tracking-[-0.01em]">{item.name}</span>
                                    </div>
                                    <div className='flex items-center gap-[15px] lg:gap-[39px]'>
                                        <h2 className="text-[16px] leading-[35.31px] font-semibold tracking-[-0.01em]">{item.category}</h2>
                                        <h2 className="text-[#0019FD] text-[16px] leading-[35.31px] font-semibold tracking-[-0.01em]">{item.price}</h2>
                                        <button className='w-[20px] h-[12px] ml-[10px] lg:ml-[44px]'><FaGreaterThan /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Verticals