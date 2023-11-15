import React from "react";
import { testinomial } from "@/utils/ui-data";
import Image from "next/image";
const Testinomials = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 md:px-0">
      <div className="flex flex-col items-center space-y-24 px-4 md:px-10">
        <h2 className="text-4xl font-bold text-center">
          {" "}
          What's different about Manage?
        </h2>
        <div className="flex flex-col md:flex-row mt-24 md:space-x-6 space-y-6 md:space-y-0">
          {testinomial.map((data, idx) => (
            <div className="flex flex-col items-center rounded-lg bg-slate-100 hover:bg-gradient-to-r from-gray-400 to-slate-200 p-6 space-y-6 md:w-1/3 hover:scale-105 transition transform delay-75  ease-out">
              <Image src={data.img} alt="user" className="w-16 -mt-10" />
              <h5 className="text-center text-xl font-semibold">
                {data.name}{" "}
              </h5>
              <p className=" text-center text-gray-700">{data.bio}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 hover:scale-110 transition transform delay-75  ease-out">
          <a className="px-6 py-3 bg-orange-500 rounded-full hover:bg-orange-500/80 text-white ">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testinomials;
