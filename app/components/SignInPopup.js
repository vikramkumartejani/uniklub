'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

const SignInPopup = ({ onClose }) => {
    // Email & Password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Näidis kontroll (asenda tegeliku kontrolliga)
        if (email !== 'correct@example.com' || password !== 'correctpassword') {
            setError(true);
        } else {
            setError(false);
            // Teosta sisselogimine või muud toimingud
        }
    };

    // Popup
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
                    <form className='w-full mx-auto'>
                        {/* Email and Password Inputs */}
                        <div className="flex flex-col mb-[25px] w-full max-w-[389px] mx-auto">
                            <label className="text-[12px] leading-[24px] font-semibold tracking-[-0.01em]">Email address</label>
                            <input
                                type="text"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className={`bg-transparent border-[0.8px] ${error ? 'border-red-500' : 'border-white'} rounded-lg h-[37.4px] outline-none px-2`}
                            />
                        </div>
                        <div className="flex flex-col w-full max-w-[389px] mx-auto">
                            <label className="text-[12px] leading-[24px] font-semibold tracking-[-0.01em]">Password</label>
                            <input
                                type="password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                className={`bg-transparent border-[0.8px] ${error ? 'border-red-500' : 'border-white'} rounded-lg h-[37.4px] min-w-full outline-none px-2`}
                            />
                        </div>
                        {/* Continue Button */}
                        <div className='w-full mx-auto max-w-[389px]'>
                            <button type="submit" className="mt-[40px] md:mt-[97.6px] mb-[20px] max-w-[389px] mx-auto w-full h-[37.4px] bg-[#0019FD] rounded-[8px] text-[12px] leading-[24px] font-semibold">CONTINUE</button>
                        </div>
                    </form>
                    <p className="text-[12px] sm:text-[18px] leading-[27px] font-semibold tracking-[0.02em] flex gap-[3px] md:hidden">Don’t have an account?
                        <button className="text-[#0019FD] text-[12px] sm:text-[18px] leading-[27px] font-semibold tracking-[0.02em] " onClick={openSignUpPopup}>Sign Up</button>
                    </p>
                </div>
                {/* Right Side (Sign Up Section) */}
                <div className="md:flex hidden border-l-[2px] border-white items-center justify-center flex-col pt-[204px]">
                    <Image src='/assets/Logo.svg' alt='Logo' width={247} height={59.65} className='' />
                    <p className="mt-[26.35px] text-[14px] font-normal leading-[16.94px]">Streamline your revenue tracking process like never before.</p>
                    <div className="flex items-center gap-[3px] mt-[224px]">
                        <p className=" sm:text-[18px] leading-[27px] font-semibold tracking-[0.02em] flex gap-[3px]">Don’t have an account?
                            <button className="text-[#0019FD] text-[18px] leading-[27px] font-semibold tracking-[0.02em] hidden md:block" onClick={openSignUpPopup}>Sign Up</button>
                        </p>
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
                            <form className='w-full'>
                                <div className='flex flex-col md:flex-row justify-center md:gap-[25px] mb-[18px] w-full'>
                                    <div className='flex mx-auto md:mx-0 flex-col mb-[16px] w-full max-w-[389px] md:max-w-[182px]'>
                                        <label className='text-[12px] leading-[24px] font-semibold tracking-[-0.01em]'>First Name</label>
                                        <input type='text' required className=' bg-transparent border-[0.8px] border-white rounded-lg h-[37.4px] outline-none px-2' />
                                    </div>
                                    <div className='flex flex-col mx-auto md:mx-0 w-full max-w-[389px] md:max-w-[182px]'>
                                        <label className='text-[12px] leading-[24px] font-semibold tracking-[-0.01em]'> Last Name</label>
                                        <input type='text' required className='bg-transparent border-[0.8px] border-white rounded-lg h-[37.4px] outline-none px-2' />
                                    </div>
                                </div>
                                <div className='flex flex-col mb-[16px] w-full max-w-[389px] mx-auto'>
                                    <label className='text-[12px] leading-[24px] font-semibold tracking-[-0.01em]'>Email adress</label>
                                    <input type='text' required className='bg-transparent border-[0.8px] border-white rounded-lg h-[37.4px] outline-none px-2' />
                                </div>
                                <div className='flex flex-col w-full max-w-[389px] mx-auto'>
                                    <label className='text-[12px] leading-[24px] font-semibold tracking-[-0.01em]'>Create password</label>
                                    <input type='text' required className='bg-transparent border-[0.8px] border-white rounded-lg h-[37.4px] outline-none px-2' />
                                </div>
                                <div className='flex items-center justify-start max-w-[389px] mx-auto w-full mt-[9px] gap-[5.54px]'>
                                    <input type='checkbox' required className='rounded-full' />
                                    <p className='text-[9px] leading-[13.62px] font-light'>Your password meets all the necessary requirements</p>
                                </div>
                                <div className='w-full max-w-[389px] mx-auto'>
                                    <button type="submit" className='mt-[36px] mb-[20px] max-w-[389px] mx-auto w-full h-[37.4px] bg-[#0019FD] rounded-[8px] text-[12px] leading-[24px] font-semibold'>CONTINUE</button>
                                </div>
                            </form>
                        </div >
                        {/* Right Side */}
                        < div className='md:block hidden border-l-[2px] border-white pt-[204px]'>
                            <div className='flex flex-col justify-center items-center'>
                                <Image src='/assets/Logo.svg' alt='Logo' width={247} height={59.65} className='' />
                                <p className='mt-[26.35px] text-[14px] font-normal leading-[16.94px] px-[10px] text-center'>Streamline your revenue tracking process like never before.</p>
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





