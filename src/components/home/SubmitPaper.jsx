import React from 'react'

const SubmitPaper = () => {
  return (
    <>
        <div className='w-full bg-white' id='submitPaper'>
            <div className='container mx-auto pb-[64px] lg:px-[130px] px-6'>
                <div className='flex flex-col justify-center items-center py-[56px] lg:gap-y-8'>
                    <h1 className='text-[18px] leading-[21.6px] lg:text-[36px] lg:leading-[43.2px]  font-bold font-jakarta text-globalbiru'>CALL FOR PAPER</h1>
                    <div className='lg:flex block gap-[20px] justify-between border-2 border-border rounded-[16px] w-full py-[28px] mt-[24px] px-[180px]'>
                        <ul className='flex flex-col  justify-center items-center '>
                            <li><a className='hover:text-globalbiru text-[14px] duration-500 hover:lg:text-[20px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold ' href="#">Technology</a></li>
                            <li><a className='hover:text-globalbiru text-[14px] duration-500 hover:lg:text-[20px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold' href="#">Computer Science</a></li>
                            <li><a className='hover:text-globalbiru text-[14px] duration-500 hover:lg:text-[19px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold' href="#">Information Technology</a></li>
                            <li><a className='hover:text-globalbiru text-[14px] duration-500 hover:lg:text-[20px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold' href="#">Education Computing</a></li>
                            <li><a className='hover:text-globalbiru text-[14px] duration-500 hover:lg:text-[20px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold' href="#">Software Engineering</a></li>
                            <li><a className='hover:text-globalbiru text-[14px] duration-500 hover:lg:text-[20px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold' href="#">Internet Of Things</a></li>
                        </ul>
                        <ul className='flex flex-col text-center mt-[28px] lg:mt-0 '>
                            <li><a className='hover:text-globalbiru text-[14px] duration-500 hover:lg:text-[20px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold ' href="#">Engineering</a></li>
                            <li><a className='hover:text-globalbiru text-[14px] duration-500 hover:lg:text-[20px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold' href="#"> Civil Engineering</a></li>
                            <li><a className='hover:text-globalbiru text-[14px] duration-500 hover:lg:text-[20px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold' href="#">Electrical Engineering</a></li>
                            <li><a className='hover:text-globalbiru text-[14px] duration-500 hover:lg:text-[20px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold' href="#">mechanical Engineering</a></li>
                            <li><a className='hover:text-globalbiru text-[14px] duration-500 hover:lg:text-[20px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold' href="#">Energy Engineering</a></li>
                            <li><a className='hover:text-globalbiru text-[14px] duration-500 hover:lg:text-[20px] hover:text-[16px] lg:text-[18px] lg:leading-[36.31px] leading-[16.94px] font-semibold' href="#">Food Engineering</a></li>
                        </ul>
                       
                    </div>
                    
                </div>
                <div className='flex flex-col justify-center items-center' id='papersubmission'>
                    <div className='lg:flex lg:gap-[40px] justify-center items-center font-jakarta'>
                        <div className=''>
                            <h1 className='text-[18px] leading-[21.6px] lg:text-[36px] lg:w-[498px] lg:leading-[43.2px]  font-bold font-jakarta text-globalbiru'>SUBMIT YOUR PAPER NOW!</h1>
                            <p className='text-[12px] leading-[14.4px]  mt-[2px] max-w-[241px] lg:max-w-[482px] lg:text-[20px] lg:leading-[24px] text-start'>Eastasouth Conference On Economics, Social Sciences and Humanities 2024 </p>
                        </div>
                        <button className='rounded-[12px] lg:rounded-[24px] mx-5 xl:text-[24px] xl:leading-[28.8px] lg:text-[24px] lg:w-[310px] xl:w-[390px] font-bold xl:py-[36px] xl:px-[39px] bg-globalbiru lg:py-[30px] px-2 py-2 text-white mt-3 hover:text-black'>Submit your paper here !</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SubmitPaper