import React from 'react'
import Image from 'next/image'
import LeftArrow from "../../../public/icons/Fill With Left Arrow.png"
import RightArrow from "../../../public/icons/Fill with Right Arrow.png"
import CategoryCards from './CategoryCards'
import PhoneImage from "../../../public/images/PhoneImage.png"
import ComputerImage from "../../../public/images/Category-Computer.png"
import SmartWatch from "../../../public/images/Category-SmartWatch.png"
import Camera from "../../../public/images/CameraImage.png"
import HeadPhones from "../../../public/images/Category-Headphone.png"
import GamingImage from "../../../public/images/Category-Gamepad.png"



const data = [
  {
    id: 1,
    image: PhoneImage,
    cardName: "Phones"
  },
  {
    id: 2,
    image: ComputerImage,
    cardName: "Computers"
  },
  {
    id: 3,
    image: SmartWatch,
    cardName: "SmartWatch"
  },
  {
    id: 4,
    image: Camera,
    cardName: "Camera"
  },
  {
    id: 5,
    image: HeadPhones,
    cardName: "HeadPhones"
  },{
    id: 6,
    image: GamingImage,
    cardName: "Gaming"
  }
]

function Category() {
  return (
    <div className="mt-20 max-w-[1170px] mx-auto flex flex-col gap-[60px] mb-[70px]">
      <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
            <p className="font-poppins text-base leading-5 font-semibold text-[#DB4444]">
              Categories
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-[87px]">
              <p className="font-inter text-4xl leading-[48px] font-semibold ">
                Browse By Category
              </p>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <Image src={LeftArrow} alt=""></Image>
              <Image src={RightArrow} alt=""></Image>
            </div>
          </div>
        </div>

        <div className="flex gap-[30px]">
          {data.map((element) => {
            return(
              <CategoryCards 
              key={element.id}
              image = {element.image}
              cardName={element.cardName}
              />
            )
          })}
        </div>
        
      </div>
  )
}

export default Category