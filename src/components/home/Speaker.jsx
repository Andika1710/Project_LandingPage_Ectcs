import React from 'react'
import Fro from '../../assets/froilan1.png'
import Cha from '../../assets/Windarko1.png'

const Speaker = () => {
  return (
    <>
    <div className='w-full' id='speakers'>
        <div className='bg-speaker bg-cover bg-no-repeat bg-center h-[140px] lg:h-[400px]'>
            <p className='text-[18px] lg:text-[36px] lg:leading-[36px] leading-[21.6px] flex justify-center font-bold pt-[20px] lg:pt-[64px] text-white'>SPEAKER</p>
        </div>
        <div className='container mx-auto px-[35px] mt-[-78px] lg:mt-[-267px]'>
            <div className='card block lg:flex lg:justify-center lg:items-center lg:gap-[64px] mb-[94px]'>
                <div className='rounded-[16px] border shadow-lg flex flex-col justify-center items-center bg-white '>
                    <figure className='bg-kuning rounded-full w-[163px] h-[165px] lg:w-[250px] lg:h-[253px] mt-[51px] lg:mt-[82px]'>
                       <img className=' mt-[-36px] lg:mt-[-55px]' src= {Fro} alt="" /> 
                    </figure>
                    <figcaption className='flex flex-col justify-center items-center mt-[19px] lg:px-[35px] lg:py-[50px] '>
                        <p className='text-[14px] lg:text-[24px] lg:leading-[30px] flex justify-center items-center leading-[30px] font-semibold text-globalbiru'>Dr. Froilan D Mobo </p>
                        <p className='text-[12px] lg:text-[18px] lg:leading-[21.6px] flex justify-center text-center leading-[14.4px] font-medium text-globalbiru w-[183px] lg:w-[340px] h-[66px] mt-3'>Philippine Merchant Marine Academy, Philippine</p>
                    </figcaption>
                </div>
                <div className='rounded-[16px] border shadow-lg flex flex-col justify-center items-center bg-white mt-[24px] lg:mt-0'>
                    <figure className='bg-kuning rounded-full w-[163px] h-[165px] lg:w-[250px] lg:h-[253px] mt-[51px] lg:mt-[82px]'>
                        <img className=' mt-[-48px] lg:mt-[-55px]' src={Cha} alt="" />
                    </figure>
                    <figcaption className='flex flex-col items-center mt-[19px] lg:px-[35px] lg:py-[50px] '>
                        <p className='text-[14px] lg:text-[24px] lg:leading-[30px] leading-[30px] font-semibold text-globalbiru'>Windarko, S.T., M.M.</p>
                        <p className='text-[12px] lg:text-[18px] items-center lg:leading-[21.6px] leading-[14.4px] text-center font-medium text-globalbiru w-[251px] h-[66px] lg:w-[340px] mt-3'>Universitas Pembangunan Jaya, Indonesia</p>
                    </figcaption>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Speaker