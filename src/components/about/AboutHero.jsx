import React from 'react'
import heroC from '../../assets/logoT.png'
import NavigationBar from '../../elements/NavigationBar'

const AboutHero = () => {
  return (
    <>
    <div className=' lg:bg-hero-pattern bg-none bg-cover bg-no-repeat bg-center'>
        <div className='container mx-auto px-[47px]'>
            <NavigationBar/>
            <p className='text-[20px] leading-[24px] font-extrabold font-jakarta text-globalbiru flex justify-center items-center text-center py-[36px] lg:pt-[77px] lg:pb-[56px]  lg:text-[36px] lg:leading-[43.2px]'>ABOUT</p>
            <figure className='flex justify-center items-center lg:pb-[46px]'>
                <img className=' border-r-2 pr-[5px] mr-[5px] h-[110px] lg:h-[146px] lg:ml-[142px] lg:items-center' src={heroC} alt="" />
                 <figcaption className='text-start lg:text-start lg:mr-[30px]  '>
                      <p className='text-[10px] lg:text-[15px] lg:leading-[13.2px] text-globalbiru font-bold'>Eastasouth Conference On</p>
                      <p className='text-[13px] lg:text-[20px] lg:leading-[40px] text-globalbiru font-bold font-jakarta'>TECHNOLOGY</p>
                      <p className=' lg:w-[250px] text-[13px] lg:text-[20px] lg:leading-[10px] text-globalbiru font-bold font-jakarta'>AND COMPUTER</p>
                      <div className='flex gap-2 lg:mt-2 '>
                      <p className='text-[13px]  lg:text-[20px] text-globalbiru  font-bold font-jakarta'>SCIENCE</p>
                      <div className='lg:mt-1'>
                      <p className='text-[13px] lg:text-[15px] bg-kuning  font-bold font-jakarta opacity-100 rounded-[5px] px-[10px]  flex justify-center items-center text-white lg:text-green-900'>2024</p>

                      </div>
                      </div>
                      
                    </figcaption>
            </figure>
        </div>
      </div>
    </>
  )
}

export default AboutHero