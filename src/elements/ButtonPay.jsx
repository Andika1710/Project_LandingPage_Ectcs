import React from 'react'

const ButtonPay = ({customButton}) => {
  return (
    <button className={`${customButton} rounded-[24px] bg-globalbiru text-white px-[106px] py-[12px] lg:px-[81.44px] lg:py-[13px] hover:text-black`}>Pay</button>
  )
}

export default ButtonPay