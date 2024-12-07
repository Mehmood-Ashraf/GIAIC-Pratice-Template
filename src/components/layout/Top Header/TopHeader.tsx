import Link from "next/link"
import Image from "next/image"
import Vector from "../../../../public/icons/TopHeader vector.png"

function TopHeader() {
  return (
    <div className="top-header bg-black text-[#FAFAFA] h-12 font-poppins py-2 px-2 sm:px-4 xl:px-0 flex justify-center items-center">
            <div className="topHeaderContent max-w-[1170px] mx-auto flex gap-2 w-[1170px] justify-center items-center relative">
                <p className="text-xs sm:text-sm font-normal leading-[21px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <Link href={"#"} className="underline hidden sm:inline sm:text-sm leading-6 font-semibold">
                    ShopNow
                </Link>
                <div className=" justify-center items-center hidden md:flex absolute right-0">
                    <p className="text-sm font-normal leading-[21px]">English</p>
                    <div className="w-6 h-6 flex justify-center items-center">
                    <Image src={Vector} alt=""></Image>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TopHeader