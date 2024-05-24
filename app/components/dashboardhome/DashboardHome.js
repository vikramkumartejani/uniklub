"use client";
import dynamic from 'next/dynamic'
import Image from "next/image";
import Link from 'next/link';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
// import ReactApexChart  from 'react-apexcharts';

const DashboardHome = () => {

  const options = {
    chart: {
      id: "basic-ba",
      toolbar: {
        show: false,
        tools: {
          download: false
        }
      },
    },
    grid: {
      show: false
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      show: true,  
      labels: {
        show: true,  
        style: {
          colors: [],  
          fontSize: '12px',  
          fontFamily: 'Helvetica, Arial, sans-serif',  
          fontWeight: 400,  
          cssClass: 'apexcharts-xaxis-label', 
          color:'#fff' 
        },
      },
      axisBorder: {
        show: false,  
        color: '#fff',  
        height: 1,  
        width: '100%',  
        offsetX: 0, 
        offsetY: 0,  
      },
      axisTicks: {
        show: false,  
        borderType: 'solid',  
        color: '#fff',  
        height: 6,  
        offsetX: 0,  
        offsetY: 0,  
      },
      categories: ['Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Do', '2024' ], // Optionally set categories if your x-axis represents categories
    },
    
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
      style: 'hollow',
    },
    // fill: {
    //   type: 'gradient',
    //   gradient: {
    //     shadeIntensity: 1,
    //     opacityFrom: 0.7,
    //     opacityTo: 0.9,
    //     stops: [0, 100]
    //   }
    // },

  };

  const series = [
    {
      name: "series-1",
      data: [100, 80, 70, 60, 70, 80, 80]
    }
  ];

  return <div className="mx-[10px] lg:mx-[17px] mt-[47px]">
    <h1 className='text-[35.31px] leading-[35.31px] tracking-[-0.01em] font-semibold mb-[47px] sm:mb-[80px] text-white'>👋 Hi, Stephen</h1>
    <div className="row bg-[#000B33] border-[0.5px] border-white rounded-[14px]">
      <div className='flex justify-between  mt-[30px] mx-[20px]'>
        <div>
          <h1 className='text-white text-[22px] leading-[23px] w-[159px]'>Last 12 months revenue</h1>
          <div className='mt-[16px] flex gap-[10px] items-end'>
            <h2 className='text-[#344BFD] text-[54px] leading-[54px] font-medium '>1,381.33</h2>
            <p className='text-[16px] text-white leading-[19.36px] font-medium mb-[8px]'>last 12 months</p>
          </div>
          <h4 className='text-[16px] leading-[19.36px] font-medium text-white mt-[4px]'>Revenue</h4>
          <button className='bg-[#344BFD] min-w-[106px] h-[34px] text-[12.47px] leading-[13px] font-semibold text-white rounded-[12px] my-[20px] md:hidden block '>See more</button>
        </div>
        <button className='bg-[#344BFD] min-w-[106px] h-[34px] text-[12.47px] leading-[13px] font-semibold text-white rounded-[12px] md:block hidden'>See more</button>
      </div>
      <div className="mixed-chart">
        <Chart
          options={options}
          series={series}
          type="area"
          width={"96%"}
          className="chart-container"
          height={400}
        />

      </div>
    </div>

    {/* Boxes */}
    <div className="flex xl:flex-row flex-col items-center gap-[25px] md:px-[24px] mt-[50px] md:my-[260px] mb-[51px]">
      {/* Box 1 */}
      <div className="bg-[#000B33] px-[10px] md:px-[36px] text-white border-[0.5px] rounded-[14px] border-white max-w-[530px] w-full">
        <h2 className="text-[22px] leading-[23px] font-semibold tracking-[-0.01em] mt-[64px]">Getting started with UniKlub</h2>
        <div className="bg-[#00000052] rounded-[20px] max-w-[463px] w-full h-[218px] mt-[40px] flex items-center gap-[5px]">
          <div className="pl-[20px] md:ml-[46px] xl:py-[53px]">
            <h2 className="text-[36px] leading-[37px] font-semibold w-[173px] tracking-[-0.01em]">GETTING STARTED</h2>
            <h3 className="text-[20px] leading-[27px] font-semibold tracking-[-0.01em] bg-[#344BFD] w-[150px] text-center">WITH UNIKLUB</h3>
          </div>
          <Image src='/assets/Logo.svg' alt="Logo" width={183} height={44.19} className='lg:block hidden' />
        </div>
        <p className="text-center px-[10px] md:px-[40px] text-[20px] leading-[24.2px] mt-[26px]">Our mission is to provide innovative tools and resources that simplify the process of managing revenue and exploring new business opportunities, allowing creators to focus on what they do best: creating.</p>
        <div className="bg-[#344BFD] rounded-[11.04px] max-w-[472px] w-full h-[45.77px] text-[15.58px] leading-[12.7px] font-semibold mt-[90px] mb-[35.62px] flex items-center justify-center">
          <Link href='/aboutUs'>Learn More</Link>
        </div>
      </div>
      {/* Box 2 */}
      <div className="bg-[#000B33] px-[10px] md:px-[36px] text-white border-[0.5px] rounded-[14px] border-white max-w-[530px] w-full">
        <h2 className="text-[22px] leading-[23px] font-semibold tracking-[-0.01em] mt-[64px]">Which Platforms are supported</h2>
        <div className="bg-[#00000052] rounded-[20px] max-w-[463px] w-full h-[218px] mt-[40px] flex items-center gap-[28px]">
          <div className="mx-[10px] sm:mx-[20px] lg:ml-[46px] py-[53px]">
            <h2 className="text-[36px] leading-[37px] font-semibold tracking-[-0.01em] w-[132px] bg-white text-black pl-[5px]">WHICH</h2>
            <h3 className="text-[36.19px] leading-[37.84px] font-semibold tracking-[-0.01em] bg-[#344BFD] w-[230px] mt-[2px] pl-[5px]">PLATFORMS</h3>
            <h2 className="text-[36px] leading-[37px] font-semibold tracking-[-0.01em] bg-white text-black max-w-[325px] mt-[2px] pl-[5px]">ARE SUPPORTED?</h2>
          </div>
        </div>
        <p className="text-center px-[10px] md:px-[40px] text-[20px] leading-[24.2px] mt-[26px]">Check out what platforms that we are currently supporting. We are always looking to add more verticals to the platform and love to hear your requests.</p>
        <div className="bg-[#344BFD] rounded-[11.04px] max-w-[472px] w-full h-[45.77px] text-[15.58px] leading-[12.7px] font-semibold mt-[90px] mb-[35.62px] flex items-center justify-center">
          <Link href='/platformssupported'>Learn More</Link>
        </div>
      </div>
    </div>

    {/* Vertical Opportunities */}
    <div className='bg-[#0000004D] h-full rounded-[20px] w-full mb-[9px]'>
      <h1 className='flex items-end gap-[5px] text-white text-[21px] sm:text-[32px] leading-[38.73px] font-semibold pt-[69px] mx-[10px] md:ml-[20px]'>Vertical Opportunities
        <Image src='/assets/vertical-opportunities.svg' alt='Logo' width={32} height={41} className='w-[32px] h-[41px] mb-[-10px]' />
      </h1>
      <div className='w-full flex h-full mt-[216px] pb-[44px] px-[10px]'>
        <button className='bg-[#344BFD] max-w-[485px] w-full mx-auto h-[47px] text-white rounded-[11.34px] text-[16px] leading-[13.04px] font-semibold'>See option</button>
      </div>
    </div>
  </div>
}


export default DashboardHome;