import React from 'react'
import Image from 'next/image'
import Image1 from "../../../public/images/Services/Services.png"
import Image2 from "../../../public/images/Services/Services (1).png"
import Image3 from "../../../public/images/Services/Services (2).png"

function Service() {
  return (
    <div className='max-w-[943px] mx-auto flex gap-[88px] mb-[140px]'>
      <div className='flex flex-col gap-6 items-center '>
        <Image src={Image1} alt=''></Image>
        <div className='flex flex-col gap-2'>
          <p className='font-poppins text-xl font-semibold'>FREE AND FAST DELIVERY</p>
          <p className='font-poppins text-sm font-normal leading-[21px] text-center'>Free delivery for all orders over $140</p>
        </div>
      </div>

      <div className='flex flex-col gap-6 items-center '>
        <Image src={Image2} alt=''></Image>
        <div className='flex flex-col gap-2'>
          <p className='font-poppins text-xl font-semibold'>24/7 CUSTOMER SERVICE</p>
          <p className='font-poppins text-sm font-normal leading-[21px] text-center'>Friendly 24/7 customer support</p>
        </div>
      </div>

      <div className='flex flex-col gap-6 items-center '>
        <Image src={Image3} alt=''></Image>
        <div className='flex flex-col gap-2'>
          <p className='font-poppins text-xl font-semibold'>MONEY BACK GUARANTEE</p>
          <p className='font-poppins text-sm font-normal leading-[21px] text-center'>We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  )
}

export default Service