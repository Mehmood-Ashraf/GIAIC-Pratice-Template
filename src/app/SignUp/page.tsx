import React from "react";
import Image from "next/image";
import SignupImage from "../../../public/images/SignUp Image.png";
import GoogleIcon from "../../../public/icons/Icon-Google.png"
import Link from "next/link";

function SignUp() {
  return (
    <div className="pt-[60px] pb-[140px] flex gap-[129px]">
      <div>
        <Image src={SignupImage} alt=""></Image>
      </div>

      <div className="flex flex-col gap-12 py-[125.5px]">
        <div className="flex flex-col gap-6">
          <p className="font-inter font-medium text-4xl leading-[30px] tracking-[0.04em]">
            Create an account
          </p>
          <p className="font-poppins text-base font-normal">
            Enter your details below
          </p>
        </div>

        <div >
          <form action="" className="flex flex-col gap-10 font-poppins">
            <input
              type="text"
              placeholder="Name"
              className="border-b-2 py-2 px-3 "
            />
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
            <button className="bg-[#DB4444] text-white py-4 px-[122px] rounded font-medium ">Create Account</button>
          </form>
        </div>

        <div className="mt-4 flex flex-col gap-8">
          <button className="py-4 px-[86px] border rounded border-[#00000066] flex gap-4">
          <Image src={GoogleIcon} alt=""></Image>
            Sign up with Google
          </button>
          <div className="opacity-70 flex gap-4 justify-center">
          <p className="">Already have account?</p>
          <Link href={"Login"} className="font-medium border-b-2 border-opacity-50">Log in</Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SignUp;
