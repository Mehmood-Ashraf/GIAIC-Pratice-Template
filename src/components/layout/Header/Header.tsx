import Image from "next/image";
import Link from "next/link";
import HeartVector from "../../../../public/icons/Heart Vector.png"
import CartVector from "../../../../public/icons/Cart Vector.png"
import InputVector from "../../../../public/icons/InputVector.png";

function Header() {
  return (
    <div className="main bg-white md:pt-10 md:pb-4 border-b-[0.5px] py-5 border-[#000000] border-opacity-30">
      <div className="max-w-[1170px] mx-auto h-[38px] flex lg:justify-between justify-around px-2 lg-px-0">
        <div className="logo/link md:flex xl:gap-[190px] lg:gap-[120px] gap-10 items-center hidden">
          <div className="logo text-2xl font-bold tracking-[0.03em]">
            <h1>Exclusive</h1>
          </div>
          <div className="links font-poppins lg:gap-12 gap-4 items-center md:flex hidden">
            <Link href={"/"} className="text-base font-normal hover:underline whitespace-nowrap">
              Home
            </Link>
            <Link href={"#"} className="text-base font-normal hover:underline whitespace-nowrap">
              Contact
            </Link>
            <Link href={"About"} className="text-base font-normal hover:underline whitespace-nowrap">
              About
            </Link>
            <Link href={"SignUp"} className="text-base font-normal hover:underline whitespace-nowrap">
              Sign Up
            </Link>
          </div>
        </div>

        <div className="input/icons flex gap-6 items-center w-full md:justify-center justify-between">
        <div className="logo text-2xl font-bold tracking-[0.03em] block md:hidden">
            <h1>Exclusive</h1>
          </div>
          <div className="input text-xs leading-[18px] md:w-auto w-[inherit] font-normal flex items-center py-[7px] bg-[#F5F5F5] text-[#000000] opacity-50 rounded-[4px] gap-[34px] pr-3 ps-5 justify-between">
            <p>What are you looking for?</p>
            <Image src={InputVector} alt="" className="w-4 h-4"></Image>
          </div>
          <div className="icons flex lg:gap-4 gap-2">
            <button className="w-8 h-8">
            <Image src={HeartVector} alt="" className="w-5 h-[17.83px]"></Image>
            </button>
            <button className="w-8 h-8">
            <Image src={CartVector} alt="" className="h-[32px]"></Image>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
