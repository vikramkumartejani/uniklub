'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const SignInPopup = ({ isOpen, onClose }) => {
   // Use useEffect to add event listener when the popup is open
   useEffect(() => {
    const handleOutsideClick = (e) => {
        // Check if the click is outside the sign-in popup
        if (isOpen && !e.target.closest('.sign-in-popup-bg')) {
            onClose(); // Close the popup
        }
    };

    // Add event listener when the popup is open
    if (isOpen) {
        document.addEventListener('mousedown', handleOutsideClick);
    }

    // Clean up event listener when the component unmounts or the popup closes
    return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
    };
}, [isOpen, onClose]);

if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="sign-in-popup-bg text-white w-full max-w-[1027px] py-[21px] border-[2.15px] border-white grid md:grid-cols-2 grid-cols-1 mx-[10px]">
                <div className='mt-[21px] flex items-center justify-center flex-col'>
                    <h3 className='text-[24px] leading-[24px] font-medium tracking-[-0.01em]'>Sign in to your account</h3>
                    <h3 className='text-[16px] leading-[24px] font-normal tracking-[-0.01em] mt-[8px]'>to continue to UniKlub</h3>
                    <button className='flex items-center gap-[5px] justify-center mt-[43px] border-[0.8px] border-white rounded-[9.55px] w-[182px] h-[37.4px] text-[12.73px] leading-[19.1px] font-normal'>
                        <Image src='/assets/google-icon.svg' alt='Logo Google' width={17} height={17} />
                        Continue with google</button>
                    <div className='flex items-center justify-center w-full px-[50px] gap-[7px] mt-[26px] mb-[55px]'>
                        <div className='max-w-[179px] w-full h-[1.2px] bg-white'></div>
                        <span className='text-[13.86px] leading-[20.79px] font-normal'>or</span>
                        <div className='max-w-[179px] w-full h-[1.2px] bg-white'></div>
                    </div>
                    {/* Inputs */}
                    <div className='flex flex-col mb-[25px] w-full max-w-[389px]'>
                        <label className='text-[12px] leading-[24px] font-semibold tracking-[-0.01em]'>Email adress</label>
                        <input type='text' className='bg-transparent border-[0.8px] border-white rounded-lg h-[37.4px] outline-none px-2' />
                    </div>
                    <div className='flex flex-col w-full max-w-[389px]'>
                        <label className='text-[12px] leading-[24px] font-semibold tracking-[-0.01em]'> Password</label>
                        <input type='text' className='bg-transparent border-[0.8px] border-white rounded-lg h-[37.4px] outline-none px-2' />
                    </div>
                    {/* Button Conti... */}
                    <button className='mt-[97.6px] mb-[20px] max-w-[389px] w-full h-[37.4px] bg-[#0019FD] rounded-[8px] text-[12px] leading-[24px] font-semibold'>CONTINUE</button>
                </div>
                {/* Right Side */}
                <div className='border-l-[2px] border-white flex items-center justify-center flex-col'>
                    <Image src='/assets/Logo.svg' alt='Logo' width={247} height={59.65} className='mt-[204px]'/>
                    <p className='mt-[26.35px] text-[14px] font-normal leading-[16.94px]'>Streamline your revenue tracking process like never before.</p>
                    <div className='flex items-center gap-[3px] mt-[224px]'>
                        <p className='text-[18px] leading-[27px] font-semibold tracking-[0.02em]'>Don’t have an account? </p>
                        <Link href='' className='text-[#0019FD] text-[18px] leading-[27px] font-semibold tracking-[0.02em]'> Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPopup;
