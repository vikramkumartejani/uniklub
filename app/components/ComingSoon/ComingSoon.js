import React from 'react'
import Navbar from '../Navbar'
import Link from 'next/link'

const ComingSoon = () => {
  return (
    <div className='coming-soon-bg h-full'>
      <Navbar />
      <div className='container px-[20px] relative'>
        <div className='flex items-center justify-center flex-col mt-[190px] pb-[251px]'>
          <h1 className='sm:text-[79.19px] text-[50px] leading-[95.84px] tracking-[-0.01em] font-medium text-white text-center'>Coming soon</h1>
          <p className='text-[14px] leading-[16.49px] font-normal tracking-[-0.01em] text-white mt-[12px] mb-[33px] text-center'>Streamline your revenue tracking process like never before.</p>
          <button className='shadow-btn bg-white w-[184px] h-[58px] rounded-[133px] text-[#000B33BD] text-[16.91px] leading-[20.46px] font-semibold tracking-[-0.01em]'>Email Address</button>
        </div>
          <div className='text-white ml-[16px] pb-[19px] flex sm:flex-nowrap flex-wrap gap-[15px] sm:gap-[50px] items-center'>
            <Link href='/termsofservice' className='text-xs leading-[35.31px] font-normal tracking-[-0.01em]'>Terms of Service</Link>
            <Link href='/privacypolicy' className='text-xs leading-[35.31px] font-normal tracking-[-0.01em]'>Privacy Policy</Link>
            <Link href='/aboutUs' className='text-xs leading-[35.31px] font-normal tracking-[-0.01em]'>About Us</Link>
          </div>
      </div>
    </div>
  )
}

export default ComingSoon