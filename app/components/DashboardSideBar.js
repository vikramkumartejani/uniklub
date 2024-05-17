"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CustomLink = ({ href, label, iconActiveSrc, iconSrc }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Link href={href}>
      <div
        className={`w-[262px] h-[52px] rounded-[14px] py-[14px] pl-[12px] text-[15px] leading-[24px] font-semibold flex items-center gap-[12px] ${isActive
          ? 'text-[#000B33] bg-white border-none'
          : 'text-[#FFFFFFB2] border border-[#FFFFFFB5] bg-[#000B33] transition duration-300'
          }`}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <Image src={isActive ? iconSrc : iconActiveSrc} alt='Logo' width={22} height={15} className=' h-full' />
        {label}
      </div>
    </Link>
  );
};

const DashboardSideBar = () => {
  return (
    <>
      <div className='md:block hidden w-[308px] bg-[#000B33] rounded-[6px] my-[9px]'>
        <div className='flex flex-col gap-[20px] my-[15px] px-[23px]'>
          <CustomLink href='/' label='Home' iconActiveSrc='/assets/homeicon.svg' iconSrc='/assets/homeicon-active.svg' />
          <CustomLink href='/revenue' label='Revenue' iconActiveSrc='/assets/revenueicon.svg' iconSrc='/assets/revenueicon-active.svg' />
          <CustomLink href='/verticals' label='Verticals' iconActiveSrc='/assets/verticalsicon.svg' iconSrc='/assets/verticalsicon-active.svg' />
          <CustomLink href='/connect' label='Connect' iconActiveSrc='/assets/connecticon.svg' iconSrc='/assets/connecticon-active.svg' />
        </div>
      </div>

    </>
  );
};

export default DashboardSideBar;
