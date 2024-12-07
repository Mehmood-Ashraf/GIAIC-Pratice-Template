import React from "react";
import Image from "next/image";
import image1 from "../../../public/images/New Arrival/NewArrival1.png"
import image2 from "../../../public/images/New Arrival/NewArrival2.png"
import image3 from "../../../public/images/New Arrival/NewArrival3.png"
import image4 from "../../../public/images/New Arrival/NewArrival4.png"

function Arrival() {
  return (
    <div className="max-w-[1170px] mx-auto mb-[140px] flex flex-col gap-[60px]">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
          <p className="font-poppins text-base leading-5 font-semibold text-[#DB4444]">
            Featured
          </p>
        </div>

        <p className="font-inter text-4xl leading-[48px] font-semibold ">
          New Arrival
        </p>
      </div>

      <div className="flex gap-[30px]">
        <div className="bg-[#000000] rounded pt-[89px] px-[30px] relative">
            <div className="absolute flex flex-col gap-4 text-white bottom-8 w-[242px] h-[122px]">
                <p className="font-inter font-semibold text-2xl leading-6">PlayStation 5</p>
                <p className="font-poppins font-normal text-sm">Black and White version of the PS5 coming out on sale.</p>
                <div>
                <button className="font-medium font-poppins text-base border-b hover:font-bold cursor-pointer">Shop Now</button>
                </div>
            </div>
            <Image src={image1} alt=""></Image>
        </div>

        <div className="flex flex-col gap-8">
            <div className="bg-[#0D0D0D] rounded relative pl-[138px]">
            <div className="absolute flex flex-col gap-4 text-white bottom-8 w-[255px] h-[122px] left-6">
                <p className="font-inter font-semibold text-2xl leading-6">Women’s Collections</p>
                <p className="font-poppins font-normal text-sm leading-[21px]">Featured woman collections that give you another vibe.</p>
                <div>
                <button className="font-medium font-poppins text-base border-b hover:font-bold cursor-pointer">Shop Now</button>
                </div>
            </div>
            <Image src={image2} alt=""></Image>
            </div>

            <div className="flex gap-[30px]">
                <div className="bg-[#000000] rounded py-[31px] px-[40px] relative">
                <div className="absolute flex flex-col gap-2 text-white bottom-6 w-[191px] h-[85px] left-6">
                <p className="font-inter font-semibold text-2xl leading-6">Speakers</p>
                <p className="font-poppins font-normal text-sm">Amazon wireless speakers</p>
                <div>
                <button className="font-medium font-poppins text-base border-b hover:font-bold cursor-pointer">Shop Now</button>
                </div>
            </div>
            <div className="w-[210px] h-[222px] flex items-center justify-center">
            <Image src={image3} alt=""></Image>
            </div>
                </div>
                <div className="bg-[#000000] rounded py-[31px] px-[40px] relative">
                <div className="absolute flex flex-col gap-2 text-white bottom-6 w-[191px] h-[85px] left-6">
                <p className="font-inter font-semibold text-2xl leading-6">Perfume</p>
                <p className="font-poppins font-normal text-sm">GUCCI INTENSE OUD EDP</p>
                <div>
                <button className="font-medium font-poppins text-base border-b hover:font-bold cursor-pointer">Shop Now</button>
                </div>
            </div>
            <div className="w-[210px] h-[222px] flex items-center justify-center">
            <Image src={image4} alt=""></Image>
            </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Arrival;
