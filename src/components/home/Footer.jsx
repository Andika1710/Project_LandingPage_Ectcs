import React from 'react'
import logoFooter from '../../assets/bgF4.png'
import telpon from '../../assets/telpon.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className='w-full bg-globalbiru mt-20 lg:mt-0'>
        <div className='container lg:flex lg:justify-between mx-auto px-[35px] pt-[40px] pb-[112px]'>
            <figure className='flex justify-center items-center'>
                <img className=' border-r-2 pr-[20px] mr-[20px] h-[110px] lg:h-[146px] lg:ml-[142px]' src={logoFooter} alt="" />
                <figcaption className='text-start lg:text-left lg:mr-[30px] '>
                      <p className='text-[13px] lg:text-[20px] lg:leading-[23.2px] text-white font-bold'>Eastasouth Conference On</p>
                      <p className='text-[15px] lg:text-[36px] lg:leading-[33.2px] text-white font-bold font-jakarta'>TECHNOLOGY</p>
                      <p className='text-[15px] lg:text-[36px] lg:leading-[33.2px] text-white font-bold font-jakarta'>AND COMPUTER</p>
                      <div className='flex gap-2 lg:mt-2'>
                      <p className='text-[15px] lg:text-[36px] lg:leading-[33.2px] text-white font-bold font-jakarta'>SCIENCE</p>
                      <div className='lg:mt-1'>
                      <p className='text-[13px] lg:text-[15px] bg-white   font-bold font-jakarta opacity-100 rounded-[5px] px-[10px]  flex justify-center items-center  text-blue-800'>2024</p>

                      </div>
                      </div>
                      
                    </figcaption>
            </figure>
            <div className='flex flex-col mt-[32px] text-white lg:w-[232px] px-[35px]'>
                <p className='text-[16px] leading-[30px] font-jakarta font-bold lg:text-left lg:text-[20px] lg:leading-[30px] w-full text-center justify-center items-center flex'>About</p>
                <Link to='/about'>
                    <p className='mt-[20px] text-[12px] leading-[14.4px] lg:text-[14px] lg:leading-[16.8px] font-semibold font-jakarta lg:w-[232px]'>The Eastasouth Conference on Techology and Computer Science is an international conference organized by the East....</p>
                </Link>
            </div>
            <div className='text-white mt-[32px] flex flex-col justify-center items-center text-center'>
                <p className='text-[16px] leading-[30px] font-bold font-jakarta'>More Information</p>
                <div className='flex text-center gap-[12px] mt-[10px]'>
                    <img src={telpon} alt="" />
                    <div className='text-[12px] leading-[19.6px] font-bold font-poppins'>
                        <p className='text-left'>Maresta:</p>
                        <p>0821 2121 4028</p>
                    </div>
                </div>
            </div>
        </div>      
    </footer>
    </>
  )
}

export default Footer