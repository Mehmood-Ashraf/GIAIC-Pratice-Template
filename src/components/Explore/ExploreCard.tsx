import React from 'react'
import Image, { StaticImageData} from 'next/image'
import Star from "../../../public/icons/star.png" 
import Heart from "../../../public/icons/Fill Heart.png"
import Eye from "../../../public/icons/Fill Eye.png"


interface cardProps{
    discount?: string;
    image: StaticImageData;
    name: string;
    originalPrice?: string;
    discountedPrice: string;
    soldOut: string;
    imageWidth: number;
    imageHeight: number;
}

function ExploreCard(props: cardProps) {
    const {discount, image, name, originalPrice, discountedPrice, soldOut, imageWidth, imageHeight} = props;

  return (
    <div className="flex flex-col gap-4">
        <div className="bg-[#F5F5F5] flex justify-center items-center relative p-[49px] hover:-translate-y-2.5 rounded w-[270px] h-[250px]">
            
            <Image src={image} alt="" width={imageWidth} height={imageHeight} className=''></Image>

            {discount && (<div className="bg-[#00FF66] text-white py-1 px-3 rounded font-poppins text-xs leading-[18px] font-normal absolute top-3 left-3">
                    <p>{discount}</p>
                </div>)}
                
                <div className="flex flex-col gap-2 absolute top-3 right-3">
                    <Image src={Heart} alt=""></Image>
                    <Image src={Eye} alt=""></Image>
                </div>

                <div className='w-full absolute bottom-0 text-[#FFFFFF] font-poppins rounded-bl rounded-br cursor-pointer opacity-0 hover:opacity-100'>
                    <button className='bg-[#000000] w-full font-medium rounded-bl rounded-br py-2 cursor-pointer'>Add To Cart</button>
                </div>
            
        </div>
        <div className="flex gap-2 font-poppins flex-col">
            <p className="text-base font-medium">{name}</p>
            <div className="flex text-base font-medium gap-3">
                <p className="text-[#DB4444]">{discountedPrice}</p>
                <p className="opacity-50 line-through">{originalPrice}</p>
            </div>

            <div className="flex gap-1 items-center">
                <Image src={Star} alt="" className="w-5 h-5"></Image>
                <Image src={Star} alt="" className="w-5 h-5"></Image>
                <Image src={Star} alt="" className="w-5 h-5"></Image>
                <Image src={Star} alt="" className="w-5 h-5"></Image>
                <Image src={Star} alt="" className="w-5 h-5"></Image>
                
                <span className="text-sm leading-[21px] font-semibold opacity-50">{soldOut}</span>
            </div>
        </div>
      </div>
  )
}

export default ExploreCard