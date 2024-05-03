import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className='lg:pt-[21px]'>
         <ul className='lg:flex hidden justify-between text-white text-[18px] leading-[16px] font-semibold'>
            <li><a className='hover:text-blue-400' href="/#submitPaper">Call for paper</a></li>
            <li><a className='hover:text-blue-400' href="/#papersubmission">Paper submission</a></li>
            <li><a className='hover:text-blue-400' href="/#importantdate ">Important dates </a></li>
            <li><a className='hover:text-blue-400' href="/#registration">Registration</a></li>
            <li><a className='hover:text-blue-400' href="/#speakers">Speakers</a></li>
            <li><a className='hover:text-blue-400' href="/#comittees">Comittees</a></li>
            <li><Link className='hover:text-blue-400 ' to='/about'>About </Link></li>
        </ul>
    </div>
  )
}

export default NavigationBar