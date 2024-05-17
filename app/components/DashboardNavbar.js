'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Link from 'next/link';
import DashboardSideBar from './DashboardSideBar';
import { RiMenuFill } from "react-icons/ri";


const DashboardNavbar = () => {
    // Menu Mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Popup
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const popupRef = useRef(null);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setIsPopupOpen(false);
        }
    };

    useEffect(() => {
        if (isPopupOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isPopupOpen]);

    return (
        <div className="bg-[#000B3399] h-full">
            <div className="container">
                <div className="py-[25px] mx-[10px] md:mx-[30px] flex justify-between items-center">
                    <Image src="/assets/Logo.svg" alt="Logo" width={183} height={44.19} />
                    <div className='flex gap-[10px] items-center'>
                        <button className="bg-color-ss h-[30px] w-[30px] rounded-full text-white text-[12px] leading-[24px] font-semibold" onClick={togglePopup}>SS</button>
                        <button onClick={toggleMenu} className='md:hidden flex bg-color-ss text-white rounded-full w-[30px] h-[30px] items-center justify-center'><RiMenuFill className='w-[20px] h-[20px]' /></button>
                    </div>
                </div>
                {isMenuOpen &&
                    <div className='absolute top-[96px] bg-[#000B33]  text-white right-0 z-50 w-full shadow-white shadow-lg transform -translate-y-1'>
                        <div className='flex flex-col gap-[20px] my-[15px] px-[23px]'>
                            <Link href='/' className='w-[262px] h-[52px] rounded-[14px] py-[14px] pl-[12px] text-[15px] leading-[24px] font-semibold flex items-center gap-[12px] border border-[#FFFFFFB5]'>
                                <Image src='/assets/homeicon.svg' alt='Logo' width={24} height={24} /> Home
                            </Link>
                            <Link href='/revenue' className='w-[262px] h-[52px] rounded-[14px] py-[14px] pl-[12px] text-[15px] leading-[24px] font-semibold flex items-center gap-[12px] border border-[#FFFFFFB5]'>
                                <Image src='/assets/homeicon.svg' alt='Logo' width={24} height={24} /> Revenue
                            </Link>
                            <Link href='/verticals' className='w-[262px] h-[52px] rounded-[14px] py-[14px] pl-[12px] text-[15px] leading-[24px] font-semibold flex items-center gap-[12px] border border-[#FFFFFFB5]'>
                                <Image src='/assets/homeicon.svg' alt='Logo' width={24} height={24} /> Verticals
                            </Link>
                            <Link href='/connect' className='w-[262px] h-[52px] rounded-[14px] py-[14px] pl-[12px] text-[15px] leading-[24px] font-semibold flex items-center gap-[12px] border border-[#FFFFFFB5]'>
                                <Image src='/assets/homeicon.svg' alt='Logo' width={24} height={24} /> Connect
                            </Link>
                        </div>
                    </div>
                }
            </div>
            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div ref={popupRef} className="sign-in-popup-bg border-[2.15px] border-white w-[454px] h-[243px] mx-[10px]">
                        <div className="flex items-center gap-[20px] mt-[21px]">
                            <div className="bg-ss w-[64px] h-[55px] rounded-[22.5px] ml-[30px]">
                                <h2 className="text-white h-full flex items-center justify-center text-[18px] leading-[24px] font-medium">SS</h2>
                            </div>
                            <div className="w-[171px] text-white">
                                <h3 className="text-[14px] font-semibold leading-[24px] tracking-[-0.01em]">Stephen Scherer</h3>
                                <span className="text-[12px]">Stephen@uniklub.com</span>
                            </div>
                        </div>
                        <div className="ml-[40px] mt-[87px] flex items-center gap-[25px]">
                            <Image src="/assets/Arrow 2.png" alt="Logo" width={34} height={20} />
                            <Link href="/signin" className="text-white text-[18px] leading-[24px] font-medium">
                                Sign Out
                            </Link>
                        </div>
                        <div className="text-white flex items-center gap-[33px] justify-end mt-[15px] mr-[40px]">
                            <Link href="/termsofservice" className="font-semibold text-[12px] leading-[24px] tracking-[-0.01em]">
                                Terms
                            </Link>
                            <Link href="/privacypolicy" className="font-semibold text-[12px] leading-[24px] tracking-[-0.01em]">
                                Privacy
                            </Link>
                        </div>
                    </div>
                </div>
            )}



        </div>
    );
};

export default DashboardNavbar;
