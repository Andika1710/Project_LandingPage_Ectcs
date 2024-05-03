import React, { useState } from 'react'
import logo from '../../assets/logoEct.png'
import menu from '../../assets/menuMobile.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  
  const [side, setSide] = useState(false)
  const menuSide = ()=>{
    setSide(!side)
  }

  return (
    <>
        <div className='h-[45px] lg:h-[95px] header w-full bg-biru'>
            <div className='container  flex lg:justify-center lg:items-center justify-between px-[35px] md:px-[35px]  max-w-full   items-center py-[7px] lg:py-4 '>
                <div className='flex gap-[16px]'>
                  <img className='w-full h-[30px] lg:h-[60px] ' src={logo} alt="logo" />
                  <div>
                    <p className='text-[14px] lg:text-[24px] text-white leading-[10px] py-[4px] lg:py-[10px] font-semibold font-jakarta'>ECTCS</p>
                    <p className='text-[8px] lg:text-[12px] leading-[10px] text-white'>2024</p>
                  </div>
                </div>
                <button onClick={menuSide}>
                  <img className='block lg:hidden' src={menu} alt="" />
                </button>
            </div>
            {
            side && 
            <div className=' flex items-end justify-end flex-col'>
              <button className=' bg-white hover:bg-globalbiru  mr-[10px] mt-2  pt-[18px] pb-2  rounded-t-lg px-[46px]'>
              <ul className='flex flex-col gap-[10px] lg:hidden justify-between text-globalGreen  text-[18px] leading-[18.9px] font-semibold'>
                <li><a className='border-b border-borderMobile   w-full pb-[10px] items-center  hover:text-white justify-center flex' href="#submitPaper">Call for paper</a></li>
              </ul>
              </button>
              <button className=' bg-white hover:bg-globalbiru  mr-[10px]  py-[10px]  px-[30px]'>
              <ul className='flex flex-col gap-[10px] lg:hidden justify-between text-globalGreen  text-[18px] leading-[18.9px] font-semibold'>
                <li><a className='border-b border-borderMobile   w-full pb-[10px] items-center  hover:text-white justify-center flex' href="#papersubmission">Paper submission</a></li>
              </ul>
              </button>
              <button className=' bg-white hover:bg-globalbiru  mr-[10px]  py-[10px] px-[36px] '>
              <ul className='flex flex-col gap-[10px] lg:hidden justify-between text-globalGreen  text-[18px] leading-[18.9px] font-semibold'>
                <li><a className='border-b border-borderMobile   w-full pb-[10px] items-center  hover:text-white justify-center flex' href="#importantdate ">Important dates </a></li>
              </ul>
              </button>
              <button className=' bg-white hover:bg-globalbiru  mr-[10px] py-[10px]  px-[52px] '>
              <ul className='flex flex-col gap-[10px] lg:hidden justify-between text-globalGreen  text-[18px] leading-[18.9px] font-semibold'>
                <li><a className='border-b border-borderMobile   w-full pb-[10px] items-center  hover:text-white justify-center flex' href="#registration">Registration</a></li>
              </ul>
              </button>
              <button className=' bg-white hover:bg-globalbiru  mr-[10px]  py-[10px] px-[65px]'>
              <ul className='flex flex-col gap-[10px] lg:hidden justify-between text-globalGreen  text-[18px] leading-[18.9px] font-semibold'>
                <li><a className='border-b border-borderMobile   w-full pb-[10px] items-center  hover:text-white justify-center flex' href="#speakers">Speakers</a></li>
              </ul>
              </button>
              <button className=' bg-white hover:bg-globalbiru  mr-[10px] py-[10px] px-[76px] rounded-b-lg'>
              <ul className='flex flex-col gap-[10px] lg:hidden justify-between text-globalGreen  text-[18px] leading-[18.9px] font-semibold'>
                <li><Link className='border-b border-borderMobile w-full pb-[10px] items-center  hover:text-white justify-center flex' to='/about'>About </Link></li>
              </ul>
              </button>
    

            </div>
            }
        </div>
    </>
  )
}

export default Header