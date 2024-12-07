import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
    image: StaticImageData;
    heading: string;
    details: string;
}

const Card = (props: CardProps) => {

    const {image, heading, details} = props;

  return (
    <div className="">
      <div className="card border rounded w-[270px] h-[230px] border-[#0000004D] py-[30px] px-[50px] flex flex-col gap-6 justify-center items-center hover:bg-[#DB4444] cursor-pointer hover:text-white">
        <Image src={image} alt=""></Image>
        <div className="flex flex-col gap-3">
          <p className="font-inter fomt-bold text-[32px] leading-[30px] tracking-[4%] text-center">{heading} </p>
          <p className="font-poppins text-base font-normal text-center">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
