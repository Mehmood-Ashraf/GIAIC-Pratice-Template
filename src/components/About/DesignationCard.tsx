import React from 'react'
import Image, { StaticImageData } from 'next/image'
import TwitterImage from "../../../public/images/About/Icon-Twitter.png"
import InstagramImage from "../../../public/images/About/icon-instagram.png"
import LinkedinImage from "../../../public/images/About/Icon-Linkedin.png"


interface desCardProps {
    image: StaticImageData;
    imageWidth: number;
    imageHeight: number;
    name: string;
    designation: string 
}

const DesignationCard = (props: desCardProps) => {
const {image, imageHeight, imageWidth, name, designation} = props

  return (
    <div className='card flex flex-col gap-8'>
        <div className='bg-[#F5F5F5] rounded w-[370px] h-[430px] flex justify-center items-end'>
            <Image src={image} alt='' width={imageWidth} height={imageHeight}></Image>
        </div>

        <div className='flex flex-col gap-4'>
            <p className='font-inter font-medium text-[32px] leading-[30px] tracking-[4%]'>{name}</p>
            <p className='font-poppins text-base font-normal'>{designation}</p>
            <div className='flex gap-4'>
                <Image src={TwitterImage} alt='' className='transition-transform duration-300 hover:scale-110 hover:opacity-80 cursor-pointer'></Image>
                <Image src={InstagramImage} alt='' className='transition-transform duration-300 hover:scale-110 hover:opacity-80 cursor-pointer'></Image>
                <Image src={LinkedinImage} alt='' className='transition-transform duration-300 hover:scale-110 hover:opacity-80 cursor-pointer'></Image>
            </div>
        </div>
    </div>
  )
}

export default DesignationCard