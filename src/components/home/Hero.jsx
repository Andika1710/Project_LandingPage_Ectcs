import React from 'react'
import heroMobile from '../../assets/logoT.png'
import NavigationBar from '../../elements/NavigationBar'

const Hero = () => {
  return (
    <>
        <div className=' bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <div className='container mx-auto lg:px-[96px] px-[80px]'>
                <NavigationBar/>
                <figure className='py-[124px] flex-row lg:flex block justify-center items-center'>
                <div className='flex justify-center items-center lg:flex-none'>
                    <img className='lg:border-r-[3px] px-[30px] lg:mr-[30px] lg:border-globalbiru  ' src={heroMobile} alt="" />
                  </div>
                   
                    
                    <figcaption className='text-center lg:text-left md:text-center lg:mr-[30px] flex flex-col justify-center'>
                      <p className='lg:text-[36px] lg:leading-[43.2px] text-kuning font-bold'>Eastasouth Conference On</p>
                      <p className='text-[25px] lg:text-[56px]  leading-[25px] lg:leading-[63.2px] text-kuning font-bold font-jakarta'>TECHNOLOGY</p>
                      <p className='text-[25px] lg:text-[56px]  leading-[25px] lg:leading-[63.2px] text-kuning font-bold font-jakarta'>AND COMPUTER</p>
                      <div className='lg:flex block gap-2 lg:items-center '>
                        <p className='lg:text-[56px] lg:leading-[63.2px] text-kuning font-bold font-jakarta'>SCIENCE</p>
                        <div className='flex justify-center text-center '>
                      <p className='w-[65px] lg:w-[100px] lg:h-[40px] lg:-[43px] font-bold font-jakarta opacity-100 bg-kuning rounded-[10px] lg:flex lg:justify-center items-center  text-cyan-900 lg:text-[30px]'>2024</p>
                      </div>
                      </div>
                      <p className='mt-[10px] text-[10px] lg:text-[18px] lg:w-[550px] lg:leading-[24.2px] text-white font-bold font-jakarta'>Data Science Insights: <br />Harnessing Big Data For Innovation </p>
                    </figcaption>
                </figure>
            </div>
        </div>
    </>
  )
}

export default Hero