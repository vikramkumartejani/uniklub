'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import SignInPopup from './SignInPopup';
import Link from 'next/link';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='bg-[#000B3399] w-full'>
            <div className='max-w-[1440px] w-full mx-auto'>
                <div className='container py-[25px] pl-[10px] sm:pl-[20px] flex justify-between items-center'>
                    <Link href='/'>
                    <Image src='/assets/Logo.svg' alt='Logo' width={183} height={44} />
                    </Link>
                    <button onClick={openModal} className='flex items-center justify-center text-white gap-[5px] text-[12.47px] leading-[13.04px] tracking-[-0.01em] font-semibold bg-[#344BFD] rounded-[11.34px] w-[106px] h-[34px] mr-[10px] sm:mr-[44px]'>
                        <Image src='/assets/user.svg' alt='Logo user' width={24} height={24} />
                        Sign In
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <SignInPopup onClose={closeModal} />
            )}
        </div>
    )
}

export default Navbar