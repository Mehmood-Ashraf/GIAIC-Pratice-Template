import React from "react";
import Image from "next/image";
import EmailIcon from "../../../../public/icons/icon-send.png";
import QrCode from "../../../../public/images/Qrcode 1.png"
import GooglePlay from "../../../../public/images/GooglePlay button.png"
import AppStore from "../../../../public/images/download-appstore.png"
import FacebookIcon from "../../../../public/icons/Icon-Facebook.png"
import TwitterIcon from "../../../../public/icons/Icon-Twitter.png"
import InstagramIcon from "../../../../public/icons/icon-instagram.png"
import LinkedinIcon from "../../../../public/icons/Icon-Linkedin.png"
import CopyRightIcon from "../../../../public/icons/icon-copyright.png"

function Footer() {
  return (
    <div className="footer bg-[#000000] pt-20 flex flex-col gap-[60px]">
      <div className="main-content max-w-[1170px] mx-auto flex gap-[87px]">
        <div className="text-[#FAFAFA] flex flex-col gap-4">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl leading-6 font-bold">Exclusive</h1>
            <p className="font-poppins text-xl font-medium">Subscribe</p>
            <p className="font-poppins text-base font-normal whitespace-nowrap">
              Get 10% off your first order
            </p>
          </div>
          <div className="py-3 px-4 rounded-[4px] border-[1.5px] flex gap-8 items-center">
            <p className="text-base font-normal font-poppins opacity-40 whitespace-nowrap">
              Enter your email
            </p>
            <Image src={EmailIcon} alt="" className="w-5 h-[18px]"></Image>
          </div>
        </div>

        <div className="flex gap-[87px] text-[#FAFAFA] font-poppins">
          <div className="flex flex-col gap-6">
            <div className="text-xl font-medium">
              <p>Support</p>
            </div>
            <div className="flex flex-col gap-4 text-base font-normal font-poppins">
              <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-xl font-medium">
              <p>Account</p>
            </div>
            <div className="flex flex-col gap-4 text-base font-normal font-poppins">
              <p>My Account</p>
              <p className="whitespace-nowrap">Login / Register</p>
              <p>Cart</p>
              <p>Wishlist</p>
              <p>Shop</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-xl font-medium">
              <p className="whitespace-nowrap">Quick Link</p>
            </div>
            <div className="flex flex-col gap-4 text-base font-normal font-poppins">
              <p className="whitespace-nowrap">Privacy Policy</p>
              <p className="whitespace-nowrap">Terms Of Use</p>
              <p>FAQ</p>
              <p>Contact</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-[#FAFAFA]">
          <div className="text-xl font-medium">
            <p>Download App</p>
          </div>

          <div className="flex flex-col gap-2">
              <p className="text-xs leading-[18px] font-medium opacity-70 whitespace-nowrap">Save $3 with App New User Only</p>
            <div className="flex gap-2">
                <div className="">
                    <Image src={QrCode} alt=""></Image>
                </div>
                <div className="flex flex-col gap-1">
                    <Image src={GooglePlay} alt=""></Image>
                    <Image src={AppStore} alt=""></Image>
                </div>
            </div>
          </div>

          <div className="soc-media flex gap-6">
            <Image src={FacebookIcon} alt=""></Image>
            <Image src={TwitterIcon} alt=""></Image>
            <Image src={InstagramIcon} alt=""></Image>
            <Image src={LinkedinIcon} alt=""></Image>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-opacity-40 border-[#FFFFFF] opacity-50 flex pt-4 justify-center items-center font-poppins">
        <div className="copyright text-[#FFFFFF] flex gap-3 items-center mb-6">
            <Image src={CopyRightIcon} alt="" className="w-5 h-5"></Image>
            <p className="text-base font-normal">Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
