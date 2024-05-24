"use client";
import dynamic from 'next/dynamic'
import React from 'react'
import DashboardLayout from "../components/DashboardLayout"
import Image from 'next/image';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const Revenue = () => {
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
      categories: ['2021', 'Jul', '2022', 'Jul', '2023', 'Jul', '2024' ],
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
      style: 'hollow',
    },

  };

  const series = [
    {
      name: "series-1",
      data: [90, 60, 14, 11, 40, 100]
    }
  ];
  return (
    <DashboardLayout>
      <div className='mx-[10px] md:mx-[17px] mt-[47px]'>
        <h1 className='text-[35.31px] leading-[35.31px] tracking-[-0.01em] font-semibold mb-[47px] sm:mb-[80px] text-white'>Revenue</h1>
        <div className="row bg-[#000B33] bg-opacity-30 border-[0.5px] border-white rounded-[14px]">
          <div className='flex xl:items-center justify-between xl:flex-row flex-col gap-4'>
            <div className=' mt-[30px] mx-[20px]'>
              <h1 className='text-white text-[22px] leading-[23px] w-[159px]'>Total revenue</h1>
              <div className='mt-[16px] flex sm:flex-row flex-col gap-[10px] items-end'>
                <h2 className='text-[#344BFD] text-[54px] leading-[54px] font-medium '>$4,662.66</h2>
                <p className='text-[16px] text-white leading-[19.36px] font-medium mb-[8px]'>Last 5 years</p>
              </div>
            </div>
            <div className='text-white ml-[20px] xl:ml-0 mr-[20px] flex sm:flex-row flex-col justify-center items-center gap-3'>
              <div className='flex gap-[16px]'>
                <h5 className='text-[#767676] text-[16px] leading-[35.31px] font-bold'>Filter by</h5>
                <select className='bg-transparent border-none outline-none text-[16px] leading-[35.31px] font-semibold'>
                  <option className='bg-transparent text-black text-[16px] leading-[35.31px] font-semibold'>Entire Cataloge</option>
                  <option className='bg-transparent text-black'>Entire Cataloge</option>
                </select>
              </div>
              <div className='flex gap-2 sm:pl-[30px]'>
                <button className=' bg-[#160C42] hover:bg-custom-gradient rounded-[8px] min-w-[44px] h-[26px] text-[14px] leading-[35.31px] font-semibold flex items-center justify-center'>6M</button>
                <button className=' bg-[#160C42] hover:bg-custom-gradient rounded-[8px] min-w-[44px] h-[26px] text-[14px] leading-[35.31px] font-semibold flex items-center justify-center'>1Y</button>
                <button className=' bg-[#160C42] hover:bg-custom-gradient rounded-[8px] min-w-[44px] h-[26px] text-[14px] leading-[35.31px] font-semibold flex items-center justify-center'>3Y</button>
                <button className=' bg-[#160C42] hover:bg-custom-gradient rounded-[8px] min-w-[44px] h-[26px] text-[14px] leading-[35.31px] font-semibold flex items-center justify-center'>All</button>
              </div>
            </div>
          </div>
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="area"
              width={"94%"}
              height={400}
              className="chart-container"
            />
          </div>
        </div>

        {/* Top performing assets */}
        <div className='bg-[#000B33] border-[0.5px] border-white rounded-[14px] mt-[22px] pt-[60px] mb-[18px] pl-[10px] xl:pl-[29px] w-full'>
          <h1 className='text-[24px] leading-[35.31px] font-semibold text-white'>Top performing assets</h1>
          <p className='text-[#FFFFFFB2] text-[16px] leading-[19.36px] font-medium pt-[8px]'>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
          <div className='flex xl:flex-row flex-col items-center w-full mt-[70px]'>
            <div className='flex-[0.5]'>
              <Chart
                options={{
                  chart: {
                    type: 'donut',
                  },
                  legend: {
                    show: false
                  },
                  stroke: {
                    width: 0,
                  },
                  dataLabels: {
                    enabled: false,
                  }
                }}
                series={[10, 10, 30, 40, 100]}
                type="donut"
                width={"94%"}
                height={400}
              />
            </div>
            <div className='flex-1 text-white w-full mt-[30px] lg:mt-0 overflow-scroll'>
              <div className='w-[85%] flex justify-between items-center'>
                <h1 className='text-[#FFFFFFB2] text-[22px] leading-[35.31px] font-medium ml-[20px]'>Assets</h1>
                <h1 className='text-[#FFFFFFB2] text-[22px] leading-[35.31px] font-medium'>Revenue</h1>
              </div>
              {/* Data One */}
              {/* <div className='flex flex-col gap-[52px]'> */}
              <div className='flex items-center justify-between w-[95%] mt-[50px]'>
                <div className='flex items-center gap-[10px] sm:gap-[15px]'>
                  <span className='bg-[#344BFD] min-w-[12.83px] min-h-[12.83px] rounded-full'></span>
                  <Image src='/assets/kick1.svg' alt='logo' width={34} height={36} />
                  <h3 className='text-[16px] leading-[35.31px] font-semibold '>Kick</h3>
                </div>
                <div className='flex items-center  gap-[10px] sm:gap-[30px]'>
                  <h4 className='text-[16px] leading-[35.31px] font-semibold '>$2,464.71</h4>
                  <button className='bg-[#160C42] rounded-[8px] w-[57px] h-[26px] text-[14px] leading-[35.31px] flex items-center justify-center'>Focus</button>
                </div>
              </div>
              {/* </div> */}
              {/* Data Two */}
              {/* <div className='flex flex-col gap-[52px]'> */}
              <div className='flex items-center justify-between w-[95%] mt-[50px]'>
                <div className='flex items-center gap-[10px] sm:gap-[15px]'>
                  <span className='bg-[#7553C3] min-w-[12.83px] min-h-[12.83px] rounded-full'></span>
                  <Image src='/assets/kick1.svg' alt='logo' width={34} height={36} />
                  <h3 className='text-[16px] leading-[35.31px] font-semibold '>Meta</h3>
                </div>
                <div className='flex items-center  gap-[10px] sm:gap-[30px]'>
                  <h4 className='text-[16px] leading-[35.31px] font-semibold '>$2,464.71</h4>
                  <button className='bg-[#160C42] rounded-[8px] w-[57px] h-[26px] text-[14px] leading-[35.31px] flex items-center justify-center'>Focus</button>
                </div>
              </div>
              {/* </div> */}
              {/* Data Three */}
              {/* <div className='flex flex-col gap-[52px]'> */}
              <div className='flex items-center justify-between w-[95%] mt-[50px]'>
                <div className='flex items-center gap-[10px] sm:gap-[15px]'>
                  <span className='bg-[#3F8DCE] min-w-[12.83px] min-h-[12.83px] rounded-full'></span>
                  <Image src='/assets/kick1.svg' alt='logo' width={34} height={36} />
                  <h3 className='text-[16px] leading-[35.31px] font-semibold '> TikTok</h3>
                </div>
                <div className='flex items-center  gap-[10px] sm:gap-[30px]'>
                  <h4 className='text-[16px] leading-[35.31px] font-semibold '>$2,464.71</h4>
                  <button className='bg-[#160C42] rounded-[8px] w-[57px] h-[26px] text-[14px] leading-[35.31px] flex items-center justify-center'>Focus</button>
                </div>
              </div>
              {/* </div> */}
              {/* Data Four */}
              {/* <div className='flex flex-col gap-[52px]'> */}
              <div className='flex items-center gap-[5px] justify-between w-[95%] mt-[50px]'>
                <div className='flex items-center gap-[10px] sm:gap-[15px]'>
                  <span className='bg-[#D57925] min-w-[12.83px] min-h-[12.83px] rounded-full'></span>
                  <Image src='/assets/kick1.svg' alt='logo' width={34} height={36} />
                  <h3 className='text-[16px] leading-[21px] lg:leading-[35.31px] font-semibold '> Amazon Associates</h3>
                </div>
                <div className='flex items-center  gap-[10px] sm:gap-[30px]'>
                  <h4 className='text-[16px] leading-[35.31px] font-semibold '>$2,464.71</h4>
                  <button className='bg-[#160C42] rounded-[8px] w-[57px] h-[26px] text-[14px] leading-[35.31px] flex items-center justify-center'>Focus</button>
                </div>
              </div>
              {/* </div> */}
              {/* Data Five */}
              {/* <div className='flex flex-col gap-[52px] mb-[62px]'> */}
              <div className='flex items-center justify-between w-[95%] mt-[50px] mb-[62px]'>
                <div className='flex items-center gap-[10px] sm:gap-[15px]'>
                  <span className='bg-[#B3E85B] min-w-[12.83px] min-h-[12.83px] rounded-full'></span>
                  <Image src='/assets/kick1.svg' alt='logo' width={34} height={36} />
                  <h3 className='text-[16px] leading-[35.31px] font-semibold '>  Snapchat</h3>
                </div>
                <div className='flex items-center gap-[10px] sm:gap-[30px]'>
                  <h4 className='text-[16px] leading-[35.31px] font-semibold '>$2,464.71</h4>
                  <button className='bg-[#160C42] rounded-[8px] w-[57px] h-[26px] text-[14px] leading-[35.31px] flex items-center justify-center'>Focus</button>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* Revenue by Category & Verticals */}
        <div className='flex 1435:flex-row flex-col gap-[25px] text-white w-full'>
          <div className='bg-[#000B33] text-white border-[1px] border-white py-[39px] px-[20px] md:px-[30px] rounded-[14px] mb-[18px] w-full 1435:w-[530px]'>
            <h1 className='text-[24px] leading-[35.31px] font-semibold '>Revenue by Category</h1>
            <div className='w-full bg-[#344BFD] h-[32px] mt-[29px] mb-[50px]'></div>
            <ul className='w-full flex items-center justify-between'>
              <li className='text-[#FFFFFFB2] text-[16px] leading-[35.31px] font-semibold'>Source </li>
              <li className='text-[#FFFFFFB2] text-[16px] leading-[35.31px] font-semibold'>Revenue </li>
            </ul>
            <ul className='w-full flex items-center justify-between mt-[16px]'>
              <li className='flex items-center gap-[10px] text-[22px] leading-[35.31px] font-semibold'><span className='bg-[#344BFD] w-[16px] h-[16px] rounded-full'></span> Social Media </li>
              <li>$4،666 </li>
            </ul>
          </div>
          <div className='bg-[#000B33] text-white border-[1px] border-whit pt-[39px] px-[20px] md:px-[30px] rounded-[14px] mb-[18px] w-full 1435:w-[530px]'>
            <h1 className='text-[24px] leading-[35.31px] font-semibold '>Revenue by Vertical</h1>
            <div className='w-full flex gap-[5px]'>
              <div className='max-w-[226px] w-full bg-[#344BFD] h-[32px] mt-[29px] mb-[50px]'></div>
              <div className='max-w-[62px] w-full bg-[#7553C3] h-[32px] mt-[29px] mb-[50px]'></div>
              <div className='max-w-[69px] w-full bg-[#3F8DCE] h-[32px] mt-[29px] mb-[50px]'></div>
              <div className='max-w-[47px] w-full bg-[#D57925] h-[32px] mt-[29px] mb-[50px]'></div>
              <div className='max-w-[33px] w-full bg-[#B3E85B] h-[32px] mt-[29px] mb-[50px]'></div>
              <div className='max-w-[4px] w-full bg-[#C23F6E] h-[32px] mt-[29px] mb-[50px]'></div>
            </div>
            <ul className='w-full flex items-center justify-between'>
              <li className='text-[#FFFFFFB2] text-[16px] leading-[35.31px] font-semibold'>Source </li>
              <li className='text-[#FFFFFFB2] text-[16px] leading-[35.31px] font-semibold'>Revenue </li>
            </ul>
            <ul className='w-full flex items-center justify-between mt-[16px]'>
              <li className='flex items-center gap-[10px] text-[22px] leading-[35.31px] font-semibold'><span className='bg-[#344BFD] w-[16px] h-[16px] rounded-full'></span>Symphonic </li>
              <li>66_$4،662</li>
            </ul>
            <ul className='w-full flex items-center justify-between mt-[29px]'>
              <li className='flex items-center gap-[10px] text-[22px] leading-[35.31px] font-semibold'><span className='bg-[#7553C3] w-[16px] h-[16px] rounded-full'></span>Symphonic </li>
              <li>66_$4،662</li>
            </ul>
            <ul className='w-full flex items-center justify-between mt-[29px]'>
              <li className='flex items-center gap-[10px] text-[22px] leading-[35.31px] font-semibold'><span className='bg-[#3F8DCE] w-[16px] h-[16px] rounded-full'></span>Symphonic </li>
              <li>66_$4،662</li>
            </ul>
            <ul className='w-full flex items-center justify-between mt-[29px]'>
              <li className='flex items-center gap-[10px] text-[22px] leading-[35.31px] font-semibold'><span className='bg-[#D57925] w-[16px] h-[16px] rounded-full'></span>Symphonic </li>
              <li>66_$4،662</li>
            </ul>
            <ul className='w-full flex items-center justify-between mt-[29px]'>
              <li className='flex items-center gap-[10px] text-[22px] leading-[35.31px] font-semibold'><span className='bg-[#B3E85B] w-[16px] h-[16px] rounded-full'></span>Symphonic </li>
              <li>66_$4،662</li>
            </ul>
            <ul className='w-full flex items-center justify-between mt-[29px]'>
              <li className='flex items-center gap-[10px] text-[22px] leading-[35.31px] font-semibold'><span className='bg-[#C23F6E] w-[16px] h-[16px] rounded-full'></span>Symphonic </li>
              <li>66_$4،662</li>
            </ul>

            <div className='w-full h-[1px] bg-[#FFFFFFB2] mt-[50px] mb-[19px]'></div>
            <ul className='w-full flex items-center justify-between mb-[17px]'>
              <li className='text-[#FFFFFFB2] text-[16px] leading-[35.31px] font-semibold'>Other </li>
              <li className='text-[#FFFFFFB2] text-[16px] leading-[35.31px] font-semibold'>$13.84 </li>
            </ul>
          </div>
        </div>

        {/* Category Type */}
        <div className='bg-[#000B33] text-white border-[1px] border-white py-[39px] px-[10px] lg:px-[30px] rounded-[14px] mb-[18px] w-full'>
          <h1 className='text-[24px] font-semibold leading-[35.31px] mb-[60px]'>Category Type</h1>
          <div className='flex items-center lg:flex-row flex-col'>
            <div className='flex-[0.5]'>
              <Chart
                options={{
                  chart: {
                    type: 'donut',
                  },
                  legend: {
                    show: false
                  },
                  stroke: {
                    width: 0,
                  },
                  dataLabels: {
                    enabled: false,
                  }
                }}
                series={[10]}
                type="donut"
                width={"100%"}
                height={400}
              />
            </div>
            <div className='flex-1'>
              <ul className='w-[90%] mx-auto flex items-center justify-between mt-[29px]'>
                <li className='flex items-center gap-[10px] text-[22px] leading-[35.31px] font-semibold'><span className='bg-[#344BFD] w-[16px] h-[16px] rounded-full'></span>Social Media </li>
                <li>66_$4،662</li>
              </ul>
              <ul className='lg:w-[90%] mx-auto gap-[20px] flex items-center justify-between mt-[29px]'>
                <li className='flex items-center gap-[10px] text-[22px] leading-[35.31px] font-semibold'><span className='bg-[#987CD8] w-[16px] h-[16px] rounded-full'></span>Affiliate Program   </li>
                <li>66_$4،662</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Revenue