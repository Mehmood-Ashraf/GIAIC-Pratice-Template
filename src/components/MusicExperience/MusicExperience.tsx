import React from "react";
import Image from "next/image";
import MusicImage from "../../../public/images/Music Experience Image.png";
import elipse from "../../../public/images/Ellipse 23.png";

function MusicExperience() {
  return (
    <div className="max-w-[1170px] mx-auto bg-[#000000] mb-[71px] flex">
      <div className="py-[69px] px-[56px] pr-2 flex flex-col gap-10 w-1/2">
        <div className="flex flex-col gap-8">
          <p className="text-[#00FF66] text-base leading-5 font-semibold font-poppins">
            Categories
          </p>
          <p className="text-5xl font-semibold font-inter tracking-[0.04em] text-white">
            Enhance Your Music Experience
          </p>
          <div className="flex gap-6">
            <div className="bg-white rounded-[50%] font-poppins flex justify-center items-center flex-col w-[62px] h-[62px]">
              <p className="text-base leading-5 font-semibold">23</p>
              <p className="text-[11px] font-normal leading-[18px]">Hours</p>
            </div>
            <div className="bg-white rounded-[50%] font-poppins flex justify-center items-center flex-col w-[62px] h-[62px]">
              <p className="text-base leading-5 font-semibold">5</p>
              <p className="text-[11px] font-normal leading-[18px]">Days</p>
            </div>
            <div className="bg-white rounded-[50%] font-poppins flex justify-center items-center flex-col w-[62px] h-[62px]">
              <p className="text-base leading-5 font-semibold">59</p>
              <p className="text-[11px] font-normal leading-[18px]">Minutes</p>
            </div>
            <div className="bg-white rounded-[50%] font-poppins flex justify-center items-center flex-col w-[62px] h-[62px]">
              <p className="text-base leading-5 font-semibold">35</p>
              <p className="text-[11px] font-normal leading-[18px]">Seconds</p>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-[#00FF66] rounded py-4 px-12 text-white">Buy Now!</button>
        </div>
      </div>
      <div className="pr-11 flex justify-center items-center w-1/2 relative">
        {/* <div className='bg-[#D9D9D9] opacity-30 blur h-full w-full'></div> */}
        <Image src={elipse} alt="" className="w-[504px] h-[500px]"></Image>
        <Image src={MusicImage} alt="" className="w-[568px] h-[330px] absolute"></Image>
      </div>
    </div>
  );
}

export default MusicExperience;
