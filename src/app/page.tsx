import Image from "next/image";
import HomeImage from "../../public/images/Homepage- upperImage.png";
import DropDown from "../../public/icons/DropDown.png";
import Time from "../../public/images/time Image.png";
import LeftArrow from "../../public/icons/Fill With Left Arrow.png";
import RightArrow from "../../public/icons/Fill with Right Arrow.png";
import Cards from "@/components/Cards/cards";
import GameRemote from "../../public/images/Game Remote.png";
import Keyboard from "../../public/images/Keyboard.png";
import Lcd from "../../public/images/LCD.png";
import Chair from "../../public/images/Chair.png";
import Line from "@/components/Line/Line";
import Category from "@/components/Category/Category";
import Products from "@/components/SellingProducts/Products";
import MusicExperience from "@/components/MusicExperience/MusicExperience";
import Explore from "@/components/Explore/Explore";
import Arrival from "@/components/NewArrival/Arrival";
import Service from "@/components/CustomerService/Service";

const data = [
  {
    id: 1,
    discount: "-40%",
    image: GameRemote,
    name: "HAVIT HV-G92 Gamepad",
    originalPrice: "$160",
    discountedPrice: "$120",
    soldOut: "(88)",
    imageWidth: 172,
    imageHeight: 152,
  },
  {
    id: 2,
    discount: "-35%",
    image: Keyboard,
    name: "AK-900 Wired Keyboard",
    originalPrice: "$1160",
    discountedPrice: "$960",
    soldOut: "(75)",
    imageWidth: 191,
    imageHeight: 101,
  },
  {
    id: 3,
    discount: "-30%",
    image: Lcd,
    name: "IPS LCD Gaming Monitor",
    originalPrice: "$400",
    discountedPrice: "$370",
    soldOut: "(99)",
    imageWidth: 170,
    imageHeight: 129,
  },
  {
    id: 4,
    discount: "-25%",
    image: Chair,
    name: "S-Series Comfort Chair ",
    originalPrice: "$400",
    discountedPrice: "$375",
    soldOut: "(99)",
    imageWidth: 107,
    imageHeight: 180,
  },
];

export default function Home() {
  return (
    <div>

    <div className="w-[1440px] mx-auto">
      <div className="max-w-[1170px] mx-auto flex mb-[140px] ">
        <div className="flex flex-col gap-4 pt-10">
          <div className="flex gap-[51px] items-center">
            <p className="font-poppins text-base font-normal">
              Woman&apos;s Fashion
            </p>
            <Image src={DropDown} alt="DropDown"></Image>
          </div>
          <div className="flex gap-[81px] items-center">
            <p className="font-poppins text-base font-normal">Man&apos;s Fashion</p>
            <Image src={DropDown} alt="DropDown"></Image>
          </div>
          <p className="font-poppins text-base font-normal">Electronics</p>
          <p className="font-poppins text-base font-normal">Home & Lifestyle</p>
          <p className="font-poppins text-base font-normal">Medicine</p>
          <p className="font-poppins text-base font-normal">Sports & Outdoor</p>
          <p className="font-poppins text-base font-normal">Baby’s & Toys</p>
          <p className="font-poppins text-base font-normal">Groceries & Pets</p>
          <p className="font-poppins text-base font-normal">Health & Beauty</p>
        </div>
        <div className="line h-auto border opacity-30 border-[#000000] ms-4"></div>
        <div className="pt-10 ms-[35px]">
          <Image src={HomeImage} alt=""></Image>
        </div>
      </div>

      <div className="max-w-[1170px] mx-auto mb-[60px] flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
            <p className="font-poppins text-base leading-5 font-semibold text-[#DB4444]">
              Today’s
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-[87px]">
              <p className="font-inter text-4xl leading-[48px] font-semibold ">
                Flash Sales
              </p>
              <Image src={Time} alt="TimeImage"></Image>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <Image src={LeftArrow} alt=""></Image>
              <Image src={RightArrow} alt=""></Image>
            </div>
          </div>
        </div>

        <div className="flex gap-[30px]">
          {data.map((element) => {
            return (
              <Cards
              key={element.id}
                discount={element.discount}
                image={element.image}
                name={element.name}
                discountedPrice={element.discountedPrice}
                originalPrice={element.originalPrice}
                soldOut={element.soldOut}
                imageWidth={element.imageWidth}
                imageHeight={element.imageHeight}
              />
            );
          })}    
        </div>
        <div className="flex justify-center mt-[60px]">
            <button className="bg-[#DB4444] py-4 px-12 rounded text-white font-poppins font-medium">
              View All Products
            </button>
          </div>
      </div>

      <div>
        <Line />
      </div>

      <div>
        <Category />
      </div>

      <div>
        <Line />
      </div>

      <div className="mt-[70px]">
        <Products />
      </div>

        {/**Music Experience Section*/}
      <div>
        <MusicExperience />
      </div>

        {/**Explore our Products */}
      <div>
        <Explore />
      </div>

      < Arrival />

      < Service />
    </div>
    </div>
  );
}
