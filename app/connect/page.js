'use client'
import React,  { useState, useRef, useEffect }   from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Image from 'next/image';
import Link from 'next/link';

const Connect = () => {
    const connectitems = [
        {
            id: '1',
            img: '/assets/instagram.svg',
            title: "Instagram",
        },
        {
            id: '2',
            img: '/assets/tiktok.svg',
            title: "TikTok",
        },
        {
            id: '3',
            img: '/assets/youtube.svg',
            title: "YouTube",
        },
        {
            id: '4',
            img: '/assets/twitch.svg',
            title: "Twitch",
        },
        {
            id: '5',
            img: '/assets/amazon.svg',
            title: "Amazon Associates",
        },
        {
            id: '6',
            img: '/assets/onlyfans.svg',
            title: "Onlyfans",
        },
        {
            id: '7',
            img: '/assets/ltk.svg',
            title: "LTK",
        },
        {
            id: '8',
            img: '/assets/snapchat.svg',
            title: "Snapchat",
        },
        {
            id: '9',
            img: '/assets/backstage.svg',
            title: "Backstage",
        },
        {
            id: '11',
            img: '/assets/meta.svg',
            title: "Meta",
        },
        {
            id: '12',
            img: '/assets/pinterest.svg',
            title: "Pinterest",
        },
        {
            id: '13',
            img: '/assets/revolve.svg',
            title: "Revolve",
        },
        {
            id: '14',
            img: '/assets/twitter.svg',
            title: "Twitter",
        },
        {
            id: '15',
            img: '/assets/shopify.svg',
            title: "Shopify",
        },
        {
            id: '16',
            img: '/assets/kick.svg',
            title: "Kick",
        },
        {
            id: '17',
            img: '/assets/grin.svg',
            title: "GRIN",
        },
    ];

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const popupRef = useRef(null);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsPopupOpen(false);
            }
        };

        if (isPopupOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isPopupOpen]);

    return (
        <DashboardLayout>
            <div className='mx-[10px] md:mx-[17px] mt-[47px] text-white'>
                <h1 className='text-[35.31px] leading-[35.31px] tracking-[-0.01em] font-semibold mb-[47px] sm:mb-[80px]'>Connect</h1>
                <div className='rounded-[20px] w-full max-w-[1085px] border border-white py-[38px] mb-[40px] px-[10px] md:px-[27px] bg-[#170C42]'>
                    <div className='grid xl:grid-cols-2 grid-cols-1 gap-[32px] w-full'>
                        {connectitems.map((item) => (
                            <div key={item.id} className="bg-[#0000004D] w-full rounded-[12px] xl:max-w-[496px] h-[80px] sm:h-[105px] flex items-center">
                                <div className="flex items-center justify-between ml-[19px] w-full">
                                    <div className='flex items-center gap-[18px] '>
                                        <Image src={item.img} alt='Logos' width={72} height={72} className='sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]' />
                                        <span className="sm:text-[24px] text-[18px] leading-[29.05px] font-semibold">{item.title}</span>
                                    </div>
                                    <button className='bg-[#3A5AFE] rounded-[10px] w-[95px] h-[41px] mr-[12px]'>Add+</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Request Links */}
                <div className='flex gap-[50px] sm:ml-[27px] pb-[50px] sm:pb-[110px]'>
                    <h3 className='sm:text-[22.5px] text-[18px] leading-[27.23px] font-semibold text-white'>Vertical not there?</h3>
                    <button onClick={togglePopup} className='sm:text-[22.5px] text-[18px] leading-[27.23px] font-semibold text-white underline underline-offset-8'>Request One</button>
                </div>
                {/* Vertical Request Pop Up */}
                {isPopupOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                        <div ref={popupRef} className="sign-in-popup-bg border-[2.15px] border-white max-w-[489px] w-full flex items-center justify-center flex-col p-8 mx-[10px]">
                            <img src='/assets/Logo.svg' alt='Logo' width={278} height={65.65} className='mt-[58px]' />
                            <p className='py-[43px] text-[24px] leading-[24px] tracking-[-0.01em] font-medium'>Vertical Request</p>
                            <div className='flex flex-col mb-[42px] w-full max-w-[389px]'>
                                <label className='text-[12px] leading-[24px] font-semibold tracking-[-0.01em]'>Company</label>
                                <input type='text' className='bg-transparent border-[0.8px] border-white rounded-lg h-[37.4px] outline-none px-2' />
                            </div>
                            <div className='flex flex-col mb-[43px] w-full max-w-[389px]'>
                                <label className='text-[12px] leading-[24px] font-semibold tracking-[-0.01em]'>Website</label>
                                <input type='text' className='bg-transparent border-[0.8px] border-white rounded-lg h-[37.4px] outline-none px-2' />
                            </div>
                            <button className='bg-[#0019FD] rounded-lg w-full max-w-[389px] h-[37.4px] text-[12px] leading-[24px] font-semibold mb-[58px] tracking-[-0.01em]'>Request</button>
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default Connect;
