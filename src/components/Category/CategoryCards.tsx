import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface CatogoryCardsProps{
    image: StaticImageData;
    cardName: string
}

function CategoryCards(props: CatogoryCardsProps) {
    const {image, cardName} = props
  return (
    <div className='border rounded border-[#0000004D] flex flex-col gap-4 w-[170px] h-[145px] justify-center items-center'>
        <Image src={image} alt=''></Image>
        <p className='text-base font-normal font-poppins'>{cardName}</p>
    </div>
  )
}

export default CategoryCards