'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

const SignInPopup = ({ onClose }) => {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const openSignUpPopup = () => {
        setIsSignUpOpen(true);
    };

    const closeSignUpPopup = () => {
        setIsSignUpOpen(false);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.sign-in-popup-bg')) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            {/* Main Sign In Popup */}
            <div id='signin' className="sign-in-popup-bg popup-close text-white w-full max-w-[1027px] py-[21px] border-[2.15px] border-white grid md:grid-cols-2 grid-cols-1 mx-[10px]">
                {/* Left Side (Sign In Form) */}
                <div className="mt-[21px] flex items-center justify-center flex-col px-[15px]">
                    <h3 className="text-[24px] leading-[24px] font-medium tracking-[-0.01em]">Sign in to your account</h3>
                    <h3 className="text-[16px] leading-[24px] font-normal tracking-[-0.01em] mt-[8px]">to continue to UniKlub</h3>
                    {/* Continue with Google Button */}
                    <button className='flex items-center gap-[5px] justify-center mt-[43px] border-[0.8px] border-white rounded-[9.55px] w-[182px] h-[37.4px] text-[12.73px] leading-[19.1px] font-normal'>
                        <Image src='/assets/google-icon.svg' alt='Logo Google' width={17} height={17} />
                        Continue with google</button>
                    {/* Divider */}
                    <div className="flex items-center justify-center w-full px-[50px] gap-[7px] mt-[26px] mb-[55px]">
                        <div className="max-w-[179px] w-full h-[1.2px] bg-white"></div>
                        <span className="text-[13.86px] leading-[20.79px] font-normal">or</span>
                        <div className="max-w-[179px] w-full h-[1.2px] bg-white"></div>
                    </div>
                    {/* Email and Password Inputs */}
                    <div className="flex flex-col mb-[25px] w-full max-w-[389px]">
                        <label className="text-[12px] leading-[24px] font-semibold tracking-[-0.01em]">Email address</label>
                        <input type="text" className="bg-transparent border-[0.8px] border-white rounded-lg h-[37.4px] outline-none px-2" />
                    </div>
                    <div className="flex flex-col w-full max-w-[389px]">
                        <label className="text-[12px] leading-[24px] font-semibold tracking-[-0.01em]">Password</label>
                        <input type="password" className="bg-transparent border-[0.8px] border-white rounded-lg h-[37.4px] outline-none px-2" />
                    </div>
                    {/* Continue Button */}
                    <button className="mt-[97.6px] mb-[20px] max-w-[389px] w-full h-[37.4px] bg-[#0019FD] rounded-[8px] text-[12px] leading-[24px] font-semibold">CONTINUE</button>
                        <button className="text-[#0019FD] text-[18px] leading-[27px] font-semibold tracking-[0.02em] md:hidden block" onClick={openSignUpPopup}>Sign Up</button>
                </div>
                {/* Right Side (Sign Up Section) */}
                <div className="md:flex hidden border-l-[2px] border-white items-center justify-center flex-col pt-[204px]">
                    <Image src='/assets/Logo.svg' alt='Logo' width={247} height={59.65} className='' />
                    <p className="mt-[26.35px] text-[14px] font-normal leading-[16.94px]">Streamline your revenue tracking process like never before.</p>
                    <div className="flex items-center gap-[3px] mt-[224px]">
                        <p className="text-[18px] leading-[27px] font-semibold tracking-[0.02em]">Don’t have an account?</p>
                    </div>
                </div>
            </div>

            {/* Sign Up Popup */}
            {isSignUpOpen && (
                // Sign up popup
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="relative sign-in-popup-bg text-white w-full max-w-[1027px] py-[21px] px-[15px] border-[2.15px] border-white grid md:grid-cols-2 grid-cols-1 mx-[10px]">
                        <div className='md:mt-[21px] mt-[30px] flex items-center justify-center flex-col'>
                            <h3 className='text-[24px] leading-[24px] font-medium tracking-[-0.01em]'>Sign in to your account</h3>
                            <h3 className='text-[16px] leading-[24px] font-normal tracking-[-0.01em] mt-[8px]'>to continue to UniKlub</h3>
                            <button className='flex items-center gap-[5px] justify-center mt-[43px] border-[0.8px] border-white rounded-[9.55px] w-[182px] h-[37.4px] text-[12.73px] leading-[19.1px] font-normal'>
                                <Image src='/assets/google-icon.svg' alt='Logo Google' width={17} height={17} />
                                Continue with google</button>
                            <div className='flex items-center justify-center w-full px-[50px] gap-[7px] mt-[26px] mb-[26px]'>
                                <div className='max-w-[179px] w-full h-[1.2px] bg-white'></div>
                                <span className='text-[13.86px] leading-[20.79px] font-normal'>or</span>
                                <div className='max-w-[179px] w-full h-[1.2px] bg-white'></div>
                            </div>
                            <div className='flex flex-col md:flex-row mb-[18px] md:gap-[25px] w-full'>
                                <div className='flex flex-col mb-[16px] w-full max-w-[389px] md:max-w-[182px]'>
                                    <label className='text-[12px] leading-[24px] font-semibold tracking-[-0.01em]'>Email adress</label>
                                    <input type='text' className=' bg-transparent border-[0.8px] border-white rounded-lg h-[37.4px] outline-none px-2' />
                                </div>
                                <div className='flex flex-col w-full max-w-[389px] md:max-w-[182px]'>
                                    <label className='text-[12px] leading-[24px] font-semibold tracking-[-0.01em]'> Password</label>
                                    <input type='text' className='bg-transparent border-[0.8px] border-white rounded-lg h-[37.4px] outline-none px-2' />
                                </div>
                            </div>
                            <div className='flex flex-col mb-[16px] w-full max-w-[389px]'>
                                <label className='text-[12px] leading-[24px] font-semibold tracking-[-0.01em]'>Email adress</label>
                                <input type='text' className='bg-transparent border-[0.8px] border-white rounded-lg h-[37.4px] outline-none px-2' />
                            </div>
                            <div className='flex flex-col w-full max-w-[389px]'>
                                <label className='text-[12px] leading-[24px] font-semibold tracking-[-0.01em]'> Password</label>
                                <input type='text' className='bg-transparent border-[0.8px] border-white rounded-lg h-[37.4px] outline-none px-2' />
                            </div>
                            <div className='flex items-center justify-start max-w-[389px] w-full mt-[9px] gap-[5.54px]'>
                                <input type='checkbox' className='rounded-full' />
                                <p className='text-[9px] leading-[13.62px] font-light '>Your password meets all the necessary requirements</p>
                            </div>
                            <button className='mt-[36px] mb-[20px] max-w-[389px] w-full h-[37.4px] bg-[#0019FD] rounded-[8px] text-[12px] leading-[24px] font-semibold'>CONTINUE</button>
                        </div >
                        {/* Right Side */}
                        < div className='md:block hidden border-l-[2px] border-white pt-[204px]'>
                            <div className='flex flex-col justify-center items-center'>
                                <Image src='/assets/Logo.svg' alt='Logo' width={247} height={59.65} className='' />
                                <p className='mt-[26.35px] text-[14px] font-normal leading-[16.94px]'>Streamline your revenue tracking process like never before.</p>
                            </div>
                        </div >
                        <button className="absolute top-4 right-4 text-white" onClick={closeSignUpPopup}>Close</button>
                    </div >
                </div >
            )}
        </div>
    );
};

export default SignInPopup;





