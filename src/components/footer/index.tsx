import Image from "next/image";
import React from "react";
import logo from "@public/img/logo-white.svg";
import { socialLogo } from "@/utils/ui-data";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="  flex flex-col-reverse justify-between md:flex-row py-10  mx-auto space-y-8 md:space-y-0  max-w-7xl px-8">
        <div className="flex flex-col-reverse items-center  space-y-12  md:flex-col md:items-start ma-w-1/4">
          <div>
            <Image src={logo} className=" mt-5" alt="logo" />
          </div>
          <div className="flex justify-center space-x-4">
            {socialLogo.map((data) => (
              <a>
                {" "}
                <Image src={data} alt="social" className="h-8 " />{" "}
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-around  space-x-32">
          <div className="flex flex-col space-y-3 text-white ">
            <a> Home</a>
            <a>Pricing</a>
            <a> Products</a>
            <a>About</a>
          </div>
          <div className="flex flex-col space-y-3 text-white ">
            <a> Home</a>
            <a>Pricing</a>
            <a> Products</a>
            <a>About</a>
          </div>
        </div>
        <div className="flex flex-col justify-between  ">
          <div className="flex space-x-3 w-full md:max-w-xs ">
            <input
              className="flex-1 rounded-full focus:outline-none px-4"
              placeholder="Updated in your inbox"
            />
            <button className="px-6 py-2 rounded-full text-white bg-orange-600 focus:outline-none hover:bg-orange-400 ">
              {" "}
              Go{" "}
            </button>
          </div>
          <div className="text-white/60 hidden md:block text-xl">
            Copyright @ 2023. All Rights reserved.{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
