import React from "react";
import Image from "next/image";
import LeftArrow from "../../../public/icons/Fill With Left Arrow.png";
import RightArrow from "../../../public/icons/Fill with Right Arrow.png";
import ExploreImage1 from "../../../public/images/Explore/ExploreImage1.png";
import ExploreImage2 from "../../../public/images/Explore/ExploreImage2.png";
import ExploreImage3 from "../../../public/images/Explore/ExploreImage3.png";
import ExploreImage4 from "../../../public/images/Explore/ExploreImage4.webp";
import ExploreImage5 from "../../../public/images/Explore/ExploreImage5.png";
import ExploreImage6 from "../../../public/images/Explore/ExploreImage6.png";
import ExploreImage7 from "../../../public/images/Explore/ExploreImage7.png";
import ExploreImage8 from "../../../public/images/Explore/ExploreImage8.png";
import ExploreCard from "./ExploreCard";

const data = [
  {
    id: 1,
    image: ExploreImage1,
    name: "Breed Dry Dog Food",
    discountedPrice: "$100",
    soldOut: "(35)",
    imageWidth: 115,
    imageHeight: 180,
  },{
    id: 2,
    image: ExploreImage2,
    name: "CANON EOS DSLR Camera",
    discountedPrice: "$360",
    soldOut: "(95)",
    imageWidth: 146,
    imageHeight: 163,
  },{
    id: 3,
    image: ExploreImage3,
    name: "ASUS FHD Gaming Laptop",
    discountedPrice: "$700",
    soldOut: "(325)",
    imageWidth: 172,
    imageHeight: 180,
  },{
    id: 4,
    image: ExploreImage4,
    name: "Curology Product Set",
    discountedPrice: "$500",
    soldOut: "(145)",
    imageWidth: 172,
    imageHeight: 159,
  },{
    id: 5,
    discount: "NEW",
    image: ExploreImage5,
    name: "Kids Electric Car",
    discountedPrice: "$960",
    soldOut: "(65)",
    imageWidth: 180,
    imageHeight: 133,
  },{
    id: 6,
    image: ExploreImage6,
    name: "Jr. Zoom Soccer Cleats",
    discountedPrice: "$1160",
    soldOut: "(35)",
    imageWidth: 186,
    imageHeight: 164,
  },{
    id: 7,
    discount: "NEW",
    image: ExploreImage7,
    name: "GP11 Shooter USB Gamepad",
    discountedPrice: "$660",
    soldOut: "(55)",
    imageWidth: 178,
    imageHeight: 150,
  },{
    id: 8,
    image: ExploreImage8,
    name: "Quilted Satin Jacket",
    discountedPrice: "$660",
    soldOut: "(55)",
    imageWidth: 182,
    imageHeight: 176,
  },
];

function Explore() {
  return (
    <div className="max-w-[1170px] mx-auto mb-[140px] flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
          <p className="font-poppins text-base leading-5 font-semibold text-[#DB4444]">
            Our Products
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-[87px]">
            <p className="font-inter text-4xl leading-[48px] font-semibold ">
              Explore Our Products
            </p>
            {/* <Image src={Time} alt="TimeImage"></Image> */}
          </div>
          <div className="flex gap-2 cursor-pointer">
            <Image src={LeftArrow} alt=""></Image>
            <Image src={RightArrow} alt=""></Image>
          </div>
        </div>
      </div>

      {/* <div className="flex gap-[30px] flex-wrap"> */}
        {/* {data.map((element) => {
            return(
                <ExploreCard 
                image={element.image}
                name={element.name}
                discountedPrice={element.discountedPrice}
                soldOut={element.soldOut}
                imageHeight={element.imageHeight}
                imageWidth={element.imageWidth}
                />
            )
        })} */}
      {/* </div> */}

      <div className="flex flex-wrap gap-[30px]">
  {data.map((element, index) => (
    <div key={index} className="w-[calc(25%-30px)] min-w-[250px] flex-shrink-0">
      <ExploreCard
      key={element.id}
        discount = {element.discount} 
        image={element.image}
        name={element.name}
        discountedPrice={element.discountedPrice}
        soldOut={element.soldOut}
        imageHeight={element.imageHeight}
        imageWidth={element.imageWidth}
      />
    </div>
  ))}
</div>


      <div className="flex justify-center mt-[60px]">
        <button className="bg-[#DB4444] py-4 px-12 rounded text-white font-poppins font-medium">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default Explore;
