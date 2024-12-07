import React from "react";
import Service from "@/components/CustomerService/Service";
import Link from "next/link";
import Image from "next/image";
import SideImage from "../../../public/images/About/Side Image.png";
import Card from "@/components/About/card";
import Image1 from "../../../public/images/About/Services.png"
import Image2 from "../../../public/images/About/Services (1).png"
import Image3 from "../../../public/images/About/Services (2).png"
import DesignationCard from "@/components/About/DesignationCard";
import TomImage from "../../../public/images/About/image 46.png"
import WillImage from "../../../public/images/About/image 47.png"
import EmmaImage from "../../../public/images/About/image 51.png"
import DotFrame from "../../../public/images/About/Frame 883.png"

const data = [
  {
    id: 1,
    image: Image1,
    heading: "10.5K",
    details: "Sellers active our site",
  }
  ,{
    id: 2,
    image: Image2,
    heading: "45.5K",
    details: "Customer active in our site",
  },{
    id: 3,
    image: Image3,
    heading: "25K",
    details: "Anual gross sale in our site",
  }
]

const desCardData = [
  {
    id:1,
    image: TomImage,
    name: "Tom Cruise",
    designation: "Founder & Chairman",
    imageWidth: 236,
    imageHeight: 391
  },{
    id: 2,
    image: EmmaImage,
    name: "Emma Watson",
    designation: "Managing Director",
    imageWidth: 294,
    imageHeight : 397
  },{
    id: 3,
    image: WillImage,
    name: "Will Smith",
    designation: "Product Designer",
    imageWidth: 326,
    imageHeight : 392
  }
]


const About = () => {
  return (
    <div className="">
      <div className="max-w-[1170px] mb-[42px] mx-auto mt-20">
        <div className="flex gap-3">
          <Link
            href={"/"}
            className="font-poppins text-sm font-normal leading-[21px] opacity-50 hover:opacity-100"
          >
            Home
          </Link>
          <div className="line opacity-50 border border-[#00000080] rotate-[-150.05deg]"></div>
          <Link
            href={"#"}
            className="font-poppins text-sm font-normal leading-[21px] text-[#000000]"
          >
            About
          </Link>
        </div>
      </div>

      <div className="flex gap-[75px] relative mb-[140px]">
        <div className="my-[137px] ml-[135px] flex flex-col gap-10 w-[506px]">
          <p className="font-inter text-[54px] leading-[64px] font-semibold tracking-[6%]">
            Our Story
          </p>
          <div className="flex flex-col gap-6">
            <p className="font-poppins font-normal text-base leading-[26px]">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="font-poppins font-normal text-base leading-[26px]">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <div className="w-[705px] h-[609px] border rounded-tl rounded-bl absolute
         right-0">
          <Image src={SideImage} alt=""></Image>
        </div>
      </div>

      <div className="max-w-[1170px] mx-auto flex flex-col gap-[140px]">
        <div className="w-full flex gap-[30px]">

      {data.map((item) => {
        return(
          <Card
          key = {item.id}
          image = {item.image} 
          heading = {item.heading}
          details = {item.details}
          />
        )
      })}
        </div>

        <div className="flex flex-col gap-10">
        <div className="w-full flex gap-[30px]">
        {desCardData.map((items) => {
          return(
            <DesignationCard 
            key={items.id}
            image={items.image}
            name={items.name}
            designation={items.designation}
            imageHeight={items.imageHeight}
            imageWidth={items.imageWidth}
            />
          )
        })}
        </div>
        <div className="flex justify-center items-center">
          <Image src={DotFrame} alt=""></Image>
        </div>
        </div>
        

        
    
      <Service />

      </div>

    </div>
  );
};

export default About;
