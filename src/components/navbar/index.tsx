import Image from "next/image";
import logo from "@public/img/logo.svg";
import { useState } from "react";
const Navbar = () => {
  useState;
  const [menu, setMenu] = useState(false);
  return (
    <nav className="mt-8">
      <div className=" relative flex items-center justify-between">
        <div>
          <Image alt="logo" src={logo} className="transition transform delay-75  ease-out hover:scale-110" />
        </div>
        <div className=" hidden md:flex space-x-6 ">
          <a className="hover:scale-110 hover:bg-slate-200/90 rounded-xl px-2 transition transform delay-75  ease-in ">
            {" "}
            Product
          </a>
          <a className="hover:scale-110 hover:bg-slate-200/90 rounded-xl px-2 transition transform delay-75  ease-out ">
            About
          </a>
          <a className="hover:scale-110 hover:bg-slate-200/90 rounded-xl px-2 transition transform delay-75  ease-out ">
            Career
          </a>
          <a className="hover:scale-110 hover:bg-slate-200/90 rounded-xl px-2 transition transform delay-75  ease-out ">
            Community
          </a>
        </div>
        <a className=" hidden md:block px-3 py-1 bg-orange-500 rounded-full hover:bg-orange-500/80 text-white hover:scale-110 transition transform delay-75  ease-out ">
          Get Started
        </a>
        {menu ? (
          <div className="w-6 h-6  md:hidden transform rotate-45" onClick={()=>setMenu(!menu)}  >
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-900"></div>
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-900"></div>
          </div>
        ) : (
          <div className="  md:hidden flex flex-col gap-1" onClick={()=>setMenu(!menu)}>
            <div className="bg-black w-7 h-1"></div>
            <div className="bg-black w-7 h-1"></div>
            <div className="bg-black w-7 h-1"></div>
          </div>
        )}
      </div>
      {menu &&   <div className="absolute md:hidden max-w-sm px-16 transition transform delay-100 ease-out right-4 flex flex-col gap-2  bg-gray-100 mt-2 py-6">
        <a> Pricing </a>
        <a> Product </a>
        <a> Services </a>
        <a> Blog </a>
      </div>}
     
    </nav>
  );
};

export default Navbar;
