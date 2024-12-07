import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SignupImage from "../../../public/images/SignUp Image.png";

function Login() {
  return (
    <div className="pt-[60px] pb-[140px] flex gap-[129px]">
      <div>
        <Image src={SignupImage} alt=""></Image>
      </div>

      <div className="flex flex-col gap-12 py-[125.5px]">
        <div className="flex flex-col gap-6">
          <p className="font-inter font-medium text-4xl leading-[30px] tracking-[0.04em]">
          Log in to Exclusive
          </p>
          <p className="font-poppins text-base font-normal">
          Enter your details below
          </p>
        </div>

        <div >
          <form action="" className="flex flex-col gap-10 font-poppins">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b-2 py-2 px-3 "
            />
            <input
              type="text"
              placeholder="Password"
              className="border-b-2 py-2 px-3 "
            />
            <div className='flex gap-[87px] items-center font-poppins'>
            <button className="bg-[#DB4444] text-white py-4 px-12 font-medium rounded ">Log In</button>
            <Link href={"#"} className='text-[#DB4444]'>Forget Password?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login